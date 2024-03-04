"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import Link from "next/link";

const Form = () => {
  const [displaySelectOptions, setDisplaySelectOptions] = useState(false);
  const [selectOptions, setSelectOptions] = useState("Category");
  const [message, setMessage] = useState("");
  const refInputName = useRef();
  const refInputTel = useRef();
  const refInputTextArea = useRef();
  const refCheckTerms = useRef();
  const refCheckPoli = useRef();

  let arrayCategory = [
    { id: 1, name: "Electricidad" },
    { id: 2, name: "Plomería" },
    { id: 3, name: "Herrería" },
    { id: 4, name: "Ebanistería" },
    { id: 5, name: "Salud" },
    { id: 6, name: "Abogado" },
    { id: 7, name: "Chef" },
    { id: 8, name: "Jardinería" },
    { id: 9, name: "Construcción general" },
    { id: 10, name: "Sistemas de seguridad" },
    { id: 11, name: "Tecnología" },
    { id: 12, name: "Contabilidad" },
    { id: 13, name: "Fotografía" },
    { id: 14, name: "Financiera" },
    { id: 15, name: "Estética" },
    { id: 16, name: "Mecánica general" },
    { id: 17, name: "Transporte" },
    { id: 18, name: "Cristalería" },
    { id: 19, name: "Cuidado de niños" },
    { id: 20, name: "Tutorías" },
  ];

  const handlerSelectOption = (item) => {
    setSelectOptions(item);
    setDisplaySelectOptions(false);
  };

  const handlerForm = (e) => {
    e.preventDefault();
    let valueName = refInputName.current.value;
    let valueTel = refInputTel.current.value;
    let valueTextArea = refInputTextArea.current.value;
    let valueCheckT = refCheckTerms.current.checked;
    let valueCheckP = refCheckPoli.current.checked;
    let valueCategory = selectOptions;

    if (valueName.length > 10) {
      if (valueTel.length > 5) {
        if (valueCategory !== "Category") {
          if (valueTextArea.length > 100) {
            if (valueCheckT) {
              if (valueCheckP) {
                console.log("enviamos respuestas");
              } else {
                setMessage("Debe aceptar nuestras políticas de privacidad");
              }
            } else {
              setMessage("Debe aceptar nuestros términos y condiciones");
            }
          } else {
            setMessage("Debe escribir una descripción más larga");
          }
        } else {
          setMessage("Debe elegir una categoría");
        }
      } else {
        setMessage("Debe escribir un teléfono válido");
      }
    } else {
      setMessage("Debe escribir el nombre y apellidos completos");
    }
  };


  return (
    <div className={styles.form}>
      <div className={styles.leftForm}>
        <div className={styles.leftTop}>
          <div className={styles.chiripaName}>CHIRIPA RD</div>
        </div>
        <div className={styles.leftMid}>
          <div className={styles.unete}>
            ¡Únete a CHIRIPA RD y haz que tus servicios destaquen!{" "}
          </div>
          <div className={styles.registrate}>
            Regístrate ahora para conectar con la comunidad y dar a conocer todo
            lo que puedes ofrecer. ¡Impulsa tu presencia local y haz crecer tu
            negocio con CHIRIPA RD!
          </div>
          <div className={styles.redes}>
            <div className={styles.mantente}> Mantente en contacto</div>
            <div className={styles.iconsRedes}>
              <Link
                href="https://www.instagram.com/chiripard.do/"
                target="_blank"
                className={styles.insta}
              >
                <Image src={"/insta.png"} alt="insta" width="30" height="30" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=18293105522"
                target="_blank"
                className={styles.whats}
              >
                <Image
                  src={"/whats.png"}
                  alt="whatsapp"
                  width="30"
                  height="30"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.leftBottom}>
          <div className={styles.footer}>
            2024 - todos los derechos reservados
          </div>
        </div>
      </div>
      <div className={styles.rightForm}>
        <div className={styles.titleForm}>
          <div className={styles.titleF}>
            Formulario de registro para proveedores de servicios.
          </div>
        </div>
        <div className={styles.formBox}>
          <form
            className={styles.formServicies}
            onSubmit={(e) => handlerForm(e)}
          >
            <input
              type="text"
              placeholder="escriba su nombre y apellido aquí"
              className={styles.inputName}
              ref={refInputName}
            />
            <input
              type="text"
              placeholder="escriba su  número telefónico"
              className={styles.inputName}
              ref={refInputTel}
            />

            <div className={styles.customSelect}>
              <div
                className={styles.selectLabel}
                onClick={() => setDisplaySelectOptions(!displaySelectOptions)}
              >
                <div>{selectOptions}</div>
                <span>&#8691;</span>
              </div>
              <div
                className={
                  displaySelectOptions
                    ? styles.optionsBox
                    : styles.optionsBoxHidden
                }
              >
                {arrayCategory.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handlerSelectOption(item.name)}
                  >
                    {item.name}
                  </li>
                ))}
              </div>
            </div>

            <textarea
              type="text"
              placeholder="Describe tu experiencia en menos de 180 caracteres"
              maxLength={180}
              className={styles.inputResume}
              ref={refInputTextArea}
              // onBlur={(e) =>handlerInput(e)}
            />

            <div className={styles.inputsCheckbox}>
              <input type="checkbox" defaultChecked ref={refCheckTerms} />
              <span>
                Acepto todos{" "}
                <Link href="/terminos" target="_blank" className={styles.link}>
                  <span>los términos y condiciones</span>
                </Link>
              </span>
            </div>

            <div className={styles.inputsCheckbox}>
              <input type="checkbox" defaultChecked ref={refCheckPoli} />
              <span>
                Acepto las{" "}
                <Link href="/politicas" target="_blank" className={styles.link}>
                  <span>políticas de privacidad</span>
                </Link>
              </span>
            </div>

            <div className={styles.inputMesagge}>
              <button className={styles.inputsButtonSubmit}>
                Procesar Solicitud
              </button>
              <span>{message}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
