import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Page() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
            <p>
                <code className={styles.code}>
                A customer has a project on Vercel and they want to redirect the /blog path to another website. Please write a reply to the customer.
                Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.
                </code>
            </p>
            </div>

        <div className={styles.description}>
            <p>
                Hi there, <br/><br/>
                Amy from Vercel here, happy to help! Thanks so much for writing and letting us know you need some assistance. <br/><br/>
                As you have a project in Vercel, you can get set up with your redirects by updating your vercel.json located in the root of your application.
                The vercel.json should contain a redirects field, which is an array of redirect rules.
                An example with your redirect below could look like this: <br/>

                {'\u007B'}{'\u0022'}redirects{'\u0022'}{'\u003A'}{'\u005B'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{'\u007B'}{'\u0022'}source{'\u0022'}{'\u003A'}{'\u0022'}/blog{'\u0022'},
                {'\u0022'}destination{'\u0022'}{'\u003A'}{'\u0022'}https{'\u003A'}{'\u002F'}{'\u002F'}another{'\u002D'}website.com{'\u0022'},
                {'\u0022'}permanent{'\u0022'}{'\u003A'} true{'\u007D'}

                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{'\u005D'}
                <br/> {'\u007D'}


                <br/><br/>The permanent property is optionalso feel free to remove it or update it based on your needs! In this instance, it will be a permanent redirect with a 308 status code.
                We’re sorry for any confusion you’ve faced as normally with using Next.js, you do not need to use vercel.json.
                Please give that a go and let us know how it goes for you!<br/><br/>

                Best,<br/>
                Amy

                </p>
        </div>
        <div className={styles.description}>
            <p>
                So in this response, I’m choosing to not give the customer too much information and focus on providing them with what they are asking
                first before delving into more than they might want from us. I’ve linked where I found the specific nuggets of information to get them into our
                documentation to help them peruse and get a better understanding of other properties. <br/>
                I’ve linked the sources in the answer and mainly they come from <br/> https://vercel.com/docs/projects/project-configuration
                and https://vercel.com/docs/edge-network/redirects.
            </p>
        </div>

        <div className={styles.card}>
            <code className={styles.code}><Link href="/q5">Next question</Link></code>

        </div>
        </main>
    )
}
