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
 * The TransmissionTypes2 model module.
 * @module model/TransmissionTypes2
 * @version 2.26.124
 */
var TransmissionTypes2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransmissionTypes2</code>.
   * @alias module:model/TransmissionTypes2
   * @param ACH {Boolean} Whether the Payor is allowed to pay via ACH
   * @param SAME_DAY_ACH {Boolean} Whether the Payor is allowed to pay via same day ACH
   * @param WIRE {Boolean} Whether the Payor is allowed to pay via wire
   */
  function TransmissionTypes2(ACH, SAME_DAY_ACH, WIRE) {
    _classCallCheck(this, TransmissionTypes2);

    TransmissionTypes2.initialize(this, ACH, SAME_DAY_ACH, WIRE);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransmissionTypes2, null, [{
    key: "initialize",
    value: function initialize(obj, ACH, SAME_DAY_ACH, WIRE) {
      obj['ACH'] = ACH;
      obj['SAME_DAY_ACH'] = SAME_DAY_ACH;
      obj['WIRE'] = WIRE;
    }
    /**
     * Constructs a <code>TransmissionTypes2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransmissionTypes2} obj Optional instance to populate.
     * @return {module:model/TransmissionTypes2} The populated <code>TransmissionTypes2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransmissionTypes2();

        if (data.hasOwnProperty('ACH')) {
          obj['ACH'] = _ApiClient["default"].convertToType(data['ACH'], 'Boolean');
        }

        if (data.hasOwnProperty('SAME_DAY_ACH')) {
          obj['SAME_DAY_ACH'] = _ApiClient["default"].convertToType(data['SAME_DAY_ACH'], 'Boolean');
        }

        if (data.hasOwnProperty('WIRE')) {
          obj['WIRE'] = _ApiClient["default"].convertToType(data['WIRE'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return TransmissionTypes2;
}();
/**
 * Whether the Payor is allowed to pay via ACH
 * @member {Boolean} ACH
 */


TransmissionTypes2.prototype['ACH'] = undefined;
/**
 * Whether the Payor is allowed to pay via same day ACH
 * @member {Boolean} SAME_DAY_ACH
 */

TransmissionTypes2.prototype['SAME_DAY_ACH'] = undefined;
/**
 * Whether the Payor is allowed to pay via wire
 * @member {Boolean} WIRE
 */

TransmissionTypes2.prototype['WIRE'] = undefined;
var _default = TransmissionTypes2;
exports["default"] = _default;