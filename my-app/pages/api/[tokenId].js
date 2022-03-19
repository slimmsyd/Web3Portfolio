export default function handler(req, res) {

    const tokenId = req.query.tokenId;
    //As the images are uploaded on github, we can extract the iamges from github directly
    const image_url = "https://github.com/slimmsyd/Web3Portfolio/tree/main/my-app/public/SydNfts"
    res.status(200).json({
        name: "Syd NFTS" + tokenId,
        description: "You Visited My Portfolio!",
        image: image_url + tokenId + ".png",

    })  



}