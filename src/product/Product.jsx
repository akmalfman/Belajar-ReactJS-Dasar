export default function ({ product }) {
    return (
        <div>
            <h2>{product.id} : {product.name}</h2>
            <p>Harga : {product.price}</p>
        </div>
    )
}