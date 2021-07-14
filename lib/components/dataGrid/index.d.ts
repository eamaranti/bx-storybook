import React from "react";
import "./dataGrid.css";
interface IProps {
    autoHeight?: boolean;
    heightSize?: string;
    columns: Array<any>;
    data: Array<object>;
    typeRowSelection: "multiple" | "single";
    onRowSelection?(cells: object | Array<object>): void;
    floatingFilter?: boolean;
    localeText?: object;
    paginated?: boolean;
    paginateSize?: number;
    hidePaginate?: boolean;
}
declare const DataGrid: React.FC<IProps>;
export default DataGrid;
