
import java from '../../public/java.png';
import spring from '../../public/spring.png';
import oracle from '../../public/oracle.png';
import javascript from '../../public/javascript.png';
import html from '../../public/html.png';
import css from '../../public/css.jpg';
import mongodb from '../../public/mongodb.jpg'
import express from '../../public/express.png'

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML"
        },
        {
            id: 2,
            logo: express,
            name: "Express"
        },
        {
            id: 3,
            logo: css,
            name: "CSS"
        },
        {
            id: 4,
            logo: oracle,
            name: "Oracle"
        },
        {
            id: 5,
            logo: spring,
            name: "Spring"
        },
        {
            id: 6,
            logo: java,
            name: "Java"
        },
        {
            id: 7,
            logo: javascript,
            name: "Javascript"
        },
        {
            id: 8,
            logo: mongodb,
            name: "Mongodb"
        },
    ];

    return (
        <div  name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div>
                <h1 className="text-3xl font-bold mb-5">Experience</h1>
                <p className="">I'have  some  understanding and  experience in below technology</p>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                    {cardItem.map(({ id, logo, name }) => (
                        <div key={id} className="flex flex-col items-center border-[2px] rounded-full md:w-[200px] md:[200px] p-1 cursor-pointer hover:scale-110 duration-300">
                            <img src={logo} alt={name} className="w-[150px] rounded-full " />
                            <div className="">
                                <div className="">{name}</div>
                               
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;

