export interface IListAction {
  textBtn: string;
  classBtn: string;
  action: any;
}

export enum ETypeClass {
  PRIMARY = 'primary',
  SECODARY = 'secodary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFOR = 'info',
  LIGHT = 'light',
  DARK = 'dark',
}
