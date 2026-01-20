import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

export interface DatePickerProps {
	value: Date | null | string;
	onChange: (event: { value: Date | null; target: { value: Date | null; name?: string } }) => void;
	placeholder?: string;
	className?: string;
	label?: string;
	name?: string;
	required?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
	value,
	onChange,
	placeholder = 'Select date',
	className = '',
	label,
	name,
	required
}) => {
	// Helper to format date for the native input
	const formatForInput = (val: Date | null | string): string => {
		if (!val) return '';
		const d = val instanceof Date ? val : new Date(val);
		if (isNaN(d.getTime())) return '';
		return d.toISOString().split('T')[0];
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVal = e.target.value ? new Date(e.target.value) : null;
		onChange({
			value: newVal,
			target: { value: newVal, name }
		});
	};

	return (
		<div className={`flex flex-col w-full ${className}`}>
			{label && (
				<label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">
					{label} {required && <span className="text-rose-500">*</span>}
				</label>
			)}
			<div className="relative group">
				<div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-indigo-500 transition-colors z-10 pointer-events-none">
					<FaCalendarAlt />
				</div>
				<input
					type="date"
					value={formatForInput(value)}
					onChange={handleChange}
					placeholder={placeholder}
					className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-11 pr-4 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all hover:bg-white"
				/>
			</div>
		</div>
	);
};

export default DatePicker;
