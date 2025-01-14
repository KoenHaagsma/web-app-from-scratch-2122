import Utils from '../helpers/Utils.js';
import Error404 from '../views/error404.js';
import ManualInput from '../views/manualInput.js';
import Details from '../views/details.js';
import Scanner from '../views/scanner.js';
import ErrorPage from '../views/errorPage.js';
import Home from '../views/home.js';
import { renderElementAndClean } from '../modules/renderElement.js';

const routes = {
    '/': Home,
    '/scanner': Scanner,
    '/manual': ManualInput,
    '/details/:id': Details,
    '/error': ErrorPage,
};

// https://github.com/rishavs/vanillajs-spa
const router = async () => {
    // Lazy load elements
    const content = null || document.getElementById('page_container');

    let request = Utils.parseRequestURL();

    let parsedURL =
        (request.resource ? '/' + request.resource : '/') +
        (request.id ? '/:id' : '') +
        (request.verb ? '/' + request.verb : '');

    let page = routes[parsedURL] ? routes[parsedURL] : Error404;

    renderElementAndClean(content, await page.render(), 'afterbegin');
    await page.after_render();
};

export default router;
