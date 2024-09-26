import React from 'react'
import { Container } from "@mui/material";
import "../style/coursepagestyle.css";
import courselogo1 from "../images/courselogo1.png"

import Courselist1 from '../component/miscleneous/Courselist1';
import Courselist2 from "../component/miscleneous/Courselist2";
import Courselist3 from "../component/miscleneous/Courselist3";
import Courselist4 from "../component/miscleneous/Courselist4";

const Courses = () => {
  return (
    <div className="course-page">
      <div className="heading-box">
        <h1 style={{ marginTop: "20px", marginBottom: "30px" }}>
          Top Courses to Study in India{" "}
        </h1>
      </div>
      <Container>
        <div style={{ marginBottom: "30px" }}>
          <p>
            Choosing the Right Course for the Career is the most crucial
            decision to make and can be troublesome if not guided properly.
            India has a wide range of courses that students can pursue at the
            undergraduate and postgraduate levels.
          </p>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <p>
            These are just a few examples of the top courses to study in India.
            Students should consider their interests, strengths, and career
            goals before selecting a course of study. It's important to do
            thorough research and choose a course that aligns with your
            interests and career aspirations.
          </p>
        </div>
      </Container>
      <div className="course-grid-container">
        <div className="course-grid-item">
          <Container style={{ justifyContent: "center" }}>
            <img src={courselogo1} className="logo" />
          </Container>
        </div>
        <div className="course-grid-item2">
          <div>
            <h2 className="list-heading">Computer Course</h2>
            <hr />
          </div>
          <div>
            <Courselist1 />
          </div>
          <div>
            <h2 className="list-heading">Medical Course</h2>
            <hr />
          </div>
          <div>
            <Courselist2 />
          </div>
        </div>
        <div className="course-grid-item2">
          <div>
            <h2 className="list-heading">Management course</h2>
            <hr />
          </div>
          <div>
            <Courselist3 />
          </div>
          <div>
            <h2 className="list-heading">Engineering Course</h2>
            <hr />
          </div>
          <div>
            <Courselist4 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses