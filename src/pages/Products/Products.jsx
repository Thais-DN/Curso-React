import axios from "axios";
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
            <h1>olá</h1>
        </div>
    );
}
