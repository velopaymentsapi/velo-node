"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Challenge = _interopRequireDefault(require("./Challenge2"));

var _Company = _interopRequireDefault(require("./Company2"));

var _Individual = _interopRequireDefault(require("./Individual2"));

var _Language = _interopRequireDefault(require("./Language2"));

var _PayeeAddress = _interopRequireDefault(require("./PayeeAddress2"));

var _PayeeType = _interopRequireDefault(require("./PayeeType2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UpdatePayeeDetailsRequest model module.
 * @module model/UpdatePayeeDetailsRequest
 * @version 2.23.78
 */
var UpdatePayeeDetailsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdatePayeeDetailsRequest</code>.
   * @alias module:model/UpdatePayeeDetailsRequest
   */
  function UpdatePayeeDetailsRequest() {
    _classCallCheck(this, UpdatePayeeDetailsRequest);

    UpdatePayeeDetailsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdatePayeeDetailsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdatePayeeDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePayeeDetailsRequest} obj Optional instance to populate.
     * @return {module:model/UpdatePayeeDetailsRequest} The populated <code>UpdatePayeeDetailsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdatePayeeDetailsRequest();

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
          obj['language'] = _Language["default"].constructFromObject(data['language']);
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
      }

      return obj;
    }
  }]);

  return UpdatePayeeDetailsRequest;
}();
/**
 * @member {module:model/PayeeAddress2} address
 */


UpdatePayeeDetailsRequest.prototype['address'] = undefined;
/**
 * @member {module:model/Individual2} individual
 */

UpdatePayeeDetailsRequest.prototype['individual'] = undefined;
/**
 * @member {module:model/Company2} company
 */

UpdatePayeeDetailsRequest.prototype['company'] = undefined;
/**
 * @member {module:model/Language2} language
 */

UpdatePayeeDetailsRequest.prototype['language'] = undefined;
/**
 * @member {module:model/PayeeType2} payeeType
 */

UpdatePayeeDetailsRequest.prototype['payeeType'] = undefined;
/**
 * @member {module:model/Challenge2} challenge
 */

UpdatePayeeDetailsRequest.prototype['challenge'] = undefined;
/**
 * @member {String} email
 */

UpdatePayeeDetailsRequest.prototype['email'] = undefined;
var _default = UpdatePayeeDetailsRequest;
exports["default"] = _default;