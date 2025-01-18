import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhafoto from 'assets/minha_foto.jpg';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá mundo!
        </h1>
        <p className={styles.paragrafo}>
        Boas vindas ao meu espaço pessoal!  Sou Alessandra, desenvolvedora Front-end.
           Aqui compartilho vários conhecimentos, 
        espero que aprenda algo novo!
          
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="Um círculo colorido decorativo"
          aria-hidden={true}
        />
        <img
            className={styles.minhaFoto}
            src={minhafoto}
              alt="foto alessandra"
        />
      </div>
    </div>
  );
}


