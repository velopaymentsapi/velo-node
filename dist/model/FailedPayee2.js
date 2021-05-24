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

var _PayeePayorRef = _interopRequireDefault(require("./PayeePayorRef"));

var _PayeeType = _interopRequireDefault(require("./PayeeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FailedPayee2 model module.
 * @module model/FailedPayee2
 * @version 2.26.124
 */
var FailedPayee2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FailedPayee2</code>.
   * @alias module:model/FailedPayee2
   */
  function FailedPayee2() {
    _classCallCheck(this, FailedPayee2);

    FailedPayee2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FailedPayee2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FailedPayee2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailedPayee2} obj Optional instance to populate.
     * @return {module:model/FailedPayee2} The populated <code>FailedPayee2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FailedPayee2();

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('payorRefs')) {
          obj['payorRefs'] = _ApiClient["default"].convertToType(data['payorRefs'], [_PayeePayorRef["default"]]);
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

  return FailedPayee2;
}();
/**
 * @member {String} payeeId
 */


FailedPayee2.prototype['payeeId'] = undefined;
/**
 * @member {Array.<module:model/PayeePayorRef>} payorRefs
 */

FailedPayee2.prototype['payorRefs'] = undefined;
/**
 * @member {String} email
 */

FailedPayee2.prototype['email'] = undefined;
/**
 * @member {String} remoteId
 */

FailedPayee2.prototype['remoteId'] = undefined;
/**
 * @member {module:model/PayeeType} type
 */

FailedPayee2.prototype['type'] = undefined;
/**
 * @member {module:model/CreatePayeeAddress2} address
 */

FailedPayee2.prototype['address'] = undefined;
/**
 * @member {module:model/CreatePaymentChannel2} paymentChannel
 */

FailedPayee2.prototype['paymentChannel'] = undefined;
/**
 * @member {module:model/Challenge2} challenge
 */

FailedPayee2.prototype['challenge'] = undefined;
/**
 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR> See the /v1/supportedLanguages endpoint to list the available codes for an environment. 
 * @member {String} language
 */

FailedPayee2.prototype['language'] = undefined;
/**
 * @member {module:model/Company2} company
 */

FailedPayee2.prototype['company'] = undefined;
/**
 * @member {module:model/CreateIndividual2} individual
 */

FailedPayee2.prototype['individual'] = undefined;
var _default = FailedPayee2;
exports["default"] = _default;