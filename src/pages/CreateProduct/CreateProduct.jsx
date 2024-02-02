import { useState } from "react";
import Input from "../../components/Input/Input";
import "./CreateProduct.css";
import httpClient from "../../axios";

function CreateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [imgSrc, setimgSrc] = useState("");

    function onNameChangelHandler(event) {
        setName(event.target.value);
    }
    function onPriceChangelHandler(event) {
        setPrice(event.target.value);
    }
    function onImgSrcChangelHandler(event) {
        setimgSrc(event.target.value);
    }

    async function onSubmitHandler(event) {
        event.preventDefault();
        try {
            const body = { name, price, imgSrc };
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            };

            const response = await httpClient.post("/products", body, config);
            console.log(response);
            alert("Produto cadastrado com sucesso");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="createProduct-container">
                <form className="createProduct-form" onSubmit={onSubmitHandler}>
                    <Input
                        label="Nome"
                        inputValue={name}
                        onChange={onNameChangelHandler}
                    />
                    <Input
                        type="number"
                        label="Preço"
                        inputValue={price}
                        onChange={onPriceChangelHandler}
                    />
                    <Input
                        label="Imagem"
                        inputValue={imgSrc}
                        onChange={onImgSrcChangelHandler}
                    />
                    <button className="bt-form" type="submit">
                        Criar
                    </button>
                </form>
            </div>
        </>
    );
}

export default CreateProduct;
