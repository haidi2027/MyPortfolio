import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
function Six() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_7ot874f",
                "contact_form",
                form.current,
                "i7uCODuRwKpH5xFgi"
            )
            .then(() => {
                alert("Message sent successfully!");
                form.current.reset();
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong!");
            });
    };

    return (
        <>
            <div
                className="w-full "
                id="contact"
            >
                <div className="words8">
                    <div className="flex justify-center items-center gap-3">
                        <div className="dashs" />

                        <h1 className="logo2">Contact</h1>

                        <div className="dashs" />
                    </div>

                    <div className="flex justify-center items-center gap-3 logo3">
                        <h5 className="h55">
                            Let's work together on your next project
                        </h5>
                    </div>
                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="inputss"
                >
                    <motion.label
                            className="lable"
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0. }}
                        htmlFor="name" style={{position: "absolute", top: "0px", left: "95px", color: "orange", fontSize: "14px"}}>
                        Name
                    </motion.label>

                    <motion.input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                    />

                    <motion.label 
                        className="lable"
                        initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        htmlFor="email" style={{position: "absolute", top: "110px", left: "95px", color: "orange", fontSize: "14px"}}>
                        Email
                    </motion.label>

                    <motion.input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your.email@example.com"
                        required
                        initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                    />

                    <motion.label
                        className="lable"
                        initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        htmlFor="message" style={{position: "absolute", top: "220px", left: "95px", color: "orange", fontSize: "14px"}}>
                        Message
                    </motion.label>

                    <motion.textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project"
                        required
                        initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                    />

                    <motion.button 
                        initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                        type="submit" className="bttn6 logo2">
                        Send Message
                    </motion.button>
                </form>
            </div>
        </>
    );
}

export default Six;