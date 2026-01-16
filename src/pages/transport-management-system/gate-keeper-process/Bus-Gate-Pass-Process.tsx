/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";

const BusGatePassProcess: React.FC = () => {
  const toast = useRef<Toast>(null);

  const [logs, setLogs] = useState<any[]>([
    { id: 1, busNo: "MP-04-HE-1234", driver: "Ram Singh", outTime: "07:30 AM", inTime: "09:00 AM", status: "IN", km: 12050 },
    { id: 2, busNo: "MP-04-HE-5678", driver: "Mohan Lal", outTime: "07:45 AM", inTime: null, status: "OUT", km: 8500 }
  ]);

  const [busNo, setBusNo] = useState("");
  const [kmReading, setKmReading] = useState("");

  const busList = [
    { label: "MP-04-HE-1234", value: "MP-04-HE-1234" },
    { label: "MP-04-HE-5678", value: "MP-04-HE-5678" },
    { label: "MP-04-ZE-9900", value: "MP-04-ZE-9900" }
  ];

  const handleProcess = (type: "IN" | "OUT") => {
    if (!busNo) {
      toast.current?.show({ severity: 'warn', summary: 'Missing Info', detail: 'Please select Bus' });
      return;
    }

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    if (type === "OUT") {
      const newEntry = { id: Date.now(), busNo, driver: "Driver Name", outTime: time, inTime: null, status: "OUT", km: kmReading };
      setLogs([newEntry, ...logs]);
      toast.current?.show({ severity: 'info', summary: 'Bus Exit', detail: `Bus ${busNo} Out at ${time}` });
    } else {
      setLogs(logs.map(l => l.busNo === busNo && l.status === "OUT" ? { ...l, inTime: time, status: "IN" } : l));
      toast.current?.show({ severity: 'success', summary: 'Bus Entry', detail: `Bus ${busNo} In at ${time}` });
    }
    setBusNo(""); setKmReading("");
  };

  return (
    <PageLayout title="Gate Management">
      <Toast ref={toast} />
      
      <div className="grid grid-cols-12 gap-4 text-left">
        
        <div className="col-span-12 lg:col-span-4">
          <Card title="New Gate Movement" className="h-full border-t-4 border-blue-700 shadow-sm">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Bus Number</label>
                <Dropdown value={busNo} options={busList} onChange={(e) => setBusNo(e.value)} filter placeholder="Select Vehicle" className="w-full" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Odometer (KM Reading)</label>
                <InputText value={kmReading} onChange={(e) => setKmReading(e.target.value)} placeholder="Enter Current KM" type="number" />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <Button label="OUT (Exit)" icon="pi pi-upload" className="p-button-danger font-bold p-4" onClick={() => handleProcess("OUT")} />
                <Button label="IN (Entry)" icon="pi pi-download" className="p-button-success font-bold p-4" onClick={() => handleProcess("IN")} />
              </div>
            </div>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
             <div className="p-4 bg-red-100 text-red-800 rounded-lg border border-red-200">
                <p className="m-0 text-sm font-bold uppercase">Buses Outside</p>
                <h1 className="m-0 font-black">{logs.filter(l => l.status === "OUT").length}</h1>
             </div>
             <div className="p-4 bg-green-100 text-green-800 rounded-lg border border-green-200">
                <p className="m-0 text-sm font-bold uppercase">Buses Inside</p>
                <h1 className="m-0 font-black">{logs.filter(l => l.status === "IN").length}</h1>
             </div>
          </div>

          <Card title="Today's Logs" className="shadow-sm">
            <DataTable value={logs} scrollable scrollHeight="400px" className="p-datatable-sm" stripedRows>
              <Column field="busNo" header="Vehicle No." />
              <Column field="outTime" header="Out" body={(r) => <b className="text-red-500">{r.outTime}</b>} />
              <Column field="inTime" header="In" body={(r) => <b className="text-green-600">{r.inTime || '--'}</b>} />
              <Column field="km" header="KM" />
              <Column field="status" header="Status" body={(r) => (
                <Tag value={r.status} severity={r.status === 'OUT' ? 'danger' : 'success'} />
              )} />
            </DataTable>
          </Card>
        </div>

      </div>
    </PageLayout>
  );
};
export default BusGatePassProcess;