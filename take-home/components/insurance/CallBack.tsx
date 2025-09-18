'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const CallBack = () => {
    const [ phoneNumber, setPhoneNumber ] = useState("");

    const isValidPhonenumber = (phone: string) => {
        const pattern = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/;
        return pattern.test(phone);
    }

    const onPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isValidPhonenumber(phoneNumber)) {
            console.log("form_submit_fail");
            return;
        };

        const res = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: JSON.stringify(phoneNumber),            
        })

        if (!res.ok) {
            console.log("form_submit_fail");
            return;
        }

        console.log("form_submit_success");
    }


    return (
        <div className="w-full max-w-2xl mx-auto rounded-2xl bg-green-900 border border-green-800 shadow-lg px-4 py-6 sm:px-6 sm:py-8">
            <h1 className="text-center text-white text-lg font-semibold">Don&apos;t have time to call?</h1>
            <h2 className="mt-1 text-center text-green-200 text-sm">Leave your number &mdash; we&apos;ll call you back in 2 minutes</h2>
            <form className="mt-5 w-full flex flex-col items-stretch gap-3" onSubmit={onPost}>
                <input 
                    className="flex-1 h-12 rounded-xl bg-green-800/60 border border-green-700 px-4 text-white placeholder:text-green-200/60 focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-400/60 md:py-5"
                    type="text"
                    placeholder="Your phone number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <button type="submit" className="h-10 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 font-semibold px-4 sm:px-5 whitespace-nowrap shadow-md hover:shadow-lg transition">
                    Call me back
                    <Image 
                        src="/icons/call-inbound.svg"
                        width={10}
                        height={10}
                        alt="Inbound Call"
                    />
                </button>
            </form>
        </div>
    );
}
 
export default CallBack;