const cep = document.querySelector('#cep');

const showData = (result) => {
    for (const campo in result) {
        const exists = document.querySelector("#"+campo);
        if(exists) exists.value = result[campo];
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
    .catch(error => {
        alert(error);
    });
});