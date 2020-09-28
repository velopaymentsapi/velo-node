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
 * The PayoutPrincipalV4 model module.
 * @module model/PayoutPrincipalV4
 * @version 2.23.78
 */
var PayoutPrincipalV4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayoutPrincipalV4</code>.
   * Details of principal participating in a payout.
   * @alias module:model/PayoutPrincipalV4
   * @param principal {String} Email address if principal is a user or ID if application.
   * @param principalId {String} The id of the principal.
   */
  function PayoutPrincipalV4(principal, principalId) {
    _classCallCheck(this, PayoutPrincipalV4);

    PayoutPrincipalV4.initialize(this, principal, principalId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayoutPrincipalV4, null, [{
    key: "initialize",
    value: function initialize(obj, principal, principalId) {
      obj['principal'] = principal;
      obj['principalId'] = principalId;
    }
    /**
     * Constructs a <code>PayoutPrincipalV4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutPrincipalV4} obj Optional instance to populate.
     * @return {module:model/PayoutPrincipalV4} The populated <code>PayoutPrincipalV4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayoutPrincipalV4();

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

  return PayoutPrincipalV4;
}();
/**
 * Email address if principal is a user or ID if application.
 * @member {String} principal
 */


PayoutPrincipalV4.prototype['principal'] = undefined;
/**
 * The id of the principal.
 * @member {String} principalId
 */

PayoutPrincipalV4.prototype['principalId'] = undefined;
var _default = PayoutPrincipalV4;
exports["default"] = _default;