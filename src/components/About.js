import React, { Component } from 'react'
import Header from './projects/Header'
import about from '../img/about.jpg'
import Footer from './Footer'

export default class About extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header name="About" bgImg={about} />
                <div id="about">
                    <p>
                        Adamas Robotics and Artificial Intelligence Club was
                        founded on 28th November 2017. We are housed on the 1st
                        floor of Electronics and Communication Engineering block
                        of Adamas University. The club was officially sanctioned
                        by Prof. Samit Ray, Chancellor AU, Prof. Dr. Madhusudan
                        Chakraborty, Vice Chancellor, AU and Dr. Shyamal Pabi.
                        The club was inaugurated by padma shri Prof Dr. Ajay Kr.
                        Ray. The Club initially started with only 7 members. The
                        club is efficiently leaded by the students. It follows
                        the full student policy of “For the student, Of the
                        student and By the student”.
                    </p>
                    <h2>What do we do?</h2>
                    <ul>
                        <li>In Robotics and AI society we innovate.</li>
                        <li>
                            We tackle real life problems, we engineer the
                            technology.
                        </li>
                        <li>
                            We organise learning sessions, hands-on sessions for
                            our members.
                        </li>
                        <li>We build machines, bots, rovers and platforms.</li>
                        <li>
                            We design and fabricate PCB’s(Printed Circuit
                            Board).
                        </li>
                        <li>
                            We develop Automation technologies and IoT (Internet
                            of Things) technologies for different industrial and
                            smart city purpose.
                        </li>
                        <li>
                            We work with Computer Vision and AI and their
                            application in Robotics.
                        </li>
                        <li>
                            We take up research and solve problems with our own
                            hands.
                        </li>
                        <li>
                            We take up new members and and mentor them for the
                            future.
                        </li>
                        <li>
                            We do outreach activities for Schools and Colleges.
                        </li>
                    </ul>
                    <h2>Why join us?</h2>

                    <ul>
                        <li>
                            Robotics and AI is a multidisciplinary subject and
                            it is a blooming field.
                        </li>
                        <li>
                            The future of engineering is Automation and
                            Robotics.
                        </li>
                        <li>
                            Apply your class knowledge and engineer some real
                            life problems with hands on work.
                        </li>
                        <li>
                            Get hands on experience and boost your job prospect.
                        </li>
                        <li>
                            Get an edge with research while applying for higher
                            education abroad as well as in India.
                        </li>
                        <li>
                            Get hands-on experience in Electronics, Mechanics,
                            Engineering Drawing, Coding, Biological Engineering,
                            Mathematics.
                        </li>
                        <li>Learn by doing (a research oriented approach).</li>
                        <li>
                            Compete in world class research project
                            competitions.
                        </li>
                        <li>
                            Get your work recognised with research papers
                            published in conferences and journals.
                        </li>
                        <li>
                            Get to collaborate with like minded individuals and
                            mentors and learn from them.{' '}
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}
