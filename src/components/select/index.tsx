import React, { ChangeEvent } from "react";

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
const Select: React.FC<IProps> = ({
  options,
  onChange,
  className = "",
  wrapperClass = "",
  label = "",
  group = false,
}) => {
  const cssClass = `browser-default custom-select ${className}`;

  /**
   * @description Select Control OnChange Handler
   * @param e HTMLSelect Event
   */
  function onChangeHandler(e: ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value);
  }

  /** Render */
  return (
    <div className={`${group ? "form-group" : ""} ${wrapperClass}`.trim()}>
      {label && <label htmlFor={label}>{label}</label>}
      <select className={cssClass} onChange={onChangeHandler} id={label}>
        {options.map((item: IOption) => (
          <option value={item.value} key={item.value} selected={item.selected}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
