var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

var generateAlphabeticName = function generateAlphabeticName(code) {
  var lastDigit = chars[code % chars.length];
  return code > chars.length ? "".concat(generateAlphabeticName(Math.floor(code / chars.length))).concat(lastDigit) : lastDigit;
};

var interleave = (function (strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */

function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */


function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/** Used for built-in method references. */


var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Built-in value references. */

var getPrototype = overArg(Object.getPrototypeOf, Object);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */


function isPlainObject(value) {
  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

var lodash_isplainobject = isPlainObject;

var _uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var hyphenateStyleName_1 = hyphenateStyleName;

var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).map(function (key) {
    if (lodash_isplainobject(obj[key])) return objToCss(obj[key], key);
    return "".concat(hyphenateStyleName_1(key), ": ").concat(obj[key], ";");
  }).join(' ');
  return prevKey ? "".concat(prevKey, " {\n  ").concat(css, "\n}") : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
    if (Array.isArray(chunk)) return [].concat(_toConsumableArray(ruleSet), _toConsumableArray(flatten(chunk, executionContext)));

    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, _toConsumableArray(flatten([chunk(executionContext)], executionContext))) : ruleSet.concat(chunk);
    }

    return ruleSet.concat(lodash_isplainobject(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

var css = (function (rules) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return flatten(interleave(rules, interpolations));
});

function last(arr) {
  return arr[arr.length - 1];
}

function sheetForTag(tag) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}

var isDev = function (x) {
  return x === 'development' || !x;
}("development");

var isTest = "development" === 'test';
var isBrowser = typeof document !== 'undefined' && !isTest;

var oldIE = function () {
  if (isBrowser) {
    var div = document.createElement('div');
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
    return div.getElementsByTagName('i').length === 1;
  }
}();

function makeStyleTag() {
  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
  return tag;
}

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$speedy = _ref.speedy,
        speedy = _ref$speedy === void 0 ? !isDev && !isTest : _ref$speedy,
        _ref$maxLength = _ref.maxLength,
        maxLength = _ref$maxLength === void 0 ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

    _classCallCheck(this, StyleSheet);

    this.isSpeedy = speedy;
    this.sheet = undefined;
    this.tags = [];
    this.maxLength = maxLength;
    this.ctr = 0;
  }

  _createClass(StyleSheet, [{
    key: "inject",
    value: function inject() {
      var _this = this;

      if (this.injected) {
        throw new Error('already injected stylesheet!');
      }

      if (isBrowser) {
        this.tags[0] = makeStyleTag();
        this.sheet = sheetForTag(this.tags[0]);
      } else {
        this.sheet = {
          cssRules: [],
          insertRule: function insertRule(rule) {
            var serverRule = {
              cssText: rule
            };

            _this.sheet.cssRules.push(serverRule);

            return {
              serverRule: serverRule,
              appendRule: function appendRule(newCss) {
                return serverRule.cssText += newCss;
              }
            };
          }
        };
      }

      this.injected = true;
    }
  }, {
    key: "speedy",
    value: function speedy(bool) {
      if (this.ctr !== 0) {
        throw new Error("cannot change speedy mode after inserting any rule to sheet. Either call speedy(".concat(bool, ") earlier in your app, or call flush() before speedy(").concat(bool, ")"));
      }

      this.isSpeedy = !!bool;
    }
  }, {
    key: "_insert",
    value: function _insert(rule) {
      try {
        this.sheet.insertRule(rule, this.sheet.cssRules.length);
      } catch (e) {
        if (isDev) {
          console.warn('whoops, illegal rule inserted', rule);
        }
      }
    }
  }, {
    key: "insert",
    value: function insert(rule) {
      var insertedRule;

      if (isBrowser) {
        if (this.isSpeedy && this.sheet.insertRule) {
          this._insert(rule);
        } else {
          var textNode = document.createTextNode(rule);
          last(this.tags).appendChild(textNode);
          insertedRule = {
            textNode: textNode,
            appendRule: function appendRule(newCss) {
              return textNode.appendData(newCss);
            }
          };

          if (!this.isSpeedy) {
            this.sheet = sheetForTag(last(this.tags));
          }
        }
      } else {
        insertedRule = this.sheet.insertRule(rule);
      }

      this.ctr++;

      if (isBrowser && this.ctr % this.maxLength === 0) {
        this.tags.push(makeStyleTag());
        this.sheet = sheetForTag(last(this.tags));
      }

      return insertedRule;
    }
  }, {
    key: "flush",
    value: function flush() {
      if (isBrowser) {
        this.tags.forEach(function (tag) {
          return tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.sheet = null;
        this.ctr = 0;
      } else {
        this.sheet.cssRules = [];
      }

      this.injected = false;
    }
  }, {
    key: "rules",
    value: function rules() {
      if (!isBrowser) {
        return this.sheet.cssRules;
      }

      var arr = [];
      this.tags.forEach(function (tag) {
        return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
      });
      return arr;
    }
  }]);

  return StyleSheet;
}();

var StyleSheet$1 = function () {
  function StyleSheet$1() {
    _classCallCheck(this, StyleSheet$1);

    this.globalStyleSheet = new StyleSheet({
      speedy: false
    });
    this.componentStyleSheet = new StyleSheet({
      speedy: false,
      maxLength: 40
    });
  }

  _createClass(StyleSheet$1, [{
    key: "inject",
    value: function inject() {
      this.globalStyleSheet.inject();
      this.componentStyleSheet.inject();
    }
  }, {
    key: "flush",
    value: function flush() {
      if (this.globalStyleSheet.sheet) this.globalStyleSheet.flush();
      if (this.componentStyleSheet.sheet) this.componentStyleSheet.flush();
    }
  }, {
    key: "insert",
    value: function insert(rule) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        global: false
      };
      var sheet = opts.global ? this.globalStyleSheet : this.componentStyleSheet;
      return sheet.insert(rule);
    }
  }, {
    key: "rules",
    value: function rules() {
      return this.globalStyleSheet.rules().concat(this.componentStyleSheet.rules());
    }
  }, {
    key: "injected",
    get: function get() {
      return this.globalStyleSheet.injected && this.componentStyleSheet.injected;
    }
  }]);

  return StyleSheet$1;
}();

