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
 * The IndividualV1 model module.
 * @module model/IndividualV1
 * @version 2.23.78
 */
var IndividualV1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IndividualV1</code>.
   * @alias module:model/IndividualV1
   * @param name {module:model/IndividualV1Name} 
   * @param dateOfBirth {String} If not authorized to view, value will be masked. Example: - XXXX-XX-XX
   */
  function IndividualV1(name, dateOfBirth) {
    _classCallCheck(this, IndividualV1);

    IndividualV1.initialize(this, name, dateOfBirth);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IndividualV1, null, [{
    key: "initialize",
    value: function initialize(obj, name, dateOfBirth) {
      obj['name'] = name;
      obj['dateOfBirth'] = dateOfBirth;
    }
    /**
     * Constructs a <code>IndividualV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndividualV1} obj Optional instance to populate.
     * @return {module:model/IndividualV1} The populated <code>IndividualV1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IndividualV1();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _IndividualV1Name["default"].constructFromObject(data['name']);
        }

        if (data.hasOwnProperty('nationalIdentification')) {
          obj['nationalIdentification'] = _ApiClient["default"].convertToType(data['nationalIdentification'], 'String');
        }

        if (data.hasOwnProperty('dateOfBirth')) {
          obj['dateOfBirth'] = _ApiClient["default"].convertToType(data['dateOfBirth'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IndividualV1;
}();
/**
 * @member {module:model/IndividualV1Name} name
 */


IndividualV1.prototype['name'] = undefined;
/**
 * If not authorized to view, value will be masked. Example: XXXXX1234
 * @member {String} nationalIdentification
 */

IndividualV1.prototype['nationalIdentification'] = undefined;
/**
 * If not authorized to view, value will be masked. Example: - XXXX-XX-XX
 * @member {String} dateOfBirth
 */

IndividualV1.prototype['dateOfBirth'] = undefined;
var _default = IndividualV1;
exports["default"] = _default;