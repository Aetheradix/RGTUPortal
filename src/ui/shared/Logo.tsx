import React from 'react';

interface LogoProps {
  showText?: boolean;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  className?: string;
  textClassName?: string;
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const Logo: React.FC<LogoProps> = ({
  showText = true,
  text = 'DAVV ERP SYSTEM',
  size = 'md',
  variant = 'light',
  className = '',
  textClassName = '',
}) => {
  const containerClasses = `
    inline-flex items-center gap-3 rounded-xl shrink-0
    ${sizeMap[size]}
    ${variant === 'light' ? 'bg-white text-slate-800' : 'bg-slate-900 text-white'}
    ${className}
  `;

  return (
    <div className="flex items-center gap-3">
      <div className={containerClasses}>
        <img src="/favicon.ico" alt="DAVV Logo" className="w-full h-full object-contain p-1" />
      </div>
      {showText && (
        <span
          className={`
            text-xl font-bold text-white
            ${textClassName}
          `}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export type { LogoProps };
export default Logo;




