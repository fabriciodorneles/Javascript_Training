var xhr = new XMLHttpRequest;

xhr.open('GET', 'https://api.github.com/users/fabriciodorneles');
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {   // 4 é o código de quanto a variável voltou pra gente
        console.log(JSON.parse(xhr.responseText));
    }
}