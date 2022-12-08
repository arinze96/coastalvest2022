_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [30],
  {
    "2RFb": function (e, a, t) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var s =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }
            return e;
          },
        l = (function () {
          function e(e, a) {
            for (var t = 0; t < a.length; t++) {
              var s = a[t];
              (s.enumerable = s.enumerable || !1),
                (s.configurable = !0),
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s);
            }
          }
          return function (a, t, s) {
            return t && e(a.prototype, t), s && e(a, s), a;
          };
        })(),
        i = d(t("q1tI")),
        n = d(t("i8i4")),
        o = t("17x9"),
        c = t("dwFv"),
        r = d(t("b7n0")),
        m = d(t("j5U0")),
        u = d(t("Ci6P"));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var p = 0,
        f = 0,
        v = { listeners: [], pending: [] },
        g = !1;
      try {
        var N = Object.defineProperty({}, "passive", {
          get: function () {
            g = !0;
          },
        });
        window.addEventListener("test", null, N);
      } catch (k) {}
      var b = !!g && { capture: !1, passive: !0 },
        h = function (e) {
          var a = n.default.findDOMNode(e);
          if (a) {
            var t = (0, u.default)(a);
            (e.props.overflow &&
            t !== a.ownerDocument &&
            t !== document &&
            t !== document.documentElement
              ? (function (e, a) {
                  var t = n.default.findDOMNode(e),
                    s = void 0,
                    l = void 0;
                  try {
                    var i = a.getBoundingClientRect();
                    (s = i.top), (l = i.height);
                  } catch (k) {
                    (s = p), (l = f);
                  }
                  var o =
                      window.innerHeight ||
                      document.documentElement.clientHeight,
                    c = Math.max(s, 0),
                    r = Math.min(o, s + l) - c,
                    m = void 0,
                    u = void 0;
                  try {
                    var d = t.getBoundingClientRect();
                    (m = d.top), (u = d.height);
                  } catch (k) {
                    (m = p), (u = f);
                  }
                  var v = m - c,
                    g = Array.isArray(e.props.offset)
                      ? e.props.offset
                      : [e.props.offset, e.props.offset];
                  return v - g[0] <= r && v + u + g[1] >= 0;
                })(e, t)
              : (function (e) {
                  var a = n.default.findDOMNode(e);
                  if (
                    !(
                      a.offsetWidth ||
                      a.offsetHeight ||
                      a.getClientRects().length
                    )
                  )
                    return !1;
                  var t = void 0,
                    s = void 0;
                  try {
                    var l = a.getBoundingClientRect();
                    (t = l.top), (s = l.height);
                  } catch (k) {
                    (t = p), (s = f);
                  }
                  var i =
                      window.innerHeight ||
                      document.documentElement.clientHeight,
                    o = Array.isArray(e.props.offset)
                      ? e.props.offset
                      : [e.props.offset, e.props.offset];
                  return t - o[0] <= i && t + s + o[1] >= 0;
                })(e)) &&
              (e.visible ||
                (v.pending.push(e),
                (e.visible = !0),
                e.setState({ stopped: !1 }),
                e.forceUpdate()));
          }
        },
        y = function () {
          v.listeners.forEach(function (e) {
            return h(e);
          }),
            v.pending.forEach(function (e) {
              return (0, r.default)(v.listeners, e);
            }),
            (v.pending = []);
        },
        w = (function (e) {
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
                  s = a.duration,
                  l = a.delay,
                  i = a.iteration,
                  n = a.animation,
                  o = a.disabled,
                  c = {
                    animationName: e ? "none" : n,
                    visibility: e && !o ? "hidden" : "visible",
                  };
                return (
                  s && (c.animationDuration = s),
                  l && (c.animationDelay = l),
                  i && (c.animationIterationCount = i),
                  c
                );
              }),
              (t.resetAnimation = function (e) {
                -1 !== e.type.toLowerCase().indexOf("animationend") &&
                  t.setState({ stopped: !0 }, function () {
                    var e = t.props.callback;
                    "function" === typeof e &&
                      e.call(t, n.default.findDOMNode(t));
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
            l(a, [
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.disabled) return !1;
                  if (this.props.overflow) {
                    var e = (0, u.default)(n.default.findDOMNode(this));
                    if (e && "function" === typeof e.getAttribute) {
                      var a = +e.getAttribute("data-react-wow") + 1;
                      1 === a && (0, c.on)(e, "scroll", y, b),
                        e.setAttribute("data-react-wow", a);
                    }
                  } else if (!v.listeners.length) {
                    var t = this.props,
                      s = t.scroll,
                      l = t.resize;
                    s && (0, c.on)(window, "scroll", y, b),
                      l && (0, c.on)(window, "resize", y, b);
                  }
                  v.listeners.push(this), h(this);
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
                    var e = (0, u.default)(n.default.findDOMNode(this));
                    if (e && "function" === typeof e.getAttribute) {
                      var a = +e.getAttribute("data-react-wow") - 1;
                      0 === a
                        ? ((0, c.off)(e, "scroll", y, b),
                          e.removeAttribute("data-react-wow"))
                        : e.setAttribute("data-react-wow", a);
                    }
                  }
                  (0, r.default)(v.listeners, this),
                    v.listeners.length ||
                      ((0, c.off)(window, "scroll", y, b),
                      (0, c.off)(window, "resize", y, b));
                },
              },
              {
                key: "mergeProps",
                value: function (e) {
                  var a = this.props,
                    t = a.animation,
                    l = a.animateClass,
                    i = this.customStyle(!this.visible),
                    n = this.visible
                      ? t + " " + (this.state.stopped ? "" : l)
                      : t;
                  return s({}, e, {
                    style: s({}, e.style, i),
                    className: (0, m.default)(
                      (e.className ? e.className : "") + " " + n
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
      (w.propTypes = {
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
        (w.defaultProps = {
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
        (a.default = w);
    },
    "66GM": function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index-2",
        function () {
          return t("yJs0");
        },
      ]);
    },
    Ci6P: function (e, a, t) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function (e) {
          if (!e) return document.documentElement;
          for (
            var a = "absolute" === e.style.position, t = /(scroll|auto)/, s = e;
            s;

          ) {
            if (!s.parentNode)
              return e.ownerDocument || document.documentElement;
            var l = window.getComputedStyle(s),
              i = l.position,
              n = l.overflow,
              o = l["overflow-x"],
              c = l["overflow-y"];
            if ("static" === i && a) s = s.parentNode;
            else {
              if (t.test(n) && t.test(o) && t.test(c)) return s;
              s = s.parentNode;
            }
          }
          return (
            e.ownerDocument || e.documentElement || document.documentElement
          );
        });
    },
    "E+5H": function (e, a, t) {
      "use strict";
      var s = t("q1tI"),
        l = t.n(s).a.createElement;
      a.a = function () {
        return l(
          "div",
          { className: "doctors-area-two pt-100 pb-70" },
          l(
            "div",
            { className: "container" },
            l(
              "div",
              { className: "section-title" },
              l("span", { className: "top-title" }, "Our Doctors"),
              l("h2", null, "Meet Our Doctors"),
              l(
                "p",
                null,
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus."
              )
            ),
            l(
              "div",
              { className: "row" },
              l(
                "div",
                { className: "col-lg-4 col-sm-6" },
                l(
                  "div",
                  { className: "single-doctors-two" },
                  l(
                    "div",
                    { className: "doctor-img" },
                    l("img", { src: "/img/doctors/doctor4.jpg", alt: "Image" }),
                    l(
                      "ul",
                      { className: "doctors-link" },
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-facebook" })
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-twitter" })
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-pinterest-alt" })
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-instagram" })
                        )
                      )
                    )
                  ),
                  l(
                    "div",
                    { className: "doctors-content" },
                    l("h3", null, "Dr. Merris Jelly"),
                    l("span", null, "Cardiologist")
                  )
                )
              ),
              l(
                "div",
                { className: "col-lg-4 col-sm-6" },
                l(
                  "div",
                  { className: "single-doctors-two" },
                  l(
                    "div",
                    { className: "doctor-img" },
                    l("img", { src: "/img/doctors/doctor5.jpg", alt: "Image" }),
                    l(
                      "ul",
                      { className: "doctors-link" },
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-facebook" })
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-twitter" })
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-pinterest-alt" })
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-instagram" })
                        )
                      )
                    )
                  ),
                  l(
                    "div",
                    { className: "doctors-content" },
                    l("h3", null, "Dr. James Bond"),
                    l("span", null, "Neurologist")
                  )
                )
              ),
              l(
                "div",
                { className: "col-lg-4 col-sm-6 offset-sm-3 offset-lg-0" },
                l(
                  "div",
                  { className: "single-doctors-two" },
                  l(
                    "div",
                    { className: "doctor-img" },
                    l("img", { src: "/img/doctors/doctor6.jpg", alt: "Image" }),
                    l(
                      "ul",
                      { className: "doctors-link" },
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-facebook" })
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-twitter" })
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-pinterest-alt" })
                        )
                      ),
                      l(
                        "li",
                        null,
                        l(
                          "a",
                          { href: "#", target: "_blank" },
                          l("i", { className: "bx bxl-instagram" })
                        )
                      )
                    )
                  ),
                  l(
                    "div",
                    { className: "doctors-content" },
                    l("h3", null, "Dr. Juhon Dew"),
                    l("span", null, "Kidney-Specialist")
                  )
                )
              )
            )
          )
        );
      };
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
    dwFv: function (e, a, t) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      (a.on = function (e, a, t) {
        var s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        e.addEventListener
          ? e.addEventListener(a, t, s)
          : e.attachEvent &&
            e.attachEvent("on" + a, function (a) {
              t.call(e, a || window.event);
            });
      }),
        (a.off = function (e, a, t) {
          var s =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          e.removeEventListener
            ? e.removeEventListener(a, t, s)
            : e.detachEvent && e.detachEvent("on" + a, t);
        });
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
    nCB2: function (e, a, t) {
      "use strict";
      var s = t("q1tI"),
        l = t.n(s).a.createElement;
      a.a = function () {
        return l(
          "div",
          { className: "counter-area two pt-100 pb-70" },
          l(
            "div",
            { className: "container" },
            l(
              "div",
              { className: "row" },
              l(
                "div",
                { className: "col-lg-3 col-sm-6" },
                l(
                  "div",
                  { className: "single-counter" },
                  l(
                    "h2",
                    null,
                    "4,348,595 ",
                    l("span", { className: "target" }, "+")
                  ),
                  l("p", null, "Total Confirmed")
                )
              ),
              l(
                "div",
                { className: "col-lg-3 col-sm-6" },
                l(
                  "div",
                  { className: "single-counter" },
                  l(
                    "h2",
                    null,
                    "147 ",
                    l("span", { className: "target" }, "+")
                  ),
                  l("p", null, "Total Countries")
                )
              ),
              l(
                "div",
                { className: "col-lg-3 col-sm-6" },
                l(
                  "div",
                  { className: "single-counter" },
                  l("h2", null, "20 ", l("span", { className: "traget" }, "%")),
                  l("p", null, "Total Recovered")
                )
              ),
              l(
                "div",
                { className: "col-lg-3 col-sm-6" },
                l(
                  "div",
                  { className: "single-counter" },
                  l("h2", null, "80 ", l("span", { className: "traget" }, "%")),
                  l("p", null, "Confirm Deaths")
                )
              )
            )
          )
        );
      };
    },
    yJs0: function (e, a, t) {
      "use strict";
      t.r(a);
      var s = t("q1tI"),
        l = t.n(s),
        i = t("SxW8"),
        n = t("ODXe"),
        o = t("YFqc"),
        c = t.n(o),
        r = t("2RFb"),
        m = t.n(r),
        u = t("60Bi"),
        d = t.n(u),
        p = l.a.createElement,
        f = function () {
          var e = l.a.useState(!0),
            a = Object(n.a)(e, 2),
            t = a[0],
            s = a[1];
          return p(
            l.a.Fragment,
            null,
            p(
              "div",
              { className: "main-banner-area-two" },
              p(
                "div",
                { className: "d-table" },
                p(
                  "div",
                  { className: "d-table-cell" },
                  p(
                    "div",
                    { className: "container-fluid" },
                    p(
                      "div",
                      { className: "row" },
                      p(
                        "div",
                        { className: "col-lg-6" },
                        p(
                          "div",
                          { className: "banner-text" },
                          p(
                            m.a,
                            { animation: "fadeInUp", delay: "1s" },
                            p("span", null, "Smarter Service Care")
                          ),
                          p(
                            m.a,
                            { animation: "fadeInUp", delay: "1s" },
                            p(
                              "h1",
                              null,
                              "Prevention From Corona Virus Stay Home, Stay Safe"
                            )
                          ),
                          p(
                            m.a,
                            { animation: "fadeInUp", delay: "1s" },
                            p(
                              "p",
                              null,
                              "We invest in high tech medical facilities that help solve specialized medical issues."
                            )
                          ),
                          p(
                            m.a,
                            { animation: "fadeInUp", delay: "1s" },
                            p(
                              "div",
                              { className: "banner-btn" },
                              p(
                                c.a,
                                { href: "/appointment" },
                                p(
                                  "a",
                                  { className: "default-btn" },
                                  "Get Started"
                                )
                              ),
                              p(
                                c.a,
                                { href: "#play-video" },
                                p(
                                  "a",
                                  {
                                    onClick: function (e) {
                                      e.preventDefault(), s(!t);
                                    },
                                    className:
                                      "default-btn active popup-youtube",
                                  },
                                  "Invest Now"
                                )
                              )
                            )
                          )
                        )
                      ),
                      p(
                        "div",
                        { className: "col-lg-6 pr-0" },
                        p(
                          "div",
                          { className: "banner-img-wrap" },
                          p(
                            m.a,
                            { animation: "fadeInUp", delay: "1s" },
                            p(
                              "div",
                              { className: "banner-img" },
                              p("img", {
                                src: "/img/home-two/home-two-banner.png",
                                alt: "Image",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            p(d.a, {
              channel: "youtube",
              isOpen: !t,
              videoId: "bk7McNUjWgw",
              onClose: function () {
                return s(!t);
              },
            })
          );
        },
        v = l.a.createElement,
        g = function () {
          return v(
            "div",
            { className: "second-facility-area two mt-100 pb-70" },
            v(
              "div",
              { className: "container" },
              v(
                "div",
                { className: "row" },
                v(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  v(
                    "div",
                    { className: "second-facility-item" },
                    v("img", {
                      src: "/img/facility-img/facility-icon1.png",
                      alt: "Image",
                    }),
                    v("h3", null, "Qualified Doctors"),
                    v(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    )
                  )
                ),
                v(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  v(
                    "div",
                    { className: "second-facility-item" },
                    v("img", {
                      src: "/img/facility-img/facility-icon2.png",
                      alt: "Image",
                    }),
                    v("h3", null, "Emergency Helicopter"),
                    v(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    )
                  )
                ),
                v(
                  "div",
                  { className: "col-lg-4 col-sm-6 offset-sm-3 offset-lg-0" },
                  v(
                    "div",
                    { className: "second-facility-item" },
                    v("img", {
                      src: "/img/facility-img/facility-icon3.png",
                      alt: "Image",
                    }),
                    v("h3", null, "Leading Technology"),
                    v(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    )
                  )
                )
              )
            )
          );
        },
        N = l.a.createElement,
        b = function () {
          return N(
            "div",
            { className: "about-area two ptb-100" },
            N(
              "div",
              { className: "container" },
              N(
                "div",
                { className: "row align-items-center" },
                N(
                  "div",
                  { className: "col-lg-6" },
                  N(
                    "div",
                    { className: "about-img" },
                    N("img", {
                      src: "/img/about-two/about-two1.png",
                      alt: "Image",
                    }),
                    N(
                      "div",
                      { className: "shape-1" },
                      N("img", {
                        src: "/img/about-two/about-two-shape2.png",
                        alt: "Image",
                      })
                    )
                  )
                ),
                N(
                  "div",
                  { className: "col-lg-6" },
                  N(
                    "div",
                    { className: "about-content" },
                    N("span", { className: "top-title" }, "About Corona"),
                    N("h2", null, "How COV-19 Spreads"),
                    N(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                    ),
                    N(
                      "strong",
                      null,
                      "The best way to prevent illness is to avoid being exposed to this virus."
                    ),
                    N(
                      "ul",
                      null,
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Clean and disinfect frequently touched surfaces"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Avoid touching your eyes, nose, and mouth"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Clean your hands with a hand sanitizer"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Cover coughs and sneezes"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Stay home if you\u2019re sick"
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
                      c.a,
                      { href: "/about" },
                      N("a", { className: "default-btn" }, "Know Details")
                    )
                  )
                )
              )
            )
          );
        },
        h = l.a.createElement,
        y = function () {
          return h(
            "div",
            { className: "symptoms-area pt-100 pb-70" },
            h(
              "div",
              { className: "container" },
              h(
                "div",
                { className: "row" },
                h(
                  "div",
                  { className: "col-lg-6" },
                  h(
                    "div",
                    { className: "symptoms-content" },
                    h("span", { className: "top-title" }, "Symptoms"),
                    h("h2", null, "Corona Virus Symptoms"),
                    h(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse"
                    )
                  ),
                  h(
                    "div",
                    { className: "row" },
                    h(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      h(
                        "div",
                        { className: "single-symptoms" },
                        h(
                          "h3",
                          null,
                          h("i", { className: "flaticon-checked" }),
                          "Headache"
                        )
                      )
                    ),
                    h(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      h(
                        "div",
                        { className: "single-symptoms" },
                        h(
                          "h3",
                          null,
                          h("i", { className: "flaticon-checked" }),
                          "Cough"
                        )
                      )
                    ),
                    h(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      h(
                        "div",
                        { className: "single-symptoms" },
                        h(
                          "h3",
                          null,
                          h("i", { className: "flaticon-checked" }),
                          "Sore Throat"
                        )
                      )
                    ),
                    h(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      h(
                        "div",
                        { className: "single-symptoms" },
                        h(
                          "h3",
                          null,
                          h("i", { className: "flaticon-checked" }),
                          "Fever"
                        )
                      )
                    ),
                    h(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      h(
                        "div",
                        { className: "single-symptoms" },
                        h(
                          "h3",
                          null,
                          h("i", { className: "flaticon-checked" }),
                          "Shortness of Breath"
                        )
                      )
                    ),
                    h(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      h(
                        "div",
                        { className: "single-symptoms" },
                        h(
                          "h3",
                          null,
                          h("i", { className: "flaticon-checked" }),
                          "Tired"
                        )
                      )
                    ),
                    h(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      h(
                        "div",
                        { className: "single-symptoms" },
                        h(
                          "h3",
                          null,
                          h("i", { className: "flaticon-checked" }),
                          "Vomiting"
                        )
                      )
                    ),
                    h(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      h(
                        "div",
                        { className: "single-symptoms" },
                        h(
                          "h3",
                          null,
                          h("i", { className: "flaticon-checked" }),
                          "Cold"
                        )
                      )
                    ),
                    h(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      h(
                        "div",
                        { className: "single-symptoms" },
                        h(
                          "h3",
                          null,
                          h("i", { className: "flaticon-checked" }),
                          "Diarrhea"
                        )
                      )
                    ),
                    h(
                      "div",
                      { className: "col-lg-6 col-sm-6" },
                      h(
                        "div",
                        { className: "single-symptoms" },
                        h(
                          "h3",
                          null,
                          h("i", { className: "flaticon-checked" }),
                          "Muscle Pain"
                        )
                      )
                    )
                  )
                ),
                h(
                  "div",
                  { className: "col-lg-6" },
                  h(
                    "div",
                    { className: "symptoms-img" },
                    h("img", { src: "/img/symptoms-img.png", alt: "Image" })
                  )
                )
              )
            )
          );
        },
        w = t("nCB2"),
        k = l.a.createElement,
        O = function () {
          return k(
            "div",
            { className: "prevention-area pt-100 pb-70" },
            k(
              "div",
              { className: "container-fluid" },
              k(
                "div",
                { className: "section-title" },
                k("span", { className: "top-title" }, "Prevention"),
                k("h2", null, "How To Protect Yourself"),
                k(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse"
                )
              ),
              k(
                "div",
                { className: "row align-items-center" },
                k(
                  "div",
                  { className: "col-lg-8" },
                  k(
                    "div",
                    { className: "prevention-wrap" },
                    k(
                      "div",
                      { className: "row" },
                      k(
                        "div",
                        { className: "col-lg-6 col-sm-6" },
                        k(
                          "div",
                          { className: "single-prevention" },
                          k("i", { className: "flaticon-hand-wash" }),
                          k("h3", null, "Wash Your Hands"),
                          k(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"
                          )
                        )
                      ),
                      k(
                        "div",
                        { className: "col-lg-6 col-sm-6" },
                        k(
                          "div",
                          { className: "single-prevention" },
                          k("i", { className: "flaticon-medical-mask" }),
                          k("h3", null, "Use Face Mask"),
                          k(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"
                          )
                        )
                      ),
                      k(
                        "div",
                        { className: "col-lg-6 col-sm-6" },
                        k(
                          "div",
                          { className: "single-prevention" },
                          k("i", { className: "flaticon-stay-home" }),
                          k("h3", null, "Stay At Home"),
                          k(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"
                          )
                        )
                      ),
                      k(
                        "div",
                        { className: "col-lg-6 col-sm-6" },
                        k(
                          "div",
                          { className: "single-prevention" },
                          k("i", { className: "flaticon-alcohol-gel" }),
                          k("h3", null, "Use Hand Sanitizer"),
                          k(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"
                          )
                        )
                      ),
                      k(
                        "div",
                        { className: "col-lg-6 col-sm-6" },
                        k(
                          "div",
                          { className: "single-prevention" },
                          k("i", { className: "flaticon-protection" }),
                          k("h3", null, "Avoid Close Contact"),
                          k(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"
                          )
                        )
                      ),
                      k(
                        "div",
                        { className: "col-lg-6 col-sm-6" },
                        k(
                          "div",
                          { className: "single-prevention" },
                          k("i", { className: "flaticon-washing-hands" }),
                          k("h3", null, "Washing Hands"),
                          k(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"
                          )
                        )
                      ),
                      k(
                        "div",
                        { className: "col-lg-6 col-sm-6" },
                        k(
                          "div",
                          { className: "single-prevention" },
                          k("i", { className: "flaticon-protection-1" }),
                          k("h3", null, "Don\u2019t Touch Face"),
                          k(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"
                          )
                        )
                      ),
                      k(
                        "div",
                        { className: "col-lg-6 col-sm-6" },
                        k(
                          "div",
                          { className: "single-prevention" },
                          k("i", { className: "flaticon-gloves" }),
                          k("h3", null, "Use Your Gloves"),
                          k(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"
                          )
                        )
                      )
                    )
                  )
                ),
                k(
                  "div",
                  { className: "col-lg-4" },
                  k(
                    "div",
                    { className: "prevention-img" },
                    k("img", { src: "/img/prevention-img.png", alt: "Image" }),
                    k(
                      "div",
                      { className: "shape" },
                      k("img", {
                        src: "/img/prevention-shape-2.png",
                        alt: "Image",
                      })
                    )
                  )
                )
              )
            ),
            k(
              "div",
              { className: "shape-1" },
              k("img", { src: "/img/prevention-shape-1.png", alt: "Image" })
            ),
            k(
              "div",
              { className: "shape-2" },
              k("img", { src: "/img/prevention-shape-1.png", alt: "Image" })
            ),
            k(
              "div",
              { className: "shape-3" },
              k("img", { src: "/img/prevention-shape-1.png", alt: "Image" })
            ),
            k(
              "div",
              { className: "shape-4" },
              k("img", { src: "/img/prevention-shape-1.png", alt: "Image" })
            )
          );
        },
        x = t("E+5H"),
        E = t("iFQd"),
        C = l.a.createElement,
        j = function () {
          return C(
            "div",
            { className: "make-appointment-area ptb-100" },
            C(
              "div",
              { className: "container" },
              C(
                "div",
                { className: "make-appointment-content" },
                C("h2", null, "NEED TO TEST COVID-19?"),
                C(
                  "p",
                  null,
                  "Just Make an Appointment Then We\u2019ll Come to you To Collect Your Same"
                ),
                C(
                  c.a,
                  { href: "/appointment" },
                  C("a", { className: "default-btn" }, "Make An Appointment")
                )
              )
            )
          );
        },
        _ = t("o0o1"),
        q = t.n(_),
        P = t("HaE+"),
        S = t("rePB"),
        D = t("NKCw"),
        I = t("vDqi"),
        M = t.n(I),
        A = t("PSD3"),
        L = t.n(A),
        T = t("2BYM"),
        H = t.n(T),
        U = t("rjN7"),
        F = l.a.createElement;
      function B(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          a &&
            (s = s.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, s);
        }
        return t;
      }
      function Y(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? B(Object(t), !0).forEach(function (a) {
                Object(S.a)(e, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (a) {
                Object.defineProperty(
                  e,
                  a,
                  Object.getOwnPropertyDescriptor(t, a)
                );
              });
        }
        return e;
      }
      var R = H()(L.a),
        W = { name: "", email: "", number: "", subject: "", text: "" },
        z = function () {
          var e = Object(s.useState)(W),
            a = e[0],
            t = e[1],
            l = Object(D.a)(),
            i = l.register,
            n = l.handleSubmit,
            o = l.errors,
            c = function (e) {
              var s = e.target,
                l = s.name,
                i = s.value;
              t(function (e) {
                return Y(Y({}, e), {}, Object(S.a)({}, l, i));
              }),
                console.log(a);
            };
          return F(
            "div",
            { className: "contact-wrap contact-pages mb-0" },
            F(
              "div",
              { className: "contact-form" },
              F(
                "form",
                {
                  id: "contactForm",
                  onSubmit: n(
                    (function () {
                      var e = Object(P.a)(
                        q.a.mark(function e(s) {
                          var l, i, n, o, c, r, m;
                          return q.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (l = "".concat(U.a, "/api/contact")),
                                      (i = a.name),
                                      (n = a.email),
                                      (o = a.number),
                                      (c = a.subject),
                                      (r = a.text),
                                      (m = {
                                        name: i,
                                        email: n,
                                        number: o,
                                        subject: c,
                                        text: r,
                                      }),
                                      (e.next = 6),
                                      M.a.post(l, m)
                                    );
                                  case 6:
                                    console.log(l),
                                      t(W),
                                      R.fire({
                                        title: "Congratulations!",
                                        text: "Your message was successfully send and will back to you soon",
                                        icon: "success",
                                        timer: 2e3,
                                        timerProgressBar: !0,
                                        showConfirmButton: !1,
                                      }),
                                      (e.next = 14);
                                    break;
                                  case 11:
                                    (e.prev = 11),
                                      (e.t0 = e.catch(0)),
                                      console.log(e.t0);
                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 11]]
                          );
                        })
                      );
                      return function (a) {
                        return e.apply(this, arguments);
                      };
                    })()
                  ),
                },
                F(
                  "div",
                  { className: "row" },
                  F(
                    "div",
                    { className: "col-lg-12" },
                    F(
                      "div",
                      { className: "form-group" },
                      F("input", {
                        type: "text",
                        name: "name",
                        className: "form-control",
                        placeholder: "Your Name",
                        value: a.name,
                        onChange: c,
                        ref: i({ required: !0 }),
                      }),
                      F(
                        "div",
                        {
                          className: "invalid-feedback",
                          style: { display: "block" },
                        },
                        o.name && "Name is required."
                      )
                    )
                  ),
                  F(
                    "div",
                    { className: "col-lg-12" },
                    F(
                      "div",
                      { className: "form-group" },
                      F("input", {
                        type: "text",
                        name: "email",
                        className: "form-control",
                        placeholder: "Your Email",
                        value: a.email,
                        onChange: c,
                        ref: i({ required: !0, pattern: /^\S+@\S+$/i }),
                      }),
                      F(
                        "div",
                        {
                          className: "invalid-feedback",
                          style: { display: "block" },
                        },
                        o.email && "Email is required."
                      )
                    )
                  ),
                  F(
                    "div",
                    { className: "col-lg-12" },
                    F(
                      "div",
                      { className: "form-group" },
                      F("input", {
                        type: "text",
                        name: "number",
                        className: "form-control",
                        placeholder: "Your Phone",
                        value: a.number,
                        onChange: c,
                        ref: i({ required: !0 }),
                      }),
                      F(
                        "div",
                        {
                          className: "invalid-feedback",
                          style: { display: "block" },
                        },
                        o.number && "Number is required."
                      )
                    )
                  ),
                  F(
                    "div",
                    { className: "col-lg-12" },
                    F(
                      "div",
                      { className: "form-group" },
                      F("input", {
                        type: "text",
                        name: "subject",
                        className: "form-control",
                        placeholder: "Your Subject",
                        value: a.subject,
                        onChange: c,
                        ref: i({ required: !0 }),
                      }),
                      F(
                        "div",
                        {
                          className: "invalid-feedback",
                          style: { display: "block" },
                        },
                        o.subject && "Subject is required."
                      )
                    )
                  ),
                  F(
                    "div",
                    { className: "col-lg-12 col-md-12" },
                    F(
                      "div",
                      { className: "form-group" },
                      F("textarea", {
                        name: "text",
                        className: "form-control",
                        cols: "30",
                        rows: "5",
                        placeholder: "Your Message",
                        value: a.text,
                        onChange: c,
                        ref: i({ required: !0 }),
                      }),
                      F(
                        "div",
                        {
                          className: "invalid-feedback",
                          style: { display: "block" },
                        },
                        o.text && "Text body is required."
                      )
                    )
                  ),
                  F(
                    "div",
                    { className: "col-lg-6 col-sm-6" },
                    F(
                      "div",
                      { className: "contact-num" },
                      F("h3", null, "For Emergency"),
                      F(
                        "span",
                        null,
                        F("a", { href: "tel:+442-456a-789" }, "+442-456a-789")
                      )
                    )
                  ),
                  F(
                    "div",
                    { className: "col-lg-6 col-sm-6" },
                    F(
                      "button",
                      { type: "submit", className: "default-btn btn-two" },
                      "Send Message"
                    )
                  )
                )
              )
            )
          );
        },
        J = l.a.createElement,
        Q = function () {
          return J(
            "div",
            { className: "main-contact-area ptb-100" },
            J(
              "div",
              { className: "container" },
              J(
                "div",
                { className: "section-title" },
                J("span", { className: "top-title" }, "Contact Us"),
                J("h2", null, "Drop us a message for any query"),
                J(
                  "p",
                  null,
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium. Aliquam minus quisquam velit in at nam."
                )
              ),
              J(
                "div",
                { className: "row align-items-center" },
                J("div", { className: "col-lg-6" }, J(z, null)),
                J(
                  "div",
                  { className: "col-lg-6" },
                  J(
                    "div",
                    { className: "contact-img" },
                    J("img", { src: "/img/contact-img.png", alt: "Image" })
                  )
                )
              )
            )
          );
        },
        V = t("aHcw"),
        K = t("LKaZ"),
        G = t("Wf2E"),
        X = t("mdYk"),
        Z = l.a.createElement;
      a.default = function () {
        return Z(
          l.a.Fragment,
          null,
          Z(i.a, null),
          Z(f, null),
          Z(g, null),
          Z(b, null),
          Z(y, null),
          Z(w.a, null),
          Z(O, null),
          Z(x.a, null),
          Z(E.a, null),
          Z(j, null),
          Z(Q, null),
          Z(V.a, null),
          Z(K.a, null),
          Z(G.a, null),
          Z(X.a, null)
        );
      };
    },
  },
  [["66GM", 0, 1, 2, 3, 6, 7, 9, 8]],
]);
