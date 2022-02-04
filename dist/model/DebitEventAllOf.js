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
 * The DebitEventAllOf model module.
 * @module model/DebitEventAllOf
 * @version 2.29.130
 */
var DebitEventAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DebitEventAllOf</code>.
   * @alias module:model/DebitEventAllOf
   * @param debitTransactionId {String} ID of this debit transaction within the Velo platform
   */
  function DebitEventAllOf(debitTransactionId) {
    _classCallCheck(this, DebitEventAllOf);

    DebitEventAllOf.initialize(this, debitTransactionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DebitEventAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, debitTransactionId) {
      obj['debitTransactionId'] = debitTransactionId;
    }
    /**
     * Constructs a <code>DebitEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebitEventAllOf} obj Optional instance to populate.
     * @return {module:model/DebitEventAllOf} The populated <code>DebitEventAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DebitEventAllOf();

        if (data.hasOwnProperty('debitTransactionId')) {
          obj['debitTransactionId'] = _ApiClient["default"].convertToType(data['debitTransactionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DebitEventAllOf;
}();
/**
 * ID of this debit transaction within the Velo platform
 * @member {String} debitTransactionId
 */


DebitEventAllOf.prototype['debitTransactionId'] = undefined;
var _default = DebitEventAllOf;
exports["default"] = _default;