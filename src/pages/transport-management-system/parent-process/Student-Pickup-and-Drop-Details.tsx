/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";

const StudentPickupDropDetails: React.FC = () => {
  const students = [
    { label: "Aditya Sharma (Class 8-A)", value: "S101" },
    { label: "Riya Sharma (Class 3-B)", value: "S105" }
  ];

  const [selectedStudent, setSelectedStudent] = useState<string>("S101");

  const transportInfo: any = {
    "S101": {
      vehicleNo: "MP-04-HE-1234",
      driver: "Ram Singh",
      contact: "+91 98765-43210",
      pickup: { stop: "Minal Residency Gate", time: "07:45 AM" },
      drop: { stop: "Minal Residency Gate", time: "02:30 PM" },
    }
  };

  const data = transportInfo[selectedStudent];

  return (
    <PageLayout title="Transport Details">
      <div className="max-w-5xl mx-auto animate-fade-in text-left">
        
        {/* Top Selection Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <i className="pi pi-user text-2xl text-blue-600 bg-blue-50 p-3 rounded-circle"></i>
            <h2 className="text-xl font-bold text-gray-800 m-0">Student Transport Info</h2>
          </div>
          <Dropdown 
            value={selectedStudent} 
            options={students} 
            onChange={(e) => setSelectedStudent(e.value)} 
            className="w-full md:w-72" 
          />
        </div>

        {data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Bus Info Card */}
            <Card className="border-t-4 border-blue-500 shadow-sm">
              <p className="text-xs font-bold text-gray-400 uppercase mb-2">Vehicle No.</p>
              <h3 className="text-2xl font-black text-blue-900">{data.vehicleNo}</h3>
              <Tag value="Active Route" severity="success" className="mt-2" />
            </Card>

            {/* Driver Card */}
            <Card className="border-t-4 border-orange-400 shadow-sm">
              <p className="text-xs font-bold text-gray-400 uppercase mb-2">Driver Details</p>
              <h3 className="text-lg font-bold text-gray-800">{data.driver}</h3>
              <Button 
                icon="pi pi-phone" 
                label="Call Driver" 
                className="p-button-sm p-button-outlined mt-2 w-full" 
                onClick={() => window.open(`tel:${data.contact}`)} 
              />
            </Card>

            {/* Pickup Card */}
            <Card className="border-t-4 border-indigo-500 shadow-sm bg-indigo-50/30">
              <div className="flex justify-between items-start">
                <p className="text-xs font-bold text-indigo-600 uppercase">Pickup</p>
                <i className="pi pi-sun text-indigo-400"></i>
              </div>
              <h3 className="text-xl font-bold mt-2 text-gray-800">{data.pickup.time}</h3>
              <p className="text-sm text-gray-600 truncate">{data.pickup.stop}</p>
            </Card>

            {/* Drop Card */}
            <Card className="border-t-4 border-green-500 shadow-sm bg-green-50/30">
              <div className="flex justify-between items-start">
                <p className="text-xs font-bold text-green-600 uppercase">Drop</p>
                <i className="pi pi-moon text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold mt-2 text-gray-800">{data.drop.time}</h3>
              <p className="text-sm text-gray-600 truncate">{data.drop.stop}</p>
            </Card>

            {/* Quick Map Button (New Idea) */}
            <div className="md:col-span-2 lg:col-span-4 mt-2">
               <div className="p-4 bg-blue-900 text-white rounded-lg flex justify-between items-center shadow-lg">
                  <div>
                    <h4 className="font-bold m-0">Live Tracking Available</h4>
                    <p className="text-sm opacity-80 m-0">Check your child's current bus location</p>
                  </div>
                  <Button label="Track Now" icon="pi pi-map-marker" className="p-button-warning" />
               </div>
            </div>

          </div>
        ) : (
          <div className="text-center p-12 bg-gray-50 rounded-lg border-2 border-dashed">
            <i className="pi pi-info-circle text-4xl text-gray-300"></i>
            <p className="text-gray-500 mt-2">Selection required to view details.</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default StudentPickupDropDetails;