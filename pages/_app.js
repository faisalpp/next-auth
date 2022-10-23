import '../styles/globals.css'
import Layout from '../components/Layout'
import {SessionProvider} from 'next-auth/react'


//use session as prop if you are using SSR in NextJs
function MyApp({ Component, pageProps }) {
  return<>
   <SessionProvider session={pageProps.session} > 
    <Layout>
    <Component {...pageProps} />
    </Layout>
   </SessionProvider>
  </>
}

export default MyApp
