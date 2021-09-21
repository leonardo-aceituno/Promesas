const desplegar = datos => {
    const lista = document.querySelector('#lista');
    let li;
    datos.forEach((element, index) => {
        if (index < 20) {
            li = document.createElement('li')
            li.innerHTML = element.title
            lista.append(li)
            // console.log(index + 1, element.title);
        }
    });
}


const getDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const response = await fetch(url);
        const datos = await response.json();

        desplegar(datos)
    } catch (err) {
        console.log(err);
    }
}



const funcion01 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('*** Información Enviada ***')
        }, 2000)
    })
}
const funcion02 = async () => {
    getDatos()
    const resp = await funcion01();
    console.log(resp)
    document.getElementById('resultado').innerHTML = resp

}
funcion02();