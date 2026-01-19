




import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../firebase/AuthProviderr';
import { Menu, X, Home, List, User, LogOut, Settings, Contact, PieChart } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = async () => {
        try {
            await signOutUser();
            setIsMobileMenuOpen(false);
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/job', label: 'Job List', icon: List },
        { path: '/contact', label: 'Contact Us' , icon:Contact },
        { path: '*', label: 'Statistics' , icon:PieChart },
        { path: '/profile', label: 'Profile', icon: User }
    ];

    return (
        <nav className="sticky top-0 z-50 py-3 shadow-md bg-gradient-to-r from-emerald-50 to-teal-50">
            <div className="container flex items-center justify-between px-4 mx-auto">
                {/* Brand Logo */}
                <Link 
                    to="/" 
                    className="flex items-center space-x-2 text-2xl font-bold text-emerald-800"
                ><img className="h-[40px] w-[40px]" src="https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/a9/icon-1.jpg?raw=true" />
                    Career Compass
                </Link>

                {/* Mobile Menu Toggle */}
                <button 
                    className="lg:hidden text-emerald-800"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 bg-white lg:hidden">
                        <div className="flex flex-col h-full">
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-4 border-b">
                                <Link 
                                    to="/" 
                                    className="text-2xl font-bold text-emerald-800"
                                >
                                    Career Compass
                                </Link>
                                <button onClick={toggleMobileMenu}>
                                    <X size={24} className="text-emerald-800" />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex-grow p-4 space-y-4">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        onClick={toggleMobileMenu}
                                        className={({ isActive }) => `
                                            flex items-center space-x-3 p-3 rounded-lg 
                                            ${isActive ? 'bg-emerald-100 text-emerald-700' : 'hover:bg-emerald-50'}
                                        `}
                                    >
                                        <link.icon size={20} />
                                        <span>{link.label}</span>
                                    </NavLink>
                                ))}
                            </div>

                            {/* User Section */}
                            <div className="p-4 border-t">
                                {user ? (
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <img 
                                                src={user.photoURL || 'https://via.placeholder.com/150'} 
                                                alt="User Avatar" 
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div>
                                                <p className="font-semibold">{user.displayName || 'User'}</p>
                                                <p className="text-sm text-gray-500">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Link
                                                to="/profile"
                                                onClick={toggleMobileMenu}
                                                className="flex items-center p-3 space-x-2 rounded-lg hover:bg-emerald-50"
                                            >
                                                <User size={18} className="text-emerald-600" />
                                                <span>Profile</span>
                                            </Link>
                                            <button 
                                                onClick={handleSignOut}
                                                className="flex items-center justify-center w-full p-3 space-x-2 text-white bg-red-500 rounded-lg"
                                            >
                                                <LogOut size={20} />
                                                <span>Sign Out</span>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <Link 
                                            to="/register" 
                                            onClick={toggleMobileMenu}
                                            className="block w-full p-3 text-center text-white bg-teal-500 rounded-lg"
                                        >
                                            Register
                                        </Link>
                                        <Link 
                                            to="/login" 
                                            onClick={toggleMobileMenu}
                                            className="block w-full p-3 text-center text-teal-500 border border-teal-500 rounded-lg"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Desktop Navigation */}
                <div className="items-center hidden space-x-8 lg:flex">
                    <div className="flex space-x-6 font-semibold text-slate-700">
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.path}
                                to={link.path} 
                                className={({ isActive }) => `
                                    flex items-center space-x-2 
                                    hover:text-emerald-600 
                                    ${isActive ? 'text-emerald-600' : ''}
                                `}
                            >
                                <link.icon size={20} />
                                <span>{link.label}</span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop User Section */}
                    {user ? (
                        <div className="relative group">
                            <img 
                                src={user.photoURL || 'https://via.placeholder.com/150'} 
                                alt="User Avatar" 
                                className="w-10 h-10 transition border-2 rounded-full border-emerald-500 hover:scale-110"
                            />
                            <div className="absolute right-0 invisible w-64 p-4 mt-2 transition-all duration-300 bg-white shadow-lg opacity-0 top-full rounded-xl group-hover:opacity-100 group-hover:visible">
                                <div className="flex items-center mb-4 space-x-3">
                                    <img 
                                        src={user.photoURL || 'https://via.placeholder.com/150'} 
                                        alt="User Avatar" 
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold">{user.displayName || 'User'}</p>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Link 
                                        to="/profile" 
                                        className="flex items-center p-2 space-x-2 transition rounded-lg hover:bg-emerald-50"
                                    >
                                        <User size={18} className="text-emerald-600" />
                                        <span>Profile</span>
                                    </Link>
                                    <button 
                                        onClick={signOutUser}
                                        className="flex items-center w-full p-2 space-x-2 text-red-600 transition rounded-lg hover:bg-red-50"
                                    >
                                        <LogOut size={18} />
                                        <span>Sign Out</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex space-x-4">
                            <Link 
                                to="/register" 
                                className="px-4 py-2 text-white transition bg-teal-500 rounded-lg hover:bg-teal-600"
                            >
                                Register
                            </Link>
                            <Link 
                                to="/login" 
                                className="px-4 py-2 text-teal-500 transition border border-teal-500 rounded-lg hover:bg-teal-50"
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
