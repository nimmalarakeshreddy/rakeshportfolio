import React, { useState } from "react";

function Form() {
    const [submitted, setSubmitted] = useState(false); // Track form submission

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "05f79ee9-31b2-4abf-a4f4-8f549cc0dd1e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setSubmitted(true); // Show thank you message
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            {submitted ? (
                // Thank You Message
                <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-green-500 border rounded-lg">
                    <h2 className="text-2xl font-semibold text-white">Thank you!</h2>
                    <p className="text-white-700 mt-2">
                        Your message has been received. I'll get back to you soon!
                    </p>
                </div>
            ) : (
                // Contact Form
                <form onSubmit={onSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                        >
                            Submit Form
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Form;
