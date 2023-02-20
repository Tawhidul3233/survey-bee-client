import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { user } from '../../features/userSlice';

const Subscription = () => {

    const activeUser = useSelector(user)

    return (
        <div className='my-20'>

            <div>
                <section className="py-6  ">
                    <div className="container p-4 mx-auto sm:p-10">
                        <div className="mb-12 space-y-4 text-center">
                            <h1 className="text-4xl font-semibold leading-tight">Choose Subscription for Better Experience</h1>
                            <p className="px-4 sm:px-8 lg:px-24 text-lg">Get an individual plan with features that you need, or create a team instead!</p>
                        </div>
                        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full ">
                            <div className="flex flex-col overflow-hidden rounded-md drop-shadow-lg">
                                <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-green-400 text-gray-100">
                                    <p className="text-2xl font-medium">Basic</p>
                                </div>
                                <div className="flex flex-col items-center justify-center px-2 py-8 bg-gray-200">
                                    <p className="text-5xl font-bold">$0</p>
                                    <span className="text-xl mt-2"> /month</span>
                                    <ul className="self-stretch flex-1 space-y-2 mt-5">
                                        <li className="flex justify-center space-x-2">
                                            <span>Always free</span>
                                        </li>
                                    </ul>
                                    <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-green-400 text-gray-100">
                                        <Link to={`${activeUser?.user ? "/dashboard/createasurvey" : "/login"}`}>{activeUser?.user ? "CREATE SURVEY" : "Sign Up"}</Link>
                                    </button>
                                    <ul className="self-stretch flex-1 space-y-2 mt-5">
                                        <li className="flex justify-center space-x-2">
                                            <span>Send unlimited surveys with</span>
                                        </li>
                                        <li className="flex justify-center space-x-2">
                                            <span>up to 10 questions.</span>
                                        </li>
                                        <li className="flex justify-center space-x-2">
                                            <span> Response limits apply. </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden rounded-md drop-shadow-lg">
                                <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-blue-800 text-gray-100">
                                    <p className="text-2xl font-medium">Individual Advantage</p>
                                </div>
                                <div className="flex flex-col items-center justify-center px-2 py-8 bg-gray-200">
                                    <p className="text-5xl font-bold">$30</p>
                                    <span className="text-xl mt-2"> /month</span>
                                    <ul className="self-stretch flex-1 space-y-2 mt-5">
                                        <li className="flex justify-center space-x-2">
                                            <span>Billed $350 annually</span>
                                        </li>
                                    </ul>
                                    <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-blue-800 text-gray-100">
                                        <Link to={`${activeUser?.user ? "/plans-pricing" : "/login"}`}>{activeUser?.user ? "SEE YOUR PLAN" : "Sign Up"}</Link>
                                    </button>
                                    <ul className="self-stretch flex-1 space-y-2 mt-5">
                                        <li className="flex justify-center space-x-2">
                                            <span>Get our most popular features for</span>
                                        </li>
                                        <li className="flex justify-center space-x-2">
                                            <span>creating, sending & analyzing</span>
                                        </li>
                                        <li className="flex justify-center space-x-2">
                                            <span>surveys.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden rounded-md drop-shadow-lg">
                                <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-purple-900 text-gray-100">
                                    <p className="text-2xl font-medium">Team Advantage</p>
                                </div>
                                <div className="flex flex-col items-center justify-center px-2 py-8 bg-gray-200">
                                    <p className="text-5xl font-bold">$25</p>
                                    <span className="text-xl mt-2"> /month</span>
                                    <ul className="self-stretch flex-1 space-y-2 mt-5">
                                        <li className="flex justify-center space-x-2">
                                            <span>Starting at 3 users, billed annually </span>
                                        </li>
                                    </ul>
                                    <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-purple-900 text-gray-100">
                                        <Link to={`${activeUser?.user ? "/plans-pricing" : "/login"}`}>{activeUser?.user ? "SEE ALL PLANS" : "Sign Up"}</Link>
                                    </button>
                                    <ul className="self-stretch flex-1 space-y-2 mt-5">
                                        <li className="flex justify-center space-x-2">
                                            <span>Collaboration tools and survey</span>
                                        </li>
                                        <li className="flex justify-center space-x-2">
                                            <span>features that help your </span>
                                        </li>
                                        <li className="flex justify-center space-x-2">
                                            <span>team work more efficiently.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Subscription;