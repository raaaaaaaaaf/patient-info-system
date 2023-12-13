// component
import Iconify from '../../../components/iconify';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const userConfig = [
  {
    title: 'dashboard',
    path: '/officer/app',
    icon: <Iconify icon={'carbon:analytics'}/>,
  },
  {
    title: 'All Patients Record',
    path: '/officer/patient',
    icon: <Iconify icon= {'fluent:patient-20-filled'}/>,
  },
  {
    title: 'Senior Citizen Record',
    path: '/officer/senior',
    icon: <Iconify icon= {'healthicons:back-pain'}/>,
  },
  {
    title: 'Pregnancy Record',
    path: '/officer/pregnancy',
    icon: <Iconify icon= {'fa6-solid:person-pregnant'}/>,
  },
  {
    title: 'Add Patient Information',
    path: '/officer/add',
    icon: <Iconify icon={'fluent:document-add-48-regular'}/>,
  },
  {
    title: 'Monthly Report',
    path: '/officer/monthly',
    icon: <Iconify icon={'healthicons:calendar'}/>,
  },

];

export default userConfig;
