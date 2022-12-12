import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, getDoc, where, query, addDoc } from "firebase/firestore";
// import products from "../data/data";

const firebaseConfig = {
  apiKey: "AIzaSyAyfXEOQ9D4Pa3bjhJzkPvl-WaV_0mxFpI",
  authDomain: "baratito-4739d.firebaseapp.com",
  projectId: "baratito-4739d",
  storageBucket: "baratito-4739d.appspot.com",
  messagingSenderId: "967054344057",
  appId: "1:967054344057:web:dd92639675b0b9e027f9a8"
};

const app = initializeApp(firebaseConfig);
// 0. inicializa firebase
const DB = getFirestore(app);
// 1. Traer todos los documentos
export async function getData() {
  const collectionProductsRef = collection(DB, 'products');
  const documentsSnapshot = await getDocs(collectionProductsRef);

  const documentData = documentsSnapshot.docs.map(doc => {
    let docDataWithId = doc.data();
    docDataWithId.id = doc.id;
    return docDataWithId;
  })

  return documentData;
}
// 2. Traer un ducumento segun el id
export async function getDataById(idParam) {
  const docRef = doc(DB, 'products', idParam);
  const docSnapshot = await getDoc(docRef);
  return {
    ...docSnapshot.data(),
    id: docSnapshot.id
  }
}
// 3. Traer los documentos segun la categoría
export async function getDocumentByCategory(categoryParam) {
  const collectionFilteredProductsRef = collection(DB, 'products');
  const queryCategory = query(collectionFilteredProductsRef, where('category', '==', categoryParam));

  const documentsSnapshot = await getDocs(queryCategory);

  const documentData = documentsSnapshot.docs.map(doc => {
    let docDataWithId = doc.data();
    docDataWithId.id = doc.id;
    return docDataWithId;
  })

  return documentData;

}

// Envio de orden de compra a FireBase
export async function postOrder(orderData) {
  const collectionRef = collection(DB, 'orders');
  const docOrder = await addDoc(collectionRef, orderData);
  return docOrder.id;
}


/* ------------------------------------------------------------------------------------------------ */


// Funcion para realizar la busqueda en el input del navBar. No la pude resolver. Me queda pendiente para la semana.

/* export function getSearchItems(keyword) {
  keyword = keyword.trim().toLowerCase();
  
  return new Promise((resolve) => {
    setTimeout(() => {
      if (keyword.length === 0) {
        resolve(getData());
      } else {
        let dataBase = getData()
        let itemsRequested = dataBase.filter((item) =>
        item.title.toLowerCase().includes(keyword)
        );
        resolve(itemsRequested);
      }
    }, 1000);
  });
} */


/* ------------------------------------------------------------------------------------------------ */


// Funcion para subir datos a FireBase desde un array

/* export async function postProducts() {
  const collectionRef = collection(DB, 'products');

  for (let item of products) {
    let docOrder = await addDoc(collectionRef, item);
    console.log('documento creado, Id:', docOrder.id);
  }
}
 */