import { MenuItem } from './menu-item.types';

export interface Menu {
  initialActive: string;
  items: MenuItem[];
}
