const cep = document.querySelector('#cep');

const showData = (result) => {
    for (const campo in result) {
        console.log(campo, ": ", result[campo]);
        if(document.querySelector("#"+campo)) {
            // console.log(campo);
            document.querySelector("#"+campo).value = result[campo];
        }
    }
}

cep.addEventListener('blur', (e) => {

    let search = cep.value.replace("-", "");

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }

    fetch(`https://viacep.com.br/ws/${cep.value}/json/`, options)
    .then( response => response.json() )
        .then( data => showData(data))
    .catch()
});