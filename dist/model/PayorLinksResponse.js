"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PayorLinksResponseLinks = _interopRequireDefault(require("./PayorLinksResponseLinks"));

var _PayorLinksResponsePayors = _interopRequireDefault(require("./PayorLinksResponsePayors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PayorLinksResponse model module.
 * @module model/PayorLinksResponse
 * @version 2.29.128
 */
var PayorLinksResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorLinksResponse</code>.
   * List Payor Links Response Object
   * @alias module:model/PayorLinksResponse
   */
  function PayorLinksResponse() {
    _classCallCheck(this, PayorLinksResponse);

    PayorLinksResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorLinksResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayorLinksResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorLinksResponse} obj Optional instance to populate.
     * @return {module:model/PayorLinksResponse} The populated <code>PayorLinksResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorLinksResponse();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_PayorLinksResponseLinks["default"]]);
        }

        if (data.hasOwnProperty('payors')) {
          obj['payors'] = _ApiClient["default"].convertToType(data['payors'], [_PayorLinksResponsePayors["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PayorLinksResponse;
}();
/**
 * @member {Array.<module:model/PayorLinksResponseLinks>} links
 */


PayorLinksResponse.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/PayorLinksResponsePayors>} payors
 */

PayorLinksResponse.prototype['payors'] = undefined;
var _default = PayorLinksResponse;
exports["default"] = _default;