// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Patients Record',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Individual Treatment Record',
    path: '/dashboard/add',
    icon: icon('ic_cart'),
  },
  {
    title: 'Staffs',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Records',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
