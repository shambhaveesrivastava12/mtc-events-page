import React from "react";

const Buggymania = ({ text }) => {
  return (
    <div style={{ display: "flex" }}>
      {/* Left side containing text */}
      <div
        style={{
          flex: "1",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {/* Change font family, color, and size of the heading */}
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "48.7px",
              color: "#006fee",
            }}
          >
            MTC PRESENTS BUGYMANIA 2.0
          </h2>
          {/* Display text content */}
          <p style={{ fontSize: "14px", fontFamily: "Inter,sans-serif" }}>
            {text}
          </p>
          {/* Read more button with font */}
          <button
            style={{
              background: "#006fee",
              fontFamily: "Inter, sans-serif",
              color: "white",
              borderRadius: "15px",
              padding: "10px 20px",
              border: "none",
            }}
          >
            Read More
          </button>
        </div>
      </div>

      {/* Right side containing image placeholder */}
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "200px",
            width: "200px",
            border: "2px solid #006fee",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          {/* Placeholder for image or any other content */}
          {/* You can replace this box with your image */}
        </div>
      </div>
    </div>
  );
};

export default Buggymania;
