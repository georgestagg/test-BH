// Shinylive 0.5.0
// Copyright 2024 Posit, PBC
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x3)(function(x3) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x3 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/ws/browser.js
var require_browser = __commonJS({
  "node_modules/ws/browser.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// src/awaitable-queue.ts
var AwaitableQueue = class {
  constructor() {
    this._buffer = [];
    this._resolve = null;
    this._promise = null;
    this._notifyAll();
  }
  async _wait() {
    await this._promise;
  }
  _notifyAll() {
    if (this._resolve) {
      this._resolve();
    }
    this._promise = new Promise((resolve) => this._resolve = resolve);
  }
  async dequeue() {
    while (this._buffer.length === 0) {
      await this._wait();
    }
    return this._buffer.shift();
  }
  enqueue(x3) {
    this._buffer.push(x3);
    this._notifyAll();
  }
};

// src/utils.ts
function uint8ArrayToString(buf) {
  let result = "";
  for (let i = 0; i < buf.length; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}

// node_modules/webr/dist/webr.mjs
var tn = Object.create;
var Qr = Object.defineProperty;
var rn = Object.getOwnPropertyDescriptor;
var sn = Object.getOwnPropertyNames;
var nn = Object.getPrototypeOf;
var on = Object.prototype.hasOwnProperty;
var N = ((r) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(r, { get: (e, t) => (typeof __require < "u" ? __require : e)[t] }) : r)(function(r) {
  if (typeof __require < "u")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + r + '" is not supported');
});
var S = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var an = (r, e, t, s) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of sn(e))
      !on.call(r, n) && n !== t && Qr(r, n, { get: () => e[n], enumerable: !(s = rn(e, n)) || s.enumerable });
  return r;
};
var ne = (r, e, t) => (t = r != null ? tn(nn(r)) : {}, an(e || !r || !r.__esModule ? Qr(t, "default", { value: r, enumerable: true }) : t, r));
var yr = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var a = (r, e, t) => (yr(r, e, "read from private field"), t ? t.call(r) : e.get(r));
var u = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
};
var d = (r, e, t, s) => (yr(r, e, "write to private field"), s ? s.call(r, t) : e.set(r, t), t);
var E = (r, e, t) => (yr(r, e, "access private method"), t);
var Ve = S((U2) => {
  "use strict";
  Object.defineProperty(U2, "__esModule", { value: true });
  U2.getUint64 = U2.getInt64 = U2.setInt64 = U2.setUint64 = U2.UINT32_MAX = void 0;
  U2.UINT32_MAX = 4294967295;
  function yn(r, e, t) {
    let s = t / 4294967296, n = t;
    r.setUint32(e, s), r.setUint32(e + 4, n);
  }
  U2.setUint64 = yn;
  function fn(r, e, t) {
    let s = Math.floor(t / 4294967296), n = t;
    r.setUint32(e, s), r.setUint32(e + 4, n);
  }
  U2.setInt64 = fn;
  function Rn(r, e) {
    let t = r.getInt32(e), s = r.getUint32(e + 4);
    return t * 4294967296 + s;
  }
  U2.getInt64 = Rn;
  function mn(r, e) {
    let t = r.getUint32(e), s = r.getUint32(e + 4);
    return t * 4294967296 + s;
  }
  U2.getUint64 = mn;
});
var Wt = S((D2) => {
  "use strict";
  var Pr, _r, Sr;
  Object.defineProperty(D2, "__esModule", { value: true });
  D2.utf8DecodeTD = D2.TEXT_DECODER_THRESHOLD = D2.utf8DecodeJs = D2.utf8EncodeTE = D2.TEXT_ENCODER_THRESHOLD = D2.utf8EncodeJs = D2.utf8Count = void 0;
  var cs = Ve(), Ot = (typeof process > "u" || ((Pr = process == null ? void 0 : process.env) === null || Pr === void 0 ? void 0 : Pr.TEXT_ENCODING) !== "never") && typeof TextEncoder < "u" && typeof TextDecoder < "u";
  function gn(r) {
    let e = r.length, t = 0, s = 0;
    for (; s < e; ) {
      let n = r.charCodeAt(s++);
      if (n & 4294967168)
        if (!(n & 4294965248))
          t += 2;
        else {
          if (n >= 55296 && n <= 56319 && s < e) {
            let o = r.charCodeAt(s);
            (o & 64512) === 56320 && (++s, n = ((n & 1023) << 10) + (o & 1023) + 65536);
          }
          n & 4294901760 ? t += 4 : t += 3;
        }
      else {
        t++;
        continue;
      }
    }
    return t;
  }
  D2.utf8Count = gn;
  function bn(r, e, t) {
    let s = r.length, n = t, o = 0;
    for (; o < s; ) {
      let i = r.charCodeAt(o++);
      if (i & 4294967168)
        if (!(i & 4294965248))
          e[n++] = i >> 6 & 31 | 192;
        else {
          if (i >= 55296 && i <= 56319 && o < s) {
            let c2 = r.charCodeAt(o);
            (c2 & 64512) === 56320 && (++o, i = ((i & 1023) << 10) + (c2 & 1023) + 65536);
          }
          i & 4294901760 ? (e[n++] = i >> 18 & 7 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128) : (e[n++] = i >> 12 & 15 | 224, e[n++] = i >> 6 & 63 | 128);
        }
      else {
        e[n++] = i;
        continue;
      }
      e[n++] = i & 63 | 128;
    }
  }
  D2.utf8EncodeJs = bn;
  var Je = Ot ? new TextEncoder() : void 0;
  D2.TEXT_ENCODER_THRESHOLD = Ot ? typeof process < "u" && ((_r = process == null ? void 0 : process.env) === null || _r === void 0 ? void 0 : _r.TEXT_ENCODING) !== "force" ? 200 : 0 : cs.UINT32_MAX;
  function wn(r, e, t) {
    e.set(Je.encode(r), t);
  }
  function xn(r, e, t) {
    Je.encodeInto(r, e.subarray(t));
  }
  D2.utf8EncodeTE = Je != null && Je.encodeInto ? xn : wn;
  var vn = 4096;
  function En(r, e, t) {
    let s = e, n = s + t, o = [], i = "";
    for (; s < n; ) {
      let c2 = r[s++];
      if (!(c2 & 128))
        o.push(c2);
      else if ((c2 & 224) === 192) {
        let p2 = r[s++] & 63;
        o.push((c2 & 31) << 6 | p2);
      } else if ((c2 & 240) === 224) {
        let p2 = r[s++] & 63, k2 = r[s++] & 63;
        o.push((c2 & 31) << 12 | p2 << 6 | k2);
      } else if ((c2 & 248) === 240) {
        let p2 = r[s++] & 63, k2 = r[s++] & 63, b2 = r[s++] & 63, C2 = (c2 & 7) << 18 | p2 << 12 | k2 << 6 | b2;
        C2 > 65535 && (C2 -= 65536, o.push(C2 >>> 10 & 1023 | 55296), C2 = 56320 | C2 & 1023), o.push(C2);
      } else
        o.push(c2);
      o.length >= vn && (i += String.fromCharCode(...o), o.length = 0);
    }
    return o.length > 0 && (i += String.fromCharCode(...o)), i;
  }
  D2.utf8DecodeJs = En;
  var Tn = Ot ? new TextDecoder() : null;
  D2.TEXT_DECODER_THRESHOLD = Ot ? typeof process < "u" && ((Sr = process == null ? void 0 : process.env) === null || Sr === void 0 ? void 0 : Sr.TEXT_DECODER) !== "force" ? 200 : 0 : cs.UINT32_MAX;
  function Pn(r, e, t) {
    let s = r.subarray(e, e + t);
    return Tn.decode(s);
  }
  D2.utf8DecodeTD = Pn;
});
var Dr = S((At) => {
  "use strict";
  Object.defineProperty(At, "__esModule", { value: true });
  At.ExtData = void 0;
  var Mr = class {
    constructor(e, t) {
      this.type = e, this.data = t;
    }
  };
  At.ExtData = Mr;
});
var Ut = S((It) => {
  "use strict";
  Object.defineProperty(It, "__esModule", { value: true });
  It.DecodeError = void 0;
  var be = class extends Error {
    constructor(e) {
      super(e);
      let t = Object.create(be.prototype);
      Object.setPrototypeOf(this, t), Object.defineProperty(this, "name", { configurable: true, enumerable: false, value: be.name });
    }
  };
  It.DecodeError = be;
});
var kr = S((_2) => {
  "use strict";
  Object.defineProperty(_2, "__esModule", { value: true });
  _2.timestampExtension = _2.decodeTimestampExtension = _2.decodeTimestampToTimeSpec = _2.encodeTimestampExtension = _2.encodeDateToTimeSpec = _2.encodeTimeSpecToTimestamp = _2.EXT_TIMESTAMP = void 0;
  var _n = Ut(), us = Ve();
  _2.EXT_TIMESTAMP = -1;
  var Sn = 4294967296 - 1, Mn = 17179869184 - 1;
  function ps({ sec: r, nsec: e }) {
    if (r >= 0 && e >= 0 && r <= Mn)
      if (e === 0 && r <= Sn) {
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, r), t;
      } else {
        let t = r / 4294967296, s = r & 4294967295, n = new Uint8Array(8), o = new DataView(n.buffer);
        return o.setUint32(0, e << 2 | t & 3), o.setUint32(4, s), n;
      }
    else {
      let t = new Uint8Array(12), s = new DataView(t.buffer);
      return s.setUint32(0, e), (0, us.setInt64)(s, 4, r), t;
    }
  }
  _2.encodeTimeSpecToTimestamp = ps;
  function ds(r) {
    let e = r.getTime(), t = Math.floor(e / 1e3), s = (e - t * 1e3) * 1e6, n = Math.floor(s / 1e9);
    return { sec: t + n, nsec: s - n * 1e9 };
  }
  _2.encodeDateToTimeSpec = ds;
  function hs(r) {
    if (r instanceof Date) {
      let e = ds(r);
      return ps(e);
    } else
      return null;
  }
  _2.encodeTimestampExtension = hs;
  function ys(r) {
    let e = new DataView(r.buffer, r.byteOffset, r.byteLength);
    switch (r.byteLength) {
      case 4:
        return { sec: e.getUint32(0), nsec: 0 };
      case 8: {
        let t = e.getUint32(0), s = e.getUint32(4), n = (t & 3) * 4294967296 + s, o = t >>> 2;
        return { sec: n, nsec: o };
      }
      case 12: {
        let t = (0, us.getInt64)(e, 4), s = e.getUint32(0);
        return { sec: t, nsec: s };
      }
      default:
        throw new _n.DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${r.length}`);
    }
  }
  _2.decodeTimestampToTimeSpec = ys;
  function fs(r) {
    let e = ys(r);
    return new Date(e.sec * 1e3 + e.nsec / 1e6);
  }
  _2.decodeTimestampExtension = fs;
  _2.timestampExtension = { type: _2.EXT_TIMESTAMP, encode: hs, decode: fs };
});
var Nt = S((jt) => {
  "use strict";
  Object.defineProperty(jt, "__esModule", { value: true });
  jt.ExtensionCodec = void 0;
  var Ct = Dr(), Dn = kr(), He = class {
    constructor() {
      this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(Dn.timestampExtension);
    }
    register({ type: e, encode: t, decode: s }) {
      if (e >= 0)
        this.encoders[e] = t, this.decoders[e] = s;
      else {
        let n = 1 + e;
        this.builtInEncoders[n] = t, this.builtInDecoders[n] = s;
      }
    }
    tryToEncode(e, t) {
      for (let s = 0; s < this.builtInEncoders.length; s++) {
        let n = this.builtInEncoders[s];
        if (n != null) {
          let o = n(e, t);
          if (o != null) {
            let i = -1 - s;
            return new Ct.ExtData(i, o);
          }
        }
      }
      for (let s = 0; s < this.encoders.length; s++) {
        let n = this.encoders[s];
        if (n != null) {
          let o = n(e, t);
          if (o != null) {
            let i = s;
            return new Ct.ExtData(i, o);
          }
        }
      }
      return e instanceof Ct.ExtData ? e : null;
    }
    decode(e, t, s) {
      let n = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
      return n ? n(e, t, s) : new Ct.ExtData(t, e);
    }
  };
  jt.ExtensionCodec = He;
  He.defaultCodec = new He();
});
var Or = S((we) => {
  "use strict";
  Object.defineProperty(we, "__esModule", { value: true });
  we.createDataView = we.ensureUint8Array = void 0;
  function Rs(r) {
    return r instanceof Uint8Array ? r : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : r instanceof ArrayBuffer ? new Uint8Array(r) : Uint8Array.from(r);
  }
  we.ensureUint8Array = Rs;
  function kn(r) {
    if (r instanceof ArrayBuffer)
      return new DataView(r);
    let e = Rs(r);
    return new DataView(e.buffer, e.byteOffset, e.byteLength);
  }
  we.createDataView = kn;
});
var Ar = S((V2) => {
  "use strict";
  Object.defineProperty(V2, "__esModule", { value: true });
  V2.Encoder = V2.DEFAULT_INITIAL_BUFFER_SIZE = V2.DEFAULT_MAX_DEPTH = void 0;
  var ze = Wt(), On = Nt(), ms = Ve(), Wn = Or();
  V2.DEFAULT_MAX_DEPTH = 100;
  V2.DEFAULT_INITIAL_BUFFER_SIZE = 2048;
  var Wr = class {
    constructor(e = On.ExtensionCodec.defaultCodec, t = void 0, s = V2.DEFAULT_MAX_DEPTH, n = V2.DEFAULT_INITIAL_BUFFER_SIZE, o = false, i = false, c2 = false, p2 = false) {
      this.extensionCodec = e, this.context = t, this.maxDepth = s, this.initialBufferSize = n, this.sortKeys = o, this.forceFloat32 = i, this.ignoreUndefined = c2, this.forceIntegerToFloat = p2, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
    }
    reinitializeState() {
      this.pos = 0;
    }
    encodeSharedRef(e) {
      return this.reinitializeState(), this.doEncode(e, 1), this.bytes.subarray(0, this.pos);
    }
    encode(e) {
      return this.reinitializeState(), this.doEncode(e, 1), this.bytes.slice(0, this.pos);
    }
    doEncode(e, t) {
      if (t > this.maxDepth)
        throw new Error(`Too deep objects in depth ${t}`);
      e == null ? this.encodeNil() : typeof e == "boolean" ? this.encodeBoolean(e) : typeof e == "number" ? this.encodeNumber(e) : typeof e == "string" ? this.encodeString(e) : this.encodeObject(e, t);
    }
    ensureBufferSizeToWrite(e) {
      let t = this.pos + e;
      this.view.byteLength < t && this.resizeBuffer(t * 2);
    }
    resizeBuffer(e) {
      let t = new ArrayBuffer(e), s = new Uint8Array(t), n = new DataView(t);
      s.set(this.bytes), this.view = n, this.bytes = s;
    }
    encodeNil() {
      this.writeU8(192);
    }
    encodeBoolean(e) {
      e === false ? this.writeU8(194) : this.writeU8(195);
    }
    encodeNumber(e) {
      Number.isSafeInteger(e) && !this.forceIntegerToFloat ? e >= 0 ? e < 128 ? this.writeU8(e) : e < 256 ? (this.writeU8(204), this.writeU8(e)) : e < 65536 ? (this.writeU8(205), this.writeU16(e)) : e < 4294967296 ? (this.writeU8(206), this.writeU32(e)) : (this.writeU8(207), this.writeU64(e)) : e >= -32 ? this.writeU8(224 | e + 32) : e >= -128 ? (this.writeU8(208), this.writeI8(e)) : e >= -32768 ? (this.writeU8(209), this.writeI16(e)) : e >= -2147483648 ? (this.writeU8(210), this.writeI32(e)) : (this.writeU8(211), this.writeI64(e)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(e)) : (this.writeU8(203), this.writeF64(e));
    }
    writeStringHeader(e) {
      if (e < 32)
        this.writeU8(160 + e);
      else if (e < 256)
        this.writeU8(217), this.writeU8(e);
      else if (e < 65536)
        this.writeU8(218), this.writeU16(e);
      else if (e < 4294967296)
        this.writeU8(219), this.writeU32(e);
      else
        throw new Error(`Too long string: ${e} bytes in UTF-8`);
    }
    encodeString(e) {
      if (e.length > ze.TEXT_ENCODER_THRESHOLD) {
        let n = (0, ze.utf8Count)(e);
        this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n), (0, ze.utf8EncodeTE)(e, this.bytes, this.pos), this.pos += n;
      } else {
        let n = (0, ze.utf8Count)(e);
        this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n), (0, ze.utf8EncodeJs)(e, this.bytes, this.pos), this.pos += n;
      }
    }
    encodeObject(e, t) {
      let s = this.extensionCodec.tryToEncode(e, this.context);
      if (s != null)
        this.encodeExtension(s);
      else if (Array.isArray(e))
        this.encodeArray(e, t);
      else if (ArrayBuffer.isView(e))
        this.encodeBinary(e);
      else if (typeof e == "object")
        this.encodeMap(e, t);
      else
        throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`);
    }
    encodeBinary(e) {
      let t = e.byteLength;
      if (t < 256)
        this.writeU8(196), this.writeU8(t);
      else if (t < 65536)
        this.writeU8(197), this.writeU16(t);
      else if (t < 4294967296)
        this.writeU8(198), this.writeU32(t);
      else
        throw new Error(`Too large binary: ${t}`);
      let s = (0, Wn.ensureUint8Array)(e);
      this.writeU8a(s);
    }
    encodeArray(e, t) {
      let s = e.length;
      if (s < 16)
        this.writeU8(144 + s);
      else if (s < 65536)
        this.writeU8(220), this.writeU16(s);
      else if (s < 4294967296)
        this.writeU8(221), this.writeU32(s);
      else
        throw new Error(`Too large array: ${s}`);
      for (let n of e)
        this.doEncode(n, t + 1);
    }
    countWithoutUndefined(e, t) {
      let s = 0;
      for (let n of t)
        e[n] !== void 0 && s++;
      return s;
    }
    encodeMap(e, t) {
      let s = Object.keys(e);
      this.sortKeys && s.sort();
      let n = this.ignoreUndefined ? this.countWithoutUndefined(e, s) : s.length;
      if (n < 16)
        this.writeU8(128 + n);
      else if (n < 65536)
        this.writeU8(222), this.writeU16(n);
      else if (n < 4294967296)
        this.writeU8(223), this.writeU32(n);
      else
        throw new Error(`Too large map object: ${n}`);
      for (let o of s) {
        let i = e[o];
        this.ignoreUndefined && i === void 0 || (this.encodeString(o), this.doEncode(i, t + 1));
      }
    }
    encodeExtension(e) {
      let t = e.data.length;
      if (t === 1)
        this.writeU8(212);
      else if (t === 2)
        this.writeU8(213);
      else if (t === 4)
        this.writeU8(214);
      else if (t === 8)
        this.writeU8(215);
      else if (t === 16)
        this.writeU8(216);
      else if (t < 256)
        this.writeU8(199), this.writeU8(t);
      else if (t < 65536)
        this.writeU8(200), this.writeU16(t);
      else if (t < 4294967296)
        this.writeU8(201), this.writeU32(t);
      else
        throw new Error(`Too large extension object: ${t}`);
      this.writeI8(e.type), this.writeU8a(e.data);
    }
    writeU8(e) {
      this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, e), this.pos++;
    }
    writeU8a(e) {
      let t = e.length;
      this.ensureBufferSizeToWrite(t), this.bytes.set(e, this.pos), this.pos += t;
    }
    writeI8(e) {
      this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e), this.pos++;
    }
    writeU16(e) {
      this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, e), this.pos += 2;
    }
    writeI16(e) {
      this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, e), this.pos += 2;
    }
    writeU32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, e), this.pos += 4;
    }
    writeI32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, e), this.pos += 4;
    }
    writeF32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, e), this.pos += 4;
    }
    writeF64(e) {
      this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, e), this.pos += 8;
    }
    writeU64(e) {
      this.ensureBufferSizeToWrite(8), (0, ms.setUint64)(this.view, this.pos, e), this.pos += 8;
    }
    writeI64(e) {
      this.ensureBufferSizeToWrite(8), (0, ms.setInt64)(this.view, this.pos, e), this.pos += 8;
    }
  };
  V2.Encoder = Wr;
});
var gs = S((Bt) => {
  "use strict";
  Object.defineProperty(Bt, "__esModule", { value: true });
  Bt.encode = void 0;
  var An = Ar(), In = {};
  function Un(r, e = In) {
    return new An.Encoder(e.extensionCodec, e.context, e.maxDepth, e.initialBufferSize, e.sortKeys, e.forceFloat32, e.ignoreUndefined, e.forceIntegerToFloat).encodeSharedRef(r);
  }
  Bt.encode = Un;
});
var bs = S((Lt) => {
  "use strict";
  Object.defineProperty(Lt, "__esModule", { value: true });
  Lt.prettyByte = void 0;
  function Cn(r) {
    return `${r < 0 ? "-" : ""}0x${Math.abs(r).toString(16).padStart(2, "0")}`;
  }
  Lt.prettyByte = Cn;
});
var ws = S((Ft) => {
  "use strict";
  Object.defineProperty(Ft, "__esModule", { value: true });
  Ft.CachedKeyDecoder = void 0;
  var jn = Wt(), Nn = 16, Bn = 16, Ir = class {
    constructor(e = Nn, t = Bn) {
      this.maxKeyLength = e, this.maxLengthPerKey = t, this.hit = 0, this.miss = 0, this.caches = [];
      for (let s = 0; s < this.maxKeyLength; s++)
        this.caches.push([]);
    }
    canBeCached(e) {
      return e > 0 && e <= this.maxKeyLength;
    }
    find(e, t, s) {
      let n = this.caches[s - 1];
      e:
        for (let o of n) {
          let i = o.bytes;
          for (let c2 = 0; c2 < s; c2++)
            if (i[c2] !== e[t + c2])
              continue e;
          return o.str;
        }
      return null;
    }
    store(e, t) {
      let s = this.caches[e.length - 1], n = { bytes: e, str: t };
      s.length >= this.maxLengthPerKey ? s[Math.random() * s.length | 0] = n : s.push(n);
    }
    decode(e, t, s) {
      let n = this.find(e, t, s);
      if (n != null)
        return this.hit++, n;
      this.miss++;
      let o = (0, jn.utf8DecodeJs)(e, t, s), i = Uint8Array.prototype.slice.call(e, t, t + s);
      return this.store(i, o), o;
    }
  };
  Ft.CachedKeyDecoder = Ir;
});
var qt = S((K2) => {
  "use strict";
  Object.defineProperty(K2, "__esModule", { value: true });
  K2.Decoder = K2.DataViewIndexOutOfBoundsError = void 0;
  var Ur = bs(), Ln = Nt(), le2 = Ve(), Cr = Wt(), jr = Or(), Fn = ws(), $2 = Ut(), qn = (r) => {
    let e = typeof r;
    return e === "string" || e === "number";
  }, Xe = -1, Br = new DataView(new ArrayBuffer(0)), Vn = new Uint8Array(Br.buffer);
  K2.DataViewIndexOutOfBoundsError = (() => {
    try {
      Br.getInt8(0);
    } catch (r) {
      return r.constructor;
    }
    throw new Error("never reached");
  })();
  var xs = new K2.DataViewIndexOutOfBoundsError("Insufficient data"), Jn = new Fn.CachedKeyDecoder(), Nr = class {
    constructor(e = Ln.ExtensionCodec.defaultCodec, t = void 0, s = le2.UINT32_MAX, n = le2.UINT32_MAX, o = le2.UINT32_MAX, i = le2.UINT32_MAX, c2 = le2.UINT32_MAX, p2 = Jn) {
      this.extensionCodec = e, this.context = t, this.maxStrLength = s, this.maxBinLength = n, this.maxArrayLength = o, this.maxMapLength = i, this.maxExtLength = c2, this.keyDecoder = p2, this.totalPos = 0, this.pos = 0, this.view = Br, this.bytes = Vn, this.headByte = Xe, this.stack = [];
    }
    reinitializeState() {
      this.totalPos = 0, this.headByte = Xe, this.stack.length = 0;
    }
    setBuffer(e) {
      this.bytes = (0, jr.ensureUint8Array)(e), this.view = (0, jr.createDataView)(this.bytes), this.pos = 0;
    }
    appendBuffer(e) {
      if (this.headByte === Xe && !this.hasRemaining(1))
        this.setBuffer(e);
      else {
        let t = this.bytes.subarray(this.pos), s = (0, jr.ensureUint8Array)(e), n = new Uint8Array(t.length + s.length);
        n.set(t), n.set(s, t.length), this.setBuffer(n);
      }
    }
    hasRemaining(e) {
      return this.view.byteLength - this.pos >= e;
    }
    createExtraByteError(e) {
      let { view: t, pos: s } = this;
      return new RangeError(`Extra ${t.byteLength - s} of ${t.byteLength} byte(s) found at buffer[${e}]`);
    }
    decode(e) {
      this.reinitializeState(), this.setBuffer(e);
      let t = this.doDecodeSync();
      if (this.hasRemaining(1))
        throw this.createExtraByteError(this.pos);
      return t;
    }
    *decodeMulti(e) {
      for (this.reinitializeState(), this.setBuffer(e); this.hasRemaining(1); )
        yield this.doDecodeSync();
    }
    async decodeAsync(e) {
      let t = false, s;
      for await (let c2 of e) {
        if (t)
          throw this.createExtraByteError(this.totalPos);
        this.appendBuffer(c2);
        try {
          s = this.doDecodeSync(), t = true;
        } catch (p2) {
          if (!(p2 instanceof K2.DataViewIndexOutOfBoundsError))
            throw p2;
        }
        this.totalPos += this.pos;
      }
      if (t) {
        if (this.hasRemaining(1))
          throw this.createExtraByteError(this.totalPos);
        return s;
      }
      let { headByte: n, pos: o, totalPos: i } = this;
      throw new RangeError(`Insufficient data in parsing ${(0, Ur.prettyByte)(n)} at ${i} (${o} in the current buffer)`);
    }
    decodeArrayStream(e) {
      return this.decodeMultiAsync(e, true);
    }
    decodeStream(e) {
      return this.decodeMultiAsync(e, false);
    }
    async *decodeMultiAsync(e, t) {
      let s = t, n = -1;
      for await (let o of e) {
        if (t && n === 0)
          throw this.createExtraByteError(this.totalPos);
        this.appendBuffer(o), s && (n = this.readArraySize(), s = false, this.complete());
        try {
          for (; yield this.doDecodeSync(), --n !== 0; )
            ;
        } catch (i) {
          if (!(i instanceof K2.DataViewIndexOutOfBoundsError))
            throw i;
        }
        this.totalPos += this.pos;
      }
    }
    doDecodeSync() {
      e:
        for (; ; ) {
          let e = this.readHeadByte(), t;
          if (e >= 224)
            t = e - 256;
          else if (e < 192)
            if (e < 128)
              t = e;
            else if (e < 144) {
              let n = e - 128;
              if (n !== 0) {
                this.pushMapState(n), this.complete();
                continue e;
              } else
                t = {};
            } else if (e < 160) {
              let n = e - 144;
              if (n !== 0) {
                this.pushArrayState(n), this.complete();
                continue e;
              } else
                t = [];
            } else {
              let n = e - 160;
              t = this.decodeUtf8String(n, 0);
            }
          else if (e === 192)
            t = null;
          else if (e === 194)
            t = false;
          else if (e === 195)
            t = true;
          else if (e === 202)
            t = this.readF32();
          else if (e === 203)
            t = this.readF64();
          else if (e === 204)
            t = this.readU8();
          else if (e === 205)
            t = this.readU16();
          else if (e === 206)
            t = this.readU32();
          else if (e === 207)
            t = this.readU64();
          else if (e === 208)
            t = this.readI8();
          else if (e === 209)
            t = this.readI16();
          else if (e === 210)
            t = this.readI32();
          else if (e === 211)
            t = this.readI64();
          else if (e === 217) {
            let n = this.lookU8();
            t = this.decodeUtf8String(n, 1);
          } else if (e === 218) {
            let n = this.lookU16();
            t = this.decodeUtf8String(n, 2);
          } else if (e === 219) {
            let n = this.lookU32();
            t = this.decodeUtf8String(n, 4);
          } else if (e === 220) {
            let n = this.readU16();
            if (n !== 0) {
              this.pushArrayState(n), this.complete();
              continue e;
            } else
              t = [];
          } else if (e === 221) {
            let n = this.readU32();
            if (n !== 0) {
              this.pushArrayState(n), this.complete();
              continue e;
            } else
              t = [];
          } else if (e === 222) {
            let n = this.readU16();
            if (n !== 0) {
              this.pushMapState(n), this.complete();
              continue e;
            } else
              t = {};
          } else if (e === 223) {
            let n = this.readU32();
            if (n !== 0) {
              this.pushMapState(n), this.complete();
              continue e;
            } else
              t = {};
          } else if (e === 196) {
            let n = this.lookU8();
            t = this.decodeBinary(n, 1);
          } else if (e === 197) {
            let n = this.lookU16();
            t = this.decodeBinary(n, 2);
          } else if (e === 198) {
            let n = this.lookU32();
            t = this.decodeBinary(n, 4);
          } else if (e === 212)
            t = this.decodeExtension(1, 0);
          else if (e === 213)
            t = this.decodeExtension(2, 0);
          else if (e === 214)
            t = this.decodeExtension(4, 0);
          else if (e === 215)
            t = this.decodeExtension(8, 0);
          else if (e === 216)
            t = this.decodeExtension(16, 0);
          else if (e === 199) {
            let n = this.lookU8();
            t = this.decodeExtension(n, 1);
          } else if (e === 200) {
            let n = this.lookU16();
            t = this.decodeExtension(n, 2);
          } else if (e === 201) {
            let n = this.lookU32();
            t = this.decodeExtension(n, 4);
          } else
            throw new $2.DecodeError(`Unrecognized type byte: ${(0, Ur.prettyByte)(e)}`);
          this.complete();
          let s = this.stack;
          for (; s.length > 0; ) {
            let n = s[s.length - 1];
            if (n.type === 0)
              if (n.array[n.position] = t, n.position++, n.position === n.size)
                s.pop(), t = n.array;
              else
                continue e;
            else if (n.type === 1) {
              if (!qn(t))
                throw new $2.DecodeError("The type of key must be string or number but " + typeof t);
              if (t === "__proto__")
                throw new $2.DecodeError("The key __proto__ is not allowed");
              n.key = t, n.type = 2;
              continue e;
            } else if (n.map[n.key] = t, n.readCount++, n.readCount === n.size)
              s.pop(), t = n.map;
            else {
              n.key = null, n.type = 1;
              continue e;
            }
          }
          return t;
        }
    }
    readHeadByte() {
      return this.headByte === Xe && (this.headByte = this.readU8()), this.headByte;
    }
    complete() {
      this.headByte = Xe;
    }
    readArraySize() {
      let e = this.readHeadByte();
      switch (e) {
        case 220:
          return this.readU16();
        case 221:
          return this.readU32();
        default: {
          if (e < 160)
            return e - 144;
          throw new $2.DecodeError(`Unrecognized array type byte: ${(0, Ur.prettyByte)(e)}`);
        }
      }
    }
    pushMapState(e) {
      if (e > this.maxMapLength)
        throw new $2.DecodeError(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);
      this.stack.push({ type: 1, size: e, key: null, readCount: 0, map: {} });
    }
    pushArrayState(e) {
      if (e > this.maxArrayLength)
        throw new $2.DecodeError(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);
      this.stack.push({ type: 0, size: e, array: new Array(e), position: 0 });
    }
    decodeUtf8String(e, t) {
      var s;
      if (e > this.maxStrLength)
        throw new $2.DecodeError(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);
      if (this.bytes.byteLength < this.pos + t + e)
        throw xs;
      let n = this.pos + t, o;
      return this.stateIsMapKey() && (!((s = this.keyDecoder) === null || s === void 0) && s.canBeCached(e)) ? o = this.keyDecoder.decode(this.bytes, n, e) : e > Cr.TEXT_DECODER_THRESHOLD ? o = (0, Cr.utf8DecodeTD)(this.bytes, n, e) : o = (0, Cr.utf8DecodeJs)(this.bytes, n, e), this.pos += t + e, o;
    }
    stateIsMapKey() {
      return this.stack.length > 0 ? this.stack[this.stack.length - 1].type === 1 : false;
    }
    decodeBinary(e, t) {
      if (e > this.maxBinLength)
        throw new $2.DecodeError(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
      if (!this.hasRemaining(e + t))
        throw xs;
      let s = this.pos + t, n = this.bytes.subarray(s, s + e);
      return this.pos += t + e, n;
    }
    decodeExtension(e, t) {
      if (e > this.maxExtLength)
        throw new $2.DecodeError(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);
      let s = this.view.getInt8(this.pos + t), n = this.decodeBinary(e, t + 1);
      return this.extensionCodec.decode(n, s, this.context);
    }
    lookU8() {
      return this.view.getUint8(this.pos);
    }
    lookU16() {
      return this.view.getUint16(this.pos);
    }
    lookU32() {
      return this.view.getUint32(this.pos);
    }
    readU8() {
      let e = this.view.getUint8(this.pos);
      return this.pos++, e;
    }
    readI8() {
      let e = this.view.getInt8(this.pos);
      return this.pos++, e;
    }
    readU16() {
      let e = this.view.getUint16(this.pos);
      return this.pos += 2, e;
    }
    readI16() {
      let e = this.view.getInt16(this.pos);
      return this.pos += 2, e;
    }
    readU32() {
      let e = this.view.getUint32(this.pos);
      return this.pos += 4, e;
    }
    readI32() {
      let e = this.view.getInt32(this.pos);
      return this.pos += 4, e;
    }
    readU64() {
      let e = (0, le2.getUint64)(this.view, this.pos);
      return this.pos += 8, e;
    }
    readI64() {
      let e = (0, le2.getInt64)(this.view, this.pos);
      return this.pos += 8, e;
    }
    readF32() {
      let e = this.view.getFloat32(this.pos);
      return this.pos += 4, e;
    }
    readF64() {
      let e = this.view.getFloat64(this.pos);
      return this.pos += 8, e;
    }
  };
  K2.Decoder = Nr;
});
var Lr = S((J2) => {
  "use strict";
  Object.defineProperty(J2, "__esModule", { value: true });
  J2.decodeMulti = J2.decode = J2.defaultDecodeOptions = void 0;
  var vs = qt();
  J2.defaultDecodeOptions = {};
  function Hn(r, e = J2.defaultDecodeOptions) {
    return new vs.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decode(r);
  }
  J2.decode = Hn;
  function zn(r, e = J2.defaultDecodeOptions) {
    return new vs.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeMulti(r);
  }
  J2.decodeMulti = zn;
});
var Ps = S((te2) => {
  "use strict";
  Object.defineProperty(te2, "__esModule", { value: true });
  te2.ensureAsyncIterable = te2.asyncIterableFromStream = te2.isAsyncIterable = void 0;
  function Es(r) {
    return r[Symbol.asyncIterator] != null;
  }
  te2.isAsyncIterable = Es;
  function Xn(r) {
    if (r == null)
      throw new Error("Assertion Failure: value must not be null nor undefined");
  }
  async function* Ts(r) {
    let e = r.getReader();
    try {
      for (; ; ) {
        let { done: t, value: s } = await e.read();
        if (t)
          return;
        Xn(s), yield s;
      }
    } finally {
      e.releaseLock();
    }
  }
  te2.asyncIterableFromStream = Ts;
  function Gn(r) {
    return Es(r) ? r : Ts(r);
  }
  te2.ensureAsyncIterable = Gn;
});
var Ss = S((H2) => {
  "use strict";
  Object.defineProperty(H2, "__esModule", { value: true });
  H2.decodeStream = H2.decodeMultiStream = H2.decodeArrayStream = H2.decodeAsync = void 0;
  var Fr = qt(), qr = Ps(), Vt = Lr();
  async function $n(r, e = Vt.defaultDecodeOptions) {
    let t = (0, qr.ensureAsyncIterable)(r);
    return new Fr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeAsync(t);
  }
  H2.decodeAsync = $n;
  function Kn(r, e = Vt.defaultDecodeOptions) {
    let t = (0, qr.ensureAsyncIterable)(r);
    return new Fr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeArrayStream(t);
  }
  H2.decodeArrayStream = Kn;
  function _s(r, e = Vt.defaultDecodeOptions) {
    let t = (0, qr.ensureAsyncIterable)(r);
    return new Fr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeStream(t);
  }
  H2.decodeMultiStream = _s;
  function Qn(r, e = Vt.defaultDecodeOptions) {
    return _s(r, e);
  }
  H2.decodeStream = Qn;
});
var Ht = S((h2) => {
  "use strict";
  Object.defineProperty(h2, "__esModule", { value: true });
  h2.decodeTimestampExtension = h2.encodeTimestampExtension = h2.decodeTimestampToTimeSpec = h2.encodeTimeSpecToTimestamp = h2.encodeDateToTimeSpec = h2.EXT_TIMESTAMP = h2.ExtData = h2.ExtensionCodec = h2.Encoder = h2.DataViewIndexOutOfBoundsError = h2.DecodeError = h2.Decoder = h2.decodeStream = h2.decodeMultiStream = h2.decodeArrayStream = h2.decodeAsync = h2.decodeMulti = h2.decode = h2.encode = void 0;
  var Zn = gs();
  Object.defineProperty(h2, "encode", { enumerable: true, get: function() {
    return Zn.encode;
  } });
  var Ms = Lr();
  Object.defineProperty(h2, "decode", { enumerable: true, get: function() {
    return Ms.decode;
  } });
  Object.defineProperty(h2, "decodeMulti", { enumerable: true, get: function() {
    return Ms.decodeMulti;
  } });
  var Jt = Ss();
  Object.defineProperty(h2, "decodeAsync", { enumerable: true, get: function() {
    return Jt.decodeAsync;
  } });
  Object.defineProperty(h2, "decodeArrayStream", { enumerable: true, get: function() {
    return Jt.decodeArrayStream;
  } });
  Object.defineProperty(h2, "decodeMultiStream", { enumerable: true, get: function() {
    return Jt.decodeMultiStream;
  } });
  Object.defineProperty(h2, "decodeStream", { enumerable: true, get: function() {
    return Jt.decodeStream;
  } });
  var Ds = qt();
  Object.defineProperty(h2, "Decoder", { enumerable: true, get: function() {
    return Ds.Decoder;
  } });
  Object.defineProperty(h2, "DataViewIndexOutOfBoundsError", { enumerable: true, get: function() {
    return Ds.DataViewIndexOutOfBoundsError;
  } });
  var Yn = Ut();
  Object.defineProperty(h2, "DecodeError", { enumerable: true, get: function() {
    return Yn.DecodeError;
  } });
  var eo = Ar();
  Object.defineProperty(h2, "Encoder", { enumerable: true, get: function() {
    return eo.Encoder;
  } });
  var to = Nt();
  Object.defineProperty(h2, "ExtensionCodec", { enumerable: true, get: function() {
    return to.ExtensionCodec;
  } });
  var ro = Dr();
  Object.defineProperty(h2, "ExtData", { enumerable: true, get: function() {
    return ro.ExtData;
  } });
  var xe = kr();
  Object.defineProperty(h2, "EXT_TIMESTAMP", { enumerable: true, get: function() {
    return xe.EXT_TIMESTAMP;
  } });
  Object.defineProperty(h2, "encodeDateToTimeSpec", { enumerable: true, get: function() {
    return xe.encodeDateToTimeSpec;
  } });
  Object.defineProperty(h2, "encodeTimeSpecToTimestamp", { enumerable: true, get: function() {
    return xe.encodeTimeSpecToTimestamp;
  } });
  Object.defineProperty(h2, "decodeTimestampToTimeSpec", { enumerable: true, get: function() {
    return xe.decodeTimestampToTimeSpec;
  } });
  Object.defineProperty(h2, "encodeTimestampExtension", { enumerable: true, get: function() {
    return xe.encodeTimestampExtension;
  } });
  Object.defineProperty(h2, "decodeTimestampExtension", { enumerable: true, get: function() {
    return xe.decodeTimestampExtension;
  } });
});
var A = class extends Error {
  constructor(e) {
    super(e), this.name = this.constructor.name, Object.setPrototypeOf(this, new.target.prototype);
  }
};
var P = class extends A {
};
var m = typeof process < "u" && process.release && process.release.name === "node";
var fr;
if (globalThis.document)
  fr = (r) => new Promise((e, t) => {
    let s = document.createElement("script");
    s.src = r, s.onload = () => e(), s.onerror = t, document.head.appendChild(s);
  });
else if (globalThis.importScripts)
  fr = async (r) => {
    try {
      globalThis.importScripts(r);
    } catch (e) {
      if (e instanceof TypeError)
        await Promise.resolve().then(() => ne(N(r)));
      else
        throw e;
    }
  };
else if (m)
  fr = async (r) => {
    let e = (await Promise.resolve().then(() => ne(N("path")))).default;
    await Promise.resolve().then(() => ne(N(e.resolve(r))));
  };
else
  throw new A("Cannot determine runtime environment");
var l = {};
function Yr(r) {
  Object.keys(r).forEach((e) => l._free(r[e]));
}
var j = { null: 0, symbol: 1, pairlist: 2, closure: 3, environment: 4, promise: 5, call: 6, special: 7, builtin: 8, string: 9, logical: 10, integer: 13, double: 14, complex: 15, character: 16, dots: 17, any: 18, list: 19, expression: 20, bytecode: 21, pointer: 22, weakref: 23, raw: 24, s4: 25, new: 30, free: 31, function: 99 };
function Rr(r) {
  return !!r && typeof r == "object" && Object.keys(j).includes(r.type);
}
function Ue(r) {
  return !!r && typeof r == "object" && "re" in r && "im" in r;
}
function Ce(r) {
  return l._Rf_protect(B(r)), r;
}
function w(r, e) {
  return l._Rf_protect(B(r)), ++e.n, r;
}
function es(r) {
  let e = l._malloc(4);
  return l._R_ProtectWithIndex(B(r), e), { loc: l.getValue(e, "i32"), ptr: e };
}
function ts(r) {
  l._Rf_unprotect(1), l._free(r.ptr);
}
function rs(r, e) {
  return l._R_Reprotect(B(r), e.loc), r;
}
function T(r) {
  l._Rf_unprotect(r);
}
function mr(r, e, t) {
  l._Rf_defineVar(B(e), B(t), B(r));
}
function gr(r, e) {
  let t = {}, s = { n: 0 };
  try {
    let n = new Ne(e);
    w(n, s), t.code = l.allocateUTF8(r);
    let o = l._R_ParseEvalString(t.code, n.ptr);
    return y.wrap(o);
  } finally {
    Yr(t), T(s.n);
  }
}
function je(r, e) {
  return l.getWasmTableEntry(l.GOT.ffi_safe_eval.value)(B(r), B(e));
}
var ln = /* @__PURE__ */ new WeakMap();
function ss(r, e) {
  return ln.set(r, e), r;
}
function B(r) {
  return Tt(r) ? r.ptr : r;
}
function ie(r, e) {
  if (l._TYPEOF(r.ptr) !== j[e])
    throw new Error(`Unexpected object type "${r.type()}" when expecting type "${e}"`);
}
function ns(r) {
  if (Rr(r))
    return new (os(r.type))(r);
  if (r && typeof r == "object" && "type" in r && r.type === "null")
    return new Et();
  if (r === null)
    return new Z({ type: "logical", names: null, values: [null] });
  if (typeof r == "boolean")
    return new Z(r);
  if (typeof r == "number")
    return new ye(r);
  if (typeof r == "string")
    return new L(r);
  if (Ue(r))
    return new Be(r);
  if (ArrayBuffer.isView(r) || r instanceof ArrayBuffer)
    return new Le(r);
  if (Array.isArray(r))
    return pn(r);
  if (typeof r == "object")
    return Y.fromObject(r);
  throw new Error("Robj construction for this JS object is not yet supported");
}
function pn(r) {
  let e = { n: 0 };
  if (r.every((s) => s && typeof s == "object" && !Tt(s) && !Ue(s))) {
    let s = r, n = s.every((i) => Object.keys(i).filter((c2) => !Object.keys(s[0]).includes(c2)).length === 0 && Object.keys(s[0]).filter((c2) => !Object.keys(i).includes(c2)).length === 0), o = s.every((i) => Object.values(i).every((c2) => is(c2) || as(c2)));
    if (n && o)
      return Y.fromD3(s);
  }
  if (r.every((s) => typeof s == "boolean" || s === null))
    return new Z(r);
  if (r.every((s) => typeof s == "number" || s === null))
    return new ye(r);
  if (r.every((s) => typeof s == "string" || s === null))
    return new L(r);
  try {
    let s = new F([new I("c"), ...r]);
    return w(s, e), s.eval();
  } finally {
    T(e.n);
  }
}
var x = class {
  constructor(e) {
    this.ptr = e;
  }
  type() {
    let e = l._TYPEOF(this.ptr);
    return Object.keys(j).find((s) => j[s] === e);
  }
};
var fe;
var xt;
var oe = class extends x {
  constructor(t) {
    if (!(t instanceof x))
      return ns(t);
    super(t.ptr);
    u(this, fe);
  }
  static wrap(t) {
    let s = l._TYPEOF(t), n = Object.keys(j)[Object.values(j).indexOf(s)];
    return new (os(n))(new x(t));
  }
  get [Symbol.toStringTag]() {
    return `RObject:${this.type()}`;
  }
  static getPersistentObject(t) {
    return M[t];
  }
  getPropertyValue(t) {
    return this[t];
  }
  inspect() {
    gr(".Internal(inspect(x))", { x: this });
  }
  isNull() {
    return l._TYPEOF(this.ptr) === j.null;
  }
  isNa() {
    try {
      let t = gr("is.na(x)", { x: this });
      return Ce(t), t.toBoolean();
    } finally {
      T(1);
    }
  }
  isUnbound() {
    return this.ptr === M.unboundValue.ptr;
  }
  attrs() {
    return ae.wrap(l._ATTRIB(this.ptr));
  }
  class() {
    let t = { n: 0 }, s = new F([new I("class"), this]);
    w(s, t);
    try {
      return s.eval();
    } finally {
      T(t.n);
    }
  }
  setNames(t) {
    let s;
    if (t === null)
      s = M.null;
    else if (Array.isArray(t) && t.every((n) => typeof n == "string" || n === null))
      s = new L(t);
    else
      throw new Error("Argument to setNames must be null or an Array of strings or null");
    return l._Rf_setAttrib(this.ptr, M.namesSymbol.ptr, s.ptr), this;
  }
  names() {
    let t = L.wrap(l._Rf_getAttrib(this.ptr, M.namesSymbol.ptr));
    return t.isNull() ? null : t.toArray();
  }
  includes(t) {
    let s = this.names();
    return s && s.includes(t);
  }
  toJs(t = { depth: 0 }, s = 1) {
    throw new Error("This R object cannot be converted to JS");
  }
  subset(t) {
    return E(this, fe, xt).call(this, t, M.bracketSymbol.ptr);
  }
  get(t) {
    return E(this, fe, xt).call(this, t, M.bracket2Symbol.ptr);
  }
  getDollar(t) {
    return E(this, fe, xt).call(this, t, M.dollarSymbol.ptr);
  }
  pluck(...t) {
    let s = es(M.null);
    try {
      let n = (i, c2) => {
        let p2 = i.get(c2);
        return rs(p2, s);
      }, o = t.reduce(n, this);
      return o.isNull() ? void 0 : o;
    } finally {
      ts(s);
    }
  }
  set(t, s) {
    let n = { n: 0 };
    try {
      let o = new oe(t);
      w(o, n);
      let i = new oe(s);
      w(i, n);
      let c2 = new I("[[<-"), p2 = l._Rf_lang4(c2.ptr, this.ptr, o.ptr, i.ptr);
      return w(p2, n), oe.wrap(je(p2, M.baseEnv));
    } finally {
      T(n.n);
    }
  }
  static getMethods(t) {
    let s = /* @__PURE__ */ new Set(), n = t;
    do
      Object.getOwnPropertyNames(n).map((o) => s.add(o));
    while (n = Object.getPrototypeOf(n));
    return [...s.keys()].filter((o) => typeof t[o] == "function");
  }
};
var y = oe;
fe = /* @__PURE__ */ new WeakSet(), xt = function(t, s) {
  let n = { n: 0 };
  try {
    let o = new oe(t);
    w(o, n);
    let i = l._Rf_lang3(s, this.ptr, o.ptr);
    return w(i, n), oe.wrap(je(i, M.baseEnv));
  } finally {
    T(n.n);
  }
};
var Et = class extends y {
  constructor() {
    return super(new x(l.getValue(l._R_NilValue, "*"))), this;
  }
  toJs() {
    return { type: "null" };
  }
};
var I = class extends y {
  constructor(e) {
    if (e instanceof x) {
      ie(e, "symbol"), super(e);
      return;
    }
    let t = l.allocateUTF8(e);
    try {
      super(new x(l._Rf_install(t)));
    } finally {
      l._free(t);
    }
  }
  toJs() {
    let e = this.toObject();
    return { type: "symbol", printname: e.printname, symvalue: e.symvalue, internal: e.internal };
  }
  toObject() {
    return { printname: this.printname().isUnbound() ? null : this.printname().toString(), symvalue: this.symvalue().isUnbound() ? null : this.symvalue().ptr, internal: this.internal().isNull() ? null : this.internal().ptr };
  }
  toString() {
    return this.printname().toString();
  }
  printname() {
    return qe.wrap(l._PRINTNAME(this.ptr));
  }
  symvalue() {
    return y.wrap(l._SYMVALUE(this.ptr));
  }
  internal() {
    return y.wrap(l._INTERNAL(this.ptr));
  }
};
var ae = class extends y {
  constructor(e) {
    if (e instanceof x)
      return ie(e, "pairlist"), super(e), this;
    let t = { n: 0 };
    try {
      let { names: s, values: n } = Re(e), o = ae.wrap(l._Rf_allocList(n.length));
      w(o, t);
      for (let [i, c2] = [0, o]; !c2.isNull(); [i, c2] = [i + 1, c2.cdr()])
        c2.setcar(new y(n[i]));
      o.setNames(s), super(o);
    } finally {
      T(t.n);
    }
  }
  get length() {
    return this.toArray().length;
  }
  toArray(e = { depth: 1 }) {
    return this.toJs(e).values;
  }
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false, depth: s = -1 } = {}) {
    let n = this.entries({ depth: s }), o = n.map(([i]) => i);
    if (!e && new Set(o).size !== o.length)
      throw new Error("Duplicate key when converting pairlist without allowDuplicateKey enabled");
    if (!t && o.some((i) => !i))
      throw new Error("Empty or null key when converting pairlist without allowEmptyKey enabled");
    return Object.fromEntries(n.filter((i, c2) => n.findIndex((p2) => p2[0] === i[0]) === c2));
  }
  entries(e = { depth: 1 }) {
    let t = this.toJs(e);
    return t.values.map((s, n) => [t.names ? t.names[n] : null, s]);
  }
  toJs(e = { depth: 0 }, t = 1) {
    let s = [], n = false, o = [];
    for (let c2 = this; !c2.isNull(); c2 = c2.cdr()) {
      let p2 = c2.tag();
      p2.isNull() ? s.push("") : (n = true, s.push(p2.toString())), e.depth && t >= e.depth ? o.push(c2.car()) : o.push(c2.car().toJs(e, t + 1));
    }
    return { type: "pairlist", names: n ? s : null, values: o };
  }
  includes(e) {
    return e in this.toObject();
  }
  setcar(e) {
    l._SETCAR(this.ptr, e.ptr);
  }
  car() {
    return y.wrap(l._CAR(this.ptr));
  }
  cdr() {
    return y.wrap(l._CDR(this.ptr));
  }
  tag() {
    return y.wrap(l._TAG(this.ptr));
  }
};
var F = class extends y {
  constructor(e) {
    if (e instanceof x)
      return ie(e, "call"), super(e), this;
    let t = { n: 0 };
    try {
      let { values: s } = Re(e), n = s.map((i) => w(new y(i), t)), o = F.wrap(l._Rf_allocVector(j.call, s.length));
      w(o, t);
      for (let [i, c2] = [0, o]; !c2.isNull(); [i, c2] = [i + 1, c2.cdr()])
        c2.setcar(n[i]);
      super(o);
    } finally {
      T(t.n);
    }
  }
  setcar(e) {
    l._SETCAR(this.ptr, e.ptr);
  }
  car() {
    return y.wrap(l._CAR(this.ptr));
  }
  cdr() {
    return y.wrap(l._CDR(this.ptr));
  }
  eval() {
    return l.webr.evalR(this, { env: M.baseEnv });
  }
  capture(e = {}) {
    return l.webr.captureR(this, e);
  }
  deparse() {
    let e = { n: 0 };
    try {
      let t = l._Rf_lang2(new I("deparse1").ptr, l._Rf_lang2(new I("quote").ptr, this.ptr));
      w(t, e);
      let s = L.wrap(je(t, M.baseEnv));
      return w(s, e), s.toString();
    } finally {
      T(e.n);
    }
  }
};
var Fe = class extends y {
  constructor(e, t = null) {
    if (e instanceof x) {
      if (ie(e, "list"), super(e), t) {
        if (t.length !== this.length)
          throw new Error("Can't construct named `RList`. Supplied `names` must be the same length as the list.");
        this.setNames(t);
      }
      return this;
    }
    let s = { n: 0 };
    try {
      let n = Re(e), o = l._Rf_allocVector(j.list, n.values.length);
      w(o, s), n.values.forEach((c2, p2) => {
        l._SET_VECTOR_ELT(o, p2, new y(c2).ptr);
      });
      let i = t || n.names;
      if (i && i.length !== n.values.length)
        throw new Error("Can't construct named `RList`. Supplied `names` must be the same length as the list.");
      y.wrap(o).setNames(i), super(new x(o));
    } finally {
      T(s.n);
    }
  }
  get length() {
    return l._LENGTH(this.ptr);
  }
  isDataFrame() {
    let e = ae.wrap(l._ATTRIB(this.ptr)).get("class");
    return !e.isNull() && e.toArray().includes("data.frame");
  }
  toArray(e = { depth: 1 }) {
    return this.toJs(e).values;
  }
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false, depth: s = -1 } = {}) {
    let n = this.entries({ depth: s }), o = n.map(([i]) => i);
    if (!e && new Set(o).size !== o.length)
      throw new Error("Duplicate key when converting list without allowDuplicateKey enabled");
    if (!t && o.some((i) => !i))
      throw new Error("Empty or null key when converting list without allowEmptyKey enabled");
    return Object.fromEntries(n.filter((i, c2) => n.findIndex((p2) => p2[0] === i[0]) === c2));
  }
  toD3() {
    if (!this.isDataFrame())
      throw new Error("Can't convert R list object to D3 format. Object must be of class 'data.frame'.");
    return this.entries().reduce((t, s) => (s[1].forEach((n, o) => t[o] = Object.assign(t[o] || {}, { [s[0]]: n })), t), []);
  }
  entries(e = { depth: -1 }) {
    let t = this.toJs(e);
    return this.isDataFrame() && e.depth < 0 && (t.values = t.values.map((s) => s.toArray())), t.values.map((s, n) => [t.names ? t.names[n] : null, s]);
  }
  toJs(e = { depth: 0 }, t = 1) {
    return { type: "list", names: this.names(), values: [...Array(this.length).keys()].map((s) => e.depth && t >= e.depth ? this.get(s + 1) : this.get(s + 1).toJs(e, t + 1)) };
  }
};
var Y = class extends Fe {
  constructor(e) {
    if (e instanceof x) {
      if (super(e), !this.isDataFrame())
        throw new Error("Can't construct `RDataFrame`. Supplied R object is not a `data.frame`.");
      return this;
    }
    return Y.fromObject(e);
  }
  static fromObject(e) {
    let { names: t, values: s } = Re(e), n = { n: 0 };
    try {
      let o = !!t && t.length > 0 && t.every((c2) => c2), i = s.length > 0 && s.every((c2) => Array.isArray(c2) || ArrayBuffer.isView(c2) || c2 instanceof ArrayBuffer);
      if (o && i) {
        let c2 = s, p2 = c2.every((b2) => b2.length === c2[0].length), k2 = c2.every((b2) => is(b2[0]) || as(b2[0]));
        if (p2 && k2) {
          let b2 = new Fe({ type: "list", names: t, values: c2.map((en) => ns(en)) });
          w(b2, n);
          let C2 = new F([new I("as.data.frame"), b2]);
          return w(C2, n), new Y(C2.eval());
        }
      }
    } finally {
      T(n.n);
    }
    throw new Error("Can't construct `data.frame`. Source object is not eligible.");
  }
  static fromD3(e) {
    return this.fromObject(Object.fromEntries(Object.keys(e[0]).map((t) => [t, e.map((s) => s[t])])));
  }
};
var he = class extends y {
  exec(...e) {
    let t = { n: 0 };
    try {
      let s = new F([this, ...e]);
      return w(s, t), s.eval();
    } finally {
      T(t.n);
    }
  }
  capture(e = {}, ...t) {
    let s = { n: 0 };
    try {
      let n = new F([this, ...t]);
      return w(n, s), n.capture(e);
    } finally {
      T(s.n);
    }
  }
};
var qe = class extends y {
  constructor(e) {
    if (e instanceof x) {
      ie(e, "string"), super(e);
      return;
    }
    let t = l.allocateUTF8(e);
    try {
      super(new x(l._Rf_mkChar(t)));
    } finally {
      l._free(t);
    }
  }
  toString() {
    return l.UTF8ToString(l._R_CHAR(this.ptr));
  }
  toJs() {
    return { type: "string", value: this.toString() };
  }
};
var Ne = class extends y {
  constructor(e = {}) {
    if (e instanceof x)
      return ie(e, "environment"), super(e), this;
    let t = 0;
    try {
      let { names: s, values: n } = Re(e), o = Ce(l._R_NewEnv(M.globalEnv.ptr, 0, 0));
      ++t, n.forEach((i, c2) => {
        let p2 = s ? s[c2] : null;
        if (!p2)
          throw new Error("Can't create object in new environment with empty symbol name");
        let k2 = new I(p2), b2 = Ce(new y(i));
        try {
          mr(o, k2, b2);
        } finally {
          T(1);
        }
      }), super(new x(o));
    } finally {
      T(t);
    }
  }
  ls(e = false, t = true) {
    return L.wrap(l._R_lsInternal3(this.ptr, Number(e), Number(t))).toArray();
  }
  bind(e, t) {
    let s = new I(e), n = Ce(new y(t));
    try {
      mr(this, s, n);
    } finally {
      T(1);
    }
  }
  names() {
    return this.ls(true, true);
  }
  frame() {
    return y.wrap(l._FRAME(this.ptr));
  }
  subset(e) {
    if (typeof e == "number")
      throw new Error("Object of type environment is not subsettable");
    return this.getDollar(e);
  }
  toObject({ depth: e = -1 } = {}) {
    let t = this.names();
    return Object.fromEntries([...Array(t.length).keys()].map((s) => {
      let n = this.getDollar(t[s]);
      return [t[s], e < 0 ? n : n.toJs({ depth: e })];
    }));
  }
  toJs(e = { depth: 0 }, t = 1) {
    let s = this.names(), n = [...Array(s.length).keys()].map((o) => e.depth && t >= e.depth ? this.getDollar(s[o]) : this.getDollar(s[o]).toJs(e, t + 1));
    return { type: "environment", names: s, values: n };
  }
};
var ee = class extends y {
  constructor(e, t, s) {
    if (e instanceof x)
      return ie(e, t), super(e), this;
    let n = { n: 0 };
    try {
      let { names: o, values: i } = Re(e), c2 = l._Rf_allocVector(j[t], i.length);
      w(c2, n), i.forEach(s(c2)), y.wrap(c2).setNames(o), super(new x(c2));
    } finally {
      T(n.n);
    }
  }
  get length() {
    return l._LENGTH(this.ptr);
  }
  get(e) {
    return super.get(e);
  }
  subset(e) {
    return super.subset(e);
  }
  getDollar() {
    throw new Error("$ operator is invalid for atomic vectors");
  }
  detectMissing() {
    let e = { n: 0 };
    try {
      let t = l._Rf_lang2(new I("is.na").ptr, this.ptr);
      w(t, e);
      let s = Z.wrap(je(t, M.baseEnv));
      w(s, e);
      let n = s.toTypedArray();
      return Array.from(n).map((o) => !!o);
    } finally {
      T(e.n);
    }
  }
  toArray() {
    let e = this.toTypedArray();
    return this.detectMissing().map((t, s) => t ? null : e[s]);
  }
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false } = {}) {
    let s = this.entries(), n = s.map(([o]) => o);
    if (!e && new Set(n).size !== n.length)
      throw new Error("Duplicate key when converting atomic vector without allowDuplicateKey enabled");
    if (!t && n.some((o) => !o))
      throw new Error("Empty or null key when converting atomic vector without allowEmptyKey enabled");
    return Object.fromEntries(s.filter((o, i) => s.findIndex((c2) => c2[0] === o[0]) === i));
  }
  entries() {
    let e = this.toArray(), t = this.names();
    return e.map((s, n) => [t ? t[n] : null, s]);
  }
  toJs() {
    return { type: this.type(), names: this.names(), values: this.toArray() };
  }
};
var Pt;
var br = class extends ee {
  constructor(e) {
    super(e, "logical", a(br, Pt));
  }
  getBoolean(e) {
    return this.get(e).toArray()[0];
  }
  toBoolean() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getBoolean(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS boolean");
    return e;
  }
  toTypedArray() {
    return new Int32Array(l.HEAP32.subarray(l._LOGICAL(this.ptr) / 4, l._LOGICAL(this.ptr) / 4 + this.length));
  }
  toArray() {
    let e = this.toTypedArray();
    return this.detectMissing().map((t, s) => t ? null : !!e[s]);
  }
};
var Z = br;
Pt = /* @__PURE__ */ new WeakMap(), u(Z, Pt, (e) => {
  let t = l._LOGICAL(e), s = l.getValue(l._R_NaInt, "i32");
  return (n, o) => {
    l.setValue(t + 4 * o, n === null ? s : !!n, "i32");
  };
});
var _t;
var wr = class extends ee {
  constructor(e) {
    super(e, "integer", a(wr, _t));
  }
  getNumber(e) {
    return this.get(e).toArray()[0];
  }
  toNumber() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getNumber(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS number");
    return e;
  }
  toTypedArray() {
    return new Int32Array(l.HEAP32.subarray(l._INTEGER(this.ptr) / 4, l._INTEGER(this.ptr) / 4 + this.length));
  }
};
var vt = wr;
_t = /* @__PURE__ */ new WeakMap(), u(vt, _t, (e) => {
  let t = l._INTEGER(e), s = l.getValue(l._R_NaInt, "i32");
  return (n, o) => {
    l.setValue(t + 4 * o, n === null ? s : Math.round(Number(n)), "i32");
  };
});
var St;
var xr = class extends ee {
  constructor(e) {
    super(e, "double", a(xr, St));
  }
  getNumber(e) {
    return this.get(e).toArray()[0];
  }
  toNumber() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getNumber(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS number");
    return e;
  }
  toTypedArray() {
    return new Float64Array(l.HEAPF64.subarray(l._REAL(this.ptr) / 8, l._REAL(this.ptr) / 8 + this.length));
  }
};
var ye = xr;
St = /* @__PURE__ */ new WeakMap(), u(ye, St, (e) => {
  let t = l._REAL(e), s = l.getValue(l._R_NaReal, "double");
  return (n, o) => {
    l.setValue(t + 8 * o, n === null ? s : n, "double");
  };
});
var Mt;
var vr = class extends ee {
  constructor(e) {
    super(e, "complex", a(vr, Mt));
  }
  getComplex(e) {
    return this.get(e).toArray()[0];
  }
  toComplex() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getComplex(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS object");
    return e;
  }
  toTypedArray() {
    return new Float64Array(l.HEAPF64.subarray(l._COMPLEX(this.ptr) / 8, l._COMPLEX(this.ptr) / 8 + 2 * this.length));
  }
  toArray() {
    let e = this.toTypedArray();
    return this.detectMissing().map((t, s) => t ? null : { re: e[2 * s], im: e[2 * s + 1] });
  }
};
var Be = vr;
Mt = /* @__PURE__ */ new WeakMap(), u(Be, Mt, (e) => {
  let t = l._COMPLEX(e), s = l.getValue(l._R_NaReal, "double");
  return (n, o) => {
    l.setValue(t + 8 * (2 * o), n === null ? s : n.re, "double"), l.setValue(t + 8 * (2 * o + 1), n === null ? s : n.im, "double");
  };
});
var Dt;
var Er = class extends ee {
  constructor(e) {
    super(e, "character", a(Er, Dt));
  }
  getString(e) {
    return this.get(e).toArray()[0];
  }
  toString() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getString(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS string");
    return e;
  }
  toTypedArray() {
    return new Uint32Array(l.HEAPU32.subarray(l._STRING_PTR(this.ptr) / 4, l._STRING_PTR(this.ptr) / 4 + this.length));
  }
  toArray() {
    return this.detectMissing().map((e, t) => e ? null : l.UTF8ToString(l._R_CHAR(l._STRING_ELT(this.ptr, t))));
  }
};
var L = Er;
Dt = /* @__PURE__ */ new WeakMap(), u(L, Dt, (e) => (t, s) => {
  t === null ? l._SET_STRING_ELT(e, s, M.naString.ptr) : l._SET_STRING_ELT(e, s, new qe(t).ptr);
});
var kt;
var Tr = class extends ee {
  constructor(e) {
    e instanceof ArrayBuffer && (e = new Uint8Array(e)), super(e, "raw", a(Tr, kt));
  }
  getNumber(e) {
    return this.get(e).toArray()[0];
  }
  toNumber() {
    if (this.length !== 1)
      throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getNumber(1);
    if (e === null)
      throw new Error("Can't convert missing value `NA` to a JS number");
    return e;
  }
  toTypedArray() {
    return new Uint8Array(l.HEAPU8.subarray(l._RAW(this.ptr), l._RAW(this.ptr) + this.length));
  }
};
var Le = Tr;
kt = /* @__PURE__ */ new WeakMap(), u(Le, kt, (e) => {
  let t = l._RAW(e);
  return (s, n) => {
    l.setValue(t + n, Number(s), "i8");
  };
});
function Re(r) {
  return Rr(r) ? r : Array.isArray(r) || ArrayBuffer.isView(r) ? { names: null, values: r } : r && typeof r == "object" && !Ue(r) ? { names: Object.keys(r), values: Object.values(r) } : { names: null, values: [r] };
}
function os(r) {
  let e = { object: y, null: Et, symbol: I, pairlist: ae, closure: he, environment: Ne, call: F, special: he, builtin: he, string: qe, logical: Z, integer: vt, double: ye, complex: Be, character: L, list: Fe, raw: Le, function: he, dataframe: Y };
  return r in e ? e[r] : y;
}
function Tt(r) {
  return r instanceof y;
}
function as(r) {
  let e = ["logical", "integer", "double", "complex", "character"];
  return Tt(r) && e.includes(r.type()) || Tt(r) && r.isNa();
}
function is(r) {
  return r === null || typeof r == "number" || typeof r == "boolean" || typeof r == "string" || Ue(r);
}
var M;
var Os = ne(Ht());
var so = new TextEncoder();
var z;
var X;
var Ge;
var Vr;
z = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakSet(), Vr = function() {
  a(this, z).push(new Promise((e) => {
    a(this, X).push(e);
  }));
};
function $e(r, e, t) {
  return As({ type: "response", data: { uuid: r, resp: e } }, t);
}
function As(r, e) {
  return e && ss(r, e), r;
}
var Te;
Te = /* @__PURE__ */ new WeakMap();
var js = ne(Ht());
var io = new TextDecoder("utf-8");
var Pe;
var _e;
var Ke;
var Qe;
var Se;
Pe = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap();
var Hr = new Int32Array(new ArrayBuffer(4));
m && (globalThis.Worker = N("worker_threads").Worker);
var Me;
var Qt;
var Fs;
var Ye;
Me = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakSet(), Fs = function(t) {
  m ? t.on("message", (s) => {
    a(this, Ye).call(this, t, s);
  }) : t.onmessage = (s) => a(this, Ye).call(this, t, s.data);
}, Ye = /* @__PURE__ */ new WeakMap();
var ce;
var et;
var ue;
var tt;
ce = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap();
var rr = ne(Ht());
m && (globalThis.Worker = N("worker_threads").Worker);
var De;
var pe;
var ke;
var Yt;
var qs;
var er;
var Vs;
var tr;
var Js;
var rt;
De = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakSet(), qs = async function(t) {
  d(this, pe, await navigator.serviceWorker.register(t)), await navigator.serviceWorker.ready, window.addEventListener("beforeunload", () => {
    var n;
    (n = a(this, pe)) == null || n.unregister();
  });
  let s = await new Promise((n) => {
    navigator.serviceWorker.addEventListener("message", function o(i) {
      i.data.type === "registration-successful" && (navigator.serviceWorker.removeEventListener("message", o), n(i.data.clientId));
    }), this.activeRegistration().postMessage({ type: "register-client-main" });
  });
  return navigator.serviceWorker.addEventListener("message", (n) => {
    E(this, er, Vs).call(this, n);
  }), s;
}, er = /* @__PURE__ */ new WeakSet(), Vs = async function(t) {
  if (t.data.type === "request") {
    let s = t.data.data, n = a(this, De).get(s);
    if (!n)
      throw new P("Request not found during service worker XHR request");
    switch (a(this, De).delete(s), n.type) {
      case "read": {
        let o = await this.inputQueue.get();
        this.activeRegistration().postMessage({ type: "wasm-webr-fetch-response", uuid: s, response: $e(s, o) });
        break;
      }
      case "interrupt": {
        let o = a(this, ke);
        this.activeRegistration().postMessage({ type: "wasm-webr-fetch-response", uuid: s, response: $e(s, o) }), this.inputQueue.reset(), d(this, ke, false);
        break;
      }
      default:
        throw new P(`Unsupported request type '${n.type}'.`);
    }
    return;
  }
}, tr = /* @__PURE__ */ new WeakSet(), Js = function(t) {
  m ? t.on("message", (s) => {
    a(this, rt).call(this, t, s);
  }) : t.onmessage = (s) => a(this, rt).call(this, t, s.data);
}, rt = /* @__PURE__ */ new WeakMap();
var Oe;
var st;
var nt;
var ot;
var at;
var it;
Oe = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap();
m && (globalThis.Worker = N("worker_threads").Worker);
var We;
var sr;
var Hs;
var ct;
We = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakSet(), Hs = function(t) {
  m ? t.on("message", (s) => {
    a(this, ct).call(this, t, s);
  }) : t.onmessage = (s) => a(this, ct).call(this, t, s.data);
}, ct = /* @__PURE__ */ new WeakMap();
var Ae;
var Ie;
var ut;
var de;
var nr;
Ae = /* @__PURE__ */ new WeakMap(), Ie = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap();
var W = { Automatic: 0, SharedArrayBuffer: 1, ServiceWorker: 2, PostMessage: 3 };
var Xs = m ? __dirname + "/" : "https://webr.r-wasm.org/v0.4.0/";
var Gs = "https://repo.r-wasm.org";
var $r = "0.4.0";
var pt;
var dt;
var ht;
var yt;
var ft;
var or;
var ar;
var ir;
var lr;
var cr;
var ur;
var Qs;
pt = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakSet(), Qs = async function() {
  for (; ; ) {
    let e = await this.webR.read();
    switch (e.type) {
      case "stdout":
        a(this, pt).call(this, e.data);
        break;
      case "stderr":
        a(this, dt).call(this, e.data);
        break;
      case "prompt":
        a(this, ht).call(this, e.data);
        break;
      case "canvas":
        e.data.event === "canvasImage" ? a(this, yt).call(this, e.data.image) : e.data.event === "canvasNewPage" && a(this, ft).call(this);
        break;
      case "closed":
        return;
      default:
        console.warn(`Unhandled output type for webR Console: ${e.type}.`);
    }
  }
};
var ho = { FONTCONFIG_PATH: "/etc/fonts", R_HOME: "/usr/lib/R", R_ENABLE_JIT: "0", WEBR: "1", WEBR_VERSION: $r };
var Zs = { RArgs: [], REnv: ho, baseUrl: Xs, serviceWorkerUrl: "", repoUrl: Gs, homedir: "/home/web_user", interactive: true, channelType: W.Automatic, createLazyFilesystem: true };
var R;
var Rt;
var hr;
var Ys;
R = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakSet(), Ys = async function() {
  for (; ; ) {
    let e = await a(this, R).readSystem();
    switch (e.type) {
      case "setTimeoutWasm":
        setTimeout((t, s) => {
          this.invokeWasmFunction(t, ...s);
        }, e.data.delay, e.data.ptr, e.data.args);
        break;
      case "console.log":
        console.log(e.data);
        break;
      case "console.warn":
        console.warn(e.data);
        break;
      case "console.error":
        console.error(e.data);
        break;
      default:
        throw new A("Unknown system message type `" + e.type + "`");
    }
  }
};
var g;
var f;
var mt;
g = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap();

