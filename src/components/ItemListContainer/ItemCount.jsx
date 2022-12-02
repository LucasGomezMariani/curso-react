import { useState } from "react";

export default function ItemCount({ inicio, stock, onAddToCart }) {
  let [count, setCount] = useState(inicio);

  function handgleSuma() {
    if (count < stock) setCount(count + 1);
  }
  function handgleResta() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button onClick={handgleResta} className="btn btn-primary m-2">-</button>
      <span>{count}</span>
      <button onClick={handgleSuma} className="btn btn-primary m-2">+</button>
      <br />
      {/* 3° agregamos un ocClick con el evento recibido por Props */}
      <button onClick={() => onAddToCart(count)} className="btn btn-primary m-2">Agregar al carrito</button>
    </div>
  );
}

