const params = new URLSearchParams(window.location.search);

const file = params.get("file");

fetch(file)
    .then(response => response.text())
    .then(markdown => {
        document.getElementById("content").innerHTML =
            marked.parse(markdown);
    });