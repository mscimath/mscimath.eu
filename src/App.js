import React, { useEffect, useState } from 'react';
import {HashRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import JavaScript from './pages/JavaScript';
import Physics from './pages/Physics';
import PhysicsParticles from './pages/PhysicsParticles'
import Mathematics from './pages/Mathematics';
import Python from './pages/Python';
import Cpp from './pages/Cpp';
import DataScience from './pages/DataScience';
import NoPage from './pages/NoPage';
import HeaderCollapsable from './components/HeaderCollapsable';
import Blog from './components/Blog';
import data from './blogData.json';
import CodeCss from './components/CodeBlog.css';
import Pages from './pages/Pages.css'
import MessageForm from './components/MessageForm';

export default function App() {
  const javascriptPosts = data[0].javascript;
  const pythonPosts = data[0].python;
  const cppPosts = data[0].cpp;
  const datasciencePosts = data[0].data_science;
  const generalPosts = data[0].general;
  const physicsPosts = data[0].physics;
  const particlesPosts = data[0].physics_particle;

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value.toLowerCase());
  };

  
  return (

    <div className="App" id='App'>
      <Router>
      
      <HeaderCollapsable />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element = {<Home />} />
          <Route path='/javascript' element = {<JavaScript />} />
          <Route path='/physics' element = {<Physics />} />
          <Route path='/physics_particle' element = {<PhysicsParticles/>} />
          <Route path='/python' element = {<Python />} />
          <Route path='/cpp' element = {<Cpp />} />
          <Route path='/mathematics' element={<Mathematics/>} />
          <Route path='/data_science' element={<DataScience />} />
          <Route path='*' element = {<NoPage/>} />
        </Routes>
        
        
        <section id="blog">
        <div className="search-main-container">
          <div className="search-container">
            <div className="search-header" >
              <input type="text" 
              id="search" 
              placeholder="Search something on this page..."
              onChange={handleChange}
              value={searchInput}/>
            </div>    
            
            <Routes>
              <Route path="/" element = {<Blog  input={searchInput} posts={generalPosts}/>}></Route>
              <Route path="/home" element = {<Blog  input={searchInput} posts={generalPosts}/>}></Route>
              <Route path='/javascript' element = {<Blog style={CodeCss} input={searchInput} posts={javascriptPosts}/>}/>
              <Route path='/python' element = { <Blog style={CodeCss} input={searchInput} posts={pythonPosts}/> } />
              <Route path='/cpp' element = { <Blog style={CodeCss} input={searchInput} posts={cppPosts} /> } />
              <Route path='/data_science' element = { <Blog style={CodeCss} input={searchInput} posts = {datasciencePosts} /> } />
              <Route path='/physics' element = { <Blog input={searchInput} posts = {physicsPosts} /> } />
              <Route path='/physics_particle' element = { <Blog input={searchInput} posts = {particlesPosts} /> } />
            </Routes>
            
          </div>

        </div>
      </section>
      <section id="contact">
        <MessageForm />
      </section>
      </Router>
    </div>
  );
}

