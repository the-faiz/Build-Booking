import React, { useContext, useEffect } from 'react'
import './List.css';
import GlobalCard from './GlobalCard';
import projectContext from '../context/projects/projectContext';

const List = (props) => {
    const context = useContext(projectContext);
    const { projects, getProjects} = context;
    useEffect(() => {
        getProjects()
    }, []);
    return (
        <>
            <div className="trending">
                <h1>{props.title}</h1>
                <div class="cards">
                    {projects
                        .filter((project) => {
                            if (props.id === '1') {
                                return project.rating >= 4
                            } else if (props.id === '2') {
                                return project.builder_rating >=4;
                            }
                            else if( props.id==='3'){
                                return project.location_rating>=3.5;
                            }
                        })
                        .map((project) => (
                            <GlobalCard
                                id={props.id}
                                identification={project._id}
                                imageURL={project.image}
                                title={project.title}
                                description={project.description}
                                builder={project.builder}
                                location={project.location}
                                price={project.price}
                                rating={project.rating}
                                builder_rating={project.builder_rating}
                            />
                        ))}

                </div>
            </div>
        </>
    )
}

export default List
