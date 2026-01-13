import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AppFeature from "./pages";
import AppLayout from "./layout/AppLayout";
import React, { Suspense } from "react";
import 'primeicons/primeicons.css';
        
const Login = React.lazy(() => import("./components/auth"));

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
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ProtectedApp />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
};

export default App;
