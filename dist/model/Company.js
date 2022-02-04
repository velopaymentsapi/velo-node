"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Company model module.
 * @module model/Company
 * @version 2.29.130
 */
var Company = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Company</code>.
   * @alias module:model/Company
   * @param name {String} 
   */
  function Company(name) {
    _classCallCheck(this, Company);

    Company.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Company, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Company</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Company} obj Optional instance to populate.
     * @return {module:model/Company} The populated <code>Company</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Company();

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

  return Company;
}();
/**
 * @member {String} name
 */


Company.prototype['name'] = undefined;
/**
 * Company Tax Id must be between 6 and 30 characters long
 * @member {String} taxId
 */

Company.prototype['taxId'] = undefined;
/**
 * @member {String} operatingName
 */

Company.prototype['operatingName'] = undefined;
var _default = Company;
exports["default"] = _default;