import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../Css/adminBody.css";
import AdminTbody from "./AdminTbody";
import { Link } from "react-router-dom";
function AdminBody() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const ApiGet = async () => {
      let data = await axios
        .get(`http://localhost:8080/api/item/admin/itemList`)
        .then((response) => {
          return response.data;
        });
      setItem(data);
    };
    ApiGet();
  }, []);

  return (
    <div className="App">
      <div id="commonField">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 text-center mb-3">
              <h2 class="heading-section">상품 관리</h2>
            </div>
          </div>
          <div class="title">
            <span
              class="brd_rtop mgb10"
              style={{
                float: "right",
              }}
            >
              <span class="btn_submit">
                <Link to="/admin/itemForm">상품 추가</Link>
              </span>
            </span>
          </div>
          <form class="input-group" method="get">
            <input
              type="text"
              name="keyword"
              class="form-control col-md-6 mb-3 bg-white border-0 small"
              placeholder="찾고자 하는 상품 이름 입력"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append mb-3">
              <button class="btn btn-primary" type="submit">
                <FaSearch />
              </button>
            </div>
          </form>
          <div class="row">
            <div class="col-md-12">
              <div class="table-wrap">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th
                        style={{
                          backgroundColor: "#2e59d9",
                        }}
                      >
                        ID
                      </th>
                      <th
                        style={{
                          backgroundColor: "#2e59d9",
                        }}
                      >
                        대표사진
                      </th>
                      <th
                        style={{
                          backgroundColor: "#2e59d9",
                        }}
                      >
                        상품이름
                      </th>
                      <th
                        style={{
                          backgroundColor: "#2e59d9",
                        }}
                      >
                        카테고리
                      </th>
                      <th
                        style={{
                          backgroundColor: "#2e59d9",
                        }}
                      >
                        정보조회
                      </th>
                    </tr>
                  </thead>
                  <AdminTbody items={item} />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminBody;
