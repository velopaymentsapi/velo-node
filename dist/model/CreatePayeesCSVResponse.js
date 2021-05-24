"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatePayeesCSVResponseRejectedCsvRows = _interopRequireDefault(require("./CreatePayeesCSVResponseRejectedCsvRows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePayeesCSVResponse model module.
 * @module model/CreatePayeesCSVResponse
 * @version 2.26.124
 */
var CreatePayeesCSVResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePayeesCSVResponse</code>.
   * @alias module:model/CreatePayeesCSVResponse
   */
  function CreatePayeesCSVResponse() {
    _classCallCheck(this, CreatePayeesCSVResponse);

    CreatePayeesCSVResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePayeesCSVResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreatePayeesCSVResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayeesCSVResponse} obj Optional instance to populate.
     * @return {module:model/CreatePayeesCSVResponse} The populated <code>CreatePayeesCSVResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePayeesCSVResponse();

        if (data.hasOwnProperty('batchId')) {
          obj['batchId'] = _ApiClient["default"].convertToType(data['batchId'], 'String');
        }

        if (data.hasOwnProperty('rejectedCsvRows')) {
          obj['rejectedCsvRows'] = _ApiClient["default"].convertToType(data['rejectedCsvRows'], [_CreatePayeesCSVResponseRejectedCsvRows["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreatePayeesCSVResponse;
}();
/**
 * @member {String} batchId
 */


CreatePayeesCSVResponse.prototype['batchId'] = undefined;
/**
 * @member {Array.<module:model/CreatePayeesCSVResponseRejectedCsvRows>} rejectedCsvRows
 */

CreatePayeesCSVResponse.prototype['rejectedCsvRows'] = undefined;
var _default = CreatePayeesCSVResponse;
exports["default"] = _default;