import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSeedling, FaGoogle, FaUser } from 'react-icons/fa';
import { loginWithGoogle } from '../firebase';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState('options');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    region: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');

    const { user, error } = await loginWithGoogle();

    if (error) {
      setError(error);
    } else {
      setStep('form');
    }

    setLoading(false);
  };

  // GUEST LOGIN
  const handleGuestLogin = () => {
    setStep('form');
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // FINAL FIXED SUBMIT
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.region) {
      setError('Please fill all fields');
      return;
    }

    const userData = {
      ...formData,
      type: 'guest'
    };

    // ✅ SAVE
    localStorage.setItem('user', JSON.stringify(userData));

    // ✅ TRIGGER UPDATE (IMPORTANT)
    window.dispatchEvent(new Event("storage"));

    // ✅ REDIRECT
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="text-center mb-3">
          <div className="logo-container">
            <FaSeedling className="logo-icon" />
          </div>
          <h1 className="logo-text">Agrovision</h1>
        </div>

        {step === 'options' && (
          <>
            <h2 className="auth-title">Welcome</h2>
            <p className="auth-subtitle">Choose how you want to continue</p>

            {error && <div className="error-message">{error}</div>}

            <button
              className="auth-btn"
              onClick={handleGoogleLogin}
              disabled={loading}
              style={{ marginBottom: '15px' }}
            >
              <FaGoogle style={{ marginRight: '10px' }} />
              Continue with Google
            </button>

            <button
              className="auth-btn"
              onClick={handleGuestLogin}
            >
              <FaUser style={{ marginRight: '10px' }} />
              Continue as Guest
            </button>
          </>
        )}

        {step === 'form' && (
          <>
            <h2 className="auth-title">Complete Your Profile</h2>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="region"
                  className="form-control"
                  placeholder="Region"
                  value={formData.region}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="auth-btn">
                Continue
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};

export default Login;