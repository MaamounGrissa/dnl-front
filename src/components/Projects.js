import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListProjects } from '../actions/projectActions';
import Breadcrumbs from './modules/Breadcrumbs';
import LoadingBox from './modules/LoadingBox';

export default function Projects() {

    const dispatch = useDispatch();
    const projectList = useSelector((state) => state.projectList)
    const { loading, error, projects } = projectList;

    useEffect( () => {
        dispatch(ListProjects())
    }, [dispatch]);
    
    if (loading) {
        return <LoadingBox />
    } else if (error) {

    } else {

        const bdcrumbs = {
            home: {link : "/", text: "home"},
            current: {text: "Projects"}
        }

        return (
            <div>
                <div className="product-page">
                    <div className="head-page">
                        <img src="/images/projects/projects-header.jpg" alt="Projects" />
                        <Breadcrumbs bdcrumbs={bdcrumbs} />
                    </div>
                </div>
                {
                    projects.map(item =>
                        <div>
                            {item.title}
                        </div>
                    )
                }
            </div>
        )
    }
}
