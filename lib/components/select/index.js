import React from "react";
/** Component */
var Select = function (_a) {
    var options = _a.options, onChange = _a.onChange, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.wrapperClass, wrapperClass = _c === void 0 ? "" : _c, _d = _a.label, label = _d === void 0 ? "" : _d, _e = _a.group, group = _e === void 0 ? false : _e;
    var cssClass = "browser-default custom-select " + className;
    /**
     * @description Select Control OnChange Handler
     * @param e HTMLSelect Event
     */
    function onChangeHandler(e) {
        onChange(e.target.value);
    }
    /** Render */
    return (React.createElement("div", { className: ((group ? "form-group" : "") + " " + wrapperClass).trim() },
        label && React.createElement("label", { htmlFor: label }, label),
        React.createElement("select", { className: cssClass, onChange: onChangeHandler, id: label }, options.map(function (item) { return (React.createElement("option", { value: item.value, key: item.value, selected: item.selected }, item.text)); }))));
};
export default Select;
//# sourceMappingURL=index.js.map