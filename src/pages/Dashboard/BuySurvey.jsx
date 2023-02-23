import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import EachUserOrder from './EachUserOrder';

const BuySurvey = () => {
  const survey = useLoaderData();
  const { email, _id, surveyTitle, surveyCategory, surveyDescription } = survey;
  const orderId = _id;

  // console.log(email, _id)

  const { register, handleSubmit } = useForm();

  const [costPerSurvey, setCostPerSurvey] = useState(.15)
  const [surveyAmounts, setsurveyAmounts] = useState()
  const [duatitonTime, setduatitonTime] = useState(1)



  // const [selectLocation, setselectLocation] = useState()

  const costEachSurvey = costPerSurvey * duatitonTime;
  const subTotal = costEachSurvey * surveyAmounts;
  const VATAmount = subTotal / 115 * 15;
  const finalTotal = subTotal + VATAmount;



  const finalTotalShow = () => {
    if (isNaN(finalTotal)) {
      return '';
    }
    return finalTotal.toFixed(2);
  }

  const subTotalShow = () => {
    if (isNaN(subTotal)) {
      return '00';
    }
    return subTotal.toFixed(2);
  }

  const VATamountShow = () => {
    if (isNaN(VATAmount)) {
      return '00';
    }
    return VATAmount.toFixed(2);
  }

  const [time, settime] = useState(86400000)


  const urationValue = (event) => {
    console.log(event.target.value)
    if (event.target.value === "24H") {
      setduatitonTime(1)
      settime(86400000)
    }
    else if (event.target.value === "3 Day") {
      setduatitonTime(.90)
      settime(259200000)
    }
    else if (event.target.value === "7 Day") {
      setduatitonTime(.80)
      settime(604800000)
    }
    else if (event.target.value === "15 Day") {
      setduatitonTime(.70)
      settime(1296000000)
    }
    else if (event.target.value === "30 Day") {
      setduatitonTime(.60)
      settime(2592000000)
    }

  }
  const locationName = (event) => {
    // setselectLocation(event.target.value);
    if (event.target.value === "Bangladesh") {
      return setCostPerSurvey(.15)
    }
    else if (event.target.value === "Pakistan") {
      return setCostPerSurvey(.10)
    }
    else if (event.target.value === "India") {
      return setCostPerSurvey(.18)
    }
    else if (event.target.value === "USA") {
      return setCostPerSurvey(.70)
    }
    else if (event.target.value === "UK") {
      return setCostPerSurvey(.60)
    }
    else if (event.target.value === "Austrila") {
      return setCostPerSurvey(.50)
    }
  }

  const surveyAmount = (event) => {
    if (event.target.value > 0) {
      return setsurveyAmounts(event.target.value)
    }
    return;
  }

  const handleBuySurveySubmit = (data) => {
    const allData = { ...data, costEachSurvey, subTotal, VATAmount, finalTotal, email, orderId, surveyCategory, surveyTitle, surveyDescription }

    // console.log(allData)

    fetch('https://survey-bee-server.vercel.app/buysurvey', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(allData)
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Order Successfuly Done')
      })
      .catch(err => console.log(err))


  }


  const [orders, setOrders] = useState([])


  console.log(orders)
  useEffect(() => {
    fetch(`https://survey-bee-server.vercel.app/surveyhistory/${orderId}`)
      .then(res => res.json())
      .then(data => setOrders(data))

  }, [orders])

  return (
    <div className=' md:flex'>
      <div className='  w-[100%] md:w-[60%] mx-2 md:mx-5 my-5'>
        <div className='bg-gray-200 p-3'>
          <h2 className=' text-[14px] md:text-xl font-semibold'> Profile: {survey?.email} </h2>
          <div className=' grid  grid-cols-2 my-2 bg-gray-500 p-3 rounded-sm text-white'>
            <div>
              <h2 className='text-xs sm:text-base'> Survey: {survey?.surveyTitle}</h2>
              <p className='text-xs sm:text-base'> Catagory: {survey?.surveyCategory}</p>
            </div>
            <div>
              <p className='text-xs sm:text-base'> Create: {survey?.surveyModifiedTime}</p>
              <p className='text-xs sm:text-base'> Modified: {survey?.surveyCreateTime}</p>
            </div>
          </div>
          <div>
            <p className='text-xs sm:text-base'> Description: {survey?.surveyDescription.slice(0, 200)}...</p>
          </div>
        </div>

        <hr className='h-1 my-5' />



        <div className='my-5'>
          <h2 className='sm:text-base text-xs font-semibold'> Orders History </h2>
          <div className='my-5'>
            {
              orders.map((order, i) =>
                // <div key={order._id} order={order}
                //   className=" w-[98%] sm:w-[96%] mx-auto border-2 p-2 rounded-sm mb-2"
                // >
                //   <div className='text-center'>
                //     <p className='md:text-base text-xs bg-blue-600 py-1 px-3 text-white inline '>History : {i + 1} </p>
                //   </div>
                //   <div className=' sm:flex justify-between mt-3 '>
                //     <p className='md:text-base text-xs'> Title : {order?.surveyTitle}</p>
                //     <p className='md:text-base text-xs'> Category : {order?.surveyCategory}</p>
                //     {/* <p className='md:text-base text-xs'> User : {order?.email}</p> */}
                //   </div>
                //   {/* <div className='text-xs font-light my-2'>
                //     Description : {order?.surveyDescription.slice(0, 250)}...
                //   </div> */}
                //   <div className='bg-gray-200 p-2'>
                //     <div className='sm:flex justify-between'>
                //       <p className='md:text-base text-xs'> Location : {order?.location} </p>
                //       <p className='md:text-base text-xs'>  Duration :  {order?.duration} </p>
                //       <p className='md:text-base text-xs'> Responses :  {order?.surveyAmount} </p>
                //     </div>
                //     <div className='sm:flex justify-between'>
                //       <p className='md:text-base text-xs'> Cost Per Respones : {order?.costEachSurvey}$ </p>
                //       <p className='md:text-base text-xs'> Sub Total :  {order?.subTotal.toFixed(2)}$ </p>
                //       <p className='md:text-base text-xs'> 15% VAT :  {order?.VATAmount.toFixed(2)}$ </p>

                //     </div>
                //   </div>
                //   <div className=' flex justify-between mt-2'>
                //     <p className=' font-semibold'> Total :  {order?.finalTotal.toFixed(2)}$ </p>
                //     <p>
                //       <>
                //       {
                       
                      

                //       }
                //       </>
                //       {
                //         order?.approve === true && <Countdown
                //           date={Date.now() + (order?.duration  === '7 Day' && 604800000 || order?.duration  === '3 Day' && 259200000 || order?.duration  === '24H' && 86400000 || order?.duration  === '15 Day' && 1296000000 || order?.duration  === '30 Day' && 2592000000  )}
                //         />
                //       }
                //     </p>

                //     <button className=' btn btn-sm btn-success'>
                //       {
                //         order?.approve === true ? " Services runing" : " Pending"
                //       }
                //     </button>
                //   </div>
                // </div>
                <EachUserOrder key={order._id} order={order} i={i}> </EachUserOrder>
              )
            }
          </div>
        </div>

      </div>



      <div className='w-[100%] md:w-[40%] mx-2 md:mx-5    my-5'>
        <h2 className='my-5 text-2xl font-semibold text-center'>Your Estimate</h2>
        <form
          onSubmit={handleSubmit(handleBuySurveySubmit)}
          className=" border-2 p-2 sm:p-4"
        >
          <div >
            <div className="  ">
              <label for="location" class="block text-xs font-medium text-gray-700">
                Targeted Location
              </label>
              <select
                {...register("location", { required: true })}
                className=" w-full  py-2 my-2 border border-gray-500 outline-primary inline text-center "
                onChange={locationName}
              >
                <option >Bangladesh</option>
                <option > India  </option>
                <option > Pakistan </option>
                <option > USA </option>
                <option > UK </option>
                <option > Austrila </option>
              </select>
            </div>
            <div className='my-2'>
              <label for="duration" class="block text-xs font-medium text-gray-700">
                Duration
              </label>
              <select
                {...register("duration", { required: true })}
                className=" w-full  py-2 my-2 border border-gray-500 outline-primary inline text-center"
                onChange={urationValue}
              >
                <option > 24H </option>
                <option > 3 Day  </option>
                <option > 7 Day </option>
                <option > 15 Day </option>
                <option > 30 Day </option>
              </select>
            </div>
            <div>
              <div className="">
                <label for="surveyAmount" class="block text-xs font-medium text-gray-700">
                  Amount
                </label>
                <input {...register("surveyAmount", { required: true })}
                  onChange={surveyAmount}
                  type="text" name="surveyAmount" id="url" placeholder="Response Amount" className=" w-full border border-black sm:text-sm  focus:ring-inset  dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400 py-2 px-3 my-2" />
              </div>
            </div>
          </div>
          <div>
            <div className=' flex justify-between' >
              <p> Cost per survey : </p>
              <p>{costEachSurvey.toFixed(2)}$</p>
            </div>
            <div className=' flex justify-between' >
              <p>Subtotal : </p>
              <p>{subTotalShow()}$</p>
            </div>
            <div className=' flex justify-between'>
              <p> VAT amount :</p>
              <p>{VATamountShow()}$</p>
            </div>
            <div className=' flex justify-between' >
              <p>Total cost :</p>
              <p> {finalTotalShow()}$</p>
            </div>
          </div>
          <div className=" text-center my-10">
            <input
              type="submit"
              className="btn btn-warning text-base-100 px-10"
              value={`PROCEED TO CHECKOUT ${finalTotalShow()}$`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuySurvey;