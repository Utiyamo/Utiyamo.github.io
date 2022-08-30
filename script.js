$(document).ready(() => {
    let presentation = $("#presentation");
    let about = $("#aboutme");
    let works = $("#works");
    $("#homeMenu").on("click", () => {
        presentation.css("display", "block");
        about.css("display", "none");
        works.css("display", "none");
    });

    $("#aboutmeMenu").on("click", () => {
        presentation.css("display", "none");
        about.css("display", "block");
        works.css("display", "none");
    });

    $("#workMenu").on("click", () => {
        presentation.css("display", "none");
        about.css("display", "none");
        works.css("display", "block");
    });

    presentation.css("display", "block");
    about.css("display", "none");
    works.css("display", "none");

    $("#idadeatual").append(getAge('02/20/1998'));
});

function getAge(date){
    var today = new Date();
    var birthday = new Date(date);
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if(m < 0 || (m === 0 && today.getDate() < birthday.getDate())){
        age--;
    }
    console.log(age);
    return age;
}