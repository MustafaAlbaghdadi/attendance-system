import React, {Component} from 'react';


export class NavMenu extends Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div
                style={{
                    background: '#32373d'
                }}
                className="w-full xl:w-1/6 lg:w-2/12 md:w-2/6 text-center fixed bottom-0  md:top-0 md:right-0 h-16 sm:h-8 md:h-screen  md:border-gray-600">

                <div
                    style={{backgroundImage: `url('/bg1.jpg')`}}
                    className="w-full h-48 img bg-wrap text-center py-4 relative md:block sm:hidden">
                    <div className="absolute top-0 right-0 z-0  w-full h-full bg-teal-900 opacity-25">

                    </div>


                    <img className="rounded-full relative z-10 mx-auto w-24 h-24 mt-5 " src={"/logo.jpg"}/>

                    <p className="text-white font-bold relative mt-5 w-full z-10">Mustafa Albaghdadi</p>
                </div>

                <div className="md:relative ">
                    <ul className="list-reset flex flex-row md:flex-col text-center md:text-right">

                        <li className="flex-1" style={{borderBottom: '1px solid rgba(255, 255, 255, 0.05)'}}>
                            <a href="#"
                               className="transition duration-500 block py-1 md:py-5 pl-1 align-middle text-gray-800 no-underline   hover:bg-blue-500">
                                <i className="fas fa-link pr-0 md:pr-3"/>
                                 <span
                                    className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Link</span>
                            </a>
                        </li>


                        <li className="flex-1" style={{borderBottom: '1px solid rgba(255, 255, 255, 0.05)'}}>
                            <a href="#"
                               className="transition duration-500 block py-1 md:py-5 pl-1 align-middle text-gray-800 no-underline   hover:bg-blue-500">
                                <i className="fas fa-link pr-0 md:pr-3"/>
                                 <span
                                    className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Link</span>
                            </a>
                        </li>


                        <li className="flex-1" style={{borderBottom: '1px solid rgba(255, 255, 255, 0.05)'}}>
                            <a href="#"
                               className="transition duration-500 block py-1 md:py-5 pl-1 align-middle text-gray-800 no-underline   hover:bg-blue-500">
                                <i className="fas fa-link pr-0 md:pr-3"/>
                                 <span
                                    className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Link</span>
                            </a>
                        </li>


                        <li className="flex-1" style={{borderBottom: '1px solid rgba(255, 255, 255, 0.05)'}}>
                            <a href="#"
                               className="transition duration-500 block py-1 md:py-5 pl-1 align-middle text-gray-800 no-underline   hover:bg-blue-500">
                                <i className="fas fa-link pr-0 md:pr-3"/>
                                 <span
                                    className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Link</span>
                            </a>
                        </li>



                    </ul>
                </div>
            </div>
        );
    }
}
