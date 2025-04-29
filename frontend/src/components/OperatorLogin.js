import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OperatorLogin = () => {
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        
        e.preventDefault();
        if (loginId === "operator" && password === "password") {
            navigate("/operatordashboard");
        } else {
            alert("Invalid Login ID or Password");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
                <h2>Operator Login</h2>
                <label>
                    Login ID:
                    <input
                        type="text"
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" style={{ marginTop: "20px" }}>Login</button>
            </form>
        </div>
    );
};

export default OperatorLogin;