// src/messageporthttp.ts
async function makeRequest(scope, appName, clientPort, pyodide2) {
  const asgiFunc = pyodide2.runPython(
    `_shiny_app_registry["${appName}"].app.call_pyodide`
  );
  await connect(scope, clientPort, asgiFunc);
}
async function connect(scope, clientPort, asgiFunc) {
  const fromClientQueue = new AwaitableQueue();
  clientPort.addEventListener("message", (event) => {
    if (event.data.type === "http.request") {
      fromClientQueue.enqueue({
        type: "http.request",
        body: event.data.body,
        more_body: event.data.more_body
      });
    }
  });
  clientPort.start();
  async function fromClient() {
    return fromClientQueue.dequeue();
  }
  async function toClient(event) {
    event = Object.fromEntries(event.toJs());
    if (event.type === "http.response.start") {
      clientPort.postMessage({
        type: event.type,
        status: event.status,
        headers: asgiHeadersToRecord(event.headers)
      });
    } else if (event.type === "http.response.body") {
      clientPort.postMessage({
        type: event.type,
        body: asgiBodyToArray(event.body),
        more_body: event.more_body
      });
    } else {
      throw new Error(`Unhandled ASGI event: ${event.type}`);
    }
  }
  await asgiFunc(scope, fromClient, toClient);
}
function asgiHeadersToRecord(headers) {
  headers = headers.map(([key, val]) => {
    return [uint8ArrayToString(key), uint8ArrayToString(val)];
  });
  return Object.fromEntries(headers);
}
function asgiBodyToArray(body) {
  return body;
}

