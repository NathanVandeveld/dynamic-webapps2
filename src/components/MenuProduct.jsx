export function MenuProduct(props) {
    const {product} = props;
    const size = product.size &&`(${product.size}cl)`;
    return (
        <div>{product.name}{size} --  {product.price.toFixed(2)} &euro;</div>
    );
}