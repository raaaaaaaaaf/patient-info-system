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
    title: 'Patients Information',
    path: '/officer/patient',
    icon: <Iconify icon= {'fluent:patient-20-filled'}/>,
  },
  {
    title: 'Add Patient Information',
    path: '/officer/add',
    icon: <Iconify icon={'fluent:document-add-48-regular'}/>,
  },

];

export default userConfig;