// src/messageportwebsocket.ts
var MessagePortWebSocket = class extends EventTarget {
  constructor(port) {
    super();
    this.readyState = 0;
    this.addEventListener("open", (e) => {
      if (this.onopen) {
        this.onopen(e);
      }
    });
    this.addEventListener("message", (e) => {
      if (this.onmessage) {
        this.onmessage(e);
      }
    });
    this.addEventListener("error", (e) => {
      if (this.onerror) {
        this.onerror(e);
      }
    });
    this.addEventListener("close", (e) => {
      if (this.onclose) {
        this.onclose(e);
      }
    });
    this._port = port;
    port.addEventListener("message", this._onMessage.bind(this));
    port.start();
  }
  // Call on the server side of the connection, to tell the client that
  // the connection has been established.
  accept() {
    if (this.readyState !== 0) {
      return;
    }
    this.readyState = 1;
    this._port.postMessage({ type: "open" });
  }
  send(data) {
    if (this.readyState === 0) {
      throw new DOMException(
        "Can't send messages while WebSocket is in CONNECTING state",
        "InvalidStateError"
      );
    }
    if (this.readyState > 1) {
      return;
    }
    this._port.postMessage({ type: "message", value: { data } });
  }
  close(code, reason) {
    if (this.readyState > 1) {
      return;
    }
    this.readyState = 2;
    this._port.postMessage({ type: "close", value: { code, reason } });
    this.readyState = 3;
    this.dispatchEvent(new CloseEvent("close", { code, reason }));
  }
  _onMessage(e) {
    const event = e.data;
    switch (event.type) {
      case "open":
        if (this.readyState === 0) {
          this.readyState = 1;
          this.dispatchEvent(new Event("open"));
          return;
        }
        break;
      case "message":
        if (this.readyState === 1) {
          this.dispatchEvent(new MessageEvent("message", { ...event.value }));
          return;
        }
        break;
      case "close":
        if (this.readyState < 3) {
          this.readyState = 3;
          this.dispatchEvent(new CloseEvent("close", { ...event.value }));
          return;
        }
        break;
    }
    this._reportError(
      `Unexpected event '${event.type}' while in readyState ${this.readyState}`,
      1002
    );
  }
  _reportError(message, code) {
    this.dispatchEvent(new ErrorEvent("error", { message }));
    if (typeof code === "number") {
      this.close(code, message);
    }
  }
};

