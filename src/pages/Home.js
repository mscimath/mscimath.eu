import {Routes, Route} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import SubjectsMenu from '../components/SubjectsMenu';
import MainTitle from '../components/MainTitle';
import TitleAddition from '../components/TitleAddition';
import './Home.css'

export default function Home(){
    const mainLinks =[
        {id : "blogs", category: "Read about...", linkItems: [
            {linkItem : "mainBlog", link : "#blog", linkTekst : "...it all."},
            {linkItem : "mathematicsBlog", link : "/mathematics#blog", linkTekst : "...mathematics."}
        ]},
        {id : "subjects", category: "Learn about...", linkItems:[
            {linkItem : "python", link : "/python", linkTekst: "...programming in Python."}
        ]},
        {id : "other", category: "", linkItems:[
            {linkItem : "contact", link : "#contact", linkTekst : "Contact me about anything."},
            {linkItem : "lessons", link : "#lessons", linkTekst : "See my prices."}
        ]}
    ];

    const sections = mainLinks.map(link => link.category);

    return (
        <>
        <section id='home' className='simple'>
        <MainTitle/> 
        <TitleAddition />
        <div id='menu-buttons-container'>
        {sections.map((section) => {
          // Find the object in mainLinks that matches the current section
          const linkObject = mainLinks.find((link) => link.category === section);
          if (linkObject) {
            return (
              <div className='menu-section' key={section}>
                <h4>{section}</h4>
                <div className='menu-buttons'>  
                  {linkObject.linkItems.map((item) => (
                    <div className='menu-button button-margin'>
                      <HashLink to={item.link}>{item.linkTekst}</HashLink>
                    </div>
                  ))}
                </div>
              </div>
            );
          } else {
            return null; // Handle case where section doesn't match any category
          }
        })}
            
            
        </div>


        
        </section>
        
            <section id ="subjects" className="simple">
            
            <Routes>
              <Route index element={<SubjectsMenu />}/>
            </Routes>
            </section>
        </>
    )
}