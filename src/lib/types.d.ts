//==============================================
interface ICustomStyles {
  width?: number;
  top?: number;
  height?: number;
  boxUltraCustomStyles?: CSSProperties;
  overlayUltraCustomStyles?: CSSProperties;
}


interface IMandatoryCheck {
   text : string;
   errorText : string;
}

//============================================
interface IButton {
  text: string;
  scrollToBottom: boolean;
  remember?: {reference : string};
  callback: Function;
  mandatoryCheck?: IMandatoryCheck; // i have read everything bla bla
  sticky: boolean;
  ultraCustomStyles?: CSSProperties;
}
//============================================
interface ICustomIcon {
  icon: string;
  iconAlt: string;
}
//============================================
interface INeoversionProps {
  isOpen: boolean;
  title: string;
  customIcon?: ICustomIcon;
  customStyles?: ICustomStyles | undefined;
  button: IButton;
}