import { useAuth } from '@/context/AuthContext';
import { Eye, EyeOff, Shield, Sparkles, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthPageProps {
  title?: string;
  subtitle?: string;
  redirectTo?: string;
}

const AuthPage: React.FC<AuthPageProps> = ({
  title = 'Sign In',
  subtitle = 'Access your ERP dashboard',
  redirectTo = '/',
}) => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, navigate, redirectTo]);

  const [showPassword, setShowPassword] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-rotate features
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const isEmailValid = validateEmail(email);
  const isFormValid = isEmailValid && password.length >= 6;

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!isFormValid || loading) return;
    setError('');
    setLoading(true);

    try {
      const ok = await login(email, password);
      if (ok) {
        navigate(redirectTo, { replace: true });
      } else {
        setError('Invalid email or password');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      desc: "Bank-grade encryption protecting 500+ institutions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      desc: "99.9% uptime with instant data synchronization"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Insights",
      desc: "Smart analytics for better decision making"
    }
  ];

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isFormValid && !loading) {
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 flex items-center justify-center lg:p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Container */}
      <div className="relative w-full h-screen lg:h-auto lg:max-w-6xl grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">

        {/* Left Side - Branding & Features */}
        <div className="hidden lg:block text-white space-y-8 px-4">
          {/* Logo & Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 lg:gap-3 bg-white/10 backdrop-blur-sm px-4 lg:px-6 py-2 lg:py-3 rounded-full border border-white/20">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="text-lg lg:text-2xl font-bold">DAVV ERP SYSTEM</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Welcome to the<br />
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 text-transparent bg-clip-text">
                Future of Education
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-purple-200">
              Comprehensive ERP solution trusted by leading institutions
            </p>
          </div>

          {/* Animated Features */}
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-500 ${activeFeature === idx
                  ? 'bg-white/20 backdrop-blur-md border border-white/30 scale-105'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10'
                  }`}
              >
                <div className={`p-2 rounded-lg ${activeFeature === idx ? 'bg-gradient-to-br from-purple-400 to-pink-500' : 'bg-white/10'
                  }`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-purple-200">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">500+</div>
              <div className="text-sm text-purple-300">Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-blue-300 text-transparent bg-clip-text">99.9%</div>
              <div className="text-sm text-purple-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">24/7</div>
              <div className="text-sm text-purple-300">Support</div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full h-full lg:h-auto flex flex-col justify-center lg:max-w-none bg-white/95 backdrop-blur-xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border-0 lg:border border-white/20">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-6 flex justify-center pt-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full border border-purple-200">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="text-sm font-bold text-purple-900">DAVV ERP</span>
            </div>
          </div>

          <div className="max-w-md mx-auto w-full">
            {/* Form Header */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">
                {title}
              </h2>
              <p className="text-sm lg:text-base text-gray-600">{subtitle}</p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-xs lg:text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-3 lg:px-4 py-3 lg:py-3.5 text-sm lg:text-base bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  disabled={loading}
                />
                {email && !isEmailValid && (
                  <p className="mt-1.5 text-[11px] lg:text-xs font-medium text-red-500 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Please enter a valid email (e.g., user@example.com)
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs lg:text-sm font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full px-3 lg:px-4 py-3 lg:py-3.5 text-sm lg:text-base bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all pr-10 lg:pr-12"
                    placeholder="Enter your password"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff size={18} className="lg:w-5 lg:h-5" /> : <Eye size={18} className="lg:w-5 lg:h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-xs lg:text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Remember me</span>
                </label>
                <a href="#" className="font-semibold text-purple-600 hover:text-purple-700 transition-colors">
                  Forgot Password?
                </a>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading || !isFormValid}
                className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white text-sm lg:text-base font-semibold py-3 lg:py-4 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing in...
                  </span>
                ) : (
                  'Sign in to Dashboard'
                )}
              </button>

              {/* Divider */}
              {/* <div className="relative my-4 lg:my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs lg:text-sm">
                  <span className="px-3 lg:px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div> */}

              {/* SSO Button */}
              {/* <button
                type="button"
                className="w-full flex items-center justify-center gap-2 lg:gap-3 border-2 border-gray-200 py-3 lg:py-3.5 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-sm lg:text-base font-medium text-gray-700"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="lg:w-5 lg:h-5">
                  <path d="M19.8 10.2273C19.8 9.51819 19.7364 8.83637 19.6182 8.18182H10.2V12.05H15.6109C15.3727 13.3 14.6545 14.3591 13.5864 15.0682V17.5773H16.8273C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4" />
                  <path d="M10.2 20C12.9 20 15.1709 19.1045 16.8273 17.5773L13.5864 15.0682C12.6909 15.6682 11.5545 16.0227 10.2 16.0227C7.59545 16.0227 5.38182 14.2636 4.58636 11.9H1.22727V14.4909C2.87273 17.7591 6.27273 20 10.2 20Z" fill="#34A853" />
                  <path d="M4.58636 11.9C4.38636 11.3 4.27273 10.6591 4.27273 10C4.27273 9.34091 4.38636 8.7 4.58636 8.1V5.50909H1.22727C0.445455 7.05909 0 8.48182 0 10C0 11.5182 0.445455 12.9409 1.22727 14.4909L4.58636 11.9Z" fill="#FBBC04" />
                  <path d="M10.2 3.97727C11.6773 3.97727 13.0091 4.48182 14.0682 5.47273L16.9364 2.60455C15.1709 0.940909 12.9 0 10.2 0C6.27273 0 2.87273 2.24091 1.22727 5.50909L4.58636 8.1C5.38182 5.73636 7.59545 3.97727 10.2 3.97727Z" fill="#EA4335" />
                </svg>
                Sign in with Google
              </button> */}

              {/* Footer */}
              <p className="text-center text-xs lg:text-sm text-gray-600 mt-4 lg:mt-6">
                Need access?{' '}
                <a href="#" className="font-semibold text-purple-600 hover:text-purple-700 transition-colors">
                  Contact Administrator
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
