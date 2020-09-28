"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatePayee = _interopRequireDefault(require("./CreatePayee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePayeesRequest model module.
 * @module model/CreatePayeesRequest
 * @version 2.23.78
 */
var CreatePayeesRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePayeesRequest</code>.
   * @alias module:model/CreatePayeesRequest
   * @param payorId {String} 
   * @param payees {Array.<module:model/CreatePayee>} 
   */
  function CreatePayeesRequest(payorId, payees) {
    _classCallCheck(this, CreatePayeesRequest);

    CreatePayeesRequest.initialize(this, payorId, payees);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePayeesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, payorId, payees) {
      obj['payorId'] = payorId;
      obj['payees'] = payees;
    }
    /**
     * Constructs a <code>CreatePayeesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayeesRequest} obj Optional instance to populate.
     * @return {module:model/CreatePayeesRequest} The populated <code>CreatePayeesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePayeesRequest();

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

  return CreatePayeesRequest;
}();
/**
 * @member {String} payorId
 */


CreatePayeesRequest.prototype['payorId'] = undefined;
/**
 * @member {Array.<module:model/CreatePayee>} payees
 */

CreatePayeesRequest.prototype['payees'] = undefined;
var _default = CreatePayeesRequest;
exports["default"] = _default;