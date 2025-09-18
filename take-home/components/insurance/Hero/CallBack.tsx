'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const CallBack = () => {
    const [ phoneNumber, setPhoneNumber ] = useState("");

    // Putting this here since we're already using client
    useEffect(() => {
        console.log("page_view");
    },[]);

    const isValidPhonenumber = (phone: string) => {
        const pattern = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/;
        return pattern.test(phone);
    }

    const onPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("form_submit_attempt");

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
        <div className="max-w-3xl mx-auto">
            <div className="bg-green-900 bg-opacity-50 border border-white/12 rounded-2xl p-6">
                <h3 className="text-center text-lg font-semibold mb-2">Don&apos;t have time to call?</h3>
                <p className="text-center text-gray-200 mb-6">Leave your number &mdash; we&apos;ll call you back in 2 minutes</p>
                <form className="flex flex-col md:flex-row space-x-3" onSubmit={onPost}>
                    <input 
                        className="w-full sm:flex-1 px-3 sm:px-4 py-3 bg-transparent border-2 border-green-800 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-green-400 text-sm sm:text-base"
                        type="tel"
                        placeholder="Your phone number"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                    <button type="submit" className="w-full sm:w-auto bg-white text-black px-4 sm:px-3 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base gap-2">
                        Call me back
                        <Image
                            src="/icons/call-inbound.svg"
                            width={15}
                            height={15}
                            alt="Inbound Call"
                        />
                    </button>
                </form>
            </div>
        </div>
    );
}
 
export default CallBack;