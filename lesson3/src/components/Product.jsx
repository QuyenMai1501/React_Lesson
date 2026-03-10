function onAddToCart(text) {
  alert(text);
}

function Product(props) {
  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="thumbnail">
        <img alt={props.name} src={props.image} />
        <div className="caption">
          <h3>Hãng: {props.children}</h3>
          <p>{props.price} VNĐ</p>
          <p>
            <a
              href="http://localhost:5173/"
              className="btn btn-primary"
              onClick={() => onAddToCart(props.children)}>
              Action
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
