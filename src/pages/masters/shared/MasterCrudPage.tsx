import React, { useMemo, useState } from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import PageLayout from '@/components/PageLayout';
import { Dropdown, Input, Table, type DropdownOption, type TableColumn } from '@/ui/shared';

type TextField<TForm> = {
  kind: 'text';
  name: keyof TForm;
  label: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  toUpperCase?: boolean;
};

type DropdownField<TForm> = {
  kind: 'dropdown';
  name: keyof TForm;
  label: string;
  required?: boolean;
  placeholder?: string;
  options: DropdownOption[];
};

type CheckboxField<TForm> = {
  kind: 'checkbox';
  name: keyof TForm;
  label: string;
};

export type MasterField<TForm> = TextField<TForm> | DropdownField<TForm> | CheckboxField<TForm>;

export type MasterCrudPageProps<TForm extends Record<string, any>, TRow extends Record<string, any>> = {
  title: string;
  tableTitle: string;
  defaultForm: TForm;
  fields: MasterField<TForm>[];
  rows: TRow[];
  columns: TableColumn[];
};

function MasterCrudPage<TForm extends Record<string, any>, TRow extends Record<string, any>>({
  title,
  tableTitle,
  defaultForm,
  fields,
  rows,
  columns,
}: MasterCrudPageProps<TForm, TRow>) {
  const [formData, setFormData] = useState<TForm>(defaultForm);

  const reset = () => setFormData(defaultForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with API
    // Keeping console.log for now so we can verify payload quickly in dev
    // eslint-disable-next-line no-console
    console.log(`${title} saved:`, formData);
  };

  const gridFields = useMemo(() => fields.filter((f) => f.kind !== 'checkbox'), [fields]);
  const checkboxFields = useMemo(
    () => fields.filter((f) => f.kind === 'checkbox') as CheckboxField<TForm>[],
    [fields],
  );

  const renderedGridFields = useMemo(() => {
    return gridFields.map((field) => {
      if (field.kind === 'text') {
        const value = String(formData[field.name] ?? '');
        return (
          <Input
            key={String(field.name)}
            label={field.label}
            required={field.required}
            value={value}
            maxLength={field.maxLength}
            placeholder={field.placeholder}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [field.name]: field.toUpperCase ? e.target.value.toUpperCase() : e.target.value,
              }))
            }
          />
        );
      }

      // dropdown
      return (
        <Dropdown
          key={String(field.name)}
          label={field.label}
          required={field.required}
          value={formData[field.name]}
          options={(field as DropdownField<TForm>).options}
          placeholder={(field as DropdownField<TForm>).placeholder}
          onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.value }))}
        />
      );
    });
  }, [formData, gridFields]);

  return (
    <PageLayout title={title}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{renderedGridFields}</div>

        {/* If any checkbox fields exist, render them under the grid for better alignment */}
        {checkboxFields.length > 0 && (
          <div className="flex flex-wrap items-center gap-6">
            {checkboxFields.map((ff) => {
                return (
                  <div key={String(ff.name)} className="flex items-center gap-2">
                    <Checkbox
                      inputId={String(ff.name)}
                      checked={Boolean(formData[ff.name])}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, [ff.name]: e.checked ?? false }))
                      }
                    />
                    <label htmlFor={String(ff.name)} className="text-sm font-medium text-gray-700">
                      {ff.label}
                    </label>
                  </div>
                );
              })}
          </div>
        )}

        <div className="flex gap-3 ">
          <Button type="submit" label="Save" icon="pi pi-save" className="p-button-primary" />
          <Button type="button" label="Reset" icon="pi pi-refresh" className="p-button-outlined" onClick={reset} />
        </div>
      </form>

      <div className="mt-8">
        <Table title={tableTitle} columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
}

export default MasterCrudPage;


