import '../styles/globals.css';
import { Layout } from '../components';
import React from 'react';
import {StateContext} from '../context/StateContext';
import {Toaster} from 'react-hot-toast'
import {Amplify} from 'aws-amplify';
import awsconfig from '../../ecomm/src/aws-exports'
import {withAuthenticator} from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    
    <StateContext>
    <Layout >
      <Toaster />
  <Component {...pageProps} />
  </Layout>
  </StateContext>
   )
}

export default withAuthenticator(MyApp);
 