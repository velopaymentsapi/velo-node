"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetPayeeListResponseCompany = _interopRequireDefault(require("./GetPayeeListResponseCompany2"));

var _GetPayeeListResponseIndividual = _interopRequireDefault(require("./GetPayeeListResponseIndividual2"));

var _OnboardedStatus = _interopRequireDefault(require("./OnboardedStatus"));

var _PayeePayorRef = _interopRequireDefault(require("./PayeePayorRef"));

var _PayeeType = _interopRequireDefault(require("./PayeeType"));

var _WatchlistStatus = _interopRequireDefault(require("./WatchlistStatus2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetPayeeListResponse2 model module.
 * @module model/GetPayeeListResponse2
 * @version 2.26.124
 */
var GetPayeeListResponse2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPayeeListResponse2</code>.
   * @alias module:model/GetPayeeListResponse2
   */
  function GetPayeeListResponse2() {
    _classCallCheck(this, GetPayeeListResponse2);

    GetPayeeListResponse2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPayeeListResponse2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPayeeListResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPayeeListResponse2} obj Optional instance to populate.
     * @return {module:model/GetPayeeListResponse2} The populated <code>GetPayeeListResponse2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPayeeListResponse2();

        if (data.hasOwnProperty('payeeId')) {
          obj['payeeId'] = _ApiClient["default"].convertToType(data['payeeId'], 'String');
        }

        if (data.hasOwnProperty('payorRefs')) {
          obj['payorRefs'] = _ApiClient["default"].convertToType(data['payorRefs'], [_PayeePayorRef["default"]]);
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

  return GetPayeeListResponse2;
}();
/**
 * @member {String} payeeId
 */


GetPayeeListResponse2.prototype['payeeId'] = undefined;
/**
 * @member {Array.<module:model/PayeePayorRef>} payorRefs
 */

GetPayeeListResponse2.prototype['payorRefs'] = undefined;
/**
 * @member {String} email
 */

GetPayeeListResponse2.prototype['email'] = undefined;
/**
 * @member {module:model/OnboardedStatus} onboardedStatus
 */

GetPayeeListResponse2.prototype['onboardedStatus'] = undefined;
/**
 * @member {module:model/WatchlistStatus2} watchlistStatus
 */

GetPayeeListResponse2.prototype['watchlistStatus'] = undefined;
/**
 * @member {String} watchlistStatusUpdatedTimestamp
 */

GetPayeeListResponse2.prototype['watchlistStatusUpdatedTimestamp'] = undefined;
/**
 * @member {String} watchlistOverrideComment
 */

GetPayeeListResponse2.prototype['watchlistOverrideComment'] = undefined;
/**
 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR> See the /v1/supportedLanguages endpoint to list the available codes for an environment. 
 * @member {String} language
 */

GetPayeeListResponse2.prototype['language'] = undefined;
/**
 * @member {Date} created
 */

GetPayeeListResponse2.prototype['created'] = undefined;
/**
 * @member {String} country
 */

GetPayeeListResponse2.prototype['country'] = undefined;
/**
 * @member {String} displayName
 */

GetPayeeListResponse2.prototype['displayName'] = undefined;
/**
 * @member {module:model/PayeeType} payeeType
 */

GetPayeeListResponse2.prototype['payeeType'] = undefined;
/**
 * @member {Boolean} disabled
 */

GetPayeeListResponse2.prototype['disabled'] = undefined;
/**
 * @member {String} disabledComment
 */

GetPayeeListResponse2.prototype['disabledComment'] = undefined;
/**
 * @member {Date} disabledUpdatedTimestamp
 */

GetPayeeListResponse2.prototype['disabledUpdatedTimestamp'] = undefined;
/**
 * @member {module:model/GetPayeeListResponseIndividual2} individual
 */

GetPayeeListResponse2.prototype['individual'] = undefined;
/**
 * @member {module:model/GetPayeeListResponseCompany2} company
 */

GetPayeeListResponse2.prototype['company'] = undefined;
var _default = GetPayeeListResponse2;
exports["default"] = _default;