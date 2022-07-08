import AdminBody from "./AdminBody";
import AdminFooter from "./AdminFooter";
import AdminNav from "./AdminNav";
import "../../Css/sb-admin-2.min.css";
import AdminTop from "./AdminTop";
import AdminDetail from "./AdminDetail";

function AdminDetailPage() {
  return (
    <div id="wrapper" className="App">
      <AdminNav />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <AdminTop />
          <AdminDetail />
        </div>
        <AdminFooter />
      </div>
    </div>
  );
}
export default AdminDetailPage;
