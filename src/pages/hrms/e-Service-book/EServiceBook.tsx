import React from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="border-2 border-blue-500 rounded-lg p-4 mb-6">
    <h3 className="text-center text-blue-600 font-bold mb-4">{title}</h3>
    <div className="overflow-x-auto">{children}</div>
  </div>
);

const Row = ({
  l1,
  v1,
  l2,
  v2,
  l3,
  v3,
}: {
  l1: string;
  v1: string;
  l2?: string;
  v2?: string;
  l3?: string;
  v3?: string;
}) => (
  <tr>
    <td className="border px-3 py-2 font-semibold">{l1}</td>
    <td className="border px-3 py-2">{v1}</td>

    {l2 && (
      <>
        <td className="border px-3 py-2 font-semibold">{l2}</td>
        <td className="border px-3 py-2">{v2}</td>
      </>
    )}

    {l3 && (
      <>
        <td className="border px-3 py-2 font-semibold">{l3}</td>
        <td className="border px-3 py-2">{v3}</td>
      </>
    )}
  </tr>
);

const EmployeeEServiceBook: React.FC = () => {
  return (
    <PageLayout title="Employee E-Service Book">
      <div className="space-y-6">
        <Section title="Personal Information">
          <table className="w-full border text-sm">
            <tbody>
              <Row l1="Unique Id" v1="AU8336" l2="Name" v2="Ashok Patidar" />
              <Row
                l1="Father's / Husband Name"
                v1="Rameshwar Verma"
                l2="Date of Birth"
                v2="03/06/1992"
                l3="Age"
                v3="33"
              />
              <Row
                l1="Gender"
                v1="Male"
                l2="Height"
                v2="5'7''"
                l3="Caste"
                v3="OBC"
              />
              <Row
                l1="Sub Caste"
                v1="Bhardwaj"
                l2="Religion"
                v2="Hindu"
                l3="Identification Mark"
                v3="Moles in left Hand"
              />
              <Row
                l1="Blood Group"
                v1="A+"
                l2="Handicapped (PWD)"
                v2="No"
                l3="Critical Illness"
                v3="No"
              />
              <Row
                l1="Pan No."
                v1="ABCTY1234D"
                l2="Aadhaar No."
                v2="334512098765"
                l3="Samagra ID No"
                v3="213409876"
              />
              <Row
                l1="Employee Treasury Code"
                v1="TYE2345"
                l2="Employee PRAN Code"
                v2="UPE456"
                l3="Mobile No."
                v3="8878346789"
              />
              <Row
                l1="Email Id"
                v1="ajay@gmail.com"
                l2="Employee Roll No."
                v2="A45687"
                l3="Rank In TET"
                v3="3rd"
              />
              <Row l1="Hobbies" v1="Reading Books" />
            </tbody>
          </table>
        </Section>

        <Section title="Nominee Details">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Nominee Name</th>
                <th className="border p-2">Relationship with Nominee</th>
                <th className="border p-2">Nominee Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">Sourya Verma</td>
                <td className="border">Father</td>
                <td className="border">50%</td>
              </tr>
              <tr>
                <td className="border">2</td>
                <td className="border">Sudha Verma</td>
                <td className="border">Mother</td>
                <td className="border">50%</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Present Address">
          <table className="w-full border text-sm">
            <tbody>
              <Row l1="State" v1="Madhya Pradesh" l2="Division" v2="Bhopal" />
              <Row l1="District" v1="Raisen" l2="Block" v2="Begamganj" />
              <Row
                l1="Pincode"
                v1="462010"
                l2="Address line 1"
                v2="2 B, near bank of india, Awadhpuri, Bhopal, Madhya Pradesh"
              />
              <Row l1="Address line 2" v1="Apt 202" />
            </tbody>
          </table>
        </Section>

        <Section title="Permanent Address">
          <table className="w-full border text-sm">
            <tbody>
              <Row l1="State" v1="Madhya Pradesh" l2="Division" v2="Bhopal" />
              <Row l1="District" v1="Raisen" l2="Block" v2="Badi" />
              <Row
                l1="Pincode"
                v1="462030"
                l2="Address line 1"
                v2="123 Main Street, apt 4B San Diego CA, 91911"
              />
              <Row l1="Address line 2" v1="Main Street, apt 4B" />
            </tbody>
          </table>
        </Section>

        <Section title="Marital Status and Spouse Details">
          <table className="w-full border text-sm">
            <tbody>
              <Row
                l1="Married Status"
                v1="Yes"
                l2="Spouse Name"
                v2="Shalini Verma"
                l3="Is Spouse Government Employee"
                v3="No"
              />
            </tbody>
          </table>
        </Section>
        <Section title="First Appointment Details">
          <table className="w-full border text-sm">
            <tbody>
              <Row
                l1="Office Type"
                v1="Faculty"
                l2="Office Code"
                v2="DFX222111"
              />
              <Row
                l1="First Appointment Division"
                v1="Gwalior"
                l2="First Appointment District"
                v2="Raisen"
              />
              <Row
                l1="First Appointment Block"
                v1="Badi"
                l2="University"
                v2="Traditional Govt Universities"
              />
              <Row
                l1="Office/Institute/College Code & Name"
                v1="Govt Nehru P G College (6595685484)"
                l2="Office/Institute/College Address of First Posting"
                v2="1234 NW Bobcat Lane, Nehru P G College"
              />
              <Row
                l1="First Appointment Order No."
                v1="3456"
                l2="First Appointment Order Date"
                v2="08/04/2020"
              />
              <Row
                l1="First Appointment Department"
                v1="Higher Education Department (HED)"
                l2="Employee’s Designation Type"
                v2="Regular"
              />
              <Row
                l1="First Appointment Designation"
                v1="Lecturer"
                l2="Appointment Joining Date"
                v2="09/11/2021"
              />
              <Row l1="Panal Name" v1="SSS-3" l2="Subject" v2="English" />
              <Row
                l1="Samvilian Order No."
                v1="2018/100144"
                l2="Samvilian Order Date"
                v2="29/07/2011"
              />
              <Row
                l1="Organization on Deputation Transfer"
                v1="No"
                l2="Is Regular"
                v2="Yes"
              />
              <Row
                l1="Increment Month"
                v1="January"
                l2="Provision Period From Month"
                v2="01/03/2017"
              />
              <Row
                l1="Provision Period To Month"
                v1="04/07/2021"
                l2="If Provision Extend"
                v2="No"
              />
              <Row
                l1="Provision Type"
                v1="Regular Employee"
                l2="Employee Retirement Date"
                v2="09/12/2026"
              />
              <Row
                l1="Type of Post"
                v1="Employee"
                l2="Class"
                v2="Professor of History"
              />
              <Row
                l1="Pay Commission"
                v1="Seventh Pay Commission"
                l2="Level"
                v2="Level-3"
              />
              <Row l1="Pay Scale" v1="9300-34800" l2="Basic Pay" v2="16500" />
            </tbody>
          </table>
        </Section>
        <Section title="Current Posting Details">
          <table className="w-full border text-sm">
            <tbody>
              <Row
                l1="Office Code"
                v1="HED0123"
                l2="Office Type"
                v2="Higher Education"
              />
              <Row
                l1="Current Appointment Division"
                v1="Narmadapuram"
                l2="Current Appointment District"
                v2="Sehore"
              />
              <Row
                l1="Current Appointment Block"
                v1="Ashta"
                l2="University / College"
                v2="Traditional Govt Universities / Barkatullah University"
              />
              <Row
                l1="Office/Institute/College Code & Name"
                v1="Barkatullah College (6859475168)"
                l2="Office/Institute/College Address of First Posting"
                v2="1234 NW Bobcat Lane, MP"
              />
              <Row
                l1="Current Appointment Order No."
                v1="9840"
                l2="Current Appointment Order Date"
                v2="09/10/2020"
              />
              <Row
                l1="Current Appointment Department"
                v1="Higher Education"
                l2="Employee’s Designation Type"
                v2="University Owned"
              />
              <Row
                l1="Current Appointment Designation"
                v1="Faculty"
                l2="Current Appointment Joining Date"
                v2="01/11/2021"
              />
              <Row
                l1="Panal Name"
                v1="SSS-5"
                l2="Subject"
                v2="Professor of History"
              />
              <Row
                l1="Samvilian Order No."
                v1="92357"
                l2="Samvilian Order Date"
                v2="20/12/2018"
              />
              <Row
                l1="Organization on Deputation Transfer"
                v1="No"
                l2="Is Regular"
                v2="Yes"
              />
              <Row
                l1="Increment Month"
                v1="January"
                l2="Employee Retirement Date"
                v2="09/10/2026"
              />
              <Row
                l1="Type of Post"
                v1="Regular Employee"
                l2="Class"
                v2="Semester 1 to V"
              />
              <Row
                l1="Pay Commission"
                v1="Seventh Pay Commission"
                l2="Level"
                v2="Level-3"
              />
              <Row l1="Pay Scale" v1="9300-34800" l2="Basic Pay" v2="16500" />
            </tbody>
          </table>
        </Section>
        <Section title="Education Qualification">
          <table className="w-full border text-sm">
            <tbody>
              <Row l1="Qualification" v1="PHD" l2="Subject" v2="History" />
              <Row
                l1="Board / University Name"
                v1="MP Board / Jawaharlal Nehru University"
                l2="Passing Year"
                v2="03/05/2022"
              />
              <Row l1="Grade / Percentage" v1="75%" />
            </tbody>
          </table>
        </Section>

        <Section title="Employee Account Info">
          <table className="w-full border text-sm">
            <tbody>
              <Row
                l1="DPF No."
                v1="34567"
                l2="Group Insurance No."
                v2="B57445"
              />
              <Row l1="Gratuity No." v1="TGT5676" l2="EGLS No." v2="PO7856" />
              <Row l1="EDLI No." v1="ILG98" l2="ESIC No." v2="UYT567" />
            </tbody>
          </table>
        </Section>
        <Section title="Promotion Details">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Promotion Type</th>
                <th className="border p-2">Order Number</th>
                <th className="border p-2">Order Date</th>
                <th className="border p-2">Name of Issuing Office</th>
                <th className="border p-2">
                  District / Division Level Authority
                </th>
                <th className="border p-2">Designation</th>
                <th className="border p-2">Pay Scale of the Post</th>
                <th className="border p-2">Joining Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">Without Transfer</td>
                <td className="border">231/22</td>
                <td className="border">22/02/2022</td>
                <td className="border">DPI</td>
                <td className="border">Nil</td>
                <td className="border">Assistant Grate-I</td>
                <td className="border">50000</td>
                <td className="border">23/02/2022</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Transfer Details">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Transfer Type</th>
                <th className="border p-2">Order Number</th>
                <th className="border p-2">Order Date</th>
                <th className="border p-2">Designation (Type)</th>
                <th className="border p-2">
                  Posted Institute / Office Name (Code)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">Administrative Transfer</td>
                <td className="border">135924</td>
                <td className="border">09/08/2023</td>
                <td className="border">Professor</td>
                <td className="border">
                  Jawaharlal Nehru University / [23220403602]
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Pay Scale Details">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Order Number</th>
                <th className="border p-2">Order Date</th>
                <th className="border p-2">Name of Issuing Office</th>
                <th className="border p-2">
                  District / Division Level Authority
                </th>
                <th className="border p-2">Pay Scale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">231/22</td>
                <td className="border">22/02/2022</td>
                <td className="border">DPI</td>
                <td className="border">Nil</td>
                <td className="border">8000</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Increment Details">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Year</th>
                <th className="border p-2">Month</th>
                <th className="border p-2">New Basic Pay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">2022</td>
                <td className="border">April</td>
                <td className="border">16000</td>
              </tr>
            </tbody>
          </table>
        </Section>
        <Section title="Promotion Details">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Promotion Type</th>
                <th className="border p-2">Order Number</th>
                <th className="border p-2">Order Date</th>
                <th className="border p-2">Name of Issuing Office</th>
                <th className="border p-2">
                  District / Division Level Authority
                </th>
                <th className="border p-2">Designation</th>
                <th className="border p-2">Pay Scale of the Post</th>
                <th className="border p-2">Joining Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">Without Transfer</td>
                <td className="border">231/22</td>
                <td className="border">22/02/2022</td>
                <td className="border">DPI</td>
                <td className="border">Nil</td>
                <td className="border">Assistant Grate-I</td>
                <td className="border">50000</td>
                <td className="border">23/02/2022</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Transfer Details">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Transfer Type</th>
                <th className="border p-2">Order Number</th>
                <th className="border p-2">Order Date</th>
                <th className="border p-2">Designation (Type)</th>
                <th className="border p-2">
                  Posted Institute / Office Name (Code)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">Administrative Transfer</td>
                <td className="border">135924</td>
                <td className="border">09/08/2023</td>
                <td className="border">Professor</td>
                <td className="border">
                  Jawaharlal Nehru University / [23220403602]
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Pay Scale Details">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Order Number</th>
                <th className="border p-2">Order Date</th>
                <th className="border p-2">Name of Issuing Office</th>
                <th className="border p-2">
                  District / Division Level Authority
                </th>
                <th className="border p-2">Pay Scale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">231/22</td>
                <td className="border">22/02/2022</td>
                <td className="border">DPI</td>
                <td className="border">Nil</td>
                <td className="border">8000</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Increment Details">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Year</th>
                <th className="border p-2">Month</th>
                <th className="border p-2">New Basic Pay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">2022</td>
                <td className="border">April</td>
                <td className="border">16000</td>
              </tr>
            </tbody>
          </table>
        </Section>
        <Section title="Are You Involved in National or State Level Training or State Level Group">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Source Group Area</th>
                <th className="border p-2">National Level Working Day</th>
                <th className="border p-2">State Level Working Day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">Faculty Development Programs</td>
                <td className="border">10 days</td>
                <td className="border">15 days</td>
              </tr>
              <tr>
                <td className="border">2</td>
                <td className="border">Research Methodology Workshops</td>
                <td className="border">3–10 days</td>
                <td className="border">3–15 days</td>
              </tr>
              <tr>
                <td className="border">3</td>
                <td className="border">Computer-Based Training Programs</td>
                <td className="border">5–10 days</td>
                <td className="border">5–10 days</td>
              </tr>
              <tr>
                <td className="border">4</td>
                <td className="border">Inclusive Education Training</td>
                <td className="border">3–5 days</td>
                <td className="border">3–5 days</td>
              </tr>
              <tr>
                <td className="border">5</td>
                <td className="border">
                  Skill Development and Vocational Training for Students
                </td>
                <td className="border">1 week–1 month</td>
                <td className="border">1 week–1 month</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Details of National or State Level Awards And Honors">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Name of Honor and Award</th>
                <th className="border p-2">Award Level</th>
                <th className="border p-2">Year</th>
                <th className="border p-2">Order Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">Total College Awards</td>
                <td className="border">National Level</td>
                <td className="border">2018</td>
                <td className="border">YT23545</td>
              </tr>
              <tr>
                <td className="border">2</td>
                <td className="border">Teaching Award</td>
                <td className="border">State Level</td>
                <td className="border">2021</td>
                <td className="border">Nil</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="In-service, Induction, CWSN, Computer, Dakshata, ABL, 90 Days IED">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Training Type</th>
                <th className="border p-2">Training Level</th>
                <th className="border p-2">Duration</th>
                <th className="border p-2">From Date</th>
                <th className="border p-2">To Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">1</td>
                <td className="border">Computer Training</td>
                <td className="border">Raisen</td>
                <td className="border">10 days</td>
                <td className="border">11/06/2024</td>
                <td className="border">21/06/2024</td>
              </tr>
              <tr>
                <td className="border">2</td>
                <td className="border">Skills Training</td>
                <td className="border">Berasia</td>
                <td className="border">8 days</td>
                <td className="border">01/07/2024</td>
                <td className="border">08/07/2024</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Resource Group Details">
          <table className="w-full border text-sm text-center">
            <tbody>
              <tr>
                <td className="border text-red-600 font-semibold">
                  Resource Group Details Not Available
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="Document">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Document Name</th>
                <th className="border p-2">View</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Appointment Order Certificate",
                "Birth Certificate",
                "Caste Certificate (OBC/ST/SC)",
                "Present Posting Order",
                "Handicapped Certificate",
                "Critical Illness Certificate",
                "Married Certificate",
              ].map((doc, i) => (
                <tr key={doc}>
                  <td className="border">{i + 1}</td>
                  <td className="border">{doc}</td>
                  <td className="border text-blue-600 cursor-pointer">View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="Educational Document">
          <table className="w-full border text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Document Name</th>
                <th className="border p-2">View</th>
              </tr>
            </thead>
            <tbody>
              {[
                "10th Marksheet",
                "12th Marksheet",
                "UG Certificate",
                "PG Certificate",
                "Diploma Certificate",
                "Other Certificate",
              ].map((doc, i) => (
                <tr key={doc}>
                  <td className="border">{i + 1}</td>
                  <td className="border">{doc}</td>
                  <td className="border text-blue-600 cursor-pointer">View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <div className="flex justify-center mt-10">
          <Button label="Print" className="bg-indigo-600 px-10" />
        </div>
      </div>
    </PageLayout>
  );
};

export default EmployeeEServiceBook;
