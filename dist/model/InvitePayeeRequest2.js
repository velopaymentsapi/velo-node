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
 * The InvitePayeeRequest2 model module.
 * @module model/InvitePayeeRequest2
 * @version 2.26.127
 */
var InvitePayeeRequest2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvitePayeeRequest2</code>.
   * @alias module:model/InvitePayeeRequest2
   * @param payorId {String} 
   */
  function InvitePayeeRequest2(payorId) {
    _classCallCheck(this, InvitePayeeRequest2);

    InvitePayeeRequest2.initialize(this, payorId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvitePayeeRequest2, null, [{
    key: "initialize",
    value: function initialize(obj, payorId) {
      obj['payorId'] = payorId;
    }
    /**
     * Constructs a <code>InvitePayeeRequest2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitePayeeRequest2} obj Optional instance to populate.
     * @return {module:model/InvitePayeeRequest2} The populated <code>InvitePayeeRequest2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvitePayeeRequest2();

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InvitePayeeRequest2;
}();
/**
 * @member {String} payorId
 */


InvitePayeeRequest2.prototype['payorId'] = undefined;
var _default = InvitePayeeRequest2;
exports["default"] = _default;