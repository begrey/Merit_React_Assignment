import "../../Css/Style.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tbody from "./CartBodyTbody";

function CartBody() {
  const { userId } = useParams();
  const [items, setItem] = useState([]);
  const [total, setPrice] = useState(0);
  useEffect(() => {
    const ApiGet = async () => {
      await axios
        .get(`http://localhost:8080/api/cart/list/${userId}`)
        .then((response) => {
          setItem(response.data.cartViewList);
          setPrice(response.data.total);
        });
    };
    ApiGet();
  }, []);
  return (
    <div className="App">
      <div class="container-fluid bg-secondary mb-5">
        <div
          class="d-flex flex-column align-items-center justify-content-center"
          style={{
            height: "300px",
          }}
        >
          <h1 class="font-weight-semi-bold text-uppercase mb-3">
            Shopping Cart
          </h1>
          <div class="d-inline-flex">
            <p class="m-0">
              <a href="#!">Home</a>
            </p>
            <p class="m-0 px-2">-</p>
            <p class="m-0">장바구니</p>
          </div>
        </div>
      </div>

      <Tbody total={total} carts={items} />
    </div>
  );
}
export default CartBody;
