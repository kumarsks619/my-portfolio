import React from 'react'

import { SOCIAL } from '../../utils/constants'
import ContactForm from './ContactForm'
import TreeItem from './TreeItem'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__treeWrapper">
                <div className="contact__treeSection">
                    <TreeItem
                        name={'Gmail'}
                        iconClass={'far fa-envelope'}
                        link="mailto:kumarsks619@gmail.com"
                    />
                    <TreeItem
                        name={'Linkedin'}
                        iconClass={'fab fa-linkedin'}
                        link={SOCIAL.LINKEDIN}
                    />
                    <TreeItem
                        name={'GitHub'}
                        iconClass={'fab fa-github'}
                        link={SOCIAL.GITHUB}
                    />
                </div>
                <div className="contact__treeStem"></div>
                <div className="contact__treeSection">
                    <TreeItem
                        name={'Instagram'}
                        iconClass={'fab fa-instagram'}
                        link={SOCIAL.INSTAGRAM}
                        right
                    />
                    <TreeItem
                        name={'Facebook'}
                        iconClass={'fab fa-facebook-square'}
                        link={SOCIAL.FACEBOOK}
                        right
                    />
                    <TreeItem
                        name={'Twitter'}
                        iconClass={'fab fa-twitter'}
                        link={SOCIAL.TWITTER}
                        right
                    />
                </div>
            </div>

            <div className="contact__header" id="formID" data-aos="zoom-in">
                <span></span>
                <h1>Drop a message here!</h1>
                <span></span>
            </div>
            <p className="contact__headerDesc" data-aos="zoom-in">
                Got a project? Drop me a line if you want to work together on something
                exciting.
            </p>

            <ContactForm />
        </div>
    )
}

export default Contact
