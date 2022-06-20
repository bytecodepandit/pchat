import i18n from '@app/i18n';

export const SettingListItems = [
  {
    icon: 'favorite',
    title: i18n.t('favorite'),
    routeUrl: '',
  },
  {
    icon: 'whatupDesktop',
    title: 'Pchat Web/Desktop',
    routeUrl: '',
    hasPadding: true,
  },
  {
    icon: 'account',
    title: i18n.t('account'),
    routeUrl: '',
  },
  {
    icon: 'whatsup',
    title: i18n.t('chats'),
    routeUrl: '',
  },
  {
    icon: 'notification',
    title: i18n.t('notifications'),
    routeUrl: '',
  },
  {
    icon: 'payment',
    title: i18n.t('payments'),
    routeUrl: '',
  },
  {
    icon: 'storage',
    title: `${i18n.t('storage')} ${i18n.t('and')} ${i18n.t('data')}`,
    routeUrl: '',
    hasPadding: true,
  },
  {
    icon: 'help',
    title: i18n.t('help'),
    routeUrl: '',
  },
  {
    icon: 'invite',
    title: i18n.t('invite'),
    routeUrl: '',
  },
];
