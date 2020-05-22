var  n814= function(){
    var n, r;
    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    r = {
        rotl: function(e, t) {
            return e << t | e >>> 32 - t
        },
        rotr: function(e, t) {
            return e << 32 - t | e >>> t
        },
        endian: function(e) {
            if (e.constructor == Number)
                return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
            for (var t = 0; t < e.length; t++)
                e[t] = r.endian(e[t]);
            return e
        },
        randomBytes: function(e) {
            for (var t = []; e > 0; e--)
                t.push(Math.floor(256 * Math.random()));
            return t
        },
        bytesToWords: function(e) {
            for (var t = [], n = 0, r = 0; n < e.length; n++,
            r += 8)
                t[r >>> 5] |= e[n] << 24 - r % 32;
            return t
        },
        wordsToBytes: function(e) {
            for (var t = [], n = 0; n < 32 * e.length; n += 8)
                t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
            return t
        },
        bytesToHex: function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                t.push((e[n] >>> 4).toString(16)),
                t.push((15 & e[n]).toString(16));
            return t.join("")
        },
        hexToBytes: function(e) {
            for (var t = [], n = 0; n < e.length; n += 2)
                t.push(parseInt(e.substr(n, 2), 16));
            return t
        },
        bytesToBase64: function(e) {
            for (var t = [], r = 0; r < e.length; r += 3)
                for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], a = 0; a < 4; a++)
                    8 * r + 6 * a <= 8 * e.length ? t.push(n.charAt(o >>> 6 * (3 - a) & 63)) : t.push("=");
            return t.join("")
        },
        base64ToBytes: function(e) {
            e = e.replace(/[^A-Z0-9+\/]/gi, "");
            for (var t = [], r = 0, o = 0; r < e.length; o = ++r % 4)
                0 != o && t.push((n.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | n.indexOf(e.charAt(r)) >>> 6 - 2 * o);
            return t
        }
    }
    return r
}();


var n357 = function(){
    var n = {
        utf8: {
            stringToBytes: function(e) {
                return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(n.bin.bytesToString(e)))
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.push(255 & e.charCodeAt(n));
                return t
            },
            bytesToString: function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.push(String.fromCharCode(e[n]));
                return t.join("")
            }
        }
    };
    return n
}();

