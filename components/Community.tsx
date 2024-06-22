/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const About = () => {
    return (
        <div className="bg-amber-100 min-h-screen flex items-center justify-center py-10">
            <div className="flex max-w-7xl mx-auto flex-col items-center justify-center gap-4 md:flex-row px-10 md:px-[10%]">
                <div className="flex w-full text-black flex-col items-center justify-center p-5">
                    <div className="relative flex h-full w-full items-center">
                        <div className="font-marker text-4xl text-center w-full mb-5 font-black">
                            <p className="underline underline--2">The பகிர் Community</p>
                        </div>
                    </div>
                    <p className="text-lg font-normal text-center ">
                        Pagir welcomes those in the age groups of 15-17 and 18-21. Anyone under the age of 18 will need to be accompanied by their parent or guardian until we have all agreed on what they need and wish to participate in. At Pagir, the physical and mental well being of the young adult is paramount. We ensure this by inviting facilitators who prioritise young people's safety and growth.
                        <br /> <br />
                        Events will be open to both adults and young people, but workshop sessions will be tailored to appropriate age groups. All sessions and events will be pre-scheduled and supervised by Pagir facilitators.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
