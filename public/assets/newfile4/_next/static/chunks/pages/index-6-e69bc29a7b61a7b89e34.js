_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [34],
  {
    "0Yqi": function (e, a, l) {
      "use strict";
      function t(e, a) {
        if (null == e) return {};
        var l,
          t,
          s = (function (e, a) {
            if (null == e) return {};
            var l,
              t,
              s = {},
              i = Object.keys(e);
            for (t = 0; t < i.length; t++)
              (l = i[t]), a.indexOf(l) >= 0 || (s[l] = e[l]);
            return s;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (t = 0; t < i.length; t++)
            (l = i[t]),
              a.indexOf(l) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, l) &&
                  (s[l] = e[l]));
        }
        return s;
      }
      var s = l("nOHt"),
        i = l("YFqc"),
        n = l.n(i),
        r = l("q1tI"),
        o = l.n(r),
        c = o.a.createElement;
      a.a = Object(s.withRouter)(function (e) {
        var a = e.router,
          l = e.children,
          s = t(e, ["router", "children"]),
          i = r.Children.only(l),
          m = i.props.className || "";
        return (
          a.pathname === s.href &&
            s.activeClassName &&
            (m = "".concat(m, " ").concat(s.activeClassName).trim()),
          delete s.activeClassName,
          c(n.a, s, o.a.cloneElement(i, { className: m }))
        );
      });
    },
    "2qu3": function (e, a, l) {
      "use strict";
      var t = l("lSNA"),
        s = l("lwsE"),
        i = l("W8MJ");
      function n(e, a) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            l.push.apply(l, t);
        }
        return l;
      }
      function r(e) {
        for (var a = 1; a < arguments.length; a++) {
          var l = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? n(Object(l), !0).forEach(function (a) {
                t(e, a, l[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : n(Object(l)).forEach(function (a) {
                Object.defineProperty(
                  e,
                  a,
                  Object.getOwnPropertyDescriptor(l, a)
                );
              });
        }
        return e;
      }
      function o(e, a) {
        var l;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (l = (function (e, a) {
              if (!e) return;
              if ("string" === typeof e) return c(e, a);
              var l = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === l && e.constructor && (l = e.constructor.name);
              if ("Map" === l || "Set" === l) return Array.from(e);
              if (
                "Arguments" === l ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
              )
                return c(e, a);
            })(e)) ||
            (a && e && "number" === typeof e.length)
          ) {
            l && (e = l);
            var t = 0,
              s = function () {};
            return {
              s: s,
              n: function () {
                return t >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[t++] };
              },
              e: function (e) {
                throw e;
              },
              f: s,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          n = !0,
          r = !1;
        return {
          s: function () {
            l = e[Symbol.iterator]();
          },
          n: function () {
            var e = l.next();
            return (n = e.done), e;
          },
          e: function (e) {
            (r = !0), (i = e);
          },
          f: function () {
            try {
              n || null == l.return || l.return();
            } finally {
              if (r) throw i;
            }
          },
        };
      }
      function c(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var l = 0, t = new Array(a); l < a; l++) t[l] = e[l];
        return t;
      }
      (a.__esModule = !0), (a.default = void 0);
      var m,
        u = (m = l("q1tI")) && m.__esModule ? m : { default: m },
        d = l("8L3h"),
        v = l("jwwS");
      var f = [],
        p = [],
        N = !1;
      function g(e) {
        var a = e(),
          l = { loading: !0, loaded: null, error: null };
        return (
          (l.promise = a
            .then(function (e) {
              return (l.loading = !1), (l.loaded = e), e;
            })
            .catch(function (e) {
              throw ((l.loading = !1), (l.error = e), e);
            })),
          l
        );
      }
      function b(e) {
        var a = { loading: !1, loaded: {}, error: null },
          l = [];
        try {
          Object.keys(e).forEach(function (t) {
            var s = g(e[t]);
            s.loading
              ? (a.loading = !0)
              : ((a.loaded[t] = s.loaded), (a.error = s.error)),
              l.push(s.promise),
              s.promise
                .then(function (e) {
                  a.loaded[t] = e;
                })
                .catch(function (e) {
                  a.error = e;
                });
          });
        } catch (t) {
          a.error = t;
        }
        return (
          (a.promise = Promise.all(l)
            .then(function (e) {
              return (a.loading = !1), e;
            })
            .catch(function (e) {
              throw ((a.loading = !1), e);
            })),
          a
        );
      }
      function h(e, a) {
        return u.default.createElement(
          (function (e) {
            return e && e.__esModule ? e.default : e;
          })(e),
          a
        );
      }
      function y(e, a) {
        var l = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: h,
              webpack: null,
              modules: null,
            },
            a
          ),
          t = null;
        function s() {
          if (!t) {
            var a = new x(e, l);
            t = {
              getCurrentValue: a.getCurrentValue.bind(a),
              subscribe: a.subscribe.bind(a),
              retry: a.retry.bind(a),
              promise: a.promise.bind(a),
            };
          }
          return t.promise();
        }
        if (!N && "function" === typeof l.webpack) {
          var i = l.webpack();
          p.push(function (e) {
            var a,
              l = o(i);
            try {
              for (l.s(); !(a = l.n()).done; ) {
                var t = a.value;
                if (-1 !== e.indexOf(t)) return s();
              }
            } catch (n) {
              l.e(n);
            } finally {
              l.f();
            }
          });
        }
        var n = function (e, a) {
          s();
          var i = u.default.useContext(v.LoadableContext),
            n = (0, d.useSubscription)(t);
          return (
            u.default.useImperativeHandle(
              a,
              function () {
                return { retry: t.retry };
              },
              []
            ),
            i &&
              Array.isArray(l.modules) &&
              l.modules.forEach(function (e) {
                i(e);
              }),
            u.default.useMemo(
              function () {
                return n.loading || n.error
                  ? u.default.createElement(l.loading, {
                      isLoading: n.loading,
                      pastDelay: n.pastDelay,
                      timedOut: n.timedOut,
                      error: n.error,
                      retry: t.retry,
                    })
                  : n.loaded
                  ? l.render(n.loaded, e)
                  : null;
              },
              [e, n]
            )
          );
        };
        return (
          (n.preload = function () {
            return s();
          }),
          (n.displayName = "LoadableComponent"),
          u.default.forwardRef(n)
        );
      }
      var x = (function () {
        function e(a, l) {
          s(this, e),
            (this._loadFn = a),
            (this._opts = l),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          i(e, [
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
                var a = this._res,
                  l = this._opts;
                a.loading &&
                  ("number" === typeof l.delay &&
                    (0 === l.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, l.delay))),
                  "number" === typeof l.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, l.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (a) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = r(
                  r({}, this._state),
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
                var a = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    a._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function k(e) {
        return y(g, e);
      }
      function C(e, a) {
        for (var l = []; e.length; ) {
          var t = e.pop();
          l.push(t(a));
        }
        return Promise.all(l).then(function () {
          if (e.length) return C(e, a);
        });
      }
      (k.Map = function (e) {
        if ("function" !== typeof e.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return y(b, e);
      }),
        (k.preloadAll = function () {
          return new Promise(function (e, a) {
            C(f).then(e, a);
          });
        }),
        (k.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (a) {
            var l = function () {
              return (N = !0), a();
            };
            C(p, e).then(l, l);
          });
        }),
        (window.__NEXT_PRELOADREADY = k.preloadReady);
      var w = k;
      a.default = w;
    },
    "6pid": function (e, a, l) {
      "use strict";
      l.r(a);
      var t = l("q1tI"),
        s = l.n(t),
        i = l("ODXe"),
        n = l("0Yqi"),
        r = l("j1fb"),
        o = s.a.createElement,
        c = function () {
          var e = s.a.useState(!0),
            a = Object(i.a)(e, 2),
            l = a[0],
            t = a[1],
            c = function () {
              t(!l);
            };
          s.a.useEffect(function () {
            var e = document.getElementById("navbar");
            document.addEventListener("scroll", function () {
              window.scrollY > 170
                ? e.classList.add("is-sticky")
                : e.classList.remove("is-sticky");
            }),
              window.scrollTo(0, 0);
          });
          var m = l
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show",
            u = l
              ? "navbar-toggler navbar-toggler-right collapsed"
              : "navbar-toggler navbar-toggler-right";
          return o(
            s.a.Fragment,
            null,
            o(
              "header",
              { className: "header-area fixed-top" },
              o(r.a, null),
              o(
                "div",
                { className: "nav-area five" },
                o(
                  "div",
                  { id: "navbar", className: "navbar-area" },
                  o(
                    "div",
                    { className: "main-nav" },
                    o(
                      "nav",
                      { className: "navbar navbar-expand-lg navbar-light" },
                      o(
                        "div",
                        { className: "container" },
                        o(
                          n.a,
                          { href: "/" },
                          o(
                            "a",
                            { onClick: c, className: "navbar-brand" },
                            o("img", { src: "/img/logo-two.png", alt: "logo" })
                          )
                        ),
                        o(
                          "button",
                          {
                            onClick: c,
                            className: u,
                            type: "button",
                            "data-toggle": "collapse",
                            "data-target": "#navbarSupportedContent",
                            "aria-controls": "navbarSupportedContent",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                          },
                          o("span", { className: "icon-bar top-bar" }),
                          o("span", { className: "icon-bar middle-bar" }),
                          o("span", { className: "icon-bar bottom-bar" })
                        ),
                        o(
                          "div",
                          { className: m, id: "navbarSupportedContent" },
                          o(
                            "ul",
                            { className: "navbar-nav m-auto" },
                            o(
                              "li",
                              { className: "nav-item" },
                              o(
                                n.a,
                                { href: "#", activeClassName: "active" },
                                o(
                                  "a",
                                  {
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                    className: "nav-link",
                                  },
                                  "Home ",
                                  o("i", { className: "bx bx-plus" })
                                )
                              ),
                              o(
                                "ul",
                                { className: "dropdown-menu" },
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    { href: "/", activeClassName: "active" },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 1 (Emergency Medical Clinic)"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/index-2",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 2 (Covid-19 Treatment Clinic)"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/index-3",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 3 (Covid-19 Test Center)"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/index-4",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 4 (Vaccination Center/Clinic)"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/index-5",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 5 (Doctors Directory Listing)"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/index-6",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 6 (Health Charity Event)"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/index-7",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 7 (Medical Research)"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/index-8",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 8 (Dental Clinic)"
                                    )
                                  )
                                )
                              )
                            ),
                            o(
                              "li",
                              { className: "nav-item" },
                              o(
                                n.a,
                                { href: "/about", activeClassName: "active" },
                                o(
                                  "a",
                                  { onClick: c, className: "nav-link" },
                                  "About"
                                )
                              )
                            ),
                            o(
                              "li",
                              { className: "nav-item" },
                              o(
                                n.a,
                                { href: "#" },
                                o(
                                  "a",
                                  {
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                    className: "nav-link",
                                  },
                                  "Pages ",
                                  o("i", { className: "bx bx-plus" })
                                )
                              ),
                              o(
                                "ul",
                                { className: "dropdown-menu" },
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/pricing",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Pricing"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/testimonials",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Testimonials"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/doctors",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Doctors"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/appointment",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Appointment"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    { href: "/faq", activeClassName: "active" },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "FAQs"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    { href: "#" },
                                    o(
                                      "a",
                                      {
                                        onClick: function (e) {
                                          return e.preventDefault();
                                        },
                                        className: "nav-link",
                                      },
                                      "User ",
                                      o("i", { className: "bx bx-plus" })
                                    )
                                  ),
                                  o(
                                    "ul",
                                    { className: "dropdown-menu" },
                                    o(
                                      "li",
                                      { className: "nav-item" },
                                      o(
                                        n.a,
                                        {
                                          href: "/sign-in",
                                          activeClassName: "active",
                                        },
                                        o(
                                          "a",
                                          { onClick: c, className: "nav-link" },
                                          "Sign In"
                                        )
                                      )
                                    ),
                                    o(
                                      "li",
                                      { className: "nav-item" },
                                      o(
                                        n.a,
                                        {
                                          href: "/sign-up",
                                          activeClassName: "active",
                                        },
                                        o(
                                          "a",
                                          { onClick: c, className: "nav-link" },
                                          "Sign Up"
                                        )
                                      )
                                    ),
                                    o(
                                      "li",
                                      { className: "nav-item" },
                                      o(
                                        n.a,
                                        {
                                          href: "/recover-password",
                                          activeClassName: "active",
                                        },
                                        o(
                                          "a",
                                          { onClick: c, className: "nav-link" },
                                          "Recover Password"
                                        )
                                      )
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/coming-soon",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Coming Soon"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/terms-conditions",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Terms & Conditions"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/privacy-policy",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Privacy Policy"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    { href: "/404", activeClassName: "active" },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "404 Error Page"
                                    )
                                  )
                                )
                              )
                            ),
                            o(
                              "li",
                              { className: "nav-item" },
                              o(
                                n.a,
                                { href: "#" },
                                o(
                                  "a",
                                  {
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                    className: "nav-link",
                                  },
                                  "Services ",
                                  o("i", { className: "bx bx-plus" })
                                )
                              ),
                              o(
                                "ul",
                                { className: "dropdown-menu" },
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/services-1",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Services Style One"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/services-2",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Services Style Two"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/services-3",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Services Style Three"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/service-details",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Service Details"
                                    )
                                  )
                                )
                              )
                            ),
                            o(
                              "li",
                              { className: "nav-item" },
                              o(
                                n.a,
                                { href: "#" },
                                o(
                                  "a",
                                  {
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                    className: "nav-link",
                                  },
                                  "Doctors ",
                                  o("i", { className: "bx bx-plus" })
                                )
                              ),
                              o(
                                "ul",
                                { className: "dropdown-menu" },
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/doctors-1",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Doctors Style One"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/doctors-2",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Doctors Style Two"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/doctors-3",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Doctors Style Three"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/doctor-details",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Doctors Details"
                                    )
                                  )
                                )
                              )
                            ),
                            o(
                              "li",
                              { className: "nav-item" },
                              o(
                                n.a,
                                { href: "#" },
                                o(
                                  "a",
                                  {
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                    className: "nav-link",
                                  },
                                  "Blog ",
                                  o("i", { className: "bx bx-plus" })
                                )
                              ),
                              o(
                                "ul",
                                { className: "dropdown-menu" },
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/blog-grid",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Blog Grid"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/blog-left-sidebar",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Blog Left Sidebar"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/blog-right-sidebar",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Blog Right Sidebar"
                                    )
                                  )
                                ),
                                o(
                                  "li",
                                  { className: "nav-item" },
                                  o(
                                    n.a,
                                    {
                                      href: "/blog-details",
                                      activeClassName: "active",
                                    },
                                    o(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Blog Details"
                                    )
                                  )
                                )
                              )
                            ),
                            o(
                              "li",
                              { className: "nav-item" },
                              o(
                                n.a,
                                { href: "/contact", activeClassName: "active" },
                                o(
                                  "a",
                                  { onClick: c, className: "nav-link" },
                                  "Contact"
                                )
                              )
                            )
                          ),
                          o(
                            "div",
                            { className: "others-option" },
                            o(
                              "div",
                              { className: "subscribe" },
                              o(
                                n.a,
                                { href: "#" },
                                o(
                                  "a",
                                  { className: "default-btn" },
                                  "Get A Quote"
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        m = l("wx14"),
        u = l("YFqc"),
        d = l.n(u),
        v = l("a6RD"),
        f = l.n(v),
        p = s.a.createElement,
        N = f()(
          function () {
            return l.e(4).then(l.t.bind(null, "Rst5", 7));
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
        g = {
          loop: !0,
          nav: !1,
          dots: !0,
          autoplayHoverPause: !0,
          autoplay: !0,
          items: 1,
          animateOut: "fadeOut",
          margin: 0,
        },
        b = function () {
          var e = s.a.useState(!1),
            a = Object(i.a)(e, 2),
            l = a[0],
            t = a[1];
          return (
            s.a.useEffect(function () {
              t(!0);
            }, []),
            p(
              "div",
              { className: "main-banner-six" },
              p(
                "div",
                { className: "container-fluid" },
                p(
                  "div",
                  { className: "row" },
                  p(
                    "div",
                    { className: "col-lg-6 col-md-12" },
                    p(
                      "div",
                      { className: "main-banner-content" },
                      p(
                        "div",
                        { className: "d-table" },
                        p(
                          "div",
                          { className: "d-table-cell" },
                          p(
                            "div",
                            { className: "content" },
                            p(
                              "span",
                              { className: "top-title" },
                              "For Better Life!"
                            ),
                            p(
                              "h1",
                              null,
                              "Free Health Checkup Ensure A Better Life!"
                            ),
                            p(
                              "p",
                              null,
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                            ),
                            p(
                              d.a,
                              { href: "/contact" },
                              p(
                                "a",
                                { className: "default-btn" },
                                "Book An Appointment"
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  p(
                    "div",
                    { className: "col-lg-6 pr-0 col-md-12" },
                    l
                      ? p(
                          N,
                          Object(m.a)(
                            {
                              className:
                                "banner-image-slider owl-carousel owl-theme",
                            },
                            g
                          ),
                          p("div", {
                            className: "banner-image banner-slider-bg-1",
                          }),
                          p("div", {
                            className: "banner-image banner-slider-bg-2",
                          })
                        )
                      : ""
                  )
                )
              ),
              p(
                "div",
                { className: "shape" },
                p("img", {
                  src: "/img/home-six/home-six-shape1.png",
                  alt: "Image",
                })
              ),
              p(
                "div",
                { className: "shape-2" },
                p("img", {
                  src: "/img/home-six/home-six-shape2.png",
                  alt: "Image",
                })
              )
            )
          );
        },
        h = s.a.createElement,
        y = function () {
          return h(
            "div",
            { className: "second-facility-area six pt-100 pb-70" },
            h(
              "div",
              { className: "container" },
              h(
                "div",
                { className: "row" },
                h(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  h(
                    "div",
                    { className: "second-facility-item" },
                    h("img", {
                      src: "/img/home-six/home-six-service-icon1.png",
                      alt: "Image",
                    }),
                    h("h3", null, "Medical Counseling"),
                    h(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    ),
                    h(
                      d.a,
                      { href: "/services-details" },
                      h(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        h("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                ),
                h(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  h(
                    "div",
                    { className: "second-facility-item" },
                    h("img", {
                      src: "/img/home-six/home-six-service-icon2.png",
                      alt: "Image",
                    }),
                    h("h3", null, "Free Health Checkup"),
                    h(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    ),
                    h(
                      d.a,
                      { href: "/services-details" },
                      h(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        h("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                ),
                h(
                  "div",
                  { className: "col-lg-4 col-sm-6 offset-sm-3 offset-lg-0" },
                  h(
                    "div",
                    { className: "second-facility-item" },
                    h("img", {
                      src: "/img/home-six/home-six-service-icon3.png",
                      alt: "Image",
                    }),
                    h("h3", null, "Emergency Service"),
                    h(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    ),
                    h(
                      d.a,
                      { href: "/services-details" },
                      h(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        h("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                )
              )
            )
          );
        },
        x = s.a.createElement,
        k = function () {
          return x(
            "div",
            { className: "ours-doctors-area" },
            x(
              "div",
              { className: "container-fluid" },
              x(
                "div",
                { className: "row" },
                x(
                  "div",
                  { className: "col-lg-6" },
                  x(
                    "div",
                    { className: "doctors-content ptb-100" },
                    x("span", { className: "top-title" }, "Our Mission"),
                    x(
                      "h2",
                      null,
                      "We are Offering Reliable Consulting Services"
                    ),
                    x(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                    ),
                    x(
                      "ul",
                      null,
                      x(
                        "li",
                        null,
                        x("i", { className: "flaticon-tick" }),
                        "Provide free and high-quality medical services for poor population"
                      ),
                      x(
                        "li",
                        null,
                        x("i", { className: "flaticon-tick" }),
                        "Raise health awareness among the community and teach them to deal with communicable and noncommunicable."
                      ),
                      x(
                        "li",
                        null,
                        x("i", { className: "flaticon-tick" }),
                        "Refer medical cases towards surgeries if required"
                      )
                    ),
                    x(
                      d.a,
                      { href: "/about" },
                      x("a", { className: "default-btn" }, "More About Us")
                    )
                  )
                ),
                x(
                  "div",
                  { className: "col-lg-6 pr-0" },
                  x("div", { className: "doctors-img about" })
                )
              )
            ),
            x(
              "div",
              { className: "shape" },
              x("img", {
                src: "/img/home-six/home-six-about-shape.png",
                alt: "Image",
              })
            )
          );
        },
        C = s.a.createElement,
        w = function () {
          return C(
            "div",
            { className: "events-area pt-100 pb-70" },
            C(
              "div",
              { className: "container" },
              C(
                "div",
                { className: "section-title" },
                C("span", { className: "top-title" }, "Event"),
                C("h2", null, "Our Upcoming Campaign"),
                C(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse"
                )
              ),
              C(
                "div",
                { className: "row" },
                C(
                  "div",
                  { className: "col-lg-4 col-md-6" },
                  C(
                    "div",
                    { className: "single-events" },
                    C(
                      "div",
                      { className: "event-img" },
                      C("img", {
                        src: "/img/home-six/home-six-event1.jpg",
                        alt: "Image",
                      }),
                      C("span", null, "17 May 2020")
                    ),
                    C(
                      "div",
                      { className: "event-content" },
                      C(
                        "h3",
                        null,
                        "Donate for free healthcare services in remote area"
                      ),
                      C(
                        "p",
                        null,
                        "Lorem ipsum dolor Cumque sit amet, consectetur adipisicing  elit. Libero pariatur quasi dolorem Cumque dolor Cumque sit amet"
                      ),
                      C(
                        d.a,
                        { href: "#" },
                        C(
                          "a",
                          { className: "read-more" },
                          "Read More ",
                          C("i", { className: "bx bx-plus" })
                        )
                      ),
                      C("span", { className: "usd-bar" }),
                      C(
                        "ul",
                        null,
                        C(
                          "li",
                          null,
                          C("span", null, "$1,161.61"),
                          " Required"
                        ),
                        C(
                          "li",
                          { className: "right" },
                          C("span", null, "$36.32"),
                          " Raised"
                        )
                      ),
                      C(
                        d.a,
                        { href: "#" },
                        C("a", { className: "default-btn" }, "Donate Now")
                      )
                    )
                  )
                ),
                C(
                  "div",
                  { className: "col-lg-4 col-md-6" },
                  C(
                    "div",
                    { className: "single-events" },
                    C(
                      "div",
                      { className: "event-img" },
                      C("img", {
                        src: "/img/home-six/home-six-event2.jpg",
                        alt: "Image",
                      }),
                      C("span", null, "18 May 2020")
                    ),
                    C(
                      "div",
                      { className: "event-content" },
                      C(
                        "h3",
                        null,
                        "Help us in providing free medical care to people of"
                      ),
                      C(
                        "p",
                        null,
                        "Lorem ipsum dolor Cumque sit amet, consectetur adipisicing  elit. Libero pariatur quasi dolorem Cumque dolor Cumque sit amet"
                      ),
                      C(
                        d.a,
                        { href: "#" },
                        C(
                          "a",
                          { className: "read-more" },
                          "Read More ",
                          C("i", { className: "bx bx-plus" })
                        )
                      ),
                      C("span", { className: "usd-bar" }),
                      C(
                        "ul",
                        null,
                        C(
                          "li",
                          null,
                          C("span", null, "$1,461.61"),
                          " Required"
                        ),
                        C(
                          "li",
                          { className: "right" },
                          C("span", null, "$00.32"),
                          " Raised"
                        )
                      ),
                      C(
                        d.a,
                        { href: "#" },
                        C("a", { className: "default-btn" }, "Donate Now")
                      )
                    )
                  )
                ),
                C(
                  "div",
                  { className: "col-lg-4 col-md-6 offset-md-3 offset-lg-0" },
                  C(
                    "div",
                    { className: "single-events" },
                    C(
                      "div",
                      { className: "event-img" },
                      C("img", {
                        src: "/img/home-six/home-six-event3.jpg",
                        alt: "Image",
                      }),
                      C("span", null, "19 May 2020")
                    ),
                    C(
                      "div",
                      { className: "event-content" },
                      C(
                        "h3",
                        null,
                        "Help us bring quality health care for poor people"
                      ),
                      C(
                        "p",
                        null,
                        "Lorem ipsum dolor Cumque sit amet, consectetur adipisicing  elit. Libero pariatur quasi dolorem Cumque dolor Cumque sit amet"
                      ),
                      C(
                        d.a,
                        { href: "#" },
                        C(
                          "a",
                          { className: "read-more" },
                          "Read More ",
                          C("i", { className: "bx bx-plus" })
                        )
                      ),
                      C("span", { className: "usd-bar" }),
                      C(
                        "ul",
                        null,
                        C(
                          "li",
                          null,
                          C("span", null, "$1,121.61"),
                          " Required"
                        ),
                        C(
                          "li",
                          { className: "right" },
                          C("span", null, "$38.32"),
                          " Raised"
                        )
                      ),
                      C(
                        d.a,
                        { href: "#" },
                        C("a", { className: "default-btn" }, "Donate Now")
                      )
                    )
                  )
                )
              )
            )
          );
        },
        _ = s.a.createElement,
        O = function () {
          return _(
            "div",
            { className: "best-services-area pt-100 pb-70" },
            _(
              "div",
              { className: "container" },
              _(
                "div",
                { className: "section-title" },
                _(
                  "span",
                  { className: "top-title" },
                  "Focused on Best Service"
                ),
                _("h2", null, "Organizer Free Camp"),
                _(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse"
                )
              ),
              _(
                "div",
                { className: "row" },
                _(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  _(
                    "div",
                    { className: "single-best-services" },
                    _("img", {
                      src: "/img/home-six/home-six-service1.jpg",
                      alt: "Image",
                    }),
                    _(
                      "div",
                      { className: "best-services-content" },
                      _("h3", null, "Free health checkup"),
                      _(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur."
                      ),
                      _(
                        d.a,
                        { href: "/services-details" },
                        _(
                          "a",
                          { className: "read-more" },
                          "Read More ",
                          _("i", { className: "bx bx-plus" })
                        )
                      ),
                      _("span", { className: "flaticon-heart-2" })
                    )
                  )
                ),
                _(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  _(
                    "div",
                    { className: "single-best-services" },
                    _("img", {
                      src: "/img/home-six/home-six-service2.jpg",
                      alt: "Image",
                    }),
                    _(
                      "div",
                      { className: "best-services-content" },
                      _("h3", null, "Diagnosis test"),
                      _(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur."
                      ),
                      _(
                        d.a,
                        { href: "/services-details" },
                        _(
                          "a",
                          { className: "read-more" },
                          "Read More ",
                          _("i", { className: "bx bx-plus" })
                        )
                      ),
                      _("span", { className: "flaticon-test-tube" })
                    )
                  )
                ),
                _(
                  "div",
                  { className: "col-lg-4 col-sm-6 offset-sm-3 offset-lg-0" },
                  _(
                    "div",
                    { className: "single-best-services" },
                    _("img", {
                      src: "/img/home-six/home-six-service3.jpg",
                      alt: "Image",
                    }),
                    _(
                      "div",
                      { className: "best-services-content" },
                      _("h3", null, "Health care counseling"),
                      _(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur."
                      ),
                      _(
                        d.a,
                        { href: "/services-details" },
                        _(
                          "a",
                          { className: "read-more" },
                          "Read More ",
                          _("i", { className: "bx bx-plus" })
                        )
                      ),
                      _("span", { className: "flaticon-man" })
                    )
                  )
                )
              )
            )
          );
        },
        M = s.a.createElement,
        E = function () {
          return M(
            "div",
            { className: "doctors-area-two six pt-100 pb-70" },
            M(
              "div",
              { className: "container" },
              M(
                "div",
                { className: "section-title" },
                M("span", { className: "top-title" }, "Our Doctors"),
                M("h2", null, "Our Specialist Doctor"),
                M(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus."
                )
              ),
              M(
                "div",
                { className: "row" },
                M(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  M(
                    "div",
                    { className: "single-doctors-two" },
                    M(
                      "div",
                      { className: "doctor-img" },
                      M("img", {
                        src: "/img/home-six/home-six-doctor1.png",
                        alt: "Image",
                      }),
                      M(
                        "ul",
                        { className: "doctors-link" },
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-pinterest-alt" })
                          )
                        ),
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-instagram" })
                          )
                        )
                      )
                    ),
                    M(
                      "div",
                      { className: "doctors-content" },
                      M("h3", null, "Dr. Merris Jelly"),
                      M("span", null, "Cardiologist")
                    )
                  )
                ),
                M(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  M(
                    "div",
                    { className: "single-doctors-two" },
                    M(
                      "div",
                      { className: "doctor-img" },
                      M("img", {
                        src: "/img/home-six/home-six-doctor2.png",
                        alt: "Image",
                      }),
                      M(
                        "ul",
                        { className: "doctors-link" },
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-pinterest-alt" })
                          )
                        ),
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-instagram" })
                          )
                        )
                      )
                    ),
                    M(
                      "div",
                      { className: "doctors-content" },
                      M("h3", null, "Dr. James Bond"),
                      M("span", null, "Neurologist")
                    )
                  )
                ),
                M(
                  "div",
                  { className: "col-lg-4 col-sm-6 offset-sm-3 offset-lg-0" },
                  M(
                    "div",
                    { className: "single-doctors-two" },
                    M(
                      "div",
                      { className: "doctor-img" },
                      M("img", {
                        src: "/img/home-six/home-six-doctor3.png",
                        alt: "Image",
                      }),
                      M(
                        "ul",
                        { className: "doctors-link" },
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-pinterest-alt" })
                          )
                        ),
                        M(
                          "li",
                          null,
                          M(
                            "a",
                            { href: "#", target: "_blank" },
                            M("i", { className: "bx bxl-instagram" })
                          )
                        )
                      )
                    ),
                    M(
                      "div",
                      { className: "doctors-content" },
                      M("h3", null, "Dr. Juhon Dew"),
                      M("span", null, "Kidney-Specialist")
                    )
                  )
                )
              )
            )
          );
        },
        S = s.a.createElement,
        j = function () {
          return S(
            "div",
            { className: "about-area four abouts-six pb-100" },
            S(
              "div",
              { className: "container-fluid" },
              S(
                "div",
                { className: "row" },
                S(
                  "div",
                  { className: "col-lg-6" },
                  S(
                    "div",
                    { className: "about-content ml-auto" },
                    S("span", { className: "top-title" }, "About Us"),
                    S("h2", null, "Free Medical Camp Importance & Objectives"),
                    S(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                    ),
                    S(
                      "ul",
                      null,
                      S(
                        "li",
                        null,
                        S("i", { className: "flaticon-tick" }),
                        "Free Registration of Deserving Cases for Surgeries"
                      ),
                      S(
                        "li",
                        null,
                        S("i", { className: "flaticon-tick" }),
                        "Free Hepatitis B & C Screening Test"
                      ),
                      S(
                        "li",
                        null,
                        S("i", { className: "flaticon-tick" }),
                        "Free Consultation & Medicine"
                      ),
                      S(
                        "li",
                        null,
                        S("i", { className: "flaticon-tick" }),
                        "Free Blood Pressure Test"
                      ),
                      S(
                        "li",
                        null,
                        S("i", { className: "flaticon-tick" }),
                        "Free Diabetes Test"
                      ),
                      S(
                        "li",
                        null,
                        S("i", { className: "flaticon-tick" }),
                        "Childbirth"
                      )
                    ),
                    S(
                      d.a,
                      { href: "/about" },
                      S("a", { className: "default-btn" }, "More About Us")
                    )
                  )
                ),
                S(
                  "div",
                  { className: "col-lg-6 pr-0" },
                  S("div", { className: "about-img about-img-2" })
                )
              )
            )
          );
        },
        D = l("NRhA"),
        P = l.n(D),
        q = s.a.createElement,
        R = function () {
          var e = Object(t.useState)(new Date()),
            a = e[0],
            l = e[1];
          return q(
            "div",
            { className: "appointment-area six pt-100 jarallax" },
            q(
              "div",
              { className: "container" },
              q(
                "div",
                { className: "appointment-here-form" },
                q("span", { className: "top-title" }, "Make An Appointment"),
                q("h2", null, "We Are Here For You"),
                q(
                  "form",
                  null,
                  q(
                    "div",
                    { className: "row" },
                    q(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      q("label", null, "Your Name"),
                      q(
                        "div",
                        { className: "form-group" },
                        q("input", {
                          type: "text",
                          className: "form-control",
                          id: "Name",
                          placeholder: "Enter Your Name",
                        }),
                        q("i", { className: "flaticon-account" })
                      )
                    ),
                    q(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      q("label", null, "Your Email"),
                      q(
                        "div",
                        { className: "form-group" },
                        q("input", {
                          type: "text",
                          className: "form-control",
                          id: "Email",
                          placeholder: "Enter Your Email",
                        }),
                        q("i", { className: "flaticon-email" })
                      )
                    ),
                    q(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      q("label", null, "Your Phone"),
                      q(
                        "div",
                        { className: "form-group" },
                        q("input", {
                          type: "text",
                          className: "form-control",
                          id: "Phone",
                          placeholder: "Enter Your Phone",
                        }),
                        q("i", { className: "flaticon-smartphone" })
                      )
                    ),
                    q(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      q("label", null, "Select Service"),
                      q(
                        "div",
                        { className: "form-group" },
                        q(
                          "select",
                          { className: "form-control" },
                          q("option", { value: "0" }, "Select Service"),
                          q("option", { value: "1" }, "Surgery & Radiology"),
                          q("option", { value: "2" }, "Children Care"),
                          q("option", { value: "3" }, "Orthopedics"),
                          q("option", { value: "4" }, "Nuclear Magnetic"),
                          q("option", { value: "5" }, "Eye Treatment"),
                          q("option", { value: "6" }, "X-Ray")
                        ),
                        q("i", { className: "flaticon-heart" })
                      )
                    ),
                    q(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      q("label", null, "Appointment Date"),
                      q(
                        "div",
                        { className: "form-group" },
                        q(
                          "div",
                          { className: "input-group date" },
                          q(P.a, {
                            selected: a,
                            onChange: function (e) {
                              return l(e);
                            },
                            className: "form-control",
                          }),
                          q("span", { className: "input-group-addon" })
                        ),
                        q("i", { className: "flaticon-appointment" })
                      )
                    ),
                    q(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      q("label", null, "Time"),
                      q(
                        "div",
                        { className: "form-group" },
                        q(
                          "select",
                          { className: "form-control" },
                          q("option", { value: "0" }, "Seclect Time"),
                          q("option", { value: "1" }, "09.00 AM To 10.00 AM"),
                          q("option", { value: "2" }, "10.00 AM To 11.00 AM"),
                          q("option", { value: "3" }, "11.00 AM To 12.00 PM"),
                          q("option", { value: "4" }, "12.00 PM To 01.00 PM"),
                          q("option", { value: "5" }, "01.00 PM To 03.00 PM"),
                          q("option", { value: "6" }, "04.00 PM To 06.00 PM"),
                          q("option", { value: "7" }, "07.00 PM To 10.00 PM"),
                          q("option", { value: "8" }, "10.00 PM To 11.00 PM")
                        ),
                        q("i", { className: "flaticon-clock" })
                      )
                    ),
                    q(
                      "div",
                      { className: "col-lg-12" },
                      q("label", null, "Message"),
                      q(
                        "div",
                        { className: "form-group" },
                        q("textarea", {
                          name: "message",
                          className: "form-control",
                          id: "Message",
                          cols: "30",
                          rows: "8",
                          placeholder: "Your Message",
                        }),
                        q("i", { className: "flaticon-edit" })
                      )
                    ),
                    q(
                      "div",
                      { className: "col-12" },
                      q(
                        "button",
                        { type: "submit", className: "default-btn" },
                        "Send Request"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        T = l("LKaZ"),
        L = l("Wf2E"),
        A = l("mdYk"),
        I = s.a.createElement;
      a.default = function () {
        return I(
          s.a.Fragment,
          null,
          I(c, null),
          I(b, null),
          I(y, null),
          I(k, null),
          I(w, null),
          I(O, null),
          I(E, null),
          I(j, null),
          I(R, null),
          I(T.a, null),
          I(L.a, null),
          I(A.a, null)
        );
      };
    },
    CrqP: function (e, a, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index-6",
        function () {
          return l("6pid");
        },
      ]);
    },
    LKaZ: function (e, a, l) {
      "use strict";
      var t = l("q1tI"),
        s = l.n(t),
        i = l("YFqc"),
        n = l.n(i),
        r = s.a.createElement;
      a.a = function () {
        return r(
          "div",
          { className: "blog-area pt-100 pb-70" },
          r(
            "div",
            { className: "container" },
            r(
              "div",
              { className: "section-title" },
              r("span", { className: "top-title" }, "News"),
              r("h2", null, "Our Latest News"),
              r(
                "p",
                null,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus"
              )
            ),
            r(
              "div",
              { className: "row" },
              r(
                "div",
                { className: "col-lg-4 col-md-6" },
                r(
                  "div",
                  { className: "single-blog" },
                  r(
                    n.a,
                    { href: "/blog-details" },
                    r(
                      "a",
                      null,
                      r("img", { src: "/img/blog/blog1.jpg", alt: "Image" })
                    )
                  ),
                  r("span", null, "10 May 2020"),
                  r(
                    "div",
                    { className: "blog-content" },
                    r(
                      "ul",
                      null,
                      r("li", null, r("a", { href: "#" }, "Medical"))
                    ),
                    r(
                      n.a,
                      { href: "/blog-details" },
                      r(
                        "a",
                        null,
                        r("h3", null, "250+ Medical Tips We just had to share")
                      )
                    ),
                    r(
                      n.a,
                      { href: "/blog-details" },
                      r(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        r("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                )
              ),
              r(
                "div",
                { className: "col-lg-4 col-md-6" },
                r(
                  "div",
                  { className: "single-blog" },
                  r(
                    n.a,
                    { href: "/blog-details" },
                    r(
                      "a",
                      null,
                      r("img", { src: "/img/blog/blog2.jpg", alt: "Image" })
                    )
                  ),
                  r("span", null, "11 May 2020"),
                  r(
                    "div",
                    { className: "blog-content" },
                    r(
                      "ul",
                      null,
                      r("li", null, r("a", { href: "#" }, "Treatment"))
                    ),
                    r(
                      n.a,
                      { href: "/blog-details" },
                      r(
                        "a",
                        null,
                        r(
                          "h3",
                          null,
                          "What Can I Do To Prevent Myself & prevent Disease"
                        )
                      )
                    ),
                    r(
                      n.a,
                      { href: "/blog-details" },
                      r(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        r("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                )
              ),
              r(
                "div",
                { className: "col-lg-4 col-md-6 offset-md-3 offset-lg-0" },
                r(
                  "div",
                  { className: "single-blog" },
                  r(
                    n.a,
                    { href: "/blog-details" },
                    r(
                      "a",
                      null,
                      r("img", { src: "/img/blog/blog3.jpg", alt: "Image" })
                    )
                  ),
                  r("span", null, "13 May 2020"),
                  r(
                    "div",
                    { className: "blog-content" },
                    r(
                      "ul",
                      null,
                      r("li", null, r("a", { href: "#" }, "COVID-19"))
                    ),
                    r(
                      n.a,
                      { href: "/blog-details" },
                      r(
                        "a",
                        null,
                        r(
                          "h3",
                          null,
                          "CCU For Emergency  Services  & Medical support"
                        )
                      )
                    ),
                    r(
                      n.a,
                      { href: "/blog-details" },
                      r(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        r("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    ODXe: function (e, a, l) {
      "use strict";
      function t(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var l = 0, t = new Array(a); l < a; l++) t[l] = e[l];
        return t;
      }
      function s(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var l = [],
                t = !0,
                s = !1,
                i = void 0;
              try {
                for (
                  var n, r = e[Symbol.iterator]();
                  !(t = (n = r.next()).done) &&
                  (l.push(n.value), !a || l.length !== a);
                  t = !0
                );
              } catch (o) {
                (s = !0), (i = o);
              } finally {
                try {
                  t || null == r.return || r.return();
                } finally {
                  if (s) throw i;
                }
              }
              return l;
            }
          })(e, a) ||
          (function (e, a) {
            if (e) {
              if ("string" === typeof e) return t(e, a);
              var l = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === l && e.constructor && (l = e.constructor.name),
                "Map" === l || "Set" === l
                  ? Array.from(e)
                  : "Arguments" === l ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
                  ? t(e, a)
                  : void 0
              );
            }
          })(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      l.d(a, "a", function () {
        return s;
      });
    },
    Wf2E: function (e, a, l) {
      "use strict";
      var t = l("q1tI"),
        s = l.n(t).a.createElement;
      a.a = function () {
        return s(
          "div",
          { className: "subscribe-area" },
          s(
            "div",
            { className: "container" },
            s(
              "div",
              { className: "row align-items-center" },
              s(
                "div",
                { className: "col-lg-6" },
                s("h2", null, "Subscribe Now"),
                s("p", null, "Get our latest news & update regularly")
              ),
              s(
                "div",
                { className: "col-lg-6" },
                s(
                  "form",
                  { className: "newsletter-form" },
                  s("input", {
                    type: "email",
                    className: "form-control",
                    placeholder: "Enter Your Email",
                    name: "EMAIL",
                    required: !0,
                  }),
                  s(
                    "button",
                    { className: "default-btn", type: "submit" },
                    "Subscribe"
                  )
                )
              )
            )
          )
        );
      };
    },
    YFqc: function (e, a, l) {
      e.exports = l("cTJO");
    },
    a6RD: function (e, a, l) {
      "use strict";
      var t = l("lSNA");
      function s(e, a) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            l.push.apply(l, t);
        }
        return l;
      }
      function i(e) {
        for (var a = 1; a < arguments.length; a++) {
          var l = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? s(Object(l), !0).forEach(function (a) {
                t(e, a, l[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : s(Object(l)).forEach(function (a) {
                Object.defineProperty(
                  e,
                  a,
                  Object.getOwnPropertyDescriptor(l, a)
                );
              });
        }
        return e;
      }
      (a.__esModule = !0),
        (a.noSSR = o),
        (a.default = function (e, a) {
          var l = n.default,
            t = {
              loading: function (e) {
                e.error, e.isLoading;
                return e.pastDelay, null;
              },
            };
          e instanceof Promise
            ? (t.loader = function () {
                return e;
              })
            : "function" === typeof e
            ? (t.loader = e)
            : "object" === typeof e && (t = i(i({}, t), e));
          if (
            ((t = i(i({}, t), a)),
            "object" === typeof e &&
              !(e instanceof Promise) &&
              (e.render &&
                (t.render = function (a, l) {
                  return e.render(l, a);
                }),
              e.modules))
          ) {
            l = n.default.Map;
            var s = {},
              r = e.modules();
            Object.keys(r).forEach(function (e) {
              var a = r[e];
              "function" !== typeof a.then
                ? (s[e] = a)
                : (s[e] = function () {
                    return a.then(function (e) {
                      return e.default || e;
                    });
                  });
            }),
              (t.loader = s);
          }
          t.loadableGenerated &&
            delete (t = i(i({}, t), t.loadableGenerated)).loadableGenerated;
          if ("boolean" === typeof t.ssr) {
            if (!t.ssr) return delete t.ssr, o(l, t);
            delete t.ssr;
          }
          return l(t);
        });
      r(l("q1tI"));
      var n = r(l("2qu3"));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, a) {
        return delete a.webpack, delete a.modules, e(a);
      }
    },
    cTJO: function (e, a, l) {
      "use strict";
      var t = l("J4zp"),
        s = l("284h");
      (a.__esModule = !0), (a.default = void 0);
      var i,
        n = s(l("q1tI")),
        r = l("elyg"),
        o = l("nOHt"),
        c = new Map(),
        m = window.IntersectionObserver,
        u = {};
      var d = function (e, a) {
        var l =
          i ||
          (m
            ? (i = new m(
                function (e) {
                  e.forEach(function (e) {
                    if (c.has(e.target)) {
                      var a = c.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), c.delete(e.target), a());
                    }
                  });
                },
                { rootMargin: "200px" }
              ))
            : void 0);
        return l
          ? (l.observe(e),
            c.set(e, a),
            function () {
              try {
                l.unobserve(e);
              } catch (a) {
                console.error(a);
              }
              c.delete(e);
            })
          : function () {};
      };
      function v(e, a, l, t) {
        (0, r.isLocalURL)(a) &&
          (e.prefetch(a, l, t).catch(function (e) {
            0;
          }),
          (u[a + "%" + l] = !0));
      }
      var f = function (e) {
        var a = !1 !== e.prefetch,
          l = n.default.useState(),
          s = t(l, 2),
          i = s[0],
          c = s[1],
          f = (0, o.useRouter)(),
          p = (f && f.pathname) || "/",
          N = n.default.useMemo(
            function () {
              var a = (0, r.resolveHref)(p, e.href, !0),
                l = t(a, 2),
                s = l[0],
                i = l[1];
              return {
                href: s,
                as: e.as ? (0, r.resolveHref)(p, e.as) : i || s,
              };
            },
            [p, e.href, e.as]
          ),
          g = N.href,
          b = N.as;
        n.default.useEffect(
          function () {
            if (
              a &&
              m &&
              i &&
              i.tagName &&
              (0, r.isLocalURL)(g) &&
              !u[g + "%" + b]
            )
              return d(i, function () {
                v(f, g, b);
              });
          },
          [a, i, g, b, f]
        );
        var h = e.children,
          y = e.replace,
          x = e.shallow,
          k = e.scroll;
        "string" === typeof h && (h = n.default.createElement("a", null, h));
        var C = n.Children.only(h),
          w = {
            ref: function (e) {
              e && c(e),
                C &&
                  "object" === typeof C &&
                  C.ref &&
                  ("function" === typeof C.ref
                    ? C.ref(e)
                    : "object" === typeof C.ref && (C.ref.current = e));
            },
            onClick: function (e) {
              C.props &&
                "function" === typeof C.props.onClick &&
                C.props.onClick(e),
                e.defaultPrevented ||
                  (function (e, a, l, t, s, i, n) {
                    ("A" !== e.currentTarget.nodeName ||
                      (!(function (e) {
                        var a = e.currentTarget.target;
                        return (
                          (a && "_self" !== a) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) &&
                        (0, r.isLocalURL)(l))) &&
                      (e.preventDefault(),
                      null == n && (n = t.indexOf("#") < 0),
                      a[s ? "replace" : "push"](l, t, { shallow: i }).then(
                        function (e) {
                          e &&
                            n &&
                            (window.scrollTo(0, 0), document.body.focus());
                        }
                      ));
                  })(e, f, g, b, y, x, k);
            },
          };
        return (
          a &&
            (w.onMouseEnter = function (e) {
              (0, r.isLocalURL)(g) &&
                (C.props &&
                  "function" === typeof C.props.onMouseEnter &&
                  C.props.onMouseEnter(e),
                v(f, g, b, { priority: !0 }));
            }),
          (e.passHref || ("a" === C.type && !("href" in C.props))) &&
            (w.href = (0, r.addBasePath)(
              (0, r.addLocale)(b, f && f.locale, f && f.defaultLocale)
            )),
          n.default.cloneElement(C, w)
        );
      };
      a.default = f;
    },
    j1fb: function (e, a, l) {
      "use strict";
      var t = l("q1tI"),
        s = l.n(t).a.createElement;
      a.a = function () {
        return s(
          "div",
          { className: "top-header-area" },
          s(
            "div",
            { className: "container" },
            s(
              "div",
              { className: "row align-items-center" },
              s(
                "div",
                { className: "col-lg-8 col-md-9 col-sm-6" },
                s(
                  "ul",
                  { className: "header-content-left" },
                  s(
                    "li",
                    null,
                    s("i", { className: "bx bx-time" }),
                    "Mon-Fri 9am-5pm"
                  ),
                  s(
                    "li",
                    null,
                    s(
                      "a",
                      { href: "tel:+19194211323" },
                      s("i", { className: "bx bx-phone-call" }),
                      "Call Us: +821-456-241"
                    )
                  ),
                  s(
                    "li",
                    null,
                    s(
                      "a",
                      { href: "mailto:hello@info.com" },
                      s("i", { className: "bx bxs-paper-plane" }),
                      "Email: hello@info.com"
                    )
                  )
                )
              ),
              s(
                "div",
                { className: "col-lg-4 col-md-3 col-sm-6" },
                s(
                  "ul",
                  { className: "header-content-right" },
                  s(
                    "li",
                    null,
                    s(
                      "a",
                      { href: "#", target: "_blank" },
                      s("i", { className: "bx bxl-facebook" })
                    )
                  ),
                  s(
                    "li",
                    null,
                    s(
                      "a",
                      { href: "#", target: "_blank" },
                      s("i", { className: "bx bxl-twitter" })
                    )
                  ),
                  s(
                    "li",
                    null,
                    s(
                      "a",
                      { href: "#", target: "_blank" },
                      s("i", { className: "bx bxl-pinterest-alt" })
                    )
                  ),
                  s(
                    "li",
                    null,
                    s(
                      "a",
                      { href: "#", target: "_blank" },
                      s("i", { className: "bx bxl-instagram" })
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    jwwS: function (e, a, l) {
      "use strict";
      var t;
      (a.__esModule = !0), (a.LoadableContext = void 0);
      var s = (
        (t = l("q1tI")) && t.__esModule ? t : { default: t }
      ).default.createContext(null);
      a.LoadableContext = s;
    },
    mdYk: function (e, a, l) {
      "use strict";
      var t = l("q1tI"),
        s = l.n(t),
        i = l("YFqc"),
        n = l.n(i),
        r = s.a.createElement;
      a.a = function () {
        var e = new Date().getFullYear();
        return r(
          s.a.Fragment,
          null,
          r(
            "footer",
            { className: "footer-top-area f-bg pt-100 pb-70" },
            r(
              "div",
              { className: "container" },
              r(
                "div",
                { className: "row" },
                r(
                  "div",
                  { className: "col-lg-3 col-md-6" },
                  r(
                    "div",
                    { className: "single-widget" },
                    r(
                      n.a,
                      { href: "/" },
                      r(
                        "a",
                        null,
                        r("img", { src: "/img/logo.png", alt: "Image" })
                      )
                    ),
                    r(
                      "p",
                      null,
                      "Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis, repudiandae ipsam minus et ex, aliquid dolor molestias, earum enim officiis porro obcaecati."
                    ),
                    r(
                      "div",
                      { className: "social-area" },
                      r(
                        "ul",
                        null,
                        r(
                          "li",
                          null,
                          r(
                            "a",
                            { href: "#", target: "_blank" },
                            r("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        r(
                          "li",
                          null,
                          r(
                            "a",
                            { href: "#", target: "_blank" },
                            r("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        r(
                          "li",
                          null,
                          r(
                            "a",
                            { href: "#", target: "_blank" },
                            r("i", { className: "bx bxl-linkedin" })
                          )
                        ),
                        r(
                          "li",
                          null,
                          r(
                            "a",
                            { href: "#", target: "_blank" },
                            r("i", { className: "bx bxl-youtube" })
                          )
                        ),
                        r(
                          "li",
                          null,
                          r(
                            "a",
                            { href: "#", target: "_blank" },
                            r("i", { className: "bx bxl-instagram" })
                          )
                        )
                      )
                    )
                  )
                ),
                r(
                  "div",
                  { className: "col-lg-3 col-md-6" },
                  r(
                    "div",
                    { className: "single-widget" },
                    r("h3", null, "Departments"),
                    r(
                      "ul",
                      null,
                      r(
                        "li",
                        null,
                        r("a", { href: "#" }, "Surgery & Radiology")
                      ),
                      r("li", null, r("a", { href: "#" }, "Children Care")),
                      r("li", null, r("a", { href: "#" }, "Orthopedics")),
                      r("li", null, r("a", { href: "#" }, "Nuclear Magnetic")),
                      r("li", null, r("a", { href: "#" }, "Eye Treatment")),
                      r("li", null, r("a", { href: "#" }, "X-Ray"))
                    )
                  )
                ),
                r(
                  "div",
                  { className: "col-lg-3 col-md-6" },
                  r(
                    "div",
                    { className: "single-widget contact" },
                    r("h3", null, "Get In Touch"),
                    r(
                      "ul",
                      null,
                      r(
                        "li",
                        { className: "pl-0" },
                        r(
                          "a",
                          { href: "tel:+19194211323" },
                          r("i", { className: "bx bx-phone-call" }),
                          r("span", null, "Hotline:"),
                          "Phone: +19194211323"
                        )
                      ),
                      r(
                        "li",
                        { className: "pl-0" },
                        r(
                          "a",
                          { href: "mailto:support@coastalvest.com" },
                          r("i", { className: "bx bx-envelope" }),
                          r("span", null, "Email:"),
                          "support@coastalvest.com"
                        )
                      ),
                      r(
                        "li",
                        null,
                        r("i", { className: "bx bx-location-plus" }),
                        r("span", null, "Address:"),
                        "123, Western Road, Melbourne Australia"
                      )
                    )
                  )
                )
              )
            )
          ),
          r(
            "div",
            { className: "footer-bottom-area" },
            r(
              "div",
              { className: "container" },
              r(
                "div",
                { className: "copy-right" },
                r(
                  "p",
                  null,
                  "Copyright @",
                  e,
                  "  Corf. Designed by ",
                  r(
                    "a",
                    { href: "https://envyTheme.com/", target: "blank" },
                    "EnvyTheme"
                  )
                )
              )
            )
          )
        );
      };
    },
    wx14: function (e, a, l) {
      "use strict";
      function t() {
        return (t =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var l = arguments[a];
              for (var t in l)
                Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      l.d(a, "a", function () {
        return t;
      });
    },
  },
  [["CrqP", 0, 1, 2, 5]],
]);
