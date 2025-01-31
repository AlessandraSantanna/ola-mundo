import { useNavigate } from 'react-router-dom';
import BotaoPrincipal from '../../componentes/BotaoPrincipal';
import styles from './NaoEncontrado.module.css'
import erro404 from 'assets/erro_404.png'


export default function NaoEncontrado(){
      const navegar = useNavigate();
    return(
        <> 
        <div className={styles.conteudoContainer}>

        <span className={styles.texto404}>404 </span>

            <h1 className={styles.titulo}> 
                Ops! Página não encontrada!
            </h1>
       
            <p className={styles.paragrafo}>
                Tem certeza que era isso que estava procurando?
            </p>
            <p className={styles.paragrafo}>
              Aguarde e recarregue a página
            </p>

            <div 
            className={styles.botaoContainer}
                onClick={()=>navegar (-1)}
            >
               <BotaoPrincipal tamanho="lg">
                Voltar </BotaoPrincipal>
            </div>

            <img
                className={styles.imagemCachorro}
                src={erro404}
                alt="cachorro vestido como humano"
            />
    </div>
             <div className={styles.espacoEmBranco}>
            </div>
    
    </>
       
    );

}
