import Card from "../components/Card"
import EducationCard from "../components/EducationCard"

const About = () => {
    return (
        <section className=" ">

            <div className="flex flex-col justify-between items-center">

                <Card />

                <div className="md:mx-14 p-7 md:p-10 ">
                    <h3 className="capitalize text-2xl md:text-4xl text-center">
                    my <span className="text-[#914F1E]">Education</span></h3>


                    {/* work experience  */}
                    

                    <EducationCard data={{
                        school: "Jawahar Navodaya Vidyalaya",
                        course: "Higher secondary",
                        mark:"86.8%",
                        url: "https://upload.wikimedia.org/wikipedia/en/8/82/Jawahar_Navodaya_Vidyalaya_logo.png"
                    }} />
                    
                    <EducationCard data={{
                        school: "Ravenshaw University",
                        course: "Information Technology and Mang.",
                        mark:"8.68",
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6nACa9fuaHXES8lwJdImon9X5XAt7MQhKw&s"
                    }} />

                </div>
            </div>

        </section>
    )
}

export default About