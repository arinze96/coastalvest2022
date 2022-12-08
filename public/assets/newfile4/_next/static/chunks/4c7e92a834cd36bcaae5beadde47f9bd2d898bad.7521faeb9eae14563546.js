(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    iFQd: function (e, t, n) {
      "use strict";
      var r = n("q1tI"),
        a = n.n(r);
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && f(e, t);
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function m(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function v(e, t) {
        return !t || ("object" !== typeof t && "function" !== typeof t)
          ? b(e)
          : t;
      }
      function g(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = p(e);
          if (t) {
            var a = p(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return v(this, n);
        };
      }
      function h(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return y(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return y(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return y(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var x = function e(t) {
          var n = this,
            r = t.expanded,
            a = void 0 === r ? [] : r,
            o = t.allowMultipleExpanded,
            l = void 0 !== o && o,
            c = t.allowZeroExpanded,
            s = void 0 !== c && c;
          i(this, e),
            u(this, "expanded", void 0),
            u(this, "allowMultipleExpanded", void 0),
            u(this, "allowZeroExpanded", void 0),
            u(this, "toggleExpanded", function (e) {
              return n.isItemDisabled(e)
                ? n
                : n.isItemExpanded(e)
                ? n.augment({
                    expanded: n.expanded.filter(function (t) {
                      return t !== e;
                    }),
                  })
                : n.augment({
                    expanded: n.allowMultipleExpanded
                      ? [].concat(h(n.expanded), [e])
                      : [e],
                  });
            }),
            u(this, "isItemDisabled", function (e) {
              var t = n.isItemExpanded(e),
                r = 1 === n.expanded.length;
              return Boolean(t && !n.allowZeroExpanded && r);
            }),
            u(this, "isItemExpanded", function (e) {
              return -1 !== n.expanded.indexOf(e);
            }),
            u(this, "getPanelAttributes", function (e, t) {
              var r = null !== t && void 0 !== t ? t : n.isItemExpanded(e);
              return {
                role: n.allowMultipleExpanded ? void 0 : "region",
                "aria-hidden": n.allowMultipleExpanded ? !r : void 0,
                "aria-labelledby": n.getButtonId(e),
                id: n.getPanelId(e),
                hidden: !r || void 0,
              };
            }),
            u(this, "getHeadingAttributes", function () {
              return { role: "heading" };
            }),
            u(this, "getButtonAttributes", function (e, t) {
              var r = null !== t && void 0 !== t ? t : n.isItemExpanded(e),
                a = n.isItemDisabled(e);
              return {
                id: n.getButtonId(e),
                "aria-disabled": a,
                "aria-expanded": r,
                "aria-controls": n.getPanelId(e),
                role: "button",
                tabIndex: 0,
              };
            }),
            u(this, "getPanelId", function (e) {
              return "accordion__panel-".concat(e);
            }),
            u(this, "getButtonId", function (e) {
              return "accordion__heading-".concat(e);
            }),
            u(this, "augment", function (t) {
              return new e(
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? d(Object(n), !0).forEach(function (t) {
                          u(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : d(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })(
                  {
                    expanded: n.expanded,
                    allowMultipleExpanded: n.allowMultipleExpanded,
                    allowZeroExpanded: n.allowZeroExpanded,
                  },
                  t
                )
              );
            }),
            (this.expanded = a),
            (this.allowMultipleExpanded = l),
            (this.allowZeroExpanded = s);
        },
        E = Object(r.createContext)(null),
        w = (function (e) {
          s(n, e);
          var t = g(n);
          function n() {
            var e;
            i(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              u(
                b((e = t.call.apply(t, [this].concat(a)))),
                "state",
                new x({
                  expanded: e.props.preExpanded,
                  allowMultipleExpanded: e.props.allowMultipleExpanded,
                  allowZeroExpanded: e.props.allowZeroExpanded,
                })
              ),
              u(b(e), "toggleExpanded", function (t) {
                e.setState(
                  function (e) {
                    return e.toggleExpanded(t);
                  },
                  function () {
                    e.props.onChange && e.props.onChange(e.state.expanded);
                  }
                );
              }),
              u(b(e), "isItemDisabled", function (t) {
                return e.state.isItemDisabled(t);
              }),
              u(b(e), "isItemExpanded", function (t) {
                return e.state.isItemExpanded(t);
              }),
              u(b(e), "getPanelAttributes", function (t, n) {
                return e.state.getPanelAttributes(t, n);
              }),
              u(b(e), "getHeadingAttributes", function () {
                return e.state.getHeadingAttributes();
              }),
              u(b(e), "getButtonAttributes", function (t, n) {
                return e.state.getButtonAttributes(t, n);
              }),
              e
            );
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.allowZeroExpanded,
                    n = e.allowMultipleExpanded;
                  return Object(r.createElement)(
                    E.Provider,
                    {
                      value: {
                        allowMultipleExpanded: n,
                        allowZeroExpanded: t,
                        toggleExpanded: this.toggleExpanded,
                        isItemDisabled: this.isItemDisabled,
                        isItemExpanded: this.isItemExpanded,
                        getPanelAttributes: this.getPanelAttributes,
                        getHeadingAttributes: this.getHeadingAttributes,
                        getButtonAttributes: this.getButtonAttributes,
                      },
                    },
                    this.props.children || null
                  );
                },
              },
            ]),
            n
          );
        })(r.PureComponent);
      u(w, "defaultProps", {
        allowMultipleExpanded: !1,
        allowZeroExpanded: !1,
      });
      var A,
        O = (function (e) {
          s(n, e);
          var t = g(n);
          function n() {
            var e;
            i(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              u(
                b((e = t.call.apply(t, [this].concat(a)))),
                "renderChildren",
                function (t) {
                  return t ? e.props.children(t) : null;
                }
              ),
              e
            );
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.createElement)(
                    E.Consumer,
                    null,
                    this.renderChildren
                  );
                },
              },
            ]),
            n
          );
        })(r.PureComponent),
        I = function (e) {
          var t = e.className,
            n = void 0 === t ? "accordion" : t,
            a = e.allowMultipleExpanded,
            i = e.allowZeroExpanded,
            o = e.onChange,
            l = e.preExpanded,
            u = m(e, [
              "className",
              "allowMultipleExpanded",
              "allowZeroExpanded",
              "onChange",
              "preExpanded",
            ]);
          return Object(r.createElement)(
            w,
            {
              preExpanded: l,
              allowMultipleExpanded: a,
              allowZeroExpanded: i,
              onChange: o,
            },
            Object(r.createElement)(
              "div",
              c({ "data-accordion-component": "Accordion", className: n }, u)
            )
          );
        };
      !(function (e) {
        (e.Accordion = "Accordion"),
          (e.AccordionItem = "AccordionItem"),
          (e.AccordionItemButton = "AccordionItemButton"),
          (e.AccordionItemHeading = "AccordionItemHeading"),
          (e.AccordionItemPanel = "AccordionItemPanel");
      })(A || (A = {}));
      var j = A,
        P = 0;
      function C() {
        var e = P;
        return (P += 1), "raa-".concat(e);
      }
      var S = /[\u0009\u000a\u000c\u000d\u0020]/g;
      function N(e) {
        return (
          ("" !== e && !S.test(e)) ||
          (console.error(
            'uuid must be a valid HTML5 id but was given "'.concat(
              e,
              '", ASCII whitespaces are forbidden'
            )
          ),
          !1)
        );
      }
      var D = Object(r.createContext)(null),
        _ = (function (e) {
          s(n, e);
          var t = g(n);
          function n() {
            var e;
            i(this, n);
            for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
              o[l] = arguments[l];
            return (
              u(
                b((e = t.call.apply(t, [this].concat(o)))),
                "toggleExpanded",
                function () {
                  e.props.accordionContext.toggleExpanded(e.props.uuid);
                }
              ),
              u(b(e), "renderChildren", function (t) {
                var n = e.props,
                  a = n.uuid,
                  i = n.dangerouslySetExpanded,
                  o = null !== i && void 0 !== i ? i : t.isItemExpanded(a),
                  l = t.isItemDisabled(a),
                  u = t.getPanelAttributes(a, i),
                  c = t.getHeadingAttributes(a),
                  d = t.getButtonAttributes(a, i);
                return Object(r.createElement)(
                  D.Provider,
                  {
                    value: {
                      uuid: a,
                      expanded: o,
                      disabled: l,
                      toggleExpanded: e.toggleExpanded,
                      panelAttributes: u,
                      headingAttributes: c,
                      buttonAttributes: d,
                    },
                  },
                  e.props.children
                );
              }),
              e
            );
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.createElement)(O, null, this.renderChildren);
                },
              },
            ]),
            n
          );
        })(r.Component),
        H = function (e) {
          return Object(r.createElement)(O, null, function (t) {
            return Object(r.createElement)(
              _,
              c({}, e, { accordionContext: t })
            );
          });
        },
        k = (function (e) {
          s(n, e);
          var t = g(n);
          function n() {
            var e;
            i(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              u(
                b((e = t.call.apply(t, [this].concat(a)))),
                "renderChildren",
                function (t) {
                  return t ? e.props.children(t) : null;
                }
              ),
              e
            );
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.createElement)(
                    D.Consumer,
                    null,
                    this.renderChildren
                  );
                },
              },
            ]),
            n
          );
        })(r.PureComponent),
        q = (function (e) {
          s(n, e);
          var t = g(n);
          function n() {
            var e;
            i(this, n);
            for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
              o[l] = arguments[l];
            return (
              u(
                b((e = t.call.apply(t, [this].concat(o)))),
                "instanceUuid",
                C()
              ),
              u(b(e), "renderChildren", function (t) {
                var n = e.props,
                  a = (n.uuid, n.className),
                  i = n.activeClassName,
                  o =
                    (n.dangerouslySetExpanded,
                    m(n, [
                      "uuid",
                      "className",
                      "activeClassName",
                      "dangerouslySetExpanded",
                    ])),
                  l = t.expanded && i ? i : a;
                return Object(r.createElement)(
                  "div",
                  c(
                    {
                      "data-accordion-component": "AccordionItem",
                      className: l,
                    },
                    o
                  )
                );
              }),
              e
            );
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.uuid,
                    n = void 0 === t ? this.instanceUuid : t,
                    a = e.dangerouslySetExpanded,
                    i = m(e, ["uuid", "dangerouslySetExpanded"]);
                  return (
                    N(n),
                    i.id && N(i.id),
                    Object(r.createElement)(
                      H,
                      { uuid: n, dangerouslySetExpanded: a },
                      Object(r.createElement)(k, null, this.renderChildren)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component);
      function M(e) {
        var t = (function e(t) {
          return (
            t &&
            (t.matches('[data-accordion-component="Accordion"]')
              ? t
              : e(t.parentElement))
          );
        })(e);
        return (
          t &&
          Array.from(
            t.querySelectorAll(
              '[data-accordion-component="AccordionItemButton"]'
            )
          )
        );
      }
      u(q, "defaultProps", { className: "accordion__item" }),
        u(q, "displayName", j.AccordionItem);
      var B = "40",
        Z = "35",
        L = "13",
        T = "36",
        R = "37",
        V = "39",
        W = "32",
        F = "38",
        U = function (e) {
          var t = e.toggleExpanded,
            n = e.className,
            a = void 0 === n ? "accordion__button" : n,
            i = m(e, ["toggleExpanded", "className"]);
          return (
            i.id && N(i.id),
            Object(r.createElement)(
              "div",
              c({ className: a }, i, {
                role: "button",
                tabIndex: 0,
                onClick: t,
                onKeyDown: function (e) {
                  var n = e.which.toString();
                  if (
                    ((n !== L && n !== W) || (e.preventDefault(), t()),
                    e.target instanceof HTMLElement)
                  )
                    switch (n) {
                      case T:
                        e.preventDefault(),
                          (function (e) {
                            var t = (M(e) || [])[0];
                            t && t.focus();
                          })(e.target);
                        break;
                      case Z:
                        e.preventDefault(),
                          (function (e) {
                            var t = M(e) || [],
                              n = t[t.length - 1];
                            n && n.focus();
                          })(e.target);
                        break;
                      case R:
                      case F:
                        e.preventDefault(),
                          (function (e) {
                            var t = M(e) || [],
                              n = t.indexOf(e);
                            if (-1 !== n) {
                              var r = t[n - 1];
                              r && r.focus();
                            }
                          })(e.target);
                        break;
                      case V:
                      case B:
                        e.preventDefault(),
                          (function (e) {
                            var t = M(e) || [],
                              n = t.indexOf(e);
                            if (-1 !== n) {
                              var r = t[n + 1];
                              r && r.focus();
                            }
                          })(e.target);
                    }
                },
                "data-accordion-component": "AccordionItemButton",
              })
            )
          );
        },
        Q = function (e) {
          return Object(r.createElement)(k, null, function (t) {
            var n = t.toggleExpanded,
              a = t.buttonAttributes;
            return Object(r.createElement)(U, c({ toggleExpanded: n }, e, a));
          });
        },
        J = (function (e) {
          s(n, e);
          var t = g(n);
          function n() {
            var e;
            i(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              u(b((e = t.call.apply(t, [this].concat(a)))), "ref", void 0),
              u(b(e), "setRef", function (t) {
                e.ref = t;
              }),
              e
            );
          }
          return (
            l(
              n,
              [
                {
                  key: "componentDidUpdate",
                  value: function () {
                    n.VALIDATE(this.ref);
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    n.VALIDATE(this.ref);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(r.createElement)(
                      "div",
                      c(
                        { "data-accordion-component": "AccordionItemHeading" },
                        this.props,
                        { ref: this.setRef }
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: "VALIDATE",
                  value: function (e) {
                    if (void 0 === e) throw new Error("ref is undefined");
                    if (
                      1 !== e.childElementCount ||
                      !e.firstElementChild ||
                      "AccordionItemButton" !==
                        e.firstElementChild.getAttribute(
                          "data-accordion-component"
                        )
                    )
                      throw new Error(
                        "AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n"
                      );
                  },
                },
              ]
            ),
            n
          );
        })(r.PureComponent);
      u(J, "defaultProps", {
        className: "accordion__heading",
        "aria-level": 3,
      });
      var K = function (e) {
        return Object(r.createElement)(k, null, function (t) {
          var n = t.headingAttributes;
          return e.id && N(e.id), Object(r.createElement)(J, c({}, e, n));
        });
      };
      K.displayName = j.AccordionItemHeading;
      var $ = function (e) {
          var t = e.className,
            n = void 0 === t ? "accordion__panel" : t,
            a = e.id,
            i = m(e, ["className", "id"]),
            o = function (e) {
              var t = e.panelAttributes;
              return (
                a && N(a),
                Object(r.createElement)(
                  "div",
                  c(
                    {
                      "data-accordion-component": "AccordionItemPanel",
                      className: n,
                    },
                    i,
                    t
                  )
                )
              );
            };
          return Object(r.createElement)(k, null, o);
        },
        z = a.a.createElement;
      t.a = function () {
        return z(
          "div",
          { className: "faq-area bg-2 ptb-100" },
          z(
            "div",
            { className: "container" },
            z(
              "div",
              { className: "section-title" },
              z("span", { className: "top-title" }, "FAQ,s"),
              z("h2", null, "Frequently Asked Questions"),
              z(
                "p",
                null,
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus."
              )
            ),
            z(
              "div",
              { className: "row align-items-center" },
              z(
                "div",
                { className: "col-lg-6" },
                z(
                  "div",
                  { className: "faq-img" },
                  z("img", { src: "/img/faq-img.png", alt: "Image" })
                )
              ),
              z(
                "div",
                { className: "col-lg-6" },
                z(
                  "div",
                  { className: "faq-accordion" },
                  z(
                    I,
                    { allowZeroExpanded: !0, preExpanded: ["a"] },
                    z(
                      q,
                      { uuid: "a" },
                      z(
                        K,
                        null,
                        z(
                          Q,
                          null,
                          z("span", null, "What is coronavirus & COVID-19?")
                        )
                      ),
                      z(
                        $,
                        null,
                        z(
                          "p",
                          null,
                          "Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde, iste minima dolores dolor perferendis facilis. How do you Startup blanditiis voluptates."
                        )
                      )
                    ),
                    z(
                      q,
                      { uuid: "b" },
                      z(
                        K,
                        null,
                        z(
                          Q,
                          null,
                          z("span", null, "What are the symptoms of COVID-19?")
                        )
                      ),
                      z(
                        $,
                        null,
                        z(
                          "p",
                          null,
                          "Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde, iste minima dolores dolor perferendis facilis. How do you Startup blanditiis voluptates."
                        )
                      )
                    ),
                    z(
                      q,
                      { uuid: "c" },
                      z(
                        K,
                        null,
                        z(
                          Q,
                          null,
                          z(
                            "span",
                            null,
                            "What can I do to prevent myself from coronavirus and others?"
                          )
                        )
                      ),
                      z(
                        $,
                        null,
                        z(
                          "p",
                          null,
                          "Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde, iste minima dolores dolor perferendis facilis. How do you Startup blanditiis voluptates."
                        )
                      )
                    ),
                    z(
                      q,
                      { uuid: "d" },
                      z(
                        K,
                        null,
                        z(
                          Q,
                          null,
                          z("span", null, "What should I do If I feel sick?")
                        )
                      ),
                      z(
                        $,
                        null,
                        z(
                          "p",
                          null,
                          "Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde, iste minima dolores dolor perferendis facilis. How do you Startup blanditiis voluptates."
                        )
                      )
                    ),
                    z(
                      q,
                      { uuid: "e" },
                      z(
                        K,
                        null,
                        z(
                          Q,
                          null,
                          z(
                            "span",
                            null,
                            "If a loved one gets sick, how can I care for them?"
                          )
                        )
                      ),
                      z(
                        $,
                        null,
                        z(
                          "p",
                          null,
                          "Lorem, ipsum dolor sit amet How do you Startup? consectetur adipisicing elit. Accusamus ipsa error, excepturi, obcaecati aliquid veniam blanditiis quas voluptates maxime unde, iste minima dolores dolor perferendis facilis. How do you Startup blanditiis voluptates."
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
  },
]);