var n815=function(){
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    return function(e) {
        return null != e && (n(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}();

var r, o, a, i, s;
r =  n814,

o = n357.utf8,

a = n815,

i = n357.bin,
(s = function(e, t) {
    e.constructor == String ? e = t && "binary" === t.encoding ? i.stringToBytes(e) : o.stringToBytes(e) : a(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
    for (var n = r.bytesToWords(e), u = 8 * e.length, c = 1732584193, l = -271733879, f = -1732584194, d = 271733878, p = 0; p < n.length; p++)
        n[p] = 16711935 & (n[p] << 8 | n[p] >>> 24) | 4278255360 & (n[p] << 24 | n[p] >>> 8);
    n[u >>> 5] |= 128 << u % 32,
    n[14 + (u + 64 >>> 9 << 4)] = u;
    var h = s._ff
      , m = s._gg
      , _ = s._hh
      , y = s._ii;
    for (p = 0; p < n.length; p += 16) {
        var v = c
          , g = l
          , b = f
          , w = d;
        l = y(l = y(l = y(l = y(l = _(l = _(l = _(l = _(l = m(l = m(l = m(l = m(l = h(l = h(l = h(l = h(l, f = h(f, d = h(d, c = h(c, l, f, d, n[p + 0], 7, -680876936), l, f, n[p + 1], 12, -389564586), c, l, n[p + 2], 17, 606105819), d, c, n[p + 3], 22, -1044525330), f = h(f, d = h(d, c = h(c, l, f, d, n[p + 4], 7, -176418897), l, f, n[p + 5], 12, 1200080426), c, l, n[p + 6], 17, -1473231341), d, c, n[p + 7], 22, -45705983), f = h(f, d = h(d, c = h(c, l, f, d, n[p + 8], 7, 1770035416), l, f, n[p + 9], 12, -1958414417), c, l, n[p + 10], 17, -42063), d, c, n[p + 11], 22, -1990404162), f = h(f, d = h(d, c = h(c, l, f, d, n[p + 12], 7, 1804603682), l, f, n[p + 13], 12, -40341101), c, l, n[p + 14], 17, -1502002290), d, c, n[p + 15], 22, 1236535329), f = m(f, d = m(d, c = m(c, l, f, d, n[p + 1], 5, -165796510), l, f, n[p + 6], 9, -1069501632), c, l, n[p + 11], 14, 643717713), d, c, n[p + 0], 20, -373897302), f = m(f, d = m(d, c = m(c, l, f, d, n[p + 5], 5, -701558691), l, f, n[p + 10], 9, 38016083), c, l, n[p + 15], 14, -660478335), d, c, n[p + 4], 20, -405537848), f = m(f, d = m(d, c = m(c, l, f, d, n[p + 9], 5, 568446438), l, f, n[p + 14], 9, -1019803690), c, l, n[p + 3], 14, -187363961), d, c, n[p + 8], 20, 1163531501), f = m(f, d = m(d, c = m(c, l, f, d, n[p + 13], 5, -1444681467), l, f, n[p + 2], 9, -51403784), c, l, n[p + 7], 14, 1735328473), d, c, n[p + 12], 20, -1926607734), f = _(f, d = _(d, c = _(c, l, f, d, n[p + 5], 4, -378558), l, f, n[p + 8], 11, -2022574463), c, l, n[p + 11], 16, 1839030562), d, c, n[p + 14], 23, -35309556), f = _(f, d = _(d, c = _(c, l, f, d, n[p + 1], 4, -1530992060), l, f, n[p + 4], 11, 1272893353), c, l, n[p + 7], 16, -155497632), d, c, n[p + 10], 23, -1094730640), f = _(f, d = _(d, c = _(c, l, f, d, n[p + 13], 4, 681279174), l, f, n[p + 0], 11, -358537222), c, l, n[p + 3], 16, -722521979), d, c, n[p + 6], 23, 76029189), f = _(f, d = _(d, c = _(c, l, f, d, n[p + 9], 4, -640364487), l, f, n[p + 12], 11, -421815835), c, l, n[p + 15], 16, 530742520), d, c, n[p + 2], 23, -995338651), f = y(f, d = y(d, c = y(c, l, f, d, n[p + 0], 6, -198630844), l, f, n[p + 7], 10, 1126891415), c, l, n[p + 14], 15, -1416354905), d, c, n[p + 5], 21, -57434055), f = y(f, d = y(d, c = y(c, l, f, d, n[p + 12], 6, 1700485571), l, f, n[p + 3], 10, -1894986606), c, l, n[p + 10], 15, -1051523), d, c, n[p + 1], 21, -2054922799), f = y(f, d = y(d, c = y(c, l, f, d, n[p + 8], 6, 1873313359), l, f, n[p + 15], 10, -30611744), c, l, n[p + 6], 15, -1560198380), d, c, n[p + 13], 21, 1309151649), f = y(f, d = y(d, c = y(c, l, f, d, n[p + 4], 6, -145523070), l, f, n[p + 11], 10, -1120210379), c, l, n[p + 2], 15, 718787259), d, c, n[p + 9], 21, -343485551),
        c = c + v >>> 0,
        l = l + g >>> 0,
        f = f + b >>> 0,
        d = d + w >>> 0
    }
    return r.endian([c, l, f, d])
}
)._ff = function(e, t, n, r, o, a, i) {
    var s = e + (t & n | ~t & r) + (o >>> 0) + i;
    return (s << a | s >>> 32 - a) + t
}
,
s._gg = function(e, t, n, r, o, a, i) {
    var s = e + (t & r | n & ~r) + (o >>> 0) + i;
    return (s << a | s >>> 32 - a) + t
}
,
s._hh = function(e, t, n, r, o, a, i) {
    var s = e + (t ^ n ^ r) + (o >>> 0) + i;
    return (s << a | s >>> 32 - a) + t
}
,
s._ii = function(e, t, n, r, o, a, i) {
    var s = e + (n ^ (t | ~r)) + (o >>> 0) + i;
    return (s << a | s >>> 32 - a) + t
}
,
s._blocksize = 16,
s._digestsize = 16,
MD5 = function(e, t) {
    if (void 0 === e || null === e)
        throw new Error("Illegal argument " + e);
    var n = r.wordsToBytes(s(e, t));
    return t && t.asBytes ? n : t && t.asString ? i.bytesToString(n) : r.bytesToHex(n)
}
console.log(MD5("123456"))
