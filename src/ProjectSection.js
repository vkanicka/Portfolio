import React from 'react'
// import projectInfo from "./ProjectInfo"
import Project from "./Project"
import exportProjects from "./ProjectInfo"

export default function ProjectSection (props) {

return (
  <div className='ProjectSection ui grid two columns'>
      {exportProjects.map((project, p) => {
        return(
          <div className='project' key={`project-${p}-div`}>
              <Project
                  project={project}
              />
          </div>
        )

      })}
  </div>

)
}
