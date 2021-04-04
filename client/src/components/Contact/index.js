import React from 'react'

import './Contact.css'
import ContactForm from './ContactForm'
import TreeItem from './TreeItem'

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
                        link="https://www.linkedin.com/in/kumarsks619"
                    />
                    <TreeItem
                        name={'GitHub'}
                        iconClass={'fab fa-github'}
                        link="https://github.com/kumarsks619"
                    />
                </div>
                <div className="contact__treeStem"></div>
                <div className="contact__treeSection">
                    <TreeItem
                        name={'Instagram'}
                        iconClass={'fab fa-instagram'}
                        link="https://www.instagram.com/blck_tie"
                        right
                    />
                    <TreeItem
                        name={'Facebook'}
                        iconClass={'fab fa-facebook-square'}
                        link="https://www.facebook.com/kumarsks619"
                        right
                    />
                    <TreeItem
                        name={'Twitter'}
                        iconClass={'fab fa-twitter'}
                        link="https://twitter.com/kumarsks619"
                        right
                    />
                </div>
            </div>

            <div className="contact__header" id="formID">
                <span></span>
                <h1>Drop a message here!</h1>
                <span></span>
            </div>
            <p className="contact__headerDesc">
                Got a project? Drop me a line if you want to work together on something
                exciting.
            </p>

            <ContactForm />
        </div>
    )
}

export default Contact
