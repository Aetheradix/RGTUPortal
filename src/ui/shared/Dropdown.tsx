import React from 'react';
import { Dropdown as PrimeDropdown, type DropdownProps as PrimeDropdownProps } from 'primereact/dropdown';

export interface DropdownOption {
  label: string;
  value: undefined;
  disabled?: boolean;
}

export interface DropdownProps extends Omit<PrimeDropdownProps, 'options'> {
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  className?: string;
  labelClassName?: string;
  options: DropdownOption[];
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  required,
  error,
  helperText,
  className,
  labelClassName,
  id,
  options,
  placeholder = 'Select an option',
  ...dropdownProps
}) => {
  // eslint-disable-next-line react-hooks/purity
  const dropdownId = id || `dropdown-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random()}`;

  return (
    <div className={`w-full ${className || ''}`}>
      {label && (
        <label
          htmlFor={dropdownId}
          className={`block text-sm font-medium text-gray-700 mb-2 ${labelClassName || ''}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <PrimeDropdown
        id={dropdownId}
        options={options}
        optionLabel="label"
        optionValue="value"
        placeholder={placeholder}
        className={`w-full ${error ? 'p-invalid' : ''}`}
        {...dropdownProps}
      />
      {error && (
        <small className="p-error mt-1 block">{error}</small>
      )}
      {helperText && !error && (
        <small className="text-gray-500 mt-1 block">{helperText}</small>
      )}
    </div>
  );
};

export default Dropdown;
