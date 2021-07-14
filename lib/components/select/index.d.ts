import React from "react";
/** Interfaces */
interface IOption {
    text: string;
    value: string | number;
    selected?: boolean;
}
interface IProps {
    options: Array<IOption>;
    onChange: (value: string) => void;
    label?: string;
    className?: string;
    wrapperClass?: string;
    group?: boolean;
}
/** Component */
declare const Select: React.FC<IProps>;
export default Select;
