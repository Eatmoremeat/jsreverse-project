
!function (e, t) {
    "use strict";
    "undefined" != typeof window && "function" == typeof define && define.amd ? define(t) : "undefined" != typeof module && module.exports ? module.exports = t() : e.exports ? e.exports = t() : e.recognition = t()
}
(this, function () {
    "use strict";
    function u(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var r = [0, 0, 0, 0];
        return r[3] += e[3] + t[3],
        r[2] += r[3] >>> 16,
        r[3] &= 65535,
        r[2] += e[2] + t[2],
        r[1] += r[2] >>> 16,
        r[2] &= 65535,
        r[1] += e[1] + t[1],
        r[0] += r[1] >>> 16,
        r[1] &= 65535,
        r[0] += e[0] + t[0],
        r[0] &= 65535,
        [r[0] << 16 | r[1], r[2] << 16 | r[3]]
    }
    function d(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var r = [0, 0, 0, 0];
        return r[3] += e[3] * t[3],
        r[2] += r[3] >>> 16,
        r[3] &= 65535,
        r[2] += e[2] * t[3],
        r[1] += r[2] >>> 16,
        r[2] &= 65535,
        r[2] += e[3] * t[2],
        r[1] += r[2] >>> 16,
        r[2] &= 65535,
        r[1] += e[1] * t[3],
        r[0] += r[1] >>> 16,
        r[1] &= 65535,
        r[1] += e[2] * t[2],
        r[0] += r[1] >>> 16,
        r[1] &= 65535,
        r[1] += e[3] * t[1],
        r[0] += r[1] >>> 16,
        r[1] &= 65535,
        r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
        r[0] &= 65535,
        [r[0] << 16 | r[1], r[2] << 16 | r[3]]
    }
    function f(e, t) {
        return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
            [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
    }
    function p(e, t) {
        return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
    }
    function g(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
    }
    function A(e) {
        return e = g(e, [0, e[0] >>> 1]),
        e = d(e, [4283543511, 3981806797]),
        e = g(e, [0, e[0] >>> 1]),
        e = d(e, [3301882366, 444984403]),
        e = g(e, [0, e[0] >>> 1])
    }
    function s(e, t) {
        t = t || 0;
        for (var r = (e = e || "").length % 16, i = e.length - r, n = [0, t], a = [0, t], o = [0, 0], s = [0, 0], h = [2277735313, 289559509], l = [1291169091, 658871167], c = 0; c < i; c += 16)
            o = [255 & e.charCodeAt(c + 4) | (255 & e.charCodeAt(c + 5)) << 8 | (255 & e.charCodeAt(c + 6)) << 16 | (255 & e.charCodeAt(c + 7)) << 24, 255 & e.charCodeAt(c) | (255 & e.charCodeAt(c + 1)) << 8 | (255 & e.charCodeAt(c + 2)) << 16 | (255 & e.charCodeAt(c + 3)) << 24],
            s = [255 & e.charCodeAt(c + 12) | (255 & e.charCodeAt(c + 13)) << 8 | (255 & e.charCodeAt(c + 14)) << 16 | (255 & e.charCodeAt(c + 15)) << 24, 255 & e.charCodeAt(c + 8) | (255 & e.charCodeAt(c + 9)) << 8 | (255 & e.charCodeAt(c + 10)) << 16 | (255 & e.charCodeAt(c + 11)) << 24],
            o = d(o, h),
            o = f(o, 31),
            o = d(o, l),
            n = g(n, o),
            n = f(n, 27),
            n = u(n, a),
            n = u(d(n, [0, 5]), [0, 1390208809]),
            s = d(s, l),
            s = f(s, 33),
            s = d(s, h),
            a = g(a, s),
            a = f(a, 31),
            a = u(a, n),
            a = u(d(a, [0, 5]), [0, 944331445]);
        switch (o = [0, 0],
            s = [0, 0],
            r) {
        case 15:
            s = g(s, p([0, e.charCodeAt(c + 14)], 48));
        case 14:
            s = g(s, p([0, e.charCodeAt(c + 13)], 40));
        case 13:
            s = g(s, p([0, e.charCodeAt(c + 12)], 32));
        case 12:
            s = g(s, p([0, e.charCodeAt(c + 11)], 24));
        case 11:
            s = g(s, p([0, e.charCodeAt(c + 10)], 16));
        case 10:
            s = g(s, p([0, e.charCodeAt(c + 9)], 8));
        case 9:
            s = g(s, [0, e.charCodeAt(c + 8)]),
            s = d(s, l),
            s = f(s, 33),
            s = d(s, h),
            a = g(a, s);
        case 8:
            o = g(o, p([0, e.charCodeAt(c + 7)], 56));
        case 7:
            o = g(o, p([0, e.charCodeAt(c + 6)], 48));
        case 6:
            o = g(o, p([0, e.charCodeAt(c + 5)], 40));
        case 5:
            o = g(o, p([0, e.charCodeAt(c + 4)], 32));
        case 4:
            o = g(o, p([0, e.charCodeAt(c + 3)], 24));
        case 3:
            o = g(o, p([0, e.charCodeAt(c + 2)], 16));
        case 2:
            o = g(o, p([0, e.charCodeAt(c + 1)], 8));
        case 1:
            o = g(o, [0, e.charCodeAt(c)]),
            o = d(o, h),
            o = f(o, 31),
            o = d(o, l),
            n = g(n, o)
        }
        return n = g(n, [0, e.length]),
        a = g(a, [0, e.length]),
        n = u(n, a),
        a = u(a, n),
        n = A(n),
        a = A(a),
        n = u(n, a),
        a = u(a, n),
        ("00000000" + (n[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (n[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
    }
    function l(e, t) {
        if (Array.prototype.forEach && e.forEach === Array.prototype.forEach)
            e.forEach(t);
        else if (e.length === +e.length)
            for (var r = 0, i = e.length; r < i; r++)
                t(e[r], r, e);
        else
            for (var n in e)
                e.hasOwnProperty(n) && t(e[n], n, e)
    }
    function h(e, i) {
        var n = [];
        return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(i) : (l(e, function (e, t, r) {
                n.push(i(e, t, r))
            }),
            n)
    }
    function i(e) {
        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
    }
    var e = {
        preprocessor: null,
        audio: {
            timeout: 1e3,
            excludeIOS11: !0
        },
        fonts: {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            userDefinedFonts: [],
            extendedJsFonts: !1
        },
        screen: {
            detectScreenOrientation: !0
        },
        plugins: {
            sortPluginsFor: [/palemoon/i],
            excludeIE: !1
        },
        extraComponents: [],
        excludes: {
            enumerateDevices: !0,
            pixelRatio: !0,
            doNotTrack: !0,
            fontsFlash: !0
        },
        NOT_AVAILABLE: "not available",
        ERROR: "error",
        EXCLUDED: "excluded"
    },
    r = function () {
        return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
    },
    n = function (e) {
        var t = [window.screen.width, window.screen.height];
        return e.screen.detectScreenOrientation && t.sort().reverse(),
        t
    },
    a = function (e) {
        if (window.screen.availWidth && window.screen.availHeight) {
            var t = [window.screen.availHeight, window.screen.availWidth];
            return e.screen.detectScreenOrientation && t.sort().reverse(),
            t
        }
        return e.NOT_AVAILABLE
    },
    o = function (e) {
        if (null == navigator.plugins)
            return e.NOT_AVAILABLE;
        for (var t = [], r = 0, i = navigator.plugins.length; r < i; r++)
            navigator.plugins[r] && t.push(navigator.plugins[r]);
        return S(e) && (t = t.sort(function (e, t) {
                    return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                })),
        h(t, function (e) {
            var t = h(e, function (e) {
                    return [e.type, e.suffixes]
                });
            return [e.name, e.description, t]
        })
    },
    c = function (t) {
        var e = [];
        if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
            e = h(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function (e) {
                    try {
                        return new window.ActiveXObject(e),
                        e
                    } catch (e) {
                        return t.ERROR
                    }
                })
        } else
            e.push(t.NOT_AVAILABLE);
        return navigator.plugins && (e = e.concat(o(t))),
        e
    },
    S = function (e) {
        for (var t = !1, r = 0, i = e.plugins.sortPluginsFor.length; r < i; r++) {
            var n = e.plugins.sortPluginsFor[r];
            if (navigator.userAgent.match(n)) {
                t = !0;
                break
            }
        }
        return t
    },
    m = function (t) {
        try {
            return !!window.sessionStorage
        } catch (e) {
            return t.ERROR
        }
    },
    y = function (t) {
        try {
            return !!window.localStorage
        } catch (e) {
            return t.ERROR
        }
    },
    T = function (t) {
        try {
            return !!window.indexedDB
        } catch (e) {
            return t.ERROR
        }
    },
    E = function (e) {
        return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
    },
    v = function (e) {
        return navigator.cpuClass || e.NOT_AVAILABLE
    },
    C = function (e) {
        return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
    },
    w = function (e) {
        return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
    },
    t = function () {
        var t,
        e = 0;
        void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
        try {
            document.createEvent("TouchEvent"),
            t = !0
        } catch (e) {
            t = !1
        }
        return [e, t, "ontouchstart" in window]
    },
    B = function (e) {
        var t = [],
        r = document.createElement("canvas");
        r.width = 2e3,
        r.height = 200,
        r.style.display = "inline";
        var i = r.getContext("2d");
        return i.rect(0, 0, 10, 10),
        i.rect(2, 2, 6, 6),
        t.push("canvas winding:" + (!1 === i.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
        i.textBaseline = "alphabetic",
        i.fillStyle = "#f60",
        i.fillRect(125, 1, 62, 20),
        i.fillStyle = "#069",
        e.dontUseFakeFontInCanvas ? i.font = "11pt Arial" : i.font = "11pt no-real-font-123",
        i.fillText("Cwm fjordbank glyphs vext quiz, ??", 2, 15),
        i.fillStyle = "rgba(102, 204, 0, 0.2)",
        i.font = "18pt Arial",
        i.fillText("Cwm fjordbank glyphs vext quiz, ??", 4, 45),
        i.globalCompositeOperation = "multiply",
        i.fillStyle = "rgb(255,0,255)",
        i.beginPath(),
        i.arc(50, 50, 50, 0, 2 * Math.PI, !0),
        i.closePath(),
        i.fill(),
        i.fillStyle = "rgb(0,255,255)",
        i.beginPath(),
        i.arc(100, 50, 50, 0, 2 * Math.PI, !0),
        i.closePath(),
        i.fill(),
        i.fillStyle = "rgb(255,255,0)",
        i.beginPath(),
        i.arc(75, 100, 50, 0, 2 * Math.PI, !0),
        i.closePath(),
        i.fill(),
        i.fillStyle = "rgb(255,0,255)",
        i.arc(75, 75, 75, 0, 2 * Math.PI, !0),
        i.arc(75, 75, 25, 0, 2 * Math.PI, !0),
        i.fill("evenodd"),
        r.toDataURL && t.push("canvas fp:" + r.toDataURL()),
        t
    },
    R = function () {
        function e(e) {
            return o.clearColor(0, 0, 0, 1),
            o.enable(o.DEPTH_TEST),
            o.depthFunc(o.LEQUAL),
            o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT),
            "[" + e[0] + ", " + e[1] + "]"
        }
        var o;
        if (!(o = U()))
            return null;
        var s = [],
        t = o.createBuffer();
        o.bindBuffer(o.ARRAY_BUFFER, t);
        var r = new Float32Array([ - .2,  - .9, 0, .4,  - .26, 0, 0, .732134444, 0]);
        o.bufferData(o.ARRAY_BUFFER, r, o.STATIC_DRAW),
        t.itemSize = 3,
        t.numItems = 3;
        var i = o.createProgram(),
        n = o.createShader(o.VERTEX_SHADER);
        o.shaderSource(n, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),
        o.compileShader(n);
        var a = o.createShader(o.FRAGMENT_SHADER);
        o.shaderSource(a, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),
        o.compileShader(a),
        o.attachShader(i, n),
        o.attachShader(i, a),
        o.linkProgram(i),
        o.useProgram(i),
        i.vertexPosAttrib = o.getAttribLocation(i, "attrVertex"),
        i.offsetUniform = o.getUniformLocation(i, "uniformOffset"),
        o.enableVertexAttribArray(i.vertexPosArray),
        o.vertexAttribPointer(i.vertexPosAttrib, t.itemSize, o.FLOAT, !1, 0, 0),
        o.uniform2f(i.offsetUniform, 1, 1),
        o.drawArrays(o.TRIANGLE_STRIP, 0, t.numItems);
        try {
            s.push(o.canvas.toDataURL())
        } catch (e) {}
        s.push("extensions:" + (o.getSupportedExtensions() || []).join(";")),
        s.push("webgl aliased line width range:" + e(o.getParameter(o.ALIASED_LINE_WIDTH_RANGE))),
        s.push("webgl aliased point size range:" + e(o.getParameter(o.ALIASED_POINT_SIZE_RANGE))),
        s.push("webgl alpha bits:" + o.getParameter(o.ALPHA_BITS)),
        s.push("webgl antialiasing:" + (o.getContextAttributes().antialias ? "yes" : "no")),
        s.push("webgl blue bits:" + o.getParameter(o.BLUE_BITS)),
        s.push("webgl depth bits:" + o.getParameter(o.DEPTH_BITS)),
        s.push("webgl green bits:" + o.getParameter(o.GREEN_BITS)),
        s.push("webgl max anisotropy:" + function (e) {
            var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
            if (t) {
                var r = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                return 0 === r && (r = 2),
                r
            }
            return null
        }
            (o)),
        s.push("webgl max combined texture image units:" + o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
        s.push("webgl max cube map texture size:" + o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE)),
        s.push("webgl max fragment uniform vectors:" + o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS)),
        s.push("webgl max render buffer size:" + o.getParameter(o.MAX_RENDERBUFFER_SIZE)),
        s.push("webgl max texture image units:" + o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS)),
        s.push("webgl max texture size:" + o.getParameter(o.MAX_TEXTURE_SIZE)),
        s.push("webgl max varying vectors:" + o.getParameter(o.MAX_VARYING_VECTORS)),
        s.push("webgl max vertex attribs:" + o.getParameter(o.MAX_VERTEX_ATTRIBS)),
        s.push("webgl max vertex texture image units:" + o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
        s.push("webgl max vertex uniform vectors:" + o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS)),
        s.push("webgl max viewport dims:" + e(o.getParameter(o.MAX_VIEWPORT_DIMS))),
        s.push("webgl red bits:" + o.getParameter(o.RED_BITS)),
        s.push("webgl renderer:" + o.getParameter(o.RENDERER)),
        s.push("webgl shading language version:" + o.getParameter(o.SHADING_LANGUAGE_VERSION)),
        s.push("webgl stencil bits:" + o.getParameter(o.STENCIL_BITS)),
        s.push("webgl vendor:" + o.getParameter(o.VENDOR)),
        s.push("webgl version:" + o.getParameter(o.VERSION));
        try {
            var h = o.getExtension("WEBGL_debug_renderer_info");
            h && (s.push("webgl unmasked vendor:" + o.getParameter(h.UNMASKED_VENDOR_WEBGL)),
                s.push("webgl unmasked renderer:" + o.getParameter(h.UNMASKED_RENDERER_WEBGL)))
        } catch (e) {}
        return o.getShaderPrecisionFormat && l(["FLOAT", "INT"], function (a) {
            l(["VERTEX", "FRAGMENT"], function (n) {
                l(["HIGH", "MEDIUM", "LOW"], function (i) {
                    l(["precision", "rangeMin", "rangeMax"], function (e) {
                        var t = o.getShaderPrecisionFormat(o[n + "_SHADER"], o[i + "_" + a])[e];
                        "precision" !== e && (e = "precision " + e);
                        var r = ["webgl ", n.toLowerCase(), " shader ", i.toLowerCase(), " ", a.toLowerCase(), " ", e, ":", t].join("");
                        s.push(r)
                    })
                })
            })
        }),
        s
    },
    _ = function () {
        try {
            var e = U(),
            t = e.getExtension("WEBGL_debug_renderer_info");
            return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
        } catch (e) {
            return null
        }
    },
    b = function () {
        var e = document.createElement("div");
        e.innerHTML = "&nbsp;";
        var t = !(e.className = "adsbox");
        try {
            document.body.appendChild(e),
            t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
            document.body.removeChild(e)
        } catch (e) {
            t = !1
        }
        return t
    },
    H = function () {
        if (void 0 !== navigator.languages)
            try {
                if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2))
                    return !0
            } catch (e) {
                return !0
            }
        return !1
    },
    O = function () {
        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
    },
    M = function () {
        var e,
        t = navigator.userAgent.toLowerCase(),
        r = navigator.oscpu,
        i = navigator.platform.toLowerCase();
        if (e = 0 <= t.indexOf("windows phone") ? "Windows Phone" : 0 <= t.indexOf("win") ? "Windows" : 0 <= t.indexOf("android") ? "Android" : 0 <= t.indexOf("linux") ? "Linux" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") ? "iOS" : 0 <= t.indexOf("mac") ? "Mac" : "Other",
            ("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e)
            return !0;
        if (void 0 !== r) {
            if (0 <= (r = r.toLowerCase()).indexOf("win") && "Windows" !== e && "Windows Phone" !== e)
                return !0;
            if (0 <= r.indexOf("linux") && "Linux" !== e && "Android" !== e)
                return !0;
            if (0 <= r.indexOf("mac") && "Mac" !== e && "iOS" !== e)
                return !0;
            if ((-1 === r.indexOf("win") && -1 === r.indexOf("linux") && -1 === r.indexOf("mac")) != ("Other" === e))
                return !0
        }
        return 0 <= i.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || ((0 <= i.indexOf("linux") || 0 <= i.indexOf("android") || 0 <= i.indexOf("pike")) && "Linux" !== e && "Android" !== e || ((0 <= i.indexOf("mac") || 0 <= i.indexOf("ipad") || 0 <= i.indexOf("ipod") || 0 <= i.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || ((-1 === i.indexOf("win") && -1 === i.indexOf("linux") && -1 === i.indexOf("mac")) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
    },
    x = function () {
        var e,
        t = navigator.userAgent.toLowerCase(),
        r = navigator.productSub;
        if (("Chrome" === (e = 0 <= t.indexOf("firefox") ? "Firefox" : 0 <= t.indexOf("opera") || 0 <= t.indexOf("opr") ? "Opera" : 0 <= t.indexOf("chrome") ? "Chrome" : 0 <= t.indexOf("safari") ? "Safari" : 0 <= t.indexOf("trident") ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== r)
            return !0;
        var i,
        n = eval.toString().length;
        if (37 === n && "Safari" !== e && "Firefox" !== e && "Other" !== e)
            return !0;
        if (39 === n && "Internet Explorer" !== e && "Other" !== e)
            return !0;
        if (33 === n && "Chrome" !== e && "Opera" !== e && "Other" !== e)
            return !0;
        try {
            throw "a"
        } catch (e) {
            try {
                e.toSource(),
                i = !0
            } catch (e) {
                i = !1
            }
        }
        return i && "Firefox" !== e && "Other" !== e
    },
    k = function () {
        var e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    },
    P = function () {
        if (!k())
            return !1;
        var e = U();
        return !!window.WebGLRenderingContext && !!e
    },
    I = function () {
        return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
    },
    D = function () {
        return void 0 !== window.swfobject
    },
    L = function () {
        return window.swfobject.hasFlashPlayerVersion("9.0.0")
    },
    N = function (t, e) {
        var r = "___fp_swf_loaded";
        window[r] = function (e) {
            t(e)
        };
        var i,
        n,
        a = e.fonts.swfContainerId;
        (n = document.createElement("div")).setAttribute("id", i.fonts.swfContainerId),
        document.body.appendChild(n);
        var o = {
            onReady: r
        };
        window.swfobject.embedSWF(e.fonts.swfPath, a, "1", "1", "9.0.0", !1, o, {
            allowScriptAccess: "always",
            menu: "false"
        }, {})
    },
    U = function () {
        var e = document.createElement("canvas"),
        t = null;
        try {
            t = e.getContext("webgl") || e.getContext("experimental-webgl")
        } catch (e) {}
        return t = t || null
    },
    F = [{
            key: "userAgent",
            getData: function (e) {
                e(navigator.userAgent)
            }
        }, {
            key: "webdriver",
            getData: function (e, t) {
                e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
            }
        }, {
            key: "language",
            getData: function (e, t) {
                e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
            }
        }, {
            key: "colorDepth",
            getData: function (e, t) {
                e(window.screen.colorDepth || t.NOT_AVAILABLE)
            }
        }, {
            key: "deviceMemory",
            getData: function (e, t) {
                e(navigator.deviceMemory || t.NOT_AVAILABLE)
            }
        }, {
            key: "pixelRatio",
            getData: function (e, t) {
                e(window.devicePixelRatio || t.NOT_AVAILABLE)
            }
        }, {
            key: "hardwareConcurrency",
            getData: function (e, t) {
                e(E(t))
            }
        }, {
            key: "screenResolution",
            getData: function (e, t) {
                e(n(t))
            }
        }, {
            key: "availableScreenResolution",
            getData: function (e, t) {
                e(a(t))
            }
        }, {
            key: "timezoneOffset",
            getData: function (e) {
                e((new Date).getTimezoneOffset())
            }
        }, {
            key: "timezone",
            getData: function (e, t) {
                window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : e(t.NOT_AVAILABLE)
            }
        }, {
            key: "sessionStorage",
            getData: function (e, t) {
                e(m(t))
            }
        }, {
            key: "localStorage",
            getData: function (e, t) {
                e(y(t))
            }
        }, {
            key: "indexedDb",
            getData: function (e, t) {
                e(T(t))
            }
        }, {
            key: "addBehavior",
            getData: function (e) {
                e(!(!document.body || !document.body.addBehavior))
            }
        }, {
            key: "openDatabase",
            getData: function (e) {
                e(!!window.openDatabase)
            }
        }, {
            key: "cpuClass",
            getData: function (e, t) {
                e(v(t))
            }
        }, {
            key: "platform",
            getData: function (e, t) {
                e(C(t))
            }
        }, {
            key: "doNotTrack",
            getData: function (e, t) {
                e(w(t))
            }
        }, {
            key: "plugins",
            getData: function (e, t) {
                I() ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(c(t)) : e(o(t))
            }
        }, {
            key: "canvas",
            getData: function (e, t) {
                k() ? e(B(t)) : e(t.NOT_AVAILABLE)
            }
        }, {
            key: "webgl",
            getData: function (e, t) {
                P() ? e(R()) : e(t.NOT_AVAILABLE)
            }
        }, {
            key: "webglVendorAndRenderer",
            getData: function (e) {
                P() ? e(_()) : e()
            }
        }, {
            key: "adBlock",
            getData: function (e) {
                e(b())
            }
        }, {
            key: "hasLiedLanguages",
            getData: function (e) {
                e(H())
            }
        }, {
            key: "hasLiedResolution",
            getData: function (e) {
                e(O())
            }
        }, {
            key: "hasLiedOs",
            getData: function (e) {
                e(M())
            }
        }, {
            key: "hasLiedBrowser",
            getData: function (e) {
                e(x())
            }
        }, {
            key: "touchSupport",
            getData: function (e) {
                e(t())
            }
        }, {
            key: "fonts",
            getData: function (e, t) {
                var c = ["monospace", "sans-serif", "serif"],
                u = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                if (t.fonts.extendedJsFonts) {
                    u = u.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])
                }
                u = (u = u.concat(t.fonts.userDefinedFonts)).filter(function (e, t) {
                    return u.indexOf(e) === t
                });
                function d() {
                    var e = document.createElement("span");
                    return e.style.position = "absolute",
                    e.style.left = "-9999px",
                    e.style.fontSize = "72px",
                    e.style.fontStyle = "normal",
                    e.style.fontWeight = "normal",
                    e.style.letterSpacing = "normal",
                    e.style.lineBreak = "auto",
                    e.style.lineHeight = "normal",
                    e.style.textTransform = "none",
                    e.style.textAlign = "left",
                    e.style.textDecoration = "none",
                    e.style.textShadow = "none",
                    e.style.whiteSpace = "normal",
                    e.style.wordBreak = "normal",
                    e.style.wordSpacing = "normal",
                    e.innerHTML = "mmmmmmmmmmlli",
                    e
                }
                function r(e) {
                    for (var t = !1, r = 0; r < c.length; r++)
                        if (t = e[r].offsetWidth !== a[c[r]] || e[r].offsetHeight !== o[c[r]])
                            return t;
                    return t
                }
                var i = document.getElementsByTagName("body")[0],
                n = document.createElement("div"),
                f = document.createElement("div"),
                a = {},
                o = {},
                s = function () {
                    for (var e = [], t = 0, r = c.length; t < r; t++) {
                        var i = d();
                        i.style.fontFamily = c[t],
                        n.appendChild(i),
                        e.push(i)
                    }
                    return e
                }
                ();
                i.appendChild(n);
                for (var h = 0, l = c.length; h < l; h++)
                    a[c[h]] = s[h].offsetWidth,
                    o[c[h]] = s[h].offsetHeight;
                var p = function () {
                    for (var e, t, r, i = {}, n = 0, a = u.length; n < a; n++) {
                        for (var o = [], s = 0, h = c.length; s < h; s++) {
                            var l = (e = u[n],
                                t = c[s],
                                r = void 0,
                                (r = d()).style.fontFamily = "'" + e + "'," + t,
                                r);
                            f.appendChild(l),
                            o.push(l)
                        }
                        i[u[n]] = o
                    }
                    return i
                }
                ();
                i.appendChild(f);
                for (var g = [], A = 0, S = u.length; A < S; A++)
                    r(p[u[A]]) && g.push(u[A]);
                i.removeChild(f),
                i.removeChild(n),
                e(g)
            },
            pauseBefore: !0
        }, {
            key: "fontsFlash",
            getData: function (t, e) {
                return D() ? L() ? e.fonts.swfPath ? void N(function (e) {
                    t(e)
                }, e) : t("missing options.fonts.swfPath") : t("flash not installed") : t("swf object not loaded")
            },
            pauseBefore: !0
        }, {
            key: "audio",
            getData: function (r, e) {
                var t = e.audio;
                if (t.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))
                    return r(e.EXCLUDED);
                var i = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                if (null == i)
                    return r(e.NOT_AVAILABLE);
                var n = new i(1, 44100, 44100),
                a = n.createOscillator();
                a.type = "triangle",
                a.frequency.setValueAtTime(1e4, n.currentTime);
                var o = n.createDynamicsCompressor();
                l([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]], function (e) {
                    void 0 !== o[e[0]] && "function" == typeof o[e[0]].setValueAtTime && o[e[0]].setValueAtTime(e[1], n.currentTime)
                }),
                a.connect(o),
                o.connect(n.destination),
                a.start(0),
                n.startRendering();
                var s = setTimeout(function () {
                        return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'),
                        n.oncomplete = function () {},
                        n = null,
                        r("audioTimeout")
                    }, t.timeout);
                n.oncomplete = function (e) {
                    var t;
                    try {
                        clearTimeout(s),
                        t = e.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function (e, t) {
                                return e + Math.abs(t)
                            }, 0).toString(),
                        a.disconnect(),
                        o.disconnect()
                    } catch (e) {
                        return void r(e)
                    }
                    r(t)
                }
            }
        }, {
            key: "enumerateDevices",
            getData: function (t, e) {
                if (!r())
                    return t(e.NOT_AVAILABLE);
                navigator.mediaDevices.enumerateDevices().then(function (e) {
                    t(e.map(function (e) {
                            return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                        }))
                }).catch(function (e) {
                    t(e)
                })
            }
        }
    ];
    return i.get = function (r, i) {
        (function (e, t) {
            if (null == t)
                return;
            var r,
            i;
            for (i in t)
                null == (r = t[i]) || Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r)
        })(r = i ? r || {}
             : (i = r, {}), e),
        r.components = r.extraComponents.concat(F);
        var n = {
            data: [],
            addPreprocessedComponent: function (e, t) {
                "function" == typeof r.preprocessor && (t = r.preprocessor(e, t)),
                n.data.push({
                    key: e,
                    value: t
                })
            }
        },
        a = -1,
        o = function (e) {
            if ((a += 1) >= r.components.length)
                i(n.data);
            else {
                var t = r.components[a];
                if (r.excludes[t.key])
                    o(!1);
                else {
                    if (!e && t.pauseBefore)
                        return --a,
                        void setTimeout(function () {
                            o(!0)
                        }, 1);
                    try {
                        t.getData(function (e) {
                            n.addPreprocessedComponent(t.key, e),
                            o(!1)
                        }, r)
                    } catch (e) {
                        n.addPreprocessedComponent(t.key, String(e)),
                        o(!1)
                    }
                }
            }
        };
        o(!1)
    },
    i.getPromise = function (r) {
        return new Promise(function (e, t) {
            i.get(r, e)
        })
    },
    i.getV18 = function (a, o) {
        return null == o && (o = a,
            a = {}),
        i.get(a, function (e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var i = e[r];
                if (i.value === (a.NOT_AVAILABLE || "not available"))
                    t.push({
                        key: i.key,
                        value: "unknown"
                    });
                else if ("plugins" === i.key)
                    t.push({
                        key: "plugins",
                        value: h(i.value, function (e) {
                            var t = h(e[2], function (e) {
                                    return e.join ? e.join("~") : e
                                }).join(",");
                            return [e[0], e[1], t].join("::")
                        })
                    });
                else if (-1 !== ["canvas", "webgl"].indexOf(i.key))
                    t.push({
                        key: i.key,
                        value: i.value.join("~")
                    });
                else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(i.key)) {
                    if (!i.value)
                        continue;
                    t.push({
                        key: i.key,
                        value: 1
                    })
                } else
                    i.value ? t.push(i.value.join ? {
                        key: i.key,
                        value: i.value.join(";")
                    }
                         : i) : t.push({
                        key: i.key,
                        value: i.value
                    })
            }
            var n = s(h(t, function (e) {
                        return e.value
                    }).join("~~~"), 31);
            o(n, t)
        })
    },
    i.x64hash128 = s,
    i.VERSION = "2.0.6",
    i
}),
function (e) {
    "use strict";
    function u(e, t) {
        var r = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
    }
    function s(e, t, r, i, n, a) {
        return u((o = u(u(t, e), u(i, a))) << (s = n) | o >>> 32 - s, r);
        var o,
        s
    }
    function d(e, t, r, i, n, a, o) {
        return s(t & r | ~t & i, e, t, n, a, o)
    }
    function f(e, t, r, i, n, a, o) {
        return s(t & i | r & ~i, e, t, n, a, o)
    }
    function p(e, t, r, i, n, a, o) {
        return s(t ^ r ^ i, e, t, n, a, o)
    }
    function g(e, t, r, i, n, a, o) {
        return s(r ^ (t | ~i), e, t, n, a, o)
    }
    function h(e, t) {
        var r,
        i,
        n,
        a,
        o;
        e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
        var s = 1732584193,
        h = -271733879,
        l = -1732584194,
        c = 271733878;
        for (r = 0; r < e.length; r += 16)
            s = d(i = s, n = h, a = l, o = c, e[r], 7, -680876936),
            c = d(c, s, h, l, e[r + 1], 12, -389564586),
            l = d(l, c, s, h, e[r + 2], 17, 606105819),
            h = d(h, l, c, s, e[r + 3], 22, -1044525330),
            s = d(s, h, l, c, e[r + 4], 7, -176418897),
            c = d(c, s, h, l, e[r + 5], 12, 1200080426),
            l = d(l, c, s, h, e[r + 6], 17, -1473231341),
            h = d(h, l, c, s, e[r + 7], 22, -45705983),
            s = d(s, h, l, c, e[r + 8], 7, 1770035416),
            c = d(c, s, h, l, e[r + 9], 12, -1958414417),
            l = d(l, c, s, h, e[r + 10], 17, -42063),
            h = d(h, l, c, s, e[r + 11], 22, -1990404162),
            s = d(s, h, l, c, e[r + 12], 7, 1804603682),
            c = d(c, s, h, l, e[r + 13], 12, -40341101),
            l = d(l, c, s, h, e[r + 14], 17, -1502002290),
            s = f(s, h = d(h, l, c, s, e[r + 15], 22, 1236535329), l, c, e[r + 1], 5, -165796510),
            c = f(c, s, h, l, e[r + 6], 9, -1069501632),
            l = f(l, c, s, h, e[r + 11], 14, 643717713),
            h = f(h, l, c, s, e[r], 20, -373897302),
            s = f(s, h, l, c, e[r + 5], 5, -701558691),
            c = f(c, s, h, l, e[r + 10], 9, 38016083),
            l = f(l, c, s, h, e[r + 15], 14, -660478335),
            h = f(h, l, c, s, e[r + 4], 20, -405537848),
            s = f(s, h, l, c, e[r + 9], 5, 568446438),
            c = f(c, s, h, l, e[r + 14], 9, -1019803690),
            l = f(l, c, s, h, e[r + 3], 14, -187363961),
            h = f(h, l, c, s, e[r + 8], 20, 1163531501),
            s = f(s, h, l, c, e[r + 13], 5, -1444681467),
            c = f(c, s, h, l, e[r + 2], 9, -51403784),
            l = f(l, c, s, h, e[r + 7], 14, 1735328473),
            s = p(s, h = f(h, l, c, s, e[r + 12], 20, -1926607734), l, c, e[r + 5], 4, -378558),
            c = p(c, s, h, l, e[r + 8], 11, -2022574463),
            l = p(l, c, s, h, e[r + 11], 16, 1839030562),
            h = p(h, l, c, s, e[r + 14], 23, -35309556),
            s = p(s, h, l, c, e[r + 1], 4, -1530992060),
            c = p(c, s, h, l, e[r + 4], 11, 1272893353),
            l = p(l, c, s, h, e[r + 7], 16, -155497632),
            h = p(h, l, c, s, e[r + 10], 23, -1094730640),
            s = p(s, h, l, c, e[r + 13], 4, 681279174),
            c = p(c, s, h, l, e[r], 11, -358537222),
            l = p(l, c, s, h, e[r + 3], 16, -722521979),
            h = p(h, l, c, s, e[r + 6], 23, 76029189),
            s = p(s, h, l, c, e[r + 9], 4, -640364487),
            c = p(c, s, h, l, e[r + 12], 11, -421815835),
            l = p(l, c, s, h, e[r + 15], 16, 530742520),
            s = g(s, h = p(h, l, c, s, e[r + 2], 23, -995338651), l, c, e[r], 6, -198630844),
            c = g(c, s, h, l, e[r + 7], 10, 1126891415),
            l = g(l, c, s, h, e[r + 14], 15, -1416354905),
            h = g(h, l, c, s, e[r + 5], 21, -57434055),
            s = g(s, h, l, c, e[r + 12], 6, 1700485571),
            c = g(c, s, h, l, e[r + 3], 10, -1894986606),
            l = g(l, c, s, h, e[r + 10], 15, -1051523),
            h = g(h, l, c, s, e[r + 1], 21, -2054922799),
            s = g(s, h, l, c, e[r + 8], 6, 1873313359),
            c = g(c, s, h, l, e[r + 15], 10, -30611744),
            l = g(l, c, s, h, e[r + 6], 15, -1560198380),
            h = g(h, l, c, s, e[r + 13], 21, 1309151649),
            s = g(s, h, l, c, e[r + 4], 6, -145523070),
            c = g(c, s, h, l, e[r + 11], 10, -1120210379),
            l = g(l, c, s, h, e[r + 2], 15, 718787259),
            h = g(h, l, c, s, e[r + 9], 21, -343485551),
            s = u(s, i),
            h = u(h, n),
            l = u(l, a),
            c = u(c, o);
        return [s, h, l, c]
    }
    function l(e) {
        var t,
        r = "",
        i = 32 * e.length;
        for (t = 0; t < i; t += 8)
            r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return r
    }
    function c(e) {
        var t,
        r = [];
        for (r[(e.length >> 2) - 1] = void 0,
            t = 0; t < r.length; t += 1)
            r[t] = 0;
        var i = 8 * e.length;
        for (t = 0; t < i; t += 8)
            r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return r
    }
    function i(e) {
        var t,
        r,
        i = "0123456789abcdef",
        n = "";
        for (r = 0; r < e.length; r += 1)
            t = e.charCodeAt(r),
            n += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
        return n
    }
    function r(e) {
        return unescape(encodeURIComponent(e))
    }
    function n(e) {
        return l(h(c(t = r(e)), 8 * t.length));
        var t
    }
    function a(e, t) {
        return function (e, t) {
            var r,
            i,
            n = c(e),
            a = [],
            o = [];
            for (a[15] = o[15] = void 0,
                16 < n.length && (n = h(n, 8 * e.length)),
                r = 0; r < 16; r += 1)
                a[r] = 909522486 ^ n[r],
                o[r] = 1549556828 ^ n[r];
            return i = h(a.concat(c(t)), 512 + 8 * t.length),
            l(h(o.concat(i), 640))
        }
        (r(e), r(t))
    }
    function t(e, t, r) {
        return t ? r ? a(t, e) : i(a(t, e)) : r ? n(e) : i(n(e))
    }
    "function" == typeof define && define.amd ? define(function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : e.md5 = t
}
(this),
function () {
    "use strict";
    var f = "input is invalid type",
    e = "object" == typeof window,
    t = e ? window : {};
    t.JS_SHA512_NO_WINDOW && (e = !1);
    var r = !e && "object" == typeof self;
    !t.JS_SHA512_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? t = global : r && (t = self);
    var i = !t.JS_SHA512_NO_COMMON_JS && "object" == typeof module && module.exports,
    n = "function" == typeof define && define.amd,
    p = !t.JS_SHA512_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
    m = "0123456789abcdef".split(""),
    a = [-2147483648, 8388608, 32768, 128],
    h = [24, 16, 8, 0],
    ne = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
    o = ["hex", "array", "digest", "arrayBuffer"],
    s = [];
    !t.JS_SHA512_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }),
    !p || !t.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) {
        return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
    });
    function l(t, r) {
        return function (e) {
            return new g(r, !0).update(e)[t]()
        }
    }
    function c(e) {
        var t = l("hex", e);
        t.create = function () {
            return new g(e)
        },
        t.update = function (e) {
            return t.create().update(e)
        };
        for (var r = 0; r < o.length; ++r) {
            var i = o[r];
            t[i] = l(i, e)
        }
        return t
    }
    function u(r, i) {
        return function (e, t) {
            return new A(e, i, !0).update(t)[r]()
        }
    }
    function d(t) {
        var r = u("hex", t);
        r.create = function (e) {
            return new A(e, t)
        },
        r.update = function (e, t) {
            return r.create(e).update(t)
        };
        for (var e = 0; e < o.length; ++e) {
            var i = o[e];
            r[i] = u(i, t)
        }
        return r
    }
    function g(e, t) {
        t ? (s[0] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = s[16] = s[17] = s[18] = s[19] = s[20] = s[21] = s[22] = s[23] = s[24] = s[25] = s[26] = s[27] = s[28] = s[29] = s[30] = s[31] = s[32] = 0,
            this.blocks = s) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        384 == e ? (this.h0h = 3418070365,
            this.h0l = 3238371032,
            this.h1h = 1654270250,
            this.h1l = 914150663,
            this.h2h = 2438529370,
            this.h2l = 812702999,
            this.h3h = 355462360,
            this.h3l = 4144912697,
            this.h4h = 1731405415,
            this.h4l = 4290775857,
            this.h5h = 2394180231,
            this.h5l = 1750603025,
            this.h6h = 3675008525,
            this.h6l = 1694076839,
            this.h7h = 1203062813,
            this.h7l = 3204075428) : 256 == e ? (this.h0h = 573645204,
            this.h0l = 4230739756,
            this.h1h = 2673172387,
            this.h1l = 3360449730,
            this.h2h = 596883563,
            this.h2l = 1867755857,
            this.h3h = 2520282905,
            this.h3l = 1497426621,
            this.h4h = 2519219938,
            this.h4l = 2827943907,
            this.h5h = 3193839141,
            this.h5l = 1401305490,
            this.h6h = 721525244,
            this.h6l = 746961066,
            this.h7h = 246885852,
            this.h7l = 2177182882) : 224 == e ? (this.h0h = 2352822216,
            this.h0l = 424955298,
            this.h1h = 1944164710,
            this.h1l = 2312950998,
            this.h2h = 502970286,
            this.h2l = 855612546,
            this.h3h = 1738396948,
            this.h3l = 1479516111,
            this.h4h = 258812777,
            this.h4l = 2077511080,
            this.h5h = 2011393907,
            this.h5l = 79989058,
            this.h6h = 1067287976,
            this.h6l = 1780299464,
            this.h7h = 286451373,
            this.h7l = 2446758561) : (this.h0h = 1779033703,
            this.h0l = 4089235720,
            this.h1h = 3144134277,
            this.h1l = 2227873595,
            this.h2h = 1013904242,
            this.h2l = 4271175723,
            this.h3h = 2773480762,
            this.h3l = 1595750129,
            this.h4h = 1359893119,
            this.h4l = 2917565137,
            this.h5h = 2600822924,
            this.h5l = 725511199,
            this.h6h = 528734635,
            this.h6l = 4215389547,
            this.h7h = 1541459225,
            this.h7l = 327033209),
        this.bits = e,
        this.block = this.start = this.bytes = this.hBytes = 0,
        this.finalized = this.hashed = !1
    }
    function A(e, t, r) {
        var i,
        n = typeof e;
        if ("string" != n) {
            if ("object" != n)
                throw new Error(f);
            if (null === e)
                throw new Error(f);
            if (p && e.constructor === ArrayBuffer)
                e = new Uint8Array(e);
            else if (!(Array.isArray(e) || p && ArrayBuffer.isView(e)))
                throw new Error(f);
            i = !0
        }
        var a = e.length;
        if (!i) {
            for (var o, s = [], h = (a = e.length,
                    0), l = 0; l < a; ++l)
                (o = e.charCodeAt(l)) < 128 ? s[h++] = o : (o < 2048 ? s[h++] = 192 | o >> 6 : (o < 55296 || 57344 <= o ? s[h++] = 224 | o >> 12 : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++l)),
                                        s[h++] = 240 | o >> 18,
                                        s[h++] = 128 | o >> 12 & 63),
                                s[h++] = 128 | o >> 6 & 63),
                        s[h++] = 128 | 63 & o);
            e = s
        }
        128 < e.length && (e = new g(t, !0).update(e).array());
        var c = [],
        u = [];
        for (l = 0; l < 128; ++l) {
            var d = e[l] || 0;
            c[l] = 92 ^ d,
            u[l] = 54 ^ d
        }
        g.call(this, t, r),
        this.update(u),
        this.oKeyPad = c,
        this.inner = !0,
        this.sharedMemory = r
    }
    g.prototype.update = function (e) {
        if (this.finalized)
            throw new Error("finalize already called");
        var t,
        r = typeof e;
        if ("string" != r) {
            if ("object" != r)
                throw new Error(f);
            if (null === e)
                throw new Error(f);
            if (p && e.constructor === ArrayBuffer)
                e = new Uint8Array(e);
            else if (!(Array.isArray(e) || p && ArrayBuffer.isView(e)))
                throw new Error(f);
            t = !0
        }
        for (var i, n, a = 0, o = e.length, s = this.blocks; a < o; ) {
            if (this.hashed && (this.hashed = !1,
                    s[0] = this.block,
                    s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = s[16] = s[17] = s[18] = s[19] = s[20] = s[21] = s[22] = s[23] = s[24] = s[25] = s[26] = s[27] = s[28] = s[29] = s[30] = s[31] = s[32] = 0),
                t)
                for (n = this.start; a < o && n < 128; ++a)
                    s[n >> 2] |= e[a] << h[3 & n++];
            else
                for (n = this.start; a < o && n < 128; ++a)
                    (i = e.charCodeAt(a)) < 128 ? s[n >> 2] |= i << h[3 & n++] : (i < 2048 ? s[n >> 2] |= (192 | i >> 6) << h[3 & n++] : (i < 55296 || 57344 <= i ? s[n >> 2] |= (224 | i >> 12) << h[3 & n++] : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++a)),
                                s[n >> 2] |= (240 | i >> 18) << h[3 & n++],
                                s[n >> 2] |= (128 | i >> 12 & 63) << h[3 & n++]),
                            s[n >> 2] |= (128 | i >> 6 & 63) << h[3 & n++]),
                        s[n >> 2] |= (128 | 63 & i) << h[3 & n++]);
            this.lastByteIndex = n,
            this.bytes += n - this.start,
            128 <= n ? (this.block = s[32],
                this.start = n - 128,
                this.hash(),
                this.hashed = !0) : this.start = n
        }
        return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0,
            this.bytes = this.bytes % 4294967296),
        this
    },
    g.prototype.finalize = function () {
        if (!this.finalized) {
            this.finalized = !0;
            var e = this.blocks,
            t = this.lastByteIndex;
            e[32] = this.block,
            e[t >> 2] |= a[3 & t],
            this.block = e[32],
            112 <= t && (this.hashed || this.hash(),
                e[0] = this.block,
                e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = e[16] = e[17] = e[18] = e[19] = e[20] = e[21] = e[22] = e[23] = e[24] = e[25] = e[26] = e[27] = e[28] = e[29] = e[30] = e[31] = e[32] = 0),
            e[30] = this.hBytes << 3 | this.bytes >>> 29,
            e[31] = this.bytes << 3,
            this.hash()
        }
    },
    g.prototype.hash = function () {
        var e,
        t,
        r,
        i,
        n,
        a,
        o,
        s,
        h,
        l,
        c,
        u,
        d,
        f,
        p,
        g,
        A,
        S,
        m,
        y,
        T,
        E,
        v,
        C,
        w,
        B = this.h0h,
        R = this.h0l,
        _ = this.h1h,
        b = this.h1l,
        H = this.h2h,
        O = this.h2l,
        M = this.h3h,
        x = this.h3l,
        k = this.h4h,
        P = this.h4l,
        I = this.h5h,
        D = this.h5l,
        L = this.h6h,
        N = this.h6l,
        U = this.h7h,
        F = this.h7l,
        X = this.blocks;
        for (e = 32; e < 160; e += 2)
            t = ((y = X[e - 30]) >>> 1 | (T = X[e - 29]) << 31) ^ (y >>> 8 | T << 24) ^ y >>> 7,
            r = (T >>> 1 | y << 31) ^ (T >>> 8 | y << 24) ^ (T >>> 7 | y << 25),
            i = ((y = X[e - 4]) >>> 19 | (T = X[e - 3]) << 13) ^ (T >>> 29 | y << 3) ^ y >>> 6,
            n = (T >>> 19 | y << 13) ^ (y >>> 29 | T << 3) ^ (T >>> 6 | y << 26),
            y = X[e - 32],
            T = X[e - 31],
            h = ((E = X[e - 14]) >>> 16) + (y >>> 16) + (t >>> 16) + (i >>> 16) + ((s = (65535 & E) + (65535 & y) + (65535 & t) + (65535 & i) + ((o = ((v = X[e - 13]) >>> 16) + (T >>> 16) + (r >>> 16) + (n >>> 16) + ((a = (65535 & v) + (65535 & T) + (65535 & r) + (65535 & n)) >>> 16)) >>> 16)) >>> 16),
            X[e] = h << 16 | 65535 & s,
            X[e + 1] = o << 16 | 65535 & a;
        var G = B,
        V = R,
        W = _,
        j = b,
        z = H,
        K = O,
        J = M,
        Y = x,
        Z = k,
        q = P,
        Q = I,
        $ = D,
        ee = L,
        te = N,
        re = U,
        ie = F;
        for (g = W & z,
            A = j & K,
            e = 0; e < 160; e += 8)
            t = (G >>> 28 | V << 4) ^ (V >>> 2 | G << 30) ^ (V >>> 7 | G << 25),
            r = (V >>> 28 | G << 4) ^ (G >>> 2 | V << 30) ^ (G >>> 7 | V << 25),
            i = (Z >>> 14 | q << 18) ^ (Z >>> 18 | q << 14) ^ (q >>> 9 | Z << 23),
            n = (q >>> 14 | Z << 18) ^ (q >>> 18 | Z << 14) ^ (Z >>> 9 | q << 23),
            S = (l = G & W) ^ G & z ^ g,
            m = (c = V & j) ^ V & K ^ A,
            C = Z & Q ^ ~Z & ee,
            w = q & $ ^ ~q & te,
            y = X[e],
            T = X[e + 1],
            y = (h = ((E = ne[e]) >>> 16) + (y >>> 16) + (C >>> 16) + (i >>> 16) + (re >>> 16) + ((s = (65535 & E) + (65535 & y) + (65535 & C) + (65535 & i) + (65535 & re) + ((o = ((v = ne[e + 1]) >>> 16) + (T >>> 16) + (w >>> 16) + (n >>> 16) + (ie >>> 16) + ((a = (65535 & v) + (65535 & T) + (65535 & w) + (65535 & n) + (65535 & ie)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            T = o << 16 | 65535 & a,
            E = (h = (S >>> 16) + (t >>> 16) + ((s = (65535 & S) + (65535 & t) + ((o = (m >>> 16) + (r >>> 16) + ((a = (65535 & m) + (65535 & r)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            v = o << 16 | 65535 & a,
            re = (h = (J >>> 16) + (y >>> 16) + ((s = (65535 & J) + (65535 & y) + ((o = (Y >>> 16) + (T >>> 16) + ((a = (65535 & Y) + (65535 & T)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            ie = o << 16 | 65535 & a,
            t = ((J = (h = (E >>> 16) + (y >>> 16) + ((s = (65535 & E) + (65535 & y) + ((o = (v >>> 16) + (T >>> 16) + ((a = (65535 & v) + (65535 & T)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s) >>> 28 | (Y = o << 16 | 65535 & a) << 4) ^ (Y >>> 2 | J << 30) ^ (Y >>> 7 | J << 25),
            r = (Y >>> 28 | J << 4) ^ (J >>> 2 | Y << 30) ^ (J >>> 7 | Y << 25),
            i = (re >>> 14 | ie << 18) ^ (re >>> 18 | ie << 14) ^ (ie >>> 9 | re << 23),
            n = (ie >>> 14 | re << 18) ^ (ie >>> 18 | re << 14) ^ (re >>> 9 | ie << 23),
            S = (u = J & G) ^ J & W ^ l,
            m = (d = Y & V) ^ Y & j ^ c,
            C = re & Z ^ ~re & Q,
            w = ie & q ^ ~ie & $,
            y = X[e + 2],
            T = X[e + 3],
            y = (h = ((E = ne[e + 2]) >>> 16) + (y >>> 16) + (C >>> 16) + (i >>> 16) + (ee >>> 16) + ((s = (65535 & E) + (65535 & y) + (65535 & C) + (65535 & i) + (65535 & ee) + ((o = ((v = ne[e + 3]) >>> 16) + (T >>> 16) + (w >>> 16) + (n >>> 16) + (te >>> 16) + ((a = (65535 & v) + (65535 & T) + (65535 & w) + (65535 & n) + (65535 & te)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            T = o << 16 | 65535 & a,
            E = (h = (S >>> 16) + (t >>> 16) + ((s = (65535 & S) + (65535 & t) + ((o = (m >>> 16) + (r >>> 16) + ((a = (65535 & m) + (65535 & r)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            v = o << 16 | 65535 & a,
            ee = (h = (z >>> 16) + (y >>> 16) + ((s = (65535 & z) + (65535 & y) + ((o = (K >>> 16) + (T >>> 16) + ((a = (65535 & K) + (65535 & T)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            te = o << 16 | 65535 & a,
            t = ((z = (h = (E >>> 16) + (y >>> 16) + ((s = (65535 & E) + (65535 & y) + ((o = (v >>> 16) + (T >>> 16) + ((a = (65535 & v) + (65535 & T)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s) >>> 28 | (K = o << 16 | 65535 & a) << 4) ^ (K >>> 2 | z << 30) ^ (K >>> 7 | z << 25),
            r = (K >>> 28 | z << 4) ^ (z >>> 2 | K << 30) ^ (z >>> 7 | K << 25),
            i = (ee >>> 14 | te << 18) ^ (ee >>> 18 | te << 14) ^ (te >>> 9 | ee << 23),
            n = (te >>> 14 | ee << 18) ^ (te >>> 18 | ee << 14) ^ (ee >>> 9 | te << 23),
            S = (f = z & J) ^ z & G ^ u,
            m = (p = K & Y) ^ K & V ^ d,
            C = ee & re ^ ~ee & Z,
            w = te & ie ^ ~te & q,
            y = X[e + 4],
            T = X[e + 5],
            y = (h = ((E = ne[e + 4]) >>> 16) + (y >>> 16) + (C >>> 16) + (i >>> 16) + (Q >>> 16) + ((s = (65535 & E) + (65535 & y) + (65535 & C) + (65535 & i) + (65535 & Q) + ((o = ((v = ne[e + 5]) >>> 16) + (T >>> 16) + (w >>> 16) + (n >>> 16) + ($ >>> 16) + ((a = (65535 & v) + (65535 & T) + (65535 & w) + (65535 & n) + (65535 & $)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            T = o << 16 | 65535 & a,
            E = (h = (S >>> 16) + (t >>> 16) + ((s = (65535 & S) + (65535 & t) + ((o = (m >>> 16) + (r >>> 16) + ((a = (65535 & m) + (65535 & r)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            v = o << 16 | 65535 & a,
            Q = (h = (W >>> 16) + (y >>> 16) + ((s = (65535 & W) + (65535 & y) + ((o = (j >>> 16) + (T >>> 16) + ((a = (65535 & j) + (65535 & T)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            $ = o << 16 | 65535 & a,
            t = ((W = (h = (E >>> 16) + (y >>> 16) + ((s = (65535 & E) + (65535 & y) + ((o = (v >>> 16) + (T >>> 16) + ((a = (65535 & v) + (65535 & T)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s) >>> 28 | (j = o << 16 | 65535 & a) << 4) ^ (j >>> 2 | W << 30) ^ (j >>> 7 | W << 25),
            r = (j >>> 28 | W << 4) ^ (W >>> 2 | j << 30) ^ (W >>> 7 | j << 25),
            i = (Q >>> 14 | $ << 18) ^ (Q >>> 18 | $ << 14) ^ ($ >>> 9 | Q << 23),
            n = ($ >>> 14 | Q << 18) ^ ($ >>> 18 | Q << 14) ^ (Q >>> 9 | $ << 23),
            S = (g = W & z) ^ W & J ^ f,
            m = (A = j & K) ^ j & Y ^ p,
            C = Q & ee ^ ~Q & re,
            w = $ & te ^ ~$ & ie,
            y = X[e + 6],
            T = X[e + 7],
            y = (h = ((E = ne[e + 6]) >>> 16) + (y >>> 16) + (C >>> 16) + (i >>> 16) + (Z >>> 16) + ((s = (65535 & E) + (65535 & y) + (65535 & C) + (65535 & i) + (65535 & Z) + ((o = ((v = ne[e + 7]) >>> 16) + (T >>> 16) + (w >>> 16) + (n >>> 16) + (q >>> 16) + ((a = (65535 & v) + (65535 & T) + (65535 & w) + (65535 & n) + (65535 & q)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            T = o << 16 | 65535 & a,
            E = (h = (S >>> 16) + (t >>> 16) + ((s = (65535 & S) + (65535 & t) + ((o = (m >>> 16) + (r >>> 16) + ((a = (65535 & m) + (65535 & r)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            v = o << 16 | 65535 & a,
            Z = (h = (G >>> 16) + (y >>> 16) + ((s = (65535 & G) + (65535 & y) + ((o = (V >>> 16) + (T >>> 16) + ((a = (65535 & V) + (65535 & T)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            q = o << 16 | 65535 & a,
            G = (h = (E >>> 16) + (y >>> 16) + ((s = (65535 & E) + (65535 & y) + ((o = (v >>> 16) + (T >>> 16) + ((a = (65535 & v) + (65535 & T)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & s,
            V = o << 16 | 65535 & a;
        h = (B >>> 16) + (G >>> 16) + ((s = (65535 & B) + (65535 & G) + ((o = (R >>> 16) + (V >>> 16) + ((a = (65535 & R) + (65535 & V)) >>> 16)) >>> 16)) >>> 16),
        this.h0h = h << 16 | 65535 & s,
        this.h0l = o << 16 | 65535 & a,
        h = (_ >>> 16) + (W >>> 16) + ((s = (65535 & _) + (65535 & W) + ((o = (b >>> 16) + (j >>> 16) + ((a = (65535 & b) + (65535 & j)) >>> 16)) >>> 16)) >>> 16),
        this.h1h = h << 16 | 65535 & s,
        this.h1l = o << 16 | 65535 & a,
        h = (H >>> 16) + (z >>> 16) + ((s = (65535 & H) + (65535 & z) + ((o = (O >>> 16) + (K >>> 16) + ((a = (65535 & O) + (65535 & K)) >>> 16)) >>> 16)) >>> 16),
        this.h2h = h << 16 | 65535 & s,
        this.h2l = o << 16 | 65535 & a,
        h = (M >>> 16) + (J >>> 16) + ((s = (65535 & M) + (65535 & J) + ((o = (x >>> 16) + (Y >>> 16) + ((a = (65535 & x) + (65535 & Y)) >>> 16)) >>> 16)) >>> 16),
        this.h3h = h << 16 | 65535 & s,
        this.h3l = o << 16 | 65535 & a,
        h = (k >>> 16) + (Z >>> 16) + ((s = (65535 & k) + (65535 & Z) + ((o = (P >>> 16) + (q >>> 16) + ((a = (65535 & P) + (65535 & q)) >>> 16)) >>> 16)) >>> 16),
        this.h4h = h << 16 | 65535 & s,
        this.h4l = o << 16 | 65535 & a,
        h = (I >>> 16) + (Q >>> 16) + ((s = (65535 & I) + (65535 & Q) + ((o = (D >>> 16) + ($ >>> 16) + ((a = (65535 & D) + (65535 & $)) >>> 16)) >>> 16)) >>> 16),
        this.h5h = h << 16 | 65535 & s,
        this.h5l = o << 16 | 65535 & a,
        h = (L >>> 16) + (ee >>> 16) + ((s = (65535 & L) + (65535 & ee) + ((o = (N >>> 16) + (te >>> 16) + ((a = (65535 & N) + (65535 & te)) >>> 16)) >>> 16)) >>> 16),
        this.h6h = h << 16 | 65535 & s,
        this.h6l = o << 16 | 65535 & a,
        h = (U >>> 16) + (re >>> 16) + ((s = (65535 & U) + (65535 & re) + ((o = (F >>> 16) + (ie >>> 16) + ((a = (65535 & F) + (65535 & ie)) >>> 16)) >>> 16)) >>> 16),
        this.h7h = h << 16 | 65535 & s,
        this.h7l = o << 16 | 65535 & a
    },
    g.prototype.toString = g.prototype.hex = function () {
        this.finalize();
        var e = this.h0h,
        t = this.h0l,
        r = this.h1h,
        i = this.h1l,
        n = this.h2h,
        a = this.h2l,
        o = this.h3h,
        s = this.h3l,
        h = this.h4h,
        l = this.h4l,
        c = this.h5h,
        u = this.h5l,
        d = this.h6h,
        f = this.h6l,
        p = this.h7h,
        g = this.h7l,
        A = this.bits,
        S = m[e >> 28 & 15] + m[e >> 24 & 15] + m[e >> 20 & 15] + m[e >> 16 & 15] + m[e >> 12 & 15] + m[e >> 8 & 15] + m[e >> 4 & 15] + m[15 & e] + m[t >> 28 & 15] + m[t >> 24 & 15] + m[t >> 20 & 15] + m[t >> 16 & 15] + m[t >> 12 & 15] + m[t >> 8 & 15] + m[t >> 4 & 15] + m[15 & t] + m[r >> 28 & 15] + m[r >> 24 & 15] + m[r >> 20 & 15] + m[r >> 16 & 15] + m[r >> 12 & 15] + m[r >> 8 & 15] + m[r >> 4 & 15] + m[15 & r] + m[i >> 28 & 15] + m[i >> 24 & 15] + m[i >> 20 & 15] + m[i >> 16 & 15] + m[i >> 12 & 15] + m[i >> 8 & 15] + m[i >> 4 & 15] + m[15 & i] + m[n >> 28 & 15] + m[n >> 24 & 15] + m[n >> 20 & 15] + m[n >> 16 & 15] + m[n >> 12 & 15] + m[n >> 8 & 15] + m[n >> 4 & 15] + m[15 & n] + m[a >> 28 & 15] + m[a >> 24 & 15] + m[a >> 20 & 15] + m[a >> 16 & 15] + m[a >> 12 & 15] + m[a >> 8 & 15] + m[a >> 4 & 15] + m[15 & a] + m[o >> 28 & 15] + m[o >> 24 & 15] + m[o >> 20 & 15] + m[o >> 16 & 15] + m[o >> 12 & 15] + m[o >> 8 & 15] + m[o >> 4 & 15] + m[15 & o];
        return 256 <= A && (S += m[s >> 28 & 15] + m[s >> 24 & 15] + m[s >> 20 & 15] + m[s >> 16 & 15] + m[s >> 12 & 15] + m[s >> 8 & 15] + m[s >> 4 & 15] + m[15 & s]),
        384 <= A && (S += m[h >> 28 & 15] + m[h >> 24 & 15] + m[h >> 20 & 15] + m[h >> 16 & 15] + m[h >> 12 & 15] + m[h >> 8 & 15] + m[h >> 4 & 15] + m[15 & h] + m[l >> 28 & 15] + m[l >> 24 & 15] + m[l >> 20 & 15] + m[l >> 16 & 15] + m[l >> 12 & 15] + m[l >> 8 & 15] + m[l >> 4 & 15] + m[15 & l] + m[c >> 28 & 15] + m[c >> 24 & 15] + m[c >> 20 & 15] + m[c >> 16 & 15] + m[c >> 12 & 15] + m[c >> 8 & 15] + m[c >> 4 & 15] + m[15 & c] + m[u >> 28 & 15] + m[u >> 24 & 15] + m[u >> 20 & 15] + m[u >> 16 & 15] + m[u >> 12 & 15] + m[u >> 8 & 15] + m[u >> 4 & 15] + m[15 & u]),
        512 == A && (S += m[d >> 28 & 15] + m[d >> 24 & 15] + m[d >> 20 & 15] + m[d >> 16 & 15] + m[d >> 12 & 15] + m[d >> 8 & 15] + m[d >> 4 & 15] + m[15 & d] + m[f >> 28 & 15] + m[f >> 24 & 15] + m[f >> 20 & 15] + m[f >> 16 & 15] + m[f >> 12 & 15] + m[f >> 8 & 15] + m[f >> 4 & 15] + m[15 & f] + m[p >> 28 & 15] + m[p >> 24 & 15] + m[p >> 20 & 15] + m[p >> 16 & 15] + m[p >> 12 & 15] + m[p >> 8 & 15] + m[p >> 4 & 15] + m[15 & p] + m[g >> 28 & 15] + m[g >> 24 & 15] + m[g >> 20 & 15] + m[g >> 16 & 15] + m[g >> 12 & 15] + m[g >> 8 & 15] + m[g >> 4 & 15] + m[15 & g]),
        S
    },
    g.prototype.array = g.prototype.digest = function () {
        this.finalize();
        var e = this.h0h,
        t = this.h0l,
        r = this.h1h,
        i = this.h1l,
        n = this.h2h,
        a = this.h2l,
        o = this.h3h,
        s = this.h3l,
        h = this.h4h,
        l = this.h4l,
        c = this.h5h,
        u = this.h5l,
        d = this.h6h,
        f = this.h6l,
        p = this.h7h,
        g = this.h7l,
        A = this.bits,
        S = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o];
        return 256 <= A && S.push(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s),
        384 <= A && S.push(h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h, l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, 255 & l, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u),
        512 == A && S.push(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, 255 & d, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, 255 & f, p >> 24 & 255, p >> 16 & 255, p >> 8 & 255, 255 & p, g >> 24 & 255, g >> 16 & 255, g >> 8 & 255, 255 & g),
        S
    },
    g.prototype.arrayBuffer = function () {
        this.finalize();
        var e = this.bits,
        t = new ArrayBuffer(e / 8),
        r = new DataView(t);
        return r.setUint32(0, this.h0h),
        r.setUint32(4, this.h0l),
        r.setUint32(8, this.h1h),
        r.setUint32(12, this.h1l),
        r.setUint32(16, this.h2h),
        r.setUint32(20, this.h2l),
        r.setUint32(24, this.h3h),
        256 <= e && r.setUint32(28, this.h3l),
        384 <= e && (r.setUint32(32, this.h4h),
            r.setUint32(36, this.h4l),
            r.setUint32(40, this.h5h),
            r.setUint32(44, this.h5l)),
        512 == e && (r.setUint32(48, this.h6h),
            r.setUint32(52, this.h6l),
            r.setUint32(56, this.h7h),
            r.setUint32(60, this.h7l)),
        t
    },
    g.prototype.clone = function () {
        var e = new g(this.bits, !1);
        return this.copyTo(e),
        e
    },
    g.prototype.copyTo = function (e) {
        var t = 0,
        r = ["h0h", "h0l", "h1h", "h1l", "h2h", "h2l", "h3h", "h3l", "h4h", "h4l", "h5h", "h5l", "h6h", "h6l", "h7h", "h7l", "start", "bytes", "hBytes", "finalized", "hashed", "lastByteIndex"];
        for (t = 0; t < r.length; ++t)
            e[r[t]] = this[r[t]];
        for (t = 0; t < this.blocks.length; ++t)
            e.blocks[t] = this.blocks[t]
    },
    (A.prototype = new g).finalize = function () {
        if (g.prototype.finalize.call(this),
            this.inner) {
            this.inner = !1;
            var e = this.array();
            g.call(this, this.bits, this.sharedMemory),
            this.update(this.oKeyPad),
            this.update(e),
            g.prototype.finalize.call(this)
        }
    },
    A.prototype.clone = function () {
        var e = new A([], this.bits, !1);
        this.copyTo(e),
        e.inner = this.inner;
        for (var t = 0; t < this.oKeyPad.length; ++t)
            e.oKeyPad[t] = this.oKeyPad[t];
        return e
    };
    var S = c(512);
    (S.sha512 = S).sha384 = c(384),
    S.sha512_256 = c(256),
    S.sha512_224 = c(224),
    S.sha512.hmac = d(512),
    S.sha384.hmac = d(384),
    S.sha512_256.hmac = d(256),
    S.sha512_224.hmac = d(224),
    i ? module.exports = S : (t.sha512 = S.sha512,
            t.sha384 = S.sha384,
            t.sha512_256 = S.sha512_256,
            t.sha512_224 = S.sha512_224,
            n && define(function () {
                return S
            }))
}
(),
function () {
    "use strict";
    var ERROR = "input is invalid type",
    WINDOW = "object" == typeof window,
    root = WINDOW ? window : {};
    root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
    var WEB_WORKER = !WINDOW && "object" == typeof self,
    NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
    NODE_JS ? root = global : WEB_WORKER && (root = self);
    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" == typeof module && module.exports,
    AMD = "function" == typeof define && define.amd,
    ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
    HEX_CHARS = "0123456789abcdef".split(""),
    EXTRA = [-2147483648, 8388608, 32768, 128],
    SHIFT = [24, 16, 8, 0],
    K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
    OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
    blocks = [];
    !root.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }),
    !ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) {
        return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
    });
    var createOutputMethod = function (t, r) {
        return function (e) {
            return new Sha256(r, !0).update(e)[t]()
        }
    },
    createMethod = function (e) {
        var t = createOutputMethod("hex", e);
        NODE_JS && (t = nodeWrap(t, e)),
        t.create = function () {
            return new Sha256(e)
        },
        t.update = function (e) {
            return t.create().update(e)
        };
        for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
            var i = OUTPUT_TYPES[r];
            t[i] = createOutputMethod(i, e)
        }
        return t
    },
    nodeWrap = function (method, is224) {
        var crypto = eval("require('crypto')"),
        Buffer = eval("require('buffer').Buffer"),
        algorithm = is224 ? "sha224" : "sha256",
        nodeMethod = function (e) {
            if ("string" == typeof e)
                return crypto.createHash(algorithm).update(e, "utf8").digest("hex");
            if (null == e)
                throw new Error(ERROR);
            return e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
            Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(e)).digest("hex") : method(e)
        };
        return nodeMethod
    },
    createHmacOutputMethod = function (r, i) {
        return function (e, t) {
            return new HmacSha256(e, i, !0).update(t)[r]()
        }
    },
    createHmacMethod = function (t) {
        var r = createHmacOutputMethod("hex", t);
        r.create = function (e) {
            return new HmacSha256(e, t)
        },
        r.update = function (e, t) {
            return r.create(e).update(t)
        };
        for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
            var i = OUTPUT_TYPES[e];
            r[i] = createHmacOutputMethod(i, t)
        }
        return r
    };
    function Sha256(e, t) {
        t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
            this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        e ? (this.h0 = 3238371032,
            this.h1 = 914150663,
            this.h2 = 812702999,
            this.h3 = 4144912697,
            this.h4 = 4290775857,
            this.h5 = 1750603025,
            this.h6 = 1694076839,
            this.h7 = 3204075428) : (this.h0 = 1779033703,
            this.h1 = 3144134277,
            this.h2 = 1013904242,
            this.h3 = 2773480762,
            this.h4 = 1359893119,
            this.h5 = 2600822924,
            this.h6 = 528734635,
            this.h7 = 1541459225),
        this.block = this.start = this.bytes = this.hBytes = 0,
        this.finalized = this.hashed = !1,
        this.first = !0,
        this.is224 = e
    }
    function HmacSha256(e, t, r) {
        var i,
        n = typeof e;
        if ("string" == n) {
            var a,
            o = [],
            s = e.length,
            h = 0;
            for (i = 0; i < s; ++i)
                (a = e.charCodeAt(i)) < 128 ? o[h++] = a : (a < 2048 ? o[h++] = 192 | a >> 6 : (a < 55296 || 57344 <= a ? o[h++] = 224 | a >> 12 : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++i)),
                                        o[h++] = 240 | a >> 18,
                                        o[h++] = 128 | a >> 12 & 63),
                                o[h++] = 128 | a >> 6 & 63),
                        o[h++] = 128 | 63 & a);
            e = o
        } else {
            if ("object" != n)
                throw new Error(ERROR);
            if (null === e)
                throw new Error(ERROR);
            if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                e = new Uint8Array(e);
            else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e)))
                throw new Error(ERROR)
        }
        64 < e.length && (e = new Sha256(t, !0).update(e).array());
        var l = [],
        c = [];
        for (i = 0; i < 64; ++i) {
            var u = e[i] || 0;
            l[i] = 92 ^ u,
            c[i] = 54 ^ u
        }
        Sha256.call(this, t, r),
        this.update(c),
        this.oKeyPad = l,
        this.inner = !0,
        this.sharedMemory = r
    }
    Sha256.prototype.update = function (e) {
        if (!this.finalized) {
            var t,
            r = typeof e;
            if ("string" != r) {
                if ("object" != r)
                    throw new Error(ERROR);
                if (null === e)
                    throw new Error(ERROR);
                if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                    e = new Uint8Array(e);
                else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e)))
                    throw new Error(ERROR);
                t = !0
            }
            for (var i, n, a = 0, o = e.length, s = this.blocks; a < o; ) {
                if (this.hashed && (this.hashed = !1,
                        s[0] = this.block,
                        s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0),
                    t)
                    for (n = this.start; a < o && n < 64; ++a)
                        s[n >> 2] |= e[a] << SHIFT[3 & n++];
                else
                    for (n = this.start; a < o && n < 64; ++a)
                        (i = e.charCodeAt(a)) < 128 ? s[n >> 2] |= i << SHIFT[3 & n++] : (i < 2048 ? s[n >> 2] |= (192 | i >> 6) << SHIFT[3 & n++] : (i < 55296 || 57344 <= i ? s[n >> 2] |= (224 | i >> 12) << SHIFT[3 & n++] : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++a)),
                                    s[n >> 2] |= (240 | i >> 18) << SHIFT[3 & n++],
                                    s[n >> 2] |= (128 | i >> 12 & 63) << SHIFT[3 & n++]),
                                s[n >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & n++]),
                            s[n >> 2] |= (128 | 63 & i) << SHIFT[3 & n++]);
                this.lastByteIndex = n,
                this.bytes += n - this.start,
                64 <= n ? (this.block = s[16],
                    this.start = n - 64,
                    this.hash(),
                    this.hashed = !0) : this.start = n
            }
            return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0,
                this.bytes = this.bytes % 4294967296),
            this
        }
    },
    Sha256.prototype.finalize = function () {
        if (!this.finalized) {
            this.finalized = !0;
            var e = this.blocks,
            t = this.lastByteIndex;
            e[16] = this.block,
            e[t >> 2] |= EXTRA[3 & t],
            this.block = e[16],
            56 <= t && (this.hashed || this.hash(),
                e[0] = this.block,
                e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
            e[14] = this.hBytes << 3 | this.bytes >>> 29,
            e[15] = this.bytes << 3,
            this.hash()
        }
    },
    Sha256.prototype.hash = function () {
        var e,
        t,
        r,
        i,
        n,
        a,
        o,
        s,
        h,
        l = this.h0,
        c = this.h1,
        u = this.h2,
        d = this.h3,
        f = this.h4,
        p = this.h5,
        g = this.h6,
        A = this.h7,
        S = this.blocks;
        for (e = 16; e < 64; ++e)
            t = ((n = S[e - 15]) >>> 7 | n << 25) ^ (n >>> 18 | n << 14) ^ n >>> 3,
            r = ((n = S[e - 2]) >>> 17 | n << 15) ^ (n >>> 19 | n << 13) ^ n >>> 10,
            S[e] = S[e - 16] + t + S[e - 7] + r << 0;
        for (h = c & u,
            e = 0; e < 64; e += 4)
            this.first ? (d = this.is224 ? (a = 300032,
                        A = (n = S[0] - 1413257819) - 150054599 << 0,
                        n + 24177077 << 0) : (a = 704751109,
                        A = (n = S[0] - 210244248) - 1521486534 << 0,
                        n + 143694565 << 0),
                this.first = !1) : (t = (l >>> 2 | l << 30) ^ (l >>> 13 | l << 19) ^ (l >>> 22 | l << 10),
                i = (a = l & c) ^ l & u ^ h,
                A = d + (n = A + (r = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & p ^ ~f & g) + K[e] + S[e]) << 0,
                d = n + (t + i) << 0),
            t = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10),
            i = (o = d & l) ^ d & c ^ a,
            g = u + (n = g + (r = (A >>> 6 | A << 26) ^ (A >>> 11 | A << 21) ^ (A >>> 25 | A << 7)) + (A & f ^ ~A & p) + K[e + 1] + S[e + 1]) << 0,
            t = ((u = n + (t + i) << 0) >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10),
            i = (s = u & d) ^ u & l ^ o,
            p = c + (n = p + (r = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + (g & A ^ ~g & f) + K[e + 2] + S[e + 2]) << 0,
            t = ((c = n + (t + i) << 0) >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10),
            i = (h = c & u) ^ c & d ^ s,
            f = l + (n = f + (r = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & g ^ ~p & A) + K[e + 3] + S[e + 3]) << 0,
            l = n + (t + i) << 0;
        this.h0 = this.h0 + l << 0,
        this.h1 = this.h1 + c << 0,
        this.h2 = this.h2 + u << 0,
        this.h3 = this.h3 + d << 0,
        this.h4 = this.h4 + f << 0,
        this.h5 = this.h5 + p << 0,
        this.h6 = this.h6 + g << 0,
        this.h7 = this.h7 + A << 0
    },
    Sha256.prototype.hex = function () {
        this.finalize();
        var e = this.h0,
        t = this.h1,
        r = this.h2,
        i = this.h3,
        n = this.h4,
        a = this.h5,
        o = this.h6,
        s = this.h7,
        h = HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o];
        return this.is224 || (h += HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s]),
        h
    },
    Sha256.prototype.toString = Sha256.prototype.hex,
    Sha256.prototype.digest = function () {
        this.finalize();
        var e = this.h0,
        t = this.h1,
        r = this.h2,
        i = this.h3,
        n = this.h4,
        a = this.h5,
        o = this.h6,
        s = this.h7,
        h = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o];
        return this.is224 || h.push(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s),
        h
    },
    Sha256.prototype.array = Sha256.prototype.digest,
    Sha256.prototype.arrayBuffer = function () {
        this.finalize();
        var e = new ArrayBuffer(this.is224 ? 28 : 32),
        t = new DataView(e);
        return t.setUint32(0, this.h0),
        t.setUint32(4, this.h1),
        t.setUint32(8, this.h2),
        t.setUint32(12, this.h3),
        t.setUint32(16, this.h4),
        t.setUint32(20, this.h5),
        t.setUint32(24, this.h6),
        this.is224 || t.setUint32(28, this.h7),
        e
    },
    HmacSha256.prototype = new Sha256,
    HmacSha256.prototype.finalize = function () {
        if (Sha256.prototype.finalize.call(this),
            this.inner) {
            this.inner = !1;
            var e = this.array();
            Sha256.call(this, this.is224, this.sharedMemory),
            this.update(this.oKeyPad),
            this.update(e),
            Sha256.prototype.finalize.call(this)
        }
    };
    var exports = createMethod();
    exports.sha256 = exports,
    exports.sha224 = createMethod(!0),
    exports.sha256.hmac = createHmacMethod(),
    exports.sha224.hmac = createHmacMethod(!0),
    COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256,
            root.sha224 = exports.sha224,
            AMD && define(function () {
                return exports
            }))
}
();

var data = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.4044.113 Safari/537.36,not available,zh-CN,24,8,16,900,1600,860,1600,-480,Asia/Shanghai,true,true,true,false,true,not available,Win32,Chrome PDF Plugin,Portable Document Format,application/x-google-chrome-pdf,pdf,Chrome PDF Viewer,,application/pdf,pdf,Native Client,,application/x-nacl,,application/x-pnacl,,LWenFIi0EJLbkivQU9Hmk+d4yLMOKJGh39op9y6cDkQzOGpQMnhBbHBXNjg0OTA4,canvas winding:yes,canvas fp:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAADICAYAAACwGnoBAAAgAElEQVR4XuzdeZiddX3//+c9M9l3EpYECHsAkcUICggClp8ouEBboa2iETAgCErr0lYpKGpVtAooQoSICl4Fa8EqWKiKCl82EWSHQICEQFgSIMmQbWbO/bve95x7cubkzMw5M2e25Pm5Lq4kM/dnuR/3meGP1/3+fBKGeEtJtwX2BvYEdgF2AKYD04p/r3QHi4BlwFIg/r4QeBR4MCF5Lu+Qko4D3gDsVfLnFGAMMLr4Z/w9/y+6rin7b23x368CDwOP5H8mJK93LC6t732QbLiPIf4IXZ4CCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCigwLASSobbKlDSC8r8CDgUOArav8xpXAc3AKGCLOo/dMVyk9TdM5JWb9mDdnw9k/KuHMyG7o4j969OeBe4AbgV+S5LElFW1dC5pVRduYhcl8xhyn/c6Ek8G9i0ZbwXwlzqO71AKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKbPICQyJQTEkPBI4D3lusNB+W8HcC1wG/LJa7V7yJ/YC3AQcXXxGo3+sBEaDH1NeRJLGULpsB+rD8eHW16B2Bc4E5h8+e1PFmxKKla3lm6bpngCuBC4HXNqm79mYUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUU6AeBQQvQU9KoxZ4DnAzsUe29fZzbuJRH2IPJnMub+Xt+y/9yNEexXbVD1HRdzBft+xzC67RyPL9hJuOzf0eLfeIjobwCeKymkYsXx6sDxwDvA/YpGeDhJTD/d3D2MbDd1FpHjqXEkq4kSWKJG9rH5n3/6OTB065lHuNYV+u4Fa//OB9kMVtQzzHrsrCyQQalAv2UH2xNQ+H3pMnv+cHcj9f5vuZMntD0w0+eMINPnbAtkyc0dRr+Lwua+eIVi7n+D8sjSI8XVKxIr/MDcDgFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQIFNS6BygJ6HfqXBdpq8ix/Mvamvt5+SxnnmZwCn1jrWRTzE93mE3/NetmYMN7GEd3HjoATop3MI3wMuq/Umurv+ncUa/KjDb+5TgF46SyzxeyTJg9kXDdDr+cR6Hqv/AvQ5+80a98MffmEW+80a3+06rrzhRT56/oKoQH8TEGG6TQEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFKghsHKDPveysbMvn8sD8Y/O+D1zf2xA9JY366s8AH+rtk4hq8MU0cy1HMo7O1ba9HbOnfuUV6O/mN7zIeBYUK9B76t+r748GDlsCDb+DS46BHWuuQK807VXABcz9wcc36wr0E388jtFrrwUW90NFeK8edy867Td5QtN9t3xv7x7D83zsC695jk99+6nfA0f0Yj67KKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKLBZCHQO0D827yiS9CqS9EguO+3+egikpFsWz2iOqvM+tcEM0L/EIXyBVubxGyAqftu3cO+/tgT4Hex+DJwytX2z+9j0vq/tol8/dOTDv37j9ZvrFu6bRoB+/XmnzHz/uafskH0azrt8UfufxX/nH5FjP/sI550ysyNk3+m4u+Nc9I8WTx3o6yfJ/goooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgpscgIbAvQ8WEzSm5h36kUV77RS+Fhpi+ri175yw1t+9+7nt/vwO9Mbx1/AgXydv/AYsZM02bbr+zGVw/llx9cu5GDO4o0bTf0iazpdFxecxhs4jT05khu4ind0nIGen1N+I4s7xikdt/Qc87ggzlPPv38/y7PxlrE26xtzRHsIeIBDWEkrdATok4Hbi3NEyXgcZJ5XiufX5Wso/34xHOcdxTHaTeBg6Lj//JriuNOXw8wb4IDR8JX3wsQxGz+ilWvgW7+EF4rjvXEm7LI1LHwR5h4Jo5rg6tto+uO1fIkfcRsfYSav8H2u7hjrdUZxPHM5ioc5jAUcydlcytXM523cWFzb0TzU6bzz/Az0k/h//G1xZ/5pNPMbvs2+xH3A/WyXjbUse/kgnv9F2RzlrdJ56vmaStd6Ee/gk5zQ0T0fL5/nb7m3475K5v5ZsQJ7w6sIaXJpl5Xop166L2kSb0zk13+SNNkzmzTOM9/w2f9Up50Z2ndrmMna0cdn15ZWvOc7PJTfeHfr6HxtfPBefe03BzFpfPsuDIef/kD25+8viU0e2tvv732NI05/kHNPmdkRrP/ohheZc/6CXwDHbvzh8SsKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKLAhQM/DwjT5ULfbtEcAmCZHZeHgTz78OhtCxmUUGg7n8o+9eMbsW4/743MvzP+/F4+Z/AKrs1B6GqM7zi6Ps8w/ye3Z137DMezLVOJr53Nvx78rPZryCvQ88M4D9DxoP5wZfL9YIV7+tdKAPUL8o9gumyof6xxmd4T4/8pD/HsWkkeQHhXnpcF4adh9G/BUSYi+oBim54F6fP/54gHnEXxHqHwjEFloHHgeX4uY/t6SMUoD9LHAL4GJMP5ImNMEJxVPtM6h8vB81gz4YLE6/uElcNGNEEF6SYDOH2MH83nswdtYx2HcwbfYmpXZSDexFx/ipCz8jhahd7Q8DH+RiRzOP7EzyzpC9Ai9L+XtnMYfs9A6D7yj37XMo5lRWZ+P8wfOiqr6rAT6YD7AnxnHuk6PunT+0vD9BOZyDfOyQL48ZI8+7+KsjlC+fIz8+hvXHNCe3lezhfuGz/X5HS+UbDjeoD10702AXv7Bbh/z4/nPThW/kg4/fPakW24pCcurDdCfWbqWnY77U7xdMaWKebxEAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAgc1OoDxAv4YkPaHb7dvbg8UN1+WBepJOJklPTy879cALk4cuuTld0hBnlT/Jio2qxCuF1XnQ/R0O7gi1y59GTwF6hPDf55GOoD7vfxNL+BC/y8L5XZnE8VkVeYS7G85SLx/7MuAMWmnrtGV7HqBH7yOh4xz2NcWAO4L2jSvoYTnwW+CvisF6WXV5tpryMfJrjgLuK95KyZzjgH8u/heFyL97CP7wCPxTWXX61bfBK80VA3SI3fXP5izmc2GxGjzC5mgRhOeV2+dwQ0fwHd/rKqCOsDwPxCsF8Vcxv2LVeelzzgP60rA9qs1jvBj/SbakNEyPvuUV6qUBflTFf4H383u+xTbzViZUu4V7aRV5vCgSrbxvXwP09iMT/pc0eVe3L610/kE4b84xW5/7w3NmdXy10hbur61q5djPtW/hfvjseFGjvSUH3pr9sdn9pvOGFVBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFKhCoPYAvXSr9zVjrihW884HTjr7F2+c/B8vHXRwhNF7Mjmr5C6vEo81VQrL8699nDdU3MY9+vUUoMf3o+XV5/n9l67hELbJAvSZjO+4Lq9Kj2r0WPPc2KG7A699zM4V6FG1XhqUl27tnp+NHv0eKXsER0NW8V5LgB7bv08sC+xLhj2wGKI3F9eZV5/nl0SwHpXoFSrQyaq/2wPzj3E15xery7/DtVnQHQF6eVgd1+bBeh6IV9p2vTRA35WXs23hYwv48u3fK31GSwPz+H6+pXxUr+fV5pX65RXwpWuMLePz7d2TeVQXoHd3nEF7sN77LdzzhVc6+qCKH1hgzuGzJ/2wtAK9um7tVxmg16LltQoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAApubwIYAPQ/0In/u6gz0XCcPEdPkPJJ0/jdvPfDfVj23/po/rXp5l4s5mBO5hUs4JNuafTgF6AewHb/jjWQ1uh2t1gD9zcVq9Bgg3549KtBvgOzM81oC9NjmfSvItlcvPWO9wsf0iNvapzs7D/CL1/QYoO+VRdTwLd7I9qzheP5fcUv3egXolc5B7y5IL533BSbxKY7PKshjm/kI0Ev/3dUPbF7J/hjbDM0AvVKFe3W/fQ7fb9a4W+778ezs6tiWPc42766de8oO2bfvf6KZ/U68bxGwY3VTeZUCCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACm5dA562cI9RL0sN7PI+5fevp75AmX9/5mQnvW/h/fzf7fpbvcDq38W+8mR+xgB/wdsbRNKABendbuH+K27Ot3cczomIF+jv5DQ8ynlXFs9PbPwb5tuozyirQ4yjt0qC6NCCPfnHOd2ngnZ953psK9Bjn0bIz1it9SG+DSc1w7pFwduzpDqxrhXnt29V3XYEe1e3/lG1oD/sxhaXcyO+IwvbySvN81qgQ/z6HdYTaPVWg5wF63r/SOeeld5RvwR5V8I8yPftWbCkfras1lYvkW9HvydKOtVa9hXtX27yXV4139dJJaTgeCys/c7395+cqkvTIbo9L6Pp30WvPXHfApB2mj84C9D+sOIOPfOQjFa8+5e8P5fJPtf+Yf/HyRZx3+eIfRRX75vVrzrtVQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQoDqBzgH6hq2r37JRuNceCl6fndXcHhz+9/hnRsz8r5v/v+1i6/N8G/RXWMt+TOvYHn0gK9DzbeAPZ0bH/OVbw+frLN3C/WbgqGxb9aj4Prhke/Z8G/Y42zwC83yr9sVAHobnX4sq8SgBX11WbZ6H8K+V9KllC/cI0CdBdhb7S91Uouch/s4Q27h/A3jsIbjmdnjjzG4C9PigRGV8VKKPAX6abTF/E7A123EkZzON5o6wvNK56D0F6DHDfcxkDrdnn8qeAvT8mi9xDJNZw1e5jjyEz8P1p5jWsaa4/nP8Nf/A3dl1EfCfzzH8hm+Tbx8/k1e4dN7V7Z/3aqq/K51P3v6CyWmkyaX8YO7HO8YqfelkQ78bWTs6Svs7B+jd7fTQ3dbxnX+eO52DfvjpD/CHe1dU/Im/7ut7cuxh01jR3MqOx/2J11a17hSF69X9evAqBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBTYvgc4Ben7veQhYapEm78rC82Lb620/u7Ht/xXeHVXdW2fBK0QF+Ce5nf/laCJUjzaQAXrMlwfkNxIhd3srXU95gB4bq7+n48o8RM+/ECF5njWWBugjgfXQMcfMsjPKH4JiWAyTi6F8VKXXuoV7aSV7pfC+/MOah+hrYQrw6YPJSsm7PQM9xohndXbxXudF6XrxeW7HlzibC/g5X+coYjv0aBdyDXEeed56CtAj1I5rLuXtWZcI5CPcLq9ML72bfAv2nVnGtcxjXHFNpXPm47U/44uyc9vzM9JL11hybvons+MJTr10X9Ik3kiY1ikML+fc+Ofgk6TJntlleYC+IRDfI/t6hOvtbeZGAfra0Z/OqtGTND5YnVua3EiafIKGQlSmn95DZXp8qJ658pxZkz5yzNYRinPs5x5h/DNruXqPyTz4egvveehVzjtzJz71d9tm8xz3uUe4/g/LLwQ+tdHcfkEBBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBTKBygF6Dzgp6TuzQuJBbhHOn8BvuYa/ys5br7W1V55v4u0Dt8GhzRsq0ON2Ty1/7KXbuD9cArIdEzmba5mfhdPDvSXzevd573Tf7dXrGwL0eqJEYA9nZcH7Tz78eg9D7wf8/jtn7zzpkye0h+TX/2EZf3nidSaPb+LYw6ay4/TRWeX5nPMXRHh+f7ZHv00BBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBboUqDlAT0mjpvmOoWB6E0vIzzbPq+CrXdedwEHVXjxsrytWrR8wHv7zENi5eCMbBeixfXvsNv4tILaiz1t7Zfp3mM8nDdDbUfozQJ972VlZhXte3d7z5y4C8SsPnz1p3znHbJ2F5pPGN2W97n+iOUJzvnPN81GhbuV5z5ZeoYACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooEBtFbkp6Q7AH4D4c1BbpbPMq13QIuAwIP7cdFps3x5FxrFNenuICnGG+1Pt56bvORWuBt5UXoE+Cpgb+7xDybbs7f3bA/StmM/dPDz4D72PD2vIV6D3/v7mAMcC7y8ZIj7ev4+Avfhn70e3pwIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAKbiUBNFegp6R+BQwfT5kXWcDi/5DFe42hmci1HMq4jMK5uZREx31rdpcPsqvIz3OOo7PdC8Yx6top9viNSzR/7B4uBezzWSNfLW342+nwO5WHiquHcNuEAfTg/FteugAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiigwJARqDpAT0nnxQbWQ2blvVxI1Fr/oJd9N5lu70lgRu13Ew8/PgTDtdUlQB+uN++6FVBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFCgR4GqAvSU9FTg0h5HG+IXXAacNsTXODDLS+DdwPa1zxYfgvgwDMdmgD4cn5prVkABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUGDgBHoM0FPSNwAPAI0Dt6z6z/QIsA/QVv+hh++IFwFn1rz8VmBfkiRIbQoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooMAmI1BNgH4T8M7hfsdHATcP95voj/V/BfjXmge+mSQJUpsCCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiwyQh0G6CnpJ8ALh7ud/vdXhVaD/e7rmH9FwJn1XB9+6VnkiRBa1NAgYEXiB1BJgMTgJHFHUJGAauLG23EnyuK/x741TmjAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKDBMBboM0FPSLYEngYnD9N6yZb8M7AqsHM43MRBrvwI4qaaJgnRXkiSIbQooMDACEZbPAKbm002aNILZu4zN/rlw6WoWL20pXcl64Hlg+cAsz1kUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAgeEt0F2AHtXFZwzv24Moof/ecL+JgVr/NcDxNU32PZIkiG0KKND/AlsVw/PG2XuM5awPzOSI2ZOYOX3ERjNff8syrr8t/lvBihVZoL4KeAaIQN2mgAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCijQhUDFAD0l3Qe4f7irPQDsO9xvYiDXH3sN/A9wWE2T7kuSBLVNAQX6T2DHqDqPsPzKc/bIgvNqWoTn/3b5Yi762dK4vA1Y4Lbu1ch5jQIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCmyuAl0F6D8BPjTcUU4ErhruNzHQ658F/BrYueqJryJJgtqmgAL9I5CF5x85ZjoXnjWT2LK91vajG5bxyYsWRjW6IXqteF6vgAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACm5XARgF6Sro30KmieB2vs5IXWEszBVqLQAlNjGQcU5jA1jTSNKTgHgSijL62lgJLiscFR84UbRwQgdVrwHhg99qGrPvVjwPNxSOQI1eLFjszxxHHdVrf3wD/VdPC9yFJgrxim3M32zQ1sm2hieb5+xI3MKDttPvYsbXA1MGY/6T72b2hlfFNDSy/9E3Zg7IBJ97PuMY1zJhSYMm3D2bNUEKZew9jWxvYLdbUVOCJefuzehDXtz2wVYTnV56zS5+Wce9jq3nznHtjjPjlFj+v+S+5Po1rZwUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBgUxKoFKBfCpzanrK0sJxnWMPKjntuoJGEhAIFUgrZ1xtoYiozGcuUIWNzGnBZzat5Dnih2Kshu7P2ULqxvgF1zesq7TAAAXpM92Xg81Uv9DKSJMgrNgN0A/TSD8bZtzNmxWhir4OhEFBv9JkdQgH6BGBWnHf+5ytnV/3D2N2FUYk+5/zH4pJ4I2hhXQZ1EAUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBgExLoFKCnpNOAl+P+WlnPSzxJC2tIaGAiWzGJ6dnf87aa13iVZ7NrGxnBluzMqCxwHty2DNiyV0vIK7njMPCsAHUItgEK0OPOfwUcUzXBliRJ0G/UDNAN0Es/FEMooK76wz1IF8ZLBhMeuHo2e+8yttMSbrl3BbN3Gdvtdu5RcT5t0gji3PTSdty/PMb1t2Q/qnEe+qpBujenVUABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQWGpEB5gP5p4IJY6cssJALyCMansROjiWLIjdt6VmdBe1Srj2IcWzOrU8g+GHf9TeAzvZo4D9CnAvn26L0aqB87DWCA/gbg/4AZVd3OZ0iSoN+oGaAboJd+KAzQq/p5yqrPK23d/m+XL+b8yxdz7CHTuO6be1QcLAL2d5z+YBawv3bTWztds3hpCzscd1d8zSr0qh6FFymggAIKKKCAAgoooIACCiiggAIKKKCAAgoooMDmJFAeoD8K7LGO5iwUL9DGJLZhMtt2a/Iqz9HMy4xkLFPZgVW8xEpeYkxWt965kvt1XmE5i7Lt3+O7U4gjfje0l3gi2zI+/94LPE6sJ9YwkjG8klW8r8s6RLgfVfET2DIL8F9hcdb3HRRYmFXKTwJmxkbRPTzTPDgvvyz6xfpf6mYL9/XA88CKrG6/vUW/yZC5lc+dB+CRSsfRytEv2phiaB9/xlnsS4GoEm0B4jFFBWrcy7M9nIEecy4G1hbHierT2FhgenGc8nuM7flj2/pYS34kcsw3GtgaPjgVrirps+5xaGuGEdtCwxhoeQ4Ka2lM1z5z0iNvO67QxKsLV/Dc74/owKCrAP0DDzNy0lriYOexDSnr14zgqZ/sy+s9/gCmJCfdx/SGNLuxrLw2LbCuMeGF9QWays9bLz8Dfc7TjG56JdtCfMTI0Tx3yV4d+/Z3TJ2HvEkbDW1NPD2yjfX5udijV7CwdQJbpAW2SBtpbEtJm5poXpvwXPn6S89AL7TxaksD244oMLqQkCQNtDXCa4+9xpJSr1hEnBE+OmXbAoyLNRQX1hIf8yfX8EL59ZXMTvoTuzc0ML5Q4NX5B/BU+TWH30LT7pOY1ZYyZv06XvjxwcQZBlmbew+TYq0UGN2YkMQ90sDaEQWem7d/x4eWkx9mC1azQ9JAQ+t6ll95UOdz3k+6lxlNBbbJ+o9l0Yj1TIzz6EvXkjZSYDWLrjiYV3p69vGZmbKG7dtSJsacaYFCY5KdMbE0bWKnAowsHaunM+grfb9SwJ9/hnpaX6GJ5vn7Ej/kfW3xBs/UStXnEYxHQH7E7En87pK9K86Th+zZz8adh2x0TUkV+l88C72vj8r+CiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoosCkJdAToKemBwB1xc7EtewTgcbb51uyWBeO1tDwkb8z6z6KJUR3d87HjC7Hd+zbs3vG9FtbyIguy4D6q3scymTxAj+r2qHaPFtvIxxnsETTHeewT2YbVvEr0v59G3p8F0O3ns5NVzu9aPM+8q7uIwPnVYp/ol59/HmefR777YhcBevSJvnlwHtdHy4PoyHZ3Lp6jns+dB+gjgQjfo0+sN4wi0425nyzZWTn+HY8pxozx4t/xAkFplXz+AkCE9TFWXJuP251DhPTxX/SJOfI+pUH6dLhoOpxZXH8eoDeMg0I8j+jb3u8Ny6/96MEvf+3BSOOfXMkTechbKUCP8Hbn8ewSAW8t4fl5KQ3P3c2uaVP7lggRoDakpBFkx58xdyFhXGmQWR6gR7+597BLIWFyoUDz/AM2DjxPf5ht1q9l27aENU+vYMGsCYyMAD3C5NZ1rG8cwZgsOC9QiCA3AvFYS4TEV+y1IQjOA9p4E6ItpSn6J220FQP0PBjv5FUaSsccIxvar08LGTRxb0+9wsKeQvRT7mTrhia2bRvB+pVNLPjZXtkHrqPNuY/Jja3sFAF2U4En5u3f/gM2957sTY1pMWc+f2sDDRHkF42Xzds/++Bnbc4d7Ng0kqnxQkDSxtN5wH76w4xfu45dGlKa8nA9xs5fPMh+lttoi/lbG1h85Zuyiugu2+m3MH79xOwHKntpInMcmXnGutZnRo009keAHutOGphSaXGtbTTEZyC+V+klgu7uqZvv7T1z+oiRi67rXD0e19cjQC85Cz3OQe/WvZfrt5sCCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgooMCwFSgP0rwOfjbvIQ+sIziPgLj33vJq7jDPRIwiPqvCoSB/HFh3dXuAx1hWLjJsY2Slgb2YZy1nMCEZlX48K83wtMUCE6NPYmejXRitRrR6heoToCY3ZXF9kMt/IZoti2gi+I9eKELzyFvSd76erLdzzr8f57nngHxXeTxRD8KjWjoLRccXhmoGnS76XFTsXv5cH6EG/dbFKPb6Vh96RS8Yx9LHuqFKPa6KVjhn/rhSgx9djnsg/owI+WhhEhXwE6XEyfHwvHy+C+vzr25VUqEdAH7namvZK9Bmz4NYR7e8C5AF6DBEh+qidIYmXAWDMmocuOfGRva/IvjWCJZfum5Xub1SBnoXg97Nr2pY9lJaRK3nqkiOyG+yxnfYXtm1tY5sIq5M2nr/8wOwGs4rtkevZKWlof1ujpwD9w3cxtbExq5xuKw2Po2+s7/k/MyuC+LwyO69KjjA4G7/Aq081szhC7GJV9M5xfdzPinU88bODMzxKAvT45+oV63im43vF6uxSr9K5aeWVy9/CMyTZiwGc8ShT1zYzM0L4QivP5ffeFdrZtzNm1Sh2i+C+rY1FP34ry0uvjVC4kLBlYwMrL3tT9mHmtPvZqtBCfBhoKfDyDw9gSTZ/SnLa/cxoga0KrSQjYPG8/bMtEiJwH5EWmJU2ZtsWrN5udvsLCUvuzX5Y4u2b7GvnJe1vtfRmC/d44WKnMcyKFxdit4H1I3k6q/Yv7kaQFtgmXMqr2etVgQ46nrcAACAASURBVN6VcTz7yS3slrYxOmlk1bb78mR+nz1+mLu+IF6U2K/S9u3RpR4BepyP/uY598Zw8QZN/IKwKaCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKlO7pnZI+AuwZwXSE3y2sqbgFe7Vq+Rnqpdu05xXmMUZ7sXDswb0TY7Kt1mE5z9DMcsYyhS2ztHZDmB9helTDj8i2Om9vK3mRV7N8L8m2eJ/I1sSx3bEPffsW5guK1eGRB25VxdJrCdAjoI+tzyNPjQr3PDzPp1lVDKEjM4xt1fMgPA/QI2ssDdajXxQIx5ojwN6mJFzPx4xC0QjmY8xKAXqE7jtAyQsL7T3zteZV7hF4x9rjv/h7rKN8q/nIRiPMjyxvN/jYWJhXEqBHhDpqt/Zt3Dta4bFT7m386whN04RlV8xmUXyrtAJ95j48UVJBXlN4HmHlxFZmJa2MamrkhUv327DleMxz0mNMaFzJLlGF3FOAnoW+TcyK4LN8+/KonG55PXuojBjHk5fsRXNZgN4pEM7u8RZGM4HdmhJGlq6ttAJ9wjqe+HYxWI8+EZbnIXPula8r24p8ROdq9ugTlfOxfXlbK6+Wb5de6QNeUmnfaRv3fJ6wzMP4LKSexKzGlDFZeP/W7MPWqeXV/A0pr894MwvysPjjDzBl/Tp2zCr0G3ihqUBThPOFhNbRo1gYhvlAvQnQ8xcemhqzFyc6qtzzMfN1DXSAnvvG+wbrmlhY1REEPf8mys4//9IpMznnlPyFlw2djvv0Y1x/27Jut3AvqTCvuIV7jJYceFv8ES9VxC8+mwIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiigQB6gp6R7AhGgZ1Xj7QH6WsYzlalZZXXtLc5Bj3A7Au+8ij3f2n0047Nt2qMSfUoWfG+TVZTn805lJuOz4603BOjl273H9/LxokI+wvWFjM0C9PYWZ4dHGB1BegTYEUj31GoJ0B/LVtBe6R0V7pVaFPXG8cwTi2epxzV5gF5azZ73jS3hYw1RnR5nr5eH8hGcR//YabtSgB7FvlH0m+8Mno8b64y1xEsL8Twr7kRddgNxHHXk3zFWrGUsXA+8q3gGesN4GL1h+/28895L/vWYt7707y82NbD80je1B3N5gB6hayEee1OW8NcUnsc4H7+VKetHs2P5luOlCz/1PnZrKzCxpwA9+uQV2OVh8IdvZ9uRo9imdHv3PPRtKtBYWl1fOndpuDxvf+ID0lGB3tVW8XkAm3uVhtixfXya8PyV+7Eir0Lv6RNc/v08eB4BLaMmseDi3bK3Mzj5drZgLDvENuitW7Dgyp1Ye9JtTGgc1/5hrhRSlz+DSWtZUPpCQL6VezyfYpV6dFk6b/+syrmj9SZAP/ledkjaz7zf6OWFzLm49tjGvT+2cK/kPvcepgPT8/PdS7fur/U5lV3fbYC+YkUL3/rZUo49ZBqz9+j6eI2LfrqUmdNHcOwR7b9Ly1sxQI83feIXpU0BBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUKAkQP8EcHGIpBSybdNja/QxRP14hKe1t6hgf5Enskrz/Bz1/PzzycwgtnmPLdvjnPMt2YU1rGAZT2fbxcf27SOy3aA3BOiVwvzyAH0eYzuO6u7fAL3acP5ZyHYxjyrtvMo7D9BLA/DcN3YjX9K+bfpG1en5NVEUHOF2pQA9cumdKjysatYbuWr8F4XCkanFDuSxrXxUphcD9AOB3zwOSTM0TYWRG79cMbH5lnOPX/COGyoF6KULKz8vu5pPWB7EJ42sTVpZMG//7C2JTi0PWqsJ0PMzwONc77zSPK8Kb0gZU7pNeh76RoV12+ssnH9IhtSpVVpfT1uI56F7uVfSwIyYKyYonkO+tgVeWzWKZeVnmXdnl1ftF1oYWbrt+kl/YueGBqY0pLw2b/9sv/54oWBaC+1bxEew3tDUvnV8aYtgPCr8yyu9i/1Lt3Knqy3NexOgn/Qndm9oYHzpekvX1alyfzWLrji4/Rz6nvwrfb+a9eXn1Bef0UYvCVTzee7mmm4D9D6O3dG9GKDHthbZ87cpoIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgq0lzpHyH0NcHwOEmeLr2ElvT0DPR+nPYiPKvPtsory+Hcr67Jt2+PPqFBvKp53HhXrK3hho9A+PwO9mgD9RMZybcdTrSY0Lv8IVFuBXu3YsUV6bJ9eGoh3F6BXur6aNXa17rxvV+uNyvRYX4Tm5VlpfDTiayUBegx33uPwma4D9JFrH7zhw4/sc25XAXps6V0oUIitzruqJu7qB7OaAL10u/j5+7afxZ2H1KWheny9tNq75KzzSWkjO8UZ63lldlxbTaharwC9ON+klga2HVFgdFZVXdKiYn7UJJ7Oq8l7+kVWUmmfheWloXrp2ej5+nsaL/ud0UihtNI775Nbx79b17O80jbz1ViWr6GnIHwgA/TTb2H8+onZGRMjSj/n1bhVeU38bOzd1RnoVY7R7WUPLlzNPh/0DPR6WDqGAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKbFoCeYAeh11vn9/aSl7gVZ6jgaaO6vHubjuq1ePM8zinPM4ij8Ogo8UYMVZUmcfXY4v2BhqzCvOoQI+gPlpUuUeYvo7mji3d8/lqCdB3ZSxR893eqg25S++s3gF6XoFeurV6NRXopWeVl8tXWmP+tWoq0OM8+DiPPULzp4pOsU17hPxRKR9rjecXFehlW7jHUsY9Dv/XDG+uXIGerHvy+ZMf3u19XQToLYVxPN3UTEMxpG6sdJZ5V5+1agL00x9k+/Xr2aqaCvSYJ9+uPd/G/aWH2Db6l1c6d1Sgt5KsHcUTlc66rmeAnhtERfyzdzC5cSRT0gITovo7vle+7Xx3P595pX1jQmts477iFcY3NrJDUxPrSiv5T7ufrQotbNfaQFv59uzV/NrLz0FPGtrPEIiXEEaO4pnv70OcTdDRehOg51vzD3YFerx8MLmF3dI2RndVYV+NVRXX7Dd7j7GNf75ydqdL/+3yxZx/efy6rq2ldx7SqUPJGen5L4/aBvRqBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUGATFUhS0jggPPYN72gRZL/Ek9k55ZPYJgu/u2uv8VxWPR7heFSXj2FSdvlaVnUE61GBHoH6GCZkgXl+5nkra5nA1rzO8k7bvefzVRugt7EbO2Xhb976M0CPOfIgvLdnoFfawn0FEFu0R4ujqNtfROjc8rPXK23hHmem71GhT+w2Hrs0l56Bnp/PHsF5bNEeRa+lrcIZ6Nm3H4dTm+GiygE665/hsGdPP3rPVb9+tPwM9NJQOz8vOyrSR49i4SV7ZYl+ty0/tzuC2aYCT8zbPzsMvlOr5Qz06Hj6w4xveZ1dGdF+7ndUfVNgdGlldlyXh75pgcbSrdBLJ++odC/QPP+A9ur3niqnK23h3h3Ch//CtqNb2TpC7q4MyvvnlfZxX7H21pSJxe3bX563Px1p7Nx7yKrvy88R7+m5FH06tm9vbWBlfK2pwMSkjbVJQ+ft9nsToOcvRsS58E+vYMHvj6C1dF1znmZ00yvMyl4wqHIL99IdCEpf+OhqffEyw3P3s2vaxoQ4RuC1ETxRy3b61TiWXBPnI0xddN1bs3PM8xbB9+IR/8A555xT1XArVqzguHfswO8u2bvT9cf9y2Ncf8uy+NqDwPqqBvMiBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUGAzEIgA/V3Ar8vvdTnP0MzyrKo8QvG8qrz8ugjbX+Yp2mhhNBOzivW85SF5G+sZwZiNKsyjan01r2XnnbewjpGMYRt2z85Bz1u1Afpf2I33DWiAHlufx5brscX5rlGaXUaTh9Zxjni8gLBN8fvdVaBHJrigWP29JTCzmzErBehRnFwpeI+M9OWSreRj2JhnbdlZ6qXTReAexyOXbeEeufC4ZvjTVNhz4zPQI0Df6dVrzjpq6T//srsAPdtGfDWzkgZGVVvJm289nrQyqlLl+on3M27EWnZtaKKp2gr0uOP8fO3WBpaPgMkktJSfsZ6Hqg0pTZWqoOfckv2I7BZb0+fbwWdj38/uDa2M72qr7/IAParFmwrMjHPZx63nyW8fnG0F0NGqeYmg0u+tvNI+aWVVYTQj40eyrYmnr3xT9pCzFoHy7pOY1ZYypptK7+ltTWxDCy2NCU/lLzHkL0TElgbrmtrP1B7Vmn0YR5Rv5d6bAD2voo8XHVrWsfjHb2V56X2edC8zmgps0xbntpcE6Kfcn50XsUWh5KWGvN9JjzGhcSW7ROheTYCeP6uuKuvr/P+L7M2cL50yk3NO2fB7YMWKFvb52FKuvPLKqqa77bbbmLTsR5z1D9M7rl+8tIUdjrsr/h2/pOIXgU0BBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUKAoEAH62cB/lIvkW6y3sDYLtCeyFZOY3hFup6RZdL6CpVk1eQTtW7IzoxjfaahXWJzVoUcrr1BfyYvZ1u15q1TtXm2Afg278ZkBDdAjfI4q7ijejCruCJPzED2KqaOSPP/erMgRi7fZXYAel0Qo/zztx9NH6JUH73FeeYy5rjhOpQA9vhXbv+9UspYYb2mx+nxGhSA/ro/jnPPq/ajcj2cSu25XOAM9r7z/l6nw1coB+rTm2/7jbxefeHF3AXqsdO49TGuBmSHTNIbnL9kru/lu22l/YdvWNraJEDNp4/nLD+TF6BDh+eiUHWNr7fh3LQH6KXeydUMT27alpLH9eENKp8rs4lrHtjawWzFAT1sKvPzDA1hCQhrB/pQ17FxIGBeVyaXhe60BeulLAhH6NrWH1PFQsoB75/Hs0tDA+LYW1jy9ZuNK7K7w8kr7uL+oMO+qkvv0h9mmdQ3xQaHQxqtPrubZvNr7w3cxdcwItmtLaWptYeWVB7afwZBv3d6YkJQ+x45QOyUt3co9D9Czrd5HsOiKvYjtDnpsc+5kt6YRTIxdCwoJi/LwP55f2siMGK/8bPa4n/Vr2TY+LyNG8tyl+/JS/nkZuZ6d4gWO+HdPAfrce7IfxunxIEbA0nn7Zz9U/d32njRpxMhF181m0tgNVei1bOMe/bL+kzb0n3P+Qn50Q7b8CM8jRLcpoIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoUBSJA/y5wRiWRVtZl1eVxxnneIgSPllLItlyP1sSorEp91EZV2PA6r7CcRdn1UWke559H2B4t3+I9toovD9fz+aoN0L/Kblw6oAF6rDBC5qjuzneTbreBqDqPFvcZ4XTpSwU9BejRr/RY4qjGjzA9HzPmiL9XCtDjDPMI2AuQPad4PvH3aHE+egTe2bH3kGWWccZ5/v3ytcdYERfG96PflGK/4vq3nQp/2RGmlX1y1j/D+DUP/exDT7/3sz0F6NEzD0VjshXreOJnZRXX5Z/LbBvtu9k1bWrf3z6C0ajWjiriCMDjnO+ALw1EO7ZWb6J5/r7tW6uXtnz77+gX45VXZse1pVu453NEWNuwvj10j1A6gt2mAs/M25/Yiz9rtQbo0ScLhEczI4kfi3hibe0PP58n5m9oYnH52eLl91X+77zSPr5eWiW/kccd7Ng0MvuAEaYjG2hrbaMhP9s8wvfmUTwZ25eXngkegf/M/XnivKT9QxXPasm97B5vZ5RueT73HkakTcyKlx3yZ5aOZklPQXrMNX4duzamxIczPNoKrSRFl9Z8faUV6NlchWxr9+zFiuhT/Nw0hmNbmr3lMra7AH3cetIVo5kVL0/kHl1Zt7bRtrKFhfE5nnM32zQ1sm3xc1HxyIEenllWhX7sEdO47t83HM0QVeiHnv4gDy5s/718yKQR/MO0sURGftuKFr6/dMPv6+gX/fN2y70reMfpsWu71ec9/bz4fQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFNg8BSJA/yXwnq5uP0LyOJ+8mWWsZ00WhLe3hJGMZixbZBu3Jx3BbOeRIoR/kQVERfuYrI69dIv3lux7UeUe27dvlYXrsWX4hlZtgH4au3HjgAfosc7I36JiOwo58yA9gvPIvqKQt/P9bDg7vdIZ6KV3HlX7UVydV5zHmFEEG9XtEX5XCtDjaxF0P1vSLwpstwZiS/jyFjlvbEUf1fQRtke4HjljXB/jRNYcYVzpdvIlLwBcsCN8umzM9c8wet3CW+csPPLD1QToUTnesdV3SVVztz+OKclJ9zG9Ic3i++xtjLTAusYku/FphYTJtQTo0X/uPewS/bqqzC6tmm5s5dmGRsa3tDIlq3ouUGhMWPnqGJ4tPxO7NwF6rOfMJ5j4+mtMTyJ8jkrtYvibtLGq0jzV/PrKK+2zauxxPNndufOxZXqSMiPOTY/K8uL4LYWEZfPfxNKovI+v5S8nRMjfNpGF8/foXNHc1TbpUbXe0sL2+fOrtCV/pXuKKvxdJrFtQytT8pcm0lZWTZjKi6+vyirKG0oD9OKzHVEYwXZJgUlxhn2E4E1NNK9NeG5cgS1bC0ztLkCPMfLdB3pyLg3L6xCgx3SxDf7k2IL9wrPir+0tQvSoJL/lrmVcssskjpnWvoPE4tUtfG3xam5Y3cJ139yDI2ZP6ugTgXsE7ytWtMRLBI949nlPT9PvK6CAAgoooIACCiiggAIKKKCAAgoooIACCiigwOYoEAH6PcCbh/vN7w/8ud9uIq8Ij0ryKKi1ZQJvBO6r8I5APIokiUcy4C0PrNOEZVfMzkrsq2p5gN5VZXanbcdLztiuanAv6neBofp84piCQsKMhpQn8/Pia8SIrSHil86YjxwznSvP2RCixzhRUR7bsce55tFiy/YIzT9yzLRO27aXhOdxWZxR/1qN6/ByBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUGCzEIgAPdLhHYb73cYm41WnpTXfrAF6l2Q/jgPIN/ruIpKkwgHpNcN36nD27YxZNap9C4PWBhbnZ2DnF825hdFMYLeRMKJhBEvy8657mjUfN7ZhbypQcavtoRrQ9nRvm8v3h+Lzie3jW1N2bmig4cmVPJGfJd+LZ9IRokc4fuU5ezBz+oYzzXsa7/zLFxPnphfPfohdGpb31MfvK6CAAgoooIACCiiggAIKKKCAAgoooIACCiiggAKbq0AE6O0HmQ/zlu8x3T+38QSwsniO+E79M8VwHfUDwLUVFp8kdX8ksX33TpOYFWdgx3nbTQlPzds/O6g9tmCPc7V3StuYkDaxbmUTC8q3Uy9d5XnntW+L/vvDaNh5PDMbGpjSkPLavP2z6tyN2lAMaIfrR6Y/1j0Un09Un6cFth4xjkXdbZdfpUeE6HEmxFZxfVSjH3vEJI49ZMP55qXjREX69bct41s/XZxXp8dZE/HZ3nBAepUTe5kCCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoosDkJGKB3+bQjl32yeJZ4HBkceXAU6sc547YOgTgy/bEKexj0Q4Aec578MFuwmh3irOuGePujQCG+Hudhx59JA22FNSy+4uDsoPgu28m3swVj2SFpaw/SgZaRK3nqkiOyQ+Y3akMxoPVTuEFgM3o+E4DpQPyZtdJzzuPfC5eu7tjSvVh1/hLwYvHvfmwUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQW6ETBA7xJnDRCV5xGkRzYbhZ9RAGrbSOBi4BNlX+2nAD1mOfF+xo0tMKMA49LChuA8aWPVq2N4trvK83yVEbgWEnaFbJvt9TTybPmW8KV3tBkFtMPyA74ZPp+xwGRgPBB/z14gKbb45RWV5nHOuWedD8tPtItWQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUECBwRIwQM/knwMeKJZSR9V5nBe8FFjWzcnqUY0e2ydHMWj8fRdgD2AfYNvBep6DM+87gZvKpu7HAH1wbtJZFVBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBgUxfYTAP0R4HfArcCdwDP1vk5bw8cBBwK/BWwZ53HH4LD3V98dyBfmgH6EHxILkkBBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBboT2IwC9DuB64BfAhGgD2SLAP29wHHAgQM58cDNdT7whZLpDNAHzt6ZFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFCgLgIRoD9T3IO8LgMO1iA7VtxsPbZgvxK4org9+2CtrnTe2Ob9ZGBOcQv4obCmOqwhCu5v7xhnEUkSj8SmgAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKDBuBCNDvAd48bFbcxUL3B/7c8b0Hge8Blw3x2zoVOAPYe4ivs8rlxVHyM7Jr/0ySxCOxKaCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAsNGIAL02NP8PcNmxV0sNDZI/xUPABcAVw2z2/kQ8JmyQ8SH2S3EcmOH/GOzdf+KJIlHYlNAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQWGjUAE6N8tlkEPm0VvvNCXOYMvcklWdT6M26wzYMG5wJbD8yb+Gfj3bOnfI0k+MTxvwlUroIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooMDmKhAB+tnAfwxfgMj/P8+3Wck/Dt+baF95PIXdJsJ3vgK/HYb581uAu7I7+UeS5NvD/XG4fgUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUU2LwEIkB/F/Dr4XfbjwCR/d+cLT1u4OjhdxOdVxw3EU8j2uXvhLO/Dc1vGF53tRzYgneTJP87vBbuahVQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQYHMXiAB9W2DJ8IK4DIgK7daOZT8HbDe8bmLj1cZTiKeRt1saYe734MlTh8+d/QJ4H9uRJPFIbAoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooMCwEUhipSnpSmDC8Fj1XOAHFZc6E3h2eNzExqvcHlhcYfERqv/dx+D/zRsWdzblLFa9elEycVgs1kUqoIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACJQJ5gP48MH1oyywCTgRu7XKZJwDXDu2b6Hp1xwPXdLP4vz0Ufv4TYIchfYdHvoWlv7k7mTGkF+niFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAgQoCeYDefnL1kG13Rhk2ECF61+27wJlD9h56WNjFxV3pu7vsH3eAb/8ncOCQvcsLJvLKZ1YmU4fsAl2YAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoo0IVAnIE+DmgeukI3A0dVtbxHgTdUdeUQvOgRYM8q1vUz4PibgHdWcfHAX1K8jfEJyesDP7szKqCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAr0XiAD9AODu3g/Rnz1vAN5T0wQRoEeQPqzaNODlGlYc56Jv/yvgmBo69f+lkf9HgA68JSH5U//P6AwKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKBA/QQiQJ8D/LB+Q9ZrpOorz0tn/BzwjXotYaDGGQ8sBqbUMOErwNShVYn+WeDr7bfw0YTkyhruxksVUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUECBQReIAD3y5s8M+ko6LSDOPD+oV0vqfc9eTVe/TnG0+Qk1DndXHId+x5A5E71kJRckJJGn2xRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQIFhIxABeuyTfvTQWfEi4DAg/uxdi63EH+td18Hr9VFgfi+mv3oH+NAfgB160bl+XfbovHX+jQnJ0Npfvn636kgKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKLCJCkSAfnuvy737BeXtwK19GvmbQ6+kvuf7GQWsBEb2fOlGV5x3KHzxj73oWL8uFwCf3jDc7QnJ2+o3uiMpoIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIAC/S8QAfp9wH79P1U1M8wFflDNhd1eswzYss+jDMIA/wX8TS/n/dDH4Op5vezc924vA9M2DHNfQjK776M6ggIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKDBwAhGgPwrEDtyD3C4DTqvbGmKkGHFYtX8Cony+N+2V2Ij/Urjr1N707lOfmPHSziM8npAMgc9Un27LzgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoosJkJRID+zKAfoM0jwD5AW934HyyOWLcBB2Kgvwd+2oeJ7mqCo++HV97Qh0Fq7/oAsHfnbs8mJDNrH8keCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiigwOAJRID+IrDV4C0hZj4KuLnuSzgRuKruo/bjgO8Hru/j+PPeCafe1MdBqu/+IeAnG1++PCEp2dG9+vG8UgEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFBgsgQjQVwITBmsB8F3gzH6ZPiqj9+2Xkftp0DcD99Rh7P0vhj9/og4D9TzE/ZUr/VcnJON67u0VCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiigwNARiAC9BWganCW9DOwKRIbfPy1i5O/1z9D1H3UKEGeZ97X9z0R4/5PAln0dqdv+Z9D++kOllpAk/Tq5gyuggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAJ1FhjkAL3/4+3+j+jr+ERiH4BPA+fWYcxfnAHv6yrersP47W897EqSBHGnlpJ+ISH5cl1mcRAFEOIRNQAAIABJREFUFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBggAQGcQv3gdtgvf82ia/zU5oFPA58ETivj2PvCTzSxQbrfRy62P1MkmSjhD4ljfj/nIRkkHY1qM/NOYoCCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCmx+AhGgvwhsNfC3fiJw1YBNexRw84DN1suJDgduKfaNGPpLvRwn7/b1D8Fnf9LHQSp2v5kkCdJOrRieR/S/KiGZ2B8TO6YCCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCijQXwIRoD8D7NBfE1Qe90FgnwGd8hFgX6B1QGetcbK/B35a0uccoC8boW8NPPQATNu7xoV0e3lb9vCSJEg7Wkl4Hl97ISGZXs9JHUsBBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRTob4EI0B8F9ujviTqPfxpw2cBOWZwxZh6y7Z+Ab5at7vPAV/uw4n88Fb51aR8G2KjraSRJp4dXFp5Hh4UJya71nNSxFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAgf4WiAD9PmC//p5ow/jLgC0HbrqymeYCPxi02XuY+L+Av6lwzb8AX+vlokcAd74Ms6f1coBO3X5AkgRhR6sQnsf3HkxIBnaLgXrcnWMooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooMBmLRAB+u3AQQOnECXWnxm46SrM9Hbg1kFdQYXJRwErgZFdLOxzwDd6ueivXQCf+3QvO3d0u5UkCbqO1kV4Ht+/MyEZwM9UX2/N/goooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooABEgH4DcPTAYewJPDZw01WYaRFwGBB/Dpn2UWB+D6uJ9w7Kt3iv5gbevQfcGDv197q1kyVJB1k34XlMcmNCckyvZ7OjAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgooMAgCEaBHXfMAlYTfObDF7t2ADp2VFBf5n8AJVXwCopD8W1VcV3pJA7D0DtjqwBo7dlx+EEkSZFnrITyPSy5ISD7b28nsp4ACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCgyGQAToc4AfDszkfdmHvP4rvBk4qv7D1j7idOBhYEqVXf8R+HaV1+aXXftZ+MDXa+yUXX4USRJUWasiPI/LPpqQXNmbyeyjgAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKDJZABOgHAHcPzALeAPRpK/G6LzP2r39P3UetccBzgfNq7PMp4MIa+nx8T7jkkRo6ZJe+hyQJoqxVGZ7HpW9JSP5U62Rer4ACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCgymQATo44Dm/l9EBOcRoA+9NqiV6FF9fg8woxcuZwEXV9lve2BxBOhxBn1VrTeV5/nA4xOS16uaxYsUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUECBISKQxDpS0qeBHft3Td8FzuzfKfowehzw/XfAoj6M0auuvak+L53oE8D3qpz5zxfD7OjQbQuCv6vxzPPSAZ9JSHbqaRK/r4ACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCgw1gTxAj226j+7fxZ0AXNu/U/Rx9EiOTwRu7eM4VXfvS/V56SSnA9+vYtavHA//ek13F8atn0iSdLxHUMO27fm4NyYkx1SxGi9RQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFhpRAHqB/A/hM/65sJvBs/05Rp9HnAj+o01jdDhOV4xF+16OdBlzWw0AHbQ+3L+7qonkkyaml3+xFeB7dL0hIPluPW3IMBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQYCAF8gD9fcAv+m/i54Dt+m/4fhg5sugzgLZ+GDsb8mTg8joPHjvkx0753bV1S2DktqVXtAKfIEk6xe+9DM9j3PcnJP9T5ztzOAUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUKDfBfIAfQtgef/N9uv+3yG+Hxb/CHA2cHO9x54N/LnegxbH+0fg292MvehGmPnu/IK4tbNJkrjVjtaH8DzGmJqQvNJPd+ewCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiigQL8JZAF6tJT0LuAt/TNTJLqR7A7PFkXdnwdW1mv5ab0G6mKczwGxKX+ldtd/wFvOjlv5PEmyUb16H8PzuxOSt/bz3Tm8AgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoo0C8CpQH6vwP/3C+zbHXyCl6aP6lfxh6gQV8GvgjEseW9bv28UX6ndX0B+MrGKz3hpycsuubv//MAkiRuqVPrY3geY30tIfmXXvvYUQEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFBhEgdIA/Vjgun5Zyz/MfprP3bcTFwBX9csMAzboA9C72/gaEJXhA9ki8T+vfcIPAZ8B9vnybg8kX3hi3/Jl1CE8jyGPS0iuH8hbdC4FFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFCgXgKlAfp04Pl6DdxpnC9st4Tzn9su+9qDxTLuy/plpgEbtOrbCNWo7f/IgC2t00SnfhXO+DzsnX/109s9n3xzybalF9UpPI8hZyQkSwfnTp1VAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUU6JtAR4Aew6SktwMH9W3ICr0vn7CMk5undfrOMuBK4ArgsbrPOGADdnkbEZzPLf43Y8CWk020B3AyMAfI0KPy/7PFNZw0dVUyf/nEfEV1DM/vSEgOHtg7dTYFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFCgfgLlAXqcnH1+/YYvjvS7BI7oZtQ7i5vH/xJ4tO6zdz9gJMxrgea+z5vdxnT45Vx4NMLzAQzO9wTeG3uoAwdWupXvAGcDfw3Jf5M99zqG5zHcOQnJl/uu6AgKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKDA4AiUB+j7APfXfSmPJbB7laNGgP5b4FbgDuDZKvtVe9n2xRr7Q4G/AiJ5Xg5EeP+r4p/rqx2seN3IYnr9nuKfU9vfAxjo2+hx1d8DfgrJ7SR1Ds9j6n0Tkjgi3qaAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoMS4FOAXrcQUp6E/DOut7NygQm9HLE54rnpkcivRBYBMQp27F3evy9UtuhuHd5bKMef9+lGJTHQeCdTv+u0HkdcD3wp+KJ8DFXnAyfn+wdY0Zlef7nAcCxwKju72+gb6PL1cwDTk3PA+K/erWbE5Kj6jWY4yiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAKDIVApQP8EcHFdF9OXAL2uC3EwXgGmpvWGODMh+W69B3U8BRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQYCAFKgXoUbP9GDC6bgupZQv3uk3qQBUFHgH2qmuAHifI75GQdLUfgA9CAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUGBYCGwXoseqU9FrgA3W7g98lcETdRnOgvgjEwexH1jVA/1lCcnxflmRfBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQYCgIdBWgnwj8uG4LvHzCMk5unla38Ryo9wJXjF/GKavq+Sw+nJD8pPcLsqcCCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCigwNAS6CtCbgPuAN9ZlmV/YbgnnP7ddXcZykL4JnDtjCV+q27N4CHhTQtLat0XZWwEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFBh8gYoBeiwrJf00cEFdlvgPs5/m6vt2qstYDtI3gRP3e4qr7tu5b4N09P5MQvLNOo3lMAoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooMCgCnQXoMc231GF3vfK8YP+9klu//mug3qnTt4ucOhfP8FtP9+tDhxLitXny+owlkMooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACgy7QZYAeK0tJzwe+0OdVzvy3p1l0vhXofYaswwA7nvMUi75Ujwr0Lyck59RhRQ6hgAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKDAmBngL0qBqPKvTxfVrt2Otf5PXjtu7TGHauj8C4619g9fu36eNgzcXq8yf7OI7dFVBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAgSEj0G2AHqtMSS8GPtGnFSdL1lPYfmSfxrBzfQQanl1Pul1fn8V3E5Iz67MgR1FAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQWGhkA1AfqbgFuBcX1a8h9Gv8jb11mF3ifEPnb+46gXOWxtX5/B63GSekISOxPYFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAgU1GoMcAPe40JY1z0OM89N63j771UebfvWfvB7BnnwVOesuj/PCuvj6DcxKSL/d5LQ6ggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKDDGBagP0pmIV+oG9Xv82X32WpZ/fvtf97dh3gelfeZYX/rUvz+DOYvV5a98X4wgKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKDA0BKoKkCPJaek7weu7/3yH4XFb4C+xLe9n9yezwIzHwH6VIB+bELyCzEVUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUECBTVGg6gA9bj4lnQd8rNcQF0x7gU8v36bX/e3Ye4FvTn2Bzyzri/0PEpK5vV+APRVQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQIGhLVBrgL5zcSv3Gb26rQM+/Dh3/2T3XvW1U98E3nLi4/zpx721f764dftTfVuEvRVQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQIGhK1BTgB63kZKeCVzUq1sacdurrD10Cg296m2n3goUgNG3vkrLIVN6OcRZCcnFvexrNwUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUGBYCNQcoMddpaRXAR/s1R3+fMKz/HWzJ6H3Cq+Xnf57/LP8zareml+dkHyolzPbTQEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFBg2Ar0N0GML95uBvWq+03edcgu/vuKImvvZofcC7z75Fv738t6YPwy8MyGJLdxtCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiigwCYt0KsAPURS0mOAX9WsM+KFB2ievg8ja+5ph94IrAfGL32Alm326UX39yQkN/Sin10UUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUECBYSfQ6wA97jQl/Tzw5Zrv+uOH3skltx1Ycz871C5w+iF38v1be2P9hYTkK7VPaA8FFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBgeAr0KUCPW05J/wv4m5puf8R9L7Fw9lb09lTumibbjC9+Ftjl3pdoedNWNSr8PCH52xr7eLkCCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCigwrAXqEaDvDPwamFWTxAlvf5T/vHXPmvp4cW0Cf3foo1zzx1qNFwDvTkieqm0yr1ZAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQWGt0CfA/S4/ZT0MOB/gInVczxQ4O59Gzig+h5eWYPAn4C33F+AfRpq6LUSeF9C8oca+nipAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoosEkI1CVAD4mU9HjgmppU3v7XC/jDdbVVrtc0wWZ88WHHLeCP/12r7QkJybWbsZq3roACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACm7FA3QL0MExJTwKuqN7zZbh+xmre3zq2+j5e2aPAL5pWc+zzY2HLHi8tueDkhGR+LR28VgEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFNiUBOoaoAdMSnoWcGHVSDt/8XEWnrd71dd7Yc8Cu5z3OE+dW4vpJxOSi3oe2CsUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUECBTVeg7gF6UKWk/wp8pWq2r+30MJ97Zq+qr/fCrgW+vuPD/PPTtVh+PiH5qqQKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKDA5i7QLwF6oKakZwLVVTU3PriC2/Ydz4Fp4+b+QPp0/3clBd52/yra9p5U5ThnJSQXV3mtlymggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAKbtEC/BeihlpK+G7ixKsHp33iahz63E1tUdbUXlQu8Arzx60+z9LM7VYlzdELy6yqv9TIFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBgkxfo1wA99FLSI4DfVSV5+Pue5JZf7lrVtV7UWeCI9zzJ76u2e0dCcouECiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIbBPo9QI+pUtKDgOuBrXrEP2uXRVz41A49XucFGwQ+ufMiLlpYjdlLwLEJyR3yKaCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgp0FhiQAD2mTEnfBFwN7Nn9Q1gEl79xGSc3T/NhVSFwxfhlnPLQNOgxP38U+GBCcl8Vo3qJAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoosNkJDFiAHrIp6c7AN4C/6V76TrjzIHjrZvc8arvhu4ADo5j8wJ76/Rz4bELyVE8X+n0FFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBgcxUY0AA9R05JPw98uXv0m2H5UbDF5vpoerjvV4CpNwHv7AnoCwnJV3q6yO8roIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACm7vAoATogZ6SHgN8Hdir64dwAzz7Hthuc39MZfe/BNj+V0AQdtkeBj6XkNygngIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKBAzwKDFqDH0lLSGcUt3T/Y9VJvhmuPgg/0fDObxRU/A47vsfI8zpqPLduf3yxMvEkFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFCgDgKDGqDn609JzwT+GYhAvUK7E04/ZiXfe2ViHe55+A5xxhYrueSGid2ceR6B+dcSkouH7026cgUUUEABBRRQQAEFFFBAAQUUUEABBf7/9u4/1Or6juP461u6wmxSXjezxCV1qyWBUOBKCyJDsJ/7o2gExWisQYyIIlhBBGswiogx2KKIgsGqPypXgzFjUFYTCgSxVbewhctZ3hSXSab5jW+dS9e723/30zmfex8X7h/XC+/v+zze978nnkOAAAECBAgQIECAQH8EBiKgdy+9Tbu0F9F/NjnFe8lFl4xm/Zah/lD1+amrl43m+eeGkiXftMhDvXi+tc+bejwBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqFBiYgD6m16a9vBfSV0wqevrVO7L+yYUz5nPRu887X33Vjrz5xMJv+Avb2Avn66r8C7Q0AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEBkRg4AJ659KmndWL6N3buh/zf1bzHtiZp26ZnwvbIwbEscwa/2g+z4/v35U9Ny+Y5AGfdOG8F88PllnAVAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECMwcgYEM6GP8bdrlSX6a5Pokcw87yxFb9uU3l76b2/995rQ8129/8Hp+9ezJObRszoTXtzfJo0keadJsmpav3YsiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAHwQGOqCPebRpT0lyXS+kn3SY09K738r9v16cyw9ODM194JyCR66btS+33LktW+86bcK07s3cu3D+WJPmnSl4khEECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgME6gioA+tm+bdqgX0buYvuzr17EzOf/nI7nv6eGcU+l9X01y65UjefHB4eSwd2zf0kXzLp43aUYrfXXWJkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwMALVBXQxzR7n5F+TZJLe99Hf/W7zYdy9U1v5d4NZ2TxwNt/teC2JLeteiNP/P605Kyxz3T/NMmzve8/N2l8xnkl57QmAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQL1ClQZ0Mdzt2mXjAvpF3/5u9mbPswNv9yaB15ake8M6HE+S3Lzyo15+HdLc2D593pb/n0snDdp3hvQza1FgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBaSlQfUAff5U27VlJLkuyNsmKzN6xOavvGM2NT56atXsXZ+z/d/frlIeS/HXutvzxqrez/p6hHFjY7bux+9ckf2nSbO7Xap5LgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBmS4wrQL6hJjevYn7qiTnJjkvszcszrl/2J6f/G1+Ltm9KIu+pdNv79L4cdvz+JpdeeUXJ+TAqu5N219O8kqSDU2a7mdfBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQINBngWkb0Ce6tmmHekF9ZY597fzM60L6M5/k2i0Lct7+70/pHV4+6oP8adnOPHfFMdmz5qN8fPaLSV7qBfPRKX2WYQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAwJQIzJqBPptWm/W6SH2XhpovTvHFBPnr/zMwZ+TwnjezPKe+3Gd41Kz/cPS8nJ1nam7A1ybtJ/nXcnowcfzDvnNjkP8NHZd/wkZl/4uvJGS/kv8u7zzL/Z5Pmf1NyJUMIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoLjAjA7oxXU9gAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqERDQqzmVRQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgpICAXlLXbAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBCoRkBAr+ZUFiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBkgICekldswkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgGgEBvZpTWZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIESgoI6CV1zSZAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBagQE9GpOZVECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCkgoJfUNZsAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEqhEQ0Ks5lUUJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoKSAgF5S12wCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqEZAQK/mVBYlQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZICAnpJXbMJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoBoBAb2aU1mUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEoKCOgldc0mQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgWoEBPRqTmVRAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgpIKCX1DWbAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBKoRENCrOZVFCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCkgIBeUtdsAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKhGQECv5lQWJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGSAgJ6SV2zCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKAaAQG9mlNZlAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgRKCgjoJXXNJkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFqBAT0ak5lUQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoKSCgl9Q1mwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqERDQqzmVRQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgpICAXlLXbAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBCoRkBAr+ZUFiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBkgICekldswkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgGgEBvZpTWZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIESgoI6CV1zSZAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBagQE9GpOZVH3uaMpAAAC50lEQVQCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCkgoJfUNZsAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEqhEQ0Ks5lUUJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoKSAgF5S12wCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQqEZAQK/mVBYlQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZICAnpJXbMJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoBoBAb2aU1mUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEoKCOgldc0mQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgWoEBPRqTmVRAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgpIKCX1DWbAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBKoRENCrOZVFCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCkgIBeUtdsAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKhGQECv5lQWJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGSAgJ6SV2zCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKAaAQG9mlNZlAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgRKCgjoJXXNJkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFqBAT0ak5lUQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoKSCgl9Q1mwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqERDQqzmVRQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgpMAXrmvPXjh0UgAAAAAASUVORK5CYII=,data:image/png;base64,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,extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_filter_anisotropic;WEBKIT_EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBKIT_WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBKIT_WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBKIT_WEBGL_lose_context,webgl aliased line width range:[1, 1],webgl aliased point size range:[1, 1024],webgl alpha bits:8,webgl antialiasing:yes,webgl blue bits:8,webgl depth bits:24,webgl green bits:8,webgl max anisotropy:16,webgl max combined texture image units:32,webgl max cube map texture size:16384,webgl max fragment uniform vectors:1024,webgl max render buffer size:16384,webgl max texture image units:16,webgl max texture size:16384,webgl max varying vectors:30,webgl max vertex attribs:16,webgl max vertex texture image units:16,webgl max vertex uniform vectors:4095,webgl max viewport dims:[32767, 32767],webgl red bits:8,webgl renderer:WebKit WebGL,webgl shading language version:WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium),webgl stencil bits:0,webgl vendor:WebKit,webgl version:WebGL 1.0 (OpenGL ES 2.0 Chromium),webgl unmasked vendor:Google Inc.,webgl unmasked renderer:ANGLE (NVIDIA GeForce RTX 2080 Direct3D11 vs_5_0 ps_5_0),webgl vertex shader high float precision:23,webgl vertex shader high float precision rangeMin:127,webgl vertex shader high float precision rangeMax:127,webgl vertex shader medium float precision:23,webgl vertex shader medium float precision rangeMin:127,webgl vertex shader medium float precision rangeMax:127,webgl vertex shader low float precision:23,webgl vertex shader low float precision rangeMin:127,webgl vertex shader low float precision rangeMax:127,webgl fragment shader high float precision:23,webgl fragment shader high float precision rangeMin:127,webgl fragment shader high float precision rangeMax:127,webgl fragment shader medium float precision:23,webgl fragment shader medium float precision rangeMin:127,webgl fragment shader medium float precision rangeMax:127,webgl fragment shader low float precision:23,webgl fragment shader low float precision rangeMin:127,webgl fragment shader low float precision rangeMax:127,webgl vertex shader high int precision:0,webgl vertex shader high int precision rangeMin:31,webgl vertex shader high int precision rangeMax:30,webgl vertex shader medium int precision:0,webgl vertex shader medium int precision rangeMin:31,webgl vertex shader medium int precision rangeMax:30,webgl vertex shader low int precision:0,webgl vertex shader low int precision rangeMin:31,webgl vertex shader low int precision rangeMax:30,webgl fragment shader high int precision:0,webgl fragment shader high int precision rangeMin:31,webgl fragment shader high int precision rangeMax:30,webgl fragment shader medium int precision:0,webgl fragment shader medium int precision rangeMin:31,webgl fragment shader medium int precision rangeMax:30,webgl fragment shader low int precision:0,webgl fragment shader low int precision rangeMin:31,webgl fragment shader low int precision rangeMax:30,Google Inc.~ANGLE (NVIDIA GeForce RTX 2080 Direct3D11 vs_5_0 ps_5_0),false,false,false,false,false,0,false,false,Arial,Arial Black,Arial Narrow,Arial Unicode MS,Book Antiqua,Bookman Old Style,Calibri,Cambria,Cambria Math,Century,Century Gothic,Century Schoolbook,Comic Sans MS,Consolas,Courier,Courier New,Georgia,Helvetica,Impact,Lucida Bright,Lucida Calligraphy,Lucida Console,Lucida Fax,Lucida Handwriting,Lucida Sans,Lucida Sans Typewriter,Lucida Sans Unicode,Microsoft Sans Serif,Monotype Corsiva,MS Gothic,MS PGothic,MS Reference Sans Serif,MS Sans Serif,MS Serif,MYRIAD PRO,Palatino Linotype,Segoe Print,Segoe Script,Segoe UI,Segoe UI Light,Segoe UI Semibold,Segoe UI Symbol,Tahoma,Times,Times New Roman,Trebuchet MS,Verdana,Wingdings,Wingdings 2,Wingdings 3,124.04344884395687';

var fcacheType = 'P';

function components() {
    var fp = recognition.x64hash128(data, 31);
    var secretCode = '';
    switch (fcacheType) {
    case 'A':
        secretCode = handleCode(window.btoa(fp), 'int', '+', 0, 3) + '@' + fp + '*' + handleCode(md5(fp), 'en', '+', 0, 5);
        break;
    case 'B':
        secretCode = handleCode(md5(fp), 'en', '+', 0, 5) + '#' + fp + '*' + handleCode(sha256(fp), 'int', '-', 0, 5);
        break;
    case 'C':
        secretCode = handleCode(sha256(fp), 'en', '-', 0, 7) + '-' + handleCode(md5(fp), 'int', '+', 0, 4) + fp;
        break;
    case 'D':
        secretCode = fp + '+' + handleCode(md5(fp), 'en', '-', 0, 4) + handleCode(sha256(fp), 'int', '+', 0, 3);
        break;
    case 'E':
        secretCode = handleCode(fp, 'en', '+', 0, 2) + '%' + handleCode(sha256(fp), 'int', '+', 0, 2) + fp;
        break;
    case 'F':
        secretCode = handleCode(sha256('8f0' + fp + 'b7a'), 'mix', '-', 7, 8) + fp + handleCode(md5('f16s' + fp + 'd'), 'mix', '+', 5, 8);
        break;
    case 'G':
        secretCode = handleCode(sha224('9a1' + fp + 'q1'), 'mix', '+', 10, 9) + handleCode(md5('e5cv' + fp + 'v1'), 'mix', '-', 7, 8) + fp;
        break;
    case 'H':
        secretCode = handleCode(md5('eds' + fp + '874'), 'mix', '-', 4, 7) + fp + handleCode(sha384('t3b' + fp + 'fe4'), 'mix', '+', 6, 8);
        break;
    case 'I':
        secretCode = handleCode(sha224('11a' + fp + 'q1aa'), 'mix', '-', 12, 15) + fp + handleCode(md5('r124' + fp + 'v'), 'mix', '-', 8, 7);
        break;
    case 'J':
        secretCode = fp + handleCode(sha384('e5da' + fp + 'q'), 'mix', '-', 13, 5) + handleCode(sha512('d31' + fp + 'l78'), 'mix', '-', 10, 9);
        break;
    case 'K':
        secretCode = handleCode(md5('p3sa' + fp + 'ps5'), 'mix', '-', 8, 7) + handleCode(sha224('vbne' + fp + '834'), 'mix', '-', 15, 10) + fp;
        break;
    case 'L':
        secretCode = fp + handleCode(sha512('idmn' + fp + '78g'), 'mix', '-', 4, 6) + handleCode(md5('d84' + fp + 'rtd'), 'mix', '-', 12, 5);
        break;
    case 'M':
        secretCode = handleCode(sha224('dfs' + fp + 'e1y'), 'mix', '-', 10, 9) + handleCode(sha512('bvs4' + fp + '12s'), 'mix', '-', 15, 7) + fp;
        break;
    case 'N':
        secretCode = fp + handleCode(sha384('ad4f' + fp + 'qz'), 'mix', '-', 4, 6) + handleCode(sha512('nqu' + fp + '7dbn'), 'mix', '-', 30, 12);
        break;
    case 'O':
        secretCode = handleCode(sha512('7df4' + fp + '1f'), 'mix', '-', 9, 6) + fp + handleCode(md5(fp + 'd3f1'), 'mix', '-', 4, 7);
        break;
    case 'P':
        secretCode = fp + handleCode(sha512('nd8a' + fp + '1x'), 'mix', '-', 18, 7) + handleCode(sha256('pa' + fp + '178a'), 'mix', '-', 7, 10);
        break;
    case 'Q':
        secretCode = handleCode(sha224(fp + 'of555'), 'mix', '-', 4, 6) + handleCode(sha512('37ol' + fp + 'j'), 'mix', '+', 15, 9) + fp;
        break;
    case 'R':
        secretCode = handleCode(sha384('ok2' + fp + 'pzl1'), 'mix', '+', 8, 10) + fp + handleCode(md5('grew5' + fp + '4'), 'mix', '-', 2, 7);
        break;
    default:
        secretCode = handleCode(md5(fp), 'en', '+', 0, 5) + '#' + fp + '*' + handleCode(sha256(fp), 'int', '-', 0, 5);
    };
    return window.btoa(secretCode);
}

function handleCode(code, type, order, start, length) {
    if (type !== 'mix') {
        var str = type === 'en' ? 'AAAAAAAAAA' : '0000000000';
        var reg = type === 'en' ? /[0-9]/g : /\D/g;
        if (order === '+') {
            return code.replace(reg, '').concat(str).substr(start, length);
        }
        return (str + code).replace(reg, '').split('').reverse().join('').substr(start, length);
    }
    if (order === '+') {
        return code.substr(start, length);
    }
    return code.split('').reverse().join('').substr(start, length);
}
