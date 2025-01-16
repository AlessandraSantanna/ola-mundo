import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";
import styles from './SobreMim.module.css'; // 

export default function SobreMim(){
  return(
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre Mim"
    >
      <h3 className={styles.subtitulo}> 
        Olá, sou Alessandra!
      </h3>
      <img 
        src={fotoSobreMim} 
        alt="Uma foto minha, Alessandra, sorrindo" 
        className={styles.fotoSobreMim} 
      />
        <p className={styles.paragrafo}>
         Olá! Sou Alessandra e estou embarcando em uma jornada fascinante no mundo da programação.
         Sempre fui apaixonado(a) por tecnologia e a ideia de criar algo do zero me fascina. 
         </p> 
         <p className={styles.paragrafo}>
            Comecei a estudar frontend há 1 ano e estou adorando cada passo dessa jornada.
         Meu objetivo é me tornar um(a) desenvolvedor(a) full stack.
         </p>
  
         <p className={styles.paragrafo}>
           Olá! Sou Alessandra e estou embarcando em uma jornada fascinante no mundo da programação.
         Sempre fui apaixonado(a) por tecnologia e a ideia de criar algo do zero me fascina. 
         </p>
         <p className={styles.paragrafo}>
          Comecei a estudar frontend há 1 ano e estou adorando cada passo dessa jornada.
         Meu objetivo é me tornar um(a) desenvolvedor(a) full stack.
         </p>

    </PostModelo>
  );
}
