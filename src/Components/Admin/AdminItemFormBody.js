function AdminItemFormBody() {
  function notReady() {
    alert("개발 예정중인 서비스입니다.");
  }
  return (
    <div class="contents">
      <div>
        <div class="title">
          <span class="brd_rtop mgb10"></span>
        </div>
        <form
          action="/admin/newItem"
          method="post"
          enctype="multipart/form-data"
        >
          <table class="brd_detail">
            <colgroup>
              <col width="25%" />
              <col width="75%" />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  상품 이름 <img src="/images/mone/star.gif" alt="" />
                </th>
                <td>
                  <input
                    name="name"
                    type="text"
                    class=""
                    style={{
                      width: "200",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  카테고리 <img src="/images/mone/star.gif" alt="" />
                </th>
                <td>
                  <select name="category">
                    <option>Select Item</option>
                    <option>페이스</option>
                    <option>립</option>
                    <option>아이</option>
                    <option>치크</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>가격</th>
                <td>
                  <input
                    name="price"
                    type="text"
                    class=""
                    style={{
                      width: "200",
                    }}
                  />
                </td>
              </tr>

              <tr>
                <th>상품설명</th>
                <td>
                  <textarea name="description" cols="50" rows="10"></textarea>
                </td>
              </tr>

              <tr>
                <th>판매상태</th>
                <td>
                  <select
                    name="status"
                    style={{
                      width: "200",
                    }}
                  >
                    <option>Select Item</option>
                    <option>SELL</option>
                  </select>
                </td>
              </tr>
              <tr id="box">
                <th>옵션 별 수량 추가</th>
                <td>
                  <input type="button" value="추가" />
                </td>
              </tr>
              <tr id="imgbox">
                <th>사진</th>
                <td>
                  <input
                    type="button"
                    value="추가"
                    onClick="add_imgbox()"
                    // style="height: 28px;"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div class="brd_btn">
            <span class="right">
              <input
                type="button"
                class="btn_submit"
                value="등록"
                onClick={() => {
                  notReady();
                }}
              />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AdminItemFormBody;
