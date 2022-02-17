"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SourceEvent = _interopRequireDefault(require("./SourceEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Ping model module.
 * @module model/Ping
 * @version 2.29.128
 */
var Ping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Ping</code>.
   * Ping event for testing the webhook integration. Can be initiated via the Web UI.
   * @alias module:model/Ping
   * @implements module:model/SourceEvent
   * @param sourceType {String} OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
   * @param eventId {String} UUID id of the source event in the Velo platform
   * @param createdAt {Date} ISO8601 timestamp indicating when the source event was created
   */
  function Ping(sourceType, eventId, createdAt) {
    _classCallCheck(this, Ping);

    _SourceEvent["default"].initialize(this, sourceType, eventId, createdAt);

    Ping.initialize(this, sourceType, eventId, createdAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Ping, null, [{
    key: "initialize",
    value: function initialize(obj, sourceType, eventId, createdAt) {
      obj['sourceType'] = sourceType;
      obj['eventId'] = eventId;
      obj['createdAt'] = createdAt;
    }
    /**
     * Constructs a <code>Ping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ping} obj Optional instance to populate.
     * @return {module:model/Ping} The populated <code>Ping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Ping();

        _SourceEvent["default"].constructFromObject(data, obj);

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

  return Ping;
}();
/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */


Ping.prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

Ping.prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

Ping.prototype['createdAt'] = undefined; // Implement SourceEvent interface:

/**
 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
 * @member {String} sourceType
 */

_SourceEvent["default"].prototype['sourceType'] = undefined;
/**
 * UUID id of the source event in the Velo platform
 * @member {String} eventId
 */

_SourceEvent["default"].prototype['eventId'] = undefined;
/**
 * ISO8601 timestamp indicating when the source event was created
 * @member {Date} createdAt
 */

_SourceEvent["default"].prototype['createdAt'] = undefined;
var _default = Ping;
exports["default"] = _default;