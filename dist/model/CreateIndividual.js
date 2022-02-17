"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateIndividualName = _interopRequireDefault(require("./CreateIndividualName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CreateIndividual model module.
 * @module model/CreateIndividual
 * @version 2.29.128
 */
var CreateIndividual = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateIndividual</code>.
   * @alias module:model/CreateIndividual
   * @param name {module:model/CreateIndividualName} 
   * @param dateOfBirth {Date} Must not be date in future. Example - 1970-05-20
   */
  function CreateIndividual(name, dateOfBirth) {
    _classCallCheck(this, CreateIndividual);

    CreateIndividual.initialize(this, name, dateOfBirth);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateIndividual, null, [{
    key: "initialize",
    value: function initialize(obj, name, dateOfBirth) {
      obj['name'] = name;
      obj['dateOfBirth'] = dateOfBirth;
    }
    /**
     * Constructs a <code>CreateIndividual</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateIndividual} obj Optional instance to populate.
     * @return {module:model/CreateIndividual} The populated <code>CreateIndividual</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateIndividual();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _CreateIndividualName["default"].constructFromObject(data['name']);
        }

        if (data.hasOwnProperty('nationalIdentification')) {
          obj['nationalIdentification'] = _ApiClient["default"].convertToType(data['nationalIdentification'], 'String');
        }

        if (data.hasOwnProperty('dateOfBirth')) {
          obj['dateOfBirth'] = _ApiClient["default"].convertToType(data['dateOfBirth'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return CreateIndividual;
}();
/**
 * @member {module:model/CreateIndividualName} name
 */


CreateIndividual.prototype['name'] = undefined;
/**
 * @member {String} nationalIdentification
 */

CreateIndividual.prototype['nationalIdentification'] = undefined;
/**
 * Must not be date in future. Example - 1970-05-20
 * @member {Date} dateOfBirth
 */

CreateIndividual.prototype['dateOfBirth'] = undefined;
var _default = CreateIndividual;
exports["default"] = _default;