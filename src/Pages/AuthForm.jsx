import React, { useState,useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { signUp, logIn, clearError, logOut } from "../redux/auth/authSlice";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";


const AuthForm = () => {
    const dispatch = useDispatch();
   const authState = useSelector((state) => state.auth);
    const [mode, setMode] = useState("login");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        dispatch(clearError());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (mode === "signup") {
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            dispatch(
                signUp({
                    email: formData.email,
                    password: formData.password,
                    username: formData.username,
                })
            );
        } else {
            dispatch(logIn({ email: formData.email, password: formData.password ,username: formData.username}));
        }
    };

    const handleToggle = () => {
        setMode((prev) => (prev === "login" ? "signup" : "login"));
        dispatch(clearError());
    };

    const handleLogout = () => {
        dispatch(logOut());
        setFormData({
            email: "",
            password: "",
            confirmPassword: "",
            username: "",
        });
    };
    const navigate = useNavigate();

    useEffect(() => {
        if (authState.currentUser) {
            navigate("/home");
        }
    }, [authState.currentUser, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
                {authState.currentUser ? (
                    <div className="text-center space-y-4">
                        <User className="mx-auto text-blue-600" size={32} />
                        <h2 className="text-2xl font-bold">
                            Welcome, {authState.currentUser.username || authState.currentUser.email}
                        </h2>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-center">
                            {mode === "login" ? "Login" : "Sign Up"}
                        </h2>

                        {authState.error && (
                            <p className="text-sm text-red-500 text-center">{authState.error}</p>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-xl"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-xl"
                            />
                            {mode === "signup" && (
                                <>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-xl"
                                    />
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        required
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-xl"
                                    />
                                </>
                            )}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
                            >
                                {mode === "login" ? "Log In" : "Sign Up"}
                            </button>
                        </form>

                        <div className="text-center">
                            <button
                                onClick={handleToggle}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                {mode === "login"
                                    ? "Don't have an account? Sign Up"
                                    : "Already have an account? Log In"}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthForm; 
