import React from 'react'

const EducationCard = ({data}) => {
    return (
        <div className="py-8 px-8 my-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={data.url} alt="Woman's Face" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-xl text-black font-medium">
                            {data.school}
                    </p>
                    <p className="text-slate-500 text-md font-medium">
                             {data.course}

                    </p>
                </div>
                <button className=" text-purple-600 text-xl font-medium rounded-full ">{data.mark}</button>
            </div>
        </div>

    )
}

export default EducationCard