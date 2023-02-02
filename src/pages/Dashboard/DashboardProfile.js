import React from 'react';
import { Link } from 'react-router-dom';

const DashboardProfile = ({DashboardPrimaryPage}) => {
    
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-auto py-10 bg-[#f5f6fa]'>
            
            <div className='mb-5'>
                <h2 className='text-2xl font-semibold mb-5 text-center'>Your Profile</h2>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <div className="radial-progress text-3xl text-success mx-auto my-6" style={{"--value":70,"--size": "12rem","--thickness": "5px" }}>70%</div>
  <div className="card-body">
    <h2 className="text-xl font-semibold text-center">My Profile</h2>
    <p className='py-4 text-center'>Job Role at Organization</p>
    <p>We're designing a new homepage experience and would love to learn what features would be most helpful to you.</p>
    <div className="card-actions mx-auto">
      <button className="btn btn-success normal-case">Update Profile</button>
    </div>
  </div>
  
</div>
            </div>

{/*Survey Tips */}

<div>
<h2 className='text-2xl font-semibold mb-5 text-center'>Survey Tips</h2>
<div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img src="https://cdn.smassets.net/assets/dashweb/dashweb/17.0.0/assets/quick_poll_comments_graphic.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Flow chart: Which question type is right for you?</h2>
    <p>Don't know which question types to use on your first survey? This handy flow chart will guide you to the best choice.</p>
    <div className="card-actions mx-auto">
      <Link to='/dashboard/surveyTips'><button className="btn btn-success normal-case">Try it Out</button></Link>
    </div>
  </div>
  
</div>
</div>
        </div>
    );
};

export default DashboardProfile;