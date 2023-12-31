// component
import Iconify from '../../../components/iconify';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: <Iconify icon={'carbon:analytics'}/>,
  },
  {
    title: 'Users',
    path: '/dashboard/user',
    icon: <Iconify icon={'mdi:user'}/>,
  },
  {
    title: 'All Patients Record',
    path: '/dashboard/patient',
    icon: <Iconify icon= {'fluent:patient-20-filled'}/>,
  },
  {
    title: 'Senior Citizen Record',
    path: '/dashboard/senior',
    icon: <Iconify icon= {'healthicons:back-pain'}/>,
  },
  {
    title: 'Pregnancy Record',
    path: '/dashboard/pregnancy',
    icon: <Iconify icon= {'fa6-solid:person-pregnant'}/>,
  },
  {
    title: 'Add Patient Information',
    path: '/dashboard/add',
    icon: <Iconify icon={'fluent:document-add-48-regular'}/>,
  },
  {
    title: 'Monthly Report',
    path: '/dashboard/monthly',
    icon: <Iconify icon={'healthicons:calendar'}/>,
  },
];

export default navConfig;
