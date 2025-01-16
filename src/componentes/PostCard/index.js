import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import BotaoPrincipal from '../BotaoPrincipal';

export default function PostCard({post}){
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
            <img
                 className={styles.capa}
                 src={`/assets/posts/${post.id}/capa.png`}
                 alt="imagem de capado post"
            />
            <h2 className= {styles.titulo}>
                        {post.titulo}
            </h2>

            <BotaoPrincipal>Ler </BotaoPrincipal>
        </div>
        </Link>
    
    )

}