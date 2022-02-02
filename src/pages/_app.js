import '../styles/globals.css'
import AppContext from '@contexts/AppContext'
import useInitialState from '@hooks/useInitialState'

function MyApp({ Component, pageProps }) {
  
  return (
    <AppContext.Provider value={useInitialState()}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
