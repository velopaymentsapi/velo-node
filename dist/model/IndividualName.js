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
 * The IndividualName model module.
 * @module model/IndividualName
 * @version 2.29.130
 */
var IndividualName = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IndividualName</code>.
   * @alias module:model/IndividualName
   * @param firstName {String} 
   * @param lastName {String} 
   */
  function IndividualName(firstName, lastName) {
    _classCallCheck(this, IndividualName);

    IndividualName.initialize(this, firstName, lastName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IndividualName, null, [{
    key: "initialize",
    value: function initialize(obj, firstName, lastName) {
      obj['firstName'] = firstName;
      obj['lastName'] = lastName;
    }
    /**
     * Constructs a <code>IndividualName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndividualName} obj Optional instance to populate.
     * @return {module:model/IndividualName} The populated <code>IndividualName</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IndividualName();

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

  return IndividualName;
}();
/**
 * @member {String} title
 */


IndividualName.prototype['title'] = undefined;
/**
 * @member {String} firstName
 */

IndividualName.prototype['firstName'] = undefined;
/**
 * @member {String} otherNames
 */

IndividualName.prototype['otherNames'] = undefined;
/**
 * @member {String} lastName
 */

IndividualName.prototype['lastName'] = undefined;
var _default = IndividualName;
exports["default"] = _default;