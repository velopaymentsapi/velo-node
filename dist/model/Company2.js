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
 * The Company2 model module.
 * @module model/Company2
 * @version 2.29.128
 */
var Company2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Company2</code>.
   * @alias module:model/Company2
   * @param name {String} 
   */
  function Company2(name) {
    _classCallCheck(this, Company2);

    Company2.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Company2, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Company2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Company2} obj Optional instance to populate.
     * @return {module:model/Company2} The populated <code>Company2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Company2();

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

  return Company2;
}();
/**
 * @member {String} name
 */


Company2.prototype['name'] = undefined;
/**
 * Company Tax Id must be between 6 and 30 characters long
 * @member {String} taxId
 */

Company2.prototype['taxId'] = undefined;
/**
 * @member {String} operatingName
 */

Company2.prototype['operatingName'] = undefined;
var _default = Company2;
exports["default"] = _default;