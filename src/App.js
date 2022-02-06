import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider } from '@aws-amplify/ui-react'

import {MealCollection, Navnavmenu, Nav, Superlist, Todo} from './ui-components'

function App() {
  return (
    <AmplifyProvider>
      <Superlist width={"100vm"}/>
      <Todo/>
      <Nav/>      
      <MealCollection />
      <Navnavmenu width={"100vm"}/>      
    </AmplifyProvider>
  )
}

export default App