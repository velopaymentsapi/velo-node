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
 * The CreatePayeesCSVResponse2 model module.
 * @module model/CreatePayeesCSVResponse2
 * @version 2.23.78
 */
var CreatePayeesCSVResponse2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePayeesCSVResponse2</code>.
   * @alias module:model/CreatePayeesCSVResponse2
   */
  function CreatePayeesCSVResponse2() {
    _classCallCheck(this, CreatePayeesCSVResponse2);

    CreatePayeesCSVResponse2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePayeesCSVResponse2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreatePayeesCSVResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayeesCSVResponse2} obj Optional instance to populate.
     * @return {module:model/CreatePayeesCSVResponse2} The populated <code>CreatePayeesCSVResponse2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePayeesCSVResponse2();

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

  return CreatePayeesCSVResponse2;
}();
/**
 * @member {String} batchId
 */


CreatePayeesCSVResponse2.prototype['batchId'] = undefined;
/**
 * @member {Array.<module:model/CreatePayeesCSVResponseRejectedCsvRows>} rejectedCsvRows
 */

CreatePayeesCSVResponse2.prototype['rejectedCsvRows'] = undefined;
var _default = CreatePayeesCSVResponse2;
exports["default"] = _default;