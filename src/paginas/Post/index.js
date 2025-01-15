import './post.css'
import { useParams } from "react-router-dom"
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";



export default function Post(){

const parametros =useParams();
 const post =posts.find((post)=>{
 return post.id === Number(parametros.id);

 })

return (
   <PostModelo
   fotoCapa={`/assets/posts/${post.id}/capa.png`}
   titulo={post.titulo}
>
        <div className="post-markdown-container">
        <reactMarkdown>
        {post.texto}
        </reactMarkdown>
        </div>

        </PostModelo>   
)
}
