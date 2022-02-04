"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SourceEvent model module.
 * @module model/SourceEvent
 * @version 2.29.130
 */
var SourceEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SourceEvent</code>.
   * Base type for each source event payload
   * @alias module:model/SourceEvent
   * @param sourceType {String} OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
   * @param eventId {String} UUID id of the source event in the Velo platform
   * @param createdAt {Date} ISO8601 timestamp indicating when the source event was created
   */
  function SourceEvent(sourceType, eventId, createdAt) {
    _classCallCheck(this, SourceEvent);

    SourceEvent.initialize(this, sourceType, eventId, createdAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SourceEvent, null, [{
    key: "initialize",
    value: function initialize(obj, sourceType, eventId, createdAt) {
      obj['sourceType'] = sourceType;
      obj['eventId'] = eventId;
      obj['createdAt'] = createdAt;
    }
    /**
     * Constructs a <code>SourceEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceEvent} obj Optional instance to populate.
     * @return {module:model/SourceEvent} The populated <code>SourceEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SourceEvent();

        if (data.hasOwnProperty('sourceType')) {
          obj['sourceType'] = _ApiClient["default"].convertToType(data['sourceType'], 'String');
        }

        if (data.hasOwnProperty('eventId')) {
          obj['eventId'] = _ApiClient["default"].convertToType(data['eventId'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return SourceEvent;
}();
/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */


SourceEvent.prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

SourceEvent.prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

SourceEvent.prototype['createdAt'] = undefined;
var _default = SourceEvent;
exports["default"] = _default;