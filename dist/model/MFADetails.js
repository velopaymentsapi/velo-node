"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MFAType = _interopRequireDefault(require("./MFAType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MFADetails model module.
 * @module model/MFADetails
 * @version 2.26.127
 */
var MFADetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MFADetails</code>.
   * @alias module:model/MFADetails
   */
  function MFADetails() {
    _classCallCheck(this, MFADetails);

    MFADetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MFADetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MFADetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MFADetails} obj Optional instance to populate.
     * @return {module:model/MFADetails} The populated <code>MFADetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MFADetails();

        if (data.hasOwnProperty('mfa_type')) {
          obj['mfa_type'] = _MFAType["default"].constructFromObject(data['mfa_type']);
        }

        if (data.hasOwnProperty('verified')) {
          obj['verified'] = _ApiClient["default"].convertToType(data['verified'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return MFADetails;
}();
/**
 * @member {module:model/MFAType} mfa_type
 */


MFADetails.prototype['mfa_type'] = undefined;
/**
 * true if the user has used the MFA device for login
 * @member {Boolean} verified
 */

MFADetails.prototype['verified'] = undefined;
var _default = MFADetails;
exports["default"] = _default;