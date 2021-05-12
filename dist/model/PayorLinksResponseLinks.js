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
 * The PayorLinksResponseLinks model module.
 * @module model/PayorLinksResponseLinks
 * @version 2.26.127
 */
var PayorLinksResponseLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayorLinksResponseLinks</code>.
   * @alias module:model/PayorLinksResponseLinks
   * @param linkId {String} 
   * @param fromPayorId {String} 
   * @param linkType {module:model/PayorLinksResponseLinks.LinkTypeEnum} 
   * @param toPayorId {String} 
   */
  function PayorLinksResponseLinks(linkId, fromPayorId, linkType, toPayorId) {
    _classCallCheck(this, PayorLinksResponseLinks);

    PayorLinksResponseLinks.initialize(this, linkId, fromPayorId, linkType, toPayorId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayorLinksResponseLinks, null, [{
    key: "initialize",
    value: function initialize(obj, linkId, fromPayorId, linkType, toPayorId) {
      obj['linkId'] = linkId;
      obj['fromPayorId'] = fromPayorId;
      obj['linkType'] = linkType;
      obj['toPayorId'] = toPayorId;
    }
    /**
     * Constructs a <code>PayorLinksResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayorLinksResponseLinks} obj Optional instance to populate.
     * @return {module:model/PayorLinksResponseLinks} The populated <code>PayorLinksResponseLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayorLinksResponseLinks();

        if (data.hasOwnProperty('linkId')) {
          obj['linkId'] = _ApiClient["default"].convertToType(data['linkId'], 'String');
        }

        if (data.hasOwnProperty('fromPayorId')) {
          obj['fromPayorId'] = _ApiClient["default"].convertToType(data['fromPayorId'], 'String');
        }

        if (data.hasOwnProperty('linkType')) {
          obj['linkType'] = _ApiClient["default"].convertToType(data['linkType'], 'String');
        }

        if (data.hasOwnProperty('toPayorId')) {
          obj['toPayorId'] = _ApiClient["default"].convertToType(data['toPayorId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PayorLinksResponseLinks;
}();
/**
 * @member {String} linkId
 */


PayorLinksResponseLinks.prototype['linkId'] = undefined;
/**
 * @member {String} fromPayorId
 */

PayorLinksResponseLinks.prototype['fromPayorId'] = undefined;
/**
 * @member {module:model/PayorLinksResponseLinks.LinkTypeEnum} linkType
 */

PayorLinksResponseLinks.prototype['linkType'] = undefined;
/**
 * @member {String} toPayorId
 */

PayorLinksResponseLinks.prototype['toPayorId'] = undefined;
/**
 * Allowed values for the <code>linkType</code> property.
 * @enum {String}
 * @readonly
 */

PayorLinksResponseLinks['LinkTypeEnum'] = {
  /**
   * value: "PARENT_OF"
   * @const
   */
  "PARENT_OF": "PARENT_OF"
};
var _default = PayorLinksResponseLinks;
exports["default"] = _default;