import React from "react";
import "../style/comparisonpagestyle.css";
import Details from "../component/miscleneous/Details";
import StudyAbroad from "../component/miscleneous/StudyAbroad";
import StudyIndia from "../component/miscleneous/Studyindia";

export const AbroadVsIndia = () => {
  return (
    <div className="compare-page">
      <div className="cmp-heading">
        <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
          Study India vs Study Abroad
        </h1>
      </div>
      <div className="cmp-container">
        <div
          className="cmp-box"
          style={{
            backgroundColor: "bisque",
            marginLeft: "40px",
            width: "20%",
          }}
        >
          <div className="cmp-box1">
            <Details />
          </div>
        </div>
        <div
          className="cmp-box"
          style={{ backgroundColor: "white", marginLeft: "-20px" }}
        >
          <div className="cmp-box1">
            <StudyIndia />
          </div>
        </div>
        <div
          className="cmp-box"
          style={{
            backgroundColor: "white",
            marginLeft: "-20px",
            marginRight: "40px",
          }}
        >
          <div className="cmp-box1">
            <StudyAbroad />
          </div>
        </div>
      </div>
    </div>
  );
};
