import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { project } from '../assets/data'

const Project = () => {
    return (
        <section className='my-8 '>
            <h1 className=' text-center text-2xl md:text-4xl my-3'>my <span className='text-[#914F1E] '>projects</span></h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-8'>
                {
                    project.map((data,index) => {

                        return <ProjectCard key={index} data={data} />
                    })
                }
            </div>
        </section>
    )
}

export default Project