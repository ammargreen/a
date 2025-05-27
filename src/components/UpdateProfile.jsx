import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function UpdateProfile() {
  const [displayName, setDisplayName] = useState('');
  const { updateUserProfile, currentUser } = useAuth();
  const navigate = useNavigate();

  AOS.init({
    duration: 1000,
    once: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(displayName);
      toast.success('Profile updated successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-50"
      data-aos="fade-up"
    >
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Update Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="displayName" className="text-gray-700">Display Name</label>
            <input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder={currentUser?.displayName || ''}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Update Profile
          </button>
        </form>
      </div>
    </motion.div>
  );
}