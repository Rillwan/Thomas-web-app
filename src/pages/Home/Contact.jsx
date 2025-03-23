import ContactBg from '../../assets/Images/bg-contact.png'
import { useRef, useState } from "react"
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
    const [Form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    // SUBMIT CONTACT FORM DATA
    const handleSubmit = async (e) => {
        e.preventDefault();
        // API URL
        const api = 'https://server.clocheret.com/send-email';
        try {
            const response = await axios.post(api,
                {
                    fullName: Form?.name,
                    email: Form?.email,
                    subject: Form?.subject,
                    message: Form?.message
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            console.log(response?.data);
            alert('Form submitted successfully');
            setForm({ name: '', email: '', subject: '', message: '' });
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
                            <input
                                required
                                value={Form?.name}
                                onChange={(e) => setForm({ ...Form, name: e.target.value })}
                                name='name' id='name'
                                type="text" placeholder="Full Name" className="custom-bg-secondary" />
                            <input
                                required
                                value={Form?.email}
                                onChange={(e) => setForm({ ...Form, email: e.target.value })}
                                name='email' id='email'
                                type="email" placeholder="Email" className="custom-bg-secondary" />
                            <input
                                required
                                value={Form?.subject}
                                onChange={(e) => setForm({ ...Form, subject: e.target.value })}
                                name='subject'
                                type="text" placeholder="Subject" className="custom-bg-secondary" />
                            <textarea
                                required
                                value={Form?.message}
                                onChange={(e) => setForm({ ...Form, message: e.target.value })}
                                name='message'
                                placeholder="Add your message" className="custom-bg-secondary " rows={6} />
                        </div>
                        <button
                            type='submit'
                            className="btn bg-white text-black w-full rounded-lg mt-2">Send a message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
