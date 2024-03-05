import React from "react";
import styles from "../../../styles/Politicas.module.css";

const Politicas = () => {
  return (
    <div className={styles.main}>
      <div className={styles.parrafo}>
        <h2>Política de Privacidad de Chiripa RD</h2>
        <p>
          Bienvenidos a Chiripa RD. Nos tomamos muy en serio la privacidad de
          nuestros usuarios y la protección de sus datos personales. Esta
          Política de Privacidad describe cómo Chiripa RD recopila, utiliza y protege la información que usted
          proporciona al utilizar nuestra aplicación móvil.
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>Información que recopilamos:</h3>
        <h4>Información de registro:</h4>
        <p>
          Al crear una cuenta en Chiripa RD, recopilamos información como su
          nombre, dirección de correo electrónico, número de teléfono y
          contraseña.
        </p>
        <h4>Información del perfil:</h4>
        <p>
          Puede optar por proporcionar información adicional en su perfil, como
          su título profesional, especialidad, experiencia laboral, educación y
          certificaciones.
        </p>
        <h4>Información de uso: </h4>
        <p>
          Recopilamos información sobre cómo interactúa con nuestra aplicación,
          como las acciones que realiza dentro de la plataforma y la frecuencia
          con la que utiliza ciertas funciones.
        </p>
        <h4>Información de dispositivo:</h4>
        <p>
          Podemos recopilar información sobre el dispositivo que utiliza para
          acceder a nuestra aplicación, como su identificador único de
          dispositivo, versión del sistema operativo y tipo de navegador.
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>Cómo utilizamos la información:</h3>
        <h4>Para proporcionar nuestros servicios:</h4>
        <p>
          Utilizamos la información que recopilamos para permitirle utilizar
          todas las funciones de nuestra aplicación y para personalizar su
          experiencia de usuario.
        </p>
        <h4>Para mejorar nuestra aplicación:</h4>
        <p>
          Analizamos la información de uso para comprender mejor cómo se utiliza
          nuestra aplicación y cómo podemos mejorarla para satisfacer las
          necesidades de nuestros usuarios.
        </p>
        <h4>Para comunicarnos con usted:</h4>
        <p>
          Podemos utilizar su dirección de correo electrónico o número de
          teléfono para enviarle notificaciones sobre su cuenta, actualizaciones
          de la aplicación o información relevante sobre nuestros servicios.
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>Cómo protegemos su información:</h3>
        <p>
          Tomamos medidas para proteger la información que recopilamos y
          mantenerla segura. Utilizamos medidas de seguridad técnicas y
          organizativas para proteger sus datos contra el acceso no autorizado,
          la divulgación, la alteración o la destrucción.
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>Compartir información con terceros:</h3>
        <p>
          No compartimos su información personal con terceros sin su
          consentimiento, excepto en los siguientes casos:
        </p>
        <p>
          1. Cuando sea necesario para proporcionar nuestros servicios, como con
          proveedores de servicios de terceros que nos ayudan a alojar la
          aplicación o procesar pagos.
        </p>
        <p>
          2 .Cuando estemos legalmente obligados a hacerlo, como en respuesta a
          una solicitud legal o para cumplir con nuestras obligaciones legales.
        </p>
      </div>
      <div className={styles.parrafo}>
        <h3>Cambios en nuestra Política de Privacidad:</h3>
        <p>
          Podemos actualizar esta Política de Privacidad ocasionalmente para
          reflejar cambios en nuestras prácticas de recopilación y uso de
          información. Le notificaremos sobre cualquier cambio significativo en
          esta Política de Privacidad mediante una notificación dentro de
          nuestra aplicación o por correo electrónico.
        </p>
      </div>
      <p>
        Al utilizar nuestra aplicación, usted acepta esta Política de Privacidad
        y el procesamiento de su información personal de acuerdo con ella.
      </p>
      <p>
        Para cualquier pregunta o inquietud sobre esta Política de Privacidad,
        no dude en ponerse en contacto con nosotros a través de nuestras redes
        sociales. Fecha de entrada en vigencia: 24 Febrero 2024
      </p>
      <p>
        Gracias porconfiar en Chiripa RD para gestionar su registro profesional.
      </p>
    </div>
  );
};

export default Politicas;
