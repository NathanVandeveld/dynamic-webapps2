import {MenuProduct} from "./MenuProduct.jsx";

export function MenuCard(props) {
    const {products} = props;
    return (<div>
        <h1>Menu</h1>
        <MenuProduct product={products[0]}/>
        <MenuProduct product={products[1]}/>
        <MenuProduct product={products[2]}/>
        <MenuProduct product={products[3]}/>

    </div>);
}