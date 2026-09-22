export function MenuProduct(props) {
    const {productName,productPrice} = props;
    return (
        <div>{productName} {productPrice} €</div>
    );
}