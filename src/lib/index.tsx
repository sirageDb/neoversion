import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./index.module.scss";

export default function Neoversion({
  isOpen,
  customIcon,
  customStyles,
  button,
  content,
}: INeoversionProps): JSX.Element | any {
  // Error handlers
  //==========================================================
  if (button.sticky === true && button.scrollToBottom === true) {
    throw new Error("Neoversion ERROR ::: cannot have both sticky button set to true and scrollToBottom set to true");
  }
  //==========================================================
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isVisibleErrorText, setIsVisibleErrorText] = useState<boolean>(false);
  const [isRemembered, setIsRemembered] = useState<boolean>(false);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  //=========================================
  const customUserStyles = {
    width: (customStyles?.width && `${customStyles?.width}px`) || "700px",
    top: (customStyles?.top && `${customStyles?.top}vh`) || "4vh",
    height: (customStyles?.height && `${customStyles?.height}vh`) || "80vh",
    ...customStyles?.boxUltraCustomStyles,
  };
  //=========================================
  useEffect(() => {
    const reference = button.remember?.reference;
    if (reference) {
      if (isExistItem(reference)) {
        setIsRemembered(true);
      } else {
        setIsRemembered(false);
      }
    }
  }, [button.remember?.reference]);
  //=========================================
  //check if an item does exist, return true if yes otherwise return false
  const isExistItem = (reference: string): boolean => {
    const item = window.localStorage.getItem("neoversion");
    if (item) {
      const array: string[] = JSON.parse(item);
      if (array.includes(reference)) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  //=========================================
  const remember = (reference: string): void => {
    const item = window.localStorage.getItem("neoversion");
    if (item) {
      const array: string[] = JSON.parse(item);
      array.push(reference);
      window.localStorage.setItem("neoversion", JSON.stringify(array));
    }
    if (!item) {
      window.localStorage.setItem("neoversion", JSON.stringify([reference]));
    }
    setIsRemembered(true);
  };
  //=========================================
  const clicked = () => {
    if (typeof button.mandatoryCheck !== "undefined") {
      if (isChecked === true) {
        setIsVisibleErrorText(false);
        setIsChecked(false);
        button.callback();
      } else {
        setIsVisibleErrorText(true);
      }
    } else if (typeof button.mandatoryCheck === "undefined") {
      button.callback();
    }
    if (button.remember) {
      remember(button.remember.reference);
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
    <div>
      {isRemembered === false && (
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
            <ReactMarkdown children={content} />

            {/* ========================================================== */}
            <div
              ref={buttonContainerRef}
              className={styles.buttonContainer}
              style={{ position: `${button.sticky ? "sticky" : "relative"}` }}
            >
              {button.mandatoryCheck && (
                <p className={styles.checkContainer}>
                  <input id="neoversionMandatoryCheckbox" type={"checkbox"} checked={isChecked} onChange={handleCheckboxChange} />
                  <label className={styles.checkLabel} htmlFor="neoversionMandatoryCheckbox">{button.mandatoryCheck.text}</label>
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
      )}
    </div>
  );
}