// src/messageportwebsocket-channel.ts
async function openChannel(path, appName, clientPort, pyodide2) {
  const conn = new MessagePortWebSocket(clientPort);
  const asgiFunc = pyodide2.runPython(
    `_shiny_app_registry["${appName}"].app.call_pyodide`
  );
  await connect2(path, conn, asgiFunc);
}
async function connect2(path, conn, asgiFunc) {
  const scope = {
    type: "websocket",
    asgi: {
      version: "3.0",
      spec_version: "2.1"
    },
    path,
    headers: []
  };
  const fromClientQueue = new AwaitableQueue();
  fromClientQueue.enqueue({ type: "websocket.connect" });
  async function fromClient() {
    return await fromClientQueue.dequeue();
  }
  async function toClient(event) {
    event = Object.fromEntries(event.toJs());
    if (event.type === "websocket.accept") {
      conn.accept();
    } else if (event.type === "websocket.send") {
      conn.send(event.text ?? event.bytes);
    } else if (event.type === "websocket.close") {
      conn.close(event.code, event.reason);
      fromClientQueue.enqueue({ type: "websocket.disconnect" });
    } else {
      conn.close(1002, "ASGI protocol error");
      throw new Error(`Unhandled ASGI event: ${event.type}`);
    }
  }
  conn.addEventListener("message", (e) => {
    const me2 = e;
    const event = { type: "websocket.receive" };
    if (typeof me2.data === "string") {
      event.text = me2.data;
    } else {
      event.bytes = me2.data;
    }
    fromClientQueue.enqueue(event);
  });
  conn.addEventListener("close", (e) => {
    const ce3 = e;
    fromClientQueue.enqueue({ type: "websocket.disconnect", code: ce3.code });
  });
  conn.addEventListener("error", (e) => {
    console.error(e);
  });
  await asgiFunc(scope, fromClient, toClient);
}

