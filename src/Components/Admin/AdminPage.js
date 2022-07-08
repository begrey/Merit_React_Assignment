import AdminBody from "./AdminBody";
import AdminFooter from "./AdminFooter";
import AdminNav from "./AdminNav";
import "../../Css/sb-admin-2.min.css";
import AdminTop from "./AdminTop";

function AdminPage() {
  return (
    <div id="wrapper" className="App">
      <AdminNav />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <AdminTop />
          <AdminBody />
        </div>
        <AdminFooter />
      </div>
    </div>
  );
}
export default AdminPage;
