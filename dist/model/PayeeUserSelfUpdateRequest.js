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
 * The PayeeUserSelfUpdateRequest model module.
 * @module model/PayeeUserSelfUpdateRequest
 * @version 2.26.127
 */
var PayeeUserSelfUpdateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeeUserSelfUpdateRequest</code>.
   * &lt;p&gt;All properties are optional&lt;/p&gt; &lt;p&gt;Only provided properties will be updated&lt;/p&gt; &lt;p&gt;Use null to null out a property that is allowed to be nullable&lt;/p&gt; 
   * @alias module:model/PayeeUserSelfUpdateRequest
   */
  function PayeeUserSelfUpdateRequest() {
    _classCallCheck(this, PayeeUserSelfUpdateRequest);

    PayeeUserSelfUpdateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeeUserSelfUpdateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayeeUserSelfUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeUserSelfUpdateRequest} obj Optional instance to populate.
     * @return {module:model/PayeeUserSelfUpdateRequest} The populated <code>PayeeUserSelfUpdateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeeUserSelfUpdateRequest();

        if (data.hasOwnProperty('primaryContactNumber')) {
          obj['primaryContactNumber'] = _ApiClient["default"].convertToType(data['primaryContactNumber'], 'String');
        }

        if (data.hasOwnProperty('secondaryContactNumber')) {
          obj['secondaryContactNumber'] = _ApiClient["default"].convertToType(data['secondaryContactNumber'], 'String');
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('smsNumber')) {
          obj['smsNumber'] = _ApiClient["default"].convertToType(data['smsNumber'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayeeUserSelfUpdateRequest;
}();
/**
 * The main contact number for the user 
 * @member {String} primaryContactNumber
 */


PayeeUserSelfUpdateRequest.prototype['primaryContactNumber'] = undefined;
/**
 * The secondary contact number for the user 
 * @member {String} secondaryContactNumber
 */

PayeeUserSelfUpdateRequest.prototype['secondaryContactNumber'] = undefined;
/**
 * @member {String} firstName
 */

PayeeUserSelfUpdateRequest.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

PayeeUserSelfUpdateRequest.prototype['lastName'] = undefined;
/**
 * the email address of the user
 * @member {String} email
 */

PayeeUserSelfUpdateRequest.prototype['email'] = undefined;
/**
 * The phone number of a device that the user can receive sms messages on 
 * @member {String} smsNumber
 */

PayeeUserSelfUpdateRequest.prototype['smsNumber'] = undefined;
var _default = PayeeUserSelfUpdateRequest;
exports["default"] = _default;