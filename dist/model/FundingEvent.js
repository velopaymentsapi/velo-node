"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FundingEventType = _interopRequireDefault(require("./FundingEventType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FundingEvent model module.
 * @module model/FundingEvent
 * @version 2.23.78
 */
var FundingEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FundingEvent</code>.
   * @alias module:model/FundingEvent
   */
  function FundingEvent() {
    _classCallCheck(this, FundingEvent);

    FundingEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FundingEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FundingEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundingEvent} obj Optional instance to populate.
     * @return {module:model/FundingEvent} The populated <code>FundingEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FundingEvent();

        if (data.hasOwnProperty('eventId')) {
          obj['eventId'] = _ApiClient["default"].convertToType(data['eventId'], 'String');
        }

        if (data.hasOwnProperty('eventDateTime')) {
          obj['eventDateTime'] = _ApiClient["default"].convertToType(data['eventDateTime'], 'Date');
        }

        if (data.hasOwnProperty('fundingEventType')) {
          obj['fundingEventType'] = _FundingEventType["default"].constructFromObject(data['fundingEventType']);
        }

        if (data.hasOwnProperty('principal')) {
          obj['principal'] = _ApiClient["default"].convertToType(data['principal'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FundingEvent;
}();
/**
 * @member {String} eventId
 */


FundingEvent.prototype['eventId'] = undefined;
/**
 * @member {Date} eventDateTime
 */

FundingEvent.prototype['eventDateTime'] = undefined;
/**
 * @member {module:model/FundingEventType} fundingEventType
 */

FundingEvent.prototype['fundingEventType'] = undefined;
/**
 * @member {String} principal
 */

FundingEvent.prototype['principal'] = undefined;
var _default = FundingEvent;
exports["default"] = _default;