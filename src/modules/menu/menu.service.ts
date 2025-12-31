
import { Injectable } from '@nestjs/common';
import { MenuItem, MenuSection } from 'src/interfaces/menu.interface';
import { MASTER_MENU } from './config/menu.config';
import { filter } from 'rxjs';

@Injectable()
export class MenuService {
    getMenuForRole(userRole: string[]): MenuSection[] {
        const filteredMenu = MASTER_MENU.map(section => {
            const filteredItems = section.items.filter(item => {
                return this.hasPermission(item, userRole);
            })
            return { ...section, items: filteredItems }
        })
        return filteredMenu.filter(section => section.items.length > 0)
    }
    private hasPermission(item: MenuItem, userRoles: string[]): boolean {
        if (!item.roles || item.roles.length === 0) {
            return true;
        }

        const normalize = (text: string) => {
            return text
                .toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
        };

        const userRolesClean = userRoles.map(r => normalize(r));

        const itemRolesClean = item.roles.map(r => normalize(r));


        return itemRolesClean.some(role => userRolesClean.includes(role));
    }
}
