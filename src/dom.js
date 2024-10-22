export function getDOM(query) {
    return document.querySelector(query);
}

export function getDOMAll(query) {
    return document.querySelectorAll(query);
}

export function getDOMValue(query) {
    return getDOM(query).value;
}