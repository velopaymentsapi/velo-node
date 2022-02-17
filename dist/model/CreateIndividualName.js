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
 * The CreateIndividualName model module.
 * @module model/CreateIndividualName
 * @version 2.29.128
 */
var CreateIndividualName = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateIndividualName</code>.
   * @alias module:model/CreateIndividualName
   * @param firstName {String} 
   * @param lastName {String} 
   */
  function CreateIndividualName(firstName, lastName) {
    _classCallCheck(this, CreateIndividualName);

    CreateIndividualName.initialize(this, firstName, lastName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateIndividualName, null, [{
    key: "initialize",
    value: function initialize(obj, firstName, lastName) {
      obj['firstName'] = firstName;
      obj['lastName'] = lastName;
    }
    /**
     * Constructs a <code>CreateIndividualName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateIndividualName} obj Optional instance to populate.
     * @return {module:model/CreateIndividualName} The populated <code>CreateIndividualName</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateIndividualName();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('otherNames')) {
          obj['otherNames'] = _ApiClient["default"].convertToType(data['otherNames'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateIndividualName;
}();
/**
 * @member {String} title
 */


CreateIndividualName.prototype['title'] = undefined;
/**
 * @member {String} firstName
 */

CreateIndividualName.prototype['firstName'] = undefined;
/**
 * @member {String} otherNames
 */

CreateIndividualName.prototype['otherNames'] = undefined;
/**
 * @member {String} lastName
 */

CreateIndividualName.prototype['lastName'] = undefined;
var _default = CreateIndividualName;
exports["default"] = _default;