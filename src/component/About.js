import React from "react";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "800px",
        overflowY: "scroll",
      }}
    >
      <div style={{ color: "white" }}>
        <h2
          style={{
            fontSize: "56px",
            fontFamily: "Inter, sans-serif",
            textAlign: "center",
          }}
        >
          About Event
          <hr
            style={{
              width: "10%",
              margin: "auto",
              borderTop: "2px solid #006fee",
            }}
          />
        </h2>

        <p
          style={{
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
            padding: "0 60px",
          }}
        >
          <b>
            <span style={{ color: "#006fee" }}>Bugymania 2.0 Round 1</span> took
            place online on March 1st, featuring multiple choice questions
            (MCQs) with a single correct answer. Participants could select from
            four programming languages: C, C++, Java, and Python, with
            approximately 30 MCQs for each language. Backtracking was not
            permitted. The online portal was accessible from 11:00 am to 11:30
            am, with 31 out of 70 participants qualifying for the next round.
          </b>
        </p>
        <p
          style={{
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
            padding: "0 60px",
          }}
        >
          <b>
            <span style={{ color: "#006fee" }}>Bugymania 2.0 Round 2</span> took
            place offline on March 4th at UPES, Bidholi campus, in 10th Block,
            Room no. 10105 at 3:30 pm. Qualifiers were organized into groups of
            three, each tasked with cracking four unique codes. Two groups
            successfully advanced to the final round.
          </b>
        </p>
        <p
          style={{
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
            padding: "0 60px",
          }}
        >
          <b>
            <span style={{ color: "#006fee" }}>In the final round</span>, the 6
            finalists were tasked with creating codes to solve a given
            situation. Two champions emerged from this group: Anvesh Kumar Raj
            secured the top position, while Arkaprava Trip claimed the second
            spot.
          </b>
        </p>
      </div>
    </div>
  );
};

export default About;
