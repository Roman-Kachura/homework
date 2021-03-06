import React from "react";

export const Eclipse = () => {
    return <svg
        style={{margin: '0', background: 'rgba(241, 242, 243,0)', display: 'block', shapeRendering: 'auto'}}
        width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#5f2a62" stroke="none">
            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite"
                              keyTimes="0;1" values="0 50 51;360 50 51"/>
        </path>
    </svg>
}