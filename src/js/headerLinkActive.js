var currPage = document.location.href;
currPage = '.' + currPage.slice(currPage.lastIndexOf('/'));

var links = document.getElementsByClassName("link_main-header");

for (let i = 0; i < links.length; i++) {
    if (currPage === links[i].getAttribute('href')) {
        links[i].className += ' link_active';
    }
}
