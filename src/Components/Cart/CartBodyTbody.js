import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CartBody from "./CartBody";

function Tbody({ carts }, { total }) {
  const [items, setItem] = useState([]);
  const [totalPrice, setTotal] = useState(total);
  const [ship, setShip] = useState(3000);
  const navigate = useNavigate();
  useEffect(() => {
    setItem(carts);
    let t = 0;
    carts.map((obj) => {
      t += obj.price;
    });
    setTotal(t);
    if (totalPrice > 50000) setShip(0);
  }, [carts]);
  const deleteCart = async (cartId, itemId) => {
    try {
      let t = 0;
      carts.map((obj) => {
        if (obj.cartId == cartId) t += obj.price * obj.count;
      });
      const response = await axios
        .get(`http://localhost:8080/api/cart/delete/${cartId}`)
        .then((response) => {
          alert("삭제완료");
          setItem(items.filter((item) => item.cartId !== cartId));
          setTotal(totalPrice - t);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const plusCart = (key, flag) => {
    setItem((current) =>
      current.map((obj) => {
        if (obj.cartId === key) {
          if (flag == 1) {
            obj.count += 1;
            obj.perPrice += obj.price;
            setTotal((current) => current + obj.price);
          } else if (obj.count > 1) {
            obj.count -= 1;
            obj.perPrice -= obj.price;
            setTotal((current) => current - obj.price);
          }
        }
        return obj;
      })
    );
    if (totalPrice + carts[0].price > 50000) setShip(0);
  };
  return (
    <div class="container-fluid pt-5">
      <div class="row px-xl-5">
        <div class="col-lg-8 table-responsive mb-5">
          <table class="table table-bordered text-center mb-0">
            <thead class="bg-secondary text-dark">
              <tr>
                <th>상품</th>
                <th>상품 옵션</th>
                <th>판매가</th>
                <th>수량</th>
                <th>구매가</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              {items.map((cart) => {
                return (
                  <tr key={cart.cartId}>
                    <td class="align-middle">
                      <img
                        src={"http://localhost:8080" + cart.imgUrl}
                        alt=""
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                      {cart.itemName}
                    </td>
                    <td class="align-middle">{cart.optionName}</td>
                    <td class="align-middle ">{cart.price}</td>
                    <td
                      class="align-middle"
                      value="여기"
                      style={{
                        width: "120px",
                      }}
                    >
                      <div class="input-group quantity mx-auto">
                        <div class="input-group-btn">
                          <button
                            class="btn btn-sm btn-primary btn-minus"
                            onClick={() => {
                              plusCart(cart.cartId, -1);
                            }}
                          >
                            <FaMinus />
                          </button>
                        </div>
                        <input
                          type="text"
                          class="form-control form-control-sm bg-secondary text-center cartCount"
                          text={cart.count}
                          value={cart.count}
                          readOnly
                        />
                        <div class="input-group-btn plz">
                          <button
                            class="btn btn-sm btn-primary btn-plus"
                            onClick={() => {
                              plusCart(cart.cartId, 1);
                            }}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle cartPrice">{cart.perPrice}</td>
                    <td class="align-middle">
                      <button
                        type="button"
                        class="btn btn-sm btn-primary"
                        aria-label="Close"
                        onClick={() => {
                          deleteCart(cart.cartId, cart.itemId);
                        }}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div class="col-lg-4">
          <div class="card border-secondary mb-5">
            <div class="card-header bg-secondary border-0">
              <h4 class="font-weight-semi-bold m-0">Cart Summary</h4>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3 pt-1">
                <h6 class="font-weight-medium">총 판매 금액</h6>
                <h6 class="font-weight-medium">{totalPrice} 원</h6>
              </div>
              <div class="d-flex justify-content-between">
                <h6 class="font-weight-medium">배송비</h6>
                <h6 class="font-weight-medium">{ship} 원</h6>
              </div>
            </div>
            <div class="card-footer border-secondary bg-transparent">
              <div class="d-flex justify-content-between mt-2">
                <h5 class="font-weight-bold">총 예상 결제 금액</h5>
                <h5 class="font-weight-bold">{totalPrice + ship} 원</h5>
              </div>
              <div id="orderBtn">
                <button class="btn btn-block btn-primary my-3 py-3">
                  주문하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tbody;
