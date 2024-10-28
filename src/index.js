import { getDOM, getDOMAll, getDOMValue } from "./dom.js";
import { getData, setData, updateData } from "./localdata.js";
import { on } from "./eventlistener.js";

const optmize = {
    //Manipulação do DOM
    getDOM, 
    getDOMAll, 
    getDOMValue, 
    //Manipulação de dados localstorage
    getData, 
    setData,
    updateData,
    //Manipulação de eventos
    on
}

export default optmize;