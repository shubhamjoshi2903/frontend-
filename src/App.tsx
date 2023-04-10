import { QueryClient, QueryClientProvider } from 'react-query'

import SignIn from 'screens/signIn-page'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="App">
      <SignIn />
    </div>
  </QueryClientProvider>
)

export default App
