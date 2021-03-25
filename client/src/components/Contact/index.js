import React from 'react'

import './Contact.css'
import ContactForm from './ContactForm'
import TreeItem from './TreeItem'

const Contact = () => {
    return (
        <div className="contact">
            <a href="#" className="contact__treeWrapper">
                <div className="contact__treeSection">
                    <TreeItem name={'Gmail'} iconClass={'fas fa-envelope'} />
                    <TreeItem name={'Linkedin'} iconClass={'fab fa-linkedin'} />
                    <TreeItem name={'GitHub'} iconClass={'fab fa-github'} />
                </div>
                <div className="contact__treeStem"></div>
                <div className="contact__treeSection">
                    <TreeItem name={'Instagram'} iconClass={'fab fa-instagram'} right />
                    <TreeItem
                        name={'Facebook'}
                        iconClass={'fab fa-facebook-square'}
                        right
                    />
                    <TreeItem name={'Twitter'} iconClass={'fab fa-twitter'} right />
                </div>
            </a>

            <div className="contact__header">
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
