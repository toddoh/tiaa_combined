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

    if (getpathparam('accesstoken') != 'tiaaEDTstonefieldo') 
        window.location.href = window.location.protocol + "//" + window.location.host + "/";

    if (getpathparam('type') !== '' && getpathparam('type') !== null) {
        import('./editorialfloor/' + getpathparam('type')).then(module => {
            module.init_render();
        });
    } else {
        import('./editorialfloor/monthlycluster').then(module => {
            module.init_render();
        });
    }
}