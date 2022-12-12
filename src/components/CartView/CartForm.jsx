import { useState } from "react";
import CartFormInput from './CartFormInput';

export default function CartForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    reEmail: "",
    phone: "",
    adress: ""
  });

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    // dynamic properties
    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(data);
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <form onSubmit={onSubmit}>
        <CartFormInput value={data.name} name={'name'} type={'text'} onChange={onInputChange} title={'Nombre'} />
        <CartFormInput value={data.email} name={'email'} type={'email'} onChange={onInputChange} title={'Email'} />
        <CartFormInput value={data.reEmail} name={'reEmail'} type={'email'} onChange={onInputChange} title={'Confirmar email'} />
        {data.email !== data.reEmail&& <small style={{color: 'red'}}>El email ingresado no coincide</small>}
        <CartFormInput value={data.phone} name={'phone'} type={'phone'} onChange={onInputChange} title={'Telefono'} />
        <CartFormInput value={data.adress} name={'adress'} type={'text'} onChange={onInputChange} title={'Dirección'} />
        <br />
        <button
          disabled={data.name === "" || data.phone === "" || data.email === "" || data.adress === "" || data.email !== data.reEmail }
          type="submit"
          className="btn btn-success m-1"
        >
          Finalizar Compra
        </button>
      </form>
    </div>
  );
}