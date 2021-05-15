function preview() {
    const s = document.getElementById('editor').value;
    console.log(s);
    document.getElementById('preview').innerHTML = marked(s);
}

window.onload = function() {
    preview();
}

document.getElementById('editor').oninput = function() {
    preview();
}