var styleSheet = new StyleSheet$1();

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hash = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = doHash; // murmurhash2 via https://gist.github.com/raycmorgan/588423

  function doHash(str, seed) {
    var m = 0x5bd1e995;
    var r = 24;
    var h = seed ^ str.length;
    var length = str.length;
    var currentIndex = 0;

    while (length >= 4) {
      var k = UInt32(str, currentIndex);
      k = Umul32(k, m);
      k ^= k >>> r;
      k = Umul32(k, m);
      h = Umul32(h, m);
      h ^= k;
      currentIndex += 4;
      length -= 4;
    }

    switch (length) {
      case 3:
        h ^= UInt16(str, currentIndex);
        h ^= str.charCodeAt(currentIndex + 2) << 16;
        h = Umul32(h, m);
        break;

      case 2:
        h ^= UInt16(str, currentIndex);
        h = Umul32(h, m);
        break;

      case 1:
        h ^= str.charCodeAt(currentIndex);
        h = Umul32(h, m);
        break;
    }

    h ^= h >>> 13;
    h = Umul32(h, m);
    h ^= h >>> 15;
    return h >>> 0;
  }

  function UInt32(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
  }

  function UInt16(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
  }

  function Umul32(n, m) {
    n = n | 0;
    m = m | 0;
    var nlo = n & 0xffff;
    var nhi = n >>> 16;
    var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
    return res;
  }
});
var hashStr = unwrapExports(hash);

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var makeAnimation = function makeAnimation(name, css) {
  return "\n@keyframes ".concat(name, " {\n   ").concat(css, "\n}\n");
};

var keyframes = (function (css) {
  var name = generateAlphabeticName(hashStr(replaceWhitespace(JSON.stringify(css))));
  var animation = makeAnimation(name, css);
  if (!styleSheet.injected) styleSheet.inject();
  styleSheet.insert(animation);
  return name;
});

