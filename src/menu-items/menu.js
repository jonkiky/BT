// assets
import { IconPalette, IconSettings, IconDashboard } from '@tabler/icons';

// constant
const icons = { IconPalette, IconSettings, IconDashboard };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const menu = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'sample-page',
            title: 'Template',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: 'Account',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconSettings,
            breadcrumbs: false
        }
    ]
};

export default menu;
