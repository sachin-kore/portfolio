import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import sachin from "../../assets/images/sachin-bio-pic.jpeg"
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={sachin}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Having more than 2.5 years of work experience in web development with good experience in Web
                applications Designing and Programming using Javascript and NodeJs.
                Building Web Applications using HTML, CSS, Javascript, React, NodeJs, Mongodb,MySQL and  PostgreSQL.
                Developed Responsive Components, Validations, Charts, Graphs, Forms, UI Design.
                Having basic knowledge of Cloud like Amazon Web Services.
                Basic Knowledge of Data Structures like Linked List, Stacks, Queues, Trees

              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
