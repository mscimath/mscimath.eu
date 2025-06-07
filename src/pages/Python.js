import React from "react";
import './Python.css'
import Accordion from "../components/Accordion";
import Tile from "../components/Tile";
import { HashLink } from "react-router-hash-link";

export default function Python(){
    const syntaxTiles = [
        { title: 'Python Syntax Overview', description: 'An overview of Python syntax', pdfUrl: '/pdfs/syntax_overview.pdf' },
        {title: 'Indentation', description: 'Learn about Python indentation rules', pdfUrl: '/pdf/indentation.pdf'}
    ];

    const dataTypeTiles = [
        { title: 'Intro to Data Types', description: 'Learn about Python data types', pdfUrl: '/pdf/datatypes.pdf' },
        { title: 'Numbers and Strings', description: 'Working with numbers and strings', pdfUrl: '/pdfs/numbers_strings.pdf' }
    ];

    const decisionMakingTiles = [
        { title: 'If-Else Statements', description: 'Learn how to make decisions in Python', pdfUrl: '/pdfs/if_else_statements.pdf' },
        { title: 'Switch Case Alternatives', description: 'Alternative to switch case in Python', pdfUrl: '/pdfs/switch_case.pdf' }
    ];

    const projectTiles = [
        { title: 'FastAPI Tutorial: Building a Secure User Profile Update Endpoint', 
          description: "In this tutorial, you'll wlak through a real-world development process by following Philippe, a fullstack developer working with FastAPI. His goal? To implement a secure, well-tested API endpoint that allows users to update their profile information.", 
          url: "/fastapi-secure-user-profile-endpoint" }
    ];

    const handleScrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start',  });
        }
    }

    return (
        <>
        <section>
            <h2>Python</h2>
            <div className="section-menu" id="section-menu">
                <div className="section-menu-item"><a href="#/python#resources" onClick={() => handleScrollTo('resources')}>Learning Resources</a></div>
                <div className="section-menu-item"><a href="#/python#data-science" onClick={() => handleScrollTo('data-science')}>Data Science</a></div>
                <div className="section-menu-item"><a href="#/python#blog" onClick={() => handleScrollTo('blog')}>Python Blog</a></div>
            </div>
        </section>
        <section id="resources">
        {/* Main Accordion for Basics */}
        <div id="accordion-container" className="accordion-container">
        <Accordion 
            title="Python-Basics" 
            className="accordion-main" 
            content={
            <>
                {/* Sub-Accordion: Syntax */}
                <Accordion title="Python-Syntax" content={
                    <div className="tile-grid">
                        {syntaxTiles.map((tile, index) => (
                            <Tile 
                                key={index}
                                title={tile.title}
                                description={tile.description}
                                pdfUrl={tile.pdfUrl}
                            />
                        ))}
                    </div>
                }
                />

                {/* Sub-Accordion: Data Types */}
                <Accordion 
                    title="Data Types"
                    content={
                        <div className="tile-grid">
                            {dataTypeTiles.map((tile, index) => (
                                <Tile
                                    key={index}
                                    title={tile.title}
                                    description={tile.description}
                                    pdfUrl={tile.pdfUrl}
                                />
                            ))}
                        </div>
                    }
                />
                {/* Sub-Accordion: Decision Making */}
                <Accordion
                    title="Decision Making"
                    content={
                        <div className="tile-grid">
                            {decisionMakingTiles.map((tile, index) => (
                                <Tile 
                                    key={index}
                                    title={tile.title}
                                    description={tile.description}
                                    pdfUrl={tile.pdfUrl}
                                />
                            ))}
                        </div>
                    }
                />

            </>  
        } 
        defaultOpen={true}
        />

        {/* Main Accordion for Intermediate */}
        <Accordion
         title="Intermediate Stuff"
         className="accordion-main"
         content = {
            <div className="tile-grid">
                
            </div>
         }
        />
        <Accordion
            title="Project Tutorials"
            className="accordion-main"
            content={
                <>
                    {/* Sub-Accordion: FastAPI */}
                    <Accordion title="FastAPI" content={
                        <div className="tile-grid">
                            {projectTiles.map((tile, index) => (
                                <div className="tile">
                                    <div className="tile-content">
                                        <h3>{tile.title}</h3>
                                        <p>{tile.description}</p>
                                        <HashLink to={tile.url} target="_blank" rel="noopener noreferrer">
                                            See the Tutorial
                                        </HashLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    />
                </>
            }
        />
        </div>
        </section>
        <section id="data-science">

        </section>

        </>
    );
}