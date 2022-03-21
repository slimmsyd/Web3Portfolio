import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';

export default function Blog() { 

    return( 
        <>
            <Navbar />
                <div className = {styles.blog_Div}>
                        <input className = {styles.blog_Search} type = "text" textarea = "60"></input>
                        <Image id = {styles.circle_Push } src = "/Circle.png" width={32} height ={32}></Image>
                </div>

                <div className = {styles.blog_Heading}>
                    <h1> My Latest Work </h1>
                    <ul>
                        <li><Link href = "HowToCreateADapp">How To Create A Simple DaPP</Link></li>
                    </ul>
                </div>
            

        
        </>

    )

}