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
 * The GetPayeeListResponseCompany2 model module.
 * @module model/GetPayeeListResponseCompany2
 * @version 2.26.124
 */
var GetPayeeListResponseCompany2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPayeeListResponseCompany2</code>.
   * @alias module:model/GetPayeeListResponseCompany2
   */
  function GetPayeeListResponseCompany2() {
    _classCallCheck(this, GetPayeeListResponseCompany2);

    GetPayeeListResponseCompany2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPayeeListResponseCompany2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPayeeListResponseCompany2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPayeeListResponseCompany2} obj Optional instance to populate.
     * @return {module:model/GetPayeeListResponseCompany2} The populated <code>GetPayeeListResponseCompany2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPayeeListResponseCompany2();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('operatingName')) {
          obj['operatingName'] = _ApiClient["default"].convertToType(data['operatingName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetPayeeListResponseCompany2;
}();
/**
 * @member {String} name
 */


GetPayeeListResponseCompany2.prototype['name'] = undefined;
/**
 * @member {String} operatingName
 */

GetPayeeListResponseCompany2.prototype['operatingName'] = undefined;
var _default = GetPayeeListResponseCompany2;
exports["default"] = _default;