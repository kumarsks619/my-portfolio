import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { messageSend } from '../../../store/actions'
import LottieComp from '../../../utils/Comp/LottieComp'
import loaderLottie from '../../../assets/lotties/loader.json'
import './ContactForm.css'

const ContactForm = () => {
    const dispatch = useDispatch()
    const { loading, success } = useSelector((state) => state.message)

    const initialInputsVals = {
        name: '',
        email: '',
        service: '0',
        budget: '0',
        message: '',
    }
    const [inputVals, setInputVals] = useState(initialInputsVals)

    const handleOnChange = (e) => {
        setInputVals({
            ...inputVals,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        dispatch(messageSend(inputVals))
    }

    useEffect(() => {
        if (success) {
            setInputVals(initialInputsVals)
        }
    }, [success])

    return (
        <div className="contactForm">
            {loading ? (
                <LottieComp lotteData={loaderLottie} height={200} width={200} />
            ) : (
                <form autoComplete="off" onSubmit={handleOnSubmit}>
                    <div className="contactForm__group">
                        <div className="contactForm__inputWrapper">
                            <label htmlFor="nameID">Your Name</label>
                            <input
                                required
                                type="text"
                                name="name"
                                id="nameID"
                                placeholder="What's your name?"
                                autoComplete="off"
                                value={inputVals.name}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="contactForm__inputWrapper">
                            <label htmlFor="emailID">Your Email</label>
                            <input
                                required
                                type="email"
                                name="email"
                                id="emailID"
                                placeholder="What's your email address?"
                                autoComplete="off"
                                value={inputVals.email}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>

                    <div className="contactForm__group">
                        <div className="contactForm__inputWrapper">
                            <label htmlFor="serviceID">Service</label>
                            <select
                                required
                                name="service"
                                id="serviceID"
                                value={inputVals.service}
                                onChange={handleOnChange}
                            >
                                <option value="0">What are you interested in?</option>
                                <option value="Need some help with a project">
                                    Need some help with a project
                                </option>
                                <option value="Want to hire me full-time">
                                    Want to hire me full-time
                                </option>
                                <option value="Want to offer me an internship">
                                    Want to offer me an internship
                                </option>
                                <option value="Need to do some freelance work">
                                    Need to do some freelance work
                                </option>
                                <option value="Just wanted to say hi!">
                                    Just wanted to say hi!
                                </option>
                            </select>
                        </div>
                        <div className="contactForm__inputWrapper">
                            <label htmlFor="budgetID">Budget</label>
                            <select
                                name="budget"
                                id="budgetID"
                                value={inputVals.budget}
                                onChange={handleOnChange}
                            >
                                <option value="0">What's your budget?</option>
                                <option value="Rs 4k - 6k">Rs 4k - 6k</option>
                                <option value="Rs 6k - 8k">Rs 6k - 8k</option>
                                <option value="Rs 8k - 15k">Rs 8k - 15k</option>
                                <option value="More than 15k">More than 15k</option>
                            </select>
                        </div>
                    </div>

                    <div className="contactForm__inputWrapper message">
                        <label htmlFor="messageID">Message</label>
                        <textarea
                            required
                            name="message"
                            id="messageID"
                            cols="30"
                            rows="10"
                            placeholder="What do yo want to say to me?"
                            value={inputVals.message}
                            onChange={handleOnChange}
                        ></textarea>
                    </div>

                    <button type="submit">
                        <span>Ping</span>
                        <span>Send</span>
                    </button>
                </form>
            )}
        </div>
    )
}

export default ContactForm
