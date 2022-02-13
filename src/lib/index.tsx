import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";

export default function Neoversion({ isOpen, customIcon, customStyles, title, button, reference }: INeoversionProps): JSX.Element | any {
  // Error handlers
  //==========================================================
  if (button.sticky === true && button.scrollToBottom === true) {
    throw new Error("Neoversion ERROR ::: cannot have both sticky button set to true and scrollToBottom set to true");
  }
  //==========================================================
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isVisibleErrorText, setIsVisibleErrorText] = useState<boolean>(false);
  const [isRemembered, setIsRemembered] = useState<string>("a");
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  //=========================================
  const customUserStyles = {
    width: (customStyles?.width && `${customStyles?.width}px`) || "700px",
    top: (customStyles?.top && `${customStyles?.top}vh`) || "4vh",
    height: (customStyles?.height && `${customStyles?.height}vh`) || "80vh",
    ...customStyles?.boxUltraCustomStyles,
  };
  //=========================================
  useEffect(()=> {
    if(reference === "1"){
      setIsRemembered("b");
    }
  }, [reference]);
  //=========================================
  const clicked = () => {
    if (typeof button.mandatoryCheck !== "undefined") {
      if (isChecked === true) {
        if(button.remember === true){
          window.alert("the remember functino");
        }
        setIsVisibleErrorText(false);
        setIsChecked(false);
        button.callback();
      }
      else{
        setIsVisibleErrorText(true);
      }
    } else if (typeof button.mandatoryCheck === "undefined") {
      button.callback();
    }
  };
  //=========================================
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  //=========================================
  const takeMeToBottom = () => {
    const buttonContainer = buttonContainerRef.current;
    buttonContainer?.scrollIntoView({ behavior: "smooth" });
  };
  //=========================================

  return (
      <div
        className={styles.overlay}
        style={{ ...customStyles?.overlayUltraCustomStyles, display: `${isOpen ? "block" : "none"}` }}
      >
        <div className={styles.container} style={customUserStyles}>
          {customIcon && (
            <div className={styles.iconContainer}>
              <img className={styles.icon} src={customIcon.icon} alt={customIcon.iconAlt} />
            </div>
          )}
          {/* ========================================================== */}
          {button.scrollToBottom === true && button.sticky === false && (
            <div className={styles.scrollToContainer}>
              <button onClick={takeMeToBottom} className={styles.scrollToBottom}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" />
                </svg>
              </button>
            </div>
          )}
  
          {/* ========================================================== */}
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.content}>
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has surv including versions of
            Lorem Ipsum.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaincluding versions of Lorem Ipsum.is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaincluding versions of Lorem Ipsum.is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, rema ectronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has surv including versions of Lorem Ipsum.is
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </div>
  
          {/* ========================================================== */}
          <div
            ref={buttonContainerRef}
            className={styles.buttonContainer}
            style={{ position: `${button.sticky ? "sticky" : "relative"}` }}
          >
            {button.mandatoryCheck && (
              <p className={styles.checkContainer}>
                <input type={"checkbox"} checked={isChecked} onChange={handleCheckboxChange} />
                {button.mandatoryCheck.text}
              </p>
            )}
            {isVisibleErrorText === true && <p className={styles.errorText}>{button.mandatoryCheck?.errorText}</p>}
            <button onClick={clicked} className={styles.button}>
              {button.text}
            </button>
          </div>
          {/* ========================================================== */}
        </div>
      </div>
  );
}
