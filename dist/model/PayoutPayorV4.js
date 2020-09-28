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
 * The PayoutPayorV4 model module.
 * @module model/PayoutPayorV4
 * @version 2.23.78
 */
var PayoutPayorV4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayoutPayorV4</code>.
   * Details of payor and principal participating in a payout.
   * @alias module:model/PayoutPayorV4
   * @param payorId {String} The id of the payor.
   * @param payorName {String} The name of the payor.
   * @param dbaName {String} The alternate name of the payor.
   * @param principal {String} Email address if principal is a user or ID if application.
   * @param principalId {String} The id of the principal.
   */
  function PayoutPayorV4(payorId, payorName, dbaName, principal, principalId) {
    _classCallCheck(this, PayoutPayorV4);

    PayoutPayorV4.initialize(this, payorId, payorName, dbaName, principal, principalId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayoutPayorV4, null, [{
    key: "initialize",
    value: function initialize(obj, payorId, payorName, dbaName, principal, principalId) {
      obj['payorId'] = payorId;
      obj['payorName'] = payorName;
      obj['dbaName'] = dbaName;
      obj['principal'] = principal;
      obj['principalId'] = principalId;
    }
    /**
     * Constructs a <code>PayoutPayorV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutPayorV4} obj Optional instance to populate.
     * @return {module:model/PayoutPayorV4} The populated <code>PayoutPayorV4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayoutPayorV4();

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('payorName')) {
          obj['payorName'] = _ApiClient["default"].convertToType(data['payorName'], 'String');
        }

        if (data.hasOwnProperty('dbaName')) {
          obj['dbaName'] = _ApiClient["default"].convertToType(data['dbaName'], 'String');
        }

        if (data.hasOwnProperty('principal')) {
          obj['principal'] = _ApiClient["default"].convertToType(data['principal'], 'String');
        }

        if (data.hasOwnProperty('principalId')) {
          obj['principalId'] = _ApiClient["default"].convertToType(data['principalId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayoutPayorV4;
}();
/**
 * The id of the payor.
 * @member {String} payorId
 */


PayoutPayorV4.prototype['payorId'] = undefined;
/**
 * The name of the payor.
 * @member {String} payorName
 */

PayoutPayorV4.prototype['payorName'] = undefined;
/**
 * The alternate name of the payor.
 * @member {String} dbaName
 */

PayoutPayorV4.prototype['dbaName'] = undefined;
/**
 * Email address if principal is a user or ID if application.
 * @member {String} principal
 */

PayoutPayorV4.prototype['principal'] = undefined;
/**
 * The id of the principal.
 * @member {String} principalId
 */

PayoutPayorV4.prototype['principalId'] = undefined;
var _default = PayoutPayorV4;
exports["default"] = _default;