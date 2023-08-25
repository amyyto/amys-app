import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Page() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
            <p>
                <code className={styles.code}>
                    How could we improve or alter this familiarization exercise?
                    </code>
            </p>
            </div>

        <div className={styles.description}>
            <p>
            I thoroughly enjoyed learning from getting first hands experience with making my own app using Vercel.
            Once I got the hang of things, I did find it hard to not think about the design too much. I surely didn’t make it a beautiful
            site or anything, but I did still spend some time creating some sort of visual flow for my answers. Working within the three hour timeframe
            was really hard but a good starting point to think that this could all be done within three hours. For the exercises, I loved going through
            the documentation and being a bit of a sleuth. The frustrated customer one could be taken up a notch or another upset customer, even possibly
            some sort of incident style. An upset customer due to some bug or issue and they want an RCA. Something a bit more where it would affect the
            company or business. Overall, I had a fun time learning about Vercel and being able to walk away with what I’ve created <span role="img" aria-label="stars">✨✨. </span>
            Thanks so much for giving me the opportunity to get into the nitty gritty with the product.
                </p>
        </div>

        <div className={styles.card}>
            <code className={styles.code}>The end!</code>
        </div>
        </main>
    )
}
