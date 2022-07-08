import "../../Css/Header.css";
import styles from "../../Css/Header.module.css";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }
  function imgClick(e) {
    if (text === "") {
      alert(" 검색어를 입력해주세요!");
      return;
    } else {
      navigate(`/search/${text}`);
    }
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      if (text === "") {
        alert(" 검색어를 입력해주세요!");
        return;
      } else {
        navigate(`/search/${text}`);
      }
    }
  }
  function logoClick(e) {
    navigate("/");
  }

  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.loginBar_left}>
          <Link to="/admin">관리자 페이지</Link>
        </div>
        <div className={styles.loginBar_right}>
          <p>반갑습니다, 관리자님!</p>
        </div>
      </div>
      <div className={styles.search_sec}>
        <h1 className={styles.search_sec_logo} onClick={logoClick}>
          <span
            style={{
              color: "#D19C89",
              fontWeight: "900",
              paddingRight: "5px",
            }}
          >
            Meta
          </span>
          Shop
        </h1>
        <div className={styles.search_sec_search}>
          <input
            className={styles.search_sec_input}
            type="text"
            value={text}
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder="상품명을 검색하세요."
          ></input>
          <div className={styles.search_sec_icon} onClick={imgClick}>
            <FaSearch />
          </div>
        </div>
      </div>
      <div className={styles.nav}>
        <Link to="/items/all" className={styles.nav_aClass}>
          전체
        </Link>
        <Link to="/items/face" className={styles.nav_aClass}>
          페이스
        </Link>
        <Link to="/items/lip" className={styles.nav_aClass}>
          립
        </Link>
        <Link to="/items/eye" className={styles.nav_aClass}>
          아이
        </Link>
        <Link to="/items/cheek" className={styles.nav_aClass}>
          치크
        </Link>
      </div>
    </div>
  );
}
export default Header;
