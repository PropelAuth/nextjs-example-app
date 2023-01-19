import Head from 'next/head'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Logos from "@/components/Logos";
import FooterLinks from "@/components/FooterLinks";
import {useLogoutFunction, useRedirectFunctions, withAuthInfo} from "@propelauth/react";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

const Guide = withAuthInfo(({isLoggedIn}) => {
    const logoutFn = useLogoutFunction()
    const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions();

    if (isLoggedIn) {
        return <div className={`${styles.explainText} ${inter.className}`}>
            <p>Now that you are logged in, we have some demos to show off common
                functionality:</p>
            <br/>
            <div className={styles.grid}>
                <Link className={styles.card} href="/display_user">
                    <p>Display user information in the frontend</p>
                </Link>
                <Link className={styles.card} href="/authenticated_request">
                    <p>Make an authenticated request to a Next.js API route</p>
                </Link>
                <Link className={styles.card} href="/org_demo">
                    <p>Create, join, and view the organization(s) you are in</p>
                </Link>
                <button className={styles.card} onClick={() => logoutFn(true)}>
                    <p>Click here to log out</p>
                </button>
            </div>
        </div>
    } else {
        return <div className={styles.explainText}>
            <p className={inter.className}>To get started, please log in as test user.</p>
            <br/>
            <button className={styles.card} onClick={() => redirectToSignupPage()}>
                Sign up
            </button>
            <button className={styles.card} onClick={() => redirectToLoginPage()}>
                Log in
            </button>
        </div>
    }
})
export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App - PropelAuth version</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <Logos/>
                <div className={styles.center}>
                    <Guide/>
                </div>
                <FooterLinks/>
            </main>
        </>
    )
}