import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div>
            <section className="py-6  dark:text-gray-900">
                <div className="container mx-auto p-4 sm:p-10">
                    <div className="mb-16 space-y-4 text-center">
                        <h1 className="text-5xl font-semibold leading-tight">Choose a plan that works for you</h1>
                        <p className="px-4 sm:px-8 lg:px-24">Sunt suscipit eaque qui iure unde labore numquam iusto alias explicabo, pariatur ipsam, cupiditate aliquid modi?</p>
                        
                    </div>
                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
                        <div className="relative z-0 flex flex-col items-center p-8 border ">

                            <p className="mt-2 text-3xl font-semibold dark:text-green-700">TEAM ADVANTAGE</p>

                            <p className="text-3xl mt-2 font-bold">$0<span className="text-xl text-gray-500 mt-2"> /user /month</span></p>

                            <button className="px-28 py-2 mb-5 mt-6 text-lg font-semibold rounded-sm sm:mt-5 dark:bg-green-700 dark:text-gray-100">
                                <Link to="/login">SIGN UP</Link>
                            </button>

                            <ul class="marker:text-green-600 list-disc pl-5 space-y-3 text-sm">
                                <li>Survey sharing with fine control over who can view and edit</li>
                                <li>Gather comments all in one place</li>
                                <li>Let team members analyze, filter, and export results</li>
                                <li>Notify others when you get new responses</li>
                                <li>Shared asset library for on-brand surveys</li>
                                <li>Add Contributor Seats</li>
                                <li>Add or reassign accounts at any time</li>
                                <li>Free integrations with popular collaboration apps</li>
                                <li>50,000 responses per year**</li>
                                <li>24/7 Expedited email support</li>
                                <li>Quizzes with custom feedback</li>
                                <li>Custom logo, colors, and survey URL</li>
                                <li>Question and page skip logic</li>
                                <li>All data exports (CSV, PDF, PPT, SPSS, XLS)</li>
                                <li>Accept Payments</li>
                                <li>Advanced analyze features</li>
                                <li>SurveyMonkey industry benchmarks</li>
                                <li>Multilingual surveys</li>
                            </ul>
                        </div>
                        <div className="relative z-0 flex flex-col items-center p-8 border ">

                            <p className="mt-2 text-3xl font-semibold dark:text-purple-800">TEAM PREMIER</p>

                            <p className="text-3xl mt-2 font-bold">$75<span className="text-xl mt-2 text-gray-500"> /user /month</span></p>

                            <button className="px-28 py-2 mb-5 mt-6 text-lg font-semibold rounded-sm sm:mt-5 dark:bg-purple-800 dark:text-gray-100">
                                <Link to="/login">SIGN UP</Link>
                            </button>

                            <ul class="marker:text-purple-800 list-disc pl-5 space-y-3 text-sm">
                                <li>Survey sharing with fine control over who can view and edit</li>
                                <li>Gather comments all in one place</li>
                                <li>Let team members analyze, filter, and export results</li>
                                <li>Notify others when you get new responses</li>
                                <li>Shared asset library for on-brand surveys</li>
                                <li>Add Contributor Seats</li>
                                <li>Add or reassign accounts at any time</li>
                                <li>Free integrations with popular collaboration apps</li>
                                <li>100,000 responses per year**</li>
                                <li>24/7 Expedited email support</li>
                                <li>Quizzes with custom feedback</li>
                                <li>Custom logo, colors, and survey URL</li>
                                <li>Question and page skip logic</li>
                                <li>All data exports (CSV, PDF, PPT, SPSS, XLS)</li>
                                <li>Accept Payments</li>
                                <li>Advanced analyze features</li>
                                <li>SurveyMonkey industry benchmarks</li>
                                <li>Click map data visualization</li>
                                <li>Multilingual surveys</li>
                                <li>Response Quality</li>
                                <li>Crosstabs</li>
                                <li>Unlimited filter and compare rules, data trends</li>
                                <li>Advanced survey logic tools</li>
                                <li>Block randomization</li>
                                <li>White label surveys</li>
                                <li>Survey completion redirect</li>
                                <li>Remove SurveyMonkey footer</li>
                            </ul>
                        </div>
                           
                        <div className="relative z-0 flex flex-col items-center p-8 border ">

                            <p className="mt-2 text-3xl font-semibold dark:text-blue-900">ENTERPRISE</p>

                            <p className="text-2xl mt-2 font-bold"><span className="text-lg mt-2 text-gray-500">Powerful admin tools.</span></p>

                            <button className="px-28 py-2 mb-5 mt-6 text-lg font-semibold rounded-sm sm:mt-5 dark:bg-blue-900 dark:text-gray-100">
                                <Link to="/login">CONTACT SALES</Link>
                            </button>

                            <ul class="marker:text-blue-700 list-disc pl-5 space-y-3 text-sm">
                                <li>Survey sharing with fine control over who can view and edit</li>
                                <li>Gather comments all in one place</li>
                                <li>Let team members analyze, filter, and export results</li>
                                <li>Notify others when you get new responses</li>
                                <li>Shared asset library for on-brand surveys</li>
                                <li>Add Contributor Seats</li>
                                <li>Add or reassign accounts at any time</li>
                                <li>Free integrations with popular collaboration apps</li>
                                <li>50,000 responses per year**</li>
                                <li>24/7 Expedited email support</li>
                                <li>Quizzes with custom feedback</li>
                                <li>Custom logo, colors, and survey URL</li>
                                <li>Question and page skip logic</li>
                                <li>All data exports (CSV, PDF, PPT, SPSS, XLS)</li>
                                <li>Accept Payments</li>
                                <li>Advanced analyze features</li>
                                <li>SurveyMonkey industry benchmarks</li>
                                <li>Click map data visualization</li>
                                <li>Multilingual surveys</li>
                                <li>Response Quality</li>
                                <li>Crosstabs</li>
                                <li>Unlimited filter and compare rules, data trends</li>
                                <li>Advanced survey logic tools</li>
                                <li>Block randomization</li>
                                <li>White label surveys</li>
                                <li>Survey completion redirect</li>
                                <li>Remove SurveyMonkey footer</li>
                                <li>Unlimited API access***</li>
                                <li>Flexible plan types for multiple users</li>
                                <li>HIPAA-compliant features***</li>
                                <li>Customization and branding</li>
                                <li>Integrations with Salesforce, Marketo, Eloqua, and Tableau***</li>
                                <li>Admin dashboard and user management</li>
                                <li>Account control and migration</li>
                                <li>Enhanced governance and security features</li>
                                <li>Single sign-on (SSO)</li>
                                <li>Activity tracking through audit logs</li>
                                <li>Dedicated customer success manager***</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;