var stylis = createCommonjsModule(function (module, exports) {
  /*
   *          __        ___
   *    _____/ /___  __/ (_)____
   *   / ___/ __/ / / / / / ___/
   *  (__  ) /_/ /_/ / / (__  )
   * /____/\__/\__, /_/_/____/
   *          /____/
   *
   * light - weight css preprocessor @licence MIT
   */
  (function (factory) {
    /* eslint-disable */
     module['exports'] = factory(null) ;
  })(
  /** @param {*=} options */
  function factory(options) {
    /**
     * Notes
     *
     * The ['<method name>'] pattern is used to support closure compiler
     * the jsdoc signatures are also used to the same effect
     *
     * ----
     *
     * int + int + int === n4 [faster]
     *
     * vs
     *
     * int === n1 && int === n2 && int === n3
     *
     * ----
     *
     * switch (int) { case ints...} [faster]
     *
     * vs
     *
     * if (int == 1 && int === 2 ...)
     *
     * ----
     *
     * The (first*n1 + second*n2 + third*n3) format used in the property parser
     * is a simple way to hash the sequence of characters
     * taking into account the index they occur in
     * since any number of 3 character sequences could produce duplicates.
     *
     * On the other hand sequences that are directly tied to the index of the character
     * resolve a far more accurate measure, it's also faster
     * to evaluate one condition in a switch statement
     * than three in an if statement regardless of the added math.
     *
     * This allows the vendor prefixer to be both small and fast.
     */

    var nullptn = /^\0+/g;
    /* matches leading null characters */

    var formatptn = /[\0\r\f]/g;
    /* matches new line, null and formfeed characters */

    var colonptn = /: */g;
    /* splits animation rules */

    var cursorptn = /zoo|gra/;
    /* assert cursor varient */

    var transformptn = /([,: ])(transform)/g;
    /* vendor prefix transform, older webkit */

    var animationptn = /,+\s*(?![^(]*[)])/g;
    /* splits multiple shorthand notation animations */

    var propertiesptn = / +\s*(?![^(]*[)])/g;
    /* animation properties */

    var elementptn = / *[\0] */g;
    /* selector elements */

    var selectorptn = /,\r+?/g;
    /* splits selectors */

    var andptn = /([\t\r\n ])*\f?&/g;
    /* match & */

    var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g;
    /* matches :global(.*) */

    var invalidptn = /\W+/g;
    /* removes invalid characters from keyframes */

    var keyframeptn = /@(k\w+)\s*(\S*)\s*/;
    /* matches @keyframes $1 */

    var plcholdrptn = /::(place)/g;
    /* match ::placeholder varient */

    var readonlyptn = /:(read-only)/g;
    /* match :read-only varient */

    var beforeptn = /\s+(?=[{\];=:>])/g;
    /* matches \s before ] ; = : */

    var afterptn = /([[}=:>])\s+/g;
    /* matches \s after characters [ } = : */

    var tailptn = /(\{[^{]+?);(?=\})/g;
    /* matches tail semi-colons ;} */

    var whiteptn = /\s{2,}/g;
    /* matches repeating whitespace */

    var pseudoptn = /([^\(])(:+) */g;
    /* pseudo element */

    var writingptn = /[svh]\w+-[tblr]{2}/;
    /* match *gradient property */

    var supportsptn = /\(\s*(.*)\s*\)/g;
    /* match supports (groups) */

    var propertyptn = /([\s\S]*?);/g;
    /* match properties leading semicolon */

    var selfptn = /-self|flex-/g;
    /* match flex- and -self in align-self: flex-*; */

    var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/;
    /* match tail whitspace */

    var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/;
    /* match max/min/fit-content, fill-available */

    var imgsrcptn = /([^-])(image-set\()/;
    /* vendors */

    var webkit = '-webkit-';
    var moz = '-moz-';
    var ms = '-ms-';
    /* character codes */

    var SEMICOLON = 59;
    /* ; */

    var CLOSEBRACES = 125;
    /* } */

    var OPENBRACES = 123;
    /* { */

    var OPENPARENTHESES = 40;
    /* ( */

    var CLOSEPARENTHESES = 41;
    /* ) */

    var OPENBRACKET = 91;
    /* [ */

    var CLOSEBRACKET = 93;
    /* ] */

    var NEWLINE = 10;
    /* \n */

    var CARRIAGE = 13;
    /* \r */

    var TAB = 9;
    /* \t */

    var AT = 64;
    /* @ */

    var SPACE = 32;
    /*   */

    var AND = 38;
    /* & */

    var DASH = 45;
    /* - */

    var UNDERSCORE = 95;
    /* _ */

    var STAR = 42;
    /* * */

    var COMMA = 44;
    /* , */

    var COLON = 58;
    /* : */

    var SINGLEQUOTE = 39;
    /* ' */

    var DOUBLEQUOTE = 34;
    /* " */

    var FOWARDSLASH = 47;
    /* / */

    var GREATERTHAN = 62;
    /* > */

    var PLUS = 43;
    /* + */

    var TILDE = 126;
    /* ~ */

    var NULL = 0;
    /* \0 */

    var FORMFEED = 12;
    /* \f */

    var VERTICALTAB = 11;
    /* \v */

    /* special identifiers */

    var KEYFRAME = 107;
    /* k */

    var MEDIA = 109;
    /* m */

    var SUPPORTS = 115;
    /* s */

    var PLACEHOLDER = 112;
    /* p */

    var READONLY = 111;
    /* o */

    var IMPORT = 105;
    /* <at>i */

    var CHARSET = 99;
    /* <at>c */

    var DOCUMENT = 100;
    /* <at>d */

    var PAGE = 112;
    /* <at>p */

    var column = 1;
    /* current column */

    var line = 1;
    /* current line numebr */

    var pattern = 0;
    /* :pattern */

    var cascade = 1;
    /* #id h1 h2 vs h1#id h2#id  */

    var prefix = 1;
    /* vendor prefix */

    var escape = 1;
    /* escape :global() pattern */

    var compress = 0;
    /* compress output */

    var semicolon = 0;
    /* no/semicolon option */

    var preserve = 0;
    /* preserve empty selectors */

    /* empty reference */

    var array = [];
    /* plugins */

    var plugins = [];
    var plugged = 0;
    var should = null;
    /* plugin context */

    var POSTS = -2;
    var PREPS = -1;
    var UNKWN = 0;
    var PROPS = 1;
    var BLCKS = 2;
    var ATRUL = 3;
    /* plugin newline context */

    var unkwn = 0;
    /* keyframe animation */

    var keyed = 1;
    var key = '';
    /* selector namespace */

    var nscopealt = '';
    var nscope = '';
    /**
     * Compile
     *
     * @param {Array<string>} parent
     * @param {Array<string>} current
     * @param {string} body
     * @param {number} id
     * @param {number} depth
     * @return {string}
     */

    function compile(parent, current, body, id, depth) {
      var bracket = 0;
      /* brackets [] */

      var comment = 0;
      /* comments /* // or /* */

      var parentheses = 0;
      /* functions () */

      var quote = 0;
      /* quotes '', "" */

      var first = 0;
      /* first character code */

      var second = 0;
      /* second character code */

      var code = 0;
      /* current character code */

      var tail = 0;
      /* previous character code */

      var trail = 0;
      /* character before previous code */

      var peak = 0;
      /* previous non-whitespace code */

      var counter = 0;
      /* count sequence termination */

      var context = 0;
      /* track current context */

      var atrule = 0;
      /* track @at-rule context */

      var pseudo = 0;
      /* track pseudo token index */

      var caret = 0;
      /* current character index */

      var format = 0;
      /* control character formating context */

      var insert = 0;
      /* auto semicolon insertion */

      var invert = 0;
      /* inverted selector pattern */

      var length = 0;
      /* generic length address */

      var eof = body.length;
      /* end of file(length) */

      var eol = eof - 1;
      /* end of file(characters) */

      var char = '';
      /* current character */

      var chars = '';
      /* current buffer of characters */

      var child = '';
      /* next buffer of characters */

      var out = '';
      /* compiled body */

      var children = '';
      /* compiled children */

      var flat = '';
      /* compiled leafs */

      var selector;
      /* generic selector address */

      var result;
      /* generic address */
      // ...build body

      while (caret < eof) {
        code = body.charCodeAt(caret); // eof varient

        if (caret === eol) {
          // last character + noop context, add synthetic padding for noop context to terminate
          if (comment + quote + parentheses + bracket !== 0) {
            if (comment !== 0) {
              code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH;
            }

            quote = parentheses = bracket = 0;
            eof++;
            eol++;
          }
        }

        if (comment + quote + parentheses + bracket === 0) {
          // eof varient
          if (caret === eol) {
            if (format > 0) {
              chars = chars.replace(formatptn, '');
            }

            if (chars.trim().length > 0) {
              switch (code) {
                case SPACE:
                case TAB:
                case SEMICOLON:
                case CARRIAGE:
                case NEWLINE:
                  {
                    break;
                  }

                default:
                  {
                    chars += body.charAt(caret);
                  }
              }

              code = SEMICOLON;
            }
          } // auto semicolon insertion


          if (insert === 1) {
            switch (code) {
              // false flags
              case OPENBRACES:
              case CLOSEBRACES:
              case SEMICOLON:
              case DOUBLEQUOTE:
              case SINGLEQUOTE:
              case OPENPARENTHESES:
              case CLOSEPARENTHESES:
              case COMMA:
                {
                  insert = 0;
                }
              // ignore

              case TAB:
              case CARRIAGE:
              case NEWLINE:
              case SPACE:
                {
                  break;
                }
              // valid

              default:
                {
                  insert = 0;
                  length = caret;
                  first = code;
                  caret--;
                  code = SEMICOLON;

                  while (length < eof) {
                    switch (body.charCodeAt(length++)) {
                      case NEWLINE:
                      case CARRIAGE:
                      case SEMICOLON:
                        {
                          ++caret;
                          code = first;
                          length = eof;
                          break;
                        }

                      case COLON:
                        {
                          if (format > 0) {
                            ++caret;
                            code = first;
                          }
                        }

                      case OPENBRACES:
                        {
                          length = eof;
                        }
                    }
                  }
                }
            }
          } // token varient


          switch (code) {
            case OPENBRACES:
              {
                chars = chars.trim();
                first = chars.charCodeAt(0);
                counter = 1;
                length = ++caret;

                while (caret < eof) {
                  switch (code = body.charCodeAt(caret)) {
                    case OPENBRACES:
                      {
                        counter++;
                        break;
                      }

                    case CLOSEBRACES:
                      {
                        counter--;
                        break;
                      }

                    case FOWARDSLASH:
                      {
                        switch (second = body.charCodeAt(caret + 1)) {
                          // /*, //
                          case STAR:
                          case FOWARDSLASH:
                            {
                              caret = delimited(second, caret, eol, body);
                            }
                        }

                        break;
                      }
                    // given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93

                    case OPENBRACKET:
                      {
                        code++;
                      }
                    // given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41

                    case OPENPARENTHESES:
                      {
                        code++;
                      }
                    // quote tail delimiter is identical to the head delimiter hence noop,
                    // fallthrough clauses have been shifted to the correct tail delimiter

                    case DOUBLEQUOTE:
                    case SINGLEQUOTE:
                      {
                        while (caret++ < eol) {
                          if (body.charCodeAt(caret) === code) {
                            break;
                          }
                        }
                      }
                  }

                  if (counter === 0) {
                    break;
                  }

                  caret++;
                }

                child = body.substring(length, caret);

                if (first === NULL) {
                  first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0);
                }

                switch (first) {
                  // @at-rule
                  case AT:
                    {
                      if (format > 0) {
                        chars = chars.replace(formatptn, '');
                      }

                      second = chars.charCodeAt(1);

                      switch (second) {
                        case DOCUMENT:
                        case MEDIA:
                        case SUPPORTS:
                        case DASH:
                          {
                            selector = current;
                            break;
                          }

                        default:
                          {
                            selector = array;
                          }
                      }

                      child = compile(current, selector, child, second, depth + 1);
                      length = child.length; // preserve empty @at-rule

                      if (preserve > 0 && length === 0) {
                        length = chars.length;
                      } // execute plugins, @at-rule context


                      if (plugged > 0) {
                        selector = select(array, chars, invert);
                        result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id);
                        chars = selector.join('');

                        if (result !== void 0) {
                          if ((length = (child = result.trim()).length) === 0) {
                            second = 0;
                            child = '';
                          }
                        }
                      }

                      if (length > 0) {
                        switch (second) {
                          case SUPPORTS:
                            {
                              chars = chars.replace(supportsptn, supports);
                            }

                          case DOCUMENT:
                          case MEDIA:
                          case DASH:
                            {
                              child = chars + '{' + child + '}';
                              break;
                            }

                          case KEYFRAME:
                            {
                              chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''));
                              child = chars + '{' + child + '}';

                              if (prefix === 1 || prefix === 2 && vendor('@' + child, 3)) {
                                child = '@' + webkit + child + '@' + child;
                              } else {
                                child = '@' + child;
                              }

                              break;
                            }

                          default:
                            {
                              child = chars + child;

                              if (id === PAGE) {
                                child = (out += child, '');
                              }
                            }
                        }
                      } else {
                        child = '';
                      }

                      break;
                    }
                  // selector

                  default:
                    {
                      child = compile(current, select(current, chars, invert), child, id, depth + 1);
                    }
                }

                children += child; // reset

                context = 0;
                insert = 0;
                pseudo = 0;
                format = 0;
                invert = 0;
                atrule = 0;
                chars = '';
                child = '';
                code = body.charCodeAt(++caret);
                break;
              }

            case CLOSEBRACES:
            case SEMICOLON:
              {
                chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim();

                if ((length = chars.length) > 1) {
                  // monkey-patch missing colon
                  if (pseudo === 0) {
                    first = chars.charCodeAt(0); // first character is a letter or dash, buffer has a space character

                    if (first === DASH || first > 96 && first < 123) {
                      length = (chars = chars.replace(' ', ':')).length;
                    }
                  } // execute plugins, property context


                  if (plugged > 0) {
                    if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
                      if ((length = (chars = result.trim()).length) === 0) {
                        chars = '\0\0';
                      }
                    }
                  }

                  first = chars.charCodeAt(0);
                  second = chars.charCodeAt(1);

                  switch (first) {
                    case NULL:
                      {
                        break;
                      }

                    case AT:
                      {
                        if (second === IMPORT || second === CHARSET) {
                          flat += chars + body.charAt(caret);
                          break;
                        }
                      }

                    default:
                      {
                        if (chars.charCodeAt(length - 1) === COLON) {
                          break;
                        }

                        out += property(chars, first, second, chars.charCodeAt(2));
                      }
                  }
                } // reset


                context = 0;
                insert = 0;
                pseudo = 0;
                format = 0;
                invert = 0;
                chars = '';
                code = body.charCodeAt(++caret);
                break;
              }
          }
        } // parse characters


        switch (code) {
          case CARRIAGE:
          case NEWLINE:
            {
              // auto insert semicolon
              if (comment + quote + parentheses + bracket + semicolon === 0) {
                // valid non-whitespace characters that
                // may precede a newline
                switch (peak) {
                  case CLOSEPARENTHESES:
                  case SINGLEQUOTE:
                  case DOUBLEQUOTE:
                  case AT:
                  case TILDE:
                  case GREATERTHAN:
                  case STAR:
                  case PLUS:
                  case FOWARDSLASH:
                  case DASH:
                  case COLON:
                  case COMMA:
                  case SEMICOLON:
                  case OPENBRACES:
                  case CLOSEBRACES:
                    {
                      break;
                    }

                  default:
                    {
                      // current buffer has a colon
                      if (pseudo > 0) {
                        insert = 1;
                      }
                    }
                }
              } // terminate line comment


              if (comment === FOWARDSLASH) {
                comment = 0;
              } else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
                format = 1;
                chars += '\0';
              } // execute plugins, newline context


              if (plugged * unkwn > 0) {
                proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id);
              } // next line, reset column position


              column = 1;
              line++;
              break;
            }

          case SEMICOLON:
          case CLOSEBRACES:
            {
              if (comment + quote + parentheses + bracket === 0) {
                column++;
                break;
              }
            }

          default:
            {
              // increment column position
              column++; // current character

              char = body.charAt(caret); // remove comments, escape functions, strings, attributes and prepare selectors

              switch (code) {
                case TAB:
                case SPACE:
                  {
                    if (quote + bracket + comment === 0) {
                      switch (tail) {
                        case COMMA:
                        case COLON:
                        case TAB:
                        case SPACE:
                          {
                            char = '';
                            break;
                          }

                        default:
                          {
                            if (code !== SPACE) {
                              char = ' ';
                            }
                          }
                      }
                    }

                    break;
                  }
                // escape breaking control characters

                case NULL:
                  {
                    char = '\\0';
                    break;
                  }

                case FORMFEED:
                  {
                    char = '\\f';
                    break;
                  }

                case VERTICALTAB:
                  {
                    char = '\\v';
                    break;
                  }
                // &

                case AND:
                  {
                    // inverted selector pattern i.e html &
                    if (quote + comment + bracket === 0 && cascade > 0) {
                      invert = 1;
                      format = 1;
                      char = '\f' + char;
                    }

                    break;
                  }
                // ::p<l>aceholder, l
                // :read-on<l>y, l

                case 108:
                  {
                    if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
                      switch (caret - pseudo) {
                        // ::placeholder
                        case 2:
                          {
                            if (tail === PLACEHOLDER && body.charCodeAt(caret - 3) === COLON) {
                              pattern = tail;
                            }
                          }
                        // :read-only

                        case 8:
                          {
                            if (trail === READONLY) {
                              pattern = trail;
                            }
                          }
                      }
                    }

                    break;
                  }
                // :<pattern>

                case COLON:
                  {
                    if (quote + comment + bracket === 0) {
                      pseudo = caret;
                    }

                    break;
                  }
                // selectors

                case COMMA:
                  {
                    if (comment + parentheses + quote + bracket === 0) {
                      format = 1;
                      char += '\r';
                    }

                    break;
                  }
                // quotes

                case DOUBLEQUOTE:
                case SINGLEQUOTE:
                  {
                    if (comment === 0) {
                      quote = quote === code ? 0 : quote === 0 ? code : quote;
                    }

                    break;
                  }
                // attributes

                case OPENBRACKET:
                  {
                    if (quote + comment + parentheses === 0) {
                      bracket++;
                    }

                    break;
                  }

                case CLOSEBRACKET:
                  {
                    if (quote + comment + parentheses === 0) {
                      bracket--;
                    }

                    break;
                  }
                // functions

                case CLOSEPARENTHESES:
                  {
                    if (quote + comment + bracket === 0) {
                      parentheses--;
                    }

                    break;
                  }

                case OPENPARENTHESES:
                  {
                    if (quote + comment + bracket === 0) {
                      if (context === 0) {
                        switch (tail * 2 + trail * 3) {
                          // :matches
                          case 533:
                            {
                              break;
                            }
                          // :global, :not, :nth-child etc...

                          default:
                            {
                              counter = 0;
                              context = 1;
                            }
                        }
                      }

                      parentheses++;
                    }

                    break;
                  }

                case AT:
                  {
                    if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
                      atrule = 1;
                    }

                    break;
                  }
                // block/line comments

                case STAR:
                case FOWARDSLASH:
                  {
                    if (quote + bracket + parentheses > 0) {
                      break;
                    }

                    switch (comment) {
                      // initialize line/block comment context
                      case 0:
                        {
                          switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
                            // //
                            case 235:
                              {
                                comment = FOWARDSLASH;
                                break;
                              }
                            // /*

                            case 220:
                              {
                                length = caret;
                                comment = STAR;
                                break;
                              }
                          }

                          break;
                        }
                      // end block comment context

                      case STAR:
                        {
                          if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
                            // /*<!> ... */, !
                            if (body.charCodeAt(length + 2) === 33) {
                              out += body.substring(length, caret + 1);
                            }

                            char = '';
                            comment = 0;
                          }
                        }
                    }
                  }
              } // ignore comment blocks


              if (comment === 0) {
                // aggressive isolation mode, divide each individual selector
                // including selectors in :not function but excluding selectors in :global function
                if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
                  switch (code) {
                    case COMMA:
                    case TILDE:
                    case GREATERTHAN:
                    case PLUS:
                    case CLOSEPARENTHESES:
                    case OPENPARENTHESES:
                      {
                        if (context === 0) {
                          // outside of an isolated context i.e nth-child(<...>)
                          switch (tail) {
                            case TAB:
                            case SPACE:
                            case NEWLINE:
                            case CARRIAGE:
                              {
                                char = char + '\0';
                                break;
                              }

                            default:
                              {
                                char = '\0' + char + (code === COMMA ? '' : '\0');
                              }
                          }

                          format = 1;
                        } else {
                          // within an isolated context, sleep untill it's terminated
                          switch (code) {
                            case OPENPARENTHESES:
                              {
                                // :globa<l>(
                                if (pseudo + 7 === caret && tail === 108) {
                                  pseudo = 0;
                                }

                                context = ++counter;
                                break;
                              }

                            case CLOSEPARENTHESES:
                              {
                                if ((context = --counter) === 0) {
                                  format = 1;
                                  char += '\0';
                                }

                                break;
                              }
                          }
                        }

                        break;
                      }

                    case TAB:
                    case SPACE:
                      {
                        switch (tail) {
                          case NULL:
                          case OPENBRACES:
                          case CLOSEBRACES:
                          case SEMICOLON:
                          case COMMA:
                          case FORMFEED:
                          case TAB:
                          case SPACE:
                          case NEWLINE:
                          case CARRIAGE:
                            {
                              break;
                            }

                          default:
                            {
                              // ignore in isolated contexts
                              if (context === 0) {
                                format = 1;
                                char += '\0';
                              }
                            }
                        }
                      }
                  }
                } // concat buffer of characters


                chars += char; // previous non-whitespace character code

                if (code !== SPACE && code !== TAB) {
                  peak = code;
                }
              }
            }
        } // tail character codes


        trail = tail;
        tail = code; // visit every character

        caret++;
      }

      length = out.length; // preserve empty selector

      if (preserve > 0) {
        if (length === 0 && children.length === 0 && current[0].length === 0 === false) {
          if (id !== MEDIA || current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0]) {
            length = current.join(',').length + 2;
          }
        }
      }

      if (length > 0) {
        // cascade isolation mode?
        selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current; // execute plugins, block context

        if (plugged > 0) {
          result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id);

          if (result !== void 0 && (out = result).length === 0) {
            return flat + out + children;
          }
        }

        out = selector.join(',') + '{' + out + '}';

        if (prefix * pattern !== 0) {
          if (prefix === 2 && !vendor(out, 2)) pattern = 0;

          switch (pattern) {
            // ::read-only
            case READONLY:
              {
                out = out.replace(readonlyptn, ':' + moz + '$1') + out;
                break;
              }
            // ::placeholder

            case PLACEHOLDER:
              {
                out = out.replace(plcholdrptn, '::' + webkit + 'input-$1') + out.replace(plcholdrptn, '::' + moz + '$1') + out.replace(plcholdrptn, ':' + ms + 'input-$1') + out;
                break;
              }
          }

          pattern = 0;
        }
      }

      return flat + out + children;
    }
    /**
     * Select
     *
     * @param {Array<string>} parent
     * @param {string} current
     * @param {number} invert
     * @return {Array<string>}
     */


    function select(parent, current, invert) {
      var selectors = current.trim().split(selectorptn);
      var out = selectors;
      var length = selectors.length;
      var l = parent.length;

      switch (l) {
        // 0-1 parent selectors
        case 0:
        case 1:
          {
            for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
              out[i] = scope(selector, out[i], invert, l).trim();
            }

            break;
          }
        // >2 parent selectors, nested

        default:
          {
            for (var i = 0, j = 0, out = []; i < length; ++i) {
              for (var k = 0; k < l; ++k) {
                out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim();
              }
            }
          }
      }

      return out;
    }
    /**
     * Scope
     *
     * @param {string} parent
     * @param {string} current
     * @param {number} invert
     * @param {number} level
     * @return {string}
     */


    function scope(parent, current, invert, level) {
      var selector = current;
      var code = selector.charCodeAt(0); // trim leading whitespace

      if (code < 33) {
        code = (selector = selector.trim()).charCodeAt(0);
      }

      switch (code) {
        // &
        case AND:
          {
            switch (cascade + level) {
              case 0:
              case 1:
                {
                  if (parent.trim().length === 0) {
                    break;
                  }
                }

              default:
                {
                  return selector.replace(andptn, '$1' + parent.trim());
                }
            }

            break;
          }
        // :

        case COLON:
          {
            switch (selector.charCodeAt(1)) {
              // g in :global
              case 103:
                {
                  if (escape > 0 && cascade > 0) {
                    return selector.replace(escapeptn, '$1').replace(andptn, '$1' + nscope);
                  }

                  break;
                }

              default:
                {
                  // :hover
                  return parent.trim() + selector.replace(andptn, '$1' + parent.trim());
                }
            }
          }

        default:
          {
            // html &
            if (invert * cascade > 0 && selector.indexOf('\f') > 0) {
              return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1') + parent.trim());
            }
          }
      }

      return parent + selector;
    }
    /**
     * Property
     *
     * @param {string} input
     * @param {number} first
     * @param {number} second
     * @param {number} third
     * @return {string}
     */


    function property(input, first, second, third) {
      var index = 0;
      var out = input + ';';
      var hash = first * 2 + second * 3 + third * 4;
      var cache; // animation: a, n, i characters

      if (hash === 944) {
        return animation(out);
      } else if (prefix === 0 || prefix === 2 && !vendor(out, 1)) {
        return out;
      } // vendor prefix


      switch (hash) {
        // text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
        case 1015:
          {
            // text-shadow/text-align/text-transform, a
            return out.charCodeAt(10) === 97 ? webkit + out + out : out;
          }
        // filter/fill f, i, l

        case 951:
          {
            // filter, t
            return out.charCodeAt(3) === 116 ? webkit + out + out : out;
          }
        // color/column, c, o, l

        case 963:
          {
            // column, n
            return out.charCodeAt(5) === 110 ? webkit + out + out : out;
          }
        // box-decoration-break, b, o, x

        case 1009:
          {
            if (out.charCodeAt(4) !== 100) {
              break;
            }
          }
        // mask, m, a, s
        // clip-path, c, l, i

        case 969:
        case 942:
          {
            return webkit + out + out;
          }
        // appearance: a, p, p

        case 978:
          {
            return webkit + out + moz + out + out;
          }
        // hyphens: h, y, p
        // user-select: u, s, e

        case 1019:
        case 983:
          {
            return webkit + out + moz + out + ms + out + out;
          }
        // background/backface-visibility, b, a, c

        case 883:
          {
            // backface-visibility, -
            if (out.charCodeAt(8) === DASH) {
              return webkit + out + out;
            } // image-set(...)


            if (out.indexOf('image-set(', 11) > 0) {
              return out.replace(imgsrcptn, '$1' + webkit + '$2') + out;
            }

            return out;
          }
        // flex: f, l, e

        case 932:
          {
            if (out.charCodeAt(4) === DASH) {
              switch (out.charCodeAt(5)) {
                // flex-grow, g
                case 103:
                  {
                    return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out;
                  }
                // flex-shrink, s

                case 115:
                  {
                    return webkit + out + ms + out.replace('shrink', 'negative') + out;
                  }
                // flex-basis, b

                case 98:
                  {
                    return webkit + out + ms + out.replace('basis', 'preferred-size') + out;
                  }
              }
            }

            return webkit + out + ms + out + out;
          }
        // order: o, r, d

        case 964:
          {
            return webkit + out + ms + 'flex' + '-' + out + out;
          }
        // justify-items/justify-content, j, u, s

        case 1023:
          {
            // justify-content, c
            if (out.charCodeAt(8) !== 99) {
              break;
            }

            cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
            return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out;
          }
        // cursor, c, u, r

        case 1005:
          {
            return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out;
          }
        // writing-mode, w, r, i

        case 1000:
          {
            cache = out.substring(13).trim();
            index = cache.indexOf('-') + 1;

            switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
              // vertical-lr
              case 226:
                {
                  cache = out.replace(writingptn, 'tb');
                  break;
                }
              // vertical-rl

              case 232:
                {
                  cache = out.replace(writingptn, 'tb-rl');
                  break;
                }
              // horizontal-tb

              case 220:
                {
                  cache = out.replace(writingptn, 'lr');
                  break;
                }

              default:
                {
                  return out;
                }
            }

            return webkit + out + ms + cache + out;
          }
        // position: sticky

        case 1017:
          {
            if (out.indexOf('sticky', 9) === -1) {
              return out;
            }
          }
        // display(flex/inline-flex/inline-box): d, i, s

        case 975:
          {
            index = (out = input).length - 10;
            cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim();

            switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7) | 0)) {
              // inline-
              case 203:
                {
                  // inline-box
                  if (cache.charCodeAt(8) < 111) {
                    break;
                  }
                }
              // inline-box/sticky

              case 115:
                {
                  out = out.replace(cache, webkit + cache) + ';' + out;
                  break;
                }
              // inline-flex
              // flex

              case 207:
              case 102:
                {
                  out = out.replace(cache, webkit + (hash > 102 ? 'inline-' : '') + 'box') + ';' + out.replace(cache, webkit + cache) + ';' + out.replace(cache, ms + cache + 'box') + ';' + out;
                }
            }

            return out + ';';
          }
        // align-items, align-center, align-self: a, l, i, -

        case 938:
          {
            if (out.charCodeAt(5) === DASH) {
              switch (out.charCodeAt(6)) {
                // align-items, i
                case 105:
                  {
                    cache = out.replace('-items', '');
                    return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out;
                  }
                // align-self, s

                case 115:
                  {
                    return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out;
                  }
                // align-content

                default:
                  {
                    return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out;
                  }
              }
            }

            break;
          }
        // min/max

        case 973:
        case 989:
          {
            // min-/max- height/width/block-size/inline-size
            if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
              break;
            }
          }
        // height/width: min-content / width: max-content

        case 931:
        case 953:
          {
            if (dimensionptn.test(input) === true) {
              // stretch
              if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115) return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch');else return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out;
            }

            break;
          }
        // transform, transition: t, r, a

        case 962:
          {
            out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out; // transitions

            if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
              return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out;
            }

            break;
          }
      }

      return out;
    }
    /**
     * Vendor
     *
     * @param {string} content
     * @param {number} context
     * @return {boolean}
     */


    function vendor(content, context) {
      var index = content.indexOf(context === 1 ? ':' : '{');
      var key = content.substring(0, context !== 3 ? index : 10);
      var value = content.substring(index + 1, content.length - 1);
      return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context);
    }
    /**
     * Supports
     *
     * @param {string} match
     * @param {string} group
     * @return {string}
     */


    function supports(match, group) {
      var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2));
      return out !== group + ';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '(' + group + ')';
    }
    /**
     * Animation
     *
     * @param {string} input
     * @return {string}
     */


    function animation(input) {
      var length = input.length;
      var index = input.indexOf(':', 9) + 1;
      var declare = input.substring(0, index).trim();
      var out = input.substring(index, length - 1).trim();

      switch (input.charCodeAt(9) * keyed) {
        case 0:
          {
            break;
          }
        // animation-*, -

        case DASH:
          {
            // animation-name, n
            if (input.charCodeAt(10) !== 110) {
              break;
            }
          }
        // animation/animation-name

        default:
          {
            // split in case of multiple animations
            var list = out.split((out = '', animationptn));

            for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
              var value = list[i];
              var items = value.split(propertiesptn);

              while (value = items[index]) {
                var peak = value.charCodeAt(0);

                if (keyed === 1 && ( // letters
                peak > AT && peak < 90 || peak > 96 && peak < 123 || peak === UNDERSCORE || // dash but not in sequence i.e --
                peak === DASH && value.charCodeAt(1) !== DASH)) {
                  // not a number/function
                  switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
                    case 1:
                      {
                        switch (value) {
                          // not a valid reserved keyword
                          case 'infinite':
                          case 'alternate':
                          case 'backwards':
                          case 'running':
                          case 'normal':
                          case 'forwards':
                          case 'both':
                          case 'none':
                          case 'linear':
                          case 'ease':
                          case 'ease-in':
                          case 'ease-out':
                          case 'ease-in-out':
                          case 'paused':
                          case 'reverse':
                          case 'alternate-reverse':
                          case 'inherit':
                          case 'initial':
                          case 'unset':
                          case 'step-start':
                          case 'step-end':
                            {
                              break;
                            }

                          default:
                            {
                              value += key;
                            }
                        }
                      }
                  }
                }

                items[index++] = value;
              }

              out += (i === 0 ? '' : ',') + items.join(' ');
            }
          }
      }

      out = declare + out + ';';
      if (prefix === 1 || prefix === 2 && vendor(out, 1)) return webkit + out + out;
      return out;
    }
    /**
     * Isolate
     *
     * @param {Array<string>} current
     */


    function isolate(current) {
      for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
        // split individual elements in a selector i.e h1 h2 === [h1, h2]
        var elements = current[i].split(elementptn);
        var out = '';

        for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
          // empty element
          if ((size = (element = elements[j]).length) === 0 && l > 1) {
            continue;
          }

          tail = out.charCodeAt(out.length - 1);
          code = element.charCodeAt(0);
          padding = '';

          if (j !== 0) {
            // determine if we need padding
            switch (tail) {
              case STAR:
              case TILDE:
              case GREATERTHAN:
              case PLUS:
              case SPACE:
              case OPENPARENTHESES:
                {
                  break;
                }

              default:
                {
                  padding = ' ';
                }
            }
          }

          switch (code) {
            case AND:
              {
                element = padding + nscopealt;
              }

            case TILDE:
            case GREATERTHAN:
            case PLUS:
            case SPACE:
            case CLOSEPARENTHESES:
            case OPENPARENTHESES:
              {
                break;
              }

            case OPENBRACKET:
              {
                element = padding + element + nscopealt;
                break;
              }

            case COLON:
              {
                switch (element.charCodeAt(1) * 2 + element.charCodeAt(2) * 3) {
                  // :global
                  case 530:
                    {
                      if (escape > 0) {
                        element = padding + element.substring(8, size - 1);
                        break;
                      }
                    }
                  // :hover, :nth-child(), ...

                  default:
                    {
                      if (j < 1 || elements[j - 1].length < 1) {
                        element = padding + nscopealt + element;
                      }
                    }
                }

                break;
              }

            case COMMA:
              {
                padding = '';
              }

            default:
              {
                if (size > 1 && element.indexOf(':') > 0) {
                  element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2');
                } else {
                  element = padding + element + nscopealt;
                }
              }
          }

          out += element;
        }

        selector[i] = out.replace(formatptn, '').trim();
      }

      return selector;
    }
    /**
     * Proxy
     *
     * @param {number} context
     * @param {string} content
     * @param {Array<string>} selectors
     * @param {Array<string>} parents
     * @param {number} line
     * @param {number} column
     * @param {number} length
     * @param {number} id
     * @param {number} depth
     * @param {number} at
     * @return {(string|void|*)}
     */


    function proxy(context, content, selectors, parents, line, column, length, id, depth, at) {
      for (var i = 0, out = content, next; i < plugged; ++i) {
        switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
          case void 0:
          case false:
          case true:
          case null:
            {
              break;
            }

          default:
            {
              out = next;
            }
        }
      }

      if (out !== content) {
        return out;
      }
    }
    /**
     * @param {number} code
     * @param {number} index
     * @param {number} length
     * @param {string} body
     * @return {number}
     */


    function delimited(code, index, length, body) {
      for (var i = index + 1; i < length; ++i) {
        switch (body.charCodeAt(i)) {
          // /*
          case FOWARDSLASH:
            {
              if (code === STAR) {
                if (body.charCodeAt(i - 1) === STAR && index + 2 !== i) {
                  return i + 1;
                }
              }

              break;
            }
          // //

          case NEWLINE:
            {
              if (code === FOWARDSLASH) {
                return i + 1;
              }
            }
        }
      }

      return i;
    }
    /**
     * Minify
     *
     * @param {(string|*)} output
     * @return {string}
     */


    function minify(output) {
      return output.replace(formatptn, '').replace(beforeptn, '').replace(afterptn, '$1').replace(tailptn, '$1').replace(whiteptn, ' ');
    }
    /**
     * Use
     *
     * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
     */


    function use(plugin) {
      switch (plugin) {
        case void 0:
        case null:
          {
            plugged = plugins.length = 0;
            break;
          }

        default:
          {
            if (typeof plugin === 'function') {
              plugins[plugged++] = plugin;
            } else if (typeof plugin === 'object') {
              for (var i = 0, length = plugin.length; i < length; ++i) {
                use(plugin[i]);
              }
            } else {
              unkwn = !!plugin | 0;
            }
          }
      }

      return use;
    }
    /**
     * Set
     *
     * @param {*} options
     */


    function set(options) {
      for (var name in options) {
        var value = options[name];

        switch (name) {
          case 'keyframe':
            keyed = value | 0;
            break;

          case 'global':
            escape = value | 0;
            break;

          case 'cascade':
            cascade = value | 0;
            break;

          case 'compress':
            compress = value | 0;
            break;

          case 'semicolon':
            semicolon = value | 0;
            break;

          case 'preserve':
            preserve = value | 0;
            break;

          case 'prefix':
            should = null;

            if (!value) {
              prefix = 0;
            } else if (typeof value !== 'function') {
              prefix = 1;
            } else {
              prefix = 2;
              should = value;
            }

        }
      }

      return set;
    }
    /**
     * Stylis
     *
     * @param {string} selector
     * @param {string} input
     * @return {*}
     */


    function stylis(selector, input) {
      if (this !== void 0 && this.constructor === stylis) {
        return factory(selector);
      } // setup


      var ns = selector;
      var code = ns.charCodeAt(0); // trim leading whitespace

      if (code < 33) {
        code = (ns = ns.trim()).charCodeAt(0);
      } // keyframe/animation namespace


      if (keyed > 0) {
        key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-');
      } // reset, used to assert if a plugin is moneky-patching the return value


      code = 1; // cascade/isolate

      if (cascade === 1) {
        nscope = ns;
      } else {
        nscopealt = ns;
      }

      var selectors = [nscope];
      var result; // execute plugins, pre-process context

      if (plugged > 0) {
        result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0);

        if (result !== void 0 && typeof result === 'string') {
          input = result;
        }
      } // build


      var output = compile(array, selectors, input, 0, 0); // execute plugins, post-process context

      if (plugged > 0) {
        result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0); // bypass minification

        if (result !== void 0 && typeof (output = result) !== 'string') {
          code = 0;
        }
      } // reset


      key = '';
      nscope = '';
      nscopealt = '';
      pattern = 0;
      line = 1;
      column = 1;
      return compress * code === 0 ? output : minify(output);
    }

    stylis['use'] = use;
    stylis['set'] = set;

    if (options !== void 0) {
      set(options);
    }

    return stylis;
  });
});

