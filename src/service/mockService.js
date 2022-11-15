/* Simulacion de la petision al data base */
import products from './../data/data';

function getData () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export function getSingleItem (idParams) {
    return new Promise((resolve) => {
        let itemRequested = products.find( (item) => item.is === Number(idParams) )

        setTimeout(() => {
            resolve(itemRequested);
        }, 2000);


    });
}
export default getData;