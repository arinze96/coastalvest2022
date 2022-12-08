_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [29],
  {
    "2RFb": function (e, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var s = arguments[a];
              for (var t in s)
                Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t]);
            }
            return e;
          },
        i = (function () {
          function e(e, a) {
            for (var s = 0; s < a.length; s++) {
              var t = a[s];
              (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                "value" in t && (t.writable = !0),
                Object.defineProperty(e, t.key, t);
            }
          }
          return function (a, s, t) {
            return s && e(a.prototype, s), t && e(a, t), a;
          };
        })(),
        l = d(s("q1tI")),
        o = d(s("i8i4")),
        n = s("17x9"),
        r = s("dwFv"),
        c = d(s("b7n0")),
        m = d(s("j5U0")),
        u = d(s("Ci6P"));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var p = 0,
        f = 0,
        g = { listeners: [], pending: [] },
        v = !1;
      try {
        var N = Object.defineProperty({}, "passive", {
          get: function () {
            v = !0;
          },
        });
        window.addEventListener("test", null, N);
      } catch (x) {}
      var b = !!v && { capture: !1, passive: !0 },
        h = function (e) {
          var a = o.default.findDOMNode(e);
          if (a) {
            var s = (0, u.default)(a);
            (e.props.overflow &&
            s !== a.ownerDocument &&
            s !== document &&
            s !== document.documentElement
              ? (function (e, a) {
                  var s = o.default.findDOMNode(e),
                    t = void 0,
                    i = void 0;
                  try {
                    var l = a.getBoundingClientRect();
                    (t = l.top), (i = l.height);
                  } catch (x) {
                    (t = p), (i = f);
                  }
                  var n =
                      window.innerHeight ||
                      document.documentElement.clientHeight,
                    r = Math.max(t, 0),
                    c = Math.min(n, t + i) - r,
                    m = void 0,
                    u = void 0;
                  try {
                    var d = s.getBoundingClientRect();
                    (m = d.top), (u = d.height);
                  } catch (x) {
                    (m = p), (u = f);
                  }
                  var g = m - r,
                    v = Array.isArray(e.props.offset)
                      ? e.props.offset
                      : [e.props.offset, e.props.offset];
                  return g - v[0] <= c && g + u + v[1] >= 0;
                })(e, s)
              : (function (e) {
                  var a = o.default.findDOMNode(e);
                  if (
                    !(
                      a.offsetWidth ||
                      a.offsetHeight ||
                      a.getClientRects().length
                    )
                  )
                    return !1;
                  var s = void 0,
                    t = void 0;
                  try {
                    var i = a.getBoundingClientRect();
                    (s = i.top), (t = i.height);
                  } catch (x) {
                    (s = p), (t = f);
                  }
                  var l =
                      window.innerHeight ||
                      document.documentElement.clientHeight,
                    n = Array.isArray(e.props.offset)
                      ? e.props.offset
                      : [e.props.offset, e.props.offset];
                  return s - n[0] <= l && s + t + n[1] >= 0;
                })(e)) &&
              (e.visible ||
                (g.pending.push(e),
                (e.visible = !0),
                e.setState({ stopped: !1 }),
                e.forceUpdate()));
          }
        },
        w = function () {
          g.listeners.forEach(function (e) {
            return h(e);
          }),
            g.pending.forEach(function (e) {
              return (0, c.default)(g.listeners, e);
            }),
            (g.pending = []);
        },
        y = (function (e) {
          function a(e) {
            !(function (e, a) {
              if (!(e instanceof a))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            var s = (function (e, a) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !a || ("object" !== typeof a && "function" !== typeof a)
                ? e
                : a;
            })(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
            return (
              (s.customStyle = function (e) {
                var a = s.props,
                  t = a.duration,
                  i = a.delay,
                  l = a.iteration,
                  o = a.animation,
                  n = a.disabled,
                  r = {
                    animationName: e ? "none" : o,
                    visibility: e && !n ? "hidden" : "visible",
                  };
                return (
                  t && (r.animationDuration = t),
                  i && (r.animationDelay = i),
                  l && (r.animationIterationCount = l),
                  r
                );
              }),
              (s.resetAnimation = function (e) {
                -1 !== e.type.toLowerCase().indexOf("animationend") &&
                  s.setState({ stopped: !0 }, function () {
                    var e = s.props.callback;
                    "function" === typeof e &&
                      e.call(s, o.default.findDOMNode(s));
                  });
              }),
              (s.visible = !1),
              (s.state = { stopped: !1 }),
              s
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
            i(a, [
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.disabled) return !1;
                  if (this.props.overflow) {
                    var e = (0, u.default)(o.default.findDOMNode(this));
                    if (e && "function" === typeof e.getAttribute) {
                      var a = +e.getAttribute("data-react-wow") + 1;
                      1 === a && (0, r.on)(e, "scroll", w, b),
                        e.setAttribute("data-react-wow", a);
                    }
                  } else if (!g.listeners.length) {
                    var s = this.props,
                      t = s.scroll,
                      i = s.resize;
                    t && (0, r.on)(window, "scroll", w, b),
                      i && (0, r.on)(window, "resize", w, b);
                  }
                  g.listeners.push(this), h(this);
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
                    var e = (0, u.default)(o.default.findDOMNode(this));
                    if (e && "function" === typeof e.getAttribute) {
                      var a = +e.getAttribute("data-react-wow") - 1;
                      0 === a
                        ? ((0, r.off)(e, "scroll", w, b),
                          e.removeAttribute("data-react-wow"))
                        : e.setAttribute("data-react-wow", a);
                    }
                  }
                  (0, c.default)(g.listeners, this),
                    g.listeners.length ||
                      ((0, r.off)(window, "scroll", w, b),
                      (0, r.off)(window, "resize", w, b));
                },
              },
              {
                key: "mergeProps",
                value: function (e) {
                  var a = this.props,
                    s = a.animation,
                    i = a.animateClass,
                    l = this.customStyle(!this.visible),
                    o = this.visible
                      ? s + " " + (this.state.stopped ? "" : i)
                      : s;
                  return t({}, e, {
                    style: t({}, e.style, l),
                    className: (0, m.default)(
                      (e.className ? e.className : "") + " " + o
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
                    s = a.children;
                  return a.disabled
                    ? s
                    : s
                    ? l.default.Children.map(s, function (a) {
                        return l.default.cloneElement(a, e.mergeProps(a.props));
                      })
                    : null;
                },
              },
            ]),
            a
          );
        })(l.default.Component);
      (y.propTypes = {
        duration: n.string,
        delay: n.string,
        iteration: n.string,
        animation: n.string,
        children: n.node,
        scroll: n.bool,
        resize: n.bool,
        animateClass: n.string,
        offset: (0, n.oneOfType)([n.number, (0, n.arrayOf)(n.number)]),
        overflow: n.bool,
        callback: n.func,
      }),
        (y.defaultProps = {
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
        (a.default = y);
    },
    Ci6P: function (e, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function (e) {
          if (!e) return document.documentElement;
          for (
            var a = "absolute" === e.style.position, s = /(scroll|auto)/, t = e;
            t;

          ) {
            if (!t.parentNode)
              return e.ownerDocument || document.documentElement;
            var i = window.getComputedStyle(t),
              l = i.position,
              o = i.overflow,
              n = i["overflow-x"],
              r = i["overflow-y"];
            if ("static" === l && a) t = t.parentNode;
            else {
              if (s.test(o) && s.test(n) && s.test(r)) return t;
              t = t.parentNode;
            }
          }
          return (
            e.ownerDocument || e.documentElement || document.documentElement
          );
        });
    },
    ClGi: function (e, a, s) {
      "use strict";
      var t = s("q1tI"),
        i = s.n(t).a.createElement;
      a.a = function () {
        return i(
          "div",
          { className: "counter-area pt-100 pb-70" },
          i(
            "div",
            { className: "container" },
            i(
              "div",
              { className: "row" },
              i(
                "div",
                { className: "col-lg-3 col-sm-6" },
                i(
                  "div",
                  { className: "single-counter" },
                  i("i", { className: "flaticon-man" }),
                  i(
                    "h2",
                    null,
                    "1540 ",
                    i("span", { className: "target" }, "+")
                  ),
                  i("p", null, "Companies Invested in")
                )
              ),
              i(
                "div",
                { className: "col-lg-3 col-sm-6" },
                i(
                  "div",
                  { className: "single-counter" },
                  i("i", { className: "flaticon-tick" }),
                  i(
                    "h2",
                    null,
                    "990 ",
                    i("span", { className: "target" }, "+")
                  ),
                  i("p", null, "Successful Story")
                )
              ),
              i(
                "div",
                { className: "col-lg-3 col-sm-6" },
                i(
                  "div",
                  { className: "single-counter" },
                  i("i", { className: "flaticon-trophy" }),
                  i(
                    "h2",
                    null,
                    "3500 ",
                    i("span", { className: "traget" }, "+")
                  ),
                  i("p", null, "Global Presence")
                )
              ),
              i(
                "div",
                { className: "col-lg-3 col-sm-6" },
                i(
                  "div",
                  { className: "single-counter" },
                  i("i", { className: "flaticon-experience" }),
                  i("h2", null, "23 ", i("span", { className: "traget" }, "+")),
                  i("p", null, "Years of Experiences")
                )
              )
            )
          ),
          i(
            "div",
            { className: "shape-wrap" },
            i(
              "div",
              { className: "shape-1" },
              i("img", { src: "/img/shape/counter-shape.png", alt: "Image" })
            ),
            i(
              "div",
              { className: "shape-2" },
              i("img", { src: "/img/shape/counter-shape.png", alt: "Image" })
            )
          )
        );
      };
    },
    "K/5y": function (e, a, s) {
      "use strict";
      var t = s("wx14"),
        i = s("ODXe"),
        l = s("q1tI"),
        o = s.n(l),
        n = s("a6RD"),
        r = s.n(n),
        c = o.a.createElement,
        m = r()(
          function () {
            return s.e(4).then(s.t.bind(null, "Rst5", 7));
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
        u = {
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
        var e = o.a.useState(!1),
          a = Object(i.a)(e, 2),
          s = a[0],
          l = a[1];
        return (
          o.a.useEffect(function () {
            l(!0);
          }, []),
          c(
            "div",
            { className: "doctors-area pt-100 pb-70" },
            c(
              "div",
              { className: "container" },
              
              s
                ? c(
                    m,
                    Object(t.a)(
                      { className: "doctors-wrap owl-carousel owl-theme" },
                      u
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
    RNiq: function (e, a, s) {
      "use strict";
      s.r(a);
      var t = s("q1tI"),
        i = s.n(t),
        l = s("SxW8"),
        o = s("ODXe"),
        n = s("YFqc"),
        r = s.n(n),
        c = s("2RFb"),
        m = s.n(c),
        u = s("60Bi"),
        d = s.n(u),
        p = i.a.createElement,
        f = function () {
          var e = i.a.useState(!0),
            a = Object(o.a)(e, 2),
            s = a[0],
            t = a[1];
          return p(
            i.a.Fragment,
            null,
            p(
              "div",
              { className: "main-banner-area" },
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
                              "Investments in Medical Health made easy"
                            )
                          ),
                          
                          p(
                            m.a,
                            { animation: "fadeInUp", delay: "1s" },
                            p(
                              "div",
                              { className: "banner-btn" },
                              p(
                                r.a,
                                { href: "/mh_products" },
                                p(
                                  "a",
                                  { className: "default-btn" },
                                  "View All Products"
                                )
                              ),
                             
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
                                src: "/img/home-one/home-one-banner.png",
                                alt: "Image",
                              })
                            )
                          ),
                          p(
                            "div",
                            { className: "banner-shape" },
                            p("img", {
                              src: "/img/home-one/home-one-shape.png",
                              alt: "Image",
                            })
                          )
                        )
                      )
                    ),
                    p(
                      "div",
                      { className: "first-facility-area" },
                      p(
                        "div",
                        { className: "row" },
                        p(
                          "div",
                          { className: "col-lg-4 col-sm-6" },
                          p(
                            "div",
                            { className: "first-facility-item" },
                            p("i", { className: "flaticon-care" }),
                            p("h3", null, "Investment in Health Special Service companies"),
                            p(
                              "p",
                              null,
                              "Our Medical experts help our select the most profitable medical firms offering special services"
                            )
                          )
                        ),
                        p(
                          "div",
                          { className: "col-lg-4 col-sm-6" },
                          p(
                            "div",
                            { className: "first-facility-item" },
                            p("i", { className: "flaticon-support" }),
                            p("h3", null, "Seed funding rounds for early stage medical startup"),
                            p(
                              "p",
                              null,
                              "Over $2 billion investments in 560 companies accross North America"
                            )
                          )
                        ),
                        p(
                          "div",
                          {
                            className:
                              "col-lg-4 col-sm-6 offset-sm-3 offset-lg-0",
                          },
                          p(
                            "div",
                            { className: "first-facility-item" },
                            p("i", { className: "flaticon-online-learning" }),
                            p("h3", null, "Guaranteed Mentorship"),
                            p(             
                              "p",
                              null,
                              "We provide guaranteed mentorship to companies we invest in across te board"
                            )
                          )
                        )
                      ),
                      p(
                        "div",
                        { className: "shape" },
                        p("img", { src: "/img/shape/shape1.png", alt: "Image" })
                      )
                    )
                  )
                )
              )
            ),
            p(d.a, {
              channel: "youtube",
              isOpen: !s,
              videoId: "bk7McNUjWgw",
              onClose: function () {
                return t(!s);
              },
            })
          );
        },
        g = i.a.createElement,
        v = function () {
          return g(
            "div",
            { className: "second-facility-area pt-100 pb-70" },
            g(
              "div",
              { className: "container" },
              g(
                "div",
                { className: "row" },
                g(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  g(
                    "div",
                    { className: "second-facility-item" },
                   
                    g("h3", null, "Mission"),
                    g(
                      "p",
                      null,
                      "We invest in Emerging Growth Healthcare companies where we believe the flexible application of Coastal trust Capital’s frameworks can amplify the potential and pace of growth. We actively engage with tech-enabled B2B services businesses to leverage and scale their technology and maximize the value of their data assets. We strive to increase operational efficiencies, broaden market reach, and accelerate sustainable growth. Our greatest mutual successes are the result of open dialogue, a spirit of partnership, and active engagement in deploying our flexible, time-tested value creation frameworks.s"
                    ),
                    
                  )
                ),
                g(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  g(
                    "div",
                    { className: "second-facility-item" },
                   
                    g("h3", null, "Strategy"),
                    g(
                      "p",
                      null,
                      "Coastal trust capital seeks the integration software and tech-enabled services in the healthcare companies they invest, which are keen to maximize the potential of their technology and data assets to capture greater market share and expand their offering. We pursue opportunities across the United States and around the globe with a focus on founders in regions where private capital is often less accessible and where our longstanding relationships and active sourcing enable us to identify promising businesses. We invest in businesses looking for active engagement who value our guidance in building out infrastructure, implementing data strategies, and modernizing their processes to meaningfully accelerate growth."
                    ),
                    
                  )
                ),
                g(
                  "div",
                  { className: "col-lg-4 col-sm-6 offset-sm-3 offset-lg-0" },
                  g(
                    "div",
                    { className: "second-facility-item" },
                 
                    g("h3", null, "Drive"),
                    g(
                      "p",
                      null,
                      "Coastal trust Capital provides growth equity capital to Healthcare companies and tech-enabled health care services businesses with strong technology and data underpinnings looking to scale with the right partners. Building businesses has been our passion for 30 years. Over that time, we have invested in approximately 130 companies across eight funds.Starting from a deep respect for what it takes to build a company, we bring our investing, operational, infrastructure, technology, and business development skills to support and amplify the success of growing businesses. We choose companies carefully, just as they choose us. We invest in them, advise them, and inspire them"
                      ),
                    
                  )
                )
              )
            )
          );
        },
        N = i.a.createElement,
        b = function () {
          return N(
            "div",
            { className: "about-area pb-130" },
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
                    N("img", { src: "/img/about/about1.jpg", alt: "Image" }),
                    N(
                      "div",
                      { className: "shape-1" },
                      N("img", {
                        src: "/img/about/about-shape-1.png",
                        alt: "Image",
                      })
                    ),
                    N(
                      "div",
                      { className: "shape-2" },
                      N("img", {
                        src: "/img/about/about-shape-2.png",
                        alt: "Image",
                      })
                    ),
                    N(
                      "div",
                      { className: "shape-3" },
                      N("img", {
                        src: "/img/about/about-shape-3.png",
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
                    N("span", { className: "top-title" }, "About the companies we invest in"),
                    N(
                      "h2",
                      null,
                      "We have a goal to better Healthcare accross the globe by our strategic investment"
                    ),
                    N(
                      "p",
                      null,
                      "All Medical establishment we invest in has been fully accredited by the most recognized medical Associations in america"
                    ),
                    N(
                      "ul",
                      null,
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "They have Scientific skills for getting a better result"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "A good environment for work"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Professional doctors"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Digital laboratory"
                      ),
                      N(
                        "li",
                        null,
                        N("i", { className: "flaticon-tick" }),
                        "Emergency services"
                      )
                    ),
                  )
                )
              )
            )
          );
        },
        h = i.a.createElement,
        w = function () {
          return h(
            "div",
            { className: "services-area bg pt-100 pb-70" },
            h(
              "div",
              { className: "container" },
              h(
                "div",
                { className: "section-title" },
                h("span", { className: "top-title" }, "Investment Strategy"),
                h("h2", null, "Categories of Health firms we invest in"),
                h(
                  "p",
                  null,
                  "Below are the specialized sectors of healthcare we invest in "
                )
              ),
              h(
                "div",
                { className: "row" },
                h(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  h(
                    "div",
                    { className: "single-services" },
                    h("span", { className: "flaticon-man" }),
                    h("h3", null, "Medical Equipments Companies"),
                    h(
                      "p",
                      null,
                      ""
                    ),
                   
                    h(
                      "div",
                      { className: "services-shape" },
                      
                    )
                  )
                ),
                h(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  h(
                    "div",
                    { className: "single-services" },
                    h("span", { className: "flaticon-man" }),
                    h("h3", null, "Cancer Research Firms"),
                    h(
                      "p",
                      null,
                      ""
                    ),
                   
                    h(
                      "div",
                      { className: "services-shape" },
                      
                    )
                  )
                ),
                h(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  h(
                    "div",
                    { className: "single-services" },
                    h("span", { className: "flaticon-man" }),
                    h("h3", null, "Organ Transplant Firms"),
                    h(
                      "p",
                      null,
                      ""
                    ),
                   
                    h(
                      "div",
                      { className: "services-shape" },
                      
                    )
                  )
                ),
                h(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  h(
                    "div",
                    { className: "single-services" },
                    h("span", { className: "flaticon-man" }),
                    h("h3", null, "Neurology Specialist Hospitals"),
                    h(
                      "p",
                      null,
                      ""
                    ),
                   
                    h(
                      "div",
                      { className: "services-shape" },
                      
                    )
                  )
                ),
                h(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  h(
                    "div",
                    { className: "single-services" },
                    h("span", { className: "flaticon-man" }),
                    h("h3", null, "Orthopedic Care Companies"),
                    h(
                      "p",
                      null,
                      ""
                    ),
                   
                    h(
                      "div",
                      { className: "services-shape" },
                      
                    )
                  )
                ),
                h(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  h(
                    "div",
                    { className: "single-services" },
                    h("span", { className: "flaticon-liver" }),
                    h("h3", null, "Health Insurance Firms"),
                    h(
                      "p",
                      null,
                      ""
                    ),
                   
                    h(
                      "div",
                      { className: "services-shape" },
                     
                    )
                  )
                ),
        
                h(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  h(
                    "div",
                    { className: "single-services" },
                    h("span", { className: "flaticon-brain" }),
                    h("h3", null, "Nutritional Company"),
                    h(
                      "p",
                      null,
                      ""
                    ),
                   
                    h(
                      "div",
                      { className: "services-shape" },
                      
                    )
                  )
                ),
                h(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  h(
                    "div",
                    { className: "single-services" },
                    h("span", { className: "flaticon-walker" }),
                    h("h3", null, "Diagnostic and Laboratory firm"),
                    h(
                      "p",
                      null,
                      ""
                    ),
                   
                    h(
                      "div",
                      { className: "services-shape" },
                      
                    )
                  )
                )
              )
            )
          );
        },
        y = s("K/5y"),
        x = s("Wqml"),
        k = s("ClGi"),
        E = s("NRhA"),
        _ = s.n(E),
        M = i.a.createElement,
        O = function () {
          var e = Object(t.useState)(new Date()),
            a = e[0],
            s = e[1];
          return M(
            "div",
            { className: "appointment-area jarallax" },
          
          );
        },
        I = i.a.createElement,
        D = function () {
          return I(
            "div",
            { className: "emergency-area" },
            I(
              "div",
              { className: "container-fluid" },
              I(
                "div",
                { className: "row" },
                I(
                  "div",
                  { className: "col-lg-6" },
                  I(
                    "div",
                    { className: "emergency-content ptb-100" },
                    I("h2", null, "We Invest in Intensive care units (ICUs)"),
                    I(
                      "p",
                      null,
                      "Intensive care units (ICUs) are specialist hospital wards that provide treatment and monitoring for people who are very ill.They are staffed with specially trained healthcare professionals and contain sophisticated monitoring equipment.ICUs are also sometimes called critical care units (CCUs) or intensive therapy units (ITUs)."                    ),
                    I(
                      "p",
                      null,
                      "Intensive care is needed if someone is seriously ill and requires intensive treatment and close monitoring, or if they're having surgery and intensive care can help them recover."
                      ),
                    I(
                      "ul",
                      null,
                      I(
                        "li",
                        { className: "active" },
                        I("i", { className: "bx bx-phone-call" }),
                        I("span", null, "Call Now"),
                        I(
                          "h3",
                          null,
                          I("a", { href: "tel:+19194211323" }, "+19194211323")
                        )
                      ),
                      I(
                        "li",
                        null,
                        I("i", { className: "bx bx-envelope" }),
                        I("span", null, "Mail Us"),
                        I(
                          "h3",
                          null,
                          I(
                            "a",
                            { href: "mailto:support@coastalvest.com" },
                            "support@coastalvest.com"
                          )
                        )
                      )
                    )
                  )
                ),
                I(
                  "div",
                  { className: "col-lg-6 pr-0" },
                  I("div", { className: "emergency-img" })
                )
              )
            ),
            I(
              "div",
              { className: "shape" },
              I("img", { src: "/img/shape/emergency-shape.png", alt: "Image" })
            )
          );
        },
        C = s("aHcw"),
        L = s("LKaZ"),
        P = s("Wf2E"),
        A = s("mdYk"),
        R = i.a.createElement;
      a.default = function () {
        return R(
          i.a.Fragment,
          null,
          R(l.a, null),
          R(f, null),
          R(v, null),
          R(b, null),
          R(w, null),
          R(y.a, null),
          R(x.a, null),
          R(k.a, null),
          R(O, null),
          R(D, null),
          R(C.a, null),
          R(L.a, null),
          R(P.a, null),
          R(A.a, null)
        );
      };
    },
    Wqml: function (e, a, s) {
      "use strict";
      var t = s("wx14"),
        i = s("ODXe"),
        l = s("q1tI"),
        o = s.n(l),
        n = s("YFqc"),
        r = s.n(n),
        c = s("a6RD"),
        m = s.n(c),
        u = o.a.createElement,
        d = m()(
          function () {
            return s.e(4).then(s.t.bind(null, "Rst5", 7));
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
        p = {
          loop: !0,
          nav: !1,
          autoplay: !0,
          autoplayHoverPause: !0,
          mouseDrag: !0,
          margin: 30,
          center: !0,
          dots: !0,
          smartSpeed: 1500,
          responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 3 },
          },
        };
      a.a = function () {
        var e = o.a.useState(!1),
          a = Object(i.a)(e, 2),
          s = a[0],
          l = a[1];
        return (
          o.a.useEffect(function () {
            l(!0);
          }, []),
          u(
            "div",
            { className: "our-work-area ptb-100" },
            u(
              "div",
              { className: "container" },
              u(
                "div",
                { className: "section-title" },
                u("h2", null, "Staff Testimonies"),
                u(
                  "p",
                  null,
                  "I am a staff of Coastal trust capital and i have made over $100,000 from my medical hedge funds portfolio. i will encourage you to invest in this platform, you will never regret it.....Martha Denis(Portland Oregon USA)"
                )
              ),
              s
                ? u(
                    d,
                    Object(t.a)(
                      { className: "work-wrap owl-carousel owl-theme" },
                      p
                    ),
                    u(
                      "div",
                      { className: "single-work" },
                      u("img", { src: "/img/work1.jpg", alt: "Image" }),
                      u(
                        "h3",
                        { className: "work-title" },
                        u("i", { className: "flaticon-kidney" }),
                        "Surgery Dep"
                      ),
                      u(
                        "div",
                        { className: "work-content-wrap" },
                        u(
                          "div",
                          { className: "work-content" },
                          u("h3", null, "Surgery Dep"),
                          u(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                          ),
                          u(
                            r.a,
                            { href: "#" },
                            u(
                              "a",
                              { className: "read-more" },
                              "Details ",
                              u("i", { className: "bx bx-plus" })
                            )
                          )
                        )
                      )
                    ),
                    u(
                      "div",
                      { className: "single-work" },
                      u("img", { src: "/img/work2.jpg", alt: "Image" }),
                      u(
                        "h3",
                        { className: "work-title" },
                        u("i", { className: "flaticon-doll" }),
                        "Childcare Dep"
                      ),
                      u(
                        "div",
                        { className: "work-content-wrap" },
                        u(
                          "div",
                          { className: "work-content" },
                          u("h3", null, "Childcare Dep"),
                          u(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                          ),
                          u(
                            r.a,
                            { href: "#" },
                            u(
                              "a",
                              { className: "read-more" },
                              "Details ",
                              u("i", { className: "bx bx-plus" })
                            )
                          )
                        )
                      )
                    ),
                    u(
                      "div",
                      { className: "single-work" },
                      u("img", { src: "/img/work3.jpg", alt: "Image" }),
                      u(
                        "h3",
                        { className: "work-title" },
                        u("i", { className: "flaticon-cardiology" }),
                        "Cardiology Dep"
                      ),
                      u(
                        "div",
                        { className: "work-content-wrap" },
                        u(
                          "div",
                          { className: "work-content" },
                          u("h3", null, "Cardiology Dep"),
                          u(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                          ),
                          u(
                            r.a,
                            { href: "#" },
                            u(
                              "a",
                              { className: "read-more" },
                              "Details ",
                              u("i", { className: "bx bx-plus" })
                            )
                          )
                        )
                      )
                    ),
                    u(
                      "div",
                      { className: "single-work" },
                      u("img", { src: "/img/work4.jpg", alt: "Image" }),
                      u(
                        "h3",
                        { className: "work-title" },
                        u("i", { className: "flaticon-cardiology" }),
                        "Cardiologist"
                      ),
                      u(
                        "div",
                        { className: "work-content-wrap" },
                        u(
                          "div",
                          { className: "work-content" },
                          u("h3", null, "Cardiologist"),
                          u(
                            "p",
                            null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                          ),
                          u(
                            r.a,
                            { href: "#" },
                            u(
                              "a",
                              { className: "read-more" },
                              "Details ",
                              u("i", { className: "bx bx-plus" })
                            )
                          )
                        )
                      )
                    )
                  )
                : ""
            ),
            u(
              "div",
              { className: "shape" },
              u("img", { src: "/img/shape/work-shape.png", alt: "Image" })
            )
          )
        );
      };
    },
    b7n0: function (e, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            a = arguments[1],
            s = e.indexOf(a);
          -1 !== s && e.splice(s, 1);
        });
    },
    dwFv: function (e, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 });
      (a.on = function (e, a, s) {
        var t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        e.addEventListener
          ? e.addEventListener(a, s, t)
          : e.attachEvent &&
            e.attachEvent("on" + a, function (a) {
              s.call(e, a || window.event);
            });
      }),
        (a.off = function (e, a, s) {
          var t =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          e.removeEventListener
            ? e.removeEventListener(a, s, t)
            : e.detachEvent && e.detachEvent("on" + a, s);
        });
    },
    j5U0: function (e, a, s) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            a = e.trim().split(" ");
          return a
            .filter(function (e, s) {
              return !!e && a.indexOf(e) === s;
            })
            .join(" ");
        });
    },
    vlRD: function (e, a, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s("RNiq");
        },
      ]);
    },
  },
  [["vlRD", 0, 1, 2, 3, 5, 7, 8]],
]);
