"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayoutPayorV = _interopRequireDefault(require("./PayoutPayorV4"));

var _PayoutPrincipalV = _interopRequireDefault(require("./PayoutPrincipalV4"));

var _PayoutTypeV = _interopRequireDefault(require("./PayoutTypeV4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetPaymentsForPayoutResponseV4Summary model module.
 * @module model/GetPaymentsForPayoutResponseV4Summary
 * @version 2.23.78
 */
var GetPaymentsForPayoutResponseV4Summary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPaymentsForPayoutResponseV4Summary</code>.
   * @alias module:model/GetPaymentsForPayoutResponseV4Summary
   */
  function GetPaymentsForPayoutResponseV4Summary() {
    _classCallCheck(this, GetPaymentsForPayoutResponseV4Summary);

    GetPaymentsForPayoutResponseV4Summary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPaymentsForPayoutResponseV4Summary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPaymentsForPayoutResponseV4Summary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPaymentsForPayoutResponseV4Summary} obj Optional instance to populate.
     * @return {module:model/GetPaymentsForPayoutResponseV4Summary} The populated <code>GetPaymentsForPayoutResponseV4Summary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPaymentsForPayoutResponseV4Summary();

        if (data.hasOwnProperty('payoutStatus')) {
          obj['payoutStatus'] = _ApiClient["default"].convertToType(data['payoutStatus'], 'String');
        }

        if (data.hasOwnProperty('submittedDateTime')) {
          obj['submittedDateTime'] = _ApiClient["default"].convertToType(data['submittedDateTime'], 'Date');
        }

        if (data.hasOwnProperty('instructedDateTime')) {
          obj['instructedDateTime'] = _ApiClient["default"].convertToType(data['instructedDateTime'], 'Date');
        }

        if (data.hasOwnProperty('withdrawnDateTime')) {
          obj['withdrawnDateTime'] = _ApiClient["default"].convertToType(data['withdrawnDateTime'], 'Date');
        }

        if (data.hasOwnProperty('quotedDateTime')) {
          obj['quotedDateTime'] = _ApiClient["default"].convertToType(data['quotedDateTime'], 'Date');
        }

        if (data.hasOwnProperty('payoutMemo')) {
          obj['payoutMemo'] = _ApiClient["default"].convertToType(data['payoutMemo'], 'String');
        }

        if (data.hasOwnProperty('totalPayments')) {
          obj['totalPayments'] = _ApiClient["default"].convertToType(data['totalPayments'], 'Number');
        }

        if (data.hasOwnProperty('confirmedPayments')) {
          obj['confirmedPayments'] = _ApiClient["default"].convertToType(data['confirmedPayments'], 'Number');
        }

        if (data.hasOwnProperty('releasedPayments')) {
          obj['releasedPayments'] = _ApiClient["default"].convertToType(data['releasedPayments'], 'Number');
        }

        if (data.hasOwnProperty('incompletePayments')) {
          obj['incompletePayments'] = _ApiClient["default"].convertToType(data['incompletePayments'], 'Number');
        }

        if (data.hasOwnProperty('returnedPayments')) {
          obj['returnedPayments'] = _ApiClient["default"].convertToType(data['returnedPayments'], 'Number');
        }

        if (data.hasOwnProperty('withdrawnPayments')) {
          obj['withdrawnPayments'] = _ApiClient["default"].convertToType(data['withdrawnPayments'], 'Number');
        }

        if (data.hasOwnProperty('payoutType')) {
          obj['payoutType'] = _PayoutTypeV["default"].constructFromObject(data['payoutType']);
        }

        if (data.hasOwnProperty('submitting')) {
          obj['submitting'] = _PayoutPayorV["default"].constructFromObject(data['submitting']);
        }

        if (data.hasOwnProperty('payoutFrom')) {
          obj['payoutFrom'] = _PayoutPayorV["default"].constructFromObject(data['payoutFrom']);
        }

        if (data.hasOwnProperty('payoutTo')) {
          obj['payoutTo'] = _PayoutPayorV["default"].constructFromObject(data['payoutTo']);
        }

        if (data.hasOwnProperty('quoted')) {
          obj['quoted'] = _PayoutPrincipalV["default"].constructFromObject(data['quoted']);
        }

        if (data.hasOwnProperty('instructed')) {
          obj['instructed'] = _PayoutPrincipalV["default"].constructFromObject(data['instructed']);
        }

        if (data.hasOwnProperty('withdrawn')) {
          obj['withdrawn'] = _PayoutPrincipalV["default"].constructFromObject(data['withdrawn']);
        }
      }

      return obj;
    }
  }]);

  return GetPaymentsForPayoutResponseV4Summary;
}();
/**
 * The current status of the payout.
 * @member {module:model/GetPaymentsForPayoutResponseV4Summary.PayoutStatusEnum} payoutStatus
 */


