export function on(action, query, callback) {
    document.querySelectorAll(query).forEach(element => {
        element.addEventListener(action, callback);
    });
}