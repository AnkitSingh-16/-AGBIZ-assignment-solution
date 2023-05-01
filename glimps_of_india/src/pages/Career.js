import {  Container } from "@mui/material";
import React from "react";
import "../style/careerpagestyle.css"
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ComputerIcon from "@mui/icons-material/Computer";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import EngineeringIcon from "@mui/icons-material/Engineering";

const Career = () => {
  return (
    <div className="career-page">
      <Container className="div-career">
        <div className="heading-box">
          <div className="vertical"></div>
          <div className="head-name">
            <h1>Career Scopes for Students</h1>
          </div>
        </div>
        <div className="career-content">
          <p >
            India offers a diverse range of career opportunities across various
            industries, including information technology, healthcare, finance,
            engineering, education, and many more. The country has a rapidly
            growing economy, and with a population of over 1.3 billion people,
            there is a vast and ever-increasing demand for skilled
            professionals.
          </p>
          <p >
            One of the most promising industries in India is information
            technology. The country has become a global hub for technology
            companies, and there is a significant demand for software
            developers, data scientists, and other IT professionals. Healthcare
            is also an expanding sector, with the rise of medical tourism and
            the increasing need for healthcare services.
          </p>
          <p >
            India also offers a wealth of opportunities in the fields of finance
            and engineering, with a growing number of multinational companies
            setting up operations in the country. The education sector is
            another area of growth, with a high demand for qualified teachers,
            professors, and education administrators.
          </p>
          <p >
            India also offers a wealth of opportunities in the fields of finance
            and engineering, with a growing number of multinational companies
            setting up operations in the country. The education sector is
            another area of growth, with a high demand for qualified teachers,
            professors, and education administrators.
          </p>
        </div>
        <div className="career-grid-container">
          <div className="career-grid-item">
            <div className="grid-item-icon">
              <ManageAccountsIcon />
            </div>
            <div className="item-2">
              <h3 className="grid-item-title">Management</h3>
              <p className="grid-title-dcr">
                Supervisor/ Front-line manager / Senior manager / Board of
                Director / CEO / President of the organisation.
              </p>
            </div>
          </div>
          <div className="career-grid-item">
            <div className="grid-item-icon">
              <ComputerIcon />
            </div>
            <div className="item-2">
              <h3 className="grid-item-title">Engineering</h3>
              <p className="grid-title-dcr">
                Students can start working to build a better future and can
                apply for ME/M.Tech/M.S.
              </p>
            </div>
          </div>
          <div className="career-grid-item">
            <div className="grid-item-icon">
              <EngineeringIcon />
            </div>
            <div className="item-2">
              <h3 className="grid-item-title">Computer Science</h3>
              <p className="grid-title-dcr">
                They have scope in Software, Website, Mobile and App
                developement.
              </p>
            </div>
          </div>
          <div className="career-grid-item">
            <div className="grid-item-icon">
              <MedicalServicesIcon />
            </div>
            <div className="item-2">
              <h3 className="grid-item-title">Medical</h3>
              <p className="grid-title-dcr">
                Medical field, Surgical field, Dental field and many more fields
                have a bright future.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Career;
