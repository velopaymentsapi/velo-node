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
 * The LocalisationDetails model module.
 * @module model/LocalisationDetails
 * @version 2.26.124
 */
var LocalisationDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LocalisationDetails</code>.
   * @alias module:model/LocalisationDetails
   */
  function LocalisationDetails() {
    _classCallCheck(this, LocalisationDetails);

    LocalisationDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocalisationDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LocalisationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalisationDetails} obj Optional instance to populate.
     * @return {module:model/LocalisationDetails} The populated <code>LocalisationDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocalisationDetails();

        if (data.hasOwnProperty('template')) {
          obj['template'] = _ApiClient["default"].convertToType(data['template'], 'String');
        }

        if (data.hasOwnProperty('parameters')) {
          obj['parameters'] = _ApiClient["default"].convertToType(data['parameters'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return LocalisationDetails;
}();
/**
 * the English language message template used to construct the error message
 * @member {String} template
 */


LocalisationDetails.prototype['template'] = undefined;
/**
 * name to value map containing any named parameters that appear in the message template
 * @member {Object.<String, String>} parameters
 */

LocalisationDetails.prototype['parameters'] = undefined;
var _default = LocalisationDetails;
exports["default"] = _default;