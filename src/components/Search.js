import React, { useContext, useEffect, useState } from 'react'
import './Search.css';
import projectContext from '../context/projects/projectContext';
import SmallCard from './SmallCard';
import Carousel from "./Carousel";

const Search = (props) => {

    const [searched, setSearched] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [selectOption1, setSelectOption1] = useState('');
    const [selectOption2, setSelectOption2] = useState('');
    const [selectOption3, setSelectOption3] = useState('');

    const context = useContext(projectContext);
    const { projects, getProjects } = context;
    useEffect(() => {
        getProjects();
        console.log(projects);
    }, []);


    const onClick = () => {
        setSearched(true);
    }

    return (
        <>

            <div className="SearchBox">
                <div className="column column1">
                    <div className="formgroups">
                        <div className="form-group">
                            <select className="form-control first"id="selectOption0" onChange={(e) => setSelectOption1(e.target.value)}>
                                <option value="0" selected disabled>Select Location</option>
                                <option value="1">Pune</option>
                                <option value="2">Mumbai</option>
                                <option value="3">Delhi</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control" id="selectOption1" onChange={(e) => setSelectOption1(e.target.value)}>
                                <option value="0" selected disabled>Select Builder</option>
                                <option value="1">Atif Faizan</option>
                                <option value="2">Jameel Ahmad Azad</option>
                                <option value="3">Arham Ali</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control" id="selectOption2" onChange={(e) => setSelectOption2(e.target.value)}>
                                <option value="0" selected disabled>Budget Less Than</option>
                                <option value="1">0.5 Million</option>
                                <option value="2">1 Million</option>
                                <option value="3">10 Million</option>
                            </select>

                        </div>
                        <div className="form-group">
                            <select className="form-control" id="selectOption3" onChange={(e) => setSelectOption3(e.target.value)}>
                                <option value="0" selected disabled>Rating Greater than</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <button className='btn btn-success searchbtn' onClick={onClick}><i class="fa-solid fa-magnifying-glass"></i>Search</button>
                    </div>

                </div>
                <div className="column column2">
                    {(searched) ? <>
                        <h2>Search Results</h2>
                        <div className="smalltrending">
                            <h1>{props.title}</h1>
                            <div className="smallcards">
                                {projects
                                    .filter((project) => {
                                        if (!(selectOption3 === "0")) {
                                            // Condition for props.id === '1'
                                            return project.rating >= Number(selectOption3);
                                        }
                                        if (0) {
                                            // Condition for props.id === '2'
                                            return project.builder_rating >= 4;
                                        }
                                        else if (0) {
                                            return project.location_rating >= 3.5;
                                        }
                                    })
                                    .map((project) => (
                                        <SmallCard
                                            identification={project._id}
                                            imageURL={project.image}
                                            title={project.title}
                                            description={project.description}
                                            builder={project.builder}
                                            location={project.location}
                                            price={project.price}
                                        />
                                    ))}

                            </div>
                        </div>
                    </>
                        : <>
                            <Carousel />
                        </>}

                </div>
            </div>


        </>
    )
}

export default Search
