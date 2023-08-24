import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Page() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
            <p>
                <code className={styles.code}>
                When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
                </code>
            </p>
            </div>

        <div className={styles.description}>
            <p>
                <code className={styles.code}> Edge Functions: </code> <br/>
                1) Use Vercel's Edge Functions when you need super-fast,
                personalized content delivery with minimal overhead. <br/>
                2) These functions run on Vercel's global Edge Network and execute closest to the user, ensuring optimal
                performance. <br/>
                3) No waiting for them to start (no cold boots), so they're great
                for tasks like handling OAuth callbacks, webhook responses, or rapid API
                interactions.
                </p>
        </div>
        <div className={styles.description}>
            <p>
                <code className={styles.code}> Serverless Functions: </code> <br/>
                1) Opt for Vercel's Serverless Functions when you want to run code on-demand without worrying about server management.<br/>
                2) They're perfect for tasks like user authentication, form handling, database queries, or custom Slack commands.<br/>
                3) These functions scale automatically with your traffic, ensuring they're responsive without idle server costs.
            </p>
        </div>

        <div className={styles.description}>
        <p>
            <code className={styles.code}> Edge Middleware: </code> <br/>
            1) Consider using Edge Middleware to enhance speed and personalization for your users.<br/>
            2) It's code that runs before processing a request, allowing you to tweak the response.<br/>
            3) Ideal for adding personalization to static content by performing custom logic, redirection, header addition, and more based on incoming requests.
        </p>
        </div>
        <div className={styles.description}>
            <p>
                So, choose Edge Functions for lightning-fast tasks, Serverless Functions for flexible on-demand processing, and
                Edge Middleware to fine-tune responses based on requests. Each tool serves a specific purpose, so pick the one that best suits your needs.
            </p>
        </div>

        <div className={styles.card}>
            <code className={styles.code}><Link href="/q4">Next question</Link></code>
        </div>
        </main>
    )
}