GetPaymentsForPayoutResponseV4Summary.prototype['payoutStatus'] = undefined;
/**
 * The date/time at which the payout was submitted.
 * @member {Date} submittedDateTime
 */

GetPaymentsForPayoutResponseV4Summary.prototype['submittedDateTime'] = undefined;
/**
 * The date/time at which the payout was instructed.
 * @member {Date} instructedDateTime
 */

GetPaymentsForPayoutResponseV4Summary.prototype['instructedDateTime'] = undefined;
/**
 * @member {Date} withdrawnDateTime
 */

GetPaymentsForPayoutResponseV4Summary.prototype['withdrawnDateTime'] = undefined;
/**
 * The date/time at which the payout was quoted.
 * @member {Date} quotedDateTime
 */

GetPaymentsForPayoutResponseV4Summary.prototype['quotedDateTime'] = undefined;
/**
 * The memo attached to the payout.
 * @member {String} payoutMemo
 */

GetPaymentsForPayoutResponseV4Summary.prototype['payoutMemo'] = undefined;
/**
 * The count of payments within the payout.
 * @member {Number} totalPayments
 */

GetPaymentsForPayoutResponseV4Summary.prototype['totalPayments'] = undefined;
/**
 * The count of payments within the payout which have been confirmed.
 * @member {Number} confirmedPayments
 */

GetPaymentsForPayoutResponseV4Summary.prototype['confirmedPayments'] = undefined;
/**
 * The count of payments within the payout which have been released.
 * @member {Number} releasedPayments
 */

GetPaymentsForPayoutResponseV4Summary.prototype['releasedPayments'] = undefined;
/**
 * The count of payments within the payout which are incomplete.
 * @member {Number} incompletePayments
 */

GetPaymentsForPayoutResponseV4Summary.prototype['incompletePayments'] = undefined;
/**
 * The count of payments within the payout which have been returned.
 * @member {Number} returnedPayments
 */

GetPaymentsForPayoutResponseV4Summary.prototype['returnedPayments'] = undefined;
/**
 * The count of payments within the payout which have been withdrawn.
 * @member {Number} withdrawnPayments
 */

GetPaymentsForPayoutResponseV4Summary.prototype['withdrawnPayments'] = undefined;
/**
 * @member {module:model/PayoutTypeV4} payoutType
 */

GetPaymentsForPayoutResponseV4Summary.prototype['payoutType'] = undefined;
/**
 * @member {module:model/PayoutPayorV4} submitting
 */

GetPaymentsForPayoutResponseV4Summary.prototype['submitting'] = undefined;
/**
 * @member {module:model/PayoutPayorV4} payoutFrom
 */

GetPaymentsForPayoutResponseV4Summary.prototype['payoutFrom'] = undefined;
/**
 * @member {module:model/PayoutPayorV4} payoutTo
 */

GetPaymentsForPayoutResponseV4Summary.prototype['payoutTo'] = undefined;
/**
 * @member {module:model/PayoutPrincipalV4} quoted
 */

GetPaymentsForPayoutResponseV4Summary.prototype['quoted'] = undefined;
/**
 * @member {module:model/PayoutPrincipalV4} instructed
 */

GetPaymentsForPayoutResponseV4Summary.prototype['instructed'] = undefined;
/**
 * @member {module:model/PayoutPrincipalV4} withdrawn
 */

GetPaymentsForPayoutResponseV4Summary.prototype['withdrawn'] = undefined;
/**
 * Allowed values for the <code>payoutStatus</code> property.
 * @enum {String}
 * @readonly
 */

GetPaymentsForPayoutResponseV4Summary['PayoutStatusEnum'] = {
  /**
   * value: "ACCEPTED"
   * @const
   */
  "ACCEPTED": "ACCEPTED",

  /**
   * value: "REJECTED"
   * @const
   */
  "REJECTED": "REJECTED",

  /**
   * value: "SUBMITTED"
   * @const
   */
  "SUBMITTED": "SUBMITTED",

  /**
   * value: "QUOTED"
   * @const
   */
  "QUOTED": "QUOTED",

  /**
   * value: "INSTRUCTED"
   * @const
   */
  "INSTRUCTED": "INSTRUCTED",

  /**
   * value: "COMPLETED"
   * @const
   */
  "COMPLETED": "COMPLETED",

  /**
   * value: "INCOMPLETE"
   * @const
   */
  "INCOMPLETE": "INCOMPLETE",

  /**
   * value: "CONFIRMED"
   * @const
   */
  "CONFIRMED": "CONFIRMED",

  /**
   * value: "WITHDRAWN"
   * @const
   */
  "WITHDRAWN": "WITHDRAWN"
};
var _default = GetPaymentsForPayoutResponseV4Summary;
exports["default"] = _default;