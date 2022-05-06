import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jsdom-global/register';
configure({ adapter: new Adapter() });