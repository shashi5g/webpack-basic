import nav from './nav';
import {footer} from './footer';
import makeButton from './button';
import makeImage from './image';
import {makeColorStyle} from './button-style';
import "./button.css"
import imageUrl from'./icon-square-big.jpg';

const button  = makeButton('great button')
button.style= makeColorStyle('cyan');
const image = makeImage(imageUrl)
document.body.appendChild(button)
document.body.appendChild(footer)
document.body.appendChild(image)


