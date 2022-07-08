import {
  FaLaughWink,
  FaUser,
  FaBox,
  FaClipboardCheck,
  FaTicketAlt,
  FaExclamationCircle,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function AdminNav() {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div>
        <Link
          to="/"
          class="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <FaLaughWink />
          </div>
          <div class="sidebar-brand-text">MetaShop</div>
        </Link>
        <div
          style={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "800",
            color: "#FFFFFF",
          }}
        >
          관리자 페이지
        </div>
      </div>

      <div class="sidebar-heading">MENU</div>

      <li class="nav-item">
        <a class="nav-link" type="button">
          <FaUser />
          <span>회원 관리</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" type="button">
          <FaBox />
          <span>상품 관리</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" type="button">
          <FaClipboardCheck />
          <span>주문 관리</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" type="button">
          <FaTicketAlt></FaTicketAlt>
          <span>쿠폰 관리</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" type="button">
          <FaExclamationCircle />
          <span>공지사항</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" type="button">
          <FaQuestionCircle />
          <span>문의사항</span>
        </a>
      </li>
    </ul>
  );
}
export default AdminNav;
