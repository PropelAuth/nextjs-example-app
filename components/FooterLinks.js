import styles from "@/styles/Home.module.css";
import {Inter} from "@next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function FooterLinks() {
    return <div className={styles.grid}>
        <a
            href="https://docs.propelauth.com/overview"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={inter.className}>
                Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Official PropelAuth documentation and guides
            </p>
        </a>

        <a
            href="https://www.propelauth.com/blog"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={inter.className}>
                Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                PropelAuth Blog posts with info on authentication, our product, and more!
            </p>
        </a>

        <a
            href="https://www.propelauth.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={inter.className}>
                Website <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Official PropelAuth website for more information.
            </p>
        </a>

        <a
            href="https://auth.propelauth.com/signup"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={inter.className}>
                Sign Up <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Sign up and make a project in PropelAuth today!
            </p>
        </a>
    </div>
}