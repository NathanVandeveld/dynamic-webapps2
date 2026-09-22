import {MenuProduct} from "./MenuProduct.jsx";
import {PRODUCTS_DATA} from "../data/data.jsx";

export function MenuCard() {
    return (<div>
            <h1>Menu</h1>
            <MenuProduct product={PRODUCTS_DATA[0]}/>
        <MenuProduct product={PRODUCTS_DATA[1]}/>
        <MenuProduct product={PRODUCTS_DATA[2]}/>
        <MenuProduct product={PRODUCTS_DATA[3]}/>

        </div>);
}