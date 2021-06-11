import React from 'react';
import './assets/app.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Product from './components/Product.js';
import Category from './components/Category.js'
import Signin from './components/Signin.js';
import Projects from './components/Projects.js';
import BlogPage from './components/BlogPage';

function App(props) {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  if (window.innerWidth > 600) {
    window.onscroll = function(e) {
      const topBar = document.getElementById('topbar')
      const header = document.getElementById('header')
      if (this.oldScroll > this.scrollY) {
        if (topBar) {
          topBar.classList.remove('hide');
        }
      } else {
        if (topBar) {
          topBar.classList.add('hide');
        }
      }
      this.oldScroll = this.scrollY;
      if (this.scrollY < 5) {
        if (header) {
          header.classList.remove('dark');
        }
      } else {
        if (header) {
          header.classList.add('dark');
        }
      }
    }
  }
  return (

    <BrowserRouter>

      <div className="App">
        
        <Header userInfo={userInfo} />

        <main>

          <Route path="/" exact={true} component={Home} />

          <Route path='/product/:id' component={Product} />

          <Route path='/category/:id' component={Category} />

          <Route path='/projects' component={Projects} />

          <Route path='/blog' component={BlogPage} />

          <Route path='/signin' component={Signin} />
          
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