var ComponentStyle = function () {
  function ComponentStyle(rules, selector) {
    _classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.selector = selector;
  }

  _createClass(ComponentStyle, [{
    key: "generateAndInject",
    value: function generateAndInject() {
      if (!styleSheet.injected) styleSheet.inject();
      var flatCSS = flatten(this.rules).join('');
      var cssString = this.selector ? "".concat(this.selector, " { ").concat(flatCSS, " }") : flatCSS;
      var css = stylis('', cssString, false, false);
      styleSheet.insert(css, {
        global: true
      });
    }
  }]);

  return ComponentStyle;
}();

var injectGlobal = function injectGlobal(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var globalStyle = new ComponentStyle(css.apply(void 0, [strings].concat(interpolations)));
  globalStyle.generateAndInject();
};

var ThemeProvider = {
  name: 'ThemeProvider',
  props: {
    theme: Object
  },
  provide: function provide() {
    var _this = this;

    return {
      $theme: function $theme() {
        return _this.theme;
      }
    };
  },
  render: function render(createElement) {
    return createElement('div', {}, this.$slots["default"]);
  }
};

/**
 * lodash 4.1.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty$1.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}
/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */


function baseZipObject(props, values, assignFunc) {
  var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }

  return result;
}
/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */


function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue);
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'fred' };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */


