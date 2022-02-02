import '../styles/globals.css'
import AppContext from '@contexts/AppContext'
import useInitialState from '@hooks/useInitialState'
import Header from '@components/Header'

function MyApp({ Component, pageProps }) {

  return (
    <AppContext.Provider value={useInitialState()}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
