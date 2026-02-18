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
        <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
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




