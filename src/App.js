import 'semantic-ui-css/semantic.min.css'
import './App.css';
import React from "react";
import resume from "./Resume_Victoria_Kanicka.pdf"


export default function App() {
  // const [lifeSim, setLifeSim] = useState(false)

  const addButtons = () => {
    console.log('hover time!')
  }
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
            <a className="item" href="https://www.linkedin.com/in/victoriakanicka/">
              <i className="linkedin icon"></i>
              LinkedIn
            </a>
            <a className="item" href="https://github.com/vkanicka">
              <i className="github icon"></i>
              GitHub
            </a>
        </div>


            <h1>Victoria Kanicka</h1>
            <h2>Full Stack Software Engineer</h2>
            <ul className="headerDetails">
                <li><span className='detailKey'>Top Skills</span>: Python, Javascript, SQL, React</li>

                <li><span className='detailKey'>Values</span>: Ingenuity<span className="textDivider"> | </span>Auto-didacticism</li>

                <li><span className='detailKey'>Brand</span>: Clean<span className="textDivider"> | </span>Easy<span className="textDivider"> | </span>Productive<span className="textDivider"> | </span>Meaningful<span className="textDivider"> | </span>Purposeful<span className="textDivider"> | </span>Satisifying</li>

                <li><span className='detailKey'>Background</span>: Analytics, Marketing, Art, Data Visualization and Storytelling</li>

                <li><span className='detailKey'>Artwork</span>: <a href="https://victoriakanicka.com">victoriakanicka.com</a> </li>
            </ul>
        </div>



        <hr/>

        <div className='projects centered ui cards'>
            <img onMouseOver={()=>addButtons()} className='projectImage' src='https://i.imgur.com/CdID1LM.png' width='35%' alt='life sim game screenshot'></img>
            <img className='projectImage' src='https://i.imgur.com/BRGpK1u.png' width='45%' alt='my Mental Health Trainer app screenshot'/>
            <img className='projectImage' src='https://i.imgur.com/YE4mp9t.png' width='30%' alt='Pixel Progress app screenshot'/>
            <img className='projectImage' src='https://i.imgur.com/d8HTMvU.png' width='50%' alt='Database mapping for my Mental Health Trainer app'/>
        </div>




    </div>
  );
}
