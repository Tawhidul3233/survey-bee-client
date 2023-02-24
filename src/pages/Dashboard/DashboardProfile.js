import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { user } from '../../features/userSlice';
import Lottie from 'lottie-react';
import profile from '../../Lottie/user.json'

const DashboardProfile = ({ register, errors, handleSubmit, handleUpdateProfile, setFirstName, dbUser }) => {
  const activeUser = useSelector(user);
  // console.log(dbUser);

  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-auto bg-[#f5f6fa] py-10 lg:w-8/12'>

      <div className='mb-5'>
        <h2 className='text-2xl font-semibold mb-5 text-center'>Your Profile</h2>
        <div className="card card-compact w-96 hover:bg-base-100 border border-1 mx-auto h-[500px] hover:shadow-2xl duration-300">
         

          <Lottie animationData={profile} loop={true} className='lg:w-40 lg:h-full mx-auto sm:w-10'></Lottie>

          
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">{dbUser?.firstName ? `${dbUser?.firstName + ' ' + dbUser?.lastName}` : activeUser?.user?.displayName}</h2>
            <h2 className="text-lg font-semibold text-center">{activeUser?.user?.email}</h2>
            <p className='py-2 text-lg text-center font-semibold text-success'>{dbUser?.jobLevel
            } at {dbUser?.jobRole}</p>
            <p>We're designing a new homepage experience and would love to learn what features would be most helpful to you.</p>
            <div className="card-actions mx-auto">
              <label
                htmlFor="displayNameModal"
                className="hover:underline cursor-pointer"
              >
                <span className="text-success text-lg font-semibold underline" onClick={() => setFirstName(false)}>
                  Update Profile
                </span>
              </label>
              {/* <button className="btn btn-success normal-case"></button> */}
            </div>
          </div>

        </div>
      </div>

      {/*Survey Tips */}

      <div>
        <h2 className='text-2xl font-semibold mb-5 text-center'>Survey Tips</h2>
        <div className="card card-compact mx-auto w-96 hover:bg-base-100 hover:shadow-2xl border border-1 duration-300 h-[500px]">
          <figure><img src="https://i.ibb.co/G08XMWz/quick-poll-comments-graphic.png" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title py-2">Flow chart: Which question type is right for you?</h2>
            <p>Don't know which question types to use on your first survey? This handy flow chart will guide you to the best choice.</p>
            <div className="card-actions mx-auto">
              <Link to='/dashboard/surveyTips'><button className="btn text-white btn-success normal-case">Try it Out</button></Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;