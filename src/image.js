
const makeImage =(url) =>{

    const img = document.createElement("img")
    img.src = url;
    img.height="100";
    img.width="100";

    return img

}

module.exports = makeImage;