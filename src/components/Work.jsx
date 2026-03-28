import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='experience'
            className='py-20 bg-dark-100'
        >
            <div className='container mx-auto px-6 '>
                <h2 className='text-3xl font-bold text-center mb-4'>Work
                    <span className='text-purple'>Experience</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto
                mb-16'> Developed multiple student projects using HTML, CSS, JavaScript, and Java.
                    Built simple and responsive UIs and added basic interactive features.
                    Applied programming concepts learned in coursework to real mini-projects.
                    Gained hands-on experience with problem-solving and writing clean code.</p>
            </div>

        </motion.div>
    )
}

export default Work
