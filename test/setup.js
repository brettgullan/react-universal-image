import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import 'jest-styled-components'

enzyme.configure({ adapter: new Adapter() })

global.enzyme = enzyme
