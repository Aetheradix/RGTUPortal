// import React, { useState } from "react";
// import PageLayout from "../../../components/PageLayout";
// import { Button } from "primereact/button";
// import { InputText } from "primereact/inputtext";
// import { Calendar } from "primereact/calendar";

// interface StudentData {
//   applicationNumber: string;
//   allocationStatus: string;
//   studentName: string;
//   dob: Date | null;
//   gender: string;
//   fatherName: string;
//   category: string;
//   mobile: string;
//   email: string;
// }

// const EditRegistrationDetails: React.FC = () => {
//   const [regNo, setRegNo] = useState("");
//   const [isEdit, setIsEdit] = useState(false);

//   const [student, setStudent] = useState<StudentData | null>(null);

//   const handleSearch = () => {
//     setStudent({
//       applicationNumber: "12345",
//       allocationStatus: "Round 1",
//       studentName: "Rahul Sharma",
//       dob: new Date("2000-04-10"),
//       gender: "Male",
//       fatherName: "Abhay Sharma",
//       category: "General",
//       mobile: "8523697412",
//       email: "rahul12@gmail.com",
//     });
//     setIsEdit(false);
//   };

//   const inputClass = (editable: boolean) =>
//     `w-full ${editable ? "" : "bg-gray-200"} `;

//   return (
//     <PageLayout title="Edit Registration Details">
//       <div className="bg-white p-4 rounded shadow mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
//           <div className="md:col-span-2">
//             <label className="font-medium">
//               Student Registration No. <span className="text-red-500">*</span>
//             </label>
//             <InputText
//               className="w-full"
//               placeholder="Student Registration No."
//               value={regNo}
//               onChange={(e) => setRegNo(e.target.value)}
//             />
//           </div>
//           <Button
//             label="Search"
//             className="bg-indigo-600 border-none text-white px-6"
//             onClick={handleSearch}
//           />
//         </div>
//       </div>

//       {student && (
//         <div className="bg-white p-6 rounded shadow">
//           <h3 className="text-lg font-semibold mb-4">Student Details</h3>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div>
//               <label>Application Number</label>
//               <InputText
//                 value={student.applicationNumber}
//                 disabled
//                 className={inputClass(false)}
//               />
//             </div>

//              <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Select Allocation Status
//             </label>
//             <select>
//               <option value="">Select</option>
//               <option value="round1">Round 1</option>
//               <option value="round2">Round 2</option>
//               <option value="round3">Round 3</option>
//               <option value="clc">CLC Round (College level counseling)</option>
//             </select>
//           </div>

//             <div>
//               <label>Student Name</label>
//               <InputText
//                 value={student.studentName}
//                 className={inputClass(isEdit)}
//                 onChange={(e) =>
//                   setStudent({ ...student, studentName: e.target.value })
//                 }
//               />
//             </div>

//             <div>
//               <label>Date of Birth</label>
//               <Calendar
//                 value={student.dob}
//                 className={inputClass(isEdit)}
//                 onChange={(e) =>
//                   setStudent({ ...student, dob: e.value as Date })
//                 }
//               />
//             </div>

//             <div>
//               <label>Gender</label>
//               <InputText
//                 value={student.gender}
//                 className={inputClass(false)}
//               />
//             </div>

//             <div>
//               <label>Father Name</label>
//               <InputText
//                 value={student.fatherName}
//                 className={inputClass(isEdit)}
//                 onChange={(e) =>
//                   setStudent({ ...student, fatherName: e.target.value })
//                 }
//               />
//             </div>

//             <div>
//               <label>Category</label>
//               <InputText
//                 value={student.category}
//                 className={inputClass(false)}
//               />
//             </div>

//             <div>
//               <label>
//                 Mobile Number <span className="text-red-500">*</span>
//               </label>
//               <InputText
//                 value={student.mobile}
//                 className={inputClass(isEdit)}
//                 onChange={(e) =>
//                   setStudent({ ...student, mobile: e.target.value })
//                 }
//               />
//             </div>

//             <div>
//               <label>
//                 Email Address <span className="text-red-500">*</span>
//               </label>
//               <InputText
//                 value={student.email}
//                 className={inputClass(isEdit)}
//                 onChange={(e) =>
//                   setStudent({ ...student, email: e.target.value })
//                 }
//               />
//             </div>
//           </div>

