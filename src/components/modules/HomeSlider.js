import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./../../assets/slider-style.css";
import { ListSlider } from '../../actions/sliderActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

export default function HomeSlider() {

    const dispatch = useDispatch();
    const sliderList = useSelector( state => state.sliderList);
    const {loading, error, sliders} = sliderList;

    useEffect(() => {
        dispatch(ListSlider());
    }, [dispatch]);
    
    if (loading) {

        return ( <LoadingBox></LoadingBox> );
    
    } else if (error) {

        return ( <MessageBox variant="danger">{error}</MessageBox> );

    } else {
        return (
            <Slider className="slider-wrapper">

            {sliders.map(item => (
                <div key={item._id} className="slider-content" >
                    <img src={item.image} alt="Slide" className="slide-image" />
                    <div className="inner">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <button><Link to={item.buttonLink}>{item.button}</Link></button>
                    </div>
                    <section>
                        <Link to={{ pathname: 'https://www.linkedin.com/in/abdelaziz-mohamed-207693b3/' }} target="_blank">
                            <img src="/images/ceo.jpg" alt="CEO" />
                            <span>
                                <strong>Mohamed Abdelaziz</strong>
                                CEO
                            </span>
                        </Link>
                    </section>
                </div>
            ))}
        </Slider>
        ) 
    }
}
