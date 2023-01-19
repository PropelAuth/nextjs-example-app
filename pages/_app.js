import '../styles/globals.css'
import { AuthProvider } from '@propelauth/react';
import PreSetupPage from "@/components/PreSetupPage";

export default function App({ Component, pageProps }) {
  // This only exists to make sure you set up your .env file
  // Once you do, you can delete it
  if (process.env.NEXT_PUBLIC_AUTH_URL === "REPLACE_ME") {
    return <PreSetupPage />
  }

  return <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL}>
    <Component {...pageProps} />
  </AuthProvider>  
}
