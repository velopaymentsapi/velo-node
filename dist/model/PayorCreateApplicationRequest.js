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
 * The PayorCreateApplicationRequest model module.
 * @module model/PayorCreateApplicationRequest
 * @version 2.26.124
 */
var PayorCreateApplicationRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorCreateApplicationRequest</code>.
   * @alias module:model/PayorCreateApplicationRequest
   * @param name {String} The name of the application.
   */
  function PayorCreateApplicationRequest(name) {
    _classCallCheck(this, PayorCreateApplicationRequest);

    PayorCreateApplicationRequest.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorCreateApplicationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>PayorCreateApplicationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorCreateApplicationRequest} obj Optional instance to populate.
     * @return {module:model/PayorCreateApplicationRequest} The populated <code>PayorCreateApplicationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorCreateApplicationRequest();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayorCreateApplicationRequest;
}();
/**
 * The name of the application.
 * @member {String} name
 */


PayorCreateApplicationRequest.prototype['name'] = undefined;
/**
 * Description of the application.
 * @member {String} description
 */

PayorCreateApplicationRequest.prototype['description'] = undefined;
var _default = PayorCreateApplicationRequest;
exports["default"] = _default;