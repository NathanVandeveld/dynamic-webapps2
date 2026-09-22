import {MenuProduct} from "./MenuProduct.jsx";

export function MenuCard() {
    return (<div>
            <h1>Menu</h1>
            <MenuProduct productName="cola" productPrice="1"/>
            <MenuProduct productName="water" productPrice="1"/>
            <MenuProduct productName="bier" productPrice="2"/>
            <MenuProduct productName="wijn" productPrice="3"/>
        </div>);
}