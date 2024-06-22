import React from 'react'

const Events = () => {
    return (
        <div id="events" className="bg-amber-100 min-h-screen flex items-center justify-center py-10">
            <div className="flex max-w-7xl mx-auto flex-col items-center justify-center gap-4 md:flex-row px-10 md:px-[10%]">
                <div className="flex w-full text-black flex-col items-center justify-center p-5">
                    <div className="relative flex h-full w-full items-center">
                        <div className="font-marker text-4xl text-center w-full mb-5 font-black">
                            <p className="underline underline--2">EVENTS</p>
                        </div>
                    </div>
                    <p className="text-lg font-normal text-center ">
                        Events at Pagir will include supper and reading clubs, watching and chatting about a film together, playing and sharing music, watching and responding to new artistic ideas, dancing together, making art together and plenty more.
                        <br /> <br />
                        We are just starting up, and will have a calendar of events up shortly.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Events