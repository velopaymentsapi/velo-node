"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Challenge = _interopRequireDefault(require("./Challenge2"));

var _Company = _interopRequireDefault(require("./Company2"));

var _CreateIndividual = _interopRequireDefault(require("./CreateIndividual2"));

var _CreatePayeeAddress = _interopRequireDefault(require("./CreatePayeeAddress2"));

var _CreatePaymentChannel = _interopRequireDefault(require("./CreatePaymentChannel2"));

var _Language = _interopRequireDefault(require("./Language2"));

var _PayeePayorRefV = _interopRequireDefault(require("./PayeePayorRefV3"));

var _PayeeType = _interopRequireDefault(require("./PayeeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePayee2 model module.
 * @module model/CreatePayee2
 * @version 2.23.78
 */
var CreatePayee2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePayee2</code>.
   * @alias module:model/CreatePayee2
   * @param email {String} 
   * @param remoteId {String} 
   * @param type {module:model/PayeeType} 
   * @param address {module:model/CreatePayeeAddress2} 
   */
  function CreatePayee2(email, remoteId, type, address) {
    _classCallCheck(this, CreatePayee2);

    CreatePayee2.initialize(this, email, remoteId, type, address);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePayee2, null, [{
    key: "initialize",
    value: function initialize(obj, email, remoteId, type, address) {
      obj['email'] = email;
      obj['remoteId'] = remoteId;
      obj['type'] = type;
      obj['address'] = address;
    }
    /**
     * Constructs a <code>CreatePayee2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayee2} obj Optional instance to populate.
     * @return {module:model/CreatePayee2} The populated <code>CreatePayee2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePayee2();

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('payorRefs')) {
          obj['payorRefs'] = _ApiClient["default"].convertToType(data['payorRefs'], [_PayeePayorRefV["default"]]);
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _PayeeType["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _CreatePayeeAddress["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('paymentChannel')) {
          obj['paymentChannel'] = _CreatePaymentChannel["default"].constructFromObject(data['paymentChannel']);
        }

        if (data.hasOwnProperty('challenge')) {
          obj['challenge'] = _Challenge["default"].constructFromObject(data['challenge']);
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _Language["default"].constructFromObject(data['language']);
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _Company["default"].constructFromObject(data['company']);
        }

        if (data.hasOwnProperty('individual')) {
          obj['individual'] = _CreateIndividual["default"].constructFromObject(data['individual']);
        }
      }

      return obj;
    }
  }]);

  return CreatePayee2;
}();
/**
 * @member {String} payeeId
 */


CreatePayee2.prototype['payeeId'] = undefined;
/**
 * @member {Array.<module:model/PayeePayorRefV3>} payorRefs
 */

CreatePayee2.prototype['payorRefs'] = undefined;
/**
 * @member {String} email
 */

CreatePayee2.prototype['email'] = undefined;
/**
 * @member {String} remoteId
 */

CreatePayee2.prototype['remoteId'] = undefined;
/**
 * @member {module:model/PayeeType} type
 */

CreatePayee2.prototype['type'] = undefined;
/**
 * @member {module:model/CreatePayeeAddress2} address
 */

CreatePayee2.prototype['address'] = undefined;
/**
 * @member {module:model/CreatePaymentChannel2} paymentChannel
 */

CreatePayee2.prototype['paymentChannel'] = undefined;
/**
 * @member {module:model/Challenge2} challenge
 */

CreatePayee2.prototype['challenge'] = undefined;
/**
 * @member {module:model/Language2} language
 */

CreatePayee2.prototype['language'] = undefined;
/**
 * @member {module:model/Company2} company
 */

CreatePayee2.prototype['company'] = undefined;
/**
 * @member {module:model/CreateIndividual2} individual
 */

CreatePayee2.prototype['individual'] = undefined;
var _default = CreatePayee2;
exports["default"] = _default;