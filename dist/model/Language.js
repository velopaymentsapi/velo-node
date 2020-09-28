"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class Language.
* @enum {}
* @readonly
*/
var Language = /*#__PURE__*/function () {
  function Language() {
    _classCallCheck(this, Language);

    _defineProperty(this, "AR", "AR");

    _defineProperty(this, "EN", "EN");

    _defineProperty(this, "ES", "ES");

    _defineProperty(this, "FR", "FR");

    _defineProperty(this, "HE", "HE");

    _defineProperty(this, "HI", "HI");

    _defineProperty(this, "JA", "JA");

    _defineProperty(this, "PT", "PT");

    _defineProperty(this, "RU", "RU");

    _defineProperty(this, "UR", "UR");

    _defineProperty(this, "ZH", "ZH");
  }

  _createClass(Language, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>Language</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Language} The enum <code>Language</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return Language;
}();

exports["default"] = Language;