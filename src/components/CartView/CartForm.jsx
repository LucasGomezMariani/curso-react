import { useState } from "react";
import CartFormInput from './CartFormInput';

export default function CartForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    adress:""
  });

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    // dynamic properties
    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
    console.log(data);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(evt, data);
  }

  return (
    <form onSubmit={onSubmit}>
      <CartFormInput value={data.name} name={'name'} type={'text'} onChange={onInputChange} title={'Nombre'} />
      <CartFormInput value={data.email} name={'email'} type={'email'} onChange={onInputChange} title={'Email'} />
      <CartFormInput value={data.phone} name={'phone'} type={'phone'} onChange={onInputChange} title={'Telefono'} />
      <CartFormInput value={data.adress} name={'adress'} type={'text'} onChange={onInputChange} title={'Dirección'} />
      <button
        disabled={data.name === "" || data.phone === "" || data.email === ""}
        type="submit"
      >
        Finalizar Compra
      </button>
    </form>
  );
}