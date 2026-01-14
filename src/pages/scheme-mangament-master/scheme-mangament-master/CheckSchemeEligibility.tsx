/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Divider } from "primereact/divider";
import { Message } from "primereact/message";
import { Dropdown } from "@/ui/shared"; 

export default function CheckSchemeEligibility() {
  const [year, setYear] = useState<any>(null);
  const [schemeType, setSchemeType] = useState<any>(null);
  const [schemeName, setSchemeName] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [category, setCategory] = useState<any>(null);
  const [income, setIncome] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [result, setResult] = useState<null | boolean>(null);

  const years = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" }
  ];

  const schemeTypes = [
    { label: "Scholarship", value: "Scholarship" },
    { label: "Financial Aid", value: "FinancialAid" }
  ];

  const schemeNames = [
    { label: "Merit Scholarship", value: "Merit" },
    { label: "SC/ST Support Scheme", value: "SCST" }
  ];

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" }
  ];

  const categories = [
    { label: "General", value: "GEN" },
    { label: "OBC", value: "OBC" },
    { label: "SC", value: "SC" },
    { label: "ST", value: "ST" }
  ];

  const calculateAge = (birth: Date) => {
    const diff = Date.now() - birth.getTime();
    return new Date(diff).getUTCFullYear() - 1970;
  };

  const handleCheck = () => {
    if (!year || !schemeType || !schemeName || !district || !category || !income || !dob) {
      return; 
    }

    const age = calculateAge(dob);
    const incomeVal = Number(income);

 
    if (age >= 18 && age <= 30 && incomeVal <= 250000) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  const handleClear = () => {
    setYear(null);
    setSchemeType(null);
    setSchemeName(null);
    setDistrict(null);
    setCategory(null);
    setIncome("");
    setDob(null);
    setResult(null);
  };

  return (
    <Card title="Check Scheme Eligibility">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <Dropdown 
          label="Academic Year" 
          required 
          value={year} 
          options={years} 
          onChange={(e) => setYear(e.value)} 
          placeholder="Select" 
        />

        <Dropdown 
          label="Scheme Type" 
          required 
          value={schemeType} 
          options={schemeTypes} 
          onChange={(e) => setSchemeType(e.value)} 
          placeholder="Select" 
        />

        <Dropdown 
          label="Scheme Name" 
          required 
          value={schemeName} 
          options={schemeNames} 
          onChange={(e) => setSchemeName(e.value)} 
          placeholder="Select" 
        />

        <Dropdown 
          label="District" 
          required 
          value={district} 
          options={districts} 
          onChange={(e) => setDistrict(e.value)} 
          placeholder="Select" 
        />

        <Dropdown 
          label="Category" 
          required 
          value={category} 
          options={categories} 
          onChange={(e) => setCategory(e.value)} 
          placeholder="Select" 
        />

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Annual Family Income *</label>
          <InputText 
            value={income} 
            type="number"
            onChange={(e) => setIncome(e.target.value)} 
            placeholder="Enter Amount" 
            className="w-full p-inputtext-sm" 
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Date of Birth *</label>
          <Calendar 
            value={dob} 
            onChange={(e) => setDob(e.value as Date)} 
            showIcon 
            className="w-full p-inputtext-sm" 
            placeholder="Select Date"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <Button 
          label="Check Eligibility" 
          icon="pi pi-verified" 
          onClick={handleCheck} 
          className="bg-blue-600 px-6"
        />
        <Button 
          label="Clear" 
          icon="pi pi-refresh" 
          severity="secondary" 
          onClick={handleClear} 
          outlined
          className="px-6"
        />
      </div>

   
      {result !== null && (
        <div className="mt-8 animate-fadein">
          <Divider align="center">
            <span className="p-tag p-tag-info">Result</span>
          </Divider>
          
          <div className="flex justify-center p-4">
            {result ? (
              <Message 
                severity="success" 
                text="Congratulations! Based on your criteria, you are eligible for this scheme." 
                className="w-full md:w-8/12 p-4 text-lg border-l-4"
              />
            ) : (
              <Message 
                severity="error" 
                text="Based on the information provided, you do not meet the eligibility requirements for this scheme." 
                className="w-full md:w-8/12 p-4 text-lg border-l-4"
              />
            )}
          </div>
        </div>
      )}
    </Card>
  );
}