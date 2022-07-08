import styles from "../../Css/Footer.module.css";
//import { FaEye, FaShoppingCart } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.row_logo}>
        <div className={styles.div_logo}>
          <h1 className={styles.h1}>
            <span
              style={{
                color: "#D19C89",
                fontWeight: "900",
              }}
            >
              Meta
            </span>
            Shop
          </h1>
          <p>권지민 인턴</p>
          <p>서울, 대한민국</p>
          <p>+8210 7997 9836</p>
        </div>
      </div>
      <div className={styles.row_copyright}>
        <div className={styles.div_copyright}>
          <p>&copy; Metanet_Tplatform</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
