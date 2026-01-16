import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";

interface LiveBus {
  id: number;
  busNo: string;
  driverName: string;
  currentLocation: string;
  speed: number;
  lastUpdated: string;
  status: "Running" | "Stopped" | "Idle";
  battery: number;
}

const BusLiveTracking: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const [buses] = useState<LiveBus[]>([
    { id: 1, busNo: "MP-04-HE-1234", driverName: "Karan Yadav", currentLocation: "M.P. Nagar, Zone-1", speed: 42, lastUpdated: "Just Now", status: "Running", battery: 85 },
    { id: 2, busNo: "MP-04-GB-5678", driverName: "Ramesh Kumar", currentLocation: "Lalghati Square", speed: 0, lastUpdated: "2 mins ago", status: "Stopped", battery: 92 },
    { id: 3, busNo: "MP-04-AX-0001", driverName: "Sohan Singh", currentLocation: "Indrapuri C-Sector", speed: 15, lastUpdated: "1 min ago", status: "Running", battery: 40 },
  ]);

  return (
    <PageLayout title="Fleet Telematics">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[calc(100vh-180px)]">
        
        <div className="lg:col-span-1 flex flex-col gap-3 overflow-y-auto pr-2">
          <Card className="shadow-sm">
            <h4 className="m-0 text-gray-800 uppercase text-xs font-black tracking-widest mb-3">Live Fleet Status</h4>
            <span className="p-input-icon-left w-full">
                <i className="pi pi-search" />
                <InputText 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search Bus No..." 
                    className="p-inputtext-sm w-full" 
                />
            </span>
          </Card>

          {buses.map((bus) => (
            <Card key={bus.id} className={`cursor-pointer border-l-4 transition-all hover:shadow-md ${bus.status === 'Running' ? 'border-green-500' : 'border-red-500'}`}>
              <div className="flex justify-between items-start mb-2">
                <span className="font-black text-sm text-blue-900">{bus.busNo}</span>
                <Tag value={bus.status} severity={bus.status === 'Running' ? 'success' : 'danger'} className="text-[10px]" />
              </div>
              <p className="text-[11px] m-0 text-gray-600 font-bold"><i className="pi pi-user mr-1" />{bus.driverName}</p>
              <p className="text-[11px] m-0 text-gray-500 mt-1"><i className="pi pi-map-marker mr-1" />{bus.currentLocation}</p>
              
              <Divider className="my-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Speed: {bus.speed} km/h</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase">GPS: {bus.lastUpdated}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-3 h-full">
          <Card className="h-full p-0 overflow-hidden shadow-lg border-2 border-gray-800 relative">
            
            <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center relative">
               <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <Button icon="pi pi-external-link" label="Full Screen" className="p-button-sm p-button-secondary shadow-md" />
                  <Button icon="pi pi-refresh" className="p-button-sm p-button-info shadow-md" />
               </div>
               
              
               <i className="pi pi-map text-gray-300 text-8xl mb-4" />
               <p className="text-gray-400 font-black uppercase tracking-widest text-sm">Real-time GPS Map Integration</p>
               <p className="text-gray-400 text-xs">Tracking {buses.length} Active Vehicles</p>
               
             
               <div className="absolute top-[30%] left-[40%] animate-bounce">
                  <i className="pi pi-map-marker text-red-600 text-4xl" />
                  <div className="bg-white p-1 rounded shadow-lg border text-[10px] font-bold">MP-04-HE-1234</div>
               </div>
            </div>
            
     
            <div className="absolute bottom-4 left-4 right-4 flex gap-4 pointer-events-none">
                <div className="bg-black/80 text-white p-3 rounded flex-1 backdrop-blur-sm border border-white/20">
                    <span className="text-[10px] uppercase font-black opacity-60">Total Running</span>
                    <h3 className="m-0 p-0 text-xl font-black">06</h3>
                </div>
                <div className="bg-black/80 text-white p-3 rounded flex-1 backdrop-blur-sm border border-white/20">
                    <span className="text-[10px] uppercase font-black opacity-60">Alerts / Over-speed</span>
                    <h3 className="m-0 p-0 text-xl font-black text-orange-400">02</h3>
                </div>
                <div className="bg-black/80 text-white p-3 rounded flex-1 backdrop-blur-sm border border-white/20">
                    <span className="text-[10px] uppercase font-black opacity-60">Network Latency</span>
                    <h3 className="m-0 p-0 text-xl font-black text-green-400">0.4s</h3>
                </div>
            </div>
          </Card>
        </div>
        
      </div>
    </PageLayout>
  );
};

export default BusLiveTracking;