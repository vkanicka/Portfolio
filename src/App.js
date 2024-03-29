import 'semantic-ui-css/semantic.min.css'
import './App.css';
import React from "react";
import ProjectSection from "./ProjectSection"
import resume from "./Resume_Victoria_Kanicka.pdf"
// import myHeadshot from "./VictoriaKanicka291946.jpg"
import myHeadshot from "./799portfolio.jpg"
// import myHeadshot from "./980portfolio.jpg"
// import myHeadshot from "./979portfolio.jpg"

export default function App() {

  return (
    <div className="appDiv">



        <div className="headerDiv">

        <div className="ui vertical inverted labeled icon menu floated right">
            <a className="item" href={resume} download>
              <i className="file alternate outline icon"></i>
              Resume
            </a>
            <a className="item" href="mailto:vkanicka@gmail.com">
              <i className="envelope outline icon"></i>
              Email
            </a>


            <a className="item" target='none' href="https://www.linkedin.com/in/victoriakanicka/">
              <i className="linkedin icon"></i>
              LinkedIn
            </a>
            <a className="item" target='none' href="https://github.com/vkanicka">
              <i className="github icon"></i>
              GitHub
            </a>
        </div>

            <div id="me">
              <img id="headshot" alt="headshot" src={myHeadshot}/>
              <div id="meText">
                <h1>Victoria Kanicka</h1>
                <h2>Full Stack Software Engineer</h2>
              </div>
            </div>

            <ul className="headerDetails">
                <li><span className='detailKey'>Top Skills</span>: Python, Javascript, SQL, React</li>

                <li><span className='detailKey'>Values</span>: Ingenuity<span className="textDivider"> | </span>Autodidacticism</li>

                <li><span className='detailKey'>Brand</span>: Clean<span className="textDivider"> | </span>Easy<span className="textDivider"> | </span>Productive<span className="textDivider"> | </span>Meaningful<span className="textDivider"> | </span>Purposeful<span className="textDivider"> | </span>Satisifying</li>

                <li><span className='detailKey'>Background</span>: Analytics, Marketing, Art, Data Visualization and Storytelling</li>

                <li><span className='detailKey'>Artwork</span>: <a href="https://victoriakanicka.com">victoriakanicka.com</a> </li>

                {/* <li><img id='cw' src='https://www.codewars.com/users/vkanicka/badges/large'/></li> */}
            </ul>
        </div>



        <hr/>

        <div>
          <ProjectSection/>
        </div>

    </div>
  );
}
