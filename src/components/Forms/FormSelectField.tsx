"use client";
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export type SelectOption = {
  label: string;
  value: string;
};
type SelectFieldProps = {
  options: SelectOption[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOption;
  handleChange?: (el: string) => void;
};

const FormSelectField = ({
  options,
  name,
  size,
  value,
  placeholder,
  label,
  defaultValue,
  handleChange,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            style={{ width: "100%" }}
            onChange={handleChange ? handleChange : onChange}
            options={options}
            value={value}
            size={size}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
