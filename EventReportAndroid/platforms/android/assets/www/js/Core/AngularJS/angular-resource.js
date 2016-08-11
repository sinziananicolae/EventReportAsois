﻿/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (I, f, C) {
    'use strict'; function D(t, e) { e = e || {}; f.forEach(e, function (f, k) { delete e[k] }); for (var k in t) !t.hasOwnProperty(k) || "$" === k.charAt(0) && "$" === k.charAt(1) || (e[k] = t[k]); return e } var y = f.$$minErr("$resource"), B = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/; f.module("ngResource", ["ng"]).provider("$resource", function () {
        var t = /^https?:\/\/[^\/]*/, e = this; this.defaults = { stripTrailingSlashes: !0, actions: { get: { method: "GET" }, save: { method: "POST" }, query: { method: "GET", isArray: !0 }, remove: { method: "DELETE" }, "delete": { method: "DELETE" } } };
        this.$get = ["$http", "$q", function (k, F) {
            function w(f, g) { this.template = f; this.defaults = r({}, e.defaults, g); this.urlParams = {} } function z(l, g, s, h) {
                function c(a, q) { var c = {}; q = r({}, g, q); u(q, function (b, q) { x(b) && (b = b()); var m; if (b && b.charAt && "@" == b.charAt(0)) { m = a; var d = b.substr(1); if (null == d || "" === d || "hasOwnProperty" === d || !B.test("." + d)) throw y("badmember", d); for (var d = d.split("."), n = 0, g = d.length; n < g && f.isDefined(m) ; n++) { var e = d[n]; m = null !== m ? m[e] : C } } else m = b; c[q] = m }); return c } function G(a) { return a.resource }
                function d(a) { D(a || {}, this) } var t = new w(l, h); s = r({}, e.defaults.actions, s); d.prototype.toJSON = function () { var a = r({}, this); delete a.$promise; delete a.$resolved; return a }; u(s, function (a, q) {
                    var g = /^(POST|PUT|PATCH)$/i.test(a.method); d[q] = function (b, A, m, e) {
                        var n = {}, h, l, s; switch (arguments.length) { case 4: s = e, l = m; case 3: case 2: if (x(A)) { if (x(b)) { l = b; s = A; break } l = A; s = m } else { n = b; h = A; l = m; break } case 1: x(b) ? l = b : g ? h = b : n = b; break; case 0: break; default: throw y("badargs", arguments.length); } var w = this instanceof d, p = w ?
                            h : a.isArray ? [] : new d(h), v = {}, z = a.interceptor && a.interceptor.response || G, B = a.interceptor && a.interceptor.responseError || C; u(a, function (a, b) { switch (b) { default: v[b] = H(a); break; case "params": case "isArray": case "interceptor": break; case "timeout": v[b] = a } }); g && (v.data = h); t.setUrlParams(v, r({}, c(h, a.params || {}), n), a.url); n = k(v).then(function (b) {
                                var c = b.data, m = p.$promise; if (c) {
                                    if (f.isArray(c) !== !!a.isArray) throw y("badcfg", q, a.isArray ? "array" : "object", f.isArray(c) ? "array" : "object", v.method, v.url); a.isArray ?
                                    (p.length = 0, u(c, function (b) { "object" === typeof b ? p.push(new d(b)) : p.push(b) })) : (D(c, p), p.$promise = m)
                                } p.$resolved = !0; b.resource = p; return b
                            }, function (b) { p.$resolved = !0; (s || E)(b); return F.reject(b) }); n = n.then(function (b) { var a = z(b); (l || E)(a, b.headers); return a }, B); return w ? n : (p.$promise = n, p.$resolved = !1, p)
                    }; d.prototype["$" + q] = function (b, a, c) { x(b) && (c = a, a = b, b = {}); b = d[q].call(this, b, this, a, c); return b.$promise || b }
                }); d.bind = function (a) { return z(l, r({}, g, a), s) }; return d
            } var E = f.noop, u = f.forEach, r = f.extend,
            H = f.copy, x = f.isFunction; w.prototype = {
                setUrlParams: function (l, g, e) {
                    var h = this, c = e || h.template, k, d, r = "", a = h.urlParams = {}; u(c.split(/\W/), function (d) { if ("hasOwnProperty" === d) throw y("badname"); !/^\d+$/.test(d) && d && (new RegExp("(^|[^\\\\]):" + d + "(\\W|$)")).test(c) && (a[d] = !0) }); c = c.replace(/\\:/g, ":"); c = c.replace(t, function (a) { r = a; return "" }); g = g || {}; u(h.urlParams, function (a, e) {
                        k = g.hasOwnProperty(e) ? g[e] : h.defaults[e]; f.isDefined(k) && null !== k ? (d = encodeURIComponent(k).replace(/%40/gi, "@").replace(/%3A/gi,
                        ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), c = c.replace(new RegExp(":" + e + "(\\W|$)", "g"), function (b, a) { return d + a })) : c = c.replace(new RegExp("(/?):" + e + "(\\W|$)", "g"), function (b, a, c) { return "/" == c.charAt(0) ? c : a + c })
                    }); h.defaults.stripTrailingSlashes && (c = c.replace(/\/+$/, "") || "/"); c = c.replace(/\/\.(?=\w+($|\?))/, "."); l.url = r + c.replace(/\/\\\./, "/."); u(g, function (a, c) {
                        h.urlParams[c] || (l.params = l.params || {}, l.params[c] =
                        a)
                    })
                }
            }; return z
        }]
    })
})(window, window.angular);
//# sourceMappingURL=angular-resource.min.js.map