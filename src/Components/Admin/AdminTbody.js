function AdminTbody({ items }) {
  function notReady() {
    alert("개발 예정중인 서비스입니다.");
  }
  return (
    <tbody>
      {items.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <img
                width="100"
                height="100"
                alt=""
                src={"http://localhost:8080" + item.imgUrl}
              />
            </td>
            <td>{item.itemName}</td>
            <td>{item.categoryName}</td>
            <td>
              <span
                class="btn_submit"
                onClick={() => {
                  notReady();
                }}
              >
                <a>조회</a>
              </span>
              {/* <span class="btn_delete">
                <a>삭제</a>
              </span> */}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default AdminTbody;
