import { Route } from 'react-router-dom';
import StateMaster from '../../../pages/masters/location-master/StateMaster';
import DivisionMaster from '../../../pages/masters/location-master/DivisionMaster';
import DistrictMaster from '../../../pages/masters/location-master/DistrictMaster';
import TehsilMaster from '../../../pages/masters/location-master/TehsilMaster';
import BlockMaster from '../../../pages/masters/location-master/BlockMaster';
import ParliamentaryMaster from '../../../pages/masters/location-master/ParliamentaryMaster';
import AssemblyMaster from '../../../pages/masters/location-master/AssemblyMaster';
import NagarNigamMaster from '../../../pages/masters/location-master/NagarNigamMaster';
import NagarPalikaMaster from '../../../pages/masters/location-master/NagarPalikaMaster';
import JilaPanchayatMaster from '../../../pages/masters/location-master/JilaPanchayatMaster';
import NagarPanchayatMaster from '../../../pages/masters/location-master/NagarPanchayatMaster';
import JanpadPanchayatMaster from '../../../pages/masters/location-master/JanpadPanchayatMaster';
import GramPanchayatMaster from '../../../pages/masters/location-master/GramPanchayatMaster';
import PostOfficeMaster from '../../../pages/masters/location-master/PostOfficeMaster';
import VillageMaster from '../../../pages/masters/location-master/VillageMaster';
import HabitationMaster from '../../../pages/masters/location-master/HabitationMaster';
import PincodeMaster from '../../../pages/masters/location-master/PincodeMaster';

export const locationMasterRoutes = (
  <>
    <Route path="state-master" element={<StateMaster />} />
    <Route path="division-master" element={<DivisionMaster />} />
    <Route path="district-master" element={<DistrictMaster />} />
    <Route path="tehsil-master" element={<TehsilMaster />} />
    <Route path="block-master" element={<BlockMaster />} />
    <Route path="parliamentary-master" element={<ParliamentaryMaster />} />
    <Route path="assembly-master" element={<AssemblyMaster />} />
    <Route path="nagar-nigam-master" element={<NagarNigamMaster />} />
    <Route path="nagar-palik a-master" element={<NagarPalikaMaster />} />
    <Route path="jila-panchayat-master" element={<JilaPanchayatMaster />} />
    <Route path="nagar-panchayat-master" element={<NagarPanchayatMaster />} />
    <Route path="janpad-panchayat-master" element={<JanpadPanchayatMaster />} />
    <Route path="gram-panchayat-master" element={<GramPanchayatMaster />} />
    <Route path="post-office-master" element={<PostOfficeMaster />} />
    <Route path="village-master" element={<VillageMaster />} />
    <Route path="habitation-master" element={<HabitationMaster />} />
    <Route path="pincode-master" element={<PincodeMaster />} />
  </>
);
