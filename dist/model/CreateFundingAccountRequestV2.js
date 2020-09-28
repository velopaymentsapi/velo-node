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
 * The CreateFundingAccountRequestV2 model module.
 * @module model/CreateFundingAccountRequestV2
 * @version 2.23.78
 */
var CreateFundingAccountRequestV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateFundingAccountRequestV2</code>.
   * @alias module:model/CreateFundingAccountRequestV2
   * @param type {module:model/CreateFundingAccountRequestV2.TypeEnum} 
   * @param name {String} 
   * @param payorId {String} 
   */
  function CreateFundingAccountRequestV2(type, name, payorId) {
    _classCallCheck(this, CreateFundingAccountRequestV2);

    CreateFundingAccountRequestV2.initialize(this, type, name, payorId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFundingAccountRequestV2, null, [{
    key: "initialize",
    value: function initialize(obj, type, name, payorId) {
      obj['type'] = type;
      obj['name'] = name;
      obj['payorId'] = payorId;
    }
    /**
     * Constructs a <code>CreateFundingAccountRequestV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFundingAccountRequestV2} obj Optional instance to populate.
     * @return {module:model/CreateFundingAccountRequestV2} The populated <code>CreateFundingAccountRequestV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFundingAccountRequestV2();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('accountName')) {
          obj['accountName'] = _ApiClient["default"].convertToType(data['accountName'], 'String');
        }

        if (data.hasOwnProperty('accountNumber')) {
          obj['accountNumber'] = _ApiClient["default"].convertToType(data['accountNumber'], 'String');
        }

        if (data.hasOwnProperty('routingNumber')) {
          obj['routingNumber'] = _ApiClient["default"].convertToType(data['routingNumber'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateFundingAccountRequestV2;
}();
/**
 * @member {module:model/CreateFundingAccountRequestV2.TypeEnum} type
 */


CreateFundingAccountRequestV2.prototype['type'] = undefined;
/**
 * @member {String} name
 */

CreateFundingAccountRequestV2.prototype['name'] = undefined;
/**
 * @member {String} payorId
 */

CreateFundingAccountRequestV2.prototype['payorId'] = undefined;
/**
 * Required if type is FBO
 * @member {String} accountName
 */

CreateFundingAccountRequestV2.prototype['accountName'] = undefined;
/**
 * Required if type is FBO
 * @member {String} accountNumber
 */

CreateFundingAccountRequestV2.prototype['accountNumber'] = undefined;
/**
 * Required if type is FBO
 * @member {String} routingNumber
 */

CreateFundingAccountRequestV2.prototype['routingNumber'] = undefined;
/**
 * ISO 4217 currency code, Required if type is WUBS_DECOUPLED
 * @member {String} currency
 */

CreateFundingAccountRequestV2.prototype['currency'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

CreateFundingAccountRequestV2['TypeEnum'] = {
  /**
   * value: "FBO"
   * @const
   */
  "FBO": "FBO",

  /**
   * value: "WUBS_DECOUPLED"
   * @const
   */
  "WUBS_DECOUPLED": "WUBS_DECOUPLED"
};
var _default = CreateFundingAccountRequestV2;
exports["default"] = _default;