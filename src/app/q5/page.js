import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Page() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
            <p>
                <code className={styles.code}>
                    Imagine that the customer from Question 4 responds with the following email.
                    “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so why
                    don't you just fix it for me instead of asking me questions.”
                    What response would you write back?
                </code>
            </p>
            </div>

        <div className={styles.description}>
            <p>
                Hello there,<br/><br/>

                I genuinely didn't intend to add to any frustration, and I'm always here to assist you to the best of my abilities. <br/><br/>

                These questions we're asking are aimed at getting a clearer picture of your situation. Our goal is to focus precisely on the issue and troubleshoot it effectively.
                This approach allows us to provide you with quicker and more targeted assistance by having all the relevant information on hand.
                Could you please update us if you've encountered any stumbling blocks while setting up the redirect following my previous response?
                Sharing screenshots of your redirect code or any errors you've come across would be incredibly helpful for us to understand the challenge better.
                Moreover, I'd be more than delighted to jump on a quick call with you! This would give us the opportunity to walk through the
                setup together and review what you've accomplished so far. <br/><br/>
                Looking forward to hearing from you, <br/>
                Amy

                </p>
        </div>
        <div className={styles.description}>
            <p>
                I’m a highly empathetic and bubbly person. Sometimes my answers are not as concise as they could be when there might be some frustration involved.
                I show a lot of personality and emotion (never mono-tone) to make sure I can convey either good news or bad news to a customer.
                I wouldn’t want to cause any misunderstanding and I always want to be cognizant of how the customer is feeling.
                I try to not take it personally and just really focus on solving the issue for them.
            </p>
        </div>

        <div className={styles.card}>
            <code className={styles.code}><Link href="/q6">Next question</Link></code>
        </div>
        </main>
    )
}
