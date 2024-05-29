import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function Productpage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://9e256eee-6f6b-45d2-b2bc-2079928fb7b3.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        console.log(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  if (product === null) {
    return <h1>currently uploading</h1>;
  }
  return (
    <div>
      <div id="image-box">
        <img src={product.image}></img>
      </div>
      <div id="profile">
        <img src="/images/icons/avatar.png"></img>
        <span>{product.seller}</span>
      </div>
      <div id="content">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}won </div>
        <div id="date">2022.12.07</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}
export default Productpage;
