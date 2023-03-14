export default function Footer() {
    return (<section>
        <div className="px-6 lg:px-12 py-6">
            <nav className="flex justify-between">
                <div className="flex w-full items-center">
                    <a href="#">
                        <img
                            className="h-12"
                            src="uinel-assets/logos/dashboard/uifive-gray-black.svg"
                            alt=""
                        />
                    </a>
                    <ul className="hidden xl:flex px-4 ml-14 2xl:ml-40 mr-auto">
                        <li className="mr-8 2xl:mr-14">
                            <a
                                className="flex items-center font-heading font-medium hover:text-darkBlueGray-400"
                                href="#"
                            >
                                <img
                                    className="mr-2"
                                    src="uinel-assets/elements/dashboard-navigations/dashboards.svg"
                                    alt=""
                                />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="mr-8 2xl:mr-14">
                            <a
                                className="flex items-center font-heading font-medium hover:text-darkBlueGray-400"
                                href="#"
                            >
                                <img
                                    className="mr-2"
                                    src="uinel-assets/elements/dashboard-navigations/users.svg"
                                    alt=""
                                />
                                <span>Users</span>
                            </a>
                        </li>
                        <li className="mr-8 2xl:mr-14">
                            <a
                                className="flex items-center font-heading font-medium hover:text-darkBlueGray-400"
                                href="#"
                            >
                                <img
                                    className="mr-2"
                                    src="uinel-assets/elements/dashboard-navigations/chat.svg"
                                    alt=""
                                />
                                <span>Chat</span>
                            </a>
                        </li>
                        <li className="mr-8 2xl:mr-14">
                            <a
                                className="flex items-center font-heading font-medium hover:text-darkBlueGray-400"
                                href="#"
                            >
                                <img
                                    className="mr-2"
                                    src="uinel-assets/elements/dashboard-navigations/add-mail.svg"
                                    alt=""
                                />
                                <span className="mr-6">Messages</span>
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
                        </li>
                        <li>
                            <a
                                className="flex items-center font-heading font-medium hover:text-darkBlueGray-400"
                                href="#"
                            >
                                <img
                                    className="mr-2"
                                    src="uinel-assets/elements/dashboard-navigations/folder.svg"
                                    alt=""
                                />
                                <span className="mr-6">Catalog</span>
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
                        </li>
                    </ul>
                    <div className="hidden xl:flex items-center">
                        <a
                            className="relative inline-block text-darkBlueGray-300 hover:text-darkBlueGray-400"
                            href="#"
                        >
                            <div className="absolute bottom-0 right-0 flex items-center justify-center -mr-2 -mb-1 w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                                1
                            </div>
                            <svg
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
                        <div className="flex-shrink-0 w-px h-12 bg-gray-100 ml-9 mr-10" />
                        <a
                            className="flex items-center text-darkBlueGray-400 hover:text-darkBlueGray-500"
                            href="#"
                        >
                            <div className="mr-6 text-right">
                                <span className="block font-heading font-medium leading-tight">
                                    Sona
                                </span>
                                <span className="font-heading font-medium text-xs text-darkBlueGray-300 uppercase leading-tight">
                                    Art Director
                                </span>
                            </div>
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
                    </div>
                </div>
                <button className="navbar-burger self-center xl:hidden">
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
            </nav>
        </div>
        <div className="hidden xl:block px-6 lg:px-12 py-6 bg-blueGray-100">
            <ul className="flex items-center">
                <li className="flex items-center">
                    <a
                        className="text-sm text-darkBlueGray-300 hover:text-darkBlueGray-400 font-heading font-medium"
                        href="#"
                    >
                        Inbox
                    </a>
                    <span className="inline-block mx-4">
                        <svg
                            width={4}
                            height={4}
                            viewBox="0 0 4 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx={2} cy={2} r={2} fill="#C8CDD3" />
                        </svg>
                    </span>
                </li>
                <li className="flex items-center">
                    <a
                        className="text-sm text-darkBlueGray-300 hover:text-darkBlueGray-400 font-heading font-medium"
                        href="#"
                    >
                        Archive
                    </a>
                    <span className="inline-block mx-4">
                        <svg
                            width={4}
                            height={4}
                            viewBox="0 0 4 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx={2} cy={2} r={2} fill="#C8CDD3" />
                        </svg>
                    </span>
                </li>
                <li className="flex items-center">
                    <a
                        className="text-sm text-darkBlueGray-300 hover:text-darkBlueGray-400 font-heading font-medium"
                        href="#"
                    >
                        File manager
                    </a>
                    <span className="inline-block mx-4">
                        <svg
                            width={4}
                            height={4}
                            viewBox="0 0 4 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx={2} cy={2} r={2} fill="#C8CDD3" />
                        </svg>
                    </span>
                </li>
                <li className="flex items-center">
                    <a
                        className="text-sm text-darkBlueGray-300 hover:text-darkBlueGray-400 font-heading font-medium"
                        href="#"
                    >
                        Calendar
                    </a>
                    <span className="inline-block mx-4">
                        <svg
                            width={4}
                            height={4}
                            viewBox="0 0 4 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx={2} cy={2} r={2} fill="#C8CDD3" />
                        </svg>
                    </span>
                </li>
                <li className="flex items-center">
                    <a
                        className="text-sm text-darkBlueGray-300 hover:text-darkBlueGray-400 font-heading font-medium"
                        href="#"
                    >
                        Help center
                    </a>
                </li>
            </ul>
        </div>
        <div className="navbar-menu hidden fixed top-0 left-0 bottom-0 w-full sm:w-5/6 max-w-max z-50">
            <div className="navbar-backdrop fixed inset-0 bg-darkGray-800 opacity-80" />
            <nav className="relative flex flex-col py-20 px-10 h-full w-full bg-blueGray-100 overflow-y-auto">
                <button className="navbar-close absolute top-10 right-10">
                    <svg
                        width={14}
                        height={13}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="13.495"
                            y1="0.494975"
                            x2="1.49498"
                            y2="12.495"
                            stroke="#326BFF"
                            strokeWidth="1.4"
                        />
                        <line
                            x1="12.505"
                            y1="12.495"
                            x2="0.505026"
                            y2="0.494976"
                            stroke="#326BFF"
                            strokeWidth="1.4"
                        />
                    </svg>
                </button>
                <a className="inline-block mb-12" href="#">
                    <img
                        className="h-12"
                        src="uinel-assets/logos/dashboard/uifive-white-black.svg"
                        alt=""
                    />
                </a>
                <ul className="mb-16">
                    <li>
                        <a
                            className="flex items-center pl-10 pr-24 py-4 bg-white rounded-3xl font-medium font-heading"
                            href="#"
                        >
                            <img
                                className="mr-5"
                                src="uinel-assets/elements/dashboard-navigations/dashboards.svg"
                                alt=""
                            />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center pl-10 pr-24 py-4 bg-transparent rounded-3xl font-medium font-heading"
                            href="#"
                        >
                            <img
                                className="mr-5"
                                src="uinel-assets/elements/dashboard-navigations/users.svg"
                                alt=""
                            />
                            <span>Users</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center pl-10 pr-24 py-4 bg-transparent rounded-3xl font-medium font-heading"
                            href="#"
                        >
                            <img
                                className="mr-5"
                                src="uinel-assets/elements/dashboard-navigations/chat.svg"
                                alt=""
                            />
                            <span>Chat</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center pl-10 pr-24 py-4 bg-transparent rounded-3xl font-medium font-heading"
                            href="#"
                        >
                            <img
                                className="mr-5"
                                src="uinel-assets/elements/dashboard-navigations/dashboards.svg"
                                alt=""
                            />
                            <span>Chat</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center pl-10 pr-8 w-full py-4 bg-transparent rounded-3xl font-medium font-heading"
                            href="#"
                        >
                            <img
                                className="mr-5"
                                src="uinel-assets/elements/dashboard-navigations/add-mail.svg"
                                alt=""
                            />
                            <span className="mr-auto">Messages</span>
                            <svg
                                width={8}
                                height={5}
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.97291 0.19311C7.20854 -0.0645328 7.58938 -0.0645328 7.82328 0.19311C8.05804 0.450753 8.05978 0.867019 7.82328 1.12466L4.42529 4.80665C4.19053 5.06429 3.81056 5.06429 3.57406 4.80665L0.176073 1.12466C-0.0586909 0.86798 -0.0586909 0.450753 0.176073 0.19311C0.411706 -0.0645328 0.792544 -0.0645328 1.02644 0.19311L4.00098 3.21272L6.97291 0.19311Z"
                                    fill="#8C949F"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center pl-10 pr-8 w-full py-4 bg-transparent rounded-3xl font-medium font-heading"
                            href="#"
                        >
                            <img
                                className="mr-5"
                                src="uinel-assets/elements/dashboard-navigations/folder.svg"
                                alt=""
                            />
                            <span className="mr-auto">Catalog</span>
                            <svg
                                width={8}
                                height={5}
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.97291 0.19311C7.20854 -0.0645328 7.58938 -0.0645328 7.82328 0.19311C8.05804 0.450753 8.05978 0.867019 7.82328 1.12466L4.42529 4.80665C4.19053 5.06429 3.81056 5.06429 3.57406 4.80665L0.176073 1.12466C-0.0586909 0.86798 -0.0586909 0.450753 0.176073 0.19311C0.411706 -0.0645328 0.792544 -0.0645328 1.02644 0.19311L4.00098 3.21272L6.97291 0.19311Z"
                                    fill="#8C949F"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
                <span className="inline-block mb-6 text-sm text-darkBlueGray-400 font-heading font-medium">
                    New tools
                </span>
                <ul className="mb-16">
                    <li>
                        <a
                            className="flex items-center pl-10 pr-24 py-4 bg-transparent rounded-3xl font-medium font-heading"
                            href="#"
                        >
                            <img
                                className="mr-5"
                                src="uinel-assets/elements/dashboard-navigations/pointer.svg"
                                alt=""
                            />
                            <span>Location</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center pl-10 pr-24 py-4 bg-transparent rounded-3xl font-medium font-heading"
                            href="#"
                        >
                            <img
                                className="mr-5"
                                src="uinel-assets/elements/dashboard-navigations/document.svg"
                                alt=""
                            />
                            <span>Documents</span>
                        </a>
                    </li>
                </ul>
                <ul className="pb-24 mb-auto">
                    <li>
                        <a
                            className="text-sm text-darkBlueGray-400 font-heading font-medium leading-8"
                            href="#"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-sm text-darkBlueGray-400 font-heading font-medium leading-8"
                            href="#"
                        >
                            Help center
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-sm text-darkBlueGray-400 font-heading font-medium leading-8"
                            href="#"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="pt-8 border-t border-blueGray-200">
                    <span className="inline-block mb-5 text-sm text-darkBlueGray-400 font-heading font-medium">
                        Upcoming
                    </span>
                    <a
                        className="flex items-center py-4 px-6 bg-white rounded-3xl shadow-lg text-darkBlueGray-300 hover:text-darkBlueGray-400"
                        href="#"
                    >
                        <img
                            className="w-10 sm:w-14 h-10 sm:h-14 mr-2 sm:mr-5"
                            src="uinel-assets/images/dashboard-navigations/avatar-image.png"
                            alt=""
                        />
                        <div className="pr-1 mr-auto">
                            <span className="block text-sm text-darkBlueGray-900 font-heading font-medium leading-tight">
                                Product design
                            </span>
                            <span className="text-xs text-darkBlueGray-300 font-medium leading-tight">
                                MON, 8 AM
                            </span>
                        </div>
                        <svg
                            width={5}
                            height={8}
                            viewBox="0 0 5 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.193232 1.02782C-0.064411 0.79219 -0.064411 0.411351 0.193232 0.177457C0.450875 -0.0573063 0.867141 -0.0590449 1.12478 0.177457L4.80677 3.57544C5.06441 3.8102 5.06441 4.19017 4.80677 4.42668L1.12478 7.82466C0.868102 8.05942 0.450875 8.05942 0.193232 7.82466C-0.0644107 7.58903 -0.0644107 7.20819 0.193232 6.97429L3.21284 3.99975L0.193232 1.02782Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                </div>
            </nav>
        </div>
    </section>
    )
}