export default function NavBar() {
    return (
        <section className="overflow-hidden">
            <div className="relative px-6 lg:px-12 bg-blueGray-50">
                <div className="hidden xl:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 2xl:w-full 2xl:max-w-sm">
                    <div className="flex py-4 px-6 items-center rounded-3xl bg-white border-2 border-blueGray-100">
                        <svg
                            className="mr-4"
                            width={17}
                            height={18}
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.3315 16.1329L5.32812 11.687"
                                stroke="#8C949F"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.93161 12.5306C13.1148 12.5306 15.6953 9.94935 15.6953 6.76528C15.6953 3.5812 13.1148 1 9.93161 1C6.74844 1 4.16797 3.5812 4.16797 6.76528C4.16797 9.94935 6.74844 12.5306 9.93161 12.5306Z"
                                stroke="#8C949F"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <input className="w-full outline-none bg-transparent" type="search" />
                    </div>
                </div>
                <nav className="flex justify-between">
                    <div className="flex py-8 pl-2 lg:pl-0 pr-6 lg:pr-10 items-center border-r border-darkBlueGray-100">
                        <button className="navbar-burger text-blue-500">
                            <svg
                                width={25}
                                height={16}
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width={25} height={2} fill="currentColor" />
                                <rect y={14} width={25} height={2} fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden xl:flex items-center justify-between">
                        <a
                            className="relative inline-block text-darkBlueGray-300 hover:text-darkBlueGray-400"
                            href="#"
                        >
                            <div className="absolute bottom-0 right-0 flex items-center justify-center -mr-2 -mb-1 w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                                1
                            </div>
                            <svg
                                className="h-5"
                                width={20}
                                height={23}
                                viewBox="0 0 20 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 18.0121H19"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.87891 22H10.8789"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        <div className="flex-shrink-0 w-px h-10 bg-gray-100 ml-8 mr-10" />
                        <a
                            className="flex mr-10 items-center text-darkBlueGray-400 hover:text-darkBlueGray-500"
                            href="#"
                        >
                            <span className="inline-block mr-5 font-heading font-medium leading-tight">
                                Sona
                            </span>
                            <img
                                className="mr-4"
                                src="uinel-assets/elements/navigations/avatar-online.png"
                                alt=""
                            />
                            <svg
                                width={8}
                                height={5}
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                                    fill="#8C949F"
                                />
                            </svg>
                        </a>
                        <a
                            className="inline-block uppercase text-sm font-bold font-body border-2 border-gray-200 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-300"
                            href="#"
                        >
                            New project
                        </a>
                    </div>
                </nav>
            </div>
            <div className="h-8 xl:h-auto px-12 xl:py-3 bg-blueGray-100">
                <ul className="hidden xl:flex flex-wrap items-center mr-auto">
                    <li className="mr-6">
                        <a
                            className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                            href="#"
                        >
                            <span>Home</span>
                            <svg
                                className="ml-6"
                                width={4}
                                height={7}
                                viewBox="0 0 4 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </li>
                    <li className="mr-6">
                        <a
                            className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                            href="#"
                        >
                            <span>Tasks</span>
                            <svg
                                className="ml-6"
                                width={4}
                                height={7}
                                viewBox="0 0 4 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                            href="#"
                        >
                            Open tasks
                        </a>
                    </li>
                </ul>
            </div>
        </section>

    )
}