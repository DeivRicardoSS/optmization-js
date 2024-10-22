export function addClick(query, callback) {
    document.querySelectorAll(query).forEach(element => {
        element.addEventListener('click', callback);
    });
}