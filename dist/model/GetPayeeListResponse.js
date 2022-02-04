"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetPayeeListResponseCompany = _interopRequireDefault(require("./GetPayeeListResponseCompany"));

var _GetPayeeListResponseIndividual = _interopRequireDefault(require("./GetPayeeListResponseIndividual"));

var _OnboardedStatus = _interopRequireDefault(require("./OnboardedStatus2"));

var _PayeePayorRefV = _interopRequireDefault(require("./PayeePayorRefV3"));

var _PayeeType = _interopRequireDefault(require("./PayeeType2"));

var _WatchlistStatus = _interopRequireDefault(require("./WatchlistStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetPayeeListResponse model module.
 * @module model/GetPayeeListResponse
 * @version 2.29.130
 */
var GetPayeeListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPayeeListResponse</code>.
   * @alias module:model/GetPayeeListResponse
   */
  function GetPayeeListResponse() {
    _classCallCheck(this, GetPayeeListResponse);

    GetPayeeListResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPayeeListResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPayeeListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPayeeListResponse} obj Optional instance to populate.
     * @return {module:model/GetPayeeListResponse} The populated <code>GetPayeeListResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPayeeListResponse();

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('payorRefs')) {
          obj['payorRefs'] = _ApiClient["default"].convertToType(data['payorRefs'], [_PayeePayorRefV["default"]]);
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('onboardedStatus')) {
          obj['onboardedStatus'] = _OnboardedStatus["default"].constructFromObject(data['onboardedStatus']);
        }

        if (data.hasOwnProperty('watchlistStatus')) {
          obj['watchlistStatus'] = _WatchlistStatus["default"].constructFromObject(data['watchlistStatus']);
        }

        if (data.hasOwnProperty('watchlistStatusUpdatedTimestamp')) {
          obj['watchlistStatusUpdatedTimestamp'] = _ApiClient["default"].convertToType(data['watchlistStatusUpdatedTimestamp'], 'String');
        }

        if (data.hasOwnProperty('watchlistOverrideComment')) {
          obj['watchlistOverrideComment'] = _ApiClient["default"].convertToType(data['watchlistOverrideComment'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('payeeType')) {
          obj['payeeType'] = _PayeeType["default"].constructFromObject(data['payeeType']);
        }

        if (data.hasOwnProperty('disabled')) {
          obj['disabled'] = _ApiClient["default"].convertToType(data['disabled'], 'Boolean');
        }

        if (data.hasOwnProperty('disabledComment')) {
          obj['disabledComment'] = _ApiClient["default"].convertToType(data['disabledComment'], 'String');
        }

        if (data.hasOwnProperty('disabledUpdatedTimestamp')) {
          obj['disabledUpdatedTimestamp'] = _ApiClient["default"].convertToType(data['disabledUpdatedTimestamp'], 'Date');
        }

        if (data.hasOwnProperty('individual')) {
          obj['individual'] = _GetPayeeListResponseIndividual["default"].constructFromObject(data['individual']);
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _GetPayeeListResponseCompany["default"].constructFromObject(data['company']);
        }
      }

      return obj;
    }
  }]);

  return GetPayeeListResponse;
}();
/**
 * @member {String} payeeId
 */


GetPayeeListResponse.prototype['payeeId'] = undefined;
/**
 * @member {Array.<module:model/PayeePayorRefV3>} payorRefs
 */

GetPayeeListResponse.prototype['payorRefs'] = undefined;
/**
 * @member {String} email
 */

GetPayeeListResponse.prototype['email'] = undefined;
/**
 * @member {module:model/OnboardedStatus2} onboardedStatus
 */

GetPayeeListResponse.prototype['onboardedStatus'] = undefined;
/**
 * @member {module:model/WatchlistStatus} watchlistStatus
 */

GetPayeeListResponse.prototype['watchlistStatus'] = undefined;
/**
 * @member {String} watchlistStatusUpdatedTimestamp
 */

GetPayeeListResponse.prototype['watchlistStatusUpdatedTimestamp'] = undefined;
/**
 * @member {String} watchlistOverrideComment
 */

GetPayeeListResponse.prototype['watchlistOverrideComment'] = undefined;
/**
 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR> See the /v1/supportedLanguages endpoint to list the available codes for an environment. 
 * @member {String} language
 */

GetPayeeListResponse.prototype['language'] = undefined;
/**
 * @member {Date} created
 */

GetPayeeListResponse.prototype['created'] = undefined;
/**
 * @member {String} country
 */

GetPayeeListResponse.prototype['country'] = undefined;
/**
 * @member {String} displayName
 */

GetPayeeListResponse.prototype['displayName'] = undefined;
/**
 * @member {module:model/PayeeType2} payeeType
 */

GetPayeeListResponse.prototype['payeeType'] = undefined;
/**
 * @member {Boolean} disabled
 */

GetPayeeListResponse.prototype['disabled'] = undefined;
/**
 * @member {String} disabledComment
 */

GetPayeeListResponse.prototype['disabledComment'] = undefined;
/**
 * @member {Date} disabledUpdatedTimestamp
 */

GetPayeeListResponse.prototype['disabledUpdatedTimestamp'] = undefined;
/**
 * @member {module:model/GetPayeeListResponseIndividual} individual
 */

GetPayeeListResponse.prototype['individual'] = undefined;
/**
 * @member {module:model/GetPayeeListResponseCompany} company
 */

GetPayeeListResponse.prototype['company'] = undefined;
var _default = GetPayeeListResponse;
exports["default"] = _default;