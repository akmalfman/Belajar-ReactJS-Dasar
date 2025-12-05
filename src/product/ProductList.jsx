import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
    const [product, setProduct] = useState([]);
    const [load, setLoad] = useState(false);

    function handleClick() {
        setLoad(true);
    }

    // useEffect(() => {
    //     console.info("Effect with empty array");
    // }, []);

    // useEffect(() => {
    //     console.info("hel")
    //     if (load) {
    //         fetch("/product.json")
    //             .then((response) => response.json())
    //             .then((data) => setProduct(data));
    //     }

    //     return () => {
    //         console.info("unmounted")
    //     }
    // }, [load]);

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch("/product.json");
            const data = await response.json();
            setProduct(data);
        }

        if (load) {
            fetchProduct;
        }

        return () => {
            console.info("unmounted")
        }

    }, [load]);

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Product</button>
            {product.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    )
}