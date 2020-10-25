//tudo aqui é pra isso, cria uma promise e faz a mesma coisa de antes, só que passando
// o resultado para o resolve da promise
var myPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/fabriciodorneles');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição')
                }
            }
        }

    })
}

myPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });