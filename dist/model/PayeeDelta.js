"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OnboardedStatus = _interopRequireDefault(require("./OnboardedStatus2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PayeeDelta model module.
 * @module model/PayeeDelta
 * @version 2.29.130
 */
var PayeeDelta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayeeDelta</code>.
   * @alias module:model/PayeeDelta
   * @param remoteId {String} 
   * @param payeeId {String} 
   */
  function PayeeDelta(remoteId, payeeId) {
    _classCallCheck(this, PayeeDelta);

    PayeeDelta.initialize(this, remoteId, payeeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayeeDelta, null, [{
    key: "initialize",
    value: function initialize(obj, remoteId, payeeId) {
      obj['remoteId'] = remoteId;
      obj['payeeId'] = payeeId;
    }
    /**
     * Constructs a <code>PayeeDelta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayeeDelta} obj Optional instance to populate.
     * @return {module:model/PayeeDelta} The populated <code>PayeeDelta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayeeDelta();

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('dbaName')) {
          obj['dbaName'] = _ApiClient["default"].convertToType(data['dbaName'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('payeeCountry')) {
          obj['payeeCountry'] = _ApiClient["default"].convertToType(data['payeeCountry'], 'String');
        }

        if (data.hasOwnProperty('onboardedStatus')) {
          obj['onboardedStatus'] = _OnboardedStatus["default"].constructFromObject(data['onboardedStatus']);
        }
      }

      return obj;
    }
  }]);

  return PayeeDelta;
}();
/**
 * @member {String} remoteId
 */


PayeeDelta.prototype['remoteId'] = undefined;
/**
 * @member {String} payeeId
 */

PayeeDelta.prototype['payeeId'] = undefined;
/**
 * @member {String} displayName
 */

PayeeDelta.prototype['displayName'] = undefined;
/**
 * @member {String} dbaName
 */

PayeeDelta.prototype['dbaName'] = undefined;
/**
 * @member {String} email
 */

PayeeDelta.prototype['email'] = undefined;
/**
 * @member {String} payeeCountry
 */

PayeeDelta.prototype['payeeCountry'] = undefined;
/**
 * @member {module:model/OnboardedStatus2} onboardedStatus
 */

PayeeDelta.prototype['onboardedStatus'] = undefined;
var _default = PayeeDelta;
exports["default"] = _default;