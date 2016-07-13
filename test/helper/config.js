import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>', {url: "http://set-in-dom-js.com"});
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});