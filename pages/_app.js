import '../styles/globals.css'
import '../styles/Navbar.css'
import '../styles/Footer.css'
import '../styles/input.css'
import '../styles/output.css'
import '../styles/task.css'
import Layout from '../components/Layout'
import ContextProvider from '../context/ContextProvider'



export default function App({ Component, pageProps }) {
  return(
    <ContextProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </ContextProvider>
  )
}
