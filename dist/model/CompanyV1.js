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

/**
 * The CompanyV1 model module.
 * @module model/CompanyV1
 * @version 2.23.78
 */
var CompanyV1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CompanyV1</code>.
   * @alias module:model/CompanyV1
   * @param name {String} 
   */
  function CompanyV1(name) {
    _classCallCheck(this, CompanyV1);

    CompanyV1.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompanyV1, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>CompanyV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyV1} obj Optional instance to populate.
     * @return {module:model/CompanyV1} The populated <code>CompanyV1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompanyV1();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('taxId')) {
          obj['taxId'] = _ApiClient["default"].convertToType(data['taxId'], 'String');
        }

        if (data.hasOwnProperty('operatingName')) {
          obj['operatingName'] = _ApiClient["default"].convertToType(data['operatingName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CompanyV1;
}();
/**
 * @member {String} name
 */


CompanyV1.prototype['name'] = undefined;
/**
 * Company Tax Id (EIN) must be 9 numeric characters. Must match the regular expression ```[\\d]{9}```.
 * @member {String} taxId
 */

CompanyV1.prototype['taxId'] = undefined;
/**
 * @member {String} operatingName
 */

CompanyV1.prototype['operatingName'] = undefined;
var _default = CompanyV1;
exports["default"] = _default;