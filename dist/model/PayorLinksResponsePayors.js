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
 * The PayorLinksResponsePayors model module.
 * @module model/PayorLinksResponsePayors
 * @version 2.26.124
 */
var PayorLinksResponsePayors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorLinksResponsePayors</code>.
   * @alias module:model/PayorLinksResponsePayors
   * @param payorId {String} 
   * @param payorName {String} 
   */
  function PayorLinksResponsePayors(payorId, payorName) {
    _classCallCheck(this, PayorLinksResponsePayors);

    PayorLinksResponsePayors.initialize(this, payorId, payorName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorLinksResponsePayors, null, [{
    key: "initialize",
    value: function initialize(obj, payorId, payorName) {
      obj['payorId'] = payorId;
      obj['payorName'] = payorName;
    }
    /**
     * Constructs a <code>PayorLinksResponsePayors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorLinksResponsePayors} obj Optional instance to populate.
     * @return {module:model/PayorLinksResponsePayors} The populated <code>PayorLinksResponsePayors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorLinksResponsePayors();

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('payorName')) {
          obj['payorName'] = _ApiClient["default"].convertToType(data['payorName'], 'String');
        }

        if (data.hasOwnProperty('primaryContactEmail')) {
          obj['primaryContactEmail'] = _ApiClient["default"].convertToType(data['primaryContactEmail'], 'String');
        }

        if (data.hasOwnProperty('kycState')) {
          obj['kycState'] = _ApiClient["default"].convertToType(data['kycState'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayorLinksResponsePayors;
}();
/**
 * @member {String} payorId
 */


PayorLinksResponsePayors.prototype['payorId'] = undefined;
/**
 * @member {String} payorName
 */

PayorLinksResponsePayors.prototype['payorName'] = undefined;
/**
 * @member {String} primaryContactEmail
 */

PayorLinksResponsePayors.prototype['primaryContactEmail'] = undefined;
/**
 * @member {module:model/PayorLinksResponsePayors.KycStateEnum} kycState
 */

PayorLinksResponsePayors.prototype['kycState'] = undefined;
/**
 * Allowed values for the <code>kycState</code> property.
 * @enum {String}
 * @readonly
 */

PayorLinksResponsePayors['KycStateEnum'] = {
  /**
   * value: "FAILED_KYC"
   * @const
   */
  "FAILED_KYC": "FAILED_KYC",

  /**
   * value: "PASSED_KYC"
   * @const
   */
  "PASSED_KYC": "PASSED_KYC",

  /**
   * value: "REQUIRES_KYC"
   * @const
   */
  "REQUIRES_KYC": "REQUIRES_KYC"
};
var _default = PayorLinksResponsePayors;
exports["default"] = _default;