"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MASTER_MENU = void 0;
exports.MASTER_MENU = [
    {
        title: 'PRINCIPAL',
        items: [
            {
                label: 'Dashboard',
                icon: 'pi pi-home',
                path: '/dashboard/home',
                roles: ['ADMIN', 'Tecnico', 'Vendedor']
            }
        ]
    },
    {
        title: 'ADMINISTRACIÓN',
        items: [
            {
                label: 'Usuarios',
                icon: 'pi pi-users',
                path: '/dashboard/users',
                roles: ['ADMIN']
            },
            {
                label: 'Inventario',
                icon: 'pi pi-box',
                path: '/dashboard/inventory',
                roles: ['Admin', 'Técnico'],
                children: [
                    { label: 'Ver Stock', icon: 'pi pi-eye', path: '/dashboard/inventory/list' },
                    { label: 'Entradas/Salidas', icon: 'pi pi-sort-alt', path: '/dashboard/inventory/movements' }
                ]
            }
        ]
    }
];
//# sourceMappingURL=menu.config.js.map