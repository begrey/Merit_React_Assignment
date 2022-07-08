import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../../Css/Main.module.css";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function SearchBody(props) {
  const { keyword } = useParams();
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ApiGet = async () => {
      let data = await axios
        .get(`http://localhost:8080/api/search/${keyword}`)
        .then((response) => {
          return response.data;
        });
      setItem(data);
      console.log(data);
    };
    ApiGet();
  }, [keyword]);
  function notReady() {
    alert("개발 예정중인 서비스입니다.");
  }
  const cartClick = async (key) => {
    try {
      const response = await axios
        .post(`http://localhost:8080/api/cart/1`, {
          itemId: key,
          itemOptionId: key + 1,
          count: 1,
        })
        .then((response) => {
          alert("장바구니 담기 완료.");
          navigate("/cart/1");
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.commonField}>
        <div className={styles.title}>
          <strong
            style={{
              color: "#D19C97",
              fontSize: "35px",
              textAlign: "left",
            }}
          >
            {keyword}
          </strong>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            {item.map((item) => (
              <div className={styles.div}>
                <div key={item.id}>
                  <div className={styles.card_header}>
                    <img
                      className={styles.img}
                      alt="상품1"
                      src={"http://localhost:8080" + item.imgUrl}
                    ></img>
                  </div>
                  <div className={styles.card_body}>
                    <h6 className={styles.h6}>{item.itemName}</h6>
                    <h6 className={styles.h6}>{item.price}원</h6>
                  </div>
                  <div className={styles.card_footer}>
                    <a
                      href="#!"
                      onClick={() => {
                        notReady();
                      }}
                    >
                      <FaEye className={styles.icon} />
                      View
                    </a>
                    <a
                      href="#!"
                      onClick={() => {
                        cartClick(item.id);
                      }}
                    >
                      <FaShoppingCart className={styles.icon} />
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SearchBody;
