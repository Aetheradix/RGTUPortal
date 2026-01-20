import { useRef, useState } from 'react';
import * as XLSX from 'xlsx';

export interface ReportEntry {
	id: string;
	documentName: string;
	documentType: string;
	invoiceNo: string;
	department: string;
	section: string;
	date: Date | null;
	assetValue: string;
	status: 'Pending' | 'Success' | 'Error';
	matchCase: 'Yes' | 'Needs Review';
}

export const useReportUpload = () => {
	const [entries, setEntries] = useState<ReportEntry[]>([]);
	const [globalDocType, setGlobalDocType] = useState<string | null>(null);
	const [globalDept, setGlobalDept] = useState<string | null>(null);
	const [globalSection, setGlobalSection] = useState<string | null>(null);
	const [globalDate, setGlobalDate] = useState<Date | null>(new Date());
	const fileInputRef = useRef<HTMLInputElement>(null);

	const findValue = (row: any, keys: string[]) => {
		const foundKey = Object.keys(row).find(k => 
			keys.some(key => k.toLowerCase().replace(/\s+/g, '') === key.toLowerCase().replace(/\s+/g, ''))
		);
		return foundKey ? row[foundKey] : null;
	};

	const addManualEntry = () => {
		const newEntry: ReportEntry = {
			id: Math.random().toString(36).substr(2, 9),
			documentName: '',
			documentType: globalDocType || '',
			invoiceNo: '',
			department: globalDept || '',
			section: globalSection || '',
			date: globalDate,
			assetValue: '0',
			status: 'Pending',
			matchCase: 'Needs Review'
		};
		setEntries(prev => [...prev, newEntry]);
	};

	const removeEntry = (id: string) => {
		setEntries(prev => prev.filter(e => e.id !== id));
	};

	const updateEntry = (id: string, field: keyof ReportEntry, value: any) => {
		setEntries(prev => prev.map(e => e.id === id ? { ...e, [field]: value } : e));
	};

	const handleExcelUpload = (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent) => {
		let file: File | undefined;
		if (e.target && 'files' in (e.target as any) && (e.target as any).files) {
			file = (e.target as any).files[0];
		} else if ('dataTransfer' in e && (e as any).dataTransfer.files) {
			file = (e as any).dataTransfer.files[0];
		}

		if (!file) return;

		const reader = new FileReader();
		reader.onload = (event) => {
			const data = new Uint8Array(event.target?.result as ArrayBuffer);
			const workbook = XLSX.read(data, { type: 'array' });
			const sheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[sheetName];
			const jsonData = XLSX.utils.sheet_to_json(worksheet) as any[];

			const newEntries: ReportEntry[] = jsonData.map((row) => ({
				id: Math.random().toString(36).substr(2, 9),
				documentName: findValue(row, ['DocumentName', 'Name', 'FileName']) || 'Untitled Document',
				documentType: findValue(row, ['DocumentType', 'Type', 'Category']) || globalDocType || '',
				invoiceNo: findValue(row, ['InvoiceNo', 'Invoice', 'No']) || 'N/A',
				department: findValue(row, ['Department', 'Dept']) || globalDept || '',
				section: findValue(row, ['Section', 'Unit']) || globalSection || '',
				date: findValue(row, ['Date', 'DateTime']) ? new Date(findValue(row, ['Date', 'DateTime'])) : globalDate,
				assetValue: findValue(row, ['AssetValue', 'Value']) || '0',
				status: 'Pending',
				matchCase: String(findValue(row, ['MatchCase', 'Match']))?.toLowerCase().includes('yes') ? 'Yes' : 'Needs Review'
			}));

			setEntries(prev => [...prev, ...newEntries]);
		};
		reader.readAsArrayBuffer(file);
		if (fileInputRef.current) fileInputRef.current.value = '';
	};

	return {
		entries,
		setEntries,
		globalDocType,
		setGlobalDocType,
		globalDept,
		setGlobalDept,
		globalSection,
		setGlobalSection,
		globalDate,
		setGlobalDate,
		fileInputRef,
		addManualEntry,
		removeEntry,
		updateEntry,
		handleExcelUpload
	};
};
