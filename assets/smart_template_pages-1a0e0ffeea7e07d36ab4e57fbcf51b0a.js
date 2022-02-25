"function" == typeof require && require("neon"),
  Class("Chameleon")({
    COLOR_NAMES: {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      "indianred ": "#cd5c5c",
      "indigo ": "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgrey: "#d3d3d3",
      lightgreen: "#90ee90",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370d8",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#d87093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32",
    },
    RGBRegExp:
      /^\s*rgba?\s*\((\d+)\,\s*(\d+)\,\s*(\d+)(,\s*(\d+(\.\d+)?))?\)\s*$/,
    HTMLRegExp: /^\#([0-9A-Fa-f]{6})$/,
    HTMLShortRegExp: /^\#([0-9A-Fa-f]{3})$/,
    RGBToHSV: function (e, t, n) {
      (e /= 255), (t /= 255), (n /= 255);
      var i,
        r,
        o,
        s = Math.max(e, t, n),
        a = Math.min(e, t, n);
      return (
        s === a
          ? (i = 0)
          : s === e
          ? (i = (60 * ((t - n) / (s - a)) + 360) % 360)
          : s === t
          ? (i = 60 * ((n - e) / (s - a)) + 120)
          : s === n && (i = 60 * ((e - t) / (s - a)) + 240),
        (r = 0 === s ? 0 : (s - a) / s),
        (o = s),
        (i = Math.round(i)),
        (r = Math.round(100 * r)),
        (o = Math.round(100 * o)),
        { h: i, s: r, v: o }
      );
    },
    HexStringToHSV: function (e) {
      var t = parseInt(e.substr(0, 2), 16),
        n = parseInt(e.substr(2, 2), 16),
        i = parseInt(e.substr(4, 2), 16);
      return isNaN(t) || isNaN(n) || isNaN(i) ? void 0 : this.RGBToHSV(t, n, i);
    },
    HSVToRGB: function (e, t, n) {
      var i, r, o;
      if (0 === t) i = r = o = Math.round(2.55 * n);
      else {
        (e /= 60), (t /= 100), (n /= 100);
        var s = Math.floor(e),
          a = e - s,
          l = n * (1 - t),
          c = n * (1 - t * a),
          u = n * (1 - t * (1 - a));
        switch (s) {
          case 0:
            (i = n), (r = u), (o = l);
            break;
          case 1:
            (i = c), (r = n), (o = l);
            break;
          case 2:
            (i = l), (r = n), (o = u);
            break;
          case 3:
            (i = l), (r = c), (o = n);
            break;
          case 4:
            (i = u), (r = l), (o = n);
            break;
          default:
            (i = n), (r = l), (o = c);
        }
        (i = Math.round(255 * i)),
          (r = Math.round(255 * r)),
          (o = Math.round(255 * o));
      }
      return { r: i, g: r, b: o };
    },
    HSVToLAB: function (e, t, n) {
      var i,
        r,
        o,
        s,
        a,
        l,
        c = [
          [0.4124, 0.3576, 0.1805],
          [0.2126, 0.7152, 0.0722],
          [0.0193, 0.1192, 0.9505],
        ],
        u = [],
        h = [],
        d = [],
        p = this.HSVToRGB(e, t, n);
      for (
        u.push(p.r / 255), u.push(p.g / 255), u.push(p.b / 255), s = 0;
        s < u.length;
        s++
      )
        u[s] =
          u[s] > 0.04045 ? Math.pow((u[s] + 0.055) / 1.055, 2.4) : u[s] / 12.92;
      for (a = 0; a < u.length; a++)
        h.push(u[0] * c[a][0] + u[1] * c[a][1] + u[2] * c[a][2]);
      for (
        h[0] = (100 * h[0]) / 95.047,
          h[1] = (100 * h[1]) / 100,
          h[2] = (100 * h[2]) / 108.883,
          l = 0;
        l < h.length;
        l++
      )
        d.push(
          h[l] > 0.008856 ? Math.pow(h[l], 1 / 3) : (903.3 * h[l] + 16) / 116
        );
      return (
        (i = Math.round(116 * d[1] - 16)),
        (r = Math.round(500 * (d[0] - d[1]))),
        (o = Math.round(200 * (d[1] - d[2]))),
        { l: i, a: r, b: o }
      );
    },
    LABToHSV: function (e, t, n) {
      var i,
        r,
        o,
        s = [],
        a = [];
      for (
        s[1] = (e + 16) / 116,
          s[0] = t / 500 + s[1],
          s[2] = s[1] - n / 200,
          i = 0;
        i < s.length;
        i++
      )
        (s[i] = Math.pow(s[i], 3)),
          !s[i] > 0.008856 && (s[i] = (s[i] - 16 / 116) / 7.787);
      for (
        s[0] = 0.95047 * s[0],
          s[1] = 1 * s[1],
          s[2] = 1.08883 * s[2],
          a[0] = 3.2406 * s[0] + -1.5372 * s[1] + s[2] * -0.4986,
          a[1] = s[0] * -0.9689 + 1.8758 * s[1] + 0.0415 * s[2],
          a[2] = 0.0557 * s[0] + s[1] * -0.204 + 1.057 * s[2],
          r = 0;
        r < a.length;
        r++
      )
        (a[r] =
          a[r] > 0.0031308
            ? 1.055 * Math.pow(a[r], 1 / 2.4) - 0.055
            : 12.92 * a[r]),
          (a[r] = 255 * Math.min(Math.max(0, a[r]), 1));
      return (o = this.RGBToHSV(a[0], a[1], a[2])), { h: o.h, s: o.s, v: o.v };
    },
    prototype: {
      _h: 0,
      _s: 0,
      _v: 0,
      _a: 100,
      _o: 1,
      isAchromatic: !1,
      init: function (e) {
        if (e instanceof Chameleon)
          (this._h = e.getHue()),
            (this._s = e.getSaturation()),
            (this._v = e.getValue());
        else if ("transparent" === e) this._a = 0;
        else if ("string" == typeof e && this.constructor.RGBRegExp.test(e)) {
          var t = this.constructor.RGBToHSV(
            parseInt(RegExp.$1),
            parseInt(RegExp.$2),
            parseInt(RegExp.$3)
          );
          (this._h = t.h),
            (this._s = t.s),
            (this._v = t.v),
            (this._o = RegExp.$5);
        } else if (
          "string" == typeof e &&
          this.constructor.HTMLRegExp.test(e)
        ) {
          var t = this.constructor.HexStringToHSV(RegExp.$1);
          (this._h = t.h), (this._s = t.s), (this._v = t.v);
        } else if (
          "string" == typeof e &&
          this.constructor.HTMLShortRegExp.test(e)
        ) {
          for (
            var n = e.match(this.constructor.HTMLShortRegExp)[1].split(""),
              i = [],
              r = 0;
            r < n.length;
            r++
          )
            i.push(n[r]), i.push(n[r]);
          var o = i.join(""),
            t = this.constructor.HexStringToHSV(o);
          (this._h = t.h), (this._s = t.s), (this._v = t.v);
        } else if (
          "string" == typeof e &&
          this.constructor.COLOR_NAMES[e.toLowerCase()]
        ) {
          var s = this.constructor.COLOR_NAMES[e.toLowerCase()].replace(
              "#",
              ""
            ),
            t = this.constructor.HexStringToHSV(s);
          (this._h = t.h), (this._s = t.s), (this._v = t.v);
        } else if (
          e instanceof Object &&
          e.hasOwnProperty("r") &&
          e.hasOwnProperty("g") &&
          e.hasOwnProperty("b")
        ) {
          var t = this.constructor.RGBToHSV(e.r, e.g, e.b);
          (this._h = t.h), (this._s = t.s), (this._v = t.v);
        } else {
          if (
            !(
              e instanceof Object &&
              e.hasOwnProperty("h") &&
              e.hasOwnProperty("s") &&
              e.hasOwnProperty("v")
            )
          )
            throw (
              (console.log("color could not be parsed"),
              console.log("color", typeof e),
              console.log(e),
              new Error("unparseable color"))
            );
          (this._h = e.h), (this._s = e.s), (this._v = e.v);
        }
        0 === this._s && (this.isAchromatic = !0);
      },
      getHue: function () {
        return this._h;
      },
      getSaturation: function () {
        return this._s;
      },
      getValue: function () {
        return this._v;
      },
      setHue: function (e) {
        return (this._h = e), this;
      },
      setSaturation: function (e) {
        return (
          (this._s = e), (this.isAchromatic = 0 === this._s ? !0 : !1), this
        );
      },
      setValue: function (e) {
        return (this._v = e), this;
      },
      iluminateBy: function (e) {
        return (this._v = this._v + e), this._v > 100 && (this._v = 100), this;
      },
      luminosityBy: function (e) {
        var t, n;
        return (
          (t = this.toLAB()),
          (t.l += e),
          t.l > 100 && (t.l -= 100),
          (n = this.constructor.LABToHSV(t.l, t.a, t.b)),
          (this._h = n.h),
          (this._s = n.s),
          (this._v = n.v),
          this
        );
      },
      obscureBy: function (e) {
        return (this._v = this._v - e), this._v < 0 && (this._v = 0), this;
      },
      saturateBy: function (e) {
        return (
          0 === this._s
            ? (this.isAchromatic = !0)
            : this.setSaturation(this._s + e),
          this._s > 100 && (this._s = 100),
          this.isAchromatic === !0 && (this._s = 0),
          this
        );
      },
      desaturateBy: function (e) {
        return (
          this.setSaturation(this._s - e),
          this._s < 0 && ((this._s = 0), (this.isAchromatic = !0)),
          1 == this.isAchromatic && (this._s = 0),
          this
        );
      },
      rotateBy: function (e) {
        var t = this.copy();
        return (
          (t._h += e),
          t._h >= 360 && (t._h -= 360),
          t._h < 0 && (t._h += 360),
          t
        );
      },
      warmBy: function () {},
      coolBy: function () {},
      transform: function (e, t, n) {
        return (
          e > -1 && (this._h = e),
          t > -1 && (this._s = t),
          n > -1 && (this._v = n),
          0 === this._s && (this.isAchromatic = !0),
          this.isAchromatic === !0 && (this._s = 0),
          this
        );
      },
      setSV: function (e, t) {
        return this.transform(-1, e, t), this;
      },
      setBalancedSV: function (e, t) {
        var n = this.toGray();
        return (
          n._v > 50
            ? (e > -1 && this.desaturateBy(e), t > -1 && this.obscureBy(t))
            : (e > -1 && this.saturateBy(e), t > -1 && this.iluminateBy(t)),
          this
        );
      },
      gradientSV: function (e, t) {
        return (
          this._v > 50
            ? (e > -1 && 100 == this.saturation
                ? this.desaturateBy(e)
                : e > -1 && 0 === this.saturation && this.saturateBy(e),
              t > -1 && this.obscureBy(t))
            : (e > -1 && 0 === this.saturation
                ? this.saturateBy(e)
                : e > -1 && 100 == this.saturation && this.desaturateBy(e),
              t > -1 && this.iluminateBy(t)),
          this
        );
      },
      copy: function () {
        return new this.constructor(this);
      },
      getLuminance: function () {
        var e = this.toLAB();
        return e.l;
      },
      isLegible: function (e) {
        var t = e.toGray(),
          n = this.toGray();
        return Math.abs(t.getValue() - n.getValue()) > 30 ? !0 : !1;
      },
      getLegibles: function (e) {
        var t = [];
        this.isLegible(e) && t.push(e);
        var n,
          i = e.getHue();
        if (e.isAchromatic)
          for (var r = 0; 100 >= r; r += 1)
            (n = new this.constructor({ h: i, s: 0, v: r })),
              this.isLegible(n) && t.push(n);
        else
          for (var o = 0; 100 >= o; o += 10)
            for (var r = 0; 100 >= r; r += 10)
              (n = new this.constructor({ h: i, s: o, v: r })),
                this.isLegible(n) && t.push(n);
        for (var s = {}, a = 0; a < t.length; a++) s[t[a].toHTML()] = !0;
        var l = [];
        for (var a in s) l.push(a);
        for (var c = [], u = [], h = l.length, a = 0; h > a; a++) {
          var e = new Chameleon(l[a]),
            d = e._s + e._v;
          130 >= d ? u.push(l[a]) : c.push(l[a]);
        }
        c.sort(function (e, t) {
          return (
            parseInt(e.substr(1, e.length - 2), 16) -
            parseInt(t.substr(1, t.length - 2), 16)
          );
        }),
          u.sort(function (e, t) {
            return (
              parseInt(e.substr(1, e.length - 2), 16) -
              parseInt(t.substr(1, t.length - 2), 16)
            );
          }),
          (l = u.concat(c));
        for (var p = [], f = Math.round(l.length / 10), a = 0; 9 > a; a++)
          p.push(l[f * a]);
        return p;
      },
      getLegible: function (e) {
        if (this.isLegible(e)) return this;
        for (var t = this.getLegibles(e), n = [], i = 0; i < t.length; i++)
          n.push(new Chameleon(t[i].toString()));
        return this.byNearestColor(n)[0];
      },
      byNearestColor: function (e) {
        var t = this;
        return e.sort(function (e, n) {
          return (
            Math.abs(e.toHex() - t.toHex()) - Math.abs(n.toHex() - t.toHex())
          );
        });
      },
      toGray: function () {
        var e,
          t,
          n,
          i = this.toRGB();
        return (
          (e = t = n = Math.round((11 * i.r + 16 * i.g + 5 * i.b) / 32)),
          new this.constructor({ r: e, g: t, b: n })
        );
      },
      toRGB: function () {
        return this.constructor.HSVToRGB(this._h, this._s, this._v);
      },
      toHSV: function () {
        return { h: this._h, s: this._s, v: this._v };
      },
      toLAB: function () {
        return this.constructor.HSVToLAB(this._h, this._s, this._v);
      },
      toHex: function e() {
        var e = Number(this.toHTML().toString().replace("#", "0x"));
        return e;
      },
      toHTML: function () {
        if (0 === this._a) return "transparent";
        var e = this.toRGB(),
          t = e.r.toString(16),
          n = e.g.toString(16),
          i = e.b.toString(16);
        return (
          1 === t.length && (t = "0" + t),
          1 === n.length && (n = "0" + n),
          1 === i.length && (i = "0" + i),
          "#" + t.toString() + n.toString() + i.toString()
        );
      },
      toHTMLRGB: function () {
        if (0 === this._a) return "transparent";
        var e = this.toRGB();
        return (!this._o && 0 !== this._o) || 1 == this._o
          ? "rgb(" + e.r + ", " + e.g + "," + e.b + ")"
          : "rgba(" + e.r + ", " + e.g + "," + e.b + ", " + this._o / 100 + ")";
      },
      complementary: function () {
        return this.rotateBy(180);
      },
      triadic: function (e, t) {
        return (
          (e = e || "1"), (t = t || 120), this.rotateBy("1" == e ? t : -1 * t)
        );
      },
      analogous: function (e, t) {
        return (
          (e = e || "1"), (t = t || 30), this.rotateBy("1" == e ? t : -1 * t)
        );
      },
      split: function (e, t) {
        return (
          (e = e || "1"), (t = t || 150), this.rotateBy("1" == e ? t : -1 * t)
        );
      },
      balanceChoose: function (e, t) {
        var n = this.toGray();
        return n._v > 50 ? t : e;
      },
    },
  }),
  "undefined" != typeof module &&
    "undefined" != typeof module.exports &&
    (module.exports = Chameleon),
  Class("CropperRemote")({
    CROP_URL: "/cropper/crop",
    CROP_VIDEO_URL: "/cropper/cropVideo",
    UPLOAD_URL: "/cropper/upload",
    UPLOAD_VIDEO_URL: "/cropper/uploadVideo",
    cropImage: function (e) {
      return new Promise(function (t, n) {
        $.ajax(CropperRemote.CROP_URL, { method: "POST", data: e })
          .done(t)
          .fail(n);
      });
    },
    cropVideo: function (e) {
      return new Promise(function (t, n) {
        $.ajax(CropperRemote.CROP_VIDEO_URL, { method: "POST", data: e })
          .done(t)
          .fail(n);
      });
    },
    uploadImage: function (e) {
      return new Promise(function (t, n) {
        t();
        // var i = new FormData();
        // i.append("user_image", e, e.name),
        //   $.ajax({
        //     url: CropperRemote.UPLOAD_URL,
        //     data: i,
        //     method: "POST",
        //     processData: !1,
        //     contentType: !1,
        //     cache: !1,
        //   })
        //     .done(t)
        //     .fail(n);
      });
    },
    uploadImageCropTool: function (e) {
      return new Promise(function (t, n) {
        var i = new FormData();
        i.append("user_image", e, e.name),
          i.append("cropperResize", !0),
          i.append("referrer", "image-crop-tool"),
          $.ajax({
            url: CropperRemote.UPLOAD_URL,
            data: i,
            method: "POST",
            processData: !1,
            contentType: !1,
            cache: !1,
          })
            .done(t)
            .fail(n);
      });
    },
    uploadImageURI: function (e) {
      return new Promise(function (t, n) {
        var i = new FormData();
        i.append("user_image_url", e),
          $.ajax({
            url: CropperRemote.UPLOAD_URL,
            data: i,
            method: "POST",
            processData: !1,
            contentType: !1,
            cache: !1,
          })
            .done(t)
            .fail(n);
      });
    },
    uploadVideo: function (e) {
      return new Promise(function (t, n) {
        var i = new FormData();
        i.append("user_video", e, e.name),
          $.ajax({
            url: CropperRemoteUploader.UPLOAD_VIDEO_URL,
            data: i,
            method: "POST",
            processData: !1,
            contentType: !1,
            cache: !1,
          })
            .done(t)
            .fail(n);
      });
    },
  }),
  Class("InputMapping")({
    ALLOWED_CHANGES: {
      CustomGraphicControl: ["image"],
      TextControl: ["contents", "visible"],
    },
    isAllowedChange: function (e, t) {
      var n = Object.keys(this.ALLOWED_CHANGES).indexOf(e) >= 0;
      return n && this.ALLOWED_CHANGES[e].indexOf(t) >= 0;
    },
  }),
  Class("UiJsonMapSupport")({
    MAPPER_CLASS_PATH: {
      development:
        "https://s3.amazonaws.com/nice-assets-staging/components/service_api/lib/ui_json_map.js",
      staging:
        "https://s3.amazonaws.com/nice-assets-staging/components/service_api/lib/ui_json_map.js",
      production:
        "https://s3.amazonaws.com/nice-assets/components/service_api/lib/ui_json_map.js",
    },
    fetch: function () {
      var e = window.environment,
        t = document.createElement("script");
      (t.src = this.MAPPER_CLASS_PATH[e]), document.head.appendChild(t);
    },
  }),
  Class("WebGLMemoryEstimator")({
    _currentPeak: 0,
    _currentMem: 0,
    _glContextsWM: null,
    start: function () {
      function e(e) {
        return function () {
          var t,
            n,
            i = e.apply(this, arguments),
            r = i.canvas;
          return (
            arguments[0].indexOf("webgl") >= 0 &&
              !s.has(i) &&
              ((t =
                (i.getParameter(i.RED_BITS) +
                  i.getParameter(i.GREEN_BITS) +
                  i.getParameter(i.BLUE_BITS) +
                  i.getParameter(i.ALPHA_BITS)) /
                8),
              (n = r.width * r.height * t),
              s.set(i, { bpp: t, contextMem: n }),
              (WebGLMemoryEstimator._currentMem += n),
              WebGLMemoryEstimator.updatePeakMem()),
            i
          );
        };
      }
      function t(e) {
        return function () {
          var t,
            n,
            i,
            r,
            o,
            a = this,
            l = s.get(a),
            c = a.getParameter(a.ACTIVE_TEXTURE) - a.TEXTURE0;
          6 === arguments.length
            ? ((t = arguments[5].width), (n = arguments[5].height))
            : ((t = arguments[3]), (n = arguments[4])),
            e.apply(a, arguments),
            (i = arguments[2] === a.RGBA ? 4 : 3),
            (r = t * n * i),
            (o = l[c] || 0),
            (l[c] = r),
            (WebGLMemoryEstimator._currentMem += r - o),
            WebGLMemoryEstimator.updatePeakMem();
        };
      }
      function n(e) {
        return function () {
          var t,
            n = this,
            i = s.get(n),
            r = n.getParameter(n.ACTIVE_TEXTURE) - n.TEXTURE0;
          i &&
            ((t = i[r] || 0),
            (WebGLMemoryEstimator._currentMem -= t),
            (i[r] = 0),
            WebGLMemoryEstimator.updatePeakMem()),
            e.apply(n, arguments);
        };
      }
      function i(e) {
        var t = s.get(e),
          n = t.bpp,
          i = e.canvas,
          r = t.contextMem,
          o = n * i.width * i.height,
          a = o - r;
        (t.contextMem = o),
          (WebGLMemoryEstimator._currentMem += a),
          WebGLMemoryEstimator.updatePeakMem();
      }
      function r(e) {
        return function () {
          e.apply(this, arguments), i(this);
        };
      }
      function o(e) {
        return function () {
          e.apply(this, arguments), i(this);
        };
      }
      var s,
        a = [];
      WebGLMemoryEstimator.enabled() &&
        ((s = WebGLMemoryEstimator._glContextsWM = new WeakMap()),
        (HTMLCanvasElement.prototype.getContext = e(
          HTMLCanvasElement.prototype.getContext
        )),
        WebGLRenderingContext && a.push(WebGLRenderingContext),
        window.WebGL2RenderingContext && a.push(WebGL2RenderingContext),
        a.forEach(function (e) {
          (e.prototype.texImage2D = t(e.prototype.texImage2D)),
            (e.prototype.deleteTexture = n(e.prototype.deleteTexture)),
            (e.prototype.drawArrays = r(e.prototype.drawArrays)),
            (e.prototype.drawElements = o(e.prototype.drawElements));
        }));
    },
    updatePeakMem: function () {
      WebGLMemoryEstimator._currentPeak = Math.max(
        WebGLMemoryEstimator._currentPeak,
        WebGLMemoryEstimator._currentMem
      );
    },
    stopTrackingContext: function (e) {
      var t, n;
      if (WebGLMemoryEstimator._glContextsWM) {
        if (((t = WebGLMemoryEstimator._glContextsWM.get(e)), !t))
          return void console.warn(
            "Trying to stop tracking a context that is not being tracked"
          );
        WebGLMemoryEstimator._currentMem -= t.contextMem;
        for (n in t) isNaN(n) || (WebGLMemoryEstimator._currentMem -= t[n]);
        WebGLMemoryEstimator._glContextsWM["delete"](e),
          WebGLMemoryEstimator.updatePeakMem();
      }
    },
    enabled: function () {
      return !!window.WeakMap;
    },
    getLastPeak: function () {
      var e;
      return WebGLMemoryEstimator.enabled()
        ? ((e = (WebGLMemoryEstimator._currentPeak / 1048576).toFixed(3)),
          (WebGLMemoryEstimator._currentPeak = 0),
          e)
        : -1;
    },
  }),
  WebGLMemoryEstimator.start(),
  Module("StageReplacementAreaSupport")({
    prototype: {
      tapCircleRadio: 15,
      _resizeOverlayHandler: null,
      _resizeOverlayTask: null,
      initStageOverlayController: function (e) {
        var t = this;
        (t.overlayController = new UI.StageOverlayController()),
          t._createMobileControlsModal();
        var n = function (e) {
          var n = t.stageImageWidget.getWorkArea();
          return (
            t
              .appendChild(
                t.overlayController.createOverlay({
                  name: "stageImageOverlay",
                  width: n.width,
                  height: n.height,
                  left: n.left,
                  top: n.top,
                  position: "absolute",
                  cssClass: "stage-overlay",
                  stageElement: n,
                })
              )
              .render(t.stageImageWidget.getElement()),
            e
          );
        };
        t.stageImageWidget.stageImageReadyPromise.then(n);
        var i = this.stageImageWidget.stageImageReadyPromise.then(function () {
            return t.stageImageWidget.getScalingFactor(
              t.record.original.size.high
            );
          }),
          r = function (e) {
            return (
              t.initOverlayBindings(),
              t.overlayController.initCustomGraphicAnimations(e[0], e[1]),
              t.overlayController.initCustomGraphicBars(e[0], e[1]),
              e
            );
          },
          o = function (e) {
            var t = e && e.message;
            throw new Error("Init StageOverlayController: " + t);
          };
        return Promise.all([e, i]).then(r)["catch"](o);
      },
      initOverlayBindings: function () {
        var e = this;
        (this._resizeOverlayHandler = this._resizeOverlay.bind(this)),
          window.addEventListener("resize", this._resizeOverlayHandler),
          this.bind("pinchEnd", this._zoomEndOverlayHandler),
          this.bind("zoom", this._zoomStartOverlayHandler),
          this.stageImageOverlay.bind("colorChange", function (t) {
            Helpers.App.getMobileControlsModalState() === !0 &&
              e.disableFloatingControlContainer(),
              e.showComponentPopupBackdrop(),
              e.showFloatingContainer(),
              e._setRelatedColorPicker(t.data.relatedColor.colorLayerName);
          });
        var t = function (t) {
          var n = e.stageImageWidget.getElement();
          $.contains(n[0], t.target) !== !0 &&
            e.overlayController.deactivateAllControlBar();
        };
        $(document.body).bind("click", t);
      },
      getReplacementAreas: function () {
        return this.record.customGraphic.map(function (e) {
          var t = e.layers[0];
          return void 0 === t
            ? null
            : {
                name: t.name,
                width: t.width,
                height: t.height,
                x: t.x,
                y: t.y,
              };
        });
      },
      _getReplacementAreaTouched: function (e) {
        if (Array.isArray(this.record.customGraphic) === !1) return null;
        var t = e.data,
          n = this.stageImageWidget.getScalingFactor(
            this.record.original.size.high
          );
        if (null === n) return null;
        var i = this.getReplacementAreas().map(function (e) {
            return Helpers.App.calcScaledArea(e, n);
          }),
          r = this._getTapPosition(t),
          o = { radius: this.tapCircleRadio, x: r.x, y: r.y },
          s = this._getReplacementAreaCollided(i, o);
        return s;
      },
      _getTapPosition: function (e) {
        var t = $(e.target).offset(),
          n = e.touches[0];
        return void 0 === n
          ? null
          : { x: n.pageX - t.left, y: n.pageY - t.top };
      },
      _getReplacementAreaCollided: function (e, t) {
        var n = e
          .map(function (e) {
            return Helpers.Collision.rectangleCircle(e, t);
          })
          .filter(function (e) {
            return e.collision === !0;
          })
          .sort(function (e, t) {
            return e.distance - t.distance;
          });
        return void 0 === n[0] ? null : n[0].rectangle;
      },
      _cancelResizeOverlayTask: function () {
        null !== this._resizeOverlayTask &&
          (this._resizeOverlayTask.cancel(), (this._resizeOverlayTask = null));
      },
      _resizeOverlay: function () {
        var e = this;
        e.stageImageOverlay.hide(), e._cancelResizeOverlayTask();
        var t = P.cancelable(function () {
          return P.delay(500).then(function () {
            var t = {
              width: e.stageImageOverlay.width,
              height: e.stageImageOverlay.height,
            };
            return e.stageImageWidget.getScalingFactor(t);
          });
        });
        (e._resizeOverlayTask = t()),
          e._resizeOverlayTask
            .then(function (t) {
              var n = e.stageImageWidget.getWorkArea();
              return (
                e.overlayController.resizeOverlay(n, t),
                e.overlayController.setScalingFactor(t),
                e.stageImageOverlay.show(),
                t
              );
            })
            ["catch"](function (t) {
              return "Cancelation Error" === t.message
                ? void console.warn("Cancelation Error")
                : (e.reportError("Resize animation areas error: " + t.message),
                  t);
            });
      },
      _zoomStartOverlayHandler: function (e) {
        e.data.scaled !== !1 && this.stageImageOverlay.hide();
      },
      _zoomEndOverlayHandler: function (e) {
        e.data.scaled !== !0 && this.stageImageOverlay.show();
      },
      _setRelatedColorPicker: function (e) {
        var t = this,
          n = e.replace("_original", "");
        t._getUIMobileGroupedControls().MultiControl.forEach(function (e) {
          e.name.includes(n) &&
            ((t.colorControlInUse = e.getColorControls()[0]),
            t.mobileControlsModal.setContent(
              t.colorControlInUse.callSpectrumWrapper("container")
            ),
            Helpers.App.setMobileControlsModalState(!0),
            t.colorControlInUse.callSpectrumWrapper("show"),
            t.colorControlInUse.enableColorControlAlwaysOpen(),
            t._getMobileSpectrumWrapper(n).undelegateTouchStartEvents());
        });
      },
      _getMobileSpectrumWrapper: function (e) {
        return this._mobileSpectrumWrappers["colorFolder_" + e];
      },
      disableColorPicker: function () {
        null !== this.colorControlInUse &&
          (this.colorControlInUse.disableColorControlAlwaysOpen(),
          this.colorControlInUse.callSpectrumWrapper("hide"),
          (this.colorControlInUse = null));
      },
    },
  }),
  Module("QuadrantBehaviorSupport")({
    QUADRANTS: [0, 1, 2, 3],
    prototype: {
      getHelperTextCenter: function (e, t, n) {
        var i = this.sortByXPos(e);
        this._getQuadrants(i, t, n), this._determineTargetCoord(i, t);
        var r = this._getClosestToCoordinate(i, this.constructor.QUADRANTS);
        return this._getTextAlignment(r);
      },
      _getClosestToCoordinate: function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = e.reduce(function (e, n, i) {
            return Math.abs(n.positioning.x - n.targetCoord) <
              Math.abs(e.positioning.x - e.targetCoord) && n.quadrant === t[i]
              ? n
              : e;
          });
          return i.length > 0 && (i.helperTextEnabled = !0), i;
        }
      },
      sortByXPos: function (e) {
        function t(e, t) {
          var n = 0;
          return (
            e.positioning.x > t.positioning.x
              ? (n = 1)
              : e.positioning.x < t.positioning.x && (n = -1),
            n
          );
        }
        return e.sort(t);
      },
      _getQuadrants: function (e, t, n) {
        var i = this;
        e.forEach(function (e) {
          (e.quadrant = i._determineQuadrant(e, t, n)),
            (e.targetCoord = i._determineTargetCoord(e.quadrant, t));
        });
      },
      _determineQuadrant: function (e, t, n) {
        var i = e.positioning.x,
          r = e.positioning.y,
          o = t / 2,
          s = n / 2;
        return i > o ? (r > s ? 3 : 1) : r > s ? 2 : 0;
      },
      _determineTargetCoord: function (e, t) {
        return 0 === e ? 0 : t / 2;
      },
      _getTextAlignment: function (e) {
        return (e.textAlignment = e.quadrant % 2 === 0 ? "right" : "left"), e;
      },
    },
  }),
  Module("ColorLayerMatcher")({
    QUADRANTS: [0, 1, 2, 3],
    prototype: {
      _getMidLength: function (e) {
        return (
          e.sort(function (e, t) {
            return e - t;
          }),
          e[2] - e[1]
        );
      },
      _calculateIntersection: function (e, t) {
        if (e.x > t.x + t.width || e.x + e.width < t.x) return 0;
        if (e.y > t.y + t.height || e.y + e.height < t.y) return 0;
        var n = this._getMidLength([e.x, e.x + e.width, t.x, +t.x + t.width]),
          i = this._getMidLength([e.y, e.y + e.height, t.y, +t.y + t.height]);
        return (n * i) / (e.width * e.height);
      },
      _filterByProp: function (e, t, n) {
        return e.filter(function (e) {
          return e[t] === n;
        });
      },
      _calculateArea: function (e, t) {
        return e * t;
      },
      getFormattedLayer: function (e) {
        return {
          x: e.x,
          y: e.y,
          width: e.width,
          height: e.height,
          colorLayerName: e.name,
        };
      },
      getMatchingLayer: function (e, t) {
        var n = this,
          i = {};
        return (
          (i.intersection = 0),
          t.forEach(function (t) {
            var r = n.getFormattedLayer(t);
            if (
              ((r.intersection = n._calculateIntersection(e, r)),
              (r.area = n._calculateArea(r.width, r.height)),
              r.intersection === i.intersection)
            ) {
              var o = Math.abs(e.width * e.height - i.area),
                s = Math.abs(e.width * e.height - r.area);
              o > s && ((i = r), (i.customLayerName = e.name));
            } else r.intersection > i.intersection && ((i = r), (i.customLayerName = e.name));
          }),
          i
        );
      },
    },
  }),
  Class("VisibilityTracker")({
    prototype: {
      visibilityStack: [],
      _visibilityEventHandler: null,
      init: function () {
        (this.visibilityStack = []),
          this.visibilityStack.push(document.visibilityState),
          (this._visibilityEventHandler =
            this.visibilityEventHandler.bind(this)),
          document.addEventListener(
            "visibilitychange",
            this._visibilityEventHandler
          );
      },
      visibilityEventHandler: function () {
        this.visibilityStack.push(document.visibilityState);
      },
      getStates: function () {
        return this.visibilityStack;
      },
      wasInBackground: function () {
        return this.visibilityStack.some(function (e) {
          return "hidden" === e;
        });
      },
      destroy: function () {
        document.removeEventListener(
          "visibilitychange",
          this._visibilityEventHandler
        ),
          (this.visibilityStack = null);
      },
    },
  }),
  Class(UI, "PastDownloads").includes(
    CustomEventSupport,
    NodeSupport,
    BubblingSupport
  )({
    CONFIRMATION_TEXT:
      "Are you sure you want to permanently delete this download?",
    ERROR_MESSAGE_CLOSE_TIME: 5e3,
    DELETE_ERROR_MESSAGE:
      "Sorry, we couldn't delete your download. Please try again at a later time",
    prototype: {
      dropDownMenuPosition: null,
      isMobilePhone: null,
      init: function () {
        var e = this;
        (this.$body = $("body")),
          (this.pageWrapper = this.$body.find(".page-wrapper")),
          (this.pageContainer = this.pageWrapper.find(".page-container")),
          (this.$downloadingImages = $(".downloading")),
          (this.$downloadPrint = $(".download-print")),
          (this.$downloadingVideoProducts = $(".downloading-video-product")),
          (this.$dropDownButton = $(
            ".user-downloads-item__overlay .button-dropdown"
          )),
          (this.stageButtons = $(".btn-stage")),
          (this.pastDownloadsItemHolder = $(".past-downloads-item-holder")),
          (this.isMobilePhone = Helpers.App.isMobile()),
          (this.$grid = $(".user-downloads-lists")),
          (this.$frames = $(".frame")),
          (this.notification = new UI.Notification({})),
          this.$grid.length > 0
            ? this.$grid.gridalicious({
                width: this.$grid.width() <= 604 ? 150 : 250,
                gutter: 10,
                selector: ".user-downloads-item",
                animate: !1,
              })
            : this._showEmptyDownloadsPage(),
          $(window).on(
            "load",
            function () {
              this.$grid.gridalicious("resize", !0),
                this.$grid.css("visibility", "visible");
            }.bind(this)
          ),
          $(".user-downloads-item.video-v4-item").each(function (t, n) {
            var i = new UI.DownloadVideoV4Thumbnail({
              name: "thumbnail" + t,
              element: $(n),
              thumbContainer: $($(n).find("a")[0]),
              useOffsetInHelpText: !0,
            });
            e.appendChild(i),
              i.bind("preview.shown", function () {
                e.hidePreviews(this);
              });
          }),
          this.$downloadingImages.each(function (e, t) {
            new UI.ProcessingImage({
              element: $(t),
              imagePath: t.getAttribute("data-image-path"),
              thumbPath: t.getAttribute("data-thumb-path"),
              resolution: t.getAttribute("data-resolution"),
              downloadLink: t.getAttribute("data-download-link"),
              isGif: t.getAttribute("data-is-gif"),
              exportPdf: t.getAttribute("data-export-pdf"),
              imageHash: t.getAttribute("data-image-hash"),
              filename: t.getAttribute("data-filename"),
              stageUrl: t.getAttribute("data-stage-url"),
              stageName: t.getAttribute("data-stage-name"),
            });
          }),
          this.$downloadingVideoProducts.each(function (t, n) {
            new UI.ProcessingVideoProduct({
              element: $(n),
              useOffsetInHelpText: !0,
              imagePath: n.getAttribute("data-image-path"),
              thumbPath: n.getAttribute("data-thumb-path"),
              videoPath: n.getAttribute("data-video-path"),
              resolution: n.getAttribute("data-resolution"),
              downloadLink: n.getAttribute("data-download-link"),
              stageUrl: n.getAttribute("data-stage-url"),
              videoproductId: n.getAttribute("data-videoproduct-id"),
              videoproductHash: n.getAttribute("data-videoproduct-hash"),
              stageName: n.getAttribute("data-stage-name"),
              outputGif: "true" === n.getAttribute("data-output-gif") ? !0 : !1,
              toolSlugs: window.toolSlugs,
              controller: e,
              count: $(".user-downloads-item.video-v4-item").length + t,
            });
          }),
          this.$frames.each(function (t, n) {
            var i = $(n);
            (1 === i.find(".processing-state:hidden").length ||
              0 === i.find(".processing-state").length) &&
              e.addRemoveButton(i);
          }),
          this._bindEvents(),
          this.appendChild(new UI.ProcessModal({ name: "processModal" }));
        var t = $(
          '.frame[data-id="' + Helpers.App.getUrlParam("videoId") + '"]'
        );
        return (
          Helpers.App.getUrlParam("videoId") &&
          Helpers.App.isDownloadIphoneFlowAvailable() &&
          Helpers.App.isMobile() &&
          0 != t.length
            ? Helpers.App.shortcutDownloadModal(
                t.find(".user-downloads-item-link").attr("href"),
                t.find("video").attr("data-src")
              )
            : this._showShortcutAlert(),
          !0
        );
      },
      _bindEvents: function () {
        var e,
          t = this;
        t.$dropDownButton.on("show.bs.dropdown", function () {
          t.repositionDropdownMenu(this);
        }),
          t.$dropDownButton.on("hide.bs.dropdown", function () {
            t.resetPositionDropdownMenu(this);
          }),
          (e = function (e) {
            (this.stageButtons = $(".btn-stage")),
              this.stageURLButtonsBindings(),
              t.addRemoveButton(e.data.item.$frame);
          }),
          this.$downloadPrint.bind("click", function () {
            var e = $(this),
              n = e.attr("data-hash"),
              i = e.attr("data-task"),
              r = e.attr("data-filename");
            (n || i) && t.processModal.open(n, i, r);
          }),
          UI.ProcessingImage.bind("item:loaded", e.bind(this)),
          UI.ProcessingVideoProduct.bind("videoproduct:loaded", e.bind(this)),
          this.stageURLButtonsBindings(),
          this.bind("closeNotification", function () {
            t.notification.close();
          }),
          UI.MyDriveDownloadsItem.bind(
            "videothumb:updated",
            t._updateVideoThumbSource
          );
      },
      repositionDropdownMenu: function (e) {
        var t = this;
        if (!t.isMobilePhone) {
          var n = $(e).find(".dropdown-menu");
          0 !== n.length &&
            setTimeout(function () {
              var e = n.offset();
              t.dropDownMenuPosition = n.position();
              var i = window.innerWidth - 50 - e.left - n.width();
              0 > i && n.css({ left: "unset", right: 0 });
            }, 0);
        }
      },
      resetPositionDropdownMenu: function (e) {
        var t = this;
        if (!t.isMobilePhone) {
          var n = $(e).find(".dropdown-menu");
          n.css({ left: t.dropDownMenuPosition.left });
        }
      },
      stageURLButtonsBindings: function () {
        var e = this;
        (this.$cropResizeTemplate = $(".crop-resize-template")),
          this.$cropResizeTemplate.off("click"),
          this.$cropResizeTemplate.bind("click", function (e) {
            e.preventDefault(), e.stopImmediatePropagation();
            var t = e.target.getAttribute("data-crop-resize-url");
            t && (window.location.href = t);
          }),
          (this.$downloadPrint = $(".download-print")),
          this.$downloadPrint.off("click"),
          this.$downloadPrint.bind("click", function () {
            var t = $(this),
              n = t.attr("data-hash"),
              i = t.attr("data-task"),
              r = t.attr("data-filename");
            (n || i) && e.processModal.open(n, i, r);
          }),
          this.stageButtons.on("mousedown", function (e) {
            e.preventDefault(), e.stopImmediatePropagation();
            var t = e.target.getAttribute("data-stage-url");
            t &&
              (2 === e.which || e.metaKey === !0
                ? window.open(t, "_blank")
                : (window.location.href = t));
          });
      },
      addRemoveButton: function (e) {
        if (null !== e) {
          var t = this,
            n =
              '<div class="delete hvr-grow trash">                        <button></button>                    </div>';
          e.addClass("deletable"),
            e.append(n),
            e.find(".trash").bind("click", function () {
              t.removePurchase(e);
            });
        }
      },
      removePurchase: function (e) {
        var t = this,
          n = new Date().getTime();
        (confirm(t.constructor.CONFIRMATION_TEXT) === !0 ||
          new Date().getTime() - n <= 3) &&
          t
            ._removePurchase(e.data("type"), e.data("id"))
            .done(function () {
              e.fadeOut(400, function () {
                if (
                  (t.$grid.gridalicious("resize", !0),
                  e.remove(),
                  0 === t._getPurchasesItemsCount())
                ) {
                  window.location = window.location.pathname;
                  var n = parseInt(Helpers.App.getUrlParam("page"));
                  Helpers.App.replaceUrlParam("page", n - 1), location.reload();
                }
              });
            })
            .fail(function () {
              t.notification.alert(t.constructor.DELETE_ERROR_MESSAGE),
                t.notification.render($("body"), !0),
                t.notification.autoclose(
                  t.constructor.ERROR_MESSAGE_CLOSE_TIME
                );
            });
      },
      _getPurchasesItemsCount: function () {
        return $(".frame").length;
      },
      _removePurchase: function (e, t) {
        return $.ajax({
          url: "/purchases/delete/" + e + "/" + t,
          type: "DELETE",
        });
      },
      _showShortcutAlert: function () {
        var e = this,
          t =
            Helpers.App.isDownloadIphoneFlowAvailable() &&
            !Helpers.App.getIOSVideoDownloadInstructionsCookie();
        if (t) {
          this.notification.success(
            'You can now download videos to your camera roll! <a href="#">See Instructions.</a>'
          ),
            this.notification.render(this.pageWrapper, !0);
          var n = this.notification.element;
          n.css({ position: "absolute", top: this.pageWrapper.offset().top }),
            n.find("a").click(function (t) {
              e.notification.close(),
                Helpers.App.shortcutInstructionsModal(),
                t.preventDefault();
            });
        }
      },
      _showEmptyDownloadsPage: function () {
        var e =
          '                <div class="empty-grid-page">                    <p class="page-header">You Don\'t Have Any Downloads Yet!</p>                    <video playsinline preload="auto" autoplay loop muted poster="https://placeit-images.s3-accelerate.amazonaws.com/storage/downloads-empty-board-loop.jpg">                        <source src="https://placeit-images.s3-accelerate.amazonaws.com/storage/downloads-empty-board-loop.webm" type="video/webm" />                        <source src="https://placeit-images.s3-accelerate.amazonaws.com/storage/downloads-empty-board-loop.mp4" type="video/mp4" />                    </video>                    <span>Go to any template and click the blue <strong>download</strong> button!</span>                </div>            ';
        this.pageContainer.find(".user-downloads").remove(),
          this.pageContainer.append($(e));
      },
      hidePreviews: function (e) {
        this.children.forEach(function (t) {
          "processModal" !== t.name &&
            ((e && t.name === e.name) || t.hidePreview());
        });
      },
      _updateVideoThumbSource: function (e) {
        var t = e.data.videoProductId,
          n = e.data.videoThumb,
          i = $('li[data-videoproduct-id="' + t + '"]');
        i.attr("data-video-path", n);
        var r = i.find("video");
        if (r.length > 0) {
          var o = $(r[0]);
          o.attr("data-src", n), o.attr("src", n);
        }
      },
    },
  }),
  Class(UI, "MultiSizesDownloadAlertModal").inherits(Widget)({
    html: '<div class="modal fade multi-sizes-download-alert" id="multiSizesDownloadAlert" tabindex="-1" role="dialog" aria-labelledby="multiSizesDownloadAlert" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><div class="modal-header"><h4 class="multi-sizes-download-alert__title">Only Subscribers Can Use This Feature!</h4></div><div class="modal-body"><div><button class="button primary multi-sizes-download-alert__button-ok">Subscribe</button><button class="button multi-sizes-download-alert__button-cancel">No Thanks</button></div></div></div></div></div>',
    prototype: {
      $okButton: null,
      $cancelButton: null,
      init: function (e) {
        Widget.prototype.init.call(this, e);
        (this.$okButton = this.element.find(
          ".multi-sizes-download-alert__button-ok"
        )),
          (this.$cancelButton = this.element.find(
            ".multi-sizes-download-alert__button-cancel"
          )),
          this.bindEvents();
      },
      show: function () {
        this.element.modal("show");
      },
      hide: function () {
        this.element.modal("hide");
      },
      invokeSubscriptionFlow: function () {
        this.hide(),
          window.page && window.page.showPricingModal(),
          this.dispatch("multiSizesDownload:subscription-process-activate");
      },
      bindEvents: function () {
        var e = this;
        this.$okButton.click(function () {
          e.invokeSubscriptionFlow();
        }),
          this.$cancelButton.click(function () {
            e.hide();
          });
      },
    },
  }),
  Class(UI, "RemoteUrlModal").inherits(Widget)({
    html: '        <div class="modal" id="screenshotGrapper" tabindex="-1" role="dialog" aria-labelledby="screenshotGrappertageLabel" aria-hidden="true">          <div class="modal-dialog">            <div class="modal-content">              <div class="modal-header">                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>                <h4></h4>                <p class="center"></p>              </div>              <div class="modal-body">                <form class="form-inline" role="form">                  <div class="input-group input-group-sm">                    <input class="form-control url-field" placeholder="http://..." value="http://">                    <span class="input-group-btn btn-group-sm">                      <input class="button primary submit-btn" type="submit" value="Go">                    </span>                  </div>                </form>              </div>            </div>          </div>        </div>',
    prototype: {
      mainText: "",
      secondaryText: "",
      init: function (e) {
        Widget.prototype.init.call(this, e),
          (this.$form = this.element.find("form")),
          (this.$title = this.element.find(".modal-header h4")),
          (this.$pretitle = this.element.find(".modal-header p")),
          (this.$textField = this.element.find(".url-field")),
          (this.storedUrl = ""),
          this.updateTitle(this.mainText),
          this.updatePretitle(this.secondaryText),
          this.bindings();
      },
      destroy: function () {
        (this.$form = null),
          (this.$title = null),
          (this.$pretitle = null),
          (this.$textField = null),
          Widget.prototype.destroy.call(this);
      },
      bindings: function () {
        this.element.on(
          "shown.bs.modal",
          function () {
            var e = this.getTextFieldValue().length;
            this.$textField.focus(), this.$textField[0].setSelectionRange(e, e);
          }.bind(this)
        ),
          this.$form.on(
            "submit",
            function () {
              return (
                Helpers.App.isMobileDevice() && document.activeElement.blur(),
                Helpers.StageType.isMultiStage() &&
                  (this.storedUrl = this.$textField.val()),
                this.grabUrl(),
                !1
              );
            }.bind(this)
          );
      },
      grabUrl: function () {
        var e = this.$textField.val();
        e.length > 0 && this.isValidURL(e) === !0
          ? ((e = this.getCleanedUpURL(e)),
            this.$textField.val("http://"),
            this.dispatch("grab.remoteURL", e))
          : this.constructor.dispatch(
              "url.invalid",
              'The URL "' + e + "\" doesn't seem to be valid! Please try again."
            ),
          this.hide();
      },
      isValidURL: function t(e) {
        var n =
            /[-a-zA-Z0-9.:]{1,256}\.[a-z0-9]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&!//=]*)/g,
          t = !1,
          i = e.match(n);
        return null !== i && i.length > 0 && (t = !0), t;
      },
      getTextFieldValue: function () {
        return this.$textField.val();
      },
      updateTitle: function (e) {
        return this.$title.text(e), this;
      },
      updatePretitle: function (e) {
        return this.$pretitle.text(e), this;
      },
      show: function () {
        "" != this.storedUrl && this.$textField.val(this.storedUrl),
          this.element.modal("show");
      },
      hide: function () {
        this.element.modal("hide");
      },
      getCleanedUpURL: function (e) {
        var t,
          n = [
            "http://http://",
            "http://https://",
            "https://http://",
            "https://https://",
          ],
          i = ["http://", "https://", "http://", "https://"];
        if (e.indexOf("http") > -1) {
          for (var r = 0; r < n.length; r++)
            e.indexOf(n[r]) > -1 && (t = e.replace(n[r], i[r]));
          "undefined" == typeof t && (t = e);
        } else t = "http://" + e;
        return t;
      },
    },
  }),
  Class("AddGraphicButton")
    .inherits(Widget)
    .includes(
      BubblingSupport,
      GenericDestroySupport,
      AddGraphicDropdownSupport
    )({
    html: '        <div>            <div class="composite-button">                <button class="button ">Add Graphic</button>            </div>        </div>',
    elementClass: "graphic-adder",
    LABEL_0: "Add Graphic",
    LABEL_1_OR_MORE: "Add Another Graphic",
    prototype: {
      init: function (e) {
        var t = this;
        Widget.prototype.init.call(this, e),
          (this.button = this.element.find("button")),
          this.button.bind("click", function () {
            t.showModal();
          }),
          (this.$compositeButton = this.element.find(".composite-button")),
          this.update(0),
          this.isMobile && !this.isAddedLogo && this._buildDropdown();
      },
      update: function (e) {
        if (this.isAddedLogo) {
          var t = this.element.find(".title").length
            ? this.element.find(".title")
            : $('<label class="title">Logo</label>');
          return (
            this.element.prepend(t),
            this.button.html("Upload Logo"),
            void this.element.addClass("add-logo-control")
          );
        }
        var n = e + this.builtInGraphicsCount;
        e < this.maxAddedGraphics && this.canProcessWithEngine
          ? (this.element.css("display", ""),
            this.button.html(
              0 === n
                ? AddGraphicButton.LABEL_0
                : AddGraphicButton.LABEL_1_OR_MORE
            ))
          : this.element.css("display", "none");
      },
      _getIndex: function () {
        var e;
        return (e = this), e.name.slice(-1);
      },
      showModal: function () {
        var e;
        (e = this),
          e.dispatch("addGraphic", {
            addGraphicButtonIndex: e._getIndex(),
            action: "showModal",
          });
      },
      showFilePicker: function () {
        var e;
        (e = this),
          e.dispatch("addGraphic", {
            addGraphicButtonIndex: e._getIndex(),
            action: "showFilePicker",
          });
      },
    },
  }),
  Class(UI.SmartTemplate, "AssetsControl")
    .inherits(Widget)
    .includes(
      BubblingSupport,
      GenericDestroySupport,
      CDNSupport,
      LayerDataSupport,
      StageControlsDestroySupport
    )({
    html: '        <div class="assets-control">            <div class="assets-header">                <div class="form-group search-container"></div>                <div class="white-fader"></div>            </div>            <div class="assets-body">                <div class="columns-container"></div>            </div>        </div>',
    thumbSource: null,
    BLANK_ITEM_NAME: "graphicItem_0",
    prototype: {
      initialValues: {},
      numberOfColumns: 2,
      blankItemText: "",
      searchInputPlaceholder: "Search",
      _columns: [],
      _popstateHandler: null,
      _timeouts: null,
      _algoliaParams: null,
      _algoliaControl: null,
      readyToLoadAssets: !1,
      _layerInfoReady: !1,
      _loading: !1,
      _selectedLayerId: null,
      _layersToBeRendered: null,
      _totalPages: null,
      _eventSource: "nextpage",
      init: function (e) {
        var t = this;
        Widget.prototype.init.call(this, e),
          (t._timeouts = []),
          (t._layersToBeRendered = []),
          (t.initialValues = {}),
          (t.initialValues.color = t.record.color),
          this._initDOMReferences(),
          (this.previousValues = {
            list: e.prefillGraphic,
            search: e.prefillSearch || "",
          }),
          (this.urlParamName = "video" === this.type ? "video" : "multi"),
          this.onlyGraphics &&
            (this.element.addClass("graphic-control"),
            this.element.removeClass("multi-control")),
          (this.renderedItems = []),
          (this.isMobilePhone = e.isMobilePhone),
          this.record.hasLayers === !1 && this.element.hide(),
          this.updatePrefix(e.prefix || "", !1),
          "background" === this.type
            ? ((this.customType = "customBg"),
              (this.eventTrackerNameControl = "bgImageChange"))
            : ((this.customType = "customGraphic"),
              (this.eventTrackerNameControl = "graphicChange")),
          this._initSmartQueue(),
          (this._algoliaParams = {
            search: e.prefillSearch || "",
            page: 0,
            perPage: this.itemsPerPage,
            selectedLayerId: null,
          }),
          this.element.hasClass("no-layers") && this.element.hide(),
          this.bindings()._createColumns();
      },
      _initDOMReferences: function () {
        (this.$columnsContainer = this.element.find(".columns-container")),
          (this.searchContainer = this.element.find("div.search-container")),
          (this.$graphicBody = this.element.find(".assets-body"));
      },
      _initSmartQueue: function () {
        this.queue = new SmartQueue({
          actionName: "loadImage",
          minConsumers: 2,
          maxConsumers: 8,
          itemsPerConsumer: 1,
        });
      },
      _createColumns: function () {
        for (
          var e, t, n = this, i = document.createDocumentFragment(), r = 0;
          r < n.numberOfColumns;
          r++
        )
          (e = document.createElement("div")),
            (t = document.createElement("ul")),
            e.appendChild(t),
            i.appendChild(e),
            n._columns.push($(t));
        return n.$columnsContainer[0].appendChild(i), n;
      },
      setInitialAssets: function (e) {
        var t = this;
        (t._totalPages = e.totalPages),
          (t._algoliaParams.page = e.page),
          (t._selectedLayerId =
            (e.selectedLayer && e.selectedLayer.id) || null),
          (t.initialValues.layer = t._selectedLayerId),
          t.setupThumbs(e.data),
          (t._layerInfoReady = !0);
      },
      showBlankItem: function () {
        var e = this,
          t = e[e.constructor.BLANK_ITEM_NAME];
        return t && t.element.show(), e;
      },
      hideBlankItem: function () {
        var e = this,
          t = e[e.constructor.BLANK_ITEM_NAME];
        return t && t.element.hide(), e;
      },
      _checkAssetExistence: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a = this,
          l = [];
        (n = (e && e.id) || null),
          (r = "null" === n || null === n),
          r ||
            ((s = "customGraphic" === n),
            s ||
              ((i = a._cdnBasePath() + e.image),
              $.ajax({ url: i, method: "HEAD", cache: !1 }).fail(function (e) {
                Helpers.GlobalEventTracker.deletedAsset({
                  id: n,
                  fullUrl: window.location.href,
                  statusCode: e.status,
                  assetURL: i,
                });
              }),
              (t = a.algoliaSearch.controls.filter(function (e) {
                return (
                  e.propertyName === a._algoliaControl.propertyName &&
                  e.position === a._algoliaControl.position
                );
              })),
              t.forEach(function (e) {
                l = l.concat(e.graphics);
              }),
              (o =
                void 0 ===
                l.filter(function (e) {
                  return e === n;
                })[0]),
              o &&
                Helpers.GlobalEventTracker.missingAsset({
                  id: n,
                  fullUrl: window.location.href,
                })));
      },
      _cropSuccessHandler: function (e) {
        var t,
          n,
          i,
          r,
          o = this;
        e.stopPropagation(),
          (n = e.data),
          (t = n.id),
          n.isVideo
            ? ((r = o.customImageUploader.customVideoPreview),
              (r.record.video = n.croppedVideoUrl),
              (r.record.type = "." + n.croppedVideoUrl.split(".").pop()))
            : ((r = o.customImageUploader.customGraphicPreview),
              (r.record.image = n.croppedImageUrl),
              (r.record.type = "." + n.croppedImageUrl.split(".").pop())),
          (i = r.record.image),
          (r.record.record_hash = t),
          (r.record.id = o.customType),
          (r.record.visible = !0),
          o.setUrlParameter(r.record.record_hash),
          o.customImageUploader.updatePreview(
            n.thumbnailUrl,
            n.croppedVideoPreviewUrl
          ),
          o.selectItem(r, !n.triggeredByPopState),
          o.customImageUploader.hideUploadingFeedback(),
          o.dispatch("change", {
            errorCallback: function (e) {
              "abort" !== e.statusText &&
                400 === e.status &&
                (o.customImageUploader.record.image = i);
            },
            triggeredByPopState: n.triggeredByPopState,
          });
      },
      bindings: function () {
        var e = this;
        return (
          (this._popstateHandler = this._handleHistoryChange.bind(this)),
          window.addEventListener("popstate", this._popstateHandler),
          e.bind("cropSuccess", e._cropSuccessHandler),
          e.bind("layersRendered", e._layersRenderedHandler.bind(e)),
          e.bind("thumbImageLoaded", e._imageLoadHandler.bind(e)),
          e.bind("itemRendered", e._itemRenderedHandler.bind(e)),
          this.$graphicBody.bind("scroll", function () {
            var t = 0.9 * e.getMaxScroll();
            e._showMoreFader(), e.$graphicBody.scrollTop() > t && e.nextPage();
          }),
          this.bind("crop", function () {
            e.customImageUploader.showWorkingFeedback("Cropping ");
          }),
          e
        );
      },
      _layersRenderedHandler: function () {
        this._hideLayersLoader();
        var e = this.$graphicBody.height(),
          t = this.$columnsContainer.height();
        550 >= e &&
          this.element.height() < window.innerHeight - 120 &&
          (this.element.hasClass("expand-enabled") ||
            this.element.addClass("expand-enabled"));
        var n = this.element.find(".footer-layers").height();
        e >= t + n && this._totalPages > 1 && this.nextPage(),
          this._showMoreFader(),
          (this._layersToBeRendered = []);
      },
      _imageLoadHandler: function (e) {
        var t = null;
        e.data && (t = e.data.listItem),
          (t && t.parentName === this.name) !== !1 &&
            this._layersToBeRendered[t.index] &&
            this._layersToBeRendered[t.index].canceled !== !0 &&
            ((this._layersToBeRendered[t.index].loaded = !0),
            this.readyToLoadAssets !== !1 &&
              (0 === t.index
                ? this.renderItem(this._layersToBeRendered[t.index])
                : this._layersToBeRendered[t.index - 1].rendered === !0 &&
                  this.renderItem(this._layersToBeRendered[t.index])));
      },
      _itemRenderedHandler: function (e) {
        var t = e.data.listItem,
          n = t.index + 1;
        this._layersToBeRendered[n].loaded !== !1 &&
          this.renderItem(this._layersToBeRendered[n]);
      },
      setupThumbs: function (e) {
        var t = this,
          n = 0;
        this.record.allowSearch &&
          e.length > 0 &&
          ((this.search = $(
            '<input type="text" class="img-search-box textbox form-control" placeholder="' +
              this.searchInputPlaceholder +
              '">'
          )),
          this.search.appendTo(this.searchContainer),
          this.search.bind(
            "input",
            function () {
              this.deferredUpdate();
            }.bind(this)
          )),
          this.record.excludable === !0 && e.length
            ? (this._initBlankItem(n),
              this.record.allowCustomUpload === !0 &&
                this._initCustomUpload(e, n),
              t.isMobilePhone && this._initMobileMode(e),
              (t._layersToBeRendered = e),
              t.readyToLoadAssets !== !0 ||
                t.isMobilePhone ||
                t
                  .renderThumbs(t._layersToBeRendered)
                  .then(this._onRenderThumbs.bind(this)),
              t.addFooterlayers(),
              this.bind("graphicClicked", this._handleItemClick.bind(this)))
            : t.element.addClass("no-layers"),
          "background" === this.type && this.dispatch("backgroundReady");
      },
      _onRenderThumbs: function () {
        var e;
        this.search && this.prefillSearch
          ? (this.search.val(this.prefillSearch),
            (e = this.record.preconfiguredSearch === this.search.val()))
          : (this.renderedItems = this._getAllChildrenExcept(["ColorControl"]));
      },
      _initBlankItem: function (e) {
        var t = new UI.SmartTemplate.GraphicItem({
          name: this.constructor.BLANK_ITEM_NAME,
          text: this.blankItemText,
          record: { id: "null", image: null },
          index: -1,
          cssClass: "graphic_item none_option",
        }).render(this._columns[e]);
        (e = (e + 1) % this.numberOfColumns),
          this.appendChild(t),
          ("null" === this.prefillGraphic || null === this._selectedLayerId) &&
            this.selectItem(t);
      },
      _initMobileMode: function (e) {
        var t = this,
          n = e.filter(function (e) {
            return t._selectedLayerId === e.id;
          })[0];
        n &&
          ((n.visible = !0),
          this.record.selectedLayer &&
            this.record.selectedLayer.id !== t._selectedLayerId &&
            ((this.record.layers = [n]),
            (this.record.selectedLayer = n),
            this.dispatch("change")));
      },
      _initCustomUpload: function (e, t) {
        var n,
          i = this,
          r = {};
        (r.id = i.customType),
          (r.name = i.customType),
          (r.image = null),
          (r.visible = !1),
          (n = this.viewport
            ? this.viewport
            : this.onlyGraphics
            ? this.getGraphicDimensions()
            : { width: this.record.width, height: this.record.height }),
          (i.customImageUploader = new UI.SmartTemplate.ImageUploader({
            name: i.customType,
            record: r,
            viewport: n,
            maxSize: UI.StageBase.maxSizeAllowed.image,
            videoMaxSize: UI.StageBase.maxSizeAllowed.video,
            acceptedFiles: $.extend(
              {},
              UI.StageBase.acceptedFiles.image,
              UI.StageBase.acceptedFiles.video
            ),
            componentToInform: this,
            loadingState: !0,
            acceptVideo: !this.onlyGraphics,
            acceptImage: "asset_library" === this.type || this.onlyGraphics,
          }).render(this._columns[t])),
          (t = (t + 1) % this.numberOfColumns),
          $(i.customImageUploader.element).addClass("multi_item"),
          this.appendChild(i.customImageUploader),
          i.customImageUploader.customGraphicPreview.render(this._columns[t]),
          i.customImageUploader.customVideoPreview.render(this._columns[t]),
          i.customImageUploader.customGraphicPreview.hide(),
          i.customImageUploader.customVideoPreview.hide(),
          this.prefillGraphic &&
            e[0].id !== this.prefillGraphic &&
            "null" !== this.prefillGraphic &&
            this.retrieveCustomUpload();
      },
      renderThumbs: function (e) {
        var t = this;
        return (
          (t._layersToBeRendered = []),
          this.onlyGraphics ||
            e.forEach(function (e) {
              [".png", ".svg", ".jpg"].indexOf(e.type) > -1 &&
                (e.image = "/image_library/" + e.id + "/images/medium.jpg");
            }),
          e.forEach(function (e, n) {
            var i;
            if ("GraphicItem" === e.constructor.className) i = e;
            else {
              var r = {
                itemName: e.name,
                name: "graphicItem_" + (n + 2),
                record: e,
                index: n,
                parentName: t.name,
                loaded: !1,
                rendered: !1,
                cssClass: "multi_item ",
              };
              [".mov", ".mp4"].indexOf(e.type) >= 0
                ? ((r.cssClass += "video_item hidden_after"),
                  (r.hostname = t._cdnBasePath()),
                  (i = new UI.SmartTemplate.VideoItem(r)))
                : ((r.cssClass += "multi_item graphic_item"),
                  (i = new UI.SmartTemplate.GraphicItem(r))),
                t.appendChild(i);
            }
            t._layersToBeRendered.push(i);
          }),
          t.queue.push(t._layersToBeRendered),
          new Promise(function (e) {
            t.bind("layersRendered", function () {
              e(t._layersToBeRendered);
            });
          })
        );
      },
      shortestColumn: function () {
        var e = this,
          t = 1 / 0,
          n = 0;
        return (
          e._columns.forEach(function (e, i) {
            var r = e.height();
            t > r && ((t = r), (n = i));
          }),
          n
        );
      },
      renderItem: function (e) {
        var t = this;
        if (e.rendered !== !0) {
          var n = t.shortestColumn();
          e.render(t._columns[n]),
            (e.rendered = !0),
            t._selectedLayerId === e.record.id && t.selectItem(e),
            e.index === t._layersToBeRendered.length - 1
              ? t.dispatch("layersRendered")
              : t.dispatch("itemRendered", { listItem: e });
        }
      },
      retrieveCustomUpload: function () {
        this._getLayerJSONData(this.prefillGraphic, !0);
      },
      getMaxScroll: function () {
        return (
          this.$columnsContainer.outerHeight() - this.$graphicBody.height()
        );
      },
      nextPage: function () {
        var e = this;
        if (e._loading !== !0) {
          if (e._algoliaParams.page + 1 >= e._totalPages)
            return void this._hideMoreFader();
          e._algoliaParams.page++, e._getLayers(e._algoliaParams, "nextpage");
        }
      },
      hasLayers: function () {
        return this.record.layers.length > 0;
      },
      getGraphicDimensions: function () {
        var e,
          t,
          n,
          i = this,
          r = window.structureData;
        return (
          Engine.prototype._treeWalker(r, "layers", function (t) {
            t.name.replace("_original", "") === i.record.name && (e = t);
          }),
          (t = e.layers[0]),
          (n = t.smartObject.transform.transformPoints),
          { width: n[2] - n[0], height: n[5] - n[3] }
        );
      },
      deferredUpdate: function () {
        return (
          this._pendingUpdate && clearTimeout(this._pendingUpdate),
          this._pendingNoResultsEvent &&
            clearTimeout(this._pendingNoResultsEvent),
          (this._pendingUpdate = setTimeout(
            function () {
              this.doSearch();
            }.bind(this),
            300
          )),
          this._timeouts.push(this._pendingUpdate),
          this
        );
      },
      _sendNoResultsSearchEvent: function (e, t) {
        (this._pendingNoResultsEvent = setTimeout(function () {
          Helpers.GlobalEventTracker.assetsSearchNoResults({
            searchTerm: t,
            controlName: e.record.name,
            templateID: Helpers.StageType.getRecordId(),
            userIp: window.userIp,
            fullUrl: window.location.href,
            stageTags: Helpers.StageType.getStageTags(),
          });
        }, 1500)),
          this._timeouts.push(this._pendingNoResultsEvent);
      },
      doSearch: function (e) {
        var t = this,
          n = this.search.val().toLowerCase();
        t.previousValues.search !== n &&
          (e ||
            Helpers.App.replaceUrlParamWithHistory(t.searchUrlParameterName, n),
          t.clearThumbs(),
          (t._algoliaParams.search = n),
          (t._algoliaParams.page = 0),
          (t._totalPages = 0),
          (t.record.preconfiguredSearch = t.search.val()),
          t._getLayers(t._algoliaParams, "search"),
          (this.previousValues.search = n));
      },
      _getLayers: function (e, t) {
        var n = this;
        n._showLayersLoader(),
          n.isChangedState(t) && n._resetRenderLayers(),
          this.dispatch("getAssets", { algoliaParams: e });
      },
      setAssets: function (e) {
        var t = this;
        (t._totalPages = e.totalPages),
          (t._algoliaParams.page = e.page),
          (t._layersToBeRendered = e.data),
          t.readyToLoadAssets === !0 && t._layersToBeRendered.length > 0
            ? t.renderThumbs(e.data)
            : (t._hideLayersLoader(),
              "search" === t._eventSource &&
                "" !== e.searchTerm &&
                t._sendNoResultsSearchEvent(t, e.searchTerm));
      },
      isChangedState: function (e) {
        return "search" === e
          ? (this.dispatch("resetRenderLayers"),
            (this._eventSource = "search"),
            !0)
          : e !== this._eventSource
          ? (this.dispatch("resetRenderLayers"), (this._eventSource = e), !0)
          : !1;
      },
      _resetRenderLayers: function () {
        this.queue.clear(),
          this._layersToBeRendered.forEach(function (e) {
            e.canceled = !0;
          });
      },
      _showLayersLoader: function () {
        (this._loading = !0),
          this.element.find(".footer-layers .layer-spinner").show(),
          this.element.find(".item-contact-info").hide();
      },
      _hideLayersLoader: function () {
        (this._loading = !1),
          this.element.find(".footer-layers .layer-spinner").hide(),
          this.element.find(".item-contact-info").show();
      },
      _handleItemClick: function (e) {
        var t = e.data.item,
          n =
            t.record.id === this.customType
              ? t.record.record_hash
              : t.record.id;
        this.previousValues.list !== t.record.id &&
          (this.setUrlParameter(n), this.selectItem(t, !0));
      },
      _getAllChildrenExactly: function (e) {
        var t = this;
        return e && e.length
          ? t.children.filter(function (t) {
              return e.indexOf(t.constructor.className) >= 0;
            })
          : [];
      },
      _getAllChildrenExcept: function (e) {
        var t = this;
        return e && e.length
          ? t.children.filter(function (t) {
              return -1 === e.indexOf(t.constructor.className);
            })
          : t.children;
      },
      _handleHistoryChange: function () {
        var e, t, n, i, r, o;
        (e = this),
          (t = Helpers.App.getAllURLParams()),
          (n = t[e.graphicUrlParameterName] || e.initialValues.layer),
          (i = t[e.searchUrlParameterName] || ""),
          (o = this.previousValues.list !== n),
          this.previousValues.list === e.customType &&
            this.customImageUploader.reset();
        var s = this._getAllChildrenExcept(["ColorControl"]);
        s
          .filter(function (e) {
            return e.record.id === n;
          })
          .forEach(function (t) {
            o && e.selectItem(t);
          }),
          (r =
            s.some(function (e) {
              return e.record.id === n;
            }) === !1),
          r && n && this._getLayerJSONData(n),
          e.search && (e.search.val(i), e.doSearch(!0));
      },
      _layerJSONDataCallback: function (e, t, n) {
        this._layerJSONDataCallbackExecuted ||
          ((this._layerJSONDataCallbackExecuted = !0),
          n.crop_params.isVideo
            ? ((this.customImageUploader.customVideoPreview.record.userImageFileName =
                n.user_image_filename),
              t && this.selectItem(this.customImageUploader.customVideoPreview))
            : ((this.customImageUploader.customGraphicPreview.record.userImageFileName =
                n.user_image_filename),
              t &&
                this.selectItem(this.customImageUploader.customGraphicPreview)),
          this.dispatch("cropSuccess", {
            id: e,
            userImageFileName: n.user_image_filename,
            croppedImageUrl: n.cropped_image_url,
            croppedVideoUrl: n.cropped_video_url,
            croppedVideoPreviewUrl: n.preview_url,
            isVideo: n.crop_params.isVideo,
            thumbnailUrl: n.thumbnail_url,
            triggeredByPopState: !0,
          }));
      },
      _jsonDataNotFound: function () {
        this.dispatch("imageDataNotFound");
      },
      selectItem: function (e, t) {
        var n = this,
          i = e.record.id;
        this.deselectAll(), e.select();
        var r = this.record.selectedLayer && this.record.selectedLayer.id === i;
        return "customGraphic" !== i && r
          ? this
          : ((this.record.layers =
              e.image ||
              [
                n.customType,
                "customGraphicPreview",
                "customVideoPreview",
              ].indexOf(e.name) > -1
                ? [e.record]
                : []),
            (this.record.selectedLayer = e.record),
            Helpers.GlobalEventTracker.smartTemplateEvent(
              "graphicChange",
              Object.assign(
                { previous: n.previousValues.list, new: i },
                Helpers.App.getProductShownData()
              )
            ),
            (this.previousValues.list = i),
            (this._selectedLayerId = i),
            n.dispatch("change", { triggeredByUser: t, originalDispatcher: n }),
            this);
      },
      setUrlParameter: function (e) {
        return (
          Helpers.App.replaceUrlParamWithHistory(
            this.graphicUrlParameterName,
            e
          ),
          this
        );
      },
      resetUrlParameter: function () {
        return (
          Helpers.App.replaceUrlParamWithHistory(
            this.graphicUrlParameterName,
            ""
          ),
          this
        );
      },
      deselectAll: function () {
        return (
          this._getAllChildrenExcept(["ColorControl"]).forEach(function (e) {
            e.deselect();
          }),
          this.customImageUploader &&
            (this.customImageUploader.customGraphicPreview.deselect(),
            this.customImageUploader.customVideoPreview.deselect()),
          this
        );
      },
      addFooterlayers: function () {
        var e = this,
          t = $(
            '<div class="footer-layers"><div class="layer-spinner"></div><p class="item-contact-info">Don"t see what you need? <br>                        <a href="mailto:hi@placeit.net?subject=Please add more assets like this...">Let us know!</a></p></div>'
          );
        return e.$graphicBody.append(t), e;
      },
      controlInView: function () {
        this.readyToLoadAssets &&
          this._layersToBeRendered.length > 0 &&
          this.renderThumbs(this._layersToBeRendered).then(
            this._onRenderThumbs.bind(this)
          );
      },
      loadAssets: function () {
        var e = this;
        (e.readyToLoadAssets = !0),
          e._layerInfoReady !== !0 ||
            e.isMobilePhone ||
            e.renderThumbs(e._layersToBeRendered);
      },
      updatePrefix: function (e, t) {
        (t = t || !0),
          (this.prefix = e),
          (this.searchUrlParameterName = [
            this.prefix,
            "search",
            this.name,
          ].join("")),
          (this.graphicUrlParameterName = [
            this.prefix,
            this.urlParamName,
            this.name,
          ].join("")),
          t &&
            this._getAllChildrenExactly(["ColorControl"]).forEach(function (t) {
              t.updatePrefix(e);
            });
      },
      clearThumbs: function () {
        var e = this;
        e._getAllChildrenExcept(["ColorControl"])
          .filter(function (t) {
            return t.record.id !== e.customType && "null" !== t.record.id;
          })
          .forEach(function (e) {
            e.destroy();
          });
      },
      destroy: function () {
        this.clearTimeouts(),
          this.clearPopstateEventHandler(),
          this.genericDestroy();
      },
      _showMoreFader: function () {
        var e, t;
        (e = this.$graphicBody.find(".more-fader")),
          (t = '<div class="more-fader"></div>'),
          this.$columnsContainer.innerHeight() >
            this.$graphicBody.innerHeight() &&
            0 === e.length &&
            this.$graphicBody.append(t);
      },
      _hideMoreFader: function () {
        var e;
        (e = this.$graphicBody.find(".more-fader")), e.remove();
      },
      getParams: function () {
        return this._algoliaParams;
      },
      getSelected: function () {
        return this.record.selectedLayer;
      },
      setSelectedAssetId: function (e) {
        this._selectedLayerId = e;
      },
      getSearchTerm: function () {
        return this._algoliaParams.search;
      },
      getSelectedAssetId: function () {
        return this._selectedLayerId;
      },
    },
  }),
  Class(UI.SmartTemplate, "FontSize")
    .inherits(Widget)
    .includes(
      BubblingSupport,
      GenericDestroySupport
    )({
    html: '<div style="display:none"></div>',
    elementClass: "font-size",
    buttonTemplate: '<button class="btn btn-default"></button>',
    prototype: {
      currentValue: null,
      labels: null,
      enabled: !0,
      _popstateHandler: null,
      init: function (e) {
        Widget.prototype.init.call(this, e);
        var t = this;
        return (
          e.isMobilePhone ? this.show() : this.hide(),
          this.bind(
            "size:change",
            function (e) {
              var t = e.data.id.split("size-")[1],
                n = e.data.triggeredByPopState;
              this.record.map(
                function (e) {
                  e.name == t
                    ? ((e.visible = !0),
                      n ||
                        Helpers.App.replaceUrlParamWithHistory(
                          this.parent.fontSizeUrlParameterName,
                          e.name
                        ))
                    : (e.visible = !1);
                }.bind(this)
              ),
                this.$buttons.map(
                  function (t, n) {
                    var i = $(n);
                    i.hasClass(e.data.id)
                      ? i.attr("disabled", !0)
                      : i.attr("disabled", !1),
                      this.isMobilePhone || this.hide(!0);
                  }.bind(this)
                ),
                this.dispatch("change");
            }.bind(this)
          ),
          this.generateLabels(this.record.length),
          this.record.map(
            function (e, t) {
              var n = $(this.constructor.buttonTemplate),
                i = e.visible,
                r = "size-" + e.name,
                o = this.labels[t];
              n.text(o),
                n.attr("aria-label", e.name),
                n.attr("disabled", i),
                n.addClass(r),
                n.on(
                  "click",
                  function () {
                    this.dispatch("size:change", { id: r });
                  }.bind(this)
                ),
                this.element.append(n);
            }.bind(this)
          ),
          (this.$buttons = this.element.find(".btn")),
          (this._popstateHandler = function (e) {
            e.preventDefault();
            var n = Helpers.App.getAllURLParams(),
              i = n[t.parent.fontSizeUrlParameterName];
            i &&
              t.dispatch("size:change", {
                id: "size-" + i,
                triggeredByPopState: !0,
              });
          }),
          window.addEventListener("popstate", this._popstateHandler),
          e.prefillSize &&
            this.dispatch("size:change", {
              id: "size-" + e.prefillSize,
              triggeredByPopState: !0,
            }),
          this
        );
      },
      show: function (e, t) {
        this.enabled !== !1 &&
          (e
            ? (this.buttonClickDelay && this.hide(!0),
              this.element.css("top", e),
              t && this.element.css("left", t),
              this.element.show(),
              this.dispatch("showFontSizes"))
            : this.isMobilePhone && this.element.show());
      },
      hide: function (e) {
        e
          ? (clearTimeout(this.buttonClickDelay), this.element.hide())
          : (this.buttonClickDelay = setTimeout(
              function () {
                this.element.hide();
              }.bind(this),
              500
            ));
      },
      enable: function () {
        this.enabled = !0;
      },
      disable: function () {
        this.enabled = !1;
      },
      generateLabels: function (e) {
        var t;
        switch (e) {
          case 2:
            t = ["S", "L"];
            break;
          case 3:
            t = ["S", "M", "L", "XL"];
            break;
          case 4:
            t = ["S", "M", "L", "XL"];
            break;
          case 5:
            t = ["XS", "S", "M", "L", "XL"];
            break;
          default:
            t = !1;
        }
        return (this.labels = t), this;
      },
      destroy: function () {
        clearInterval(this.buttonClickDelay),
          window.removeEventListener("popstate", this._popstateHandler),
          this.genericDestroy();
      },
    },
  }),
  Module("HistorySupport")({
    prototype: {
      _previousCustomRules: [],
      _saveInteractionsToUrl: function () {
        var e,
          t,
          n = this,
          i = n.record.customRules,
          r = Helpers.App.getAllURLParams(),
          o = {};
        i.forEach(function (e) {
          var t = n._getFullUrlParamFromCustomRule(e);
          o[t.key] = t.value;
        }),
          (r = n._removeInteractionUrlParams(r)),
          (e = n._updateUrlParams(r, o)),
          (t = n._paramsToUrl(e)),
          window.history.pushState({}, Helpers.StageType.getStageSlug(), t),
          i.length > 0 && n.interactionControl.$hint.show(),
          this._updateAddTextButton(),
          (n._previousCustomRules = JSON.parse(JSON.stringify(i)));
      },
      _saveAddedTextToUrl: function (e) {
        var t;
        this._saveInteractionsToUrl(),
          (t = window.location.href),
          e.isColorCopied &&
            ((t += "&colorText_" + e.name + "=" + encodeURIComponent(e.color)),
            (e.isColorCopied = !1)),
          e.isFontCopied &&
            ((t += "&fontText_" + e.name + "=" + e.font),
            (e.isFontCopied = !1)),
          window.history.replaceState({}, Helpers.StageType.getStageSlug(), t);
      },
      _getFullUrlParamFromCustomRule: function (e) {
        var t = this._getBGTextParamsForCustomRule(e),
          n = this._getUrlParamFromCustomRule(e);
        return (
          (n.value = n.value + t),
          e.rotation && (n.value += "_r" + e.rotation),
          n
        );
      },
      _getUrlParamFromCustomRule: function (e) {
        var t, n, i, r, o, s, a, l;
        return (
          (t = e.layerName),
          (n = e.position.x.toFixed(4)),
          (i = e.position.y.toFixed(4)),
          (r = e.dimensions.width.toFixed(4)),
          (o = e.dimensions.height.toFixed(4)),
          (s = e.isPristine ? "p" : "d"),
          (a = this._cachedAspectRatios[t]),
          (l = [n, i, r, o, s]),
          a && l.push(a.toFixed(4)),
          { key: "pos-size_" + t, value: l.join("_") }
        );
      },
      _getBGTextParamsForCustomRule: function (e) {
        var t = this._getTextRecordByName(e.layerName);
        if ("undefined" != typeof t && "undefined" != typeof t.bgOpacity) {
          var n = [""];
          return (
            n.push(t.bgColor),
            n.push(t.bgPaddingFraction),
            n.push(t.bgOpacity),
            n.join("_")
          );
        }
        return "";
      },
      _loadInteractionsFromUrl: function () {
        var e = this,
          t = Helpers.App.getAllURLParams(),
          n = {},
          i = [],
          r = "pos-size_",
          o = r.length,
          s = [];
        e._initialCustomRules.reduce(function (e, t) {
          return (
            (t.isPristine = !0),
            (e[t.layerName] = JSON.parse(JSON.stringify(t))),
            e
          );
        }, n),
          Object.keys(t).forEach(function (i) {
            var a,
              l,
              c,
              u,
              h,
              d,
              p,
              f = t[i],
              m = !1,
              g = {},
              v = 0;
            0 === i.indexOf(r) &&
              ((d = i.slice(o)),
              (f = f.split("_")),
              f[f.length - 1].startsWith("r") === !0 &&
                ((v = parseFloat(f.pop().slice(1))), (v = v || 6.283)),
              (c = parseFloat(f[0])),
              (u = parseFloat(f[1])),
              (a = parseFloat(f[2])),
              (l = parseFloat(f[3])),
              (m = "p" === f[4]),
              (h = f[5] && parseFloat(f[5])),
              (g.bgColor = f[6] || "#000000"),
              (g.bgPaddingFraction = f[7] || 0.1),
              (g.bgOpacity = (f[8] && parseInt(f[8])) || 0),
              (g.name = d),
              s.push(g),
              (p = n[d]),
              p ||
                ((p = {}),
                (n[d] = p),
                (p.layerName = d),
                (p.layerType = "folder"),
                (p.position = {}),
                (p.dimensions = {}),
                (p.originalBounds = {}),
                (p.scale = { x: 1, y: 1 })),
              p.layerName.indexOf("Rules_strokes") > -1 &&
                (p.accumulatedInteractions = [
                  { x: c, y: u, width: a, height: l, isPositionChange: !1 },
                ]),
              (p.position = { x: c, y: u }),
              (p.dimensions = { width: a, height: l }),
              (p.isPristine = m),
              (p.rotation = v),
              (e._cachedAspectRatios[d] = h));
          }),
          Object.keys(n).forEach(function (t) {
            var r,
              o = n[t],
              s = o.originalBounds,
              a = o.position,
              l = o.dimensions;
            (r = e.getStageDimensions()),
              r &&
                r.width &&
                ((s.x = a.x * r.width),
                (s.y = a.y * r.height),
                (s.width = l.width * r.width),
                (s.height = l.height * r.height)),
              i.push(o);
          }),
          e.createTextControlRecords(s),
          (e._previousCustomRules = JSON.parse(JSON.stringify(i)));
        for (var a = 0; a < s.length; a++) {
          var l = this._getTextRecordByName(s[a].name);
          if (!s[a].name || "undefined" == typeof l) break;
          (l.bgColor = s[a].bgColor),
            (l.bgPaddingFraction = s[a].bgPaddingFraction),
            (l.bgOpacity = s[a].bgOpacity);
        }
        (e.record.customRules = i),
          e.canProcessWithEngine &&
            (e._placePristineTextObjects(e._getPristineTextObjects()),
            e.recalculateCustomRules(e._getPristineTextObjects())),
          e._areAllRulesPristine()
            ? e._hideInteractionControls()
            : e._showInteractionControls(),
          n.length > 0 && e.interactionControl.$hint.show(),
          e._updateAddTextButton();
      },
      _handleUserAddedTextPopstate: function (e) {
        var t = this,
          n = t._getUserAddedTextNamesFromCustomRules(t._previousCustomRules),
          i = t._getUserAddedTextNamesFromUrl(),
          r = t._getTextsAddedOnPopstate(n, i).sort(),
          o = t._getTextsRemovedOnPopstate(n, i).sort();
        r.forEach(function (n) {
          var i = e.filter(function (e) {
            return e.name === n;
          });
          (i = i[0]), t._showTextLayer(n, i);
        }),
          o.forEach(function (e) {
            t._hideTextLayer(e);
          });
      },
      _getTextsAddedOnPopstate: function (e, t) {
        return t.filter(function (t) {
          return -1 === e.indexOf(t);
        });
      },
      _getTextsRemovedOnPopstate: function (e, t) {
        return e.filter(function (e) {
          return -1 === t.indexOf(e);
        });
      },
      _getUserAddedTextNamesFromCustomRules: function (e) {
        return (
          (e = e || this.record.customRules),
          this._getCustomRulesLayerNames(e).filter(function (e) {
            return 0 === e.indexOf("added-text");
          })
        );
      },
      _getCustomRulesLayerNames: function (e) {
        return (
          (e = e || this.record.customRules),
          e.map(function (e) {
            return e.layerName;
          })
        );
      },
      _removeInteractionUrlParams: function (e) {
        var t = {};
        return (
          Object.keys(e)
            .filter(function (e) {
              return 0 !== e.indexOf("pos-size_");
            })
            .forEach(function (n) {
              t[n] = e[n];
            }),
          t
        );
      },
      _updateUrlParams: function (e, t) {
        var n = JSON.parse(JSON.stringify(e));
        return (
          Object.keys(t).forEach(function (e) {
            n[e] = t[e];
          }),
          n
        );
      },
      _paramsToUrl: function (e) {
        var t,
          n = [window.location.origin, window.location.pathname];
        return (
          (t = Object.keys(e)
            .map(function (t) {
              return t + "=" + encodeURIComponent(e[t]);
            })
            .join("&")),
          t && n.push("?", t),
          n.join("")
        );
      },
      _resetLayout: function () {
        var e = this._getActiveUserAddedTextRecords();
        (this.record.customRules =
          JSON.parse(JSON.stringify(this._initialCustomRules)) || []),
          this._placePristineTextObjects(e),
          this.recalculateCustomRules(e),
          this._saveInteractionsToUrl();
      },
      _areAllRulesPristine: function () {
        var e = this.record.customRules.filter(function (e) {
          return !e.isPristine;
        });
        return 0 === e.length;
      },
    },
  }),
  Class(UI.SmartTemplate, "Layout").inherits(Widget).includes(BubblingSupport)({
    html: '<div><label class="title">Layout</label></div>',
    elementClass: "layout-picker",
    buttonTemplate: '<button class="btn btn-default"></button>',
    optionsList: [
      {
        name: "left",
        svg: '<svg width="23px" height="8px" viewBox="0 0 23 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">            <desc>Created with Sketch.</desc>            <defs>              <path d="M23,4 C23,5.93472222 21.4347222,7.5 19.5,7.5 C17.5652778,7.5 16,5.93472222 16,4 C16,2.06527778 17.5652778,0.5 19.5,0.5 C21.4347222,0.5 23,2.06527778 23,4 Z M0.5,5 L13.5,5 C13.7761562,5 14,4.80102778 14,4.55555556 L14,3.44444444 C14,3.19897222 13.7761562,3 13.5,3 L0.5,3 C0.22384375,3 0,3.19897222 0,3.44444444 L0,4.55555556 C0,4.80102778 0.22384375,5 0.5,5 Z" id="path-1"></path>            </defs>            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">                <g id="Text-Left-On">                    <mask id="mask-1" fill="white">                        <use xlink:href="#path-1"></use>                    </mask>                    <use id="Mask" fill="#9B9B9B" fill-rule="nonzero" xlink:href="#path-1"></use>                </g>            </g>          </svg>',
        order: 1,
      },
      {
        name: "right",
        svg: '<svg width="23px" height="8px" viewBox="0 0 23 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">            <title>Right On</title>            <desc>Created with Sketch.</desc>            <defs>                <path d="M7,4 C7,5.93472222 5.43472222,7.5 3.5,7.5 C1.56527778,7.5 0,5.93472222 0,4 C0,2.06527778 1.56527778,0.5 3.5,0.5 C5.43472222,0.5 7,2.06527778 7,4 Z M9.5,5 L22.5,5 C22.7761562,5 23,4.80102778 23,4.55555556 L23,3.44444444 C23,3.19897222 22.7761562,3 22.5,3 L9.5,3 C9.22384375,3 9,3.19897222 9,3.44444444 L9,4.55555556 C9,4.80102778 9.22384375,5 9.5,5 Z" id="path-2"></path>            </defs>            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">                <g id="Right-On">                    <mask id="mask-2" fill="white">                        <use xlink:href="#path-2"></use>                    </mask>                    <use id="Mask-2" fill="#9B9B9B" fill-rule="nonzero" xlink:href="#path-2"></use>                </g>            </g>        </svg>',
        order: 2,
      },
      {
        name: "front",
        svg: '<svg width="16px" height="9px" viewBox="0 0 16 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">            <title>Center On</title>            <desc>Created with Sketch.</desc>            <defs>                <path d="M12,4.5 C12,6.71111111 10.2111111,8.5 8,8.5 C5.78888889,8.5 4,6.71111111 4,4.5 C4,2.28888889 5.78888889,0.5 8,0.5 C10.2111111,0.5 12,2.28888889 12,4.5 Z M0.571428571,5.5 L15.4285714,5.5 C15.7441786,5.5 16,5.30102778 16,5.05555556 L16,3.94444444 C16,3.69897222 15.7441786,3.5 15.4285714,3.5 L0.571428571,3.5 C0.255821429,3.5 0,3.69897222 0,3.94444444 L0,5.05555556 C0,5.30102778 0.255821429,5.5 0.571428571,5.5 Z" id="path-3"></path>            </defs>            <g id="Page-3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">                <g id="Center-On">                    <mask id="mask-3" fill="white">                        <use xlink:href="#path-3"></use>                    </mask>                    <use id="Mask-3" fill="#9B9B9B" fill-rule="nonzero" xlink:href="#path-3"></use>                </g>            </g>        </svg>',
        order: 3,
      },
      {
        name: "behind",
        svg: '<svg width="16px" height="9px" viewBox="0 0 16 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">            <title>layout behind on</title>            <defs></defs>            <g id="Page-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">                <g id="Artboard" transform="translate(-46.000000, -45.000000)" fill="#9B9B9B">                    <g id="layout-behind-on" transform="translate(46.000000, 45.000000)">                        <path d="M0.571428571,5.5 L15.4285714,5.5 C15.7441786,5.5 16,5.30102778 16,5.05555556 L16,3.94444444 C16,3.69897222 15.7441786,3.5 15.4285714,3.5 L0.571428571,3.5 C0.255821429,3.5 0,3.69897222 0,3.94444444 L0,5.05555556 C0,5.30102778 0.255821429,5.5 0.571428571,5.5 Z" id="path-4" fill-rule="nonzero"></path>                        <path d="M12,4.5 C12,6.71111111 10.2111111,8.5 8,8.5 C5.78888889,8.5 4,6.71111111 4,4.5 C4,2.28888889 5.78888889,0.5 8,0.5 C10.2111111,0.5 12,2.28888889 12,4.5 Z" id="path-4-path"></path>                    </g>                </g>            </g>        </svg>',
        order: 4,
      },
      {
        name: "below",
        svg: '<svg width="15px" height="11px" viewBox="0 0 15 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">            <title>Below On</title>            <defs>                <path d="M11,7.5 C11,9.43472222 9.43472222,11 7.5,11 C5.56527778,11 4,9.43472222 4,7.5 C4,5.56527778 5.56527778,4 7.5,4 C9.43472222,4 11,5.56527778 11,7.5 Z M0.535714286,2 L14.4642857,2 C14.7601674,2 15,1.80102778 15,1.55555556 L15,0.444444444 C15,0.198972222 14.7601674,0 14.4642857,0 L0.535714286,0 C0.239832589,0 0,0.198972222 0,0.444444444 L0,1.55555556 C0,1.80102778 0.239832589,2 0.535714286,2 Z" id="path-5"></path>            </defs>            <g id="Page-5" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">                <g id="Below-On">                    <mask id="mask-5" fill="white">                        <use xlink:href="#path-5"></use>                    </mask>                    <use id="Mask-5" fill="#9B9B9B" fill-rule="nonzero" xlink:href="#path-5"></use>                </g>            </g>        </svg>',
        order: 5,
      },
      {
        name: "above",
        svg: '<svg width="15px" height="11px" viewBox="0 0 15 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">            <title>Above On</title>            <defs>                <path d="M11,3.5 C11,5.43472222 9.43472222,7 7.5,7 C5.56527778,7 4,5.43472222 4,3.5 C4,1.56527778 5.56527778,0 7.5,0 C9.43472222,0 11,1.56527778 11,3.5 Z M0.535714286,11 L14.4642857,11 C14.7601674,11 15,10.8010278 15,10.5555556 L15,9.44444444 C15,9.19897222 14.7601674,9 14.4642857,9 L0.535714286,9 C0.239832589,9 0,9.19897222 0,9.44444444 L0,10.5555556 C0,10.8010278 0.239832589,11 0.535714286,11 Z" id="path-6"></path>            </defs>            <g id="Page-6" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">                <g id="Above-On">                    <mask id="mask-6" fill="white">                        <use xlink:href="#path-6"></use>                    </mask>                    <use id="Mask-6" fill="#9B9B9B" fill-rule="nonzero" xlink:href="#path-6"></use>                </g>            </g>        </svg>',
        order: 6,
      },
    ],
    prototype: {
      $buttons: [],
      init: function (e) {
        Widget.prototype.init.call(this, e);
        var t = this;
        this.bind("optionChange", function (e) {
          var n = e.data.clickedOption,
            i = e.data.triggeredByPopState;
          t.record.map(function (e) {
            e.name == n
              ? ((e.visible = !0),
                i || Helpers.App.replaceUrlParamWithHistory("layout", e.name))
              : (e.visible = !1);
          }),
            t.$buttons.map(function (e) {
              e.attr("disabled", e.hasClass("layout-" + n));
            }),
            t.dispatch("change");
        }),
          this.record.map(function (e) {
            var n = $(t.constructor.buttonTemplate),
              i = t.constructor.optionsList.filter(function (t) {
                return e.name == t.name ? !0 : void 0;
              })[0];
            n.attr("disabled", !1),
              e.visible && n.attr("disabled", !0),
              n.append(i.svg),
              n.css(
                "width",
                "calc(" +
                  100 / t.record.length +
                  "% - " +
                  5 / t.record.length +
                  "px)"
              ),
              n.addClass("layout-" + i.name),
              n.bind("click", function (e) {
                var n = e.currentTarget,
                  i = n.className.split("layout-")[1];
                t.dispatch("optionChange", { clickedOption: i });
              }),
              t.$buttons.push(n);
          }),
          this.$buttons.sort(function (e, n) {
            var i = e.get(0).className.split("layout-")[1],
              r = n.get(0).className.split("layout-")[1],
              o = t.constructor.optionsList.filter(function (e) {
                return e.name == i;
              })[0].order,
              s = t.constructor.optionsList.filter(function (e) {
                return e.name == r;
              })[0].order;
            return s > o ? -1 : o > s ? 1 : 0;
          }),
          this.$buttons.map(function (e) {
            t.element.append(e);
          }),
          window.addEventListener("popstate", function (e) {
            e.preventDefault();
            var n = Helpers.App.getAllURLParams(),
              i = n.layout;
            i
              ? t.dispatch("optionChange", {
                  clickedOption: i,
                  triggeredByPopState: !0,
                })
              : t.defaultValue &&
                t.dispatch("optionChange", {
                  clickedOption: t.defaultValue,
                  triggeredByPopState: !0,
                });
          }),
          this.prefillLayout &&
            this.bind("render", function () {
              t.dispatch("optionChange", {
                clickedOption: t.prefillLayout,
                triggeredByPopState: !0,
              });
            });
      },
      show: function () {
        this.element.show();
      },
      hide: function () {
        this.element.hide();
      },
    },
  }),
  Class(UI.SmartTemplate, "Scaling").inherits(Widget).includes(BubblingSupport)(
    {
      html: '<div style="display: none">        <div class="size-btns-container">            <div class="tooltip-click-area minus" data-toggle="tooltip" title="Sorry, that\'s as small as it gets"></div>            <div class="tooltip-click-area plus" data-toggle="tooltip" title="Sorry, that\'s as large as it gets"></div>            <button class="minus p-icon btn"></button>            <button class="plus p-icon btn"></button>        </div>    </div>',
      elementClass: "scaling-widget",
      prototype: {
        currentValue: null,
        initialValue: null,
        init: function (e) {
          Widget.prototype.init.call(this, e);
          var t = this;
          (this.$button = {
            minus: this.element.find("button.minus"),
            plus: this.element.find("button.plus"),
          }),
            (this.$controls = this.element.find(".size-btns-container")),
            (this.$tooltipArea = {
              minus: this.element.find(".tooltip-click-area.minus"),
              plus: this.element.find(".tooltip-click-area.plus"),
            }),
            this.record.map(
              function (e, t) {
                e.visible &&
                  ((this.currentValue = t),
                  (this.initialValue = t),
                  0 == this.currentValue
                    ? (this.$button.minus.addClass("disabled"),
                      this.$button.minus.attr("disabled", !0),
                      this.$tooltipArea.minus.show())
                    : this.currentValue == this.record.length - 1 &&
                      (this.$button.plus.addClass("disabled"),
                      this.$button.plus.attr("disabled", !0),
                      this.$tooltipArea.plus.show()));
              }.bind(this)
            ),
            this.$button.minus.bind(
              "click",
              this._scaleHandler.bind(this, "minus")
            ),
            this.$button.plus.bind(
              "click",
              this._scaleHandler.bind(this, "plus")
            ),
            window.addEventListener("popstate", function () {
              var e = Helpers.App.getAllURLParams(),
                n = e.zoom;
              n
                ? t.record.map(function (e, i) {
                    e.name == n && t.changeValue(i, !1);
                  })
                : t.changeValue(t.initialValue, !1);
            }),
            t.prefillZoom &&
              this.bind("render", function () {
                t.record.map(function (e, n) {
                  e.name == t.prefillZoom && t.changeValue(n, !1);
                });
              });
          var n = {
            container: "body",
            placement: "top",
            template:
              '                    <div class="tooltip nowrap">                        <div class="tooltip-arrow"></div>                        <div class="tooltip-inner"></div>                    </div>',
            viewport: { selector: "body", padding: 10 },
          };
          this.$tooltipArea.minus.tooltip(n), this.$tooltipArea.plus.tooltip(n);
        },
        changeValue: function (e, t) {
          return (
            this.record.map(function (e) {
              e.visible = !1;
            }),
            (this.record[e].visible = !0),
            (this.currentValue = e),
            t &&
              Helpers.App.replaceUrlParamWithHistory(
                "zoom",
                this.record[e].name
              ),
            this.currentValue == this.record.length - 1
              ? (this.$button.plus.attr("disabled", !0),
                this.$button.plus.addClass("disabled"),
                this.$tooltipArea.plus.show())
              : (this.$button.plus.attr("disabled", !1),
                this.$button.plus.removeClass("disabled"),
                this.$tooltipArea.plus.hide()),
            0 == this.currentValue
              ? (this.$button.minus.attr("disabled", !0),
                this.$button.minus.addClass("disabled"),
                this.$tooltipArea.minus.show())
              : (this.$button.minus.attr("disabled", !1),
                this.$button.minus.removeClass("disabled"),
                this.$tooltipArea.minus.hide()),
            this.dispatch("change", { triggeredByPopState: t === !1 }),
            this
          );
        },
        _scaleHandler: function (e, t) {
          return (
            t.preventDefault(),
            "plus" == e
              ? this.currentValue < this.record.length - 1 &&
                this.currentValue++
              : "minus" == e && this.currentValue > 0 && this.currentValue--,
            this.changeValue(this.currentValue, !0),
            this
          );
        },
        show: function () {
          this.element.show();
        },
        hide: function () {
          this.element.hide();
        },
      },
    }
  ),
  Class(UI.SmartTemplate, "TabbedColorPicker")
    .inherits(Widget)
    .includes(
      BubblingSupport,
      GenericDestroySupport,
      ColorPalettesSupport
    )({
    html: '        <div>            <div class="fake-picker control sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color: rgb(255, 0, 0);"></div></div><div class="sp-dd p-icon down-arrow"></div></div>            <div class="picker-modal">                <div class="tabs-container">                    <div class="color picker-layout picker-active">                        Text Color                    </div>                    <div class="background picker-layout picker-inactive">                        Text Background                    </div>                </div>                <div class="padding-container">                    <div class="tight padding-option padding-active">                        TIGHT PADDING                    </div>                    <div class="spacious padding-option padding-inactive">                        SPACIOUS PADDING                    </div>                </div>                <div class="spectrum color" style="display:block;">                    <input class="color-picker" value="#FFFFFF" type="text" />                </div>                <div class="spectrum background" style="display:none;">                    <input class="background-picker" value="#000000" type="text" />                </div>            </div>        </div>',
    elementClass: "tabbed-color-picker",
    prototype: {
      $body: null,
      $fakePicker: null,
      $pickerModal: null,
      $colorTab: null,
      $backgroundTab: null,
      $colorSpectrum: null,
      $backgroundSpectrum: null,
      $paddingContainer: null,
      $colorPaletteSpectrum: null,
      $backgroundPaletteSpectrum: null,
      $tightPadding: null,
      $spaciousPadding: null,
      $colorPicker: null,
      $backgroundPicker: null,
      $colorModal: null,
      $backgroundModal: null,
      $colorChoose: null,
      $backgroundChoose: null,
      $colorToggle: null,
      $backgroundToggle: null,
      $colorCancel: null,
      $backgroundCancel: null,
      _deferredPreview: {},
      _hastenedPreview: {},
      _allowHastenedPreview: null,
      _padding: {},
      _currentColor: null,
      _currentBackground: null,
      _previousColor: null,
      _previousBackground: null,
      _renderedPadding: null,
      _selectedPadding: null,
      _renderedOpacity: null,
      _selectedOpacity: null,
      _swapInitialPadding: !1,
      _isDraggingColor: !1,
      _isDraggingBackground: !1,
      _colorSpectrumWrapper: {},
      _backgroundSpectrumWrapper: {},
      _colorPickerPosition: {},
      init: function (e) {
        Widget.prototype.init.call(this, e),
          this._initObjectVariables(),
          this._initWidgetSelectors(),
          this._initWidgetConfig(e),
          this._initWidgetLayout(),
          this._initSpectrum(),
          this._setColorpickerPositioning(),
          this._detachPickerModal(),
          this._bindings(),
          this._bindColorChange(),
          this._bindBackgroundChange(),
          this._executeDeferredEvents(),
          this._popState();
      },
      _initObjectVariables: function () {
        var e = this;
        (e._deferredPreview = {}),
          (e._hastenedPreview = {}),
          (e._padding = { isTight: !0, isSpacious: !1, isDisable: !1 });
      },
      _initWidgetSelectors: function () {
        var e = this;
        (e.$body = $("body")),
          (e.$fakePicker = this.element.find(".fake-picker")),
          (e.$pickerModal = this.element.find(".picker-modal")),
          (e.$colorTab = this.element.find(".tabs-container .color")),
          (e.$backgroundTab = this.element.find(".tabs-container .background")),
          (e.$colorSpectrum = this.element.find(".spectrum.color")),
          (e.$backgroundSpectrum = this.element.find(".spectrum.background")),
          (e.$paddingContainer = this.element.find(".padding-container")),
          (e.$tightPadding = this.element.find(".tight")),
          (e.$spaciousPadding = this.element.find(".spacious")),
          (e.$colorPicker = this.element.find(".color-picker")),
          (e.$backgroundPicker = this.element.find(".background-picker")),
          Helpers.App.isMobile() === !0 &&
            (e.$body = $(".stage-mobile-controls-container").find(
              ".component-popup-container"
            ));
      },
      _initWidgetConfig: function (e) {
        var t = this;
        t.$body.addClass("contains-picker-modal"),
          (t.initialValue = e.record.color),
          (t.initialBgPaddingFraction = e.record.bgPaddingFraction),
          (t.initialBgColor = e.record.bgColor),
          (t.initialBgOpacity = e.record.bgOpacity),
          (t.defaultPadding = 0.1),
          (t.sidebarSide = e.sidebarSide || ""),
          (t.colorPickerUrlParameterName =
            e.urlParameterName || t.prefix + t.name),
          (t.backgroundPickerUrlParameterName = t.prefix + t.nameBg),
          (t.paddingPickerUrlParameterName = t.prefix + t.namePadding),
          (t.opacityPickerUrlParameterName = t.prefix + t.nameOpacity),
          (t.changeColorEventName =
            t.changeColorEventName || "addedTextColorChange"),
          (t._extendedPickerActive = !1),
          (t._allowHastenedPreview = !0),
          (t._renderedPadding = t._selectedPadding =
            t.initialBgPaddingFraction),
          (t._renderedOpacity = t._selectedOpacity = t.initialBgOpacity),
          (t.record.color = e.prefillColor || e.record.color),
          (t.record.bgColor = e.record.bgColor),
          (t._currentColor = e.record.color),
          (t._currentBackground = e.record.bgColor),
          0 === t.record.bgOpacity &&
            ((t._currentBackground = "transparent"), t._disablePadding()),
          "0.25" === t.record.bgPaddingFraction && (t._swapInitialPadding = !0);
      },
      _initWidgetLayout: function () {
        var e = this;
        e.$paddingContainer.hide();
      },
      _initSpectrum: function () {
        var e,
          t,
          n,
          i,
          r = this;
        (e = r._createConfig()),
          (t = r._createColorConfig(e)),
          (n = r._createBackgroundConfig(e)),
          (i = Helpers.App.isMobile()
            ? page.stage.componentPopup.getComponentContainer()
            : null),
          (r._colorSpectrumWrapper = new SpectrumWrapper({
            $colorpicker: r.$colorPicker,
            spectrumConfig: t,
            colorIsTemplateDefault: !1,
            $popupContainer: i,
            $modal: r.$pickerModal,
          })),
          (r._backgroundSpectrumWrapper = new SpectrumWrapper({
            $colorpicker: r.$backgroundPicker,
            spectrumConfig: n,
            colorIsTemplateDefault: !1,
            $popupContainer: i,
            $modal: r.$pickerModal,
          })),
          (r.$colorModal = r.$colorSpectrum.find(".sp-container")),
          (r.$backgroundModal = r.$backgroundSpectrum.find(".sp-container")),
          (r.$colorChoose = r.$colorSpectrum.find(".sp-choose")),
          (r.$backgroundChoose = r.$backgroundSpectrum.find(".sp-choose")),
          (r.$colorToggle = r.$colorSpectrum.find(".sp-palette-toggle")),
          (r.$backgroundToggle =
            r.$backgroundSpectrum.find(".sp-palette-toggle")),
          (r.$colorCancel = r.$colorSpectrum.find(".sp-cancel")),
          (r.$backgroundCancel = r.$backgroundSpectrum.find(".sp-cancel")),
          (r._hastenedPreview.color = t.color),
          (r._hastenedPreview.background = n.color),
          r._updateColorPreview(r._hastenedPreview);
      },
      _bindColorChange: function () {
        var e = this;
        e.$colorPicker.bind("change move.spectrum", function (t) {
          e.$pickerModal.is(":visible") &&
            "spectrum" === t.namespace &&
            e._commitColorChange();
        }),
          e.$colorPicker.bind("dragstart.spectrum", function () {
            e._isDraggingColor = !0;
          }),
          e.$colorPicker.bind("dragstop.spectrum", function () {
            e._isDraggingColor = !1;
          });
      },
      _commitColorChange: function () {
        var e,
          t,
          n = this;
        (e = n.$colorPicker.spectrum("get")),
          (t = e.toHexString()),
          n._allowHastenedPreview || !n._isDraggingColor
            ? ((n._hastenedPreview.color = t),
              n._updateColorPreview(n._hastenedPreview),
              n._renderColor(e))
            : n._allowHastenedPreview
            ? ((n._deferredPreview.color = t),
              n._updateColorPreview(n._deferredPreview))
            : ((n._deferredPreview.color = t),
              n._updateColorPreview({
                color: n._deferredPreview.color,
                background: n._hastenedPreview.background,
              }));
      },
      _renderColor: function (e) {
        var t,
          n,
          i = this;
        (t = e.toHexString()),
          (i._previousColor = i._currentColor),
          (i._currentColor = t),
          (n = i._previousColor !== i._currentColor),
          n && (i._refreshColor(e), i._triggerEngineProcess({ type: "color" }));
      },
      _refreshColor: function (e) {
        var t,
          n = this;
        (t = e.toHexString()), (n.record.color = t);
      },
      _triggerEngineProcess: function (e) {
        var t,
          n = this;
        if (
          ((t = {
            triggeredByPopState: !1,
            triggeredByUser: !0,
            originalDispatcher: n,
          }),
          n.record.visible === !1)
        )
          n.dispatch("notVisible");
        else {
          var i, r, o;
          (n.record.bgPaddingFraction =
            n.record.bgPaddingFraction || n.defaultPadding),
            (i = "pos-size_added-text" + n.name[n.name.length - 1]),
            (r = Helpers.App.getUrlParam(i, window.href)),
            (o = r.split("_")),
            (o[6] = n.record.bgColor),
            (o[7] = n.record.bgPaddingFraction),
            (o[8] = n.record.bgOpacity),
            (r = o.join("_")),
            n.dispatch("change", t),
            "color" === e.type &&
              (Helpers.App.replaceUrlParamWithHistory(
                n.colorPickerUrlParameterName,
                n.record.color
              ),
              Helpers.GlobalEventTracker.smartTemplateEvent(
                n.changeColorEventName,
                Object.assign(
                  {
                    name: n.name,
                    previous: n._previousColor,
                    new: n._currentColor,
                  },
                  Helpers.App.getProductShownData()
                )
              )),
            "background" === e.type &&
              (Helpers.App.replaceUrlParamWithHistory(i, r),
              Helpers.GlobalEventTracker.smartTemplateEvent(
                n.changeColorEventName,
                Object.assign(
                  {
                    name: n.name,
                    previous: n._previousBackground,
                    new: n._currentBackground,
                  },
                  Helpers.App.getProductShownData()
                )
              ));
        }
      },
      _bindBackgroundChange: function () {
        var e = this;
        e.$backgroundPicker.bind("change move.spectrum", function (t) {
          e.$pickerModal.is(":visible") &&
            "spectrum" === t.namespace &&
            e._commitBackgroundChange();
        }),
          e.$backgroundPicker.bind("dragstart.spectrum", function () {
            e._isDraggingBackground = !0;
          }),
          e.$backgroundPicker.bind("dragstop.spectrum", function () {
            e._isDraggingBackground = !1;
          });
      },
      _commitBackgroundChange: function () {
        var e,
          t,
          n = this;
        (e = n.$backgroundPicker.spectrum("get")),
          (t = e.toHexString()),
          e._a < 1
            ? ((t = "transparent"),
              (n._selectedOpacity = 0),
              n._disablePadding())
            : ((n._selectedOpacity = 1), n._enablePadding()),
          n._allowHastenedPreview || !n._isDraggingBackground
            ? ((n._hastenedPreview.background = t),
              n._updateColorPreview(n._hastenedPreview),
              n._renderBackground(e))
            : n._allowHastenedPreview
            ? ((n._deferredPreview.background = t),
              n._updateColorPreview(n._deferredPreview))
            : ((n._deferredPreview.background = t),
              n._updateColorPreview({
                color: n._hastenedPreview.color,
                background: n._deferredPreview.background,
              }));
      },
      _renderBackground: function (e) {
        var t,
          n,
          i = this;
        (t = e.toHexString()),
          e._a < 1 && (t = "transparent"),
          (i._previousBackground = i._currentBackground),
          (i._currentBackground = t),
          (n = i._previousBackground !== t),
          n &&
            (i._refreshBackground(e),
            i._triggerEngineProcess({ type: "background" }),
            i._handleTransparency());
      },
      _refreshBackground: function (e) {
        var t,
          n = this;
        (t = e.toHexString()),
          (n.record.bgOpacity = 1),
          (n.record.bgColor = t),
          e._a < 1
            ? ((n._renderedOpacity = n._selectedOpacity),
              (n.record.bgOpacity = 0))
            : (n._renderedOpacity = n._selectedOpacity);
      },
      _handleTransparency: function () {
        var e,
          t,
          n = this;
        (e =
          "transparent" === n._previousBackground &&
          "transparent" !== n._currentBackground),
          (t =
            "transparent" === n._currentBackground &&
            "transparent" !== n._previousBackground),
          e && n._enablePadding(),
          t && n._disablePadding();
      },
      _enablePadding: function () {
        var e = this;
        e.$tightPadding.removeClass("padding-disable"),
          e.$spaciousPadding.removeClass("padding-disable"),
          (e._padding.isDisable = !1);
      },
      _disablePadding: function () {
        var e = this;
        e.$tightPadding.addClass("padding-disable"),
          e.$spaciousPadding.addClass("padding-disable"),
          (e._padding.isDisable = !0);
      },
      refreshColorpicker: function () {
        var e,
          t,
          n,
          i = this;
        (e = i.record.color),
          (t = n = i.record.bgColor),
          "undefined" == typeof i.record.bgColor &&
            (-1 === page.stage.record.text[0].name.indexOf("added-text") &&
              ((i.initialBgColor = page.stage.record.text[0].color),
              (i.initialBgPaddingFraction = 0.1)),
            (i.record.bgColor = i.initialBgColor),
            (i.record.bgPaddingFraction = i.initialBgPaddingFraction),
            (i.record.bgOpacity = i.initialBgOpacity)),
          0 === i.record.bgOpacity &&
            ((t = "rgba(0,0,0,0)"), (n = "transparent")),
          i.$colorPicker.spectrum("set", e),
          i.$backgroundPicker.spectrum("set", t),
          (i._hastenedPreview.color = e),
          (i._hastenedPreview.background = n),
          i._updateColorPreview(i._hastenedPreview);
      },
      _resetPickerModal: function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          s = this;
        (e = s._hastenedPreview.color),
          (t = s._hastenedPreview.background),
          (s._currentColor = s._previousColor = e),
          (s._currentBackground = s._previousBackground = t),
          (n = s._selectedOpacity !== s._renderedOpacity),
          (r = s._selectedPadding !== s._renderedPadding),
          r &&
            !n &&
            ((s._selectedPadding = s._renderedPadding),
            (o = 0.1 === s._selectedPadding),
            o ? s.$tightPadding.click() : s.$spaciousPadding.click()),
          n &&
            ((s._selectedOpacity = s._renderedOpacity),
            (i = 0 === s._selectedOpacity),
            i ? s._enablePadding() : s._disablePadding()),
          s.$colorPicker.spectrum("set", e),
          s.$backgroundPicker.spectrum("set", t),
          s._updateColorPreview(s._hastenedPreview);
      },
      _bindings: function () {
        var e = this;
        e._widgetUIBindings(), e._spectrumAddedBindings();
      },
      _controlClickHandler: function (e) {
        e.stopPropagation();
        var t = this,
          n = t.$pickerModal.is(":visible");
        n
          ? (t._resetPickerModal(),
            Helpers.App.isMobile() &&
              t.dispatch("hideModal", { originalDispatcher: t }),
            t.dispatch("componentOpen"))
          : (t.dispatch("componentOpen", { component: t.$pickerModal }),
            (t._deferredPreview.color = t._hastenedPreview.color),
            (t._deferredPreview.background = t._hastenedPreview.background),
            t._updateColorPreview(t._hastenedPreview),
            t.$colorPicker.spectrum("set", t._hastenedPreview.color),
            t.$backgroundPicker.spectrum("set", t._hastenedPreview.background),
            t.$pickerModal.show(),
            t._showSmartTemplateModal(),
            t.$colorPicker.trigger("show.spectrum"),
            t.$backgroundPicker.trigger("show.spectrum"));
      },
      _widgetUIBindings: function () {
        var e,
          t = this;
        $(document).mouseup(function (n) {
          (e = t.$pickerModal),
            !t.$pickerModal.is(":visible") ||
              t.element[0].contains(n.target) ||
              e.is(n.target) ||
              0 !== e.has(n.target).length ||
              (t._resetPickerModal(),
              Helpers.App.isMobile() &&
                t.dispatch("hideModal", { originalDispatcher: t }),
              t.dispatch("componentOpen"),
              t.$colorPicker.trigger("hide.spectrum"),
              t.$backgroundPicker.trigger("hide.spectrum"));
        }),
          t.element
            .find(".control")
            .bind("click", t._controlClickHandler.bind(this)),
          t.$colorTab.bind("click", t._colorTabClickHandler.bind(this)),
          t.$backgroundTab.bind(
            "click",
            t._backgroundTabClickHandler.bind(this)
          ),
          t.$tightPadding.bind("click", t._tightPaddingClickHandler.bind(this)),
          t.$spaciousPadding.bind(
            "click",
            t._spaciousPaddingClickHandler.bind(this)
          );
      },
      _colorTabClickHandler: function (e) {
        e.stopImmediatePropagation();
        var t = this;
        t.$colorTab.hasClass("picker-inactive") &&
          (t.$colorSpectrum.show(),
          t.$backgroundSpectrum.hide(),
          t.$paddingContainer.hide(),
          t.$backgroundTab
            .addClass("picker-inactive")
            .removeClass("picker-active"),
          t.$colorTab.addClass("picker-active").removeClass("picker-inactive"),
          t._allowHastenedPreview ||
            (t._updateColorPreview({
              color: t._deferredPreview.color,
              background: t._hastenedPreview.background,
            }),
            t.$colorPicker.spectrum("set", t._deferredPreview.color)),
          t.$colorPicker.trigger("show.spectrum"));
      },
      _backgroundTabClickHandler: function (e) {
        e.stopImmediatePropagation();
        var t = this;
        t.$backgroundTab.hasClass("picker-inactive") &&
          (t.$colorSpectrum.hide(),
          t.$backgroundSpectrum.show(),
          t.$paddingContainer.show(),
          t.$colorTab.addClass("picker-inactive").removeClass("picker-active"),
          t.$backgroundTab
            .addClass("picker-active")
            .removeClass("picker-inactive"),
          t.$backgroundTab.trigger("click.spectrum"),
          t._allowHastenedPreview ||
            (t._updateColorPreview({
              color: t._hastenedPreview.color,
              background: t._deferredPreview.background,
            }),
            t.$backgroundPicker.spectrum("set", t._deferredPreview.background)),
          t.$backgroundPicker.trigger("show.spectrum"));
      },
      _spaciousPaddingClickHandler: function (e) {
        this._paddingHandler(
          e,
          this.$spaciousPadding,
          this._padding.isSpacious,
          0.25
        );
      },
      _tightPaddingClickHandler: function (e) {
        this._paddingHandler(e, this.$tightPadding, this._padding.isTight, 0.1);
      },
      _paddingHandler: function (e, t, n, i) {
        e.stopImmediatePropagation();
        var r,
          o,
          s,
          a = this;
        if (
          ((r = !a._padding.isDisable),
          (o = t.hasClass("padding-inactive")),
          r && o)
        ) {
          s = a.$colorModal.hasClass("sp-palette-only");
          var l =
              n === a._padding.isTight
                ? a._padding.isSpacious
                : a._padding.isTight,
            c = t === a.$tightPadding ? a.$spaciousPadding : a.$tightPadding;
          if (
            ((l = !0),
            (n = !1),
            c.addClass("padding-inactive").removeClass("padding-active"),
            t.addClass("padding-active").removeClass("padding-inactive"),
            (a._selectedPadding = i),
            (a.record.bgPaddingFraction = i),
            (a._renderedPadding = a._selectedPadding),
            a.record.visible === !1)
          )
            a.dispatch("notVisible");
          else {
            var u;
            (u = {
              triggeredByPopState: !1,
              triggeredByUser: !0,
              originalDispatcher: a,
            }),
              a.dispatch("change", u);
            var h, d, p;
            (a.record.bgPaddingFraction =
              a.record.bgPaddingFraction || a.defaultPadding),
              (h = "pos-size_added-text" + a.name[a.name.length - 1]),
              (d = Helpers.App.getUrlParam(h, window.href)),
              (p = d.split("_")),
              (p[6] = a.record.bgColor),
              (p[7] = a.record.bgPaddingFraction),
              (p[8] = a.record.bgOpacity),
              (d = p.join("_")),
              Helpers.App.replaceUrlParamWithHistory(h, d);
          }
        }
      },
      _spectrumAddedBindings: function () {
        var e = this;
        e.$colorToggle.bind(
          "click.spectrum",
          e._colorToggleSpectrumClickHandler.bind(this)
        ),
          e.$backgroundToggle.bind(
            "click.spectrum",
            e._backgroundToggleSpectrumClickHandler.bind(this)
          ),
          e.$colorChoose.bind(
            "click.spectrum",
            e._commitColorChange.bind(this)
          ),
          e.$backgroundChoose.bind(
            "click.spectrum",
            e._commitBackgroundChange.bind(this)
          ),
          e.$colorCancel.bind("click.spectrum", e._cancelHandler),
          e.$backgroundCancel.bind("click.spectrum", e._cancelHandler);
      },
      _backgroundToggleSpectrumClickHandler: function (e) {
        this._triggerToggle(e, this.$backgroundModal, this.$colorToggle);
      },
      _colorToggleSpectrumClickHandler: function (e) {
        this._triggerToggle(e, this.$colorModal, this.$backgroundToggle);
      },
      _cancelHandler: function () {
        var e = this;
        e._resetPickerModal(),
          Helpers.App.isMobile() &&
            e.dispatch("hideModal", { originalDispatcher: e }),
          e.dispatch("componentOpen");
      },
      _triggerToggle: function (e, t, n) {
        var i,
          r,
          o = this;
        (i = "undefined" != typeof e.originalEvent),
          i &&
            ((r = t.hasClass("sp-palette-only")),
            r
              ? ((o._allowHastenedPreview = !0), n.click())
              : ((o._allowHastenedPreview = !1),
                (o._deferredPreview = JSON.parse(
                  JSON.stringify(o._hastenedPreview)
                )),
                n.click()));
      },
      _updateColorPreview: function (e) {
        var t,
          n,
          i,
          r = this;
        (t = r.$fakePicker.find(".sp-preview-inner")),
          (n = e.color),
          (i = e.background),
          0 === r._selectedOpacity && (i = "transparent"),
          t.css(
            "background",
            "linear-gradient(135deg, " +
              n +
              " 0%, " +
              n +
              " 50%, " +
              i +
              ", 51%, " +
              i +
              " 100%)" +
              n
          );
      },
      _createConfig: function () {
        var e = {
          color: null,
          preferredFormat: "hex",
          showPaletteOnly: !0,
          togglePaletteOnly: !0,
          showInput: !0,
          allowEmpty: !1,
          clickoutFiresChange: !0,
          containerClassName: null,
          replacerClassName: "colorpicker-container",
          hideAfterPaletteSelect: !0,
          palette: null,
          appendTo: null,
          flat: !0,
        };
        return (
          (e.containerClassName = Helpers.App.isMobile()
            ? "colorpicker-container-mobile"
            : "colorpicker-container-background-color-control"),
          (e.togglePaletteOnly = Helpers.App.isMobile() ? !1 : !0),
          e
        );
      },
      _createColorConfig: function (e) {
        var t,
          n = this;
        return (
          (t = n._getColorPalette()),
          (e.palette = t),
          (e.color = n.record.color),
          (e.appendTo = n.$colorSpectrum),
          e
        );
      },
      _createBackgroundConfig: function (e) {
        var t,
          n,
          i = this;
        return (
          (n = i.record.bgColor),
          0 === i.record.bgOpacity && (n = "rgba(0,0,0,0)"),
          (e = JSON.parse(JSON.stringify(e))),
          (t = i._getBackgroundPalette()),
          (e.palette = t),
          (e.color = n.toString(16)),
          (e.appendTo = i.$backgroundSpectrum),
          e
        );
      },
      _getColorPalette: function () {
        var e = this;
        return e.getFullPalette();
      },
      _getBackgroundPalette: function () {
        var e,
          t = this;
        return (
          (e = t.getFullPalette()),
          e[0].splice(11, 1),
          e[0].unshift("transparent"),
          e
        );
      },
      _detachPickerModal: function () {
        var e,
          t = this;
        (e = t.$pickerModal.detach()), t.$body.append(e);
      },
      _showSmartTemplateModal: function () {
        var e = this;
        Helpers.App.isMobile() &&
          e.dispatch("showModal", { originalDispatcher: e });
      },
      _setColorpickerPositioning: function () {
        var e = this;
        e._colorPickerPosition = new ColorPickerPosition({
          $control: e.element.find(".sp-replacer"),
          $container: e.$pickerModal,
          $toggleButtons: e.element.find(
            ".sp-palette-toggle, .picker-layout.background"
          ),
          $horizontalLimit: $("body"),
          $verticalLimit: $("#main-content-wrapper"),
          $dragAreas: e.element.find(
            ".sp-container, .sp-palette-container, .sp-picker-container, .show-colors-buttons-container"
          ),
          sidebarSide: "left",
        });
      },
      updatePrefix: function (e) {
        var t = this;
        (t.prefix = e),
          (t.colorPickerUrlParameterName = t.prefix + t.name),
          (t.backgroundPickerUrlParameterName = t.prefix + t.nameBg),
          (t.paddingPickerUrlParameterName = t.prefix + t.namePadding),
          (t.opacityPickerUrlParameterName = t.prefix + t.nameOpacity);
      },
      _popState: function () {
        var e,
          t = this;
        (e = function () {
          var e = t.colorPickerUrlParameterName,
            n = e.replace("colorText", "pos-size"),
            i = Helpers.App.getAllURLParams(),
            r = i[e] || "#FFFFFF",
            o = i[n] || "",
            s = o.split("_"),
            a = s[6],
            l = s[7],
            c = s[8],
            u = a,
            h = a,
            d = a;
          "0" === c
            ? ((u = "transparent"),
              (h = "rgba(0,0,0,0)"),
              (d = "#000000"),
              t._disablePadding())
            : t._enablePadding(),
            (t._selectedOpacity = t._renderedOpacity = c),
            t.$colorPicker.spectrum("set", r || t.initialValue || "#FFFFFF"),
            t.$backgroundPicker.spectrum(
              "set",
              h || t.initialBgColor || "#000000"
            ),
            (t._currentColor = r),
            (t._currentBackground = u),
            (t._hastenedPreview.color = r),
            (t._hastenedPreview.background = u),
            t._updateColorPreview(t._hastenedPreview),
            (t.record.color = r),
            (t.record.bgColor = d),
            (t.record.bgPaddingFraction = l),
            (t.record.bgOpacity = c),
            t.dispatch("change", { triggeredByPopState: !0 });
        }),
          window.addEventListener("popstate", e);
      },
      _executeDeferredEvents: function () {
        var e = this;
        e._swapInitialPadding &&
          (e.$spaciousPadding.click(), (e._swapInitialPadding = !1));
      },
      destroy: function () {
        var e = this;
        e.element &&
          (e.$body.removeClass("contains-picker-modal"),
          e.$spectrumColor.spectrum("destroy"),
          e.$spectrumBackground.spectrum("destroy"),
          window.removeEventListener("popstate", e._popstateHandler),
          e.genericDestroy());
      },
    },
  }),
  Class(UI.SmartTemplate, "URLInputControl")
    .inherits(Widget)
    .includes(
      BubblingSupport,
      GenericDestroySupport
    )({
    elementClass: "url-input-control",
    html: '        <div style="display: inline-block">            <label class="url-input-label button secondary">                <span> From URL </span>            </label>        </div>',
    prototype: {
      record: null,
      _popstateHandler: null,
      _pingScreenshotTimeout: null,
      init: function (e) {
        Widget.prototype.init.apply(this, e),
          (this.urlButton = this.element.find(".url-input-label")),
          (this.name = e.name);
        var t = this;
        this.urlButton.on("click", function () {
          t.remoteUrlModal.show();
        }),
          this.appendChild(
            new UI.RemoteUrlModal({
              name: "remoteUrlModal",
              mainText: "Grab Screenshot from URL",
            })
          ),
          (e.record.userAgent = e.userAgent || navigator.userAgent),
          this.remoteUrlModal.bind("grab.remoteURL", function (e) {
            var n = { url: e.data, targetName: t.record.name };
            t.dispatch("grabUrlStart"),
              t._loadFromUrl(n, t._loadFromUrlResponseHandler.bind(t, n)),
              (t.hasUrl = !0);
          }),
          (this.record = e.record);
      },
      _loadFromUrlResponseHandler: function (e, t, n) {
        var i, r;
        return (
          (r = this),
          (i = e.targetName),
          t
            ? void this.dispatch("grabUrlFail", { message: t.message })
            : void this._getImageFromServer(n)
                .then(function (e) {
                  return new File([e], "image.png", { type: "image/png" });
                })
                .then(function (e) {
                  r.dispatch("screenshotLoad", { file: e });
                })
                ["catch"](function (e) {
                  r.dispatch("grabUrlFail", {
                    message: "We could not save your image, please try again",
                  }),
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "UploadFailUrlToPng",
                      e
                    );
                })
        );
      },
      _getImageFromServer: function (e) {
        return new Promise(function (t, n) {
          var i = new XMLHttpRequest();
          i.open("GET", window.location.origin + e, !0),
            (i.responseType = "arraybuffer"),
            (i.onload = function () {
              i.status >= 200 && i.status < 300
                ? t(i.response)
                : n(i.statusText);
            }),
            (i.onerror = function () {
              n(i.statusText);
            }),
            i.send();
        });
      },
      _pingScreenshot: function (e, t, n) {
        var i = this;
        $.ajax({ method: "HEAD", url: e })
          .done(function () {
            n(null, e);
          })
          .fail(function () {
            Date.now() - t.startedOn >= t.stopAt
              ? (i.dispatch("grabUrlFail"),
                n({ message: "There was an error grabbing your screenshot" }))
              : (i._pingScreenshotTimeout = setTimeout(
                  i._pingScreenshot.bind(i, e, t, n),
                  1e3
                ));
          });
      },
      _loadFromUrl: function (e, t) {
        var n, i;
        (n = this),
          (i = this.record.viewport),
          n.$loader && n.$loader.fadeIn(),
          $.post("/screenshots/create", {
            viewport: i,
            user_agent: n.record.userAgent,
            remote_url: e.url,
          })
            .done(function (e) {
              console.log(e);
              var i, r;
              (i = 45e3),
                (r = Date.now()),
                n._pingScreenshot(e.path, { stopAt: i, startedOn: r }, t);
            })
            .fail(function (e) {
              t(e.responseJSON);
            });
      },
      hide: function () {
        this.element.hide();
      },
      show: function () {
        this.element.show();
      },
      disableUpload: function () {
        this.urlButton.addClass("disabled");
      },
      enableUpload: function () {
        this.urlButton.removeClass("disabled");
      },
      destroy: function () {
        clearInterval(this._pingScreenshotTimeout),
          window.removeEventListener("popstate", this._popstateHandler),
          this.genericDestroy();
      },
      showRemoteUrlModal: function () {
        this.remoteUrlModal.show();
      },
    },
  }),
  (window.DEFAULT_FONTS_STAGING = [
    {
      name: "ABeeZee-Italic",
      image: "/fonts/738b1f089579eafc046ad97453360074.png",
      visible: !1,
      displayName: "ABeeZee",
      file: "/fonts/738b1f089579eafc046ad97453360074.ttf",
    },
    {
      name: "ABeeZee-Regular",
      image: "/fonts/895fa661f33acc6bede3494bfe668160.png",
      visible: !1,
      displayName: "ABeeZee",
      file: "/fonts/895fa661f33acc6bede3494bfe668160.ttf",
    },
    {
      name: "Abel-Regular",
      image: "/fonts/ba97dd335f7440ad53c6dcd5d89c6b17.png",
      visible: !1,
      displayName: "Abel",
      file: "/fonts/ba97dd335f7440ad53c6dcd5d89c6b17.ttf",
    },
    {
      name: "AvenirNextLTPro-Bold",
      image: "/fonts/b6a79f8fae3ac948c7d0f91d67e41c65.png",
      visible: !1,
      displayName: "Avenir Next Bold",
      file: "/fonts/b6a79f8fae3ac948c7d0f91d67e41c65.otf",
    },
    {
      name: "AvenirNextLTPro-Regular",
      image: "/fonts/a01de9844f01dac37779e4081e1cd651.png",
      visible: !1,
      displayName: "Avenir Next Regular",
      file: "/fonts/a01de9844f01dac37779e4081e1cd651.otf",
    },
    {
      name: "Averia-Serif-Regular",
      image: "/fonts/cce080c7f38adadf3853e9b6b8ec4f85.png",
      visible: !1,
      displayName: "Averia Serif",
      file: "/fonts/cce080c7f38adadf3853e9b6b8ec4f85.ttf",
    },
    {
      name: "BowlbyOne-Regular",
      image: "/fonts/5311e9ee519a810cb538eff6810cc8fa.png",
      visible: !1,
      displayName: "BowlbyOne",
      file: "/fonts/5311e9ee519a810cb538eff6810cc8fa.ttf",
    },
    {
      name: "Catamaran-Regular",
      image: "/fonts/6b0aa5554a7644afec80a89e3e0cf393.png",
      visible: !1,
      displayName: "Catamaran",
      file: "/fonts/6b0aa5554a7644afec80a89e3e0cf393.ttf",
    },
    {
      name: "Comfortaa-Bold",
      image: "/fonts/5875ffb078a9f4449caee59367d698b4.png",
      visible: !1,
      displayName: "Comfortaa Bold",
      file: "/fonts/5875ffb078a9f4449caee59367d698b4.ttf",
    },
    {
      name: "FredokaOne-Regular",
      image: "/fonts/d7068be0d0f5fa6d05ab498fe10715e8.png",
      visible: !1,
      displayName: "Fredoka One Regular",
      file: "/fonts/d7068be0d0f5fa6d05ab498fe10715e8.ttf",
    },
    {
      name: "Lato-Black",
      image: "/fonts/d6599f37661b36c6198ac9aa4d8fb81e.png",
      displayName: "Lato Black",
      file: "/fonts/d6599f37661b36c6198ac9aa4d8fb81e.ttf",
      visible: !0,
    },
    {
      name: "Lato-Bold",
      image: "/fonts/cb5549dd777f938a6509783cd1a5fb8d.png",
      visible: !1,
      displayName: "Lato Bold",
      file: "/fonts/cb5549dd777f938a6509783cd1a5fb8d.ttf",
    },
    {
      name: "Lato-Regular",
      image: "/fonts/b504dc139cebedcf03db39d1b78b7fd1.png",
      visible: !1,
      displayName: "Lato",
      file: "/fonts/b504dc139cebedcf03db39d1b78b7fd1.ttf",
    },
  ]),
  (window.DEFAULT_FONTS_PRODUCTION = [
    {
      name: "ABeeZee-Italic",
      image: "/fonts/738b1f089579eafc046ad97453360074.png",
      visible: !1,
      displayName: "ABeeZee",
      file: "/fonts/738b1f089579eafc046ad97453360074.ttf",
    },
    {
      name: "Abel-Regular",
      image: "/fonts/31f69bdef80a701b9b0e903d30077ff7.png",
      visible: !1,
      displayName: "Abel",
      file: "/fonts/31f69bdef80a701b9b0e903d30077ff7.ttf",
    },
    {
      name: "AbrilFatface-Regular",
      image: "/fonts/3417988c43147cfc6b6f66da4e864945.png",
      visible: !1,
      displayName: "Abril Fatface",
      file: "/fonts/3417988c43147cfc6b6f66da4e864945.ttf",
    },
    {
      name: "Anton-Regular",
      image: "/fonts/41b0804bc83c839be1781e817cbcddae.png",
      visible: !1,
      displayName: "Anton",
      file: "/fonts/41b0804bc83c839be1781e817cbcddae.ttf",
    },
    {
      name: "AvenirNextLTPro-Bold",
      image: "/fonts/18a485a37644dbd0d763d118ed68fbbd.png",
      visible: !1,
      displayName: "Avenir Next Bold",
      file: "/fonts/18a485a37644dbd0d763d118ed68fbbd.otf",
    },
    {
      name: "AvenirNextLTPro-Regular",
      image: "/fonts/a01de9844f01dac37779e4081e1cd651.png",
      visible: !1,
      displayName: "Avenir Next Regular",
      file: "/fonts/a01de9844f01dac37779e4081e1cd651.otf",
    },
    {
      name: "Averia-Serif-Light",
      image: "/fonts/7337fc56e909da1f0e73f93ab79cfc00.png",
      visible: !1,
      displayName: "Averia Serif Light",
      file: "/fonts/7337fc56e909da1f0e73f93ab79cfc00.ttf",
    },
    {
      name: "Averia-Serif-Light-Italic",
      image: "/fonts/463e90d516d3f177f0abb81a9e0f960e.png",
      visible: !1,
      displayName: "Averia Serif Light Italic",
      file: "/fonts/463e90d516d3f177f0abb81a9e0f960e.ttf",
    },
    {
      name: "Averia-Serif-Regular",
      image: "/fonts/a333c814813de4a3d0147a677ef443eb.png",
      visible: !1,
      displayName: "Averia Serif Regular",
      file: "/fonts/a333c814813de4a3d0147a677ef443eb.ttf",
    },
    {
      name: "Baloo-Regular",
      image: "/fonts/5e84318c11fbb3bf581eafce010f3fc9.png",
      visible: !1,
      displayName: "Baloo",
      file: "/fonts/5e84318c11fbb3bf581eafce010f3fc9.ttf",
    },
    {
      name: "Barbaro-Roman",
      image: "/fonts/bc93c7e31a6a3ae4e4f755de611dd7d0.png",
      visible: !1,
      displayName: "Barbaro",
      file: "/fonts/bc93c7e31a6a3ae4e4f755de611dd7d0.ttf",
    },
    {
      name: "BarlowCondensed-Bold",
      image: "/fonts/4bf0f68394d1eec84a39d13c338d7f18.png",
      visible: !1,
      displayName: "Barlow Condensed Bold",
      file: "/fonts/4bf0f68394d1eec84a39d13c338d7f18.ttf",
    },
    {
      name: "BarlowCondensed-BoldItalic",
      image: "/fonts/3470da8655a13e389ed1e0d33e6177f8.png",
      visible: !1,
      displayName: "Barlow Condensed Bold Italic",
      file: "/fonts/3470da8655a13e389ed1e0d33e6177f8.ttf",
    },
    {
      name: "BarlowCondensed-Light",
      image: "/fonts/045cf5fdb531cf696f378591e017b5aa.png",
      visible: !1,
      displayName: "Barlow Condensed Light",
      file: "/fonts/045cf5fdb531cf696f378591e017b5aa.ttf",
    },
    {
      name: "BarlowCondensed-Medium",
      image: "/fonts/45a719c68c4671f50ffa9a9663038cab.png",
      visible: !1,
      displayName: "Barlow Condensed Medium",
      file: "/fonts/45a719c68c4671f50ffa9a9663038cab.ttf",
    },
    {
      name: "BarlowCondensed-Regular",
      image: "/fonts/d55d558c7ef405c75dcc1f7470698467.png",
      visible: !1,
      displayName: "Barlow Condensed Regular",
      file: "/fonts/d55d558c7ef405c75dcc1f7470698467.ttf",
    },
    {
      name: "BarlowCondensed-SemiBold",
      image: "/fonts/0ab749443fac890d84006cc4c391f3ee.png",
      visible: !1,
      displayName: "Barlow Condensed SemiBold",
      file: "/fonts/0ab749443fac890d84006cc4c391f3ee.ttf",
    },
    {
      name: "BarlowSemiCondensed-Bold",
      image: "/fonts/363f1cd5fb7eba00814e430b81aee1ab.png",
      visible: !1,
      displayName: "Barlow Semi Condensed Bold",
      file: "/fonts/363f1cd5fb7eba00814e430b81aee1ab.ttf",
    },
    {
      name: "BarlowSemiCondensed-BoldItalic",
      image: "/fonts/1ce176d3560338f73feb0d87a3943790.png",
      visible: !1,
      displayName: "Barlow Semi Condensed Bold Italic",
      file: "/fonts/1ce176d3560338f73feb0d87a3943790.ttf",
    },
    {
      name: "BarlowSemiCondensed-Regular",
      image: "/fonts/416648c355fa7b6f8d9891c5eb117595.png",
      visible: !1,
      displayName: "Barlow Semi Condensed Regular",
      file: "/fonts/416648c355fa7b6f8d9891c5eb117595.ttf",
    },
    {
      name: "BerkshireSwash-Regular",
      image: "/fonts/aca3cb3c5581f85fda07da98beea3dff.png",
      visible: !1,
      displayName: "Berkshire",
      file: "/fonts/aca3cb3c5581f85fda07da98beea3dff.ttf",
    },
    {
      name: "Bevan-Regular",
      image: "/fonts/677fd5730c903b9d0901315c5b5e071d.png",
      visible: !1,
      displayName: "Bevan",
      file: "/fonts/677fd5730c903b9d0901315c5b5e071d.ttf",
    },
    {
      name: "BowlbyOne-Regular",
      image: "/fonts/85efd71b78485b6f4dd9617181ff8ea3.png",
      visible: !1,
      displayName: "Bowlby One Regular",
      file: "/fonts/85efd71b78485b6f4dd9617181ff8ea3.ttf",
    },
    {
      name: "Catamaran-Regular",
      image: "/fonts/bbb13b1e87390ee4cb6a13055c3c3e8a.png",
      visible: !1,
      displayName: "Catamaran Regular",
      file: "/fonts/bbb13b1e87390ee4cb6a13055c3c3e8a.ttf",
    },
    {
      name: "Coiny-Regular",
      image: "/fonts/17df0bad6ad330eb7a4e3ac681e00bfb.png",
      visible: !1,
      displayName: "Coiny",
      file: "/fonts/17df0bad6ad330eb7a4e3ac681e00bfb.ttf",
    },
    {
      name: "Comfortaa-Bold",
      image: "/fonts/45e6693631d998b7a390bea750fc8e61.png",
      visible: !1,
      displayName: "Comfortaa Bold",
      file: "/fonts/45e6693631d998b7a390bea750fc8e61.ttf",
    },
    {
      name: "Comfortaa-Regular",
      image: "/fonts/0055697183c9c5e187897c577e6ceebc.png",
      visible: !1,
      displayName: "Comfortaa Regular",
      file: "/fonts/0055697183c9c5e187897c577e6ceebc.ttf",
    },
    {
      name: "ConcertOne-Regular",
      image: "/fonts/39d5380ebf9d136815acc6aa411a8139.png",
      visible: !1,
      displayName: "ConcertOne-Regular",
      file: "/fonts/39d5380ebf9d136815acc6aa411a8139.ttf",
    },
    {
      name: "Cormorant-Italic",
      image: "/fonts/03c43633343ffc4de444c49c7c3a0387.png",
      visible: !1,
      displayName: "Cormorant Italic",
      file: "/fonts/03c43633343ffc4de444c49c7c3a0387.ttf",
    },
    {
      name: "Cormorant-Regular",
      image: "/fonts/005cfd1fce744c8a68d8c7aea06b698c.png",
      visible: !1,
      displayName: "Cormorant Regular",
      file: "/fonts/005cfd1fce744c8a68d8c7aea06b698c.ttf",
    },
    {
      name: "Courgette-Regular",
      image: "/fonts/4e38ce1417a3b539a085740c6938d5b9.png",
      visible: !1,
      displayName: "Courgette",
      file: "/fonts/4e38ce1417a3b539a085740c6938d5b9.ttf",
    },
    {
      name: "ElMessiri-Medium",
      image: "/fonts/1eac5fa1b39534649ad9d0a4c14374ed.png",
      visible: !1,
      displayName: "ElMessiri Medium",
      file: "/fonts/1eac5fa1b39534649ad9d0a4c14374ed.ttf",
    },
    {
      name: "ElMessiri-SemiBold",
      image: "/fonts/361af0a986c77f484753d58e1918c1e6.png",
      visible: !1,
      displayName: "ElMessiri SemiBold",
      file: "/fonts/361af0a986c77f484753d58e1918c1e6.ttf",
    },
    {
      name: "EncodeSansCondensed-Black",
      image: "/fonts/11e664566511ebfb38ff37e348ec6613.png",
      visible: !1,
      displayName: "Encode Sans Condensed Black",
      file: "/fonts/11e664566511ebfb38ff37e348ec6613.ttf",
    },
    {
      name: "EncodeSansCondensed-Regular",
      image: "/fonts/ea76f4d5465a74a60c607f9be59ebcb7.png",
      visible: !1,
      displayName: "Encode Sans Condensed Regular",
      file: "/fonts/ea76f4d5465a74a60c607f9be59ebcb7.ttf",
    },
    {
      name: "Erial",
      image: "/fonts/756f80e0777ce537839d1a4d3347a0ab.png",
      visible: !1,
      displayName: "Erial",
      file: "/fonts/756f80e0777ce537839d1a4d3347a0ab.ttf",
    },
    {
      name: "Farsan-Regular",
      image: "/fonts/b8f0ddbc06001dc4ad630c7385a7130c.png",
      visible: !1,
      displayName: "Farsan",
      file: "/fonts/b8f0ddbc06001dc4ad630c7385a7130c.ttf",
    },
    {
      name: "FredokaOne-Regular",
      image: "/fonts/cbb79131301db6be456f1bac667c8df8.png",
      visible: !1,
      displayName: "Fredoka One",
      file: "/fonts/cbb79131301db6be456f1bac667c8df8.ttf",
    },
    {
      name: "GreatVibes-Regular",
      image: "/fonts/e1604ff6305f6e31e4a111a4386ecabe.png",
      visible: !1,
      displayName: "GreatVibes-Regular",
      file: "/fonts/e1604ff6305f6e31e4a111a4386ecabe.ttf",
    },
    {
      name: "HammersmithOne-Regular",
      image: "/fonts/e8eae07fcbb894d9ff36c5e30ea1b35c.png",
      visible: !1,
      displayName: "Hammersmith",
      file: "/fonts/e8eae07fcbb894d9ff36c5e30ea1b35c.ttf",
    },
    {
      name: "Lato-Black",
      image: "/fonts/6cc5677b1e7a7315d034ae976f0c7a36.png",
      displayName: "Lato Black",
      file: "/fonts/6cc5677b1e7a7315d034ae976f0c7a36.ttf",
      visible: !0,
    },
    {
      name: "Lato-BlackItalic",
      image: "/fonts/739e06a4188b4dcff3e385df3376c317.png",
      visible: !1,
      displayName: "Lato Black Italic",
      file: "/fonts/739e06a4188b4dcff3e385df3376c317.ttf",
    },
    {
      name: "Lato-Bold",
      image: "/fonts/cb5549dd777f938a6509783cd1a5fb8d.png",
      visible: !1,
      displayName: "Lato Bold",
      file: "/fonts/cb5549dd777f938a6509783cd1a5fb8d.ttf",
    },
    {
      name: "Lato-Bold-Italic",
      image: "/fonts/dda47cea661eeed97b7b0e6f3f858ac7.png",
      visible: !1,
      displayName: "Lato Bold Italic",
      file: "/fonts/dda47cea661eeed97b7b0e6f3f858ac7.ttf",
    },
    {
      name: "Lato-Regular",
      image: "/fonts/393cdc996beb6c77f146b5e15a98cf7d.png",
      visible: !1,
      displayName: "Lato",
      file: "/fonts/393cdc996beb6c77f146b5e15a98cf7d.ttf",
    },
    {
      name: "LilitaOne-Regular",
      image: "/fonts/0bb579cc436d8c384e51b93d1dba9ced.png",
      visible: !1,
      displayName: "Lilita One",
      file: "/fonts/0bb579cc436d8c384e51b93d1dba9ced.ttf",
    },
    {
      name: "Linotte-SemiBold",
      image: "/fonts/0f94c45b6afba6070773a97b4d14dc50.png",
      visible: !1,
      displayName: "Linotte",
      file: "/fonts/0f94c45b6afba6070773a97b4d14dc50.otf",
    },
    {
      name: "Lora-Bold",
      image: "/fonts/9fca4f8491b9a4ee978a76ebc7dd946d.png",
      visible: !1,
      displayName: "Lora Bold",
      file: "/fonts/9fca4f8491b9a4ee978a76ebc7dd946d.ttf",
    },
    {
      name: "Lora-BoldItalic",
      image: "/fonts/4744b5ac88467cbe57cdf336936e5759.png",
      visible: !1,
      displayName: "Lora Bold Italic",
      file: "/fonts/4744b5ac88467cbe57cdf336936e5759.ttf",
    },
    {
      name: "Lora-Italic",
      image: "/fonts/4c8b9d730fbc5bae43998f6003087ddf.png",
      visible: !1,
      displayName: "Lora Italic",
      file: "/fonts/4c8b9d730fbc5bae43998f6003087ddf.ttf",
    },
    {
      name: "Lora-Regular",
      image: "/fonts/596dcbbe794f6ff581e9ccc743f9765a.png",
      visible: !1,
      displayName: "Lora Regular",
      file: "/fonts/596dcbbe794f6ff581e9ccc743f9765a.ttf",
    },
    {
      name: "Mada-Regular",
      image: "/fonts/43787f5dc3094f30a1a3e09adcce8f79.png",
      visible: !1,
      displayName: "Mada Regular",
      file: "/fonts/43787f5dc3094f30a1a3e09adcce8f79.ttf",
    },
    {
      name: "MedulaOne-Regular",
      image: "/fonts/d8c4ba5b141fb3db4fb63ec93a99001c.png",
      visible: !1,
      displayName: "MedulaOne-Regular",
      file: "/fonts/d8c4ba5b141fb3db4fb63ec93a99001c.ttf",
    },
    {
      name: "Montserrat Black",
      image: "/fonts/e360507fd9961cafab04e93d1ee8affc.png",
      visible: !1,
      displayName: "Montserrat Black",
      file: "/fonts/e360507fd9961cafab04e93d1ee8affc.ttf",
    },
    {
      name: "Montserrat-Bold",
      image: "/fonts/e8abde61177ae51edb867ef4e6ac43c9.png",
      visible: !1,
      displayName: "Montserrat Bold",
      file: "/fonts/e8abde61177ae51edb867ef4e6ac43c9.ttf",
    },
    {
      name: "NotoSerif-BoldItalic",
      image: "/fonts/1cb3db78e3936053d13ba04f4ed19665.png",
      visible: !1,
      displayName: "Noto Serif Bold Italic",
      file: "/fonts/1cb3db78e3936053d13ba04f4ed19665.ttf",
    },
    {
      name: "OpenSans-ExtraBold",
      image: "/fonts/0abe41e784f9ee338149d99a4ebd4d60.png",
      visible: !1,
      displayName: "Open Sans Extra Bold",
      file: "/fonts/0abe41e784f9ee338149d99a4ebd4d60.ttf",
    },
    {
      name: "Oswald-Bold",
      image: "/fonts/53377187df1cedd13816fdb71364b050.png",
      visible: !1,
      displayName: "Oswald Bold",
      file: "/fonts/53377187df1cedd13816fdb71364b050.ttf",
    },
    {
      name: "Oswald-Light",
      image: "/fonts/c7cf0e59483583db9c7ca04b018a6189.png",
      visible: !1,
      displayName: "Oswald-Light",
      file: "/fonts/c7cf0e59483583db9c7ca04b018a6189.ttf",
    },
    {
      name: "Oswald-Medium",
      image: "/fonts/c8381d451a57a87ea1596a1777cdc7f3.png",
      visible: !1,
      displayName: "Oswald Medium",
      file: "/fonts/c8381d451a57a87ea1596a1777cdc7f3.ttf",
    },
    {
      name: "PatrickHand-Regular",
      image: "/fonts/9abf596f55988a81899a17ac146d4e33.png",
      visible: !1,
      displayName: "Patrick Hand",
      file: "/fonts/9abf596f55988a81899a17ac146d4e33.ttf",
    },
    {
      name: "Philosopher-Regular",
      image: "/fonts/35bcfb6e684956fa6c3d93aea083e6eb.png",
      visible: !1,
      displayName: "Philosopher Regular",
      file: "/fonts/35bcfb6e684956fa6c3d93aea083e6eb.ttf",
    },
    {
      name: "PlayfairDisplay-Italic",
      image: "/fonts/fe14a57b37cf19e439c8309e87edc7db.png",
      visible: !1,
      displayName: "PlayfairDisplay-Italic",
      file: "/fonts/fe14a57b37cf19e439c8309e87edc7db.ttf",
    },
    {
      name: "PlayfairDisplay-Regular",
      image: "/fonts/ffbced0974795053db35d4036b0ef6bb.png",
      visible: !1,
      displayName: "Playfair Display",
      file: "/fonts/ffbced0974795053db35d4036b0ef6bb.ttf",
    },
    {
      name: "Poly Regular",
      image: "/fonts/689988d598487d43559e4561c05773cf.png",
      visible: !1,
      displayName: "Poly",
      file: "/fonts/689988d598487d43559e4561c05773cf.ttf",
    },
    {
      name: "Raleway-Black",
      image: "/fonts/5c476a4b1e01f47e053467094849aadc.png",
      visible: !1,
      displayName: "Raleway Black",
      file: "/fonts/5c476a4b1e01f47e053467094849aadc.ttf",
    },
    {
      name: "Raleway-Bold",
      image: "/fonts/b9a16b7fa67036b80e87cee71e57fe0c.png",
      visible: !1,
      displayName: "Raleway Bold",
      file: "/fonts/b9a16b7fa67036b80e87cee71e57fe0c.ttf",
    },
    {
      name: "Raleway-Light",
      image: "/fonts/aa7a73738e98c519fe4411d60f09af9c.png",
      visible: !1,
      displayName: "Raleway Light",
      file: "/fonts/aa7a73738e98c519fe4411d60f09af9c.ttf",
    },
    {
      name: "Raleway-Medium",
      image: "/fonts/ac171d85e457a5cba4448e1be107ff69.png",
      visible: !1,
      displayName: "Raleway Medium",
      file: "/fonts/ac171d85e457a5cba4448e1be107ff69.ttf",
    },
    {
      name: "Raleway-Regular",
      image: "/fonts/d0a157bbf4ef5e19850386a945e1394b.png",
      visible: !1,
      displayName: "Raleway Regular",
      file: "/fonts/d0a157bbf4ef5e19850386a945e1394b.ttf",
    },
    {
      name: "RobotoCondensed-Light",
      image: "/fonts/5963ee43da0370b38058a00b1b4188a5.png",
      visible: !1,
      displayName: "Roboto Condensed Light",
      file: "/fonts/5963ee43da0370b38058a00b1b4188a5.ttf",
    },
    {
      name: "Sancreek-Regular",
      image: "/fonts/6e4ae4db659853ad7904f7334cc76ba6.png",
      visible: !1,
      displayName: "Sancreek",
      file: "/fonts/6e4ae4db659853ad7904f7334cc76ba6.ttf",
    },
    {
      name: "SansitaOne",
      image: "/fonts/8e1011cc4139c581ac4becd13984bcc6.png",
      visible: !1,
      displayName: "Sansita One",
      file: "/fonts/8e1011cc4139c581ac4becd13984bcc6.ttf",
    },
    {
      name: "Shrikhand-Regular",
      image: "/fonts/cebefa8a9cb53cac1f11a111e3713733.png",
      visible: !1,
      displayName: "Shrikhand",
      file: "/fonts/cebefa8a9cb53cac1f11a111e3713733.ttf",
    },
    {
      name: "Sniglet-Regular",
      image: "/fonts/bd36551acab7bcd6450b53c07a145e83.png",
      visible: !1,
      displayName: "Sniglet",
      file: "/fonts/bd36551acab7bcd6450b53c07a145e83.ttf",
    },
    {
      name: "Stylish-Regular",
      image: "/fonts/1ad53fc03dfa973dd496e8abee41ee44.png",
      visible: !1,
      displayName: "Stylish Regular",
      file: "/fonts/1ad53fc03dfa973dd496e8abee41ee44.ttf",
    },
    {
      name: "Suranna-Regular",
      image: "/fonts/a0d100ecfc1041415a817187e6cec560.png",
      visible: !1,
      displayName: "Suranna",
      file: "/fonts/a0d100ecfc1041415a817187e6cec560.ttf",
    },
    {
      name: "Teko-Bold",
      image: "/fonts/5e3b55b0ffbd7cc8be4abc15468bd347.png",
      visible: !1,
      displayName: "Teko Bold",
      file: "/fonts/5e3b55b0ffbd7cc8be4abc15468bd347.ttf",
    },
    {
      name: "Teko-Light",
      image: "/fonts/b340de8b986b79a8da983476a3474d53.png",
      visible: !1,
      displayName: "Teko Light",
      file: "/fonts/b340de8b986b79a8da983476a3474d53.ttf",
    },
    {
      name: "Teko-Medium",
      image: "/fonts/fafb7680e8dad6b19f3fb55f3cc3115b.png",
      visible: !1,
      displayName: "Teko-Medium",
      file: "/fonts/fafb7680e8dad6b19f3fb55f3cc3115b.ttf",
    },
    {
      name: "Teko-Regular",
      image: "/fonts/9a89bbf19d9bb7ff0639610e19336375.png",
      visible: !1,
      displayName: "Teko Regular",
      file: "/fonts/9a89bbf19d9bb7ff0639610e19336375.ttf",
    },
    {
      name: "TragicMarker-Regular",
      image: "/fonts/1e57553a56b71a66f9339a63eddc305d.png",
      visible: !1,
      displayName: "TragicMarker-Regular",
      file: "/fonts/1e57553a56b71a66f9339a63eddc305d.otf",
    },
    {
      name: "Vidaloka-Regular",
      image: "/fonts/c3d93778bf1384d5ae698dc840c1ea36.png",
      visible: !1,
      displayName: "Vidaloka",
      file: "/fonts/c3d93778bf1384d5ae698dc840c1ea36.ttf",
    },
    {
      name: "WalterTurncoat",
      image: "/fonts/085dc87535dc4e604adad436e567714a.png",
      visible: !1,
      displayName: "Walter Turncoat",
      file: "/fonts/085dc87535dc4e604adad436e567714a.ttf",
    },
  ]),
  Class("UserAddedTextFactory")({
    prototype: {
      _userAddedTextAllowedFonts:
        "production" === window.environment
          ? window.DEFAULT_FONTS_PRODUCTION
          : window.DEFAULT_FONTS_STAGING,
      defaultFont: "AvenirNextLTPro-Regular",
      _defaultUserAddedText: {
        id: 9234567899,
        name: "added-text",
        type: "Text",
        opacity: 100,
        fill: 100,
        position: { x: 0, y: -1e4 },
        x: 0,
        y: 0,
        width: 400,
        height: 400,
        visible: !0,
        styles: { blendOptions: {} },
        color: "#ffffff",
        contents: "Change Me",
        fontFamily: "Arial",
        fontSize: "80",
        justification: "CENTER",
        capitalization: "NORMAL",
        layers: [],
        excludable: !0,
        allowColorpicker: !0,
        maxCharacters: 50,
        maxCharactersPerLine: 50,
        maxLines: 3,
        allowMultiline: !1,
        image: null,
        baselineShift: 0,
        kerning: 0,
        warpStyle: "NONE",
        warpDirection: "HORIZONTAL",
        warpHorizontalDistortion: 0,
        warpVerticalDistortion: 0,
        warpBend: 0,
        smartFilters: null,
        allowScale: !0,
        allowMove: !0,
        isTabbedColorpicker: !0,
        bgColor: "#000000",
        bgPaddingFraction: 0.1,
        bgOpacity: 1,
        isAddedText: !0,
      },
      _createUserAddedText: function (e) {
        var t = JSON.parse(JSON.stringify(this._defaultUserAddedText));
        return (
          (t.font = this.defaultFont),
          (t.allowedFonts = this._userAddedTextAllowedFonts),
          (t.name += e),
          (t.id += e),
          e > 0 && (t.contents += " " + (e + 1)),
          t
        );
      },
    },
  }),
  Module("UserAddedTextSupport")({
    prototype: {
      WIDTH_PROPORTION: 0.75,
      _userAddedTextFactory: new UserAddedTextFactory(),
      _nAddedTexts: 0,
      _cachedAspectRatios: {},
      _addTextDiv: $(
        '<div class="text-adder"><button class="button composite-button"></button></div>'
      ),
      _addLastText: Promise.resolve(),
      _waitForEngineSetup: new Promise(function (e) {
        var t = setInterval(function () {
          window.engine &&
            window.engine._processCount > 0 &&
            (clearInterval(t), e());
        }, 200);
      }),
      _updateAddTextButton: function () {
        this._shouldDisplayTextAdder()
          ? this._addTextDiv.show()
          : this._addTextDiv.hide();
      },
      _incrementAddedTexts: function () {
        this._setAddedTextsCount(this._nAddedTexts + 1);
      },
      _decrementAddedTexts: function () {
        this._setAddedTextsCount(this._nAddedTexts - 1);
      },
      _setAddedTextsCount: function (e) {
        var t = this._addTextDiv.children()[0],
          n = this._getBuiltInTexts().length + e;
        (this._nAddedTexts = e),
          (t.innerText = 0 === n ? "Add Text" : "Add Another Text");
      },
      _setupAddTextButton: function (e) {
        var t = this,
          n = e.getTextControlGroup(),
          i = this._getUserAddedTextNamesFromUrl().length,
          r = this._shouldDisplayTextAdder(i),
          o = i > 0,
          s = Helpers.StageType.getMaxUserAddedTexts() > 0;
        n ||
          (!r && !o) ||
          ((n = t.getTextControlGroup()),
          t._setupFontsModal(),
          t._bindLoginToUpdateSavedFonts()),
          n &&
            s &&
            (n.element.append(t._addTextDiv),
            t._setAddedTextsCount(t._nAddedTexts),
            t._addTextDiv.find("button").bind("click", function () {
              (t._addLastText = t._addUserText()),
                t._addLastText &&
                  t._addLastText.then(function () {
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "userAddedText",
                      Object.assign(
                        { name: "added-text" + t._nAddedTexts },
                        Helpers.App.getProductShownData()
                      )
                    );
                  });
            }),
            r || this._addTextDiv.hide());
      },
      _addUserText: function (e) {
        var t,
          n = this,
          i = Helpers.StageType.getMaxUserAddedTexts(),
          r = n.record,
          o = void 0 !== e ? e : n._nAddedTexts,
          s = "added-text" + o;
        if (n._nAddedTexts !== i)
          return (t = n._getTextRecordByName(s))
            ? (n._setDefaultTextColorAndFont(t),
              n._placeNewTextObject(t),
              n._showTextLayer(s),
              n.recalculateCustomRules(n._getPristineTextObjects()),
              n._saveAddedTextToUrl(t),
              void n.triggerChange())
            : (n._incrementAddedTexts(),
              (t = n._userAddedTextFactory._createUserAddedText(o)),
              n._setDefaultTextColorAndFont(t),
              n._addUserAddedTextControl(t),
              Promise.all([n._waitForEngineSetup, n._addLastText]).then(
                function () {
                  return n._getTextAspectRatio(t).then(function () {
                    r.text.push(t),
                      n._placeNewTextObject(t),
                      n.recalculateCustomRules(n._getPristineTextObjects()),
                      n._saveAddedTextToUrl(t),
                      n.triggerChange();
                  });
                }
              ));
      },
      _setDefaultTextColorAndFont: function (e) {
        var t,
          n = this.record.text[0];
        if (n && 0 !== n.name.indexOf("added-text")) {
          e.color = n.color;
          var i = new Chameleon(n.color).toLAB();
          i.l = i.l > 50 ? i.l - 70 : i.l + 70;
          var r = new Chameleon(Chameleon.LABToHSV(i.l, i.a, i.b));
          if (
            ((e.bgColor = r.toHTML()),
            (e.bgOpacity = 1),
            (e.bgPaddingFraction = 0.1),
            (e.isColorCopied = !0),
            (t =
              e.allowedFonts.filter(function (e) {
                return e.name === n.font;
              }).length > 0),
            !t)
          )
            return void (e.font = this._userAddedTextFactory.defaultFont);
          (e.font = n.font), (e.isFontCopied = !0);
        }
      },
      _shouldDisplayTextAdder: function (e) {
        var t = Helpers.StageType.getMaxUserAddedTexts();
        return (
          (e = e || this._nAddedTexts),
          t > e &&
            this.canProcessWithEngine &&
            this._isImageStage() &&
            !this.isMobilePhone
        );
      },
      _getUserAddedTextNamesFromUrl: function () {
        var e = Helpers.App.getAllURLParams();
        return Object.keys(e)
          .filter(function (e) {
            return 0 === e.indexOf("pos-size_added-text");
          })
          .map(function (e) {
            return e.replace("pos-size_", "");
          });
      },
      _hideTextLayer: function (e) {
        this._decrementAddedTexts(),
          this._getTextControlByName(e).element.hide();
      },
      _showTextLayer: function (e, t) {
        var n,
          i,
          r,
          o = this._getTextRecordByName(e),
          s = this._getCustomRuleByName(e);
        o
          ? (this._incrementAddedTexts(),
            (r = this._getTextControlByName(e)),
            r &&
              (r.element.show(),
              r.updateSelection(),
              t && (o.bgOpacity = t.bgOpacity)))
          : s
          ? ((i = this._userAddedTextFactory._createUserAddedText(
              this._nAddedTexts
            )),
            this._incrementAddedTexts(),
            t &&
              ((i.bgOpacity = t.bgOpacity),
              (i.bgPaddingFraction = t.bgPaddingFraction),
              (i.bgColor = t.bgColor)),
            this.record.text.push(i),
            this._addUserAddedTextControl(i))
          : ((n = parseInt(e.replace("added-text", ""), 10)),
            (this._addLastText = this._addUserText(n, !0)));
      },
      _getCustomRulesFromTextJsons: function (e) {
        var t,
          n = this;
        return e.map(function (e) {
          return (t = n._getCustomRuleByName(e.name));
        });
      },
      _getCustomRuleByName: function (e) {
        var t,
          n = this.record.customRules;
        return (
          (t = n.filter(function (t) {
            return t.layerName === e;
          })[0]),
          t ||
            ((t = { layerName: e, layerType: "folder", scale: { x: 1, y: 1 } }),
            n.push(t)),
          t
        );
      },
      _getTextRecordByName: function (e) {
        return this.record.text.filter(function (t) {
          return t.name === e;
        })[0];
      },
      _getTextControlByName: function (e) {
        return this.leftSideBar.textControlGroup["Text_" + e];
      },
      _addUserAddedTextControl: function (e) {
        var t = this._createTextControl({
            textItem: e,
            itemIndex: null,
            slidePrefix: null,
          }),
          n = this.leftSideBar.textControlGroup,
          i = n.element.children(".text-control").get(-1);
        t.loadAssets(),
          n.appendChild(t),
          t.render(n.element),
          t.element.detach().insertAfter(i || this._addTextDiv),
          t.fontPicker.resetPickerDefaultPosition();
      },
      _placeNewTextObject: function (e) {
        var t = this,
          n = t._getPristineTextObjects();
        n.push(e), t._placePristineTextObjects(n);
      },
      _getPristineTextObjects: function () {
        var e = this.record;
        return this._getPristineCustomRules().map(function (t) {
          return e.text.filter(function (e) {
            return e.name === t.layerName;
          })[0];
        });
      },
      _getPristineCustomRules: function () {
        var e = this,
          t = e.record.customRules;
        return t.filter(function (t) {
          return e._isPristineUserAddedText(t);
        });
      },
      _isPristineUserAddedText: function (e) {
        return 0 === e.layerName.indexOf("added-text") && e.isPristine;
      },
      _placePristineTextObjects: function (e) {
        var t,
          n,
          i,
          r = this,
          o = {},
          s = r._calcSizingStrategy();
        (o = r.getStageDimensions()),
          (n = r._getCustomRulesFromTextJsons(e)),
          (n = r._sortCustomRulesByLayerName(n)),
          n.forEach(function (e) {
            r._setPristineTextSize(e, s);
          }),
          (t = r._getPristineTextGroupHeight(n)),
          (i = 0.5 * (o.height - t)),
          n.forEach(function (e) {
            r._setPristineTextPosition(e, i),
              (i += e.originalBounds.height),
              (i += 0.05 * o.height);
          });
      },
      recalculateCustomRuleIfTextHasBackground: function (e) {
        var t = this,
          n = t._getTextRecordByName(e),
          i = n && n.bgPaddingFraction,
          r = n && !!parseInt(n.bgOpacity),
          o = t._getCustomRuleByName(e);
        r &&
          ((o.position.x -= o.dimensions.height * i),
          (o.position.y -= o.dimensions.height * i * 1),
          (o.dimensions.width += (2 * i) / t._cachedAspectRatios[o.layerName]),
          (o.dimensions.height = o.dimensions.height * (1 + 2 * i)));
      },
      recalculateCustomRules: function (e) {
        var t,
          n = this,
          i = [];
        (t = n._getCustomRulesFromTextJsons(e)),
          (t = n._sortCustomRulesByLayerName(t)),
          t.forEach(function (e) {
            i.push(e.layerName);
          }),
          i.forEach(function (e) {
            n.recalculateCustomRuleIfTextHasBackground(e);
          });
      },
      _sortCustomRulesByLayerName: function (e) {
        return e
          .map(function (e, t) {
            return {
              i: t,
              v: parseInt(e.layerName.replace("added-text", ""), 10),
            };
          })
          .sort(function (e, t) {
            return e.v - t.v;
          })
          .map(function (t) {
            return e[t.i];
          });
      },
      _calcSizingStrategy: function () {
        var e,
          t,
          n,
          i = this._cachedAspectRatios["added-text0"],
          r = {},
          o = Helpers.StageType.getMaxUserAddedTexts(),
          s = o + 1,
          a = 0.05 * s;
        return (
          (r = this.getStageDimensions()),
          (e = this.WIDTH_PROPORTION * r.width),
          (t = this._calcPristineHeight(e, i)),
          (n = (t * o) / r.height),
          n + a > 1
            ? { name: "height-based", proportion: (1 - a) / o }
            : { name: "width-based" }
        );
      },
      _calcPristineHeight: function (e, t) {
        return e / t;
      },
      _calcPristineWidth: function () {},
      _setPristineTextSize: function (e, t) {
        var n,
          i,
          r = this.getStageDimensions(),
          o = this._cachedAspectRatios[e.layerName];
        "width-based" === t.name
          ? ((n = this.WIDTH_PROPORTION * r.width),
            (i = this._calcPristineHeight(n, o)))
          : ((i = t.proportion * r.height), (n = i * o)),
          (e.originalBounds = { width: n, height: i }),
          (e.dimensions = { width: n / r.width, height: i / r.height }),
          (e.isPristine = !0);
      },
      _setPristineTextPosition: function (e, t) {
        var n = this.getStageDimensions(),
          i = (n.width - e.originalBounds.width) / 2;
        (e.originalBounds.x = i),
          (e.originalBounds.y = t),
          (e.position = { x: i / n.width, y: t / n.height });
      },
      _getPristineTextGroupHeight: function (e) {
        var t, n;
        return (
          (t = this.getStageDimensions()),
          (n = e.reduce(function (e, t) {
            return e + t.originalBounds.height;
          }, 0)),
          n + 0.05 * t.height * (e.length - 1)
        );
      },
      _getTextAspectRatio: function (e) {
        var t,
          n = this;
        return (
          (t = new PIXI.Sprite.from(document.createElement("canvas"))),
          (t.parent = { x: 0, y: 0 }),
          (t.layerData = {
            position: { x: 0, y: 0 },
            fontSize: e.fontSize,
            lineSpacing: e.lineSpacing,
          }),
          engine._loadFont(e).then(function () {
            return engine._updateTextLayer(t, e).then(function (t) {
              var i = t.width / t.height;
              (t.parent = null),
                t.texture.destroy(),
                t.destroy(),
                (n._cachedAspectRatios[e.name] = i);
            });
          })
        );
      },
      _getActiveUserAddedTextRecords: function () {
        var e = this;
        return this.record.customRules
          .filter(function (e) {
            return 0 === e.layerName.indexOf("added-text");
          })
          .map(function (t) {
            return e._getTextRecordByName(t.layerName);
          });
      },
      _getBuiltInTexts: function () {
        return this.record.text.filter(function (e) {
          return -1 === e.name.indexOf("added-text");
        });
      },
      createTextControlRecords: function (e) {
        var t,
          n,
          i,
          r = this;
        (n = r._getUserAddedTextNamesFromCustomRules(r._previousCustomRules)),
          (t = r._getUserAddedTextNamesFromUrl()),
          (i = r._getTextsAddedOnPopstate(n, t).sort()),
          i.forEach(function (t) {
            var n = e.filter(function (e) {
              return e.name === t;
            });
            (n = n[0]), r.createTextRecord(n);
          });
      },
      createTextRecord: function (e) {
        var t = this._userAddedTextFactory._createUserAddedText(
          this._nAddedTexts
        );
        this._incrementAddedTexts(),
          e &&
            ((t.bgOpacity = e.bgOpacity),
            (t.bgPaddingFraction = e.bgPaddingFraction),
            (t.bgColor = e.bgColor)),
          this.record.text.push(t);
      },
    },
  }),
  Class("UserGraphicController")({
    generateDefaultColors: function (e) {
      var t,
        n,
        i = Helpers.App.getAllURLParams(),
        r = i["main-color"],
        o = e.defaultAssetColors && e.defaultAssetColors[0],
        s = null;
      return (
        r ||
          ((t = this._getFirstBuiltinTextWithColor(e)),
          (n = e.text[0]),
          t
            ? (r = t.color)
            : n && -1 === e.text[0].name.indexOf("added-text")
            ? (r = n.color)
            : ((r = this._getRandomMainColor()),
              (s = function () {
                Helpers.App.replaceUrlParam("main-color", r);
              }))),
        o || (o = this._getAccentFromMainColor(r)),
        { mainColor: r, accentColor: o, saveMainColor: s }
      );
    },
    _getFirstBuiltinTextWithColor: function (e) {
      var t, n;
      for (t = 0; t < e.graphic.length; t++) {
        if (((n = e.graphic[t]), 0 === n.name.indexOf("added-graphic")))
          return null;
        if (n.allowColorpicker && n.hasLayers && n.allowMove && n.allowScale)
          return n;
      }
      return null;
    },
    _getRandomMainColor: function () {
      var e = new Chameleon({ h: 0, s: 75, v: 100 }),
        t = 20 * Math.floor(13 * Math.random());
      return e.rotateBy(t).toHTML();
    },
    _getAccentFromMainColor: function (e) {
      var t = new Chameleon(e);
      return t.rotateBy(-140).toHTML();
    },
    _getUserGraphicCount: function (e) {
      return e.filter(function (e) {
        return 0 === e.name.indexOf("added-graphic");
      }).length;
    },
    _getLayerfulInteractiveGraphics: function (e) {
      return e.filter(function (e) {
        return e.hasLayers && e.allowMove && e.allowScale;
      });
    },
    _getBuiltInGraphicCount: function (e) {
      return (
        UserGraphicController._getLayerfulInteractiveGraphics(e).length -
        UserGraphicController._getUserGraphicCount(e)
      );
    },
    _getUserGraphicCountFromURL: function () {
      var e = Helpers.App.getAllURLParams();
      return Object.keys(e).filter(function (e) {
        return 0 === e.indexOf("multiFolder_added-graphic");
      }).length;
    },
    fetchDefaultAddedGraphic: function (e) {
      var t = [];
      Array.isArray(e) === !0 && (t = e);
      var n = {
          page: 0,
          perPage: 1,
          filter: { property: "tags", values: t },
          exclusions: [],
        },
        i = { control: "UserGraphicController" };
      return Asset.search("", n, i).then(function (e) {
        return e.data.length > 0 ? e.data[0] : null;
      });
    },
    prototype: {
      _defaultSelectedLayer: null,
      _graphicsStructure: null,
      _controls: [],
      init: function (e) {
        (this.groupTags = []),
          (this._controls = []),
          (this.defaultColors = e.defaultColors),
          (this.graphicsRecord = e.graphicsRecord),
          (this.assetGroupId = e.assetGroupId),
          (this.maxAddedGraphics = e.maxAddedGraphics),
          (this.renderGraphicControlDesktop = e.renderGraphicControlDesktop),
          (this.destroyGraphicControlDesktop = e.destroyGraphicControlDesktop),
          (this.renderGraphicControlMobile = e.renderGraphicControlMobile),
          (this.destroyGraphicControlMobile = e.destroyGraphicControlMobile),
          (this.onStateChanged = e.onStateChanged),
          (this._stageHasLogo = e.stageHasLogo),
          (this._defaultSelectedLayer = e.defaultSelectedLayer),
          Array.isArray(e.groupTags) === !0 && (this.groupTags = e.groupTags),
          (this.userGraphicsCount = 0),
          this._getGraphicsStructure();
        window.addEventListener("popstate", this._loadState.bind(this));
      },
      _getGraphicsStructure: function () {
        var e = this;
        Engine.prototype._treeWalker(
          window.structureData,
          "layers",
          function (t) {
            "Graphics" === t.name && (e._graphicsStructure = t.layers);
          }
        );
      },
      _saveState: function (e) {
        var t = "multi" + e.record.type + "_" + e.record.name,
          n = e.prefillGraphic;
        n &&
          (Helpers.App.replaceUrlParamWithHistory(t, n),
          this.defaultColors.saveMainColor &&
            this.defaultColors.saveMainColor(),
          this.onStateChanged(
            UserGraphicController._getUserGraphicCount(this.graphicsRecord)
          ));
      },
      _loadState: function () {
        var e = UserGraphicController._getUserGraphicCountFromURL();
        !this._stageHasLogo &&
          e > 0 &&
          !Helpers.App.getUrlParam("multiFolder_added-graphic0") &&
          e++;
        var t,
          n,
          i = UserGraphicController._getUserGraphicCount(this.graphicsRecord),
          r = e - i;
        if (e > 0 && 0 === this.groupTags.length)
          throw "Has added graphics, but no group tags assigned";
        if (0 !== r) {
          for (
            t = (r > 0 ? this._addGraphic : this._removeGraphic).bind(this),
              n = 0;
            n < Math.abs(r);
            n++
          )
            t(null, { fromLoad: !0, addGraphicButtonIndex: n });
          !this._stageHasLogo &&
            1 === e &&
            Helpers.App.getUrlParam("multiFolder_added-graphic0") &&
            e--,
            this.onStateChanged(e);
        }
      },
      loadAddedControls: function () {
        console.log("loadAddedControls");
        var e, t, n, i, r, o;
        if (
          ((e = UserGraphicController._getUserGraphicCountFromURL()),
          !this._stageHasLogo &&
            e > 0 &&
            !Helpers.App.getUrlParam("multiFolder_added-graphic0") &&
            e++,
          (t = UserGraphicController._getUserGraphicCount(this.graphicsRecord)),
          (n = e - t),
          e > 0 && 0 === this.groupTags.length)
        )
          return Promise.reject(
            "Has added graphics, but no group tags assigned"
          );
        if (0 === n) return Promise.resolve(null);
        (i = []), (r = []), (o = P.promisifyEvent("multiControlReady"));
        for (var s = 0; s < Math.abs(n); s++) {
          var a = this._addGraphic(null, {
            fromLoad: !0,
            addGraphicButtonIndex: s,
          });
          "object" == typeof a && (r.push(o(a)), i.push(a));
        }
        return (
          !this._stageHasLogo &&
            1 === e &&
            Helpers.App.getUrlParam("multiFolder_added-graphic0") &&
            e--,
          this.onStateChanged(e),
          Promise.all(r).then(
            function () {
              return this.controls;
            }.bind(this)
          )
        );
      },
      addGraphicAndSave: function (e, t) {
        var n;
        if (this._defaultSelectedLayer)
          return (
            (n = this._addGraphic(!0, {
              shouldDeletePrefill: !e,
              hasLogoCustomGraphic: e,
              addGraphicButtonIndex: t,
            })),
            this._saveState(n),
            Helpers.GlobalEventTracker.smartTemplateEvent(
              "userAddedGraphic",
              Object.assign(
                { name: "added-graphic" + this._controls.length },
                Helpers.App.getProductShownData()
              )
            ),
            n
          );
      },
      _addGraphic: function (e, t) {
        var n = Helpers.App.isMobile()
            ? this._getMobileGraphicIndex(t)
            : UserGraphicController._getUserGraphicCount(this.graphicsRecord),
          i = UserGraphicFactory.generateRecord(
            n,
            this._defaultSelectedLayer,
            this.maxAddedGraphics,
            this.defaultColors,
            this.groupTags
          );
        return (
          this.graphicsRecord.push(i),
          this._graphicsStructure.push(i.structureDummy),
          this._addUserGraphicControl(i, n, e, t)
        );
      },
      _getMobileGraphicIndex: function (e) {
        if (
          e.fromLoad &&
          !Helpers.App.getUrlParam(
            "multiFolder_added-graphic" + e.addGraphicButtonIndex
          )
        ) {
          if (this._stageHasLogo) return this.maxAddedGraphics - 1;
          if (0 !== e.addGraphicButtonIndex) return this.maxAddedGraphics;
        }
        return Number(e.addGraphicButtonIndex);
      },
      _removeGraphic: function () {
        var e = this.graphicsRecord.pop(),
          t = Helpers.App.isMobile(),
          n = this._controls.pop();
        this._graphicsStructure.pop(),
          t
            ? this.destroyGraphicControlMobile(e, n)
            : this.destroyGraphicControlDesktop(e);
      },
      _addUserGraphicControl: function (e, t, n, i) {
        var r,
          o,
          s = Helpers.App.getAllURLParams(),
          a =
            i && i.hasLogoCustomGraphic
              ? i.hasLogoCustomGraphic
              : this._stageHasLogo,
          l = Helpers.App.isMobile(),
          c = t ? " " + (t + 1) : "",
          u = "Graphic" + c,
          h =
            this._controls.length &&
            this._controls[this._controls.length - 1].element,
          d = l ? 0 === t : !h;
        (o =
          s["multi" + e.type + "_" + e.name] || this._defaultSelectedLayer.id),
          d && !a
            ? (r = UI.SmartTemplate.AddLogoMultiControl)
            : ((r = UI.SmartTemplate.MultiControl),
              l && (o = s["multi" + e.type + "_" + e.name]));
        var p = new r({
          title: u,
          position: this.graphicsRecord.length - 1,
          type: "graphic",
          name: e.type + "_" + e.name,
          record: e,
          isMobilePhone: l,
          prefillColor:
            s["color" + e.type + "_" + e.name] || this.defaultColors.mainColor,
          prefillGraphic: o,
          prefillSearch: s["search" + e.type + "_" + e.name] || "",
          onlyGraphics: !0,
          defaultAssetColors: [this.defaultColors.accentColor],
          shouldTrimTitles: !a,
          fromLoad: i.fromLoad,
        });
        return (
          l
            ? this.renderGraphicControlMobile(p, n)
            : this.renderGraphicControlDesktop(p, d, h),
          this._controls.push(p),
          p
        );
      },
      urlHasGraphics: function () {
        return UserGraphicController._getUserGraphicCountFromURL() > 0;
      },
      getAddLogoMultiControl: function () {
        return this._controls.find(function (e) {
          return "AddLogoMultiControl" === e.constructor.className;
        });
      },
      showAddLogoControl: function () {
        var e;
        (e = this.getAddLogoMultiControl()),
          void 0 !== e && e.showAddLogoControl();
      },
      hideAddLogoControl: function () {
        var e;
        (e = this.getAddLogoMultiControl()),
          void 0 !== e && e.hideAddLogoControl();
      },
    },
  }),
  Class("UserGraphicFactory")({
    GAP_HEIGHT: 0.05,
    MAX_HEIGHT: 0.3,
    MAX_WIDTH: 0.3,
    BASE_RECORD_ID: 7387909658834,
    BASE_STRUCTURE_ID: 2376495832175,
    BASE_STRUCTURE_LAYER_ID: 819645986514,
    BASE_STRUCTURE_SMART_OBJ_ID: 34789751923,
    BASE_RECORD_NAME: "added-graphic",
    _getBaseStructure: function () {
      return JSON.parse(
        JSON.stringify({
          id: null,
          name: null,
          type: "Folder",
          opacity: 100,
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          visible: !0,
          styles: {
            blendOptions: { mode: "passThrough" },
            layerEffects: {
              scale: 416.666666666667,
              solidFill: {
                color: { red: 0, green: 0, blue: 0 },
                enabled: !0,
                mode: "screen",
                opacity: 100,
                present: !0,
                showInDialog: !0,
              },
            },
          },
          color: "#000000",
          image: null,
          contents: null,
          font: null,
          layers: [
            {
              id: null,
              name: "",
              type: "Graphic",
              opacity: 100,
              fill: 100,
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              visible: !0,
              styles: { blendOptions: {} },
              color: null,
              image: null,
              contents: null,
              font: null,
              layers: [],
              smartObject: {
                id: "",
                name: "",
                type: "Document",
                x: 0,
                y: 0,
                width: 1024,
                height: 1024,
                resolution: 300,
                visible: !0,
                color: null,
                image: "",
                contents: null,
                font: null,
                layers: [],
                smartObject: null,
                smartObjectId: "",
                transform: {
                  transformPoints: [0, 0, 100, 0, 100, 100, 0, 100],
                  rotationAngle: 0,
                },
              },
              smartFilters: null,
            },
          ],
          smartObject: null,
          smartFilters: null,
          fill: 100,
        })
      );
    },
    _getBaseRecord: function () {
      return JSON.parse(
        JSON.stringify({
          id: null,
          name: null,
          type: "Folder",
          opacity: 100,
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          visible: !0,
          styles: {
            blendOptions: { mode: "passThrough" },
            layerEffects: {
              scale: 416.666666666667,
              solidFill: {
                color: { red: 0, green: 0, blue: 0 },
                enabled: !0,
                mode: "screen",
                opacity: 100,
                present: !0,
                showInDialog: !0,
              },
            },
          },
          color: null,
          image: null,
          contents: null,
          font: null,
          smartFilters: null,
          allowColorpicker: !0,
          allowSearch: !0,
          allowForegroundSearch: !1,
          allowBackgroundSearch: !1,
          allowCustomUpload: !0,
          preconfiguredSearch: "",
          hasLayers: !0,
          excludable: !0,
          allowScale: !0,
          allowMove: !0,
          tag: "",
          selectedLayer: null,
          layers: null,
          groupTags: null,
        })
      );
    },
    generateRecord: function (e, t, n, i, r) {
      var o = this._getBaseRecord();
      return (
        (o.name = UserGraphicFactory.BASE_RECORD_NAME + e),
        (o.id = UserGraphicFactory.BASE_RECORD_ID + e),
        (o.layers = [t]),
        (o.color = i.mainColor),
        (o.groupTags = r),
        this._setRecordSafebox(e, o, n),
        (o.structure = this._getBaseStructure()),
        (o.structure.id = UserGraphicFactory.BASE_STRUCTURE_ID + e),
        (o.structure.name = o.name),
        (o.structure.layers[0].name = o.name + "_replace"),
        (o.structure.layers[0].id =
          UserGraphicFactory.BASE_STRUCTURE_LAYER_ID + e),
        (o.structure.layers[0].smartObject.smartObjectId =
          UserGraphicFactory.BASE_STRUCTURE_SMART_OBJ_ID + e),
        (o.structureDummy = JSON.parse(JSON.stringify(o.structure))),
        (o.structureDummy.type = ""),
        o
      );
    },
    _setRecordSafebox: function (e, t, n) {
      var i = (this.MAX_HEIGHT + this.GAP_HEIGHT) * n - this.GAP_HEIGHT;
      (t.x = (1 - this.MAX_WIDTH) / 2),
        (t.y = (1 - i) / 3 + e * (this.MAX_HEIGHT + this.GAP_HEIGHT)),
        (t.width = this.MAX_WIDTH),
        (t.height = this.MAX_HEIGHT);
    },
  }),
  Module("StageCanvasCustomGraphicSupport")({
    prototype: {
      customGraphicBindings: function () {
        var e = this,
          t = function (e) {
            console.log("StageCanvasCustomGraphicSupport", e);
          },
          n = function (t) {
            var n = t.data.target.fileInputControl.$fileLabel.find(
              "span.file-upload-label__control-title"
            );
            n && n.text("Cropping"),
              e._addLoaderDivElement(),
              e._disableTabbedControls(),
              e.disableAllFileUploads();
          };
        e.stageActionsManager.bind("loading", n),
          e.leftSideBar.bind("loading", n),
          e.rightSideBar.bind("loading", n);
        var i = function (n) {
          if (
            (t(event),
            n.data &&
              n.data.target &&
              "CustomGraphicControl" === n.data.target.constructor.className)
          ) {
            e._addLoaderDivElement(), e._disableTabbedControls();
            var i = n.data.target;
            i.showLoader(), i.dispatch("customGraphicFileLoaded");
            var r = function (e) {
                return (
                  Helpers.GlobalEventTracker.smartTemplateEvent("uploadStart", {
                    fileName: e.name,
                  }),
                  CropperRemote.uploadImage(e).then(function (e) {
                    return new Promise(function (t, n) {
                      $.get(e.data.user_image_url).done(t).fail(n);
                    }).then(function (e) {
                      return (
                        Helpers.GlobalEventTracker.smartTemplateEvent(
                          "uploadEnd",
                          { id: e.id }
                        ),
                        e
                      );
                    });
                  })
                );
              },
              o = function (e) {
                return (
                  Helpers.GlobalEventTracker.smartTemplateEvent(
                    "localCropper-uploadStart",
                    { fileName: e.name }
                  ),
                  CropperLocalUploader.upload(e).then(function (e) {
                    return (
                      Helpers.GlobalEventTracker.smartTemplateEvent(
                        "remoteCropper-uploadEnd",
                        { id: e.id }
                      ),
                      e
                    );
                  })
                );
              },
              s = function (t) {
                if (!t) return Promise.reject();
                var n = function (e) {
                  var t;
                  try {
                    t = JSON.parse(e.responseText).error;
                  } catch (n) {
                    t = "Couldn't process image, please try again";
                  }
                  return t;
                };
                return (
                  i.getRecordLayerImage() &&
                    (i.showDiscardButton(), i.showRepositionButton()),
                  Helpers.GlobalEventTracker.smartTemplateEvent("uploadError", {
                    message: n(t),
                    fileName: i.getFile().name,
                  }),
                  e.dispatch("stage.error", { message: n(t) }),
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  e.enableAllFileUploads(),
                  i.hideLoader(),
                  Promise.reject()
                );
              },
              a = function (e) {
                return (
                  (e.cropperData = null),
                  (e.viewport = {
                    width: i.record.width,
                    height: i.record.height,
                  }),
                  e
                );
              },
              l = function (t) {
                return new Promise(function (n, r) {
                  var o = e.cropperModal,
                    s = function () {
                      o.unbind("imageLoaded", s), o.activate();
                    },
                    a = function () {
                      o.unbind("modal.cancel", a),
                        e._removeLoaderDivElement(),
                        e._enableTabbedControls(),
                        e.enableAllFileUploads(),
                        i.hideLoader(),
                        i.dispatch("customGraphicCropError"),
                        r();
                    },
                    l = function (e, i) {
                      o.unbind("cropImage", l),
                        (i.id = t.id),
                        (i.viewport = t.viewport),
                        n(i);
                    },
                    c = function (e) {
                      o.unbind("imageLoadError", c),
                        r({
                          responseText: JSON.stringify({
                            error: e.data.message,
                          }),
                          sizeExceeded: e.data.sizeExceeded,
                        });
                    };
                  o.bind("imageLoaded", s),
                    o.bind("modal.cancel", a),
                    o.bind("cropImage", l),
                    o.bind("imageLoadError", c),
                    o.setViewportDimensions(t.viewport),
                    o.loadImage(
                      {
                        cropperConstraints: { zoom: !1, movement: !1 },
                        existingImageInfo: t.cropperData,
                      },
                      t.user_image_url
                    );
                });
              },
              c = function (t) {
                return (
                  e._addLoaderDivElement(),
                  e._disableTabbedControls(),
                  Helpers.GlobalEventTracker.smartTemplateEvent("cropStart", t),
                  CropperRemote.cropImage(t)
                    .then(function (e) {
                      return (
                        Helpers.GlobalEventTracker.smartTemplateEvent(
                          "cropEnd",
                          { id: e.data.id }
                        ),
                        e.data
                      );
                    })
                    ["catch"](function (e) {
                      return (
                        i.setState(),
                        (e.id = t.id),
                        (e.cropData = t),
                        Promise.reject(e)
                      );
                    })
                );
              },
              u = function (t) {
                return (
                  e._addLoaderDivElement(),
                  e._disableTabbedControls(),
                  Helpers.GlobalEventTracker.smartTemplateEvent(
                    "localCropper-cropStart",
                    t
                  ),
                  CropperLocalCropper.crop(i.getFile(), t)
                    .then(function (e) {
                      return (
                        Helpers.GlobalEventTracker.smartTemplateEvent(
                          "localCropper-cropEnd",
                          { id: e.id }
                        ),
                        e
                      );
                    })
                    ["catch"](function (e) {
                      return (e.id = t.id), (e.cropData = t), Promise.reject(e);
                    })
                );
              },
              h = null,
              d = function () {
                h && (h.cancel(), (h = null));
              },
              p = function (e, t, n) {
                var i = function (e) {
                    return e.length > 0 ? (2 * e.length) / 1024 : 0;
                  },
                  r = {
                    id: t.id,
                    cropParams: t.crop_params,
                    thumbnailSize: i(t.thumbnail_url),
                    croppedImageSize: i(t.cropped_image_url),
                    userImageSize: i(t.user_image_url),
                    userImageFilename: t.user_image_filename,
                    start: n.start,
                    persistResult: t.persistResult || null,
                  };
                n.end > 0 &&
                  ((r.end = n.end),
                  (r.duration = n.end - n.start),
                  (r.success = n.success)),
                  Helpers.GlobalEventTracker.smartTemplateEvent(e, r);
              },
              f = function () {
                i.unbind("removeFile", f), d(), i.bind("removeFile", f);
              },
              m = function (e) {
                "Cancelation Error" === e.message;
              },
              g = function (t) {
                d(), f();
                var n = Date.now();
                p("localCropper-persistStart", t, { start: n });
                var r = function (t) {
                    e._notifyErrorMessage(t);
                  },
                  o = function () {
                    return CropperLocalCropper.persist(t, r);
                  };
                return (
                  (h = P.cancelable(o)()),
                  h
                    .then(function (e) {
                      return (
                        (t.persistResult = e.data),
                        p("localCropper-persistEnd", t, {
                          start: n,
                          end: Date.now(),
                          success: !0,
                        }),
                        e.data
                      );
                    })
                    ["catch"](function (e) {
                      return "Cancelation Error" === e.message
                        ? Promise.reject(e)
                        : (p("localCropper-persistEnd", t, {
                            start: n,
                            end: Date.now(),
                            success: !1,
                          }),
                          (e.id = t.id),
                          (e.cropData = t),
                          Promise.reject(e));
                    })
                    ["finally"](function () {
                      i.unbind("removeFile", f);
                    })
                );
              },
              v = function (t) {
                (i.id = t.id),
                  (i.record.hash = i.id),
                  i.setUrlParameter(t.id),
                  (i.record.layers[0].image = t.cropped_image_url),
                  i.dispatch("customGraphicChange"),
                  e.dispatch("change", {
                    errorCallback: function (e) {
                      "abort" !== e.statusText &&
                        (i.hideDiscardButton(),
                        i.hideRepositionButton(),
                        400 === e.status &&
                          (i.record.layers[0].image = previousUserImage));
                    },
                    originalDispatcher: i,
                    changedProperty: "image",
                    triggeredByUser: !0,
                  });
              },
              y = function (e) {
                var t = this;
                if ("Cancelation Error" === e.message) return Promise.reject(e);
                var n = "We could not save your image, please try again";
                try {
                  var i = JSON.parse(e);
                  "Validation" === i.typeError && (n = i.message),
                    (e = new Error(i.message));
                } catch (r) {
                  return;
                }
                return (
                  Helpers.GlobalEventTracker.smartTemplateEvent(
                    "persistError",
                    { message: e.responseText, id: e.id }
                  ),
                  t.dispatch("stage.error", {
                    message: n,
                    cropData: e.responseText,
                  }),
                  Promise.reject(e)
                );
              },
              _ = function (t) {
                var n = i.userImagePath,
                  r = i.fileInputControl.$fileLabel.find(
                    "span.file-upload-label__control-title"
                  );
                (i.userImagePath = t.user_image_url),
                  (i.cropParams = t.crop_params),
                  (i.record.layers[0].image = t.cropped_image_url),
                  (i.record.layers[0].visible = !0),
                  i.showDiscardButton(),
                  i.showRepositionButton(),
                  e.enableAllFileUploads(),
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  r && r.text("Cropped!"),
                  setTimeout(function () {
                    i.setState(!0);
                  }, 2e3),
                  i.urlInputControl && i.urlInputControl.hide(),
                  e.dispatch("customGraphicsUpdate"),
                  i.dispatch("customGraphicChange");
                var o = {
                  errorCallback: function (e) {
                    "abort" !== e.statusText &&
                      (i.hideDiscardButton(),
                      i.hideRepositionButton(),
                      400 === e.status && (i.record.layers[0].image = n));
                  },
                  triggeredByUser: !0,
                };
                return e.dispatch("customAssetCropped", o), t;
              },
              b = function (t) {
                var n = i.userImagePath;
                (i.id = t.id),
                  (i.userImagePath = t.user_image_url),
                  (i.cropParams = t.crop_params),
                  (i.record.hash = i.id),
                  (i.record.layers[0].image = t.cropped_image_url),
                  (i.record.layers[0].visible = !0),
                  i.showDiscardButton(),
                  i.showRepositionButton(),
                  i.hideLoader(),
                  e.enableAllFileUploads(),
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  i.urlInputControl && i.urlInputControl.hide();
                var r = i.fileInputControl.$fileLabel.find(
                  "span.file-upload-label__control-title"
                );
                return (
                  r && r.text("Cropped!"),
                  setTimeout(function () {
                    i.setState(!0);
                  }, 2e3),
                  i.setUrlParameter(t.id),
                  e.dispatch("customGraphicsUpdate"),
                  i.dispatch("customGraphicChange"),
                  e.dispatch("change", {
                    errorCallback: function (e) {
                      "abort" !== e.statusText &&
                        (i.hideDiscardButton(),
                        i.hideRepositionButton(),
                        400 === e.status && (i.record.layers[0].image = n));
                    },
                    originalDispatcher: i,
                    changedProperty: "image",
                    triggeredByUser: !0,
                  }),
                  t
                );
              },
              w = function (t) {
                if ((i.setState(), !t)) return Promise.reject();
                (this.cropperError = t),
                  this.cropperError.sizeExceeded ||
                    r(i.getFile()).then(
                      function (e) {
                        var t = { s3: e, cropperError: this.cropperError };
                        Helpers.GlobalEventTracker.track(
                          "StageCanvas-ImageIsCorrupted",
                          t
                        );
                      }.bind(this)
                    ),
                  console.log(t.responseText);
                var n = function (e) {
                  var t;
                  try {
                    t = JSON.parse(e.responseText).error;
                  } catch (n) {
                    t =
                      "Error while uploading, make sure you're online and try again.";
                  }
                  return t;
                };
                return (
                  Helpers.GlobalEventTracker.smartTemplateEvent("cropError", {
                    message: n(t),
                    id: t.id,
                  }),
                  e.dispatch("stage.error", {
                    message: n(t),
                    cropData: t.cropData,
                  }),
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  e.enableAllFileUploads(),
                  i.hideLoader(),
                  i.dispatch("customGraphicCropError"),
                  Promise.reject()
                );
              },
              C = function (e) {
                return "image/png" != e.type.toLowerCase() &&
                  "image/jpeg" != e.type.toLowerCase()
                  ? Promise.reject()
                  : Promise.resolve(e);
              },
              x = function () {
                return (
                  e.dispatch("stage.error", {
                    message: "Please upload a valid image format",
                  }),
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  e.enableAllFileUploads(),
                  i.hideLoader(),
                  Promise.reject()
                );
              };
            if (e.canProcessWithEngine === !0 && e.isMobilePhone === !1)
              C(i.getFile())
                .then(o)
                ["catch"](x)
                .then(a)
                ["catch"](s)
                .then(l)
                .then(u)
                .then(_)
                ["catch"](w)
                .then(g)
                .then(v)
                ["catch"](y)
                ["catch"](m);
            else {
              var T = o(i.getFile()).then(a)["catch"](s).then(l),
                S = r(i.getFile());
              Promise.all([T, S])
                .then(function (e) {
                  var t = e[0];
                  return (t.id = e[1].id), Promise.resolve(t);
                })
                .then(c)
                .then(b)
                ["catch"](w);
            }
          }
        };
        e.stageActionsManager.bind("file.loaded", i),
          e.leftSideBar.bind("file.loaded", i),
          e.rightSideBar.bind("file.loaded", i);
        var r = function (t) {
          var n, i;
          if (
            t.data &&
            t.data.target &&
            "CustomGraphicControl" === t.data.target.constructor.className
          ) {
            e._addLoaderDivElement(),
              e._disableTabbedControls(),
              (n = t.data.target),
              (i = t.data.file),
              n.showLoader();
            var r = function (e) {
                return "image/png" != e.type.toLowerCase() &&
                  "image/jpeg" != e.type.toLowerCase()
                  ? Promise.reject()
                  : Promise.resolve(e);
              },
              o = function () {
                return (
                  e.dispatch("stage.error", {
                    message: "Please upload a valid image format",
                  }),
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  e.enableAllFileUploads(),
                  n.hideLoader(),
                  Promise.reject()
                );
              },
              s = function (e) {
                return (
                  Helpers.GlobalEventTracker.smartTemplateEvent("uploadStart", {
                    fileName: e.name,
                  }),
                  CropperRemote.uploadImage(e).then(function (e) {
                    return new Promise(function (t, n) {
                      $.get(e.data.user_image_url).done(t).fail(n);
                    }).then(function (e) {
                      return (
                        Helpers.GlobalEventTracker.smartTemplateEvent(
                          "uploadEnd",
                          { id: e.id }
                        ),
                        e
                      );
                    });
                  })
                );
              },
              a = function (t) {
                if (!t) return Promise.reject();
                var i = function (e) {
                  var t;
                  try {
                    t = JSON.parse(e.responseText).error;
                  } catch (n) {
                    t = "Couldn't process image, please try again";
                  }
                  return t;
                };
                return (
                  n.getRecordLayerImage() &&
                    (n.showDiscardButton(), n.showRepositionButton()),
                  Helpers.GlobalEventTracker.smartTemplateEvent("uploadError", {
                    message: i(t),
                    fileName: n.getFile().name,
                  }),
                  e.dispatch("stage.error", { message: i(t) }),
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  e.enableAllFileUploads(),
                  n.hideLoader(),
                  Promise.reject()
                );
              },
              l = function (e) {
                return (e.cropped_image_url = e.user_image_url), e;
              },
              c = function (t) {
                var i = n.urlInputControl;
                (n.id = t.id),
                  (n.userImagePath = t.user_image_url),
                  (n.cropParams = t.crop_params),
                  (n.record.hash = n.id),
                  (n.record.layers[0].image = t.cropped_image_url),
                  (n.record.layers[0].visible = !0),
                  n.showDiscardButton(),
                  n.showRepositionButton(),
                  n.hideLoader(),
                  e.enableAllFileUploads(),
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  i && (i.hide(), i.$loader && i.$loader.hide());
                var r = n.fileInputControl.$fileLabel.find(
                  "span.file-upload-label__control-title"
                );
                return (
                  r && r.text("Cropped!"),
                  setTimeout(function () {
                    n.setState(!0);
                  }, 2e3),
                  n.setUrlParameter(t.id),
                  e.dispatch("customGraphicsUpdate"),
                  n.dispatch("customGraphicChange"),
                  e.dispatch("change", {
                    triggeredByUser: !0,
                    originalDispatcher: n,
                    changedProperty: "image",
                  }),
                  t
                );
              };
            r(i)["catch"](o).then(s)["catch"](a).then(l).then(c);
          }
        };
        e._filesContainer.bind("screenshotLoad", r);
        var o = function (n) {
          if (
            (t(n),
            n.data &&
              n.data.target &&
              "CustomGraphicControl" === n.data.target.constructor.className)
          ) {
            var i = n.data.target;
            i.urlInputControl && i.urlInputControl.show(),
              e.dispatch("customGraphicsUpdate"),
              i.dispatch("customGraphicChange"),
              e.dispatch("change", {
                triggeredByUser: !0,
                originalDispatcher: i,
                changedProperty: "image",
              });
          }
        };
        e.stageActionsManager.bind("file.unload", o),
          e.leftSideBar.bind("file.unload", o),
          e.rightSideBar.bind("file.unload", o);
        var s = function (n) {
          if (
            (t(n),
            n.data &&
              n.data.target &&
              "CustomGraphicControl" === n.data.target.constructor.className)
          ) {
            var i = n.data.target;
            if ((i.showLoader(), e.uploadPending === !0))
              return void e.dispatch("stage.warn", {
                message: "Please wait for your upload to finish...",
                seconds: 3,
              });
            if ((e.disableAllFileUploads(), i.pendingImageUrl)) {
              Helpers.GlobalEventTracker.track(
                "StageCanvas-suspiciousPendingImage"
              ),
                (e.uploadPending = !0);
              var r = function (t) {
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "uploadStart",
                      { url: t }
                    ),
                    CropperRemote.uploadImageURI(t).then(function (n) {
                      return (
                        Helpers.GlobalEventTracker.smartTemplateEvent(
                          "uploadEnd",
                          { url: t, id: n.data.id }
                        ),
                        (e.uploadPending = !1),
                        (i.pendingImageUrl = null),
                        new Promise(function (e, t) {
                          $.get(n.data.user_image_url).done(e).fail(t);
                        })
                      );
                    })
                  );
                },
                o = function (e) {
                  return (
                    (e.cropperData = null),
                    (e.viewport = {
                      width: i.record.width,
                      height: i.record.height,
                    }),
                    e
                  );
                },
                s = function (t) {
                  if (!t) return Promise.reject();
                  var n = function (e) {
                    var t;
                    try {
                      t = JSON.parse(e.responseText).error;
                    } catch (n) {
                      t = "Couldn't process image, please try again";
                    }
                    return t;
                  };
                  return (
                    i.getRecordLayerImage() &&
                      (i.showDiscardButton(), i.showRepositionButton()),
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "uploadError",
                      { message: n(t), fileName: i.getFile().name }
                    ),
                    e.dispatch("stage.error", { message: n(t) }),
                    e._removeLoaderDivElement(),
                    e.enableAllFileUploads(),
                    i.hideLoader(),
                    Promise.reject()
                  );
                },
                a = function (t) {
                  return new Promise(function (n, r) {
                    var o = e.cropperModal,
                      s = t.cropperData,
                      a = function () {
                        o.unbind("imageLoaded", a), o.activate();
                      },
                      l = function () {
                        o.unbind("modal.cancel", l),
                          e._removeLoaderDivElement(),
                          e._enableTabbedControls(),
                          e.enableAllFileUploads(),
                          i.hideLoader(),
                          i.dispatch("customGraphicCropError"),
                          r();
                      },
                      c = function (e, i) {
                        o.unbind("cropImage", c),
                          (i.id = t.id),
                          (i.viewport = t.viewport),
                          (i.userImagePath = t.user_image_url),
                          n(i);
                      };
                    o.bind("imageLoaded", a),
                      o.bind("modal.cancel", l),
                      o.bind("cropImage", c),
                      o.setViewportDimensions(t.viewport),
                      o.loadImage(
                        {
                          cropperConstraints: { zoom: !1, movement: !1 },
                          existingImageInfo: s,
                        },
                        t.user_image_url
                      );
                  });
                },
                l = function (t) {
                  return (
                    e._addLoaderDivElement(),
                    e._disableTabbedControls(),
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "cropStart",
                      t
                    ),
                    CropperRemote.cropImage(t)
                      .then(function (e) {
                        return (
                          Helpers.GlobalEventTracker.smartTemplateEvent(
                            "cropEnd",
                            { id: e.data.id }
                          ),
                          e.data
                        );
                      })
                      ["catch"](function (e) {
                        return (
                          (e.id = t.id),
                          (cropresponse.cropData = t),
                          Promise.reject(e)
                        );
                      })
                  );
                },
                c = function (t) {
                  e._addLoaderDivElement(),
                    e._disableTabbedControls(),
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "localCropper-cropStart",
                      t
                    );
                  var n,
                    r = function (e) {
                      var e = e + "?_timestamp=" + Date.now();
                      return new Promise(function (t, n) {
                        var i = new XMLHttpRequest();
                        i.open("GET", e, !0),
                          (i.responseType = "blob"),
                          (i.onload = function () {
                            var e = new FileReader();
                            e.readAsDataURL(i.response),
                              (e.onload = function (e) {
                                t(e.target.result);
                              });
                          }),
                          (i.onerror = function (e) {
                            n(e);
                          }),
                          i.send();
                      });
                    },
                    o = /^data:image/;
                  return (
                    (n =
                      i.getFile() || o.test(i.userImagePath) !== !1
                        ? Promise.resolve(file || i.userImagePath)
                        : r(t.userImagePath)),
                    n
                      .then(function (e) {
                        return CropperLocalCropper.crop(e, t);
                      })
                      .then(function (e) {
                        return (
                          Helpers.GlobalEventTracker.smartTemplateEvent(
                            "localCropper-cropEnd",
                            { id: e.id }
                          ),
                          e
                        );
                      })
                      ["catch"](function (e) {
                        return (
                          (e.id = t.id), (e.cropData = t), Promise.reject(e)
                        );
                      })
                  );
                },
                u = function (t) {
                  var n = i.userImagePath;
                  (i.userImagePath = t.user_image_url),
                    (i.cropParams = t.crop_params),
                    (i.record.hash = i.id),
                    (i.record.layers[0].image = t.cropped_image_url),
                    (i.record.layers[0].visible = !0),
                    i.showDiscardButton(),
                    i.showRepositionButton(),
                    e.enableAllFileUploads(),
                    e._removeLoaderDivElement(),
                    e._enableTabbedControls(),
                    i.urlInputControl && i.urlInputControl.hide(),
                    e.dispatch("customGraphicsUpdate"),
                    i.dispatch("customGraphicChange");
                  var r = {
                    errorCallback: function (e) {
                      "abort" !== e.statusText &&
                        (i.hideDiscardButton(),
                        i.hideRepositionButton(),
                        400 === e.status && (i.record.layers[0].image = n));
                    },
                    triggeredByUser: !0,
                  };
                  return e.dispatch("customAssetCropped", r), t;
                },
                h = function (t) {
                  var n = i.userImagePath;
                  return (
                    (i.id = t.id),
                    (i.userImagePath = t.user_image_url),
                    (i.cropParams = t.crop_params),
                    (i.record.hash = i.id),
                    (i.record.layers[0].image = t.cropped_image_url),
                    (i.record.layers[0].visible = !0),
                    i.showDiscardButton(),
                    i.showRepositionButton(),
                    i.hideLoader(),
                    e.enableAllFileUploads(),
                    e._removeLoaderDivElement(),
                    e._enableTabbedControls(),
                    i.setUrlParameter(t.id),
                    e.dispatch("customGraphicsUpdate"),
                    i.dispatch("customGraphicChange"),
                    e.dispatch("change", {
                      errorCallback: function (e) {
                        "abort" !== e.statusText &&
                          (i.hideDiscardButton(),
                          i.hideRepositionButton(),
                          400 === e.status && (i.record.layers[0].image = n));
                      },
                      originalDispatcher: i,
                      changedProperty: "image",
                      triggeredByUser: !0,
                    }),
                    t
                  );
                },
                d = function (e) {
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "uploadStart",
                      { fileName: e.name }
                    ),
                    CropperRemote.uploadImage(e).then(function (e) {
                      return new Promise(function (t, n) {
                        $.get(e.data.user_image_url).done(t).fail(n);
                      }).then(function (e) {
                        return (
                          Helpers.GlobalEventTracker.smartTemplateEvent(
                            "uploadEnd",
                            { id: e.id }
                          ),
                          e
                        );
                      });
                    })
                  );
                },
                p = function (t) {
                  if (!t) return Promise.reject();
                  (this.cropperError = t),
                    d(i.getFile()).then(
                      function (e) {
                        var t = { s3: e, cropperError: this.cropperError };
                        Helpers.GlobalEventTracker.track(
                          "StageCanvas-ImageIsCorrupted",
                          t
                        );
                      }.bind(this)
                    ),
                    console.log(t.responseText);
                  var n = function (e) {
                    var t;
                    try {
                      t = JSON.parse(e.responseText).error;
                    } catch (n) {
                      t =
                        "Your image is most likely corrupt. Please upload another image.";
                    }
                    return t;
                  };
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent("cropError", {
                      message: n(t),
                      id: t.id,
                    }),
                    e.dispatch("stage.error", {
                      message: n(t),
                      cropData: t.cropData,
                    }),
                    e._removeLoaderDivElement(),
                    e._enableTabbedControls(),
                    e.enableAllFileUploads(),
                    i.hideLoader(),
                    i.dispatch("customGraphicCropError"),
                    Promise.reject()
                  );
                },
                f = null,
                m = function () {
                  f && (f.cancel(), (f = null));
                },
                g = function (e, t, n) {
                  var i = function (e) {
                      return e.length > 0 ? (2 * e.length) / 1024 : 0;
                    },
                    r = {
                      id: t.id,
                      cropParams: t.crop_params,
                      thumbnailSize: i(t.thumbnail_url),
                      croppedImageSize: i(t.cropped_image_url),
                      userImageSize: i(t.user_image_url),
                      userImageFilename: t.user_image_filename,
                      start: n.start,
                      persistResult: t.persistResult || null,
                    };
                  n.end > 0 &&
                    ((r.end = n.end),
                    (r.duration = n.end - n.start),
                    (r.success = n.success)),
                    Helpers.GlobalEventTracker.smartTemplateEvent(e, r);
                },
                v = function (e) {
                  "Cancelation Error" === e.message;
                },
                y = function () {
                  i.unbind("removeFile", y), m(), i.bind("removeFile", y);
                },
                _ = function (t) {
                  m(), y();
                  var n = Date.now();
                  g("localCropper-persistStart", t, { start: n });
                  var r = function (t) {
                      e._notifyErrorMessage(t);
                    },
                    o = function () {
                      return CropperLocalCropper.persist(t, r);
                    };
                  return (
                    (f = P.cancelable(o)()),
                    f
                      .then(function (e) {
                        return (
                          (t.persistResult = e.data),
                          g("localCropper-persistEnd", t, {
                            start: n,
                            end: Date.now(),
                            success: !0,
                          }),
                          e.data
                        );
                      })
                      ["catch"](function (e) {
                        return "Cancelation Error" === e.message
                          ? Promise.reject(e)
                          : (g("localCropper-persistEnd", t, {
                              start: n,
                              end: Date.now(),
                              success: !1,
                            }),
                            (e.id = t.id),
                            (e.cropData = t),
                            Promise.reject(e));
                      })
                      ["finally"](function () {
                        i.unbind("removeFile", y);
                      })
                  );
                },
                b = function (t) {
                  (i.id = t.id),
                    (i.record.hash = i.id),
                    i.setUrlParameter(t.id),
                    (i.record.layers[0].image = t.cropped_image_url),
                    i.dispatch("customGraphicChange"),
                    e.dispatch("change", {
                      errorCallback: function (e) {
                        "abort" !== e.statusText &&
                          (i.hideDiscardButton(),
                          i.hideRepositionButton(),
                          400 === e.status &&
                            (i.record.layers[0].image = previousUserImage));
                      },
                      originalDispatcher: i,
                      changedProperty: "image",
                      triggeredByUser: !0,
                    });
                },
                w = function (e) {
                  var t = this;
                  if (!e) return Promise.reject(new Error("Cancelation Error"));
                  if ("Cancelation Error" === e.message)
                    return Promise.reject(e);
                  var n = "We could not save your image, please try again";
                  try {
                    var i = JSON.parse(e);
                    "Validation" === i.typeError && (n = i.message),
                      (e = new Error(i.message));
                  } catch (r) {
                    return;
                  }
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "persistError",
                      { message: e.responseText, id: e.id }
                    ),
                    t.dispatch("stage.error", {
                      message: n,
                      cropData: e.responseText,
                    }),
                    Promise.reject(e)
                  );
                };
              e.canProcessWithEngine === !0 && e.isMobilePhone === !1
                ? r(i.pendingImageUrl)
                    .then(o)
                    ["catch"](s)
                    .then(a)
                    .then(c)
                    .then(u)
                    ["catch"](p)
                    .then(_)
                    .then(b)
                    ["catch"](w)
                    ["catch"](v)
                : r(i.pendingImageUrl)
                    .then(o)
                    ["catch"](s)
                    .then(a)
                    .then(l)
                    .then(h)
                    ["catch"](p);
            } else {
              var C,
                x = i.id,
                T = i.cropParams;
              T &&
                (C = {
                  aw: T.actual_width,
                  ah: T.actual_height,
                  w: T.new_width,
                  h: T.new_height,
                  at: T.actual_top,
                  al: T.actual_left,
                  t: T.image_element_top,
                  l: T.image_element_left,
                  s: T.zoom,
                });
              var S = {
                  id: x,
                  user_image_url: i.userImagePath,
                  cropperData: C,
                  viewport: { width: i.record.width, height: i.record.height },
                },
                a = function (t) {
                  return new Promise(function (n, r) {
                    var o = e.cropperModal,
                      s = t.cropperData,
                      a = function () {
                        o.unbind("imageLoaded", a), o.activate();
                      },
                      l = function () {
                        o.unbind("modal.cancel", l),
                          e._removeLoaderDivElement(),
                          e._enableTabbedControls(),
                          e.enableAllFileUploads(),
                          i.hideLoader(),
                          i.dispatch("customGraphicCropError"),
                          r();
                      },
                      c = function (e, i) {
                        o.unbind("cropImage", c),
                          (i.id = t.id),
                          (i.viewport = t.viewport),
                          n(i);
                      };
                    o.bind("imageLoaded", a),
                      o.bind("modal.cancel", l),
                      o.bind("cropImage", c),
                      o.setViewportDimensions(t.viewport),
                      o.loadImage(
                        {
                          cropperConstraints: { zoom: !1, movement: !1 },
                          existingImageInfo: s,
                        },
                        t.user_image_url
                      );
                  });
                },
                l = function (t) {
                  var n = i.fileInputControl.$fileLabel.find(
                    "span.file-upload-label__control-title"
                  );
                  return (
                    n && n.text("Cropping"),
                    e._addLoaderDivElement(),
                    e._disableTabbedControls(),
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "cropStart",
                      t
                    ),
                    CropperRemote.cropImage(t)
                      .then(function (e) {
                        return (
                          Helpers.GlobalEventTracker.smartTemplateEvent(
                            "cropEnd",
                            { id: e.data.id }
                          ),
                          e.data
                        );
                      })
                      ["catch"](function (e) {
                        return (
                          (e.id = t.id), (e.cropData = t), Promise.reject(e)
                        );
                      })
                  );
                },
                c = function (t) {
                  var n = function (e) {
                    var e = e + "?_timestamp=" + Date.now();
                    return new Promise(function (t, n) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, !0),
                        (i.responseType = "blob"),
                        (i.onload = function () {
                          var e = new FileReader();
                          e.readAsDataURL(i.response),
                            (e.onload = function (e) {
                              t(e.target.result);
                            });
                        }),
                        (i.onerror = function (e) {
                          n(e);
                        }),
                        i.send();
                    });
                  };
                  e._addLoaderDivElement(),
                    e._disableTabbedControls(),
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "localCropper-cropStart",
                      t
                    );
                  var r = i.fileInputControl.$fileLabel.find(
                    "span.file-upload-label__control-title"
                  );
                  r && r.text("Cropping");
                  var o,
                    s = i.getFile(),
                    a = /^data:image/;
                  return (
                    (o =
                      i.getFile() || a.test(i.userImagePath) !== !1
                        ? Promise.resolve(s || i.userImagePath)
                        : n(i.userImagePath)),
                    o
                      .then(function (e) {
                        return CropperLocalCropper.crop(e, t);
                      })
                      .then(function (e) {
                        return (
                          Helpers.GlobalEventTracker.smartTemplateEvent(
                            "localCropper-cropEnd",
                            { id: e.id }
                          ),
                          e
                        );
                      })
                      ["catch"](function (e) {
                        return (
                          (e.id = t.id), (e.cropData = t), Promise.reject(e)
                        );
                      })
                  );
                },
                h = function (t) {
                  var n = i.userImagePath;
                  (i.id = t.id),
                    (i.userImagePath = t.user_image_url),
                    (i.cropParams = t.crop_params),
                    (i.record.hash = i.id),
                    (i.record.layers[0].image = t.cropped_image_url),
                    (i.record.layers[0].visible = !0),
                    i.showDiscardButton(),
                    i.showRepositionButton(),
                    i.hideLoader(),
                    e.enableAllFileUploads(),
                    e._removeLoaderDivElement();
                  var r = i.fileInputControl.$fileLabel.find(
                    "span.file-upload-label__control-title"
                  );
                  return (
                    r && r.text("Cropped!"),
                    setTimeout(function () {
                      i.setState(!0);
                    }, 2e3),
                    e._enableTabbedControls(),
                    i.setUrlParameter(t.id),
                    e.dispatch("customGraphicsUpdate"),
                    i.dispatch("customGraphicChange"),
                    e.dispatch("change", {
                      errorCallback: function (e) {
                        "abort" !== e.statusText &&
                          (i.hideDiscardButton(),
                          i.hideRepositionButton(),
                          400 === e.status && (i.record.layers[0].image = n));
                      },
                      originalDispatcher: i,
                      changedProperty: "image",
                      triggeredByUser: !0,
                    }),
                    t
                  );
                },
                u = function (t) {
                  var n = i.userImagePath;
                  (i.userImagePath = t.user_image_url),
                    (i.cropParams = t.crop_params),
                    (i.record.layers[0].image = t.cropped_image_url),
                    (i.record.layers[0].visible = !0),
                    i.showDiscardButton(),
                    i.showRepositionButton(),
                    e.enableAllFileUploads(),
                    e._removeLoaderDivElement(),
                    e._enableTabbedControls();
                  var r = i.fileInputControl.$fileLabel.find(
                    "span.file-upload-label__control-title"
                  );
                  r && r.text("Cropped!"),
                    setTimeout(function () {
                      i.setState(!0);
                    }, 2e3),
                    i.urlInputControl && i.urlInputControl.hide(),
                    e.dispatch("customGraphicsUpdate"),
                    i.dispatch("customGraphicChange");
                  var o = {
                    errorCallback: function (e) {
                      "abort" !== e.statusText &&
                        (i.hideDiscardButton(),
                        i.hideRepositionButton(),
                        400 === e.status && (i.record.layers[0].image = n));
                    },
                    triggeredByUser: !0,
                  };
                  return e.dispatch("customAssetCropped", o), t;
                },
                d = function (e) {
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "uploadStart",
                      { fileName: e.name }
                    ),
                    CropperRemote.uploadImage(e).then(function (e) {
                      return new Promise(function (t, n) {
                        $.get(e.data.user_image_url).done(t).fail(n);
                      }).then(function (e) {
                        return (
                          Helpers.GlobalEventTracker.smartTemplateEvent(
                            "uploadEnd",
                            { id: e.id }
                          ),
                          e
                        );
                      });
                    })
                  );
                },
                p = function (t) {
                  if (!t) return Promise.reject();
                  (this.cropperError = t),
                    d(i.getFile()).then(
                      function (e) {
                        var t = { s3: e, cropperError: this.cropperError };
                        Helpers.GlobalEventTracker.track(
                          "StageCanvas-ImageIsCorrupted",
                          t
                        );
                      }.bind(this)
                    ),
                    console.log(t.responseText);
                  var n = function (e) {
                    var t;
                    try {
                      t = JSON.parse(e.responseText).error;
                    } catch (n) {
                      t =
                        "Your image is most likely corrupt. Please upload another image.";
                    }
                    return t;
                  };
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent("cropError", {
                      message: n(t),
                      id: t.id,
                    }),
                    e.dispatch("stage.error", {
                      message: n(t),
                      cropData: t.cropData,
                    }),
                    e._removeLoaderDivElement(),
                    e._enableTabbedControls(),
                    e.enableAllFileUploads(),
                    i.hideLoader(),
                    i.dispatch("customGraphicCropError"),
                    Promise.reject()
                  );
                },
                f = null,
                m = function () {
                  f && (f.cancel(), (f = null));
                },
                g = function (e, t, n) {
                  var i = function (e) {
                      return e.length > 0 ? (2 * e.length) / 1024 : 0;
                    },
                    r = {
                      id: t.id,
                      cropParams: t.crop_params,
                      thumbnailSize: i(t.thumbnail_url),
                      croppedImageSize: i(t.cropped_image_url),
                      userImageSize: i(t.user_image_url),
                      userImageFilename: t.user_image_filename,
                      start: n.start,
                      persistResult: t.persistResult || null,
                    };
                  n.end > 0 &&
                    ((r.end = n.end),
                    (r.duration = n.end - n.start),
                    (r.success = n.success)),
                    Helpers.GlobalEventTracker.smartTemplateEvent(e, r);
                },
                y = function () {
                  i.unbind("removeFile", y), m(), i.bind("removeFile", y);
                },
                v = function (e) {
                  "Cancelation Error" === e.message;
                },
                _ = function (t) {
                  m(), y();
                  var n = Date.now();
                  g("localCropper-persistStart", t, { start: n });
                  var r = function (t) {
                      e._notifyErrorMessage(t);
                    },
                    o = function () {
                      return CropperLocalCropper.persist(t, r);
                    };
                  return (
                    (f = P.cancelable(o)()),
                    f
                      .then(function (e) {
                        return (
                          (t.persistResult = e.data),
                          g("localCropper-persistEnd", t, {
                            start: n,
                            end: Date.now(),
                            success: !0,
                          }),
                          e.data
                        );
                      })
                      ["catch"](function (e) {
                        return "Cancelation Error" === e.message
                          ? Promise.reject(e)
                          : (g("localCropper-persistEnd", t, {
                              start: n,
                              end: Date.now(),
                              success: !1,
                            }),
                            (e.id = t.id),
                            (e.cropData = t),
                            Promise.reject(e));
                      })
                      ["finally"](function () {
                        i.unbind("removeFile", y);
                      })
                  );
                },
                b = function (t) {
                  (i.id = t.id),
                    (i.record.hash = i.id),
                    i.setUrlParameter(t.id),
                    (i.record.layers[0].image = t.cropped_image_url),
                    i.dispatch("customGraphicChange"),
                    e.dispatch("change", {
                      errorCallback: function (e) {
                        "abort" !== e.statusText &&
                          (i.hideDiscardButton(),
                          i.hideRepositionButton(),
                          400 === e.status &&
                            (i.record.layers[0].image = previousUserImage));
                      },
                      originalDispatcher: i,
                      changedProperty: "image",
                      triggeredByUser: !0,
                    });
                },
                w = function (e) {
                  var t = this;
                  if (!e) return Promise.reject(new Error("Cancelation Error"));
                  if ("Cancelation Error" === e.message)
                    return Promise.reject(e);
                  var n = "We could not save your image, please try again";
                  try {
                    var i = JSON.parse(e);
                    "Validation" === i.typeError && (n = i.message),
                      (e = new Error(i.message));
                  } catch (r) {
                    return;
                  }
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "persistError",
                      { message: e.responseText, id: e.id }
                    ),
                    t.dispatch("stage.error", {
                      message: n,
                      cropData: e.responseText,
                    }),
                    Promise.reject(e)
                  );
                };
              e.canProcessWithEngine === !0 && e.isMobilePhone === !1
                ? a(S)
                    .then(c)
                    .then(u)
                    ["catch"](p)
                    .then(_)
                    .then(b)
                    ["catch"](w)
                    ["catch"](v)
                : a(S).then(l).then(h)["catch"](p);
            }
          }
        };
        e.stageActionsManager.bind("repositionClicked", s),
          e.leftSideBar.bind("repositionClicked", s),
          e.rightSideBar.bind("repositionClicked", s);
      },
      traceFn: function (e) {
        console.log("StageCanvasCustomGraphicSupport", e);
      },
    },
  }),
  Module("StageCanvasCustomImageSupport")({
    prototype: {
      customImageBindings: function () {
        var e = this,
          t = function (e) {
            console.log("StageCanvasCustomImageSupport", e);
          },
          n = function (n) {
            if (
              (t(event),
              n.data &&
                n.data.componentToInform &&
                "AssetsGrid" === n.data.componentToInform.constructor.className)
            ) {
              if (e.uploadPending === !0)
                return e._notifyWarnMessage(
                  UI.StageBase.GENERIC_UPLOADING_WARN_MESSAGE
                );
              var i = n.data.componentToInform,
                r = n.data.item;
              (e.uploadPending = !0),
                e._addLoaderDivElement(),
                e._disableTabbedControls(),
                r.showWorkingFeedback("Uploading");
              var o = function (t) {
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "uploadStart",
                      { fileName: t.name }
                    ),
                    CropperRemote.uploadImage(t).then(function (t) {
                      return new Promise(function (e, n) {
                        $.get(t.data.user_image_url).done(e).fail(n);
                      }).then(function (t) {
                        return (
                          Helpers.GlobalEventTracker.smartTemplateEvent(
                            "uploadEnd",
                            { id: t.id }
                          ),
                          (e.uploadPending = !1),
                          t
                        );
                      });
                    })
                  );
                },
                s = function (t) {
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "localCropper-uploadStart",
                      { fileName: t.name }
                    ),
                    CropperLocalUploader.upload(t).then(function (t) {
                      return (
                        Helpers.GlobalEventTracker.smartTemplateEvent(
                          "localCropper-uploadEnd",
                          { id: t.id }
                        ),
                        (e.uploadPending = !1),
                        t
                      );
                    })
                  );
                },
                a = function (t) {
                  e.uploadPending = !1;
                  var n = function (e) {
                    var t;
                    try {
                      t = JSON.parse(e.responseText).error;
                    } catch (n) {
                      t = "Couldn't process image, please try again";
                    }
                    return t;
                  };
                  return (
                    r.getRecordLayerImage() &&
                      (r.showDiscardButton(), r.showRepositionButton()),
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "uploadError",
                      { message: n(t), fileName: r.getFile().name }
                    ),
                    e.dispatch("stage.error", { message: n(t) }),
                    e._removeLoaderDivElement(),
                    e._enableTabbedControls(),
                    e.enableAllFileUploads(),
                    Promise.reject()
                  );
                },
                l = function (e) {
                  return (e.cropperData = null), (e.viewport = r.viewport), e;
                },
                c = function (t) {
                  return new Promise(function (n, i) {
                    var r = e.cropperModal,
                      o = function () {
                        r.unbind("imageLoaded", o), r.activate();
                      },
                      s = function () {
                        r.unbind("modal.cancel", s),
                          e._removeLoaderDivElement(),
                          e._enableTabbedControls(),
                          e.enableAllFileUploads(),
                          i();
                      },
                      a = function (e, i) {
                        r.unbind("cropImage", a),
                          (i.id = t.id),
                          (i.viewport = t.viewport),
                          n(i);
                      },
                      l = function (e) {
                        r.unbind("imageLoadError", l),
                          i({
                            responseText: JSON.stringify({
                              error: e.data.message,
                            }),
                            sizeExceeded: e.data.sizeExceeded,
                          });
                      };
                    r.bind("imageLoaded", o),
                      r.bind("modal.cancel", s),
                      r.bind("cropImage", a),
                      r.bind("imageLoadError", l),
                      r.setViewportDimensions(t.viewport),
                      r.loadImage(
                        {
                          cropperConstraints: { zoom: !1, movement: !1 },
                          existingImageInfo: t.cropperData,
                        },
                        t.user_image_url
                      );
                  });
                },
                u = function (t) {
                  return (
                    e._addLoaderDivElement(),
                    e._disableTabbedControls(),
                    r.showWorkingFeedback("Cropping"),
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "cropStart",
                      t
                    ),
                    CropperRemote.cropImage(t)
                      .then(function (e) {
                        return (
                          Helpers.GlobalEventTracker.smartTemplateEvent(
                            "cropEnd",
                            { id: e.data.id }
                          ),
                          e.data
                        );
                      })
                      ["catch"](function (e) {
                        return (
                          (e.id = t.id), (e.cropData = t), Promise.reject(e)
                        );
                      })
                  );
                },
                h = function (t) {
                  return (
                    e._addLoaderDivElement(),
                    e._disableTabbedControls(),
                    r.showWorkingFeedback("Cropping"),
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "localCropper-cropStart",
                      t
                    ),
                    CropperLocalCropper.crop(r.file, t)
                      .then(function (e) {
                        return (
                          Helpers.GlobalEventTracker.smartTemplateEvent(
                            "localCropper-cropEnd",
                            { id: e.id }
                          ),
                          e
                        );
                      })
                      ["catch"](function (e) {
                        return (
                          (e.id = t.id), (e.cropData = t), Promise.reject(e)
                        );
                      })
                  );
                },
                d = function (t) {
                  return (
                    e._removeLoaderDivElement(),
                    e._enableTabbedControls(),
                    i.dispatch("cropSuccess", {
                      id: t.id,
                      croppedImageUrl: t.cropped_image_url,
                      thumbnailUrl: t.thumbnail_url,
                      cropParams: t.crop_params,
                      userImagePath: t.user_image_url,
                      userImageFileName: t.user_image_filename,
                      restoreThumbnailPosition: !0,
                    }),
                    page.flash("Your Custom Upload has Finished!", "success", {
                      autoclose: { milliseconds: 3e3 },
                    }),
                    t
                  );
                },
                p = function (t) {
                  return (
                    e._removeLoaderDivElement(),
                    e._enableTabbedControls(),
                    i.dispatch("localCropSuccess", {
                      id: t.id,
                      croppedImageUrl: t.cropped_image_url,
                      thumbnailUrl: t.thumbnail_url,
                      cropParams: t.crop_params,
                      userImagePath: t.user_image_url,
                      userImageFileName: t.user_image_filename,
                      restoreThumbnailPosition: !0,
                    }),
                    page.flash("Your Custom Upload has Finished!", "success", {
                      autoclose: { milliseconds: 3e3 },
                    }),
                    t
                  );
                },
                f = function (t) {
                  if (!t)
                    return (
                      e.enableAllFileUploads(),
                      r.hideUploadingFeedback(),
                      r.dispatch("resetControl"),
                      Promise.reject()
                    );
                  (this.cropperError = t),
                    this.cropperError.sizeExceeded ||
                      o(r.getFile()).then(
                        function (e) {
                          var t = { s3: e, cropperError: this.cropperError };
                          Helpers.GlobalEventTracker.track(
                            "StageCanvas-ImageIsCorrupted",
                            t
                          );
                        }.bind(this)
                      ),
                    console.log(t.responseText);
                  var n = function (e) {
                    var t;
                    try {
                      t = JSON.parse(e.responseText).error;
                    } catch (n) {
                      t =
                        "Error while uploading, make sure you're online and try again.";
                    }
                    return t;
                  };
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent("cropError", {
                      message: n(t),
                      id: t.id,
                    }),
                    e.dispatch("stage.error", {
                      message: n(t),
                      cropData: t.cropData,
                    }),
                    e._removeLoaderDivElement(),
                    e._enableTabbedControls(),
                    e.enableAllFileUploads(),
                    r.hideUploadingFeedback(),
                    r.dispatch("resetControl"),
                    Promise.reject()
                  );
                },
                m = function (t) {
                  Helpers.GlobalEventTracker.smartTemplateEvent(
                    "localCropper-persistStart",
                    t
                  );
                  var n = function (t) {
                    e._notifyErrorMessage(t);
                  };
                  return CropperLocalCropper.persist(t, n)
                    .then(function (e) {
                      return (
                        Helpers.GlobalEventTracker.smartTemplateEvent(
                          "localCropper-persistEnd",
                          { id: e.id }
                        ),
                        e.data
                      );
                    })
                    ["catch"](function (e) {
                      return (e.id = t.id), (e.cropData = t), Promise.reject(e);
                    });
                },
                g = function (e) {
                  i.dispatch("cropSuccess", {
                    id: e.id,
                    croppedImageUrl: e.cropped_image_url,
                    thumbnailUrl: e.thumbnail_url,
                    cropParams: e.crop_params,
                    userImagePath: e.user_image_url,
                    userImageFileName: e.user_image_filename,
                    restoreThumbnailPosition: !0,
                  });
                },
                v = function (t) {
                  return e._persistReject(t);
                };
              if (e.canProcessWithEngine === !0 && e.isMobilePhone === !1)
                s(r.file)
                  .then(l)
                  ["catch"](a)
                  .then(c)
                  .then(h)
                  .then(p)
                  ["catch"](f)
                  .then(m)
                  .then(g)
                  ["catch"](v);
              else {
                var y = s(r.getFile()).then(l)["catch"](a).then(c),
                  _ = o(r.getFile());
                Promise.all([y, _])
                  .then(function (e) {
                    var t = e[0];
                    return (t.id = e[1].id), Promise.resolve(t);
                  })
                  .then(u)
                  .then(d)
                  ["catch"](f);
              }
            }
          };
        e.bind("customImageUploaded", n);
        var i = function (n) {
          t(n);
          var i = n.data,
            r = e._validateData(
              [
                "viewportData",
                "cropParams",
                "userImagePath",
                "recordHash",
                "graphicItem",
              ],
              i
            );
          if (r.length)
            return e._notifyErrorMessage(
              "Cannot reposition image. Missing data: " + r.join(", ") + "."
            );
          if (e.uploadPending === !0)
            return e._notifyWarnMessage(
              UI.StageBase.GENERIC_UPLOADING_WARN_MESSAGE
            );
          var o = IntegrityCheck.getIntegrityTestCookie(),
            s = !o || "true" === o,
            a = IntegrityCheck.checkCapability(),
            l = {
              id: i.recordHash,
              viewport: i.viewportData,
              cropperData: i.cropParams,
              user_image_url: i.userImagePath,
              highres_url: i.cropParams.highres_url,
            },
            c = function (t) {
              return new Promise(function (n, r) {
                var o = e.cropperModal,
                  s = function () {
                    o.unbind("imageLoaded", s), o.activate();
                  },
                  a = function () {
                    o.unbind("modal.cancel", a), r();
                  },
                  l = function (e, i) {
                    o.unbind("cropImage", l),
                      (i.id = t.id),
                      (i.viewport = t.viewport),
                      (i.highres_url = t.highres_url),
                      n(i);
                  };
                o.bind("imageLoaded", s),
                  o.bind("modal.cancel", a),
                  o.bind("cropImage", l),
                  o.setViewportDimensions(t.viewport);
                var c = e._getFormattedCropParams(t.cropperData);
                i.skipCropParams === !0 && (c = void 0),
                  o.loadImage(
                    {
                      cropperConstraints: { zoom: !1, movement: !1 },
                      existingImageInfo: c,
                    },
                    t.user_image_url
                  );
              });
            },
            u = function (t) {
              return (
                e._addLoaderDivElement(),
                e._disableTabbedControls(),
                i.graphicItem.showFeedbackLayer("Cropping"),
                Helpers.GlobalEventTracker.smartTemplateEvent(
                  "cropStart",
                  Object.assign({}, t)
                ),
                CropperRemoteCropper.crop(t)
                  .then(function (e) {
                    return (
                      Helpers.GlobalEventTracker.smartTemplateEvent("cropEnd", {
                        id: e.data.id,
                      }),
                      e.data
                    );
                  })
                  ["catch"](function (e) {
                    return (e.id = t.id), (e.cropData = t), Promise.reject(e);
                  })
              );
            },
            h = function (t) {
              var n,
                r = function (e) {
                  return (
                    (e = e + "?_timestamp=" + Date.now()),
                    new Promise(function (t, n) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, !0),
                        (i.responseType = "blob"),
                        (i.onload = function () {
                          var e = new FileReader();
                          e.readAsDataURL(i.response),
                            (e.onload = function (e) {
                              t(e.target.result);
                            });
                        }),
                        (i.onerror = function (e) {
                          n(e);
                        }),
                        i.send();
                    })
                  );
                },
                o = /^data:image/;
              return (
                (n =
                  o.test(i.userImagePath) === !1
                    ? r(i.userImagePath)
                    : Promise.resolve(i.userImagePath)),
                e._addLoaderDivElement(),
                e._disableTabbedControls(),
                i.graphicItem.showFeedbackLayer("Cropping"),
                Helpers.GlobalEventTracker.smartTemplateEvent(
                  "localCropper-cropStart",
                  Object.assign({}, t)
                ),
                (t.isPremium = Helpers.App.parseBoolean(
                  i.cropParams.isPremium
                )),
                n
                  .then(function (e) {
                    return CropperLocalCropper.crop(e, t);
                  })
                  .then(function (e) {
                    return (
                      Helpers.GlobalEventTracker.smartTemplateEvent(
                        "localCropper-cropEnd",
                        { id: e.id }
                      ),
                      e
                    );
                  })
                  ["catch"](function (e) {
                    return (e.id = t.id), (e.cropData = t), Promise.reject(e);
                  })
              );
            },
            d = function (t) {
              return (
                e._removeLoaderDivElement(),
                e._enableTabbedControls(),
                i.graphicItem.hideFeedbackLayer(),
                i.graphicItem.repositionFinished(t, i.graphicItem.element),
                t
              );
            },
            p = function (t) {
              return (
                e._removeLoaderDivElement(),
                e._enableTabbedControls(),
                i.graphicItem.hideFeedbackLayer(),
                i.graphicItem.repositionFinished(t, null, !0),
                t
              );
            },
            f = function () {
              return (
                e._removeLoaderDivElement(),
                e._enableTabbedControls(),
                i.graphicItem.hideFeedbackLayer(),
                i.graphicItem.dispatch("resetControl"),
                Promise.reject()
              );
            },
            m = function (t) {
              Helpers.GlobalEventTracker.smartTemplateEvent(
                "localCropper-persistStart",
                t
              );
              var n = function (t) {
                e._notifyErrorMessage(t);
              };
              return CropperLocalCropper.persist(t, n)
                .then(function (e) {
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "localCropper-persistEnd",
                      { id: e.id }
                    ),
                    e.data
                  );
                })
                ["catch"](function (e) {
                  return (e.id = t.id), (e.cropData = t), Promise.reject(e);
                });
            },
            g = function (e) {
              return i.graphicItem.repositionFinished(e), e;
            },
            v = function (t) {
              return e._persistReject(t);
            };
          e.isMobilePhone !== !1 || (s !== !0 && a !== !0)
            ? c(l).then(u).then(d)["catch"](f)
            : c(l).then(h).then(p)["catch"](f).then(m).then(g)["catch"](v);
        };
        e.bind("repositionImage", i);
      },
      _persistReject: function (e) {
        var t = this;
        if (!e) return Promise.reject();
        var n = "We could not save your image, please try again";
        try {
          var i = JSON.parse(e);
          "Validation" === i.typeError && (n = i.message),
            (error = new Error(i.message));
        } catch (r) {
          return;
        }
        return (
          Helpers.GlobalEventTracker.smartTemplateEvent("persistError", {
            message: e.responseText,
            id: e.id,
          }),
          t.dispatch("stage.error", { message: n, cropData: e.responseText }),
          Promise.reject()
        );
      },
    },
  }),
  Module("StageCanvasLibraryImageSupport")({
    prototype: {
      libraryImageBindings: function () {
        var e = this,
          t = function (e) {
            console.log("StageCanvasLibraryImageSupport", e);
          },
          n = function (n) {
            t(n);
            var i = n.data,
              r = this._validateData(
                ["viewportData", "userImagePath", "graphicItem"],
                i
              );
            if (r.length)
              return e._notifyErrorMessage(
                "Cannot reposition image. Missing data: " + r.join(", ") + "."
              );
            if (e.uploadPending === !0)
              return e._notifyWarnMessage(
                UI.StageBase.GENERIC_UPLOADING_WARN_MESSAGE
              );
            var o = IntegrityCheck.getIntegrityTestCookie(),
              s = !o || "true" === o,
              a = IntegrityCheck.checkCapability();
            (e.uploadPending = !0),
              e._addLoaderDivElement(),
              e._disableTabbedControls(),
              i.graphicItem.showFeedbackLayer("Loading");
            var l = {
                viewport: i.viewportData,
                user_image_url: i.userImagePath,
              },
              c = function (t) {
                return (
                  Helpers.GlobalEventTracker.smartTemplateEvent(
                    "uploadLibraryImageStart",
                    { id: i.graphicItem.record.id }
                  ),
                  CropperRemoteUploader.uploadByUrl({
                    image_url: t,
                    image_name: t.split("/").pop(),
                  }).then(function (t) {
                    var n = e._validateData(
                      ["id", "file_name", "user_image_url"],
                      t.data
                    );
                    return n.length
                      ? Promise.reject(
                          "Cannot load image. Missing data " +
                            n.join(", ") +
                            "."
                        )
                      : new Promise(function (e, n) {
                          $.get(t.data.user_image_url).done(e).fail(n);
                        }).then(function (t) {
                          return (
                            Helpers.GlobalEventTracker.smartTemplateEvent(
                              "uploadLibraryImageEnd",
                              { id: t.id }
                            ),
                            (e.uploadPending = !1),
                            t
                          );
                        });
                  })
                );
              },
              u = function (t) {
                return (
                  t && e._notifyErrorMessage(t),
                  (e.uploadPending = !1),
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  i.graphicItem.hideFeedbackLayer(),
                  Promise.reject()
                );
              },
              h = function (t) {
                return new Promise(function (n, i) {
                  var r = e.cropperModal,
                    o = function () {
                      r.unbind("imageLoaded", o), r.activate();
                    },
                    s = function () {
                      r.unbind("modal.cancel", s), i();
                    },
                    a = function (e, i) {
                      r.unbind("cropImage", a), (i.viewport = t.viewport), n(i);
                    };
                  r.bind("imageLoaded", o),
                    r.bind("modal.cancel", s),
                    r.bind("cropImage", a),
                    r.setViewportDimensions(t.viewport),
                    r.loadImage(
                      { cropperConstraints: { zoom: !1, movement: !1 } },
                      t.user_image_url
                    );
                });
              },
              d = function (t) {
                return (
                  e._addLoaderDivElement(),
                  e._disableTabbedControls(),
                  i.graphicItem.showFeedbackLayer("Cropping"),
                  Helpers.GlobalEventTracker.smartTemplateEvent(
                    "cropStart",
                    Object.assign({}, t)
                  ),
                  CropperRemoteCropper.crop(t)
                    .then(function (e) {
                      return (
                        Helpers.GlobalEventTracker.smartTemplateEvent(
                          "cropEnd",
                          { id: e.data.id }
                        ),
                        e.data
                      );
                    })
                    ["catch"](function (e) {
                      return (e.id = t.id), (e.cropData = t), Promise.reject(e);
                    })
                );
              },
              p = function (t) {
                var n,
                  r = function (e) {
                    return (
                      (e = e + "?_timestamp=" + Date.now()),
                      new Promise(function (t, n) {
                        var i = new XMLHttpRequest();
                        i.open("GET", e, !0),
                          (i.responseType = "blob"),
                          (i.onload = function () {
                            var e = new FileReader();
                            e.readAsDataURL(i.response),
                              (e.onload = function (e) {
                                t(e.target.result);
                              });
                          }),
                          (i.onerror = function (e) {
                            n(e);
                          }),
                          i.send();
                      })
                    );
                  },
                  o = /^data:image/;
                return (
                  (n =
                    o.test(i.userImagePath) === !1
                      ? r(i.userImagePath)
                      : Promise.resolve(i.userImagePath)),
                  e._addLoaderDivElement(),
                  e._disableTabbedControls(),
                  i.graphicItem.showFeedbackLayer("Cropping"),
                  Helpers.GlobalEventTracker.smartTemplateEvent(
                    "localCropper-cropStart",
                    Object.assign({}, t)
                  ),
                  n
                    .then(function (e) {
                      return CropperLocalCropper.crop(e, t);
                    })
                    .then(function (e) {
                      return (
                        Helpers.GlobalEventTracker.smartTemplateEvent(
                          "localCropper-cropEnd",
                          { id: e.id }
                        ),
                        e
                      );
                    })
                    ["catch"](function (e) {
                      return (e.id = t.id), (e.cropData = t), Promise.reject(e);
                    })
                );
              },
              f = function (t) {
                return (
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  i.graphicItem.hideFeedbackLayer(),
                  i.graphicItem.repositionFinished(
                    t,
                    i.graphicItem.element,
                    !0
                  ),
                  t
                );
              },
              m = function (t) {
                return (
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  i.graphicItem.hideFeedbackLayer(),
                  i.graphicItem.repositionFinished(t, i.graphicItem.element),
                  t
                );
              },
              g = function (t) {
                return (
                  t && e._notifyErrorMessage(t),
                  e._removeLoaderDivElement(),
                  e._enableTabbedControls(),
                  i.graphicItem.hideFeedbackLayer(),
                  Promise.reject()
                );
              },
              v = function (t) {
                Helpers.GlobalEventTracker.smartTemplateEvent(
                  "localCropper-persistStart",
                  Object.assign({}, t)
                );
                var n = function (t) {
                  e._notifyErrorMessage(t);
                };
                return CropperLocalCropper.persist(t, n)
                  .then(function (e) {
                    return (
                      Helpers.GlobalEventTracker.smartTemplateEvent(
                        "localCropper-persistEnd",
                        { id: e.id }
                      ),
                      e.data
                    );
                  })
                  ["catch"](function (e) {
                    return (e.id = t.id), (e.cropData = t), Promise.reject(e);
                  });
              },
              y = function (e) {
                return (
                  i.graphicItem.repositionFinished(e, i.graphicItem.element), e
                );
              },
              _ = function (t) {
                if (!t) return Promise.reject();
                var n = "We could not save your image, please try again";
                try {
                  var i = JSON.parse(t);
                  "Validation" === i.typeError && (n = i.message);
                } catch (r) {
                  return;
                }
                return (
                  Helpers.GlobalEventTracker.smartTemplateEvent(
                    "persistError",
                    { message: t.responseText, id: t.id }
                  ),
                  e.dispatch("stage.error", {
                    message: n,
                    cropData: t.responseText,
                  }),
                  Promise.reject()
                );
              },
              b = c(i.userImagePath),
              w = h(l);
            e.isMobilePhone !== !1 || (s !== !0 && a !== !0)
              ? Promise.all([b, w])
                  .then(function (e) {
                    var t = e[0],
                      n = e[1];
                    return (
                      (n.id = t.id),
                      (n.highres_url = t.highres_url),
                      (n.isPremium = i.graphicItem.record.isPremium),
                      Promise.resolve(n)
                    );
                  })
                  ["catch"](u)
                  .then(d)
                  .then(m)
                  ["catch"](g)
              : Promise.all([b, w])
                  .then(function (e) {
                    var t = e[0],
                      n = e[1];
                    return (
                      (n.id = t.id),
                      (n.highres_url = t.highres_url),
                      (n.isPremium = i.graphicItem.record.isPremium),
                      Promise.resolve(n)
                    );
                  })
                  ["catch"](u)
                  .then(p)
                  .then(f)
                  ["catch"](g)
                  .then(v)
                  .then(y)
                  ["catch"](_);
          };
        e.bind("repositionLibraryImage", n);
      },
    },
  }),
  Class(UI.SmartTemplate, "Loader").inherits(Widget).includes(BubblingSupport)({
    html: '<div>                <div class="spinner">                    <div class="double-bounce1"></div>                    <div class="double-bounce2"></div>                </div>                <div class="loader-message"></div>           </div>',
    elementClass: "st-loader",
    prototype: {
      init: function (e) {
        var t = this;
        Widget.prototype.init.call(this, e),
          this.element.hide(),
          (this.$message = this.element.find(".loader-message")),
          this.$message.hide(),
          window.addEventListener("resize", function () {
            t.updatePositionAndSize();
          });
      },
      show: function () {
        this.updatePositionAndSize(), this.element.fadeIn(250);
      },
      hide: function () {
        this.element.fadeOut(250), this.hideMessage();
      },
      updateMessage: function (e) {
        this.$message.html(e);
      },
      showMessage: function () {
        this.$message.show();
      },
      hideMessage: function () {
        this.$message.hide();
      },
      updatePositionAndSize: function () {
        var e =
            (this.elementToWrap[0].getBoundingClientRect(),
            this.elementToWrap.position().left + "px"),
          t = this.elementToWrap.position().top,
          n = this.elementToWrap.height() + 1 + "px",
          i = this.elementToWrap.width() + 1 + "px";
        Helpers.App.isMobile() === !0 &&
          ((e = 0), (t = 0), (n = "100%"), (i = "100%")),
          this.element.css({ top: t + "px", width: i, height: n, left: e });
      },
    },
  }),
  Class(UI.SmartTemplate, "CustomGraphicBar")
    .inherits(Widget)
    .includes(
      BubblingSupport,
      GenericDestroySupport
    )({
    elementClass: "custom-graphic-bar",
    html: '    <div>        <div class="show-button icon-container">            <div class="p-icon show-icon"></div>            <div class="icon-label">Show</div>        </div>        <div class="hide-button icon-container">            <div class="p-icon hide-icon"></div>            <div class="icon-label">Hide</div>        </div>        <div class="upload-button icon-container">            <div class="p-icon upload-icon"></div>            <div class="icon-label">Upload</div>        </div>        <div class="replace-button icon-container">            <div class="p-icon replace-icon"></div>            <div class="icon-label">Replace</div>        </div>        <div class="crop-button icon-container">            <div class="p-icon crop-icon"></div>            <div class="icon-label">Crop</div>        </div>        <div class="delete-button icon-container">            <div class="p-icon delete-icon"></div>            <div class="icon-label">Delete</div>        </div>        <div class="color-button icon-container">            <div class="p-icon colordrop-icon"></div>            <div class="icon-label">Color</div>        </div>    </div>',
    prototype: {
      top: 0,
      left: 0,
      hasImage: !1,
      hasPlaceholder: !0,
      colorRecords: null,
      init: function (e) {
        Widget.prototype.init.call(this, e),
          (this.$showButton = this.element.find(".show-button")),
          (this.$hideButton = this.element.find(".hide-button")),
          (this.$uploadButton = this.element.find(".upload-button")),
          (this.$replaceButton = this.element.find(".replace-button")),
          (this.$cropButton = this.element.find(".crop-button")),
          (this.$deleteButton = this.element.find(".delete-button")),
          (this.$colorButton = this.element.find(".color-button")),
          (this.$iconContainer = this.element.find(".icon-container")),
          (this.colorRecords =
            e.colorRecords.length > 0 ? e.colorRecords : null),
          this.setPosition(this.top, this.left),
          this.setState(),
          this._bindings();
      },
      _bindings: function () {
        var e = this;
        this.$showButton.bind("click", function () {
          e.show();
        }),
          this.$hideButton.bind("click", function () {
            e.hide();
          }),
          this.$uploadButton.bind("click", function () {
            e.upload();
          }),
          this.$replaceButton.bind("click", function () {
            e.upload();
          }),
          this.$cropButton.bind("click", function () {
            e.crop();
          }),
          this.$deleteButton.bind("click", function () {
            e.remove();
          }),
          this.$colorButton.bind("click", function (t) {
            t.stopPropagation(), e.deactivate(), e.colorChange();
          });
      },
      colorChange: function () {
        this.dispatch("colorChange", { relatedColor: this.colorRecords[0] });
      },
      hide: function () {
        this.dispatch("hide");
      },
      show: function () {
        this.dispatch("show");
      },
      upload: function () {
        this.dispatch("upload");
      },
      crop: function () {
        this.dispatch("crop");
      },
      remove: function () {
        this.dispatch("remove");
      },
      setPosition: function (e, t) {
        return (
          "undefined" != typeof e && (this.top = e),
          "undefined" != typeof t && (this.left = t),
          this.element.css("top", this.top),
          this.element.css("left", this.left),
          this
        );
      },
      setState: function (e) {
        this.$iconContainer.hide(),
          (this.hasImage = e && e.hasImage),
          (this.hasPlaceholder = e && e.hasPlaceholder),
          this.hasImage === !0
            ? (this.$replaceButton.show(),
              this.$cropButton.show(),
              this.$deleteButton.show())
            : this.hasPlaceholder === !1
            ? (this.$showButton.show(), this.$uploadButton.show())
            : (this.$hideButton.show(), this.$uploadButton.show()),
          this.colorRecords && this.$colorButton.show(),
          this.disableHide && this.$hideButton.hide();
      },
      hasRelatedColorLayer: function () {
        return this.colorRecords ? !0 : !1;
      },
    },
  }),
  Class(UI, "StageOverlayController").includes(
    QuadrantBehaviorSupport,
    ColorLayerMatcher
  )({
    TAP_EDIT_SIZE_X: 15,
    TAP_EDIT_SIZE_Y: 30,
    prototype: {
      _resizeAnimationsHandler: null,
      _resizeAnimationTask: null,
      _scalingFactor: null,
      _overlayMargin: 10,
      _animations: null,
      _matchingColors: null,
      init: function (e) {
        (this._animations = []), (this._matchingColors = []), $.extend(this, e);
      },
      initCustomGraphicAnimations: function (e, t) {
        var n = this;
        n._scalingFactor = t;
        var i = e.filter(function (e) {
          return (
            (e.positioning = n._compensateButtonSize(
              Helpers.App.calcScaledArea(e.getReplacementArea(), t)
            )),
            e.hasImage() === !1 ? !0 : ((n._hasHelperTextDisabled = !0), !1)
          );
        });
        return (
          n._hasHelperTextDisabled !== !0 &&
            this.getHelperTextCenter(
              i,
              this.stageElement.width,
              this.stageElement.height
            ),
          i.forEach(function (e) {
            n.createCustomGraphicAnimation(e);
          }),
          this._bindScrollToShowAnimations(),
          this
        );
      },
      _bindScrollToShowAnimations: function () {
        (this._debouncedScrollHandler = Helpers.App.debounce(
          this._scrollEventHandler.bind(this),
          100
        )),
          $(window).bind("scroll", this._debouncedScrollHandler);
      },
      _compensateButtonSize: function (e) {
        return (
          (e.x = e.x + e.width / 2 - this.constructor.TAP_EDIT_SIZE_X),
          (e.y = e.y + e.height / 2 - this.constructor.TAP_EDIT_SIZE_Y),
          e
        );
      },
      createCustomGraphicAnimation: function (e) {
        var t = this,
          n = t.buildAnimation(e);
        t._animations.push(n),
          "" !== n.textAlignment && n.setZIndex(2),
          t.overlay.appendChild(n).render(t.overlay.getElement());
        var i = function () {
            t._unpauseAnimations(),
              t.removeAnimationArea(n),
              t._resetAnimations();
          },
          r = function () {
            t._disableAllAnimations();
          },
          o = function () {
            t._enableAllAnimations();
          };
        e.bind("customGraphicChange", i),
          e.bind("customGraphicFileLoaded", r),
          e.bind("customGraphicCropError", o);
      },
      _scrollEventHandler: function () {
        this._areAnimationsHidden === !0 && this._showAnimations();
      },
      _resetAnimations: function () {
        var e = this;
        e._animations.forEach(function (e) {
          null !== e.element && e.setAnimationType("");
        });
      },
      _hideAnimations: function () {
        var e = this;
        this._allowAnimationChange !== !1 &&
          ((e._areAnimationsHidden = !0),
          e._animations.forEach(function (e) {
            null !== e.element && e.hide();
          }));
      },
      _showAnimations: function () {
        var e = this;
        this._allowAnimationChange !== !1 &&
          ((e._areAnimationsHidden = !1),
          e._animations.forEach(function (e) {
            null !== e.element && e.show();
          }));
      },
      _disableAllAnimations: function () {
        this._hideAnimations(), this._pauseAnimations();
      },
      _enableAllAnimations: function () {
        this._unpauseAnimations(), this._showAnimations();
      },
      _pauseAnimations: function () {
        this._allowAnimationChange = !1;
      },
      _unpauseAnimations: function () {
        this._allowAnimationChange = !0;
      },
      buildAnimation: function (e) {
        var t = e.positioning,
          n = e.textAlignment ? e.textAlignment : "";
        return new UI.AnimationCircle({
          name: t.name,
          width: t.width,
          height: t.height,
          top: t.y,
          left: t.x,
          textAlignment: n,
        });
      },
      removeAnimationArea: function (e) {
        null !== e.element && e.destroy();
      },
      resizeOverlay: function (e, t) {
        this.overlay.setDimensions(e.width, e.height),
          this.overlay.setPosition(e.top, e.left),
          this.resizeAnimations(t),
          this.deactivateAllControlBar();
      },
      resizeAnimations: function (e) {
        this.overlay
          .getChildrenByClassName("AnimationCircle")
          .forEach(function (t) {
            var n =
                (t.left + t._leftAlignCompensation) * e -
                t._leftAlignCompensation,
              i = t.top * e;
            t.setPosition(i, n);
          });
      },
      buildAnimations: function (e) {
        return e.map(function (e) {
          return new UI.AnimationCircle({
            name: e.name,
            width: e.width,
            height: e.height,
            top: e.y,
            left: e.x,
          });
        });
      },
      createOverlay: function (e) {
        return (
          (this.stageElement = e.stageElement),
          (this.overlay = new UI.SmartTemplate.Overlay({
            name: "stageImageOverlay",
            width: e.width,
            height: e.height,
            left: e.left,
            top: e.top,
            position: e.position,
            cssClass: e.cssClass,
          })),
          this.overlay
        );
      },
      getMatchingColorRecords: function (e) {
        if (void 0 !== e.tag && null !== e.tag) {
          var t = this._getNumber(e.tag) - 1,
            n = this._getGraphicLayers();
          if (void 0 !== n[t]) return [{ colorLayerName: n[t].name }];
        }
        return this._matchingColors.filter(function (t) {
          return t.customLayerName === e.name;
        });
      },
      _matchCustomToColorGraphics: function () {
        var e = this,
          t = e.getCustomGraphicLayers(),
          n = e._getGraphicLayers();
        t.forEach(function (t) {
          e._matchingColors.push(e.getMatchingLayer(t, n));
        });
      },
      _getGraphicLayers: function () {
        var e = Helpers.StageType.getStructureGraphics(),
          t = this._filterByProp(e, "type", "Folder"),
          n = this._filterByProp(t[0].layers, "name", "Graphics");
        return n[0].layers.filter(function (e) {
          return null !== e.color;
        });
      },
      getCustomGraphicLayers: function () {
        var e = Helpers.StageType.getStructureGraphics(),
          t = this._filterByProp(e, "type", "Folder"),
          n = this._filterByProp(t[0].layers, "name", "Graphics");
        return n[0].layers.filter(function (e) {
          return e.name.includes("custom_graphic");
        });
      },
      _getNumber: function (e) {
        var t = e.match(/(\d+)/);
        return t ? parseInt(t[0]) : void 0;
      },
      initCustomGraphicBars: function (e, t) {
        var n = this;
        n._matchCustomToColorGraphics(),
          e.forEach(function (i) {
            var r = Helpers.App.calcScaledArea(i.getReplacementArea(), t),
              o = n.getMatchingColorRecords(i.record),
              s = {
                top: r.y,
                left: r.x,
                name: r.name + ".bar",
                relatedColorLayer: o,
                disableHide: 1 === e.length ? !0 : !1,
              },
              a = n.createCustomGraphicBar(s);
            n.overlay.appendChild(a).render(n.overlay.getElement()),
              a.setState(i.getState()),
              n.repositionCustomGraphicBar(a, r),
              n.customGraphicBarBindings(i, a);
          });
      },
      createCustomGraphicBar: function (e) {
        return new UI.SmartTemplate.CustomGraphicBar({
          name: e.name,
          top: e.top,
          left: e.left,
          colorRecords: e.relatedColorLayer,
          disableHide: e.disableHide,
        });
      },
      customGraphicBarBindings: function (e, t) {
        var n = this;
        t.bind("hide", function () {
          e.triggerRemovePlaceholder(), t.deactivate();
        }),
          t.bind("show", function () {
            e.triggerAddPlaceholder(), t.deactivate();
          }),
          t.bind("upload", function () {
            e.triggerUpload(), t.deactivate(), n._hideAnimations();
          }),
          t.bind("crop", function () {
            e.triggerReposition(), t.deactivate(), n._hideAnimations();
          }),
          t.bind("remove", function () {
            e.triggerRemove(), t.deactivate();
          }),
          e.bind("customGraphicChange", function () {
            t.setState(e.getState()), n.deactivateAllControlBar();
          }),
          e.bind("colorChange", function (e) {
            n.dispatch("colorChange", e.data);
          });
      },
      repositionCustomGraphicBar: function (e, t) {
        var n = this,
          i = e.getElement(),
          r = {
            width: i.outerWidth(),
            height: i.outerHeight(),
            top: i.position().top,
            left: i.position().left,
          },
          o = n.calcControlBarPosition(t, r);
        e.setPosition(o.top, o.left);
      },
      calcControlBarPosition: function (e, t) {
        var n = e.x + e.width / 2,
          i = n - t.width / 2,
          r = this.overlay.getElement(),
          o = { width: r.width(), height: r.height() },
          s = { top: e.y + e.height, left: i },
          a = { width: t.width, height: t.height, left: s.left, top: s.top },
          l = Helpers.App.getOverflow(o, a, this._overlayMargin);
        if (
          (l.left && l.left > 0 && (s.left = s.left + l.left),
          l.right && l.right > 0 && (s.left = s.left - l.right),
          l.bottom && l.bottom > 0)
        ) {
          var c = e.y - t.height,
            u = Helpers.App.getOverflow(
              o,
              { width: t.width, height: t.height, left: s.left, top: c },
              this._overlayMargin
            );
          s.top = u.top && u.top > 0 ? s.top - l.bottom : e.y - t.height;
        }
        return s;
      },
      activateControlBar: function (e) {
        var t = e.name + ".bar",
          n = this.overlay[t];
        "object" == typeof n &&
          "CustomGraphicBar" === n.constructor.className &&
          (this.repositionCustomGraphicBar(n, e),
          n.activate(),
          this._hideAnimations());
      },
      deactivateAllControlBar: function () {
        this.overlay
          .getChildrenByClassName("CustomGraphicBar")
          .forEach(function (e) {
            e.deactivate();
          }),
          this._showAnimations();
      },
      getControlBars: function () {
        return this.overlay.getChildrenByClassName("CustomGraphicBar");
      },
      setScalingFactor: function (e) {
        e && (this._scalingFactor = e);
      },
      getScalingFactor: function () {
        return this._scalingFactor;
      },
    },
  }),
  Class(UI.SmartTemplate, "InteractionControl")
    .inherits(Widget)
    .includes(BubblingSupport)({
    html: '<div>        <div class="hint" style="display: none">            <span class="element-hint">Rollover on anything to move or scale it! <span class="arrow-hint"></span></span>        </div>        <div class="interactive-reset" style="display: none">            <div class="reset-icon"></div> Reset Layout        </div>    </div>',
    elementClass: "interaction-control",
    ARROW_DISPLAY_TIME: 5e3,
    prototype: {
      $resetBtn: null,
      $hint: null,
      $elementHint: null,
      visibleHint: null,
      supportsInteractions: null,
      init: function (e) {
        Widget.prototype.init.call(this, e);
        var t = this;
        (this.$resetBtn = this.element.find(".interactive-reset")),
          (this.$hint = this.element.find(".hint")),
          (this.$elementHint = this.$hint.find(".element-hint")),
          (this.$arrow = this.$elementHint.find(".arrow-hint")),
          (this.visibleHint = !1),
          this.supportsInteractions && this.$hint.show(),
          Helpers.App.isMobileDevice() &&
            this.$elementHint.html(function () {
              return $(this).html().replace("Rollover", "Tap");
            }),
          this.$resetBtn.click(function () {
            t.dispatch("resetInteraction"), t.hideControls();
          }),
          setTimeout(t._hideArrow.bind(this), t.constructor.ARROW_DISPLAY_TIME);
      },
      showControls: function () {
        this.$resetBtn.show(), this._hideHint();
      },
      hideControls: function () {
        this.$resetBtn.hide();
      },
      _hideArrow: function () {
        this.$arrow.hide(300);
      },
      _showHint: function () {
        this.$elementHint.css("display", "inline-block"),
          this.$hint.addClass("fade-in"),
          (this.visibleHint = !0),
          setTimeout(
            function () {
              this.$hint.removeClass("fade-in");
            }.bind(this),
            300
          );
      },
      _hideHint: function () {
        this.$hint.addClass("fade-out"),
          (this.visibleHint = !1),
          setTimeout(
            function () {
              this.$hint.removeClass("fade-out"),
                this.visibleHint || this.$elementHint.css("display", "none");
            }.bind(this),
            300
          );
      },
    },
  }),
  Class(UI.SmartTemplate, "Overlay").inherits(Widget).includes(BubblingSupport)(
    {
      html: "<div></div>",
      elementClass: "overlay-container",
      prototype: {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        init: function (e) {
          Widget.prototype.init.call(this, e),
            this.setDimensions(this.width, this.height),
            this.setPosition(this.top, this.left, this.position);
        },
        setDimensions: function (e, t) {
          return (
            "undefined" != typeof e && (this.width = e),
            "undefined" != typeof t && (this.height = t),
            this.element.width(this.width),
            this.element.height(this.height),
            this
          );
        },
        setPosition: function (e, t, n) {
          return (
            "undefined" != typeof e && (this.top = e),
            "undefined" != typeof t && (this.left = t),
            "undefined" != typeof n && (this.position = n),
            this.element.css("top", (this.top = e)),
            this.element.css("left", this.left),
            this.element.css("position", this.position),
            this
          );
        },
        getDimensions: function () {
          return { width: this.element.width(), height: this.element.height() };
        },
        getChildrenByClassName: function (e) {
          return this.children.filter(function (t) {
            return t.constructor.className === e;
          });
        },
      },
    }
  ),
  Class(UI, "AnimationCircle")
    .inherits(Widget)
    .includes(
      NodeSupport,
      BubblingSupport
    )({
    html: "<div></div>",
    EXPAND_RIGHT_SVG:
      '<svg id="etj075u21wwl1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 101 30" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><style><![CDATA[#etj075u21wwl4_ts {animation: etj075u21wwl4_ts__ts 10000ms linear infinite normal forwards}@keyframes etj075u21wwl4_ts__ts { 0% {transform: translate(15px,15px) scale(0.050000,0.050000)} 2.74% {transform: translate(15px,15px) scale(1,1)} 45% {transform: translate(15px,15px) scale(1,1)} 48% {transform: translate(15px,15px) scale(0.050000,0.050000)} 100% {transform: translate(15px,15px) scale(0.050000,0.050000)} }#etj075u21wwl4 {animation: etj075u21wwl4_c_o 10000ms linear infinite normal forwards}@keyframes etj075u21wwl4_c_o { 0% {opacity: 0} 2.74% {opacity: 1} 45% {opacity: 1} 48% {opacity: 0} 100% {opacity: 0} }#etj075u21wwl5 {animation: etj075u21wwl5__sz 10000ms linear infinite normal forwards}@keyframes etj075u21wwl5__sz { 0% {width: 30px;height: 30px} 9% {width: 30px;height: 30px} 12.22% {width: 101px;height: 30px} 36.36% {width: 101px;height: 30px} 40% {width: 30px;height: 30px} 100% {width: 30px;height: 30px} }#etj075u21wwl6 {animation: etj075u21wwl6_c_o 10000ms linear infinite normal forwards}@keyframes etj075u21wwl6_c_o { 0% {opacity: 0} 2.74% {opacity: 1} 45% {opacity: 1} 48% {opacity: 0} 100% {opacity: 0} }#etj075u21wwl8 {animation: etj075u21wwl8_c_o 10000ms linear infinite normal forwards}@keyframes etj075u21wwl8_c_o { 0% {opacity: 0} 12.22% {opacity: 0} 16.36% {opacity: 1} 35% {opacity: 1} 38.18% {opacity: 0} 100% {opacity: 0} }]]></style><g id="etj075u21wwl2" clip-path="url(#etj075u21wwl18)"><g id="etj075u21wwl3"><g id="etj075u21wwl4_ts" transform="translate(15,15) scale(0.050000,0.050000)"><g id="etj075u21wwl4" transform="translate(-15,-15)" opacity="0"><rect id="etj075u21wwl5" width="30" height="30" rx="15" ry="15" fill="rgb(0,0,0)" fill-opacity="0.6" stroke="none" stroke-width="1"/></g></g><g id="etj075u21wwl6" opacity="0"><path id="etj075u21wwl7" d="M10.606600,9.500000C10.606600,10.134000,10.835900,10.712900,11.213700,11.153600L11.213700,9.500000C11.213700,8.464470,12.029200,7.625000,13.035200,7.625000C14.041100,7.625000,14.856600,8.464470,14.856600,9.500000L14.856600,11.153600C15.234500,10.712900,15.463700,10.134000,15.463700,9.500000C15.463700,8.119290,14.376400,7,13.035200,7C11.693900,7,10.606600,8.119290,10.606600,9.500000ZM10,16.700000C10,15.935600,10.397900,15.219800,11.006800,14.647600C11.221900,14.445500,11.522400,14.192700,11.822700,14.006400L11.822700,9.500000C11.822700,8.809640,12.366300,8.250000,13.036900,8.250000C13.707600,8.250000,14.251200,8.809640,14.251200,9.500000L14.251200,12.167200C14.429800,12.060900,14.637200,12,14.858400,12C15.388100,12,15.838500,12.349100,16.004500,12.836000C16.197600,12.702700,16.429900,12.625000,16.679800,12.625000C17.209500,12.625000,17.659900,12.974100,17.825900,13.461000C18.019000,13.327700,18.251300,13.250000,18.501200,13.250000C19.171900,13.250000,19.715500,13.809600,19.715500,14.500000L19.715500,16.687500C19.715500,17.812500,19.351400,18.971400,19.022000,20.020100C18.749800,20.886600,18.501200,21.677800,18.501200,22.312500C18.501200,22.485100,18.365300,22.625000,18.197700,22.625000C18.030000,22.625000,17.894100,22.485100,17.894100,22.312500C17.894100,21.545100,18.163900,20.706000,18.449200,19.818900C18.769100,18.824300,19.108400,17.769400,19.108400,16.687500L19.108400,14.500000C19.108400,14.154800,18.836600,13.875000,18.501200,13.875000C18.165900,13.875000,17.894100,14.154800,17.894100,14.500000L17.894100,15.437500C17.894100,15.610100,17.758200,15.750000,17.590500,15.750000C17.422900,15.750000,17.286900,15.610100,17.286900,15.437500L17.286900,13.875000C17.286900,13.529800,17.015100,13.250000,16.679800,13.250000C16.344500,13.250000,16.072700,13.529800,16.072700,13.875000L16.072700,14.812500C16.072700,14.985100,15.936700,15.125000,15.769100,15.125000C15.601400,15.125000,15.465500,14.985100,15.465500,14.812500L15.465500,13.250000C15.465500,12.904800,15.193700,12.625000,14.858400,12.625000C14.523100,12.625000,14.251200,12.904800,14.251200,13.250000L14.251200,14.812500C14.251200,14.985100,14.115300,15.125000,13.947700,15.125000C13.780000,15.125000,13.644100,14.985100,13.644100,14.812500L13.644100,9.500000C13.644100,9.154820,13.372300,8.875000,13.036900,8.875000C12.701600,8.875000,12.429800,9.154820,12.429800,9.500000L12.429800,16.687500C12.429800,16.891600,12.295000,17,12.125000,17C11.961100,17,11.822700,16.862500,11.822700,16.687500L11.821400,14.764200C11.664500,14.886400,11.512500,15.016400,11.421700,15.103900C10.908000,15.598900,10.607100,16.139000,10.607100,16.700000L10.607100,17.630700C10.607100,18.437000,11.564100,19.998600,11.765900,20.327800L11.774700,20.342200C12.036800,20.770200,12.644300,21.676300,12.972700,22.121900C13.074700,22.260300,13.050100,22.454900,12.917300,22.560200C12.784400,22.665400,12.593600,22.641200,12.491500,22.503100C12.074500,21.938200,11.564700,21.180400,11.261100,20.675500C11.250200,20.657400,11.236300,20.634700,11.219800,20.607600C10.953300,20.170100,10,18.605200,10,17.630700L10,16.700000Z" clip-rule="evenodd" fill="rgb(255,255,255)" fill-rule="evenodd" stroke="none" stroke-width="1"/></g><g id="etj075u21wwl8" opacity="0"><path id="etj075u21wwl9" d="M31.482000,9.564000L31.482000,10.558000L28.934000,10.558000L28.934000,19L27.800000,19L27.800000,10.558000L25.252000,10.558000L25.252000,9.564000L31.482000,9.564000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="etj075u21wwl10" d="M36.597900,15.724000L35.365900,15.724000C34.768600,15.724000,34.320600,15.840700,34.021900,16.074000C33.723300,16.307300,33.573900,16.601300,33.573900,16.956000C33.573900,17.310700,33.690600,17.600000,33.923900,17.824000C34.157300,18.038700,34.497900,18.146000,34.945900,18.146000C35.449900,18.146000,35.851300,18.006000,36.149900,17.726000C36.448600,17.436700,36.597900,17.072700,36.597900,16.634000L36.597900,15.724000ZM32.929900,13.386000L32.929900,12.280000C33.461900,11.953300,34.161900,11.790000,35.029900,11.790000C36.812600,11.790000,37.703900,12.695300,37.703900,14.506000L37.703900,19L36.611900,19L36.611900,18.160000C36.247900,18.766700,35.585300,19.070000,34.623900,19.070000C33.961300,19.070000,33.424600,18.874000,33.013900,18.482000C32.612600,18.090000,32.411900,17.595300,32.411900,16.998000C32.411900,16.316700,32.668600,15.789300,33.181900,15.416000C33.704600,15.033300,34.413900,14.842000,35.309900,14.842000L36.597900,14.842000L36.597900,14.478000C36.597900,13.918000,36.471900,13.498000,36.219900,13.218000C35.967900,12.928700,35.543300,12.784000,34.945900,12.784000C34.189900,12.784000,33.517900,12.984700,32.929900,13.386000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="etj075u21wwl11" d="M42.788500,18.104000C43.385900,18.104000,43.875900,17.870700,44.258500,17.404000C44.641200,16.928000,44.832500,16.256000,44.832500,15.388000C44.832500,14.613300,44.645900,13.988000,44.272500,13.512000C43.899200,13.036000,43.427900,12.798000,42.858500,12.798000C42.289200,12.798000,41.794500,13.008000,41.374500,13.428000C40.963900,13.838700,40.758500,14.515300,40.758500,15.458000C40.758500,16.363300,40.968500,17.030700,41.388500,17.460000C41.808500,17.889300,42.275200,18.104000,42.788500,18.104000ZM40.758500,11.902000L40.758500,12.980000C41.253200,12.186700,41.985900,11.790000,42.956500,11.790000C43.899200,11.790000,44.636500,12.135300,45.168500,12.826000C45.709900,13.507300,45.980500,14.361300,45.980500,15.388000C45.980500,16.480000,45.695900,17.376000,45.126500,18.076000C44.566500,18.766700,43.833900,19.112000,42.928500,19.112000C41.995200,19.112000,41.271900,18.715300,40.758500,17.922000L40.758500,21.758000L39.666500,21.758000L39.666500,11.902000L40.758500,11.902000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="etj075u21wwl12" d="M52.553900,12.798000L52.553900,16.956000C52.553900,17.712000,52.908500,18.090000,53.617900,18.090000C53.981900,18.090000,54.303900,17.982700,54.583900,17.768000L54.583900,18.818000C54.275900,18.986000,53.930500,19.070000,53.547900,19.070000C52.147900,19.070000,51.447900,18.356000,51.447900,16.928000L51.447900,12.798000L50.313900,12.798000L50.313900,11.902000L51.447900,11.902000L51.447900,10.138000L52.553900,10.138000L52.553900,11.902000L54.513900,11.902000L54.513900,12.798000L52.553900,12.798000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="etj075u21wwl13" d="M59.079800,19.126000C58.062500,19.126000,57.255200,18.785300,56.657800,18.104000C56.069800,17.413300,55.775800,16.545300,55.775800,15.500000C55.775800,14.445300,56.079200,13.568000,56.685800,12.868000C57.301800,12.158700,58.099800,11.804000,59.079800,11.804000C60.153200,11.804000,60.979200,12.149300,61.557800,12.840000C62.145800,13.530700,62.439800,14.408000,62.439800,15.472000C62.439800,16.526700,62.141200,17.399300,61.543800,18.090000C60.946500,18.780700,60.125200,19.126000,59.079800,19.126000ZM59.079800,12.784000C58.407800,12.784000,57.880500,13.045300,57.497800,13.568000C57.115200,14.090700,56.923800,14.730000,56.923800,15.486000C56.923800,16.223300,57.119800,16.853300,57.511800,17.376000C57.903800,17.889300,58.426500,18.146000,59.079800,18.146000C59.789200,18.146000,60.335200,17.894000,60.717800,17.390000C61.100500,16.876700,61.291800,16.242000,61.291800,15.486000C61.291800,14.702000,61.109800,14.058000,60.745800,13.554000C60.381800,13.040700,59.826500,12.784000,59.079800,12.784000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="etj075u21wwl14" d="M71.997100,14.996000L71.997100,14.716000C71.997100,14.128000,71.838500,13.661300,71.521100,13.316000C71.203800,12.961300,70.765100,12.784000,70.205100,12.784000C69.673100,12.784000,69.220500,12.975300,68.847100,13.358000C68.473800,13.740700,68.254500,14.286700,68.189100,14.996000L71.997100,14.996000ZM72.655100,17.600000L72.655100,18.636000C72.104500,18.925300,71.432500,19.070000,70.639100,19.070000C69.565800,19.070000,68.697800,18.743300,68.035100,18.090000C67.381800,17.427300,67.055100,16.554700,67.055100,15.472000C67.055100,14.342700,67.349100,13.451300,67.937100,12.798000C68.525100,12.144700,69.281100,11.818000,70.205100,11.818000C71.091800,11.818000,71.796500,12.102700,72.319100,12.672000C72.841800,13.241300,73.103100,14.048700,73.103100,15.094000C73.103100,15.392700,73.079800,15.668000,73.033100,15.920000L68.189100,15.920000C68.273100,16.620000,68.539100,17.156700,68.987100,17.530000C69.435100,17.903300,70.023100,18.090000,70.751100,18.090000C71.544500,18.090000,72.179100,17.926700,72.655100,17.600000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="etj075u21wwl15" d="M77.491600,18.104000C78.070300,18.104000,78.560300,17.889300,78.961600,17.460000C79.372300,17.030700,79.577600,16.344700,79.577600,15.402000C79.577600,14.506000,79.367600,13.848000,78.947600,13.428000C78.527600,13.008000,78.065600,12.798000,77.561600,12.798000C76.973600,12.798000,76.483600,13.036000,76.091600,13.512000C75.708900,13.978700,75.517600,14.650700,75.517600,15.528000C75.517600,16.293300,75.704300,16.914000,76.077600,17.390000C76.450900,17.866000,76.922300,18.104000,77.491600,18.104000ZM79.577600,9.102000L80.683600,9.102000L80.683600,19L79.577600,19L79.577600,17.950000C79.073600,18.724700,78.345600,19.112000,77.393600,19.112000C76.450900,19.112000,75.708900,18.762000,75.167600,18.062000C74.635600,17.362000,74.369600,16.512700,74.369600,15.514000C74.369600,14.403300,74.654300,13.507300,75.223600,12.826000C75.792900,12.135300,76.525600,11.790000,77.421600,11.790000C78.345600,11.790000,79.064300,12.186700,79.577600,12.980000L79.577600,9.102000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="etj075u21wwl16" d="M82.789000,19L82.789000,11.902000L83.895000,11.902000L83.895000,19L82.789000,19ZM82.817000,10.194000C82.686300,10.054000,82.621000,9.881330,82.621000,9.676000C82.621000,9.470670,82.686300,9.298000,82.817000,9.158000C82.957000,9.018000,83.129600,8.948000,83.335000,8.948000C83.540300,8.948000,83.713000,9.018000,83.853000,9.158000C83.993000,9.298000,84.063000,9.470670,84.063000,9.676000C84.063000,9.881330,83.993000,10.054000,83.853000,10.194000C83.713000,10.324700,83.540300,10.390000,83.335000,10.390000C83.129600,10.390000,82.957000,10.324700,82.817000,10.194000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="etj075u21wwl17" d="M87.526500,12.798000L87.526500,16.956000C87.526500,17.712000,87.881200,18.090000,88.590500,18.090000C88.954500,18.090000,89.276500,17.982700,89.556500,17.768000L89.556500,18.818000C89.248500,18.986000,88.903200,19.070000,88.520500,19.070000C87.120500,19.070000,86.420500,18.356000,86.420500,16.928000L86.420500,12.798000L85.286500,12.798000L85.286500,11.902000L86.420500,11.902000L86.420500,10.138000L87.526500,10.138000L87.526500,11.902000L89.486500,11.902000L89.486500,12.798000L87.526500,12.798000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/></g></g><clipPath id="etj075u21wwl18"><rect id="etj075u21wwl19" width="101" height="30" rx="0" ry="0" fill="rgb(255,255,255)" stroke="none" stroke-width="1"/></clipPath></g></svg>',
    EXPAND_LEFT_SVG:
      '<svg id="ef8lcdyb1fsm1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 101 30" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><style><![CDATA[#ef8lcdyb1fsm4_ts {animation: ef8lcdyb1fsm4_ts__ts 10000ms linear infinite normal forwards}@keyframes ef8lcdyb1fsm4_ts__ts { 0% {transform: translate(86px,15px) scale(0.050000,0.050000)} 2.74% {transform: translate(86px,15px) scale(1,1)} 45% {transform: translate(86px,15px) scale(1,1)} 48% {transform: translate(86px,15px) scale(0.050000,0.050000)} 100% {transform: translate(86px,15px) scale(0.050000,0.050000)} }#ef8lcdyb1fsm4 {animation: ef8lcdyb1fsm4_c_o 10000ms linear infinite normal forwards}@keyframes ef8lcdyb1fsm4_c_o { 0% {opacity: 0} 2.74% {opacity: 1} 45% {opacity: 1} 48% {opacity: 0} 100% {opacity: 0} }#ef8lcdyb1fsm5 {animation: ef8lcdyb1fsm5__sz 10000ms linear infinite normal forwards}@keyframes ef8lcdyb1fsm5__sz { 0% {width: 30px;height: 30px} 9% {width: 30px;height: 30px} 12.22% {width: 101px;height: 30px} 36.36% {width: 101px;height: 30px} 40% {width: 30px;height: 30px} 100% {width: 30px;height: 30px} }#ef8lcdyb1fsm6 {animation: ef8lcdyb1fsm6_c_o 10000ms linear infinite normal forwards}@keyframes ef8lcdyb1fsm6_c_o { 0% {opacity: 0} 2.74% {opacity: 1} 45% {opacity: 1} 48% {opacity: 0} 100% {opacity: 0} }#ef8lcdyb1fsm8 {animation: ef8lcdyb1fsm8_c_o 10000ms linear infinite normal forwards}@keyframes ef8lcdyb1fsm8_c_o { 0% {opacity: 0} 12.22% {opacity: 0} 16.36% {opacity: 1} 35% {opacity: 1} 38.18% {opacity: 0} 100% {opacity: 0} }]]></style><g id="ef8lcdyb1fsm2" clip-path="url(#ef8lcdyb1fsm18)"><g id="ef8lcdyb1fsm3"><g id="ef8lcdyb1fsm4_ts" transform="translate(86,15) scale(0.050000,0.050000)"><g id="ef8lcdyb1fsm4" transform="translate(-86,-15)" opacity="0"><rect id="ef8lcdyb1fsm5" width="30" height="30" rx="15" ry="15" transform="matrix(-1 0 -0 -1 101 30.00000000000001)" fill="rgb(0,0,0)" fill-opacity="0.6" stroke="none" stroke-width="1"/></g></g><g id="ef8lcdyb1fsm6" opacity="0"><path id="ef8lcdyb1fsm7" d="M81.606600,9.500000C81.606600,10.134000,81.835900,10.712900,82.213700,11.153600L82.213700,9.500000C82.213700,8.464470,83.029200,7.625000,84.035200,7.625000C85.041100,7.625000,85.856600,8.464470,85.856600,9.500000L85.856600,11.153600C86.234500,10.712900,86.463700,10.134000,86.463700,9.500000C86.463700,8.119290,85.376400,7,84.035200,7C82.693900,7,81.606600,8.119290,81.606600,9.500000ZM81,16.700000C81,15.935600,81.397900,15.219800,82.006800,14.647600C82.221900,14.445500,82.522400,14.192700,82.822700,14.006400L82.822700,9.500000C82.822700,8.809640,83.366300,8.250000,84.036900,8.250000C84.707600,8.250000,85.251200,8.809640,85.251200,9.500000L85.251200,12.167200C85.429800,12.060900,85.637200,12,85.858400,12C86.388100,12,86.838500,12.349100,87.004500,12.836000C87.197600,12.702700,87.429900,12.625000,87.679800,12.625000C88.209500,12.625000,88.659900,12.974100,88.825900,13.461000C89.019000,13.327700,89.251300,13.250000,89.501200,13.250000C90.171900,13.250000,90.715500,13.809600,90.715500,14.500000L90.715500,16.687500C90.715500,17.812500,90.351400,18.971400,90.022000,20.020100C89.749800,20.886600,89.501200,21.677800,89.501200,22.312500C89.501200,22.485100,89.365300,22.625000,89.197700,22.625000C89.030000,22.625000,88.894100,22.485100,88.894100,22.312500C88.894100,21.545100,89.163900,20.706000,89.449200,19.818900C89.769100,18.824300,90.108400,17.769400,90.108400,16.687500L90.108400,14.500000C90.108400,14.154800,89.836600,13.875000,89.501200,13.875000C89.165900,13.875000,88.894100,14.154800,88.894100,14.500000L88.894100,15.437500C88.894100,15.610100,88.758200,15.750000,88.590500,15.750000C88.422900,15.750000,88.286900,15.610100,88.286900,15.437500L88.286900,13.875000C88.286900,13.529800,88.015100,13.250000,87.679800,13.250000C87.344500,13.250000,87.072700,13.529800,87.072700,13.875000L87.072700,14.812500C87.072700,14.985100,86.936700,15.125000,86.769100,15.125000C86.601400,15.125000,86.465500,14.985100,86.465500,14.812500L86.465500,13.250000C86.465500,12.904800,86.193700,12.625000,85.858400,12.625000C85.523100,12.625000,85.251200,12.904800,85.251200,13.250000L85.251200,14.812500C85.251200,14.985100,85.115300,15.125000,84.947700,15.125000C84.780000,15.125000,84.644100,14.985100,84.644100,14.812500L84.644100,9.500000C84.644100,9.154820,84.372300,8.875000,84.036900,8.875000C83.701600,8.875000,83.429800,9.154820,83.429800,9.500000L83.429800,16.687500C83.429800,16.891600,83.295000,17,83.125000,17C82.961100,17,82.822700,16.862500,82.822700,16.687500L82.821400,14.764200C82.664500,14.886400,82.512500,15.016400,82.421700,15.103900C81.908000,15.598900,81.607100,16.139000,81.607100,16.700000L81.607100,17.630700C81.607100,18.437000,82.564100,19.998600,82.765900,20.327800L82.774700,20.342200C83.036800,20.770200,83.644300,21.676300,83.972700,22.121900C84.074700,22.260300,84.050100,22.454900,83.917300,22.560200C83.784400,22.665400,83.593600,22.641200,83.491500,22.503100C83.074500,21.938200,82.564700,21.180400,82.261100,20.675500C82.250200,20.657400,82.236300,20.634700,82.219800,20.607600C81.953300,20.170100,81,18.605200,81,17.630700L81,16.700000Z" clip-rule="evenodd" fill="rgb(255,255,255)" fill-rule="evenodd" stroke="none" stroke-width="1"/></g><g id="ef8lcdyb1fsm8" opacity="0"><path id="ef8lcdyb1fsm9" d="M17.230000,9.616000L17.230000,10.610000L14.682000,10.610000L14.682000,19.052000L13.548000,19.052000L13.548000,10.610000L11,10.610000L11,9.616000L17.230000,9.616000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="ef8lcdyb1fsm10" d="M22.345900,15.776000L21.113900,15.776000C20.516600,15.776000,20.068600,15.892700,19.769900,16.126000C19.471200,16.359300,19.321900,16.653300,19.321900,17.008000C19.321900,17.362700,19.438600,17.652000,19.671900,17.876000C19.905200,18.090700,20.245900,18.198000,20.693900,18.198000C21.197900,18.198000,21.599200,18.058000,21.897900,17.778000C22.196600,17.488700,22.345900,17.124700,22.345900,16.686000L22.345900,15.776000ZM18.677900,13.438000L18.677900,12.332000C19.209900,12.005300,19.909900,11.842000,20.777900,11.842000C22.560600,11.842000,23.451900,12.747300,23.451900,14.558000L23.451900,19.052000L22.359900,19.052000L22.359900,18.212000C21.995900,18.818700,21.333200,19.122000,20.371900,19.122000C19.709200,19.122000,19.172600,18.926000,18.761900,18.534000C18.360600,18.142000,18.159900,17.647300,18.159900,17.050000C18.159900,16.368700,18.416600,15.841300,18.929900,15.468000C19.452600,15.085300,20.161900,14.894000,21.057900,14.894000L22.345900,14.894000L22.345900,14.530000C22.345900,13.970000,22.219900,13.550000,21.967900,13.270000C21.715900,12.980700,21.291200,12.836000,20.693900,12.836000C19.937900,12.836000,19.265900,13.036700,18.677900,13.438000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="ef8lcdyb1fsm11" d="M28.536500,18.156000C29.133900,18.156000,29.623900,17.922700,30.006500,17.456000C30.389200,16.980000,30.580500,16.308000,30.580500,15.440000C30.580500,14.665300,30.393900,14.040000,30.020500,13.564000C29.647200,13.088000,29.175900,12.850000,28.606500,12.850000C28.037200,12.850000,27.542500,13.060000,27.122500,13.480000C26.711900,13.890700,26.506500,14.567300,26.506500,15.510000C26.506500,16.415300,26.716500,17.082700,27.136500,17.512000C27.556500,17.941300,28.023200,18.156000,28.536500,18.156000ZM26.506500,11.954000L26.506500,13.032000C27.001200,12.238700,27.733900,11.842000,28.704500,11.842000C29.647200,11.842000,30.384500,12.187300,30.916500,12.878000C31.457900,13.559300,31.728500,14.413300,31.728500,15.440000C31.728500,16.532000,31.443900,17.428000,30.874500,18.128000C30.314500,18.818700,29.581900,19.164000,28.676500,19.164000C27.743200,19.164000,27.019900,18.767300,26.506500,17.974000L26.506500,21.810000L25.414500,21.810000L25.414500,11.954000L26.506500,11.954000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="ef8lcdyb1fsm12" d="M38.301900,12.850000L38.301900,17.008000C38.301900,17.764000,38.656500,18.142000,39.365900,18.142000C39.729900,18.142000,40.051900,18.034700,40.331900,17.820000L40.331900,18.870000C40.023900,19.038000,39.678500,19.122000,39.295900,19.122000C37.895900,19.122000,37.195900,18.408000,37.195900,16.980000L37.195900,12.850000L36.061900,12.850000L36.061900,11.954000L37.195900,11.954000L37.195900,10.190000L38.301900,10.190000L38.301900,11.954000L40.261900,11.954000L40.261900,12.850000L38.301900,12.850000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="ef8lcdyb1fsm13" d="M44.827800,19.178000C43.810500,19.178000,43.003200,18.837300,42.405800,18.156000C41.817800,17.465300,41.523800,16.597300,41.523800,15.552000C41.523800,14.497300,41.827200,13.620000,42.433800,12.920000C43.049800,12.210700,43.847800,11.856000,44.827800,11.856000C45.901200,11.856000,46.727200,12.201300,47.305800,12.892000C47.893800,13.582700,48.187800,14.460000,48.187800,15.524000C48.187800,16.578700,47.889200,17.451300,47.291800,18.142000C46.694500,18.832700,45.873200,19.178000,44.827800,19.178000ZM44.827800,12.836000C44.155800,12.836000,43.628500,13.097300,43.245800,13.620000C42.863200,14.142700,42.671800,14.782000,42.671800,15.538000C42.671800,16.275300,42.867800,16.905300,43.259800,17.428000C43.651800,17.941300,44.174500,18.198000,44.827800,18.198000C45.537200,18.198000,46.083200,17.946000,46.465800,17.442000C46.848500,16.928700,47.039800,16.294000,47.039800,15.538000C47.039800,14.754000,46.857800,14.110000,46.493800,13.606000C46.129800,13.092700,45.574500,12.836000,44.827800,12.836000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="ef8lcdyb1fsm14" d="M57.745100,15.048000L57.745100,14.768000C57.745100,14.180000,57.586500,13.713300,57.269100,13.368000C56.951800,13.013300,56.513100,12.836000,55.953100,12.836000C55.421100,12.836000,54.968500,13.027300,54.595100,13.410000C54.221800,13.792700,54.002500,14.338700,53.937100,15.048000L57.745100,15.048000ZM58.403100,17.652000L58.403100,18.688000C57.852500,18.977300,57.180500,19.122000,56.387100,19.122000C55.313800,19.122000,54.445800,18.795300,53.783100,18.142000C53.129800,17.479300,52.803100,16.606700,52.803100,15.524000C52.803100,14.394700,53.097100,13.503300,53.685100,12.850000C54.273100,12.196700,55.029100,11.870000,55.953100,11.870000C56.839800,11.870000,57.544500,12.154700,58.067100,12.724000C58.589800,13.293300,58.851100,14.100700,58.851100,15.146000C58.851100,15.444700,58.827800,15.720000,58.781100,15.972000L53.937100,15.972000C54.021100,16.672000,54.287100,17.208700,54.735100,17.582000C55.183100,17.955300,55.771100,18.142000,56.499100,18.142000C57.292500,18.142000,57.927100,17.978700,58.403100,17.652000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="ef8lcdyb1fsm15" d="M63.239600,18.156000C63.818200,18.156000,64.308200,17.941300,64.709600,17.512000C65.120200,17.082700,65.325600,16.396700,65.325600,15.454000C65.325600,14.558000,65.115600,13.900000,64.695600,13.480000C64.275600,13.060000,63.813600,12.850000,63.309600,12.850000C62.721600,12.850000,62.231600,13.088000,61.839600,13.564000C61.456900,14.030700,61.265600,14.702700,61.265600,15.580000C61.265600,16.345300,61.452200,16.966000,61.825600,17.442000C62.198900,17.918000,62.670200,18.156000,63.239600,18.156000ZM65.325600,9.154000L66.431600,9.154000L66.431600,19.052000L65.325600,19.052000L65.325600,18.002000C64.821600,18.776700,64.093600,19.164000,63.141600,19.164000C62.198900,19.164000,61.456900,18.814000,60.915600,18.114000C60.383600,17.414000,60.117600,16.564700,60.117600,15.566000C60.117600,14.455300,60.402200,13.559300,60.971600,12.878000C61.540900,12.187300,62.273600,11.842000,63.169600,11.842000C64.093600,11.842000,64.812200,12.238700,65.325600,13.032000L65.325600,9.154000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="ef8lcdyb1fsm16" d="M68.536900,19.052000L68.536900,11.954000L69.642900,11.954000L69.642900,19.052000L68.536900,19.052000ZM68.564900,10.246000C68.434300,10.106000,68.368900,9.933330,68.368900,9.728000C68.368900,9.522670,68.434300,9.350000,68.564900,9.210000C68.704900,9.070000,68.877600,9,69.082900,9C69.288300,9,69.460900,9.070000,69.600900,9.210000C69.740900,9.350000,69.810900,9.522670,69.810900,9.728000C69.810900,9.933330,69.740900,10.106000,69.600900,10.246000C69.460900,10.376700,69.288300,10.442000,69.082900,10.442000C68.877600,10.442000,68.704900,10.376700,68.564900,10.246000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/><path id="ef8lcdyb1fsm17" d="M73.274500,12.850000L73.274500,17.008000C73.274500,17.764000,73.629200,18.142000,74.338500,18.142000C74.702500,18.142000,75.024500,18.034700,75.304500,17.820000L75.304500,18.870000C74.996500,19.038000,74.651200,19.122000,74.268500,19.122000C72.868500,19.122000,72.168500,18.408000,72.168500,16.980000L72.168500,12.850000L71.034500,12.850000L71.034500,11.954000L72.168500,11.954000L72.168500,10.190000L73.274500,10.190000L73.274500,11.954000L75.234500,11.954000L75.234500,12.850000L73.274500,12.850000Z" fill="rgb(240,240,240)" stroke="none" stroke-width="1"/></g></g><clipPath id="ef8lcdyb1fsm18"><rect id="ef8lcdyb1fsm19" width="101" height="30" rx="0" ry="0" fill="rgb(255,255,255)" stroke="none" stroke-width="1"/></clipPath></g></svg>',
    NO_EXPAND_SVG:
      '<svg id="eizeotx5y49d1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><style><![CDATA[#eizeotx5y49d4_ts {animation: eizeotx5y49d4_ts__ts 10000ms linear infinite normal forwards}@keyframes eizeotx5y49d4_ts__ts { 0% {transform: translate(15px,15px) scale(0.050000,0.050000)} 2.74% {transform: translate(15px,15px) scale(1,1)} 45% {transform: translate(15px,15px) scale(1,1)} 48% {transform: translate(15px,15px) scale(0.050000,0.050000)} 100% {transform: translate(15px,15px) scale(0.050000,0.050000)} }#eizeotx5y49d4 {animation: eizeotx5y49d4_c_o 10000ms linear infinite normal forwards}@keyframes eizeotx5y49d4_c_o { 0% {opacity: 0} 2.74% {opacity: 1} 45% {opacity: 1} 48% {opacity: 0} 100% {opacity: 0} }#eizeotx5y49d6 {animation: eizeotx5y49d6_c_o 10000ms linear infinite normal forwards}@keyframes eizeotx5y49d6_c_o { 0% {opacity: 0} 2.74% {opacity: 1} 45% {opacity: 1} 48% {opacity: 0} 100% {opacity: 0} }]]></style><g id="eizeotx5y49d2" clip-path="url(#eizeotx5y49d7)"><g id="eizeotx5y49d3"><g id="eizeotx5y49d4_ts" transform="translate(15,15) scale(0.050000,0.050000)"><g id="eizeotx5y49d4" transform="translate(-15,-15)" opacity="0"><rect id="eizeotx5y49d5" width="30" height="30" rx="15" ry="15" fill="rgb(0,0,0)" fill-opacity="0.6" stroke="none" stroke-width="1"/></g></g><path id="eizeotx5y49d6" d="M10.606600,9.500000C10.606600,10.134000,10.835900,10.712900,11.213700,11.153600L11.213700,9.500000C11.213700,8.464470,12.029200,7.625000,13.035200,7.625000C14.041100,7.625000,14.856600,8.464470,14.856600,9.500000L14.856600,11.153600C15.234500,10.712900,15.463700,10.134000,15.463700,9.500000C15.463700,8.119290,14.376400,7,13.035200,7C11.693900,7,10.606600,8.119290,10.606600,9.500000ZM10,16.700000C10,15.935600,10.397900,15.219800,11.006800,14.647600C11.221900,14.445500,11.522400,14.192700,11.822700,14.006400L11.822700,9.500000C11.822700,8.809640,12.366300,8.250000,13.036900,8.250000C13.707600,8.250000,14.251200,8.809640,14.251200,9.500000L14.251200,12.167200C14.429800,12.060900,14.637200,12,14.858400,12C15.388100,12,15.838500,12.349100,16.004500,12.836000C16.197600,12.702700,16.429900,12.625000,16.679800,12.625000C17.209500,12.625000,17.659900,12.974100,17.825900,13.461000C18.019000,13.327700,18.251300,13.250000,18.501200,13.250000C19.171900,13.250000,19.715500,13.809600,19.715500,14.500000L19.715500,16.687500C19.715500,17.812500,19.351400,18.971400,19.022000,20.020100C18.749800,20.886600,18.501200,21.677800,18.501200,22.312500C18.501200,22.485100,18.365300,22.625000,18.197700,22.625000C18.030000,22.625000,17.894100,22.485100,17.894100,22.312500C17.894100,21.545100,18.163900,20.706000,18.449200,19.818900C18.769100,18.824300,19.108400,17.769400,19.108400,16.687500L19.108400,14.500000C19.108400,14.154800,18.836600,13.875000,18.501200,13.875000C18.165900,13.875000,17.894100,14.154800,17.894100,14.500000L17.894100,15.437500C17.894100,15.610100,17.758200,15.750000,17.590500,15.750000C17.422900,15.750000,17.286900,15.610100,17.286900,15.437500L17.286900,13.875000C17.286900,13.529800,17.015100,13.250000,16.679800,13.250000C16.344500,13.250000,16.072700,13.529800,16.072700,13.875000L16.072700,14.812500C16.072700,14.985100,15.936700,15.125000,15.769100,15.125000C15.601400,15.125000,15.465500,14.985100,15.465500,14.812500L15.465500,13.250000C15.465500,12.904800,15.193700,12.625000,14.858400,12.625000C14.523100,12.625000,14.251200,12.904800,14.251200,13.250000L14.251200,14.812500C14.251200,14.985100,14.115300,15.125000,13.947700,15.125000C13.780000,15.125000,13.644100,14.985100,13.644100,14.812500L13.644100,9.500000C13.644100,9.154820,13.372300,8.875000,13.036900,8.875000C12.701600,8.875000,12.429800,9.154820,12.429800,9.500000L12.429800,16.687500C12.429800,16.891600,12.295000,17,12.125000,17C11.961100,17,11.822700,16.862500,11.822700,16.687500L11.821400,14.764200C11.664500,14.886400,11.512500,15.016400,11.421700,15.103900C10.908000,15.598900,10.607100,16.139000,10.607100,16.700000L10.607100,17.630700C10.607100,18.437000,11.564100,19.998600,11.765900,20.327800L11.774700,20.342200C12.036800,20.770200,12.644300,21.676300,12.972700,22.121900C13.074700,22.260300,13.050100,22.454900,12.917300,22.560200C12.784400,22.665400,12.593600,22.641200,12.491500,22.503100C12.074500,21.938200,11.564700,21.180500,11.261100,20.675500C11.250200,20.657400,11.236300,20.634700,11.219800,20.607600C10.953300,20.170100,10,18.605200,10,17.630700L10,16.700000Z" opacity="0" clip-rule="evenodd" fill="rgb(255,255,255)" fill-rule="evenodd" stroke="none" stroke-width="1"/></g><clipPath id="eizeotx5y49d7"><rect id="eizeotx5y49d8" width="30" height="30" rx="0" ry="0" fill="rgb(255,255,255)" stroke="none" stroke-width="1"/></clipPath></g></svg>',
    EXPAND_WIDTH: 101,
    NO_EXPAND_WIDTH: 30,
    elementClass: "animation-circle",
    prototype: {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      _leftAlignCompensation: 0,
      _hasCompensatedAlignment: !1,
      init: function (e) {
        Widget.prototype.init.call(this, e),
          this.setAnimationType(e.textAlignment),
          this.setPosition(this.top, this.left);
      },
      setAnimationType: function (e) {
        "right" === e
          ? ((this.width = this.constructor.EXPAND_WIDTH),
            (this._leftAlignCompensation = 0),
            this.element.html(this.constructor.EXPAND_RIGHT_SVG))
          : "left" === e
          ? ((this.width = this.constructor.EXPAND_WIDTH),
            (this._leftAlignCompensation =
              this.constructor.EXPAND_WIDTH - this.constructor.NO_EXPAND_WIDTH),
            this.element.html(this.constructor.EXPAND_LEFT_SVG))
          : (this._leftAlignCompensation > 0 &&
              ((this.left += this._leftAlignCompensation),
              this.setPosition(this.top, this.left)),
            (this.width = this.constructor.NO_EXPAND_WIDTH),
            (this._leftAlignCompensation = 0),
            this.element.html(this.constructor.NO_EXPAND_SVG)),
          (this._hasCompensatedAlignment = !1),
          this.setWidth(this.width);
      },
      setWidth: function (e) {
        return (
          "undefined" != typeof e && (this.width = e),
          this.element.width(this.width),
          this
        );
      },
      setZIndex: function (e) {
        this.element.css("z-index", e);
      },
      setPosition: function (e, t) {
        return (
          "undefined" != typeof e && (this.top = e),
          "undefined" != typeof t &&
            (this._hasCompensatedAlignment === !1
              ? ((this.left = t - this._leftAlignCompensation),
                (this._hasCompensatedAlignment = !0))
              : (this.left = t)),
          this.element.css("top", this.top),
          this.element.css("left", this.left),
          this
        );
      },
    },
  }),
  Class(UI.SmartTemplate, "AddLogoMultiControl").inherits(
    UI.SmartTemplate.MultiControl
  )({
    prototype: {
      init: function (e) {
        (e.prefillColor = null),
          (e.cssClass = "hidden"),
          Helpers.App.getUrlParam("multiFolder_added-graphic0") ||
            (e.prefillGraphic = ""),
          UI.SmartTemplate.MultiControl.prototype.init.call(this, e),
          this.element.addClass("add-logo-control");
        var t = new UI.SmartTemplate.AddLogoControl({
          multiControl: this,
          fromLoad: e.fromLoad,
        });
        this.bind("imageDataNotFound", function () {
          t.setState("reset");
        });
      },
      _initVariables: function () {
        (this._timeouts = []),
          (this.initialValues = {
            assetId: null,
            asset: null,
            color: null,
            search: "",
          }),
          (this.previousValues = {
            assetId: null,
            asset: null,
            color: null,
            search: "",
          });
      },
      _setInitialValues: function () {
        var e = this.title || this.record.name;
        return (
          (this.urlParamName = "multi"),
          (this.customType = "customGraphic"),
          this.shouldTrimTitles && (e = e.slice(0, -2)),
          this.$title.text(e),
          (this.initialValues.color = this.record.color),
          (this.previousValues.color = null),
          (this.previousValues.assetId = this.prefillGraphic),
          this._setByType(),
          this.updatePrefix(this.prefix || "", !1),
          this.element.addClass("type-" + this.type),
          this
        );
      },
      _initComponents: function () {
        return (
          this.element.addClass("no-searchbar"),
          this.element.addClass("no-layers"),
          this._initAssetsGrid(),
          this._createCompoundButton(),
          this
        );
      },
      _bindings: function () {
        return (
          (this._popstateHandler = this._changeHistoryHandler.bind(this)),
          window.addEventListener("popstate", this._popstateHandler),
          this.bindSkeleton(),
          this
        );
      },
      _initAssetsGrid: function () {
        var e = this,
          t =
            null !== this.record.selectedLayer
              ? this.record.selectedLayer.id
              : null;
        this.prefillGraphic && (t = this.prefillGraphic);
        var n = !!this.onlyGraphics;
        this._checkAssetExistence(t),
          this.appendChild(
            new UI.AssetsGrid({
              name: "grid",
              selected: this.initialValues.asset,
              selectedId: t,
              isMobile: this.isMobilePhone,
              defaultNumberOfColumns: n === !0 ? 3 : 2,
              customType: this.customType,
              record: this.record,
              maxSize: UI.StageBase.maxSizeAllowed.image,
              videoMaxSize: UI.StageBase.maxSizeAllowed.video,
              acceptedFiles: $.extend(
                {},
                UI.StageBase.acceptedFiles.image,
                UI.StageBase.acceptedFiles.video
              ),
              onlyGraphics: n,
              type: this.type,
              excludable: this.record.excludable,
              duration: this.record.duration,
              element: this.$graphicBody,
              fragmentDuration: this._fragmentDuration,
              columnsBreakpoints: [
                { min: 500, max: 767, columns: n === !0 ? 4 : 3 },
                { min: 768, max: 1024, columns: n === !0 ? 5 : 4 },
              ],
            })
          ),
          this.$whiteFader.removeClass("hidden"),
          this._addGridBindings(),
          this.grid.showLoader(),
          this.isValidId(e.prefillGraphic) === !0
            ? e._getCustomAssetData(e.prefillGraphic)
            : setTimeout(function () {
                e.dispatch("multiControlReady");
              }, 0);
      },
      selectItem: function (e, t) {
        this.compoundButton.setSelectedItem(e),
          this._fetchAndSetLayersForRecordCallback(e, t);
      },
      _fetchAndSetLayersForRecordCallback: function (e, t) {
        var n = this,
          i = e.record && e.record.id,
          r = { asset: e.record, assetId: i };
        if (
          (this.setPreviousValues(r),
          this.updateRecord(r),
          (t.originalDispatcher = n),
          t.triggeredByUser === !0 && t.triggeredByLocalCropSuccess !== !0)
        ) {
          var o =
            e.record.id === n.customType ? e.record.record_hash : e.record.id;
          n.setUrlParameter(o);
        }
        Helpers.GlobalEventTracker.smartTemplateEvent(
          "graphicChange",
          Object.assign(
            { previous: n.previousValues.assetId, new: i },
            Helpers.App.getProductShownData()
          )
        ),
          n.dispatch("multiControlReady", t),
          n.dispatch("change", t);
      },
      updateUI: function () {},
      setUrlParameter: function (e) {
        return (
          (Helpers.App.getUrlParam("multiFolder_added-graphic0") ||
            (e && "null" !== e)) &&
            Helpers.App.replaceUrlParamWithHistory(
              this.graphicUrlParameterName,
              e
            ),
          this
        );
      },
      hideInStage: function () {
        UI.SmartTemplate.MultiControl.prototype.hideInStage.call(this),
          this.dispatch("logoHiddeninStage");
      },
      destroy: function () {
        this.addLogoControl.destroy(),
          UI.SmartTemplate.MultiControl.prototype.destroy.call(this);
      },
      render: function (e, t) {
        return t ? e.prepend(this.element) : e.append(this.element), this;
      },
      focus: function () {
        this.dispatch("focus");
      },
      _hackPreventChangeEventRacing: function () {},
      showAddLogoControl: function () {
        this.addLogoControl.show();
      },
      hideAddLogoControl: function () {
        this.addLogoControl.hide();
      },
    },
  }),
  Class(UI.SmartTemplate, "AddLogoControl")
    .inherits(Widget)
    .includes(
      BubblingSupport,
      GenericDestroySupport
    )({
    html: '        <div class="custom-graphic-control add-logo-control">            <label class="title file-upload-title">Logo</label>            <div class="form-group button composite-button">                <input class="form-control st-file-upload" accept=".jpg, .png, .jpeg" type="file" />                <label class="file-reposition-label button">                    <span class="p-icon p-sm crop-gray"></span>                    <div>Resize</div>                </label>                <label class="file-upload-label show-pixels-dimensions button">                    <span class="p-icon p-sm replace-gray"></span>                    <div class="file-upload-label__control-title">Upload Logo</div>                </label>                <label class="file-delete-label button">                    <span class="p-icon p-sm remove-gray"></span>                    <div>Remove</div>                </label>            </div>        <div>',
    CROP_START_STATE: "cropping",
    CROP_END_STATE: "cropped",
    IMAGE_SET_STATE: "loaded",
    FOCUS_ANIMATION_DURATION: 500,
    FOCUS_ANIMATION_CLASS: "wobble-vertical",
    TEXT_UPLOAD_LOGO: "Upload Logo",
    TEXT_REPLACE_LOGO: "Replace",
    prototype: {
      multiControl: null,
      init: function (e) {
        var t = this;
        if (!e.multiControl)
          throw new Error(
            "No MultiControl passed, cannot create AddLogoControl"
          );
        Widget.prototype.init.call(this, e),
          (t.DESKTOP_RENDER_TARGET = page.stage.leftSideBar.element),
          (t.isMobile = Helpers.App.isMobile()),
          (t.$formGroup = this.element.find(".form-group")),
          (t.$fileLabel = this.element.find("label.file-upload-label")),
          (t.$labelText = t.$fileLabel.find(
            ".file-upload-label__control-title"
          )),
          (t.$fileDeleteLabel = this.element.find("label.file-delete-label")),
          (t.$fileRepositionLabel = this.element.find(
            "label.file-reposition-label"
          )),
          (t.customGraphic = t.multiControl.grid.customGraphic),
          Helpers.App.getUrlParam("multiFolder_added-graphic0") ||
            (t.multiControl.prefillGraphic = null),
          t.$fileDeleteLabel.hide(),
          t.$fileRepositionLabel.hide(),
          (t.multiControl.hideWarning = !0),
          t.multiControl.hide(),
          (t.multiControl.addLogoControl = this),
          t.isMobile
            ? (this.fromLoad || t._upload(), t._renderMobile())
            : t.render(this.DESKTOP_RENDER_TARGET),
          t._bindings(),
          t.multiControl.prefillGraphic &&
            "null" !== t.multiControl.prefillGraphic &&
            t._showOptions();
      },
      _clear: function () {
        this.multiControl.grid &&
          this.multiControl.grid._clickItemHandler({
            data: { item: this.multiControl.grid.blankItem },
          });
      },
      _recrop: function () {
        this.customGraphic.customGraphicPreview.repositionAssetButton._clickHandler();
      },
      _upload: function () {
        this.customGraphic.$fileInput.click();
      },
      _bindings: function () {
        var e = this;
        e.$fileLabel.bind("click", function () {
          e._upload();
        }),
          e.$fileDeleteLabel.bind("click", function () {
            e.setState("reset");
          }),
          e.$fileRepositionLabel.bind("click", function () {
            e._recrop(), e.setState("cropping");
          }),
          e.multiControl.bind("change", e._updatePreviewThumb.bind(this)),
          e.multiControl.bind(
            "logoHiddeninStage",
            e.setState.bind(this, "reset")
          ),
          e.multiControl.bind(
            "customImageUploaded",
            e.setState.bind(this, "cropping")
          ),
          e.multiControl.bind("AddLogoSuccess", e._cropHandler.bind(this)),
          e.multiControl.bind("resetControl", e.setState.bind(this)),
          e.multiControl.bind("focus", e.focus.bind(this)),
          window.addEventListener(
            "popstate",
            e._changeHistoryHandler.bind(this)
          );
      },
      _showOptions: function () {
        var e = this;
        e.$formGroup.addClass("btn-group"),
          e.$fileDeleteLabel.show(),
          e.$fileRepositionLabel.show();
      },
      _hideOptions: function () {
        var e = this;
        e.$formGroup.removeClass("btn-group"),
          e.$fileDeleteLabel.hide(),
          e.$fileRepositionLabel.hide();
      },
      _hidePreviewThumb: function () {
        this.previewThumb &&
          (this.$formGroup.removeClass("has-preview"),
          this.previewThumb.element && this.previewThumb.hide());
      },
      _updatePreviewThumb: function (e) {
        var t;
        if (e.data.item && e.data.item.cropParams) {
          var n = this;
          (t = e.data.item),
            n.updateText(n.constructor.TEXT_REPLACE_LOGO),
            n._showOptions(),
            t.getThumbImageUrl().then(function (e) {
              n.previewThumb
                ? n.previewThumb.update(e)
                : n._createPreviewThumb(e),
                n.$formGroup.addClass("has-preview"),
                n.previewThumb.show();
            });
        }
      },
      _createPreviewThumb: function (e) {
        var t = this;
        (this.previewThumb = new UI.ImageContainer({
          name: t.name + "-preview",
          imageURL: e,
          cssClass: "file-input-preview",
        })),
          t.appendChild(this.previewThumb),
          this.previewThumb.render(t.$formGroup, !0);
      },
      _renderMobile: function () {
        var e = this;
        page.stage._addGraphicButtons[0].element.after(e.element),
          e.multiControl.compoundButton.hide();
      },
      _changeHistoryHandler: function () {
        var e = this,
          t = Helpers.App.getAllURLParams(),
          n = t[e.multiControl.graphicUrlParameterName];
        return ("null" === n || void 0 === n) &&
          (e.setState("reset"), e.isMobile && e.element)
          ? void e.destroy()
          : void 0;
      },
      updateText: function (e) {
        var t = this;
        t.$labelText.text(e);
      },
      _cropHandler: function (e) {
        var t = this,
          n = e.data.triggeredByLocalCropSuccess;
        t.setState(n ? "cropped" : "loaded");
      },
      setState: function (e) {
        var t = this;
        switch (e) {
          case UI.SmartTemplate.AddLogoControl.CROP_START_STATE:
            t.updateText("Cropping"),
              t.$labelText.addClass("ellipsing"),
              t.disableControls();
            break;
          case UI.SmartTemplate.AddLogoControl.CROP_END_STATE:
            t.updateText("Cropped!"), t.$labelText.removeClass("ellipsing");
            break;
          case UI.SmartTemplate.AddLogoControl.IMAGE_SET_STATE:
            t.updateText(t.constructor.TEXT_REPLACE_LOGO),
              t.$labelText.removeClass("ellipsing"),
              t.enableControls();
            break;
          case "reset":
            t._clear(),
              t._hideOptions(),
              t._hidePreviewThumb(),
              t.updateText(t.constructor.TEXT_UPLOAD_LOGO);
            break;
          default:
            var n = t.$fileDeleteLabel.is(":visible")
              ? t.constructor.TEXT_REPLACE_LOGO
              : t.constructor.TEXT_UPLOAD_LOGO;
            t.updateText(n),
              t.$labelText.removeClass("ellipsing"),
              t.enableControls();
        }
      },
      enableControls: function () {
        var e = this;
        e.$fileLabel.removeClass("disabled"),
          e.$fileDeleteLabel.removeClass("disabled"),
          e.$fileRepositionLabel.removeClass("disabled");
      },
      disableControls: function () {
        var e = this;
        e.$fileLabel.addClass("disabled"),
          e.$fileDeleteLabel.addClass("disabled"),
          e.$fileRepositionLabel.addClass("disabled");
      },
      focus: function () {
        var e = this;
        e.element.addClass(e.constructor.FOCUS_ANIMATION_CLASS),
          setTimeout(function () {
            e.element.removeClass(e.constructor.FOCUS_ANIMATION_CLASS);
          }, e.constructor.FOCUS_ANIMATION_DURATION);
      },
    },
  }),
  (UI.MultiSizesTemplates = {}),
  Class(UI.MultiSizesTemplates, "SmartTemplateSizeItem")
    .inherits(UI.RelatedTemplates.SmartTemplateItem)
    .includes(CleanRecordSupport, CDNSupport)
    .includes(BubblingSupport)({
    PROCESS_URL: {
      development: "/api/v4/jobs",
      staging: "/api/v4/jobs",
      production: "/api/v4/jobs",
    },
    html: '<figure class="carousel-item slick-slide slick-current slick-active" style="cursor: pointer" aria-hidden="false" tabindex="0"><a tabindex="0"><div class="loading-overlay"><div class="video-loading-icon"></div></div><span class="badge badge-type__13"><img class="thumb-image" style="object-fit: contain; width: 100%; max-height: 500px; margin: 0 auto;"></span><div class="figcaption"><h2 class="figure-title"></h2></div></a></figure>',
    prototype: {
      templateId: null,
      templateUiJson: null,
      id: null,
      sizeName: "",
      size: null,
      previewImage: null,
      previewImageSize: null,
      isOriginal: !1,
      init: function (e) {
        UI.RelatedTemplates.SmartTemplateItem.prototype.init.call(this, e),
          (this.processUrl = this.constructor.PROCESS_URL[window.environment]),
          (this.templateUiJson = $.extend({}, e.templateUiJson)),
          (this.id = e.id),
          (this.sizeName = e.sizeName),
          (this.size = e.size),
          (this.previewImage = e.previewImage),
          (this.previewImageSize = e.previewImageSize),
          (this.$image = this.element.find(".thumb-image")),
          (this.$title = this.element.find(".figure-title"));
        var t =
          this.sizeName + " - " + this.size.width + " x " + this.size.height;
        this.$title.text(t),
          this._loadPreviewImage(),
          this._addEventListeners();
      },
      _loadPreviewImage: function () {
        this.isOriginal
          ? /assets/.test(this.previewImage)
            ? (this.$image[0].src =
                this._cdnBasePath() +
                "/smart_templates/" +
                this.templateId +
                "/" +
                this.previewImage)
            : ((this.previewImage =
                "data:image/png;base64, " + this.previewImage),
              (this.$image[0].src = this.previewImage))
          : (this.$image[0].src =
              this._cdnBasePath() +
              "/smart_templates/" +
              this.templateId +
              "/assets/" +
              this.id +
              ".png");
      },
      _addEventListeners: function () {
        var e = this;
        this.element.off("click"),
          this.element.on("click", function (t) {
            t.preventDefault(),
              t.stopPropagation(),
              Helpers.GlobalEventTracker.carouselClick(
                "multisize",
                e.$title.text()
              ),
              e.dispatch("sizeSelect", { id: e.id, triggeredByUser: !0 });
          });
      },
      loadPreview: function (e) {
        var t,
          n = this;
        if (
          ((t = n.lastChange),
          n.lastChange === n.lastProcess || null === n.templateId)
        )
          return (n.lastProcess = t), e();
        (this.busy = !0),
          (n.$image[0].dataset.busy = !0),
          this.$loader.show(),
          (this.templateUiJson.size = this.isOriginal ? null : this.id);
        var i = this.getCleanRecord(this.templateUiJson);
        (i.customRules = []),
          $.ajax({
            url: this.processUrl,
            method: "POST",
            data: JSON.stringify(i),
            contentType: "application/json",
            dataType: "json",
          })
            .done(function (i) {
              (n.busy = !1),
                n.$loader.hide(),
                n.$image.attr("src", i.designPlan.previewImage.value),
                (n.previewImage = i.designPlan.previewImage.value),
                n.$image.length &&
                  ((n.$image[0].dataset.processed = !0),
                  (n.$image[0].dataset.busy = !1)),
                (n.lastProcess = t),
                n.dispatch("free"),
                n.dispatch("process"),
                e();
            })
            .fail(function () {
              (n.busy = !1), n.$loader.hide(), e();
            });
      },
      triggerLoadPreviewIfPlaceholder: function () {
        var e = this.$image[0].src;
        (/https/.test(e) || e === this.previewImage) &&
          ((this.lastChange = performance.now()),
          setTimeout(
            function () {
              this.loadPreview(console.log);
            }.bind(this),
            1e3
          ));
      },
    },
  }),
  Class(UI.MultiSizesTemplates, "Carousel")
    .inherits(UI.Carousel)
    .includes(BubblingSupport)({
    html: '    <div class="multi-sizes-grid"> </div>',
    prototype: {
      pendingItems: [],
      changeDebounce: null,
      carouselSettings: {
        arrows: !1,
        centerMode: !1,
        draggable: !0,
        infinite: !1,
        mobileFirst: !0,
        slidesToScroll: 2,
        slidesToShow: 1.5,
        swipeToSlide: !0,
        responsive: [
          {
            breakpoint: 511,
            settings: { slidesToScroll: 3, slidesToShow: 2.5 },
          },
          {
            breakpoint: 767,
            settings: { slidesToScroll: 4, slidesToShow: 3.5 },
          },
          {
            breakpoint: 1024,
            settings: {
              arrows: !0,
              draggable: !1,
              slidesToScroll: 6,
              slidesToShow: 6,
              swipeToSlide: !1,
            },
          },
        ],
      },
      init: function (e) {
        Widget.prototype.init.call(this, e),
          (this.queue = new SmartQueue({
            actionName: "loadPreview",
            minConsumers: 1,
            maxConsumers: 3,
            itemsPerConsumer: 1,
          })),
          (this.initialConfig = e),
          this._addEventListeners(),
          this.bind("process", function (e) {
            e.stopPropagation();
          });
      },
      initializeCarousel: function () {
        console.log("initialize"),
          UI.Carousel.prototype.init.call(this, {
            settings: this.carouselSettings,
            useSlick: !0,
          }),
          this.element.on("afterChange", this._changeEventHandler.bind(this));
      },
      _addEventListeners: function () {
        $(document).on({
          scroll: this._scrollEventHandler.bind(this),
          touchmove: this._scrollEventHandler.bind(this),
        });
      },
      setLastChange: function (e) {
        this.children.forEach(function (t) {
          t.lastChange = e;
        });
      },
      getVisibleItems: function () {
        var e, t, n, i;
        return (
          (e = this.getCurrentSlickSlide() || 0),
          (t = this._calculateSlides()),
          (n = Math.min(e + t, this.children.length)),
          (i = n % t),
          0 !== i && (e = Math.max(0, n - t)),
          this.children.slice(e, n)
        );
      },
      _scrollEventHandler: function () {
        (page.stage.cropperModal && page.stage.cropperModal.active) ||
          (this._isInsideViewport() &&
            this.pendingItems.length &&
            (this.update(this.pendingItems), (this.pendingItems = [])));
      },
      _changeEventHandler: function () {
        clearTimeout(this.changeDebounce),
          (this.changeDebounce = setTimeout(
            function () {
              this.update(this.getVisibleItems());
            }.bind(this),
            1500
          ));
      },
      reset: function () {
        this.children.forEach(function (e) {
          e.processed = !1;
        });
      },
      update: function (e, t) {
        if (t) return void this.queue.push(e);
        var n = page.stage.cropperModal && page.stage.cropperModal.active;
        !n && this._isInsideViewport()
          ? this.queue.push(e)
          : (this.pendingItems = e);
      },
      _isInsideViewport: function () {
        var e, t, n, i;
        return (
          (e = this.element.offset().top),
          (t = e + this.element.outerHeight()),
          (n = $(window).scrollTop()),
          (i = n + $(window).height()),
          t > n && i > e
        );
      },
      loadAssets: function () {
        this.children.forEach(function (e) {
          var t = e.element.find("img.thumb-image");
          t.attr("src", t.prop("dataset").src);
        });
      },
    },
  }),
  Class(UI.MultiSizesTemplates, "Container").inherits(Widget)({
    html: ' <div class="multi-sizes-container">                         <div class="multi-sizes-title">                                              Also Available in <strong>These Dimensions!</strong>                     <button class="button primary multi-sizes-container__download-btn">Download All</button>                 </div>                                                               </div>',
    prototype: {
      currentlyActiveSize: null,
      $downloadAllBtn: null,
      init: function (e) {
        var t = this;
        Widget.prototype.init.call(this, e),
          (this.$downloadAllBtn = this.element.find(
            ".multi-sizes-container__download-btn"
          )),
          (this.multiSizesItems = []),
          (this.originalValues = { id: this.record.id }),
          (this.multiSizesCarousel = new UI.MultiSizesTemplates.Carousel({
            name: "multiSizesCarousel",
            uiJson: e.record,
            responsive: !0,
            center: !0,
          })),
          this.appendChild(this.multiSizesCarousel),
          this.multiSizesCarousel.bind(
            "sizeSelect",
            t._triggerSizeChange.bind(t)
          ),
          setTimeout(function () {
            t.element.css("visibility", "visible");
          }),
          t.element.insertAfter("#main-content-wrapper"),
          this.multiSizesCarousel.render(t.element),
          this._askForTemplateSizes(),
          (this.queue = {
            clear: function () {
              t.multiSizesCarousel.queue.clear();
            },
          }),
          this.bindEvents();
      },
      bindEvents: function () {
        var e = this;
        this.$downloadAllBtn.on("click touchstart", function (t) {
          t.preventDefault();
          var n = Helpers.App.getSubscription(),
            i = Helpers.App.isAdmin();
          if (i || (n && !n.is_paused)) e.downloadSizesBundle();
          else {
            var r = new UI.MultiSizesDownloadAlertModal({ name: "alertModal" });
            r.show();
            var o = function () {
              setTimeout(function () {
                var t = Helpers.App.getSubscription(),
                  n = Helpers.App.isAdmin(),
                  i = page.pricingModal.isShown();
                n || (t && !t.is_paused)
                  ? e.downloadSizesBundle()
                  : i || r.show();
              }, 1e3),
                e.unbind("user:login", o);
            };
            e.bind("user:login", o);
            var s = function () {
              var t = window.page && window.page.modalSubscription;
              if (t) {
                var n = function () {
                  e.downloadSizesBundle(), t.unbind("purchase.success", n);
                };
                t.bind("purchase.success", n);
              }
              r.unbind("multiSizesDownload:subscription-process-activate", s);
            };
            r.bind("multiSizesDownload:subscription-process-activate", s);
          }
        }),
          window.addEventListener("popstate", function () {
            var t = Helpers.App.getAllURLParams().size || e.originalValues.id;
            e.currentlyActiveSize.id !== t &&
              e._triggerSizeChange({ data: { id: t } }, !0);
          });
      },
      _triggerSizeChange: function (e, t) {
        var n,
          i,
          r = {},
          o = this;
        n = e.id || e.data.id;
        var s = e.data && e.data.triggeredByUser;
        if (n === this.currentlyActiveSize.id)
          (r.high = this.currentlyActiveSize.size),
            (r.preview = this.currentlyActiveSize.previewImageSize),
            (i = this.currentlyActiveSize.previewImage || null);
        else {
          var a = this.supportedSizes.filter(function (e) {
            return e.id === n;
          });
          a.length
            ? ((r = a[0].size), (i = a[0].preview))
            : ((r = this.original.size), (i = this.original.previewImage));
        }
        n === this.original.id && (n = null),
          (this.record.size = n),
          this.dispatch("sizeChange", {
            id: n,
            imageURL: i,
            dimensions: r,
            triggeredByUser: s,
          }),
          e.data && o._swapActiveAndSelected(e.id || e.data.id),
          t !== !0 && this._setSizeIdUrlParam(n),
          $("html, body").animate(
            { scrollTop: $("#main-content-wrapper").offset().top },
            500,
            null
          );
      },
      _setSizeIdUrlParam: function (e) {
        var t,
          n = Helpers.App.getAllURLParams(),
          i = [];
        if (n.size !== e) {
          Helpers.App.replaceUrlParamWithHistory("size", e || "");
          for (var r in n)
            (r.indexOf("added-text") >= 0 || r.indexOf("pos-size_") >= 0) &&
              i.push(encodeURI(r));
          0 !== i.length &&
            ((t = Helpers.App.removeParams(i)),
            window.history.replaceState(
              {},
              Helpers.StageType.getStageSlug(),
              t
            ));
        }
      },
      _swapActiveAndSelected: function (e) {
        var t = this;
        t.multiSizesCarousel.removeSlick();
        var n = t.multiSizesCarousel.children.find(function (t) {
            return t.id === e;
          }),
          i = n.element.parent().find("figure").index(n.element);
        if (
          (t.currentlyActiveSize.render(t.element.find(".multi-sizes-grid")),
          0 === i)
        ) {
          var r = t.currentlyActiveSize.element.parent();
          t.currentlyActiveSize.element.detach(),
            t.currentlyActiveSize.element.prependTo(r);
        } else {
          t.currentlyActiveSize.element.detach();
          var o = t.element.find(
            ".multi-sizes-grid figure:nth-child(" + i + ")"
          );
          t.currentlyActiveSize.element.insertAfter(o);
        }
        t.currentlyActiveSize.triggerLoadPreviewIfPlaceholder(),
          t.multiSizesCarousel.appendChild(t.currentlyActiveSize);
        var s = t.multiSizesCarousel.children;
        s.splice(s.length - 1, 1),
          s.splice(i, 0, t.currentlyActiveSize),
          t.currentlyActiveSize._addEventListeners(),
          (t.currentlyActiveSize = n),
          n.element.remove(),
          t.multiSizesCarousel.removeChild(n),
          t.multiSizesCarousel.resetSlick();
      },
      getVisibleItems: function () {
        return this.multiSizesCarousel.getVisibleItems();
      },
      _askForTemplateSizes: function () {
        var e,
          t = this,
          n =
            NICE_DOMAIN.protocol +
            "://" +
            NICE_DOMAIN.hostname +
            "/api/v3/template_sizes";
        (e = t.supportedSizes.map(function (e) {
          return e.id;
        })),
          $.ajax(n).done(function (n) {
            n.forEach(function (n) {
              var i = e.indexOf(n.id);
              if (-1 !== i) {
                var r = { width: n.width, height: n.height };
                (t.supportedSizes[i].name = n.name),
                  (t.supportedSizes[i].size.high = r);
              }
            }),
              t._createMultiSizesItems();
          });
      },
      _createMultiSizesItems: function () {
        var e = this;
        this.multiSizesCarousel.render(this.element);
        var t = this.original;
        t.id = this.record.id;
        var n = [],
          i = new UI.MultiSizesTemplates.SmartTemplateSizeItem({
            name: "sizeItem0",
            templateId: e.record.id,
            templateUiJson: e.record,
            id: t.id,
            sizeName: "Default",
            size: t.size.high,
            previewImage: this.record.previewImage.value,
            previewImageSize: t.size.preview,
            isVisible: !1,
            isOriginal: !0,
          });
        this.prefillSize
          ? (i.render(this.element.find(".multi-sizes-grid")), n.push(i))
          : (this.currentlyActiveSize = i),
          this.supportedSizes.forEach(function (t, i) {
            var r = new UI.MultiSizesTemplates.SmartTemplateSizeItem({
              name: "sizeItem" + i + 1,
              templateId: e.record.id,
              templateUiJson: e.record,
              id: t.id,
              sizeName: t.name,
              size: t.size.high,
              previewImage: null,
              previewImageSize: t.size.preview,
            });
            e.prefillSize != t.id
              ? (r.render(e.element.find(".multi-sizes-grid")), n.push(r))
              : (e.currentlyActiveSize = r);
          }),
          this.multiSizesCarousel.initializeCarousel(),
          n.forEach(function (t) {
            e.multiSizesCarousel.appendChild(t);
          }),
          this.multiSizesCarousel.removeSlick(),
          this.multiSizesCarousel.resetSlick(),
          this.prefillSize && this._triggerSizeChange({ id: this.prefillSize });
      },
      loadAssets: function () {
        console.log("loadAssets");
      },
      setLastChange: function (e) {
        this.multiSizesCarousel.setLastChange(e),
          this._setDownloadAllButtonDisabled(!1);
      },
      update: function (e, t) {
        this.multiSizesCarousel.update(e, t);
      },
      _setDownloadAllButtonDisabled: function (e) {
        this.$downloadAllBtn.attr("disabled", e);
      },
      downloadSizesBundle: function () {
        var e = this,
          t = JSON.parse(JSON.stringify(Helpers.StageType.getDesignPlan()));
        delete t.previewImage;
        var n = encodeURI(window.location.href);
        t.referrer = n;
        var i = {
            stage_id: Helpers.StageType.getStageID(),
            designPlan: JSON.stringify(t),
          },
          r = new UI.Notification({});
        $.ajax({
          url: "/purchases/14/2/free_download_all_sizes",
          data: i,
          type: "POST",
          dataType: "json",
          success: function () {
            var t =
              "Your downloads are now processing! You will find them in your Downloads section";
            r.success(t),
              r.render($("body"), !0),
              r.autoclose(PageController.NOTIFICATION_AUTODISMISS_TIME),
              $.cookie("pl_processing_tracker", !0, { expires: 1, path: "/" }),
              window.page.appNavBar.updateStatus(null, !0),
              e._setDownloadAllButtonDisabled(!0);
          },
          error: function (e) {
            var t = e.message || e.responseJSON.message;
            r.alert(t),
              r.render($("body"), !0),
              r.autoclose(PageController.NOTIFICATION_AUTODISMISS_TIME),
              window.page.appNavBar.updateStatus();
          },
        });
      },
    },
  }),
  Class("Structure")({
    prototype: {
      tree: null,
      init: function (e) {
        (e = e || {}), (this.tree = e.tree);
      },
      _treeWalker: function (e, t, n) {
        var i;
        if (e.hasOwnProperty(t) === !0) {
          for (i = 0; i < e[t].length; i++) n(e[t][i]);
          for (i = 0; i < e[t].length; i++) this._treeWalker(e[t][i], t, n);
        }
      },
      getTree: function () {
        return this.tree;
      },
      setTree: function (e) {
        this.tree = e;
      },
      getSmartObject: function (e) {
        var t, n;
        return (
          this._treeWalker(this.tree, "layers", function (n) {
            n.name.replace("_original", "") === e && (t = n);
          }),
          t ? ((n = t.layers[0]), n ? n.smartObject : null) : null
        );
      },
      getSmartObjectDimensions: function (e) {
        var t = this.getSmartObject(e);
        return t ? { width: t.width, height: t.height } : null;
      },
    },
  }),
  Class("ContextualMenu").inherits(Widget)({
    html: '<div class="contextual-menu">             <i class="icon"></i>             <p class="text"></p>            </div>',
    prototype: {
      _control: null,
      _controlMethod: "",
      _position: null,
      _text: "",
      _isMouseOver: !1,
      init: function (e) {
        Widget.prototype.init.call(this, e),
          this.element.css("top", this._position.top),
          this.element.css("left", this._position.left),
          this.element.find(".text").text(this._text),
          this._bindings();
      },
      _bindings: function () {
        var e = this;
        this.element.one("click", function () {
          e._clickHandler(), e.hide(), e.destroy();
        }),
          this.element.mouseenter(function () {
            e._isMouseOver = !0;
          }),
          this.element.mouseleave(function () {
            e._isMouseOver = !1;
          });
      },
      isMouseOver: function () {
        return this._isMouseOver;
      },
      _clickHandler: function () {
        this._control &&
          "" !== this._controlMethod &&
          this._control[this._controlMethod].bind(this._control)();
      },
    },
  }),
  $.get("/assets/icons/ic-hide.svg"),
  Class("HideElementPopoverWarning").inherits(UI.OnboardingPopover)({
    TIME_TO_HIDE: 8e3,
    prototype: {
      arrowTarget: null,
      _timeout: null,
      init: function (e) {
        UI.OnboardingPopover.prototype.init.call(this, e);
      },
      _calculatePosition: function () {
        var e;
        if (this.target && this.target.length) {
          e = this.target.offset();
          var t = e.top;
          if (this.arrowTarget && this.arrowTarget.length) {
            var n = this.arrowTarget.offset().top;
            n > t ? (t -= n - t) : (t += t - n);
          }
          this.element.css("top", t),
            this.element.css("left", e.left),
            this.element.css("width", this.target.outerWidth()),
            this.element.css("height", this.target.outerHeight());
        }
      },
      show: function () {
        UI.OnboardingPopover.prototype.show.call(this),
          this.arrowTarget &&
            this.arrowTarget.length &&
            this._calculateArrowPosition();
        var e = this.element.attr("aria-describedby"),
          t = $("#" + e).find(".close-icon");
        t.length &&
          t.one(
            "click",
            function () {
              this._destroyPopover();
            }.bind(this)
          ),
          (this._timeout = setTimeout(
            function () {
              this._destroyPopover();
            }.bind(this),
            HideElementPopoverWarning.TIME_TO_HIDE
          ));
      },
      _destroyPopover: function () {
        this._timeout && (clearTimeout(this._timeout), (this._timeout = null)),
          this.hide(),
          this.destroy();
      },
      _calculateArrowPosition: function () {
        var e = this.element.attr("aria-describedby"),
          t = $("#" + e),
          n = t.find(".arrow"),
          i = this.arrowTarget.offset().left,
          r = this.arrowTarget.outerWidth(),
          o = t.offset().left;
        n.css("left", i - o + r / 2);
      },
    },
  }),
  Class(UI, "Overlay").inherits(Widget)({
    html: "<div> </div>",
    prototype: {
      init: function (e) {
        Widget.prototype.init.call(this, e),
          this.element.css("position", "absolute"),
          this.element.css("background-color", this._getCssColor(this.color)),
          this.setElementBounds({
            position: this.position,
            dimensions: this.dimensions,
          });
      },
      _getCssColor: function (e) {
        var t = Object.values(e).join(",");
        return "rgba(" + t + ")";
      },
      setElementBounds: function (e) {
        this.element.css("left", e.position.x),
          this.element.css("top", e.position.y),
          this.element.css("width", e.dimensions.width),
          this.element.css("height", e.dimensions.height);
      },
      fade: function (e, t) {
        return (
          this.show(),
          this.element.animate(
            { backgroundColor: $.Color(this._getCssColor(this.color)) },
            { duration: t || 300, complete: e }
          ),
          this
        );
      },
      activate: function () {
        return (
          Widget.prototype.activate.call(this),
          this.show(),
          this.element.css("background-color", this._getCssColor(this.color)),
          this
        );
      },
      deactivate: function () {
        return (
          Widget.prototype.deactivate.call(this),
          this.element.css(
            "background-color",
            this._getCssColor({
              red: this.color.red,
              green: this.color.green,
              blue: this.color.blue,
              alpha: 0,
            })
          ),
          this.hide(),
          this
        );
      },
    },
  }),
  Class("SegmentWrapper")({
    TRACK_URL: "https://api.segment.io/v1/t",
    API_KEY: window.segmentConfig.apiKey,
    sendEvent: function (e, t, n) {
      return "undefined" != typeof window.analytics
        ? navigator.sendBeacon && analytics.normalize
          ? (this.sendEventBeacon(e, t), void n())
          : void analytics.track(e, t, n)
        : void 0;
    },
    sendEventBeacon: function (e, t) {
      var n, i;
      (n = Helpers.App.getUser()),
        (i = analytics.normalize({
          event: e,
          userId: n.id || null,
          properties: t,
          writeKey: this.API_KEY,
        })),
        (i = JSON.stringify(i)),
        (i = new Blob([i], { type: "text/plain" })),
        navigator.sendBeacon(this.TRACK_URL, i);
    },
  }),
  Class(UI, "CategorySuggestion").inherits(Widget)({
    TARGET_URL: "/t-shirt-design-templates",
    elementClass: "category-suggestion",
    html: '        <div>            <div id="content-wrapper">                <div id="thumbnails-wrapper">                    <img src="/assets/category-suggestions/template1.png" class="template-thumbnail">                    <img src="/assets/category-suggestions/template2.png" class="template-thumbnail">                    <img src="/assets/category-suggestions/template3.png" class="template-thumbnail">                </div>                <div id="bottom-wrapper">                    <div id="text-wrapper">                        <div class="center"> Selling Apparel? </div>                        <div class="center"> Try Our Design Templates, Too! </div>                    </div>                    <div id="button-wrapper" class="center">                        <button> Make a T-Shirt Design </button>                    </div>                </div>            </div>        </div>    ',
    prototype: {
      init: function (e) {
        Widget.prototype.init.call(this, e),
          (this.$images = this.element.find(".template-thumbnail")),
          (this.$thumbnailsWrapper = this.element.find("#thumbnails-wrapper")),
          (this.$bottomWrapper = this.element.find("#bottom-wrapper")),
          (this.$button = this.$bottomWrapper.find("button")),
          this.$button.one("click", function () {
            SegmentWrapper.sendEvent(
              "CategorySwitched",
              {
                fromCategory: Helpers.StageType.getCategoryName(),
                toCategory: "Design Templates",
                targetURL: UI.CategorySuggestion.TARGET_URL,
              },
              function () {
                window.location.href = UI.CategorySuggestion.TARGET_URL;
              }
            );
          });
      },
      activate: function () {
        return (
          Widget.prototype.activate.call(this),
          this.$images.css("opacity", 1),
          this.$bottomWrapper.css("opacity", 1),
          this
        );
      },
      deactivate: function () {
        return (
          Widget.prototype.deactivate.call(this),
          this.$images.css("opacity", 0),
          this.$bottomWrapper.css("opacity", 0),
          this
        );
      },
      animate: function () {
        var e = function (e, t) {
            var n, i, r, o;
            (n = e.element),
              (i = e.duration),
              (r = e.delay),
              (o = e.opacity),
              setTimeout(function () {
                $(n).animate({ opacity: o }, { duration: i, complete: t });
              }, r);
          },
          t = function (n) {
            var i = n.shift();
            i &&
              e(
                { element: i, duration: 300, delay: 100, opacity: 1 },
                function () {
                  t(n);
                }
              );
          };
        e({
          element: this.$bottomWrapper,
          duration: 300,
          delay: 100,
          opacity: 1,
        }),
          t(this.$images.toArray());
      },
      destroy: function () {
        (this.$images = null),
          (this.$thumbnailsWrapper = null),
          (this.$bottomWrapper = null),
          Widget.prototype.destroy.call(this);
      },
    },
  }),
  Class("CategorySuggestionOverlayFactory")({
    getBounds: function (e) {
      return Helpers.App.isMobile()
        ? this.getMobileBounds(e.mainWrapperElement, e.stageControlsElement)
        : this.getDesktopBounds(e.stageImageElement);
    },
    getDesktopBounds: function (e) {
      var t, n, i;
      return (
        (t = e.position()),
        (n = { x: t.left + "px", y: t.top + "px" }),
        (i = { width: e.outerWidth() + "px", height: e.outerHeight() + "px" }),
        { position: n, dimensions: i }
      );
    },
    getMobileBounds: function (e, t) {
      var n, i, r, o;
      return (
        (n = e.offset().top),
        (i = t.offset().top),
        (r = i - n),
        (o = t.outerHeight()),
        {
          position: { x: "0px", y: n + "px" },
          dimensions: { width: "100%", height: r + o + "px" },
        }
      );
    },
    create: function (e) {
      var t, n, i, r;
      return (
        (t = this.getBounds(e)),
        (n = new UI.Overlay({
          name: "suggestionOverlay",
          cssClass: "overlay suggestion",
          color: { red: 0, green: 0, blue: 0, alpha: 0.75 },
          position: t.position,
          dimensions: t.dimensions,
        })),
        (i = new ButtonPopover({
          name: "closeButton",
          content: "x",
          cssClass: "close-button",
        })),
        (r = new UI.CategorySuggestion({ name: "content" })),
        n.deactivate(),
        r.deactivate(),
        n.appendChild(i),
        n.appendChild(r),
        i.render(n.element),
        r.render(n.element),
        n
      );
    },
  }),
  Class(UI.SmartTemplate, "StageCanvas")
    .inherits(UI.StageBase)
    .includes(
      CleanRecordSupport,
      CDNSupport,
      UserAddedTextSupport,
      HistorySupport,
      FetchLayersSupport,
      StageCanvasCustomGraphicSupport,
      StageCanvasCustomImageSupport,
      StageCanvasLibraryImageSupport,
      StageReplacementAreaSupport,
      BuildControlSupport
    )({
    REQUEST_HIGH_RESOLUTION: !1,
    IMAGE_404_MESSAGE:
      "Your link contains an uploaded image (design or logo) that we no longer have. Please reupload the missing image",
    reportError: function (e) {
      throw new Error(e);
    },
    prototype: {
      $imagePreview: null,
      $imageElement: null,
      $pageWrapper: null,
      _imageShown: !1,
      _currentlyOpenComponent: null,
      _request: null,
      _debounceTime: 10,
      _throttlerActive: !1,
      _throttlerIntervalInSeconds: 10,
      _maxChangesPerInterval: 3,
      _throttlerChanges: 0,
      _currentlyLoading: !1,
      _filesContainer: null,
      _customImageNotFound: !1,
      _timeCheck: null,
      _timeTop: 2,
      _renderUiCalled: !1,
      _changeResolutionEventData: null,
      _processCount: 0,
      _changeInProgress: null,
      _relatedTemplates: null,
      _userGraphicController: null,
      _userGraphicTabs: [],
      _addGraphicButtons: [],
      _rightSidebarAvailableHeight: Math.max($(window).height() - 50, 400),
      _rightSidebarAvailableLayerfulControlSlots: 3,
      _layerfulControlHeight: 199,
      _layerlessControlHeight: 83,
      replacementAreaSelected: null,
      _userImagesPath: "https://s3.amazonaws.com/upload.placeit.net/user",
      _resultShownCounter: 0,
      _hasLogoCustomGraphic: !1,
      _initialCustomRules: [],
      _blankCanvasAlert: null,
      init: function (e) {
        var t = this;
        return (
          (e.manuallyLoadAssets = !0),
          (e.similarStagesFullWidth = !0),
          (this.paramsFromURL = Helpers.App.getAllURLParams()),
          (this._relatedTemplates = {}),
          UI.StageBase.prototype.init.call(this, e),
          Helpers.StageType.setStageInfo(window._stageData.stage_data),
          this.initializeStageActionsManager(),
          this.stageActionsManager.disableShareButton(),
          (this.$pageWrapper = $(".page-wrapper")),
          (this.$buttonBar = $(".button-bar-stages")),
          this.stageImageWidget.element
            .removeClass(
              "stage__image-wrapper stage__image-wrapper--foreground"
            )
            .addClass("container-fluid"),
          this.stageImageWidget.hideVisibility(),
          (this.$imageElement = t.element.find(".container-fluid img")),
          this.$imageElement
            .removeClass("stage__image--foreground")
            .addClass("img-responsive"),
          (this.recordState = { success: !0 }),
          (this.foregroundCanvas = null),
          this.appendChild(
            new UI.SmartTemplate.Loader({
              name: "stLoader",
              elementToWrap: t.stageImageWidget.getElement().find("img"),
            })
          ).render(this.stageImageWidget.element),
          t
            .appendChild(new UI.CropperModal({ name: "cropperModal" }))
            .render(t.$body),
          (this.isMobilePhone = Helpers.App.isMobile()),
          this.isMobilePhone &&
            (this.$pageWrapper.addClass("mobile"),
            $(".app_page").addClass("mobile")),
          this.$pageWrapper.addClass("is_smart-template"),
          $(".app_page").addClass("is_smart-template"),
          this.setChangesCounterBindings(),
          (this.debounceURLChanges = null),
          this.bind("notVisible", function () {
            t.dispatch("stage.warn", {
              message:
                "Some of your fields aren't visible. Click the checkbox to make it visible!",
              seconds: 5,
            });
          }),
          this.bind(
            "componentOpen",
            this._openComponentEventHandler.bind(this)
          ),
          this.bind(
            "componentClose",
            this._closedComponentEventHandler.bind(this)
          ),
          $(window).load(function () {
            $(".stage-info-wrapper").css("width", t.$imageElement.width());
          }),
          window.addEventListener("resize", function () {
            Helpers.App.isMobile() ||
              (t.accomodateLeftSidebarScrollBar(),
              $(".stage-info-wrapper").css("width", t.$imageElement.width()),
              t.scaling && t._repositionScaling(),
              t.interactionControl && t._repositionInteractions(),
              t._repositionPiP());
          }),
          this.bind("beforeProcessTemplate", function (e) {
            var n = e.data.eventOrigin;
            if (window.engine && window.engine.ready)
              return void (e.data.shouldRun = !0);
            var i =
              UI.RelatedTemplates.Controller.prototype._isRelatedTemplateItem.call(
                null,
                n
              );
            i &&
              t._request &&
              4 !== t._request.readyState &&
              (e.data.shouldRun = !1);
          }),
          this.element.ready(function () {
            var e = window._stageData;
            t.initializeStageActionsManager(),
              t.getDraft(window.savedDraftId),
              t.saveDraftBindings(),
              (t.smart_object_id = e.stage_data.smart_object_v4_id),
              t.isMobilePhone && t._setupEngineForMobile(),
              (t.canProcessWithEngine = IntegrityCheck.checkCapability()),
              (t.stageIsReady = !0),
              t.canProcessRelatedJobsLocal() &&
                (t.sharedQueue = new SmartQueue({
                  actionName: "loadPreview",
                  minConsumers: 1,
                  maxConsumers: 3,
                  itemsPerConsumer: 1,
                })),
              window.smartTemplateData &&
                window.structureData &&
                t.designDataHandler(
                  window.smartTemplateData,
                  window.structureData
                );
          }),
          this.bind("user.signIn", function () {
            (t.record._internalRemoveWatermark = !0), t.triggerChange();
          }),
          UI.Navigation.NavBar.bind("user:login", function () {
            Helpers.App.getSubscription() &&
              ((t.record._internalRemoveWatermark = !0), t.triggerChange()),
              t.multiSizesContainer &&
                t.multiSizesContainer.dispatch("user:login");
          }).bind("user:logout", function () {
            (t.record._internalRemoveWatermark = !1), t.triggerChange();
          }),
          this.bind("change", this._waitForProcess.bind(this)),
          this.bind(
            "changeInteraction",
            function (e) {
              (e.data.originalDispatcher = this.interactionControl),
                this._waitForProcess(e);
            }.bind(this)
          ),
          this.bind("process", this._processEventHandler.bind(this)),
          t.bind("change", function (e, n) {
            var i = function () {
              t.unbind("stage.updated", i),
                n &&
                  n.originalDispatcher &&
                  "function" == typeof n.originalDispatcher.updateUI &&
                  n.originalDispatcher.updateUI();
            };
            t.bind("stage.updated", i);
          }),
          t.setSaveButtonByUrlChanges(),
          Helpers.StageType.isBlankCanvasStage() ||
            !Helpers.StageType.isDesignCategory() ||
            Helpers.App.isMobile() ||
            this._showTryNewBlankCanvasAlert(),
          Helpers.App.isMobile() &&
            Helpers.StageType.isBlankCanvasStage() &&
            this._showBlankCanvasBetaAlert(),
          this._bindEvents(),
          this
        );
      },
      _bindEvents: function () {
        var e = this;
        this.bind(
          "customAssetCropped",
          function () {
            this.stageActionsManager.changeSaveButtonState("processing"),
              this.triggerChange();
          }.bind(this)
        ),
          this.bind(
            "stage.error",
            function () {
              this.stageActionsManager.changeSaveButtonState();
            }.bind(this)
          ),
          e.stageImageWidget.bind("stage.imageReady", function () {
            e.dispatch("contentReady", { originalDispatcher: e });
          }),
          this.bind(
            "repositionGraphic",
            this._repositionGraphicEventHandler.bind(this)
          ),
          this._preventDoubleTapZoom(),
          this.stageActionsManager.bind(
            "download",
            function () {
              this._callShowSuggestionOverlay();
            }.bind(this)
          ),
          this.bind(
            "active",
            function () {
              $("body").addClass("no-scrolling");
            }.bind(this)
          ),
          this.bind(
            "inactive",
            function () {
              $("body").removeClass("no-scrolling");
            }.bind(this)
          );
      },
      _callShowSuggestionOverlay: function () {
        var e, t, n;
        (e = Helpers.StageType.getStageType()),
          (t = Helpers.StageType.getTags().map(function (e) {
            return e.name;
          })),
          (n = "true" === $.cookie("categorySuggestionOverlayShown")),
          "smart-template" === e &&
            t.includes("Apparel") !== !1 &&
            (n ||
              ($.cookie("categorySuggestionOverlayShown", !0, {
                path: "/",
                expires: 365,
              }),
              this.showSuggestionOverlay()));
      },
      _repositionGraphicEventHandler: function (e) {
        var t, n, i, r, o, s;
        (t = e.data._target),
          (i = e.data.layerName),
          (n = "repositionLibraryImage"),
          (r = Helpers.StageType.getStructureInstance()),
          (o = r.getSmartObjectDimensions(i)),
          null === o &&
            ((o = t.viewportData),
            Helpers.GlobalEventTracker.track("RepositionReplaceLayerNotFound", {
              layerName: i,
              viewport: o,
            })),
          (s = {
            viewportData: o,
            userImagePath: t.getImageUrl(),
            graphicItem: t,
          }),
          t.isCustom() &&
            ((n = "repositionImage"),
            (s.recordHash = t.record.record_hash),
            (s.cropParams = t.cropParams)),
          this.dispatch(n, s);
      },
      _waitForProcess: function (e) {
        var t, n, i, r, o, s;
        (t = e.data),
          (n = t.originalDispatcher || new Widget()),
          (i = t.changedProperty),
          (r = n.constructor.className),
          (o = InputMapping.isAllowedChange(r, i)),
          (s = this.canProcessWithEngine ? engine : this);
        var a = function () {
          var e, t;
          return (
            (e = this._getURLParams()),
            0 === this._processCount && 0 === Object.keys(e).length
              ? void s.unbind("process", a)
              : (this._processCount++,
                this.isChangeSizeInProgress &&
                  (this.isChangeSizeInProgress = !1),
                (t = this.children.filter(function (e) {
                  return e.name && e.name.indexOf("relatedTemplates") >= 0;
                })),
                t.forEach(function (e) {
                  this.updateRelatedTemplates(e, o);
                }, this),
                this.multiSizesContainer &&
                  this.updateRelatedTemplates(this.multiSizesContainer, !0),
                void s.unbind("process", a))
          );
        }.bind(this);
        s.bind("process", a);
      },
      _preventDoubleTapZoom: function () {
        var e = document.getElementById("main-content-wrapper");
        e.addEventListener("click", function (e) {
          e.preventDefault();
        });
      },
      setSaveButtonByUrlChanges: function () {
        this.setValue(Object.keys(this._getURLParams()).length);
      },
      saveDraftBindings: function () {
        var e = this;
        e.bind("change", function (t) {
          e._changeStageCanvasHandler(t);
        }),
          e.bind("changeInteraction", function (t) {
            e._changeStageCanvasHandler(t);
          });
      },
      initializeStageActionsManager: function () {
        var e = window._stageData,
          t = this;
        t.stageActionsManager.resetButtonsStyles(),
          t.stageActionsManager
            .setStageButtonsInfo(e.action_buttons)
            .showButtonsForState("start"),
          t.stageActionsManager.bind("grabRemote", function () {
            t.dispatch("grabRemote");
          }),
          t.stageActionsManager.bind("change", function () {
            t.dispatch("change", {});
          });
      },
      _showStageImage: function () {
        var e = this,
          t =
            e.record && e.record.customRules && e.record.customRules.length > 0;
        (e._stageImageShown = !0),
          this.dispatch("stage.imageShown"),
          t !== !0 &&
            (e._repositionScaling(), e._showRuleControls(), e._repositionPiP());
      },
      showStageImageVisible: function () {
        this.stageImageWidget.showVisibility();
      },
      loadFromUrlParameters: function () {
        var e = Helpers.App.getUrlParam("titles", location.href, !1);
        e &&
          "on" === e.toLowerCase() &&
          ($(".grid-item .figcaption").show(),
          $(".slick-track .figcaption").show()),
          e &&
            "off" === e.toLowerCase() &&
            ($(".grid-item .figcaption").hide(),
            $(".slick-track .figcaption").hide());
      },
      canProcessRelatedJobsLocal: function () {
        var e = Helpers.App.getUrlParam("ngin");
        return e && "on" === e
          ? !0
          : window.forceRTFallback === !0 ||
            this.canProcessWithEngine === !1 ||
            this.isMobilePhone ||
            window.navigator.userAgent.indexOf("Edge") > -1
          ? !1
          : !0;
      },
      reportError: function (e) {
        setTimeout(function () {
          UI.SmartTemplate.StageCanvas.reportError(e);
        }, 0);
      },
      savePreviewResult: function (e) {
        for (
          var t = "result.preview", n = atob(e), i = new Array(n.length), r = 0;
          r < n.length;
          r++
        )
          i[r] = n.charCodeAt(r);
        var o = new Uint8Array(i),
          s = new Blob([o], { type: "" }),
          a = new FormData();
        a.append("inputFile", s),
          $.ajax({
            url: NICE_DOMAIN.protocol + "://" + NICE_DOMAIN.hostname + "/files",
            type: "POST",
            data: a,
            processData: !1,
            contentType: !1,
          })
            .done(function (e) {
              Helpers.GlobalEventTracker.track(t, {
                eventCategory:
                  Helpers.StageType._types[
                    window._stageData.stage_data.image_type
                  ],
                eventAction: t,
                previewURL: e.url,
                resultUrl: window.location.href,
                isMobile: Helpers.App.isMobile(),
                integrityVersion:
                  IntegrityCheck.getIntegrityVersionCookie() || "v1",
              });
            })
            .fail(function () {
              console.log("Failed to upload preview result image");
            });
      },
      previewLogger: function (e) {
        var t;
        this.canProcessWithEngine !== !1 &&
          ((t = Math.floor(100 * Math.random()) + 1),
          1 === t && this.savePreviewResult(e));
      },
      craftJobsRequest: function (e) {
        return $.ajax({
          url:
            NICE_DOMAIN.protocol +
            "://" +
            NICE_DOMAIN.hostname +
            "/api/v4/jobs/",
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: e,
        });
      },
      niceImageRequest: function (e, t, n) {
        var i = this,
          r = i.getCleanRecord(e);
        i._request = i
          .craftJobsRequest(JSON.stringify(r))
          .done(function (e) {
            if (
              !e.designPlan.error ||
              "scriptError" !== e.designPlan.error.type
            ) {
              var n = e.designPlan.previewImage.value,
                i = /^data:(.*?);base64,(.*)$/.exec(n),
                r = (i[1], i[2], new Image());
              (r.onload = function () {
                t(r);
              }),
                (r.src = i[0]);
            }
          })
          .fail(function (e, t, i) {
            n && "function" == typeof n && n(e, t, i), "abort" !== t;
          });
      },
      stageImageReady: function (e, t, n) {
        var i = this,
          r = /^data:(.*?);base64,(.*)$/.exec(e),
          o = r[1],
          s = r[2];
        i.setDownloaded(!1),
          (i.record.previewImage = { type: o, value: s }),
          Helpers.StageType.setPreviewImage(s),
          Helpers.StageType.setDesignPlan(i.getCleanRecord(i.record)),
          i.stageActionsManager.enableShareButton(),
          i._showStageImage(),
          i._updateStageImage(
            { src: e, canvas: null, tryCanvas: t },
            function () {
              n && n();
            }
          );
      },
      requestBackendLowRes: function () {
        var e,
          t = this,
          n = encodeURI(window.location.href);
        return (
          (t.resultShown.start = performance.now()),
          (this.record.highResolution = !1),
          (e = t.getCleanRecord(t.record)),
          t._addLoaderDivElement(),
          t._request &&
            (t._request.abort(), (t.resultShown.start = performance.now())),
          (e.referrer = n),
          (t._request = t
            .craftJobsRequest(JSON.stringify(e))
            .done(function (e) {
              if (
                ((t._debounceTime = 0),
                t._throttlerActive === !1 &&
                  ((t._throttlerActive = !0), (t._throttlerChanges = 0)),
                e.designPlan.error && "scriptError" === e.designPlan.error.type)
              ) {
                console.log(
                  "Failed to process image, script error:\nLine: " +
                    e.designPlan.error.line +
                    "\nMessage: " +
                    e.designPlan.error.message
                );
                var n = {
                  message:
                    "Your template couldn't be processed right now, we loaded your last template instead. Please try again later",
                  action:
                    NICE_DOMAIN.protocol +
                    "://" +
                    NICE_DOMAIN.hostname +
                    "/api/v3/jobs/",
                  error: e.designPlan.error.message,
                };
                t.dispatch("stage.error", n),
                  t._removeLoaderDivElement(),
                  t.persistComponentPopupBackdrop();
              } else {
                var i = e.designPlan.previewImage.value;
                t._showStageImage();
                var r = function () {
                  if (
                    (t._removeLoaderDivElement(),
                    t.trackResultShown(),
                    t.scaling)
                  ) {
                    var e;
                    (e = t.isMobilePhone
                      ? $(window).width() - 20
                      : t.stageImageWidget.element.width()),
                      t._repositionScaling(),
                      t._repositionPiP();
                  }
                };
                t.stageImageReady(i, !1, r),
                  t.dispatch("process"),
                  t.customImageFoundCheck(),
                  t.persistComponentPopupBackdrop();
              }
            })
            .fail(function (e) {
              if ("abort" !== e.statusText) {
                var n = "";
                n =
                  429 == e.status
                    ? "Sorry, we're getting too many requests coming from your IP. If you'd like to be whitelisted, please contact us"
                    : "Couldn't process right now. Please try again later";
                var i = {
                  message: n,
                  action:
                    NICE_DOMAIN.protocol +
                    "://" +
                    NICE_DOMAIN.hostname +
                    "/api/v3/jobs/",
                  errorType: "st-jobs",
                  responseText: e.responseText,
                  headers: e.getAllResponseHeaders(),
                  status: e.status,
                  statusText: e.statusText,
                  fullUrl: window.location.href,
                };
                t.dispatch("stage.error", i),
                  t._removeLoaderDivElement(),
                  t.persistComponentPopupBackdrop();
              }
            })),
          t._request
        );
      },
      triggerChange: function () {
        var e = this,
          t = jQuery.extend(!0, {}, e.record);
        if (e.canProcessWithEngine === !1) {
          var n = window._pl_featureFlags.t19083_limit_jobs;
          return (
            (e.recordState = e._runValidations()),
            e.recordState.success === !1
              ? ((e._changeInProgress = !1),
                void e.dispatch("stage.warn", {
                  message: e.recordState.message,
                }))
              : n && !e._graphicReady
              ? void console.log("Job denied")
              : (console.log("requestBackendLowRes"), e.requestBackendLowRes())
          );
        }
        if (
          (console.log("Change triggered."),
          !window.engine || !window.engine.ready || e._changeInProgress === !0)
        )
          return (
            console.log("Not sending change, engine is in process state."),
            void (e.pendingChange = !0)
          );
        if (((e._changeInProgress = !0), e.pendingSizeChangeData))
          return (
            console.log("Processing size change."),
            e._addLoaderDivElement(),
            e.loadNewSize(e.pendingSizeChangeData),
            void (e.pendingSizeChangeData = null)
          );
        if (e.record.forceReload)
          return (
            console.log("Forcing reload on change"),
            e._addLoaderDivElement(),
            e.reloadBcFlagged(),
            void (e.pendingSizeChangeData = null)
          );
        if (
          ((e.recordState = e._runValidations()), e.recordState.success === !1)
        )
          return (
            (e._changeInProgress = !1),
            void e.dispatch("stage.warn", { message: e.recordState.message })
          );
        (e.resultShown.start = performance.now()),
          (e.resultShown.origin = "designUpdate"),
          null != e._timeCheck && clearTimeout(e._timeCheck),
          (e._timeCheck = setTimeout(function () {
            Helpers.GlobalEventTracker.slowProcess({
              stageId: window._stageData.stage_data.id,
              timeLimit: e._timeTop,
            });
          }, 1e3 * e._timeTop));
        performance.now();
        engine
          .process(t, !0)
          .then(function (t) {
            var n = window.location.href,
              i = /^data:(.*?);base64,(.*)$/.exec(t),
              r =
                (i[1],
                i[2],
                function () {
                  e.validateIntegrity(n),
                    clearTimeout(e._timeCheck),
                    e.trackResultShown(),
                    e.previewLogger(i[2]);
                });
            e.stageImageReady(t, !0, r),
              e.stageActionsManager.enableShareButton(),
              e._shouldAddLogoControl() && e.dispatch("addGraphic"),
              (e._changeInProgress = !1),
              e.processPendingChange(),
              e.persistComponentPopupBackdrop();
          })
          ["catch"](function (t) {
            e.persistComponentPopupBackdrop(),
              e.dispatch("stage.error"),
              (e._changeInProgress = !1),
              setTimeout(function () {
                throw t;
              }, 0);
          });
      },
      _shouldAddLogoControl: function () {
        var e = this;
        return !Helpers.App.isMobile() &&
          Helpers.StageType.getMaxUserAddedGraphics() > 0 &&
          0 === UserGraphicController._getUserGraphicCount(e.record.graphic) &&
          !e._hasLogoCustomGraphic
          ? !0
          : !1;
      },
      getNoTextCanvas: function () {
        var e = document.createElement("canvas"),
          t = engine._canvasRenderer.view;
        (e.width = t.width), (e.height = t.height);
        var n = engine.turnOffText();
        return e.getContext("2d").drawImage(t, 0, 0), engine.turnOnText(n), e;
      },
      validateIntegrity: function (e) {
        var t,
          n = this,
          i = n.getCleanRecord(n.record),
          r = n.hasCustomGraphicsUpload();
        IntegrityCheck.shouldRunIntegrityTest(
          this.canProcessWithEngine,
          engine.hasTransformed,
          r
        ) &&
          ((t = n.getNoTextCanvas()),
          IntegrityCheck.runIntegrity(
            i,
            t,
            function (t) {
              if (t.passed === !1) {
                (n.canProcessWithEngine = !1), n._unLoadInteractiveCanvas();
                var i = {
                  message:
                    "It seems that your computer is having issues rendering images. We're going to use a special server for you! Please hold on while we refresh...",
                };
                n.dispatch("stage.error", i),
                  (n.keepWarning = !0),
                  n.triggerChange(),
                  n._startZoomInImage(),
                  n.children.forEach(function (e) {
                    "Carousel" === e.constructor.className &&
                      e.fallbackToRemoteProcess &&
                      e.fallbackToRemoteProcess();
                  });
              }
              IntegrityCheck.saveIntegrityResult(t, e);
            },
            n,
            e
          ));
      },
      trackResultShown: function () {
        var e = this,
          t = null;
        return e._resultShownCounter >= 2
          ? void (e.resultShown.sent = !0)
          : ((e._resultShownCounter += 1),
            (e.resultShown.end = performance.now()),
            (t = (e.resultShown.end - e.resultShown.start) / 1e3),
            console.log("Process time: " + t),
            void Helpers.GlobalEventTracker.resultShown({
              eventCategory:
                Helpers.StageType._types[
                  window._stageData.stage_data.image_type
                ],
              eventAction: "result.shown",
              eventValue: t,
              resultUrl: window.location.href,
              assetOrigin: e.resultShown.origin,
              canProcessWithEngine: e.canProcessWithEngine,
            }));
      },
      onErrorLoadOtherStages: function () {
        var e = this,
          t = $(".saved-configurations-grid");
        t.length &&
          this.appendChild(
            new UI.SmartTemplate.SavedConfigurations({
              name: "savedConfigurations",
              element: t,
            })
          );
        var n = $(".related-templates-grid");
        n.each(function (t, n) {
          var i = new UI.RelatedTemplates.Controller({
            name: "relatedTemplates" + t,
            uiJson: e.record,
            element: $(n),
            queue: e.sharedQueue,
          });
          e.appendChild(i),
            (e._relatedTemplates[i.name] = {
              debounce: null,
              processInputFlags: [],
            });
        }),
          this._displayItemsBelowImage();
      },
      engineBindings: function (e) {
        var t = this,
          n = t._engineInteractiveClickHandler.bind(t),
          i = t._engineRightClickHandler.bind(t),
          r = t._engineBackspaceHandler.bind(t);
        e.bind("process", t._processEventHandler.bind(t)),
          e.bind("nounProject:fail", function (e) {
            Helpers.GlobalEventTracker.track("nounProject:fail", e.data);
          }),
          e.bind("transform3DFileExtension:error", function (e) {
            Helpers.GlobalEventTracker.track(
              "transform3DFileExtension:error",
              e.data
            );
          }),
          e.bind("imageLoad:fail", function (e) {
            t.dispatch("stage.error", e.data),
              (e.data.fullUrl = window.location.href),
              Helpers.GlobalEventTracker.track("imageLoad:fail", e.data);
          }),
          e.bind("imageLoad:empty", function (e) {
            t.dispatch("stage.error", e.data),
              (e.data.fullUrl = window.location.href),
              Helpers.GlobalEventTracker.track(
                "imageLoad:empty",
                e.data.graphic
              );
          }),
          e.bind("docIntoDocsLoad:fail", function (e) {
            t.dispatch("stage.error", e.data),
              Helpers.GlobalEventTracker.track("docIntoDocsLoad:fail", e.data);
          }),
          e.bind("change", this._engineChangeEventHandler.bind(this)),
          e.bind("rulesSetup:warning", function (e) {
            Helpers.GlobalEventTracker.track("rulesSetup:warning", e.data);
          }),
          e.bind("interactive:move", function () {
            P.delay(100).then(function () {
              Helpers.GlobalEventTracker.track(
                "interactive:move",
                Helpers.App.getProductShownData()
              );
            });
          }),
          e.bind("interactive:resize", function () {
            P.delay(100).then(function () {
              Helpers.GlobalEventTracker.track(
                "interactive:resize",
                Helpers.App.getProductShownData()
              );
            });
          }),
          e.bind("interactive:rotate", function () {
            P.delay(100).then(function () {
              Helpers.GlobalEventTracker.track(
                "interactive:rotate",
                Helpers.App.getProductShownData()
              );
            });
          }),
          e.bind("interactive:doubleclick", function (e) {
            Helpers.GlobalEventTracker.track("interactive:doubleclick"),
              t.componentPopup && t.componentPopup.hide(),
              n(e, "focus");
          }),
          e.bind("interactive:backspace", function (e) {
            t.componentPopup && t.componentPopup.hide(),
              Helpers.App.isMobile() || r(e);
          }),
          e.bind("interactive:rightclick", function (e) {
            t.componentPopup && t.componentPopup.hide(),
              Helpers.App.isMobile() || i(e);
          }),
          e.bind("interactive:activate", function (e) {
            Helpers.GlobalEventTracker.track("interactive:activate"),
              t.componentPopup && t.componentPopup.hide(),
              n(e),
              t._destroyContextualMenu();
          }),
          e.bind("deprecate", function (e) {
            Helpers.GlobalEventTracker.track("engine:deprecate", {
              origin: e.data.origin,
            });
          }),
          e.bind(
            "smartTemplate:interactionStart",
            t._engineInteractionStartHandler.bind(this)
          );
      },
      _engineInteractiveClickHandler: function (e, t) {
        var n,
          i = this._getControlFromParam(e.data.targetName);
        if (i) {
          if (Helpers.App.isMobile()) {
            if (
              ((n = this.stageControlTabs.getIndexFromControl(i)), void 0 === n)
            )
              return;
            return void (void 0 !== t
              ? this.stageControlTabs._gotoTab(n, i[t].bind(i)())
              : this.stageControlTabs._gotoTab(n));
          }
          void 0 !== t && i[t].bind(i)();
        }
      },
      _engineBackspaceHandler: function (e) {
        var t = this._getControlFromParam(e.data.targetName);
        t &&
          (("MultiControl" !== t.constructor.className &&
            "AddLogoMultiControl" !== t.constructor.className) ||
            this._canGraphicBeHidden(t) !== !1) &&
          t.hideInStage();
      },
      _engineRightClickHandler: function (e) {
        var t = this._getControlFromParam(e.data.targetName);
        t &&
          (("MultiControl" !== t.constructor.className &&
            "AddLogoMultiControl" !== t.constructor.className) ||
            this._canGraphicBeHidden(t) !== !1) &&
          this._destroyContextualMenu().then(
            function () {
              this._createContextualMenu(t, e.data);
            }.bind(this)
          );
      },
      _canGraphicBeHidden: function (e) {
        return e.hasAssets() === !1
          ? !1
          : e.record.allowBlankItem === !1 || e.record.excludable === !1
          ? !1
          : !0;
      },
      _createContextualMenu: function (e, t) {
        var n = this,
          i = "Graphic";
        "TextControl" === e.constructor.className && (i = "Text");
        var r = new ContextualMenu({
          name: "contextualMenu",
          _control: e,
          _controlMethod: "hideInStage",
          _position: { top: t.top, left: t.left },
          _text: "Hide " + i,
        });
        r.render($("body")),
          r.show(),
          this.appendChild(r),
          setTimeout(function () {
            engine.bind(
              "interaction:mouseout",
              n._destroyContextualMenu.bind(n)
            );
          }, 1e3);
      },
      _destroyContextualMenu: function () {
        var e = this;
        return new Promise(function (t) {
          setTimeout(function () {
            e.contextualMenu &&
              e.contextualMenu.isMouseOver() === !1 &&
              (e.contextualMenu.destroy(),
              engine.unbind("interaction:mouseout")),
              t();
          });
        });
      },
      _engineChangeEventHandler: function (e) {
        var t, n, i, r, o, s, a, l;
        if (
          ((t = e.data.layer),
          (s = e.data.originalDispatcher),
          (n = t.name),
          (i = t.type),
          (a = "PositionControl" === s),
          (l = !1),
          (r = this.record.customRules.filter(function (e) {
            return e.layerName === n;
          })[0]))
        )
          if ((l = r.layerName.indexOf("Rules_strokes") > -1)) {
            var c, u, h, d;
            for (
              c = u = 0,
                h = function (e, t) {
                  var n, i;
                  for (n = { width: 1, height: 1 }, i = t; i < e.length; i++)
                    (n.width *= e[i].width), (n.height *= e[i].height);
                  return n;
                },
                r.accumulatedInteractions.push({
                  x: t.position.x,
                  y: t.position.y,
                  width: t.dimensions.width,
                  height: t.dimensions.height,
                  isPositionChange: a,
                }),
                d = 0;
              d < r.accumulatedInteractions.length;
              d++
            ) {
              var p = h(r.accumulatedInteractions, d + 1);
              (c += r.accumulatedInteractions[d].x * p.width),
                (u += r.accumulatedInteractions[d].y * p.height);
            }
            (r.position.x = c),
              (r.position.y = u),
              (r.scale.x *= t.scale.x),
              (r.scale.y *= t.scale.y),
              (r.dimensions.width *= t.dimensions.width),
              (r.dimensions.height *= t.dimensions.height),
              (r.isPristine = !1),
              (r.rotation = t.rotation);
          } else
            (r.scale = t.scale),
              (r.position = t.position),
              (r.dimensions = t.dimensions),
              (r.isPristine = !1),
              (r.rotation = t.rotation);
        else
          (o = {
            layerName: n,
            layerType: i,
            scale: t.scale,
            position: t.position,
            accumulatedInteractions: [],
            dimensions: t.dimensions,
            originalBounds: t.originalBounds,
            isPristine: !1,
            rotation: t.rotation,
          }),
            this.record.customRules.push(o);
        return (
          this._saveInteractionsToUrl(),
          this.dispatch("changeInteraction", { triggeredByUser: !0 }),
          a && !l
            ? (Helpers.StageType.setDesignPlan(
                this.getCleanRecord(this.record)
              ),
              void this._updateStageImage({
                src: null,
                canvas: engine.canvas,
                tryCanvas: !0,
              }))
            : (this.triggerChange(),
              void (
                Helpers.App.isMobile() === !0 && this._showControlsInZoom()
              ))
        );
      },
      _engineInteractionStartHandler: function (e) {
        var t = this,
          n = t._getControlFromParam(e.data.name);
        Helpers.App.isMobile() &&
          n &&
          ((slideNum = t.stageControlTabs.getIndexFromControl(n)),
          void 0 !== slideNum && t.stageControlTabs._gotoTab(slideNum));
      },
      _fetchAndSetAssetLayersForUiJson: function (e) {
        var t = this;
        return new Promise(function (n) {
          var i = [];
          e.graphic.forEach(function (n) {
            if (
              n.selectedLayer &&
              "document" === n.selectedLayer.type &&
              !Array.isArray(n.selectedLayer.layers)
            ) {
              var r = t.fetchAndSetAssetLayers(
                n.selectedLayer,
                e.defaultAssetColors
              );
              i.push(r);
            }
          }),
            Promise.all(i)
              .then(function () {
                n();
              })
              ["catch"](function (e) {
                t.dispatch("stage.error", {
                  error: !0,
                  message:
                    "There was an error loading this stage. Please refresh the page",
                  response: e,
                }),
                  n();
              });
        });
      },
      hasTextControls: function (e) {
        var t, n, i;
        return (
          (t = this._getUserAddedTextNamesFromUrl().length > 0),
          (n = Helpers.StageType.getMaxUserAddedTexts() > 0),
          (i = e.text.length > 0),
          i || n || t ? !0 : !1
        );
      },
      designDataErrorHandler: function (e) {
        this.onErrorLoadOtherStages(),
          this.loadFromUrlParameters(),
          this.dispatch("stage.error", e);
      },
      designDataHandler: function (e, t) {
        var n, i, r, o, s;
        return (
          this.updateStructureJson(t),
          (e.defaultAssetColors = e.defaultAssetColors || []),
          e.error || t.error
            ? this.designDataErrorHandler()
            : ((r =
                this.hasTextControls(e) === !0
                  ? this.buildStageFonts(e.text)
                  : Promise.resolve(e)),
              (o = this._fetchAndSetAssetLayersForUiJson(e)),
              this._createEngine(t, $.extend(!0, {}, e)),
              Tracker.start("20700-engineBootstrap"),
              (s =
                null === window.engine
                  ? Promise.resolve(null)
                  : engine.bootstrap().then(function (e) {
                      return Tracker.end("20700-engineBootstrap"), e;
                    })),
              (n = function () {
                return this._initialize(e, s);
              }.bind(this)),
              (i = function (e) {
                return this.designDataErrorHandler(e), Promise.reject(e);
              }.bind(this)),
              Promise.all([r, o]).then(n)["catch"](i))
        );
      },
      customImageFoundCheck: function () {
        var e = this;
        if (e._customImageNotFound === !0) {
          var t = {
            message: e.constructor.IMAGE_404_MESSAGE,
            action:
              NICE_DOMAIN.protocol +
              "://" +
              NICE_DOMAIN.hostname +
              "/api/v3/jobs/",
          };
          e.dispatch("stage.error", t),
            (e._customImageNotFound = !1),
            (e.keepWarning = !0);
        } else e.dispatch("notification.reset");
      },
      _updateStageImage: function (e, t) {
        var n = this;
        e.tryCanvas && n.canProcessWithEngine
          ? (e.canvas && n._loadInteractiveCanvas(e.canvas),
            "function" == typeof t && t())
          : (n._unLoadInteractiveCanvas(),
            n.stageImageWidget.updateSource(e.src).then(t)),
          n.dispatch("stage.updated", {
            type: "image",
            source: e.src,
            size: "",
            interactive: n._supportsInteractions() && n.canProcessWithEngine,
          }),
          n._repositionPiP();
      },
      _loadInteractiveCanvas: function (e) {
        var t = this;
        t.foregroundCanvas &&
          (t.foregroundCanvas.remove(),
          (t.foregroundCanvas = null),
          t.interactionControl.destroy()),
          (t.foregroundCanvas = e),
          t.stageImageWidget.initCanvas(t.foregroundCanvas),
          this.isMobilePhone === !0 &&
            (t.stageImageWidget.setDimensions(t.record.original.size),
            t.stageImageWidget.updateWorkAreaDimentions(),
            engine.setResizeControlDimensions()),
          t
            .appendChild(
              new UI.SmartTemplate.InteractionControl({
                name: "interactionControl",
                supportsInteractions: t._supportsInteractions(),
              })
            )
            .render(t.stageImageWidget.element),
          t._repositionInteractions(),
          (t.stLoader.elementToWrap = t.stageImageWidget
            .getElement()
            .find("canvas")),
          engine.bind("change", this._showInteractionControls.bind(this)),
          this.interactionControl.bind(
            "resetInteraction",
            function (e) {
              (e.data.originalDispatcher = this.interactionControl),
                this._waitForProcess(e);
            }.bind(this)
          ),
          this.interactionControl.bind("resetInteraction", function () {
            t._resetLayout(),
              engine._deactivateInteractions(),
              t.triggerChange(),
              t._showRuleControls();
          }),
          $(window).resize(function () {
            var e = $(t.foregroundCanvas);
            e.width("auto");
            var n = e.width();
            e.width(n + "px");
          }),
          $(window).resize(),
          t._showInteractionControls();
      },
      _showRuleControls: function () {
        var e = this.getComponentsByClassName("TextControl"),
          t =
            this.stageControlTabs &&
            this.layoutTabIndex &&
            this.stageControlTabs.isTabVisible(this.layoutTabIndex) === !1;
        this.scaling && this.scaling.show(),
          this.leftSideBar &&
            this.leftSideBar.layoutPicker &&
            (this.leftSideBar.layoutPicker.show(),
            t === !0 && this.stageControlTabs.showTab(this.layoutTabIndex)),
          e.forEach(function (e) {
            e.showRuleControls();
          });
      },
      _hideRuleControls: function () {
        var e = this.getComponentsByClassName("TextControl");
        this.scaling && this.scaling.hide(),
          this.leftSideBar &&
            this.leftSideBar.layoutPicker &&
            (this.leftSideBar.layoutPicker.hide(),
            this.stageControlTabs &&
              this.stageControlTabs.isTabVisible(this.layoutTabIndex) &&
              this.stageControlTabs.hideTab(this.layoutTabIndex)),
          e.forEach(function (e) {
            e.hideRuleControls();
          });
      },
      _showInteractionControls: function () {
        this.interactionControl &&
          (this._areAllRulesPristine() ||
            (this.interactionControl.showControls(), this._hideRuleControls()));
      },
      _hideInteractionControls: function () {
        this.interactionControl &&
          (this.interactionControl.hideControls(), this._showRuleControls());
      },
      _unLoadInteractiveCanvas: function () {
        var e = this;
        e.foregroundCanvas &&
          (e.foregroundCanvas.remove(),
          (e.foregroundCanvas = null),
          e.interactionControl.destroy(),
          e.stageImageWidget.$image.show(),
          (e.stLoader.elementToWrap = e.stageImageWidget
            .getElement()
            .find("img")),
          "undefined" != typeof engine &&
            engine.unbind("change", this._showInteractionControls),
          (e.record.customRules = []),
          e.triggerChange());
      },
      _supportsInteractions: function () {
        var e = !1;
        return window.disableMobileInteractions === !0 &&
          this.isMobilePhone === !0
          ? !1
          : (this.record.graphic
              .filter(function (e) {
                return -1 === e.name.indexOf("added-graphic");
              })
              .forEach(function (t) {
                (t.allowScale || t.allowMove) && (e = !0);
              }),
            this.record.text.forEach(function (t) {
              (t.allowScale || t.allowMove) && (e = !0);
            }),
            this.record.customGraphic.forEach(function (t) {
              (t.allowScale || t.allowMove) && (e = !0);
            }),
            e);
      },
      _processEventHandler: function () {
        this.stageActionsManager.enableShareButton();
      },
      updateRelatedTemplates: function (e, t) {
        var n, i;
        (n = this._relatedTemplates[e.name]),
          (i = n.processInputFlags),
          clearTimeout(n.debounce),
          i.push(t),
          (n.debounce = setTimeout(
            function () {
              (t = i.some(function (e) {
                return e;
              })),
                (n.processInputFlags = []),
                this._updateRelatedTemplates(e, t);
            }.bind(this),
            2e3
          ));
      },
      _updateRelatedTemplates: function (e, t) {
        var n, i, r, o;
        (n = e.getVisibleItems()),
          (i = n
            .filter(function (e) {
              return e.busy === !1;
            })
            .filter(function (e) {
              return "output" === e.strategy || t;
            })),
          (r = n
            .filter(function (e) {
              return e.busy === !0;
            })
            .filter(function (e) {
              return "output" === e.strategy || t;
            })),
          (o = function s(t) {
            var n = t.target;
            e.update([n]), n.unbind("free", s);
          }),
          r.forEach(function (e) {
            e.unbind("free"), e.bind("free", o);
          }, this),
          e.setLastChange(performance.now()),
          (this.sharedQueue && this.sharedQueue === e.queue) || e.queue.clear(),
          e.update(i);
      },
      _preventInvalidFonts: function () {
        var e =
          (Helpers.App.getAllURLParams(),
          { success: !0, message: "Invalid font" });
        return e;
      },
      _runValidations: function () {
        var e = [],
          t = this;
        e.push(t._preventInvalidFonts), e.push(t._preventGraphicsWithoutText);
        for (var n = 0; n < e.length; n++) {
          var i = e[n].apply(this);
          if (i.success === !1) return i;
        }
        return { success: !0 };
      },
      _preventGraphicsWithoutText: function () {
        var e,
          t,
          n,
          i = { success: !0 };
        return (
          (e = this.record.text.filter(function (e) {
            return !e.isAddedText;
          })),
          (t = this.record.graphic.filter(function (e) {
            return e.styles.layerEffects && e.styles.layerEffects.solidFill;
          })),
          (n = t.some(function (e) {
            return e.layers.some(function (e) {
              return e.visible;
            });
          })),
          (hasAllDefaultTextsEmpty = e.every(function (e) {
            return e.visible === !1 || 0 === e.contents.trim().length
              ? !0
              : void 0;
          })),
          hasAllDefaultTextsEmpty &&
            n &&
            e.length &&
            ((i.success = !1),
            (i.message = "Sorry, you need to enter some text")),
          i
        );
      },
      _renderUi: function () {
        var e = this,
          t = this.isMobilePhone,
          n = $(".left-sidebar-skeleton"),
          i = $(".right-sidebar-skeleton");
        if (
          (0 == n.length && (n = null),
          0 == i.length && (i = null),
          this.appendChild(
            new UI.SmartTemplate.SideBar({
              name: "leftSideBar",
              record: this.record,
              cssClass: "left",
              element: n,
              isMobilePhone: t,
            })
          ),
          this.appendChild(
            new UI.SmartTemplate.SideBar({
              name: "rightSideBar",
              record: this.record,
              cssClass: "right",
              element: i,
              isMobilePhone: t,
            })
          ),
          (e.addTextButtonSideBar = this.leftSideBar),
          t === !1)
        )
          e.leftSideBar.activate(),
            e.rightSideBar.activate(),
            (e._filesContainer = e.leftSideBar),
            (this.bgContainer = this.rightSideBar),
            this._addDragEventsListeners();
        else {
          (e._filesContainer = e.stageActionsManager),
            this.stageActionsManager.element.append(
              $(
                '<div class="smart_template_stage_actions first-row btn-group stage-actions"></div>'
              )
            );
          var r = this.stageActionsManager.element.find(
            ".smart_template_stage_actions.first-row"
          );
          this.stageActionsManager.element.append(
            $(
              '<div class="smart_template_stage_actions second-row btn-group stage-actions"></div>'
            )
          );
          var o = this.stageActionsManager.element.find(
            ".smart_template_stage_actions.second-row"
          );
          this.appendChild(
            new UI.SmartTemplate.SideBar({
              name: "bgMobileSideBar",
              cssClass: "right",
              isMobilePhone: t,
            })
          ),
            (this.bgContainer = this.bgMobileSideBar),
            this.stageActionsManager
              .appendChild(
                new UI.SmartTemplate.Mobile.ChangeTextButton({
                  name: "changeText",
                  sidebar: this.leftSideBar,
                })
              )
              .render(r),
            this.stageActionsManager
              .appendChild(
                new UI.SmartTemplate.Mobile.ChangeAssetButton({
                  name: "changeGraphics",
                  label: "Change Graphic / Colors",
                  sidebar: this.rightSideBar,
                  className: "smart_template--change_graphic_button",
                })
              )
              .render(r),
            this.stageActionsManager
              .appendChild(
                new UI.SmartTemplate.Mobile.ChangeAssetButton({
                  name: "changeBackground",
                  label: "Change Background",
                  sidebar: this.bgMobileSideBar,
                  className: "smart_template--change_background_button",
                })
              )
              .render(o),
            $(".modal-backdrop.fade").css("z-index", "1043"),
            this.appendChild(
              new UI.SimpleModal({ name: "smartTemplateModal" })
            ).render($(document.body)),
            this.smartTemplateModal.setContent(""),
            this.smartTemplateModal.setHeaderContent(""),
            this.smartTemplateModal.addCloseButton(),
            this.multiControlModalHandler(),
            this.bind("showModal", function (t) {
              if (Helpers.App.getMobileControlsModalState() !== !0)
                if (t.data && t.data.originalDispatcher) {
                  e.componentPopup.show(t.data.originalDispatcher);
                  var n = e.componentPopup.getContentHeight();
                  e.stageControlTabs.setContentSliderHeight(n);
                } else
                  $(".modal-backdrop.fade").css("z-index", "1043"),
                    e.smartTemplateModal.activate();
            }),
            this.bind("hideModal", function (t) {
              t.data && t.data.originalDispatcher
                ? (e.componentPopup.hide(),
                  e.stageControlTabs.setContentSliderHeight())
                : e.smartTemplateModal.deactivate();
            });
        }
        this.customGraphicBindings(),
          this.customImageBindings(),
          this.libraryImageBindings(),
          this.bind("repositionVideo", this._repositionVideoHandler.bind(this)),
          this.bind(
            "repositionLibraryVideo",
            this._repositionVideoLibraryHandler.bind(this)
          ),
          e._filesContainer.bind("imageDataNotFound", function () {
            e._customImageNotFound = !0;
          });
        var s = function () {
          var t,
            n =
              e.record.uploadRequired === !0 &&
              e.record.customGraphic.length > 0;
          if (n === !1)
            return void e.stageActionsManager.enableDownloadButton();
          t = function (e) {
            return e.layers.some(function (e) {
              return e.image && e.visible;
            });
          };
          var i = e.record.customGraphic.some(t);
          i === !0
            ? e.stageActionsManager.enableDownloadButton()
            : e.stageActionsManager.disableDownloadButton();
        };
        return (
          s(),
          this.bind("customGraphicsUpdate", s),
          this.bind("extracolorchanged", function (t) {
            var n = t.data.color;
            if (
              t.data.originalDispatcher &&
              -1 !=
                t.data.originalDispatcher.name.toLowerCase().indexOf("accent")
            ) {
              var i = this.record.graphic.filter(function (e) {
                return "Accent Color" === e.name;
              })[0];
              i && (i.color = n), (e.record.defaultAssetColors[0] = n);
            }
          }),
          e._filesContainer.bind("customGraphicNotFound", function (t) {
            console.log("customGraphicNotFound");
            var n, i, r, o;
            (n = t.data),
              (i = n.id),
              (o = [
                Helpers.App.getUserUploadsUrl(),
                "output_images",
                i + ".png",
              ].join("/")),
              (r = t.data.target),
              $.ajax({ method: "HEAD", url: o })
                .done(function () {
                  var t = r.record.layers[0].image;
                  (r.pendingImageUrl = o),
                    (r.record.hash = i),
                    (r.record.layers[0].image = o),
                    (r.record.layers[0].visible = !0),
                    e.dispatch("change", {
                      errorCallback: function (e) {
                        "abort" !== e.statusText &&
                          (r.hideDiscardButton(),
                          r.hideRepositionButton(),
                          (r.record.layers[0].image = t));
                      },
                      triggeredByPopState: !0,
                    }),
                    e.dispatch("customGraphicsUpdate"),
                    r.showDiscardButton(),
                    r.showRepositionButton(),
                    e.enableAllFileUploads(),
                    r.urlInputControl && r.urlInputControl.hide();
                })
                .fail(function () {
                  e._customImageNotFound = !0;
                });
          }),
          this._filesContainer.bind(
            "graphicCropSuccess",
            this._graphicCropSuccessHandler.bind(this)
          ),
          this.bind("customImageReady", function (t) {
            console.log("customImageReady");
            var n = t.data.customUploader,
              i = t.data.componentToInform;
            if (n.id) {
              var r = {
                id: n.id,
                userImagePath: n.userImagePath,
                viewport: n.viewport,
              };
              e.cropCustomImage(
                r,
                e._cropCustomImageSuccessHandler.bind(e),
                e._cropCustomImageErrorHandler.bind(e),
                i
              );
            }
          }),
          this.bgContainer.bind(
            "resolutionChange",
            this._resolutionChangeEventHandler.bind(this)
          ),
          e.leftSideBar.bind("file.loaded", function (e) {
            e.stopPropagation();
          }),
          this._renderControls()
        );
      },
      _loadImage: function (e, t) {
        var n = new Image();
        (n.origin = "Anonymous"),
          (n.src = e),
          n.addEventListener("load", function () {
            t(null, n);
          }),
          n.addEventListener("error", function () {
            t({ message: "Failed to load image" });
          });
      },
      setCropperHeader: function (e) {
        var t = function () {
          this.setHeaderText(""),
            this.unbind("cropImage", t),
            this.unbind("modal.cancel", t);
        };
        this.cropperModal.setHeaderText(e),
          this.cropperModal.bind("cropImage", t),
          this.cropperModal.bind("modal.cancel", t);
      },
      _recropBackground: function (e, t) {
        var n, i, r;
        (n = e.getSelectedItem()),
          (i = !!n && "customBg" === n.name),
          i !== !1 &&
            ((r = e.record.layers[0].image),
            this._loadImage(
              r,
              function (e, i) {
                var r, o;
                e ||
                  ((i.width != t.width || i.height != t.height) &&
                    (this.setCropperHeader(
                      "Adjust your custom background to the selected template size"
                    ),
                    (r = n.customGraphicPreview),
                    (o = r.record.record_hash),
                    this.dispatch("repositionImage", {
                      recordHash: o,
                      cropParams: r.cropParams,
                      graphicItem: r,
                      viewportData: t,
                      userImagePath: r.getImageUrl(),
                      skipCropParams: !0,
                    })));
              }.bind(this)
            ));
      },
      _setupSizeChange: function (e, t) {
        var n, i;
        e &&
          t &&
          ((n = { sizeChange: null, endRender: null }),
          (i = function () {
            var t, i;
            (t = this),
              (i = Object.values(n).map(function (e) {
                return e || Promise.reject();
              })),
              Promise.all(i)
                .then(function (n) {
                  var i = n[0].dimensions.preview;
                  t._recropBackground(e, i);
                })
                ["catch"](function () {});
          }.bind(this)),
          t.bind("sizeChange", function (e) {
            (n.sizeChange = Promise.resolve(e.data)), i();
          }),
          e.bind("endRender", function (e) {
            (n.endRender = Promise.resolve(e.data)), i();
          }));
      },
      _startZoomInCanvas: function () {
        var e = this;
        e.workAreaLoaderInterval && clearInterval(e.workAreaLoaderInterval),
          (e.workAreaLoaderInterval = setInterval(function () {
            var t = e.stageImageWidget.getElement().find("canvas");
            t.length > 0 &&
              t.height() &&
              t.width() &&
              "hidden" != t.css("visibility") &&
              "none" != t.css("display") &&
              jQuery.contains(document, t[0]) &&
              (clearInterval(e.workAreaLoaderInterval), e._startZoom(t));
          }, 100));
      },
      _startZoomInImage: function () {
        var e = this;
        e.workAreaLoaderInterval && clearInterval(e.workAreaLoaderInterval),
          (e.workAreaLoaderInterval = setInterval(function () {
            var t = e.stageImageWidget.$image;
            t.height() &&
              t.width() &&
              "none" != t.css("display") &&
              "hidden" != t.css("visibility") &&
              (clearInterval(e.workAreaLoaderInterval),
              e._startZoom(e.stageImageWidget.$image));
          }, 100));
      },
      _startZoom: function (e) {
        if (this.isMobilePhone !== !1) {
          var t = this;
          t.stageImageWidget.destroyPanZoom(),
            t.stageImageWidget.unbind("zoom"),
            t.stageImageWidget.unbind("pinchReady"),
            t.stageImageWidget.unbind("pinchEnd"),
            t.stageImageWidget.unbind("orientationchange"),
            t.stageImageWidget.startPanZoom(
              e,
              $("#main-content-wrapper"),
              5,
              function () {
                return window.engine &&
                  window.engine._interactive &&
                  window.engine.ready
                  ? void 0 === window.engine.getActiveLayer()
                  : null;
              }
            ),
            this.stageImageWidget.bind("pinchReady", function () {
              window.engine &&
                window.engine._interactive &&
                window.engine.ready &&
                window.engine.disableInteractions(),
                t._hideControlsInZoom();
            }),
            this.stageImageWidget.bind("pinchEnd", function (e) {
              e.data.scaled === !1 &&
                window.engine &&
                window.engine._interactive &&
                window.engine.ready &&
                window.engine.enableInteractions(),
                e.data.scaled === !1 && t._showControlsInZoom();
            }),
            t.stageImageWidget.bind("orientationchange", function () {
              $("#main-content-wrapper").css({ padding: "", height: "auto" }),
                t.stageImageWidget.resetPanZoom(),
                t._showControlsInZoom(),
                P.delay(50).then(function () {
                  t._startZoom(e);
                });
            });
        }
      },
      _hideControlsInZoom: function () {
        this.interactionControl && this.interactionControl.hideControls(),
          this.scaling && this.scaling.hide();
      },
      _showControlsInZoom: function () {
        var e = Helpers.App.getAllURLParams(),
          t = "pos-size_",
          n = Object.keys(e).filter(function (e) {
            return e.indexOf(t) > -1;
          });
        n.length > 0 && this.interactionControl
          ? this.interactionControl.showControls()
          : this.scaling && this.scaling.show();
      },
      _resolutionChangeEventHandler: function (e) {
        var t, n, i, r, o;
        (t = e.data),
          (n = t.preview_dimensions),
          (i = e.target),
          (r = i.Folder_Background),
          r && ((o = r.grid), o && o.customBg.updateViewport(n)),
          this.dispatch("change", { sizeData: e.data });
      },
      _updateAddGraphicButtons: function (e) {
        this._addGraphicButtons.forEach(function (t) {
          t && t.update(e);
        });
      },
      _renderAddGraphicDesktopButton: function () {
        var e =
          0 === Helpers.StageType.getMaxUserAddedGraphics()
            ? 0
            : Helpers.StageType.getMaxUserAddedGraphics() + 1;
        this._hasLogoCustomGraphic && e--;
        var t = new AddGraphicButton({
          name: "addGraphicButtonDesktop",
          maxAddedGraphics: e,
          builtInGraphicsCount: UserGraphicController._getBuiltInGraphicCount(
            this.record.graphic
          ),
          canProcessWithEngine: this.canProcessWithEngine,
        });
        0 === this._getLayerlessMultiControlCount() &&
          t.element.css("margin-top", "32px"),
          this.rightSideBar.appendChild(t),
          t.render(this.rightSideBar.element),
          this._addGraphicButtons.push(t);
      },
      _getLayerlessMultiControlCount: function () {
        return this.record.graphic
          .concat(this.record.background)
          .reduce(function (e, t) {
            return e + (!t.hasLayers && t.allowColorpicker);
          }, 0);
      },
      _renderUserGraphicControlMobile: function (e) {
        var t,
          n = this,
          i = parseInt(e.record.name.replace("added-graphic", ""), 10),
          r = this._addGraphicButtons[i];
        e.renderCompoundButtonAfter(r.element),
          r.destroy(),
          (this._addGraphicButtons[i] = null),
          n.resetControlsInstances(e),
          e.bind("render", function (e) {
            n.resetControlsInstances(e.target);
          }),
          (t = this._addGraphicButtons[i + 1]),
          t && t.show(),
          n.rightSideBar.appendChild(e);
      },
      _destroyUserGraphicControlMobile: function (e, t) {
        var n = parseInt(e.name.replace("added-graphic", ""), 10),
          i = new AddGraphicButton({
            name: "addGraphicButtonMobile" + n,
            maxAddedGraphics: Helpers.StageType.getMaxUserAddedGraphics(),
            builtInGraphicsCount: UserGraphicController._getBuiltInGraphicCount(
              this.record.graphic
            ),
            canProcessWithEngine: this.canProcessWithEngine,
            isAddedLogo: 0 === n && !this._hasLogoCustomGraphic,
            isMobile: Helpers.App.isMobile(),
            type: "addGraphic",
          });
        (this._mobileSpectrumWrappers[t.children[0].name] = null),
          t.renderAfterCompoundButton(i.element),
          t.destroy(),
          this.rightSideBar.appendChild(i),
          (this._addGraphicButtons[n] = i);
      },
      _destroyGraphicControlDesktop: function (e) {
        var t,
          n,
          i,
          r,
          o = e.type + "_" + e.name;
        (n = this.rightSideBar),
          (t = n[o]),
          t || ((n = this.leftSideBar), (t = n[o])),
          n === this.rightSideBar &&
            ((i = e.hasLayers
              ? this._layerfulControlHeight
              : this._layerlessControlHeight),
            (r = e.hasLayers ? 1 : 0),
            (this._rightSidebarAvailableLayerfulControlSlots += r),
            (this._rightSidebarAvailableHeight += i)),
          t.destroy();
      },
      _graphicCropSuccessHandler: function (e) {
        var t, n, i, r;
        (t = e.data),
          (n = t.customGraphicControl),
          (i = {
            triggeredByPopState: t.triggeredByPopState,
            triggeredByUser: !t.triggeredByPopState,
          }),
          (r = n.record.layers[0].image),
          r !== t.croppedImageUrl &&
            ((i.originalDispatcher = n), (i.changedProperty = "image")),
          Helpers.GlobalEventTracker.smartTemplateEvent("cropEnd", {
            id: t.id,
          }),
          (n.record.layers[0].image = t.croppedImageUrl),
          (n.record.layers[0].visible = !0),
          (n.record.hash = t.id),
          this.dispatch("customGraphicsUpdate"),
          n.showDiscardButton(),
          n.showRepositionButton(),
          this.enableAllFileUploads(),
          n.urlInputControl && n.urlInputControl.hide();
      },
      _grabUrlSuccessHandler: function (e) {
        e.hideFileButton(),
          this._removeLoaderDivElement(),
          this.triggerChange(),
          this.stageActionsManager.enableDownloadButton(),
          this.enableAllFileUploads();
      },
      _grabUrlStart: function () {
        this._addLoaderDivElement(), this.disableAllFileUploads();
      },
      _grabUrlFail: function (e) {
        e &&
          e.data &&
          e.data.message &&
          this.dispatch("stage.error", { message: e.data.message }),
          this._removeLoaderDivElement(),
          this.enableAllFileUploads();
      },
      _displayItemsBelowImage: function () {
        this.$relatedTemplatesContainer.length &&
          this.$relatedTemplatesContainer.css("visibility", "visible"),
          this.$savedConfigurationsContainer.length &&
            this.$savedConfigurationsContainer.css("visibility", "visible");
      },
      _imageUploadSuccessHandler: function (e, t) {
        console.log("_imageUploadSuccessHandler"),
          Helpers.GlobalEventTracker.track(
            "StageCanvas-imageUploadSuccessHandler:"
          );
        var n, i, r, o, s;
        (i = t.id),
          (n = this),
          (r = t.previousId),
          (o = t.previousUserImagePath),
          (s = [Helpers.App.getUserUploadsUrl(), i, t.file_name].join("/")),
          Helpers.GlobalEventTracker.smartTemplateEvent("uploadEnd", { id: i });
        var a = {
            id: i,
            userImagePath: s,
            viewport: { width: e.record.width, height: e.record.height },
          },
          l = function (t) {
            console.log("crop success");
            var i, r;
            (i = t.data),
              (r = i.cropped_image_url),
              (e.id = i.id),
              (e.userImagePath = s),
              e.urlInputControl && e.urlInputControl.hide(),
              (e.cropParams = i.crop_params),
              e.setUrlParameter(i.id),
              e.showRepositionButton(),
              n._removeLoaderDivElement(),
              n._filesContainer.dispatch("graphicCropSuccess", {
                croppedImageUrl: r,
                customGraphicControl: e,
                id: i.id,
              });
          },
          c = function (t) {
            console.log("crop fail");
            var s = n.customUploadFail(t, e, r, o);
            Helpers.GlobalEventTracker.smartTemplateEvent("cropError", {
              message: s,
              id: i,
            }),
              n.dispatch("stage.error", { message: s, cropData: a });
          };
        n.cropGraphic(a, l, c);
      },
      customUploadFail: function (e, t, n, i) {
        var r,
          o,
          s = this;
        try {
          (r = JSON.parse(e.responseText)),
            (o = r.error || "Couldn't process image, please try again");
        } catch (a) {
          o = "Couldn't process image, please try again";
        }
        return (
          n &&
            i &&
            ((t.id = n),
            (t.userImagePath = i),
            t.getRecordLayerImage() &&
              (t.showDiscardButton(), t.showRepositionButton())),
          s.enableAllFileUploads(),
          s._removeLoaderDivElement(),
          o
        );
      },
      loadNewSize: function (e) {
        var t, n, i;
        (t = this),
          (n = [
            NICE_DOMAIN.protocol + "://" + NICE_DOMAIN.hostname,
            "smart_templates",
            t.record.id,
            "sizes",
            e.id,
            "structure.json",
          ]),
          e.id || n.splice(3, 2),
          (n = n.join("/")),
          (this.record.customRules = []),
          t._showRuleControls(),
          (i = JSON.parse(JSON.stringify(this.record))),
          t.fetchStructureAndBootstrap(n, i);
      },
      _repositionScaling: function () {
        if (this.scaling) {
          var e = this.stageImageWidget.element,
            t = this.stageImageWidget.$image,
            n = this.stageImageWidget.getElement().find("canvas"),
            i = this.canProcessWithEngine && n.length > 0 ? n : t;
          this.scaling.element.css(
            "bottom",
            e.height() - i.outerHeight() + 10 + "px"
          ),
            this.scaling.element.css(
              "left",
              (e.width() - i.outerWidth()) / 2 + 10 + "px"
            ),
            this.scaling.element.css("right", "initial"),
            Helpers.App.isMobile() === !0 &&
              this.scaling.element.css("left", "unset");
        }
      },
      _repositionInteractions: function () {
        if (this.interactionControl) {
          var e = this.stageImageWidget.element,
            t = this.stageImageWidget.getElement().find("canvas");
          this.interactionControl.element.css(
            "right",
            (e.outerWidth() - t.width()) / 2 + "px"
          ),
            this.interactionControl.element.css("width", t.width() + "px"),
            this.interactionControl.element.css("height", t.height() + "px");
          var n = this.interactionControl.element.find(".hint");
          Helpers.App.isMobile() === !0 && n.hide();
          var i = n.find(".arrow-hint");
          n.outerWidth() + i.outerWidth() >
            this.interactionControl.element.outerWidth() &&
            (n.css({ "font-size": "10px" }),
            i.css({
              width: "35px",
              height: "50px",
              position: "absolute",
              "background-size": "contain",
              "margin-left": "0",
              "margin-top": "0",
            }));
        }
      },
      reloadBcFlagged: function () {
        var e, t, n;
        (e = this),
          (t = [
            NICE_DOMAIN.protocol + "://" + NICE_DOMAIN.hostname,
            "smart_templates",
            e.record.id,
            "sizes",
            e.record.size,
            "structure.json",
          ]),
          e.record.size || t.splice(3, 2),
          (t = t.join("/")),
          (e.record.customRules = []),
          e._showRuleControls(),
          (n = JSON.parse(JSON.stringify(e.record))),
          e.fetchStructureAndBootstrap(t, n);
      },
      fetchStructureAndBootstrap: function (e, t) {
        var n = this,
          i = !0;
        window.disableMobileInteractions === !0 &&
          n.isMobilePhone === !0 &&
          (i = !1),
          $.ajax(e).done(function (e) {
            var r;
            if (
              (n.updateStructureJson(e),
              (r = Helpers.StageType.getStructureInstance()),
              window._pl_featureFlags &&
                window._pl_featureFlags.t21679_destroy_pixi_trees)
            )
              var o = window.engine;
            else
              window.engine && window.engine.destroy(), (window.engine = null);
            (window.engine = new Engine({
              ui: t,
              interactive: i,
              structure: r.getTree(),
              environment: window.environment,
              preventNewRulesBehavior: window.preventNewRulesBehavior || !1,
            })),
              n.engineBindings(engine),
              engine.bootstrap().then(function (e) {
                return engine
                  .process(jQuery.extend(!0, {}, t), !1)
                  .then(function (t) {
                    var i = /^data:(.*?);base64,(.*)$/.exec(t),
                      r = i[1],
                      s = i[2];
                    (n.record.previewImage = { type: r, value: s }),
                      Helpers.StageType.setPreviewImage(s),
                      Helpers.StageType.setDesignPlan(
                        n.getCleanRecord(n.record)
                      ),
                      n._updateStageImage(
                        { src: t, canvas: e, tryCanvas: !0 },
                        function () {
                          n._showStageImage(), n._removeLoaderDivElement();
                        }
                      ),
                      n._loadInteractionsFromUrl(),
                      n.record.customRules.length > 0 && (n.pendingChange = !0),
                      (n._changeInProgress = !1),
                      n.processPendingChange(),
                      window._pl_featureFlags &&
                        window._pl_featureFlags.t21679_destroy_pixi_trees &&
                        o &&
                        o.destroy(!0);
                  });
              });
          });
      },
      updateStructureJson: function (e) {
        var t, n;
        (t = new Structure({ tree: e })),
          (n = t.getSmartObject("Background")),
          n && ((n.width = e.width), (n.height = e.height)),
          Helpers.StageType.setStructureInstance(t.getTree()),
          (window.structureData = t.getTree());
      },
      processPendingChange: function () {
        var e = this;
        e.pendingChange &&
          (console.log("Processing queued change."),
          (e.pendingChange = !1),
          e.triggerChange());
      },
      cropCustomImage: function (e, t, n, i) {
        console.log("cropCustomImage");
        var r = this,
          o = function a(o, s) {
            console.log("onceImageCropped"),
              (r.resultShown.start = performance.now()),
              (r.resultShown.origin = "file"),
              (s.id = e.id),
              (s.viewport = e.viewport),
              r._addLoaderDivElement(),
              CropperRemoteCropper.crop(s)
                .then(function (e) {
                  r._removeLoaderDivElement(), t(e, i);
                })
                ["catch"](n),
              r.cropperModal.unbind("cropImage", a);
          },
          s = function () {
            console.log("onCance"),
              r.cropperModal.unbind("modal.cancel", s),
              UI.SmartTemplate.StageCanvas.dispatch("cropEnds"),
              r.cropperModal.unbind("cropImage", o);
          };
        r.cropperModal.bind("cropImage", o),
          r.cropperModal.bind("modal.cancel", s),
          r.cropperModal.setViewportDimensions(e.viewport),
          r.cropperModal.loadImage(
            { cropperConstraints: { zoom: !1, movement: !1 } },
            e.userImagePath
          );
      },
      _cropCustomImageSuccessHandler: function (e, t) {
        console.log("_cropCustomImageSuccessHandler");
        var n, i, r, o;
        (n = this),
          (i = e.data),
          (id = i.id),
          (r = i.cropped_image_url),
          (o = i.thumbnail_url),
          t.dispatch("cropSuccess", {
            id: id,
            croppedImageUrl: r,
            thumbnailUrl: o,
          });
      },
      _cropCustomImageErrorHandler: function (e) {
        console.log("_cropCustomImageErrorHandler");
        var t, n, i;
        (t = this),
          (n = e.responseJSON || {}),
          (i = n.error || "Couldn't process image, please try again"),
          t._removeLoaderDivElement();
        var r = { message: i };
        t.dispatch("stage.error", r),
          UI.SmartTemplate.StageCanvas.dispatch("cropEnds");
      },
      _uploadCustomImageErrorHandler: function (e) {
        this._cropCustomImageErrorHandler(e);
      },
      cropGraphic: function (e, t, n) {
        Helpers.GlobalEventTracker.track("StageCanvas-cropGraphic");
        var i, r, o;
        (i = this),
          (userImagePath = e.userImagePath),
          (r = e.viewport),
          e.cropperData && (o = e.cropperData);
        var s = function a(o, s) {
          (i.resultShown.start = performance.now()),
            (i.resultShown.origin = "file"),
            (s.id = e.id),
            (s.viewport = r),
            Helpers.GlobalEventTracker.smartTemplateEvent("cropStart", s),
            i._addLoaderDivElement(),
            CropperRemoteCropper.crop(s).then(t)["catch"](n),
            i.cropperModal.unbind("cropImage", a);
        };
        i.cropperModal.bind("cropImage", s),
          i.cropperModal.bind("modal.cancel", function () {
            i.cropperModal.unbind("cropImage", s);
          }),
          i.cropperModal.setViewportDimensions(r),
          i.cropperModal.loadImage(
            {
              cropperConstraints: { zoom: !1, movement: !1 },
              existingImageInfo: o,
            },
            userImagePath
          );
      },
      hideMobileButtonsIfEmpty: function () {
        var e,
          t = this,
          n = t.getComponentsByType("graphic"),
          i = t.getComponentsByType("background"),
          r = t.getComponentsByClassName("TextControl");
        e = r.length > 0 || t._getUserAddedTextNamesFromUrl().length > 0;
        var n = n.filter(function (e) {
            return (
              (e.record.allowColorpicker === !1 && e.record.hasLayers === !1) ==
              !1
            );
          }),
          i = i.filter(function (e) {
            return (
              (e.record.allowColorpicker === !1 && e.record.hasLayers === !1) ==
              !1
            );
          });
        e ||
          n.length ||
          t.stageActionsManager.element
            .find(".smart_template_stage_actions.first-row")
            .hide(),
          e || t.stageActionsManager.changeText.hide(),
          n.length || t.stageActionsManager.changeGraphics.hide(),
          i.length ||
            t.stageActionsManager.element
              .find(".smart_template_stage_actions.second-row")
              .hide();
      },
      hideSidebarsIfEmpty: function () {
        var e = $("aside.smart-templates__sidebar.left"),
          t = $("aside.smart-templates__sidebar.right"),
          n =
            ($(".page-container"),
            ($("aside.smart-templates__sidebar.left .text-control")[0] ||
              $(
                "aside.smart-templates__sidebar.left .input-file-control"
              )[0]) &&
              e.children().length > 0),
          i =
            ($("aside.smart-templates__sidebar.right .graphic-control")[0] ||
              $(
                "aside.smart-templates__sidebar.right .background-color-control"
              )[0] ||
              $("aside.smart-templates__sidebar.right .background-image")[0]) &&
            t.children().length > 0;
        n ||
          Helpers.StageType.getMaxUserAddedTexts() ||
          (e.hide(), this.pageContainer.addClass("no-left-sidebar")),
          i || Helpers.StageType.getMaxUserAddedGraphics() || t.hide();
      },
      _addLoaderDivElement: function () {
        var e = this;
        e._currentlyLoading ||
          ((e._currentlyLoading = !0),
          e.stLoader.show(),
          $("body").removeClass("app-processing-image"),
          $(".processing-modal").css({ display: "none" }));
      },
      _removeLoaderDivElement: function () {
        var e = this;
        (e._currentlyLoading = !1), e.stLoader.hide();
      },
      _crop: function (e) {
        return (
          console.warn("StageCanvas:_crop is deprecated"),
          Helpers.GlobalEventTracker.track("StageCanvas-crop"),
          $.ajax("/cropper/crop", { method: "POST", data: e })
        );
      },
      _upload: function (e) {
        return (
          console.warn("StageCanvas:_upload is deprecated"),
          Helpers.GlobalEventTracker.track("StageCanvas-upload"),
          $.ajax({
            url: "/cropper/upload",
            data: e,
            method: "POST",
            processData: !1,
            contentType: !1,
            cache: !1,
          })
        );
      },
      disableAllFileUploads: function () {
        var e = this;
        e._filesContainer.children
          .filter(function (e) {
            return "CustomGraphicControl" === e.constructor.className;
          })
          .forEach(function (e) {
            e.disableUpload();
          });
      },
      enableAllFileUploads: function () {
        var e = this;
        e._filesContainer.children
          .filter(function (e) {
            return "CustomGraphicControl" === e.constructor.className;
          })
          .forEach(function (e) {
            e.enableUpload();
          });
      },
      loadControlAssets: function () {
        var e,
          t = this,
          n = [],
          i = [],
          r = t.getComponentsByClassName("MultiControl"),
          o = t.getComponentsByClassName("GraphicControl"),
          s = t._getTextControls(),
          a = t.similarStages,
          l = 0,
          c = t.children.filter(function (e) {
            return e.name && e.name.indexOf("relatedTemplates") >= 0;
          }),
          n = s.concat(a);
        (i = o.concat(r)),
          (i = i.concat(c)),
          (e = function (e, t) {
            e.forEach(function (n) {
              n && n.loadAssets
                ? n.loadAssets(function () {
                    ++l === e.length && t && t();
                  })
                : ++l === e.length && t && t();
            });
          }),
          e(n, function () {
            e(i);
          }),
          this._displayItemsBelowImage();
      },
      _getControlFromParam: function (e) {
        return this.getComponentsByClassName("TextControl")
          .concat(this.getComponentsByClassName("CustomGraphicControl"))
          .concat(this.getComponentsByClassName("MultiControl"))
          .concat(this.getComponentsByClassName("AddLogoMultiControl"))
          .filter(function (t) {
            return t.record && t.record.name === e;
          })[0];
      },
      _loadHighResStructure: function () {
        var e, t, n;
        (e = this),
          (e._timeTop = 30),
          (t = [
            NICE_DOMAIN.protocol + "://" + NICE_DOMAIN.hostname,
            "smart_templates",
            e.record.id,
            "highres/structure.json",
          ].join("/")),
          (e.customRules = []),
          e._showRuleControls(),
          (n = JSON.parse(JSON.stringify(e.record))),
          (n.highResolution = !0),
          e.fetchStructureAndBootstrap(t, n);
      },
      reportTransparencyFail: function (e) {
        var t = this;
        IntegrityCheck.setIntegrityResultCookie(!1),
          (t.canProcessWithEngine = !1),
          t.triggerChange();
        var n = {
          message:
            "It seems that your computer is having issues rendering images. We're going to use a special server for you! Please hold on while we refresh...",
        };
        t.dispatch("stage.error", n),
          (t.keepWarning = !0),
          IntegrityCheck.saveTransparencyResult(e);
      },
      _buildBackgroundRecord: function (e, t) {
        return {
          allowBackgroundSearch: (t && t.allowBackgroundSearch) || !1,
          allowColorpicker: (e && e.allowColorpicker) || !1,
          allowCustomUpload: !0,
          allowForegroundSearch: (t && t.allowForegroundSearch) || !1,
          allowMove: !1,
          allowScale: !1,
          allowSearch: (t && t.allowSearch) || !1,
          color: (e && e.color) || null,
          contents: (t && t.contents) || (e && e.contents),
          excludable: (t && t.excludable) || !1,
          font: (t && t.font) || (e && e.font),
          height: (t && t.height) || (e && e.height),
          id: (t && t.id) || (e && e.id),
          image: (t && t.image) || (e && e.image),
          layers: (t && t.layers) || [],
          hasLayers: (t && t.hasLayers) || !1,
          selectedLayer: (t && t.selectedLayer) || null,
          name: (t && t.name) || (e && e.name),
          opacity: (t && t.opacity) || (e && e.opacity),
          smartFilters: (t && t.smartFilters) || (e && e.smartFilters),
          preconfiguredSearch: (t && t.preconfiguredSearch) || null,
          styles: (t && t.styles) || (e && e.styles),
          tag: (t && t.tag) || (e && e.tag),
          type: (t && t.type) || (e && e.type),
          visible: (t && t.visible) || (e && e.visible),
          width: (t && t.width) || null,
          x: (t && t.x) || (e && e.x),
          y: (t && t.y) || (e && e.y),
          fill: (e && e.fill) || null,
          groupTags: (t && t.groupTags) || [],
          displayName: t && t.displayName,
        };
      },
      _changeBackgroundColorRecord: function (e) {
        (this.record.backgroundColor || e.color) &&
          (this.record.backgroundColor.color = e.color);
      },
      _setupEngineForMobile: function () {
        (Interactive.ResizeControl.ENABLE_HITAREA = !0),
          (Interactive.InteractionControl.IS_IOS = Helpers.App.isIOS(
            navigator.userAgent
          )),
          (Interactive.InteractionControl.AVOID_EVENTS_PROPAGATION =
            Helpers.App.isMinChromeVersion(90));
      },
      addDraftToContainer: function (e) {
        this.savedDraftsContainer.addDraftItem(e);
      },
      prepareDataToSaveDraft: function () {
        return {
          previewImage: this.stageImageWidget.getStageImgBase64(),
          stageId: Helpers.StageType.getStageInfo().id,
          params: location.href.replace(location.origin, ""),
          uiJson: JSON.stringify(this.getCleanRecord(this.record)),
        };
      },
      _changeStageCanvasHandler: function (e) {
        var t = this,
          n = e.data && e.data.triggeredByUser;
        "undefined" == typeof n &&
          (n = new Date().getTime() - t._lastUserInteraction < 100),
          n === !0 &&
            (t.stageActionsManager.changeSaveButtonState("processing"),
            (t.processStageImages = function () {
              return new Promise(function (e, n) {
                var i, r;
                (i = function () {
                  t.unbind("stage.updated", i), t.unbind("stage.error", r), e();
                }),
                  (r = function () {
                    t.unbind("stage.updated", i),
                      t.unbind("stage.error", r),
                      n();
                  }),
                  t.bind("stage.updated", i),
                  t.bind("stage.error", r);
              });
            }),
            t.addPendingToCount(),
            t
              .processStageImages()
              .then(function () {
                t.increment(), t.stageActionsManager.changeSaveButtonState();
              })
              ["catch"](function () {
                t.decrement(), t.stageActionsManager.changeSaveButtonState();
              }));
      },
      hasCustomGraphicsUpload: function () {
        return null === this._filesContainer
          ? !1
          : this._filesContainer.children.some(function (e) {
              return e.hasUpload && e.hasUpload();
            });
      },
      tapEventBinding: function () {
        var e = this;
        e.removeTabChangeHandler = function () {};
        var t = function (t) {
          e._mockupTapEventHandler(t);
        };
        e.stageImageWidget.bind("tap", t);
      },
      _mockupTapEventHandler: function (e) {
        if (Helpers.App.getMobileControlsModalState() === !0)
          return void this.disableMobileControlsModal();
        var t = this,
          n = [],
          i = Helpers.StageType.getStageData().category_name;
        if (
          this.isMobilePhone !== !1 &&
          "Mockups" === i &&
          (this.overlayController.deactivateAllControlBar(),
          this.stageImageWidget.isScaled() !== !0)
        ) {
          var r = this._getReplacementAreaTouched(e);
          if (null !== r && this.hasInteractionControlsActive() !== !0) {
            (n = this.overlayController.getControlBars()),
              1 !== n.length ||
              n[0].hasImage !== !1 ||
              n[0].hasRelatedColorLayer()
                ? this.overlayController.activateControlBar(r)
                : n[0].upload();
            var o = this.stageControlTabs.getTabByReplacementAreaName(r.name);
            if ("undefined" != typeof o) {
              this.goToTab(o.index);
              var s = o.contents.filter(function (e) {
                return "CustomGraphicControl" === e.constructor.className
                  ? void 0 !== e.getLayerByName(r.name)
                  : void 0;
              })[0];
              "undefined" != typeof s &&
                (t.stageControlTabs.focusOnContent(o.index, s),
                t._prepareTapToTabEvent(s, function () {
                  t._sendTapToTabEvent({ name: r.name, index: o.index });
                }));
            }
          }
        }
      },
      _prepareTapToTabEvent: function (e, t) {
        var n = this;
        n.stageControlTabs.unbind(
          "tabbedContainer.change",
          n.removeTabChangeHandler
        ),
          void 0 !== e &&
            (e.setTapHandler(t),
            (n.removeTabChangeHandler = function () {
              e.setTapHandler(function () {});
            }),
            n.stageControlTabs.bind(
              "tabbedContainer.change",
              n.removeTabChangeHandler
            ));
      },
      goToTab: function (e, t) {
        return this.isMobilePhone === !0
          ? "number" != typeof e
            ? null
            : void (
                e !== this.stageControlTabs.getCurrentIndex() &&
                this.stageControlTabs.goToTab(e, t)
              )
          : void 0;
      },
      _sendTapToTabEvent: function (e) {
        null !== e &&
          Helpers.GlobalEventTracker.track("tapToTab", {
            error: !1,
            message: "Replacement Area has been tap",
            data: { name: e.name, tab: e.tab },
          });
      },
      getPreviewDimensions: function (e, t) {
        var n = {};
        return (
          t.width < e.width && t.height < e.height
            ? ((n.width = t.width), (n.height = t.height))
            : ((n.width = e.width), (n.height = e.height)),
          n
        );
      },
      _setFileByUrlStartHandler: function () {
        this._addLoaderDivElement(), this.disableAllFileUploads();
      },
      _setFileByUrlSuccessHandler: function () {
        this._removeLoaderDivElement(), this.enableAllFileUploads();
      },
      _setFileByUrlFailHandler: function (e) {
        this.dispatch("stage.error", {
          message: "We could not get the file, please try again",
        }),
          this._removeLoaderDivElement(),
          this.enableAllFileUploads(),
          Helpers.GlobalEventTracker.smartTemplateEvent("setFileByUrlError", {
            url: e.data.url,
          });
      },
      createSuggestionOverlay: function () {
        if ("undefined" == typeof this.suggestionOverlay) {
          var e, t, n;
          (e = this.stageImageWidget),
            (t = {
              stageImageElement: e.getImageElement(),
              mainWrapperElement: $("#main-content-wrapper"),
              stageControlsElement: this.$mobileControlsContainer,
            }),
            (n = CategorySuggestionOverlayFactory.create(t));
          var i = function (e, t, n) {
            var i;
            return function () {
              var r = this,
                o = arguments,
                s = function () {
                  (i = null), n || e.apply(r, o);
                },
                a = n && !i;
              clearTimeout(i), (i = setTimeout(s, t)), a && e.apply(r, o);
            };
          };
          Helpers.App.isMobile()
            ? (n.element.css("z-index", 4), n.render($(document.body)))
            : (n.render(e.element),
              $(window).on(
                "resize",
                i(function () {
                  var e = CategorySuggestionOverlayFactory.getBounds(t);
                  n.setElementBounds(e);
                }, 200)
              )),
            this.appendChild(n),
            n.closeButton.bind("click", function () {
              n.content.deactivate(), n.deactivate();
            });
        }
      },
      showSuggestionOverlay: function () {
        "undefined" == typeof this.suggestionOverlay &&
          this.createSuggestionOverlay(),
          this.suggestionOverlay.fade(
            function () {
              this.suggestionOverlay.content.animate();
            }.bind(this)
          );
      },
      hasInteractionControlsActive: function () {
        return null === Helpers.App.getEngine()
          ? !1
          : "undefined" == typeof engine.getActiveLayer()
          ? !1
          : !0;
      },
      showAddGraphicButtons: function () {
        var e, t, n;
        for (e = this, t = 0; t < e._addGraphicButtons.length; t++)
          if (((n = e._addGraphicButtons[t]), null !== n)) {
            if (n.isAddedLogo !== !0) {
              n.update(0);
              break;
            }
            n.show();
          }
      },
      hideAddGraphicButtons: function () {
        this._addGraphicButtons.forEach(function (e) {
          null !== e && e.hide();
        });
      },
      hasCustomImage: function () {
        var e;
        return (
          (e = this),
          e.record.customGraphic.some(function (e) {
            return e.layers.some(function (e) {
              return e.image && e.visible;
            });
          })
        );
      },
      showAddGraphicAndAddLogoButtons: function () {
        var e;
        (e = this),
          e.hasCustomImage() !== !1 &&
            (e.unbind(
              "customGraphicsUpdate",
              e.showAddGraphicAndAddLogoButtons
            ),
            e.unbind("addGraphic", e.hideAddLogoControl),
            e.showAddGraphicButtons(),
            e._userGraphicController.showAddLogoControl());
      },
      hideAddLogoControl: function () {
        var e;
        (e = this),
          e.unbind("addGraphic", e.hideAddLogoControl),
          e._userGraphicController.hideAddLogoControl();
      },
      hideAddGraphicAndAddLogoButtons: function () {
        var e, t, n, i;
        (e = this),
          (t = Helpers.StageType.getStageData().category_name),
          "Mockups" === t &&
            ((n =
              e.record.uploadRequired === !0 &&
              e.record.customGraphic.length > 0),
            n !== !1 &&
              ((i = e._userGraphicController.urlHasGraphics()),
              i !== !0 &&
                e.hasCustomImage() !== !0 &&
                (e.hideAddGraphicButtons(),
                e._userGraphicController.hideAddLogoControl(),
                e.bind(
                  "customGraphicsUpdate",
                  e.showAddGraphicAndAddLogoButtons
                ),
                e.bind("addGraphic", e.hideAddLogoControl))));
      },
      multiControlModalHandler: function () {
        var e = this;
        if (this.isMobilePhone === !0) {
          var t = function () {};
          this.bind("showModal", function (n) {
            var i = n.data && n.data.originalDispatcher;
            "undefined" != typeof i &&
              (i.constructor && "MultiControl" === i.constructor.className) !==
                !1 &&
              (i.resumeRendering(),
              (t = function () {
                e.unbind("hideModal", t), i.stopRendering();
              }),
              e.bind("hideModal", t));
          });
        }
      },
      _createMobileControlsModal: function () {
        this.appendChild(
          new UI.MobileControlsModal({
            name: "mobileControlsModal",
            $canvas: this.stageImageWidget.element,
          })
        ).render(this.$body),
          (this.boundDisableFloatingContainer =
            this.disableMobileControlsModal.bind(this)),
          this.mobileControlsModal.bind(
            "close",
            this.boundDisableFloatingContainer
          );
      },
      disableMobileControlsModal: function () {
        this.hideComponentPopupBackdrop(),
          this.componentPopup.hide(),
          this.hideFloatingContainer(),
          Helpers.App.setMobileControlsModalState(!1),
          this.componentPopup
            .getComponentContainer()
            .append(this.mobileControlsModal.getContents()),
          this.disableColorPicker();
      },
      showFloatingContainer: function () {
        this.mobileControlsModal.show();
      },
      hideFloatingContainer: function () {
        this.mobileControlsModal.hide();
      },
      persistComponentPopupBackdrop: function () {
        Helpers.App.getMobileControlsModalState() === !0 &&
          this.showComponentPopupBackdrop();
      },
      getStageDimensions: function () {
        var e, t;
        return (
          (e = window.structureData),
          (t = { width: null, height: null }),
          window.structureData && ((t.width = e.width), (t.height = e.height)),
          t
        );
      },
      _showBlankCanvasAlert: function (e) {
        this._blankCanvasAlert ||
          (this._blankCanvasAlert = new UI.Notification({})),
          this._blankCanvasAlert.update(e, "blank-canvas-alert"),
          this._blankCanvasAlert.render(this.$pageWrapper, !0);
      },
      _showTryNewBlankCanvasAlert: function () {
        this._showBlankCanvasAlert(
          'Try designing from scratch in our new <a class="blank-canvas-link" href="/c/design-templates/stages/blank-canvas-designs"><b>Blank Canvas <span class="blank-canvas-link-beta">(beta)</span></b></a>'
        );
      },
      _showBlankCanvasBetaAlert: function () {
        this._showBlankCanvasAlert(
          'Blank Canvas <span class="pill">beta</span>'
        );
      },
      _initialize: function (e, t) {
        console.log("20700-initialize");
        Tracker.start("20700-initialize");
        var n, i, r, o;
        console.log("checkAssetsDataCached");
        Helpers.App.checkAssetsDataCached(e.id);
        console.log("_prepareUIJson");
        this.record = this._prepareUIJson(e);
        this._initialCustomRules = JSON.parse(
          JSON.stringify(this.record.customRules)
        );

        console.log("_setMainArea");
        this._setMainArea();
        console.log("_loadInteractionsFromUrl");
        this._loadInteractionsFromUrl();
        console.log("_setDefaultImage");
        var s = this._setDefaultImage();
        console.log("_addLogoBindings");
        this._addLogoBindings();
        var a = function (e) {
            var t = null;
            return e.length > 0 && "object" == typeof e[1] && (t = e[1]), t;
          },
          l = function (e) {
            return function (t) {
              return (
                Helpers.GlobalEventTracker.noticeError(e, t), Promise.resolve()
              );
            };
          },
          c = Utils.bindFn(this);

        return (
          console.log("_engineBootstrap"),
          (r = this._engineBootstrap(t)),
          console.log("_fetchDefaultAssetToAddedGraphic"),
          Tracker.start("20700-renderUI"),
          (o = this._fetchDefaultAssetToAddedGraphic()),
          console.log("20700-renderUI"),
          (i = this._renderUi()),
          console.log("initAddedControls"),
          (n = Promise.all([i, o]).then(a).then(c(this.initAddedControls))),
          Promise.all([n, r, s])
            .then(c(this.prepareRecordBeforeInitialProcess))
            .then(c(this.process))
            ["catch"](l("Stage Process Error"))
            .then(c(this.postProcessing))
            ["catch"](l("Stage Post Process Error"))
            .then(c(this._initStageOverlayController))
            ["catch"](l("Init StageOverlayController Error"))
        );
      },
      initAddedControls: function (e) {
        var t = this._initUserGraphicController(e);
        return Promise.all([t.loadAddedControls(), this._initAddedLogo()]);
      },
      prepareRecordBeforeInitialProcess: function () {
        return (
          Tracker.end("20700-renderUI"),
          console.log("customImageFoundCheck"),
          this.customImageFoundCheck(),
          console.log("instantiateWidgetsIfAnimatedTemplate"),
          this.instantiateWidgetsIfAnimatedTemplate(),
          this.dispatch("stage.infoReady"),
          console.log("stage.infoReady"),
          this._validateRecord(
            $.extend(!0, {}, this.getCleanRecord(this.record))
          )
        );
      },
      _initAddedLogo: function () {
        console.log("_initAddedLogo");
        if (
          this._shouldAddLogoControl() !== !0 ||
          null === Helpers.App.getEngine()
        )
          return Promise.resolve(null);
        var e = this._userGraphicController.addGraphicAndSave(
            this._hasLogoCustomGraphic,
            !1
          ),
          t = P.promisifyEvent("multiControlReady")(e);
        return t;
      },
      _fetchDefaultAssetToAddedGraphic: function () {
        return Helpers.StageType.getMaxUserAddedGraphics() > 0
          ? UserGraphicController.fetchDefaultAddedGraphic(this.groupTags)
          : Promise.resolve(null);
      },
      process: function (e) {
        Tracker.start("20700-process"),
          Tracker.start("data", { record: e }),
          Helpers.StageType.setDesignPlan(e);
        var t = function (e) {
          return this.stageImageWidget.initCanvas(this.foregroundCanvas), e;
        }.bind(this);
        return IntegrityCheck.checkCapability() === !0
          ? this._localProcess(e).then(t)
          : this._remoteProcess(e);
      },
      postProcessing: function (e) {
        Tracker.end("20700-process"),
          Tracker.end("data", { b64: e }),
          this.showStagePreview(),
          Helpers.App.isBase64Image(e) === !0
            ? this._setPreviewImageRecord(e)
            : (e = this.record.previewImage),
          Helpers.StageType.setDesignPlan(this.getCleanRecord(this.record)),
          this._initInteractiveControl(),
          this._addBindings(),
          this.dispatch("loaded"),
          this.dispatch("stage.updated", {
            type: "image",
            source: e,
            size: "",
            interactive:
              this._supportsInteractions() && this.canProcessWithEngine,
          }),
          (this._stageImageShown = !0),
          this.dispatch("stage.imageShown"),
          this.stageImageWidget.stageImageReadyPromise.run(),
          this.stageImageWidget.dispatch("stage.imageReady");
        var t = this.record.customRules.length > 0;
        return (
          t === !1 && (this._repositionScaling(), this._showRuleControls()),
          this._repositionPiP(),
          this._changeResolutionEventData &&
            this._changeResolutionEventData.id &&
            this.bgContainer.dispatch(
              "resolutionChange",
              this._changeResolutionEventData
            ),
          this._removeLoaderDivElement(),
          document.dispatchEvent(new CustomEvent("stageReady")),
          Tracker.end("20700-initialize"),
          e
        );
      },
      showStagePreview: function () {
        console.count("#showStagePreview"),
          IntegrityCheck.checkCapability() === !0
            ? this.stageImageWidget.hideImage().showCanvas()
            : this.stageImageWidget.hideCanvas().showImage(),
          this.stageImageWidget.showVisibility();
      },
      _createEngine: function (e, t) {
        var n;
        return (
          (window.engine = null),
          IntegrityCheck.checkCapability() === !1
            ? window.engine
            : ((n = !0),
              window.disableMobileInteractions === !0 &&
                this.isMobilePhone === !0 &&
                (n = !1),
              (window.engine = new Engine({
                ui: $.extend(!0, {}, this.getCleanRecord(t)),
                interactive: n,
                structure: e,
                environment: window.environment,
                preventNewRulesBehavior: window.preventNewRulesBehavior || !1,
              })),
              this.engineBindings(window.engine),
              window.engine)
        );
      },
      _engineBootstrap: function (e) {
        var t = this;
        return null === Helpers.App.getEngine()
          ? Promise.resolve(null)
          : e.then(function (e) {
              if (engine.hasTransformed) {
                var n = IntegrityCheck.runTransparencyTest();
                console.log("IntegrityCheck", n);
                if (n === !1)
                  return t.reportTransparencyFail(e), Promise.reject();
              }
              return (
                (e.style.visibility = "hidden"), (t.foregroundCanvas = e), e
              );
            });
      },
      _initInteractiveControl: function () {
        null !== Helpers.App.getEngine() &&
          IntegrityCheck.checkCapability() !== !1 &&
          (this.isMobilePhone === !0 &&
            (this.stageImageWidget.setDimensions(this.record.original.size),
            this.stageImageWidget.updateWorkAreaDimentions(),
            engine.setResizeControlDimensions()),
          this.appendChild(
            new UI.SmartTemplate.InteractionControl({
              name: "interactionControl",
              supportsInteractions: this._supportsInteractions(),
            })
          ).render(this.stageImageWidget.element),
          this._repositionInteractions(),
          (this.stLoader.elementToWrap = this.stageImageWidget
            .getElement()
            .find("canvas")),
          engine.bind("change", this._showInteractionControls.bind(this)),
          this.interactionControl.bind(
            "resetInteraction",
            function (e) {
              (e.data.originalDispatcher = this.interactionControl),
                this._waitForProcess(e);
            }.bind(this)
          ),
          this.interactionControl.bind(
            "resetInteraction",
            function () {
              this._resetLayout(),
                engine._deactivateInteractions(),
                this.triggerChange(),
                this._showRuleControls();
            }.bind(this)
          ),
          $(window).resize(function () {
            var e = $(this.foregroundCanvas);
            e.width("auto");
            var t = e.width();
            e.width(t + "px");
          }),
          $(window).resize(),
          this._showInteractionControls());
      },
      _localProcess: function (e) {
        return engine.process($.extend(!0, {}, this.getCleanRecord(e)), !1);
      },
      _remoteProcess: function (e) {
        var t = this,
          n = t.getCleanRecord(e);
        return (
          t._addLoaderDivElement(),
          console.time("#20700-backendProcess"),
          t
            ._requestBackendLowRes(n)
            .then(function (e) {
              return t.stageImageWidget.updateSource(e).then(function () {
                return console.timeEnd("#20700-backendProcess"), e;
              });
            })
            ["catch"](function (e) {
              return "abort" !== e.statusText
                ? (t.dispatch("stage.error", e.data),
                  t._removeLoaderDivElement(),
                  Promise.reject(e))
                : void 0;
            })
        );
      },
      _setPreviewImageRecord: function (e) {
        var t = /^data:(.*?);base64,(.*)$/.exec(e),
          n = t[1],
          i = t[2];
        (this.record.previewImage = { type: n, value: i }),
          Helpers.StageType.setPreviewImage(i);
      },
      _validateRecord: function (e) {
        var t,
          n = this;
        return (
          (t = n.record),
          (n.recordState = n._runValidations()),
          n.recordState.success === !1 &&
            ((t = e),
            n.dispatch("stage.warn", { message: n.recordState.message })),
          t
        );
      },
      _setMainArea: function () {
        var e = this.$imageElement.width();
        5 > e && (e = "100%"), $(".stage-info-wrapper").css("width", e);
      },
      _setDefaultImage: function () {
        var e, t;
        return (
          (e = this),
          (t =
            this._cdnBasePath() +
            "/smart_templates/" +
            this.smart_object_id +
            "/" +
            this.record.previewImage.value),
          this.hasURLStageParams() === !1 && this.hasPresetData() === !1
            ? this.stageImageWidget.updateSource(t).then(function (t) {
                return e.stageImageWidget.dispatch("stage.imageReady"), t;
              })
            : Promise.resolve({ src: "", width: 0, height: 0 })
        );
      },
      hasURLStageParams: function () {
        return Object.keys(this._getURLParams()).length > 0;
      },
      hasPresetData: function () {
        return $.isEmptyObject(window._presetSmartTemplateData) === !1;
      },
      _addBindings: function () {
        var e = this;
        e.bind("change", function (t, n) {
          e._changeHandler(t, n);
        });
      },
      _changeHandler: function (e, t) {
        var n = this;
        t && t.triggeredByPopState
          ? (null !== n.debounceURLChanges &&
              (console.log("cancel"), clearTimeout(n.debounceURLChanges)),
            (n.debounceURLChanges = setTimeout(function () {
              n.triggerChange();
            }, 50)))
          : t && t.sizeData
          ? ((n.pendingSizeChangeData = t.sizeData), n.triggerChange())
          : (n._getPristineTextObjects().length < n.record.customRules.length ||
              !n.canProcessWithEngine ||
              (n._placePristineTextObjects(n._getPristineTextObjects()),
              n.recalculateCustomRules(n._getPristineTextObjects())),
            n.triggerChange());
      },
      _prepareUIJson: function (e) {
        var t = 0;
        return (
          window._pl_userInfo &&
            window._pl_userInfo.unsubscribe_code &&
            (t = window._pl_userInfo.unsubscribe_code),
          (e.userData = { userId: t, userIp: window.userIp }),
          Helpers.App.getSubscription() && (e._internalRemoveWatermark = !0),
          e.customGraphic &&
            e.customGraphic.map(function (e) {
              e.layers.map(function (e) {
                e &&
                  e.image &&
                  -1 !== e.image.indexOf("assets") &&
                  (e.image = "");
              });
            }),
          this._setControlLayers(window.smartTemplateData.graphic),
          this._setControlLayers(window.smartTemplateData.background),
          e.customRules || (e.customRules = []),
          e
        );
      },
      _setControlLayers: function (e) {
        Array.isArray(e) !== !1 &&
          e.forEach(function (e) {
            e.layers =
              e.selectedLayer && "null" !== e.selectedLayer.id
                ? [e.selectedLayer]
                : [];
          });
      },
      _prepareRequestToLowRes: function (e) {
        var t,
          n = this;
        return (
          (t = encodeURI(window.location.href)),
          (n.resultShown.start = performance.now()),
          (this.record.highResolution = !1),
          (e.referrer = t),
          JSON.stringify(e)
        );
      },
      _requestBackendLowRes: function (e) {
        var t,
          n = this;
        return (
          (t = this._prepareRequestToLowRes(e)),
          this._requestBackendProcess(t)
            .then(function (e) {
              return n._backendProcessSuccessHandler(e);
            })
            ["catch"](function (e) {
              return n._backendProcessErrorHandler(e);
            })
        );
      },
      _requestBackendProcess: function (e) {
        var t = this;
        return new Promise(function (n, i) {
          t.craftJobsRequest(e).done(n).fail(i);
        });
      },
      _backendProcessSuccessHandler: function (e) {
        var t = this;
        if (
          ((t._debounceTime = 0),
          t._throttlerActive === !1 &&
            ((t._throttlerActive = !0), (t._throttlerChanges = 0)),
          e.designPlan.error && "scriptError" === e.designPlan.error.type)
        ) {
          console.log(
            "Failed to process image, script error:\nLine: " +
              e.designPlan.error.line +
              "\nMessage: " +
              e.designPlan.error.message
          );
          var n = {
            message:
              "Your template couldn't be processed right now, we loaded your last template instead. Please try again later",
            action:
              NICE_DOMAIN.protocol +
              "://" +
              NICE_DOMAIN.hostname +
              "/api/v3/jobs/",
            error: e.designPlan.error.message,
          };
          return Promise.reject({ statusText: "designPlanError", data: n });
        }
        return e.designPlan.previewImage.value;
      },
      _backendProcessErrorHandler: function (e) {
        var t = {},
          n = "Couldn't process right now. Please try again later";
        return "abort" === e.statusText
          ? { statusText: "abort", data: t }
          : (429 === e.status &&
              (n =
                "Sorry, we're getting too many requests coming from your IP. If you'd like to be whitelisted, please contact us"),
            (t = {
              message: n,
              action:
                NICE_DOMAIN.protocol +
                "://" +
                NICE_DOMAIN.hostname +
                "/api/v3/jobs/",
              errorType: "st-jobs",
              responseText: e.responseText,
              headers: e.getAllResponseHeaders(),
              status: e.status,
              statusText: e.statusText,
              fullUrl: window.location.href,
            }),
            Promise.reject({ statusText: e.statusText, data: t }));
      },
    },
  }),
  ($.prototype.keydown = function (e) {
    var t, n, i, r, o, s, a, l, c, u, h;
    if (
      ((h = $),
      (t = h(this)),
      (i = t.parent()),
      (u = i.data("this")),
      u && u.options.container && (i = u.$menu),
      (n = h("[role=menu] li:not(.divider):visible a", i)),
      n.length)
    ) {
      if (/(38|40)/.test(e.keyCode))
        (r = n.index(n.filter(":focus"))),
          (s = n.parent(":not(.disabled)").first().index()),
          (a = n.parent(":not(.disabled)").last().index()),
          (o = n.eq(r).parent().nextAll(":not(.disabled)").eq(0).index()),
          (l = n.eq(r).parent().prevAll(":not(.disabled)").eq(0).index()),
          (c = n.eq(o).parent().prevAll(":not(.disabled)").eq(0).index()),
          38 == e.keyCode && (r != c && r > l && (r = l), s > r && (r = s)),
          40 == e.keyCode &&
            (r != c && o > r && (r = o), r > a && (r = a), -1 == r && (r = 0)),
          n.eq(r).focus();
      else {
        var d = {
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
          },
          p = [];
        n.each(function () {
          h(this).parent().is(":not(.disabled)") &&
            h.trim(h(this).text().toLowerCase()).substring(0, 1) ==
              d[e.keyCode] &&
            p.push(h(this).parent().index());
        });
        var f = h(document).data("keycount");
        f++, h(document).data("keycount", f);
        var m = h.trim(h(":focus").text().toLowerCase()).substring(0, 1);
        m != d[e.keyCode]
          ? ((f = 1), h(document).data("keycount", f))
          : f >= p.length && h(document).data("keycount", 0),
          n.eq(p[f - 1]).focus();
      }
      /(13|32)/.test(e.keyCode) &&
        (e.preventDefault(),
        h(":focus").click(),
        h(document).data("keycount", 0));
    }
  }),
  $(document)
    .data("keycount", 0)
    .off("keydown", "[data-toggle=dropdown], [role=menu]"),
  $(document)
    .data("keycount", 0)
    .on("keydown", "[data-toggle=dropdown], [role=menu]", $.prototype.keydown),
  Class(UI.Tool, "ToolBase").inherits(UI.SmartTemplate.StageCanvas)({
    prototype: {
      init: function (e) {
        var t = this;
        UI.StageBase.prototype.init.call(t, e),
          Helpers.StageType.setStageInfo(window._stageData.stage_data),
          t.stageActionsManager.enableShareButton(),
          t.stageActionsManager.removeShareButtonTooltip();
      },
    },
  }),
  Class(UI.Tool, "CropImagePage")
    .inherits(UI.SmartTemplate.StageCanvas)
    .includes(BubblingSupport)({
    REQUEST_HIGH_RESOLUTION: !1,
    IMAGE_404_MESSAGE:
      "Your link contains an uploaded image (design or logo) that we no longer have. Please reupload the missing image",
    MAX_UPLOAD_DIMENSION_ALLOWED: 7500,
    reportError: function (e) {
      throw new Error(e);
    },
    prototype: {
      htmlFooterString:
        '<div class="cropper-footer-row noselect default-cursor">            <div class="cropper-footer-col-1 center">                <div class="cropper-page-image-placeholder-description-1"></div>                <div class="cropper-page-description-1-title-container"><span class="cropper-page-description-1-title">Upload Your Image Here</span></div>                <div class="cropper-page-description-1-text-container"><span class="cropper-page-description-1-text">Upload your image directly from your files or simply drag and drop.</span></div>            </div>            <div class="cropper-footer-col-2 center">                <div class="cropper-page-image-placeholder-description-2"></div>                <div class="cropper-page-description-2-title-container"><span class="cropper-page-description-2-title">Crop and Resize</span></div>                <div class="cropper-page-description-2-text-container"><span class="cropper-page-description-2-text">Select pre-defined social media image sizes or create your required image size.</span></div>            </div>            <div class="cropper-footer-col-3 center">                <div class="cropper-page-image-placeholder-description-3"></div>                <div class="cropper-page-description-3-title-container"><span class="cropper-page-description-3-title">Download and Share It!</span></div>                <div class="cropper-page-description-3-text-container"><span class="cropper-page-description-3-text">Download your cropped / resized image and share it as you wish.</span></div>            </div>        </div>',
      $imagePreview: null,
      $imageElement: null,
      $pageWrapper: null,
      _imageShown: !1,
      _currentlyOpenComponent: null,
      _request: null,
      _debounceTime: 10,
      _throttlerActive: !1,
      _throttlerIntervalInSeconds: 10,
      _maxChangesPerInterval: 3,
      _throttlerChanges: 0,
      _currentlyLoading: !1,
      _filesContainer: null,
      _customImageNotFound: !1,
      _timeCheck: null,
      _timeTop: 2,
      _renderUiCalled: !1,
      _changeResolutionEventData: null,
      _processCount: 0,
      _changeInProgress: null,
      _userImagesPath: "https://s3.amazonaws.com/upload.placeit.net/user",
      imageCache: null,
      croppedPreviewCache: null,
      uploadID: null,
      assetID: null,
      cropParams: null,
      uploadPending: !1,
      hasChanges: !1,
      init: function (e) {
        var t = this;
        return (
          (e.manuallyLoadAssets = !0),
          (e.similarStagesFullWidth = !0),
          (this.paramsFromURL = Helpers.App.getAllURLParams()),
          UI.StageBase.prototype.init.call(this, e),
          Helpers.StageType.setStageInfo(window._stageData.stage_data),
          this.initializeStageActionsManager(),
          (this.$pageWrapper = $(".page-wrapper")),
          (this.$buttonBar = $(".button-bar-stages")),
          (this.$body = $("body")),
          this.$body.addClass("crop-resize-styles"),
          this.$body.addClass("cropper-tool"),
          (this.$main = $("main")),
          (this.$mainContentWrapper = $("#main-content-wrapper")),
          (this.$downloadButton = $(".download-button")),
          this.stageImageWidget.element
            .removeClass(
              "stage__image-wrapper stage__image-wrapper--foreground"
            )
            .addClass("container-fluid"),
          this.stageImageWidget.hideVisibility(),
          (this.$imageElement = t.element.find(".container-fluid img")),
          this.$imageElement
            .removeClass("stage__image--foreground")
            .addClass("img-responsive"),
          (this.recordState = { success: !0 }),
          (this.foregroundCanvas = null),
          (this._userLoginHandlerForDownload =
            this._deferredDownloadUponLogin.bind(this)),
          this.appendChild(
            new UI.SmartTemplate.Loader({
              name: "stLoader",
              elementToWrap: t.stageImageWidget.getElement().find("img"),
            })
          ).render(this.stageImageWidget.element),
          (this.isMobilePhone = Helpers.App.isMobile()),
          this.isMobilePhone &&
            (this.$pageWrapper.addClass("is_smart-template"),
            $(".app_page").addClass("mobile")),
          this.$pageWrapper.addClass("is_smart-template"),
          $(".app_page").addClass("is_smart-template"),
          (this.debounceURLChanges = null),
          this.bind("notVisible", function () {
            t.dispatch("stage.warn", {
              message:
                "Some of your fields aren't visible. Click the checkbox to make it visible!",
              seconds: 5,
            });
          }),
          this.bind(
            "componentOpen",
            this._openComponentEventHandler.bind(this)
          ),
          this.bind(
            "componentClose",
            this._closedComponentEventHandler.bind(this)
          ),
          $(window).load(function () {
            $(".stage-info-wrapper").css("width", t.$imageElement.width());
          }),
          window.addEventListener("resize", function () {
            Helpers.App.isMobile() ||
              (t.accomodateLeftSidebarScrollBar(),
              $(".stage-info-wrapper").css("width", t.$imageElement.width()),
              t.scaling && t._repositionScaling(),
              t.interactionControl && t._repositionInteractions());
          }),
          this.bind("beforeProcessTemplate", function (e) {
            var n = null;
            try {
              throw new Error("Get stack trace");
            } catch (i) {
              n = i.stack || "No stack trace";
            }
            Helpers.GlobalEventTracker.deprecatedMethod({
              module: "UI.Tool.CropImagePage.beforeProcessTemplate",
              file: "cropper_page.js",
              stackTrace: n,
            });
            var r = e.data.eventOrigin;
            if (window.engine && window.engine.ready)
              return void (e.data.shouldRun = !0);
            var o =
              UI.RelatedTemplates.Controller.prototype._isRelatedTemplateItem.call(
                null,
                r
              );
            o &&
              t._request &&
              4 !== t._request.readyState &&
              (e.data.shouldRun = !1);
          }),
          t.bind("savedDraft.requestCompleted", function () {
            var e = window._stageData;
            if ((t.saveDraftBindings(), window.savedDraftRecord)) {
              var n = window.location.pathname.concat(window.location.search),
                i = window.location.href.replace(
                  n,
                  window.savedDraftRecord.params
                );
              history.replaceState(
                window.history.state,
                Helpers.StageType.getStageSlug(),
                i
              );
            }
            (t.smart_object_id = e.stage_data.smart_object_v4_id),
              t.isMobilePhone && t._setupEngineForMobile(),
              (t.canProcessWithEngine = IntegrityCheck.checkCapability()),
              (t.stageIsReady = !0),
              t.canProcessRelatedJobsLocal() &&
                (t.sharedQueue = new SmartQueue({
                  actionName: "loadPreview",
                  minConsumers: 1,
                  maxConsumers: 3,
                  itemsPerConsumer: 1,
                })),
              window.smartTemplateData &&
                window.structureData &&
                (t.designDataHandler(
                  window.smartTemplateData,
                  window.structureData
                ),
                $(".custom-graphic-control").hide());
          }),
          t.stageImgContainer.addClass("margin-left-side"),
          this.element.ready(function () {
            t.initializeStageActionsManager(), t.getDraft(window.savedDraftId);
          }),
          this.bind("user.signIn", function () {
            (t.record._internalRemoveWatermark = !0), t.triggerChange();
          }),
          UI.Navigation.NavBar.bind("user:login", function () {
            Helpers.App.getSubscription() &&
              ((t.record._internalRemoveWatermark = !0), t.triggerChange()),
              t.multiSizesContainer &&
                t.multiSizesContainer.dispatch("user:login");
          }).bind("user:logout", function () {
            (t.record._internalRemoveWatermark = !1), t.triggerChange();
          }),
          this.bind("process", this._processEventHandler.bind(this)),
          $("#page-application").remove(),
          t.bind("change", function (e, n) {
            var i = function () {
              t.unbind("stage.updated", i),
                n &&
                  n.originalDispatcher &&
                  "function" == typeof n.originalDispatcher.updateUI &&
                  n.originalDispatcher.updateUI();
            };
            t.bind("stage.updated", i);
          }),
          window.addEventListener("popstate", function () {
            t.setSaveButtonByUrlChanges(),
              t._loadInteractionsFromUrl(),
              t.dispatch("change", { triggeredByPopState: !0 });
          }),
          t.setSaveButtonByUrlChanges(),
          this.stageActionsManager.setClickListenerForDownloadButton(
            this.downloadButtonClickListener.bind(this)
          ),
          this.savedDraftsContainer.hide(),
          this
        );
      },
      _enableDownloadButtonIfHasChangesAndHasFinishedUploadingAndHasNoInputErrors:
        function () {
          !this.hasChanges ||
            this.uploadPending ||
            this._isCropperOnInputErrorState() ||
            this._enableDownloadButton();
        },
      _isCropperOnInputErrorState: function () {
        return this.stageCropper.isInErrorState();
      },
      downloadButtonClickListener: function (e) {
        var t = null;
        if (!$(e.target).hasClass("disabled"))
          return 0 === Helpers.App.getUser().id
            ? ((t = {
                type: "warning",
                content:
                  'Please create an account to download this image.<br /> Already have an account?                     <a href="#" onclick="event.preventDefault();page.appNavBar.ssoModal.showTab(\'' +
                  UI.SsoModal.TAB_LOGIN +
                  '\')" class="trigger_login_link" role="button">Log In</a>',
                contentForceLogIn:
                  'Please log in to download this image.<br /> Don\'t have an account?                     <a href="#" onclick="event.preventDefault();page.appNavBar.ssoModal.showTab(\'' +
                  UI.SsoModal.TAB_SIGNUP +
                  '\')" class="trigger_signup_link" role="button">Sign Up</a> today!',
              }),
              this.navBar.ssoModal.activate(),
              this.navBar.ssoModal.showMessage(t),
              void this._downloadUponLogin())
            : void this._downloadForLoggedInUser();
      },
      _deferredDownloadUponLogin: function () {
        this.navBar.unbind("login.success", this._userLoginHandlerForDownload),
          this.navBar.unbind(
            "signup.success",
            this._userLoginHandlerForDownload
          ),
          this._downloadForLoggedInUser();
      },
      _downloadUponLogin: function () {
        this.navBar.unbind("login.success", this._userLoginHandlerForDownload),
          this.navBar.unbind(
            "signup.success",
            this._userLoginHandlerForDownload
          ),
          this.navBar.bind("login.success", this._userLoginHandlerForDownload),
          this.navBar.bind("signup.success", this._userLoginHandlerForDownload);
      },
      setStageCropperLayout: function () {
        var e = this;
        $("<img/>").attr("src", "/assets/cropper_description_3.svg"),
          $("<img/>").attr("src", "/assets/cropper_description_2.svg"),
          $("<img/>").attr("src", "/assets/cropper_description_1.svg"),
          $("<img/>")
            .attr("src", "/assets/cropper_file_uploader.svg")
            .on("load", function () {
              $(this).remove(), e._setStageCropperLayout();
            });
      },
      _setStageCropperLayout: function () {
        var e = this;
        this.$mainContentWrapper.addClass("cropper-page-main"),
          e._filesContainer.customG_0.render(this.$main),
          (this.$cropperPageDropArea = $(".cropper-page-drop-area")),
          (this.$cropperPageDropAreaTitle = $(".cropper-page-drop-area-title")),
          (this.$cropperPageDropAreaSubtitle = $(
            ".cropper-page-drop-area-subtitle"
          )),
          (this.$cropperPageDropAreaButton = $(
            ".cropper-page-drop-area-button"
          )),
          (this.$cropperPageDropAreaImage = $(
            ".cropper-page-image-placeholder"
          )),
          (this.$cropperTitle = $(document.createElement("h1"))),
          this.$cropperTitle.attr("id", "cropper-title-reference"),
          this.$cropperTitle
            .addClass("cropper-page-title")
            .addClass("noselect")
            .addClass("default-cursor"),
          this.$cropperTitle.html("Free Image Cropper"),
          this.$main.prepend(this.$cropperTitle);
        var t = function (e) {
            e.preventDefault();
          },
          n = function (n) {
            n.bind("dragover", t),
              n.bind("dragleave", t),
              n.bind("drop", function (t) {
                t.preventDefault(), e.$cropperPageDropArea.trigger("drop");
              });
          };
        Helpers.App.isMobile()
          ? (this.$cropperPageDropAreaTitle.html("(JPG or PNG)"),
            this.$cropperPageDropAreaButton.html("Upload Your Image"))
          : (this.$cropperPageDropAreaTitle.html(
              "Drop Your Image (JPG or PNG)"
            ),
            this.$cropperPageDropAreaButton.html("Upload Your Image Here")),
          n(this.$cropperPageDropAreaTitle),
          n(this.$cropperPageDropAreaSubtitle),
          n(this.$cropperPageDropAreaButton),
          n(this.$cropperPageDropAreaImage),
          $(".stage-info-wrapper").css("width", e.$imageElement.width()),
          (this.$cropperFooter = $(document.createElement("div"))),
          this.$cropperFooter.addClass("cropper-footer-container"),
          this.$cropperFooter.html(this.htmlFooterString),
          this.$cropperFooter.appendTo(this.$main),
          (e.assetID = Helpers.App.getUrlParam("asset_id")),
          "undefined" != typeof e.assetID && e.processAssetID(e.assetID);
      },
      designDataHandler: function (e, t) {
        var n = this;
        UI.AlgoliaSearch.getInstance()
          .initialize(e.id)
          .then(function () {
            return (
              (e.defaultAssetColors = e.defaultAssetColors || []),
              n._fetchAndSetAssetLayersForUiJson(e)
            );
          })
          .then(function () {
            n._designDataHandler(e, t);
          });
      },
      _designDataHandler: function (e, t) {
        var n, i, r, o;
        if (
          ((n = this),
          (o = !!Object.keys(n._getURLParams()).length),
          void 0 !== n.canProcessWithEngine)
        ) {
          if (e.error || t.error)
            return void setTimeout(function () {
              n.onErrorLoadOtherStages(),
                n.loadFromUrlParameters(),
                n.dispatch("stage.error", e.errorData);
            }, 1);
          if (
            (Helpers.App.getSubscription() && (e._internalRemoveWatermark = !0),
            (i = n.$imageElement.width()),
            5 > i && (i = "100%"),
            $(".stage-info-wrapper").css("width", i),
            o === !1 &&
              $.isEmptyObject(window._presetSmartTemplateData) === !0 &&
              n._showStageImage(),
            n.element.addClass("loaded"),
            e.customGraphic &&
              e.customGraphic.map(function (e) {
                e.layers.map(function (e) {
                  e &&
                    e.image &&
                    -1 !== e.image.indexOf("assets") &&
                    (e.image = "");
                });
              }),
            (n.record = e),
            smartTemplateData.graphic &&
              window.smartTemplateData.graphic.forEach(function (e) {
                e.layers =
                  e.selectedLayer && "null" !== e.selectedLayer.id
                    ? [e.selectedLayer]
                    : [];
              }),
            smartTemplateData.background &&
              window.smartTemplateData.background.forEach(function (e) {
                e.layers =
                  e.selectedLayer && "null" !== e.selectedLayer.id
                    ? [e.selectedLayer]
                    : [];
              }),
            (n.record.customRules = []),
            (r = jQuery.extend(!0, {}, n.record)),
            n.bind("change", function (e, t) {
              t && t.triggeredByPopState
                ? (null != n.debounceURLChanges &&
                    clearTimeout(n.debounceURLChanges),
                  (n.debounceURLChanges = setTimeout(function () {
                    n.triggerChange();
                  }, 50)))
                : t && t.sizeData
                ? ((n.pendingSizeChangeData = t.sizeData), n.triggerChange())
                : (this._getPristineTextObjects().length <
                    this.record.customRules.length ||
                    !this.canProcessWithEngine ||
                    this._placePristineTextObjects(
                      this._getPristineTextObjects()
                    ),
                  n.triggerChange());
            }),
            (url =
              n._cdnBasePath() +
              "/smart_templates/" +
              this.smart_object_id +
              "/" +
              this.record.previewImage.value),
            console.log("url", url),
            n.dispatch("stage.updated", {
              type: "image",
              source: url,
              size: "",
              interactive: n._supportsInteractions() && n.canProcessWithEngine,
            }),
            n._renderUi(),
            Helpers.StageType.setDesignPlan(n.getCleanRecord(n.record)),
            n.canProcessWithEngine)
          ) {
            var s = !0;
            window.disableMobileInteractions === !0 &&
              n.isMobilePhone === !0 &&
              (s = !1),
              (window.engine = new Engine({
                ui: r,
                interactive: s,
                structure: t,
                environment: window.environment,
              })),
              n.engineBindings(engine);
          }
          n.element.addClass("loaded"),
            n.record.original &&
              n.record.original.size &&
              setTimeout(function () {
                n.dispatch("stage.infoReady");
              }, 0);
        }
      },
      _renderUi: function () {
        var e = this,
          t = this.isMobilePhone,
          n = Helpers.App.getAllURLParams(),
          i = this.record.defaultAssetColors;
        if (
          (this.appendChild(
            new UI.SmartTemplate.SideBar({
              name: "leftSideBar",
              record: this.record,
              cssClass: "left",
              isMobilePhone: t,
            })
          ),
          Helpers.StageType.isCropperTool() && this.leftSideBar.hide(),
          e.stageImgContainer.removeClass("margin-left-side"),
          this.appendChild(
            new UI.SmartTemplate.SideBar({
              name: "rightSideBar",
              record: this.record,
              cssClass: "right",
              isMobilePhone: t,
            })
          ),
          Helpers.StageType.isCropperTool() && this.rightSideBar.hide(),
          t === !1)
        )
          e.leftSideBar.activate(),
            e.rightSideBar.activate(),
            (e._filesContainer = e.leftSideBar),
            (this.bgContainer = this.rightSideBar);
        else {
          (e._filesContainer = e.stageActionsManager),
            this.stageActionsManager.element.append(
              $(
                "<div class='smart_template_stage_actions first-row btn-group stage-actions'></div>"
              )
            );
          var r = this.stageActionsManager.element.find(
            ".smart_template_stage_actions.first-row"
          );
          this.stageActionsManager.element.append(
            $(
              "<div class='smart_template_stage_actions second-row btn-group stage-actions'></div>"
            )
          );
          var o = this.stageActionsManager.element.find(
            ".smart_template_stage_actions.second-row"
          );
          this.appendChild(
            new UI.SmartTemplate.SideBar({
              name: "bgMobileSideBar",
              cssClass: "right",
              isMobilePhone: t,
            })
          ),
            (this.bgContainer = this.bgMobileSideBar),
            this.stageActionsManager
              .appendChild(
                new UI.SmartTemplate.Mobile.ChangeTextButton({
                  name: "changeText",
                  sidebar: this.leftSideBar,
                })
              )
              .render(r),
            this.stageActionsManager
              .appendChild(
                new UI.SmartTemplate.Mobile.ChangeAssetButton({
                  name: "changeGraphics",
                  label: "Change Graphics / Colors",
                  sidebar: this.rightSideBar,
                  className: "smart_template--change_graphic_button",
                })
              )
              .render(r),
            this.stageActionsManager
              .appendChild(
                new UI.SmartTemplate.Mobile.ChangeAssetButton({
                  name: "changeBackground",
                  label: "Change Background",
                  sidebar: this.bgMobileSideBar,
                  className: "smart_template--change_background_button",
                })
              )
              .render(o),
            $(".modal-backdrop.fade").css("z-index", "1043"),
            this.appendChild(
              new UI.SimpleModal({ name: "smartTemplateModal" })
            ).render($(document.body)),
            this.smartTemplateModal.setContent(""),
            this.smartTemplateModal.setHeaderContent(""),
            this.smartTemplateModal.addCloseButton(),
            this.bind("showModal", function () {
              $(".modal-backdrop.fade").css("z-index", "1043"),
                e.smartTemplateModal.activate();
            }),
            this.bind("hideModal", function () {
              e.smartTemplateModal.deactivate();
            });
        }
        this.customImageBindings(),
          this._renderTextControls(),
          this._setupAddTextButton(this.leftSideBar),
          e._filesContainer.bind("imageDataNotFound", function () {
            e._customImageNotFound = !0;
          }),
          this.record.uploadRequired &&
            this.record.customGraphic.forEach(
              function (e) {
                e.layers.length > 0 &&
                  e.layers.map(
                    function (e) {
                      e.image ||
                        this.stageActionsManager.disableDownloadButton();
                    }.bind(this)
                  );
              }.bind(this)
            ),
          this.bind("customGraphicsUpdate", function () {
            if (e.record.uploadRequired) {
              var t = !0;
              e.record.customGraphic.map(function (e) {
                e.layers.length > 0 &&
                  e.layers.map(function (e) {
                    return e.image ? void (t = !1) : void 0;
                  });
              }),
                e.record.graphic.map(function (e) {
                  return e.layers.length > 0 &&
                    e.allowCustomUpload &&
                    "customGraphic" == e.layers[0].name
                    ? void (t = !1)
                    : void 0;
                }),
                t
                  ? this.stageActionsManager.disableDownloadButton()
                  : this.stageActionsManager.enableDownloadButton();
            }
          }),
          this.record.customGraphic.forEach(function (t, n) {
            e._createCustomGraphicControl(t, n, "customG_" + n);
          }),
          this.bind("extracolorchanged", function (t) {
            var n = t.data.color;
            if (
              t.data.originalDispatcher &&
              -1 !=
                t.data.originalDispatcher.name.toLowerCase().indexOf("accent")
            ) {
              var i = this.record.graphic.filter(function (e) {
                return "Accent Color" === e.name;
              })[0];
              i && (i.color = n), (e.record.defaultAssetColors[0] = n);
            }
          }),
          e.stageActionsManager.enableShareButton(),
          e.stageActionsManager.removeShareButtonTooltip(),
          e._filesContainer
            .bind("file.loaded", function (t) {
              Helpers.GlobalEventTracker.track("StageCanvas-fileloaded");
              var n, i;
              (n = t.data.target), (i = n.getFile());
              var r = window.URL || window.webkitURL,
                o = new Image();
              (o.src = r.createObjectURL(i)),
                (e.imageCache = { imageData: o, canvas: null }),
                Helpers.GlobalEventTracker.smartTemplateEvent("uploadStart", {
                  fileName: i.name,
                }),
                e.stageActionsManager.disableDownloadButton(),
                n.hideDiscardButton(),
                n.hideRepositionButton();
              var s, a;
              (s = n.id),
                (a = n.userImagePath),
                $(".cropper-page-drop-area-button").html(
                  "Uploading Your Image..."
                ),
                $(".cropper-page-drop-area-button").attr(
                  "style",
                  "display:inline-flex;"
                ),
                $(".cropper-page-drop-area-button").addClass("noselect"),
                $(".cropper-page-drop-area-button").prepend(
                  $("<div/>")
                    .attr("style", "display:none;")
                    .addClass("lds-ring-cropper")
                    .append("<div/>")
                    .append("<div/>")
                    .append("<div/>")
                    .append("<div/>")
                ),
                e.disableAllToolFileUploads();
              var l = function (t) {
                  return (
                    (e.uploadPending = !0),
                    (e.hasChanges = !1),
                    new Promise(function (e, n) {
                      return o.complete === !0
                        ? e(t)
                        : ((o.onload = e.bind(this, t)), void (o.onerror = n));
                    })
                  );
                },
                c = function (e) {
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "localCropper-uploadStart",
                      { fileName: e.name }
                    ),
                    CropperLocalUploader.upload(e).then(function (e) {
                      return (
                        Helpers.GlobalEventTracker.smartTemplateEvent(
                          "remoteCropper-uploadEnd",
                          { id: e.id }
                        ),
                        e
                      );
                    })
                  );
                },
                u = function (e) {
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "uploadStart",
                      { fileName: e.name }
                    ),
                    CropperRemote.uploadImageCropTool(e).then(function (e) {
                      return new Promise(function (t, n) {
                        $.get(e.data.user_image_url).done(t).fail(n);
                      }).then(function (e) {
                        return (
                          Helpers.GlobalEventTracker.smartTemplateEvent(
                            "uploadEnd",
                            { id: e.id }
                          ),
                          e
                        );
                      });
                    })
                  );
                },
                h = function (t) {
                  var i = e.customUploadFail(t, n, s, a);
                  return (
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "uploadError",
                      { message: i, fileName: n.getFile().name }
                    ),
                    e.dispatch("stage.error", { message: i }),
                    $(".lds-ring-cropper").remove(),
                    $(".lds-ring-cropper-blue").remove(),
                    $(".cropper-page-drop-area-button").html(
                      "Upload Your Image Here"
                    ),
                    $(".cropper-page-drop-area-button").attr(
                      "style",
                      "display:block;"
                    ),
                    $(".cropper-page-drop-area-button").addClass("noselect"),
                    $(".cropper-page-drop-area-button__empty").html(
                      "Upload New Image"
                    ),
                    e.enableAllToolFileUploads(),
                    Promise.reject()
                  );
                },
                d = function (t) {
                  return e._imageUploadSuccessHandler(n, t), t;
                },
                p = function (e) {
                  return (
                    (e.cropperData = null),
                    (e.viewport = {
                      width: n.record.width,
                      height: n.record.height,
                    }),
                    e
                  );
                },
                f = function (t) {
                  e.setUrlParameter(t.id),
                    (e.uploadID = t.id),
                    (e.uploadPending = !1),
                    e._enableDownloadButtonIfHasChangesAndHasFinishedUploadingAndHasNoInputErrors();
                },
                m = l(i).then(c).then(p)["catch"](h).then(d),
                g = u(i);
              Promise.all([m, g])
                .then(function (e) {
                  var t = e[0];
                  return (t.id = e[1].id), Promise.resolve(t);
                })
                .then(f);
            })
            .bind("loading", function () {
              Helpers.GlobalEventTracker.track("StageCanvas-loading"),
                $(".cropper-page-drop-area-button__empty").html("Uploading..."),
                $(".cropper-page-drop-area-button").addClass("noselect"),
                $(".cropper-page-drop-area-button__empty").prepend(
                  $("<div/>")
                    .attr("style", "display:none;")
                    .addClass("lds-ring-cropper-blue")
                    .append("<div/>")
                    .append("<div/>")
                    .append("<div/>")
                    .append("<div/>")
                ),
                e._addLoaderDivElement();
            }),
          e.bind("loadingAsset", function (t) {
            var n, i, r, o;
            n = e._filesContainer.customG_0;
            var s = t.data.path,
              a = new XMLHttpRequest(),
              l = s.split("/").pop();
            $(".cropper-page-drop-area-button").html("Uploading Your Image..."),
              $(".cropper-page-drop-area-button").attr(
                "style",
                "display:inline-flex;"
              ),
              $(".cropper-page-drop-area-button").addClass("noselect"),
              $(".cropper-page-drop-area-button").prepend(
                $("<div/>")
                  .attr("style", "display:none;")
                  .addClass("lds-ring-cropper")
                  .append("<div/>")
                  .append("<div/>")
                  .append("<div/>")
                  .append("<div/>")
              ),
              e.disableAllToolFileUploads(),
              a.open("GET", s),
              (a.responseType = "blob"),
              (a.onload = function () {
                if (200 == this.status) {
                  (r = a.response),
                    (i = new File([r], l, { type: "image/png" }));
                  var t = window.URL || window.webkitURL,
                    s = new Image();
                  (s.src = t.createObjectURL(i)),
                    (e.imageCache = { imageData: s, canvas: null }),
                    (o = new FormData()),
                    o.append("user_image", i, i.name),
                    Helpers.GlobalEventTracker.smartTemplateEvent(
                      "uploadStart",
                      { fileName: i.name }
                    ),
                    n.hideDiscardButton(),
                    n.hideRepositionButton();
                  var c, u;
                  (c = n.id),
                    (u = n.userImagePath),
                    o.append("cropperResize", !0),
                    o.append("referrer", "image-crop-tool"),
                    e
                      ._upload(o)
                      .done(function (t) {
                        var i = t.data;
                        (i.previousId = c),
                          (i.previousUserImagePath = u),
                          (e.uploadID = t.data.id),
                          e.setUrlParameter(t.data.id);
                        var r = Helpers.App.removeParam("asset_id");
                        window.history.replaceState(
                          {},
                          Helpers.StageType.getStageSlug(),
                          r
                        ),
                          e._imageUploadSuccessHandler(n, i);
                      })
                      .fail(function (t) {
                        var i = e.customUploadFail(t, n, c, u);
                        Helpers.GlobalEventTracker.smartTemplateEvent(
                          "uploadError",
                          { message: i, fileName: n.getFile().name }
                        ),
                          e.dispatch("stage.error", { message: i }),
                          $(".lds-ring-cropper").remove(),
                          $(".lds-ring-cropper-blue").remove(),
                          $(".cropper-page-drop-area-button").html(
                            "Upload Your Image Here"
                          ),
                          $(".cropper-page-drop-area-button").attr(
                            "style",
                            "display:block;"
                          ),
                          $(".cropper-page-drop-area-button").addClass(
                            "noselect"
                          ),
                          $(".cropper-page-drop-area-button__empty").html(
                            "Upload New Image"
                          ),
                          e.enableAllToolFileUploads();
                      });
                }
              }),
              (a.onerror = function () {
                var t = e.customUploadFail(
                  response,
                  n,
                  previousId,
                  previousUserImagePath
                );
                Helpers.GlobalEventTracker.smartTemplateEvent("uploadError", {
                  message: t,
                  fileName: n.getFile().name,
                }),
                  e.dispatch("stage.error", { message: t }),
                  $(".lds-ring-cropper").remove(),
                  $(".lds-ring-cropper-blue").remove(),
                  $(".cropper-page-drop-area-button").html(
                    "Upload Your Image Here"
                  ),
                  $(".cropper-page-drop-area-button").attr(
                    "style",
                    "display:block;"
                  ),
                  $(".cropper-page-drop-area-button").addClass("noselect"),
                  $(".cropper-page-drop-area-button__empty").html(
                    "Upload New Image"
                  ),
                  e.enableAllToolFileUploads();
              }),
              a.send();
          }),
          e._filesContainer.bind("customGraphicNotFound", function (t) {
            console.log("customGraphicNotFound");
            var n, i, r, o;
            (n = t.data),
              (i = n.id),
              (o = [
                Helpers.App.getUserUploadsUrl(),
                "output_images",
                i + ".png",
              ].join("/")),
              (r = t.data.target),
              $.ajax({ method: "HEAD", url: o })
                .done(function () {
                  var t = r.record.layers[0].image;
                  (r.pendingImageUrl = o),
                    (r.record.hash = i),
                    (r.record.layers[0].image = o),
                    (r.record.layers[0].visible = !0),
                    e.dispatch("change", {
                      errorCallback: function (e) {
                        "abort" !== e.statusText &&
                          (r.hideDiscardButton(),
                          r.hideRepositionButton(),
                          (r.record.layers[0].image = t));
                      },
                      triggeredByPopState: !0,
                    }),
                    e.dispatch("customGraphicsUpdate"),
                    r.showDiscardButton(),
                    r.showRepositionButton(),
                    e.enableAllToolFileUploads(),
                    r.urlInputControl && r.urlInputControl.hide();
                })
                .fail(function () {
                  e._customImageNotFound = !0;
                });
          }),
          e._filesContainer.bind("graphicCropSuccess", function (t) {
            console.log("graphicCropSuccess");
            var n, i, r, o;
            (n = t.data),
              (o = n.customGraphicControl),
              (i = o.record.hash),
              (r = o.record.layers[0].image),
              Helpers.GlobalEventTracker.smartTemplateEvent("cropEnd", {
                id: n.id,
              }),
              (o.record.hash = n.id),
              (o.record.layers[0].image = n.croppedImageUrl),
              (o.record.layers[0].visible = !0),
              e.dispatch("change", {
                errorCallback: function (e) {
                  "abort" !== e.statusText &&
                    (o.hideDiscardButton(),
                    o.hideRepositionButton(),
                    400 === e.status && (o.record.layers[0].image = r));
                },
                triggeredByPopState: n.triggeredByPopState,
                triggeredByUser: !n.triggeredByPopState,
              }),
              e.dispatch("customGraphicsUpdate"),
              o.showDiscardButton(),
              o.showRepositionButton(),
              e.enableAllToolFileUploads(),
              o.urlInputControl && o.urlInputControl.hide();
          });
        var s = $(window).height() > 450 ? $(window).height() - 50 : 400,
          a = 83,
          l = 199,
          c = 3,
          u = 0;
        if (
          (this.record.graphic.forEach(function (r, o) {
            var h = r.styles;
            if (r.allowCustomUpload && r.hasLayers === !1) {
              var d = e._getGraphicDimensions(r);
              (r.width = d.width),
                (r.height = d.height),
                r.layers.push({
                  id: "customGraphic",
                  name: "customGraphic",
                  image: null,
                  visible: !1,
                }),
                e._createCustomGraphicControl(r, o, r.name);
            } else if (h.layerEffects && h.layerEffects.solidFill) {
              var p = n["search" + r.type + "_" + r.name];
              "undefined" == typeof p && (p = r.preconfiguredSearch);
              var f = new UI.SmartTemplate.MultiControl({
                  position: o,
                  type: "graphic",
                  name: r.type + "_" + r.name,
                  record: r,
                  isMobilePhone: t,
                  prefillColor: n["color" + r.type + "_" + r.name],
                  prefillGraphic: n["multi" + r.type + "_" + r.name],
                  prefillSearch: p,
                  onlyGraphics: !0,
                  defaultAssetColors: i,
                }),
                m = r.hasLayers;
              m && u++,
                (s > (m ? l : a) && c > u) || t
                  ? (e.rightSideBar.appendChild(f),
                    f.render(e.rightSideBar.element),
                    (s -= m ? l : a))
                  : (e.leftSideBar.appendChild(f),
                    f.render(e.leftSideBar.element));
            }
          }),
          this.record.backgroundColor || this.record.background.length)
        ) {
          var h = {},
            d = "";
          this.record.background.length > 0
            ? (this.record.background[0] = h =
                e._buildBackgroundRecord(
                  this.record.backgroundColor,
                  this.record.background[0]
                ))
            : (h = e._buildBackgroundRecord(this.record.backgroundColor, {})),
            (d = h.type + "_" + h.name);
          var p = new UI.SmartTemplate.MultiControl({
            position: 0,
            name: d,
            record: this.record.background[0],
            type: "background",
            isMobilePhone: e.isMobilePhone,
            prefillColor: n["color" + d],
            prefillGraphic: n["multi" + d],
            prefillSearch: n["search" + d] || h.preconfiguredSearch,
            viewport: {
              width: e.record.original.size.preview.width,
              height: e.record.original.size.preview.height,
            },
            onlyGraphics: !0,
          });
          e.isMobilePhone
            ? (e.bgMobileSideBar.appendChild(p),
              p.render(e.bgMobileSideBar.element))
            : (e.rightSideBar.appendChild(p), p.render(e.rightSideBar.element)),
            p.bind("change", function () {
              e._changeBackgroundColorRecord.bind(e)(p.record);
            }),
            p.bind("backgroundReady", function () {
              e._changeResolutionEventData &&
                e._changeResolutionEventData.id &&
                e.bgContainer.dispatch(
                  "resolutionChange",
                  e._changeResolutionEventData
                );
            }),
            h.allowColorpicker === !0
              ? (s -= a)
              : e.bgContainer.element.addClass("no-background-color"),
            h.hasLayers === !0
              ? ((s -= l - a),
                c--,
                e.rightSideBar.bind("imageDataNotFound", function () {
                  e._customImageNotFound = !0;
                }),
                e.bgContainer.bind("cropSuccess", function (t) {
                  var n, i, r;
                  t.stopPropagation(),
                    (n = t.data),
                    (id = n.id),
                    (i = e.Folder_Background),
                    (r = i.customBg.record.image),
                    (i.customBg.record.record_hash = id),
                    (i.customBg.record.image = n.croppedImageUrl),
                    (i.customBg.record.visible = !0),
                    i.setUrlParameter(id),
                    i.customBg.updatePreview(n.thumbnailUrl),
                    i.selectItem(i.customBg),
                    e.dispatch("change", {
                      errorCallback: function (e) {
                        "abort" !== e.statusText &&
                          400 === e.status &&
                          (i.customBg.record.image = r);
                      },
                      triggeredByPopState: n.triggeredByPopState,
                    });
                }))
              : e.bgContainer.element.addClass("no-backgrounds");
        }
        if (
          (this.bind("customImageUploaded", function (e) {
            return void console.log("customImageUploaded");
          }),
          this.bind("customImageReady", function (t) {
            console.log("customImageReady");
            var n = t.data.customUploader,
              i = t.data.componentToInform;
            if (n.id) {
              var r = {
                id: n.id,
                userImagePath: n.userImagePath,
                viewport: n.viewport,
              };
              e.cropCustomImage(
                r,
                e._cropCustomImageSuccessHandler.bind(e),
                e._cropCustomImageErrorHandler.bind(e),
                i
              );
            }
          }),
          this.bgContainer.bind("resolutionChange", function (t) {
            if (
              e.record.background.length &&
              e.record.background[0].hasLayers
            ) {
              var n, i, r;
              if (((r = this.Folder_Background), !r.customBg)) return;
              (n = t.data),
                (i = n.preview_dimensions),
                r.customBg.updateViewport(i),
                r.customBg.record.visible &&
                  (r.resetUrlParameter(),
                  r.selectItem(r.bgItem_0),
                  r.customBg.reset(),
                  e.dispatch("customImageReady", {
                    customUploader: r.customBg,
                    componentToInform: r.parent,
                  }));
            }
            e.dispatch("change", { sizeData: t.data });
          }),
          e.record.supportedSizes && e.record.supportedSizes.length)
        ) {
          var f = new UI.MultiSizesTemplates.Container({
            name: "multiSizesContainer",
            record: e.record,
            supportedSizes: e.record.supportedSizes,
            original: e.record.original,
            prefillSize: n.size || e.record.size,
          });
          e.appendChild(f),
            e.multiSizesContainer.bind("sizeChange", function (t) {
              var n, i;
              (n = t.data),
                (i = n.dimensions),
                e.element.find("img").css({ visibility: "visible" }),
                (e._changeResolutionEventData = {
                  dimensions: i.high,
                  preview_dimensions: i.preview,
                  dpi: e.record.original.size.high.resolution,
                  id: n.id,
                }),
                e.bgContainer.dispatch(
                  "resolutionChange",
                  e._changeResolutionEventData
                ),
                (e.isChangeSizeInProgress = !0);
            }),
            setTimeout(function () {
              if (window.isSavedConfiguration) {
                e.multiSizesContainer.setLastChange(performance.now()),
                  e.multiSizesContainer.queue.clear();
                var t = e.multiSizesContainer.multiSizesCarousel.children;
                e.multiSizesContainer.update(t, !0);
              }
            }, 2e3);
        }
        e.leftSideBar.bind("file.loaded", function (e) {
          e.stopPropagation();
        }),
          e.rightSideBar.render($(".page-container")),
          e.leftSideBar.render($(".page-container")),
          t &&
            (e.bgMobileSideBar.render($(".page-container")),
            $(".design-service-order-jersey-container")
              .detach()
              .appendTo(".stage-object-actions"));
        var m, g;
        if (((m = $(".saved-configurations-grid")), m.length)) {
          var v = null;
          try {
            throw new Error("Get stack trace");
          } catch (y) {
            v = y.stack || "No stack trace";
          }
          Helpers.GlobalEventTracker.deprecatedMethod({
            module: "UI.Tool.CropImagePage.initSavedConfiguration",
            file: "cropper_page.js",
            stackTrace: v,
          });
          var _ = new UI.SmartTemplate.SavedConfigurations({
            name: "savedConfigurations",
            element: m,
            settings: e.carouselSettings,
          });
          this.appendChild(_),
            Helpers.App.isMobile() && _.element.slick("unslick");
        }
        if (((g = $(".related-templates-grid")), g.length)) {
          var v = null;
          try {
            throw new Error("Get stack trace");
          } catch (y) {
            v = y.stack || "No stack trace";
          }
          Helpers.GlobalEventTracker.deprecatedMethod({
            module: "UI.Tool.CropImagePage.initRelatedTemplates",
            file: "cropper_page.js",
            stackTrace: v,
          }),
            UiJsonMapSupport.fetch(),
            g.each(function (t, n) {
              var i = new UI.RelatedTemplates.Carousel({
                name: "relatedTemplates" + t,
                uiJson: e.record,
                element: $(n),
                queue: e.sharedQueue,
                settings: e.carouselSettings,
              });
              e.appendChild(i),
                Helpers.App.isMobile() && i.element.slick("unslick");
            }),
            this._displayItemsBelowImage();
        }
        if (this.record.composition) {
          if (
            this.record.composition.sizes &&
            this.record.composition.sizes.length > 1
          ) {
            var b, w;
            (w = {
              name: "scaling",
              record: this.record.composition.sizes,
              prefillZoom: n.zoom,
            }),
              t
                ? ((w.isMobilePhone = t), (b = $(window).width() - 20))
                : (b = e.stageImageWidget.element.width()),
              this.appendChild(new UI.SmartTemplate.Scaling(w)).render(
                this.stageImageWidget.element
              ),
              e._stageImageShown && e.scaling.show(),
              e._repositionScaling();
          }
          this.record.composition.layout &&
            this.record.composition.layout.length > 1 &&
            (this.record.composition.layout.length > 6 &&
              this.record.composition.layout.splice(
                6,
                this.record.composition.layout.length - 6
              ),
            this.leftSideBar
              .appendChild(
                new UI.SmartTemplate.Layout({
                  name: "layoutPicker",
                  record: this.record.composition.layout,
                  prefillLayout: n.layout,
                })
              )
              .render(this.leftSideBar.element));
        }
        t
          ? e.hideMobileButtonsIfEmpty()
          : (e.accomodateLeftSidebarScrollBar(), e.hideSidebarsIfEmpty());
        var C = new UI.Tags({ element: $(".description-tags") });
        e.appendChild(C),
          e.loadControlAssets(),
          setTimeout(function () {
            e.loadFromUrlParameters();
          }, 1),
          "undefined" == typeof Helpers.App.getUrlParam("customG_0")
            ? e.setStageCropperLayout()
            : (e.uploadID = Helpers.App.getUrlParam("customG_0"));
      },
      isLayoutInitialized: function () {
        return 1 == $(".cropper-page-title").length;
      },
      setLoadedCropperLayout: function () {
        var e = this;
        $("#container").hasClass("is_smart-template") &&
          $("#container").removeClass("is_smart-template"),
          e._removeLoaderDivElement(),
          e.isLayoutInitialized() || e._setStageCropperLayout();
        var t = $(".cropper-footer-container").detach();
        e.stageCropper.activate(),
          $(".custom-graphic-control").hide(),
          e.enableAllToolFileUploads(),
          $(".cropper-page-subtitle").length ||
            ((e.$cropperSubtitle = $(document.createElement("h2"))),
            e.$cropperSubtitle
              .addClass("cropper-page-subtitle")
              .addClass("noselect")
              .addClass("default-cursor"),
            e.$cropperSubtitle.html(
              "Adjust your image and download it for free!"
            ),
            e.$cropperSubtitle.insertAfter($(".cropper-page-title")));
        var n = e.$cropperPageDropAreaButton.detach();
        e.$cropperPageDropArea.empty().append(n),
          e.$cropperPageDropAreaButton
            .removeClass("cropper-page-drop-area-button")
            .addClass("cropper-page-drop-area-button__empty"),
          e.$cropperPageDropArea
            .removeClass("cropper-page-drop-area")
            .addClass("cropper-page-drop-area__empty")
            .addClass("noselect"),
          $(".lds-ring-cropper").remove(),
          $(".cropper-page-drop-area-button__empty").html("Upload New Image"),
          $(".cropButton").remove(),
          t.appendTo("main"),
          $(".cropper-object-image").removeClass("off-screen"),
          $(".stage-cropper-dialog").detach().appendTo("main"),
          $(".stage-cropper-dialog").addClass("embedded-stage-cropper-dialog"),
          ($(".download-button")[0].innerHTML = "Download"),
          $(".download-button").removeClass("off-screen"),
          $(".cropper-page-drop-area__empty").removeClass("off-screen"),
          $(".design-service").addClass("remove-header-element"),
          $(".order-jersey").addClass("remove-header-element"),
          $(".action-buttons").removeClass("off-screen"),
          $(".action-buttons").appendTo("main"),
          $(".download-button").attr("style", "float: none; display: inline;"),
          e._filesContainer.customG_0.element.appendTo(
            ".stage-cropper-buttons"
          ),
          $(".download-button").appendTo(".stage-cropper-buttons"),
          e._filesContainer.customG_0.element.show(),
          e._filesContainer.customG_0.element
            .find(".input-file-control")
            .addClass("input-file-control__empty");
        var i = e.$cropperPageDropArea[0].classList.value;
        e.$cropperPageDropArea.removeClass(i),
          e._filesContainer.customG_0.element.addClass(i),
          e._filesContainer.customG_0.element.addClass(
            "custom-graphic-drop-area__empty"
          ),
          e._filesContainer.customG_0.element.removeClass(
            "cropper-page-drop-area__empty"
          ),
          e._filesContainer.customG_0.element.removeClass("fill-container"),
          e._filesContainer.customG_0.element
            .find(".input-file-control")
            .addClass("fill-container"),
          e.$cropperPageDropArea.addClass("fill-container"),
          e.$cropperPageDropArea.addClass("clickable"),
          e._filesContainer.customG_0.element.addClass("become-container"),
          e.$cropperPageDropAreaButton.addClass("flex-vertical-align");
        var r = function (e) {
            e.preventDefault();
          },
          o = function (e) {
            e.bind("dragover", r), e.bind("dragleave", r), e.bind("drop", r);
          };
        o(e.$cropperPageDropArea),
          o(e.$cropperPageDropAreaButton),
          o(e._filesContainer.customG_0.element);
      },
      _enableDownloadButton: function () {
        $(".cropper-page-drop-area-button__empty").length &&
          $(".download-button").hasClass("disabled") &&
          $(".download-button").removeClass("disabled");
      },
      stageCropperBindings: function () {
        var e = this;
        e.stageCropper.bind("cropperChange", function () {
          (e.hasChanges = !0),
            e._enableDownloadButtonIfHasChangesAndHasFinishedUploadingAndHasNoInputErrors();
        }),
          e.stageCropper.bind("inputError", function (t) {
            e.stageActionsManager.disableDownloadButton(),
              e.dispatch("stage.error", { message: t.data });
          }),
          e.stageCropper
            .bind("imageLoaded", function () {
              e.setLoadedCropperLayout();
            })
            .bind("modal.cancel", function () {
              e.enableAllToolFileUploads();
            }),
          e.stageCropper.bind("cropperSizeChange", function (t) {
            (e.currentCropData.viewport.width = parseInt(t.data[0])),
              (e.currentCropData.viewport.height = parseInt(t.data[1])),
              e.stageCropGraphic(e.currentCropData),
              (e.hasChanges = !0),
              e._enableDownloadButtonIfHasChangesAndHasFinishedUploadingAndHasNoInputErrors();
          }),
          e.stageCropper.bind("imageLoadError", function (t) {
            t.data || (t.data = {}),
              t.data.message ||
                (t.data.message =
                  "An error occurred while loading the image. Please try again"),
              e._grabUrlFail(t);
          });
      },
      customGraphicBindings: function () {
        var e = this;
        e._filesContainer.customG_0.bind("imageUrlDataLoaded", function () {
          var t = e._filesContainer.customG_0.uploadedUrlData;
          $.getJSON(t).done(function (t) {
            (previousId = null),
              (previousUserImagePath = void 0),
              (t.previousId = previousId),
              (t.previousUserImagePath = previousUserImagePath),
              e.setUrlParameter(t.id);
            var n = new Image();
            (n.crossOrigin = "Anonymous"),
              (n.onload = function () {
                e._imageUploadSuccessHandler(e._filesContainer.customG_0, t);
              }),
              (n.src =
                t.user_image_url.replace("-accelerate", "") +
                "?_timestamp=" +
                Date.now()),
              (e.imageCache = { imageData: n, canvas: null }),
              $(".cropper-page-drop-area-button").html(
                "Uploading Your Image..."
              ),
              $(".cropper-page-drop-area-button").attr(
                "style",
                "display:inline-flex;"
              ),
              $(".cropper-page-drop-area-button").addClass("noselect"),
              $(".cropper-page-drop-area-button").prepend(
                $("<div/>")
                  .attr("style", "display:none;")
                  .addClass("lds-ring-cropper")
                  .append("<div/>")
                  .append("<div/>")
                  .append("<div/>")
                  .append("<div/>")
              ),
              e.disableAllToolFileUploads();
          });
        });
      },
      stageCropGraphic: function (e) {
        var t, n, i, r;
        (t = this),
          (r = e.userImagePath),
          (n = e.viewport),
          e.cropperData && (i = e.cropperData),
          t.stageCropper.setViewportDimensions(n),
          t.stageCropper.loadImage(
            {
              cropperConstraints: { zoom: !1, movement: !1 },
              existingImageInfo: i,
            },
            r
          );
      },
      _createCustomGraphicControl: function (e, t, n) {
        var i = this,
          r = new UI.SmartTemplate.ReplaceableCustomGraphicControl({
            name: n,
            record: e,
            maxSize: i.constructor.maxSizeAllowed.resizecrop,
            acceptedFiles: i.constructor.acceptedFiles.image,
            isMobilePhone: i.isMobilePhone,
            maxDimension: i.constructor.MAX_UPLOAD_DIMENSION_ALLOWED,
          });
        if (
          (i._filesContainer.appendChild(r),
          this.customGraphicBindings(),
          i.isMobilePhone)
        ) {
          var o;
          t % 2 === 0
            ? ((o = t),
              i.stageActionsManager.element.append(
                '<div class="st_uploads st_uploads_' +
                  o +
                  ' btn-group stage-actions"></div>'
              ))
            : (o = t - 1);
          var s = i.stageActionsManager.element.find(".st_uploads_" + o);
          s.addClass("off-screen"), r.render(s);
        } else i.leftSideBar.appendChild(r), r.render(i.leftSideBar.element);
        r.bind("grabUrlStart", i._grabUrlStart.bind(i)),
          r.bind("grabUrlSuccess", i._grabUrlSuccessHandler.bind(i, r)),
          r.bind("grabUrlFail", i._grabUrlFail.bind(i)),
          r.checkUrlParams(),
          r.urlInputControl && r.urlInputControl.checkUrlParams(),
          r.bind("exceededSize", function (e) {
            i.dispatch("stage.error", { message: e.data });
          });
      },
      getCropSizesData: function (e) {
        var t = [
          { name: "AD - GDN Size 1", width: 336, height: 280 },
          { name: "AD - GDN Size 2", width: 300, height: 250 },
          { name: "AD - GDN Size 3", width: 300, height: 600 },
          { name: "AD - GDN Size 4", width: 250, height: 250 },
          { name: "AD - Large Leaderboard", width: 970, height: 90 },
          { name: "AD - Leaderboard Banner", width: 728, height: 90 },
          { name: "AD - Skyscraper 120", width: 120, height: 600 },
          { name: "Billboard Banner", width: 970, height: 250 },
          { name: "Etsy Banner", width: 1200, height: 160 },
          { name: "Facebook Ad / Link", width: 1200, height: 628 },
          { name: "Facebook Cover", width: 820, height: 312 },
          { name: "Facebook Post", width: 940, height: 788 },
          { name: "Instagram Post", width: 1080, height: 1080 },
          { name: "Instagram Story", width: 1080, height: 1920 },
          { name: "OBS Stream Overlay", width: 1280, height: 720 },
          { name: "Pinterest Pin", width: 600, height: 900 },
          { name: "T-Shirt Design", width: 4e3, height: 4e3 },
          { name: "Twitch Banner", width: 1200, height: 380 },
          { name: "Twitch Offline Banner", width: 1920, height: 1080 },
          { name: "Twitch Overlay", width: 1280, height: 720 },
          { name: "Twitch Panel", width: 320, height: 100 },
          { name: "Twitter Header", width: 1500, height: 500 },
          { name: "Twitter Post", width: 4e3, height: 4e3 },
          { name: "Webcam Frame", width: 1280, height: 720 },
          { name: "YouTube Banner", width: 2560, height: 1440 },
          { name: "YouTube Profile Picture", width: 4e3, height: 4e3 },
          { name: "YouTube Thumbnail", width: 1280, height: 720 },
        ];
        return e ? e.concat(t) : void 0;
      },
      setUrlParameter: function (e) {
        return Helpers.App.replaceUrlParamWithHistory("customG_0", e), this;
      },
      _imageUploadSuccessHandler: function (e, t) {
        Helpers.GlobalEventTracker.track(
          "StageCanvas-imageUploadSuccessHandler:"
        );
        var n, i, r, o, s;
        (t.previousId = r),
          (t.previousUserImagePath = o),
          (i = t.id),
          (n = this),
          (n.uploadID = i),
          (r = t.previousId),
          (o = t.previousUserImagePath),
          (s = [Helpers.App.getUserUploadsUrl(), i, t.file_name].join("/")),
          Helpers.GlobalEventTracker.smartTemplateEvent("uploadEnd", { id: i });
        var a = {
            id: i,
            userImagePath: s,
            viewport: { width: e.record.width, height: e.record.height },
          },
          l = function (t) {
            var i, r;
            (i = t.data),
              (r = i.cropped_image_url),
              (e.id = i.id),
              (e.userImagePath = s),
              e.urlInputControl && e.urlInputControl.hide(),
              (e.cropParams = i.crop_params),
              e.setUrlParameter(i.id),
              e.showRepositionButton(),
              n._removeLoaderDivElement(),
              n._filesContainer.dispatch("graphicCropSuccess", {
                croppedImageUrl: r,
                customGraphicControl: e,
                id: i.id,
              });
          },
          c = function (t) {
            var s = n.customUploadFail(t, e, r, o);
            Helpers.GlobalEventTracker.smartTemplateEvent("cropError", {
              message: s,
              id: i,
            }),
              n.dispatch("stage.error", { message: s, cropData: a });
          };
        if (n.hasOwnProperty("stageCropper"))
          (d = n.stageCropper),
            d.render(this.$main),
            d.cropperObject.imgReset(),
            (a.userImagePath = n.imageCache.imageData.src),
            (n.currentCropData = a),
            (n.currentCropData.viewport.width = n.imageCache.imageData.width),
            (n.currentCropData.viewport.height = n.imageCache.imageData.height),
            n.stageCropGraphic(n.currentCropData, l, c),
            n.stageCropper._resetCropperSizeControls({
              width: n.imageCache.imageData.width,
              height: n.imageCache.imageData.height,
            });
        else {
          var u = {
              name: "Custom",
              width: n.imageCache.imageData.width,
              height: n.imageCache.imageData.height,
            },
            h = n.getCropSizesData([u]),
            d = n.appendChild(
              new UI.StageCropper({ name: "stageCropper", cropSizesData: h })
            );
          d.element.addClass("off-screen"),
            d.render($("#main-content-wrapper")),
            n.stageCropperBindings(),
            (a.userImagePath = n.imageCache.imageData.src),
            (n.currentCropData = a),
            (n.currentCropData.viewport.width = n.imageCache.imageData.width),
            (n.currentCropData.viewport.height = n.imageCache.imageData.height),
            n.stageCropGraphic(n.currentCropData, l, c);
        }
        n.stageCropper.initializeUrlValues();
      },
      disableAllToolFileUploads: function () {
        var e = this;
        e._filesContainer.children
          .filter(function (e) {
            return (
              "ReplaceableCustomGraphicControl" === e.constructor.className
            );
          })
          .forEach(function (e) {
            e.disableUpload();
          });
      },
      enableAllToolFileUploads: function () {
        var e = this;
        e._filesContainer.children
          .filter(function (e) {
            return (
              "ReplaceableCustomGraphicControl" === e.constructor.className
            );
          })
          .forEach(function (e) {
            e.enableUpload();
          });
      },
      processAssetID: function (e) {
        var t = this,
          n = "/api/v1/purchases/" + e + "/get_image_url";
        $.ajax({ method: "GET", url: n })
          .done(function (e) {
            t.dispatch("loadingAsset", { path: e.path });
          })
          .fail(function (i, r, o) {
            var s = t.getAssetURLFail(o, n, e);
            Helpers.GlobalEventTracker.smartTemplateEvent("uploadError", {
              message: s,
              fileName: n,
            }),
              t.dispatch("stage.error", { message: s }),
              $(".lds-ring-cropper").remove(),
              $(".lds-ring-cropper-blue").remove(),
              $(".cropper-page-drop-area-button").html(
                "Upload Your Image Here"
              ),
              $(".cropper-page-drop-area-button").attr(
                "style",
                "display:block;"
              ),
              $(".cropper-page-drop-area-button").addClass("noselect"),
              $(".cropper-page-drop-area-button__empty").html(
                "Upload New Image"
              ),
              t.enableAllToolFileUploads();
          });
      },
      getAssetURLFail: function (e) {
        var t;
        return (t = e || "Couldn't process image, please try again later");
      },
      _upload: function (e) {
        return $.ajax({
          url: "/cropper/upload",
          data: e,
          method: "POST",
          processData: !1,
          contentType: !1,
          cache: !1,
        });
      },
      _updateCropParams: function () {
        var e = this.stageCropper._getParamsFromCropper(),
          t = this.stageCropper._getViewportDimensions();
        (e.id = this.uploadID),
          (e.upgrade = !0),
          (e.stage_id = Helpers.StageType.getStageID()),
          (e["viewport[width]"] = t.width),
          (e["viewport[height]"] = t.height),
          (e.slug = Helpers.StageType.getStageSlug()),
          (this.cropParams = e);
      },
      _downloadForLoggedInUser: function () {
        this._updateCropParams(),
          this.stageActionsManager.disableDownloadButton(),
          this.purchasesModal.skipModalAndDownloadImmediately(),
          this._trackDownloadCrop();
      },
      _trackDownloadCrop: function () {
        var e = this,
          t = this.stageCropper._getViewportDimensions();
        Helpers.GlobalEventTracker.trackCropperTool(
          "user:requestCropDownload",
          {
            presetName:
              e.stageCropper.cropperSize.selector.getSelectedOption().innerHTML,
            originalWidth: e.imageCache.imageData.width,
            originalHeight: e.imageCache.imageData.height,
            cropWidth: t.width,
            cropHeight: t.height,
          }
        );
      },
    },
  }),
  Class(UI, "CropperSize").inherits(Widget)({
    html: '<div class="cropperSize"></div>',
    MAX_SIZE: 7500,
    ERROR_MESSAGE: "Your image is too large. Maximum is 7500X7500 px.",
    prototype: {
      init: function (e) {
        Widget.prototype.init.call(this, e);
        var t = this,
          n = new UI.Dropdown({
            name: "selector3",
            cropSizesData: t.cropSizesData,
          }),
          i = new UI.InputField({
            name: "width",
            value: t.cropSizesData[0].width,
          }),
          r = new UI.InputField({
            name: "height",
            value: t.cropSizesData[0].height,
          });
        (t.selector = n), n.render(t.element);
        var o = $('<div class="size-input-wrapper"></div>');
        t.element.append(o), (t.inputField1 = i), i.render(o);
        var s = document.createElement("div");
        s.classList.add("noselect"),
          s.classList.add("default-cursor"),
          (s.textContent = "x"),
          (s.style.width = "15px"),
          o.append($(s)),
          (t.inputField2 = r),
          r.render(o);
        var a = document.createElement("div");
        return (
          a.classList.add("noselect"),
          a.classList.add("default-cursor"),
          (a.textContent = "px"),
          o.append($(a)),
          t.cropperSizeBindings(),
          this
        );
      },
      initializeUrlValues: function () {
        this.inputField1.updateValueFromUrl(),
          this.inputField2.updateValueFromUrl();
      },
      cropperSizeBindings: function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          s = this;
        (e = function (e) {
          e.data > s.constructor.MAX_SIZE ? n(e) : t(e);
        }),
          (t = function (e) {
            var t = [s.inputField1.getValue(), s.inputField2.getValue()];
            s.setDropdownToOption("Custom"),
              e.target.setStateToActive(),
              s.updateErrorStateFlag(),
              s.areInputsInErrorState() || s.dispatch("cropperSizeChange", t);
          }),
          (n = function (e) {
            e.target.setStateToError(),
              s.updateErrorStateFlag(),
              s.dispatch("inputError", s.constructor.ERROR_MESSAGE);
          }),
          (i = function (e) {
            e.target.setStateToActive(), s.updateErrorStateFlag();
          }),
          (r = function (e) {
            e.target.getValue() > s.constructor.MAX_SIZE &&
              e.target.setStateToError();
          }),
          (o = function (e) {
            var t = e.data.split("x");
            s.inputField1.setStateToActive(),
              s.inputField2.setStateToActive(),
              s.inputField1.setValue(t[0]),
              s.inputField1.updateValueToUrl(t[0]),
              s.inputField2.setValue(t[1]),
              s.inputField2.updateValueToUrl(t[1]),
              s.updateErrorStateFlag(),
              s.dispatch("cropperSizeChange", t);
          }),
          s.selector.bind("dropdownChange", o),
          s.inputField1.bind("inputChange", e.bind(this)),
          s.inputField2.bind("inputChange", e.bind(this)),
          s.inputField1.bind("inputError", n),
          s.inputField2.bind("inputError", n),
          s.inputField1.bind("inputClick", i),
          s.inputField2.bind("inputClick", i),
          s.inputField1.bind("inputFocusOut", r),
          s.inputField2.bind("inputFocusOut", r);
      },
      setDropdownToOption: function (e) {
        var t = this;
        t.selector.setSelectedOption(e);
      },
      updateInputValues: function (e) {
        var t = this;
        void 0 === Helpers.App.getUrlParam(t.inputField1.name) &&
          t.inputField1.setValue(e.width),
          void 0 === Helpers.App.getUrlParam(t.inputField2.name) &&
            t.inputField2.setValue(e.height);
      },
      updateDropdownOptionValue: function (e, t) {
        var n = this,
          i = "" + t.width + "x" + t.height;
        n.selector.updateOptionValue(e, i);
      },
      enableInputsOnCustomOption: function () {
        var e = this;
        e.selector.getSelectedOption();
      },
      areInputsInErrorState: function () {
        var e = this;
        return e.inputField1.isInErrorState() || e.inputField2.isInErrorState();
      },
      updateErrorStateFlag: function () {
        return (
          (this.errorState = this.areInputsInErrorState()), this.errorState
        );
      },
      setInputStateToActive: function () {
        var e = this;
        e.inputField1.setStateToActive(), e.inputField2.setStateToActive();
      },
      destroy: function () {
        return (
          this.inputField1.destroy(),
          this.inputField2.destroy(),
          this.selector.destroy(),
          Widget.prototype.destroy.call(this),
          this
        );
      },
    },
  }),
  Class(UI, "Dropdown").inherits(Widget)({
    html: '<p class="dropdownTitle noselect default-cursor">Presets</p>        <div class="select-dropdown-with-chevron relative">        <select class="selectDropdown">            </select>        <span class="dropdown-chevron glyphicon glyphicon-chevron-down"></span>        </div>    ',
    prototype: {
      init: function (e) {
        Widget.prototype.init.call(this, e);
        var t = this;
        return (
          (t.selectTag = t.element.find(".selectDropdown")[0]),
          e.cropSizesData.forEach(function (e) {
            var n = "" + e.width + "x" + e.height,
              i = document.createElement("option");
            (i.textContent = e.name), (i.value = n), t.selectTag.appendChild(i);
          }),
          t.selectorBindings(),
          this
        );
      },
      selectorBindings: function () {
        var e = this;
        e.element.on("change", function (t) {
          e.dispatch("dropdownChange", t.target.selectedOptions[0].value);
        });
      },
      setSelectedOption: function (e) {
        var t = this,
          n = t.selectTag.selectedOptions[0],
          i = t.selectTag.item(e);
        i && (i.selected = !0), i && n && (n.selected = !1);
      },
      getSelectedOption: function () {
        var e = this;
        return e.selectTag.selectedOptions[0];
      },
      updateOptionValue: function (e, t) {
        var n = this,
          i = n.selectTag.item(e);
        i && (i.value = t);
      },
    },
  }),
  Class(UI, "InputField").inherits(Widget)({
    html: '<input class="input-field" type="number" required="true">    ',
    prototype: {
      init: function (e) {
        Widget.prototype.init.call(this, e);
        var t = this;
        return (
          (t.lowerLimit = t.lowerLimit || 5),
          t.setValue(t.value),
          t.inputFieldBindings(),
          this
        );
      },
      inputFieldBindings: function () {
        var e,
          t,
          n = this;
        (e = Helpers.App.debounce(function (e) {
          var t = e.target.value.length && e.target.valueAsNumber;
          (t = Math.max(t, n.lowerLimit)),
            n.setValue(t),
            n.updateValueToUrl(t),
            n.dispatch("inputChange", t);
        }, 750)),
          (t = function () {
            (n.previousValue = n.getValue() || n.previousValue),
              n.setValue(""),
              n.dispatch("inputClick");
          }),
          (dispatchInputFocusOut = function () {
            !n.getValue() &&
              n.previousValue &&
              (n.setValue(n.previousValue), n.dispatch("inputFocusOut"));
          }),
          n.element.on("input", e),
          n.element.on("click", t),
          n.element.on("focusout", dispatchInputFocusOut),
          window.addEventListener("popstate", this.updateValueFromUrl.bind(n));
      },
      setValue: function (e) {
        var t = this;
        t.element[0].value = e;
      },
      getValue: function () {
        var e = this;
        return e.element[0].value;
      },
      setStateToActive: function () {
        this.element.hasClass("red-input-field") &&
          this.element.removeClass("red-input-field");
      },
      setStateToError: function () {
        this.element.addClass("red-input-field");
      },
      isInErrorState: function () {
        return this.element.hasClass("red-input-field") || !this.getValue();
      },
      updateValueFromUrl: function () {
        var e = this,
          t = Helpers.App.getUrlParam(e.name),
          n = e._getValidValue(t);
        void 0 !== n && (e.setValue(n), e.dispatch("inputChange", n));
      },
      updateValueToUrl: function (e) {
        Helpers.App.replaceUrlParamWithHistory(this.name, e, !0);
      },
      _getValidValue: function (e) {
        return e && e.length > 0 && !isNaN(e)
          ? Math.max(+e, this.lowerLimit)
          : e && 0 === e.length
          ? this.lowerLimit
          : void 0;
      },
    },
  }),
  Class(UI, "ShareToolModal").inherits(UI.ShareModal)({
    modalTitle: {
      productshot: "Share This Tool!",
      gift: "Share a free download with a friend!",
      videoProduct: "Share Your Video!",
    },
    modalMessage: {
      productshot: "Choose one of the options below",
      gift: "Share the link below with a friend (new accounts only)",
      videoProduct: "Choose one of the options below",
    },
    shareResources: {
      TGIFT:
        '<iframe id="twitter-widget-2" scrolling="no" frameborder="0" allowtransparency="true" src="//platform.twitter.com/widgets/tweet_button.1411706120.html#_=1412094440698&amp;count=none&amp;id=twitter-widget-2&amp;lang=en&amp;original_referer=&amp;url=/&amprelated=canonical&amp;size=m&amp;text=I%20have%20one%20free%20Placeit%20download!%20Grab%20it%20here%20{URL}%20&amp;via=placeitapp" class="twitter-share-button twitter-tweet-button twitter-share-button twitter-count-none" title="Twitter Tweet Button" data-twttr-rendered="true" style="width: 57px; height: 20px;"></iframe>',
      FGIFT:
        '<fb:send href="{URL}" width="57" height="20" colorscheme="dark"></fb:send>',
      TWITTER:
        '<iframe id="twitter-widget-2" scrolling="no" frameborder="0" allowtransparency="true" src="//platform.twitter.com/widgets/tweet_button.1411706120.html#_=1412094440698&amp;count=none&amp;hashtags=placeit&amp;id=twitter-widget-2&amp;lang=en&amp;original_referer={LOCATION_HREF}&amp;related=placeitapp&amp;size=m&amp;text=Placeit%3A%20Free%20Screenshot%20App%20Marketing%20Tool%20%26%20Templates&amp;url={URL}&amp;via=placeitapp" class="twitter-share-button twitter-tweet-button twitter-share-button twitter-count-none" title="Twitter Tweet Button" data-twttr-rendered="true" style="width: 57px; height: 20px;"></iframe>',
      FACEBOOK:
        '<iframe src="https://www.facebook.com/plugins/share_button.php?href={URL}&layout=button&size=small&width=59&height=20&locale=en_US" width="59" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
      PINTEREST:
        '<a href="http://pinterest.com/pin/create/button/?url={URL}&media={IMAGE_URL}" class="pin-it-button" count-layout="none" title="pinterest share button"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>',
    },
    html: '        <div class="modal share-stage fade" id="shareStage" tabindex="-1" role="dialog" aria-labelledby="shareStageLabel" aria-hidden="true">          <div class="modal-dialog">            <div class="modal-content">                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>              <div class="modal-header">                <h4>Share Your Image!</h4>              </div>              <div class="modal-body">                <div class="overlay--subtitle"><span>Choose one of the options below</span></div>                <div class="">                    <div class="short-url">                      <input type="text" class="" id="shareURLInput" readonly>                      <button data-clipboard-target="#shareURLInput" class="copytoclipboard button primary"                         data-toggle="tooltip" data-placement="bottom" title="Copied!" data-trigger="manual" disabled>Copy</button>                    </div>                  <div class="share-stage__social-buttons-wrapper">                    <div class="share-social-title">SHARE VIA SOCIAL MEDIA</div>                    <ul class="list-unstyled share-stage__social-buttons">                      <li class="share-stage__social-buttons-item twitter"></li>                      <li class="share-stage__social-buttons-item facebook"></li>                      <li class="share-stage__social-buttons-item pinterest"></li>                      <li class="share-stage__social-buttons-item linkedin"></li>                      <li class="share-stage__social-buttons-item email"></li>                    </ul>                  </div>                </div>              </div>            </div><!-- /.modal-content -->          </div><!-- /.modal-dialog -->        </div>',
    prototype: {
      type: null,
      $shareURLInput: null,
      $copyButton: null,
      $shareSocialButtons: null,
      $shareTwitter: null,
      $shareFacebook: null,
      $sharePinterest: null,
      $shareLinkedin: null,
      animationTimeout: null,
      clipboard: null,
      ANIMATION_DELAY_MS: 500,
      init: function (e) {
        Widget.prototype.init.call(this, e),
          (this.modalTitle = this.element
            .find(".modal-header h4")
            .text(this.constructor.modalTitle[e.type])),
          (this.modalMessage = this.element
            .find(".modal-body .overlay--subtitle span")
            .text(this.constructor.modalMessage[e.type])),
          (this.$shareURLInput = this.element.find("#shareURLInput")),
          (this.$copyButton = this.element.find(".copytoclipboard")),
          (this.$shareSocialButtons = this.element.find(
            ".share-stage__social-buttons"
          )),
          (this.$closeBtn = this.element.find("button.close")),
          (this.$shareTwitter = this.$shareSocialButtons.find(".twitter")),
          (this.$shareFacebook = this.$shareSocialButtons.find(".facebook")),
          (this.$sharePinterest = this.$shareSocialButtons.find(".pinterest")),
          (this.$shareLinkedin = this.$shareSocialButtons.find(".linkedin")),
          (this.$shareEmail = this.$shareSocialButtons.find(".email")),
          this.type && this.element.addClass(this.type),
          (this.clipboard = new Clipboard(this.$copyButton.get(0))),
          this._bindEvents();
      },
      loadShareSocialButtons: function (e) {
        var t, n, i, r;
        (t = this),
          (n = e || Helpers.StageType.getProductshotURL()),
          (i = t.constructor.shareResources);
        var o =
            '<a href="mailto:emailhere?subject=Service for making product shots and videos&body=' +
            n +
            '"></a>',
          s =
            '<script src="//platform.linkedin.com/in.js" type="text/javascript"></script><script type="IN/Share" data-url="' +
            n +
            '"></script>';
        return (
          Helpers.StageType.isTool() &&
            (r = Helpers.StageType.getStageData().tool_meta_image),
          "productshot" === this.type || "videoProduct" === this.type
            ? (this.$shareTwitter
                .empty()
                .append(
                  i.TWITTER.replace("{URL}", n).replace(
                    "{LOCATION_HREF}",
                    window.location.href
                  )
                ),
              this.$shareFacebook
                .empty()
                .append(i.FACEBOOK.replace("{URL}", encodeURIComponent(n))),
              "productshot" === this.type &&
                this.$sharePinterest
                  .empty()
                  .append(
                    i.PINTEREST.replace("{URL}", n).replace("{IMAGE_URL}", r)
                  ),
              this.$shareLinkedin.empty().append(s))
            : (this.$shareTwitter.empty().append(i.TGIFT.replace("{URL}", n)),
              this.$shareFacebook.empty().append(i.FGIFT.replace("{URL}", n)),
              this.$sharePinterest.hide(),
              this.$shareLinkedin.hide()),
          this.$shareEmail.empty().append(o),
          "undefined" == typeof FB
            ? !(function (e, t, n) {
                var i,
                  r = e.getElementsByTagName(t)[0];
                e.getElementById(n) ||
                  ((i = e.createElement(t)),
                  (i.id = n),
                  (i.src =
                    "//connect.facebook.net/en_US/all.js#xfbml=1&appId=586729674734199"),
                  r.parentNode.insertBefore(i, r));
              })(document, "script", "facebook-jssdk")
            : FB.XFBML.parse(this.$shareFacebook[0]),
          this.$sharePinterest
            .find(".pin-it-button")
            .bind("click", function () {
              return (
                window.open(this.href, "_blank", "width=700, height=300"), !1
              );
            }),
          (function (e, n) {
            var i,
              r = e.getElementsByTagName(n)[0],
              o = e.createDocumentFragment(),
              s = function (t, r) {
                e.getElementById(r) ||
                  ((i = e.createElement(n)),
                  (i.src = t),
                  r && (i.id = r),
                  o.appendChild(i));
              };
            ("productshot" === t.type || "videoProduct" === t.type) &&
              s("//apis.google.com/js/plusone.js"),
              r.parentNode.insertBefore(o, r);
          })(document, "script"),
          this.$shareSocialButtons.show(),
          this
        );
      },
    },
  }),
  Class(UI, "StageCropper")
    .inherits(UI.CropperModal)
    .includes(PinchDetectSupport)({
    elementClass: "cropper-object-image",
    html: '        <div class="">            <div class="stage-cropper-content">              <div class="stage-cropper-header">              </div>              <div class="stage-cropper-body">              </div>          <div class="stage-cropper-size-modifiers">          </div>          <div class="stage-cropper-buttons">              <button class="cropButton">Crop</button>              <button class="cropButton">Crop</button>          </div>            </div>        </div>    ',
    _cropperTemplate:
      '        <div class="cropper-object-image">          <div class="cropMain"></div>          <div class="cropSliderContainer">            <div class="cropSlider stageCropSlider"></div>            <a href="#" title="Reset" class="reset-cropper">Reset</a>          </div>        </div>    ',
    prototype: {
      $window: null,
      $modalBody: null,
      $cropperContainer: null,
      $cropMain: null,
      $cropContainer: null,
      $lines: null,
      cropperObject: null,
      _viewportDimensions: null,
      active: !1,
      CROP_SPACE: 80,
      MIN_WIDTH_MODAL: 362,
      pinchHandler: null,
      pinchEndHandler: null,
      zoomRange: null,
      init: function (e) {
        Widget.prototype.init.call(this, e),
          (this.$window = $(window)),
          (this.$modalBody = this.element.find(".stage-cropper-body"));
        var t = this;
        (t.$stageCropperSizeModifiers = this.element.find(
          ".stage-cropper-size-modifiers"
        )),
          (t.cropperSize = new UI.CropperSize({
            name: "myCropperSize",
            cropSizesData: t.cropSizesData,
          })),
          t.cropperSize.render(this.$stageCropperSizeModifiers),
          t.cropperSize.bind("cropperSizeChange", function (e) {
            t.dispatch("cropperSizeChange", e.data);
          }),
          t.cropperSize.bind("inputError", function (e) {
            t.dispatch("inputError", e.data);
          }),
          this._bindEvents();
      },
      initializeUrlValues: function () {
        this.cropperSize.initializeUrlValues();
      },
      _bindEvents: function () {
        return (
          (this.pinchHandler = this._pinchHandler.bind(this)),
          (this.pinchEndHandler = this._pinchEndHandler.bind(this)),
          this.element.on(
            "keydown",
            function (e) {
              13 === e.which &&
                (this._applyCrop(),
                Helpers.GlobalEventTracker.cropKeydownEnter({
                  stage_type:
                    Helpers.StageType._types[
                      window._stageData.stage_data.image_type
                    ],
                }));
            }.bind(this)
          ),
          this.element.on(
            "click",
            ".cropButton",
            function () {
              this._applyCrop();
            }.bind(this)
          ),
          this.element.on(
            "click",
            ".reset-cropper",
            function () {
              return this.cropperObject.imgReset(), !1;
            }.bind(this)
          ),
          this.element.on(
            "click",
            ".close",
            function () {
              this.dispatch("modal.cancel"), this.deactivate();
            }.bind(this)
          ),
          this.element.keydown(
            function (e) {
              27 === e.keyCode &&
                (this.dispatch("modal.cancel"), this.deactivate());
            }.bind(this)
          ),
          this.bind("pinch", this.pinchHandler),
          this.bind("pinchend", this.pinchEndHandler),
          this
        );
      },
      isInErrorState: function () {
        return this.cropperSize.errorState;
      },
      _arrowKeysHandler: function (e) {
        var t, n;
        return this.active !== !0
          ? !1
          : ((t = 0),
            (n = 0),
            37 === e.which
              ? (t = 1)
              : 38 === e.which
              ? (n = 1)
              : 39 === e.which
              ? (t = -1)
              : 40 === e.which && (n = -1),
            this.cropperObject.imgMove({ t: n, l: t }),
            this);
      },
      _newCropInstance: function (e) {
        return (
          this.$modalBody.empty(),
          this.$modalBody.html(this.constructor._cropperTemplate),
          (this.cropperObject = null),
          (this.cropperObject = new CROP()),
          this.cropperObject
            .setConstraints(e.cropperConstraints)
            .init(".cropper-object-image"),
          (this.$cropperContainer = this.element.find(".cropper-object-image")),
          (this.$cropMain = this.element.find(".cropMain")),
          (this.$cropContainer = this.element
            .find(".crop-container")
            .addClass("with-shadow-low-z-index")),
          (this.$lines = {
            top: this.$cropperContainer.find(".cropper-top-line"),
            right: this.$cropperContainer.find(".cropper-right-line"),
            bottom: this.$cropperContainer.find(".cropper-bottom-line"),
            left: this.$cropperContainer.find(".cropper-left-line"),
          }),
          (this.$cropImg = this.element.find(".crop-img")),
          (this.$cropOverlay = this.element.find(".crop-overlay")),
          (this.zoomRange = this.cropperObject.getZoomRange()),
          this.bindPinch(this.element[0]),
          (this.$cropImg.get(0).style.zIndex = "5"),
          (this.$cropOverlay.get(0).style.zIndex = "6"),
          (this.$lines.top.get(0).style.zIndex = "6"),
          (this.$lines.right.get(0).style.zIndex = "6"),
          (this.$lines.bottom.get(0).style.zIndex = "6"),
          (this.$lines.left.get(0).style.zIndex = "6"),
          this.cropperObject.eles.ele.bind(
            "imageLoaded",
            function (e) {
              this.element.removeAttr("style"), this.dispatch("imageLoaded", e);
            }.bind(this)
          ),
          this.cropperObject.eles.ele.bind(
            "cropperChange",
            function () {
              this.dispatch("cropperChange");
            }.bind(this)
          ),
          this.cropperObject.eles.img.bind(
            "error",
            function (e) {
              this.dispatch("imageLoadError", e);
            }.bind(this)
          ),
          this
        );
      },
      _getTooltipMessage: function () {
        var e, t, n;
        return (
          (e = this),
          (t = e.element.find(".cropMain").width()),
          (n = { cropWidth: t }),
          (n.firstInterval = 218),
          (n.secondInterval = 315),
          this._selectTooltipMessage(n)
        );
      },
      _selectTooltipMessage: function (e) {
        var t, n, i, r;
        return (
          (t = "Drag your image to crop your desired area!"),
          (n = e.cropWidth),
          (i = e.firstInterval),
          (r = e.secondInterval),
          r >= n && n >= i ? (t = "Drag your image") : i > n && (t = "Drag"),
          t
        );
      },
      _applyCropperTooltipStyle: function () {
        var e, t, n, i, r;
        (e = this),
          (t = e._getTooltipMessage()),
          (n = $(".cropper-bottom-line")),
          n.popover({
            content: t,
            html: !1,
            placement: "bottom",
            trigger: "manual",
          }),
          (i = function () {
            n.popover("show"),
              $(".cropMain .popover .arrow").hide(),
              $(".cropper-line").css("pointer-events", "none"),
              $(".popover").css("pointer-events", "none"),
              $(".popover-content").css("padding", "2px 14px"),
              $(".popover").css("margin-top", "5px"),
              $(".popover").css(
                "background-color",
                "rgba(255, 255, 255, 0.96)"
              ),
              $(".popover").css(
                "box-shadow",
                "0px 1px 13px rgba(0, 0, 0, 0.45)"
              ),
              $(".popover").css("border-radius", "20px"),
              $(".popover-content").css("color", "#4A4A4A");
          }),
          (r = function () {
            n.popover("hide");
          }),
          $(".cropSlider a div").click(i),
          $(".crop-overlay").mouseenter(r);
      },
      _resetCropperSizeControls: function (e) {
        this.cropperSize.setDropdownToOption("Custom"),
          this.cropperSize.updateInputValues(e),
          this.cropperSize.setInputStateToActive(),
          this.cropperSize.updateErrorStateFlag(),
          this.cropperSize.updateDropdownOptionValue("Custom", e);
      },
      _getViewportDimensions: function () {
        return this._viewportDimensions;
      },
      _loadImage: function (e) {
        return (
          (e = e.substring(e.search("/uploads"), e.length)),
          this.cropperObject.loadImg(e),
          this
        );
      },
      _resizeContainers: function () {
        var e, t;
        return (
          (e = this._getViewportDimensions()),
          (t = this._getCropperDimensions(e.width, e.height)),
          this._resizeCropperArea({
            width: t.width + this.CROP_SPACE,
            height: t.height + this.CROP_SPACE,
          }),
          this._updateCropperLinesPosition({
            width: t.width,
            height: t.height,
          }),
          this._setModalWidth(t.width),
          this
        );
      },
      _setModalWidth: function (e) {
        var t, n, i;
        (i = this.CROP_SPACE),
          (t = 42 + i),
          (n = e + t >= this.MIN_WIDTH_MODAL ? e + t : this.MIN_WIDTH_MODAL),
          this.element.find(".stage-cropper-dialog").width(n);
      },
      _getCropperDimensions: function (e, t) {
        var n, i, r, o, s, a, l, c, u;
        return (
          (s = this.CROP_SPACE),
          (n = this.$window.width()),
          (i = this.$window.height()),
          (r = 0.7 * (n - s)),
          (o = 0.55 * (i - s)),
          (a = function () {
            (c = r), (u = (t / e) * c);
          }),
          (l = function () {
            (u = o), (c = (e / t) * u);
          }),
          e >= r ? (a(), u > o && l()) : (l(), c > r && a()),
          { width: c, height: u }
        );
      },
      _setCustomBorderShadow: function () {
        var e = $("<div></div>"),
          t = this.$lines.top,
          n = this.$lines.left;
        e.css({
          "box-sizing": "border-box",
          border: "solid rgba(0, 0, 0, 0.3)",
          "pointer-events": "none",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          "border-top-width": t.css("top"),
          "border-left-width": n.css("left"),
          "border-bottom-width":
            this.$cropContainer.height() -
            (parseInt(t.css("top")) + n.height() + t.height()) +
            "px",
          "border-right-width":
            this.$cropContainer.width() -
            (parseInt(n.css("left")) + t.width() + n.width()) +
            "px",
          position: "absolute",
          "z-index": 6,
        }),
          this.$cropContainer.append(e);
      },
      _resizeCropperArea: function (e) {
        return (
          this.$cropMain.css({ width: e.width, height: e.height }),
          this.$cropContainer.css({ width: e.width, height: e.height }),
          this
        );
      },
      _updateCropperLinesPosition: function (e, t) {
        return (
          t || (t = { top: 40, left: 40 }),
          this.$lines.top.css({
            width: e.width,
            top: t.top + "px",
            left: t.left + "px",
          }),
          this.$lines.bottom.css({
            width: e.width,
            top: t.top + e.height + "px",
            left: t.left + "px",
          }),
          this.$lines.left.css({
            height: e.height,
            top: t.top + "px",
            left: t.left + "px",
          }),
          this.$lines.right.css({
            height: e.height,
            top: t.top + "px",
            left: t.left + e.width + "px",
          }),
          this
        );
      },
      _applyCrop: function () {
        var e, t;
        return (
          (e = this),
          this.cropperDebounce && clearTimeout(this.cropperDebounce),
          (this.cropperDebounce = setTimeout(function () {
            return (
              e.deactivate(),
              (t = e._getImageScale())
                ? (e.dispatch("cropImage", e._getParamsFromCropper()), !1)
                : !1
            );
          }, 200)),
          this
        );
      },
      _getImageScale: function () {
        var e = this.element.find(".crop-img"),
          t = parseFloat(e.get(0).style.width, 10);
        return 0 === e.length ? !1 : t / e.get(0).naturalWidth;
      },
      _getImageDimensions: function () {
        var e = this.element.find(".crop-img");
        return 0 === e.length ? !1 : { width: e.width(), height: e.height() };
      },
      _getCropAreaDimensions: function () {
        return {
          width: this.$cropMain.width() - 80,
          height: this.$cropMain.height() - 80,
        };
      },
      _getParamsFromCropper: function () {
        var e, t, n, i, r, o, s, a;
        return (
          (e = this.element.find(".crop-img")),
          8 === _stageData.stage_data.image_type ||
          14 === _stageData.stage_data.image_type
            ? ((t = this._getImageDimensions()),
              (n = this._getCropAreaDimensions()),
              (i = parseInt(e.css("left"), 10) - 40),
              (r = parseInt(e.css("top"), 10) - 40),
              {
                id: this.productShot.id,
                x: i,
                y: r,
                width: n.width,
                height: n.height,
                scale: this._getImageScale(),
                new_width: t.width,
                new_height: t.height,
              })
            : ((a = this.cropperObject.imgInfo),
              (o = parseInt(e.css("top"), 10) - 40),
              (s = parseInt(e.css("left"), 10) - 40),
              {
                id: this.productShot ? this.productShot.id : null,
                actual_height: a.ah,
                actual_left: a.al,
                actual_top: a.at,
                actual_width: a.aw,
                new_width: a.w,
                new_height: a.h,
                top: o,
                left: s,
                zoom: a.s,
                longer_side: this.cropperObject.imgInfo.longerSide,
                image_element_top: a.t,
                image_element_left: a.l,
              })
        );
      },
      setViewportDimensions: function (e) {
        return (this._viewportDimensions = e), this;
      },
      loadProductShotData: function (e, t) {
        return (
          (this.productShot = e),
          this._newCropInstance(t),
          this._resizeContainers(),
          this.element.show(),
          this._loadImage(this.productShot.user_image_path),
          this
        );
      },
      loadImage: function (e, t) {
        return (
          this._newCropInstance(e),
          this._resizeContainers(),
          this._applyCropperTooltipStyle(),
          this.element.show(),
          this.cropperObject.loadImg(t, e.existingImageInfo),
          this
        );
      },
      _pinchHandler: function (e) {
        var t = e.data.deltaDistance,
          n = t * this.cropperObject.getCurrentZoom();
        n < this.zoomRange[0] && (n = this.zoomRange[0]),
          n > this.zoomRange[1] && (n = this.zoomRange[1]),
          this.cropperObject.toggleMovementLock(!0),
          this.cropperObject.setZoom(n);
      },
      _pinchEndHandler: function () {
        this.cropperObject.toggleMovementLock(!1);
      },
      activate: function () {
        return (
          Widget.prototype.activate.call(this),
          (this.active = !0),
          $(".modal-backdrop").remove(),
          this
        );
      },
      deactivate: function () {
        return (
          Widget.prototype.deactivate.call(this),
          (this.active = !1),
          this.element.modal("hide"),
          this.element.off("keydown", this._arrowKeysHandler),
          this
        );
      },
      destroy: function () {
        this.cropperSize.destroy(), Widget.prototype.destroy.call(this);
      },
    },
  }),
  Class(UI.SmartTemplate, "FileInputDropAreaControl")
    .inherits(UI.SmartTemplate.FileInputControl)
    .includes(
      BubblingSupport,
      GenericDestroySupport
    )({
    html: '        <div class="form-group">            <input class="form-control st-file-upload" accept=".jpg, .png, .jpeg" type="file" "id="inputcustomG_0-file-input"/>            <label class="button secondary composite show-pixels-dimensions cropper-page-drop-area" for="inputcustomG_0-file-input">                <div class="cropper-page-drop-area-ui-wrapper">                    <span class="cropper-page-image-placeholder"></span>                    <span class="cropper-page-drop-area-title noselect default-cursor"></span>                    <span class="cropper-page-drop-area-subtitle noselect default-cursor">                         <span>Max dimensions: 7500 x 7500 px</span>                         <span>Max file: 12 MB</span>                     </span>                    <span class="cropper-page-drop-area-button noselect">Upload Your Image Here</span>                </div>            </label>            <label class="file-reposition-label button secondary composite middle">                <span class="p-icon p-sm crop-blue"></span>            </label>            <label class="file-delete-label button secondary composite right">              <span class="p-icon p-sm remove-blue"></span>            </label>        </div>',
    elementClass: "input-file-control",
    prototype: {
      record: null,
      userImageFileName: null,
      userImagePath: null,
      init: function (e) {
        var t = this;
        Widget.prototype.init.call(this, e),
          (t.$label = this.element.find("label.title")),
          (t.$file = this.element.find("input")),
          (t.$fileLabel = this.element.find("label.file-upload-label")),
          (t.$fileDeleteLabel = this.element.find("label.file-delete-label")),
          (t.$fileRepositionLabel = this.element.find(
            "label.file-reposition-label"
          )),
          (t.$cropperPageDropArea = this.element.find(
            ".cropper-page-drop-area"
          )),
          (t.$cropperPageDropAreaButton = this.element.find(
            ".cropper-page-drop-area-button"
          ));
        var n = this.record.name;
        (n = n.substr(n.lastIndexOf(".") + 1)),
          (n = n
            .split("_")
            .map(function (e) {
              var t, n;
              return (t = e[0].toUpperCase()), (n = e.substr(1)), t + n;
            })
            .join(" ")),
          t.$label.html(n),
          t.$file.attr("id", "input" + t.name),
          t.$fileLabel.attr("for", "input" + t.name),
          t.$fileDeleteLabel.hide(),
          t.$fileRepositionLabel.hide(),
          (t.controlTitle = e.controlTitle || "Upload Image"),
          t.$fileLabel
            .find("span.file-upload-label__control-title")
            .html(t.controlTitle),
          t.isMobilePhone && t.$fileLabel.html(e.controlTitle || n),
          this.insertPixelsDimensions(),
          t.bindings(),
          t.uiBindings(),
          t._addDragEventsListeners();
      },
      uiBindings: function () {
        var e = this,
          t = !1,
          n = function () {
            e.$cropperPageDropAreaButton.removeClass(
              "cropper-page-drop-area-button-dragover"
            ),
              e.$cropperPageDropAreaButton.html("Upload Your Image Here"),
              e.$cropperPageDropArea.removeClass(
                "cropper-page-drop-area-dragover"
              );
          },
          i = function () {
            return e.element.find(".cropper-page-drop-area-button__empty")
              .length > 0
              ? void e.swapDropAreaHandlers()
              : (e.$cropperPageDropAreaButton.addClass(
                  "cropper-page-drop-area-button-dragover"
                ),
                e.$cropperPageDropAreaButton.html("Drop Your Image Here!"),
                void e.$cropperPageDropArea.addClass(
                  "cropper-page-drop-area-dragover"
                ));
          },
          r = function () {
            e.dragoverIsActive ||
              e.$cropperPageDropAreaButton.html("Upload New Image");
          },
          o = function () {
            (e.dragoverIsActive = !0),
              e.$cropperPageDropAreaButton.html("Drop Your Image Here!"),
              setTimeout(function () {
                e.dragoverIsActive = !1;
              }, 0);
          },
          s = function () {
            e.resetDropAreaStyles();
          };
        (this.dragoverIsActive = t),
          (this.resetDropAreaStyles = n),
          (this.addingDropAreaStyles = i),
          (this.dropAreaHandler = s),
          (this.resetDropButtonStyles = r),
          (this.addingDropButtonStyles = o),
          e.$cropperPageDropArea.bind("dragover", i),
          e.$cropperPageDropArea.bind("dragleave", n),
          e.$cropperPageDropArea.bind("drop", s);
      },
      swapDropAreaHandlers: function () {
        var e = this;
        e.$cropperPageDropArea.unbind("dragover", e.addingDropAreaStyles),
          e.$cropperPageDropArea.unbind("dragleave", e.resetDropAreaStyles),
          e.$cropperPageDropArea.unbind("drop", e.dropAreaHandler),
          e.$cropperPageDropArea.bind("dragover", e.addingDropButtonStyles),
          e.$cropperPageDropArea.bind("dragleave", e.resetDropButtonStyles),
          e.$cropperPageDropArea.bind("drop", e.resetDropButtonStyles);
      },
      fileChangeHandler: function () {
        var e,
          t = this,
          n = window.URL || window.webkitURL,
          i = new Image();
        return (
          (i.src = n.createObjectURL(t.file)),
          t.file.size > t.maxSize
            ? ((e =
                "Your image must be a JPG or PNG, no more than " +
                t.maxDimension +
                " x " +
                t.maxDimension +
                " px and no bigger than " +
                t.maxSize / 1e3 / 1e3 +
                " MB."),
              void t.dispatch("exceededSize", e))
            : t.acceptedFiles[t.file.type]
            ? void (i.onload = function () {
                if (
                  !(
                    this.width <= t.maxDimension &&
                    this.height <= t.maxDimension
                  )
                ) {
                  var e =
                    "Your image must be a JPG or PNG, no more than " +
                    t.maxDimension +
                    " x " +
                    t.maxDimension +
                    " px and no bigger than " +
                    t.maxSize / 1e3 / 1e3 +
                    " MB.";
                  return void t.dispatch("exceededSize", e);
                }
                t.dispatch("loading"),
                  t.file &&
                    (t.dispatch("file.loaded"), t.swapDropAreaHandlers());
              })
            : ((this.value = null),
              (e =
                "Your image must be a JPG or PNG, no more than " +
                t.maxDimension +
                " x " +
                t.maxDimension +
                " px and no bigger than " +
                t.maxSize / 1e3 / 1e3 +
                " MB."),
              void t.dispatch("exceededSize", e))
        );
      },
      _addDragEventsListeners: function () {
        var e, t, n;
        (e = this), (t = !1), (n = e.$cropperPageDropArea.get(0));
        var i = function (n) {
          n.preventDefault(), t || ((t = !0), e.setLabelDragged());
        };
        n.addEventListener("dragover", i, !0);
        var r = function (n) {
          var i;
          (n = n || window.event),
            (i = function () {
              (t = !1), e.resetLabel();
            });
          try {
            (0 === n.pageX || 0 === n.pageY) && i();
          } catch (r) {
            i();
          }
        };
        n.addEventListener("dragleave", r, !0);
        var o = function (n) {
          (t = !1), e.resetLabel();
          var i, r;
          (i = n.target), (r = e.$file), n.preventDefault();
          var o = i.files || (n.dataTransfer && n.dataTransfer.files);
          o && (r.val(null), e.resetLabel(), e.setFile(o[0]));
        };
        n.addEventListener("drop", o, !0);
        var s = function (e) {
          var t = e.dataTransfer;
          t.items
            ? Array.prototype.forEach.call(t.items, function (e, n) {
                t.items.remove(n);
              })
            : t.clearData();
        };
        n.addEventListener("dragend", s);
      },
      disableUpload: function () {
        var e = this;
        $(".cropper-page-drop-area").length
          ? ($(".cropper-page-drop-area").addClass("disabled"),
            e.$fileDeleteLabel.addClass("disabled"),
            e.$fileRepositionLabel.addClass("disabled"),
            $(".cropper-page-drop-area").removeAttr("for"))
          : ($(".custom-graphic-drop-area__empty").addClass("disabled"),
            e.$fileDeleteLabel.addClass("disabled"),
            e.$fileRepositionLabel.addClass("disabled"),
            $(".custom-graphic-drop-area__empty").removeAttr("for"));
      },
      enableUpload: function () {
        var e = this;
        $(".cropper-page-drop-area").length
          ? ($(".cropper-page-drop-area").removeClass("disabled"),
            e.$fileDeleteLabel.removeClass("disabled"),
            e.$fileRepositionLabel.removeClass("disabled"),
            $(".cropper-page-drop-area").attr("for", "input" + e.name))
          : ($(".custom-graphic-drop-area__empty").removeClass("disabled"),
            e.$fileDeleteLabel.removeClass("disabled"),
            e.$fileRepositionLabel.removeClass("disabled"),
            $(".custom-graphic-drop-area__empty").attr(
              "for",
              "input" + e.name
            ));
      },
      setLabelDragged: function () {
        var e = this;
        return (
          e.$fileLabel.find(".cropper-page-drop-area-button").length
            ? (e.$fileLabel
                .find(".cropper-page-drop-area-button")
                .html("Drop File Here!"),
              e.$fileLabel
                .find(".cropper-page-drop-area-button")
                .addClass("cropper-page-button-drop-hover"),
              e.$fileLabel.addClass("cropper-page-drop-hover"))
            : e.$fileLabel
                .find("span.file-upload-label__control-title")
                .fadeOut(500, function () {
                  $(this).html("Drop File Here!").fadeIn(500);
                }),
          e
        );
      },
      resetLabel: function () {
        var e = this;
        return (
          e.$fileLabel.find(".cropper-page-drop-area-button").length
            ? (e.$fileLabel
                .find(".cropper-page-drop-area-button")
                .html("Upload Your Image Here"),
              e.$fileLabel
                .find(".cropper-page-drop-area-button")
                .removeClass("cropper-page-button-drop-hover"),
              e.$fileLabel.removeClass("cropper-page-drop-hover"))
            : e.$fileLabel
                .find("span.file-upload-label__control-title")
                .fadeOut(500, function () {
                  $(this).html(e.controlTitle).fadeIn(500);
                }),
          e
        );
      },
    },
  }),
  Class(UI.SmartTemplate, "ReplaceableCustomGraphicControl")
    .inherits(UI.SmartTemplate.CustomGraphicControl)
    .includes(
      BubblingSupport,
      GenericDestroySupport,
      LayerDataSupport,
      StageControlsDestroySupport
    )({
    elementClass: "custom-graphic-control",
    prototype: {
      record: null,
      fileInputControl: null,
      uploadedUrlData: null,
      id: null,
      userImageFilePath: null,
      pendingImageUrl: null,
      _popstateHandler: null,
      init: function (e) {
        Widget.prototype.init.apply(this, e),
          (this.prefix = e.prefix || ""),
          (this.name = this.prefix + e.name),
          (this.customGraphicUrlParameterName = this.name),
          (this.record = e.record),
          (this.fileInputControl =
            new UI.SmartTemplate.FileInputDropAreaControl({
              name: e.name + "-file-input",
              acceptedFiles: e.acceptedFiles,
              isMobilePhone: e.isMobilePhone,
              maxSize: e.maxSize,
              maxDimension: e.maxDimension,
              record: e.record,
              controlTitle: e.controlTitle,
            })),
          this.appendChild(this.fileInputControl),
          this.fileInputControl.render(this.element),
          e.record.viewport &&
            ((this.urlInputControl = new UI.SmartTemplate.URLInputControl({
              name: e.name + "Scr",
              record: e.record,
              userAgent: e.userAgent || navigator.userAgent,
            })),
            this.appendChild(this.urlInputControl),
            this.urlInputControl.element.insertBefore(
              this.fileInputControl.element.find(".file-reposition-label")
            ),
            this.urlInputControl.urlButton.addClass("composite right"),
            this.fileInputControl.$fileLabel.addClass("composite left"),
            this.urlInputControl.bind(
              "removeFile",
              function () {
                this.fileInputControl.showFileButton();
              }.bind(this)
            )),
          this.fileInputControl.bind(
            "removeFile",
            function () {
              this.urlInputControl &&
                (this.fileInputControl.$fileLabel.addClass("composite left"),
                this.urlInputControl.show()),
                Helpers.App.replaceUrlParamWithHistory(
                  this.customGraphicUrlParameterName,
                  ""
                );
            }.bind(this)
          ),
          (this._popstateHandler = this.checkUrlParams.bind(this)),
          window.addEventListener("popstate", this._popstateHandler);
      },
      checkUrlParams: function () {
        var e, t, n, i;
        if (
          ((e = this),
          (t = Helpers.App.getAllURLParams()),
          (i = this.record.layers
            .filter(function (e) {
              return e.visible;
            })
            .map(function (e) {
              return e.image.split("/")[3];
            })[0]),
          (n = t[e.customGraphicUrlParameterName] || i),
          n &&
            "undefined" != typeof window._stageData &&
            !Helpers.StageType.isCropperTool())
        )
          this._getLayerJSONData(n);
        else if (
          n &&
          "undefined" != typeof window._stageData &&
          Helpers.StageType.isCropperTool()
        ) {
          var r = [Helpers.App.getUserUploadsUrl(), n, "data.json"].join("/");
          (this.uploadedUrlData = r), this.dispatch("imageUrlDataLoaded");
        } else
          e.id
            ? (e.removeFile(),
              e.fileInputControl.show(),
              e.urlInputControl &&
                (e.urlInputControl.show(),
                e.urlInputControl.hideDiscardButton()))
            : e.urlInputControl &&
              (e.urlInputControl.show(),
              e.urlInputControl.hasUrl ||
                e.urlInputControl.hideDiscardButton());
      },
    },
  }),
  Class(UI.SmartTemplate, "CustomGraphicDropControl").inherits(
    UI.SmartTemplate.CustomGraphicControl
  )({
    elementClass: "custom-graphic-control custom-graphic-drop-control",
    prototype: {
      init: function (e) {
        Widget.prototype.init.call(this, e),
          (this.prefix = e.prefix || ""),
          (this.name = this.prefix + e.name),
          (this.urlParameterName = this.name),
          (this.record = e.record),
          (this.isMobilePhone = Helpers.App.isMobileDevice()),
          (this.fileInputControl = this.appendChild(
            new UI.SmartTemplate.FileInputDropControl({
              name: e.name + "-file-input",
              controlTitle: e.controlTitle,
              acceptedFiles: e.acceptedFiles,
              acceptedFormats: e.acceptedFormats,
              isMobilePhone: e.isMobilePhone,
              maxSize: e.maxSize,
              maxDimension: e.maxDimension,
              maxDuration: e.maxDuration,
              record: e.record,
            })
          ).render(this.element)),
          (this._popstateHandler = this.checkUrlParams.bind(this)),
          window.addEventListener("popstate", this._popstateHandler);
      },
      _layerJSONDataCallback: function (e, t) {
        var n = this;
        n._layerJSONDataCallbackExecuted ||
          ((n._layerJSONDataCallbackExecuted = !0),
          n.dispatch("customAssetFound", t));
      },
      _jsonDataNotFound: function (e) {
        var t = this;
        t.dispatch("customAssetNotFound", { id: e });
      },
    },
  }),
  Class(UI.SmartTemplate, "FileInputDropControl").inherits(
    UI.SmartTemplate.FileInputControl
  )({
    html: '        <div>            <div class="input-file-drop-control__inner center">                <div class="input-file-drop-control__title-wrapper">                    <div class="input-file-drop-control__icon"></div>                    <p class="input-file-drop-control__title">                        <span data-title-text class="hide-mobile">Drop Your Video</span>                        <span data-supported-files-desc>(MP4 or MOV)</span>                    </p>                </div>                <p class="input-file-drop-control__subtitle">                    <span>Maximum allowed: </span>                    <span class="input-file-drop-control__inline-list">                        <span data-max-dimensions></span>                        <span data-max-file-size></span>                    </span>                </p>                <div>                    <input class="form-control st-file-upload" accept=".jpg, .png, .jpeg" type="file" />                    <label class="file-upload-label button primary">                        <div class="lds-ring-cropper hide">                            <div></div>                            <div></div>                        </div>                        <span class="file-upload-label__control-title">Upload Here</span>                    </label>                </div>            </div>        </div>    ',
    prototype: {
      $maximumAllowedValues: null,
      init: function (e) {
        UI.SmartTemplate.FileInputControl.prototype.init.call(this, e),
          (this.$maximumAllowedValues = this.element.find(
            ".input-file-drop-control__subtitle .input-file-drop-control__inline-list"
          )),
          this.element
            .find("input.st-file-upload")
            .attr("accept", this.acceptedFormats),
          this.element
            .find("[data-supported-files-desc]")
            .text("(" + this._getAcceptedFormatsArray().join(" or ") + ")"),
          this.element
            .find("[data-max-dimensions]")
            .text(this.maxDimension + "x" + this.maxDimension + "px"),
          this.element
            .find("[data-max-file-size]")
            .text(1e-6 * this.maxSize + "mb"),
          this.maxDuration &&
            this.$maximumAllowedValues.append(
              "<span>" + this.maxDuration + "sec</span>"
            );
      },
      fileChangeHandler: function () {
        var e = this;
        if (e.file.size > e.maxSize)
          return e.dispatch("validationError", {
            message:
              "Your video must be smaller than " + 1e-6 * e.maxSize + "mb.",
          });
        if (!e.acceptedFiles[e.file.type])
          return e.dispatch("validationError", {
            message:
              "Your video must be a " +
              e._getAcceptedFormatsArray().join(" or ") +
              " format.",
          });
        if (e.maxSize) {
          var t = window.URL || window.webkitURL,
            n = document.createElement("video");
          (n.preload = "metadata"),
            (n.onloadedmetadata = function () {
              return (
                t.revokeObjectURL(n.src),
                n.videoWidth > e.maxDimension || n.videoHeight > e.maxDimension
                  ? ((t = n = null),
                    e.dispatch("validationError", {
                      message:
                        "Your dimensions must be lower than " +
                        e.maxDimension +
                        "X" +
                        e.maxDimension +
                        " px",
                    }))
                  : (e.dispatch("loading"), void e.dispatch("file.loaded"))
              );
            }),
            (n.onerror = function () {
              t.revokeObjectURL(n.src),
                (t = n = null),
                e.dispatch("validationError", {
                  message:
                    "Your video format is not supported, use an alternative video or try with a different browser",
                });
            }),
            (n.src = t.createObjectURL(e.file));
        } else e.dispatch("loading"), e.dispatch("file.loaded");
      },
      addDropFunctionality: function () {
        var e = this,
          t = function (t) {
            t.preventDefault(), e.element.addClass("-dragover");
          };
        e.element[0].addEventListener("dragover", t, !0);
        var n = function (t) {
          t.preventDefault(), e.element.removeClass("-dragover");
        };
        e.element[0].addEventListener("dragleave", n, !0);
        var i = function (t) {
          var n, i;
          t.preventDefault(),
            e.element.removeClass("-dragover"),
            (n = t.target),
            (i = e.$file);
          var r = n.files || (t.dataTransfer && t.dataTransfer.files);
          r && (i.val(null), e.setFile(r[0]));
        };
        return e.element[0].addEventListener("drop", i, !0), e;
      },
      updateButtonLabel: function (e) {
        return (
          "undefined" != typeof e &&
            this.$fileLabel
              .find("span.file-upload-label__control-title")
              .text(e),
          this
        );
      },
      showLoadingState: function (e) {
        return (
          this.updateButtonLabel(e),
          this.element.find(".lds-ring-cropper").removeClass("hide"),
          this.showLoader(),
          this.disableUpload(),
          this
        );
      },
      showDefaultState: function () {
        return (
          this.element.find(".lds-ring-cropper").addClass("hide"),
          this.hideLoader(),
          this.resetLabel(),
          this.enableUpload(),
          this
        );
      },
      _getAcceptedFormatsArray: function () {
        return this.acceptedFormats.split(",").map(function (e) {
          return e.replace(/^\./, "").toUpperCase();
        });
      },
    },
  }),
  Module("CropperModalVideoSupport")({
    VIDEO_TIMER_TEMPLATE: '<div class="video-timer"></div>',
    VIDEO_PROGRESSBAR_TEMPLATE:
      '        <div class="video-progressbar">            <div class="progress"></div>            <span class="tooltip-currenttime">0:00</span>            <span class="tooltip-hover">0:00</span>            <input type="range" min="0" max="1" value="0" step="0.1" class="slider">        </div>',
    prototype: {
      buildVideoProgressbar: function () {
        var e = this.cropperObject.getImg();
        void 0 !== e &&
          (this.$cropContainer.append(
            this.constructor.VIDEO_PROGRESSBAR_TEMPLATE
          ),
          this.$cropContainer.append(this.constructor.VIDEO_TIMER_TEMPLATE),
          (this.videoProgressbar = this.element
            .find(".video-progressbar")
            .get(0)),
          (this.videoSlider = this.element
            .find(".video-progressbar .slider")
            .get(0)),
          (this.videoProgress = this.element
            .find(".video-progressbar .progress")
            .get(0)),
          (this.videoTooltipCurrenttime = this.element
            .find(".video-progressbar .tooltip-currenttime")
            .get(0)),
          (this.videoTooltipHover = this.element
            .find(".video-progressbar .tooltip-hover")
            .get(0)),
          (this.videoTimer = this.element.find(".video-timer").get(0)),
          (this.videoDuration = null),
          this._videoBindings());
      },
      _videoBindings: function () {
        var e, t;
        (e = this),
          (t = this.cropperObject.getImg()),
          (e.videoSlider.oninput = function () {
            e._setVideoCurrentTime(this.value);
          }),
          (t.ontimeupdate = function () {
            e._refreshVideoTimer(),
              e._refreshVideoProgressbar(),
              e._refreshVideoTooltipsTime(),
              e._refreshVideoTooltip(
                e.videoTooltipCurrenttime,
                e.videoProgress.offsetWidth
              );
          }),
          (t.onloadedmetadata = function () {
            (e.videoDuration = t.duration),
              (e.videoSlider.max = e.videoDuration),
              e._refreshVideoTimer();
          }),
          e.videoSlider.addEventListener("mousemove", function (t) {
            e._refreshVideoTooltip(e.videoTooltipHover, t.offsetX);
          });
      },
      _setVideoCurrentTime: function (e) {
        var t = this.cropperObject.getImg();
        t.currentTime = e;
      },
      _refreshVideoProgressbar: function () {
        var e, t, n, i;
        (e = this.cropperObject.getImg()),
          (t = e.currentTime),
          (n = e.duration),
          (i = (t / n) * 100),
          (i = Math.floor(i)),
          (this.videoProgress.style.width = i + "%"),
          (this.videoSlider.value = Math.floor(e.currentTime));
      },
      _refreshVideoTooltipsTime: function () {
        var e, t;
        (e = this.cropperObject.getImg()),
          (t = Helpers.App.formatTime(e.currentTime, ":")),
          (this.videoTooltipCurrenttime.textContent = t),
          (this.videoTooltipHover.textContent = t);
      },
      _refreshVideoTimer: function () {
        var e, t, n;
        (e = this.cropperObject.getImg()),
          (t = Helpers.App.formatTime(e.currentTime, ":")),
          (n = ""),
          this.videoDuration &&
            (n = " - " + Helpers.App.formatTime(e.duration, ":")),
          (this.videoTimer.textContent = t + n);
      },
      _refreshVideoTooltip: function (e, t) {
        var n, i, r, o, s, a;
        (n = this.cropperObject.getImg()),
          (a = this.videoSlider.offsetWidth),
          (i = 0),
          (r = 0),
          t > 1 && ((i = t), (r = i / (a / n.duration))),
          (e.textContent = Helpers.App.formatTime(r, ":")),
          (s = 0),
          (o = e.offsetWidth / 2),
          i + o > a ? (s = a - e.offsetWidth) : i > o && (s = i - o),
          (e.style.left = s + "px");
      },
    },
  }),
  Class(UI, "EmbeddableCropperModal")
    .inherits(UI.CropperModal)
    .includes(CropperModalVideoSupport)({
    ONBOARDING_TEMPLATE:
      '        <div class="onboarding-container">            <div class="onboarding">                <p>                    Drag your video as you require!                    <button class="onboarding__close">Got it!</button>                </p>            </div>        </div>',
    ONBOARDING_POPOVER_DISMISS_TIME: 5e3,
    ONBOARDING_TEXTS: [
      {
        text: "Drag your video to crop your desired area!",
        minRequiredWidth: 293,
      },
      { text: "Drag your video to crop", minRequiredWidth: 177 },
    ],
    ONBOARDING_POPOVER_RENDERING_TARGET_SELECTOR: "body",
    CROP_AREA_TOTAL_HORIZONTAL_PADDING: 80,
    prototype: {
      _closeOnboardingPopoverTimeout: null,
      _hasDragged: !1,
      _showVideoOnboarding: !1,
      init: function (e) {
        UI.CropperModal.prototype.init.call(this, e);
      },
      _getCropperDimensions: function (e, t) {
        return Helpers.App.isMobileDevice()
          ? this._getCropperDimensionsMobile(e, t)
          : this._getCropperDimensionsDesktop(e, t);
      },
      _getCropperDimensionsDesktop: function (e, t) {
        var n, i, r, o, s, a, l, c, u;
        return (
          (s = this.CROP_SPACE),
          (n = this.$window.width()),
          (i = this.$window.height()),
          (r = 0.7 * (n - s)),
          (o = 0.55 * (i - s)),
          (a = function () {
            (c = r), (u = (t / e) * c);
          }),
          (l = function () {
            (u = o), (c = (e / t) * u);
          }),
          e >= r ? (a(), u > o && l()) : (l(), c > r && a()),
          { width: c, height: u }
        );
      },
      _getCropperDimensionsMobile: function (e, t) {
        var n, i, r, o, s, a, l;
        return (
          (r = 50 + this.CROP_SPACE),
          (n = this.$window.width() - r),
          (i = this.$window.height()),
          this._viewportDimensions.width < n &&
            ((n = this._viewportDimensions.width),
            (i = this._viewportDimensions.height)),
          (o = function () {
            (l = n), (a = (t / e) * l);
          }),
          (s = function () {
            (a = i), (l = (e / t) * a);
          }),
          e >= n ? (o(), a > i && s()) : (s(), l > n && o()),
          { width: l, height: a }
        );
      },
      _setupVideoOnboardingForMobile: function () {
        var e = this;
        (e.videoOnboarding = new UI.OnboardingOverlay({
          element: $(e.constructor.ONBOARDING_TEMPLATE),
          target: e.$cropContainer,
          callback: function () {
            e.dispatch("onboardingcomplete"), e.videoOnboarding.destroy();
          },
        })),
          e.videoOnboarding.render(e.$cropContainer);
      },
      _selectOnboardingTextThatFits: function () {
        for (
          var e =
              this.$cropMain.outerWidth() -
              this.constructor.CROP_AREA_TOTAL_HORIZONTAL_PADDING,
            t = this.constructor.ONBOARDING_TEXTS.sort(function (e, t) {
              return t.minRequiredWidth - e.minRequiredWidth;
            }),
            n = 0;
          n < t.length;
          n++
        )
          if (e > t[n].minRequiredWidth) return t[n].text;
        return null;
      },
      _setupVideoOnboardingForDesktop: function () {
        function e() {
          clearTimeout(n._closeOnboardingPopoverTimeout),
            n._hasDragged ||
              ((n._closeOnboardingPopoverTimeout = setTimeout(function () {
                n.videoOnboarding.hide();
              }, n.constructor.ONBOARDING_POPOVER_DISMISS_TIME)),
              n.videoOnboarding.isVisible() === !1 &&
                n.videoOnboarding.render(
                  $(n.constructor.ONBOARDING_POPOVER_RENDERING_TARGET_SELECTOR)
                ));
        }
        function t() {
          n.cropperObject
            .getCropperChangeDispatcher()
            .unbind("cropperChange", t),
            (n._hasDragged = !0),
            clearTimeout(n._closeOnboardingPopoverTimeout),
            n.videoOnboarding.destroy();
        }
        var n = this,
          i = n._selectOnboardingTextThatFits();
        n._hasDragged ||
          null === i ||
          (n.videoOnboarding && n.videoOnboarding.destroy(),
          (n.videoOnboarding = new UI.OnboardingPopover({
            target: n.$cropContainer,
            template:
              '<div class="popover crop-and-trim-popover-onboarding" role="tooltip"><div class="popover-content"></div></div>',
            text: i,
            placement: "bottom",
            cssClass: "crop-and-trim-onboarding-target",
          })),
          n.cropperObject.getZoomChangeDispatcher().bind("change", e),
          n.cropperObject
            .getCropperChangeDispatcher()
            .bind("cropperChange", t));
      },
      _setupVideoOnboardings: function () {
        var e = this;
        Helpers.App.isMobile()
          ? e._setupVideoOnboardingForMobile()
          : e._setupVideoOnboardingForDesktop();
      },
      _handleImageLoaded: function () {
        this._bindToCropperObjectChanges(),
          this.cropperObject.fragmentPlayer.setMute(!1),
          this._showVideoOnboarding && this._setupVideoOnboardings();
      },
      _newCropInstance: function (e) {
        UI.CropperModal.prototype._newCropInstance.call(this, e),
          (this._showVideoOnboarding = e.showVideoOnboarding),
          this.cropperObject.eles.ele.bind(
            "imageLoaded",
            this._handleImageLoaded.bind(this)
          ),
          this.cropperObject.isVideo &&
            this.progressbar === !0 &&
            this.buildVideoProgressbar();
      },
      _bindToCropperObjectChanges: function () {
        var e = this,
          t = e.cropperObject.getDurationChangeDispatcher();
        void 0 !== t &&
          (e.cropperObject
            .getDurationChangeDispatcher()
            .bind("dragend", function () {
              e.dispatch("userinteraction", {
                interaction: "trim selection moved",
              });
            }),
          e.cropperObject
            .getDurationChangeDispatcher()
            .bind("resizeend", function () {
              e.dispatch("userinteraction", {
                interaction: "trim duration changed",
              });
            })),
          e.cropperObject.getZoomChangeDispatcher().bind("change", function () {
            e.dispatch("userinteraction", { interaction: "zoom changed" });
          }),
          e.cropperObject
            .getCropperChangeDispatcher()
            .bind("cropperChange", function () {
              e.dispatch("userinteraction", {
                interaction: "crop selection moved",
              });
            });
      },
    },
  }),
  Module("VideoCropTrimAssetIdSupport")({
    prototype: {
      handleAssetIdProcessing: function () {
        var e = this,
          t = window.tool_data && window.tool_data.original_video_url;
        if (t) {
          if (e.uploadPending === !0)
            return e._notifyWarnMessage(
              UI.StageBase.GENERIC_UPLOADING_WARN_MESSAGE
            );
          (e.uploadPending = !0),
            e.stageActionsManager.disableDownloadButton(),
            e.disableAllToolFileUploads();
          var n = function (t) {
              return CropperRemoteUploader.uploadVideoByPublicUrl(
                { videoUrl: t },
                { "x-origin": e.constructor.CROP_X_ORIGIN }
              ).then(function (e) {
                return e.data;
              });
            },
            i = function (n) {
              (e.uploadPending = !1),
                e._updateDownloadButtonState(),
                e.enableAllToolFileUploads();
              var i = function (e) {
                var t;
                try {
                  t = JSON.parse(e.responseText).error;
                } catch (n) {
                  t = "This is taking longer than usual, try again later";
                }
                return t;
              };
              e.dispatch("uploadByPublicUrl:error", {
                message: i(n),
                videoUrl: t,
              }),
                e.dispatch("stage.error", { message: i(n) });
            },
            r = function (t) {
              (e.uploadPending = !1), e._updateDownloadButtonState();
              var n = Helpers.App.removeParam("asset_id");
              return (
                window.history.replaceState(
                  {},
                  Helpers.StageType.getStageSlug(),
                  n
                ),
                e.customImageControl.setUrlParameter(t.id),
                e.enableAllToolFileUploads(),
                (e.constructor.PRESET_OPTIONS[0].width = t.video_width),
                (e.constructor.PRESET_OPTIONS[0].height = t.video_height),
                e.presets.updateOptionValue(
                  e.constructor.PRESET_OPTIONS[0].name,
                  t.video_width + "x" + t.video_height
                ),
                e._updateInputValues(t.video_width, t.video_height),
                (e._videoData.viewport = {
                  width: t.video_width,
                  height: t.video_height,
                }),
                (e._videoData.fragmentDuration = t.duration),
                (e._videoData.duration = t.duration),
                (e._videoData.width = t.video_width),
                (e._videoData.height = t.video_height),
                (e._videoData.timelineUrls = t.timeline_urls),
                (e._videoData.userVideoUrl = t.user_video_url),
                (e._videoData.id = t.id),
                e._updateCropper(),
                t
              );
            };
          n(t).then(r)["catch"](i);
        }
      },
    },
  }),
  Module("VideoCropTrimCustomGraphicSupport")({
    prototype: {
      customGraphicBindings: function () {
        var e = this;
        e.bind("validationError", function (t) {
          e.dispatch("stage.error", { message: t.data.message });
        }),
          e.bind("customAssetFound", function (t) {
            var n = t.data;
            (e.constructor.PRESET_OPTIONS[0].width = n.video_width),
              (e.constructor.PRESET_OPTIONS[0].height = n.video_height),
              e.presets.updateOptionValue(
                e.constructor.PRESET_OPTIONS[0].name,
                n.video_width + "x" + n.video_height
              ),
              e._updateInputValues(n.video_width, n.video_height),
              (e._videoData.viewport = {
                width: n.video_width,
                height: n.video_height,
              }),
              (e._videoData.fragmentDuration = n.duration),
              (e._videoData.duration = n.duration),
              (e._videoData.width = n.video_width),
              (e._videoData.height = n.video_height),
              (e._videoData.timelineUrls = n.timeline_urls),
              (e._videoData.userVideoUrl = n.user_video_url),
              (e._videoData.id = n.id),
              e._updateCropper(),
              e.inputWidth.updateValueFromUrl(),
              e.inputHeight.updateValueFromUrl(),
              (n = null);
          }),
          e.bind("customAssetNotFound", function () {
            e.dispatch("stage.error", {
              message: e.constructor.IMAGE_404_MESSAGE,
            });
          }),
          e.bind("file.loaded", function (t) {
            var n = t.data.target,
              i = n.getFile();
            if (e.uploadPending === !0)
              return e._notifyWarnMessage(
                UI.StageBase.GENERIC_UPLOADING_WARN_MESSAGE
              );
            (e.uploadPending = !0),
              e.stageActionsManager.disableDownloadButton(),
              e.disableAllToolFileUploads();
            var r = function (t) {
                return (
                  Helpers.GlobalEventTracker.smartTemplateEvent("uploadStart", {
                    fileName: t.name,
                  }),
                  CropperRemoteUploader.uploadVideo(t, {
                    "x-origin": e.constructor.CROP_X_ORIGIN,
                  }).then(function (t) {
                    return (
                      (e.hasChanges = !1),
                      (e.uploadPending = !1),
                      Helpers.GlobalEventTracker.smartTemplateEvent(
                        "uploadEnd",
                        { id: t.data.id }
                      ),
                      t.data
                    );
                  })
                );
              },
              o = function (t) {
                var n, i;
                (e.uploadPending = !1), e._updateDownloadButtonState();
                try {
                  (n = JSON.parse(t.responseText)),
                    (i =
                      n.error ||
                      "Couldn\u2019t process video, please try again");
                } catch (r) {
                  i = "Couldn\u2019t process video, please try again";
                }
                return (
                  e._trackUploadError(i),
                  e.dispatch("stage.error", { message: i }),
                  e.enableAllToolFileUploads(),
                  Promise.reject()
                );
              },
              s = function (t) {
                return (
                  (e.uploadPending = !1),
                  e._updateDownloadButtonState(),
                  n.setUrlParameter(t.id),
                  e.enableAllToolFileUploads(),
                  (e.constructor.PRESET_OPTIONS[0].width = t.video_width),
                  (e.constructor.PRESET_OPTIONS[0].height = t.video_height),
                  e.presets.setSelectedOption(
                    e.constructor.PRESET_OPTIONS[0].name
                  ),
                  e.presets.updateOptionValue(
                    e.constructor.PRESET_OPTIONS[0].name,
                    t.video_width + "x" + t.video_height
                  ),
                  e._updateInputValues(t.video_width, t.video_height),
                  (e._videoData.viewport = {
                    width: t.video_width,
                    height: t.video_height,
                  }),
                  (e._videoData.fragmentDuration = t.duration),
                  (e._videoData.duration = t.duration),
                  (e._videoData.width = t.video_width),
                  (e._videoData.height = t.video_height),
                  (e._videoData.timelineUrls = t.timeline_urls),
                  (e._videoData.userVideoUrl = t.user_video_url),
                  (e._videoData.id = t.id),
                  e._updateCropper(),
                  e.inputWidth.updateValueFromUrl(),
                  e.inputHeight.updateValueFromUrl(),
                  t
                );
              };
            r(i).then(s)["catch"](o);
          });
      },
    },
  }),
  Module("VideoCropTrimInputsSupport")({
    prototype: {
      inputsBindings: function () {
        var e,
          t,
          n,
          i,
          r = this,
          o = r.constructor.MAX_CROP_DIMENSION_ALLOWED;
        (e = function (e) {
          if (e.data > o) return t(e);
          if ((e.target.setStateToActive(), !r._areInputsInErrorState())) {
            var n = {
              width: r.inputWidth.getValue(),
              height: r.inputHeight.getValue(),
            };
            (r.hasChanges = !0),
              r.presets.setSelectedOption(r.constructor.PRESET_OPTIONS[0].name),
              r._updateDownloadButtonState(),
              (r._videoData.viewport = n),
              r._updateCropper(),
              (n = null);
          }
        }),
          (t = function (e) {
            var t = "";
            e.target.setStateToError(),
              r._updateDownloadButtonState(),
              e.target === r.inputWidth
                ? (t = "Your width ")
                : e.target === r.inputHeight && (t = "Your height "),
              (t += " must be lower than " + o + " px"),
              r.dispatch("stage.error", { message: t });
          }),
          (n = function (e) {
            e.target.setStateToActive();
          }),
          (i = function (e) {
            e.target.getValue() > o && e.target.setStateToError();
          }),
          r.presets.bind("dropdownChange", function (e) {
            var t = e.data.split("x"),
              n = { width: t[0], height: t[1] };
            (r.hasChanges =
              r.presets.getSelectedOption().text ===
              r.constructor.PRESET_OPTIONS[0].name
                ? !1
                : !0),
              r.inputWidth.setStateToActive(),
              r.inputHeight.setStateToActive(),
              r._updateInputValuesAndUrl(n.width, n.height),
              r._updateDownloadButtonState(),
              (r._videoData.viewport = n),
              r._updateCropper(),
              (t = n = null);
          }),
          [r.inputWidth, r.inputHeight].forEach(function (t) {
            t.bind("inputChange", e),
              t.bind("inputClick", n),
              t.bind("inputFocusOut", i);
          });
      },
      _updateInputValues: function (e, t) {
        var n = this;
        void 0 === Helpers.App.getUrlParam(n.inputWidth.name) &&
          n.inputWidth.setValue(e),
          void 0 === Helpers.App.getUrlParam(n.inputHeight.name) &&
            n.inputHeight.setValue(t);
      },
      _updateInputValuesAndUrl: function (e, t) {
        var n = this;
        n.inputWidth.setValue(e),
          n.inputWidth.updateValueToUrl(e),
          n.inputHeight.setValue(t),
          n.inputHeight.updateValueToUrl(t);
      },
      _areInputsInErrorState: function () {
        var e = this;
        return e.inputWidth.isInErrorState() || e.inputHeight.isInErrorState();
      },
    },
  }),
  Class(UI.Tool, "CropVideoPage")
    .inherits(UI.Tool.ToolBase)
    .includes(
      VideoCropTrimCustomGraphicSupport,
      VideoCropTrimInputsSupport,
      VideoCropTrimAssetIdSupport
    )({
    PRESET_OPTIONS: [
      { name: "Custom", width: 0, height: 0 },
      { name: "Facebook Cover", width: 820, height: 462 },
      { name: "Facebook Carousel Ad - Horizontal", width: 1080, height: 567 },
      { name: "Facebook Carousel Ad - Square", width: 1080, height: 1080 },
      { name: "Facebook Feed - Horizontal", width: 1280, height: 720 },
      { name: "Facebook Feed - Vertical", width: 720, height: 1080 },
      { name: "Instagram Feed - Horizontal", width: 1080, height: 567 },
      { name: "Instagram Feed - Square", width: 1080, height: 1080 },
      { name: "Instagram Feed - Vertical", width: 864, height: 1080 },
      { name: "Instagram Story", width: 1080, height: 1920 },
      { name: "Linkedin", width: 1920, height: 1080 },
      { name: "Snapchat Ad", width: 1080, height: 1920 },
      { name: "Twitter - Horizontal", width: 1920, height: 1200 },
      { name: "Twitter - Vertical", width: 1200, height: 1900 },
      { name: "Pinterest - Square", width: 600, height: 600 },
      { name: "Pinterest - Vertical", width: 600, height: 900 },
      { name: "YouTube", width: 1920, height: 1080 },
    ],
    ONBOARDING_COOKIE_NAME: "video-crop-and-trim-tool",
    CROP_X_ORIGIN: "crop_video",
    MAX_UPLOAD_DIMENSION_ALLOWED: 1920,
    MAX_CROP_DIMENSION_ALLOWED: 1920,
    prototype: {
      recordState: { success: !0 },
      record: { customGraphic: [{ name: "nice.custom_graphic.device_1" }] },
      uploadPending: !1,
      hasChanges: !1,
      _videoData: {
        userVideoUrl: "",
        duration: 0,
        fragmentDuration: 0,
        width: 0,
        height: 0,
        timelineUrls: [],
        viewport: { width: 0, height: 0 },
        id: null,
      },
      _trimBoundariesRegistry: {},
      init: function (e) {
        var t = this;
        UI.Tool.ToolBase.prototype.init.call(t, e),
          $("[data-stage-tool-loader]").remove(),
          $("body").addClass("cropper-tool"),
          (t.customImageControl = t
            .appendChild(
              new UI.SmartTemplate.CustomGraphicDropControl({
                name: "customG_0",
                record: t.record.customGraphic[0],
                controlTitle: Helpers.App.isMobile()
                  ? "Upload Your Video"
                  : " Upload Your Video Here",
                maxSize: t.constructor.maxSizeAllowed.video,
                acceptedFiles: t.constructor.acceptedFiles.video,
                acceptedFormats: t.constructor.acceptedFormats.video,
                isMobilePhone: t.isMobilePhone,
                maxDimension: t.constructor.MAX_UPLOAD_DIMENSION_ALLOWED,
              })
            )
            .render($("[data-drag-n-drop-area]"))),
          t
            .appendChild(
              new UI.EmbeddableCropperModal({ name: "cropperModal" })
            )
            .render($("[data-cropper-area]")),
          t.cropperModal.element.removeClass("fade"),
          t
            .appendChild(
              new UI.Dropdown({
                name: "presets",
                cropSizesData: t.constructor.PRESET_OPTIONS,
              })
            )
            .render($("[data-tool-controls-presets]")),
          t
            .appendChild(new UI.InputField({ name: "inputWidth" }))
            .render($("[data-tool-controls-input-width]")),
          t
            .appendChild(new UI.InputField({ name: "inputHeight" }))
            .render($("[data-tool-controls-input-height]")),
          t._bindEvents(),
          t.handleAssetIdProcessing();
      },
      _bindEvents: function () {
        var e = this;
        return (
          (e._userLoginHandlerForDownload =
            e._deferredDownloadUponLogin.bind(e)),
          e.stageActionsManager.$downloadButton.appendTo(
            "[data-download-button]"
          ),
          (e._downloadButtonClickHandler =
            e._downloadButtonClickHandler.bind(e)),
          e.stageActionsManager.setClickListenerForDownloadButton(
            e._downloadButtonClickHandler
          ),
          e.customGraphicBindings(),
          e.customImageControl.checkUrlParams(),
          e.customImageControl.fileInputControl.addDropFunctionality(),
          e.cropperModal
            .bind("onboardingcomplete", function () {
              e._setCookieForOnboardingCompletion();
            })
            .bind("userinteraction", function () {
              (e.hasChanges = !0),
                e._updateCropParams(),
                e._updateDownloadButtonState();
            }),
          e.cropperModal.bind("imageLoaded", function () {
            e.stageActionsManager.enableDownloadButton();
          }),
          e.inputsBindings(),
          e._videoUploadBindings(),
          e
        );
      },
      _downloadButtonClickHandler: function () {
        var e = this;
        if (!e.stageActionsManager.$downloadButton.hasClass("disabled"))
          return 0 === Helpers.App.getUser().id
            ? (this.navBar.ssoModal.activate().showMessage({
                type: "warning",
                content:
                  'Please create an account to download this video.<br /> Already have an account?                     <a href="#" onclick="event.preventDefault();page.appNavBar.ssoModal.showTab(\'' +
                  UI.SsoModal.TAB_LOGIN +
                  '\')" class="trigger_login_link" role="button">Log In</a>',
                contentForceLogIn:
                  'Please log in to download this video.<br /> Don\'t have an account?                     <a href="#" onclick="event.preventDefault();page.appNavBar.ssoModal.showTab(\'' +
                  UI.SsoModal.TAB_SIGNUP +
                  '\')" class="trigger_signup_link" role="button">Sign Up</a> today!',
              }),
              void this._downloadUponLogin())
            : void this._downloadForLoggedInUser();
      },
      _deferredDownloadUponLogin: function () {
        var e = this;
        e.navBar.unbind("login.success", e._userLoginHandlerForDownload),
          e.navBar.unbind("signup.success", e._userLoginHandlerForDownload),
          e._downloadForLoggedInUser();
      },
      _downloadUponLogin: function () {
        var e = this;
        e.navBar.unbind("login.success", e._userLoginHandlerForDownload),
          e.navBar.unbind("signup.success", e._userLoginHandlerForDownload),
          e.navBar.bind("login.success", e._userLoginHandlerForDownload),
          e.navBar.bind("signup.success", e._userLoginHandlerForDownload);
      },
      _downloadForLoggedInUser: function () {
        var e = this;
        e._updateCropParams(),
          e.stageActionsManager.disableDownloadButton(),
          e.purchasesModal.skipModalAndDownloadImmediately(),
          e._trackDownloadCrop();
      },
      _updateCropParams: function () {
        var e = this,
          t = e.cropperModal._getParamsFromCropper();
        (t.id = Helpers.App.getUrlParam(e.customImageControl.name)),
          (t.slug = Helpers.StageType.getStageSlug()),
          (t.viewport = e.cropperModal._getViewportDimensions()),
          (t.original_video_url = page.stage._videoData.userVideoUrl),
          (t.type = "." + e._videoData.userVideoUrl.split(".").pop()),
          (t.is_custom_upload = !0),
          (e.cropParams = t),
          (e._trimBoundariesRegistry[e._videoData.id] = {
            start: t.trim_start,
            end: t.trim_end,
          });
      },
      _trackDownloadCrop: function () {
        var e = this,
          t = e.cropperModal._getViewportDimensions(),
          n = e.cropperModal._getParamsFromCropper();
        Helpers.GlobalEventTracker.trackVideoCropperTool(
          "user:requestVideoTrimDownload",
          {
            presetName: e.presets.getSelectedOption().innerHTML,
            cropWidth: t.width,
            cropHeight: t.height,
            originalWidth: e._videoData.width,
            originalHeight: e._videoData.height,
            trimmedLength: n.trim_end - n.trim_start,
            originalLength: e._videoData.duration,
          }
        );
      },
      _setCookieForOnboardingCompletion: function () {
        $.cookie(this.constructor.ONBOARDING_COOKIE_NAME, !0);
      },
      _updateDownloadButtonState: function () {
        return !this.hasChanges ||
          this.uploadPending ||
          this._areInputsInErrorState()
          ? this.stageActionsManager.disableDownloadButton()
          : void this.stageActionsManager.enableDownloadButton();
      },
      disableAllToolFileUploads: function () {
        var e = this;
        return (
          e.customImageControl.fileInputControl.showLoadingState(
            "Uploading Your Video"
          ),
          e
        );
      },
      enableAllToolFileUploads: function () {
        var e = this;
        return e.customImageControl.fileInputControl.showDefaultState(), e;
      },
      _isFirstTimeUser: function () {
        return null === $.cookie(this.constructor.ONBOARDING_COOKIE_NAME);
      },
      _updateCropper: function () {
        var e = this,
          t = e._videoData.duration,
          n = e._trimBoundariesRegistry[e._videoData.id] || {};
        e._videoData.userVideoUrl &&
          (e.stageActionsManager.disableDownloadButton(),
          (e.customImageControl.fileInputControl.controlTitle =
            "Upload New Video"),
          e.customImageControl.fileInputControl.updateButtonLabel(
            "Upload New Video"
          ),
          e.customImageControl.render($("[data-tool-controls-upload-button]")),
          $(".placeit-tool__subtitle").removeClass("hide"),
          $(".tool-controls-wrapper").removeClass("hide"),
          e.cropperModal.setViewportDimensions({
            width: Number(e._videoData.viewport.width),
            height: Number(e._videoData.viewport.height),
          }),
          e.cropperModal.loadVideo(
            {
              cropperConstraints: { zoom: !1, movement: !1 },
              showVideoOnboarding: e._isFirstTimeUser(),
              videoInfo: {
                duration: t,
                fragmentDuration: t,
                width: e._videoData.width,
                height: e._videoData.height,
                timelineUrls: e._videoData.timelineUrls,
                resizable: !0,
                minLength: t > 20 ? "5%" : "1s",
                trimStart: n.start,
                trimEnd: n.end,
              },
            },
            e._videoData.userVideoUrl
          ));
      },
      _videoUploadBindings: function () {
        var e = this;
        e.bind("file.loaded", function () {
          e._trackVideoUpload();
        }),
          e.bind("uploadByPublicUrl:error", function (t) {
            e._trackUploadByPublicUrlError(t.data);
          });
      },
      _trackVideoUpload: function () {
        Helpers.GlobalEventTracker.track("StageVideoCropper-fileloaded");
      },
      _trackUploadByPublicUrlError: function (e) {
        Helpers.GlobalEventTracker.trackVideoCropperTool(
          "videoCropperTool:uploadByPublicUrlError",
          e
        );
      },
      _trackUploadError: function (e) {
        var t, n, i;
        (t = this),
          (n = t.customImageControl.getFile()),
          (i = {
            message: e,
            fileName: n.name,
            size: (1e-6 * n.size).toFixed(1) + "mb",
          }),
          t
            ._getVideoData()
            .then(function (e) {
              $.extend(i, e);
            })
            ["finally"](function () {
              Helpers.GlobalEventTracker.smartTemplateEvent("uploadError", i);
            });
      },
      _getVideoData: function () {
        var e, t, n, i;
        return (
          (e = this),
          (t = e.customImageControl.getFile()),
          new Promise(function (e, r) {
            (n = document.createElement("video")),
              (n.preload = "metadata"),
              n.addEventListener("loadedmetadata", function () {
                URL.revokeObjectURL(n.src),
                  (i = {
                    duration: n.duration,
                    height: n.videoHeight,
                    width: n.videoWidth,
                  }),
                  n.remove(),
                  e(i);
              }),
              n.addEventListener("error", function () {
                n.remove(), r();
              });
            try {
              n.src = URL.createObjectURL(t);
            } catch (o) {
              n.remove(), r();
            }
          })
        );
      },
    },
  }),
  Module("VideoToGifCustomGraphicSupport")({
    prototype: {
      customGraphicBindings: function () {
        var e = this;
        e.bind("validationError", function (t) {
          e.dispatch("stage.error", { message: t.data.message });
        }),
          e.bind("customAssetNotFound", function () {
            e.dispatch("stage.error", {
              message: e.constructor.IMAGE_404_MESSAGE,
            });
          }),
          e.bind("customAssetFound", function (t) {
            (e._videoData.id = t.data.id),
              (e._videoData.originalVideoUrl = null),
              (e._videoData.userVideoUrl = t.data.user_video_url),
              e.disableAllToolFileUploads(),
              e.setVideo(t.data.user_video_url);
          }),
          e.bind("file.loaded", function (t) {
            return e.uploadPending === !0
              ? e._notifyWarnMessage(
                  UI.StageBase.GENERIC_UPLOADING_WARN_MESSAGE
                )
              : ((e._customGraphic = t.data.target),
                (e.uploadPending = !0),
                e._updateDownloadButtonState(),
                e.disableAllToolFileUploads(),
                void e
                  ._upload(e._customGraphic.getFile())
                  .then(e._uploadSuccessHandler.bind(e))
                  ["catch"](e._uploadFailHandler.bind(e)));
          });
      },
      _upload: function (e) {
        var t,
          n,
          i = this;
        return (
          (t = { "x-origin": i.constructor.CROP_X_ORIGIN }),
          (n = e.name.split(".").pop().toLowerCase()),
          Helpers.GlobalEventTracker.smartTemplateEvent("uploadStart", {
            fileName: e.name,
          }),
          "mp4" === n
            ? CropperRemoteUploader.storeVideo(e, t)
            : CropperRemoteUploader.uploadVideo(e, t)
        );
      },
      _uploadSuccessHandler: function (e) {
        var t, n;
        return (
          (t = this),
          (t._videoData.id = e.data.id),
          (t._videoData.originalVideoUrl = null),
          (t._videoData.userVideoUrl = null),
          (t._customGraphic = null),
          (t.hasChanges = !1),
          (t.uploadPending = !1),
          (n = Helpers.App.removeParam(t.customImageControl.urlParameterName)),
          window.history.replaceState({}, Helpers.StageType.getStageSlug(), n),
          Helpers.GlobalEventTracker.smartTemplateEvent("uploadEnd", {
            id: e.data.id,
          }),
          e.data.user_video_url
            ? ((t._videoData.userVideoUrl = e.data.user_video_url),
              t.setVideo(t._videoData.userVideoUrl))
            : e.data.original_video_url &&
              ((t._videoData.originalVideoUrl = e.data.original_video_url),
              t.setVideo(e.data.original_video_url)),
          e.data
        );
      },
      _uploadFailHandler: function (e) {
        var t,
          n,
          i = this;
        try {
          (t = JSON.parse(e.responseText)),
            (n = t.error || "Couldn\u2019t process video, please try again");
        } catch (r) {
          n = "Couldn\u2019t process video, please try again";
        }
        i._trackUploadError(n),
          i.dispatch("stage.error", { message: n }),
          (i._customGraphic = null),
          (i.uploadPending = !1),
          i._updateDownloadButtonState(),
          i.enableAllToolFileUploads();
      },
    },
  }),
  Class(UI.Tool, "VideoToGifPage")
    .inherits(UI.Tool.CropVideoPage)
    .includes(VideoToGifCustomGraphicSupport)({
    ONBOARDING_COOKIE_NAME: "video-to-gif-tool",
    CROP_X_ORIGIN: "video_to_gif",
    MAX_UPLOAD_DIMENSION_ALLOWED: 1920,
    MIN_CROP_DIMENSION_ALLOWED: 32,
    MAX_CROP_DIMENSION_ALLOWED: 800,
    MIN_FPS_ALLOWED: 4,
    MAX_FPS_ALLOWED: 10,
    MAX_DURATION_ALLOWED: 40,
    ESTIMATE_SIZE: [
      { minSize: 171001, deviation: 1.19 },
      { minSize: 114001, deviation: 1.2 },
      { minSize: 57001, deviation: 1.03 },
      { minSize: 0, deviation: 0.7741 },
    ],
    PRESET_OPTIONS: [
      { name: "Custom", width: 0, height: 0 },
      { name: "Instagram - Post", width: 640, height: 800 },
      { name: "Instagram - Story", width: 450, height: 800 },
      { name: "Facebook Ad - Horizontal", width: 800, height: 450 },
      { name: "Facebook Ad - Vertical", width: 533, height: 800 },
      { name: "Carousel Ad - Horizontal", width: 800, height: 420 },
      { name: "Carousel Ad - Square", width: 800, height: 800 },
    ],
    prototype: {
      $downloadControlContainer: null,
      _customGraphic: null,
      _videoUrl: null,
      init: function (e) {
        var t = this;
        UI.Tool.ToolBase.prototype.init.call(t, e),
          $("[data-stage-tool-loader]").remove(),
          $("body").addClass("video-to-gif-tool"),
          (t.$downloadControlContainer = $("[data-download-button]")),
          (t.customImageControl = t
            .appendChild(
              new UI.SmartTemplate.CustomGraphicDropControl({
                name: "customG_0",
                record: t.record.customGraphic[0],
                controlTitle: Helpers.App.isMobile()
                  ? "Upload Your Video"
                  : " Upload Your Video Here",
                maxSize: t.constructor.maxSizeAllowed.video,
                acceptedFiles: t.constructor.acceptedFiles.video,
                acceptedFormats: t.constructor.acceptedFormats.video,
                isMobilePhone: t.isMobilePhone,
                maxDimension: t.constructor.MAX_UPLOAD_DIMENSION_ALLOWED,
                maxDuration: t.constructor.MAX_DURATION_ALLOWED,
              })
            )
            .render($("[data-drag-n-drop-area]"))),
          t
            .appendChild(
              new UI.EmbeddableCropperModal({
                name: "cropperModal",
                progressbar: !0,
              })
            )
            .render($("[data-cropper-area]")),
          t.cropperModal.element.removeClass("fade"),
          t
            .appendChild(
              new UI.Dropdown({
                name: "presets",
                cropSizesData: t.constructor.PRESET_OPTIONS,
              })
            )
            .render($("[data-tool-controls-presets]")),
          t
            .appendChild(
              new UI.InputField({
                name: "inputWidth",
                lowerLimit: t.constructor.MIN_CROP_DIMENSION_ALLOWED,
              })
            )
            .render($("[data-tool-controls-input-width]")),
          t
            .appendChild(
              new UI.InputField({
                name: "inputHeight",
                lowerLimit: t.constructor.MIN_CROP_DIMENSION_ALLOWED,
              })
            )
            .render($("[data-tool-controls-input-height]")),
          t
            .appendChild(
              new UI.InputField({
                name: "inputFps",
                value: t.constructor.MAX_FPS_ALLOWED,
                lowerLimit: t.constructor.MIN_FPS_ALLOWED,
              })
            )
            .render($("[data-tool-controls-input-fps]")),
          t.inputWidth.updateValueFromUrl(),
          t.inputHeight.updateValueFromUrl(),
          t._bindEvents(),
          t._inputFpsBindings(),
          t._gifSizeBindings(),
          t.handleAssetIdProcessing(),
          t._bindPurchaseModalEvents();
      },
      _bindPurchaseModalEvents: function () {
        var e,
          t = this,
          n = function () {
            (e = Helpers.App.removeParam(
              t.customImageControl.urlParameterName
            )),
              window.history.replaceState(
                {},
                Helpers.StageType.getStageSlug(),
                e
              );
          };
        t.purchasesModal.bind("purchase.success", n),
          t.purchasesModal.bind("purchase.failed", n);
      },
      _downloadForLoggedInUser: function () {
        var e = this;
        e.customImageControl.setUrlParameter(e._videoData.id),
          e._updateCropParams(),
          e._updateGifParams(),
          e.stageActionsManager.disableDownloadButton(),
          e.purchasesModal.skipModalAndDownloadImmediately(),
          e._trackDownload();
      },
      _updateCropParams: function () {
        var e = this,
          t = e.cropperModal._getParamsFromCropper();
        (t.id = e._videoData.id),
          (t.slug = Helpers.StageType.getStageSlug()),
          (t.viewport = e.cropperModal._getViewportDimensions()),
          (t.type = "." + e._videoUrl.split(".").pop().toLowerCase()),
          (t.is_custom_upload = !0),
          page.stage._videoData.userVideoUrl
            ? (t.original_video_url = page.stage._videoData.userVideoUrl)
            : ((t.force_upload = !0),
              (t.original_video_url = page.stage._videoData.originalVideoUrl)),
          (e.cropParams = t);
      },
      _updateGifParams: function () {
        var e = this;
        e.gifParams = { fps: e.inputFps.getValue() };
      },
      _updateCropper: function () {
        var e = this,
          t = e._videoData.duration;
        return e._videoData.userVideoUrl && !e._videoUrl
          ? void e.setVideo(e._videoData.userVideoUrl)
          : void (
              e._videoUrl &&
              (e.stageActionsManager.disableDownloadButton(),
              (e.customImageControl.fileInputControl.controlTitle =
                "Upload New Video"),
              e.customImageControl.fileInputControl.updateButtonLabel(
                "Upload New Video"
              ),
              e.customImageControl.render(
                $("[data-tool-controls-upload-button]")
              ),
              e._validateDimensionInputs(),
              e._refreshGifSize(),
              $(".placeit-tool__subtitle").removeClass("hide"),
              $(".tool-controls-wrapper").removeClass("hide"),
              e.cropperModal.setViewportDimensions({
                width: Number(e._videoData.viewport.width),
                height: Number(e._videoData.viewport.height),
              }),
              e.cropperModal.loadVideo(
                {
                  cropperConstraints: { zoom: !1, movement: !1 },
                  showVideoOnboarding: e._isFirstTimeUser(),
                  videoInfo: {
                    duration: t,
                    fragmentDuration: t,
                    width: e._videoData.width,
                    height: e._videoData.height,
                    resizable: !0,
                    showSeekableTimeline: !1,
                  },
                },
                e._videoUrl
              ))
            );
      },
      _inputFpsBindings: function () {
        var e = this,
          t = function (t) {
            var n;
            t.target.setStateToError(),
              e._updateDownloadButtonState(),
              (n =
                "Your frame rate must be between " +
                e.constructor.MIN_FPS_ALLOWED +
                "fps and " +
                e.constructor.MAX_FPS_ALLOWED +
                "fps"),
              e.dispatch("stage.error", { message: n });
          },
          n = function (n) {
            return n.data < e.constructor.MIN_FPS_ALLOWED ||
              n.data > e.constructor.MAX_FPS_ALLOWED
              ? t(n)
              : (n.target.setStateToActive(),
                void (
                  e._areInputsInErrorState() ||
                  ((e.hasChanges = !0),
                  e._updateDownloadButtonState(),
                  (e._videoData.fps = e.inputFps.getValue()))
                ));
          },
          i = function (e) {
            e.target.setStateToActive();
          },
          r = function (t) {
            (t.target.getValue() < e.constructor.MIN_FPS_ALLOWED ||
              t.target.getValue() > e.constructor.MAX_FPS_ALLOWED) &&
              t.target.setStateToError();
          };
        e.inputFps.bind("inputChange", n),
          e.inputFps.bind("inputClick", i),
          e.inputFps.bind("inputFocusOut", r);
      },
      _gifSizeBindings: function () {
        var e = this;
        e.inputWidth.bind("inputChange", e._refreshGifSize.bind(e)),
          e.inputHeight.bind("inputChange", e._refreshGifSize.bind(e)),
          e.inputFps.bind("inputChange", e._refreshGifSize.bind(e));
      },
      _validateDimensionInputs: function () {
        var e = this;
        e.inputWidth.setStateToActive(),
          e.inputHeight.setStateToActive(),
          e.inputWidth.getValue() > e.constructor.MAX_CROP_DIMENSION_ALLOWED &&
            e.inputWidth.setStateToError(),
          e.inputHeight.getValue() > e.constructor.MAX_CROP_DIMENSION_ALLOWED &&
            e.inputHeight.setStateToError(),
          (e.inputWidth.isInErrorState() || e.inputHeight.isInErrorState()) &&
            e.dispatch("stage.error", {
              message:
                "To convert to gif your dimensions must be lower than " +
                e.constructor.MAX_CROP_DIMENSION_ALLOWED +
                "px x " +
                e.constructor.MAX_CROP_DIMENSION_ALLOWED +
                "px",
            });
      },
      _areInputsInErrorState: function () {
        return (
          this.inputWidth.isInErrorState() ||
          this.inputHeight.isInErrorState() ||
          this.inputFps.isInErrorState()
        );
      },
      _updateDownloadButtonState: function () {
        return this.uploadPending || this._areInputsInErrorState()
          ? this.stageActionsManager.disableDownloadButton()
          : void this.stageActionsManager.enableDownloadButton();
      },
      calculateGifSize: function (e, t, n) {
        var i, r;
        (i = (e.width * e.height * t * n) / 8), (i /= 1e3);
        for (var o = 0; o < this.constructor.ESTIMATE_SIZE.length; o++) {
          var s = this.constructor.ESTIMATE_SIZE[o];
          if (i >= s.minSize) {
            i *= s.deviation;
            break;
          }
        }
        return (
          (r = "kb"),
          i > 1e3 && ((i /= 1e3), (r = "mb")),
          i.toFixed(2) + " " + r
        );
      },
      _refreshGifSize: function () {
        var e, t, n, i, r, o, s;
        (e = this),
          e._areInputsInErrorState() ||
            ((t = this.inputWidth.getValue()),
            (n = this.inputHeight.getValue()),
            (i = this.inputFps.getValue()),
            (r = e._videoData.duration),
            (s = { height: n, width: t }),
            (o = e.calculateGifSize(s, i, r)),
            e.$downloadControlContainer.find(".helper-container").remove(),
            e.$downloadControlContainer.append(
              '<div class="helper-container"><strong>Estimated GIF size:</strong> ' +
                o +
                "</div>"
            ));
      },
      _trackDownload: function () {
        var e = this,
          t = e.cropperModal._getViewportDimensions();
        Helpers.GlobalEventTracker.trackVideoToGifTool(
          "vid.Gif:freeStage.download",
          {
            presetName: e.presets.getSelectedOption().innerHTML,
            cropWidth: t.width,
            cropHeight: t.height,
            originalWidth: e._videoData.width,
            originalHeight: e._videoData.height,
            originalLength: e._videoData.duration,
            fps: e.inputFps.getValue(),
          }
        );
      },
      _trackVideoUpload: function () {
        Helpers.GlobalEventTracker.trackVideoToGifTool(
          "smartTemplate:videoUpload"
        );
      },
      _trackUploadByPublicUrlError: function (e) {
        Helpers.GlobalEventTracker.trackVideoToGifTool(
          "videoToGifTool:uploadByPublicUrlError",
          e
        );
      },
      setVideo: function (e) {
        var t = this;
        (t._videoUrl = e),
          Helpers.App.loadVideoData(t._videoUrl, t._setVideoHandler.bind(t));
      },
      _setVideoHandler: function (e) {
        var t = this;
        if (
          e.width > t.constructor.MAX_UPLOAD_DIMENSION_ALLOWED ||
          e.height > t.constructor.MAX_UPLOAD_DIMENSION_ALLOWED
        )
          return void t.dispatch("stage.error", {
            message:
              "Your dimensions must be lower than " +
              t.constructor.MAX_UPLOAD_DIMENSION_ALLOWED +
              "X" +
              t.constructor.MAX_UPLOAD_DIMENSION_ALLOWED +
              "px",
          });
        if (e.duration > t.constructor.MAX_DURATION_ALLOWED)
          return void t.dispatch("stage.error", {
            message:
              "Video is too long. Maximum is " +
              t.constructor.MAX_DURATION_ALLOWED +
              "s",
          });
        var n =
            e.width > t.constructor.MAX_CROP_DIMENSION_ALLOWED
              ? t.constructor.MAX_CROP_DIMENSION_ALLOWED
              : e.width,
          i =
            e.height > t.constructor.MAX_CROP_DIMENSION_ALLOWED
              ? t.constructor.MAX_CROP_DIMENSION_ALLOWED
              : e.height;
        (t.constructor.PRESET_OPTIONS[0].width = n),
          (t.constructor.PRESET_OPTIONS[0].height = i),
          t.presets.setSelectedOption(t.constructor.PRESET_OPTIONS[0].name),
          t.presets.updateOptionValue(
            t.constructor.PRESET_OPTIONS[0].name,
            n + "x" + i
          ),
          t._updateInputValues(n, i),
          (t._videoData.viewport = { width: n, height: i }),
          (t._videoData.fragmentDuration = e.duration),
          (t._videoData.duration = e.duration),
          (t._videoData.width = n),
          (t._videoData.height = i),
          t._updateCropper(),
          t._updateDownloadButtonState(),
          t.enableAllToolFileUploads();
      },
    },
  }),
  Class("IframeAPI")({
    renderButton: function (e) {
      if (window.apiPage === !0) {
        var t = this,
          n = new ButtonPopover({
            cssClass: "button primary btn-block",
            content: "Finish",
          });
        e.appendChild(n).render(e),
          n.bind("click", function () {
            t._clickHandler();
          });
      }
    },
    _clickHandler: function () {
      var e = this,
        t = e._prepareProductshot();
      e._createProductshot(t)
        .then(function (t) {
          var t = {
            eventId:
              Helpers.App.getUrlParam("event_id", location.href, !1) ||
              "placeitAPI",
            image: page.stage.stageImageWidget.getStageImgBase64(),
            productshotId: t.productshot_id,
          };
          e._post(window.backupParent, t);
        })
        ["catch"](function (t) {
          var n = t.status,
            i = JSON.parse(t.responseText),
            r = { error: { status: n, message: i } };
          e._post(window.backupParent, r);
        });
    },
    _prepareProductshot: function () {
      var e, t, n, i, r, o, s, a;
      return (
        (t =
          Helpers.App.getUrlParam("access_token", location.href, !1) ||
          "placeitAPI"),
        (n = Helpers.StageType.getStageInfo().id),
        (i = JSON.stringify(Helpers.StageType.getDesignPlan())),
        (r = 14),
        (o = 2),
        (e = {
          access_token: t,
          stage_id: n,
          design_plan: i,
          resolution_id: r,
          license_id: o,
        }),
        (s = "/api/v2/create_productshot"),
        (a = { url: s, type: "post", data: e })
      );
    },
    _createProductshot: function (e) {
      return new Promise(function (t, n) {
        $.ajax(e).then(t).fail(n);
      });
    },
    _post: function (e, t) {
      e.postMessage(t, "*");
    },
  });
