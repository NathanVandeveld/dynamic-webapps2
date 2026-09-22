export function MenuProduct(props) {
    const {product} = props;
    return (
        <div>{product.name} {product.price} &euro;</div>
    );
}