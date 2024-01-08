import GithubAccessTokenEmail from "./components/email-template"
import {Resend} from "resend"
export default async function Page() {
     async function Send() {
      "use server"
      const resend = new Resend("re_fy9QnwvJ_KmB5xvivtYeEoEYCGB5eWhXv")
        try {
            const response = await resend.emails.send({
               from: "onboarding@resend.dev",
               to: "sundayfavour997@gmail.com",
               subject: "Hello from this end",
               react: GithubAccessTokenEmail({username: "favour"})
            })
            
            console.log({response})
        } catch (error) {
            console.log(error)
        }
     }

    return (
        <form action={Send}>
            <button type="submit">
                Send Email
            </button>
        </form>
    )
}

