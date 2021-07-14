var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useEffect } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "./dataGrid.css";
var DataGrid = function (_a) {
    var typeRowSelection = _a.typeRowSelection, onRowSelection = _a.onRowSelection, _b = _a.floatingFilter, floatingFilter = _b === void 0 ? false : _b, _c = _a.autoHeight, autoHeight = _c === void 0 ? false : _c, _d = _a.heightSize, heightSize = _d === void 0 ? "100%" : _d, columns = _a.columns, data = _a.data, localeText = _a.localeText, _e = _a.paginated, paginated = _e === void 0 ? false : _e, _f = _a.paginateSize, paginateSize = _f === void 0 ? 10 : _f;
    var gridApi = React.useRef();
    var defaultGridProps = {
        rowData: data || [],
        rowSelection: typeRowSelection,
        floatingFilter: floatingFilter,
        suppressRowClickSelection: true,
        animateRows: true,
        enableColResize: false,
        enableSorting: true,
        suppressMovable: true,
        enableFilter: true,
        groupHeaders: true,
        suppressMovableColumns: true,
        stopEditingWhenGridLosesFocus: true,
        domLayout: autoHeight ? "autoHeight" : undefined,
        pagination: paginated,
        paginationPageSize: paginateSize,
        suppressPaginationPanel: !paginated,
        suppressScrollOnNewData: true,
        defaultColDef: {
            resizable: true,
        },
    };
    var onSelectionChanged = function () {
        var selectedRowsAux = gridApi.current.getSelectedRows();
        onRowSelection && onRowSelection(selectedRowsAux);
    };
    var onGridReady = function (params) {
        gridApi.current = params.api;
        gridApi.current.sizeColumnsToFit();
    };
    useEffect(function () {
        if (gridApi.current != null)
            gridApi.current.sizeColumnsToFit();
    }, [columns, gridApi]);
    return (React.createElement("div", { className: "ag-theme-alpine", style: { height: heightSize } },
        React.createElement(AgGridReact, __assign({ onGridReady: onGridReady, rowDragManaged: true, singleClickEdit: true, onSelectionChanged: onSelectionChanged }, defaultGridProps, { localeText: localeText }), columns.map(function (column) { return (React.createElement(AgGridColumn, __assign({}, column, { key: column.field }))); }))));
};
export default DataGrid;
//# sourceMappingURL=index.js.map