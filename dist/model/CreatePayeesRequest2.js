"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatePayee = _interopRequireDefault(require("./CreatePayee2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePayeesRequest2 model module.
 * @module model/CreatePayeesRequest2
 * @version 2.26.124
 */
var CreatePayeesRequest2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePayeesRequest2</code>.
   * @alias module:model/CreatePayeesRequest2
   * @param payorId {String} 
   * @param payees {Array.<module:model/CreatePayee2>} 
   */
  function CreatePayeesRequest2(payorId, payees) {
    _classCallCheck(this, CreatePayeesRequest2);

    CreatePayeesRequest2.initialize(this, payorId, payees);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePayeesRequest2, null, [{
    key: "initialize",
    value: function initialize(obj, payorId, payees) {
      obj['payorId'] = payorId;
      obj['payees'] = payees;
    }
    /**
     * Constructs a <code>CreatePayeesRequest2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayeesRequest2} obj Optional instance to populate.
     * @return {module:model/CreatePayeesRequest2} The populated <code>CreatePayeesRequest2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePayeesRequest2();

        if (data.hasOwnProperty('payorId')) {
          obj['payorId'] = _ApiClient["default"].convertToType(data['payorId'], 'String');
        }

        if (data.hasOwnProperty('payees')) {
          obj['payees'] = _ApiClient["default"].convertToType(data['payees'], [_CreatePayee["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreatePayeesRequest2;
}();
/**
 * @member {String} payorId
 */


CreatePayeesRequest2.prototype['payorId'] = undefined;
/**
 * @member {Array.<module:model/CreatePayee2>} payees
 */

CreatePayeesRequest2.prototype['payees'] = undefined;
var _default = CreatePayeesRequest2;
exports["default"] = _default;