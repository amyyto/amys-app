import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Page() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
            <p>
                <code className={styles.code}>
                    A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer.
                    Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.
                </code>
            </p>
            </div>

        <div className={styles.description}>
            <p>
                Hi there, <br/><br/>

                Thanks for getting in touch with us! We’ll be happy to assist you today. <br/><br/>
                You can make sure your project isn’t indexed by search engines by making use of the  robots.txt file. A robots.txt file tells search engine crawlers which URLs the crawler can access on your site.
                You can follow the steps below to get started:<br/><br/>
                It works like this: a robot wants to visit a Web site URL, say https://www.my-website.com <br/>
                Before it does so, it first checks for https://www.my-website.com/robots.txt and finds: <br/><br/>

                User-agent{'\u003A'} {'\u002A'} <br/>
                Disallow{'\u003A'} {'\u002F'} <br/><br/>

                The "User-agent: *" means this section applies to all robots. <br/>The "Disallow: /" tells the robot that it should not visit any pages on the site.
                <br/><br/>You can get started by creating a robots.txt file with the two lines above. You’ll want to add it in the top-level directory of your web server.

                For Vercel Preview Deployments, they are not indexed by search engines by default because the X-Robots-Tag HTTP header is set to noindex.
                If you are using a Custom Domain that is assigned to a non-Production Branch, however, the header X-Robots-Tag: noindex will not be set.

                <br/><br/> You can learn how to check and update the header status here https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines.

                </p>
        </div>
        <div className={styles.description}>
            <p>
                https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines
                https://www.robotstxt.org/robotstxt.html
                https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt
                </p>
        </div>

        <div className={styles.card}>
            <code className={styles.code}><Link href="/q7">Next question</Link></code>
        </div>
        </main>
    )
}
