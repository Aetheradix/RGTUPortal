import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const CMSLogin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");


  const [profileData] = useState({
    nameEnglish: "Raman Varma",
    nameHindi: "रमण वर्मा",
    gender: "Male",
    mobile: "9876543210",
    dob: "1990-01-01",
    category: "General",
    fatherName: "Mr. Satish Varma",
    motherName: "Mrs. Shobha Varma",
    familySamagraId: "1234567890",
    maritalStatus: "",
    email: "Ramanvarma@gmail.com",
  });

  const handleLogin = () => {
    if (userId.trim() && password.trim()) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter User Id and Password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <PageLayout title={isLoggedIn ? "Profile View" : "CMS Login"}>
      {!isLoggedIn ? (
        <Card className="shadow-1" style={{ maxWidth: 400, margin: "auto" }}>
          <div className="text-center mb-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/37/Emblem_of_India.svg"
              alt="Logo"
              style={{ width: 80, marginBottom: 10 }}
            />
            <h2>CMS Login</h2>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="field mb-4">
              <label htmlFor="userid" className="block font-semibold mb-2">
                User Id <span style={{ color: "red" }}>*</span>
              </label>
              <InputText
                id="userid"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User Id"
                className="w-full"
                required
              />
            </div>

            <div className="field mb-5">
              <label htmlFor="password" className="block font-semibold mb-2">
                Password <span style={{ color: "red" }}>*</span>
              </label>
              <InputText
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full"
                required
              />
            </div>

            <Button
              type="submit" 
              label="Login"
              className="w-full"
              icon="pi pi-sign-in"
              disabled={!userId.trim() || !password.trim()}
            />
          </form>

          <div className="mt-3 text-center">
            <a href="#" className="text-sm text-blue-600">
              Forgot Password?
            </a>
          </div>
        </Card>
      ) : (
        <Card
          className="shadow-1"
          style={{ maxWidth: 900, margin: "auto", position: "relative" }}
        >
          <Button
            label="Go Back"
            icon="pi pi-arrow-left"
            className="p-button-sm p-button-rounded p-button-outlined"
            style={{ position: "absolute", top: 20, right: 20 }}
            onClick={handleLogout}
          />

          <h2 className="mb-6">Profile View</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div>
              <label className="block mb-1 font-semibold">
                Enter Name (English)
              </label>
              <InputText
                value={profileData.nameEnglish}
                disabled
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Enter Name (Hindi)
              </label>
              <InputText
                value={profileData.nameHindi}
                disabled
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Select Gender</label>
              <InputText
                value={profileData.gender}
                disabled
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Enter Mobile</label>
              <InputText
                value={profileData.mobile}
                disabled
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Select Date of Birth
              </label>
              <InputText value={profileData.dob} disabled className="w-full" />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Select Category
              </label>
              <InputText
                value={profileData.category}
                disabled
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Enter Father's Name
              </label>
              <InputText
                value={profileData.fatherName}
                disabled
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Enter Mother's Name
              </label>
              <InputText
                value={profileData.motherName}
                disabled
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Enter Family Samagra ID
              </label>
              <InputText
                value={profileData.familySamagraId}
                disabled
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Select Marital Status*
              </label>
              <InputText
                value={profileData.maritalStatus || "Select"}
                disabled
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Enter Email</label>
              <InputText
                value={profileData.email}
                disabled
                className="w-full"
              />
            </div>
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default CMSLogin;
