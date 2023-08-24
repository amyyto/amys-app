import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <main className={styles.main}>
        <div className={styles.description}>
            <p>
                <code className={styles.code}>
                How would you compare Next.js with another framework?
                Feel free to compare with a framework of your choice.
                </code>
            </p>
        </div>

        <div className={styles.description}>
            <p>
                When diving into the realm of modern web development, two great options are available:
                Next.js and Create React App.
                </p>
                </div>
        <div className={styles.description}>
            <p>
                <code className={styles.code}>Create React App, or CRA,</code> is going to be your safer option. It's straightforward,
                reliable, and great for getting your hands dirty quickly. With a minimal setup
                process, you're cooking up your app in no time. Just focus on the core of your React
                application and let CRA handle the mundane configuration chores. It's a solid
                choice for small-to-medium-sized projects where simplicity is key. CRA would fit the bill nicely for a personal blog.



            </p>
                </div>

            <div className={styles.description}>
                <p> On the flip side, we have <code className={styles.code}>Next.js</code>, the framework built for performance.
                                This framework turbocharges your React apps with server-side rendering and dynamic routing, offering fast loading
                                times and SEO-friendly content. It's the ready-to-go machine that
                                takes your web app to the next level. Complex applications that demand top-notch
                                speed and SEO supremacy are where Next.js shines brightest. With Next.js, building E-commerce platforms
                                or content-heavy sites is what is does  best.
                </p>
                </div>
            <div className={styles.description}>
                <p>Both tools have their distinct flavors, so the choice depends on your
                needs. If you're aiming for quick and simple with the comfort of familiarity,
                Create React App is your answer. But if you need speed, power, and
                advanced features, Next.js is your best bet. The web development
                way is really no specific way, and choosing between these two means you're
                steering in the right direction, no matter which one you pick.
                </p>
        </div>

        <div className={styles.card}>
            <code className={styles.code}><Link href="/q3">Next question</Link></code>
        </div>
    </main>
  )
}
