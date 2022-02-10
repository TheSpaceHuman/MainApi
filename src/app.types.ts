export interface IApiMenuItem {
  title: string;
  path: string;
  id: number;
  icon?: string;
  children?: IApiMenuItem[];
}
