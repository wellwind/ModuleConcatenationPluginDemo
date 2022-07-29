(() => {
  'use strict';
  var o,
    r,
    e = {
      662: (o, r, e) => {
        function t() {
          return 'A';
        }
        e.d(r, { f: () => t });
      },
      548: (o, r, e) => {
        function t() {
          return 'B';
        }
        e.d(r, { k: () => t });
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var c = (t[o] = { exports: {} });
    return e[o](c, c.exports, n), c.exports;
  }
  (n.d = (o, r) => {
    for (var e in r) n.o(r, e) && !n.o(o, e) && Object.defineProperty(o, e, { enumerable: !0, get: r[e] });
  }),
    (n.o = (o, r) => Object.prototype.hasOwnProperty.call(o, r)),
    (o = n(662)),
    (r = n(548)),
    console.log((0, o.f)()),
    console.log((0, r.k)()),
    console.log((0, r.k)());
})();
