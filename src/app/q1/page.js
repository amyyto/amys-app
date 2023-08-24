import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <main className={styles.main}>
        <div className={styles.description}>
            <p>
                <code className={styles.code}>
                Describe how you solved a challenge that one of your previous teams faced.
                How did you determine your solution was successful?
                </code>
            </p>
        </div>

        <div className={styles.description}>
            <p>
                In a previous role with my team at Miro, we encountered a significant challenge
                due to the rapid growth during the pandemic. Our primary concern revolved around
                efficiently handling the influx of inquiries flooding our #customer_support
                channel, predominantly from the sales and CX departments. It became imperative
                to discern urgent queries (requiring responses within 1-3 hours) and ensure we
                gathered all essential information in a single interaction. Additionally, we
                aimed to empower other departments within the company to pose more informed
                questions and encouraged them to explore internal and external resources before
                seeking assistance. <br/><br/>

                To address these issues, I embarked on a project to revamp our workflow and
                meticulously documented this new approach. This workflow systematically prompted
                the inclusion of critical questions during the initial investigation.
                Furthermore, to promote the use of our valuable resources and Slack threads, we
                instituted a requirement for all team members to check them first—a seemingly
                simple yet highly effective practice, considering how easy it is to overlook
                such resources. We also introduced a structured schedule for assigning support
                responsibilities to ensure transparent team collaboration and sent urgent
                requests to our internal channel, enhancing overall visibility and readiness. <br/>
                </p>
                </div>

            <div className={styles.description}>
                <p>The success of this solution can be attributed to several key factors below:
                </p>
                </div>
            <div className={styles.description}>
                <p>
                    <code className={styles.code}>CX-Centric Workflow:</code>
                    <br/> Our revamped workflow ensured that all necessary
                    information and crucial steps were consistently addressed.
                </p>

                <p>
                    <code className={styles.code}>Standardized Request Format:</code>
                    <br/> By adopting a standardized format for each request
                    or question, we made information more digestible and concise, facilitating more
                    efficient team responses.
                </p>

                <p>
                    <code className={styles.code}>Enhanced Team Dynamics:</code>
                    <br/> The introduction of a designated schedule ensured that
                    team members could work cohesively, reducing the burden on individuals and
                    providing a safety net through shared responsibility for urgent queries.
                </p>

                <p>
                    <code className={styles.code}>Streamlined Ticketing:</code>
                    <br/>  The ability for the CX team to easily create Zendesk
                    tickets within the thread simplified the process, eliminating redundant work and
                    promoting efficiency.
                </p>

                <p>
                    <code className={styles.code}>Reduced Unnecessary Queries: </code>
                    <br/>We successfully deflected approximately 30% of
                    routine questions that could be resolved by consulting help center articles and
                    other resources.
                </p>

                <p>
                    <code className={styles.code}>Positive CX Feedback: </code>
                    <br/>The CX team expressed satisfaction with the new workflow,
                    noting that it expedited their access to assistance through information
                    requirements and reminders to explore alternative sources.
                </p>
        </div>

        <div className={styles.card}>
            <code className={styles.code}><Link href="/q2">Next question</Link></code>
        </div>
    </main>
  )
}
