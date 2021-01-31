import React from "react";

// importing styles
import "./Skeleton.css";

const Skeleton = ({ width = 300, height = 200, className }) => {
    return (
        <div
            style={{ width, height, margin: 20, borderRadius: 35 }}
            className={`skeleton__wrapper ${className}`}
        ></div>
    );
};

export default Skeleton;
