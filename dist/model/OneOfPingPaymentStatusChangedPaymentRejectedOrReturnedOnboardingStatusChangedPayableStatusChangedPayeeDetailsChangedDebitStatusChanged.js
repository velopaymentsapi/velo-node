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

var OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged = /*#__PURE__*/function () {
  function OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged() {
    _classCallCheck(this, OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged);
  }

  _createClass(OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged, null, [{
    key: "constructFromObject",
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged;
}();

exports["default"] = OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged;