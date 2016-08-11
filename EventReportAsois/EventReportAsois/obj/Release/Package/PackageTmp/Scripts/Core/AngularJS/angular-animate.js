﻿/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (H, u, Sa) {
    'use strict'; function wa(a, b, c) { if (!a) throw ngMinErr("areq", b || "?", c || "required"); return a } function xa(a, b) { if (!a && !b) return ""; if (!a) return b; if (!b) return a; X(a) && (a = a.join(" ")); X(b) && (b = b.join(" ")); return a + " " + b } function Ia(a) { var b = {}; a && (a.to || a.from) && (b.to = a.to, b.from = a.from); return b } function T(a, b, c) { var d = ""; a = X(a) ? a : a && I(a) && a.length ? a.split(/\s+/) : []; q(a, function (a, s) { a && 0 < a.length && (d += 0 < s ? " " : "", d += c ? b + a : a + b) }); return d } function Ja(a) {
        if (a instanceof L) switch (a.length) {
            case 0: return [];
            case 1: if (1 === a[0].nodeType) return a; break; default: return L(ma(a))
        } if (1 === a.nodeType) return L(a)
    } function ma(a) { if (!a[0]) return a; for (var b = 0; b < a.length; b++) { var c = a[b]; if (1 == c.nodeType) return c } } function Ka(a, b, c) { q(b, function (b) { a.addClass(b, c) }) } function La(a, b, c) { q(b, function (b) { a.removeClass(b, c) }) } function N(a) { return function (b, c) { c.addClass && (Ka(a, b, c.addClass), c.addClass = null); c.removeClass && (La(a, b, c.removeClass), c.removeClass = null) } } function ia(a) {
        a = a || {}; if (!a.$$prepared) {
            var b = a.domOperation ||
            M; a.domOperation = function () { a.$$domOperationFired = !0; b(); b = M }; a.$$prepared = !0
        } return a
    } function da(a, b) { ya(a, b); za(a, b) } function ya(a, b) { b.from && (a.css(b.from), b.from = null) } function za(a, b) { b.to && (a.css(b.to), b.to = null) } function Q(a, b, c) {
        var d = (b.addClass || "") + " " + (c.addClass || ""), e = (b.removeClass || "") + " " + (c.removeClass || ""); a = Ma(a.attr("class"), d, e); c.preparationClasses && (b.preparationClasses = Y(c.preparationClasses, b.preparationClasses), delete c.preparationClasses); d = b.domOperation !== M ? b.domOperation :
        null; Aa(b, c); d && (b.domOperation = d); b.addClass = a.addClass ? a.addClass : null; b.removeClass = a.removeClass ? a.removeClass : null; return b
    } function Ma(a, b, c) {
        function d(a) { I(a) && (a = a.split(" ")); var b = {}; q(a, function (a) { a.length && (b[a] = !0) }); return b } var e = {}; a = d(a); b = d(b); q(b, function (a, b) { e[b] = 1 }); c = d(c); q(c, function (a, b) { e[b] = 1 === e[b] ? null : -1 }); var s = { addClass: "", removeClass: "" }; q(e, function (b, c) { var e, d; 1 === b ? (e = "addClass", d = !a[c]) : -1 === b && (e = "removeClass", d = a[c]); d && (s[e].length && (s[e] += " "), s[e] += c) });
        return s
    } function B(a) { return a instanceof u.element ? a[0] : a } function Na(a, b, c) { var d = ""; b && (d = T(b, "ng-", !0)); c.addClass && (d = Y(d, T(c.addClass, "-add"))); c.removeClass && (d = Y(d, T(c.removeClass, "-remove"))); d.length && (c.preparationClasses = d, a.addClass(d)) } function ja(a, b) { var c = b ? "-" + b + "s" : ""; ea(a, [fa, c]); return [fa, c] } function na(a, b) { var c = b ? "paused" : "", d = U + "PlayState"; ea(a, [d, c]); return [d, c] } function ea(a, b) { a.style[b[0]] = b[1] } function Y(a, b) { return a ? b ? a + " " + b : a : b } function Ba(a, b, c) {
        var d = Object.create(null),
        e = a.getComputedStyle(b) || {}; q(c, function (a, b) { var c = e[a]; if (c) { var v = c.charAt(0); if ("-" === v || "+" === v || 0 <= v) c = Oa(c); 0 === c && (c = null); d[b] = c } }); return d
    } function Oa(a) { var b = 0; a = a.split(/\s*,\s*/); q(a, function (a) { "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)); a = parseFloat(a) || 0; b = b ? Math.max(a, b) : a }); return b } function oa(a) { return 0 === a || null != a } function Ca(a, b) { var c = O, d = a + "s"; b ? c += "Duration" : d += " linear all"; return [c, d] } function Da() {
        var a = Object.create(null); return {
            flush: function () { a = Object.create(null) },
            count: function (b) { return (b = a[b]) ? b.total : 0 }, get: function (b) { return (b = a[b]) && b.value }, put: function (b, c) { a[b] ? a[b].total++ : a[b] = { total: 1, value: c } }
        }
    } function Ea(a, b, c) { q(c, function (c) { a[c] = V(a[c]) ? a[c] : b.style.getPropertyValue(c) }) } var M = u.noop, Aa = u.extend, L = u.element, q = u.forEach, X = u.isArray, I = u.isString, pa = u.isObject, qa = u.isUndefined, V = u.isDefined, Fa = u.isFunction, ra = u.isElement, O, sa, U, ta; qa(H.ontransitionend) && V(H.onwebkittransitionend) ? (O = "WebkitTransition", sa = "webkitTransitionEnd transitionend") :
    (O = "transition", sa = "transitionend"); qa(H.onanimationend) && V(H.onwebkitanimationend) ? (U = "WebkitAnimation", ta = "webkitAnimationEnd animationend") : (U = "animation", ta = "animationend"); var ka = U + "Delay", ua = U + "Duration", fa = O + "Delay"; H = O + "Duration"; var Pa = { transitionDuration: H, transitionDelay: fa, transitionProperty: O + "Property", animationDuration: ua, animationDelay: ka, animationIterationCount: U + "IterationCount" }, Qa = { transitionDuration: H, transitionDelay: fa, animationDuration: ua, animationDelay: ka }; u.module("ngAnimate",
    []).directive("ngAnimateChildren", [function () { return function (a, b, c) { a = c.ngAnimateChildren; u.isString(a) && 0 === a.length ? b.data("$$ngAnimateChildren", !0) : c.$observe("ngAnimateChildren", function (a) { b.data("$$ngAnimateChildren", "on" === a || "true" === a) }) } }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
        function b(a) { d = d.concat(a); c() } function c() { if (d.length) { for (var b = d.shift(), h = 0; h < b.length; h++) b[h](); e || a(function () { e || c() }) } } var d, e; d = b.queue = []; b.waitUntilQuiet = function (b) {
            e && e(); e = a(function () {
                e =
                null; b(); c()
            })
        }; return b
    }]).factory("$$AnimateRunner", ["$q", "$sniffer", "$$animateAsyncRun", function (a, b, c) {
        function d(a) { this.setHost(a); this._doneCallbacks = []; this._runInAnimationFrame = c(); this._state = 0 } d.chain = function (a, b) { function c() { if (d === a.length) b(!0); else a[d](function (a) { !1 === a ? b(!1) : (d++, c()) }) } var d = 0; c() }; d.all = function (a, b) { function c(h) { v = v && h; ++d === a.length && b(v) } var d = 0, v = !0; q(a, function (a) { a.done(c) }) }; d.prototype = {
            setHost: function (a) { this.host = a || {} }, done: function (a) {
                2 === this._state ?
                a() : this._doneCallbacks.push(a)
            }, progress: M, getPromise: function () { if (!this.promise) { var b = this; this.promise = a(function (a, c) { b.done(function (b) { !1 === b ? c() : a() }) }) } return this.promise }, then: function (a, b) { return this.getPromise().then(a, b) }, "catch": function (a) { return this.getPromise()["catch"](a) }, "finally": function (a) { return this.getPromise()["finally"](a) }, pause: function () { this.host.pause && this.host.pause() }, resume: function () { this.host.resume && this.host.resume() }, end: function () {
                this.host.end && this.host.end();
                this._resolve(!0)
            }, cancel: function () { this.host.cancel && this.host.cancel(); this._resolve(!1) }, complete: function (a) { var b = this; 0 === b._state && (b._state = 1, b._runInAnimationFrame(function () { b._resolve(a) })) }, _resolve: function (a) { 2 !== this._state && (q(this._doneCallbacks, function (b) { b(a) }), this._doneCallbacks.length = 0, this._state = 2) }
        }; return d
    }]).factory("$$animateAsyncRun", ["$$rAF", function (a) {
        function b(b) { c.push(b); 1 < c.length || a(function () { for (var a = 0; a < c.length; a++) c[a](); c = [] }) } var c = []; return function () {
            var a =
            !1; b(function () { a = !0 }); return function (c) { a ? c() : b(c) }
        }
    }]).provider("$$animateQueue", ["$animateProvider", function (a) {
        function b(a, b, c, q) { return d[a].some(function (a) { return a(b, c, q) }) } function c(a, b) { a = a || {}; var c = 0 < (a.addClass || "").length, d = 0 < (a.removeClass || "").length; return b ? c && d : c || d } var d = this.rules = { skip: [], cancel: [], join: [] }; d.join.push(function (a, b, d) { return !b.structural && c(b.options) }); d.skip.push(function (a, b, d) { return !b.structural && !c(b.options) }); d.skip.push(function (a, b, c) {
            return "leave" ==
            c.event && b.structural
        }); d.skip.push(function (a, b, c) { return c.structural && 2 === c.state && !b.structural }); d.cancel.push(function (a, b, c) { return c.structural && b.structural }); d.cancel.push(function (a, b, c) { return 2 === c.state && b.structural }); d.cancel.push(function (a, b, c) { a = b.options; c = c.options; return a.addClass && a.addClass === c.removeClass || a.removeClass && a.removeClass === c.addClass }); this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite",
        "$$forceReflow", function (d, s, h, g, v, r, $, u, R, C) {
            function D() { var a = !1; return function (b) { a ? b() : s.$$postDigest(function () { a = !0; b() }) } } function K(a, b, c) { var f = B(b), d = B(a), n = []; (a = t[c]) && q(a, function (a) { a.node.contains(f) ? n.push(a.callback) : "leave" === c && a.node.contains(d) && n.push(a.callback) }); return n } function l(a, f, k) {
                function n(b, c, f, t) { R(function () { var b = K(v, a, c); b.length && d(function () { q(b, function (b) { b(a, f, t) }) }) }); b.progress(c, f, t) } function t(b) {
                    var c = a, f = k; f.preparationClasses && (c.removeClass(f.preparationClasses),
                    f.preparationClasses = null); f.activeClasses && (c.removeClass(f.activeClasses), f.activeClasses = null); Ha(a, k); da(a, k); k.domOperation(); h.complete(!b)
                } var A, v; if (a = Ja(a)) A = B(a), v = a.parent(); k = ia(k); var h = new $, R = D(); X(k.addClass) && (k.addClass = k.addClass.join(" ")); k.addClass && !I(k.addClass) && (k.addClass = null); X(k.removeClass) && (k.removeClass = k.removeClass.join(" ")); k.removeClass && !I(k.removeClass) && (k.removeClass = null); k.from && !pa(k.from) && (k.from = null); k.to && !pa(k.to) && (k.to = null); if (!A) return t(), h;
                var z = [A.className, k.addClass, k.removeClass].join(" "); if (!Ra(z)) return t(), h; var l = 0 <= ["enter", "move", "leave"].indexOf(f), g = !G || F.get(A), z = !g && m.get(A) || {}, C = !!z.state; g || C && 1 == z.state || (g = !la(a, v, f)); if (g) return t(), h; l && y(a); g = { structural: l, element: a, event: f, close: t, options: k, runner: h }; if (C) {
                    if (b("skip", a, g, z)) { if (2 === z.state) return t(), h; Q(a, z.options, k); return z.runner } if (b("cancel", a, g, z)) if (2 === z.state) z.runner.end(); else if (z.structural) z.close(); else return Q(a, z.options, g.options), z.runner;
                    else if (b("join", a, g, z)) if (2 === z.state) Q(a, k, {}); else return Na(a, l ? f : null, k), f = g.event = z.event, k = Q(a, z.options, g.options), z.runner
                } else Q(a, k, {}); (C = g.structural) || (C = "animate" === g.event && 0 < Object.keys(g.options.to || {}).length || c(g.options)); if (!C) return t(), w(a), h; var u = (z.counter || 0) + 1; g.counter = u; x(a, 1, g); s.$$postDigest(function () {
                    var b = m.get(A), d = !b, b = b || {}, K = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || c(b.options)); if (d || b.counter !== u || !K) {
                        d && (Ha(a, k), da(a, k)); if (d || l && b.event !==
                        f) k.domOperation(), h.end(); K || w(a)
                    } else f = !b.structural && c(b.options, !0) ? "setClass" : b.event, x(a, 2), b = r(a, f, b.options), b.done(function (b) { t(!b); (b = m.get(A)) && b.counter === u && w(B(a)); n(h, f, "close", {}) }), h.setHost(b), n(h, f, "start", {})
                }); return h
            } function y(a) { a = B(a).querySelectorAll("[data-ng-animate]"); q(a, function (a) { var b = parseInt(a.getAttribute("data-ng-animate")), c = m.get(a); switch (b) { case 2: c.runner.end(); case 1: c && m.remove(a) } }) } function w(a) { a = B(a); a.removeAttribute("data-ng-animate"); m.remove(a) }
            function f(a, b) { return B(a) === B(b) } function la(a, b, c) { c = L(g[0].body); var d = f(a, c) || "HTML" === a[0].nodeName, t = f(a, h), n = !1, w; for ((a = a.data("$ngAnimatePin")) && (b = a) ; b && b.length;) { t || (t = f(b, h)); a = b[0]; if (1 !== a.nodeType) break; var x = m.get(a) || {}; n || (n = x.structural || F.get(a)); if (qa(w) || !0 === w) a = b.data("$$ngAnimateChildren"), V(a) && (w = a); if (n && !1 === w) break; t || (t = f(b, h), t || (a = b.data("$ngAnimatePin")) && (b = a)); d || (d = f(b, c)); b = b.parent() } return (!n || w) && t && d } function x(a, b, c) {
                c = c || {}; c.state = b; a = B(a); a.setAttribute("data-ng-animate",
                b); c = (b = m.get(a)) ? Aa(b, c) : c; m.put(a, c)
            } var m = new v, F = new v, G = null, A = s.$watch(function () { return 0 === u.totalPendingRequests }, function (a) { a && (A(), s.$$postDigest(function () { s.$$postDigest(function () { null === G && (G = !0) }) })) }), t = {}, n = a.classNameFilter(), Ra = n ? function (a) { return n.test(a) } : function () { return !0 }, Ha = N(R); return {
                on: function (a, b, c) { b = ma(b); t[a] = t[a] || []; t[a].push({ node: b, callback: c }) }, off: function (a, b, c) {
                    function f(a, b, c) {
                        var d = ma(b); return a.filter(function (a) {
                            return !(a.node === d && (!c || a.callback ===
                            c))
                        })
                    } var d = t[a]; d && (t[a] = 1 === arguments.length ? null : f(d, b, c))
                }, pin: function (a, b) { wa(ra(a), "element", "not an element"); wa(ra(b), "parentElement", "not an element"); a.data("$ngAnimatePin", b) }, push: function (a, b, c, f) { c = c || {}; c.domOperation = f; return l(a, b, c) }, enabled: function (a, b) { var c = arguments.length; if (0 === c) b = !!G; else if (ra(a)) { var f = B(a), d = F.get(f); 1 === c ? b = !d : (b = !!b) ? d && F.remove(f) : F.put(f, !0) } else b = G = !!a; return b }
            }
        }]
    }]).provider("$$animation", ["$animateProvider", function (a) {
        function b(a) { return a.data("$$animationRunner") }
        var c = this.drivers = []; this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, e, s, h, g, v) {
            function r(a) {
                function b(a) { if (a.processed) return a; a.processed = !0; var f = a.domNode, d = f.parentNode; e.put(f, a); for (var x; d;) { if (x = e.get(d)) { x.processed || (x = b(x)); break } d = d.parentNode } (x || c).children.push(a); return a } var c = { children: [] }, d, e = new g; for (d = 0; d < a.length; d++) { var h = a[d]; e.put(h.domNode, a[d] = { domNode: h.domNode, fn: h.fn, children: [] }) } for (d = 0; d < a.length; d++) b(a[d]);
                return function (a) { var b = [], c = [], d; for (d = 0; d < a.children.length; d++) c.push(a.children[d]); a = c.length; var m = 0, e = []; for (d = 0; d < c.length; d++) { var h = c[d]; 0 >= a && (a = m, m = 0, b.push(e), e = []); e.push(h.fn); h.children.forEach(function (a) { m++; c.push(a) }); a-- } e.length && b.push(e); return b }(c)
            } var $ = [], u = N(a); return function (g, C, D) {
                function K(a) { a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]"); var b = []; q(a, function (a) { var c = a.getAttribute("ng-animate-ref"); c && c.length && b.push(a) }); return b }
                function l(a) {
                    var b = [], c = {}; q(a, function (a, f) { var d = B(a.element), t = 0 <= ["enter", "move"].indexOf(a.event), d = a.structural ? K(d) : []; if (d.length) { var m = t ? "to" : "from"; q(d, function (a) { var b = a.getAttribute("ng-animate-ref"); c[b] = c[b] || {}; c[b][m] = { animationID: f, element: L(a) } }) } else b.push(a) }); var f = {}, d = {}; q(c, function (c, m) {
                        var w = c.from, e = c.to; if (w && e) {
                            var h = a[w.animationID], g = a[e.animationID], x = w.animationID.toString(); if (!d[x]) {
                                var A = d[x] = {
                                    structural: !0, beforeStart: function () { h.beforeStart(); g.beforeStart() },
                                    close: function () { h.close(); g.close() }, classes: y(h.classes, g.classes), from: h, to: g, anchors: []
                                }; A.classes.length ? b.push(A) : (b.push(h), b.push(g))
                            } d[x].anchors.push({ out: w.element, "in": e.element })
                        } else w = w ? w.animationID : e.animationID, e = w.toString(), f[e] || (f[e] = !0, b.push(a[w]))
                    }); return b
                } function y(a, b) { a = a.split(" "); b = b.split(" "); for (var c = [], f = 0; f < a.length; f++) { var d = a[f]; if ("ng-" !== d.substring(0, 3)) for (var m = 0; m < b.length; m++) if (d === b[m]) { c.push(d); break } } return c.join(" ") } function w(a) {
                    for (var b =
                    c.length - 1; 0 <= b; b--) { var f = c[b]; if (s.has(f) && (f = s.get(f)(a))) return f }
                } function f(a, c) { a.from && a.to ? (b(a.from.element).setHost(c), b(a.to.element).setHost(c)) : b(a.element).setHost(c) } function la() { var a = b(g); !a || "leave" === C && D.$$domOperationFired || a.end() } function x(b) { g.off("$destroy", la); g.removeData("$$animationRunner"); u(g, D); da(g, D); D.domOperation(); A && a.removeClass(g, A); g.removeClass("ng-animate"); F.complete(!b) } D = ia(D); var m = 0 <= ["enter", "move", "leave"].indexOf(C), F = new h({
                    end: function () { x() },
                    cancel: function () { x(!0) }
                }); if (!c.length) return x(), F; g.data("$$animationRunner", F); var G = xa(g.attr("class"), xa(D.addClass, D.removeClass)), A = D.tempClasses; A && (G += " " + A, D.tempClasses = null); $.push({ element: g, classes: G, event: C, structural: m, options: D, beforeStart: function () { g.addClass("ng-animate"); A && a.addClass(g, A) }, close: x }); g.on("$destroy", la); if (1 < $.length) return F; e.$$postDigest(function () {
                    var a = []; q($, function (c) { b(c.element) ? a.push(c) : c.close() }); $.length = 0; var c = l(a), d = []; q(c, function (a) {
                        d.push({
                            domNode: B(a.from ?
                            a.from.element : a.element), fn: function () { a.beforeStart(); var c, d = a.close; if (b(a.anchors ? a.from.element || a.to.element : a.element)) { var m = w(a); m && (c = m.start) } c ? (c = c(), c.done(function (a) { d(!a) }), f(a, c)) : d() }
                        })
                    }); v(r(d))
                }); return F
            }
        }]
    }]).provider("$animateCss", ["$animateProvider", function (a) {
        var b = Da(), c = Da(); this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$animate", function (a, e, s, h, g, v, r, u) {
            function Ga(a, b) {
                var c = a.parentNode; return (c.$$ngAnimateParentKey ||
                (c.$$ngAnimateParentKey = ++l)) + "-" + a.getAttribute("class") + "-" + b
            } function R(w, f, h, g) { var m; 0 < b.count(h) && (m = c.get(h), m || (f = T(f, "-stagger"), e.addClass(w, f), m = Ba(a, w, g), m.animationDuration = Math.max(m.animationDuration, 0), m.transitionDuration = Math.max(m.transitionDuration, 0), e.removeClass(w, f), c.put(h, m))); return m || {} } function C(a) { y.push(a); r.waitUntilQuiet(function () { b.flush(); c.flush(); for (var a = g(), d = 0; d < y.length; d++) y[d](a); y.length = 0 }) } function D(c, f, e) {
                f = b.get(e); f || (f = Ba(a, c, Pa), "infinite" ===
                f.animationIterationCount && (f.animationIterationCount = 1)); b.put(e, f); c = f; e = c.animationDelay; f = c.transitionDelay; c.maxDelay = e && f ? Math.max(e, f) : e || f; c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration); return c
            } var K = N(e), l = 0, y = []; return function (a, c) {
                function d() { m() } function g() { m(!0) } function m(b) {
                    if (!(ga || va && k)) {
                        ga = !0; k = !1; c.$$skipPreparationClasses || e.removeClass(a, Z); e.removeClass(a, Y); na(n, !1); ja(n, !1); q(y, function (a) { n.style[a[0]] = "" }); K(a, c); da(a, c); Object.keys(t).length &&
                        q(t, function (a, b) { a ? n.style.setProperty(b, a) : n.style.removeProperty(b) }); if (c.onDone) c.onDone(); H && H.complete(!b)
                    }
                } function F(a) { p.blockTransition && ja(n, a); p.blockKeyframeAnimation && na(n, !!a) } function G() { H = new s({ end: d, cancel: g }); C(M); m(); return { $$willAnimate: !1, start: function () { return H }, end: d } } function A() {
                    function b() {
                        if (!ga) {
                            F(!1); q(y, function (a) { n.style[a[0]] = a[1] }); K(a, c); e.addClass(a, Y); if (p.recalculateTimingStyles) {
                                ha = n.className + " " + Z; aa = Ga(n, ha); E = D(n, ha, aa); W = E.maxDelay; I = Math.max(W, 0);
                                J = E.maxDuration; if (0 === J) { m(); return } p.hasTransitions = 0 < E.transitionDuration; p.hasAnimations = 0 < E.animationDuration
                            } p.applyAnimationDelay && (W = "boolean" !== typeof c.delay && oa(c.delay) ? parseFloat(c.delay) : W, I = Math.max(W, 0), E.animationDelay = W, ca = [ka, W + "s"], y.push(ca), n.style[ca[0]] = ca[1]); N = 1E3 * I; z = 1E3 * J; if (c.easing) { var k, l = c.easing; p.hasTransitions && (k = O + "TimingFunction", y.push([k, l]), n.style[k] = l); p.hasAnimations && (k = U + "TimingFunction", y.push([k, l]), n.style[k] = l) } E.transitionDuration && x.push(sa); E.animationDuration &&
                            x.push(ta); A = Date.now(); var v = N + 1.5 * z; k = A + v; var l = a.data("$$animateCss") || [], r = !0; if (l.length) { var G = l[0]; (r = k > G.expectedEndTime) ? h.cancel(G.timer) : l.push(m) } r && (v = h(d, v, !1), l[0] = { timer: v, expectedEndTime: k }, l.push(m), a.data("$$animateCss", l)); a.on(x.join(" "), g); c.to && (c.cleanupStyles && Ea(t, n, Object.keys(c.to)), za(a, c))
                        }
                    } function d() { var b = a.data("$$animateCss"); if (b) { for (var c = 1; c < b.length; c++) b[c](); a.removeData("$$animateCss") } } function g(a) {
                        a.stopPropagation(); var b = a.originalEvent || a; a = b.$manualTimeStamp ||
                        b.timeStamp || Date.now(); b = parseFloat(b.elapsedTime.toFixed(3)); Math.max(a - A, 0) >= N && b >= J && (va = !0, m())
                    } if (!ga) if (n.parentNode) { var A, x = [], l = function (a) { if (va) k && a && (k = !1, m()); else if (k = !a, E.animationDuration) if (a = na(n, k), k) y.push(a); else { var b = y, c = b.indexOf(a); 0 <= a && b.splice(c, 1) } }, v = 0 < V && (E.transitionDuration && 0 === S.transitionDuration || E.animationDuration && 0 === S.animationDuration) && Math.max(S.animationDelay, S.transitionDelay); v ? h(b, Math.floor(v * V * 1E3), !1) : b(); L.resume = function () { l(!0) }; L.pause = function () { l(!1) } } else m()
                }
                var t = {}, n = B(a); if (!n || !n.parentNode || !u.enabled()) return G(); c = ia(c); var y = [], r = a.attr("class"), l = Ia(c), ga, k, va, H, L, I, N, J, z; if (0 === c.duration || !v.animations && !v.transitions) return G(); var ba = c.event && X(c.event) ? c.event.join(" ") : c.event, Q = "", P = ""; ba && c.structural ? Q = T(ba, "ng-", !0) : ba && (Q = ba); c.addClass && (P += T(c.addClass, "-add")); c.removeClass && (P.length && (P += " "), P += T(c.removeClass, "-remove")); c.applyClassesEarly && P.length && K(a, c); var Z = [Q, P].join(" ").trim(), ha = r + " " + Z, Y = T(Z, "-active"), r = l.to && 0 <
                Object.keys(l.to).length; if (!(0 < (c.keyframeStyle || "").length || r || Z)) return G(); var aa, S; 0 < c.stagger ? (l = parseFloat(c.stagger), S = { transitionDelay: l, animationDelay: l, transitionDuration: 0, animationDuration: 0 }) : (aa = Ga(n, ha), S = R(n, Z, aa, Qa)); c.$$skipPreparationClasses || e.addClass(a, Z); c.transitionStyle && (l = [O, c.transitionStyle], ea(n, l), y.push(l)); 0 <= c.duration && (l = 0 < n.style[O].length, l = Ca(c.duration, l), ea(n, l), y.push(l)); c.keyframeStyle && (l = [U, c.keyframeStyle], ea(n, l), y.push(l)); var V = S ? 0 <= c.staggerIndex ?
                c.staggerIndex : b.count(aa) : 0; (ba = 0 === V) && !c.skipBlocking && ja(n, 9999); var E = D(n, ha, aa), W = E.maxDelay; I = Math.max(W, 0); J = E.maxDuration; var p = {}; p.hasTransitions = 0 < E.transitionDuration; p.hasAnimations = 0 < E.animationDuration; p.hasTransitionAll = p.hasTransitions && "all" == E.transitionProperty; p.applyTransitionDuration = r && (p.hasTransitions && !p.hasTransitionAll || p.hasAnimations && !p.hasTransitions); p.applyAnimationDuration = c.duration && p.hasAnimations; p.applyTransitionDelay = oa(c.delay) && (p.applyTransitionDuration ||
                p.hasTransitions); p.applyAnimationDelay = oa(c.delay) && p.hasAnimations; p.recalculateTimingStyles = 0 < P.length; if (p.applyTransitionDuration || p.applyAnimationDuration) J = c.duration ? parseFloat(c.duration) : J, p.applyTransitionDuration && (p.hasTransitions = !0, E.transitionDuration = J, l = 0 < n.style[O + "Property"].length, y.push(Ca(J, l))), p.applyAnimationDuration && (p.hasAnimations = !0, E.animationDuration = J, y.push([ua, J + "s"])); if (0 === J && !p.recalculateTimingStyles) return G(); if (null != c.delay) {
                    var ca = parseFloat(c.delay);
                    p.applyTransitionDelay && y.push([fa, ca + "s"]); p.applyAnimationDelay && y.push([ka, ca + "s"])
                } null == c.duration && 0 < E.transitionDuration && (p.recalculateTimingStyles = p.recalculateTimingStyles || ba); N = 1E3 * I; z = 1E3 * J; c.skipBlocking || (p.blockTransition = 0 < E.transitionDuration, p.blockKeyframeAnimation = 0 < E.animationDuration && 0 < S.animationDelay && 0 === S.animationDuration); c.from && (c.cleanupStyles && Ea(t, n, Object.keys(c.from)), ya(a, c)); p.blockTransition || p.blockKeyframeAnimation ? F(J) : c.skipBlocking || ja(n, !1); return {
                    $$willAnimate: !0,
                    end: d, start: function () { if (!ga) return L = { end: d, cancel: g, resume: null, pause: null }, H = new s(L), C(A), H }
                }
            }
        }]
    }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateCssDriver"); this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, e, s, h, g) {
            function v(a) { return a.replace(/\bng-\S+\b/g, "") } function r(a, b) { I(a) && (a = a.split(" ")); I(b) && (b = b.split(" ")); return a.filter(function (a) { return -1 === b.indexOf(a) }).join(" ") }
            function u(c, e, g) {
                function h(a) { var b = {}, c = B(a).getBoundingClientRect(); q(["width", "height", "top", "left"], function (a) { var d = c[a]; switch (a) { case "top": d += C.scrollTop; break; case "left": d += C.scrollLeft } b[a] = Math.floor(d) + "px" }); return b } function f() { var c = v(g.attr("class") || ""), d = r(c, m), c = r(m, c), d = a(x, { to: h(g), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0 }); return d.$$willAnimate ? d : null } function s() { x.remove(); e.removeClass("ng-animate-shim"); g.removeClass("ng-animate-shim") } var x =
                L(B(e).cloneNode(!0)), m = v(x.attr("class") || ""); e.addClass("ng-animate-shim"); g.addClass("ng-animate-shim"); x.addClass("ng-anchor"); D.append(x); var F; c = function () { var c = a(x, { addClass: "ng-anchor-out", delay: !0, from: h(e) }); return c.$$willAnimate ? c : null }(); if (!c && (F = f(), !F)) return s(); var G = c || F; return {
                    start: function () {
                        function a() { c && c.end() } var b, c = G.start(); c.done(function () { c = null; if (!F && (F = f())) return c = F.start(), c.done(function () { c = null; s(); b.complete() }), c; s(); b.complete() }); return b = new d({
                            end: a,
                            cancel: a
                        })
                    }
                }
            } function H(a, b, c, e) { var f = R(a, M), g = R(b, M), h = []; q(e, function (a) { (a = u(c, a.out, a["in"])) && h.push(a) }); if (f || g || 0 !== h.length) return { start: function () { function a() { q(b, function (a) { a.end() }) } var b = []; f && b.push(f.start()); g && b.push(g.start()); q(h, function (a) { b.push(a.start()) }); var c = new d({ end: a, cancel: a }); d.all(b, function (a) { c.complete(a) }); return c } } } function R(c) {
                var d = c.element, e = c.options || {}; c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone =
                e.domOperation)); e.preparationClasses && (e.event = Y(e.event, e.preparationClasses)); c = a(d, e); return c.$$willAnimate ? c : null
            } if (!s.animations && !s.transitions) return M; var C = g[0].body; c = B(e); var D = L(c.parentNode && 11 === c.parentNode.nodeType || C.contains(c) ? c : C); N(h); return function (a) { return a.from && a.to ? H(a.from, a.to, a.classes, a.anchors) : R(a) }
        }]
    }]).provider("$$animateJs", ["$animateProvider", function (a) {
        this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
            function e(c) {
                c = X(c) ? c : c.split(" ");
                for (var d = [], e = {}, r = 0; r < c.length; r++) { var q = c[r], s = a.$$registeredAnimations[q]; s && !e[q] && (d.push(b.get(s)), e[q] = !0) } return d
            } var s = N(d); return function (a, b, d, r) {
                function u() { r.domOperation(); s(a, r) } function H(a, b, d, e, f) { switch (d) { case "animate": b = [b, e.from, e.to, f]; break; case "setClass": b = [b, D, K, f]; break; case "addClass": b = [b, D, f]; break; case "removeClass": b = [b, K, f]; break; default: b = [b, f] } b.push(e); if (a = a.apply(a, b)) if (Fa(a.start) && (a = a.start()), a instanceof c) a.done(f); else if (Fa(a)) return a; return M }
                function B(a, b, d, e, f) { var g = []; q(e, function (e) { var h = e[f]; h && g.push(function () { var e, f, g = !1, k = function (a) { g || (g = !0, (f || M)(a), e.complete(!a)) }; e = new c({ end: function () { k() }, cancel: function () { k(!0) } }); f = H(h, a, b, d, function (a) { k(!1 === a) }); return e }) }); return g } function C(a, b, d, e, f) {
                    var g = B(a, b, d, e, f); if (0 === g.length) {
                        var h, l; "beforeSetClass" === f ? (h = B(a, "removeClass", d, e, "beforeRemoveClass"), l = B(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = B(a, "removeClass", d, e, "removeClass"), l = B(a, "addClass",
                        d, e, "addClass")); h && (g = g.concat(h)); l && (g = g.concat(l))
                    } if (0 !== g.length) return function (a) { var b = []; g.length && q(g, function (a) { b.push(a()) }); b.length ? c.all(b, a) : a(); return function (a) { q(b, function (b) { a ? b.cancel() : b.end() }) } }
                } 3 === arguments.length && pa(d) && (r = d, d = null); r = ia(r); d || (d = a.attr("class") || "", r.addClass && (d += " " + r.addClass), r.removeClass && (d += " " + r.removeClass)); var D = r.addClass, K = r.removeClass, l = e(d), y, w; if (l.length) {
                    var f, I; "leave" == b ? (I = "leave", f = "afterLeave") : (I = "before" + b.charAt(0).toUpperCase() +
                    b.substr(1), f = b); "enter" !== b && "move" !== b && (y = C(a, b, r, l, I)); w = C(a, b, r, l, f)
                } if (y || w) return { start: function () { function b(c) { f = !0; u(); da(a, r); g.complete(c) } var d, e = []; y && e.push(function (a) { d = y(a) }); e.length ? e.push(function (a) { u(); a(!0) }) : u(); w && e.push(function (a) { d = w(a) }); var f = !1, g = new c({ end: function () { f || ((d || M)(void 0), b(void 0)) }, cancel: function () { f || ((d || M)(!0), b(!0)) } }); c.chain(e, b); return g } }
            }
        }]
    }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateJsDriver");
        this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) { function d(c) { return a(c.element, c.event, c.classes, c.options) } return function (a) { if (a.from && a.to) { var b = d(a.from), h = d(a.to); if (b || h) return { start: function () { function a() { return function () { q(d, function (a) { a.end() }) } } var d = []; b && d.push(b.start()); h && d.push(h.start()); c.all(d, function (a) { e.complete(a) }); var e = new c({ end: a(), cancel: a() }); return e } } } else return d(a) } }]
    }])
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map