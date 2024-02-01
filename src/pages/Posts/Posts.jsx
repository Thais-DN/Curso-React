import { useParams } from "react-router-dom";

export default function Posts() {
    const params = useParams();

    return (
        <div>
            <h1>Posts</h1>
            <p>O id do posts é: {params.postId} </p>
        </div>
    );
}
