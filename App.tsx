import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigator } from './src/presentation/navigation/MainStackNavigator'

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  )
}

export default App