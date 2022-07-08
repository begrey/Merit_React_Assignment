function AdminDetail() {
  return (
    <div className="App">
      <div id="container">
        <div class="contents">
          <div class="title">
            <span class="brd_rtop mgb10">
              <span class="btn_submit">
                <a href="#">목록</a>
              </span>
            </span>
          </div>

          <form
            action="/admin/updateItem"
            method="post"
            enctype="multipart/form-data"
          >
            <table class="brd_detail">
              <caption>Manager Update</caption>
              <colgroup>
                <col width="25%" />
                <col width="75%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>상품 번호 </th>
                  <td>
                    <input
                      type="hidden"
                      name="itemId"
                      value="${itemFormDto.itemId}"
                    />
                    <p id="itemId" text="${itemFormDto.itemId}" />
                  </td>
                </tr>
                <tr>
                  <th>
                    상품 이름 <img src="/images/mone/star.gif" alt="" />
                  </th>
                  <td>
                    <input
                      name="name"
                      type="text"
                      class=""
                      value="${itemFormDto.name}"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    category <img src="/images/mone/star.gif" alt="" />
                  </th>
                  <td>
                    <select name="category" style="width:200px;">
                      <option text="${itemFormDto.category}"></option>
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
                      value="${itemFormDto.price}"
                      style="width: 200px"
                    />
                  </td>
                </tr>

                <tr>
                  <th>상품설명</th>
                  <td>
                    <textarea
                      name="description"
                      cols="50"
                      rows="10"
                      text="${itemFormDto.description}"
                    ></textarea>
                  </td>
                </tr>

                <tr>
                  <th>판매상태</th>
                  <td>
                    <select name="status" style="width:200px;">
                      <option text="${itemFormDto.status}">Select Item</option>
                      <option>SOLD_OUT</option>
                      <option>SELL</option>
                      <option>PREPARE</option>
                    </select>
                  </td>
                </tr>
                <tr id="box">
                  <th>옵션 별 수량 추가</th>
                  <td>
                    <input type="button" value="추가" onclick="add_textbox()" />
                  </td>
                </tr>
                <tr each="option:${itemFormDto.options}">
                  <th>옵션 별 수량 추가</th>
                  <td>
                    <input
                      type="hidden"
                      name="itemOptionId"
                      value="${option?.itemOptionId}"
                    />
                    <input
                      type="text"
                      name="optionName"
                      value="${option?.optionName}"
                      class="optionName"
                    />
                    <input
                      type="text"
                      name="quantity"
                      value="${option?.quantity}"
                      class="quantity"
                    />
                    <input
                      type="button"
                      value="삭제"
                      onclick="opt_remove(this)"
                    />
                  </td>
                </tr>
                <tr id="imgbox">
                  <th>사진</th>
                  <td>
                    <input
                      type="button"
                      value="추가"
                      onclick="add_imgbox()"
                      style="height: 28px;"
                    />
                  </td>
                </tr>
                <tr each="itemImg : ${itemImgDto}">
                  <th>사진</th>
                  <td>
                    <input
                      type="hidden"
                      name="itemImgId"
                      value="${itemImg.itemImgId}"
                    />
                    <img
                      if="${not #strings.isEmpty(itemImg.imgUrl)}"
                      src="${itemImg.imgUrl}"
                      class="rounded mgb-15"
                      width="80"
                    />
                    <input
                      type="button"
                      value="삭제"
                      onclick="img_remove(this)"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="brd_btn">
              <span class="right">
                <input
                  type="submit"
                  class="btn_submit"
                  value="수정"
                  style="height: 30px"
                />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AdminDetail;
