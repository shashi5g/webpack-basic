
const makeBUtton =(buttonName) =>{
    const buttonLabel1=  `Button : ${buttonName}`;
    const button = document.createElement("button")
    button.innerText = buttonLabel1;
    return button

}

module.exports = makeBUtton;