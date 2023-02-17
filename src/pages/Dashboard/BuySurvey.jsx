import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const BuySurvey = () => {
  const survey = useLoaderData();
  const { email, _id } = survey;
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


  const urationValue = (event) => {
    console.log(event.target.value)
    if (event.target.value === "24H") {
      setduatitonTime(1)
    }
    else if (event.target.value === "3 Day") {
      setduatitonTime(.90)
    }
    else if (event.target.value === "7 Day") {
      setduatitonTime(.80)
    }
    else if (event.target.value === "15 Day") {
      setduatitonTime(.70)
    }
    else if (event.target.value === "30 Day") {
      setduatitonTime(.60)
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
    const allData = { ...data, costEachSurvey, subTotal, VATAmount, finalTotal, email, orderId }

    // console.log(allData)

    fetch('http://localhost:5000/buysurvey', {
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



  return (
    <div className=' md:flex'>
      <div className='  w-[100%] md:w-[60%] mx-2 md:mx-5 my-5'>
        <div>
          <h2 className=' text-[14px] md:text-xl font-semibold'> Profile: {survey?.email} </h2>
          <div className=' grid  grid-cols-2 my-2'>
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
      </div>

      <div className='w-[100%] md:w-[40%] mx-2 md:mx-5'>
        <h2 className='my-5 text-2xl font-semibold text-center'>Your Estimate</h2>
        <form
          onSubmit={handleSubmit(handleBuySurveySubmit)}
        >
          <div className=" ">
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
            <p  >
              Cost per survey : {costEachSurvey.toFixed(2)}$
            </p>
            <p  >
              Subtotal : {subTotalShow()}$
            </p>
            <p  >
              VAT amount : {VATamountShow()}$
            </p>
            <p  >
              Total cost : {finalTotalShow()}$
            </p>
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