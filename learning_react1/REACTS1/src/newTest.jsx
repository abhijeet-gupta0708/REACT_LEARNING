import { Container } from "postcss";
import { Children, createElement } from "react";


function DomRender(reactElement,container){

    const domElem = document.createElement(reactElement.type)
    domElem.innerText=reactElement.children;
    domElem.setAttribute('href',reactElement.props.href);
    domElem.setAttribute('target',reactElement.props.target);
    container.appendChild(domElem);
    for(const prop in reactElement.props)
    {
        
        domElem.setAttribute(prop,reactElement.props[prop])
    }
}


const reactElement = {
    type :'a',
    props :
    {
        href :'https://www.youtube.com',
        target :'_blank'

    },
    children :'Click to Visit Youtube'
}
setTimeout(() => {
    const Maincontainer = document.querySelector('#Testnew');
    if (Maincontainer) {
        DomRender(reactElement, Maincontainer);
    }
}, 0);


export default DomRender;