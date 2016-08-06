using System.Web.Optimization;

namespace EventReportAsois
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            #region AngularJS
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/Core/AngularJS/angular.js",
                      "~/Scripts/Core/AngularJS/angular-animate.js",
                      "~/Scripts/Core/AngularJS/angular-cookies.js",
                      "~/Scripts/Core/AngularJS/angular-resource.js",
                      "~/Scripts/Core/AngularJS/angular-route.js",
                      "~/Scripts/Core/AngularJS/angular-sanitize.js",
                      "~/Scripts/Core/AngularJS/angular-simple-logger.js",
                      "~/Scripts/Core/AngularJS/angular-google-maps.js"));
            #endregion

            #region Bootstrap
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/Core/Bootstrap/bootstrap.js",
                      "~/Scripts/Core/Bootstrap/ui-bootstrap-tpls-0.14.3.js"));

            bundles.Add(new StyleBundle("~/Content/bootstrap-css").Include(
                      "~/Content/Core/Bootstrap/css/bootstrap.css",
                      "~/Content/Core/Bootstrap/css/bootstrap-theme.css"));
            #endregion

            #region Class
            bundles.Add(new ScriptBundle("~/bundles/class").Include(
                    "~/Scripts/Core/Class/class.js",
                    "~/Scripts/Core/Class/namespace.js"));
            #endregion

            #region FontAwesome
            bundles.Add(new StyleBundle("~/Content/font-awesome-css").Include(
                      "~/Content/Core/FontAwesome/css/font-awesome.css"));
            #endregion

            #region JQuery
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/Core/JQuery/jquery-1.11.3.js",
                        "~/Scripts/Core/JQuery/jquery.validate.js",
                        "~/Scripts/Core/JQuery/jquery-ui.js"));

            bundles.Add(new StyleBundle("~/Content/jquery-ui-css").Include(
                     "~/Content/Core/JQuery-UI/jquery-ui.css",
                     "~/Content/Core/JQuery-UI/jquery-ui.structure.css",
                     "~/Content/Core/JQuery-UI/jquery-ui.theme.css"));
            #endregion

            #region Lodash
            bundles.Add(new ScriptBundle("~/bundles/lodash").Include(
                    "~/Scripts/Core/Lodash/lodash.js"));
            #endregion

            #region Logger
            bundles.Add(new ScriptBundle("~/bundles/logger").Include(
                    "~/Scripts/Core/Logger/logger.js"));
            #endregion

            #region SlimScroll
            bundles.Add(new ScriptBundle("~/bundles/slimScroll").Include(
                    "~/Scripts/Core/SlimScroll/jquery.slimscroll.js"));
            #endregion

            #region Toastr
            bundles.Add(new ScriptBundle("~/bundles/toastr").Include(
                      "~/Scripts/Core/Toastr/toastr.js"));

            bundles.Add(new StyleBundle("~/Content/toastr-css").Include(
                      "~/Content/Core/Toastr/toastr.css"));
            #endregion

            #region Underscore
            bundles.Add(new ScriptBundle("~/bundles/underscore").Include(
                     "~/Scripts/Core/Underscore/underscore.js"));
            #endregion

            #region Theme
            bundles.Add(new StyleBundle("~/Content/theme-css").Include(
                     "~/Content/Theme/Theme.css",
                     "~/Content/Theme/skins/skin-green.css"));
            #endregion

            #region Application
            bundles.Add(new StyleBundle("~/Content/app-css").Include(
                     "~/Content/App/Site.css"));

            bundles.Add(new ScriptBundle("~/bundles/app-common").Include(
                     "~/Scripts/App/Components/BaseController.js",
                     "~/Scripts/App/Components/DOMHelpers.js",
                     "~/Scripts/App/Components/EventDispatcher.js",
                     "~/Scripts/App/Components/httpRequestTracker.js",
                     "~/Scripts/App/Common/Directives/directives.js",
                     "~/Scripts/App/Common/Filters/filters.js",
                     "~/Scripts/Theme/custom.js"));

            bundles.Add(new ScriptBundle("~/bundles/app-user").Include(
                    "~/Scripts/App/Applications/User/app.js",
                    "~/Scripts/App/Applications/User/config.js",
                    "~/Scripts/App/Applications/User/routes.js",
                    "~/Scripts/App/Applications/User/services.js",
                    "~/Scripts/App/Applications/User/Modules/Home/HomeController.js"
                     ));

            #endregion
        }
    }
};