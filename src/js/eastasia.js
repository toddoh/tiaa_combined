import {html, render} from 'lit-html';


export function init_render() {
    const getpathparam = (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( url );
        return results == null ? null : results[1];
    }

    if (getpathparam('type') == 'korea') {
        document.querySelector('.navbox-currentpath').textContent ='East Asia/Korea';

        import('./eastasia/korea').then(module => {
            module.init_render();
        });
    }
}