// src/postable-error.ts
function errorToPostableErrorObject(e) {
  const errObj = {
    message: "An unknown error occured",
    name: e.name
  };
  if (!(e instanceof Error)) {
    return errObj;
  }
  errObj.message = e.message;
  if (e.stack) {
    errObj.stack = e.stack;
  }
  return errObj;
}

// src/pyodide/pyodide.js
var Q = Object.defineProperty;
var c = (e, t) => Q(e, "name", { value: t, configurable: true });
var O = ((e) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e, { get: (t, i) => (typeof __require < "u" ? __require : t)[i] }) : e)(function(e) {
  if (typeof __require < "u")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
function Z2(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
c(Z2, "_isNumber");
function E2(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
}
c(E2, "_capitalize");
function P2(e) {
  return function() {
    return this[e];
  };
}
c(P2, "_getter");
var w2 = ["isConstructor", "isEval", "isNative", "isToplevel"];
var N2 = ["columnNumber", "lineNumber"];
var _ = ["fileName", "functionName", "source"];
var ee2 = ["args"];
var te = ["evalOrigin"];
var I2 = w2.concat(N2, _, ee2, te);
function p(e) {
  if (e)
    for (var t = 0; t < I2.length; t++)
      e[I2[t]] !== void 0 && this["set" + E2(I2[t])](e[I2[t]]);
}
c(p, "StackFrame");
p.prototype = { getArgs: function() {
  return this.args;
}, setArgs: function(e) {
  if (Object.prototype.toString.call(e) !== "[object Array]")
    throw new TypeError("Args must be an Array");
  this.args = e;
}, getEvalOrigin: function() {
  return this.evalOrigin;
}, setEvalOrigin: function(e) {
  if (e instanceof p)
    this.evalOrigin = e;
  else if (e instanceof Object)
    this.evalOrigin = new p(e);
  else
    throw new TypeError("Eval Origin must be an Object or StackFrame");
}, toString: function() {
  var e = this.getFileName() || "", t = this.getLineNumber() || "", i = this.getColumnNumber() || "", r = this.getFunctionName() || "";
  return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + i + ")" : "[eval]:" + t + ":" + i : r ? r + " (" + e + ":" + t + ":" + i + ")" : e + ":" + t + ":" + i;
} };
p.fromString = c(function(t) {
  var i = t.indexOf("("), r = t.lastIndexOf(")"), a2 = t.substring(0, i), n = t.substring(i + 1, r).split(","), o = t.substring(r + 1);
  if (o.indexOf("@") === 0)
    var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o, ""), l2 = s[1], d2 = s[2], u2 = s[3];
  return new p({ functionName: a2, args: n || void 0, fileName: l2, lineNumber: d2 || void 0, columnNumber: u2 || void 0 });
}, "StackFrame$$fromString");
for (b = 0; b < w2.length; b++)
  p.prototype["get" + E2(w2[b])] = P2(w2[b]), p.prototype["set" + E2(w2[b])] = function(e) {
    return function(t) {
      this[e] = !!t;
    };
  }(w2[b]);
var b;
for (v = 0; v < N2.length; v++)
  p.prototype["get" + E2(N2[v])] = P2(N2[v]), p.prototype["set" + E2(N2[v])] = function(e) {
    return function(t) {
      if (!Z2(t))
        throw new TypeError(e + " must be a Number");
      this[e] = Number(t);
    };
  }(N2[v]);
var v;
for (h = 0; h < _.length; h++)
  p.prototype["get" + E2(_[h])] = P2(_[h]), p.prototype["set" + E2(_[h])] = function(e) {
    return function(t) {
      this[e] = String(t);
    };
  }(_[h]);
var h;
var x2 = p;
function ne2() {
  var e = /^\s*at .*(\S+:\d+|\(native\))/m, t = /^(eval@)?(\[native code])?$/;
  return { parse: c(function(r) {
    if (r.stack && r.stack.match(e))
      return this.parseV8OrIE(r);
    if (r.stack)
      return this.parseFFOrSafari(r);
    throw new Error("Cannot parse given Error object");
  }, "ErrorStackParser$$parse"), extractLocation: c(function(r) {
    if (r.indexOf(":") === -1)
      return [r];
    var a2 = /(.+?)(?::(\d+))?(?::(\d+))?$/, n = a2.exec(r.replace(/[()]/g, ""));
    return [n[1], n[2] || void 0, n[3] || void 0];
  }, "ErrorStackParser$$extractLocation"), parseV8OrIE: c(function(r) {
    var a2 = r.stack.split(`
`).filter(function(n) {
      return !!n.match(e);
    }, this);
    return a2.map(function(n) {
      n.indexOf("(eval ") > -1 && (n = n.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
      var o = n.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""), s = o.match(/ (\(.+\)$)/);
      o = s ? o.replace(s[0], "") : o;
      var l2 = this.extractLocation(s ? s[1] : o), d2 = s && o || void 0, u2 = ["eval", "<anonymous>"].indexOf(l2[0]) > -1 ? void 0 : l2[0];
      return new x2({ functionName: d2, fileName: u2, lineNumber: l2[1], columnNumber: l2[2], source: n });
    }, this);
  }, "ErrorStackParser$$parseV8OrIE"), parseFFOrSafari: c(function(r) {
    var a2 = r.stack.split(`
`).filter(function(n) {
      return !n.match(t);
    }, this);
    return a2.map(function(n) {
      if (n.indexOf(" > eval") > -1 && (n = n.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), n.indexOf("@") === -1 && n.indexOf(":") === -1)
        return new x2({ functionName: n });
      var o = /((.*".+"[^@]*)?[^@]*)(?:@)/, s = n.match(o), l2 = s && s[1] ? s[1] : void 0, d2 = this.extractLocation(n.replace(o, ""));
      return new x2({ functionName: l2, fileName: d2[0], lineNumber: d2[1], columnNumber: d2[2], source: n });
    }, this);
  }, "ErrorStackParser$$parseFFOrSafari") };
}
c(ne2, "ErrorStackParser");
var re = new ne2();
var M2 = re;
var g2 = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && !process.browser;
var A2 = g2 && typeof module < "u" && typeof module.exports < "u" && typeof O < "u" && typeof __dirname < "u";
var W2 = g2 && !A2;
var Ne2 = typeof globalThis.Bun < "u";
var oe2 = typeof Deno < "u";
var B2 = !g2 && !oe2;
var $ = B2 && typeof window == "object" && typeof document == "object" && typeof document.createElement == "function" && typeof sessionStorage == "object" && typeof importScripts != "function";
var j2 = B2 && typeof importScripts == "function" && typeof self == "object";
var _e2 = typeof navigator == "object" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Chrome") == -1 && navigator.userAgent.indexOf("Safari") > -1;
var V;
var L2;
var z2;
var H;
var D;
async function T2() {
  if (!g2 || (V = (await import("node:url")).default, H = await import("node:fs"), D = await import("node:fs/promises"), z2 = (await import("node:vm")).default, L2 = await import("node:path"), U = L2.sep, typeof O < "u"))
    return;
  let e = H, t = await import("node:crypto"), i = await Promise.resolve().then(() => __toESM(require_browser())), r = await import("node:child_process"), a2 = { fs: e, crypto: t, ws: i, child_process: r };
  globalThis.require = function(n) {
    return a2[n];
  };
}
c(T2, "initNodeModules");
function ie2(e, t) {
  return L2.resolve(t || ".", e);
}
c(ie2, "node_resolvePath");
function ae2(e, t) {
  return t === void 0 && (t = location), new URL(e, t).toString();
}
c(ae2, "browser_resolvePath");
var k;
g2 ? k = ie2 : k = ae2;
var U;
g2 || (U = "/");
function se(e, t) {
  return e.startsWith("file://") && (e = e.slice(7)), e.includes("://") ? { response: fetch(e) } : { binary: D.readFile(e).then((i) => new Uint8Array(i.buffer, i.byteOffset, i.byteLength)) };
}
c(se, "node_getBinaryResponse");
function ce2(e, t) {
  let i = new URL(e, location);
  return { response: fetch(i, t ? { integrity: t } : {}) };
}
c(ce2, "browser_getBinaryResponse");
var R2;
g2 ? R2 = se : R2 = ce2;
async function q(e, t) {
  let { response: i, binary: r } = R2(e, t);
  if (r)
    return r;
  let a2 = await i;
  if (!a2.ok)
    throw new Error(`Failed to load '${e}': request failed.`);
  return new Uint8Array(await a2.arrayBuffer());
}
c(q, "loadBinaryFile");
var F2;
if ($)
  F2 = c(async (e) => await import(e), "loadScript");
else if (j2)
  F2 = c(async (e) => {
    try {
      globalThis.importScripts(e);
    } catch (t) {
      if (t instanceof TypeError)
        await import(e);
      else
        throw t;
    }
  }, "loadScript");
else if (g2)
  F2 = le;
else
  throw new Error("Cannot determine runtime environment");
async function le(e) {
  e.startsWith("file://") && (e = e.slice(7)), e.includes("://") ? z2.runInThisContext(await (await fetch(e)).text()) : await import(V.pathToFileURL(e).href);
}
c(le, "nodeLoadScript");
async function J(e) {
  if (g2) {
    await T2();
    let t = await D.readFile(e, { encoding: "utf8" });
    return JSON.parse(t);
  } else
    return await (await fetch(e)).json();
}
c(J, "loadLockFile");
async function K() {
  if (A2)
    return __dirname;
  let e;
  try {
    throw new Error();
  } catch (r) {
    e = r;
  }
  let t = M2.parse(e)[0].fileName;
  if (g2 && !t.startsWith("file://") && (t = `file://${t}`), W2) {
    let r = await import("node:path");
    return (await import("node:url")).fileURLToPath(r.dirname(t));
  }
  let i = t.lastIndexOf(U);
  if (i === -1)
    throw new Error("Could not extract indexURL path from pyodide module location");
  return t.slice(0, i);
}
c(K, "calculateDirname");
function Y2(e) {
  let t = e.FS, i = e.FS.filesystems.MEMFS, r = e.PATH, a2 = { DIR_MODE: 16895, FILE_MODE: 33279, mount: function(n) {
    if (!n.opts.fileSystemHandle)
      throw new Error("opts.fileSystemHandle is required");
    return i.mount.apply(null, arguments);
  }, syncfs: async (n, o, s) => {
    try {
      let l2 = a2.getLocalSet(n), d2 = await a2.getRemoteSet(n), u2 = o ? d2 : l2, m2 = o ? l2 : d2;
      await a2.reconcile(n, u2, m2), s(null);
    } catch (l2) {
      s(l2);
    }
  }, getLocalSet: (n) => {
    let o = /* @__PURE__ */ Object.create(null);
    function s(u2) {
      return u2 !== "." && u2 !== "..";
    }
    c(s, "isRealDir");
    function l2(u2) {
      return (m2) => r.join2(u2, m2);
    }
    c(l2, "toAbsolute");
    let d2 = t.readdir(n.mountpoint).filter(s).map(l2(n.mountpoint));
    for (; d2.length; ) {
      let u2 = d2.pop(), m2 = t.stat(u2);
      t.isDir(m2.mode) && d2.push.apply(d2, t.readdir(u2).filter(s).map(l2(u2))), o[u2] = { timestamp: m2.mtime, mode: m2.mode };
    }
    return { type: "local", entries: o };
  }, getRemoteSet: async (n) => {
    let o = /* @__PURE__ */ Object.create(null), s = await de2(n.opts.fileSystemHandle);
    for (let [l2, d2] of s)
      l2 !== "." && (o[r.join2(n.mountpoint, l2)] = { timestamp: d2.kind === "file" ? (await d2.getFile()).lastModifiedDate : /* @__PURE__ */ new Date(), mode: d2.kind === "file" ? a2.FILE_MODE : a2.DIR_MODE });
    return { type: "remote", entries: o, handles: s };
  }, loadLocalEntry: (n) => {
    let s = t.lookupPath(n).node, l2 = t.stat(n);
    if (t.isDir(l2.mode))
      return { timestamp: l2.mtime, mode: l2.mode };
    if (t.isFile(l2.mode))
      return s.contents = i.getFileDataAsTypedArray(s), { timestamp: l2.mtime, mode: l2.mode, contents: s.contents };
    throw new Error("node type not supported");
  }, storeLocalEntry: (n, o) => {
    if (t.isDir(o.mode))
      t.mkdirTree(n, o.mode);
    else if (t.isFile(o.mode))
      t.writeFile(n, o.contents, { canOwn: true });
    else
      throw new Error("node type not supported");
    t.chmod(n, o.mode), t.utime(n, o.timestamp, o.timestamp);
  }, removeLocalEntry: (n) => {
    var o = t.stat(n);
    t.isDir(o.mode) ? t.rmdir(n) : t.isFile(o.mode) && t.unlink(n);
  }, loadRemoteEntry: async (n) => {
    if (n.kind === "file") {
      let o = await n.getFile();
      return { contents: new Uint8Array(await o.arrayBuffer()), mode: a2.FILE_MODE, timestamp: o.lastModifiedDate };
    } else {
      if (n.kind === "directory")
        return { mode: a2.DIR_MODE, timestamp: /* @__PURE__ */ new Date() };
      throw new Error("unknown kind: " + n.kind);
    }
  }, storeRemoteEntry: async (n, o, s) => {
    let l2 = n.get(r.dirname(o)), d2 = t.isFile(s.mode) ? await l2.getFileHandle(r.basename(o), { create: true }) : await l2.getDirectoryHandle(r.basename(o), { create: true });
    if (d2.kind === "file") {
      let u2 = await d2.createWritable();
      await u2.write(s.contents), await u2.close();
    }
    n.set(o, d2);
  }, removeRemoteEntry: async (n, o) => {
    await n.get(r.dirname(o)).removeEntry(r.basename(o)), n.delete(o);
  }, reconcile: async (n, o, s) => {
    let l2 = 0, d2 = [];
    Object.keys(o.entries).forEach(function(f2) {
      let y2 = o.entries[f2], S2 = s.entries[f2];
      (!S2 || t.isFile(y2.mode) && y2.timestamp.getTime() > S2.timestamp.getTime()) && (d2.push(f2), l2++);
    }), d2.sort();
    let u2 = [];
    if (Object.keys(s.entries).forEach(function(f2) {
      o.entries[f2] || (u2.push(f2), l2++);
    }), u2.sort().reverse(), !l2)
      return;
    let m2 = o.type === "remote" ? o.handles : s.handles;
    for (let f2 of d2) {
      let y2 = r.normalize(f2.replace(n.mountpoint, "/")).substring(1);
      if (s.type === "local") {
        let S2 = m2.get(y2), X2 = await a2.loadRemoteEntry(S2);
        a2.storeLocalEntry(f2, X2);
      } else {
        let S2 = a2.loadLocalEntry(f2);
        await a2.storeRemoteEntry(m2, y2, S2);
      }
    }
    for (let f2 of u2)
      if (s.type === "local")
        a2.removeLocalEntry(f2);
      else {
        let y2 = r.normalize(f2.replace(n.mountpoint, "/")).substring(1);
        await a2.removeRemoteEntry(m2, y2);
      }
  } };
  e.FS.filesystems.NATIVEFS_ASYNC = a2;
}
c(Y2, "initializeNativeFS");
var de2 = c(async (e) => {
  let t = [];
  async function i(a2) {
    for await (let n of a2.values())
      t.push(n), n.kind === "directory" && await i(n);
  }
  c(i, "collect"), await i(e);
  let r = /* @__PURE__ */ new Map();
  r.set(".", e);
  for (let a2 of t) {
    let n = (await e.resolve(a2)).join("/");
    r.set(n, a2);
  }
  return r;
}, "getFsHandles");
function G(e) {
  let t = { noImageDecoding: true, noAudioDecoding: true, noWasmDecoding: false, preRun: ge(e), quit(i, r) {
    throw t.exited = { status: i, toThrow: r }, r;
  }, print: e.stdout, printErr: e.stderr, arguments: e.args, API: { config: e }, locateFile: (i) => e.indexURL + i, instantiateWasm: ye2(e.indexURL) };
  return t;
}
c(G, "createSettings");
function ue2(e) {
  return function(t) {
    let i = "/";
    try {
      t.FS.mkdirTree(e);
    } catch (r) {
      console.error(`Error occurred while making a home directory '${e}':`), console.error(r), console.error(`Using '${i}' for a home directory instead`), e = i;
    }
    t.FS.chdir(e);
  };
}
c(ue2, "createHomeDirectory");
function fe2(e) {
  return function(t) {
    Object.assign(t.ENV, e);
  };
}
c(fe2, "setEnvironment");
function me(e) {
  return (t) => {
    for (let i of e)
      t.FS.mkdirTree(i), t.FS.mount(t.FS.filesystems.NODEFS, { root: i }, i);
  };
}
c(me, "mountLocalDirectories");
function pe2(e) {
  let t = q(e);
  return (i) => {
    let r = i._py_version_major(), a2 = i._py_version_minor();
    i.FS.mkdirTree("/lib"), i.FS.mkdirTree(`/lib/python${r}.${a2}/site-packages`), i.addRunDependency("install-stdlib"), t.then((n) => {
      i.FS.writeFile(`/lib/python${r}${a2}.zip`, n);
    }).catch((n) => {
      console.error("Error occurred while installing the standard library:"), console.error(n);
    }).finally(() => {
      i.removeRunDependency("install-stdlib");
    });
  };
}
c(pe2, "installStdlib");
function ge(e) {
  let t;
  return e.stdLibURL != null ? t = e.stdLibURL : t = e.indexURL + "python_stdlib.zip", [pe2(t), ue2(e.env.HOME), fe2(e.env), me(e._node_mounts), Y2];
}
c(ge, "getFileSystemInitializationFuncs");
function ye2(e) {
  let { binary: t, response: i } = R2(e + "pyodide.asm.wasm");
  return function(r, a2) {
    return async function() {
      try {
        let n;
        i ? n = await WebAssembly.instantiateStreaming(i, r) : n = await WebAssembly.instantiate(await t, r);
        let { instance: o, module: s } = n;
        typeof WasmOffsetConverter < "u" && (wasmOffsetConverter = new WasmOffsetConverter(wasmBinary, s)), a2(o, s);
      } catch (n) {
        console.warn("wasm instantiation failed!"), console.warn(n);
      }
    }(), {};
  };
}
c(ye2, "getInstantiateWasmFunc");
var C = "0.26.2";
async function $e2(e = {}) {
  var u2, m2;
  await T2();
  let t = e.indexURL || await K();
  t = k(t), t.endsWith("/") || (t += "/"), e.indexURL = t;
  let i = { fullStdLib: false, jsglobals: globalThis, stdin: globalThis.prompt ? globalThis.prompt : void 0, lockFileURL: t + "pyodide-lock.json", args: [], _node_mounts: [], env: {}, packageCacheDir: t, packages: [], enableRunUntilComplete: false, checkAPIVersion: true }, r = Object.assign(i, e);
  (u2 = r.env).HOME ?? (u2.HOME = "/home/pyodide"), (m2 = r.env).PYTHONINSPECT ?? (m2.PYTHONINSPECT = "1");
  let a2 = G(r), n = a2.API;
  if (n.lockFilePromise = J(r.lockFileURL), typeof _createPyodideModule != "function") {
    let f2 = `${r.indexURL}pyodide.asm.js`;
    await F2(f2);
  }
  let o;
  if (e._loadSnapshot) {
    let f2 = await e._loadSnapshot;
    ArrayBuffer.isView(f2) ? o = f2 : o = new Uint8Array(f2), a2.noInitialRun = true, a2.INITIAL_MEMORY = o.length;
  }
  let s = await _createPyodideModule(a2);
  if (a2.exited)
    throw a2.exited.toThrow;
  if (e.pyproxyToStringRepr && n.setPyProxyToStringMethod(true), n.version !== C && r.checkAPIVersion)
    throw new Error(`Pyodide version does not match: '${C}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);
  s.locateFile = (f2) => {
    throw new Error("Didn't expect to load any more file_packager files!");
  };
  let l2;
  o && (l2 = n.restoreSnapshot(o));
  let d2 = n.finalizeBootstrap(l2);
  return n.sys.path.insert(0, n.config.env.HOME), d2.version.includes("dev") || n.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${d2.version}/full/`), n._pyodide.set_excepthook(), await n.packageIndexReady, n.initializeStreams(r.stdin, r.stdout, r.stderr), d2;
}
c($e2, "loadPyodide");

// src/pyodide-proxy.ts
async function setupPythonEnv(pyodide2, callJS2) {
  const repr = pyodide2.globals.get("repr");
  pyodide2.globals.set("js_pyodide", pyodide2);
  const pyconsole = await pyodide2.runPythonAsync(`
  import pyodide.console
  import __main__
  pyodide.console.PyodideConsole(__main__.__dict__)
  `);
  const tabComplete = pyconsole.complete.copy();
  pyconsole.destroy();
  if (callJS2) {
    pyodide2.globals.set("callJS", callJS2);
  }
  const shortFormatLastTraceback = await pyodide2.runPythonAsync(`
  def _short_format_last_traceback() -> str:
      import sys
      import traceback
      e = sys.last_value
      found_marker = False
      nframes = 0
      for (frame, _) in traceback.walk_tb(e.__traceback__):
          if frame.f_code.co_filename in ("<console>", "<exec>"):
              found_marker = True
          if found_marker:
              nframes += 1
      return "".join(traceback.format_exception(type(e), e, e.__traceback__, -nframes))

  _short_format_last_traceback
  `);
  await pyodide2.runPythonAsync(`del _short_format_last_traceback`);
  return {
    repr,
    tabComplete,
    shortFormatLastTraceback
  };
}
function processReturnValue(value, returnResult = "none", pyodide2, repr) {
  const possibleReturnValues = {
    get value() {
      if (value instanceof pyodide2.ffi.PyProxy) {
        return value.toJs();
      } else {
        return value;
      }
    },
    get printed_value() {
      return repr(value);
    },
    get to_html() {
      let toHtml;
      try {
        toHtml = pyodide2.globals.get("_to_html");
      } catch (e) {
        console.error("Couldn't find _to_html function: ", e);
        toHtml = (x3) => ({
          type: "text",
          value: "Couldn't finding _to_html function."
        });
      }
      const val = toHtml(value).toJs({
        dict_converter: Object.fromEntries
      });
      return val;
    },
    get none() {
      return void 0;
    }
  };
  return possibleReturnValues[returnResult];
}

// src/pyodide-worker.ts
var pyodideStatus = "none";
var pyodide;
self.stdout_callback = function(s) {
  self.postMessage({ type: "nonreply", subtype: "output", stdout: s });
};
self.stderr_callback = function(s) {
  self.postMessage({ type: "nonreply", subtype: "output", stderr: s });
};
async function callJS(fnName, args) {
  self.postMessage({
    type: "nonreply",
    subtype: "callJS",
    fnName: fnName.toJs(),
    args: args.toJs()
  });
}
var pyUtils;
self.onmessage = async function(e) {
  const msg = e.data;
  if (msg.type === "openChannel") {
    const clientPort = e.ports[0];
    await openChannel(msg.path, msg.appName, clientPort, pyodide);
    return;
  } else if (msg.type === "makeRequest") {
    const clientPort = e.ports[0];
    await makeRequest(msg.scope, msg.appName, clientPort, pyodide);
    return;
  }
  const messagePort = e.ports[0];
  try {
    if (msg.type === "init") {
      if (pyodideStatus === "none") {
        pyodideStatus = "loading";
        pyodide = await $e2({
          ...msg.config,
          stdout: self.stdout_callback,
          stderr: self.stderr_callback
        });
        pyUtils = await setupPythonEnv(pyodide, callJS);
        pyodideStatus = "loaded";
      }
      messagePort.postMessage({ type: "reply", subtype: "done" });
    } else if (msg.type === "loadPackagesFromImports") {
      const result = await pyodide.loadPackagesFromImports(msg.code);
      messagePort.postMessage({
        type: "reply",
        subtype: "done",
        value: result
      });
    } else if (msg.type === "runPythonAsync") {
      await pyodide.loadPackagesFromImports(msg.code);
      const result = await pyodide.runPythonAsync(msg.code);
      if (msg.printResult && result !== void 0) {
        self.stdout_callback(pyUtils.repr(result));
      }
      try {
        const processedResult = processReturnValue(
          result,
          msg.returnResult,
          pyodide,
          pyUtils.repr
        );
        messagePort.postMessage({
          type: "reply",
          subtype: "done",
          value: processedResult
        });
      } finally {
        if (result instanceof pyodide.ffi.PyProxy) {
          result.destroy();
        }
      }
    } else if (msg.type === "tabComplete") {
      const completions = pyUtils.tabComplete(msg.code).toJs()[0];
      messagePort.postMessage({
        type: "reply",
        subtype: "tabCompletions",
        completions
      });
    } else if (msg.type === "callPyAsync") {
      const { fnName, args, kwargs } = msg;
      let fn = pyodide.globals.get(fnName[0]);
      for (const el of fnName.slice(1)) {
        fn = fn[el];
      }
      const resultMaybePromise = fn.callKwargs(...args, kwargs);
      const result = await Promise.resolve(resultMaybePromise);
      if (msg.printResult && result !== void 0) {
        self.stdout_callback(pyUtils.repr(result));
      }
      try {
        const processedResult = processReturnValue(
          result,
          msg.returnResult,
          pyodide,
          pyUtils.repr
        );
        messagePort.postMessage({
          type: "reply",
          subtype: "done",
          value: processedResult
        });
      } finally {
        if (result instanceof pyodide.ffi.PyProxy) {
          result.destroy();
        }
      }
    } else {
      messagePort.postMessage({
        type: "reply",
        subtype: "done",
        error: new Error(`Unknown message type: ${msg.toString()}`)
      });
    }
  } catch (e2) {
    if (e2 instanceof pyodide.ffi.PythonError) {
      e2.message = pyUtils.shortFormatLastTraceback();
    }
    messagePort.postMessage({
      type: "reply",
      subtype: "done",
      error: errorToPostableErrorObject(e2)
    });
  }
};
