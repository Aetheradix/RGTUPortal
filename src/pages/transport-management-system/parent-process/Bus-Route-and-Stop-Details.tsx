import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Timeline } from "primereact/timeline";
import { Tag } from "primereact/tag";

interface RouteStop {
  stopName: string;
  time: string;
  distance: string;
  type: "start" | "stop" | "end" | "my-stop";
}

const BusRouteAndStopDetails: React.FC = () => {
  
  const busOptions = [
    { label: "Bus No: MP-04-HE-1234 (Route-101)", value: "B1" },
    { label: "Bus No: MP-04-HE-5678 (Route-102)", value: "B2" },
    { label: "Mini Bus: MP-04-ZE-9900 (Route-105)", value: "B3" }
  ];

  const [selectedBus, setSelectedBus] = useState<string>("B1");


  const routeData: Record<string, RouteStop[]> = {
    "B1": [
      { stopName: "Main Depot", time: "07:15 AM", distance: "0 KM", type: "start" },
      { stopName: "Minal Residency Gate", time: "07:35 AM", distance: "4.5 KM", type: "my-stop" },
      { stopName: "Railway Station North", time: "07:50 AM", distance: "8 KM", type: "stop" },
      { stopName: "Indrapuri C-Sector", time: "08:05 AM", distance: "11 KM", type: "stop" },
      { stopName: "School Campus", time: "08:15 AM", distance: "14 KM", type: "end" },
    ],
    "B2": [
      { stopName: "Bairagarh Stand", time: "07:20 AM", distance: "0 KM", type: "start" },
      { stopName: "Lalghati Square", time: "07:40 AM", distance: "5 KM", type: "stop" },
      { stopName: "VIP Road Junction", time: "08:00 AM", distance: "9 KM", type: "my-stop" },
      { stopName: "School Campus", time: "08:20 AM", distance: "15 KM", type: "end" },
    ]
  };

  const currentRoute = routeData[selectedBus] || [];


  const customizedMarker = (item: RouteStop) => {
    let bgColor = "bg-blue-500";
    let icon = "pi-map-marker";

    if (item.type === "start" || item.type === "end") {
        bgColor = "bg-gray-800";
        icon = "pi-flag-fill";
    } else if (item.type === "my-stop") {
        bgColor = "bg-green-500 scale-125"; 
        icon = "pi-user";
    }

    return (
      <span className={`flex items-center justify-center w-8 h-8 rounded-full z-10 shadow-md ${bgColor} transition-all`}>
        <i className={`pi ${icon} text-white text-xs`}></i>
      </span>
    );
  };

  const customizedContent = (item: RouteStop) => {
    const isMyStop = item.type === "my-stop";
    return (
      <Card className={`mb-4 shadow-sm border-l-4 ${isMyStop ? 'border-green-500 bg-green-50' : 'border-blue-200'}`}>
        <div className="flex justify-between items-center">
          <div>
            <h4 className={`font-bold m-0 ${isMyStop ? 'text-green-800' : 'text-gray-700'}`}>
                {item.stopName}
            </h4>
            <small className="text-gray-500 font-medium italic">Dist: {item.distance}</small>
          </div>
          <div className="text-right">
            <Tag value={item.time} severity={isMyStop ? "success" : "info"} className="px-3" />
            {isMyStop && <p className="text-[9px] font-bold text-green-600 mt-1 uppercase tracking-wider">Assigned Stop</p>}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <PageLayout title="Transport Schedule">
      

      <div className="flex flex-col gap-4 animate-fade-in text-left">
        
       
        <Card className="border-t-4 border-blue-900 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-full">
                        <i className="pi pi-search text-blue-700 font-bold"></i>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold m-0 text-blue-900 uppercase">Find Bus Schedule</h3>
                        <p className="text-xs text-gray-500 m-0">Select bus number to see all stops & timings</p>
                    </div>
                </div>
                <Dropdown 
                  value={selectedBus} 
                  options={busOptions} 
                  onChange={(e) => setSelectedBus(e.value)} 
                  placeholder="Select Bus Number"
                  className="w-full md:w-96 p-inputtext-sm"
                  filter
                  showClear
                />
            </div>
        </Card>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-12">
                <Card title="Route Sequence (Start to School)" className="shadow-md">
                    <div className="px-2 md:px-20 mt-4">
                        {currentRoute.length > 0 ? (
                            <Timeline 
                                value={currentRoute} 
                                align="left" 
                                marker={customizedMarker} 
                                content={customizedContent} 
                                className="p-mt-4"
                            />
                        ) : (
                            <div className="text-center py-20 text-gray-400">
                                <i className="pi pi-bus text-6xl mb-4 block"></i>
                                <p>Please select a Bus Number to view its route details.</p>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default BusRouteAndStopDetails;