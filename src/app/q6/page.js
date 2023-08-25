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

                You can set the X-Robots-Tag HTTP header to indicate that a page should not be
                indexed by search engines like Google on a Vercel deployment, with these steps:<br/> <br/>

                If you're deploying a static site using Vercel, you can define
                custom headers in a vercel.json file in the root directory of
                your project. If this file doesn't exist, create it. Inside
                vercel.json, add or modify the "headers" configuration to set
                the X-Robots-Tag header. For a non-indexable page, the header
                value should be "noindex".

                Here's an example vercel.json configuration: <br/><br/>

                {'\u007B'}
                    <br/>&nbsp;&nbsp;{'\u0022'}headers{'\u0022'}{'\u003A'} {'\u005B'}
                        <br/>&nbsp;&nbsp;&nbsp;{'\u007B'}
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'\u0022'}source{'\u0022'}{'\u003A'} "/path-to-nonindexable-page",
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'\u0022'}headers{'\u0022'}{'\u003A'} {'\u005B'}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'\u007B'} {'\u0022'}key{'\u0022'}{'\u003A'} "X-Robots-Tag", {'\u0022'}value{'\u0022'}{'\u003A'} "noindex" {'\u007D'}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'\u005D'}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{'\u007D'}
                <br/>&nbsp;&nbsp;{'\u005D'}
                <br/>{'\u007D'} <br/><br/>

                Replace "/path-to-nonindexable-page" with the actual URL path of the page you
                want to set as non-indexable. After making the changes to vercel.json, commit
                the file to your version  control system (like Git) if it's not already tracked.
                <br/>Then, push the changes to your Vercel repository. Vercel will detect the changes
                and redeploy your project. The custom headers  specified in the vercel.json
                configuration will be applied to the specified URL path. <br/><br/>

                Please note that the X-Robots-Tag header is just a directive to
                search engine bots, and it's up to the search engines to respect
                this directive. Some search engines might honor it,  while
                others might not. Also, ensure that you have a valid robots.txt
                file in place to accompany the X-Robots-Tag header for better
                control over how search engines crawl and index your site.

                A robots.txt file tells search engine crawlers which URLs the crawler can access on your site.
                You can follow the steps below to get started:<br/><br/>
                It works like this: a robot wants to visit a Web site URL, say https://www.my-website.com <br/>
                Before it does so, it first checks for https://www.my-website.com/robots.txt and finds: <br/><br/>

                User-agent{'\u003A'} {'\u002A'} <br/>
                Disallow{'\u003A'} {'\u002F'} <br/><br/>

                The "User-agent: *" means this section applies to all robots. <br/>The "Disallow: /" tells the robot
                that it should not visit any pages on the site. <br/><br/>You can get started by creating a robots.txt
                file with the two lines above. You’ll want to add it in the top-level directory of your web server. <br/><br/>

                Please be sure to test your changes to make sure your site's configurations are working as expected!

                </p>
        </div>
        <div className={styles.description}>
            <p>
                https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines <br/>
                https://vercel.com/docs/edge-network/headers#x-robots-tag <br/>
                https://www.robotstxt.org/robotstxt.html
                https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt <br/>

                </p>
        </div>

        <div className={styles.card}>
            <code className={styles.code}><Link href="/q7">Next question</Link></code>
        </div>
        </main>
    )
}
