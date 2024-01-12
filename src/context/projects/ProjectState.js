import ProjectContext from "./projectContext";
import { useState } from 'react';

const ProjectState = (props) => {
  // const host = "http://localhost:5000";
  const projectsInitial = []

  const [projects, setProjects] = useState(projectsInitial);


  //Get all projects
  const getProjects = async () => {
    //To do api call
    try{
        console.log("Trying");
        const response =  await fetch(`http://localhost:5000/api/projects/fetchprojects`, {
          method: 'GET'
        });
        const json =await response.json();
        // console.log(json);
        setProjects(json);
    }catch(error){
      console.log(error.message);
    }
  }


  return (
    <ProjectContext.Provider value={{projects,getProjects }}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState;