"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Challenge = _interopRequireDefault(require("./Challenge"));

var _Company = _interopRequireDefault(require("./Company"));

var _CreateIndividual = _interopRequireDefault(require("./CreateIndividual"));

var _CreatePayeeAddress = _interopRequireDefault(require("./CreatePayeeAddress"));

var _CreatePaymentChannel = _interopRequireDefault(require("./CreatePaymentChannel"));

var _PayeePayorRefV = _interopRequireDefault(require("./PayeePayorRefV3"));

var _PayeeType = _interopRequireDefault(require("./PayeeType2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The FailedPayee model module.
 * @module model/FailedPayee
 * @version 2.29.130
 */
var FailedPayee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FailedPayee</code>.
   * @alias module:model/FailedPayee
   */
  function FailedPayee() {
    _classCallCheck(this, FailedPayee);

    FailedPayee.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FailedPayee, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FailedPayee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailedPayee} obj Optional instance to populate.
     * @return {module:model/FailedPayee} The populated <code>FailedPayee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FailedPayee();

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
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
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

  return FailedPayee;
}();
/**
 * @member {String} payeeId
 */


FailedPayee.prototype['payeeId'] = undefined;
/**
 * @member {Array.<module:model/PayeePayorRefV3>} payorRefs
 */

FailedPayee.prototype['payorRefs'] = undefined;
/**
 * @member {String} email
 */

FailedPayee.prototype['email'] = undefined;
/**
 * @member {String} remoteId
 */

FailedPayee.prototype['remoteId'] = undefined;
/**
 * @member {module:model/PayeeType2} type
 */

FailedPayee.prototype['type'] = undefined;
/**
 * @member {module:model/CreatePayeeAddress} address
 */

FailedPayee.prototype['address'] = undefined;
/**
 * @member {module:model/CreatePaymentChannel} paymentChannel
 */

FailedPayee.prototype['paymentChannel'] = undefined;
/**
 * @member {module:model/Challenge} challenge
 */

FailedPayee.prototype['challenge'] = undefined;
/**
 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR> See the /v1/supportedLanguages endpoint to list the available codes for an environment. 
 * @member {String} language
 */

FailedPayee.prototype['language'] = undefined;
/**
 * @member {module:model/Company} company
 */

FailedPayee.prototype['company'] = undefined;
/**
 * @member {module:model/CreateIndividual} individual
 */

FailedPayee.prototype['individual'] = undefined;
var _default = FailedPayee;
exports["default"] = _default;