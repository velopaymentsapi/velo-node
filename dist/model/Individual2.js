"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IndividualName = _interopRequireDefault(require("./IndividualName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Individual2 model module.
 * @module model/Individual2
 * @version 2.29.128
 */
var Individual2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Individual2</code>.
   * @alias module:model/Individual2
   * @param name {module:model/IndividualName} 
   * @param dateOfBirth {String} If not authorized to view, value will be masked. Example: - XXXX-XX-XX
   */
  function Individual2(name, dateOfBirth) {
    _classCallCheck(this, Individual2);

    Individual2.initialize(this, name, dateOfBirth);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Individual2, null, [{
    key: "initialize",
    value: function initialize(obj, name, dateOfBirth) {
      obj['name'] = name;
      obj['dateOfBirth'] = dateOfBirth;
    }
    /**
     * Constructs a <code>Individual2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Individual2} obj Optional instance to populate.
     * @return {module:model/Individual2} The populated <code>Individual2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Individual2();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _IndividualName["default"].constructFromObject(data['name']);
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

  return Individual2;
}();
/**
 * @member {module:model/IndividualName} name
 */


Individual2.prototype['name'] = undefined;
/**
 * If not authorized to view, value will be masked. Example: XXXXX1234
 * @member {String} nationalIdentification
 */

Individual2.prototype['nationalIdentification'] = undefined;
/**
 * If not authorized to view, value will be masked. Example: - XXXX-XX-XX
 * @member {String} dateOfBirth
 */

Individual2.prototype['dateOfBirth'] = undefined;
var _default = Individual2;
exports["default"] = _default;