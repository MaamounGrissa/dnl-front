import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import MessageBox from './MessageBox.js';
import LoadingBox from './LoadingBox.js';
import { ListCategories } from '../../actions/categoryActions.js';
import { useDispatch, useSelector } from 'react-redux';

function CategoriesSlider () {

    const dispatch = useDispatch();
    const categoryList = useSelector( state => state.categoryList);
    const {loading, error, categories} = categoryList;

    useEffect(() => {
        dispatch(ListCategories());
    }, [dispatch]);
    
    if (loading) {

        return ( <LoadingBox></LoadingBox> );
    
    } else if (error) {

        return ( <MessageBox variant="danger">{error}</MessageBox> );

    } else {
        return (
            <div className="categories-slider">
                <Carousel itemsToShow={window.innerWidth < 600 ? 2 : 5} pagination={false} >
                    {categories.map(item => (
                        <div key={item._id} className="category-content" >
                            <Link to={'/category/' + item._id}><img src={item.image} alt="Slide" className="category-image" /></Link>
                            <h3><Link to={'/category/' + item._id}>{item.title}</Link></h3>
                        </div>
                    ))}
                </Carousel>
            </div>
        ) 
    }
}

export default CategoriesSlider;