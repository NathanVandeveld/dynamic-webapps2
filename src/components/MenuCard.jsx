import {MenuProduct} from "./MenuProduct.jsx";

export function MenuCard(props) {
    const {products} = props;
    return (<div>
        <h1>Menu</h1>
        {products.map(product =><MenuProduct key={product.id} product={product}/>) }


    </div>);
}