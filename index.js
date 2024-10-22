import { getDOM, getDOMAll, getDOMValue } from "./dom.js";
import { getData, setData } from "./localdata.js";
import { addClick } from "./eventlistener.js";

const optmize = {
    //Manipulação do DOM
    getDOM, 
    getDOMAll, 
    getDOMValue, 
    //Manipulação de dados localstorage
    getData, 
    setData,
    //Manipulação de eventos
    addClick
}

export default optmize;