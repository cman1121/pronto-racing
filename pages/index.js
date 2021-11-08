import Test from 'components/Test'

import Link from '../components/Link'

const Root = () => (
  <div>
    <h1>Typing Course</h1>
    <Link href='/play'>
      <button>Start Typing!</button>
    </Link>
    <Test />
  </div>
)

export default Root
