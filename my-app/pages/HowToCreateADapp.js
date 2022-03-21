import Image from "next/image";
import Navbar from "../components/Navbar";
const HowToCreateADapp = () => { 

    return ( 
        <div className = "body_Wrapper">
        <Navbar />
        <div className = "wrapper">
            <header>How To Create A Simple Dapp</header>
                <div className = "wrapper_Layout">
                <div className = "wrapper_Description">
                    March 12th 2022
                </div>
                <ul className = "social_Links">
                <li><a href = "https://twitter.com/slimmsyd"><Image src = "/Twitter.png"  width={39} height = {36}></Image></a></li>
                    <li><a href = "https://www.youtube.com/channel/UCC8yLhVL7lThf295DtD4rag"><Image src = "/FaceBook.png"  width={39} height = {36}></Image></a></li>
                    <li><Image src = "/Instagram.png"  width={39} height = {36}></Image></li>
                </ul>
                <div className = "wrapper_Description">
                    Sydney Sanders
                </div>
                </div>
            </div>

            <div className = "img_Heading">
                <Image src = "/MetaMaskLogo.png" width= {90} height = {90}></Image>
            </div>

            <section className = "article">
            <div className = "article_Wrapper">
                <article>
                    <p>Web3 is the booming thing in tech right now and has been increasingly getting attention from everyone and their mother. You got this creative urge and want to take apart of this highly innovative scene.</p>
                  


                </article>

            </div>

            </section>
            

        </div>
            

    )


}


export default HowToCreateADapp;