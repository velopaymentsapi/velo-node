"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FundingEvent = _interopRequireDefault(require("./FundingEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The FundingAudit model module.
 * @module model/FundingAudit
 * @version 2.29.130
 */
var FundingAudit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FundingAudit</code>.
   * @alias module:model/FundingAudit
   */
  function FundingAudit() {
    _classCallCheck(this, FundingAudit);

    FundingAudit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FundingAudit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FundingAudit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundingAudit} obj Optional instance to populate.
     * @return {module:model/FundingAudit} The populated <code>FundingAudit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FundingAudit();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('dateTime')) {
          obj['dateTime'] = _ApiClient["default"].convertToType(data['dateTime'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('sourceAccountName')) {
          obj['sourceAccountName'] = _ApiClient["default"].convertToType(data['sourceAccountName'], 'String');
        }

        if (data.hasOwnProperty('fundingAccountName')) {
          obj['fundingAccountName'] = _ApiClient["default"].convertToType(data['fundingAccountName'], 'String');
        }

        if (data.hasOwnProperty('fundingType')) {
          obj['fundingType'] = _ApiClient["default"].convertToType(data['fundingType'], 'String');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], [_FundingEvent["default"]]);
        }

        if (data.hasOwnProperty('topupType')) {
          obj['topupType'] = _ApiClient["default"].convertToType(data['topupType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FundingAudit;
}();
/**
 * The amount funded
 * @member {Number} amount
 */


FundingAudit.prototype['amount'] = undefined;
/**
 * The currency of the funding
 * @member {String} currency
 */

FundingAudit.prototype['currency'] = undefined;
/**
 * @member {Date} dateTime
 */

FundingAudit.prototype['dateTime'] = undefined;
/**
 * @member {module:model/FundingAudit.StatusEnum} status
 */

FundingAudit.prototype['status'] = undefined;
/**
 * @member {String} sourceAccountName
 */

FundingAudit.prototype['sourceAccountName'] = undefined;
/**
 * @member {String} fundingAccountName
 */

FundingAudit.prototype['fundingAccountName'] = undefined;
/**
 * @member {module:model/FundingAudit.FundingTypeEnum} fundingType
 */

FundingAudit.prototype['fundingType'] = undefined;
/**
 * @member {Array.<module:model/FundingEvent>} events
 */

FundingAudit.prototype['events'] = undefined;
/**
 * @member {module:model/FundingAudit.TopupTypeEnum} topupType
 */

FundingAudit.prototype['topupType'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

FundingAudit['StatusEnum'] = {
  /**
   * value: "PENDING"
   * @const
   */
  "PENDING": "PENDING",

  /**
   * value: "FAILED"
   * @const
   */
  "FAILED": "FAILED",

  /**
   * value: "CREDIT"
   * @const
   */
  "CREDIT": "CREDIT",

  /**
   * value: "DEBIT"
   * @const
   */
  "DEBIT": "DEBIT"
};
/**
 * Allowed values for the <code>fundingType</code> property.
 * @enum {String}
 * @readonly
 */

FundingAudit['FundingTypeEnum'] = {
  /**
   * value: "ACH"
   * @const
   */
  "ACH": "ACH",

  /**
   * value: "WIRE"
   * @const
   */
  "WIRE": "WIRE",

  /**
   * value: "EMBEDDED"
   * @const
   */
  "EMBEDDED": "EMBEDDED"
};
/**
 * Allowed values for the <code>topupType</code> property.
 * @enum {String}
 * @readonly
 */

FundingAudit['TopupTypeEnum'] = {
  /**
   * value: "AUTOMATIC"
   * @const
   */
  "AUTOMATIC": "AUTOMATIC",

  /**
   * value: "MANUAL"
   * @const
   */
  "MANUAL": "MANUAL"
};
var _default = FundingAudit;
exports["default"] = _default;