(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    "2qu3": function (e, t, r) {
      "use strict";
      var n = r("lSNA"),
        o = r("lwsE"),
        a = r("W8MJ");
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        var r;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return s(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return s(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          i = !0,
          l = !1;
        return {
          s: function () {
            r = e[Symbol.iterator]();
          },
          n: function () {
            var e = r.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (l = !0), (a = e);
          },
          f: function () {
            try {
              i || null == r.return || r.return();
            } finally {
              if (l) throw a;
            }
          },
        };
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      (t.__esModule = !0), (t.default = void 0);
      var c,
        d = (c = r("q1tI")) && c.__esModule ? c : { default: c },
        f = r("8L3h"),
        p = r("jwwS");
      var m = [],
        b = [],
        y = !1;
      function h(e) {
        var t = e(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e;
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      function g(e) {
        var t = { loading: !1, loaded: {}, error: null },
          r = [];
        try {
          Object.keys(e).forEach(function (n) {
            var o = h(e[n]);
            o.loading
              ? (t.loading = !0)
              : ((t.loaded[n] = o.loaded), (t.error = o.error)),
              r.push(o.promise),
              o.promise
                .then(function (e) {
                  t.loaded[n] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (n) {
          t.error = n;
        }
        return (
          (t.promise = Promise.all(r)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function v(e, t) {
        return d.default.createElement(
          (function (e) {
            return e && e.__esModule ? e.default : e;
          })(e),
          t
        );
      }
      function _(e, t) {
        var r = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: v,
              webpack: null,
              modules: null,
            },
            t
          ),
          n = null;
        function o() {
          if (!n) {
            var t = new O(e, r);
            n = {
              getCurrentValue: t.getCurrentValue.bind(t),
              subscribe: t.subscribe.bind(t),
              retry: t.retry.bind(t),
              promise: t.promise.bind(t),
            };
          }
          return n.promise();
        }
        if (!y && "function" === typeof r.webpack) {
          var a = r.webpack();
          b.push(function (e) {
            var t,
              r = u(a);
            try {
              for (r.s(); !(t = r.n()).done; ) {
                var n = t.value;
                if (-1 !== e.indexOf(n)) return o();
              }
            } catch (i) {
              r.e(i);
            } finally {
              r.f();
            }
          });
        }
        var i = function (e, t) {
          o();
          var a = d.default.useContext(p.LoadableContext),
            i = (0, f.useSubscription)(n);
          return (
            d.default.useImperativeHandle(
              t,
              function () {
                return { retry: n.retry };
              },
              []
            ),
            a &&
              Array.isArray(r.modules) &&
              r.modules.forEach(function (e) {
                a(e);
              }),
            d.default.useMemo(
              function () {
                return i.loading || i.error
                  ? d.default.createElement(r.loading, {
                      isLoading: i.loading,
                      pastDelay: i.pastDelay,
                      timedOut: i.timedOut,
                      error: i.error,
                      retry: n.retry,
                    })
                  : i.loaded
                  ? r.render(i.loaded, e)
                  : null;
              },
              [e, i]
            )
          );
        };
        return (
          (i.preload = function () {
            return o();
          }),
          (i.displayName = "LoadableComponent"),
          d.default.forwardRef(i)
        );
      }
      var O = (function () {
        function e(t, r) {
          o(this, e),
            (this._loadFn = t),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          a(e, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  r = this._opts;
                t.loading &&
                  ("number" === typeof r.delay &&
                    (0 === r.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, r.delay))),
                  "number" === typeof r.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, r.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = l(
                  l({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function w(e) {
        return _(h, e);
      }
      function j(e, t) {
        for (var r = []; e.length; ) {
          var n = e.pop();
          r.push(n(t));
        }
        return Promise.all(r).then(function () {
          if (e.length) return j(e, t);
        });
      }
      (w.Map = function (e) {
        if ("function" !== typeof e.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return _(g, e);
      }),
        (w.preloadAll = function () {
          return new Promise(function (e, t) {
            j(m).then(e, t);
          });
        }),
        (w.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var r = function () {
              return (y = !0), t();
            };
            j(b, e).then(r, r);
          });
        }),
        (window.__NEXT_PRELOADREADY = w.preloadReady);
      var x = w;
      t.default = x;
    },
    a6RD: function (e, t, r) {
      "use strict";
      var n = r("lSNA");
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      (t.__esModule = !0),
        (t.noSSR = u),
        (t.default = function (e, t) {
          var r = i.default,
            n = {
              loading: function (e) {
                e.error, e.isLoading;
                return e.pastDelay, null;
              },
            };
          e instanceof Promise
            ? (n.loader = function () {
                return e;
              })
            : "function" === typeof e
            ? (n.loader = e)
            : "object" === typeof e && (n = a(a({}, n), e));
          if (
            ((n = a(a({}, n), t)),
            "object" === typeof e &&
              !(e instanceof Promise) &&
              (e.render &&
                (n.render = function (t, r) {
                  return e.render(r, t);
                }),
              e.modules))
          ) {
            r = i.default.Map;
            var o = {},
              l = e.modules();
            Object.keys(l).forEach(function (e) {
              var t = l[e];
              "function" !== typeof t.then
                ? (o[e] = t)
                : (o[e] = function () {
                    return t.then(function (e) {
                      return e.default || e;
                    });
                  });
            }),
              (n.loader = o);
          }
          n.loadableGenerated &&
            delete (n = a(a({}, n), n.loadableGenerated)).loadableGenerated;
          if ("boolean" === typeof n.ssr) {
            if (!n.ssr) return delete n.ssr, u(r, n);
            delete n.ssr;
          }
          return r(n);
        });
      l(r("q1tI"));
      var i = l(r("2qu3"));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
    },
    aHcw: function (e, t, r) {
      "use strict";
      var n = r("wx14"),
        o = r("ODXe"),
        a = r("q1tI"),
        i = r.n(a),
        l = r("a6RD"),
        u = r.n(l),
        s = i.a.createElement,
        c = u()(
          function () {
            return r.e(4).then(r.t.bind(null, "Rst5", 7));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return ["Rst5"];
              },
              modules: ["react-owl-carousel3"],
            },
          }
        ),
        d = {
          loop: !0,
          margin: 0,
          nav: !1,
          mouseDrag: !0,
          dots: !1,
          autoplay: !0,
          smartSpeed: 1500,
          autoplayHoverPause: !0,
          responsive: {
            0: { items: 1, margin: 10 },
            576: { items: 1 },
            768: { items: 2, margin: 20 },
            992: { items: 2 },
            1200: { items: 2 },
          },
        };
      t.a = function () {
        var e = i.a.useState(!1),
          t = Object(o.a)(e, 2),
          r = t[0],
          a = t[1];
        return (
          i.a.useEffect(function () {
            a(!0);
          }, []),
          s(
            "div",
            { className: "client-area c-bg pt-100 pb-70" },
            s(
              "div",
              { className: "container" },
              s(
                "div",
                { className: "section-title" },
                s("span", { className: "top-title" }, "Testimonials"),
                s("h2", null, "What Our Client\u2019s Say"),
                s(
                  "p",
                  null,
                  "Investing in CoastalTrustCapital real estate packages will transform your finances for the better, i strongly advise you invest"
                )
              ),
              r
                ? s(
                    c,
                    Object(n.a)(
                      { className: "client-wrap owl-carousel owl-theme" },
                      d
                    ),
                    s(
                      "div",
                      { className: "single-client" },
                      s("img", { src: "/img/client/client1.jpg", alt: "img" }),
                      s(
                        "p",
                        null,
                  "Investing in CoastalTrustCapital real estate packages will transform your finances for the better, i strongly advise you invest"

                      ),
                      s(
                        "ul",
                        null,
                        s("li", null, s("i", { className: "bx bxs-star" })),
                        s("li", null, s("i", { className: "bx bxs-star" })),
                        s("li", null, s("i", { className: "bx bxs-star" })),
                        s("li", null, s("i", { className: "bx bxs-star" })),
                        s("li", null, s("i", { className: "bx bxs-star" }))
                      ),
                      s("h3", null, "Steven Jony"),
                      s("span", null, "CEO of Company")
                    ),
                    s(
                      "div",
                      { className: "single-client" },
                      s("img", { src: "/img/client/client2.jpg", alt: "img" }),
                      s(
                        "p",
                        null,
                  "Investing in CoastalTrustCapital real estate packages will transform your finances for the better, i strongly advise you invest"

                      ),
                      s(
                        "ul",
                        null,
                        s("li", null, s("i", { className: "bx bxs-star" })),
                        s("li", null, s("i", { className: "bx bxs-star" })),
                        s("li", null, s("i", { className: "bx bxs-star" })),
                        s("li", null, s("i", { className: "bx bxs-star" })),
                        s("li", null, s("i", { className: "bx bxs-star" }))
                      ),
                      s("h3", null, "Omit Jacson"),
                      s("span", null, "Company Founder")
                    )
                  )
                : ""
            )
          )
        );
      };
    },
    jwwS: function (e, t, r) {
      "use strict";
      var n;
      (t.__esModule = !0), (t.LoadableContext = void 0);
      var o = (
        (n = r("q1tI")) && n.__esModule ? n : { default: n }
      ).default.createContext(null);
      t.LoadableContext = o;
    },
    wx14: function (e, t, r) {
      "use strict";
      function n() {
        return (n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      r.d(t, "a", function () {
        return n;
      });
    },
  },
]);
