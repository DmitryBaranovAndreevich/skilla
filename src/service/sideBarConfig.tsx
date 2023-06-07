import { ReactComponent as OrderIcon } from '../assets/sideBar/orders-icon.svg';
import { ReactComponent as BookIcon } from '../assets/sideBar/book-icon.svg';
import { ReactComponent as SettingIcon } from '../assets/sideBar/settings-icon.svg';
import { ReactComponent as ReportIcon } from '../assets/sideBar/reports-icon.svg';
import { ReactComponent as ResultIcon } from '../assets/sideBar/results-icon.svg';
import { ReactComponent as CallIcon } from '../assets/sideBar/calls-icon.svg';
import { ReactComponent as PartnerIcon } from '../assets/sideBar/partners-icon.svg';
import { ReactComponent as DocIcon } from '../assets/sideBar/documents-icon.svg';
import { ReactComponent as ExecutorIcon } from '../assets/sideBar/executor-icon.svg';
import { ReactComponent as MessageIcon } from '../assets/sideBar/message-icon.svg';
import { ReactNode } from 'react';

export const sideBarConf: { title: string; icon: ReactNode; path: string }[] = [
  { title: 'Итоги', icon: <ResultIcon width="18" height="18" />, path: '/results' },
  { title: 'Заказы', icon: <OrderIcon width="18" height="18" />, path: '/orders' },
  { title: 'Сообщения', icon: <MessageIcon width="18" height="18" />, path: '/messages' },
  { title: 'Звонки', icon: <CallIcon width="18" height="18" />, path: '/calls' },
  { title: 'Контрагенты', icon: <PartnerIcon width="18" height="18" />, path: '/partners' },
  { title: 'Документы', icon: <DocIcon width="18" height="18" />, path: '/documents' },
  { title: 'Исполнители', icon: <ExecutorIcon width="18" height="18" />, path: '/executor' },
  { title: 'Отчеты', icon: <ReportIcon width="18" height="18" />, path: '/reports' },
  { title: 'База знаний', icon: <BookIcon width="18" height="18" />, path: '/knowledge' },
  { title: 'Настройки', icon: <SettingIcon width="18" height="18" />, path: '/settings' },
];
