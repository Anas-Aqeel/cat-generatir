function create() {
    var div = document.getElementById("generate")
    var url = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.insertAdjacentHTML("afterbegin",`<img src=${url} class=''>`)
}