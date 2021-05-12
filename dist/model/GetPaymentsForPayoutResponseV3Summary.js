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
 * The GetPaymentsForPayoutResponseV3Summary model module.
 * @module model/GetPaymentsForPayoutResponseV3Summary
 * @version 2.26.127
 */
var GetPaymentsForPayoutResponseV3Summary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPaymentsForPayoutResponseV3Summary</code>.
   * @alias module:model/GetPaymentsForPayoutResponseV3Summary
   */
  function GetPaymentsForPayoutResponseV3Summary() {
    _classCallCheck(this, GetPaymentsForPayoutResponseV3Summary);

    GetPaymentsForPayoutResponseV3Summary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPaymentsForPayoutResponseV3Summary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPaymentsForPayoutResponseV3Summary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPaymentsForPayoutResponseV3Summary} obj Optional instance to populate.
     * @return {module:model/GetPaymentsForPayoutResponseV3Summary} The populated <code>GetPaymentsForPayoutResponseV3Summary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPaymentsForPayoutResponseV3Summary();

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

        if (data.hasOwnProperty('failedPayments')) {
          obj['failedPayments'] = _ApiClient["default"].convertToType(data['failedPayments'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetPaymentsForPayoutResponseV3Summary;
}();
/**
 * The current status of the payout.
 * @member {module:model/GetPaymentsForPayoutResponseV3Summary.PayoutStatusEnum} payoutStatus
 */


GetPaymentsForPayoutResponseV3Summary.prototype['payoutStatus'] = undefined;
/**
 * The date/time at which the payout was submitted.
 * @member {Date} submittedDateTime
 */

GetPaymentsForPayoutResponseV3Summary.prototype['submittedDateTime'] = undefined;
/**
 * The date/time at which the payout was instructed.
 * @member {Date} instructedDateTime
 */

GetPaymentsForPayoutResponseV3Summary.prototype['instructedDateTime'] = undefined;
/**
 * The date/time at which the payout was withdrawn.
 * @member {Date} withdrawnDateTime
 */

GetPaymentsForPayoutResponseV3Summary.prototype['withdrawnDateTime'] = undefined;
/**
 * The memo attached to the payout.
 * @member {String} payoutMemo
 */

GetPaymentsForPayoutResponseV3Summary.prototype['payoutMemo'] = undefined;
/**
 * The count of payments within the payout.
 * @member {Number} totalPayments
 */

GetPaymentsForPayoutResponseV3Summary.prototype['totalPayments'] = undefined;
/**
 * The count of payments within the payout which have been confirmed.
 * @member {Number} confirmedPayments
 */

GetPaymentsForPayoutResponseV3Summary.prototype['confirmedPayments'] = undefined;
/**
 * The count of payments within the payout which have been released.
 * @member {Number} releasedPayments
 */

GetPaymentsForPayoutResponseV3Summary.prototype['releasedPayments'] = undefined;
/**
 * The count of payments within the payout which are incomplete.
 * @member {Number} incompletePayments
 */

GetPaymentsForPayoutResponseV3Summary.prototype['incompletePayments'] = undefined;
/**
 * The count of payments within the payout which have failed or been returned.
 * @member {Number} failedPayments
 */

GetPaymentsForPayoutResponseV3Summary.prototype['failedPayments'] = undefined;
/**
 * Allowed values for the <code>payoutStatus</code> property.
 * @enum {String}
 * @readonly
 */

GetPaymentsForPayoutResponseV3Summary['PayoutStatusEnum'] = {
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
var _default = GetPaymentsForPayoutResponseV3Summary;
exports["default"] = _default;