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
            {linkItem : "mathematicsBlog", link : "/mathematics#blog", linkTekst : "...mathematics."},
            {linkItem : "physicsBlog", link : "/physics#blog", linkTekst : "...physics."}
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
        <section className="blog-topics-container">
          <h2>New Posts</h2>
          <div className="blog-post-links-container">
          <div className="blog-post-link">
            <HashLink className="post-hash" smooth to="#intersection-cognitive-py">
              <h3>The Intersection of Cognitive Sciences and Python</h3>
              <p>
              The Intersection of Cognitive Sciences and Python explores how cognitive science,
              an interdisciplinary field studying human perception, memory, and learning, benefits
              from computational tools like Python. The article highlights Python’s versatility in
              cognitive research, covering data analysis, statistical processing, visualization,
              neuroimaging, and predictive modeling with machine learning. By exploring real life
              examples, it illustrates how researchers leverage Python’s powerful libraries—such as
              Pandas, NumPy, and Matplotlib—to analyze complex cognitive data and gain deeper
              insights into the human mind.
              </p>
            </HashLink>
          </div>
          <div className="blog-post-link">
            <HashLink className="post-hash" smooth to="#programming-supports-scimath">
              <h3>How Programming Supports Learning Mathematics and Physics</h3>
              <p>
              explores how programming revolutionizes problem-solving in these disciplines,
              enhancing efficiency, accuracy, and visualization. The article highlights
              programming’s role in creating simulations, analyzing vast datasets, and bridging
              theory with practical applications. It also outlines the best programming languages
              for mathematical and scientific computations—such as Python, MATLAB, and
              Julia—and explains how algorithms transform scientific modeling. With real-world
              examples, the post demonstrates how programming empowers learners and researchers
              to uncover deeper insights into mathematical and physical phenomena.
              </p>
            </HashLink>
          </div>
          <div className="blog-post-link">
            <HashLink className="post-hash" smooth to="#bitcoin">
              <h3>Bitcoin: A Peer-to-Peer Electronic Cash System</h3>
              <p>
              presents the foundational idea behind Bitcoin, as proposed by Satoshi
              Nakamoto. The paper introduces a decentralized digital payment system that
              eliminates the need for financial intermediaries by using cryptographic proof
              rather than trust. It outlines the solution to double-spending through a
              peer-to-peer network, utilizing timestamping, proof-of-work, and a
              distributed ledger to ensure transaction integrity. The paper also describes
              how Bitcoin functions as an electronic cash system, enabling transactions to be
              verified without relying on a centralized authority. <br/>
              For the full original text, you can visit &nbsp;
              <a href="https://bitcoin.org" target="blank"> www.bitcoin.org</a>, where the
              original whitepaper is published.
              </p>
            </HashLink>
          </div>

          <div className="blog-post-link">
            <HashLink class="post-hash" smooth to="#crypto-blockchain-basics">
              <h3>How do cryptocurrencies work? What is blockchain technology?</h3>
              <p>explains the fundamentals of cryptocurrencies and their relationship with
              blockchain technology. The article discusses why cryptocurrencies are not
              traditional currencies but rather digital assets shaped by market forces. It dives
              into the origins of Bitcoin, Satoshi Nakamoto’s vision, and how blockchain ensures
              security, decentralization, and transparency in digital transactions. Additionally,
              it covers the mechanics behind blockchain—how cryptographic chains safeguard data,
              prevent tampering, and maintain a decentralized ledger. The post provides a clear
              breakdown of how these technologies work and why they are reshaping modern finance.</p>
            </HashLink>
          </div>
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
