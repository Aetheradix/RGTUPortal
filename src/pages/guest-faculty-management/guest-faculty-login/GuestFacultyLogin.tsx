import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Input } from '../../../ui/shared';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom'; 

const FacultyLogin: React.FC = () => {
  const navigate = useNavigate(); // Hook initialize karein
  
  // Views: 'login' | 'forgot' | 'reset'
  const [currentView, setCurrentView] = useState<'login' | 'forgot' | 'reset'>('login');
  const [showOtpModal, setShowOtpModal] = useState(false);
  
  // Form States
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState({ pass: '', confirm: '' });

  // Styles
  const inputBgStyle = { backgroundColor: '#EBF2FF', border: '1px solid #DBEAFE' };
  const primaryBtnStyle = { backgroundColor: '#6366F1', border: 'none' };

  // --- Handlers ---

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in...", loginData);
    
    // Yahan hum aapke bataye huye URL par redirect kar rahe hain
    navigate('/guest-faculty/login/profile-view');
  };

  const handleForgotSubmit = () => {
    setShowOtpModal(true);
  };

  const handleVerifyOtp = () => {
    setShowOtpModal(false);
    setCurrentView('reset');
  };

  const handleSaveNewPassword = () => {
    alert("Password reset successfully. Please login with your new password.");
    setCurrentView('login');
  };

  const navigateToRegister = () => {
    navigate('/guest-faculty/login/registration');
  };

  return (
    <div className=" flex items-center justify-center bg-gray-50 p-8">
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 w-full max-w-md">
        
        {/* --- 1. LOGIN VIEW --- */}
        {currentView === 'login' && (
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-2xl font-medium text-gray-800 mb-6">Guest Faculty Login</h2>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600">Email Address / Username</label>
              <Input 
                placeholder="Enter Username" 
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                style={inputBgStyle}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600">Password</label>
              <Password 
                value={loginData.password} 
                onChange={(e) => setLoginData({...loginData, password: e.target.value})} 
                toggleMask feedback={false} className="w-full"
                inputStyle={inputBgStyle} placeholder="••••••"
              />
            </div>

            <Button label="Login" className="w-full py-3" style={primaryBtnStyle} type="submit" />

            <div className="flex justify-center gap-2 text-xs text-gray-500 pt-2">
              <span className="cursor-pointer hover:text-indigo-600" onClick={() => setCurrentView('forgot')}>Forgot Password?</span>
              <span>|</span>
              <span className="cursor-pointer hover:text-indigo-600" onClick={navigateToRegister}>Register as Guest Faculty</span>
            </div>
          </form>
        )}

        {/* --- 2. FORGOT PASSWORD VIEW --- */}
        {currentView === 'forgot' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-gray-800 mb-6">Forgot Password</h2>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600">Email Address</label>
              <Input 
                placeholder="Enter Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button label="Submit" className="w-full py-3" style={primaryBtnStyle} onClick={handleForgotSubmit} />
            <div className="text-center">
              <span className="text-sm text-indigo-600 cursor-pointer" onClick={() => setCurrentView('login')}>Back to Login</span>
            </div>
          </div>
        )}

        {/* --- 3. SET NEW PASSWORD VIEW --- */}
        {currentView === 'reset' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-gray-800 mb-6">Set New Password</h2>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600">New Password</label>
              <Input 
                type="password" placeholder="Enter New Password" 
                value={newPassword.pass}
                onChange={(e) => setNewPassword({...newPassword, pass: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600">Confirm Password</label>
              <Input 
                type="password" placeholder="Re-enter New Password" 
                value={newPassword.confirm}
                onChange={(e) => setNewPassword({...newPassword, confirm: e.target.value})}
              />
            </div>
            <Button label="Save" className="w-full py-3" style={primaryBtnStyle} onClick={handleSaveNewPassword} />
          </div>
        )}

      </div>

      {/* --- OTP MODAL --- */}
      <Dialog 
        header="Enter OTP" 
        visible={showOtpModal} 
        onHide={() => setShowOtpModal(false)}
        style={{ width: '350px' }}
      >
        <div className="flex flex-col gap-4">
          <Input 
            placeholder="Enter OTP" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)} 
          />
          <Button label="Verify OTP" style={primaryBtnStyle} onClick={handleVerifyOtp} />
        </div>
      </Dialog>
    </div>
  );
};

export default FacultyLogin;