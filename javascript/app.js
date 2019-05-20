import Controller from './controller.js';
import View from './view.js';
import Model from './model.js';
window.onload = function() {
    let view = new View();
    let model = new Model();
    let controller = new Controller(view, model);
};