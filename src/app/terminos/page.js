import React from "react";
import styles from "../../../styles/Politicas.module.css";

const Terminos = () => {
  return (
    <div className={styles.main}>
      <div className={styles.parrafo}>
        <h2>Términos y Condiciones de Chiripa RD</h2>
        <p>
          ¡Bienvenido/a a Chiripa RD! Antes de utilizar nuestra aplicación
          móvil, lea detenidamente estos Términos y Condiciones. Al acceder y
          utilizar nuestra aplicación, usted acepta estar legalmente vinculado
          por estos términos.
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>1. Registro de Profesionales:</h3>
        <p>
          Chiripa RD es una plataforma que permite a los profesionales
          registrarse y ofrecer sus servicios a los usuarios que buscan
          contratarlos. Al registrarse en nuestra aplicación, usted acepta
          proporcionar información precisa y actualizada sobre su perfil
          profesional.{" "}
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>2. Responsabilidad del Usuario: </h3>
        <p>
          Usted es responsable de mantener la confidencialidad de su cuenta y
          contraseña, y de todas las actividades que ocurran bajo su cuenta. Se
          compromete a notificarnos de inmediato cualquier uso no autorizado de
          su cuenta o cualquier otra violación de seguridad.
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>3. Servicios de los Profesionales: </h3>
        <p>
          La empresa Chiripa RD actúa únicamente como intermediaria entre los
          profesionales registrados y los usuarios que contratan sus servicios.
          No somos responsables de los servicios proporcionados por los
          profesionales. La empresa no se hace responsable de ningún daño
          causado por los servicios de un trabajador registrado en la
          plataforma.
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>4. Propiedad Intelectual: </h3>
        <p>
          Todos los derechos de propiedad intelectual sobre la aplicación y su
          contenido son propiedad de Chiripa RD. Usted acepta no copiar,
          modificar, distribuir, vender o alquilar ninguna parte de nuestra
          aplicación sin nuestro consentimiento previo por escrito.
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>5. Limitación de Responsabilidad:</h3>
        <p>
          En la medida máxima permitida por la ley, Chiripa RD no será
          responsable por daños directos, indirectos, incidentales, especiales o
          consecuentes que surjan del uso o la imposibilidad de utilizar nuestra
          aplicación.
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>6. Cambios en los Términos y Condiciones: </h3>
        <p>
          Nos reservamos el derecho de modificar estos Términos y Condiciones en
          cualquier momento y sin previo aviso. Cualquier modificación entrará
          en vigencia inmediatamente después de su publicación en nuestra
          aplicación. Su uso continuado de nuestra aplicación después de la
          publicación de los cambios constituirá su aceptación de dichos
          cambios.
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>7. Legislación Aplicable:</h3>
        <p>
          Estos Términos y Condiciones se regirán e interpretarán de acuerdo con
          las leyes de República Dominicana. Cualquier disputa que surja en relación con
          estos términos estará sujeta a la jurisdicción exclusiva de los
          tribunales de Santo Domingo.
        </p>
      </div>
      <p>
      Gracias por utilizar Chiripa RD. Si tiene alguna pregunta o inquietud
      sobre estos Términos y Condiciones, no dude en ponerse en contacto con
      nosotros a través de nuestras redes sociales. Fecha de entrada en
      vigencia: 24 Febrero 2024
      </p>
    </div>
  );
};

export default Terminos;
