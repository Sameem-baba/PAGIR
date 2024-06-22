import Image from "next/image"

const OurSpace = () => {
    return (
        <div id="ourspace" className="bg-white min-h-screen flex items-center justify-center py-10">
            <div className="flex flex-col items-center justify-center px-10 md:flex-row md:justify-between w-full max-w-7xl">
                <div className="flex flex-col items-center justify-center space-y-4 md:w-1/2">
                    <Image src="/space.jpg" alt="Our Space" height={400} width={400} objectFit="cover" className="rounded" />
                    <Image src="/bgImage.jpg" alt="Our Space" height={400} width={400} objectFit="cover" className="rounded" />

                </div>

                <div className="md:w-1/2">
                    <div className="relative flex h-full w-full items-center">
                        <div className="font-marker text-4xl text-center w-full mb-5 font-black">
                            <p className="underline underline--2">OUR SPACE</p>
                        </div>
                    </div>
                    <p className="text-md font-normal text-center ">
                        Pagir is an invitation to explore and co-create a space for and with you. We are an intimate community space which facilitates pre-scheduled workshops and events. Pagir is not a psychological therapy space, though we consider mental well-being to be a vital part of overall health and happiness.
                        <br /> <br />
                        We offer small-group workshops anchored in art and play based on different themes that are of interest to our young people. Our facilitators are writers, painters, musicians, photographers, educators, dancers, actors, body and movement workers. These practitioners will bring their practice and perspectives into an interactive space of exploration where we can learn and share together.
                        We curate and host events including supper and reading clubs, watching and chatting about a film together, playing and sharing music, watching and responding to new artistic ideas, dancing together, making art together.
                        <br /> <br />
                        We also offer individual mentorship sessions to young people who are seeking clarity and need a safe, inclusive space to discover their paths.                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurSpace