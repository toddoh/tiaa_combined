import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);
    button.onclick = e => import(/* webpackChunkName: "print" */ './greeter').then(module => {
        var print = module.default;
        print();
    });
    return element;
}

const render_core = () => {
    var topframe = document.createElement('div')
    topframe.className = 'minion-root';

    return topframe;
}

document.body.appendChild(render_core());
// alert(window.location.pathname)