(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [3], {
        "0Yqi": function (a, e, l) {
            "use strict";
            function n(a, e) {
                if (null == a) 
                    return {};
                


                var l,
                    n,
                    s = function (a, e) {
                        if (null == a) 
                            return {};
                        


                        var l,
                            n,
                            s = {},
                            i = Object.keys(a);
                        for (n = 0; n < i.length; n++) 
                            l = i[n],
                            e.indexOf(l) >= 0 || (s[l] = a[l]);
                        


                        return s
                    }(a, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(a);
                    for (n = 0; n < i.length; n++) 
                        l = i[n],
                        e.indexOf(l) >= 0 || Object.prototype.propertyIsEnumerable.call(a, l) && (s[l] = a[l])


                    


                }
                return s
            }
            var s = l("nOHt"),
                i = l("YFqc"),
                t = l.n(i),
                c = l("q1tI"),
                r = l.n(c),
                o = r.a.createElement;
            e.a = Object(s.withRouter)((function (a) {
                var e = a.router,
                    l = a.children,
                    s = n(a, ["router", "children"]),
                    i = c.Children.only(l),
                    m = i.props.className || "";
                return e.pathname === s.href && s.activeClassName && (m = "".concat(m, " ").concat(s.activeClassName).trim()),
                delete s.activeClassName,
                o(t.a, s, r.a.cloneElement(i, {className: m}))
            }))
        },
        ODXe: function (a, e, l) {
            "use strict";
            function n(a, e) {
                (null == e || e > a.length) && (e = a.length);
                for (var l = 0, n = new Array(e); l < e; l++) 
                    n[l] = a[l];
                


                return n
            }
            function s(a, e) {
                return function (a) {
                    if (Array.isArray(a)) 
                        return a


                    


                }(a) || function (a, e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(a)) {
                        var l = [],
                            n = !0,
                            s = !1,
                            i = void 0;
                        try {
                            for (var t, c = a[Symbol.iterator](); !(n =( t = c.next()).done) && (l.push(t.value), ! e || l.length !== e); n =! 0) 


                            


                        } catch (r) {
                            s = !0,
                            i = r
                        } finally {
                            try {
                                n || null == c.return || c.return()
                            } finally {
                                if (s) 
                                    throw i


                                


                            }
                        }
                        return l
                    }
                }(a, e) || function (a, e) {
                    if (a) {
                        if ("string" === typeof a) 
                            return n(a, e);
                        


                        var l = Object.prototype.toString.call(a).slice(8, -1);
                        return "Object" === l && a.constructor && (l = a.constructor.name),
                        "Map" === l || "Set" === l ? Array.from(a) : "Arguments" === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l) ? n(a, e) : void 0
                    }
                }(a, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            l.d(e, "a", (function () {
                return s
            }))
        },
        SxW8: function (a, e, l) {
            "use strict";
            var n = l("ODXe"),
                s = l("q1tI"),
                i = l.n(s),
                t = l("0Yqi"),
                c = l("j1fb"),
                r = i.a.createElement;
            e.a = function () {
                var a = i.a.useState(!0),
                    e = Object(n.a)(a, 2),
                    l = e[0],
                    s = e[1],
                    o = function () {
                        s(! l)
                    };
                i.a.useEffect((function () {
                    var a = document.getElementById("navbar");
                    document.addEventListener("scroll", (function () {
                        window.scrollY > 170 ? a.classList.add("is-sticky") : a.classList.remove("is-sticky")
                    })),
                    window.scrollTo(0, 0)
                }));
                var m = l ? "collapse navbar-collapse" : "collapse navbar-collapse show",
                    v = l ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
                return r(i.a.Fragment, null, r("header", {
                    className: "header-area fixed-top"
                }, r(c.a, null), r("div", {
                    className: "nav-area"
                }, r("div", {
                    id: "navbar",
                    className: "navbar-area"
                }, r("div", {
                    className: "main-nav"
                }, r("nav", {
                    className: "navbar navbar-expand-lg navbar-light"
                }, r("div", {
                    className: "container"
                }, r(t.a, {
                    href: "/"
                }, r("a", {
                    onClick: o,
                    className: "navbar-brand"
                }, r("img", {
                    src: "/img/logo.png",
                    alt: "logo"
                }))), r("button", {
                    onClick: o,
                    className: v,
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation"
                }, r("span", {className: "icon-bar top-bar"}), r("span", {className: "icon-bar middle-bar"}), r("span", {className: "icon-bar bottom-bar"})), r("div", {
                    className: m,
                    id: "navbarSupportedContent"
                }, r("ul", {
                    className: "navbar-nav m-auto"
                }, r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "#",
                    activeClassName: "active"
                }, r("a", {
                    onClick: function (a) {
                        return a.preventDefault()
                    },
                    className: "nav-link"
                }, "Home ", r("i", {className: "bx bx-plus"}))), r("ul", {
                    className: "dropdown-menu"
                }, r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Home 1 (Emergency Medical Clinic)"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/index-2",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Home 2 (Covid-19 Treatment Clinic)"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/index-3",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Home 3 (Covid-19 Test Center)"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/index-4",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Home 4 (Vaccination Center/Clinic)"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/index-5",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Home 5 (Doctors Directory Listing)"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/index-6",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Home 6 (Health Charity Event)"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/index-7",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Home 7 (Medical Research)"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/index-8",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Home 8 (Dental Clinic)"))))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/about",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "About"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "#"
                }, r("a", {
                    onClick: function (a) {
                        return a.preventDefault()
                    },
                    className: "nav-link"
                }, "Pages ", r("i", {className: "bx bx-plus"}))), r("ul", {
                    className: "dropdown-menu"
                }, r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/pricing",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Pricing"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/testimonials",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Testimonials"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/doctors",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Doctors"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/appointment",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Appointment"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/faq",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "FAQs"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "#"
                }, r("a", {
                    onClick: function (a) {
                        return a.preventDefault()
                    },
                    className: "nav-link"
                }, "User ", r("i", {className: "bx bx-plus"}))), r("ul", {
                    className: "dropdown-menu"
                }, r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/sign-in",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Sign In"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/sign-up",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Sign Up"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/recover-password",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Recover Password"))))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/coming-soon",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Coming Soon"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/terms-conditions",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Terms & Conditions"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/privacy-policy",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Privacy Policy"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/404",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "404 Error Page"))))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "#"
                }, r("a", {
                    onClick: function (a) {
                        return a.preventDefault()
                    },
                    className: "nav-link"
                }, "Services ", r("i", {className: "bx bx-plus"}))), r("ul", {
                    className: "dropdown-menu"
                }, r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/services-1",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Services Style One"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/services-2",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Services Style Two"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/services-3",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Services Style Three"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/service-details",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Service Details"))))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "#"
                }, r("a", {
                    onClick: function (a) {
                        return a.preventDefault()
                    },
                    className: "nav-link"
                }, "Doctors ", r("i", {className: "bx bx-plus"}))), r("ul", {
                    className: "dropdown-menu"
                }, r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/doctors-1",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Doctors Style One"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/doctors-2",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Doctors Style Two"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/doctors-3",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Doctors Style Three"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/doctor-details",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Doctors Details"))))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "#"
                }, r("a", {
                    onClick: function (a) {
                        return a.preventDefault()
                    },
                    className: "nav-link"
                }, "Blog ", r("i", {className: "bx bx-plus"}))), r("ul", {
                    className: "dropdown-menu"
                }, r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/blog-grid",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Blog Grid"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/blog-left-sidebar",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Blog Left Sidebar"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/blog-right-sidebar",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Blog Right Sidebar"))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/blog-details",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Blog Details"))))), r("li", {
                    className: "nav-item"
                }, r(t.a, {
                    href: "/contact",
                    activeClassName: "active"
                }, r("a", {
                    onClick: o,
                    className: "nav-link"
                }, "Contact")))), r("div", {
                    className: "others-option"
                }, r("div", {
                    className: "subscribe"
                }, r(t.a, {
                    href: "#"
                }, r("a", {
                    className: "default-btn"
                }, "Get A Quote"))))))))))))
            }
        },
        Wf2E: function (a, e, l) {
            "use strict";
            var n = l("q1tI"),
                s = l.n(n).a.createElement;
            e.a = function () {
                return s("div", {
                    className: "subscribe-area"
                }, s("div", {
                    className: "container"
                }, s("div", {
                    className: "row align-items-center"
                }, s("div", {
                    className: "col-lg-6"
                }, s("h2", null, "Subscribe Now"), s("p", null, "Get our latest news & update regularly")), s("div", {
                    className: "col-lg-6"
                }, s("form", {
                    className: "newsletter-form"
                }, s("input", {
                    type: "email",
                    className: "form-control",
                    placeholder: "Enter Your Email",
                    name: "EMAIL",
                    required: !0
                }), s("button", {
                    className: "default-btn",
                    type: "submit"
                }, "Subscribe"))))))
            }
        },
        YFqc: function (a, e, l) {
            a.exports = l("cTJO")
        },
        cTJO: function (a, e, l) {
            "use strict";
            var n = l("J4zp"),
                s = l("284h");
            e.__esModule = !0,
            e.default = void 0;
            var i,
                t = s(l("q1tI")),
                c = l("elyg"),
                r = l("nOHt"),
                o = new Map,
                m = window.IntersectionObserver,
                v = {};
            var u = function (a, e) {
                var l = i || (m ? i = new m((function (a) {
                    a.forEach((function (a) {
                        if (o.has(a.target)) {
                            var e = o.get(a.target);
                            (a.isIntersecting || a.intersectionRatio > 0) && (i.unobserve(a.target), o.delete(a.target), e())
                        }
                    }))
                }), {rootMargin: "200px"}) : void 0);
                return l ? (l.observe(a), o.set(a, e), function () {
                    try {
                        l.unobserve(a)
                    } catch (e) {
                        console.error(e)
                    }
                    o.delete(a)
                }) : function () {}
            };
            function f(a, e, l, n) {
                (0, c.isLocalURL)(e) && (a.prefetch(e, l, n).catch((function (a) {
                    0
                })), v[e + "%" + l] =! 0)
            }
            var N = function (a) {
                var e = !1 !== a.prefetch,
                    l = t.default.useState(),
                    s = n(l, 2),
                    i = s[0],
                    o = s[1],
                    N = (0, r.useRouter)(),
                    d = N && N.pathname || "/",
                    p = t.default.useMemo((function () {
                        var e = (0, c.resolveHref)(d, a.href, !0),
                            l = n(e, 2),
                            s = l[0],
                            i = l[1];
                        return {
                            href: s,
                            as: a.as ? (0, c.resolveHref)(d, a.as) : i || s
                        }
                    }), [d, a.href, a.as]),
                    h = p.href,
                    b = p.as;
                t.default.useEffect((function () {
                    if (e && m && i && i.tagName && (0, c.isLocalURL)(h) && ! v[h + "%" + b]) 
                        return u(i, (function () {
                            f(N, h, b)
                        }))


                    


                }), [
                    e,
                    i,
                    h,
                    b,
                    N
                ]);
                var g = a.children,
                    C = a.replace,
                    k = a.shallow,
                    y = a.scroll;
                "string" === typeof g && (g = t.default.createElement("a", null, g));
                var x = t.Children.only(g),
                    w = {
                        ref: function (a) {
                            a && o(a),
                            x && "object" === typeof x && x.ref && ("function" === typeof x.ref ? x.ref(a) : "object" === typeof x.ref && (x.ref.current = a))
                        },
                        onClick: function (a) {
                            x.props && "function" === typeof x.props.onClick && x.props.onClick(a),
                            a.defaultPrevented || function (a, e, l, n, s, i, t) {
                                ("A" !== a.currentTarget.nodeName || !function (a) {
                                    var e = a.currentTarget.target;
                                    return e && "_self" !== e || a.metaKey || a.ctrlKey || a.shiftKey || a.altKey || a.nativeEvent && 2 === a.nativeEvent.which
                                }(a) && (0, c.isLocalURL)(l)) && (a.preventDefault(), null == t && (t = n.indexOf("#") < 0), e[s ? "replace" : "push"](l, n, {shallow: i}).then((function (a) {
                                    a && t && (window.scrollTo(0, 0), document.body.focus())
                                })))
                            }(a, N, h, b, C, k, y)
                        }
                    };
                return e && (w.onMouseEnter = function (a) {
                    (0, c.isLocalURL)(h) && (x.props && "function" === typeof x.props.onMouseEnter && x.props.onMouseEnter(a), f(N, h, b, {
                        priority: !0
                    }))
                }),
                (a.passHref || "a" === x.type && !("href" in x.props)) && (w.href =( 0, c.addBasePath)((0, c.addLocale)(b, N && N.locale, N && N.defaultLocale))),
                t.default.cloneElement(x, w)
            };
            e.default = N
        },
        j1fb: function (a, e, l) {
            "use strict";
            var n = l("q1tI"),
                s = l.n(n).a.createElement;
            e.a = function () {
                return s("div", {
                    className: "top-header-area"
                }, s("div", {
                    className: "container"
                }, s("div", {
                    className: "row align-items-center"
                }, s("div", {
                    className: "col-lg-8 col-md-9 col-sm-6"
                }, s("ul", {
                    className: "header-content-left"
                }, s("li", null, s("i", {className: "bx bx-time"}), "Mon-Fri 9am-5pm"), s("li", null, s("a", {
                    href: "tel:+822456974"
                }, s("i", {className: "bx bx-phone-call"}), "Call Us: +821-456-241")), s("li", null, s("a", {
                    href: "mailto:hello@info.com"
                }, s("i", {className: "bx bxs-paper-plane"}), "Email: hello@info.com")))), s("div", {
                    className: "col-lg-4 col-md-3 col-sm-6"
                }, s("ul", {
                    className: "header-content-right"
                }, s("li", null, s("a", {
                    href: "#",
                    target: "_blank"
                }, s("i", {className: "bx bxl-facebook"}))), s("li", null, s("a", {
                    href: "#",
                    target: "_blank"
                }, s("i", {className: "bx bxl-twitter"}))), s("li", null, s("a", {
                    href: "#",
                    target: "_blank"
                }, s("i", {className: "bx bxl-pinterest-alt"}))), s("li", null, s("a", {
                    href: "#",
                    target: "_blank"
                }, s("i", {className: "bx bxl-instagram"}))))))))
            }
        },
        mdYk: function (a, e, l) {
            "use strict";
            var n = l("q1tI"),
                s = l.n(n),
                i = l("YFqc"),
                t = l.n(i),
                c = s.a.createElement;
            e.a = function () {
                var a = (new Date).getFullYear();
                return c(s.a.Fragment, null, c("footer", {
                    className: "footer-top-area f-bg pt-100 pb-70"
                }, c("div", {
                    className: "container"
                }, c("div", {
                    className: "row"
                }, c("div", {
                    className: "col-lg-3 col-md-6"
                }, c("div", {
                    className: "single-widget"
                }, c(t.a, {
                    href: "/"
                }, c("a", null, c("img", {
                    src: "/img/logo.png",
                    alt: "Image"
                }))), c("p", null, "Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis, repudiandae ipsam minus et ex, aliquid dolor molestias, earum enim officiis porro obcaecati."), c("div", {
                    className: "social-area"
                }, c("ul", null, c("li", null, c("a", {
                    href: "#",
                    target: "_blank"
                }, c("i", {className: "bx bxl-facebook"}))), c("li", null, c("a", {
                    href: "#",
                    target: "_blank"
                }, c("i", {className: "bx bxl-twitter"}))), c("li", null, c("a", {
                    href: "#",
                    target: "_blank"
                }, c("i", {className: "bx bxl-linkedin"}))), c("li", null, c("a", {
                    href: "#",
                    target: "_blank"
                }, c("i", {className: "bx bxl-youtube"}))), c("li", null, c("a", {
                    href: "#",
                    target: "_blank"
                }, c("i", {className: "bx bxl-instagram"}))))))), c("div", {
                    className: "col-lg-3 col-md-6"
                }, c("div", {
                    className: "single-widget"
                }, c("h3", null, "Departments"), c("ul", null, c("li", null, c("a", {
                    href: "#"
                }, "Surgery & Radiology")), c("li", null, c("a", {
                    href: "#"
                }, "Children Care")), c("li", null, c("a", {
                    href: "#"
                }, "Orthopedics")), c("li", null, c("a", {
                    href: "#"
                }, "Nuclear Magnetic")), c("li", null, c("a", {
                    href: "#"
                }, "Eye Treatment")), c("li", null, c("a", {
                    href: "#"
                }, "X-Ray"))))), c("div", {
                    className: "col-lg-3 col-md-6"
                }, c("div", {
                    className: "single-widget open-time"
                }, c("h3", null, "Opening Hours"), c("ul", null, c("li", null, c("span", null, "Mon-Tue:"), c("span", {
                    className: "right"
                }, "6:00AM-10:00PM")), c("li", null, c("span", null, "Wed-Thu:"), c("span", {
                    className: "right"
                }, "6:00AM-10:00PM")), c("li", null, c("span", null, "Fry:"), c("span", {
                    className: "right"
                }, "6:00AM-04:00PM")), c("li", null, c("span", null, "Sun:"), c("span", {
                    className: "right"
                }, "Closed"))))), c("div", {
                    className: "col-lg-3 col-md-6"
                }, c("div", {
                    className: "single-widget contact"
                }, c("h3", null, "Get In Touch"), c("ul", null, c("li", {
                    className: "pl-0"
                }, c("a", {
                    href: "tel:+822456974"
                }, c("i", {className: "bx bx-phone-call"}), c("span", null, "Hotline:"), "Phone: +822456974")), c("li", {
                    className: "pl-0"
                }, c("a", {
                    href: "mailto:hello@corf.com"
                }, c("i", {className: "bx bx-envelope"}), c("span", null, "Email:"), "hello@corf.com")), c("li", null, c("i", {className: "bx bx-location-plus"}), c("span", null, "Address:"), "123, Western Road, Melbourne Australia"))))))), c("div", {
                    className: "footer-bottom-area"
                }, c("div", {
                    className: "container"
                }, c("div", {
                    className: "copy-right"
                }, c("p", null, "Copyright @", a, "  Corf. Designed by ", c("a", {
                    href: "https://envyTheme.com/",
                    target: "blank"
                }, "EnvyTheme"))))))
            }
        }
    }
]);
