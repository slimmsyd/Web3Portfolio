import Image from 'next/image';



const Mint = ({mint}) => { 

    return(
        <section className = "mintSection">
            <Image src = "/Group2.png" width={500} height = {500}></Image>
       <button
        onClick={mint}
       className = "mint">

               MINT!

               </button>
               <p>Thanks For Coming To My Portfolio!
                   If You Connected A Wallet, Mint A SydPortFolio NFT For The Fun!
               </p>
           </section>

    )


};


export default Mint;