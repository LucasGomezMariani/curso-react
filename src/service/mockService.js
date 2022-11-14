/* Simulacion de la petision al data base */
import products from './../data/data';

function getData () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export default getData;