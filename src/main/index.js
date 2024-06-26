import "./style.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://9e256eee-6f6b-45d2-b2bc-2079928fb7b3.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }, []);
  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" />
      </div>
      <h1>Products</h1>
      <div id="product_list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link className="productLink" to={`/products/${product.id}`}>
                <div>
                  <img className="product-img" src={product.image} />
                </div>
                <div>
                  <div className="product-content">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img className="icon" src="images/icons/avatar.png" />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MainPage;
