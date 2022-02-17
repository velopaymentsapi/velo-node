"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Name = _interopRequireDefault(require("./Name2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetPayeeListResponseIndividual2 model module.
 * @module model/GetPayeeListResponseIndividual2
 * @version 2.29.128
 */
var GetPayeeListResponseIndividual2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetPayeeListResponseIndividual2</code>.
   * @alias module:model/GetPayeeListResponseIndividual2
   */
  function GetPayeeListResponseIndividual2() {
    _classCallCheck(this, GetPayeeListResponseIndividual2);

    GetPayeeListResponseIndividual2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetPayeeListResponseIndividual2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetPayeeListResponseIndividual2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPayeeListResponseIndividual2} obj Optional instance to populate.
     * @return {module:model/GetPayeeListResponseIndividual2} The populated <code>GetPayeeListResponseIndividual2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetPayeeListResponseIndividual2();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _Name["default"].constructFromObject(data['name']);
        }
      }

      return obj;
    }
  }]);

  return GetPayeeListResponseIndividual2;
}();
/**
 * @member {module:model/Name2} name
 */


GetPayeeListResponseIndividual2.prototype['name'] = undefined;
var _default = GetPayeeListResponseIndividual2;
exports["default"] = _default;