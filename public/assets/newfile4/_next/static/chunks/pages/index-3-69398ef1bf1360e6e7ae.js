_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [31],
  {
    "2qu3": function (e, a, t) {
      "use strict";
      var s = t("lSNA"),
        l = t("lwsE"),
        i = t("W8MJ");
      function n(e, a) {
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
      function r(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? n(Object(t), !0).forEach(function (a) {
                s(e, a, t[a]);
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
            var s = 0,
              l = function () {};
            return {
              s: l,
              n: function () {
                return s >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[s++] };
              },
              e: function (e) {
                throw e;
              },
              f: l,
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
            t = e[Symbol.iterator]();
          },
          n: function () {
            var e = t.next();
            return (n = e.done), e;
          },
          e: function (e) {
            (r = !0), (i = e);
          },
          f: function () {
            try {
              n || null == t.return || t.return();
            } finally {
              if (r) throw i;
            }
          },
        };
      }
      function c(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, s = new Array(a); t < a; t++) s[t] = e[t];
        return s;
      }
      (a.__esModule = !0), (a.default = void 0);
      var u,
        m = (u = t("q1tI")) && u.__esModule ? u : { default: u },
        d = t("8L3h"),
        p = t("jwwS");
      var g = [],
        f = [],
        h = !1;
      function v(e) {
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
      function b(e) {
        var a = { loading: !1, loaded: {}, error: null },
          t = [];
        try {
          Object.keys(e).forEach(function (s) {
            var l = v(e[s]);
            l.loading
              ? (a.loading = !0)
              : ((a.loaded[s] = l.loaded), (a.error = l.error)),
              t.push(l.promise),
              l.promise
                .then(function (e) {
                  a.loaded[s] = e;
                })
                .catch(function (e) {
                  a.error = e;
                });
          });
        } catch (s) {
          a.error = s;
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
      function N(e, a) {
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
              render: N,
              webpack: null,
              modules: null,
            },
            a
          ),
          s = null;
        function l() {
          if (!s) {
            var a = new w(e, t);
            s = {
              getCurrentValue: a.getCurrentValue.bind(a),
              subscribe: a.subscribe.bind(a),
              retry: a.retry.bind(a),
              promise: a.promise.bind(a),
            };
          }
          return s.promise();
        }
        if (!h && "function" === typeof t.webpack) {
          var i = t.webpack();
          f.push(function (e) {
            var a,
              t = o(i);
            try {
              for (t.s(); !(a = t.n()).done; ) {
                var s = a.value;
                if (-1 !== e.indexOf(s)) return l();
              }
            } catch (n) {
              t.e(n);
            } finally {
              t.f();
            }
          });
        }
        var n = function (e, a) {
          l();
          var i = m.default.useContext(p.LoadableContext),
            n = (0, d.useSubscription)(s);
          return (
            m.default.useImperativeHandle(
              a,
              function () {
                return { retry: s.retry };
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
                return n.loading || n.error
                  ? m.default.createElement(t.loading, {
                      isLoading: n.loading,
                      pastDelay: n.pastDelay,
                      timedOut: n.timedOut,
                      error: n.error,
                      retry: s.retry,
                    })
                  : n.loaded
                  ? t.render(n.loaded, e)
                  : null;
              },
              [e, n]
            )
          );
        };
        return (
          (n.preload = function () {
            return l();
          }),
          (n.displayName = "LoadableComponent"),
          m.default.forwardRef(n)
        );
      }
      var w = (function () {
        function e(a, t) {
          l(this, e),
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
      function _(e) {
        return y(v, e);
      }
      function x(e, a) {
        for (var t = []; e.length; ) {
          var s = e.pop();
          t.push(s(a));
        }
        return Promise.all(t).then(function () {
          if (e.length) return x(e, a);
        });
      }
      (_.Map = function (e) {
        if ("function" !== typeof e.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return y(b, e);
      }),
        (_.preloadAll = function () {
          return new Promise(function (e, a) {
            x(g).then(e, a);
          });
        }),
        (_.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (a) {
            var t = function () {
              return (h = !0), a();
            };
            x(f, e).then(t, t);
          });
        }),
        (window.__NEXT_PRELOADREADY = _.preloadReady);
      var O = _;
      a.default = O;
    },
    AV47: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index-3",
        function () {
          return t("Axw1");
        },
      ]);
    },
    Axw1: function (e, a, t) {
      "use strict";
      t.r(a);
      var s = t("q1tI"),
        l = t.n(s),
        i = t("SxW8"),
        n = t("wx14"),
        r = t("ODXe"),
        o = t("YFqc"),
        c = t.n(o),
        u = t("60Bi"),
        m = t.n(u),
        d = t("a6RD"),
        p = t.n(d),
        g = l.a.createElement,
        f = p()(
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
        h = {
          items: 1,
          loop: !0,
          nav: !1,
          mouseDrag: !0,
          dots: !0,
          autoplay: !0,
          autoplayHoverPause: !0,
        },
        v = function () {
          var e = l.a.useState(!1),
            a = Object(r.a)(e, 2),
            t = a[0],
            s = a[1];
          l.a.useEffect(function () {
            s(!0);
          }, []);
          var i = l.a.useState(!0),
            o = Object(r.a)(i, 2),
            u = o[0],
            d = o[1],
            p = function () {
              d(!u);
            };
          return g(
            l.a.Fragment,
            null,
            g(
              "div",
              { className: "hero-slider-area" },
              t
                ? g(
                    f,
                    Object(n.a)(
                      { className: "hero-slider-wrap owl-carousel owl-theme" },
                      h
                    ),
                    g(
                      "div",
                      { className: "slider-item slider-item-bg-1" },
                      g(
                        "div",
                        { className: "d-table" },
                        g(
                          "div",
                          { className: "d-table-cell" },
                          g(
                            "div",
                            { className: "container" },
                            g(
                              "div",
                              { className: "row align-items-center" },
                              g(
                                "div",
                                { className: "col-lg-9" },
                                g(
                                  "div",
                                  { className: "slider-text one" },
                                  g(
                                    "span",
                                    { className: "top-title" },
                                    "Assessment Center &  Testing"
                                  ),
                                  g(
                                    "h1",
                                    null,
                                    "Assessment Treatment Center For COVID-19 Disease"
                                  ),
                                  g(
                                    "p",
                                    null,
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure."
                                  ),
                                  g(
                                    "div",
                                    { className: "slider-btn" },
                                    g(
                                      c.a,
                                      { href: "/register" },
                                      g(
                                        "a",
                                        { className: "default-btn" },
                                        "Get Started"
                                      )
                                    )
                                  )
                                )
                              ),
                              g(
                                "div",
                                { className: "col-lg-3" },
                                g(
                                  c.a,
                                  { href: "#play-video" },
                                  g(
                                    "a",
                                    {
                                      onClick: function (e) {
                                        e.preventDefault(), p();
                                      },
                                      className: "video-btn popup-youtube",
                                    },
                                    g("i", {
                                      className: "flaticon-play-button-2",
                                    })
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    g(
                      "div",
                      { className: "slider-item slider-item-bg-2" },
                      g(
                        "div",
                        { className: "d-table" },
                        g(
                          "div",
                          { className: "d-table-cell" },
                          g(
                            "div",
                            { className: "container" },
                            g(
                              "div",
                              { className: "row align-items-center" },
                              g(
                                "div",
                                { className: "col-lg-9" },
                                g(
                                  "div",
                                  { className: "slider-text two" },
                                  g(
                                    "span",
                                    { className: "top-title" },
                                    "Assessment Center & Testing"
                                  ),
                                  g(
                                    "h1",
                                    null,
                                    "Emergency? The world\u2019s Wait for Find Doctor ",
                                    g("br", null),
                                    " Easy Way"
                                  ),
                                  g(
                                    "p",
                                    null,
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure."
                                  ),
                                  g(
                                    "div",
                                    { className: "slider-btn" },
                                    g(
                                      c.a,
                                      { href: "/appointment" },
                                      g(
                                        "a",
                                        { className: "default-btn" },
                                        "Book An Appointment"
                                      )
                                    )
                                  )
                                )
                              ),
                              g(
                                "div",
                                { className: "col-lg-3" },
                                g(
                                  c.a,
                                  { href: "#play-video" },
                                  g(
                                    "a",
                                    {
                                      onClick: function (e) {
                                        e.preventDefault(), p();
                                      },
                                      className: "video-btn popup-youtube",
                                    },
                                    g("i", {
                                      className: "flaticon-play-button-2",
                                    })
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    g(
                      "div",
                      { className: "slider-item slider-item-bg-3" },
                      g(
                        "div",
                        { className: "d-table" },
                        g(
                          "div",
                          { className: "d-table-cell" },
                          g(
                            "div",
                            { className: "container" },
                            g(
                              "div",
                              { className: "row align-items-center" },
                              g(
                                "div",
                                { className: "col-lg-9" },
                                g(
                                  "div",
                                  { className: "slider-text two" },
                                  g(
                                    "span",
                                    { className: "top-title" },
                                    "Assessment Center &  Testing"
                                  ),
                                  g(
                                    "h1",
                                    null,
                                    "Free Health Checkup Ensure A Better Life!"
                                  ),
                                  g(
                                    "p",
                                    null,
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure."
                                  ),
                                  g(
                                    "div",
                                    { className: "slider-btn" },
                                    g(
                                      c.a,
                                      { href: "/appointment" },
                                      g(
                                        "a",
                                        { className: "default-btn" },
                                        "Book An Appointment"
                                      )
                                    )
                                  )
                                )
                              ),
                              g(
                                "div",
                                { className: "col-lg-3" },
                                g(
                                  c.a,
                                  { href: "#play-video" },
                                  g(
                                    "a",
                                    {
                                      onClick: function (e) {
                                        e.preventDefault(), p();
                                      },
                                      className: "video-btn popup-youtube",
                                    },
                                    g("i", {
                                      className: "flaticon-play-button-2",
                                    })
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                : ""
            ),
            g(m.a, {
              channel: "youtube",
              isOpen: !u,
              videoId: "bk7McNUjWgw",
              onClose: function () {
                return d(!u);
              },
            })
          );
        },
        b = t("nCB2"),
        N = t("iFQd"),
        y = l.a.createElement,
        w = function () {
          return y(
            "div",
            { className: "second-facility-area three mt-100 pb-70" },
            y(
              "div",
              { className: "container" },
              y(
                "div",
                { className: "row" },
                y(
                  "div",
                  { className: "col-lg-4 col-sm-6 p-0" },
                  y(
                    "div",
                    { className: "second-facility-item" },
                    y("img", {
                      src: "/img/facility-img/facility-icon1.png",
                      alt: "Image",
                    }),
                    y("h3", null, "Qualified Doctors"),
                    y(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    ),
                    y(
                      c.a,
                      { href: "/services-details" },
                      y(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        y("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                ),
                y(
                  "div",
                  { className: "col-lg-4 col-sm-6 p-0" },
                  y(
                    "div",
                    { className: "second-facility-item" },
                    y("img", {
                      src: "/img/facility-img/facility-icon2.png",
                      alt: "Image",
                    }),
                    y("h3", null, "Emergency Helicopter"),
                    y(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    ),
                    y(
                      c.a,
                      { href: "/services-details" },
                      y(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        y("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                ),
                y(
                  "div",
                  {
                    className: "col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0",
                  },
                  y(
                    "div",
                    { className: "second-facility-item" },
                    y("img", {
                      src: "/img/facility-img/facility-icon3.png",
                      alt: "Image",
                    }),
                    y("h3", null, "Leading Technology"),
                    y(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    ),
                    y(
                      c.a,
                      { href: "/services-details" },
                      y(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        y("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                )
              )
            )
          );
        },
        _ = l.a.createElement,
        x = p()(
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
        O = {
          loop: !0,
          nav: !0,
          dots: !1,
          autoplayHoverPause: !0,
          autoplay: !0,
          items: 1,
          animateOut: "fadeOut",
          margin: 0,
          navText: ["<i class='bx bx-chevron-right'></i>"],
        },
        k = function () {
          var e = l.a.useState(!1),
            a = Object(r.a)(e, 2),
            t = a[0],
            s = a[1];
          return (
            l.a.useEffect(function () {
              s(!0);
            }, []),
            _(
              "div",
              { className: "about-area-three pb-100" },
              _(
                "div",
                { className: "container" },
                _(
                  "div",
                  { className: "row align-items-center" },
                  _(
                    "div",
                    { className: "col-lg-6" },
                    _(
                      "div",
                      { className: "about-content" },
                      _("span", { className: "top-title" }, "COVID-19 Testing"),
                      _(
                        "h2",
                        null,
                        "The clinic will be testing and treating COVID-19 cases "
                      ),
                      _(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                      ),
                      _(
                        "ul",
                        null,
                        _(
                          "li",
                          null,
                          _("h3", null, "Criteria For testing:"),
                          _(
                            "p",
                            null,
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio magnam recusandae doloribus facere. Distinctio nesciunt unde facere rerum natus eveniet nam"
                          )
                        ),
                        _(
                          "li",
                          null,
                          _("h3", null, "High-risk staff testing:"),
                          _(
                            "p",
                            null,
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio magnam recusandae doloribus facere. Distinctio nesciunt unde facere rerum natus eveniet nam"
                          )
                        )
                      ),
                      _(
                        c.a,
                        { href: "/about" },
                        _("a", { className: "default-btn" }, "About Us")
                      )
                    )
                  ),
                  _(
                    "div",
                    { className: "col-lg-6" },
                    _(
                      "div",
                      { className: "about-img" },
                      t
                        ? _(
                            x,
                            Object(n.a)(
                              {
                                className:
                                  "about-img-wrap owl-carousel owl-theme",
                              },
                              O
                            ),
                            _(
                              "div",
                              { className: "about-item" },
                              _("img", {
                                src: "/img/home-three/home-three-about1.jpg",
                                alt: "Image",
                              })
                            ),
                            _(
                              "div",
                              { className: "about-item" },
                              _("img", {
                                src: "/img/home-three/home-three-about2.jpg",
                                alt: "Image",
                              })
                            )
                          )
                        : "",
                      _(
                        "div",
                        { className: "shape-3" },
                        _("img", {
                          src: "/img/about/about-shape-3.png",
                          alt: "Image",
                        })
                      )
                    )
                  )
                )
              )
            )
          );
        },
        j = l.a.createElement,
        D = function () {
          return j(
            "div",
            { className: "how-its-work ptb-100" },
            j(
              "div",
              { className: "container" },
              j(
                "div",
                { className: "section-title" },
                j("span", { className: "top-title" }, "Woks"),
                j("h2", null, "How It Works"),
                j(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus."
                )
              ),
              j(
                "div",
                { className: "row align-items-center" },
                j(
                  "div",
                  { className: "col-lg-6" },
                  j(
                    "div",
                    { className: "how-its-work-content" },
                    j(
                      "div",
                      { className: "content-wrap" },
                      j("h3", null, "Make An Appoinment"),
                      j(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
                      )
                    ),
                    j(
                      "div",
                      { className: "content-wrap" },
                      j("h3", null, "Get Ready For Testing"),
                      j(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
                      )
                    ),
                    j(
                      "div",
                      { className: "content-wrap" },
                      j("h3", null, "Admidmission to the Hospital"),
                      j(
                        "p",
                        null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
                      )
                    ),
                    j(
                      c.a,
                      { href: "#" },
                      j("a", { className: "default-btn" }, "Know Details")
                    )
                  )
                ),
                j(
                  "div",
                  { className: "col-lg-6" },
                  j(
                    "div",
                    { className: "how-work-img" },
                    j("img", {
                      src: "/img/home-three/home-three-works-img.png",
                      alt: "Image",
                    })
                  )
                )
              )
            )
          );
        },
        E = l.a.createElement,
        I = function () {
          return E(
            "div",
            { className: "services-area-three pt-100 pb-70" },
            E(
              "div",
              { className: "container" },
              E(
                "div",
                { className: "section-title" },
                E("span", { className: "top-title" }, "Our Services"),
                E("h2", null, "Our Healthcare Service"),
                E(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus."
                )
              ),
              E(
                "div",
                { className: "row" },
                E(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  E(
                    "div",
                    { className: "single-services" },
                    E("span", { className: "flaticon-man" }),
                    E("h3", null, "Cancer Service"),
                    E(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"
                    ),
                    E(
                      c.a,
                      { href: "/services-details" },
                      E(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        E("i", { className: "bx bx-plus" })
                      )
                    ),
                    E(
                      "div",
                      { className: "services-shape" },
                      E("img", {
                        src: "/img/services-card-shape.png",
                        alt: "Image",
                      })
                    )
                  )
                ),
                E(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  E(
                    "div",
                    { className: "single-services" },
                    E("span", { className: "flaticon-liver" }),
                    E("h3", null, "Liver Transport"),
                    E(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"
                    ),
                    E(
                      c.a,
                      { href: "/services-details" },
                      E(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        E("i", { className: "bx bx-plus" })
                      )
                    ),
                    E(
                      "div",
                      { className: "services-shape" },
                      E("img", {
                        src: "/img/services-card-shape.png",
                        alt: "Image",
                      })
                    )
                  )
                ),
                E(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  E(
                    "div",
                    { className: "single-services" },
                    E("span", { className: "flaticon-kidney" }),
                    E("h3", null, "Kidney Transport"),
                    E(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"
                    ),
                    E(
                      c.a,
                      { href: "/services-details" },
                      E(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        E("i", { className: "bx bx-plus" })
                      )
                    ),
                    E(
                      "div",
                      { className: "services-shape" },
                      E("img", {
                        src: "/img/services-card-shape.png",
                        alt: "Image",
                      })
                    )
                  )
                ),
                E(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  E(
                    "div",
                    { className: "single-services" },
                    E("span", { className: "flaticon-heart" }),
                    E("h3", null, "Cardiac Arrhythmia"),
                    E(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"
                    ),
                    E(
                      c.a,
                      { href: "/services-details" },
                      E(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        E("i", { className: "bx bx-plus" })
                      )
                    ),
                    E(
                      "div",
                      { className: "services-shape" },
                      E("img", {
                        src: "/img/services-card-shape.png",
                        alt: "Image",
                      })
                    )
                  )
                ),
                E(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  E(
                    "div",
                    { className: "single-services" },
                    E("span", { className: "flaticon-brain" }),
                    E("h3", null, "Neurology Care"),
                    E(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"
                    ),
                    E(
                      c.a,
                      { href: "/services-details" },
                      E(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        E("i", { className: "bx bx-plus" })
                      )
                    ),
                    E(
                      "div",
                      { className: "services-shape" },
                      E("img", {
                        src: "/img/services-card-shape.png",
                        alt: "Image",
                      })
                    )
                  )
                ),
                E(
                  "div",
                  { className: "col-lg-4 col-sm-6" },
                  E(
                    "div",
                    { className: "single-services" },
                    E("span", { className: "flaticon-walker" }),
                    E("h3", null, "Orthopedic Care"),
                    E(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"
                    ),
                    E(
                      c.a,
                      { href: "/services-details" },
                      E(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        E("i", { className: "bx bx-plus" })
                      )
                    ),
                    E(
                      "div",
                      { className: "services-shape" },
                      E("img", {
                        src: "/img/services-card-shape.png",
                        alt: "Image",
                      })
                    )
                  )
                )
              )
            ),
            E(
              "div",
              { className: "shape-1" },
              E("img", { src: "/img/prevention-shape-1.png", alt: "Image" })
            ),
            E(
              "div",
              { className: "shape-2" },
              E("img", { src: "/img/prevention-shape-1.png", alt: "Image" })
            ),
            E(
              "div",
              { className: "shape-3" },
              E("img", { src: "/img/prevention-shape-1.png", alt: "Image" })
            ),
            E(
              "div",
              { className: "shape-4" },
              E("img", { src: "/img/prevention-shape-1.png", alt: "Image" })
            )
          );
        },
        A = t("E+5H"),
        C = l.a.createElement,
        P = function () {
          return C(
            "div",
            { className: "assessment-center-area ptb-100" },
            C(
              "div",
              { className: "container" },
              C(
                "div",
                { className: "row align-items-center" },
                C(
                  "div",
                  { className: "col-lg-6" },
                  C(
                    "div",
                    { className: "assessment-img" },
                    C("img", {
                      src: "/img/home-three/assessment-img.png",
                      alt: "Image",
                    })
                  )
                ),
                C(
                  "div",
                  { className: "col-lg-6" },
                  C(
                    "div",
                    { className: "emergency-contents" },
                    C("span", { className: "top-title" }, "Assessment Center"),
                    C("h2", null, "Who Should not  Visit Assesment Center"),
                    C(
                      "p",
                      null,
                      "People who have symptoms of upper respiratory tract infection (cough, sore throat, headache, muscle aches, fatigue, runny nose, and joint aches, and may also include."
                    ),
                    C(
                      "ul",
                      null,
                      C(
                        "li",
                        null,
                        "Healthcare workers should follow their organization."
                      ),
                      C(
                        "li",
                        null,
                        "People with no symptoms who have not travelled"
                      ),
                      C(
                        "li",
                        null,
                        "Instead, self-isolate  at home for 14 days"
                      ),
                      C(
                        "li",
                        null,
                        "People with no symptoms who have travelled"
                      ),
                      C("li", null, "Instead, self-monitor PDF for 14 days")
                    ),
                    C(
                      c.a,
                      { href: "#" },
                      C("a", { className: "default-btn" }, "Know Details")
                    )
                  )
                )
              )
            )
          );
        },
        L = l.a.createElement,
        S = function () {
          return L(
            "div",
            { className: "emergency-department-area pb-100" },
            L(
              "div",
              { className: "container" },
              L(
                "div",
                { className: "row align-items-center" },
                L(
                  "div",
                  { className: "col-lg-6" },
                  L(
                    "div",
                    { className: "emergency-contents" },
                    L(
                      "span",
                      { className: "top-title" },
                      "Emergency Department"
                    ),
                    L(
                      "h2",
                      null,
                      "Who Should Go to the Nearest Emergency Department"
                    ),
                    L(
                      "p",
                      null,
                      "People who have symptoms of upper respiratory tract infection (cough, sore throat, headache, muscle aches, fatigue, runny nose, and joint aches, and may also include."
                    ),
                    L(
                      "ul",
                      null,
                      L(
                        "li",
                        null,
                        "Weakness that impairs ability to carry out activities of daily"
                      ),
                      L(
                        "li",
                        null,
                        "Shortness of breath when walking, exercising, or at rest"
                      ),
                      L("li", null, "Chest pain or discomfort"),
                      L("li", null, "Lethargy or drowsiness"),
                      L("li", null, "Dizziness")
                    ),
                    L(
                      c.a,
                      { href: "#" },
                      L("a", { className: "default-btn" }, "Know Details")
                    )
                  )
                ),
                L(
                  "div",
                  { className: "col-lg-6" },
                  L(
                    "div",
                    { className: "assessments-img" },
                    L("img", {
                      src: "/img/home-three/emergency-img.png",
                      alt: "Image",
                    })
                  )
                )
              )
            )
          );
        },
        q = l.a.createElement,
        T = function () {
          return q(
            "div",
            { className: "emergency-department-area ptb-100" },
            q(
              "div",
              { className: "container" },
              q(
                "div",
                { className: "row align-items-center" },
                q(
                  "div",
                  { className: "col-lg-6" },
                  q(
                    "div",
                    { className: "emergency-contents" },
                    q("span", { className: "top-title" }, "Prevention"),
                    q(
                      "h2",
                      null,
                      "How Can I get best to ",
                      q("br", null),
                      " protect myself"
                    ),
                    q(
                      "p",
                      null,
                      "People who have symptoms of upper respiratory tract infection (cough, sore throat, headache, muscle aches, fatigue, runny nose, and joint aches, and may also include"
                    ),
                    q(
                      "ul",
                      null,
                      q(
                        "li",
                        null,
                        "Wash your hands often with soap and water for at least 15-20 seconds."
                      ),
                      q(
                        "li",
                        null,
                        "Avoid touching your eyes, nose and mouth with unwashed hands."
                      ),
                      q(
                        "li",
                        null,
                        "Avoid close contact (within 6 feet) with people who are sick."
                      ),
                      q("li", null, "Cover your cough or sneeze with a tissue"),
                      q("li", null, "Stay home when you are sick.")
                    ),
                    q(
                      c.a,
                      { href: "#" },
                      q("a", { className: "default-btn" }, "Know Details")
                    )
                  )
                ),
                q(
                  "div",
                  { className: "col-lg-6" },
                  q(
                    "div",
                    { className: "assessments-img" },
                    q("img", {
                      src: "/img/home-three/home-three-prevention-img.png",
                      alt: "Image",
                    })
                  )
                )
              )
            )
          );
        },
        M = l.a.createElement,
        R = function () {
          return M(
            "div",
            { className: "operate-area ptb-100" },
            M(
              "div",
              { className: "container" },
              M(
                "div",
                { className: "row align-items-center" },
                M(
                  "div",
                  { className: "col-lg-4" },
                  M(
                    "div",
                    { className: "operate-img" },
                    M("img", {
                      src: "/img/home-three/operate-img.png",
                      alt: "Image",
                    })
                  )
                ),
                M(
                  "div",
                  { className: "col-lg-4" },
                  M(
                    "div",
                    { className: "operate-text" },
                    M("h2", null, "We operate 24 a day!"),
                    M("p", null, "Call us if you have any urgent help!")
                  )
                ),
                M(
                  "div",
                  { className: "col-lg-4" },
                  M(
                    "div",
                    { className: "operate-btn" },
                    M(
                      "a",
                      { href: "tel:+882-456-889", className: "default-btn" },
                      M("i", { className: "bx bx-phone-call" }),
                      "+882-456-889"
                    )
                  )
                )
              )
            )
          );
        },
        H = t("LKaZ"),
        W = t("Wf2E"),
        F = t("mdYk"),
        V = l.a.createElement;
      a.default = function () {
        return V(
          l.a.Fragment,
          null,
          V(i.a, null),
          V(v, null),
          V(w, null),
          V(k, null),
          V(D, null),
          V(I, null),
          V(A.a, null),
          V(b.a, null),
          V(P, null),
          V(S, null),
          V(N.a, null),
          V(T, null),
          V(R, null),
          V(H.a, null),
          V(W.a, null),
          V(F.a, null)
        );
      };
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
    a6RD: function (e, a, t) {
      "use strict";
      var s = t("lSNA");
      function l(e, a) {
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
      function i(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? l(Object(t), !0).forEach(function (a) {
                s(e, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (a) {
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
          var t = n.default,
            s = {
              loading: function (e) {
                e.error, e.isLoading;
                return e.pastDelay, null;
              },
            };
          e instanceof Promise
            ? (s.loader = function () {
                return e;
              })
            : "function" === typeof e
            ? (s.loader = e)
            : "object" === typeof e && (s = i(i({}, s), e));
          if (
            ((s = i(i({}, s), a)),
            "object" === typeof e &&
              !(e instanceof Promise) &&
              (e.render &&
                (s.render = function (a, t) {
                  return e.render(t, a);
                }),
              e.modules))
          ) {
            t = n.default.Map;
            var l = {},
              r = e.modules();
            Object.keys(r).forEach(function (e) {
              var a = r[e];
              "function" !== typeof a.then
                ? (l[e] = a)
                : (l[e] = function () {
                    return a.then(function (e) {
                      return e.default || e;
                    });
                  });
            }),
              (s.loader = l);
          }
          s.loadableGenerated &&
            delete (s = i(i({}, s), s.loadableGenerated)).loadableGenerated;
          if ("boolean" === typeof s.ssr) {
            if (!s.ssr) return delete s.ssr, o(t, s);
            delete s.ssr;
          }
          return t(s);
        });
      r(t("q1tI"));
      var n = r(t("2qu3"));
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, a) {
        return delete a.webpack, delete a.modules, e(a);
      }
    },
    jwwS: function (e, a, t) {
      "use strict";
      var s;
      (a.__esModule = !0), (a.LoadableContext = void 0);
      var l = (
        (s = t("q1tI")) && s.__esModule ? s : { default: s }
      ).default.createContext(null);
      a.LoadableContext = l;
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
    wx14: function (e, a, t) {
      "use strict";
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }
            return e;
          }).apply(this, arguments);
      }
      t.d(a, "a", function () {
        return s;
      });
    },
  },
  [["AV47", 0, 1, 2, 3, 6, 8]],
]);
