import React from 'react'

import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className="contactForm">
            <form autoComplete="off">
                <div className="contactForm__group">
                    <div className="contactForm__inputWrapper">
                        <label htmlFor="nameID">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            id="nameID"
                            placeholder="What's your name?"
                            autoComplete="off"
                        />
                    </div>
                    <div className="contactForm__inputWrapper">
                        <label htmlFor="emailID">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            id="emailID"
                            placeholder="What's your email address?"
                            autoComplete="off"
                        />
                    </div>
                </div>

                <div className="contactForm__group">
                    <div className="contactForm__inputWrapper">
                        <label htmlFor="serviceID">Service</label>
                        <select name="service" id="serviceID">
                            <option value="0">What are you interested in?</option>
                            <option value="1">Need some help with a project</option>
                            <option value="2">Want to hire me full-time</option>
                            <option value="3">Want to offer me an internship</option>
                            <option value="4">Need to do some freelance work</option>
                            <option value="5">Just wanted to say hi!</option>
                        </select>
                    </div>
                    <div className="contactForm__inputWrapper">
                        <label htmlFor="budgetID">Budget</label>
                        <select name="budget" id="budgetID">
                            <option value="0">What's your budget?</option>
                            <option value="1">Rs 4k - 6k</option>
                            <option value="2">Rs 6k - 8k</option>
                            <option value="3">Rs 8k - 15k</option>
                            <option value="4">More than 15k</option>
                        </select>
                    </div>
                </div>

                <div className="contactForm__inputWrapper message">
                    <label htmlFor="messageID">Message</label>
                    <textarea
                        name="message"
                        id="messageID"
                        cols="30"
                        rows="10"
                        placeholder="What do yo want to say to me?"
                    ></textarea>
                </div>

                <button type="submit">
                    <span>Ping</span>
                    <span>Send</span>
                </button>
            </form>
        </div>
    )
}

export default ContactForm
