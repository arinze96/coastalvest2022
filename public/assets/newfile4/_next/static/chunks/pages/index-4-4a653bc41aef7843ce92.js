_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [32],
  {
    "0Yqi": function (a, e, l) {
      "use strict";
      function n(a, e) {
        if (null == a) return {};
        var l,
          n,
          t = (function (a, e) {
            if (null == a) return {};
            var l,
              n,
              t = {},
              s = Object.keys(a);
            for (n = 0; n < s.length; n++)
              (l = s[n]), e.indexOf(l) >= 0 || (t[l] = a[l]);
            return t;
          })(a, e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(a);
          for (n = 0; n < s.length; n++)
            (l = s[n]),
              e.indexOf(l) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(a, l) &&
                  (t[l] = a[l]));
        }
        return t;
      }
      var t = l("nOHt"),
        s = l("YFqc"),
        i = l.n(s),
        o = l("q1tI"),
        r = l.n(o),
        c = r.a.createElement;
      e.a = Object(t.withRouter)(function (a) {
        var e = a.router,
          l = a.children,
          t = n(a, ["router", "children"]),
          s = o.Children.only(l),
          u = s.props.className || "";
        return (
          e.pathname === t.href &&
            t.activeClassName &&
            (u = "".concat(u, " ").concat(t.activeClassName).trim()),
          delete t.activeClassName,
          c(i.a, t, r.a.cloneElement(s, { className: u }))
        );
      });
    },
    "2RFb": function (a, e, l) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n =
          Object.assign ||
          function (a) {
            for (var e = 1; e < arguments.length; e++) {
              var l = arguments[e];
              for (var n in l)
                Object.prototype.hasOwnProperty.call(l, n) && (a[n] = l[n]);
            }
            return a;
          },
        t = (function () {
          function a(a, e) {
            for (var l = 0; l < e.length; l++) {
              var n = e[l];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(a, n.key, n);
            }
          }
          return function (e, l, n) {
            return l && a(e.prototype, l), n && a(e, n), e;
          };
        })(),
        s = d(l("q1tI")),
        i = d(l("i8i4")),
        o = l("17x9"),
        r = l("dwFv"),
        c = d(l("b7n0")),
        u = d(l("j5U0")),
        m = d(l("Ci6P"));
      function d(a) {
        return a && a.__esModule ? a : { default: a };
      }
      var p = 0,
        f = 0,
        v = { listeners: [], pending: [] },
        N = !1;
      try {
        var b = Object.defineProperty({}, "passive", {
          get: function () {
            N = !0;
          },
        });
        window.addEventListener("test", null, b);
      } catch (C) {}
      var h = !!N && { capture: !1, passive: !0 },
        g = function (a) {
          var e = i.default.findDOMNode(a);
          if (e) {
            var l = (0, m.default)(e);
            (a.props.overflow &&
            l !== e.ownerDocument &&
            l !== document &&
            l !== document.documentElement
              ? (function (a, e) {
                  var l = i.default.findDOMNode(a),
                    n = void 0,
                    t = void 0;
                  try {
                    var s = e.getBoundingClientRect();
                    (n = s.top), (t = s.height);
                  } catch (C) {
                    (n = p), (t = f);
                  }
                  var o =
                      window.innerHeight ||
                      document.documentElement.clientHeight,
                    r = Math.max(n, 0),
                    c = Math.min(o, n + t) - r,
                    u = void 0,
                    m = void 0;
                  try {
                    var d = l.getBoundingClientRect();
                    (u = d.top), (m = d.height);
                  } catch (C) {
                    (u = p), (m = f);
                  }
                  var v = u - r,
                    N = Array.isArray(a.props.offset)
                      ? a.props.offset
                      : [a.props.offset, a.props.offset];
                  return v - N[0] <= c && v + m + N[1] >= 0;
                })(a, l)
              : (function (a) {
                  var e = i.default.findDOMNode(a);
                  if (
                    !(
                      e.offsetWidth ||
                      e.offsetHeight ||
                      e.getClientRects().length
                    )
                  )
                    return !1;
                  var l = void 0,
                    n = void 0;
                  try {
                    var t = e.getBoundingClientRect();
                    (l = t.top), (n = t.height);
                  } catch (C) {
                    (l = p), (n = f);
                  }
                  var s =
                      window.innerHeight ||
                      document.documentElement.clientHeight,
                    o = Array.isArray(a.props.offset)
                      ? a.props.offset
                      : [a.props.offset, a.props.offset];
                  return l - o[0] <= s && l + n + o[1] >= 0;
                })(a)) &&
              (a.visible ||
                (v.pending.push(a),
                (a.visible = !0),
                a.setState({ stopped: !1 }),
                a.forceUpdate()));
          }
        },
        y = function () {
          v.listeners.forEach(function (a) {
            return g(a);
          }),
            v.pending.forEach(function (a) {
              return (0, c.default)(v.listeners, a);
            }),
            (v.pending = []);
        },
        k = (function (a) {
          function e(a) {
            !(function (a, e) {
              if (!(a instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var l = (function (a, e) {
              if (!a)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" !== typeof e && "function" !== typeof e)
                ? a
                : e;
            })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, a));
            return (
              (l.customStyle = function (a) {
                var e = l.props,
                  n = e.duration,
                  t = e.delay,
                  s = e.iteration,
                  i = e.animation,
                  o = e.disabled,
                  r = {
                    animationName: a ? "none" : i,
                    visibility: a && !o ? "hidden" : "visible",
                  };
                return (
                  n && (r.animationDuration = n),
                  t && (r.animationDelay = t),
                  s && (r.animationIterationCount = s),
                  r
                );
              }),
              (l.resetAnimation = function (a) {
                -1 !== a.type.toLowerCase().indexOf("animationend") &&
                  l.setState({ stopped: !0 }, function () {
                    var a = l.props.callback;
                    "function" === typeof a &&
                      a.call(l, i.default.findDOMNode(l));
                  });
              }),
              (l.visible = !1),
              (l.state = { stopped: !1 }),
              l
            );
          }
          return (
            (function (a, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof e
                );
              (a.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: a,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(a, e)
                    : (a.__proto__ = e));
            })(e, a),
            t(e, [
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.disabled) return !1;
                  if (this.props.overflow) {
                    var a = (0, m.default)(i.default.findDOMNode(this));
                    if (a && "function" === typeof a.getAttribute) {
                      var e = +a.getAttribute("data-react-wow") + 1;
                      1 === e && (0, r.on)(a, "scroll", y, h),
                        a.setAttribute("data-react-wow", e);
                    }
                  } else if (!v.listeners.length) {
                    var l = this.props,
                      n = l.scroll,
                      t = l.resize;
                    n && (0, r.on)(window, "scroll", y, h),
                      t && (0, r.on)(window, "resize", y, h);
                  }
                  v.listeners.push(this), g(this);
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
                    var a = (0, m.default)(i.default.findDOMNode(this));
                    if (a && "function" === typeof a.getAttribute) {
                      var e = +a.getAttribute("data-react-wow") - 1;
                      0 === e
                        ? ((0, r.off)(a, "scroll", y, h),
                          a.removeAttribute("data-react-wow"))
                        : a.setAttribute("data-react-wow", e);
                    }
                  }
                  (0, c.default)(v.listeners, this),
                    v.listeners.length ||
                      ((0, r.off)(window, "scroll", y, h),
                      (0, r.off)(window, "resize", y, h));
                },
              },
              {
                key: "mergeProps",
                value: function (a) {
                  var e = this.props,
                    l = e.animation,
                    t = e.animateClass,
                    s = this.customStyle(!this.visible),
                    i = this.visible
                      ? l + " " + (this.state.stopped ? "" : t)
                      : l;
                  return n({}, a, {
                    style: n({}, a.style, s),
                    className: (0, u.default)(
                      (a.className ? a.className : "") + " " + i
                    ),
                    onAnimationEnd: this.resetAnimation,
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var a = this,
                    e = this.props,
                    l = e.children;
                  return e.disabled
                    ? l
                    : l
                    ? s.default.Children.map(l, function (e) {
                        return s.default.cloneElement(e, a.mergeProps(e.props));
                      })
                    : null;
                },
              },
            ]),
            e
          );
        })(s.default.Component);
      (k.propTypes = {
        duration: o.string,
        delay: o.string,
        iteration: o.string,
        animation: o.string,
        children: o.node,
        scroll: o.bool,
        resize: o.bool,
        animateClass: o.string,
        offset: (0, o.oneOfType)([o.number, (0, o.arrayOf)(o.number)]),
        overflow: o.bool,
        callback: o.func,
      }),
        (k.defaultProps = {
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
        (e.default = k);
    },
    Ci6P: function (a, e, l) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (a) {
          if (!a) return document.documentElement;
          for (
            var e = "absolute" === a.style.position, l = /(scroll|auto)/, n = a;
            n;

          ) {
            if (!n.parentNode)
              return a.ownerDocument || document.documentElement;
            var t = window.getComputedStyle(n),
              s = t.position,
              i = t.overflow,
              o = t["overflow-x"],
              r = t["overflow-y"];
            if ("static" === s && e) n = n.parentNode;
            else {
              if (l.test(i) && l.test(o) && l.test(r)) return n;
              n = n.parentNode;
            }
          }
          return (
            a.ownerDocument || a.documentElement || document.documentElement
          );
        });
    },
    Fgxv: function (a, e, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index-4",
        function () {
          return l("TOAG");
        },
      ]);
    },
    LKaZ: function (a, e, l) {
      "use strict";
      var n = l("q1tI"),
        t = l.n(n),
        s = l("YFqc"),
        i = l.n(s),
        o = t.a.createElement;
      e.a = function () {
        return o(
          "div",
          { className: "blog-area pt-100 pb-70" },
          o(
            "div",
            { className: "container" },
            o(
              "div",
              { className: "section-title" },
              o("span", { className: "top-title" }, "News"),
              o("h2", null, "Our Latest News"),
              o(
                "p",
                null,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus"
              )
            ),
            o(
              "div",
              { className: "row" },
              o(
                "div",
                { className: "col-lg-4 col-md-6" },
                o(
                  "div",
                  { className: "single-blog" },
                  o(
                    i.a,
                    { href: "/blog-details" },
                    o(
                      "a",
                      null,
                      o("img", { src: "/img/blog/blog1.jpg", alt: "Image" })
                    )
                  ),
                  o("span", null, "10 May 2020"),
                  o(
                    "div",
                    { className: "blog-content" },
                    o(
                      "ul",
                      null,
                      o("li", null, o("a", { href: "#" }, "Medical"))
                    ),
                    o(
                      i.a,
                      { href: "/blog-details" },
                      o(
                        "a",
                        null,
                        o("h3", null, "250+ Medical Tips We just had to share")
                      )
                    ),
                    o(
                      i.a,
                      { href: "/blog-details" },
                      o(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        o("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                )
              ),
              o(
                "div",
                { className: "col-lg-4 col-md-6" },
                o(
                  "div",
                  { className: "single-blog" },
                  o(
                    i.a,
                    { href: "/blog-details" },
                    o(
                      "a",
                      null,
                      o("img", { src: "/img/blog/blog2.jpg", alt: "Image" })
                    )
                  ),
                  o("span", null, "11 May 2020"),
                  o(
                    "div",
                    { className: "blog-content" },
                    o(
                      "ul",
                      null,
                      o("li", null, o("a", { href: "#" }, "Treatment"))
                    ),
                    o(
                      i.a,
                      { href: "/blog-details" },
                      o(
                        "a",
                        null,
                        o(
                          "h3",
                          null,
                          "What Can I Do To Prevent Myself & prevent Disease"
                        )
                      )
                    ),
                    o(
                      i.a,
                      { href: "/blog-details" },
                      o(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        o("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                )
              ),
              o(
                "div",
                { className: "col-lg-4 col-md-6 offset-md-3 offset-lg-0" },
                o(
                  "div",
                  { className: "single-blog" },
                  o(
                    i.a,
                    { href: "/blog-details" },
                    o(
                      "a",
                      null,
                      o("img", { src: "/img/blog/blog3.jpg", alt: "Image" })
                    )
                  ),
                  o("span", null, "13 May 2020"),
                  o(
                    "div",
                    { className: "blog-content" },
                    o(
                      "ul",
                      null,
                      o("li", null, o("a", { href: "#" }, "COVID-19"))
                    ),
                    o(
                      i.a,
                      { href: "/blog-details" },
                      o(
                        "a",
                        null,
                        o(
                          "h3",
                          null,
                          "CCU For Emergency  Services  & Medical support"
                        )
                      )
                    ),
                    o(
                      i.a,
                      { href: "/blog-details" },
                      o(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        o("i", { className: "bx bx-plus" })
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
    ODXe: function (a, e, l) {
      "use strict";
      function n(a, e) {
        (null == e || e > a.length) && (e = a.length);
        for (var l = 0, n = new Array(e); l < e; l++) n[l] = a[l];
        return n;
      }
      function t(a, e) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a;
          })(a) ||
          (function (a, e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(a)) {
              var l = [],
                n = !0,
                t = !1,
                s = void 0;
              try {
                for (
                  var i, o = a[Symbol.iterator]();
                  !(n = (i = o.next()).done) &&
                  (l.push(i.value), !e || l.length !== e);
                  n = !0
                );
              } catch (r) {
                (t = !0), (s = r);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (t) throw s;
                }
              }
              return l;
            }
          })(a, e) ||
          (function (a, e) {
            if (a) {
              if ("string" === typeof a) return n(a, e);
              var l = Object.prototype.toString.call(a).slice(8, -1);
              return (
                "Object" === l && a.constructor && (l = a.constructor.name),
                "Map" === l || "Set" === l
                  ? Array.from(a)
                  : "Arguments" === l ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
                  ? n(a, e)
                  : void 0
              );
            }
          })(a, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      l.d(e, "a", function () {
        return t;
      });
    },
    TOAG: function (a, e, l) {
      "use strict";
      l.r(e);
      var n = l("q1tI"),
        t = l.n(n),
        s = l("ODXe"),
        i = l("0Yqi"),
        o = l("j1fb"),
        r = t.a.createElement,
        c = function () {
          var a = t.a.useState(!0),
            e = Object(s.a)(a, 2),
            l = e[0],
            n = e[1],
            c = function () {
              n(!l);
            };
          t.a.useEffect(function () {
            var a = document.getElementById("navbar");
            document.addEventListener("scroll", function () {
              window.scrollY > 170
                ? a.classList.add("is-sticky")
                : a.classList.remove("is-sticky");
            }),
              window.scrollTo(0, 0);
          });
          var u = l
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show",
            m = l
              ? "navbar-toggler navbar-toggler-right collapsed"
              : "navbar-toggler navbar-toggler-right";
          return r(
            t.a.Fragment,
            null,
            r(
              "header",
              { className: "header-area fixed-top" },
              r(o.a, null),
              r(
                "div",
                { className: "nav-area four" },
                r(
                  "div",
                  { id: "navbar", className: "navbar-area" },
                  r(
                    "div",
                    { className: "main-nav" },
                    r(
                      "nav",
                      { className: "navbar navbar-expand-lg navbar-light" },
                      r(
                        "div",
                        { className: "container" },
                        r(
                          i.a,
                          { href: "/" },
                          r(
                            "a",
                            { onClick: c, className: "navbar-brand" },
                            r("img", { src: "/img/logo-two.png", alt: "logo" })
                          )
                        ),
                        r(
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
                          r("span", { className: "icon-bar top-bar" }),
                          r("span", { className: "icon-bar middle-bar" }),
                          r("span", { className: "icon-bar bottom-bar" })
                        ),
                        r(
                          "div",
                          { className: u, id: "navbarSupportedContent" },
                          r(
                            "ul",
                            { className: "navbar-nav m-auto" },
                            r(
                              "li",
                              { className: "nav-item" },
                              r(
                                i.a,
                                { href: "#", activeClassName: "active" },
                                r(
                                  "a",
                                  {
                                    onClick: function (a) {
                                      return a.preventDefault();
                                    },
                                    className: "nav-link",
                                  },
                                  "Home ",
                                  r("i", { className: "bx bx-plus" })
                                )
                              ),
                              r(
                                "ul",
                                { className: "dropdown-menu" },
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    { href: "/", activeClassName: "active" },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 1 (Emergency Medical Clinic)"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/index-2",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 2 (Covid-19 Treatment Clinic)"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/index-3",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 3 (Covid-19 Test Center)"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/index-4",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 4 (Vaccination Center/Clinic)"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/index-5",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 5 (Doctors Directory Listing)"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/index-6",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 6 (Health Charity Event)"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/index-7",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 7 (Medical Research)"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/index-8",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Home 8 (Dental Clinic)"
                                    )
                                  )
                                )
                              )
                            ),
                            r(
                              "li",
                              { className: "nav-item" },
                              r(
                                i.a,
                                { href: "/about", activeClassName: "active" },
                                r(
                                  "a",
                                  { onClick: c, className: "nav-link" },
                                  "About"
                                )
                              )
                            ),
                            r(
                              "li",
                              { className: "nav-item" },
                              r(
                                i.a,
                                { href: "#" },
                                r(
                                  "a",
                                  {
                                    onClick: function (a) {
                                      return a.preventDefault();
                                    },
                                    className: "nav-link",
                                  },
                                  "Pages ",
                                  r("i", { className: "bx bx-plus" })
                                )
                              ),
                              r(
                                "ul",
                                { className: "dropdown-menu" },
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/pricing",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Pricing"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/testimonials",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Testimonials"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/doctors",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Doctors"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/appointment",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Appointment"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    { href: "/faq", activeClassName: "active" },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "FAQs"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    { href: "#" },
                                    r(
                                      "a",
                                      {
                                        onClick: function (a) {
                                          return a.preventDefault();
                                        },
                                        className: "nav-link",
                                      },
                                      "User ",
                                      r("i", { className: "bx bx-plus" })
                                    )
                                  ),
                                  r(
                                    "ul",
                                    { className: "dropdown-menu" },
                                    r(
                                      "li",
                                      { className: "nav-item" },
                                      r(
                                        i.a,
                                        {
                                          href: "/sign-in",
                                          activeClassName: "active",
                                        },
                                        r(
                                          "a",
                                          { onClick: c, className: "nav-link" },
                                          "Sign In"
                                        )
                                      )
                                    ),
                                    r(
                                      "li",
                                      { className: "nav-item" },
                                      r(
                                        i.a,
                                        {
                                          href: "/sign-up",
                                          activeClassName: "active",
                                        },
                                        r(
                                          "a",
                                          { onClick: c, className: "nav-link" },
                                          "Sign Up"
                                        )
                                      )
                                    ),
                                    r(
                                      "li",
                                      { className: "nav-item" },
                                      r(
                                        i.a,
                                        {
                                          href: "/recover-password",
                                          activeClassName: "active",
                                        },
                                        r(
                                          "a",
                                          { onClick: c, className: "nav-link" },
                                          "Recover Password"
                                        )
                                      )
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/coming-soon",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Coming Soon"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/terms-conditions",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Terms & Conditions"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/privacy-policy",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Privacy Policy"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    { href: "/404", activeClassName: "active" },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "404 Error Page"
                                    )
                                  )
                                )
                              )
                            ),
                            r(
                              "li",
                              { className: "nav-item" },
                              r(
                                i.a,
                                { href: "#" },
                                r(
                                  "a",
                                  {
                                    onClick: function (a) {
                                      return a.preventDefault();
                                    },
                                    className: "nav-link",
                                  },
                                  "Services ",
                                  r("i", { className: "bx bx-plus" })
                                )
                              ),
                              r(
                                "ul",
                                { className: "dropdown-menu" },
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/services-1",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Services Style One"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/services-2",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Services Style Two"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/services-3",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Services Style Three"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/service-details",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Service Details"
                                    )
                                  )
                                )
                              )
                            ),
                            r(
                              "li",
                              { className: "nav-item" },
                              r(
                                i.a,
                                { href: "#" },
                                r(
                                  "a",
                                  {
                                    onClick: function (a) {
                                      return a.preventDefault();
                                    },
                                    className: "nav-link",
                                  },
                                  "Doctors ",
                                  r("i", { className: "bx bx-plus" })
                                )
                              ),
                              r(
                                "ul",
                                { className: "dropdown-menu" },
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/doctors-1",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Doctors Style One"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/doctors-2",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Doctors Style Two"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/doctors-3",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Doctors Style Three"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/doctor-details",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Doctors Details"
                                    )
                                  )
                                )
                              )
                            ),
                            r(
                              "li",
                              { className: "nav-item" },
                              r(
                                i.a,
                                { href: "#" },
                                r(
                                  "a",
                                  {
                                    onClick: function (a) {
                                      return a.preventDefault();
                                    },
                                    className: "nav-link",
                                  },
                                  "Blog ",
                                  r("i", { className: "bx bx-plus" })
                                )
                              ),
                              r(
                                "ul",
                                { className: "dropdown-menu" },
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/blog-grid",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Blog Grid"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/blog-left-sidebar",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Blog Left Sidebar"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/blog-right-sidebar",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Blog Right Sidebar"
                                    )
                                  )
                                ),
                                r(
                                  "li",
                                  { className: "nav-item" },
                                  r(
                                    i.a,
                                    {
                                      href: "/blog-details",
                                      activeClassName: "active",
                                    },
                                    r(
                                      "a",
                                      { onClick: c, className: "nav-link" },
                                      "Blog Details"
                                    )
                                  )
                                )
                              )
                            ),
                            r(
                              "li",
                              { className: "nav-item" },
                              r(
                                i.a,
                                { href: "/contact", activeClassName: "active" },
                                r(
                                  "a",
                                  { onClick: c, className: "nav-link" },
                                  "Contact"
                                )
                              )
                            )
                          ),
                          r(
                            "div",
                            { className: "others-option" },
                            r(
                              "div",
                              { className: "subscribe" },
                              r(
                                i.a,
                                { href: "#" },
                                r(
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
        u = l("YFqc"),
        m = l.n(u),
        d = l("2RFb"),
        p = l.n(d),
        f = t.a.createElement,
        v = function () {
          return f(
            "div",
            { className: "main-banner-area-four" },
            f(
              "div",
              { className: "d-table" },
              f(
                "div",
                { className: "d-table-cell" },
                f(
                  "div",
                  { className: "container-fluid" },
                  f(
                    "div",
                    { className: "row" },
                    f(
                      "div",
                      { className: "col-lg-7" },
                      f(
                        "div",
                        { className: "banner-text" },
                        f(
                          p.a,
                          { animation: "fadeInUp", delay: "1s" },
                          f("span", null, "Smarter Service Care")
                        ),
                        f(
                          p.a,
                          { animation: "fadeInUp", delay: "1s" },
                          f(
                            "h1",
                            null,
                            "Vaccination Program for Diseases Prevention"
                          )
                        ),
                        f(
                          p.a,
                          { animation: "fadeInUp", delay: "1s" },
                          f(
                            "p",
                            null,
                            "We invest in high tech medical facilities that help solve specialized medical issues."
                          )
                        ),
                        f(
                          p.a,
                          { animation: "fadeInUp", delay: "1s" },
                          f(
                            "div",
                            { className: "banner-btn" },
                            f(
                              m.a,
                              { href: "/register" },
                              f(
                                "a",
                                { className: "default-btn" },
                                "Get Started"
                              )
                            )
                          )
                        )
                      )
                    ),
                    f(
                      "div",
                      { className: "col-lg-5 pr-0" },
                      f(
                        "div",
                        { className: "banner-img-wrap" },
                        f(
                          p.a,
                          { animation: "fadeInUp", delay: "1s" },
                          f(
                            "div",
                            { className: "banner-img" },
                            f("img", {
                              src: "/img/home-four/home-four-banner.png",
                              alt: "Image",
                            })
                          )
                        ),
                        f(
                          "div",
                          { className: "shape" },
                          f("img", {
                            src: "/img/home-four/home-four-shape-2.png",
                            alt: "Image",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            f(
              "div",
              { className: "shape" },
              f("img", {
                src: "/img/home-four/home-four-shape-1.png",
                alt: "Image",
              })
            )
          );
        },
        N = t.a.createElement,
        b = function () {
          return N(
            "div",
            { className: "about-area four ptb-100" },
            N(
              "div",
              { className: "container-fluid" },
              N(
                "div",
                { className: "row" },
                N(
                  "div",
                  { className: "col-lg-6 pl-0" },
                  N("div", { className: "about-img about-bg-1" })
                ),
                N(
                  "div",
                  { className: "col-lg-6" },
                  N(
                    "div",
                    { className: "about-content" },
                    N("span", { className: "top-title" }, "About Us"),
                    N(
                      "h2",
                      null,
                      "Routine Vaccines Provided for Babies and Children"
                    ),
                    N(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                    ),
                    N(
                      "ul",
                      null,
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Vaccine against Diphtheria-Tetanus-Whooping cough"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Vaccine against Measles-Mumps-Rubella"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Vaccine against pneumococcus bacteria"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Vaccine against Hepatitis B"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Vaccine against Hepatitis A"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Wear a facemask if sick"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Cover your mouth and nose"
                      )
                    ),
                    N(
                      m.a,
                      { href: "/about" },
                      N("a", { className: "default-btn" }, "More About Us")
                    )
                  )
                )
              )
            )
          );
        },
        h = t.a.createElement,
        g = function () {
          return h(
            "div",
            { className: "about-area four mission pb-100" },
            h(
              "div",
              { className: "container-fluid" },
              h(
                "div",
                { className: "row" },
                h(
                  "div",
                  { className: "col-lg-6" },
                  h(
                    "div",
                    { className: "about-content ml-auto mt-0" },
                    h("span", { className: "top-title" }, "Our Mission"),
                    h("h2", null, "Our Aim to Provide:"),
                    h(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                    ),
                    h(
                      "ul",
                      null,
                      h(
                        "li",
                        null,
                        h("i", { className: "flaticon-tick" }),
                        "Vaccine for Babies & Children"
                      ),
                      h(
                        "li",
                        null,
                        h("i", { className: "flaticon-tick" }),
                        "Vaccine for Premature Babies"
                      ),
                      h(
                        "li",
                        null,
                        h("i", { className: "flaticon-tick" }),
                        "Before Pregnancy"
                      ),
                      h(
                        "li",
                        null,
                        h("i", { className: "flaticon-tick" }),
                        "During Pregnancy"
                      ),
                      h(
                        "li",
                        null,
                        h("i", { className: "flaticon-tick" }),
                        "Childbirth"
                      ),
                      h(
                        "li",
                        null,
                        h("i", { className: "flaticon-tick" }),
                        "Wear a facemask if sick"
                      ),
                      h(
                        "li",
                        null,
                        h("i", { className: "flaticon-tick" }),
                        "Cover your mouth and nose"
                      )
                    ),
                    h(
                      m.a,
                      { href: "/about" },
                      h("a", { className: "default-btn" }, "More About Us")
                    )
                  )
                ),
                h(
                  "div",
                  { className: "col-lg-6 pr-0" },
                  h("div", { className: "about-img about-img-2" })
                )
              )
            )
          );
        },
        y = t.a.createElement,
        k = function () {
          return y(
            "div",
            { className: "doctor-vaccination-area ptb-100 pt-0" },
            y(
              "div",
              { className: "container" },
              y(
                "div",
                { className: "section-title" },
                y(
                  "span",
                  { className: "top-title" },
                  "Our Doctors Vaccination"
                ),
                y(
                  "h2",
                  null,
                  "Vaccination schedule for Children and Adolescents"
                ),
                y(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse"
                )
              ),
              y(
                "div",
                { className: "doctor-vaccination-table table-responsive" },
                y(
                  "table",
                  { className: "table" },
                  y(
                    "thead",
                    null,
                    y(
                      "tr",
                      null,
                      y("th", null, "Vaccination"),
                      y("th", { className: "tb-color-2" }, "Hepatitis B"),
                      y("th", { className: "tb-color-3" }, "Diphtheria"),
                      y("th", { className: "tb-color-4" }, "Homophiles"),
                      y("th", { className: "tb-color-5" }, "Rota-virus"),
                      y("th", { className: "tb-color-6" }, "Measles"),
                      y("th", { className: "tb-color-7" }, "Hepatitis A"),
                      y("th", { className: "tb-color-8" }, "Papilloma virus"),
                      y("th", { className: "tb-color-9" }, "Influenza")
                    )
                  ),
                  y(
                    "tbody",
                    null,
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "At Birth hospital")),
                      y(
                        "td",
                        { className: "tb-color-2" },
                        y("span", null, "1st dose")
                      ),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------"))
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "1 month")),
                      y(
                        "td",
                        { className: "tb-color-2" },
                        y("span", null, "2nd dose")
                      ),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------"))
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "2 months")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-3" },
                        y("span", null, "1st dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-4" },
                        y("span", null, "1st dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-5" },
                        y("span", null, "1st dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-6" },
                        y("span", null, "1st dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-7" },
                        y("span", null, "1st dose")
                      ),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------"))
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "4 months")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-3" },
                        y("span", null, "2nd dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-4" },
                        y("span", null, "2nd dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-5" },
                        y("span", null, "2nd dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-6" },
                        y("span", null, "2nd dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-7" },
                        y("span", null, "2nd dose")
                      ),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------"))
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "6 months")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-3" },
                        y("span", null, "3nd dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-4" },
                        y("span", null, "3nd dose")
                      ),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-6" },
                        y("span", null, "2nd dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-7" },
                        y("span", null, "2nd dose")
                      ),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------"))
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "12 months")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-3" },
                        y("span", null, "4th dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-4" },
                        y("span", null, "4th dose")
                      ),
                      y(
                        "td",
                        { className: "tb-color-5" },
                        y("span", null, "4yh dose")
                      ),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-8" },
                        y("span", null, "4th dose")
                      ),
                      y("td", null, y("span", null, "------"))
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "18 months")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-8" },
                        y("span", null, "1st dose")
                      ),
                      y("td", null, y("span", null, "------"))
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "6 Years")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-8" },
                        y("span", null, "2nd dose")
                      ),
                      y("td", null, y("span", null, "------"))
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "7 Years")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-9" },
                        y("span", null, "1st dose")
                      )
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "8 Years")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-8" },
                        y("span", null, "2nd dose")
                      ),
                      y("td", null, y("span", null, "------"))
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "9 Years")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-8" },
                        y("span", null, "3rd dose")
                      ),
                      y("td", null, y("span", null, "------"))
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "11 Years")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-8" },
                        y("span", null, "3rd dose")
                      ),
                      y("td", null, y("span", null, "------"))
                    ),
                    y(
                      "tr",
                      null,
                      y("td", null, y("span", null, "13 Years")),
                      y("td", null, y("span", null, "------")),
                      y(
                        "td",
                        { className: "tb-color-3" },
                        y("span", null, "Booster")
                      ),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------")),
                      y("td", null, y("span", null, "------"))
                    )
                  )
                )
              )
            )
          );
        },
        C = t.a.createElement,
        w = function () {
          return C(
            "div",
            { className: "ours-doctors-area four" },
            C(
              "div",
              { className: "container-fluid" },
              C(
                "div",
                { className: "row" },
                C(
                  "div",
                  { className: "col-lg-6" },
                  C(
                    "div",
                    { className: "doctors-content ptb-100" },
                    C("span", { className: "top-title" }, "Our Doctors"),
                    C(
                      "h2",
                      null,
                      "Help your kids understand the importance of vaccines"
                    ),
                    C(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                    ),
                    C(
                      "ul",
                      null,
                      C(
                        "li",
                        null,
                        C("i", { className: "flaticon-tick" }),
                        "Influenza Vaccine"
                      ),
                      C(
                        "li",
                        null,
                        C("i", { className: "flaticon-tick" }),
                        "Vaccination Guidelines"
                      ),
                      C(
                        "li",
                        null,
                        C("i", { className: "flaticon-tick" }),
                        "How Vaccine Works"
                      )
                    ),
                    C(
                      m.a,
                      { href: "/about" },
                      C("a", { className: "default-btn" }, "More About Us")
                    )
                  )
                ),
                C(
                  "div",
                  { className: "col-lg-6 pr-0" },
                  C("div", { className: "doctors-img" })
                )
              )
            )
          );
        },
        x = l("LKaZ"),
        E = l("Wf2E"),
        O = l("mdYk"),
        M = t.a.createElement;
      e.default = function () {
        return M(
          t.a.Fragment,
          null,
          M(c, null),
          M(v, null),
          M(b, null),
          M(g, null),
          M(k, null),
          M(w, null),
          M(x.a, null),
          M(E.a, null),
          M(O.a, null)
        );
      };
    },
    Wf2E: function (a, e, l) {
      "use strict";
      var n = l("q1tI"),
        t = l.n(n).a.createElement;
      e.a = function () {
        return t(
          "div",
          { className: "subscribe-area" },
          t(
            "div",
            { className: "container" },
            t(
              "div",
              { className: "row align-items-center" },
              t(
                "div",
                { className: "col-lg-6" },
                t("h2", null, "Subscribe Now"),
                t("p", null, "Get our latest news & update regularly")
              ),
              t(
                "div",
                { className: "col-lg-6" },
                t(
                  "form",
                  { className: "newsletter-form" },
                  t("input", {
                    type: "email",
                    className: "form-control",
                    placeholder: "Enter Your Email",
                    name: "EMAIL",
                    required: !0,
                  }),
                  t(
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
    YFqc: function (a, e, l) {
      a.exports = l("cTJO");
    },
    b7n0: function (a, e, l) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function () {
          var a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = arguments[1],
            l = a.indexOf(e);
          -1 !== l && a.splice(l, 1);
        });
    },
    cTJO: function (a, e, l) {
      "use strict";
      var n = l("J4zp"),
        t = l("284h");
      (e.__esModule = !0), (e.default = void 0);
      var s,
        i = t(l("q1tI")),
        o = l("elyg"),
        r = l("nOHt"),
        c = new Map(),
        u = window.IntersectionObserver,
        m = {};
      var d = function (a, e) {
        var l =
          s ||
          (u
            ? (s = new u(
                function (a) {
                  a.forEach(function (a) {
                    if (c.has(a.target)) {
                      var e = c.get(a.target);
                      (a.isIntersecting || a.intersectionRatio > 0) &&
                        (s.unobserve(a.target), c.delete(a.target), e());
                    }
                  });
                },
                { rootMargin: "200px" }
              ))
            : void 0);
        return l
          ? (l.observe(a),
            c.set(a, e),
            function () {
              try {
                l.unobserve(a);
              } catch (e) {
                console.error(e);
              }
              c.delete(a);
            })
          : function () {};
      };
      function p(a, e, l, n) {
        (0, o.isLocalURL)(e) &&
          (a.prefetch(e, l, n).catch(function (a) {
            0;
          }),
          (m[e + "%" + l] = !0));
      }
      var f = function (a) {
        var e = !1 !== a.prefetch,
          l = i.default.useState(),
          t = n(l, 2),
          s = t[0],
          c = t[1],
          f = (0, r.useRouter)(),
          v = (f && f.pathname) || "/",
          N = i.default.useMemo(
            function () {
              var e = (0, o.resolveHref)(v, a.href, !0),
                l = n(e, 2),
                t = l[0],
                s = l[1];
              return {
                href: t,
                as: a.as ? (0, o.resolveHref)(v, a.as) : s || t,
              };
            },
            [v, a.href, a.as]
          ),
          b = N.href,
          h = N.as;
        i.default.useEffect(
          function () {
            if (
              e &&
              u &&
              s &&
              s.tagName &&
              (0, o.isLocalURL)(b) &&
              !m[b + "%" + h]
            )
              return d(s, function () {
                p(f, b, h);
              });
          },
          [e, s, b, h, f]
        );
        var g = a.children,
          y = a.replace,
          k = a.shallow,
          C = a.scroll;
        "string" === typeof g && (g = i.default.createElement("a", null, g));
        var w = i.Children.only(g),
          x = {
            ref: function (a) {
              a && c(a),
                w &&
                  "object" === typeof w &&
                  w.ref &&
                  ("function" === typeof w.ref
                    ? w.ref(a)
                    : "object" === typeof w.ref && (w.ref.current = a));
            },
            onClick: function (a) {
              w.props &&
                "function" === typeof w.props.onClick &&
                w.props.onClick(a),
                a.defaultPrevented ||
                  (function (a, e, l, n, t, s, i) {
                    ("A" !== a.currentTarget.nodeName ||
                      (!(function (a) {
                        var e = a.currentTarget.target;
                        return (
                          (e && "_self" !== e) ||
                          a.metaKey ||
                          a.ctrlKey ||
                          a.shiftKey ||
                          a.altKey ||
                          (a.nativeEvent && 2 === a.nativeEvent.which)
                        );
                      })(a) &&
                        (0, o.isLocalURL)(l))) &&
                      (a.preventDefault(),
                      null == i && (i = n.indexOf("#") < 0),
                      e[t ? "replace" : "push"](l, n, { shallow: s }).then(
                        function (a) {
                          a &&
                            i &&
                            (window.scrollTo(0, 0), document.body.focus());
                        }
                      ));
                  })(a, f, b, h, y, k, C);
            },
          };
        return (
          e &&
            (x.onMouseEnter = function (a) {
              (0, o.isLocalURL)(b) &&
                (w.props &&
                  "function" === typeof w.props.onMouseEnter &&
                  w.props.onMouseEnter(a),
                p(f, b, h, { priority: !0 }));
            }),
          (a.passHref || ("a" === w.type && !("href" in w.props))) &&
            (x.href = (0, o.addBasePath)(
              (0, o.addLocale)(h, f && f.locale, f && f.defaultLocale)
            )),
          i.default.cloneElement(w, x)
        );
      };
      e.default = f;
    },
    dwFv: function (a, e, l) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      (e.on = function (a, e, l) {
        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        a.addEventListener
          ? a.addEventListener(e, l, n)
          : a.attachEvent &&
            a.attachEvent("on" + e, function (e) {
              l.call(a, e || window.event);
            });
      }),
        (e.off = function (a, e, l) {
          var n =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          a.removeEventListener
            ? a.removeEventListener(e, l, n)
            : a.detachEvent && a.detachEvent("on" + e, l);
        });
    },
    j1fb: function (a, e, l) {
      "use strict";
      var n = l("q1tI"),
        t = l.n(n).a.createElement;
      e.a = function () {
        return t(
          "div",
          { className: "top-header-area" },
          t(
            "div",
            { className: "container" },
            t(
              "div",
              { className: "row align-items-center" },
              t(
                "div",
                { className: "col-lg-8 col-md-9 col-sm-6" },
                t(
                  "ul",
                  { className: "header-content-left" },
                  t(
                    "li",
                    null,
                    t("i", { className: "bx bx-time" }),
                    "Mon-Fri 9am-5pm"
                  ),
                  t(
                    "li",
                    null,
                    t(
                      "a",
                      { href: "tel:+19194211323" },
                      t("i", { className: "bx bx-phone-call" }),
                      "Call Us: +821-456-241"
                    )
                  ),
                  t(
                    "li",
                    null,
                    t(
                      "a",
                      { href: "mailto:hello@info.com" },
                      t("i", { className: "bx bxs-paper-plane" }),
                      "Email: hello@info.com"
                    )
                  )
                )
              ),
              t(
                "div",
                { className: "col-lg-4 col-md-3 col-sm-6" },
                t(
                  "ul",
                  { className: "header-content-right" },
                  t(
                    "li",
                    null,
                    t(
                      "a",
                      { href: "#", target: "_blank" },
                      t("i", { className: "bx bxl-facebook" })
                    )
                  ),
                  t(
                    "li",
                    null,
                    t(
                      "a",
                      { href: "#", target: "_blank" },
                      t("i", { className: "bx bxl-twitter" })
                    )
                  ),
                  t(
                    "li",
                    null,
                    t(
                      "a",
                      { href: "#", target: "_blank" },
                      t("i", { className: "bx bxl-pinterest-alt" })
                    )
                  ),
                  t(
                    "li",
                    null,
                    t(
                      "a",
                      { href: "#", target: "_blank" },
                      t("i", { className: "bx bxl-instagram" })
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    j5U0: function (a, e, l) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function () {
          var a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e = a.trim().split(" ");
          return e
            .filter(function (a, l) {
              return !!a && e.indexOf(a) === l;
            })
            .join(" ");
        });
    },
    mdYk: function (a, e, l) {
      "use strict";
      var n = l("q1tI"),
        t = l.n(n),
        s = l("YFqc"),
        i = l.n(s),
        o = t.a.createElement;
      e.a = function () {
        var a = new Date().getFullYear();
        return o(
          t.a.Fragment,
          null,
          o(
            "footer",
            { className: "footer-top-area f-bg pt-100 pb-70" },
            o(
              "div",
              { className: "container" },
              o(
                "div",
                { className: "row" },
                o(
                  "div",
                  { className: "col-lg-3 col-md-6" },
                  o(
                    "div",
                    { className: "single-widget" },
                    o(
                      i.a,
                      { href: "/" },
                      o(
                        "a",
                        null,
                        o("img", { src: "/img/logo.png", alt: "Image" })
                      )
                    ),
                    o(
                      "p",
                      null,
                      "Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis, repudiandae ipsam minus et ex, aliquid dolor molestias, earum enim officiis porro obcaecati."
                    ),
                    o(
                      "div",
                      { className: "social-area" },
                      o(
                        "ul",
                        null,
                        o(
                          "li",
                          null,
                          o(
                            "a",
                            { href: "#", target: "_blank" },
                            o("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        o(
                          "li",
                          null,
                          o(
                            "a",
                            { href: "#", target: "_blank" },
                            o("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        o(
                          "li",
                          null,
                          o(
                            "a",
                            { href: "#", target: "_blank" },
                            o("i", { className: "bx bxl-linkedin" })
                          )
                        ),
                        o(
                          "li",
                          null,
                          o(
                            "a",
                            { href: "#", target: "_blank" },
                            o("i", { className: "bx bxl-youtube" })
                          )
                        ),
                        o(
                          "li",
                          null,
                          o(
                            "a",
                            { href: "#", target: "_blank" },
                            o("i", { className: "bx bxl-instagram" })
                          )
                        )
                      )
                    )
                  )
                ),
                o(
                  "div",
                  { className: "col-lg-3 col-md-6" },
                  o(
                    "div",
                    { className: "single-widget" },
                    o("h3", null, "Departments"),
                    o(
                      "ul",
                      null,
                      o(
                        "li",
                        null,
                        o("a", { href: "#" }, "Surgery & Radiology")
                      ),
                      o("li", null, o("a", { href: "#" }, "Children Care")),
                      o("li", null, o("a", { href: "#" }, "Orthopedics")),
                      o("li", null, o("a", { href: "#" }, "Nuclear Magnetic")),
                      o("li", null, o("a", { href: "#" }, "Eye Treatment")),
                      o("li", null, o("a", { href: "#" }, "X-Ray"))
                    )
                  )
                ),
                o(
                  "div",
                  { className: "col-lg-3 col-md-6" },
                  o(
                    "div",
                    { className: "single-widget open-time" },
                    o("h3", null, "Opening Hours"),
                    o(
                      "ul",
                      null,
                      o(
                        "li",
                        null,
                        o("span", null, "Mon-Tue:"),
                        o("span", { className: "right" }, "6:00AM-10:00PM")
                      ),
                      o(
                        "li",
                        null,
                        o("span", null, "Wed-Thu:"),
                        o("span", { className: "right" }, "6:00AM-10:00PM")
                      ),
                      o(
                        "li",
                        null,
                        o("span", null, "Fry:"),
                        o("span", { className: "right" }, "6:00AM-04:00PM")
                      ),
                      o(
                        "li",
                        null,
                        o("span", null, "Sun:"),
                        o("span", { className: "right" }, "Closed")
                      )
                    )
                  )
                ),
                o(
                  "div",
                  { className: "col-lg-3 col-md-6" },
                  o(
                    "div",
                    { className: "single-widget contact" },
                    o("h3", null, "Get In Touch"),
                    o(
                      "ul",
                      null,
                      o(
                        "li",
                        { className: "pl-0" },
                        o(
                          "a",
                          { href: "tel:+19194211323" },
                          o("i", { className: "bx bx-phone-call" }),
                          o("span", null, "Hotline:"),
                          "Phone: +19194211323"
                        )
                      ),
                      o(
                        "li",
                        { className: "pl-0" },
                        o(
                          "a",
                          { href: "mailto:support@coastalvest.com" },
                          o("i", { className: "bx bx-envelope" }),
                          o("span", null, "Email:"),
                          "support@coastalvest.com"
                        )
                      ),
                      o(
                        "li",
                        null,
                        o("i", { className: "bx bx-location-plus" }),
                        o("span", null, "Address:"),
                        "123, Western Road, Melbourne Australia"
                      )
                    )
                  )
                )
              )
            )
          ),
          o(
            "div",
            { className: "footer-bottom-area" },
            o(
              "div",
              { className: "container" },
              o(
                "div",
                { className: "copy-right" },
                o(
                  "p",
                  null,
                  "Copyright @",
                  a,
                  "  Corf. Designed by ",
                  o(
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
  },
  [["Fgxv", 0, 1, 2]],
]);
