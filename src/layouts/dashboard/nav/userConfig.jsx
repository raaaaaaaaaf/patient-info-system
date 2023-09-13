// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const userConfig = [
  {
    title: 'dashboard',
    path: '/client/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Schedule Appointment',
    path: '/client/schedule',
    icon: icon('ic_user'),
  },

];

export default userConfig;
