import { getDOM, getDOMAll, getDOMValue } from "./dom.js";
import { getData, setData } from "./localdata.js";
import { on } from "./eventlistener.js";

const optmize = {
    //Manipulação do DOM
    getDOM, 
    getDOMAll, 
    getDOMValue, 
    //Manipulação de dados localstorage
    getData, 
    setData,
    //Manipulação de eventos
    on
}

export default optmize;