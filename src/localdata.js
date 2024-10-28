export function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function updateData(key, key2, valor) {
    let obj = getData(key);
    if(key2 in obj) {
        obj[key2] = valor
        setData(key, obj);
    }
}