'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

!(function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var u = (e[r] = {
      i: r,
      l: !1,
      exports: {},
    });
    return t[r].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
  }

  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: r,
        });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', {
          enumerable: !0,
          value: t,
        }),
        2 & e && 'string' != typeof t)
      )
        for (var u in t) {
          n.d(
            r,
            u,
            function (e) {
              return t[e];
            }.bind(null, u),
          );
        }
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default'];
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 3));
})([
  function (t, e, n) {
    (function (t) {
      (function (e) {
        'use strict';

        var n =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : void 0 !== t
            ? t
            : 'undefined' != typeof self
            ? self
            : {};

        function r(t) {
          var e = {
            exports: {},
          };
          return t(e, e.exports), e.exports;
        }

        var u = function u(t) {
            return t && t.Math == Math && t;
          },
          i =
            u('object' == (typeof globalThis === 'undefined' ? 'undefined' : _typeof(globalThis)) && globalThis) ||
            u('object' == (typeof window === 'undefined' ? 'undefined' : _typeof(window)) && window) ||
            u('object' == (typeof self === 'undefined' ? 'undefined' : _typeof(self)) && self) ||
            u('object' == _typeof(n) && n) ||
            (function () {
              return this;
            })() ||
            Function('return this')(),
          a = function a(t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          },
          s = !a(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function get() {
                  return 7;
                },
              })[1]
            );
          }),
          o = {}.propertyIsEnumerable,
          l = Object.getOwnPropertyDescriptor,
          h = {
            f:
              l &&
              !o.call(
                {
                  1: 2,
                },
                1,
              )
                ? function (t) {
                    var e = l(this, t);
                    return !!e && e.enumerable;
                  }
                : o,
          },
          c = function c(t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e,
            };
          },
          f = {}.toString,
          d = ''.split,
          p = a(function () {
            return !Object('z').propertyIsEnumerable(0);
          })
            ? function (t) {
                return 'String' ==
                  (function (t) {
                    return f.call(t).slice(8, -1);
                  })(t)
                  ? d.call(t, '')
                  : Object(t);
              }
            : Object,
          v = function v(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t;
          },
          g = function g(t) {
            return p(v(t));
          },
          k = function k(t) {
            return 'object' == _typeof(t) ? null !== t : 'function' == typeof t;
          },
          m = function m(t, e) {
            if (!k(t)) return t;
            var n, r;
            if (e && 'function' == typeof (n = t.toString) && !k((r = n.call(t)))) return r;
            if ('function' == typeof (n = t.valueOf) && !k((r = n.call(t)))) return r;
            if (!e && 'function' == typeof (n = t.toString) && !k((r = n.call(t)))) return r;
            throw TypeError("Can't convert object to primitive value");
          },
          y = {}.hasOwnProperty,
          _ = function _(t, e) {
            return y.call(t, e);
          },
          b = i.document,
          A = k(b) && k(b.createElement),
          C =
            !s &&
            !a(function () {
              return (
                7 !=
                Object.defineProperty(((t = 'div'), A ? b.createElement(t) : {}), 'a', {
                  get: function get() {
                    return 7;
                  },
                }).a
              );
              var t;
            }),
          E = Object.getOwnPropertyDescriptor,
          S = {
            f: s
              ? E
              : function (t, e) {
                  if (((t = g(t)), (e = m(e, !0)), C))
                    try {
                      return E(t, e);
                    } catch (t) {}
                  if (_(t, e)) return c(!h.f.call(t, e), t[e]);
                },
          },
          F = function F(t) {
            if (!k(t)) throw TypeError(String(t) + ' is not an object');
            return t;
          },
          D = Object.defineProperty,
          B = {
            f: s
              ? D
              : function (t, e, n) {
                  if ((F(t), (e = m(e, !0)), F(n), C))
                    try {
                      return D(t, e, n);
                    } catch (t) {}
                  if ('get' in n || 'set' in n) throw TypeError('Accessors not supported');
                  return 'value' in n && (t[e] = n.value), t;
                },
          },
          w = s
            ? function (t, e, n) {
                return B.f(t, e, c(1, n));
              }
            : function (t, e, n) {
                return (t[e] = n), t;
              },
          M = function M(t, e) {
            try {
              w(i, t, e);
            } catch (n) {
              i[t] = e;
            }

            return e;
          },
          x = i['__core-js_shared__'] || M('__core-js_shared__', {}),
          P = Function.toString;

        'function' != typeof x.inspectSource &&
          (x.inspectSource = function (t) {
            return P.call(t);
          });
        var O,
          T,
          I,
          j,
          V = x.inspectSource,
          R = i.WeakMap,
          L = 'function' == typeof R && /native code/.test(V(R)),
          N = r(function (t) {
            (t.exports = function (t, e) {
              return x[t] || (x[t] = void 0 !== e ? e : {});
            })('versions', []).push({
              version: '3.8.3',
              mode: 'global',
              copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
            });
          }),
          q = 0,
          U = Math.random(),
          z = N('keys'),
          H = {},
          Y = i.WeakMap;

        if (L) {
          var Z = x.state || (x.state = new Y()),
            $ = Z.get,
            K = Z.has,
            G = Z.set;
          (O = function O(t, e) {
            return (e.facade = t), G.call(Z, t, e), e;
          }),
            (T = function T(t) {
              return $.call(Z, t) || {};
            }),
            (I = function I(t) {
              return K.call(Z, t);
            });
        } else {
          var W =
            z[(j = 'state')] ||
            (z[j] = (function (t) {
              return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++q + U).toString(36);
            })(j));

          (H[W] = !0),
            (O = function O(t, e) {
              return (e.facade = t), w(t, W, e), e;
            }),
            (T = function T(t) {
              return _(t, W) ? t[W] : {};
            }),
            (I = function I(t) {
              return _(t, W);
            });
        }

        var X = {
            set: O,
            get: T,
            has: I,
            enforce: function enforce(t) {
              return I(t) ? T(t) : O(t, {});
            },
            getterFor: function getterFor(t) {
              return function (e) {
                var n;
                if (!k(e) || (n = T(e)).type !== t) throw TypeError('Incompatible receiver, ' + t + ' required');
                return n;
              };
            },
          },
          J = r(function (t) {
            var e = X.get,
              n = X.enforce,
              r = String(String).split('String');
            (t.exports = function (t, e, u, a) {
              var s,
                o = !!a && !!a.unsafe,
                l = !!a && !!a.enumerable,
                h = !!a && !!a.noTargetGet;
              'function' == typeof u &&
                ('string' != typeof e || _(u, 'name') || w(u, 'name', e),
                (s = n(u)).source || (s.source = r.join('string' == typeof e ? e : ''))),
                t !== i
                  ? (o ? !h && t[e] && (l = !0) : delete t[e], l ? (t[e] = u) : w(t, e, u))
                  : l
                  ? (t[e] = u)
                  : M(e, u);
            })(Function.prototype, 'toString', function () {
              return ('function' == typeof this && e(this).source) || V(this);
            });
          }),
          Q = i,
          tt = function tt(t) {
            return 'function' == typeof t ? t : void 0;
          },
          et = function et(t, e) {
            return arguments.length < 2 ? tt(Q[t]) || tt(i[t]) : (Q[t] && Q[t][e]) || (i[t] && i[t][e]);
          },
          nt = Math.ceil,
          rt = Math.floor,
          ut = function ut(t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? rt : nt)(t);
          },
          it = Math.min,
          at = function at(t) {
            return t > 0 ? it(ut(t), 9007199254740991) : 0;
          },
          st = Math.max,
          ot = Math.min,
          lt = function lt(t) {
            return function (e, n, r) {
              var u,
                i = g(e),
                a = at(i.length),
                s = (function (t, e) {
                  var n = ut(t);
                  return n < 0 ? st(n + e, 0) : ot(n, e);
                })(r, a);

              if (t && n != n) {
                for (; a > s; ) {
                  if ((u = i[s++]) != u) return !0;
                }
              } else
                for (; a > s; s++) {
                  if ((t || s in i) && i[s] === n) return t || s || 0;
                }

              return !t && -1;
            };
          },
          ht = (lt(!0), lt(!1)),
          ct = function ct(t, e) {
            var n,
              r = g(t),
              u = 0,
              i = [];

            for (n in r) {
              !_(H, n) && _(r, n) && i.push(n);
            }

            for (; e.length > u; ) {
              _(r, (n = e[u++])) && (~ht(i, n) || i.push(n));
            }

            return i;
          },
          ft = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf',
          ],
          dt = ft.concat('length', 'prototype'),
          pt = {
            f:
              Object.getOwnPropertyNames ||
              function (t) {
                return ct(t, dt);
              },
          },
          vt = {
            f: Object.getOwnPropertySymbols,
          },
          gt =
            et('Reflect', 'ownKeys') ||
            function (t) {
              var e = pt.f(F(t)),
                n = vt.f;
              return n ? e.concat(n(t)) : e;
            },
          kt = function kt(t, e) {
            for (var n = gt(e), r = B.f, u = S.f, i = 0; i < n.length; i++) {
              var a = n[i];
              _(t, a) || r(t, a, u(e, a));
            }
          },
          mt = /#|\.prototype\./,
          yt = function yt(t, e) {
            var n = bt[_t(t)];

            return n == Ct || (n != At && ('function' == typeof e ? a(e) : !!e));
          },
          _t = (yt.normalize = function (t) {
            return String(t).replace(mt, '.').toLowerCase();
          }),
          bt = (yt.data = {}),
          At = (yt.NATIVE = 'N'),
          Ct = (yt.POLYFILL = 'P'),
          Et = yt,
          St = S.f,
          Ft = function Ft(t, e) {
            var n,
              r,
              u,
              a,
              s,
              o = t.target,
              l = t.global,
              h = t.stat;
            if ((n = l ? i : h ? i[o] || M(o, {}) : (i[o] || {}).prototype))
              for (r in e) {
                if (
                  ((a = e[r]),
                  (u = t.noTargetGet ? (s = St(n, r)) && s.value : n[r]),
                  !Et(l ? r : o + (h ? '.' : '#') + r, t.forced) && void 0 !== u)
                ) {
                  if (_typeof(a) == _typeof(u)) continue;
                  kt(a, u);
                }

                (t.sham || (u && u.sham)) && w(a, 'sham', !0), J(n, r, a, t);
              }
          },
          Dt =
            Object.keys ||
            function (t) {
              return ct(t, ft);
            },
          Bt = function Bt(t) {
            return Object(v(t));
          },
          wt = Object.assign,
          Mt = Object.defineProperty,
          xt =
            !wt ||
            a(function () {
              if (
                s &&
                1 !==
                  wt(
                    {
                      b: 1,
                    },
                    wt(
                      Mt({}, 'a', {
                        enumerable: !0,
                        get: function get() {
                          Mt(this, 'b', {
                            value: 3,
                            enumerable: !1,
                          });
                        },
                      }),
                      {
                        b: 2,
                      },
                    ),
                  ).b
              )
                return !0;
              var t = {},
                e = {},
                n = Symbol();
              return (
                (t[n] = 7),
                'abcdefghijklmnopqrst'.split('').forEach(function (t) {
                  e[t] = t;
                }),
                7 != wt({}, t)[n] || 'abcdefghijklmnopqrst' != Dt(wt({}, e)).join('')
              );
            })
              ? function (t, e) {
                  for (var n = Bt(t), r = arguments.length, u = 1, i = vt.f, a = h.f; r > u; ) {
                    for (
                      var o, l = p(arguments[u++]), c = i ? Dt(l).concat(i(l)) : Dt(l), f = c.length, d = 0;
                      f > d;

                    ) {
                      (o = c[d++]), (s && !a.call(l, o)) || (n[o] = l[o]);
                    }
                  }

                  return n;
                }
              : wt;

        Ft(
          {
            target: 'Object',
            stat: !0,
            forced: Object.assign !== xt,
          },
          {
            assign: xt,
          },
        );

        var Pt =
            ''.repeat ||
            function (t) {
              var e = String(v(this)),
                n = '',
                r = ut(t);
              if (r < 0 || r == 1 / 0) throw RangeError('Wrong number of repetitions');

              for (; r > 0; (r >>>= 1) && (e += e)) {
                1 & r && (n += e);
              }

              return n;
            },
          Ot = Math.ceil,
          Tt = function Tt(t) {
            return function (e, n, r) {
              var u,
                i,
                a = String(v(e)),
                s = a.length,
                o = void 0 === r ? ' ' : String(r),
                l = at(n);
              return l <= s || '' == o
                ? a
                : ((u = l - s),
                  (i = Pt.call(o, Ot(u / o.length))).length > u && (i = i.slice(0, u)),
                  t ? a + i : i + a);
            };
          },
          It = {
            start: Tt(!1),
            end: Tt(!0),
          },
          jt = et('navigator', 'userAgent') || '',
          Vt = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(jt),
          Rt = It.end;

        Ft(
          {
            target: 'String',
            proto: !0,
            forced: Vt,
          },
          {
            padEnd: function padEnd(t) {
              return Rt(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        );
        var Lt = It.start;

        function Nt(t) {
          return (Nt =
            'function' == typeof Symbol && 'symbol' == _typeof(Symbol.iterator)
              ? function (t) {
                  return _typeof(t);
                }
              : function (t) {
                  return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                    ? 'symbol'
                    : _typeof(t);
                })(t);
        }

        function qt(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        }

        function Ut(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }

        function zt(t, e, n) {
          return e && Ut(t.prototype, e), n && Ut(t, n), t;
        }

        function Ht(t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0,
            },
          })),
            e && Zt(t, e);
        }

        function Yt(t) {
          return (Yt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }

        function Zt(t, e) {
          return (Zt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }

        function $t(t, e) {
          if (null == t) return {};

          var n,
            r,
            u = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                u = {},
                i = Object.keys(t);

              for (r = 0; r < i.length; r++) {
                (n = i[r]), e.indexOf(n) >= 0 || (u[n] = t[n]);
              }

              return u;
            })(t, e);

          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);

            for (r = 0; r < i.length; r++) {
              (n = i[r]), e.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, n) && (u[n] = t[n]));
            }
          }

          return u;
        }

        function Kt(t, e) {
          return !e || ('object' != _typeof(e) && 'function' != typeof e)
            ? (function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
              })(t)
            : e;
        }

        function Gt(t) {
          var e = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;

            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          })();

          return function () {
            var n,
              r = Yt(t);

            if (e) {
              var u = Yt(this).constructor;
              n = Reflect.construct(r, arguments, u);
            } else n = r.apply(this, arguments);

            return Kt(this, n);
          };
        }

        function Wt(t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Yt(t)); ) {}

          return t;
        }

        function Xt(t, e, n) {
          return (Xt =
            'undefined' != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (t, e, n) {
                  var r = Wt(t, e);

                  if (r) {
                    var u = Object.getOwnPropertyDescriptor(r, e);
                    return u.get ? u.get.call(n) : u.value;
                  }
                })(t, e, n || t);
        }

        function Jt(t, e, n, r) {
          return (Jt =
            'undefined' != typeof Reflect && Reflect.set
              ? Reflect.set
              : function (t, e, n, r) {
                  var u,
                    i = Wt(t, e);

                  if (i) {
                    if ((u = Object.getOwnPropertyDescriptor(i, e)).set) return u.set.call(r, n), !0;
                    if (!u.writable) return !1;
                  }

                  if ((u = Object.getOwnPropertyDescriptor(r, e))) {
                    if (!u.writable) return !1;
                    (u.value = n), Object.defineProperty(r, e, u);
                  } else
                    !(function (t, e, n) {
                      e in t
                        ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[e] = n);
                    })(r, e, n);

                  return !0;
                })(t, e, n, r);
        }

        function Qt(t, e, n, r, u) {
          if (!Jt(t, e, n, r || t) && u) throw new Error('failed to set property');
          return n;
        }

        function te(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [],
                  r = !0,
                  u = !1,
                  i = void 0;

                try {
                  for (
                    var a, s = t[Symbol.iterator]();
                    !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e);
                    r = !0
                  ) {}
                } catch (t) {
                  (u = !0), (i = t);
                } finally {
                  try {
                    r || null == s['return'] || s['return']();
                  } finally {
                    if (u) throw i;
                  }
                }

                return n;
              }
            })(t, e) ||
            (function (t, e) {
              if (t) {
                if ('string' == typeof t) return ee(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === n && t.constructor && (n = t.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(t)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ee(t, e)
                    : void 0
                );
              }
            })(t, e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            })()
          );
        }

        function ee(t, e) {
          (null == e || e > t.length) && (e = t.length);

          for (var n = 0, r = new Array(e); n < e; n++) {
            r[n] = t[n];
          }

          return r;
        }

        function ne(t) {
          return 'string' == typeof t || t instanceof String;
        }

        Ft(
          {
            target: 'String',
            proto: !0,
            forced: Vt,
          },
          {
            padStart: function padStart(t) {
              return Lt(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        ),
          Ft(
            {
              target: 'String',
              proto: !0,
            },
            {
              repeat: Pt,
            },
          ),
          Ft(
            {
              global: !0,
            },
            {
              globalThis: i,
            },
          );
        var re = 'NONE',
          ue = 'LEFT',
          ie = 'FORCE_LEFT',
          ae = 'RIGHT',
          se = 'FORCE_RIGHT';

        function oe(t) {
          switch (t) {
            case ue:
              return ie;

            case ae:
              return se;

            default:
              return t;
          }
        }

        function le(t) {
          return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
        }

        var he = (function () {
            function t(e, n, r, u) {
              for (
                qt(this, t), this.value = e, this.cursorPos = n, this.oldValue = r, this.oldSelection = u;
                this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);

              ) {
                --this.oldSelection.start;
              }
            }

            return (
              zt(t, [
                {
                  key: 'startChangePos',
                  get: function get() {
                    return Math.min(this.cursorPos, this.oldSelection.start);
                  },
                },
                {
                  key: 'insertedCount',
                  get: function get() {
                    return this.cursorPos - this.startChangePos;
                  },
                },
                {
                  key: 'inserted',
                  get: function get() {
                    return this.value.substr(this.startChangePos, this.insertedCount);
                  },
                },
                {
                  key: 'removedCount',
                  get: function get() {
                    return Math.max(
                      this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length,
                      0,
                    );
                  },
                },
                {
                  key: 'removed',
                  get: function get() {
                    return this.oldValue.substr(this.startChangePos, this.removedCount);
                  },
                },
                {
                  key: 'head',
                  get: function get() {
                    return this.value.substring(0, this.startChangePos);
                  },
                },
                {
                  key: 'tail',
                  get: function get() {
                    return this.value.substring(this.startChangePos + this.insertedCount);
                  },
                },
                {
                  key: 'removeDirection',
                  get: function get() {
                    return !this.removedCount || this.insertedCount
                      ? re
                      : this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos
                      ? ae
                      : ue;
                  },
                },
              ]),
              t
            );
          })(),
          ce = (function () {
            function t(e) {
              qt(this, t),
                Object.assign(
                  this,
                  {
                    inserted: '',
                    rawInserted: '',
                    skip: !1,
                    tailShift: 0,
                  },
                  e,
                );
            }

            return (
              zt(t, [
                {
                  key: 'aggregate',
                  value: function value(t) {
                    return (
                      (this.rawInserted += t.rawInserted),
                      (this.skip = this.skip || t.skip),
                      (this.inserted += t.inserted),
                      (this.tailShift += t.tailShift),
                      this
                    );
                  },
                },
                {
                  key: 'offset',
                  get: function get() {
                    return this.tailShift + this.inserted.length;
                  },
                },
              ]),
              t
            );
          })(),
          fe = (function () {
            function t() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = arguments.length > 2 ? arguments[2] : void 0;
              qt(this, t), (this.value = e), (this.from = n), (this.stop = r);
            }

            return (
              zt(t, [
                {
                  key: 'toString',
                  value: function value() {
                    return this.value;
                  },
                },
                {
                  key: 'extend',
                  value: function value(t) {
                    this.value += String(t);
                  },
                },
                {
                  key: 'appendTo',
                  value: function value(t) {
                    return t
                      .append(this.toString(), {
                        tail: !0,
                      })
                      .aggregate(t._appendPlaceholder());
                  },
                },
                {
                  key: 'state',
                  get: function get() {
                    return {
                      value: this.value,
                      from: this.from,
                      stop: this.stop,
                    };
                  },
                  set: function set(t) {
                    Object.assign(this, t);
                  },
                },
                {
                  key: 'shiftBefore',
                  value: function value(t) {
                    if (this.from >= t || !this.value.length) return '';
                    var e = this.value[0];
                    return (this.value = this.value.slice(1)), e;
                  },
                },
              ]),
              t
            );
          })();

        function de(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new de.InputMask(t, e);
        }

        var pe = (function () {
          function t(e) {
            qt(this, t), (this._value = ''), this._update(Object.assign({}, t.DEFAULTS, e)), (this.isInitialized = !0);
          }

          return (
            zt(t, [
              {
                key: 'updateOptions',
                value: function value(t) {
                  Object.keys(t).length && this.withValueRefresh(this._update.bind(this, t));
                },
              },
              {
                key: '_update',
                value: function value(t) {
                  Object.assign(this, t);
                },
              },
              {
                key: 'state',
                get: function get() {
                  return {
                    _value: this.value,
                  };
                },
                set: function set(t) {
                  this._value = t._value;
                },
              },
              {
                key: 'reset',
                value: function value() {
                  this._value = '';
                },
              },
              {
                key: 'value',
                get: function get() {
                  return this._value;
                },
                set: function set(t) {
                  this.resolve(t);
                },
              },
              {
                key: 'resolve',
                value: function value(t) {
                  return (
                    this.reset(),
                    this.append(
                      t,
                      {
                        input: !0,
                      },
                      '',
                    ),
                    this.doCommit(),
                    this.value
                  );
                },
              },
              {
                key: 'unmaskedValue',
                get: function get() {
                  return this.value;
                },
                set: function set(t) {
                  this.reset(), this.append(t, {}, ''), this.doCommit();
                },
              },
              {
                key: 'typedValue',
                get: function get() {
                  return this.doParse(this.value);
                },
                set: function set(t) {
                  this.value = this.doFormat(t);
                },
              },
              {
                key: 'rawInputValue',
                get: function get() {
                  return this.extractInput(0, this.value.length, {
                    raw: !0,
                  });
                },
                set: function set(t) {
                  this.reset(),
                    this.append(
                      t,
                      {
                        raw: !0,
                      },
                      '',
                    ),
                    this.doCommit();
                },
              },
              {
                key: 'isComplete',
                get: function get() {
                  return !0;
                },
              },
              {
                key: 'nearestInputPos',
                value: function value(t, e) {
                  return t;
                },
              },
              {
                key: 'extractInput',
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                  return this.value.slice(t, e);
                },
              },
              {
                key: 'extractTail',
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                  return new fe(this.extractInput(t, e), t);
                },
              },
              {
                key: 'appendTail',
                value: function value(t) {
                  return ne(t) && (t = new fe(String(t))), t.appendTo(this);
                },
              },
              {
                key: '_appendCharRaw',
                value: function value(t) {
                  return t
                    ? ((this._value += t),
                      new ce({
                        inserted: t,
                        rawInserted: t,
                      }))
                    : new ce();
                },
              },
              {
                key: '_appendChar',
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = this.state,
                    u = this._appendCharRaw(this.doPrepare(t, e), e);

                  if (u.inserted) {
                    var i,
                      a = !1 !== this.doValidate(e);

                    if (a && null != n) {
                      var s = this.state;
                      this.overwrite && ((i = n.state), n.shiftBefore(this.value.length));
                      var o = this.appendTail(n);
                      (a = o.rawInserted === n.toString()) && o.inserted && (this.state = s);
                    }

                    a || ((u = new ce()), (this.state = r), n && i && (n.state = i));
                  }

                  return u;
                },
              },
              {
                key: '_appendPlaceholder',
                value: function value() {
                  return new ce();
                },
              },
              {
                key: 'append',
                value: function value(t, e, n) {
                  if (!ne(t)) throw new Error('value should be string');
                  var r = new ce(),
                    u = ne(n) ? new fe(String(n)) : n;
                  e && e.tail && (e._beforeTailState = this.state);

                  for (var i = 0; i < t.length; ++i) {
                    r.aggregate(this._appendChar(t[i], e, u));
                  }

                  return null != u && (r.tailShift += this.appendTail(u).tailShift), r;
                },
              },
              {
                key: 'remove',
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                  return (this._value = this.value.slice(0, t) + this.value.slice(e)), new ce();
                },
              },
              {
                key: 'withValueRefresh',
                value: function value(t) {
                  if (this._refreshing || !this.isInitialized) return t();
                  this._refreshing = !0;
                  var e = this.rawInputValue,
                    n = this.value,
                    r = t();
                  return (
                    (this.rawInputValue = e),
                    this.value &&
                      this.value !== n &&
                      0 === n.indexOf(this.value) &&
                      this.append(n.slice(this.value.length), {}, ''),
                    delete this._refreshing,
                    r
                  );
                },
              },
              {
                key: 'runIsolated',
                value: function value(t) {
                  if (this._isolated || !this.isInitialized) return t(this);
                  this._isolated = !0;
                  var e = this.state,
                    n = t(this);
                  return (this.state = e), delete this._isolated, n;
                },
              },
              {
                key: 'doPrepare',
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return this.prepare ? this.prepare(t, this, e) : t;
                },
              },
              {
                key: 'doValidate',
                value: function value(t) {
                  return (
                    (!this.validate || this.validate(this.value, this, t)) &&
                    (!this.parent || this.parent.doValidate(t))
                  );
                },
              },
              {
                key: 'doCommit',
                value: function value() {
                  this.commit && this.commit(this.value, this);
                },
              },
              {
                key: 'doFormat',
                value: function value(t) {
                  return this.format ? this.format(t, this) : t;
                },
              },
              {
                key: 'doParse',
                value: function value(t) {
                  return this.parse ? this.parse(t, this) : t;
                },
              },
              {
                key: 'splice',
                value: function value(t, e, n, r) {
                  var u = t + e,
                    i = this.extractTail(u),
                    a = this.nearestInputPos(t, r);
                  return new ce({
                    tailShift: a - t,
                  })
                    .aggregate(this.remove(a))
                    .aggregate(
                      this.append(
                        n,
                        {
                          input: !0,
                        },
                        i,
                      ),
                    );
                },
              },
            ]),
            t
          );
        })();

        function ve(t) {
          if (null == t) throw new Error('mask property should be defined');
          return t instanceof RegExp
            ? de.MaskedRegExp
            : ne(t)
            ? de.MaskedPattern
            : t instanceof Date || t === Date
            ? de.MaskedDate
            : t instanceof Number || 'number' == typeof t || t === Number
            ? de.MaskedNumber
            : Array.isArray(t) || t === Array
            ? de.MaskedDynamic
            : de.Masked && t.prototype instanceof de.Masked
            ? t
            : t instanceof Function
            ? de.MaskedFunction
            : t instanceof de.Masked
            ? t.constructor
            : (console.warn('Mask not found for mask', t), de.Masked);
        }

        function ge(t) {
          if (de.Masked && t instanceof de.Masked) return t;
          var e = (t = Object.assign({}, t)).mask;
          if (de.Masked && e instanceof de.Masked) return e;
          var n = ve(e);
          if (!n)
            throw new Error(
              'Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.',
            );
          return new n(t);
        }

        (pe.DEFAULTS = {
          format: function format(t) {
            return t;
          },
          parse: function parse(t) {
            return t;
          },
        }),
          (de.Masked = pe),
          (de.createMask = ge);

        var ke = {
            0: /\d/,
            a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            '*': /./,
          },
          me = (function () {
            function t(e) {
              qt(this, t);
              var n = e.mask,
                r = $t(e, ['mask']);
              (this.masked = ge({
                mask: n,
              })),
                Object.assign(this, r);
            }

            return (
              zt(t, [
                {
                  key: 'reset',
                  value: function value() {
                    (this._isFilled = !1), this.masked.reset();
                  },
                },
                {
                  key: 'remove',
                  value: function value() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    return 0 === t && e >= 1 ? ((this._isFilled = !1), this.masked.remove(t, e)) : new ce();
                  },
                },
                {
                  key: 'value',
                  get: function get() {
                    return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
                  },
                },
                {
                  key: 'unmaskedValue',
                  get: function get() {
                    return this.masked.unmaskedValue;
                  },
                },
                {
                  key: 'isComplete',
                  get: function get() {
                    return Boolean(this.masked.value) || this.isOptional;
                  },
                },
                {
                  key: '_appendChar',
                  value: function value(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._isFilled) return new ce();

                    var n = this.masked.state,
                      r = this.masked._appendChar(t, e);

                    return (
                      r.inserted &&
                        !1 === this.doValidate(e) &&
                        ((r.inserted = r.rawInserted = ''), (this.masked.state = n)),
                      r.inserted || this.isOptional || this.lazy || e.input || (r.inserted = this.placeholderChar),
                      (r.skip = !r.inserted && !this.isOptional),
                      (this._isFilled = Boolean(r.inserted)),
                      r
                    );
                  },
                },
                {
                  key: 'append',
                  value: function value() {
                    var t;
                    return (t = this.masked).append.apply(t, arguments);
                  },
                },
                {
                  key: '_appendPlaceholder',
                  value: function value() {
                    var t = new ce();
                    return (
                      this._isFilled || this.isOptional || ((this._isFilled = !0), (t.inserted = this.placeholderChar)),
                      t
                    );
                  },
                },
                {
                  key: 'extractTail',
                  value: function value() {
                    var t;
                    return (t = this.masked).extractTail.apply(t, arguments);
                  },
                },
                {
                  key: 'appendTail',
                  value: function value() {
                    var t;
                    return (t = this.masked).appendTail.apply(t, arguments);
                  },
                },
                {
                  key: 'extractInput',
                  value: function value() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                      n = arguments.length > 2 ? arguments[2] : void 0;
                    return this.masked.extractInput(t, e, n);
                  },
                },
                {
                  key: 'nearestInputPos',
                  value: function value(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : re,
                      n = 0,
                      r = this.value.length,
                      u = Math.min(Math.max(t, n), r);

                    switch (e) {
                      case ue:
                      case ie:
                        return this.isComplete ? u : n;

                      case ae:
                      case se:
                        return this.isComplete ? u : r;

                      case re:
                      default:
                        return u;
                    }
                  },
                },
                {
                  key: 'doValidate',
                  value: function value() {
                    var t, e;
                    return (
                      (t = this.masked).doValidate.apply(t, arguments) &&
                      (!this.parent || (e = this.parent).doValidate.apply(e, arguments))
                    );
                  },
                },
                {
                  key: 'doCommit',
                  value: function value() {
                    this.masked.doCommit();
                  },
                },
                {
                  key: 'state',
                  get: function get() {
                    return {
                      masked: this.masked.state,
                      _isFilled: this._isFilled,
                    };
                  },
                  set: function set(t) {
                    (this.masked.state = t.masked), (this._isFilled = t._isFilled);
                  },
                },
              ]),
              t
            );
          })(),
          ye = (function () {
            function t(e) {
              qt(this, t), Object.assign(this, e), (this._value = '');
            }

            return (
              zt(t, [
                {
                  key: 'value',
                  get: function get() {
                    return this._value;
                  },
                },
                {
                  key: 'unmaskedValue',
                  get: function get() {
                    return this.isUnmasking ? this.value : '';
                  },
                },
                {
                  key: 'reset',
                  value: function value() {
                    (this._isRawInput = !1), (this._value = '');
                  },
                },
                {
                  key: 'remove',
                  value: function value() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                    return (
                      (this._value = this._value.slice(0, t) + this._value.slice(e)),
                      this._value || (this._isRawInput = !1),
                      new ce()
                    );
                  },
                },
                {
                  key: 'nearestInputPos',
                  value: function value(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : re,
                      n = 0,
                      r = this._value.length;

                    switch (e) {
                      case ue:
                      case ie:
                        return n;

                      case re:
                      case ae:
                      case se:
                      default:
                        return r;
                    }
                  },
                },
                {
                  key: 'extractInput',
                  value: function value() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length,
                      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return (n.raw && this._isRawInput && this._value.slice(t, e)) || '';
                  },
                },
                {
                  key: 'isComplete',
                  get: function get() {
                    return !0;
                  },
                },
                {
                  key: '_appendChar',
                  value: function value(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                      n = new ce();
                    if (this._value) return n;
                    var r = this['char'] === t[0],
                      u = r && (this.isUnmasking || e.input || e.raw) && !e.tail;
                    return (
                      u && (n.rawInserted = this['char']),
                      (this._value = n.inserted = this['char']),
                      (this._isRawInput = u && (e.raw || e.input)),
                      n
                    );
                  },
                },
                {
                  key: '_appendPlaceholder',
                  value: function value() {
                    var t = new ce();
                    return this._value || (this._value = t.inserted = this['char']), t;
                  },
                },
                {
                  key: 'extractTail',
                  value: function value() {
                    return (arguments.length > 1 && void 0 !== arguments[1]) || this.value.length, new fe('');
                  },
                },
                {
                  key: 'appendTail',
                  value: function value(t) {
                    return ne(t) && (t = new fe(String(t))), t.appendTo(this);
                  },
                },
                {
                  key: 'append',
                  value: function value(t, e, n) {
                    var r = this._appendChar(t, e);

                    return null != n && (r.tailShift += this.appendTail(n).tailShift), r;
                  },
                },
                {
                  key: 'doCommit',
                  value: function value() {},
                },
                {
                  key: 'state',
                  get: function get() {
                    return {
                      _value: this._value,
                      _isRawInput: this._isRawInput,
                    };
                  },
                  set: function set(t) {
                    Object.assign(this, t);
                  },
                },
              ]),
              t
            );
          })(),
          _e = (function () {
            function t() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              qt(this, t), (this.chunks = e), (this.from = n);
            }

            return (
              zt(t, [
                {
                  key: 'toString',
                  value: function value() {
                    return this.chunks.map(String).join('');
                  },
                },
                {
                  key: 'extend',
                  value: function value(e) {
                    if (String(e)) {
                      ne(e) && (e = new fe(String(e)));
                      var n = this.chunks[this.chunks.length - 1],
                        r = n && (n.stop === e.stop || null == e.stop) && e.from === n.from + n.toString().length;
                      if (e instanceof fe) r ? n.extend(e.toString()) : this.chunks.push(e);
                      else if (e instanceof t) {
                        if (null == e.stop)
                          for (var u; e.chunks.length && null == e.chunks[0].stop; ) {
                            ((u = e.chunks.shift()).from += e.from), this.extend(u);
                          }
                        e.toString() && ((e.stop = e.blockIndex), this.chunks.push(e));
                      }
                    }
                  },
                },
                {
                  key: 'appendTo',
                  value: function value(e) {
                    if (!(e instanceof de.MaskedPattern)) return new fe(this.toString()).appendTo(e);

                    for (var n = new ce(), r = 0; r < this.chunks.length && !n.skip; ++r) {
                      var u = this.chunks[r],
                        i = e._mapPosToBlock(e.value.length),
                        a = u.stop,
                        s = void 0;

                      if (
                        (null != a &&
                          (!i || i.index <= a) &&
                          ((u instanceof t || e._stops.indexOf(a) >= 0) && n.aggregate(e._appendPlaceholder(a)),
                          (s = u instanceof t && e._blocks[a])),
                        s)
                      ) {
                        var o = s.appendTail(u);
                        (o.skip = !1), n.aggregate(o), (e._value += o.inserted);
                        var l = u.toString().slice(o.rawInserted.length);
                        l &&
                          n.aggregate(
                            e.append(l, {
                              tail: !0,
                            }),
                          );
                      } else
                        n.aggregate(
                          e.append(u.toString(), {
                            tail: !0,
                          }),
                        );
                    }

                    return n;
                  },
                },
                {
                  key: 'state',
                  get: function get() {
                    return {
                      chunks: this.chunks.map(function (t) {
                        return t.state;
                      }),
                      from: this.from,
                      stop: this.stop,
                      blockIndex: this.blockIndex,
                    };
                  },
                  set: function set(e) {
                    var n = e.chunks,
                      r = $t(e, ['chunks']);
                    Object.assign(this, r),
                      (this.chunks = n.map(function (e) {
                        var n = 'chunks' in e ? new t() : new fe();
                        return (n.state = e), n;
                      }));
                  },
                },
                {
                  key: 'shiftBefore',
                  value: function value(t) {
                    if (this.from >= t || !this.chunks.length) return '';

                    for (var e = t - this.from, n = 0; n < this.chunks.length; ) {
                      var r = this.chunks[n],
                        u = r.shiftBefore(e);

                      if (r.toString()) {
                        if (!u) break;
                        ++n;
                      } else this.chunks.splice(n, 1);

                      if (u) return u;
                    }

                    return '';
                  },
                },
              ]),
              t
            );
          })(),
          be = (function (t) {
            Ht(n, t);
            var e = Gt(n);

            function n() {
              return qt(this, n), e.apply(this, arguments);
            }

            return (
              zt(n, [
                {
                  key: '_update',
                  value: function value(t) {
                    t.mask &&
                      (t.validate = function (e) {
                        return e.search(t.mask) >= 0;
                      }),
                      Xt(Yt(n.prototype), '_update', this).call(this, t);
                  },
                },
              ]),
              n
            );
          })(pe);

        de.MaskedRegExp = be;

        var Ae = (function (t) {
          Ht(n, t);
          var e = Gt(n);

          function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (
              qt(this, n),
              (t.definitions = Object.assign({}, ke, t.definitions)),
              e.call(this, Object.assign({}, n.DEFAULTS, t))
            );
          }

          return (
            zt(n, [
              {
                key: '_update',
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (t.definitions = Object.assign({}, this.definitions, t.definitions)),
                    Xt(Yt(n.prototype), '_update', this).call(this, t),
                    this._rebuildMask();
                },
              },
              {
                key: '_rebuildMask',
                value: function value() {
                  var t = this,
                    e = this.definitions;
                  (this._blocks = []), (this._stops = []), (this._maskedBlocks = {});
                  var r = this.mask;
                  if (r && e)
                    for (var u = !1, i = !1, a = 0; a < r.length; ++a) {
                      if (
                        !this.blocks ||
                        'continue' !==
                          (function () {
                            var e = r.slice(a),
                              n = Object.keys(t.blocks).filter(function (t) {
                                return 0 === e.indexOf(t);
                              });
                            n.sort(function (t, e) {
                              return e.length - t.length;
                            });
                            var u = n[0];

                            if (u) {
                              var i = ge(
                                Object.assign(
                                  {
                                    parent: t,
                                    lazy: t.lazy,
                                    placeholderChar: t.placeholderChar,
                                    overwrite: t.overwrite,
                                  },
                                  t.blocks[u],
                                ),
                              );
                              return (
                                i &&
                                  (t._blocks.push(i),
                                  t._maskedBlocks[u] || (t._maskedBlocks[u] = []),
                                  t._maskedBlocks[u].push(t._blocks.length - 1)),
                                (a += u.length - 1),
                                'continue'
                              );
                            }
                          })()
                      ) {
                        var s = r[a],
                          o = s in e;
                        if (s !== n.STOP_CHAR) {
                          if ('{' !== s && '}' !== s) {
                            if ('[' !== s && ']' !== s) {
                              if (s === n.ESCAPE_CHAR) {
                                if ((++a, !(s = r[a]))) break;
                                o = !1;
                              }

                              var l = o
                                ? new me({
                                    parent: this,
                                    lazy: this.lazy,
                                    placeholderChar: this.placeholderChar,
                                    mask: e[s],
                                    isOptional: i,
                                  })
                                : new ye({
                                    char: s,
                                    isUnmasking: u,
                                  });

                              this._blocks.push(l);
                            } else i = !i;
                          } else u = !u;
                        } else this._stops.push(this._blocks.length);
                      }
                    }
                },
              },
              {
                key: 'state',
                get: function get() {
                  return Object.assign({}, Xt(Yt(n.prototype), 'state', this), {
                    _blocks: this._blocks.map(function (t) {
                      return t.state;
                    }),
                  });
                },
                set: function set(t) {
                  var e = t._blocks,
                    r = $t(t, ['_blocks']);
                  this._blocks.forEach(function (t, n) {
                    return (t.state = e[n]);
                  }),
                    Qt(Yt(n.prototype), 'state', r, this, !0);
                },
              },
              {
                key: 'reset',
                value: function value() {
                  Xt(Yt(n.prototype), 'reset', this).call(this),
                    this._blocks.forEach(function (t) {
                      return t.reset();
                    });
                },
              },
              {
                key: 'isComplete',
                get: function get() {
                  return this._blocks.every(function (t) {
                    return t.isComplete;
                  });
                },
              },
              {
                key: 'doCommit',
                value: function value() {
                  this._blocks.forEach(function (t) {
                    return t.doCommit();
                  }),
                    Xt(Yt(n.prototype), 'doCommit', this).call(this);
                },
              },
              {
                key: 'unmaskedValue',
                get: function get() {
                  return this._blocks.reduce(function (t, e) {
                    return t + e.unmaskedValue;
                  }, '');
                },
                set: function set(t) {
                  Qt(Yt(n.prototype), 'unmaskedValue', t, this, !0);
                },
              },
              {
                key: 'value',
                get: function get() {
                  return this._blocks.reduce(function (t, e) {
                    return t + e.value;
                  }, '');
                },
                set: function set(t) {
                  Qt(Yt(n.prototype), 'value', t, this, !0);
                },
              },
              {
                key: 'appendTail',
                value: function value(t) {
                  return Xt(Yt(n.prototype), 'appendTail', this).call(this, t).aggregate(this._appendPlaceholder());
                },
              },
              {
                key: '_appendCharRaw',
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = this._mapPosToBlock(this.value.length),
                    r = new ce();

                  if (!n) return r;

                  for (var u = n.index; ; ++u) {
                    var i = this._blocks[u];
                    if (!i) break;

                    var a = i._appendChar(t, e),
                      s = a.skip;

                    if ((r.aggregate(a), s || a.rawInserted)) break;
                  }

                  return r;
                },
              },
              {
                key: 'extractTail',
                value: function value() {
                  var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    r = new _e();
                  return (
                    e === n ||
                      this._forEachBlocksInRange(e, n, function (e, n, u, i) {
                        var a = e.extractTail(u, i);
                        (a.stop = t._findStopBefore(n)),
                          (a.from = t._blockStartPos(n)),
                          a instanceof _e && (a.blockIndex = n),
                          r.extend(a);
                      }),
                    r
                  );
                },
              },
              {
                key: 'extractInput',
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  if (t === e) return '';
                  var r = '';
                  return (
                    this._forEachBlocksInRange(t, e, function (t, e, u, i) {
                      r += t.extractInput(u, i, n);
                    }),
                    r
                  );
                },
              },
              {
                key: '_findStopBefore',
                value: function value(t) {
                  for (var e, n = 0; n < this._stops.length; ++n) {
                    var r = this._stops[n];
                    if (!(r <= t)) break;
                    e = r;
                  }

                  return e;
                },
              },
              {
                key: '_appendPlaceholder',
                value: function value(t) {
                  var e = this,
                    n = new ce();
                  if (this.lazy && null == t) return n;

                  var r = this._mapPosToBlock(this.value.length);

                  if (!r) return n;
                  var u = r.index,
                    i = null != t ? t : this._blocks.length;
                  return (
                    this._blocks.slice(u, i).forEach(function (r) {
                      if (!r.lazy || null != t) {
                        var u = null != r._blocks ? [r._blocks.length] : [],
                          i = r._appendPlaceholder.apply(r, u);

                        (e._value += i.inserted), n.aggregate(i);
                      }
                    }),
                    n
                  );
                },
              },
              {
                key: '_mapPosToBlock',
                value: function value(t) {
                  for (var e = '', n = 0; n < this._blocks.length; ++n) {
                    var r = this._blocks[n],
                      u = e.length;
                    if (t <= (e += r.value).length)
                      return {
                        index: n,
                        offset: t - u,
                      };
                  }
                },
              },
              {
                key: '_blockStartPos',
                value: function value(t) {
                  return this._blocks.slice(0, t).reduce(function (t, e) {
                    return t + e.value.length;
                  }, 0);
                },
              },
              {
                key: '_forEachBlocksInRange',
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = this._mapPosToBlock(t);

                  if (r) {
                    var u = this._mapPosToBlock(e),
                      i = u && r.index === u.index,
                      a = r.offset,
                      s = u && i ? u.offset : this._blocks[r.index].value.length;

                    if ((n(this._blocks[r.index], r.index, a, s), u && !i)) {
                      for (var o = r.index + 1; o < u.index; ++o) {
                        n(this._blocks[o], o, 0, this._blocks[o].value.length);
                      }

                      n(this._blocks[u.index], u.index, 0, u.offset);
                    }
                  }
                },
              },
              {
                key: 'remove',
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    r = Xt(Yt(n.prototype), 'remove', this).call(this, t, e);
                  return (
                    this._forEachBlocksInRange(t, e, function (t, e, n, u) {
                      r.aggregate(t.remove(n, u));
                    }),
                    r
                  );
                },
              },
              {
                key: 'nearestInputPos',
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : re,
                    n = this._mapPosToBlock(t) || {
                      index: 0,
                      offset: 0,
                    },
                    r = n.offset,
                    u = n.index,
                    i = this._blocks[u];
                  if (!i) return t;
                  var a = r;
                  0 !== a && a < i.value.length && (a = i.nearestInputPos(r, oe(e)));
                  var s = a === i.value.length,
                    o = 0 === a;
                  if (!o && !s) return this._blockStartPos(u) + a;
                  var l = s ? u + 1 : u;

                  if (e === re) {
                    if (l > 0) {
                      var h = l - 1,
                        c = this._blocks[h],
                        f = c.nearestInputPos(0, re);
                      if (!c.value.length || f !== c.value.length) return this._blockStartPos(l);
                    }

                    for (var d = l, p = d; p < this._blocks.length; ++p) {
                      var v = this._blocks[p],
                        g = v.nearestInputPos(0, re);
                      if (!v.value.length || g !== v.value.length) return this._blockStartPos(p) + g;
                    }

                    for (var k = l - 1; k >= 0; --k) {
                      var m = this._blocks[k],
                        y = m.nearestInputPos(0, re);
                      if (!m.value.length || y !== m.value.length) return this._blockStartPos(k) + m.value.length;
                    }

                    return t;
                  }

                  if (e === ue || e === ie) {
                    for (var _, b = l; b < this._blocks.length; ++b) {
                      if (this._blocks[b].value) {
                        _ = b;
                        break;
                      }
                    }

                    if (null != _) {
                      var A = this._blocks[_],
                        C = A.nearestInputPos(0, ae);
                      if (0 === C && A.unmaskedValue.length) return this._blockStartPos(_) + C;
                    }

                    for (var E, S = -1, F = l - 1; F >= 0; --F) {
                      var D = this._blocks[F],
                        B = D.nearestInputPos(D.value.length, ie);

                      if (((D.value && 0 === B) || (E = F), 0 !== B)) {
                        if (B !== D.value.length) return this._blockStartPos(F) + B;
                        S = F;
                        break;
                      }
                    }

                    if (e === ue)
                      for (var w = S + 1; w <= Math.min(l, this._blocks.length - 1); ++w) {
                        var M = this._blocks[w],
                          x = M.nearestInputPos(0, re),
                          P = this._blockStartPos(w) + x;
                        if (P > t) break;
                        if (x !== M.value.length) return P;
                      }
                    if (S >= 0) return this._blockStartPos(S) + this._blocks[S].value.length;
                    if (e === ie || (this.lazy && !this.extractInput() && !Ce(this._blocks[l]))) return 0;
                    if (null != E) return this._blockStartPos(E);

                    for (var O = l; O < this._blocks.length; ++O) {
                      var T = this._blocks[O],
                        I = T.nearestInputPos(0, re);
                      if (!T.value.length || I !== T.value.length) return this._blockStartPos(O) + I;
                    }

                    return 0;
                  }

                  if (e === ae || e === se) {
                    for (var j, V, R = l; R < this._blocks.length; ++R) {
                      var L = this._blocks[R],
                        N = L.nearestInputPos(0, re);

                      if (N !== L.value.length) {
                        (V = this._blockStartPos(R) + N), (j = R);
                        break;
                      }
                    }

                    if (null != j && null != V) {
                      for (var q = j; q < this._blocks.length; ++q) {
                        var U = this._blocks[q],
                          z = U.nearestInputPos(0, se);
                        if (z !== U.value.length) return this._blockStartPos(q) + z;
                      }

                      return e === se ? this.value.length : V;
                    }

                    for (var H = Math.min(l, this._blocks.length - 1); H >= 0; --H) {
                      var Y = this._blocks[H],
                        Z = Y.nearestInputPos(Y.value.length, ue);

                      if (0 !== Z) {
                        var $ = this._blockStartPos(H) + Z;
                        if ($ >= t) return $;
                        break;
                      }
                    }
                  }

                  return t;
                },
              },
              {
                key: 'maskedBlock',
                value: function value(t) {
                  return this.maskedBlocks(t)[0];
                },
              },
              {
                key: 'maskedBlocks',
                value: function value(t) {
                  var e = this,
                    n = this._maskedBlocks[t];
                  return n
                    ? n.map(function (t) {
                        return e._blocks[t];
                      })
                    : [];
                },
              },
            ]),
            n
          );
        })(pe);

        function Ce(t) {
          if (!t) return !1;
          var e = t.value;
          return !e || t.nearestInputPos(0, re) !== e.length;
        }

        (Ae.DEFAULTS = {
          lazy: !0,
          placeholderChar: '_',
        }),
          (Ae.STOP_CHAR = '`'),
          (Ae.ESCAPE_CHAR = '\\'),
          (Ae.InputDefinition = me),
          (Ae.FixedDefinition = ye),
          (de.MaskedPattern = Ae);

        var Ee = (function (t) {
          Ht(n, t);
          var e = Gt(n);

          function n() {
            return qt(this, n), e.apply(this, arguments);
          }

          return (
            zt(n, [
              {
                key: '_matchFrom',
                get: function get() {
                  return this.maxLength - String(this.from).length;
                },
              },
              {
                key: '_update',
                value: function value(t) {
                  t = Object.assign(
                    {
                      to: this.to || 0,
                      from: this.from || 0,
                    },
                    t,
                  );
                  var e = String(t.to).length;
                  null != t.maxLength && (e = Math.max(e, t.maxLength)), (t.maxLength = e);

                  for (
                    var r = String(t.from).padStart(e, '0'), u = String(t.to).padStart(e, '0'), i = 0;
                    i < u.length && u[i] === r[i];

                  ) {
                    ++i;
                  }

                  (t.mask = u.slice(0, i).replace(/0/g, '\\0') + '0'.repeat(e - i)),
                    Xt(Yt(n.prototype), '_update', this).call(this, t);
                },
              },
              {
                key: 'isComplete',
                get: function get() {
                  return Xt(Yt(n.prototype), 'isComplete', this) && Boolean(this.value);
                },
              },
              {
                key: 'boundaries',
                value: function value(t) {
                  var e = '',
                    n = '',
                    r = te(t.match(/^(\D*)(\d*)(\D*)/) || [], 3),
                    u = r[1],
                    i = r[2];
                  return (
                    i && ((e = '0'.repeat(u.length) + i), (n = '9'.repeat(u.length) + i)),
                    [(e = e.padEnd(this.maxLength, '0')), (n = n.padEnd(this.maxLength, '9'))]
                  );
                },
              },
              {
                key: 'doPrepare',
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  if (((t = Xt(Yt(n.prototype), 'doPrepare', this).call(this, t, e).replace(/\D/g, '')), !this.autofix))
                    return t;

                  for (
                    var r = String(this.from).padStart(this.maxLength, '0'),
                      u = String(this.to).padStart(this.maxLength, '0'),
                      i = this.value,
                      a = '',
                      s = 0;
                    s < t.length;
                    ++s
                  ) {
                    var o = i + a + t[s],
                      l = this.boundaries(o),
                      h = te(l, 2),
                      c = h[0],
                      f = h[1];
                    Number(f) < this.from
                      ? (a += r[o.length - 1])
                      : Number(c) > this.to
                      ? (a += u[o.length - 1])
                      : (a += t[s]);
                  }

                  return a;
                },
              },
              {
                key: 'doValidate',
                value: function value() {
                  var t,
                    e = this.value,
                    r = e.search(/[^0]/);
                  if (-1 === r && e.length <= this._matchFrom) return !0;

                  for (
                    var u = this.boundaries(e),
                      i = te(u, 2),
                      a = i[0],
                      s = i[1],
                      o = arguments.length,
                      l = new Array(o),
                      h = 0;
                    h < o;
                    h++
                  ) {
                    l[h] = arguments[h];
                  }

                  return (
                    this.from <= Number(s) &&
                    Number(a) <= this.to &&
                    (t = Xt(Yt(n.prototype), 'doValidate', this)).call.apply(t, [this].concat(l))
                  );
                },
              },
            ]),
            n
          );
        })(Ae);

        de.MaskedRange = Ee;

        var Se = (function (t) {
          Ht(n, t);
          var e = Gt(n);

          function n(t) {
            return qt(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t));
          }

          return (
            zt(n, [
              {
                key: '_update',
                value: function value(t) {
                  t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
                  var e = t.blocks;
                  (t.blocks = Object.assign({}, n.GET_DEFAULT_BLOCKS())),
                    t.min && (t.blocks.Y.from = t.min.getFullYear()),
                    t.max && (t.blocks.Y.to = t.max.getFullYear()),
                    t.min &&
                      t.max &&
                      t.blocks.Y.from === t.blocks.Y.to &&
                      ((t.blocks.m.from = t.min.getMonth() + 1),
                      (t.blocks.m.to = t.max.getMonth() + 1),
                      t.blocks.m.from === t.blocks.m.to &&
                        ((t.blocks.d.from = t.min.getDate()), (t.blocks.d.to = t.max.getDate()))),
                    Object.assign(t.blocks, e),
                    Object.keys(t.blocks).forEach(function (e) {
                      var n = t.blocks[e];
                      'autofix' in n || (n.autofix = t.autofix);
                    }),
                    Xt(Yt(n.prototype), '_update', this).call(this, t);
                },
              },
              {
                key: 'doValidate',
                value: function value() {
                  for (var t, e = this.date, r = arguments.length, u = new Array(r), i = 0; i < r; i++) {
                    u[i] = arguments[i];
                  }

                  return (
                    (t = Xt(Yt(n.prototype), 'doValidate', this)).call.apply(t, [this].concat(u)) &&
                    (!this.isComplete ||
                      (this.isDateExist(this.value) &&
                        null != e &&
                        (null == this.min || this.min <= e) &&
                        (null == this.max || e <= this.max)))
                  );
                },
              },
              {
                key: 'isDateExist',
                value: function value(t) {
                  return this.format(this.parse(t, this), this).indexOf(t) >= 0;
                },
              },
              {
                key: 'date',
                get: function get() {
                  return this.typedValue;
                },
                set: function set(t) {
                  this.typedValue = t;
                },
              },
              {
                key: 'typedValue',
                get: function get() {
                  return this.isComplete ? Xt(Yt(n.prototype), 'typedValue', this) : null;
                },
                set: function set(t) {
                  Qt(Yt(n.prototype), 'typedValue', t, this, !0);
                },
              },
            ]),
            n
          );
        })(Ae);

        (Se.DEFAULTS = {
          pattern: 'd{.}`m{.}`Y',
          format: function format(t) {
            return [
              String(t.getDate()).padStart(2, '0'),
              String(t.getMonth() + 1).padStart(2, '0'),
              t.getFullYear(),
            ].join('.');
          },
          parse: function parse(t) {
            var e = te(t.split('.'), 3),
              n = e[0],
              r = e[1],
              u = e[2];
            return new Date(u, r - 1, n);
          },
        }),
          (Se.GET_DEFAULT_BLOCKS = function () {
            return {
              d: {
                mask: Ee,
                from: 1,
                to: 31,
                maxLength: 2,
              },
              m: {
                mask: Ee,
                from: 1,
                to: 12,
                maxLength: 2,
              },
              Y: {
                mask: Ee,
                from: 1900,
                to: 9999,
              },
            };
          }),
          (de.MaskedDate = Se);

        var Fe = (function () {
          function t() {
            qt(this, t);
          }

          return (
            zt(t, [
              {
                key: 'selectionStart',
                get: function get() {
                  var t;

                  try {
                    t = this._unsafeSelectionStart;
                  } catch (t) {}

                  return null != t ? t : this.value.length;
                },
              },
              {
                key: 'selectionEnd',
                get: function get() {
                  var t;

                  try {
                    t = this._unsafeSelectionEnd;
                  } catch (t) {}

                  return null != t ? t : this.value.length;
                },
              },
              {
                key: 'select',
                value: function value(t, e) {
                  if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd))
                    try {
                      this._unsafeSelect(t, e);
                    } catch (t) {}
                },
              },
              {
                key: '_unsafeSelect',
                value: function value(t, e) {},
              },
              {
                key: 'isActive',
                get: function get() {
                  return !1;
                },
              },
              {
                key: 'bindEvents',
                value: function value(t) {},
              },
              {
                key: 'unbindEvents',
                value: function value() {},
              },
            ]),
            t
          );
        })();

        de.MaskElement = Fe;

        var De = (function (t) {
          Ht(n, t);
          var e = Gt(n);

          function n(t) {
            var r;
            return qt(this, n), ((r = e.call(this)).input = t), (r._handlers = {}), r;
          }

          return (
            zt(n, [
              {
                key: 'rootElement',
                get: function get() {
                  return this.input.getRootNode ? this.input.getRootNode() : document;
                },
              },
              {
                key: 'isActive',
                get: function get() {
                  return this.input === this.rootElement.activeElement;
                },
              },
              {
                key: '_unsafeSelectionStart',
                get: function get() {
                  return this.input.selectionStart;
                },
              },
              {
                key: '_unsafeSelectionEnd',
                get: function get() {
                  return this.input.selectionEnd;
                },
              },
              {
                key: '_unsafeSelect',
                value: function value(t, e) {
                  this.input.setSelectionRange(t, e);
                },
              },
              {
                key: 'value',
                get: function get() {
                  return this.input.value;
                },
                set: function set(t) {
                  this.input.value = t;
                },
              },
              {
                key: 'bindEvents',
                value: function value(t) {
                  var e = this;
                  Object.keys(t).forEach(function (r) {
                    return e._toggleEventHandler(n.EVENTS_MAP[r], t[r]);
                  });
                },
              },
              {
                key: 'unbindEvents',
                value: function value() {
                  var t = this;
                  Object.keys(this._handlers).forEach(function (e) {
                    return t._toggleEventHandler(e);
                  });
                },
              },
              {
                key: '_toggleEventHandler',
                value: function value(t, e) {
                  this._handlers[t] && (this.input.removeEventListener(t, this._handlers[t]), delete this._handlers[t]),
                    e && (this.input.addEventListener(t, e), (this._handlers[t] = e));
                },
              },
            ]),
            n
          );
        })(Fe);

        (De.EVENTS_MAP = {
          selectionChange: 'keydown',
          input: 'input',
          drop: 'drop',
          click: 'click',
          focus: 'focus',
          commit: 'blur',
        }),
          (de.HTMLMaskElement = De);

        var Be = (function (t) {
          Ht(n, t);
          var e = Gt(n);

          function n() {
            return qt(this, n), e.apply(this, arguments);
          }

          return (
            zt(n, [
              {
                key: '_unsafeSelectionStart',
                get: function get() {
                  var t = this.rootElement,
                    e = t.getSelection && t.getSelection();
                  return e && e.anchorOffset;
                },
              },
              {
                key: '_unsafeSelectionEnd',
                get: function get() {
                  var t = this.rootElement,
                    e = t.getSelection && t.getSelection();
                  return e && this._unsafeSelectionStart + String(e).length;
                },
              },
              {
                key: '_unsafeSelect',
                value: function value(t, e) {
                  if (this.rootElement.createRange) {
                    var n = this.rootElement.createRange();
                    n.setStart(this.input.firstChild || this.input, t), n.setEnd(this.input.lastChild || this.input, e);
                    var r = this.rootElement,
                      u = r.getSelection && r.getSelection();
                    u && (u.removeAllRanges(), u.addRange(n));
                  }
                },
              },
              {
                key: 'value',
                get: function get() {
                  return this.input.textContent;
                },
                set: function set(t) {
                  this.input.textContent = t;
                },
              },
            ]),
            n
          );
        })(De);

        de.HTMLContenteditableMaskElement = Be;

        var we = (function () {
          function t(e, n) {
            qt(this, t),
              (this.el =
                e instanceof Fe
                  ? e
                  : e.isContentEditable && 'INPUT' !== e.tagName && 'TEXTAREA' !== e.tagName
                  ? new Be(e)
                  : new De(e)),
              (this.masked = ge(n)),
              (this._listeners = {}),
              (this._value = ''),
              (this._unmaskedValue = ''),
              (this._saveSelection = this._saveSelection.bind(this)),
              (this._onInput = this._onInput.bind(this)),
              (this._onChange = this._onChange.bind(this)),
              (this._onDrop = this._onDrop.bind(this)),
              (this._onFocus = this._onFocus.bind(this)),
              (this._onClick = this._onClick.bind(this)),
              (this.alignCursor = this.alignCursor.bind(this)),
              (this.alignCursorFriendly = this.alignCursorFriendly.bind(this)),
              this._bindEvents(),
              this.updateValue(),
              this._onChange();
          }

          return (
            zt(t, [
              {
                key: 'mask',
                get: function get() {
                  return this.masked.mask;
                },
                set: function set(t) {
                  if (!this.maskEquals(t))
                    if (t instanceof de.Masked || this.masked.constructor !== ve(t)) {
                      var e = ge({
                        mask: t,
                      });
                      (e.unmaskedValue = this.masked.unmaskedValue), (this.masked = e);
                    } else
                      this.masked.updateOptions({
                        mask: t,
                      });
                },
              },
              {
                key: 'maskEquals',
                value: function value(t) {
                  return null == t || t === this.masked.mask || (t === Date && this.masked instanceof Se);
                },
              },
              {
                key: 'value',
                get: function get() {
                  return this._value;
                },
                set: function set(t) {
                  (this.masked.value = t), this.updateControl(), this.alignCursor();
                },
              },
              {
                key: 'unmaskedValue',
                get: function get() {
                  return this._unmaskedValue;
                },
                set: function set(t) {
                  (this.masked.unmaskedValue = t), this.updateControl(), this.alignCursor();
                },
              },
              {
                key: 'typedValue',
                get: function get() {
                  return this.masked.typedValue;
                },
                set: function set(t) {
                  (this.masked.typedValue = t), this.updateControl(), this.alignCursor();
                },
              },
              {
                key: '_bindEvents',
                value: function value() {
                  this.el.bindEvents({
                    selectionChange: this._saveSelection,
                    input: this._onInput,
                    drop: this._onDrop,
                    click: this._onClick,
                    focus: this._onFocus,
                    commit: this._onChange,
                  });
                },
              },
              {
                key: '_unbindEvents',
                value: function value() {
                  this.el && this.el.unbindEvents();
                },
              },
              {
                key: '_fireEvent',
                value: function value(t) {
                  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {
                    n[r - 1] = arguments[r];
                  }

                  var u = this._listeners[t];
                  u &&
                    u.forEach(function (t) {
                      return t.apply(void 0, n);
                    });
                },
              },
              {
                key: 'selectionStart',
                get: function get() {
                  return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
                },
              },
              {
                key: 'cursorPos',
                get: function get() {
                  return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
                },
                set: function set(t) {
                  this.el && this.el.isActive && (this.el.select(t, t), this._saveSelection());
                },
              },
              {
                key: '_saveSelection',
                value: function value() {
                  this.value !== this.el.value &&
                    console.warn(
                      'Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.',
                    ),
                    (this._selection = {
                      start: this.selectionStart,
                      end: this.cursorPos,
                    });
                },
              },
              {
                key: 'updateValue',
                value: function value() {
                  (this.masked.value = this.el.value), (this._value = this.masked.value);
                },
              },
              {
                key: 'updateControl',
                value: function value() {
                  var t = this.masked.unmaskedValue,
                    e = this.masked.value,
                    n = this.unmaskedValue !== t || this.value !== e;
                  (this._unmaskedValue = t),
                    (this._value = e),
                    this.el.value !== e && (this.el.value = e),
                    n && this._fireChangeEvents();
                },
              },
              {
                key: 'updateOptions',
                value: function value(t) {
                  var e = t.mask,
                    n = $t(t, ['mask']),
                    r = !this.maskEquals(e),
                    u = !(function t(e, n) {
                      if (n === e) return !0;
                      var r,
                        u = Array.isArray(n),
                        i = Array.isArray(e);

                      if (u && i) {
                        if (n.length != e.length) return !1;

                        for (r = 0; r < n.length; r++) {
                          if (!t(n[r], e[r])) return !1;
                        }

                        return !0;
                      }

                      if (u != i) return !1;

                      if (n && e && 'object' === Nt(n) && 'object' === Nt(e)) {
                        var a = n instanceof Date,
                          s = e instanceof Date;
                        if (a && s) return n.getTime() == e.getTime();
                        if (a != s) return !1;
                        var o = n instanceof RegExp,
                          l = e instanceof RegExp;
                        if (o && l) return n.toString() == e.toString();
                        if (o != l) return !1;
                        var h = Object.keys(n);

                        for (r = 0; r < h.length; r++) {
                          if (!Object.prototype.hasOwnProperty.call(e, h[r])) return !1;
                        }

                        for (r = 0; r < h.length; r++) {
                          if (!t(e[h[r]], n[h[r]])) return !1;
                        }

                        return !0;
                      }

                      return (
                        !(!n || !e || 'function' != typeof n || 'function' != typeof e) && n.toString() === e.toString()
                      );
                    })(this.masked, n);
                  r && (this.mask = e), u && this.masked.updateOptions(n), (r || u) && this.updateControl();
                },
              },
              {
                key: 'updateCursor',
                value: function value(t) {
                  null != t && ((this.cursorPos = t), this._delayUpdateCursor(t));
                },
              },
              {
                key: '_delayUpdateCursor',
                value: function value(t) {
                  var e = this;
                  this._abortUpdateCursor(),
                    (this._changingCursorPos = t),
                    (this._cursorChanging = setTimeout(function () {
                      e.el && ((e.cursorPos = e._changingCursorPos), e._abortUpdateCursor());
                    }, 10));
                },
              },
              {
                key: '_fireChangeEvents',
                value: function value() {
                  this._fireEvent('accept', this._inputEvent),
                    this.masked.isComplete && this._fireEvent('complete', this._inputEvent);
                },
              },
              {
                key: '_abortUpdateCursor',
                value: function value() {
                  this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
                },
              },
              {
                key: 'alignCursor',
                value: function value() {
                  this.cursorPos = this.masked.nearestInputPos(this.cursorPos, ue);
                },
              },
              {
                key: 'alignCursorFriendly',
                value: function value() {
                  this.selectionStart === this.cursorPos && this.alignCursor();
                },
              },
              {
                key: 'on',
                value: function value(t, e) {
                  return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this;
                },
              },
              {
                key: 'off',
                value: function value(t, e) {
                  if (!this._listeners[t]) return this;
                  if (!e) return delete this._listeners[t], this;

                  var n = this._listeners[t].indexOf(e);

                  return n >= 0 && this._listeners[t].splice(n, 1), this;
                },
              },
              {
                key: '_onInput',
                value: function value(t) {
                  if (((this._inputEvent = t), this._abortUpdateCursor(), !this._selection)) return this.updateValue();
                  var e = new he(this.el.value, this.cursorPos, this.value, this._selection),
                    n = this.masked.rawInputValue,
                    r = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection).offset,
                    u = n === this.masked.rawInputValue ? e.removeDirection : re,
                    i = this.masked.nearestInputPos(e.startChangePos + r, u);
                  this.updateControl(), this.updateCursor(i), delete this._inputEvent;
                },
              },
              {
                key: '_onChange',
                value: function value() {
                  this.value !== this.el.value && this.updateValue(),
                    this.masked.doCommit(),
                    this.updateControl(),
                    this._saveSelection();
                },
              },
              {
                key: '_onDrop',
                value: function value(t) {
                  t.preventDefault(), t.stopPropagation();
                },
              },
              {
                key: '_onFocus',
                value: function value(t) {
                  this.alignCursorFriendly();
                },
              },
              {
                key: '_onClick',
                value: function value(t) {
                  this.alignCursorFriendly();
                },
              },
              {
                key: 'destroy',
                value: function value() {
                  this._unbindEvents(), (this._listeners.length = 0), delete this.el;
                },
              },
            ]),
            t
          );
        })();

        de.InputMask = we;

        var Me = (function (t) {
          Ht(n, t);
          var e = Gt(n);

          function n() {
            return qt(this, n), e.apply(this, arguments);
          }

          return (
            zt(n, [
              {
                key: '_update',
                value: function value(t) {
                  t['enum'] && (t.mask = '*'.repeat(t['enum'][0].length)),
                    Xt(Yt(n.prototype), '_update', this).call(this, t);
                },
              },
              {
                key: 'doValidate',
                value: function value() {
                  for (var t, e = this, r = arguments.length, u = new Array(r), i = 0; i < r; i++) {
                    u[i] = arguments[i];
                  }

                  return (
                    this['enum'].some(function (t) {
                      return t.indexOf(e.unmaskedValue) >= 0;
                    }) && (t = Xt(Yt(n.prototype), 'doValidate', this)).call.apply(t, [this].concat(u))
                  );
                },
              },
            ]),
            n
          );
        })(Ae);

        de.MaskedEnum = Me;

        var xe = (function (t) {
          Ht(n, t);
          var e = Gt(n);

          function n(t) {
            return qt(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t));
          }

          return (
            zt(n, [
              {
                key: '_update',
                value: function value(t) {
                  Xt(Yt(n.prototype), '_update', this).call(this, t), this._updateRegExps();
                },
              },
              {
                key: '_updateRegExps',
                value: function value() {
                  var t = '^' + (this.allowNegative ? '[+|\\-]?' : ''),
                    e = (this.scale ? '(' + le(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
                  (this._numberRegExpInput = new RegExp(t + '(0|([1-9]+\\d*))?' + e)),
                    (this._numberRegExp = new RegExp(t + '\\d*' + e)),
                    (this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(le).join('') + ']', 'g')),
                    (this._thousandsSeparatorRegExp = new RegExp(le(this.thousandsSeparator), 'g'));
                },
              },
              {
                key: '_removeThousandsSeparators',
                value: function value(t) {
                  return t.replace(this._thousandsSeparatorRegExp, '');
                },
              },
              {
                key: '_insertThousandsSeparators',
                value: function value(t) {
                  var e = t.split(this.radix);
                  return (e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator)), e.join(this.radix);
                },
              },
              {
                key: 'doPrepare',
                value: function value(t) {
                  for (var e, r = arguments.length, u = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
                    u[i - 1] = arguments[i];
                  }

                  return (e = Xt(Yt(n.prototype), 'doPrepare', this)).call.apply(
                    e,
                    [this, this._removeThousandsSeparators(t.replace(this._mapToRadixRegExp, this.radix))].concat(u),
                  );
                },
              },
              {
                key: '_separatorsCount',
                value: function value(t) {
                  for (
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, r = 0;
                    r < t;
                    ++r
                  ) {
                    this._value.indexOf(this.thousandsSeparator, r) === r &&
                      (++n, e && (t += this.thousandsSeparator.length));
                  }

                  return n;
                },
              },
              {
                key: '_separatorsCountFromSlice',
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
                  return this._separatorsCount(this._removeThousandsSeparators(t).length, !0);
                },
              },
              {
                key: 'extractInput',
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    u = this._adjustRangeWithSeparators(t, e),
                    i = te(u, 2);

                  return (
                    (t = i[0]),
                    (e = i[1]),
                    this._removeThousandsSeparators(Xt(Yt(n.prototype), 'extractInput', this).call(this, t, e, r))
                  );
                },
              },
              {
                key: '_appendCharRaw',
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  if (!this.thousandsSeparator) return Xt(Yt(n.prototype), '_appendCharRaw', this).call(this, t, e);

                  var r = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
                    u = this._separatorsCountFromSlice(r);

                  this._value = this._removeThousandsSeparators(this.value);
                  var i = Xt(Yt(n.prototype), '_appendCharRaw', this).call(this, t, e);
                  this._value = this._insertThousandsSeparators(this._value);

                  var a = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
                    s = this._separatorsCountFromSlice(a);

                  return (
                    (i.tailShift += (s - u) * this.thousandsSeparator.length),
                    (i.skip = !i.rawInserted && t === this.thousandsSeparator),
                    i
                  );
                },
              },
              {
                key: '_findSeparatorAround',
                value: function value(t) {
                  if (this.thousandsSeparator) {
                    var e = t - this.thousandsSeparator.length + 1,
                      n = this.value.indexOf(this.thousandsSeparator, e);
                    if (n <= t) return n;
                  }

                  return -1;
                },
              },
              {
                key: '_adjustRangeWithSeparators',
                value: function value(t, e) {
                  var n = this._findSeparatorAround(t);

                  n >= 0 && (t = n);

                  var r = this._findSeparatorAround(e);

                  return r >= 0 && (e = r + this.thousandsSeparator.length), [t, e];
                },
              },
              {
                key: 'remove',
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    n = this._adjustRangeWithSeparators(t, e),
                    r = te(n, 2);

                  (t = r[0]), (e = r[1]);

                  var u = this.value.slice(0, t),
                    i = this.value.slice(e),
                    a = this._separatorsCount(u.length);

                  this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(u + i));

                  var s = this._separatorsCountFromSlice(u);

                  return new ce({
                    tailShift: (s - a) * this.thousandsSeparator.length,
                  });
                },
              },
              {
                key: 'nearestInputPos',
                value: function value(t, e) {
                  if (!this.thousandsSeparator) return t;

                  switch (e) {
                    case re:
                    case ue:
                    case ie:
                      var n = this._findSeparatorAround(t - 1);

                      if (n >= 0) {
                        var r = n + this.thousandsSeparator.length;
                        if (t < r || this.value.length <= r || e === ie) return n;
                      }

                      break;

                    case ae:
                    case se:
                      var u = this._findSeparatorAround(t);

                      if (u >= 0) return u + this.thousandsSeparator.length;
                  }

                  return t;
                },
              },
              {
                key: 'doValidate',
                value: function value(t) {
                  var e = (t.input ? this._numberRegExpInput : this._numberRegExp).test(
                    this._removeThousandsSeparators(this.value),
                  );

                  if (e) {
                    var r = this.number;
                    e =
                      e &&
                      !isNaN(r) &&
                      (null == this.min || this.min >= 0 || this.min <= this.number) &&
                      (null == this.max || this.max <= 0 || this.number <= this.max);
                  }

                  return e && Xt(Yt(n.prototype), 'doValidate', this).call(this, t);
                },
              },
              {
                key: 'doCommit',
                value: function value() {
                  if (this.value) {
                    var t = this.number,
                      e = t;
                    null != this.min && (e = Math.max(e, this.min)),
                      null != this.max && (e = Math.min(e, this.max)),
                      e !== t && (this.unmaskedValue = String(e));
                    var r = this.value;
                    this.normalizeZeros && (r = this._normalizeZeros(r)),
                      this.padFractionalZeros && (r = this._padFractionalZeros(r)),
                      (this._value = r);
                  }

                  Xt(Yt(n.prototype), 'doCommit', this).call(this);
                },
              },
              {
                key: '_normalizeZeros',
                value: function value(t) {
                  var e = this._removeThousandsSeparators(t).split(this.radix);

                  return (
                    (e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, function (t, e, n, r) {
                      return e + r;
                    })),
                    t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + '0'),
                    e.length > 1 && ((e[1] = e[1].replace(/0*$/, '')), e[1].length || (e.length = 1)),
                    this._insertThousandsSeparators(e.join(this.radix))
                  );
                },
              },
              {
                key: '_padFractionalZeros',
                value: function value(t) {
                  if (!t) return t;
                  var e = t.split(this.radix);
                  return e.length < 2 && e.push(''), (e[1] = e[1].padEnd(this.scale, '0')), e.join(this.radix);
                },
              },
              {
                key: 'unmaskedValue',
                get: function get() {
                  return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
                },
                set: function set(t) {
                  Qt(Yt(n.prototype), 'unmaskedValue', t.replace('.', this.radix), this, !0);
                },
              },
              {
                key: 'typedValue',
                get: function get() {
                  return Number(this.unmaskedValue);
                },
                set: function set(t) {
                  Qt(Yt(n.prototype), 'unmaskedValue', String(t), this, !0);
                },
              },
              {
                key: 'number',
                get: function get() {
                  return this.typedValue;
                },
                set: function set(t) {
                  this.typedValue = t;
                },
              },
              {
                key: 'allowNegative',
                get: function get() {
                  return this.signed || (null != this.min && this.min < 0) || (null != this.max && this.max < 0);
                },
              },
            ]),
            n
          );
        })(pe);

        (xe.DEFAULTS = {
          radix: ',',
          thousandsSeparator: '',
          mapToRadix: ['.'],
          scale: 2,
          signed: !1,
          normalizeZeros: !0,
          padFractionalZeros: !1,
        }),
          (de.MaskedNumber = xe);

        var Pe = (function (t) {
          Ht(n, t);
          var e = Gt(n);

          function n() {
            return qt(this, n), e.apply(this, arguments);
          }

          return (
            zt(n, [
              {
                key: '_update',
                value: function value(t) {
                  t.mask && (t.validate = t.mask), Xt(Yt(n.prototype), '_update', this).call(this, t);
                },
              },
            ]),
            n
          );
        })(pe);

        de.MaskedFunction = Pe;

        var Oe = (function (t) {
          Ht(n, t);
          var e = Gt(n);

          function n(t) {
            var r;
            return qt(this, n), ((r = e.call(this, Object.assign({}, n.DEFAULTS, t))).currentMask = null), r;
          }

          return (
            zt(n, [
              {
                key: '_update',
                value: function value(t) {
                  Xt(Yt(n.prototype), '_update', this).call(this, t),
                    'mask' in t &&
                      (this.compiledMasks = Array.isArray(t.mask)
                        ? t.mask.map(function (t) {
                            return ge(t);
                          })
                        : []);
                },
              },
              {
                key: '_appendCharRaw',
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = this._applyDispatch(t, e);

                  return this.currentMask && n.aggregate(this.currentMask._appendChar(t, e)), n;
                },
              },
              {
                key: '_applyDispatch',
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value,
                    r = this.rawInputValue,
                    u = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : r,
                    i = r.slice(u.length),
                    a = this.currentMask,
                    s = new ce(),
                    o = a && a.state;
                  if (((this.currentMask = this.doDispatch(t, Object.assign({}, e))), this.currentMask))
                    if (this.currentMask !== a) {
                      if ((this.currentMask.reset(), u)) {
                        var l = this.currentMask.append(u, {
                          raw: !0,
                        });
                        s.tailShift = l.inserted.length - n.length;
                      }

                      i &&
                        (s.tailShift += this.currentMask.append(i, {
                          raw: !0,
                          tail: !0,
                        }).tailShift);
                    } else this.currentMask.state = o;
                  return s;
                },
              },
              {
                key: '_appendPlaceholder',
                value: function value() {
                  var t = this._applyDispatch.apply(this, arguments);

                  return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t;
                },
              },
              {
                key: 'doDispatch',
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return this.dispatch(t, this, e);
                },
              },
              {
                key: 'doValidate',
                value: function value() {
                  for (var t, e, r = arguments.length, u = new Array(r), i = 0; i < r; i++) {
                    u[i] = arguments[i];
                  }

                  return (
                    (t = Xt(Yt(n.prototype), 'doValidate', this)).call.apply(t, [this].concat(u)) &&
                    (!this.currentMask || (e = this.currentMask).doValidate.apply(e, u))
                  );
                },
              },
              {
                key: 'reset',
                value: function value() {
                  this.currentMask && this.currentMask.reset(),
                    this.compiledMasks.forEach(function (t) {
                      return t.reset();
                    });
                },
              },
              {
                key: 'value',
                get: function get() {
                  return this.currentMask ? this.currentMask.value : '';
                },
                set: function set(t) {
                  Qt(Yt(n.prototype), 'value', t, this, !0);
                },
              },
              {
                key: 'unmaskedValue',
                get: function get() {
                  return this.currentMask ? this.currentMask.unmaskedValue : '';
                },
                set: function set(t) {
                  Qt(Yt(n.prototype), 'unmaskedValue', t, this, !0);
                },
              },
              {
                key: 'typedValue',
                get: function get() {
                  return this.currentMask ? this.currentMask.typedValue : '';
                },
                set: function set(t) {
                  var e = String(t);
                  this.currentMask && ((this.currentMask.typedValue = t), (e = this.currentMask.unmaskedValue)),
                    (this.unmaskedValue = e);
                },
              },
              {
                key: 'isComplete',
                get: function get() {
                  return !!this.currentMask && this.currentMask.isComplete;
                },
              },
              {
                key: 'remove',
                value: function value() {
                  var t,
                    e = new ce();
                  return (
                    this.currentMask &&
                      e.aggregate((t = this.currentMask).remove.apply(t, arguments)).aggregate(this._applyDispatch()),
                    e
                  );
                },
              },
              {
                key: 'state',
                get: function get() {
                  return Object.assign({}, Xt(Yt(n.prototype), 'state', this), {
                    _rawInputValue: this.rawInputValue,
                    compiledMasks: this.compiledMasks.map(function (t) {
                      return t.state;
                    }),
                    currentMaskRef: this.currentMask,
                    currentMask: this.currentMask && this.currentMask.state,
                  });
                },
                set: function set(t) {
                  var e = t.compiledMasks,
                    r = t.currentMaskRef,
                    u = t.currentMask,
                    i = $t(t, ['compiledMasks', 'currentMaskRef', 'currentMask']);
                  this.compiledMasks.forEach(function (t, n) {
                    return (t.state = e[n]);
                  }),
                    null != r && ((this.currentMask = r), (this.currentMask.state = u)),
                    Qt(Yt(n.prototype), 'state', i, this, !0);
                },
              },
              {
                key: 'extractInput',
                value: function value() {
                  var t;
                  return this.currentMask ? (t = this.currentMask).extractInput.apply(t, arguments) : '';
                },
              },
              {
                key: 'extractTail',
                value: function value() {
                  for (var t, e, r = arguments.length, u = new Array(r), i = 0; i < r; i++) {
                    u[i] = arguments[i];
                  }

                  return this.currentMask
                    ? (t = this.currentMask).extractTail.apply(t, u)
                    : (e = Xt(Yt(n.prototype), 'extractTail', this)).call.apply(e, [this].concat(u));
                },
              },
              {
                key: 'doCommit',
                value: function value() {
                  this.currentMask && this.currentMask.doCommit(), Xt(Yt(n.prototype), 'doCommit', this).call(this);
                },
              },
              {
                key: 'nearestInputPos',
                value: function value() {
                  for (var t, e, r = arguments.length, u = new Array(r), i = 0; i < r; i++) {
                    u[i] = arguments[i];
                  }

                  return this.currentMask
                    ? (t = this.currentMask).nearestInputPos.apply(t, u)
                    : (e = Xt(Yt(n.prototype), 'nearestInputPos', this)).call.apply(e, [this].concat(u));
                },
              },
              {
                key: 'overwrite',
                get: function get() {
                  return this.currentMask ? this.currentMask.overwrite : Xt(Yt(n.prototype), 'overwrite', this);
                },
                set: function set(t) {
                  console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
                },
              },
            ]),
            n
          );
        })(pe);

        (Oe.DEFAULTS = {
          dispatch: function dispatch(t, e, n) {
            if (e.compiledMasks.length) {
              var r = e.rawInputValue,
                u = e.compiledMasks.map(function (e, u) {
                  return (
                    e.reset(),
                    e.append(r, {
                      raw: !0,
                    }),
                    e.append(t, n),
                    {
                      weight: e.rawInputValue.length,
                      index: u,
                    }
                  );
                });
              return (
                u.sort(function (t, e) {
                  return e.weight - t.weight;
                }),
                e.compiledMasks[u[0].index]
              );
            }
          },
        }),
          (de.MaskedDynamic = Oe);
        var Te = {
          MASKED: 'value',
          UNMASKED: 'unmaskedValue',
          TYPED: 'typedValue',
        };

        function Ie(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Te.MASKED,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Te.MASKED,
            r = ge(t);
          return function (t) {
            return r.runIsolated(function (r) {
              return (r[e] = t), r[n];
            });
          };
        }

        function je(t) {
          for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {
            n[r - 1] = arguments[r];
          }

          return Ie.apply(void 0, n)(t);
        }

        (de.PIPE_TYPE = Te), (de.createPipe = Ie), (de.pipe = je);

        try {
          globalThis.IMask = de;
        } catch (t) {}

        (e.HTMLContenteditableMaskElement = Be),
          (e.HTMLMaskElement = De),
          (e.InputMask = we),
          (e.MaskElement = Fe),
          (e.Masked = pe),
          (e.MaskedDate = Se),
          (e.MaskedDynamic = Oe),
          (e.MaskedEnum = Me),
          (e.MaskedFunction = Pe),
          (e.MaskedNumber = xe),
          (e.MaskedPattern = Ae),
          (e.MaskedRange = Ee),
          (e.MaskedRegExp = be),
          (e.PIPE_TYPE = Te),
          (e.createMask = ge),
          (e.createPipe = Ie),
          (e['default'] = de),
          (e.pipe = je),
          Object.defineProperty(e, '__esModule', {
            value: !0,
          });
      })(e);
    }.call(this, n(2)));
  },
  function (t, e) {
    window.onscroll = function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop,
        e = document.querySelector('.header'),
        n = document.querySelector('.page-up');
      t > 2 * e.clientHeight ? e.classList.add('_transform') : e.classList.remove('_transform'),
        t > window.innerHeight - e.clientHeight ? e.classList.add('_visible') : e.classList.remove('_visible'),
        t > 1.5 * window.innerHeight ? n.classList.remove('_disabled') : n.classList.add('_disabled');
    };
  },
  function (t, e) {
    var n;

    n = (function () {
      return this;
    })();

    try {
      n = n || new Function('return this')();
    } catch (t) {
      'object' == (typeof window === 'undefined' ? 'undefined' : _typeof(window)) && (n = window);
    }

    t.exports = n;
  },
  function (t, e, n) {
    'use strict';

    n.r(e);
    n(1);
    var r = document.querySelector('.thanks'),
      u = r.querySelector('.thanks__close'),
      i = document.querySelector('.overlay');
    u.addEventListener('click', function () {
      i.classList.add('_disabled'), r.classList.add('_disabled');
    });

    var a = function a(t) {
        (r.querySelector('.thanks__title').innerHTML = t),
          i.classList.remove('_disabled'),
          r.classList.remove('_disabled');
      },
      s = n(0),
      o = n.n(s);

    function l(t, e) {
      var n = document.getElementsByName(t),
        r = document.getElementById(e);
      n.forEach(function (t) {
        t.addEventListener('click', function () {
          'true' === t.value
            ? (r.classList.remove('_disabled'), (r.lastElementChild.disabled = !1))
            : (r.classList.add('_disabled'), (r.lastElementChild.value = ''), (r.lastElementChild.disabled = !0));
        });
      });
    }

    var h = document.querySelector('.menu__icon'),
      c = document.querySelector('.menu__body');
    h.addEventListener('click', function () {
      document.body.classList.toggle('_look'), h.classList.toggle('_active'), c.classList.toggle('_active');
    });
    document.querySelectorAll('._scroll-goto[data-goto]').forEach(function (t) {
      t.addEventListener('click', function (e) {
        e.preventDefault(),
          t.dataset['goto'] &&
            document.querySelector(t.dataset['goto']) &&
            window.scrollTo({
              top: document.querySelector(t.dataset['goto']).offsetTop,
              behavior: 'smooth',
            }),
          document.body.classList.remove('_look'),
          h.classList.remove('_active'),
          c.classList.remove('_active');
      });
    });
    document.querySelectorAll('.gallery__like').forEach(function (t) {
      var e = t,
        n = t.nextElementSibling;
      (n.innerHTML = 1 + Math.floor(11 * Math.random())),
        console.log(n.textContent),
        e.addEventListener('click', function (t) {
          t.preventDefault(),
            e.classList.contains('icon-heart-transparent')
              ? (e.classList.remove('icon-heart-transparent'),
                e.classList.add('icon-heart-solid'),
                (n.innerHTML = +n.textContent + 1))
              : (e.classList.remove('icon-heart-solid'),
                e.classList.add('icon-heart-transparent'),
                (n.innerHTML = +n.textContent - 1));
        });
    });
    var f = document.getElementById('guestCard'),
      d = o()(document.getElementById('guestPhone'), {
        mask: '+7 (000) 000-00-00',
      }),
      p = o()(document.getElementById('numOfChildren'), {
        mask: Number,
        min: 0,
      });
    f.addEventListener('submit', function (t) {
      t.preventDefault();

      var e = t.target,
        n = (function (t) {
          var e = t.querySelectorAll('input'),
            n = t.querySelectorAll('select'),
            r = {};
          return (
            e.length > 0 &&
              e.forEach(function (t) {
                'radio' === t.type ? !0 === t.checked && (r[t.name] = t.value) : (r[t.name] = t.value);
              }),
            n.length > 0 &&
              n.forEach(function (t) {
                r[t.name] = t.value;
              }),
            r
          );
        })(e),
        r = ''.concat(n.firstname, ' ').concat(n.secondname);

      (e.querySelector('button[type="submit"]').disabled = !0),
        (function (t) {
          var e = t.querySelector('button[type="submit"]');
          t.reset(),
            t.querySelector('#blockAlcoholType').classList.add('_disabled'),
            t.querySelector('#blockNumOfChildren').classList.add('_disabled'),
            (e.disabled = !1);
        })(e),
        d.updateValue(),
        p.updateValue(),
        a(r);
    }),
      l('children', 'blockNumOfChildren'),
      l('drink', 'blockAlcoholType');
  },
]);
