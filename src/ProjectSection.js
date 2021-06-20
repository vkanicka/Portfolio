import React from 'react'
// import projectInfo from "./ProjectInfo"
import Project from "./Project"
import exportProjects from "./ProjectInfo"

export default function ProjectSection (props) {

return (
  <div className='ProjectSection'>
      {exportProjects.map((project, p) => {
        return(
          <div key={`project-${p}-div`}>
              <Project
                  project={project}
              />
          </div>
        )

      })}
  </div>

)
}
