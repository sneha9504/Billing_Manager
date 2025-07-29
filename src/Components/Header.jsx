// Components/Head.jsx

import React, { useState, useRef, useEffect } from "react";
import Clock from "./Clock";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            dispatch(logOut());
            setDropdownOpen(false);
            navigate("/");
        }
    };

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const username = authState?.currentUser?.username || "User";

    return (
        <>
            <div className="flex items-center gap-2">
                <img
                    src="/public/logo.svg"
                    alt="Billora Logo"
                    className="w-30 hover:w-24 transition-all duration-300"
                />
            </div>

            <div className="flex items-center gap-4 ml-auto relative" ref={dropdownRef}>
                <Clock />
                <button
                    onClick={toggleDropdown}
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                >
                    Welcome, {username}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1 text-gray-600 group-hover:text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {dropdownOpen && (
                    <div className="absolute top-12 right-0 bg-white border shadow-lg rounded-lg py-2 w-48 z-50">
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Head;
