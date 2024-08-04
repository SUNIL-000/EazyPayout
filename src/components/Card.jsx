import { Link } from "react-router-dom"
import { avatar } from "../assets/data"

const Card = () => {
    const data = [
        {
            src: "https://www.linkedin.com/in/sunil000/",
            link: "/linkedin.png"
        }, {
            src: "https://github.com/SUNIL-000/",
            link: "/github-sign.png"
        }, {
            src: "mailto:sunilsk2510@gmail.com",
            link: "/mail.png"
        }, {
            src: "https://www.linkedin.com/in/sunil000/",
            link: "/facebook.png"
        },
    ]
    return (
        <>

            <div className=" m-3 bg-[#f4f6f6] flex  flex-col items-center px-12 py-7 rounded-xl shadow-2xl ">
                <div>
                    <img src={avatar} height={120} width={120} className='rounded-full shadow-3xl mb-4 -my-16  border-2' alt="avatar" />
                </div>

                <div className="text-center mb-5 pb-2 rounded-sm border-gray-300  border-b-4 ">
                    <p className="text-xl text-[#4b3524a8] ">Sunil Kumar Sahoo</p>
                    <p className="text-3xl text-[#914F1E]">FullStack Developer</p>
                </div>
                <hr />
                <div className="flex flex-row md:gap-4 relative bottom-0">

                    {
                        data?.map((data, index) => {
                            return <Link to={data?.src} key={index} ><img src={data.link} height={30} width={30} alt="facebook" /></Link>
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default Card