import { Route, Routes } from "react-router-dom";
import TrainingandAward from "./training-and-awards-management";


export default function Trainingawardsystem() {
  return (
    <Routes>
      <Route path="training-and-awards-management/*" element={<TrainingandAward />} />
    </Routes> 
  );
}
