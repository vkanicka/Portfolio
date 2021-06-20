import comments1 from "./reviews/proj1"
import comments3 from "./reviews/proj3"
import comments4 from "./reviews/proj4"
import comments4DB from "./reviews/proj4DB"

class ProjectInfo {
  constructor() {
    this.projects = []
  }
  addProject(project) {
    this.projects.push(project)
  }
}
const projectInfo = new ProjectInfo()
class Project {
  constructor(title, image, url, github, comments) {
    this.title = title
    this.image = image
    this.url = url
    this.github = github
    this.comments = comments
  }
}
const proj1 = new Project (
  'Life Simulation Game',
  'https://i.imgur.com/CdID1LM.png',
  'https://vkanicka.github.io/LifeSimulation/files02/index.html',
  'https://github.com/vkanicka/LifeSimulation',
  comments1
)
const proj4 = new Project (
  'my Mental Health Trainer',
  'https://i.imgur.com/BRGpK1u.png',
  'https://my-mental-health-trainer.herokuapp.com/',
  'https://github.com/vkanicka/GA_Capstone_Project_Backend',
  comments4
)
const proj3 = new Project (
  'Pixel Progress',
  'https://i.imgur.com/YE4mp9t.png',
  'https://pixel-progress-frontend.herokuapp.com/',
  'https://github.com/am852410/pixel-progress-front-end',
  comments3
)
const proj4B = new Project (
  'Database for my Mental Health Trainer',
  'https://i.imgur.com/d8HTMvU.png',
  'https://vkanicka.github.io/LifeSimulation/files02/index.html',
  'https://github.com/vkanicka/GA_Capstone_Project_Backend',
  comments4DB
)
const projects = [proj1, proj4, proj3, proj4B]
for (const p in projects) {
  projectInfo.addProject(projects[p])
}
const exportProjects = projectInfo.projects
export default exportProjects
