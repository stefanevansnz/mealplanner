import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider } from '@aws-amplify/ui-react'

import MealCollection from './ui-components/MealCollection'

function App() {
  return (
    <AmplifyProvider>
      <MealCollection />
    </AmplifyProvider>
  )
}

export default App