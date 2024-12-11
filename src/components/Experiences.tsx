import React from 'react';
import tw from 'tailwind-styled-components';
import Tutor from '../assets/tutor.png'
import Fiverr from '../assets/fiverr.jpeg';

function Experience(props: { image: string, position: string, setting: string, time: string, bio: string, bioShort: string }) {

    const { image, position, setting, time, bio, bioShort } = props;

    return (
        <ExperienceContainer>
            <div className="flex">
                <img src={image} className="sm:block hidden brightness-[80%] bg-white rounded-lg w-[70px] h-[70px]  mr-[10px]" />
                <div className="mt-[-4px]">
                    <h1 className="font-semibold text-gray-300 text-xl">{position}</h1>
                    <h1 className="font-semibold text-gray-500">{setting}</h1>
                    <h1 className="font-semibold text-gray-500">{time}</h1>
                </div>
            </div>
            <h1 className="sm:block hidden text-lg text-gray-400 mt-[10px]">{bio}</h1>
            <h1 className="sm:hidden block text-lg text-gray-400 mt-[10px]">{bioShort}</h1>
        </ExperienceContainer>
    )
}

export default function Experiences() {

    return (
        <ExperiencesContainer>
            {/* comp sci tutoring */}
            <Experience 
                image={Tutor}
                position="Computer Science Tutor"
                setting="Hybrid"
                time="Apr 2023 - present"
                bio={`
                    Experienced Computer Science Tutor with over a year of dedicated teaching across diverse age groups,
                    from kids to college students. Specializing in creating interactive and personalized learning experiences,
                    I adapt teaching methods to suit individual learning styles and needs. Through one-on-one and small group sessions,
                    I foster a supportive environment where students feel empowered to explore computer science concepts
                    and cultivate a passion for technology.
                `}
                bioShort={`
                    Experienced Computer Science Tutor with over a year of dedicated teaching across diverse age groups,
                    from kids to college students.
                `}
            />
            {/* fiverr freelance */}
            <Experience 
                image={Fiverr}
                position="Fiverr - Freelance Software Engineer"
                setting="Remote"
                time="Jan 2021 - present"
                bio={`
                    I've thrived as a freelance software engineer, collaborating with diverse clients to develop customized,
                    scalable solutions. My role encompasses fullstack development, bug fixing, and effective project management,
                    showcasing my ability to handle multiple projects and meet tight deadlines. This experience has not only enhanced
                    my technical proficiency but also honed my communication skills and adaptability in a dynamic freelance environment.
                    I take pride in delivering innovative solutions that exceed client expectations while staying abreast of industry trends.
                `}
                bioShort={`
                    I've thrived as a freelance software engineer, collaborating with diverse clients to develop customized,
                    scalable solutions.
                `}
            />
        </ExperiencesContainer>
    )
}

// experiences styled components
const ExperiencesContainer = tw.div`
    flex
    flex-col
`

const ExperienceContainer = tw.div`
    flex
    flex-col
    px-[20px]
    pt-[24px]
    pb-[20px]
    mt-[20px]
    rounded-lg
    bg-[#1f252e]
    bg-opacity-40
    border-[1px]
    border-[#1f252e]
    rounded-lg
`