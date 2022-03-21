import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';
import {useState, useEffect, useRef} from 'react'
import Web3 from 'web3'
import {ethers, Contract, utils, proivders, providers} from 'ethers';
import Web3Modal from 'web3modal';

export default function Blog() { 
    const [isConnected, setIsConnected] = useState(false);
    const [accountAddress, setAccountAddress] = useState('');
const web3modal = useRef();
const [loading, setLoading] = useState(false);


const splitString = (string) => {
    let result1 = string.substring(0,5);
    let result2 = string.substring(38,42);
    let finalResult = result1 + "..." + result2;
    return finalResult;
  };
  
    const getProviderOrSigner = async(needSigner = false) =>  { 
        //Get access to provider 
        const provider = await web3modal.current.connect();
        const web3Provider = new providers.Web3Provider(provider);
        //Get access to the signer
        const signer = web3Provider.getSigner();
        const address = await  signer.getAddress();
        console.l
        //Split the address
        const subStringAddress = splitString(address);
        setAccountAddress(subStringAddress);
        console.log(accountAddress);
      
        //Make sure user is using the Rinkeby TestNet Network 
      
        const {chainId} = await web3Provider.getNetwork();
        if(chainId !==4) { 
          window.alert("Change Network To Rinkeby");
        }
        if(needSigner) { 
          const signer = web3Provider.getSigner();
          return signer;
        }
      
        return web3Provider;
      
      
      };

      const Connect = async() =>  {
        try { 
          await getProviderOrSigner();
          setIsConnected(true)
        }catch(err) { 
          console.error(err)
        }
      
      }
      
      
      
      
      
      useEffect(() => { 
        if(!isConnected) { 
          web3modal.current = new Web3Modal({
            network: "rinkeby",
            providerOptions: {},
            disableInjectedProvider: false,
      
          });
          Connect()
        }
      })

    return( 
        <div className = "body_Wrapper">

            <Navbar
                isConnected={isConnected}
                accountAddress = {accountAddress}
            
            />
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
            

        
        </div>

    )

}