import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";

interface GroupWiseLedger {
  srNo: number;
  ledgerName: string;
  ledgerCode: string;
  groupName: string;
  createOfficeName: string;
}

const GroupWiseLedgerList: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const toast = useRef<Toast>(null);

  const ledgerData: GroupWiseLedger[] = [
    {
      srNo: 1,
      ledgerName: "Basic Pay/Special Pay/Dearness Allowance",
      ledgerCode: "10.01.01",
      groupName: "Expenses",
      createOfficeName: "Directorate of Technical Education (DTE)",
    },
    {
      srNo: 2,
      ledgerName: "Gratuity Premium Payment",
      ledgerCode: "10.01.02",
      groupName: "Expenses",
      createOfficeName: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    },
    {
      srNo: 3,
      ledgerName: "Gratuity Payment",
      ledgerCode: "10.00.03",
      groupName: "Expenses",
      createOfficeName: "AICTE Regional Office",
    },
  ];

  const groupOptions = [
    { label: "All", value: "All" },
    { label: "Current Assets", value: "Current Assets" },
    { label: "Bank Accounts", value: "Bank Accounts" },
    { label: "Expenses", value: "Expenses" },
    { label: "Indirect Income", value: "Indirect Income" },
  ];

  const handleSearch = () => {
    if (!selectedGroup) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select a group name",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Ledger list loaded",
      life: 3000,
    });
  };

  const handleClear = () => {
    setSelectedGroup(null);
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Reset",
      detail: "Filters cleared",
      life: 2000,
    });
  };

  const renderViewField = (label: string, value: string) => (
    <div className="flex border border-gray-200">
      <div className="bg-gray-50 p-2 text-xs font-bold border-r border-gray-200 w-1/2 flex items-center">
        {label}
      </div>
      <div className="p-2 text-xs w-1/2 flex items-center text-blue-600">
        {value}
      </div>
    </div>
  );

  return (
    <PageLayout title="Group Wise Ledger">
      <Toast ref={toast} />

      <div className="bg-white">
        <div className="flex flex-col gap-2 max-w-md">
          <label className="text-sm font-bold text-gray-600">
            Select Group Name<span className="text-red-500">*</span>
          </label>
          <Dropdown
            value={selectedGroup}
            options={groupOptions}
            onChange={(e) => setSelectedGroup(e.value)}
            placeholder="Nothing selected"
            className="w-full"
          />
        </div>
        <div className="flex gap-2 mt-6">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-primary px-6"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-outlined p-button-danger px-6"
            onClick={handleClear}
          />
        </div>
      </div>

      {step === 2 && (
        <div className="bg-white mt-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-semibold text-gray-700">
              Group Wise Ledger List
            </h3>
            <div className="flex items-center gap-2 text-sm">
              <span>Search:</span>
              <InputText className="p-inputtext-sm" />
            </div>
          </div>

          <DataTable
            value={ledgerData}
            className="p-datatable-sm"
            paginator
            rows={10}
          >
            <Column field="srNo" header="Sr. No." sortable />
            <Column field="ledgerName" header="Ledger Name" sortable />
            <Column field="ledgerCode" header="Ledger Code" sortable />
            <Column field="groupName" header="Group Name" sortable />
            <Column
              field="createOfficeName"
              header="Create Office Name"
              sortable
            />
            <Column
              header="Action"
              style={{ textAlign: "center" }}
              body={() => (
                <Button
                  icon="pi pi-eye"
                  text
                  className="p-button-rounded p-button-info"
                  onClick={() => setShowViewDialog(true)}
                  title="View Details"
                />
              )}
            />
          </DataTable>
        </div>
      )}

      <Dialog
        header="Ledger Creation"
        visible={showViewDialog}
        style={{ width: "60vw" }}
        onHide={() => setShowViewDialog(false)}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-bold mb-2">Ledger Creation</h4>
            <div className="grid grid-cols-3">
              {renderViewField("Ledger Name in English", "Sales Ledger")}
              {renderViewField("Ledger Code", "SL001")}
              {renderViewField("Ledger Alias", "Sales")}
              {renderViewField("Group Name", "Indirect Income")}
              {renderViewField("Ledger Date", "01/01/2024")}
              <div className="border border-gray-200 bg-white"></div>
            </div>
          </div>

          {/* Bank Account Details */}
          <div>
            <h4 className="text-sm font-bold mb-2">Bank Account Details</h4>
            <div className="grid grid-cols-3">
              {renderViewField("A/c Holder Name", "Nikita Gupta")}
              {renderViewField("Bank Account No.", "85210036974")}
              {renderViewField("IFSC Code", "FRGHB123G")}
              {renderViewField("Bank Name", "Bank of India")}
              {renderViewField("Bank Branch Name", "Connaught Place")}
              <div className="border border-gray-200 bg-white"></div>
            </div>
          </div>

          {/* Mailing Details */}
          <div>
            <h4 className="text-sm font-bold mb-2">Mailing Details</h4>
            <div className="grid grid-cols-4">
              {renderViewField("Mailing Name", "Anup Gupta")}
              {renderViewField("State Name", "Madhya Pradesh")}
              {renderViewField("City Name", "Bhopal")}
              {renderViewField("PIN Code", "520064")}
              {renderViewField("Mobile No", "8523697412")}
              {renderViewField("Email ID", "anup12@gmail.com")}
              {renderViewField("Address", "Gandhi Market Bhopal")}
              <div className="border border-gray-200 bg-white"></div>
            </div>
          </div>

          {/* Tax Registration Details */}
          <div>
            <h4 className="text-sm font-bold mb-2">Tax Registration Details</h4>
            <div className="grid grid-cols-3">
              {renderViewField("PAN (IT) No.", "ABCDE1234F")}
              {renderViewField("Registration Types", "Unregistered")}
              {renderViewField("GST No.", "22ABCDE1234Z1Z5")}
            </div>
          </div>

          {/* GST Details */}
          <div>
            <h4 className="text-sm font-bold mb-2">GST Details</h4>
            <div className="grid grid-cols-4">
              {renderViewField("GST Applicable", "Yes")}
              <div className="col-span-3 border border-gray-200"></div>
              {renderViewField("GST Applicable From", "12/10/2024")}
              {renderViewField("Is Reverse Charge", "Yes")}
              {renderViewField("Type of Supply", "Goods")}
              {renderViewField("SAC/HSN Code", "852006")}
              {renderViewField("Taxability", "Yes")}
              {renderViewField("Integrated Tax (IGST)", "18%")}
              {renderViewField("Central Tax (CGST)", "9%")}
              {renderViewField("State Tax (SGST)", "9%")}
            </div>
          </div>

          {/* Ledger Other Details */}
          <div>
            <h4 className="text-sm font-bold mb-2">Ledger Other Details</h4>
            <div className="grid grid-cols-4">
              {renderViewField("Is Affected Inventory", "Yes")}
              {renderViewField("Is Budget Affected", "No")}
              {renderViewField("Ledger Maintain Type", "Goods")}
              {renderViewField("Maintain Balance Bill By Bill", "Bill By Bill")}
              {renderViewField("Dr./Cr", "Debit")}
              {renderViewField("Opening Balance", "10000")}
              <div className="col-span-2 border border-gray-200"></div>
            </div>
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default GroupWiseLedgerList;
