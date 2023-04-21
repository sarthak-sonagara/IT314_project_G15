import React, { useState } from "react";
import "../assets/CSS/style.css";
import { Link } from "react-router-dom";

const Choice = () => {

    return (
        <>
            <div style={{
                padding: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div className="choice-screen-ctn">
                        <button
                            type="submit"
                            className="choice-btn"
                            href="/Org_Login"
                        >
                            <img src="../../images/org.png" border="0" height="160px" />
                            <br />
                            Organization
                        </button>
                    <button
                        type="submit"
                        className="choice-btn"
                    >
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" border="0" height="150px" style={{ marginBottom: "10px" }} />
                        <br />
                        User
                    </button>
                </div>
            </div>
        </>
    );
};

export default Choice;
