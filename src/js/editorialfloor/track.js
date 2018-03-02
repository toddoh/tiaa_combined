import styles from '../../styles/editorialfloor/track.css';
import json_styles from '../../../node_modules/jsoneditor/dist/jsoneditor.min.css';
import {html, render} from 'lit-html';
import moment from 'moment';
import JSONEditor from 'jsoneditor';

export function init_render() {
    document.querySelector('.navbox-currentpath').textContent ='Editorial /track';
    document.querySelector('.navbox-static').classList.add('editorial');
    document.body.classList.add('editorial');

    const hero_markup = () => html`
    <div class="editorial-prepare">
        <div class="editorial-herotext">
            <p class="hero1">Editorial /tracker</p>
            <p class="hero1">(track edits/revise contents)</p>
            <p class="hero2">All changes you made will be saved into database with your editorial id. Once it's marked as 'ready for publish', it'll be saved as final data within 24hrs.</p>
        </div>
    </div>
    <div class="editorial-track-action-refresh">
        <div class="icon"></div>
    </div>
    <div class="editorial-track-action-add">
        <div class="icon"></div>
    </div>
    <div class="editorial-track-console">
        <div class="track-console-list-column">
            <div class="item-columns">
                <p class="column-title">Title</p>
                <p class="column-section">Section</p>
                <p class="column-reviewstatus">Status</p>
            </div>
            <div class="column-actions">
                <p class="column-edititem"></p>
            </div>
        </div>
        <div class="track-console-list"></div>
    </div>
    <div class="editorial-track-console-add">
        <div class="console-add-wrapper">
            <div class="console-herotext">
                <p class="hero1">Add item</p>
                <p class="hero2">Make sure your text document edit is made via Google Drive or Dropbox Paper.</p>
            </div>
            <div class="console-add-fields">
                <input type="text" id="consoleadd-title" placeholder="Title" />
                <input type="text" id="consoleadd-section" placeholder="Section (e.g. whattrumpsaid)" />
                <textarea id="consoleadd-content" placeholder="Content (Provide raw JSON, or Dropbox Paper/Google Drive link)" rows="5"></textarea>
            </div>
            <div class="console-add-reviewstatus">
                <div class="reviewstatus-action-pending" banana-id="pending">
                    <p>Pending</p>
                </div>
                <div class="reviewstatus-action-revised" banana-id="revised">
                    <p>Revised</p>
                </div>
                <div class="reviewstatus-action-preapproval" banana-id="preapproval">
                    <p>Submit For Approval</p>
                </div>
                <div class="reviewstatus-action-finalapproval" banana-id="finalapproval">
                    <p>Approved/Ready For Publish</p>
                </div>
            </div>
            <div class="console-add-datatype">
                <div class="datatype-action-jsondata" banana-id="json">
                    <p>Dataset in JSON</p>
                </div>
                <div class="datatype-action-document" banana-id="document">
                    <p>Text Document</p>
                </div>
            </div>
        </div>
        <div class="console-add-action-send">
            <div class="icon"></div>
        </div>
        <div class="console-add-action-cancel">
            <div class="icon"></div>
        </div>
    </div>

    <div class="editorial-track-console-edit">
        <div class="console-edit-wrapper">
            <div class="console-herotext">
                <p class="hero1">Edit item</p>
                <p class="hero2">Updating review status is required! Make sure your text document edit is made via Google Drive or Dropbox Paper.</p>
            </div>
            <div class="console-edit-fields">
                <input type="text" id="consoleedit-title" placeholder="Title" />
                <input type="text" id="consoleedit-section" placeholder="Section (e.g. whattrumpsaid)" />
                <div class="console-edit-editor"></div>
            </div>
            <div class="console-edit-reviewstatus">
                <div class="reviewstatus-action-pending" banana-id="pending">
                    <p>Pending</p>
                </div>
                <div class="reviewstatus-action-revised" banana-id="revised">
                    <p>Revised</p>
                </div>
                <div class="reviewstatus-action-preapproval" banana-id="preapproval">
                    <p>Submit For Approval</p>
                </div>
                <div class="reviewstatus-action-finalapproval" banana-id="finalapproval">
                    <p>Approved/Ready For Publish</p>
                </div>
            </div>

            <div class="console-edit-historylist">
            </div>
        </div>
        <div class="console-edit-action-send">
            <div class="icon"></div>
        </div>
        <div class="console-edit-action-cancel">
            <div class="icon"></div>
        </div>
    </div>
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
    load_trackerdata();
    attach_events();
}

const attach_events = () => {
    document.querySelector('.editorial-track-action-refresh').addEventListener('click', function (e) {
        load_trackerdata();
    });

    document.querySelector('.editorial-track-action-add').addEventListener('click', function (e) {
        document.querySelector('.editorial-track-console-add').classList.add('opened');
    });

    var reviewstatus = document.querySelectorAll('.editorial-track-console-add .console-add-reviewstatus div');
    for (var i=0; i < reviewstatus.length; i++) {
        reviewstatus[i].addEventListener('click', function (e) {
            if (!this.classList.contains('selected')) {
                Array.prototype.forEach.call(document.querySelectorAll('.editorial-track-console-add .console-add-reviewstatus div'), function(el, index, array) {
                    el.classList.remove('selected');
                });
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    }

    var datatype = document.querySelectorAll('.editorial-track-console-add .console-add-datatype div');
    for (var i=0; i < datatype.length; i++) {
        datatype[i].addEventListener('click', function (e) {
            if (!this.classList.contains('selected')) {
                Array.prototype.forEach.call(document.querySelectorAll('.editorial-track-console-add .console-add-datatype div'), function(el, index, array) {
                    el.classList.remove('selected');
                });
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    }

    document.querySelector('.editorial-track-console-add .console-add-action-cancel').addEventListener('click', function (e) {
        document.querySelector('.editorial-track-console-add').classList.remove('opened');
    });

    document.querySelector('.editorial-track-console-add .console-add-action-send').addEventListener('click', function (e) {
        post_trackerdata();
    });

    document.querySelector('.editorial-track-console-edit .console-edit-action-cancel').addEventListener('click', function (e) {
        document.querySelector('.editorial-track-console-edit').classList.remove('opened');
    });

    document.querySelector('.editorial-track-console-edit .console-edit-action-send').addEventListener('click', function (e) {
        update_trackerdata();
    });

    var edit_reviewstatus = document.querySelectorAll('.editorial-track-console-edit .console-edit-reviewstatus div');
    for (var i=0; i < edit_reviewstatus.length; i++) {
        edit_reviewstatus[i].addEventListener('click', function (e) {
            if (!this.classList.contains('selected')) {
                Array.prototype.forEach.call(document.querySelectorAll('.editorial-track-console-edit .console-edit-reviewstatus div'), function(el, index, array) {
                    el.classList.remove('selected');
                });
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    }
}

const post_trackerdata = () => {
    var api_url;
    if (process.env.NODE_ENV == 'dev') {
        api_url = '//localhost:17502/track/article/new';
    } else {
        api_url = '//thisisallabout.com:17502/track/article/new';
    }

    var tracker_reviewstatus = document.querySelector('.editorial-track-console-add .console-add-reviewstatus div.selected').getAttribute('banana-id');

    var api_post_data = {
        "title": document.querySelector('.editorial-track-console-add #consoleadd-title').value,
        "section": document.querySelector('.editorial-track-console-add #consoleadd-section').value,
        "content": document.querySelector('.editorial-track-console-add #consoleadd-content').value,
        "reviewstatus": tracker_reviewstatus
    };

    var api_header = {
        "Content-Type": 'application/json',
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWE5N2VkNjNkMjFlMzJiMTllZTRiN2MyIiwidXNlcm5hbWUiOiJ0b2RkIn0sImlhdCI6MTUxOTkwNjE0NywiZXhwIjoxNTgyOTc4MTQ3fQ.NWZao76TNX5-k8l2ynDa4c2FL9ibAXt3YcwIqzZNSH8"
    };

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    fetch(api_url, {
        method: "POST",
        headers: api_header,
        body: JSON.stringify(api_post_data)
    }).then(r => r.json()).then(function(response) {
        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
        if (response.error) return alert("Unable to post a new article to tracker. ERR_MSG_CODE: " + response.error);

        document.querySelector('.editorial-track-console-add #consoleadd-title').value = '';
        document.querySelector('.editorial-track-console-add #consoleadd-section').value = '';
        document.querySelector('.editorial-track-console-add #consoleadd-content').value = '';
        document.querySelector('.editorial-track-console-add .console-add-reviewstatus div.selected').classList.remove('selected');
        document.querySelector('.editorial-track-console-add').classList.remove('opened');
        load_trackerdata();
    })
    .catch(e => alert("Unable to post a new article to tracker. ERR_MSG_CODE: " + e))
}

const load_trackerdata = () => {
    var api_url;
    if (process.env.NODE_ENV == 'dev') {
        api_url = '//localhost:17502/track/article';
    } else {
        api_url = '//thisisallabout.com:17502/track/article';
    }

    var api_header = {
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWE5N2VkNjNkMjFlMzJiMTllZTRiN2MyIiwidXNlcm5hbWUiOiJ0b2RkIn0sImlhdCI6MTUxOTkwNjE0NywiZXhwIjoxNTgyOTc4MTQ3fQ.NWZao76TNX5-k8l2ynDa4c2FL9ibAXt3YcwIqzZNSH8"
    }

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    fetch(api_url, {
        method: "GET",
        headers: api_header
      }).then(r => r.json()).then(function(response) {
        const data_markup = () => html`
        ${response.length <= 0 ? html`
            <p class="no-track-item">No tracker items yet</p>
        ` : html`
            <ul class="track-items">
                ${response.map((dset) => html`
                <li class="track-item-obj" banana-id="${dset._id}">
                    <div class="item-info">
                        <p class="item-title">${dset.title}</p>
                        <p class="item-section">${dset.section}</p>
                        <p class="item-reviewstatus" banana-id="${dset.reviewstatus}">${dset.reviewstatus}</p>
                    </div>
                    <div class="item-actions">
                        <p class="action-edititem">Edit</p>
                    </div>
                </li>
                `
                )}
            </ul>
        `
        }
        `;

        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
        render(data_markup(), document.querySelector('.editorial-track-console .track-console-list'));
        attach_consolelist_events();
    })
    .catch(e => alert("Unable to load tracker data. ERR_MSG_CODE: " + e))
}

const attach_consolelist_events = () => {
    var trackitem_action_edit = document.querySelectorAll('.editorial-track-console .track-item-obj .action-edititem');
    for (var i=0; i < trackitem_action_edit.length; i++) {
        trackitem_action_edit[i].addEventListener('click', function (e) {
            var itemid = getParents(this, '.track-item-obj')[0].getAttribute('banana-id');
            var api_url;
            if (process.env.NODE_ENV == 'dev') {
                api_url = '//localhost:17502/track/article/' + itemid;
            } else {
                api_url = '//thisisallabout.com:17502/track/article/' + itemid;
            }

            var api_header = {
                "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWE5N2VkNjNkMjFlMzJiMTllZTRiN2MyIiwidXNlcm5hbWUiOiJ0b2RkIn0sImlhdCI6MTUxOTkwNjE0NywiZXhwIjoxNTgyOTc4MTQ3fQ.NWZao76TNX5-k8l2ynDa4c2FL9ibAXt3YcwIqzZNSH8"
            }

            document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
            fetch(api_url, {
                method: "GET",
                headers: api_header
            }).then(r => r.json()).then(function(response) {
                const history_markup = () => html`
                <ul class="console-item-contenthistory">
                ${response.map((dset) => html`
                    <li class="contenthistory-obj">
                        <div class="contents">
                        ${dset.content_history.map((hst) => html`
                            <textarea id="consoleadd-content" placeholder="Content (Provide raw JSON, or Dropbox Paper/Google Drive link)" rows="10" banana-data="${hst}"></textarea>
                        `
                        )} 
                        </div>
                        <div class="edithistory">
                        ${dset.edithistory.map((ehst) => html`
                            <li class="edithistory-item">${ehst}</li>
                        `
                        )} 
                        </div>
                    </li>
                `
                )}
                </ul>
                `;
                document.querySelector('.editorial-track-console-edit #consoleedit-title').value = response[0].title;
                document.querySelector('.editorial-track-console-edit #consoleedit-section').value = response[0].section;
                Array.prototype.forEach.call(document.querySelectorAll('.editorial-track-console-edit .console-edit-reviewstatus div'), function(el, index, array) {
                    el.classList.remove('selected');
                });
                document.querySelector('.editorial-track-console-edit .console-edit-reviewstatus div[banana-id="' + response[0].reviewstatus + '"]').classList.add('selected');

                document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');

                if (response[0].datatype && response[0].datatype == 'json') {
                    var editorelement = document.querySelector('.editorial-track-console-edit .console-edit-editor');
                    while (editorelement.firstChild) {
                        editorelement.removeChild(editorelement.firstChild);
                    }
                    var editorelement = new JSONEditor(element, {});
                    editorelement.set(response[0].content_history[0]);
                } else {
                    const editor_textmarkup = () => html`
                    <textarea id="consoleedit-content" placeholder="Content (Provide raw JSON, or Dropbox Paper/Google Drive link)" rows="5"></textarea>
                    `;
                    render(editor_textmarkup(), document.querySelector('.editorial-track-console-edit .console-edit-editor'));
                    document.querySelector('.editorial-track-console-edit .console-edit-editor textarea').value = response[0].content_history[0];
                }

                //render(history_markup(), document.querySelector('.editorial-track-console-edit .console-edit-historylist'));
                document.querySelector('.editorial-track-console-edit').classList.add('opened');
            });
        });
    }
}

var getParents = function ( elem, selector ) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Setup parents array
    var parents = [];

    // Get matching parent elements
    for ( ; elem && elem !== document; elem = elem.parentNode ) {

        // Add matching parents to array
        if ( selector ) {
            if ( elem.matches( selector ) ) {
                parents.push( elem );
            }
        } else {
            parents.push( elem );
        }

    }

    return parents;

};

