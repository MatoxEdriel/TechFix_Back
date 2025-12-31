import { MenuSection } from "src/interfaces/menu.interface";

export const MASTER_MENU: MenuSection[] = [
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