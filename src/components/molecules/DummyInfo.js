import React from 'react';

const DummyInfo = ({}) => {
    return (
        <div className="bg-white shadow overflow-hidden  sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Applicant Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                    Personal details and application.
                </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900">
                            Margot Foster
                        </dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                            Application for
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900">
                            Backend Developer
                        </dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900">
                            margotfoster@example.com
                        </dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                            Salary expectation
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900">
                            $120,000
                        </dd>
                    </div>
                    <div className="sm:col-span-2">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                            About
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa
                            consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in
                            ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui
                            eu.
                        </dd>
                    </div>
                    <div className="sm:col-span-2">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                            Attachments
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900">
                            <ul className="border border-gray-200 rounded-md">
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                                    <div className="w-0 flex-1 flex items-center">
                                        <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                        <span className="ml-2 flex-1 w-0 truncate">
                  resume_back_end_developer.pdf
                </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#"
                                           className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                                            Download
                                        </a>
                                    </div>
                                </li>
                                <li className="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                                    <div className="w-0 flex-1 flex items-center">
                                        <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                        <span className="ml-2 flex-1 w-0 truncate">
                  coverletter_back_end_developer.pdf
                </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#"
                                           className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                                            Download
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
};

export default DummyInfo
