import React from "react";

const CloseSVG = ({ fillColor = "#000000", className = "", width = 20, height = 20, ...props }) => {
    return (
        <svg 
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            {...props}
        >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.58598 L 4.7070312 3.32929688 z" />
        </svg>
    );
};

export { CloseSVG };
