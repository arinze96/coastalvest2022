_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [33],
  {
    "0Yqi": function (e, a, t) {
      "use strict";
      function l(e, a) {
        if (null == e) return {};
        var t,
          l,
          n = (function (e, a) {
            if (null == e) return {};
            var t,
              l,
              n = {},
              i = Object.keys(e);
            for (l = 0; l < i.length; l++)
              (t = i[l]), a.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (l = 0; l < i.length; l++)
            (t = i[l]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (n[t] = e[t]));
        }
        return n;
      }
      var n = t("nOHt"),
        i = t("YFqc"),
        s = t.n(i),
        r = t("q1tI"),
        o = t.n(r),
        c = o.a.createElement;
      a.a = Object(n.withRouter)(function (e) {
        var a = e.router,
          t = e.children,
          n = l(e, ["router", "children"]),
          i = r.Children.only(t),
          u = i.props.className || "";
        return (
          a.pathname === n.href &&
            n.activeClassName &&
            (u = "".concat(u, " ").concat(n.activeClassName).trim()),
          delete n.activeClassName,
          c(s.a, n, o.a.cloneElement(i, { className: u }))
        );
      });
    },
    "2RFb": function (e, a, t) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var l =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
            }
            return e;
          },
        n = (function () {
          function e(e, a) {
            for (var t = 0; t < a.length; t++) {
              var l = a[t];
              (l.enumerable = l.enumerable || !1),
                (l.configurable = !0),
                "value" in l && (l.writable = !0),
                Object.defineProperty(e, l.key, l);
            }
          }
          return function (a, t, l) {
            return t && e(a.prototype, t), l && e(a, l), a;
          };
        })(),
        i = d(t("q1tI")),
        s = d(t("i8i4")),
        r = t("17x9"),
        o = t("dwFv"),
        c = d(t("b7n0")),
        u = d(t("j5U0")),
        m = d(t("Ci6P"));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var f = 0,
        v = 0,
        p = { listeners: [], pending: [] },
        b = !1;
      try {
        var g = Object.defineProperty({}, "passive", {
          get: function () {
            b = !0;
          },
        });
        window.addEventListener("test", null, g);
      } catch (w) {}
      var N = !!b && { capture: !1, passive: !0 },
        h = function (e) {
          var a = s.default.findDOMNode(e);
          if (a) {
            var t = (0, m.default)(a);
            (e.props.overflow &&
            t !== a.ownerDocument &&
            t !== document &&
            t !== document.documentElement
              ? (function (e, a) {
                  var t = s.default.findDOMNode(e),
                    l = void 0,
                    n = void 0;
                  try {
                    var i = a.getBoundingClientRect();
                    (l = i.top), (n = i.height);
                  } catch (w) {
                    (l = f), (n = v);
                  }
                  var r =
                      window.innerHeight ||
                      document.documentElement.clientHeight,
                    o = Math.max(l, 0),
                    c = Math.min(r, l + n) - o,
                    u = void 0,
                    m = void 0;
                  try {
                    var d = t.getBoundingClientRect();
                    (u = d.top), (m = d.height);
                  } catch (w) {
                    (u = f), (m = v);
                  }
                  var p = u - o,
                    b = Array.isArray(e.props.offset)
                      ? e.props.offset
                      : [e.props.offset, e.props.offset];
                  return p - b[0] <= c && p + m + b[1] >= 0;
                })(e, t)
              : (function (e) {
                  var a = s.default.findDOMNode(e);
                  if (
                    !(
                      a.offsetWidth ||
                      a.offsetHeight ||
                      a.getClientRects().length
                    )
                  )
                    return !1;
                  var t = void 0,
                    l = void 0;
                  try {
                    var n = a.getBoundingClientRect();
                    (t = n.top), (l = n.height);
                  } catch (w) {
                    (t = f), (l = v);
                  }
                  var i =
                      window.innerHeight ||
                      document.documentElement.clientHeight,
                    r = Array.isArray(e.props.offset)
                      ? e.props.offset
                      : [e.props.offset, e.props.offset];
                  return t - r[0] <= i && t + l + r[1] >= 0;
                })(e)) &&
              (e.visible ||
                (p.pending.push(e),
                (e.visible = !0),
                e.setState({ stopped: !1 }),
                e.forceUpdate()));
          }
        },
        y = function () {
          p.listeners.forEach(function (e) {
            return h(e);
          }),
            p.pending.forEach(function (e) {
              return (0, c.default)(p.listeners, e);
            }),
            (p.pending = []);
        },
        x = (function (e) {
          function a(e) {
            !(function (e, a) {
              if (!(e instanceof a))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            var t = (function (e, a) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !a || ("object" !== typeof a && "function" !== typeof a)
                ? e
                : a;
            })(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
            return (
              (t.customStyle = function (e) {
                var a = t.props,
                  l = a.duration,
                  n = a.delay,
                  i = a.iteration,
                  s = a.animation,
                  r = a.disabled,
                  o = {
                    animationName: e ? "none" : s,
                    visibility: e && !r ? "hidden" : "visible",
                  };
                return (
                  l && (o.animationDuration = l),
                  n && (o.animationDelay = n),
                  i && (o.animationIterationCount = i),
                  o
                );
              }),
              (t.resetAnimation = function (e) {
                -1 !== e.type.toLowerCase().indexOf("animationend") &&
                  t.setState({ stopped: !0 }, function () {
                    var e = t.props.callback;
                    "function" === typeof e &&
                      e.call(t, s.default.findDOMNode(t));
                  });
              }),
              (t.visible = !1),
              (t.state = { stopped: !1 }),
              t
            );
          }
          return (
            (function (e, a) {
              if ("function" !== typeof a && null !== a)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof a
                );
              (e.prototype = Object.create(a && a.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                a &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, a)
                    : (e.__proto__ = a));
            })(a, e),
            n(a, [
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.disabled) return !1;
                  if (this.props.overflow) {
                    var e = (0, m.default)(s.default.findDOMNode(this));
                    if (e && "function" === typeof e.getAttribute) {
                      var a = +e.getAttribute("data-react-wow") + 1;
                      1 === a && (0, o.on)(e, "scroll", y, N),
                        e.setAttribute("data-react-wow", a);
                    }
                  } else if (!p.listeners.length) {
                    var t = this.props,
                      l = t.scroll,
                      n = t.resize;
                    l && (0, o.on)(window, "scroll", y, N),
                      n && (0, o.on)(window, "resize", y, N);
                  }
                  p.listeners.push(this), h(this);
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function () {
                  return this.visible;
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if (this.props.disabled) return !1;
                  if (this.props.overflow) {
                    var e = (0, m.default)(s.default.findDOMNode(this));
                    if (e && "function" === typeof e.getAttribute) {
                      var a = +e.getAttribute("data-react-wow") - 1;
                      0 === a
                        ? ((0, o.off)(e, "scroll", y, N),
                          e.removeAttribute("data-react-wow"))
                        : e.setAttribute("data-react-wow", a);
                    }
                  }
                  (0, c.default)(p.listeners, this),
                    p.listeners.length ||
                      ((0, o.off)(window, "scroll", y, N),
                      (0, o.off)(window, "resize", y, N));
                },
              },
              {
                key: "mergeProps",
                value: function (e) {
                  var a = this.props,
                    t = a.animation,
                    n = a.animateClass,
                    i = this.customStyle(!this.visible),
                    s = this.visible
                      ? t + " " + (this.state.stopped ? "" : n)
                      : t;
                  return l({}, e, {
                    style: l({}, e.style, i),
                    className: (0, u.default)(
                      (e.className ? e.className : "") + " " + s
                    ),
                    onAnimationEnd: this.resetAnimation,
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    a = this.props,
                    t = a.children;
                  return a.disabled
                    ? t
                    : t
                    ? i.default.Children.map(t, function (a) {
                        return i.default.cloneElement(a, e.mergeProps(a.props));
                      })
                    : null;
                },
              },
            ]),
            a
          );
        })(i.default.Component);
      (x.propTypes = {
        duration: r.string,
        delay: r.string,
        iteration: r.string,
        animation: r.string,
        children: r.node,
        scroll: r.bool,
        resize: r.bool,
        animateClass: r.string,
        offset: (0, r.oneOfType)([r.number, (0, r.arrayOf)(r.number)]),
        overflow: r.bool,
        callback: r.func,
      }),
        (x.defaultProps = {
          duration: "",
          delay: "",
          iteration: "",
          animation: "",
          scroll: !0,
          resize: !0,
          animateClass: "animated",
          offset: 0,
          overflow: !1,
          disabled: !1,
          callback: function () {},
        }),
        (a.default = x);
    },
    "2qu3": function (e, a, t) {
      "use strict";
      var l = t("lSNA"),
        n = t("lwsE"),
        i = t("W8MJ");
      function s(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          a &&
            (l = l.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, l);
        }
        return t;
      }
      function r(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? s(Object(t), !0).forEach(function (a) {
                l(e, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (a) {
                Object.defineProperty(
                  e,
                  a,
                  Object.getOwnPropertyDescriptor(t, a)
                );
              });
        }
        return e;
      }
      function o(e, a) {
        var t;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (t = (function (e, a) {
              if (!e) return;
              if ("string" === typeof e) return c(e, a);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(e);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return c(e, a);
            })(e)) ||
            (a && e && "number" === typeof e.length)
          ) {
            t && (e = t);
            var l = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return l >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[l++] };
              },
              e: function (e) {
                throw e;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          s = !0,
          r = !1;
        return {
          s: function () {
            t = e[Symbol.iterator]();
          },
          n: function () {
            var e = t.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (r = !0), (i = e);
          },
          f: function () {
            try {
              s || null == t.return || t.return();
            } finally {
              if (r) throw i;
            }
          },
        };
      }
      function c(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, l = new Array(a); t < a; t++) l[t] = e[t];
        return l;
      }
      (a.__esModule = !0), (a.default = void 0);
      var u,
        m = (u = t("q1tI")) && u.__esModule ? u : { default: u },
        d = t("8L3h"),
        f = t("jwwS");
      var v = [],
        p = [],
        b = !1;
      function g(e) {
        var a = e(),
          t = { loading: !0, loaded: null, error: null };
        return (
          (t.promise = a
            .then(function (e) {
              return (t.loading = !1), (t.loaded = e), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), (t.error = e), e);
            })),
          t
        );
      }
      function N(e) {
        var a = { loading: !1, loaded: {}, error: null },
          t = [];
        try {
          Object.keys(e).forEach(function (l) {
            var n = g(e[l]);
            n.loading
              ? (a.loading = !0)
              : ((a.loaded[l] = n.loaded), (a.error = n.error)),
              t.push(n.promise),
              n.promise
                .then(function (e) {
                  a.loaded[l] = e;
                })
                .catch(function (e) {
                  a.error = e;
                });
          });
        } catch (l) {
          a.error = l;
        }
        return (
          (a.promise = Promise.all(t)
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
        return m.default.createElement(
          (function (e) {
            return e && e.__esModule ? e.default : e;
          })(e),
          a
        );
      }
      function y(e, a) {
        var t = Object.assign(
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
          l = null;
        function n() {
          if (!l) {
            var a = new x(e, t);
            l = {
              getCurrentValue: a.getCurrentValue.bind(a),
              subscribe: a.subscribe.bind(a),
              retry: a.retry.bind(a),
              promise: a.promise.bind(a),
            };
          }
          return l.promise();
        }
        if (!b && "function" === typeof t.webpack) {
          var i = t.webpack();
          p.push(function (e) {
            var a,
              t = o(i);
            try {
              for (t.s(); !(a = t.n()).done; ) {
                var l = a.value;
                if (-1 !== e.indexOf(l)) return n();
              }
            } catch (s) {
              t.e(s);
            } finally {
              t.f();
            }
          });
        }
        var s = function (e, a) {
          n();
          var i = m.default.useContext(f.LoadableContext),
            s = (0, d.useSubscription)(l);
          return (
            m.default.useImperativeHandle(
              a,
              function () {
                return { retry: l.retry };
              },
              []
            ),
            i &&
              Array.isArray(t.modules) &&
              t.modules.forEach(function (e) {
                i(e);
              }),
            m.default.useMemo(
              function () {
                return s.loading || s.error
                  ? m.default.createElement(t.loading, {
                      isLoading: s.loading,
                      pastDelay: s.pastDelay,
                      timedOut: s.timedOut,
                      error: s.error,
                      retry: l.retry,
                    })
                  : s.loaded
                  ? t.render(s.loaded, e)
                  : null;
              },
              [e, s]
            )
          );
        };
        return (
          (s.preload = function () {
            return n();
          }),
          (s.displayName = "LoadableComponent"),
          m.default.forwardRef(s)
        );
      }
      var x = (function () {
        function e(a, t) {
          n(this, e),
            (this._loadFn = a),
            (this._opts = t),
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
                  t = this._opts;
                a.loading &&
                  ("number" === typeof t.delay &&
                    (0 === t.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, t.delay))),
                  "number" === typeof t.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, t.timeout))),
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
      function w(e) {
        return y(g, e);
      }
      function k(e, a) {
        for (var t = []; e.length; ) {
          var l = e.pop();
          t.push(l(a));
        }
        return Promise.all(t).then(function () {
          if (e.length) return k(e, a);
        });
      }
      (w.Map = function (e) {
        if ("function" !== typeof e.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return y(N, e);
      }),
        (w.preloadAll = function () {
          return new Promise(function (e, a) {
            k(v).then(e, a);
          });
        }),
        (w.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (a) {
            var t = function () {
              return (b = !0), a();
            };
            k(p, e).then(t, t);
          });
        }),
        (window.__NEXT_PRELOADREADY = w.preloadReady);
      var C = w;
      a.default = C;
    },
    "6Ltu": function (e, a, t) {
      "use strict";
      t.r(a);
      var l = t("q1tI"),
        n = t.n(l),
        i = t("ODXe"),
        s = t("0Yqi"),
        r = t("j1fb"),
        o = n.a.createElement,
        c = function () {
          var e = n.a.useState(!0),
            a = Object(i.a)(e, 2),
            t = a[0],
            l = a[1],
            c = function () {
              l(!t);
            };
          n.a.useEffect(function () {
            var e = document.getElementById("navbar");
            document.addEventListener("scroll", function () {
              window.scrollY > 170
                ? e.classList.add("is-sticky")
                : e.classList.remove("is-sticky");
            }),
              window.scrollTo(0, 0);
          });
          var u = t
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show",
            m = t
              ? "navbar-toggler navbar-toggler-right collapsed"
              : "navbar-toggler navbar-toggler-right";
          return o(
            n.a.Fragment,
            null,
            o(
              "header",
              { className: "header-area" },
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
                          s.a,
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
                            className: m,
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
                          { className: u, id: "navbarSupportedContent" },
                          o(
                            "ul",
                            { className: "navbar-nav m-auto" },
                            o(
                              "li",
                              { className: "nav-item" },
                              o(
                                s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                s.a,
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
                                s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                        s.a,
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
                                        s.a,
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
                                        s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                    s.a,
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
                                s.a,
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
                                s.a,
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
        u = t("YFqc"),
        m = t.n(u),
        d = t("2RFb"),
        f = t.n(d),
        v = n.a.createElement,
        p = function () {
          return v(
            "div",
            { className: "main-banner-area-five" },
            v(
              "div",
              { className: "d-table" },
              v(
                "div",
                { className: "d-table-cell" },
                v(
                  "div",
                  { className: "container-fluid" },
                  v(
                    "div",
                    { className: "row" },
                    v(
                      "div",
                      { className: "col-lg-7" },
                      v(
                        "div",
                        { className: "banner-text" },
                        v(
                          f.a,
                          { animation: "fadeInUp", delay: "1s" },
                          v("span", null, "Smarter Service Care")
                        ),
                        v(
                          f.a,
                          { animation: "fadeInUp", delay: "1s" },
                          v(
                            "h1",
                            null,
                            "Emergency The World\u2019s Wait for Find Doctor Easy Way"
                          )
                        ),
                        v(
                          f.a,
                          { animation: "fadeInUp", delay: "1s" },
                          v(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua gravida. Risus commodo."
                          )
                        ),
                        v(
                          f.a,
                          { animation: "fadeInUp", delay: "1s" },
                          v(
                            "div",
                            { className: "banner-btn" },
                            v(
                              m.a,
                              { href: "/appointment" },
                              v(
                                "a",
                                { className: "default-btn" },
                                "Book An Appointment"
                              )
                            )
                          )
                        )
                      )
                    ),
                    v(
                      "div",
                      { className: "col-lg-5 pr-0" },
                      v(
                        "div",
                        { className: "banner-img-wrap" },
                        v(
                          f.a,
                          { animation: "fadeInUp", delay: "1s" },
                          v(
                            "div",
                            { className: "banner-img" },
                            v("img", {
                              src: "/img/home-five/home-five-banner.png",
                              alt: "Image",
                            })
                          )
                        ),
                        v(
                          "div",
                          { className: "shapes" },
                          v("img", {
                            src: "/img/home-five/home-five-shape-3.png",
                            alt: "Image",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            v(
              "div",
              { className: "shape" },
              v("img", {
                src: "/img/home-five/home-five-shape-1.png",
                alt: "Image",
              })
            ),
            v(
              "div",
              { className: "shape-2" },
              v("img", {
                src: "/img/home-five/home-five-shape-2.png",
                alt: "Image",
              })
            )
          );
        },
        b = n.a.createElement,
        g = function () {
          return b(
            "div",
            { className: "search-area" },
            b(
              "div",
              { className: "container" },
              b(
                "div",
                { className: "row" },
                b(
                  "div",
                  { className: "col-lg-8" },
                  b(
                    "form",
                    { className: "top-search-from" },
                    b(
                      "div",
                      { className: "row" },
                      b(
                        "div",
                        { className: "col-12" },
                        b(
                          "div",
                          { className: "searchs-wraps" },
                          b("input", {
                            type: "text",
                            className: "form-control",
                            id: "Search",
                            placeholder: "Start Your Search",
                          }),
                          b(
                            "button",
                            { type: "button", className: "search-btn" },
                            b("i", { className: "bx bx-search" })
                          )
                        )
                      )
                    ),
                    b(
                      "div",
                      { className: "row" },
                      b(
                        "div",
                        { className: "col-lg-5 col-sm-6" },
                        b(
                          "div",
                          { className: "form-group" },
                          b("input", {
                            type: "text",
                            className: "form-control",
                            id: "Location",
                            placeholder: "Search Doctors, clinics,etc",
                          })
                        )
                      ),
                      b(
                        "div",
                        { className: "col-lg-5 col-sm-6" },
                        b(
                          "div",
                          { className: "form-group" },
                          b(
                            "select",
                            { className: "form-control" },
                            b("option", { value: "0" }, "Cardiologist"),
                            b("option", { value: "1" }, "Necrologist"),
                            b("option", { value: "2" }, "Surgery Specialist"),
                            b("option", { value: "3" }, "Allergist")
                          )
                        )
                      ),
                      b(
                        "div",
                        { className: "col-lg-2" },
                        b(
                          "button",
                          { type: "button", className: "find-btn" },
                          b("i", { className: "bx bx-right-arrow-alt" })
                        )
                      )
                    )
                  )
                ),
                b(
                  "div",
                  { className: "col-lg-4" },
                  b(
                    "div",
                    { className: "join-our-team" },
                    b("span", null, "Are You Doctor?"),
                    b("h3", null, "Join Our Team"),
                    b(
                      m.a,
                      { href: "#" },
                      b("a", { className: "default-btn" }, "Join As A Doctor")
                    )
                  )
                )
              )
            )
          );
        },
        N = n.a.createElement,
        h = function () {
          return N(
            "div",
            { className: "first-facility-emergency pt-100 pb-70" },
            N(
              "div",
              { className: "container" },
              N(
                "div",
                { className: "row" },
                N(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  N(
                    "div",
                    { className: "first-facility-item" },
                    N("i", { className: "flaticon-care" }),
                    N("h3", null, "Special Service"),
                    N(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
                    )
                  )
                ),
                N(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  N(
                    "div",
                    { className: "first-facility-item" },
                    N("i", { className: "flaticon-support" }),
                    N("h3", null, "24/7 Advanced Care"),
                    N(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
                    )
                  )
                ),
                N(
                  "div",
                  { className: "col-lg-4 col-sm-6 offset-sm-3 offset-lg-0" },
                  N(
                    "div",
                    { className: "first-facility-item" },
                    N("i", { className: "flaticon-online-learning" }),
                    N("h3", null, "Get Result Online"),
                    N(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
                    )
                  )
                )
              )
            )
          );
        },
        y = n.a.createElement,
        x = function () {
          return y(
            "div",
            { className: "about-area pb-100" },
            y(
              "div",
              { className: "container" },
              y(
                "div",
                { className: "row align-items-center" },
                y(
                  "div",
                  { className: "col-lg-6" },
                  y(
                    "div",
                    { className: "about-img" },
                    y("img", {
                      src: "/img/home-five/home-five-about1.jpg",
                      alt: "Image",
                    })
                  )
                ),
                y(
                  "div",
                  { className: "col-lg-6" },
                  y(
                    "div",
                    { className: "about-content" },
                    y("span", { className: "top-title" }, "About Us"),
                    y(
                      "h2",
                      null,
                      "We are trusted The Best Certificate Healthcare"
                    ),
                    y(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                    ),
                    y(
                      "ul",
                      null,
                      y(
                        "li",
                        null,
                        y("i", { className: "flaticon-tick" }),
                        "Scientific skills for getting a better result"
                      ),
                      y(
                        "li",
                        null,
                        y("i", { className: "flaticon-tick" }),
                        "A good environment for work"
                      ),
                      y(
                        "li",
                        null,
                        y("i", { className: "flaticon-tick" }),
                        "Professional doctors"
                      ),
                      y(
                        "li",
                        null,
                        y("i", { className: "flaticon-tick" }),
                        "Emergency services"
                      ),
                      y(
                        "li",
                        null,
                        y("i", { className: "flaticon-tick" }),
                        "Digital laboratory"
                      )
                    ),
                    y(
                      m.a,
                      { href: "/about" },
                      y("a", { className: "default-btn" }, "More About Us")
                    )
                  )
                )
              )
            )
          );
        },
        w = n.a.createElement,
        k = function () {
          return w(
            "div",
            { className: "professionals-area pb-70" },
            w(
              "div",
              { className: "container" },
              w(
                "div",
                { className: "section-title" },
                w("span", { className: "top-title" }, "Meet Our Professionals"),
                w("h2", null, "Top Rated Specialist"),
                w(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse"
                )
              ),
              w(
                "div",
                { className: "row" },
                w(
                  "div",
                  { className: "col-lg-4 col-md-6" },
                  w(
                    "div",
                    { className: "single-professionals" },
                    w(
                      "div",
                      { className: "professionals-img" },
                      w("img", {
                        src: "/img/doctors/doctor11.png",
                        alt: "Image",
                      }),
                      w("i", { className: "bx bx-heart" })
                    ),
                    w("h3", null, "Dr. Smilen Peter"),
                    w("span", null, "Ph.D, DPT, MS OMPT"),
                    w(
                      "ul",
                      null,
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" }))
                    ),
                    w(
                      "div",
                      { className: "location" },
                      w(
                        "span",
                        null,
                        w("i", { className: "bx bx-location-plus" }),
                        "United Kingdom"
                      ),
                      w(
                        "span",
                        { className: "right" },
                        w("i", { className: "bx bx-notepad" }),
                        "Not Available"
                      )
                    )
                  )
                ),
                w(
                  "div",
                  { className: "col-lg-4 col-md-6" },
                  w(
                    "div",
                    { className: "single-professionals" },
                    w(
                      "div",
                      { className: "professionals-img" },
                      w("img", {
                        src: "/img/doctors/doctor10.png",
                        alt: "Image",
                      }),
                      w("i", { className: "bx bx-heart" })
                    ),
                    w("h3", null, "Dr. Oliver Leo"),
                    w("span", null, "Ph.D, DPT, MS OMPT"),
                    w(
                      "ul",
                      null,
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" }))
                    ),
                    w(
                      "div",
                      { className: "location" },
                      w(
                        "span",
                        null,
                        w("i", { className: "bx bx-location-plus" }),
                        "United Kingdom"
                      ),
                      w(
                        "span",
                        { className: "right" },
                        w("i", { className: "bx bx-notepad" }),
                        "Not Available"
                      )
                    )
                  )
                ),
                w(
                  "div",
                  { className: "col-lg-4 col-md-6 offset-md-3 offset-lg-0" },
                  w(
                    "div",
                    { className: "single-professionals" },
                    w(
                      "div",
                      { className: "professionals-img" },
                      w("img", {
                        src: "/img/doctors/doctor12.png",
                        alt: "Image",
                      }),
                      w("i", { className: "bx bx-heart" })
                    ),
                    w("h3", null, "Dr. Oscar Ava"),
                    w("span", null, "Ph.D, DPT, MS OMPT"),
                    w(
                      "ul",
                      null,
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" })),
                      w("li", null, w("i", { className: "bx bxs-star" }))
                    ),
                    w(
                      "div",
                      { className: "location" },
                      w(
                        "span",
                        null,
                        w("i", { className: "bx bx-location-plus" }),
                        "United Kingdom"
                      ),
                      w(
                        "span",
                        { className: "right" },
                        w("i", { className: "bx bx-notepad" }),
                        "Not Available"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        C = t("K/5y"),
        O = t("LKaZ"),
        _ = t("Wf2E"),
        E = t("mdYk"),
        S = t("LXQz"),
        D = n.a.createElement;
      a.default = function () {
        return D(
          n.a.Fragment,
          null,
          D(c, null),
          D(p, null),
          D(g, null),
          D(h, null),
          D(x, null),
          D(k, null),
          D(S.a, null),
          D(C.a, null),
          D(_.a, null),
          D(O.a, null),
          D(E.a, null)
        );
      };
    },
    "6m/o": function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index-5",
        function () {
          return t("6Ltu");
        },
      ]);
    },
    Ci6P: function (e, a, t) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function (e) {
          if (!e) return document.documentElement;
          for (
            var a = "absolute" === e.style.position, t = /(scroll|auto)/, l = e;
            l;

          ) {
            if (!l.parentNode)
              return e.ownerDocument || document.documentElement;
            var n = window.getComputedStyle(l),
              i = n.position,
              s = n.overflow,
              r = n["overflow-x"],
              o = n["overflow-y"];
            if ("static" === i && a) l = l.parentNode;
            else {
              if (t.test(s) && t.test(r) && t.test(o)) return l;
              l = l.parentNode;
            }
          }
          return (
            e.ownerDocument || e.documentElement || document.documentElement
          );
        });
    },
    "K/5y": function (e, a, t) {
      "use strict";
      var l = t("wx14"),
        n = t("ODXe"),
        i = t("q1tI"),
        s = t.n(i),
        r = t("a6RD"),
        o = t.n(r),
        c = s.a.createElement,
        u = o()(
          function () {
            return t.e(4).then(t.t.bind(null, "Rst5", 7));
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
        m = {
          loop: !0,
          nav: !0,
          autoplay: !0,
          autoplayHoverPause: !0,
          mouseDrag: !0,
          margin: 30,
          center: !0,
          dots: !1,
          smartSpeed: 1500,
          navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>",
          ],
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 3 },
          },
        };
      a.a = function () {
        var e = s.a.useState(!1),
          a = Object(n.a)(e, 2),
          t = a[0],
          i = a[1];
        return (
          s.a.useEffect(function () {
            i(!0);
          }, []),
          c(
            "div",
            { className: "doctors-area pt-100 pb-70" },
            c(
              "div",
              { className: "container" },
              c(
                "div",
                { className: "section-title" },
                c("span", { className: "top-title" }, "Our Doctors"),
                c("h2", null, "Our Specialist Doctors"),
                c(
                  "p",
                  null,
                  "A specialist is a medical doctor who is an expert in a specific area of medicine. To see a specialist, you will need to get a letter of referral from your local doctor first. Specialists work in clinics, and in both private and public hospitals."
                )
              ),
              t
                ? c(
                    u,
                    Object(l.a)(
                      { className: "doctors-wrap owl-carousel owl-theme" },
                      m
                    ),
                    c(
                      "div",
                      { className: "single-doctor" },
                      c("img", {
                        src: "/img/doctors/doctor1.png",
                        alt: "Image",
                      }),
                      c("h3", null, "Dr. Jelin Alis"),
                      c("span", { className: "top-title" }, "Cardiologist"),
                      c(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin"
                      ),
                      c(
                        "ul",
                        null,
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-pinterest-alt" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-instagram" })
                          )
                        )
                      )
                    ),
                    c(
                      "div",
                      { className: "single-doctor" },
                      c("img", {
                        src: "/img/doctors/doctor2.png",
                        alt: "Image",
                      }),
                      c("h3", null, "Dr. Jemse Watson"),
                      c("span", { className: "top-title" }, "Necrologist"),
                      c(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin"
                      ),
                      c(
                        "ul",
                        null,
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-pinterest-alt" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-instagram" })
                          )
                        )
                      )
                    ),
                    c(
                      "div",
                      { className: "single-doctor" },
                      c("img", {
                        src: "/img/doctors/doctor3.png",
                        alt: "Image",
                      }),
                      c("h3", null, "Dr. Neels Bore"),
                      c(
                        "span",
                        { className: "top-title" },
                        "Surgery Specialist"
                      ),
                      c(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin"
                      ),
                      c(
                        "ul",
                        null,
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-pinterest-alt" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-instagram" })
                          )
                        )
                      )
                    ),
                    c(
                      "div",
                      { className: "single-doctor" },
                      c("img", {
                        src: "/img/doctors/doctor11.png",
                        alt: "Image",
                      }),
                      c("h3", null, "Dr. Kilva Alis"),
                      c("span", { className: "top-title" }, "Cardiologist"),
                      c(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodin"
                      ),
                      c(
                        "ul",
                        null,
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-pinterest-alt" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-instagram" })
                          )
                        )
                      )
                    )
                  )
                : ""
            )
          )
        );
      };
    },
    LKaZ: function (e, a, t) {
      "use strict";
      var l = t("q1tI"),
        n = t.n(l),
        i = t("YFqc"),
        s = t.n(i),
        r = n.a.createElement;
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
                    s.a,
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
                      s.a,
                      { href: "/blog-details" },
                      r(
                        "a",
                        null,
                        r("h3", null, "250+ Medical Tips We just had to share")
                      )
                    ),
                    r(
                      s.a,
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
                    s.a,
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
                      s.a,
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
                      s.a,
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
                    s.a,
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
                      s.a,
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
                      s.a,
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
    LXQz: function (e, a, t) {
      "use strict";
      var l = t("q1tI"),
        n = t.n(l).a.createElement;
      a.a = function () {
        return n(
          "div",
          { className: "counter-area bg-color pt-100 pb-70" },
          n(
            "div",
            { className: "container" },
            n(
              "div",
              { className: "row" },
              n(
                "div",
                { className: "col-lg-3 col-sm-6" },
                n(
                  "div",
                  { className: "single-counter" },
                  n("i", { className: "flaticon-man" }),
                  n(
                    "h2",
                    null,
                    "540 ",
                    n("span", { className: "target" }, "+")
                  ),
                  n("p", null, "Expert Doctors")
                )
              ),
              n(
                "div",
                { className: "col-lg-3 col-sm-6" },
                n(
                  "div",
                  { className: "single-counter" },
                  n("i", { className: "flaticon-tick" }),
                  n(
                    "h2",
                    null,
                    "990 ",
                    n("span", { className: "target" }, "+")
                  ),
                  n("p", null, "Successful Story")
                )
              ),
              n(
                "div",
                { className: "col-lg-3 col-sm-6" },
                n(
                  "div",
                  { className: "single-counter" },
                  n("i", { className: "flaticon-trophy" }),
                  n(
                    "h2",
                    null,
                    "3500 ",
                    n("span", { className: "traget" }, "+")
                  ),
                  n("p", null, "Global Presence")
                )
              ),
              n(
                "div",
                { className: "col-lg-3 col-sm-6" },
                n(
                  "div",
                  { className: "single-counter" },
                  n("i", { className: "flaticon-experience" }),
                  n("h2", null, "54 ", n("span", { className: "traget" }, "+")),
                  n("p", null, "Experiences")
                )
              )
            )
          )
        );
      };
    },
    ODXe: function (e, a, t) {
      "use strict";
      function l(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, l = new Array(a); t < a; t++) l[t] = e[t];
        return l;
      }
      function n(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var t = [],
                l = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var s, r = e[Symbol.iterator]();
                  !(l = (s = r.next()).done) &&
                  (t.push(s.value), !a || t.length !== a);
                  l = !0
                );
              } catch (o) {
                (n = !0), (i = o);
              } finally {
                try {
                  l || null == r.return || r.return();
                } finally {
                  if (n) throw i;
                }
              }
              return t;
            }
          })(e, a) ||
          (function (e, a) {
            if (e) {
              if ("string" === typeof e) return l(e, a);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? l(e, a)
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
      t.d(a, "a", function () {
        return n;
      });
    },
    Wf2E: function (e, a, t) {
      "use strict";
      var l = t("q1tI"),
        n = t.n(l).a.createElement;
      a.a = function () {
        return n(
          "div",
          { className: "subscribe-area" },
          n(
            "div",
            { className: "container" },
            n(
              "div",
              { className: "row align-items-center" },
              n(
                "div",
                { className: "col-lg-6" },
                n("h2", null, "Subscribe Now"),
                n("p", null, "Get our latest news & update regularly")
              ),
              n(
                "div",
                { className: "col-lg-6" },
                n(
                  "form",
                  { className: "newsletter-form" },
                  n("input", {
                    type: "email",
                    className: "form-control",
                    placeholder: "Enter Your Email",
                    name: "EMAIL",
                    required: !0,
                  }),
                  n(
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
    YFqc: function (e, a, t) {
      e.exports = t("cTJO");
    },
    a6RD: function (e, a, t) {
      "use strict";
      var l = t("lSNA");
      function n(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          a &&
            (l = l.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, l);
        }
        return t;
      }
      function i(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? n(Object(t), !0).forEach(function (a) {
                l(e, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : n(Object(t)).forEach(function (a) {
                Object.defineProperty(
                  e,
                  a,
                  Object.getOwnPropertyDescriptor(t, a)
                );
              });
        }
        return e;
      }
      (a.__esModule = !0),
        (a.noSSR = o),
        (a.default = function (e, a) {
          var t = s.default,
            l = {
              loading: function (e) {
                e.error, e.isLoading;
                return e.pastDelay, null;
              },
            };
          e instanceof Promise
            ? (l.loader = function () {
                return e;
              })
            : "function" === typeof e
            ? (l.loader = e)
            : "object" === typeof e && (l = i(i({}, l), e));
          if (
            ((l = i(i({}, l), a)),
            "object" === typeof e &&
              !(e instanceof Promise) &&
              (e.render &&
                (l.render = function (a, t) {
                  return e.render(t, a);
                }),
              e.modules))
          ) {
            t = s.default.Map;
            var n = {},
              r = e.modules();
            Object.keys(r).forEach(function (e) {
              var a = r[e];
              "function" !== typeof a.then
                ? (n[e] = a)
                : (n[e] = function () {
                    return a.then(function (e) {
                      return e.default || e;
                    });
                  });
            }),
              (l.loader = n);
          }
          l.loadableGenerated &&
            delete (l = i(i({}, l), l.loadableGenerated)).loadableGenerated;
          if ("boolean" === typeof l.ssr) {
            if (!l.ssr) return delete l.ssr, o(t, l);
            delete l.ssr;
          }
          return t(l);
        });
      r(t("q1tI"));
      var s = r(t("2qu3"));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, a) {
        return delete a.webpack, delete a.modules, e(a);
      }
    },
    b7n0: function (e, a, t) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            a = arguments[1],
            t = e.indexOf(a);
          -1 !== t && e.splice(t, 1);
        });
    },
    cTJO: function (e, a, t) {
      "use strict";
      var l = t("J4zp"),
        n = t("284h");
      (a.__esModule = !0), (a.default = void 0);
      var i,
        s = n(t("q1tI")),
        r = t("elyg"),
        o = t("nOHt"),
        c = new Map(),
        u = window.IntersectionObserver,
        m = {};
      var d = function (e, a) {
        var t =
          i ||
          (u
            ? (i = new u(
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
        return t
          ? (t.observe(e),
            c.set(e, a),
            function () {
              try {
                t.unobserve(e);
              } catch (a) {
                console.error(a);
              }
              c.delete(e);
            })
          : function () {};
      };
      function f(e, a, t, l) {
        (0, r.isLocalURL)(a) &&
          (e.prefetch(a, t, l).catch(function (e) {
            0;
          }),
          (m[a + "%" + t] = !0));
      }
      var v = function (e) {
        var a = !1 !== e.prefetch,
          t = s.default.useState(),
          n = l(t, 2),
          i = n[0],
          c = n[1],
          v = (0, o.useRouter)(),
          p = (v && v.pathname) || "/",
          b = s.default.useMemo(
            function () {
              var a = (0, r.resolveHref)(p, e.href, !0),
                t = l(a, 2),
                n = t[0],
                i = t[1];
              return {
                href: n,
                as: e.as ? (0, r.resolveHref)(p, e.as) : i || n,
              };
            },
            [p, e.href, e.as]
          ),
          g = b.href,
          N = b.as;
        s.default.useEffect(
          function () {
            if (
              a &&
              u &&
              i &&
              i.tagName &&
              (0, r.isLocalURL)(g) &&
              !m[g + "%" + N]
            )
              return d(i, function () {
                f(v, g, N);
              });
          },
          [a, i, g, N, v]
        );
        var h = e.children,
          y = e.replace,
          x = e.shallow,
          w = e.scroll;
        "string" === typeof h && (h = s.default.createElement("a", null, h));
        var k = s.Children.only(h),
          C = {
            ref: function (e) {
              e && c(e),
                k &&
                  "object" === typeof k &&
                  k.ref &&
                  ("function" === typeof k.ref
                    ? k.ref(e)
                    : "object" === typeof k.ref && (k.ref.current = e));
            },
            onClick: function (e) {
              k.props &&
                "function" === typeof k.props.onClick &&
                k.props.onClick(e),
                e.defaultPrevented ||
                  (function (e, a, t, l, n, i, s) {
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
                        (0, r.isLocalURL)(t))) &&
                      (e.preventDefault(),
                      null == s && (s = l.indexOf("#") < 0),
                      a[n ? "replace" : "push"](t, l, { shallow: i }).then(
                        function (e) {
                          e &&
                            s &&
                            (window.scrollTo(0, 0), document.body.focus());
                        }
                      ));
                  })(e, v, g, N, y, x, w);
            },
          };
        return (
          a &&
            (C.onMouseEnter = function (e) {
              (0, r.isLocalURL)(g) &&
                (k.props &&
                  "function" === typeof k.props.onMouseEnter &&
                  k.props.onMouseEnter(e),
                f(v, g, N, { priority: !0 }));
            }),
          (e.passHref || ("a" === k.type && !("href" in k.props))) &&
            (C.href = (0, r.addBasePath)(
              (0, r.addLocale)(N, v && v.locale, v && v.defaultLocale)
            )),
          s.default.cloneElement(k, C)
        );
      };
      a.default = v;
    },
    dwFv: function (e, a, t) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      (a.on = function (e, a, t) {
        var l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        e.addEventListener
          ? e.addEventListener(a, t, l)
          : e.attachEvent &&
            e.attachEvent("on" + a, function (a) {
              t.call(e, a || window.event);
            });
      }),
        (a.off = function (e, a, t) {
          var l =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          e.removeEventListener
            ? e.removeEventListener(a, t, l)
            : e.detachEvent && e.detachEvent("on" + a, t);
        });
    },
    j1fb: function (e, a, t) {
      "use strict";
      var l = t("q1tI"),
        n = t.n(l).a.createElement;
      a.a = function () {
        return n(
          "div",
          { className: "top-header-area" },
          n(
            "div",
            { className: "container" },
            n(
              "div",
              { className: "row align-items-center" },
              n(
                "div",
                { className: "col-lg-8 col-md-9 col-sm-6" },
                n(
                  "ul",
                  { className: "header-content-left" },
                  n(
                    "li",
                    null,
                    n("i", { className: "bx bx-time" }),
                    "Mon-Fri 9am-5pm"
                  ),
                  n(
                    "li",
                    null,
                    n(
                      "a",
                      { href: "tel:+19194211323" },
                      n("i", { className: "bx bx-phone-call" }),
                      "Call Us: +821-456-241"
                    )
                  ),
                  n(
                    "li",
                    null,
                    n(
                      "a",
                      { href: "mailto:hello@info.com" },
                      n("i", { className: "bx bxs-paper-plane" }),
                      "Email: hello@info.com"
                    )
                  )
                )
              ),
              n(
                "div",
                { className: "col-lg-4 col-md-3 col-sm-6" },
                n(
                  "ul",
                  { className: "header-content-right" },
                  n(
                    "li",
                    null,
                    n(
                      "a",
                      { href: "#", target: "_blank" },
                      n("i", { className: "bx bxl-facebook" })
                    )
                  ),
                  n(
                    "li",
                    null,
                    n(
                      "a",
                      { href: "#", target: "_blank" },
                      n("i", { className: "bx bxl-twitter" })
                    )
                  ),
                  n(
                    "li",
                    null,
                    n(
                      "a",
                      { href: "#", target: "_blank" },
                      n("i", { className: "bx bxl-pinterest-alt" })
                    )
                  ),
                  n(
                    "li",
                    null,
                    n(
                      "a",
                      { href: "#", target: "_blank" },
                      n("i", { className: "bx bxl-instagram" })
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    j5U0: function (e, a, t) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            a = e.trim().split(" ");
          return a
            .filter(function (e, t) {
              return !!e && a.indexOf(e) === t;
            })
            .join(" ");
        });
    },
    jwwS: function (e, a, t) {
      "use strict";
      var l;
      (a.__esModule = !0), (a.LoadableContext = void 0);
      var n = (
        (l = t("q1tI")) && l.__esModule ? l : { default: l }
      ).default.createContext(null);
      a.LoadableContext = n;
    },
    lSNA: function (e, a) {
      e.exports = function (e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      };
    },
    mdYk: function (e, a, t) {
      "use strict";
      var l = t("q1tI"),
        n = t.n(l),
        i = t("YFqc"),
        s = t.n(i),
        r = n.a.createElement;
      a.a = function () {
        var e = new Date().getFullYear();
        return r(
          n.a.Fragment,
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
                      s.a,
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
    wx14: function (e, a, t) {
      "use strict";
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
            }
            return e;
          }).apply(this, arguments);
      }
      t.d(a, "a", function () {
        return l;
      });
    },
  },
  [["6m/o", 0, 1, 2]],
]);
