import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListProjects } from '../../actions/projectActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

function ArtProjects () {

    const dispatch = useDispatch();
    const projectList = useSelector( state => state.projectList);
    const {loading, error, projects} = projectList;

    useEffect(() => {
        dispatch(ListProjects());
    }, [dispatch]);
    
    if (loading) {

        return ( <LoadingBox></LoadingBox> );
    
    } else if (error) {

        return ( <MessageBox variant="danger">{error}</MessageBox> );

    } else {
        return <div className="projects-container">
            <div className="art-projects">
                {projects.map(item => (
                        <div key={item._id} className="project"  >
                            <img className="project-image" src={item.image} alt="Project" />
                            <Link to="/" className="project-link" >&nbsp;</Link>
                            <div className="project-infos">
                                <h3><Link to="/">{item.title}</Link></h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                ))}
            </div>
            <button className="view-all">View All Projects</button>
        </div>
    }
}

export default ArtProjects;