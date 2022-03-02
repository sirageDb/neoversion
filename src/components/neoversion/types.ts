import { CSSProperties } from "react";

//==============================================
export interface ICustomStyles {
  width?: number;
  top?: number;
  height?: number;
  boxUltraCustomStyles?: CSSProperties;
  overlayUltraCustomStyles?: CSSProperties;
}


export interface IMandatoryCheck {
   text : string;
   errorText : string;
}

//============================================
export interface IButton {
  text: string;
  scrollToBottom: boolean;
  remember?: {reference : string};
  callback: Function;
  mandatoryCheck?: IMandatoryCheck; // i have read everything bla bla
  sticky: boolean;
  ultraCustomStyles?: CSSProperties;
}
//============================================
export interface ICustomIcon {
  icon: string;
  iconAlt: string;
}
//============================================
export interface INeoversionProps {
  isOpen: boolean;
  customIcon?: ICustomIcon;
  customStyles?: ICustomStyles;
  button: IButton;
  content : string;
}