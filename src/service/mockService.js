/* Simulacion de la petision al data base */
import products from './../data/data';

function getData (id) {
    return new Promise( resolve => {
        if (id === undefined) {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        } else {
            setTimeout(() => {
                let itemRequested = products.filter( item => item.category === id )
                resolve(itemRequested)
            }, 2000)
        }
        
    });
}

export function getSingleItem (id) {
    return new Promise( resolve => {
        let itemRequested = products.find( item => item.id === Number(id) )

        setTimeout(() => {
            resolve(itemRequested);
        }, 2000);


    });
}
export default getData;