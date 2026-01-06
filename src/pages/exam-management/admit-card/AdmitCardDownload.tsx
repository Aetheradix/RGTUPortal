import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import PageLayout from '@/components/PageLayout';

type FormKeys = 'roll' | 'year' | 'sem' | 'status';

const options = {
  year: ['2024-25', '2025-26'],
  sem: ['1st', '2nd', '3rd', '4th'],
  status: ['Active', 'Inactive'],
};

export default function AdmitCardDownloadPage() {
  const [form, setForm] = useState<Record<FormKeys, string>>({
    roll: '', year: '', sem: '', status: ''
  });

  const set = (k: FormKeys, v: string) => setForm(p => ({ ...p, [k]: v }));
  const clear = () => setForm({ roll: '', year: '', sem: '', status: '' });

  const search = () => {
    if (Object.values(form).some(v => !v)) return alert('Please fill all fields!');
    window.open('https://rgpv.tserver.co.in/images/duplicate%20marksheet/btech_2nd_sem_admit_card.pdf', '_blank');
  };

  const dd = (label: string, key: FormKeys, list: string[]) => (
    <div>
      <label className="block text-sm mb-1">{label} *</label>
      <Dropdown
        value={form[key]}
        options={[{ label: 'Select', value: '' }, ...list.map(v => ({ label: v, value: v }))]}
        onChange={e => set(key, e.value)}
        placeholder={`Select ${label.replace('Select ', '')}`}
        className="w-full"
      />
    </div>
  );

  return (
    <PageLayout title="Admit Card Download">
      <Card>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm mb-1">Enter Roll Number *</label>
            <InputText
              value={form.roll}
              placeholder="Enter Roll Number"
              onChange={e => set('roll', e.target.value)}
              className="w-full"
            />
          </div>
          {dd('Select Year Term', 'year', options.year)}
          {dd('Select Semester', 'sem', options.sem)}
          {dd('Select Status', 'status', options.status)}
        </div>

        <div className="flex gap-3">
          <Button label="Search" icon="pi pi-search" onClick={search} />
          <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" onClick={clear} />
        </div>
      </Card>
    </PageLayout>
  );
}
