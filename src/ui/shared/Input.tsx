import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Calendar, type CalendarProps } from 'primereact/calendar';
import { InputNumber, type InputNumberProps } from 'primereact/inputnumber';
import { InputText, type InputTextProps } from 'primereact/inputtext';
import { InputTextarea, type InputTextareaProps } from 'primereact/inputtextarea';
import React from 'react';

export interface BaseInputProps {
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  className?: string;
  labelClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface TextInputProps extends InputTextProps, BaseInputProps {
  type?: 'text' | 'password' | 'email' | 'tel' | 'url';
}
export interface DatePickerProps extends CalendarProps, BaseInputProps { }
export interface TextareaInputProps extends InputTextareaProps, BaseInputProps { }

export interface NumberInputProps extends InputNumberProps, BaseInputProps { }
const InputWrapper: React.FC<BaseInputProps & { id: string; children: React.ReactNode }> = ({
  label, required, error, helperText, className, labelClassName, id, children
}) => (
  <div className={`w-full ${className || ''}`}>
    {label && (
      <label htmlFor={id} className={`block text-sm font-medium text-gray-700 mb-2 ${labelClassName || ''}`}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    )}
    {children}
    {error && <small className="p-error mt-1 block">{error}</small>}
    {helperText && !error && <small className="text-gray-500 mt-1 block">{helperText}</small>}
  </div>
);
const Input: React.FC<TextInputProps> = ({
  label,
  required,
  error,
  helperText,
  className,
  labelClassName,
  id,
  leftIcon,
  rightIcon,
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
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
            {leftIcon}
          </div>
        )}
        <InputText
          id={inputId}
          className={`w-full ${error ? 'p-invalid' : ''} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''}`}
          {...inputProps}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <small className="p-error mt-1 block">{error}</small>
      )}
      {helperText && !error && (
        <small className="text-gray-500 mt-1 block">{helperText}</small>
      )}
    </div>
  );
};

export const DateInput: React.FC<DatePickerProps> = ({ label, required, error, helperText, className, labelClassName, id, ...props }) => {
  const inputId = id || `date-${label?.toLowerCase().replace(/\s+/g, '-') || Math.random()}`;


  return (
    <InputWrapper label={label} required={required} error={error} helperText={helperText} className={className} labelClassName={labelClassName} id={inputId}>
      <Calendar
        id={inputId}
        className={`w-full ${error ? 'p-invalid' : ''}`}
        showIcon
        icon={() => props.timeOnly ? <Clock size={18} /> : <CalendarIcon size={18} />}
        {...props}
      />
    </InputWrapper>
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
