import React from "react";
import styles from "../../../styles/Politicas.module.css";

const Recibido = () => {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.icon}></div>
        <p>¡Hemos recibido tus datos correctamente!</p>
      </div>
    </div>
  );
};

export default Recibido;
