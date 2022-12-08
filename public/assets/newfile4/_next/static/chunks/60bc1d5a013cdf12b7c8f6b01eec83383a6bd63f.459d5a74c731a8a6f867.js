(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    "0Yqi": function (a, e, l) {
      "use strict";
      function s(a, e) {
        if (null == a) return {};
        var l,
          s,
          i = (function (a, e) {
            if (null == a) return {};
            var l,
              s,
              i = {},
              t = Object.keys(a);
            for (s = 0; s < t.length; s++)
              (l = t[s]), e.indexOf(l) >= 0 || (i[l] = a[l]);
            return i;
          })(a, e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(a);
          for (s = 0; s < t.length; s++)
            (l = t[s]),
              e.indexOf(l) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(a, l) &&
                  (i[l] = a[l]));
        }
        return i;
      }
      var i = l("nOHt"),
        t = l("YFqc"),
        n = l.n(t),
        c = l("q1tI"),
        r = l.n(c),
        o = r.a.createElement;
      e.a = Object(i.withRouter)(function (a) {
        var e = a.router,
          l = a.children,
          i = s(a, ["router", "children"]),
          t = c.Children.only(l),
          m = t.props.className || "";
        return (
          e.pathname === i.href &&
            i.activeClassName &&
            (m = "".concat(m, " ").concat(i.activeClassName).trim()),
          delete i.activeClassName,
          o(n.a, i, r.a.cloneElement(t, { className: m }))
        );
      });
    },
    DtZh: function (a, e, l) {
      "use strict";
      var s = l("ODXe"),
        i = l("q1tI"),
        t = l.n(i),
        n = l("0Yqi"),
        c = l("j1fb"),
        r = t.a.createElement;
      e.a = function () {
        var a = t.a.useState(!0),
          e = Object(s.a)(a, 2),
          l = e[0],
          i = e[1],
          o = function () {
            i(!l);
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
        var m = l
            ? "collapse navbar-collapse"
            : "collapse navbar-collapse show",
          u = l
            ? "navbar-toggler navbar-toggler-right collapsed"
            : "navbar-toggler navbar-toggler-right";
        return r(
          t.a.Fragment,
          null,
          r(
            "header",
            { className: "header-area" },
            r(c.a, null),
            r(
              "div",
              { className: "nav-area nav-area-seven" },
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
                        n.a,
                        { href: "/" },
                        r(
                          "a",
                          { onClick: o, className: "navbar-brand" },
                          r("img", { src: "/img/logo.png", alt: "logo" })
                        )
                      ),
                      r(
                        "button",
                        {
                          onClick: o,
                          className: u,
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
                        { className: m, id: "navbarSupportedContent" },
                        r(
                          "ul",
                          { className: "navbar-nav m-auto" },
                          r(
                            "li",
                            { className: "nav-item" },
                            r(
                              n.a,
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
                                  n.a,
                                  { href: "/", activeClassName: "active" },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Home 1 (Emergency Medical Clinic)"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/index-2",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Home 2 (Covid-19 Treatment Clinic)"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/index-3",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Home 3 (Covid-19 Test Center)"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/index-4",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Home 4 (Vaccination Center/Clinic)"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/index-5",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Home 5 (Doctors Directory Listing)"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/index-6",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Home 6 (Health Charity Event)"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/index-7",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Home 7 (Medical Research)"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/index-8",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
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
                              n.a,
                              { href: "/about", activeClassName: "active" },
                              r(
                                "a",
                                { onClick: o, className: "nav-link" },
                                "About"
                              )
                            )
                          ),
                          r(
                            "li",
                            { className: "nav-item" },
                            r(
                              n.a,
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
                                  n.a,
                                  {
                                    href: "/pricing",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Pricing"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/testimonials",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Testimonials"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/doctors",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Doctors"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/appointment",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Appointment"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  { href: "/faq", activeClassName: "active" },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "FAQs"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
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
                                      n.a,
                                      {
                                        href: "/sign-in",
                                        activeClassName: "active",
                                      },
                                      r(
                                        "a",
                                        { onClick: o, className: "nav-link" },
                                        "Sign In"
                                      )
                                    )
                                  ),
                                  r(
                                    "li",
                                    { className: "nav-item" },
                                    r(
                                      n.a,
                                      {
                                        href: "/sign-up",
                                        activeClassName: "active",
                                      },
                                      r(
                                        "a",
                                        { onClick: o, className: "nav-link" },
                                        "Sign Up"
                                      )
                                    )
                                  ),
                                  r(
                                    "li",
                                    { className: "nav-item" },
                                    r(
                                      n.a,
                                      {
                                        href: "/recover-password",
                                        activeClassName: "active",
                                      },
                                      r(
                                        "a",
                                        { onClick: o, className: "nav-link" },
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
                                  n.a,
                                  {
                                    href: "/coming-soon",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Coming Soon"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/terms-conditions",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Terms & Conditions"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/privacy-policy",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Privacy Policy"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  { href: "/404", activeClassName: "active" },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
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
                              n.a,
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
                                  n.a,
                                  {
                                    href: "/services-1",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Services Style One"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/services-2",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Services Style Two"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/services-3",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Services Style Three"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/service-details",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
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
                              n.a,
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
                                  n.a,
                                  {
                                    href: "/doctors-1",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Doctors Style One"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/doctors-2",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Doctors Style Two"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/doctors-3",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Doctors Style Three"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/doctor-details",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
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
                              n.a,
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
                                  n.a,
                                  {
                                    href: "/blog-grid",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Blog Grid"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/blog-left-sidebar",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Blog Left Sidebar"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/blog-right-sidebar",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
                                    "Blog Right Sidebar"
                                  )
                                )
                              ),
                              r(
                                "li",
                                { className: "nav-item" },
                                r(
                                  n.a,
                                  {
                                    href: "/blog-details",
                                    activeClassName: "active",
                                  },
                                  r(
                                    "a",
                                    { onClick: o, className: "nav-link" },
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
                              n.a,
                              { href: "/contact", activeClassName: "active" },
                              r(
                                "a",
                                { onClick: o, className: "nav-link" },
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
                              n.a,
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
      };
    },
    ODXe: function (a, e, l) {
      "use strict";
      function s(a, e) {
        (null == e || e > a.length) && (e = a.length);
        for (var l = 0, s = new Array(e); l < e; l++) s[l] = a[l];
        return s;
      }
      function i(a, e) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a;
          })(a) ||
          (function (a, e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(a)) {
              var l = [],
                s = !0,
                i = !1,
                t = void 0;
              try {
                for (
                  var n, c = a[Symbol.iterator]();
                  !(s = (n = c.next()).done) &&
                  (l.push(n.value), !e || l.length !== e);
                  s = !0
                );
              } catch (r) {
                (i = !0), (t = r);
              } finally {
                try {
                  s || null == c.return || c.return();
                } finally {
                  if (i) throw t;
                }
              }
              return l;
            }
          })(a, e) ||
          (function (a, e) {
            if (a) {
              if ("string" === typeof a) return s(a, e);
              var l = Object.prototype.toString.call(a).slice(8, -1);
              return (
                "Object" === l && a.constructor && (l = a.constructor.name),
                "Map" === l || "Set" === l
                  ? Array.from(a)
                  : "Arguments" === l ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
                  ? s(a, e)
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
        return i;
      });
    },
    Wf2E: function (a, e, l) {
      "use strict";
      var s = l("q1tI"),
        i = l.n(s).a.createElement;
      e.a = function () {
        return i(
          "div",
          { className: "subscribe-area" },
          i(
            "div",
            { className: "container" },
            i(
              "div",
              { className: "row align-items-center" },
              i(
                "div",
                { className: "col-lg-6" },
                i("h2", null, "Subscribe Now"),
                i("p", null, "Get our latest of news & update regularly")
              ),
              i(
                "div",
                { className: "col-lg-6" },
                i(
                  "form",
                  { className: "newsletter-form" },
                  i("input", {
                    type: "email",
                    className: "form-control",
                    placeholder: "Enter Your Email",
                    name: "EMAIL",
                    required: !0,
                  }),
                  i(
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
    cTJO: function (a, e, l) {
      "use strict";
      var s = l("J4zp"),
        i = l("284h");
      (e.__esModule = !0), (e.default = void 0);
      var t,
        n = i(l("q1tI")),
        c = l("elyg"),
        r = l("nOHt"),
        o = new Map(),
        m = window.IntersectionObserver,
        u = {};
      var v = function (a, e) {
        var l =
          t ||
          (m
            ? (t = new m(
                function (a) {
                  a.forEach(function (a) {
                    if (o.has(a.target)) {
                      var e = o.get(a.target);
                      (a.isIntersecting || a.intersectionRatio > 0) &&
                        (t.unobserve(a.target), o.delete(a.target), e());
                    }
                  });
                },
                { rootMargin: "200px" }
              ))
            : void 0);
        return l
          ? (l.observe(a),
            o.set(a, e),
            function () {
              try {
                l.unobserve(a);
              } catch (e) {
                console.error(e);
              }
              o.delete(a);
            })
          : function () {};
      };
      function d(a, e, l, s) {
        (0, c.isLocalURL)(e) &&
          (a.prefetch(e, l, s).catch(function (a) {
            0;
          }),
          (u[e + "%" + l] = !0));
      }
      var N = function (a) {
        var e = !1 !== a.prefetch,
          l = n.default.useState(),
          i = s(l, 2),
          t = i[0],
          o = i[1],
          N = (0, r.useRouter)(),
          f = (N && N.pathname) || "/",
          p = n.default.useMemo(
            function () {
              var e = (0, c.resolveHref)(f, a.href, !0),
                l = s(e, 2),
                i = l[0],
                t = l[1];
              return {
                href: i,
                as: a.as ? (0, c.resolveHref)(f, a.as) : t || i,
              };
            },
            [f, a.href, a.as]
          ),
          g = p.href,
          b = p.as;
        n.default.useEffect(
          function () {
            if (
              e &&
              m &&
              t &&
              t.tagName &&
              (0, c.isLocalURL)(g) &&
              !u[g + "%" + b]
            )
              return v(t, function () {
                d(N, g, b);
              });
          },
          [e, t, g, b, N]
        );
        var h = a.children,
          k = a.replace,
          C = a.shallow,
          x = a.scroll;
        "string" === typeof h && (h = n.default.createElement("a", null, h));
        var y = n.Children.only(h),
          w = {
            ref: function (a) {
              a && o(a),
                y &&
                  "object" === typeof y &&
                  y.ref &&
                  ("function" === typeof y.ref
                    ? y.ref(a)
                    : "object" === typeof y.ref && (y.ref.current = a));
            },
            onClick: function (a) {
              y.props &&
                "function" === typeof y.props.onClick &&
                y.props.onClick(a),
                a.defaultPrevented ||
                  (function (a, e, l, s, i, t, n) {
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
                        (0, c.isLocalURL)(l))) &&
                      (a.preventDefault(),
                      null == n && (n = s.indexOf("#") < 0),
                      e[i ? "replace" : "push"](l, s, { shallow: t }).then(
                        function (a) {
                          a &&
                            n &&
                            (window.scrollTo(0, 0), document.body.focus());
                        }
                      ));
                  })(a, N, g, b, k, C, x);
            },
          };
        return (
          e &&
            (w.onMouseEnter = function (a) {
              (0, c.isLocalURL)(g) &&
                (y.props &&
                  "function" === typeof y.props.onMouseEnter &&
                  y.props.onMouseEnter(a),
                d(N, g, b, { priority: !0 }));
            }),
          (a.passHref || ("a" === y.type && !("href" in y.props))) &&
            (w.href = (0, c.addBasePath)(
              (0, c.addLocale)(b, N && N.locale, N && N.defaultLocale)
            )),
          n.default.cloneElement(y, w)
        );
      };
      e.default = N;
    },
    j1fb: function (a, e, l) {
      "use strict";
      var s = l("q1tI"),
        i = l.n(s).a.createElement;
      e.a = function () {
        return i(
          "div",
          { className: "top-header-area" },
          i(
            "div",
            { className: "container" },
            i(
              "div",
              { className: "row align-items-center" },
              i(
                "div",
                { className: "col-lg-8 col-md-9 col-sm-6" },
                i(
                  "ul",
                  { className: "header-content-left" },
                  i(
                    "li",
                    null,
                    i("i", { className: "bx bx-time" }),
                    "24 hours/7"
                  ),
                  i(
                    "li",
                    null,
                    i(
                      "a",
                      { href: "tel:+19194211323" },
                      i("i", { className: "bx bx-phone-call" }),
                      "Call Us: +19194211323"
                    )
                  ),
                  i(
                    "li",
                    null,
                    i(
                      "a",
                      { href: "mailto:hello@info.com" },
                      i("i", { className: "bx bxs-paper-plane" }),
                      "Email: support@coastalvest.com"
                    )
                  )
                )
              ),
              i(
                "div",
                { className: "col-lg-4 col-md-3 col-sm-6" },
                i(
                  "ul",
                  { className: "header-content-right" },
                  i(
                    "li",
                    null,
                    i(
                      "a",
                      { href: "#", target: "_blank" },
                      i("i", { className: "bx bxl-twitter" })
                    )
                  ),
                  i(
                    "li",
                    null,
                    i(
                      "a",
                      { href: "#", target: "_blank" },
                      i("i", { className: "bx bxl-linkedin" })
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    lslZ: function (a, e, l) {
      "use strict";
      var s = l("q1tI"),
        i = l.n(s).a.createElement;
      e.a = function () {
        return i(
          "div",
          { className: "doctors-area-two seven pt-100 pb-70" },
          i(
            "div",
            { className: "container" },
            i(
              "div",
              { className: "section-title" },
              i("span", { className: "top-title" }, "Our Doctors"),
              i("h2", null, "Meet Our Doctors"),
              i(
                "p",
                null,
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus."
              )
            ),
            i(
              "div",
              { className: "row" },
              i(
                "div",
                { className: "col-lg-4 col-sm-6" },
                i(
                  "div",
                  { className: "single-doctors-two" },
                  i(
                    "div",
                    { className: "doctor-img" },
                    i("img", {
                      src: "/img/doctors/doctor13.jpg",
                      alt: "Image",
                    }),
                    i(
                      "div",
                      { className: "doctors-content" },
                      i("h3", null, "Dr. Merris Jelly"),
                      i("span", null, "Cardiologist"),
                      i(
                        "ul",
                        { className: "doctors-link" },
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-pinterest-alt" })
                          )
                        ),
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-instagram" })
                          )
                        )
                      )
                    )
                  )
                )
              ),
              i(
                "div",
                { className: "col-lg-4 col-sm-6" },
                i(
                  "div",
                  { className: "single-doctors-two" },
                  i(
                    "div",
                    { className: "doctor-img" },
                    i("img", {
                      src: "/img/doctors/doctor14.jpg",
                      alt: "Image",
                    }),
                    i(
                      "div",
                      { className: "doctors-content" },
                      i("h3", null, "Dr. Jelin Alis"),
                      i("span", null, "Cardiologist"),
                      i(
                        "ul",
                        { className: "doctors-link" },
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-pinterest-alt" })
                          )
                        ),
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-instagram" })
                          )
                        )
                      )
                    )
                  )
                )
              ),
              i(
                "div",
                { className: "col-lg-4 col-sm-6 offset-sm-3 offset-lg-0" },
                i(
                  "div",
                  { className: "single-doctors-two" },
                  i(
                    "div",
                    { className: "doctor-img" },
                    i("img", {
                      src: "/img/doctors/doctor15.jpg",
                      alt: "Image",
                    }),
                    i(
                      "div",
                      { className: "doctors-content" },
                      i("h3", null, "Dr. James Bond"),
                      i("span", null, "Cardiologist"),
                      i(
                        "ul",
                        { className: "doctors-link" },
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-facebook" })
                          )
                        ),
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-twitter" })
                          )
                        ),
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-pinterest-alt" })
                          )
                        ),
                        i(
                          "li",
                          null,
                          i(
                            "a",
                            { href: "#", target: "_blank" },
                            i("i", { className: "bx bxl-instagram" })
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
      };
    },
    mdYk: function (a, e, l) {
      "use strict";
      var s = l("q1tI"),
        i = l.n(s),
        t = l("YFqc"),
        n = l.n(t),
        c = i.a.createElement;
      e.a = function () {
        var a = new Date().getFullYear();
        return c(
          i.a.Fragment,
          null,
          c(
            "footer",
            { className: "footer-top-area f-bg pt-100 pb-70" },
            c(
              "div",
              { className: "container" },
              c(
                "div",
                { className: "row" },
                c(
                  "div",
                  { className: "col-lg-3 col-md-6" },
                  c(
                    "div",
                    { className: "single-widget" },
                    c(
                      n.a,
                      { href: "/" },
                      c(
                        "a",
                        null,
                        c("img", { src: "/img/logo.png", alt: "Image" })
                      )
                    ),
                    c(
                      "p",
                      null,
                      "Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis, repudiandae ipsam minus et ex, aliquid dolor molestias, earum enim officiis porro obcaecati."
                    ),
                    c(
                      "div",
                      { className: "social-area" },
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
                            c("i", { className: "bx bxl-linkedin" })
                          )
                        ),
                        c(
                          "li",
                          null,
                          c(
                            "a",
                            { href: "#", target: "_blank" },
                            c("i", { className: "bx bxl-youtube" })
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
                ),
                c(
                  "div",
                  { className: "col-lg-3 col-md-6" },
                  c(
                    "div",
                    { className: "single-widget" },
                    c("h3", null, "Departments"),
                    c(
                      "ul",
                      null,
                      c(
                        "li",
                        null,
                        c("a", { href: "#" }, "Surgery & Radiology")
                      ),
                      c("li", null, c("a", { href: "#" }, "Children Care")),
                      c("li", null, c("a", { href: "#" }, "Orthopedics")),
                      c("li", null, c("a", { href: "#" }, "Nuclear Magnetic")),
                      c("li", null, c("a", { href: "#" }, "Eye Treatment")),
                      c("li", null, c("a", { href: "#" }, "X-Ray"))
                    )
                  )
                ),
                c(
                  "div",
                  { className: "col-lg-3 col-md-6" },
                  c(
                    "div",
                    { className: "single-widget open-time" },
                    c("h3", null, "Opening Hours"),
                    c(
                      "ul",
                      null,
                      c(
                        "li",
                        null,
                        c("span", null, "Mon-Tue:"),
                        c("span", { className: "right" }, "6:00AM-10:00PM")
                      ),
                      c(
                        "li",
                        null,
                        c("span", null, "Wed-Thu:"),
                        c("span", { className: "right" }, "6:00AM-10:00PM")
                      ),
                      c(
                        "li",
                        null,
                        c("span", null, "Fry:"),
                        c("span", { className: "right" }, "6:00AM-04:00PM")
                      ),
                      c(
                        "li",
                        null,
                        c("span", null, "Sun:"),
                        c("span", { className: "right" }, "Closed")
                      )
                    )
                  )
                ),
                c(
                  "div",
                  { className: "col-lg-3 col-md-6" },
                  c(
                    "div",
                    { className: "single-widget contact" },
                    c("h3", null, "Get In Touch"),
                    c(
                      "ul",
                      null,
                      c(
                        "li",
                        { className: "pl-0" },
                        c(
                          "a",
                          { href: "tel:+19194211323" },
                          c("i", { className: "bx bx-phone-call" }),
                          c("span", null, "Hotline:"),
                          "Phone: +19194211323"
                        )
                      ),
                      c(
                        "li",
                        { className: "pl-0" },
                        c(
                          "a",
                          { href: "mailto:support@coastalvest.com" },
                          c("i", { className: "bx bx-envelope" }),
                          c("span", null, "Email:"),
                          "support@coastalvest.com"
                        )
                      ),
                      c(
                        "li",
                        null,
                        c("i", { className: "bx bx-location-plus" }),
                        c("span", null, "Address:"),
                        "Youngsville, NC 27596 United States"
                      )
                    )
                  )
                )
              )
            )
          ),
          c(
            "div",
            { className: "footer-bottom-area" },
            c(
              "div",
              { className: "container" },
              c(
                "div",
                { className: "copy-right" },
                c(
                  "p",
                  null,
                  "Copyright @",
                  a,
                  "  Corf. Designed by ",
                  c(
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
    re9q: function (a, e, l) {
      "use strict";
      var s = l("q1tI"),
        i = l.n(s),
        t = l("YFqc"),
        n = l.n(t),
        c = i.a.createElement;
      e.a = function () {
        return c(
          "div",
          { className: "blog-area pt-100 pb-70" },
          c(
            "div",
            { className: "container" },
       
            c(
              "div",
              { className: "row" },
              c(
                "div",
                { className: "col-lg-4 col-md-6" },
                c(
                  "div",
                  { className: "single-blog" },
                  c(
                    n.a,
                    { href: "/blog-details" },
                    c(
                      "a",
                      null,
                      c("img", { src: "/img/blog/blog10.jpg", alt: "Image" })
                    )
                  ),
                  c(
                    "div",
                    { className: "blog-content" },
                    c("ul", null, c("li", null, "15 / 05 / 2020")),
                    c(
                      n.a,
                      { href: "/blog-details" },
                      c(
                        "a",
                        null,
                        c(
                          "h3",
                          null,
                          "Equipping Researchers In The Developing World"
                        )
                      )
                    ),
                    c(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet sit consectetur, adipisicing elit. Eum mollitia tempore animi dolor voluptates, architecto, praesentium asperiores minima deleniti voluptates"
                    ),
                    c(
                      n.a,
                      { href: "/blog-details" },
                      c(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        c("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                )
              ),
              c(
                "div",
                { className: "col-lg-4 col-md-6" },
                c(
                  "div",
                  { className: "single-blog" },
                  c(
                    n.a,
                    { href: "/blog-details" },
                    c(
                      "a",
                      null,
                      c("img", { src: "/img/blog/blog11.jpg", alt: "Image" })
                    )
                  ),
                  c(
                    "div",
                    { className: "blog-content" },
                    c("ul", null, c("li", null, "16 / 05 / 2020")),
                    c(
                      n.a,
                      { href: "/blog-details" },
                      c(
                        "a",
                        null,
                        c(
                          "h3",
                          null,
                          "Should We Trust Computer-Aided Weapons Modeling?"
                        )
                      )
                    ),
                    c(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet sit consectetur, adipisicing elit. Eum mollitia tempore animi dolor voluptates, architecto, praesentium asperiores minima deleniti voluptates"
                    ),
                    c(
                      n.a,
                      { href: "/blog-details" },
                      c(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        c("i", { className: "bx bx-plus" })
                      )
                    )
                  )
                )
              ),
              c(
                "div",
                { className: "col-lg-4 col-md-6 offset-md-3 offset-lg-0" },
                c(
                  "div",
                  { className: "single-blog" },
                  c(
                    n.a,
                    { href: "/blog-details" },
                    c(
                      "a",
                      null,
                      c("img", { src: "/img/blog/blog12.jpg", alt: "Image" })
                    )
                  ),
                  c(
                    "div",
                    { className: "blog-content" },
                    c("ul", null, c("li", null, "17 / 05 / 2020")),
                    c(
                      n.a,
                      { href: "/blog-details" },
                      c(
                        "a",
                        null,
                        c(
                          "h3",
                          null,
                          "Book Review: Clinical Research Compliance Manual"
                        )
                      )
                    ),
                    c(
                      "p",
                      null,
                      "Lorem ipsum dolor sit amet sit consectetur, adipisicing elit. Eum mollitia tempore animi dolor voluptates, architecto, praesentium asperiores minima deleniti voluptates"
                    ),
                    c(
                      n.a,
                      { href: "/blog-details" },
                      c(
                        "a",
                        { className: "read-more" },
                        "Read More ",
                        c("i", { className: "bx bx-plus" })
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
  },
]);
