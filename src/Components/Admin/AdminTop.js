import { FaUser } from "react-icons/fa";
function AdminTop() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown no-arrow">
            <a
              class="nav-link dropdown-toggle"
              href="#!"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="mr-2 d-none d-lg-inline text-gray-600 font-weight-bold">
                <FaUser />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default AdminTop;
