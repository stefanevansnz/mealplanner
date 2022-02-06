import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider, Collection, Button, Card, Text, Heading, Flex, Badge, createTheme, Image, View, StepperField, Rating, useTheme } from '@aws-amplify/ui-react';
import {MealCollection, Navnavmenu, Nav, Superlist, Todo} from './ui-components'

import { theme } from './theme';

const MealList = () => {
  const { tokens } = useTheme();
  return (
  <MealCollection/>
  )
}

export default function App() {
  return (
    <AmplifyProvider theme={theme}>
      <MealList/>
    </AmplifyProvider>
  )
}