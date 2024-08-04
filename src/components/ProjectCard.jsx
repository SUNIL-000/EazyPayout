import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({data}) => {
    return (
        <div className='mx-auto'>

            <div>
                <img src={data?.url} className=' h-[12rem] md:h-[14rem] w-[22rem] md:w-[28rem] rounded-xl hover:opacity-[0.9] transition-all' alt="project" />
            </div>

            <h4 className='text-xl mt-2 capitalize'>{data?.name} </h4>
            <div className='flex  gap-3'>
                <Link to={data?.link}  className='bg-[#d89766e9] hover:bg-[#d57d3a] transition-all rounded-full px-4 py-1 '>Demo</Link>
                <Link to={data?.link} className='bg-[#d89766e9] hover:bg-[#d57d3a] transition-all rounded-full px-4 py-1 '>Link</Link>
            </div>

        </div>
    )
}

export default ProjectCard