// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'pages',
  type: 'group',
  children: [
    {
      id: 'util-tasks',
      title: 'Tasks',
      type: 'item',
      url: '/utils/util-tasks',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-events',
      title: 'Events',
      type: 'item',
      url: '/utils/util-events',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-progress',
      title: 'Progress',
      type: 'item',
      url: '/utils/util-progress',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'util-courses',
      title: 'Courses',
      type: 'item',
      url: '/utils/util-courses',
      icon: icons.IconWindmill,
      breadcrumbs: false
      
    }
  ]
};

export default pages;
