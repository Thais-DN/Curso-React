import { useEffect, useState } from "react";
import httpClient from "../../axios";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(function () {
        httpClient.get("products").then(function (response) {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            {products.map(function (product) {
                return <span key={product.id}>{product.name}</span>;
            })}
        </div>
    );
}
