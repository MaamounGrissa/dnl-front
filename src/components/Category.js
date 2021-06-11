import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from './modules/Breadcrumbs'
import LoadingBox from './modules/LoadingBox';
import MessageBox from './modules/MessageBox';
import { DetailsCategory } from '../actions/categoryActions';
import { useParams } from 'react-router';

export default function Category() {

    let { id } = useParams();
    const categoryId = id;
    const dispatch = useDispatch();
    const categoryDetails = useSelector((state) => state.categoryDetails);
    const { loading, error, details } = categoryDetails;

    useEffect(() => {
        dispatch(DetailsCategory(categoryId))
    }, [dispatch, categoryId])
    
    if (loading) {

        return ( <LoadingBox></LoadingBox> );
    
    } else if (error) {

        return ( <MessageBox variant="danger">{error}</MessageBox> );

    } else {

        const category = details[0];
       // const products = details[1];

        const bdcrumbs = {
            home: {link : "/", text: "home"},
            current: {text: category.title}
        }
        return (
            <div className="product-page">
                    <div className="head-page">
                        <img src={category.headerImage} alt={category.title} />
                        <Breadcrumbs bdcrumbs={bdcrumbs} />
                    </div>
            </div>
        )
    }
}
