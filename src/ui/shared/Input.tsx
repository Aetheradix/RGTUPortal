import React from 'react';
import { InputText, type InputTextProps } from 'primereact/inputtext';
import { InputTextarea,type InputTextareaProps } from 'primereact/inputtextarea';
import { InputNumber,type InputNumberProps } from 'primereact/inputnumber';

export interface BaseInputProps {
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  className?: string;
  labelClassName?: string;
}

export interface TextInputProps extends InputTextProps, BaseInputProps {
  type?: 'text' | 'password' | 'email' | 'tel' | 'url';
}

export interface TextareaInputProps extends InputTextareaProps, BaseInputProps {}

export interface NumberInputProps extends InputNumberProps, BaseInputProps {}

const Input: React.FC<TextInputProps> = ({
  label,
  required,
  error,
  helperText,
  className,
  labelClassName,
  id,
  ...inputProps
}) => {
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random()}`;

  return (
    <div className={`w-full ${className || ''}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-sm font-medium text-gray-700 mb-2 ${labelClassName || ''}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <InputText
        id={inputId}
        className={`w-full ${error ? 'p-invalid' : ''}`}
        {...inputProps}
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

export const Textarea: React.FC<TextareaInputProps> = ({
  label,
  required,
  error,
  helperText,
  className,
  labelClassName,
  id,
  ...inputProps
}) => {
  const inputId = id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random()}`;

  return (
    <div className={`w-full ${className || ''}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-sm font-medium text-gray-700 mb-2 ${labelClassName || ''}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <InputTextarea
        id={inputId}
        className={`w-full ${error ? 'p-invalid' : ''}`}
        {...inputProps}
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

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  required,
  error,
  helperText,
  className,
  labelClassName,
  id,
  ...inputProps
}) => {
  const inputId = id || `number-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random()}`;

  return (
    <div className={`w-full ${className || ''}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-sm font-medium text-gray-700 mb-2 ${labelClassName || ''}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <InputNumber
        id={inputId}
        className={`w-full ${error ? 'p-invalid' : ''}`}
        {...inputProps}
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

export default Input;
