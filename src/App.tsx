
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AppLayout from "./layout/AppLayout";
import AppFeature from "./pages";

const ProtectedApp = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppLayout>
      <AppFeature />
    </AppLayout>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ProtectedApp />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
