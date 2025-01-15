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
          Olá! Sou Alessandra e estou embarcando em uma jornada fascinante no mundo da programação.
          Sempre fui apaixonado(a) por tecnologia e a ideia de criar algo do zero me fascina. Comecei
          a estudar desenvolvimento frontend há 1 ano e estou adorando cada passo dessa jornada.
          Meu objetivo é me tornar um(a) desenvolvedor(a) full stack.
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


