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
 * The CreatePayeesCSVResponseRejectedCsvRows model module.
 * @module model/CreatePayeesCSVResponseRejectedCsvRows
 * @version 2.29.128
 */
var CreatePayeesCSVResponseRejectedCsvRows = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatePayeesCSVResponseRejectedCsvRows</code>.
   * @alias module:model/CreatePayeesCSVResponseRejectedCsvRows
   */
  function CreatePayeesCSVResponseRejectedCsvRows() {
    _classCallCheck(this, CreatePayeesCSVResponseRejectedCsvRows);

    CreatePayeesCSVResponseRejectedCsvRows.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePayeesCSVResponseRejectedCsvRows, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreatePayeesCSVResponseRejectedCsvRows</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePayeesCSVResponseRejectedCsvRows} obj Optional instance to populate.
     * @return {module:model/CreatePayeesCSVResponseRejectedCsvRows} The populated <code>CreatePayeesCSVResponseRejectedCsvRows</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePayeesCSVResponseRejectedCsvRows();

        if (data.hasOwnProperty('lineNumber')) {
          obj['lineNumber'] = _ApiClient["default"].convertToType(data['lineNumber'], 'Number');
        }

        if (data.hasOwnProperty('rejectedContent')) {
          obj['rejectedContent'] = _ApiClient["default"].convertToType(data['rejectedContent'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreatePayeesCSVResponseRejectedCsvRows;
}();
/**
 * @member {Number} lineNumber
 */


CreatePayeesCSVResponseRejectedCsvRows.prototype['lineNumber'] = undefined;
/**
 * @member {String} rejectedContent
 */

CreatePayeesCSVResponseRejectedCsvRows.prototype['rejectedContent'] = undefined;
/**
 * @member {String} message
 */

CreatePayeesCSVResponseRejectedCsvRows.prototype['message'] = undefined;
var _default = CreatePayeesCSVResponseRejectedCsvRows;
exports["default"] = _default;