import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Project from '../components/Project';
import Mint from './Mint';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sydney Sanders Portolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" />
      </Head>

          <div>
              <Navbar />


              <section className = "home">

              <div className = "home_Header">
    
                    <div className = "heading_Contents">
                      <p>Hi! There !</p>
                        <span id ="line"></span>
                      <h1>I'm Sydney Sanders</h1>
                        <h2> Front-End Developer </h2>
                        <h3>I Like To Keep Things Very Minimal.</h3>
                        <button className = "explore">
                            Explore My Work
                          </button>

                      </div>
                    <div className = "imageSphere">
                        <Image src = "/Group.png" alt = "group" width={900} height = {900}></Image>
                      </div>
                    </div>

              </section>

          </div>

          
        <section className = "divide">
                <div className = "divideLine"></div>
              </section>
    
        <Main />


        <section className = "divide clear">
                <div className = "divideLine"></div>
              </section>


              <section className ="skills">
              <div className = "whatIDo">
              <h2>Skills </h2>
            </div>
              <Image className = "skills_Image" alt ="Skills" src = "/Skills.png" width={290} height ={250} />
                <div className = "skill_Card">
                    <div className = "card">
                      <div className = "card1">
                        <div className = "subCard">
                            HTML 
                          </div>
                          
                        <div className = "subCard card_Top">
                            React 
                          </div>
                          
                        <div className = "subCard card_Top">
                            Git 
                          </div>
                   
                          
                            </div>
                      <div className = "card1">
                      <div className = "subCard">
                          
                          CSS 
                        
                        </div>
                               
                        <div className = "subCard card_Top">
                            NextJs 
                          </div>
                               
                       
                        <div className = "subCard card_Top">
                            EtherJs 
                          </div>
                        <div className = "poly">
                            <Image  className='polyGon' alt = "polyGon" src = '/PolyGon.png' width={14} height ={14}></Image>
                          </div>
                            </div>
                      <div className = "card1">
                      <div className = "subCard">
                          
                          Javascript 
                        
                        </div>
                        <div className = "subCard card_Top">
                            Solidity 
                          </div>
                        <div  className  = "subCard card_Top">
                            NodeJs 
                          </div>
                               
                            </div>
                    
                          </div>
              
              </div>
                </section>

              <Project />
              <Mint />





    </div>
  )
}
