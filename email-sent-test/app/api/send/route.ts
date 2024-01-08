import { NextResponse } from "next/server";
import {Resend} from "resend"
import {GithubAccessTokenEmail} from "../../components/email-template"

export async function GET(){
    const resend = new Resend('re_fy9QnwvJ_KmB5xvivtYeEoEYCGB5eWhXv');
    try {
        const response = await resend.emails.send({
           from: "onboarding@resend.dev",
           to: "sundayfavour997@gmail.com",
           subject: "Hello from this end",
           react: GithubAccessTokenEmail({username: "favour"})
        })
        return NextResponse.json({response})
    } catch (error) {
        return NextResponse.json({ error})
    }
}