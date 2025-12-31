"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const menu_config_1 = require("./config/menu.config");
let MenuService = class MenuService {
    getMenuForRole(userRole) {
        const filteredMenu = menu_config_1.MASTER_MENU.map(section => {
            const filteredItems = section.items.filter(item => {
                return this.hasPermission(item, userRole);
            });
            return { ...section, items: filteredItems };
        });
        return filteredMenu.filter(section => section.items.length > 0);
    }
    hasPermission(item, userRoles) {
        if (!item.roles || item.roles.length === 0) {
            return true;
        }
        const normalize = (text) => {
            return text
                .toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
        };
        const userRolesClean = userRoles.map(r => normalize(r));
        const itemRolesClean = item.roles.map(r => normalize(r));
        return itemRolesClean.some(role => userRolesClean.includes(role));
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)()
], MenuService);
//# sourceMappingURL=menu.service.js.map