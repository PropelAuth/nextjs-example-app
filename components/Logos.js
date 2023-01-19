import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Logos() {
    return <div className={styles.description}>
        <div>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Originally By{' '}
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                /></a>
        </div>
        <div>
            <a
                href="https://www.propelauth.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >Forked By {' '}
                <Image
                    src="/propelauth.svg"
                    alt="PropelAuth Logo"
                    width={150}
                    height={48}
                    priority
                />
            </a>
        </div>
    </div>
}