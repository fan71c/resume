"use client";

import React, {useState} from "react";
import {useSectionInView} from "@/lib/hooks";
import SectionHeading from "@/components/ui/section-heading";
import {motion} from "motion/react";
import {sendEmail} from "@/components/actions/send-email";
import SubmitBtn from "@/components/contact/submit-btn";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle, MailCheck} from "lucide-react";

// Define the type for the alert state
type AlertState = {
  message: string;
  type: "default" | "destructive" | null; // Use null to represent no alert
};


const Contact = () => {
    const ref = useSectionInView("Contact");

    const [alert, setAlert] = useState<AlertState>({ message: "", type: null });


    const handleSubmit = async (formData: FormData) => {
        const {response, error} = await sendEmail(formData);
        console.log(response, error);

        if (error) {
            setAlert({message: error, type: "destructive"});
        } else if (response) {
            setAlert({
                message: "Thank you very much for your email. I will reply soon!",
                type: "default",
            });
        }
    };

    return (
        <motion.section
            id={"contact"}
            ref={ref}
            className={"mb-20 sm:mb-28 w-[min(100%,48rem)]"}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            viewport={{once: true}}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className={"text-center text-gray-700 dark:text-gray-200 mb-4 -mt-6"}>
                Please contact me directly at{" "}
                <a className={"underline"} href={"mailto:danylo.burenkov@gmail.com"}>
                    danylo.burenkov@gmail.com
                </a>
            </p>
            {alert.message && alert.type && ( // Ensure alert.type is not null
                <div className="fixed-bottom-left">
                    <Alert variant={alert.type}>
                        {alert.type === "destructive" ? (
                            <AlertCircle className="h-10 w-5"/>
                        ) : (
                            <MailCheck className="h-10 w-5"/>
                        )}
                        <AlertTitle>
                            {alert.type === "destructive" ? "Error:" : "Email Sent!"}
                        </AlertTitle>
                        <AlertDescription>{alert.message}</AlertDescription>
                    </Alert>
                </div>
            )}

            <form
                className="focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                action={handleSubmit}
            >
                <input
                    name={"senderName"}
                    type="text"
                    placeholder="Name"
                    required={true}
                    maxLength={50}
                    style={{
                        display: "block",
                        width: "100%",
                        padding: "8px",
                        margin: "8px 0",
                        border: "1px solid gray",
                        borderRadius: "8px",
                    }}
                    className="focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <input
                    name={"senderEmail"}
                    type="email"
                    placeholder="Email"
                    required={true}
                    maxLength={50}
                    style={{
                        display: "block",
                        width: "100%",
                        padding: "8px",
                        margin: "8px 0",
                        border: "1px solid gray",
                        borderRadius: "8px",
                    }}
                    className="focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <textarea
                    name={"message"}
                    placeholder="Message"
                    required={true}
                    maxLength={5000}
                    style={{
                        display: "block",
                        width: "100%",
                        padding: "8px",
                        margin: "8px 0",
                        border: "1px solid gray",
                        borderRadius: "8px",
                        height: "10rem",
                    }}
                    className="focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <div className={"flex items-center justify-center"}>
                    <SubmitBtn/>
                </div>
            </form>
        </motion.section>
    );
};

export default Contact;
