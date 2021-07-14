import React, { useEffect } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
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

const DataGrid: React.FC<IProps> = ({
  typeRowSelection,
  onRowSelection,
  floatingFilter = false,
  autoHeight = false,
  heightSize = "100%",
  columns,
  data,
  localeText,
  paginated = false,
  paginateSize = 10,
}: IProps) => {
  const gridApi: any = React.useRef();

  const defaultGridProps = {
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

  const onSelectionChanged = () => {
    const selectedRowsAux = gridApi.current.getSelectedRows();
    onRowSelection && onRowSelection(selectedRowsAux);
  };

  const onGridReady = (params: any) => {
    gridApi.current = params.api;
    gridApi.current.sizeColumnsToFit();
  };

  useEffect(() => {
    if (gridApi.current != null) gridApi.current.sizeColumnsToFit();
  }, [columns, gridApi]);

  return (
    <div className="ag-theme-alpine" style={{ height: heightSize }}>
      <AgGridReact
        onGridReady={onGridReady}
        rowDragManaged={true}
        singleClickEdit={true}
        onSelectionChanged={onSelectionChanged}
        {...defaultGridProps}
        localeText={localeText}
      >
        {columns.map((column) => (
          <AgGridColumn {...column} key={column.field} />
        ))}
      </AgGridReact>
    </div>
  );
};

export default DataGrid;
