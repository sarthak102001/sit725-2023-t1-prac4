const cardList = [{
    title: 'cat 2',
    path: 'images/kangooroo-1.jpg',
    link: 'About kangooroo 2',
    description: 'Description of kangooroo 2'
},
{
    title: 'cat 3',
    path: 'images/kangooroo-2.jpg',
    link: 'About kangooroo 3',
    description: 'Description of kangooroo 3'
}];




const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.path + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}




const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        formSumitted();
    });
    $('#clickMeButton').click(() => {
        clickMe();
    });
    addCards(cardList);
    $('.modal').modal();
});