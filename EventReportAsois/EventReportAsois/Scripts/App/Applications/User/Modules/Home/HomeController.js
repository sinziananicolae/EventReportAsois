(function () {
    "use strict";

    angular.module("app.admin")
        .controller("HomeController", [
            "$scope", "$location", "$timeout", "$http", "LoggerModules", "API", "uiGmapIsReady", "CategoryService", "SeverityService", "IssueService", _BaseController.extend({

                _API: null,
                _IsReady: null,
                _CategoryService: null,
                _SeverityService: null,
                _IssueService: null,

                /* @Override */
                init: function ($scope, $location, $timeout, $http, LoggerModules, API, IsReady, CategoryService, SeverityService, IssueService) {
                    this.$scope = $scope;
                    this.$location = $location;
                    this.$timeout = $timeout;
                    this.$http = $http;

                    this._API = API;
                    this._IsReady = IsReady;
                    this._CategoryService = CategoryService;
                    this._SeverityService = SeverityService;
                    this._IssueService = IssueService;

                    this._super($scope, LoggerModules.HomeController);
                },

                /* @Override */
                defineListeners: function () {
                    this._super();
                },

                /* @Override */
                defineScope: function () {
                    var _scope = this.$scope, _this = this;

                    this._Log.info("Controller loaded!");

                    _scope.control = {};
                    _this._initGMaps();

                    _this._getCategories();
                    _this._getSeverities();
                    _this._getAllIssues();

                    _scope.setSubcategories = _this._setSubcategories.bind(this);
                    _scope.saveIssue = _this._saveIssue.bind(this);
                    _scope.setFile = _this._setFile.bind(this);
                    _scope.uploadFile = _this._uploadFile.bind(this);
                },

                _getCategories: function () {
                    var _scope = this.$scope, _this = this;

                    _this._CategoryService.get(function (response) {
                        _scope.categories = response.data;
                        _this._Log.info("Categories:", response);
                    });
                },

                _getSeverities: function () {
                    var _scope = this.$scope, _this = this;

                    _this._SeverityService.get(function (response) {
                        _scope.severities = response.data;
                        _this._Log.info("Severities:", response);
                    });
                },

                _setSubcategories: function (categoryId) {
                    var _scope = this.$scope, _this = this;

                    _scope.subCategories = _.findWhere(_scope.categories, { Id: categoryId }).Subcategories;
                },

                _initGMaps: function () {
                    var _scope = this.$scope, _this = this;

                    function getLocation() {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(showPosition);
                        } else {
                            toastr.warning("Geolocation is not supported by this browser.");
                        }
                    }

                    function showPosition(position, zoom) {
                        _scope.map = {
                            center: { latitude: position.coords.latitude, longitude: position.coords.longitude },
                            zoom: zoom ? zoom : 16,
                            control: {},
                            events: {
                                click: function (mapModel, eventName, originalEventArgs) {
                                    var e = originalEventArgs[0];

                                    var location = {
                                        latitude: e.latLng.G,
                                        longitude: e.latLng.K
                                    };
                                    _this._placeMarker(location);
                                }
                            },
                            marker: {
                                id: 0,
                                coords: {
                                    latitude: position.coords.latitude,
                                    longitude: position.coords.longitude
                                },
                                options: { draggable: true },
                                events: {
                                    dragend: function (marker, eventName, args) {
                                        var lat = marker.getPosition().lat();
                                        var lon = marker.getPosition().lng();
                                    }
                                }
                            }
                        };

                        if (_.isUndefined(zoom)) {
                            _this.$timeout(function () { _scope.$apply(); }, 100);
                        }
                    }

                    showPosition({ coords: { latitude: 44.43020613600401, longitude: 26.103719943652322 } }, 12);
                    _this.$timeout(function () { getLocation(); }, 100);

                    var events = {
                        places_changed: function (searchBox) {
                            var place = searchBox.getPlaces();
                            if (!place || place === "undefined" || place.length === 0) {
                                return;
                            }
                            var location = {
                                latitude: place[0].geometry.location.lat(),
                                longitude: place[0].geometry.location.lng(),
                                address: place[0].formatted_address
                            };
                            _this._placeMarker(location);
                        }
                    };
                    _scope.searchbox = { template: "searchBox.template.html", events: events, parentdiv: "searchBoxParent" };

                },

                _placeMarker: function (location) {
                    var _scope = this.$scope;

                    _scope.map.marker.coords.latitude = location.latitude;
                    _scope.map.marker.coords.longitude = location.longitude;
                    _scope.map.marker.address = location.address;

                    //refresh map
                    _scope.control.refresh({ latitude: _scope.map.marker.coords.latitude, longitude: _scope.map.marker.coords.longitude });
                },

                _saveIssue: function (currentIssue) {
                    var _scope = this.$scope, _this = this;

                    currentIssue.MapLat = _scope.map.marker.coords.latitude;
                    currentIssue.MapLng = _scope.map.marker.coords.longitude;

                    _this._IssueService.create(currentIssue, function (response) {
                        _this._Log.info("Saved:", response);

                        _this._uploadFile(response.data.Id);
                    });
                },

                _uploadFile: function (id) {
                    var _this = this;

                    console.log('Uploading file!');
                    var uploadItem = document.getElementById('file').files[0];
                    var fd = new FormData();
                    fd.append('file', uploadItem);
                    if (uploadItem) {
                        _this.$http.post("Home/UploadResource/" + id, fd, {
                            transformRequest: angular.identity,
                            headers: { 'Content-Type': undefined }
                        }).success(function (data, status, headers, config) {
                            console.log("success");
                        }).error(function () {
                            console.log("error");
                        });
                    }
                },

                _setFile: function (element) {
                    var _scope = this.$scope, _this = this;

                    _scope.currentIssue.Image = element.files[0];
                },

                _getAllIssues: function () {
                    var _scope = this.$scope, _this = this;

                    _this._IssueService.get(function (response) {
                        _this._Log.info("Saved:", response);

                        _scope.allIssues = response.data;
                        _scope.markers = [];

                        _.each(_scope.allIssues, function (marker) {
                            _scope.markers.push(
                                {
                                    id: marker.Id,
                                    latitude: marker.MapLat,
                                    longitude: marker.MapLng,
                                    title: marker.Title,
                                    description: marker.Description,
                                    startDate: marker.TimeStamp,
                                    show: false,
                                    icon: "Content/Images/Maps/recycle.png"
                                });
                        });
                    });
                },

                /* @Override */
                destroy: function () {
                    // remove listeners here
                }
            })
        ]);
}());