export default function Header() {
  return (
    <div>
        <h1>Header</h1>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bài 2: Component</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a>Trang chủ</a>
                    </li>
                    <li className="active">
                        <a >Danh mục sản phẩm</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