function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var lodash_zipobject = zipObject;

function normalizeProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (Array.isArray(props)) {
    return lodash_zipobject(props);
  } else {
    return props;
  }
}

function isVueComponent(target) {
  return target && (typeof target.render === 'function' || typeof target.template === 'string');
}

var _styledComponent = (function (ComponentStyle) {
  var createStyledComponent = function createStyledComponent(target, rules, props) {
    var componentStyle = new ComponentStyle(rules);
    var currentProps = normalizeProps(props);
    var prevProps = normalizeProps(target.props);
    var StyledComponent = {
      inject: {
        $theme: {
          "default": function _default() {
            return function () {
              return {};
            };
          }
        }
      },
      props: _objectSpread2({
        as: undefined,
        value: null
      }, currentProps, {}, prevProps),
      data: function data() {
        return {
          localValue: this.value
        };
      },
      render: function render(createElement) {
        var _this = this;

        var children = [];

        for (var slot in this.$slots) {
          if (slot === 'default') {
            children.push(this.$slots[slot]);
          } else {
            children.push(createElement('template', {
              slot: slot
            }, this.$slots[slot]));
          }
        }

        var element = this.$props.as || target;
        return createElement(isVueComponent(target) ? target : element, {
          "class": [this.generatedClassName],
          props: this.$props,
          domProps: {
            value: this.localValue
          },
          on: _objectSpread2({}, this.$listeners, {
            input: function input(event) {
              if (event && event.target) {
                _this.localValue = event.target.value;
              }
            }
          }),
          scopedSlots: this.$scopedSlots
        }, children);
      },
      methods: {
        generateAndInjectStyles: function generateAndInjectStyles(componentProps) {
          return componentStyle.generateAndInjectStyles(componentProps);
        }
      },
      computed: {
        generatedClassName: function generatedClassName() {
          var componentProps = _objectSpread2({
            theme: this.theme
          }, this.$props);

          return this.generateAndInjectStyles(componentProps);
        },
        theme: function theme() {
          return this.$theme();
        }
      },
      watch: {
        value: function value(newValue) {
          this.localValue = newValue;
        },
        localValue: function localValue() {
          this.$emit('input', this.localValue);
        }
      },
      extend: function extend(cssRules) {
        for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          interpolations[_key - 1] = arguments[_key];
        }

        var extendedRules = css.apply(void 0, [cssRules].concat(interpolations));
        return createStyledComponent(target, rules.concat(extendedRules), props);
      },
      withComponent: function withComponent(newTarget) {
        return createStyledComponent(newTarget, rules, props);
      }
    };
    return StyledComponent;
  };

  return createStyledComponent;
});

