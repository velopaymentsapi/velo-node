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
 * The UpdateRemoteIdRequest2 model module.
 * @module model/UpdateRemoteIdRequest2
 * @version 2.26.127
 */
var UpdateRemoteIdRequest2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateRemoteIdRequest2</code>.
   * @alias module:model/UpdateRemoteIdRequest2
   * @param payorId {String} 
   * @param remoteId {String} 
   */
  function UpdateRemoteIdRequest2(payorId, remoteId) {
    _classCallCheck(this, UpdateRemoteIdRequest2);

    UpdateRemoteIdRequest2.initialize(this, payorId, remoteId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateRemoteIdRequest2, null, [{
    key: "initialize",
    value: function initialize(obj, payorId, remoteId) {
      obj['payorId'] = payorId;
      obj['remoteId'] = remoteId;
    }
    /**
     * Constructs a <code>UpdateRemoteIdRequest2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRemoteIdRequest2} obj Optional instance to populate.
     * @return {module:model/UpdateRemoteIdRequest2} The populated <code>UpdateRemoteIdRequest2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateRemoteIdRequest2();

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('remoteId')) {
          obj['remoteId'] = _ApiClient["default"].convertToType(data['remoteId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpdateRemoteIdRequest2;
}();
/**
 * @member {String} payorId
 */


UpdateRemoteIdRequest2.prototype['payorId'] = undefined;
/**
 * @member {String} remoteId
 */

UpdateRemoteIdRequest2.prototype['remoteId'] = undefined;
var _default = UpdateRemoteIdRequest2;
exports["default"] = _default;