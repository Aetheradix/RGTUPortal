interface DraftLetterData {
  srNo: number;
  orderNumber: string;
  employeeName: string;
  transferDirectedBy: string;
  oldDistrict: string;
  oldBlock: string;
  oldOffice: string;
  designation: string;
}

interface TransferOrderData {
  srNo: number;
  orderNumber: string;
  employeeName: string;
  transferDirectedBy: string;
  oldDistrict: string;
  oldBlock: string;
  oldOffice: string;
  newOffice: string;
  status: "Active" | "InActive";
}
