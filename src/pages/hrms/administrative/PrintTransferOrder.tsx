/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import Table, { type TableColumn } from "@/ui/shared/Table";
import {
  blocksOptions,
  districtsOptions,
  transferData,
} from "./administrative.data";

const PrintTransferOrder: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const toast = useRef<Toast>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    if (!selectedDistrict || !selectedBlock) {
      toast.current?.show({
        severity: "warn",
        summary: "Validation Failed",
        detail: "Please select both District and Block.",
        life: 3000,
      });
      return;
    }
    setStep(2);
  };

  const handleClear = () => {
    setSelectedDistrict(null);
    setSelectedBlock(null);
    setStep(1);

    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Form inputs have been reset.",
      life: 2000,
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const actionTemplate = (rowData: any) => {
    return (
      <Button
        icon="pi pi-eye"
        className="p-button-rounded p-button-info p-button-sm w-8 h-8"
        onClick={() => {
          setSelectedRow(rowData);
          setShowPrintModal(true);
        }}
      />
    );
  };

  const printTransferOrdercolumns: TableColumn[] = [
    { field: "orderNumber", header: "Order Number" },
    { field: "employeeName", header: "Employee Name(Code)" },
    { field: "transferDirectedBy", header: "Transfer Directed By" },
    { field: "oldDistrict", header: "District(Code)" },
    { field: "oldBlock", header: "Block(Code)" },
    { field: "oldOffice", header: "Old Office(Code)" },
    { field: "newOffice", header: "New Office(Code)" },
    { field: "print", header: "Print Order", body: actionTemplate },
  ];

  return (
    <PageLayout title="Administrative Print Transfer Order">
      <Toast ref={toast} />
      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select District Name
            </label>
            <Dropdown
              value={selectedDistrict}
              options={districtsOptions}
              onChange={(e) => setSelectedDistrict(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select Block Name
            </label>
            <Dropdown
              value={selectedBlock}
              options={blocksOptions}
              onChange={(e) => setSelectedBlock(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
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
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-end items-center mb-4">
            <div className="flex items-center gap-2 text-xs">
              <span>Search:</span>
              <InputText
                className="p-inputtext-sm"
                placeholder="Search in table..."
              />
            </div>
          </div>

          <Table
            data={transferData}
            columns={printTransferOrdercolumns}
            showPagination
            rowsPerPage={10}
            className="p-datatable-sm"
          />
        </div>
      )}
      <Dialog
        header="Transfer Order Preview"
        visible={showPrintModal}
        style={{ width: "850px" }}
        onHide={() => setShowPrintModal(false)}
        footer={
          <div className="flex justify-center gap-2">
            <Button
              label="Print"
              icon="pi pi-print"
              className="p-button-success px-6"
              onClick={handlePrint}
            />
            <Button
              label="Close"
              icon="pi pi-times"
              className="p-button-outlined p-button-secondary px-6"
              onClick={() => setShowPrintModal(false)}
            />
          </div>
        }
      >
        <div
          ref={printRef}
          className="p-8 bg-white text-black leading-relaxed text-sm border"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <img src="/logo.png" alt="Logo" className="w-16 h-16" />
            <div className="text-center">
              <h1 className="text-xl font-bold">
                लोक शिक्षण संचालनालय मध्य प्रदेश
              </h1>
              <p className="font-semibold">गौतम नगर, भोपाल - 462021</p>
            </div>
            <div className="w-20 h-20 bg-gray-200 border flex items-center justify-center text-[8px]">
              QR CODE
            </div>
          </div>

          <div className="flex justify-between border-t border-b py-2 mb-4 text-xs font-bold">
            <span>क्र./स्थानांतरण: 2024/20-01/140621</span>
            <span>दिनांक: 09-03-2024</span>
          </div>

          <div className="text-center font-bold text-lg mb-4 underline">
            :: आदेश ::
          </div>

          <p className="mb-6 text-justify leading-6">
            राज्य शासन एतद् द्वारा सक्षम स्वीकृति उपरांत निम्नांकित लोक सेवक को
            उनके नाम के सम्मुख तालिका के कॉलम क्र. 7 एवं 8 में अंकित संस्था एवं
            जिले में समान सामर्थ्य एवं वेतनमान में स्थानांतरित कर पदस्थ किया
            जाता है।
          </p>

          {/* Transfer Table */}
          <table className="w-full border-collapse border border-gray-400 mb-6 text-xs text-center">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-400 p-1">सरल क्र.</th>
                <th className="border border-gray-400 p-1">नाम एवं पद</th>
                <th className="border border-gray-400 p-1">विषय</th>
                <th className="border border-gray-400 p-1">
                  कार्यरत संस्था एवं डाइस कोड
                </th>
                <th className="border border-gray-400 p-1">कार्यरत जिला</th>
                <th className="border border-gray-400 p-1">
                  नवीन संस्था एवं डाइस कोड
                </th>
                <th className="border border-gray-400 p-1">
                  नवीन पदस्थापना का जिला
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">1</td>
                <td className="border border-gray-400 p-2 font-bold">
                  {selectedRow?.employeeName || "Arjun Talwar"}
                  <br />
                  Prathmik Shikshak
                </td>
                <td className="border border-gray-400 p-2">Hindi</td>
                <td className="border border-gray-400 p-2">
                  (2327100059) B.HSS BISTAN
                </td>
                <td className="border border-gray-400 p-2">Bhopal</td>
                <td className="border border-gray-400 p-2">
                  (2327100059) B.HSS Bhopal
                </td>
                <td className="border border-gray-400 p-2">Ratlam</td>
              </tr>
            </tbody>
          </table>

          <div className="font-bold mb-4">
            उक्त स्थानांतरण निम्न शर्तों के अधीन रहेगा :-
          </div>
          <ol className="list-decimal pl-5 text-[11px] space-y-2">
            <li>
              संबंधित लोक सेवक का स्थानांतरण आदेश जारी होने पर उसकी ई-सेवा
              पुस्तिका/सेवा पुस्तिका से मिलान करने के उपरांत सही पाए जाने पर ही
              कार्य मुक्त किया जाए।
            </li>
            <li>
              संबंधित लोक सेवक पदस्थ संस्था से बगैर सूचना के लंबी अवधि से
              अनुपस्थित होने की स्थिति में स्थानांतरण स्वतः ही निरस्त माना
              जायेगा।
            </li>
            <li>
              स्थानांतरित लोक सेवक, संकुल केंद्र में उपस्थिति देने के उपरांत
              स्थानांतरित संस्था में कार्यभार ग्रहण करेगा।
            </li>
            {/* ... Add other terms as needed ... */}
          </ol>

          <div className="mt-12 text-right">
            <p className="font-bold">(शिल्पा गुप्ता)</p>
            <p>आयुक्त</p>
            <p>लोक शिक्षण, मध्यप्रदेश</p>
          </div>
        </div>
      </Dialog>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          .p-dialog, .p-dialog * { visibility: visible; }
          .p-dialog { position: absolute; left: 0; top: 0; width: 100%; border: none !important; }
          .p-dialog-header, .p-dialog-footer { display: none !important; }
        }
      `}</style>
    </PageLayout>
  );
};

export default PrintTransferOrder;
