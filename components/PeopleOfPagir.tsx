/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

const PeopleOfPagir = () => {
    return (
        <div id="PeopleOfPagir" className="bg-white min-h-screen flex flex-col space-y-10 items-center justify-center py-10">
            <div className="flex flex-col items-center justify-center px-10 w-full max-w-7xl">
                <div className="relative flex h-full w-full items-center">
                    <div className="font-marker text-4xl text-center w-full mb-5 font-black">
                        <p className="underline underline--2">PEOPLE OF PAGIR</p>
                    </div>
                </div>
                <p className="text-md font-normal text-center ">
                    <b>Anjana</b> is an educator and mentor with over 15 years of practice in India and the UK. Anjana has been a learner-teacher primarily with young people in university and high school. She loves singing, animals, the ocean, being with trees quietly, blowing soap bubbles and pastel art.
                    <br /> <br />
                    <b>Archana</b> is a market researcher working with consumer and tech brands for over 15 years. She has called many places home -- Chennai, Ahmedabad, Mumbai, Singapore, San Francisco, New Jersey -- each helping her figure out what home and belonging mean. She's also a mom and takes immense joy in being part of her daughter's process of self discovery.
                    <br /> <br />
                    <b>Bharath</b> is a technologist with over 20 years of practice at the intersection of software engineering, design and public policy. He is a self taught photographer and editor, and loves taking long walks with his camera in hand.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center px-10 w-full max-w-7xl">
                <div className="relative flex h-full w-full items-center">
                    <div className="font-marker text-4xl text-center w-full mb-5 font-black">
                        <p className="underline underline--2">FRIENDS OF PAGIR</p>
                    </div>
                </div>
                <p className="text-md font-normal text-center ">
                    Pagir wouldn't be here without the without the many people who've supported and guided us. We acknowledge all of them, but in particular our parents, Bhavna, Nivi, Dakshana Lavanya, Isai, Sushmita, Geeta, Santosh and Sathish.
                </p>
            </div>


        </div>
    )
}

export default PeopleOfPagir