var _componentStyle = (function (nameGenerator) {
  var inserted = {};

  var ComponentStyle = function () {
    function ComponentStyle(rules) {
      _classCallCheck(this, ComponentStyle);

      this.rules = rules;
      stylis.set({
        keyframe: false
      });
      if (!styleSheet.injected) styleSheet.inject();
      this.insertedRule = styleSheet.insert('');
    }

    _createClass(ComponentStyle, [{
      key: "generateAndInjectStyles",
      value: function generateAndInjectStyles(executionContext) {
        var flatCSS = flatten(this.rules, executionContext).join('').replace(/^\s*\/\/.*$/gm, '');
        var hash = hashStr(flatCSS);

        if (!inserted[hash]) {
          var selector = nameGenerator(hash);
          inserted[hash] = selector;
          var css = stylis(".".concat(selector), flatCSS);
          this.insertedRule.appendRule(css);
        }

        return inserted[hash];
      }
    }]);

    return ComponentStyle;
  }();

  return ComponentStyle;
});

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

function isTag(target) {
  if (typeof target === 'string') {
    return domElements.indexOf(target) !== -1;
  }
}

function isStyledComponent(target) {
  return target && target.methods && typeof target.methods.generateAndInjectStyles() === 'string';
}

function isValidElementType(target) {
  return isStyledComponent(target) || isVueComponent(target) || isTag(target);
}

var _styled = (function (createStyledComponent) {
  var styled = function styled(tagName) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!isValidElementType(tagName)) {
      throw new Error(tagName + ' is not allowed for styled tag type.');
    }

    return function (cssRules) {
      for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return createStyledComponent(tagName, css.apply(void 0, [cssRules].concat(interpolations)), props);
    };
  };

  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });
  return styled;
});

var styled = _styled(_styledComponent(_componentStyle(generateAlphabeticName)));

export default styled;
export { ThemeProvider, css, injectGlobal, keyframes };
