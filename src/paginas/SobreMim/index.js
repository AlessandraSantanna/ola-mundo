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
        Sou um(a) desenvolvedor(a) full-stack em início de carreira, apaixonado(a)
         por criar soluções inovadoras através da tecnologia. Tenho me dedicado a aprender
          as bases da programação, como HTML, CSS e JavaScript estou explorando frameworks 
          como React para construir interfaces mais dinâmicas.
         </p> 
         <p className={styles.paragrafo}>
         Recentemente, desenvolvi o Projeto Olá Mundo! que me permitiu aplicar os
          conhecimentos adquiridos e aprimorar minhas habilidades em HTML, CSS e JavaScript e React( router dom).
           Meu objetivo é me tornar uma especialista em React e contribuir para
            o desenvolvimento de projetos desafiadores. Acredito que a programação
          é uma área em constante evolução e estou sempre buscando novas oportunidades de aprendizado.
         </p>
  
        

    </PostModelo>
  );
}
