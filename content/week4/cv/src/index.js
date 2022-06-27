import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Education from "./Education";
import reportWebVitals from "./reportWebVitals";
import pic from "./Zayn.jpg";
import Skill from "./skill";

ReactDOM.render(
  <React.StrictMode>
    <main>
      <h1 className="heading">Zayn Shah - Curriculum Vitae</h1>
    </main>
    <div className="f">
      <div className="fr">
        <img className="zayn" src={pic} />
        <div className="middle">
          <div className="text">Zayn Shah</div>
        </div>
      </div>
      <div className="fl">
        <p>
          <strong>Email:</strong>
          <a href="zaynshah@bath.edu">zaynshah@bath.edu</a>
        </p>
        <p>
          <strong>Telephone:</strong> 07368515073
        </p>
        <p>
          <strong>Address:</strong> 61 Rosebank Avenue, Wembley, HA0 2TL
        </p>
        <p>
          I am a recently graduated Mechanical Engineer, who is self-motivated.
          I have adapted to new situations, working effectively as a team and
          independently. I have gained numerical an analytical skills as well as
          developing an extensive range of IT skills.
        </p>
      </div>
    </div>
    <hr />
    <Education />
    <hr />
    <section>
      <h2>Relevant Experience</h2>
      <strong>2019-2020: </strong> Engineering System Simulation <br />
      <strong>Topic:</strong>
      To develop a simulation tool to solve 1D FEM static diffusion-reaction and
      then extend the code for transient cases (71%) <br />
      <ul>
        <li>
          Created a comprehensive complex automated FEM tool with the user only
          needing to input their desired parameters
        </li>
        <li>
          Performed core programming skills; includes creating and integrating
          numerous functions, logic, statements (for/while loops), debugging and
          overall good practice by validating code/functions against standard
          test cases
        </li>
        <li>
          Executed the finite element solver for both static/transient problems;
          High-quality plots and analysis compiled in a final report
        </li>
      </ul>
      <strong>2019:</strong> Paid Research internship, Sponsored by Vestas and
      Swansea University <br />
      <strong>Topic: </strong>Hot-wire testing and investigating the effects of
      Vortex Generators (VGs)
      <ul>
        <li>
          Investigated VGs impact on lift and drag; independent planning and
          experimental testing for various conditions were carried out; data
          analysis completed using Excel and MATLAB with results communicated to
          supervisor daily
        </li>
        <li>
          Carried out hot wire and flow-visualisation experiments using wool
          tufts for flow validation purposes
        </li>
      </ul>
      <strong>Design Project Lead</strong>
      <br />
      <strong>Project:</strong> Design, Make & Race A Remote-Controlled Car
      (74%)
      <br />
      <ul>
        <li>
          Designed and made a remote-controlled car by utilising additive
          technology while working efficiently within a group
        </li>
        <li>
          Led in CAD (3D-designing, FEA and renderings), technical drawings,
          formatting, business report and manufacturing
        </li>
        <li>
          Advised group members on how to improve and took charge of
          responsibilities; the second group report increased by 4%
        </li>
      </ul>
    </section>
    <hr />
    <Skill />
    <hr />

    <section>
      <h2>Achievements</h2>
      <ul>
        <li>
          Associate Member of the Institution of Mechanical Engineers (AMIMechE)
          since 2018
        </li>
        <li>
          Outstanding Academic Achievement Award in Mechanical Engineering Year
          2 at Swansea University
        </li>
      </ul>
    </section>
    <hr />
    <section className="hobbies">
      <h1>Hobbies and Interests</h1>
      <a href=""> See my Hobbies and interest Page</a>
    </section>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
