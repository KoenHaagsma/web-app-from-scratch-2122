export const Heading = (el) => {
    const elem = document.createElement('h1');
    const node = document.createTextNode(el);

    elem.appendChild(node);
    return elem;
};
