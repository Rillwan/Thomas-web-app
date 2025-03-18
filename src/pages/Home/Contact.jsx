import ContactBg from '../../assets/Images/bg-contact.png'
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import axios from 'axios'

const InputVariants = {
    offscreen: {
        scale: 0.5,
    },
    onscreen: {
        scale: 1,
        transition: { delay: 0.05, duration: 0.4, ease: "easeIn" },
    },
};

const Contact = () => {
    const scrollRef = useRef(null);
    const [FormData,setFormData] = useState({
        name:'',
        email:'',
        subject:'',
        message:'',
    })

    // SUBMIT CONTACT FORM DATA
    const handleSubmit = async(e) => {
        e.preventDefault();
        // API URL
        console.log(FormData);
        const api = '';
        try {
            const response = await axios.post(api, FormData);
            console.log(response?.data);
            alert('Form submitted successfully');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <section className='mt-16' id="contact">
            <div className="container p-6 sm:p-12 border rounded-2xl bg-cover" style={{ backgroundImage: `url(${ContactBg})` }}>
                <h3 className="text-2xl text-center font-medium">Get in touch</h3>
                <p className="mt-2 text-center max-w-[420px] mx-auto">
                    Whether you have a project in mind or just want
                    to say hello, I'd love to hear from you
                </p>
                {/* FORM  */}
                <div className="max-w-[500px] mx-auto mt-6" ref={scrollRef}>
                    <form onSubmit={handleSubmit}>
                        <div className="rounded-xl grid gap-[1px] overflow-hidden">
                            <motion.input
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ root: scrollRef }}
                                variants={InputVariants}
                                required 
                                value={FormData?.name}
                                onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
                                type="text" placeholder="Full Name" className="custom-bg-secondary" />
                            <motion.input
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ root: scrollRef }}
                                variants={InputVariants}
                                required 
                                value={FormData?.email}
                                onChange={(e) => setFormData({ ...FormData, email: e.target.value })}
                                type="email" placeholder="Email" className="custom-bg-secondary" />
                            <motion.input
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ root: scrollRef }}
                                variants={InputVariants}
                                required 
                                value={FormData?.subject}
                                onChange={(e) => setFormData({ ...FormData, subject: e.target.value })}
                                type="text" placeholder="Subject" className="custom-bg-secondary" />
                            <motion.textarea
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ root: scrollRef }}
                                variants={InputVariants}
                                required 
                                value={FormData?.message}
                                onChange={(e) => setFormData({ ...FormData, message: e.target.value })}
                                placeholder="Add your message" className="custom-bg-secondary " rows={6} />
                        </div>
                        <motion.button
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ root: scrollRef }}
                            variants={InputVariants}
                            type='submit'
                            className="btn bg-white text-black w-full rounded-lg mt-2">Send a message</motion.button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
