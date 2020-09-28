"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IndividualV1Name = _interopRequireDefault(require("./IndividualV1Name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IndividualResponse model module.
 * @module model/IndividualResponse
 * @version 2.23.78
 */
var IndividualResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IndividualResponse</code>.
   * @alias module:model/IndividualResponse
   * @param name {module:model/IndividualV1Name} 
   */
  function IndividualResponse(name) {
    _classCallCheck(this, IndividualResponse);

    IndividualResponse.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IndividualResponse, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>IndividualResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndividualResponse} obj Optional instance to populate.
     * @return {module:model/IndividualResponse} The populated <code>IndividualResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IndividualResponse();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _IndividualV1Name["default"].constructFromObject(data['name']);
        }
      }

      return obj;
    }
  }]);

  return IndividualResponse;
}();
/**
 * @member {module:model/IndividualV1Name} name
 */


IndividualResponse.prototype['name'] = undefined;
var _default = IndividualResponse;
exports["default"] = _default;