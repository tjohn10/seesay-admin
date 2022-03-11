const Menu = [
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    title: 'Chat',
    group: 'apps',
    icon: 'chat_bubble',
    target: '_blank',
    name: 'Chat',
    href: '/chat/messaging'
  },
  {
    title: 'Inbox',
    group: 'apps',
    name: 'Mail',
    target: '_blank',
    icon: 'email',
    href: '/mail/all'
  },
  {
    title: 'Reports',
    group: 'apps',
    name: 'Report',
    icon: 'report',
    href: '/reports'
  },
  {
    title: 'Users',
    group: 'apps',
    name: 'User',
    icon: 'group',
    items: [
      {name: 'Add New', title: 'Add New User', href: '/users/add'},
      {name: 'View All', title: 'View Users', badge: 'new', href: '/user'},

    ]
  },
  {
    title: 'Workspaces',
    group: 'apps',
    name: 'Workspace',
    icon: 'workspaces',
    items: [
      {name: 'Add New', title: 'Add New', href: '/workspace/add'},
      {name: 'View', title: 'View Workspaces', badge: 'new', href: '/workspace'},
    ]
  },

  // {
  //   title: 'Media',
  //   group: 'apps',
  //   name: 'Media',
  //   icon: 'perm_media',
  //   href: '/media'
  // },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
