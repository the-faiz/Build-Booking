import React from 'react'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import "./Project.css"
import projectContext from '../context/projects/projectContext';
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'
import Box4 from './Box4'
import Box5 from './Box5'
import Box6 from './Box6'
const Project = () => {
  const context = useContext(projectContext);
  const { projects, getProjects } = context;
  useEffect(() => {
    getProjects()
  }, []);
  const { identification } = useParams();

  return (
    <div >
      {
        projects.filter((project) => {
          return project._id === identification;
        }).map((project) => (
          <>
            <Box1 title={project.title} rating={project.rating} builder_rating={project.builder_rating} builder={project.builder} price={project.price}/>
            <Box3 />
            <Box2 />
            <Box4 />
            <Box5 />
            <Box6 />
          </>

        ))
      }


    </div>
  )
}

export default Project