//           <div className="flex justify-center mt-6">
//             {!isEdit ? (
//               <Button
//                 label="Edit Registration Details"
//                 className="bg-indigo-600 border-none text-white px-8"
//                 onClick={() => setIsEdit(true)}
//               />
//             ) : (
//               <Button
//                 label="Save Changes"
//                 className="bg-green-600 border-none text-white px-8"
//                 onClick={() => {
//                   console.log("UPDATED DATA", student);
//                   setIsEdit(false);
//                 }}
//               />
//             )}
//           </div>
//         </div>
//       )}
//     </PageLayout>
//   );
// };

// export default EditRegistrationDetails;

import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

interface StudentData {
  applicationNumber: string;
  allocationStatus: string;
  studentName: string;
  dob: Date | null;
  gender: string;
  fatherName: string;
  category: string;
  mobile: string;
  email: string;
}

const EditRegistrationDetails: React.FC = () => {
  const [regNo, setRegNo] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [student, setStudent] = useState<StudentData | null>(null);

  const handleSearch = () => {
    setStudent({
      applicationNumber: "12345",
      allocationStatus: "round1",
      studentName: "Rahul Sharma",
      dob: new Date("2000-04-10"),
      gender: "male",
      fatherName: "Abhay Sharma",
      category: "general",
      mobile: "8523697412",
      email: "rahul12@gmail.com",
    });
    setIsEdit(false);
  };

  const inputClass = (editable: boolean) =>
    `w-full ${editable ? "" : "bg-gray-200"} `;
  const selectStyle =
    "w-full p-inputtext p-component border border-gray-300 rounded-md p-2 bg-white focus:border-blue-500 focus:shadow-none outline-none";

  return (
    <PageLayout title="Edit Registration Details">
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-2">
            <label className="font-medium">
              Student Registration No. <span className="text-red-500">*</span>
            </label>
            <InputText
              className="w-full"
              placeholder="Student Registration No."
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
            />
          </div>
          <Button
            label="Search"
            className="bg-indigo-600 border-none text-white px-6"
            onClick={handleSearch}
          />
        </div>
      </div>

      {student && (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Student Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Application Number */}
            <div>
              <label>Application Number</label>
              <InputText
                value={student.applicationNumber}
                disabled
                className={inputClass(false)}
              />
            </div>

            {/* Allocation Status Dropdown */}
             <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Allocation Status
            </label>
            <select className={selectStyle}>
              <option value="">Select</option>
              <option value="round1">Round 1</option>
              <option value="round2">Round 2</option>
              <option value="round3">Round 3</option>
              <option value="clc">CLC Round (College level counseling)</option>
            </select>
          </div>

            {/* Student Name */}
            <div>
              <label>Student Name</label>
              <InputText
                value={student.studentName}
                className={inputClass(isEdit)}
                onChange={(e) =>
                  setStudent({ ...student, studentName: e.target.value })
                }
              />
            </div>

            {/* DOB */}
            <div>
              <label>Date of Birth</label>
              <Calendar
                value={student.dob}
                className={inputClass(isEdit)}
                onChange={(e) =>
                  setStudent({ ...student, dob: e.value as Date })
                }
              />
            </div>

            {/* Gender Dropdown */}
            
             <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Gender <span className="text-red-500">*</span>
            </label>
            <select className={selectStyle}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

            {/* Father Name */}
            <div>
              <label>Father Name</label>
              <InputText
                value={student.fatherName}
                className={inputClass(isEdit)}
                onChange={(e) =>
                  setStudent({ ...student, fatherName: e.target.value })
                }
              />
            </div>

            {/* Category Dropdown */}
             <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Category <span className="text-red-500">*</span>
            </label>
            <select className={selectStyle}>
              <option value="">Select Category</option>
              <option value="gen">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
          </div>

            {/* Mobile */}
            <div>
              <label>
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <InputText
                value={student.mobile}
                className={inputClass(isEdit)}
                onChange={(e) =>
                  setStudent({ ...student, mobile: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div>
              <label>
                Email Address <span className="text-red-500">*</span>
              </label>
              <InputText
                value={student.email}
                className={inputClass(isEdit)}
                onChange={(e) =>
                  setStudent({ ...student, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Edit / Save Button */}
          <div className="flex justify-center mt-6">
            {!isEdit ? (
              <Button
                label="Edit Registration Details"
                className="bg-indigo-600 border-none text-white px-8"
                onClick={() => setIsEdit(true)}
              />
            ) : (
              <Button
                label="Save Changes"
                className="bg-green-600 border-none text-white px-8"
                onClick={() => {
                  console.log("UPDATED DATA", student);
                  setIsEdit(false);
                }}
              />
            )}
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default EditRegistrationDetails;
