import React from "react";
import bugymaniaImage from "./bugymania.png"; // Import the image

const Buggymania = ({ text }) => {
  return (
    <div style={{ display: "flex", marginTop: "50px", marginLeft: "50px" }}>
      <div
        style={{
          flex: "0.7",
          padding: "30px 50px 30px 20px", // Adjusted padding to create space below and to the right
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "48.7px",
              color: "#006fee",
              marginBottom: "20px", // Moved the title a bit down
            }}
          >
            MTC PRESENTS BUGYMANIA 2.0
          </h2>

          <p
            style={{
              fontSize: "20px",
              fontFamily: "Inter, sans-serif",
              color: "white",
              padding: "10px",
              marginTop: "-10px", // Shifted the text up slightly to align
            }}
          >
            <b>{text}</b>
          </p>
          <button
            style={{
              background: "#006fee",
              fontFamily: "Inter, sans-serif",
              color: "white",
              borderRadius: "25px",
              padding: "07px 20px",
              border: "none",
              marginTop: "-10px", // Shifted the button up slightly to align
            }}
          >
            <b style={{ fontSize: "21.2px" }}>Read More</b>
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
          width: "100px",
          height: "200px",
          marginTop: "200px"
        }}
      >
        <img
          src={bugymaniaImage} // Set the image source
          alt="Bugymania" // Add alt text for accessibility
          style={{
            height: "500px",
            width: "500px",
            border: "2px solid #006fee",
            borderRadius: "5px",
            padding: "-10px",
          }}
        />
      </div>
    </div>
  );
};

export default Buggymania;
