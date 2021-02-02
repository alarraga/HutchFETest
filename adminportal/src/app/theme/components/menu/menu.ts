import { Menu } from './menu.model';

export const verticalMenuItems = [
  new Menu(1, 'Account Information', '/hutch/dashboard/account', null, 'users', null, false, 0),
  new Menu(2, 'Logs', '/hutch/dashboard/logs', null, 'exclamation-circle', null, false, 0),
  new Menu(3, 'Receipts', '/hutch/dashboard/receipts', null, 'file-text-o', null, false, 0),
  new Menu(4, 'Social Media', '/hutch/dashboard/social-media', null, 'keyboard-o', null, false, 0),
  new Menu(5, 'Resources', '/hutch/dashboard/resources', null, 'wrench', null, false, 0),
  new Menu(6, 'Features', '/hutch/dashboard/features', null, 'laptop', null, false, 0),
  new Menu(7, 'FTUE', '/hutch/dashboard/ftue', null, 'tachometer', null, false, 0),
  new Menu(8, 'Fusion Credits', '/hutch/dashboard/fusion-credits', null, 'list-ul', null, false, 0) 
]

export const horizontalMenuItems = [

  new Menu(1, 'Account Information', '/hutch/dashboard/account', null, 'users', null, false, 0),
  new Menu(2, 'Logs', '/hutch/dashboard/logs', null, 'exclamation-circle', null, false, 0),
  new Menu(3, 'Receipts', '/hutch/dashboard/receipts', null, 'file-text-o', null, false, 0),
  new Menu(4, 'Social Media', '/hutch/dashboard/social-media', null, 'keyboard-o', null, false, 0),
  new Menu(5, 'Resources', '/hutch/dashboard/resources', null, 'wrench', null, false, 0),
  new Menu(6, 'Features', '/hutch/dashboard/features', null, 'laptop', null, false, 0),
  new Menu(7, 'FTUE', '/hutch/dashboard/ftue', null, 'tachometer', null, false, 0),
  new Menu(8, 'Fusion Credits', '/hutch/dashboard/fusion-credits', null, 'list-ul', null, false, 0)
 
]
