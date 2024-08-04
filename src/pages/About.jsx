import Card from "../components/Card"

const About = () => {
    return (
        <section className="bg-[#f8f9f9] ">

            <div className="flex flex-col justify-between items-center">

                <Card />

                <div className="md:mx-14 p-7 md:p-10 ">
                    <h3 className="capitalize text-2xl md:text-4xl text-center">my <span className="text-[#914F1E]">background</span></h3>


                    {/* work experience  */}
                    <p>

                    <div className="mt-4">

                        <h1 className="text-xl text-[#914F1E] underline">Work experience</h1>
                        <h3 className=" text-[#503521]">DatStek pvt ltd</h3>
                        <li className=" text-[#322012bc]">Fullstack developer Itern</li>
                    </div>

                    <div className="mt-4">
                        <h1 className="text-xl text-[#914F1E] underline">Education</h1>
                        <h3 className="text-[#503521]">JNV cuttack</h3>
                        <li className=" text-[#322012bc]">Higher secondary 86.8% </li>
                        
                        <h3 className="text-[#503521]" >Ravenshaw University</h3>
                        <li className=" text-[#322012bc]" >Information Technology and management (8.68 sgpa) </li>
                    </div>
                    </p>


                </div>
            </div>

        </section>
    )
}

export default About