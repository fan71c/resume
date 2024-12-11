"use server";


import {Resend} from 'resend';
import {getErrorMessage, validateString} from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY)



export const sendEmail = async (formData: FormData) => {

    let response;
    const senderEmail = formData.get('senderEmail') ;
    const senderName = formData.get('senderName');
    const message = formData.get('message');

    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid email address'
        }
    }
    if (!validateString(senderName, 500)) {
        return {
            error: 'Invalid name'
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message'
        }
    }
    try {
         response = await resend.emails.send({
            from: "Personal Website Contact form <onboarding@resend.dev>",
            to: 'danylo.burenkov@gmail.com',
            subject: 'Message from your website',
            text: `Name: ${senderName}\nEmail: ${senderEmail}\nMessage: ${message}`,
            reply_to: senderEmail as string
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
    return {
        response
    }
}

