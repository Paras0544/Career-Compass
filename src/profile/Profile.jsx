import React, { useContext } from 'react';
import { AuthContext } from '../firebase/AuthProviderr';
import { User, Mail, LogOut, Gift, Calendar } from 'lucide-react';

const Profile = () => {
  const { user, signOutUser } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
        <p className="text-gray-600">Please log in to view your profile</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="w-full max-w-md overflow-hidden transition duration-300 transform bg-white shadow-2xl rounded-3xl hover:scale-105">
        {/* Profile Header with Gradient */}
        <div className="relative p-8 text-center text-white bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="absolute top-4 right-4">
            <button 
              onClick={signOutUser}
              className="p-2 transition rounded-full bg-white/20 hover:bg-white/30"
            >
              <LogOut size={20} className="text-white" />
            </button>
          </div>
          <img 
            src={user.photoURL || '/api/placeholder/200/200'} 
            alt="Profile" 
            className="object-cover mx-auto mb-4 border-4 border-white rounded-full shadow-lg w-36 h-36"
          />
          <h2 className="text-3xl font-bold tracking-wide">{user.displayName || 'User'}</h2>
          <p className="mt-2 text-white/80">Web Developer</p>
        </div>

        {/* Profile Details with Colorful Icons */}
        <div className="p-6 space-y-5">
          <div className="flex items-center p-4 space-x-4 bg-purple-50 rounded-xl">
            <User className="w-6 h-6 text-purple-500" />
            <div>
              <p className="text-gray-500">Full Name</p>
              <p className="font-semibold text-purple-800">{user.displayName || 'Not provided'}</p>
            </div>
          </div>

          <div className="flex items-center p-4 space-x-4 bg-pink-50 rounded-xl">
            <Mail className="w-6 h-6 text-pink-500" />
            <div>
              <p className="text-gray-500">Email Address</p>
              <p className="font-semibold text-pink-800">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center p-4 space-x-4 bg-indigo-50 rounded-xl">
            <Calendar className="w-6 h-6 text-indigo-500" />
            <div>
              <p className="text-gray-500">Account Created</p>
              <p className="font-semibold text-indigo-800">
                {new Date(user.metadata?.creationTime).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;