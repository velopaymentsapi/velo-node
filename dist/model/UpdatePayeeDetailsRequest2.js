"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Challenge = _interopRequireDefault(require("./Challenge2"));

var _Company = _interopRequireDefault(require("./Company2"));

var _Individual = _interopRequireDefault(require("./Individual2"));

var _PayeeAddress = _interopRequireDefault(require("./PayeeAddress2"));

var _PayeeType = _interopRequireDefault(require("./PayeeType2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UpdatePayeeDetailsRequest2 model module.
 * @module model/UpdatePayeeDetailsRequest2
 * @version 2.29.128
 */
var UpdatePayeeDetailsRequest2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdatePayeeDetailsRequest2</code>.
   * @alias module:model/UpdatePayeeDetailsRequest2
   */
  function UpdatePayeeDetailsRequest2() {
    _classCallCheck(this, UpdatePayeeDetailsRequest2);

    UpdatePayeeDetailsRequest2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdatePayeeDetailsRequest2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdatePayeeDetailsRequest2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePayeeDetailsRequest2} obj Optional instance to populate.
     * @return {module:model/UpdatePayeeDetailsRequest2} The populated <code>UpdatePayeeDetailsRequest2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdatePayeeDetailsRequest2();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _PayeeAddress["default"].constructFromObject(data['address']);
        }

        if (data.hasOwnProperty('individual')) {
          obj['individual'] = _Individual["default"].constructFromObject(data['individual']);
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _Company["default"].constructFromObject(data['company']);
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('payeeType')) {
          obj['payeeType'] = _PayeeType["default"].constructFromObject(data['payeeType']);
        }

        if (data.hasOwnProperty('challenge')) {
          obj['challenge'] = _Challenge["default"].constructFromObject(data['challenge']);
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('contactSmsNumber')) {
          obj['contactSmsNumber'] = _ApiClient["default"].convertToType(data['contactSmsNumber'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpdatePayeeDetailsRequest2;
}();
/**
 * @member {module:model/PayeeAddress2} address
 */


UpdatePayeeDetailsRequest2.prototype['address'] = undefined;
/**
 * @member {module:model/Individual2} individual
 */

UpdatePayeeDetailsRequest2.prototype['individual'] = undefined;
/**
 * @member {module:model/Company2} company
 */

UpdatePayeeDetailsRequest2.prototype['company'] = undefined;
/**
 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR> See the /v1/supportedLanguages endpoint to list the available codes for an environment. 
 * @member {String} language
 */

UpdatePayeeDetailsRequest2.prototype['language'] = undefined;
/**
 * @member {module:model/PayeeType2} payeeType
 */

UpdatePayeeDetailsRequest2.prototype['payeeType'] = undefined;
/**
 * @member {module:model/Challenge2} challenge
 */

UpdatePayeeDetailsRequest2.prototype['challenge'] = undefined;
/**
 * @member {String} email
 */

UpdatePayeeDetailsRequest2.prototype['email'] = undefined;
/**
 * The phone number of a device that the payee wishes to receive sms messages on 
 * @member {String} contactSmsNumber
 */

UpdatePayeeDetailsRequest2.prototype['contactSmsNumber'] = undefined;
var _default = UpdatePayeeDetailsRequest2;
exports["default"] = _default;