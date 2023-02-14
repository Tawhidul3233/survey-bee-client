import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { startTransition } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Breadcrums from "../../components/Dashboard/Breadcrums";
import MultiQuestionModal from "../../components/Dashboard/MultiQuestionModal";
import UserCreateSurveyQuestions from "../../components/Dashboard/UserCreateSurveyQuestions";
import Loading from "../../components/Shared/Loading";
import { user } from "../../features/userSlice";

const questionsType = ["Textbox", "Comment Box", "Multiple choice"];

const SurveyCreateForm = () => {


  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const [editSurveyLoaderData, setEditSurveyLoaderData] = useState({});
  const activeUser = useSelector(user);
  const { user: existingUser } = activeUser;
  const { email } = existingUser;
  // const { register, handleSubmit, reset } = useForm();

  const location = useLocation();
  const id = location.pathname.split("/").slice(-1);
  const [isAdded, setIsAdded] = useState(false);
  const getID = id[0];

  useEffect(() => {
    try {
      if (getID.length === 24) {
        getDataById(getID)
          .then((data) => {
            setEditSurveyLoaderData(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, [getID, isAdded]);

  const getDataById = async (survId) => {
    const response = await axios.get(
      `https://survey-bee-server.vercel.app/editsurvey/${survId}`
    );
    return response?.data;
  };

  const {
    data: userCreatedQuestion,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["userCreatedQuestions"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `https://survey-bee-server.vercel.app/userCreatedSurveyQuestions/${email}`
        );
        return response?.data;
      } catch (error) {
        console.log(error);
      }
    },
  });


  // Tawhidul ......... decl

  const [selectedOption, setSelectedOption] = useState('');
  const [showOption, setShowOption] = useState(false)
  const [count, setCount] = useState(1);
  const [optinoValue, setOptionValue] = useState([])

  const handleAdd = () => {
    if (count <= 3) {
      setCount(count + 1)
    }
  };
  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const collectOptionValue = (index, event) => {

    const newValues = [...optinoValue];
    newValues[index] = event.target.value;
    setOptionValue(newValues);
    console.log(optinoValue)
  }



  const multiQuestion = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "Multiple choice") {
      return setShowOption(true)
    }
    return setShowOption(false)
  }

  // const OptionModal = () => {
  //   return (
  //     <div>
  //       <input type="checkbox" id="multiQuestionModal" className="modal-toggle" />
  //       <div className="modal">
  //         <div className="modal-box relative">
  //           <label
  //             htmlFor="multiQuestionModal"
  //             className="btn btn-sm btn-circle absolute right-2 top-2"
  //           >
  //             ✕
  //           </label>
  //           <h3 className="text-lg font-bold">New Survey</h3>
  //           <form onSubmit={handleSubmit}>
  //             <div className="pt-0 pb-4 bg-gray-900 flex px-4 mt-2">
  //               <div className="w-full">
  //                 <div className="w-full flex flex-col gap-y-2 my-4">
  //                   <div className="form-control w-full">
  //                     <label className="label">
  //                       <span className="label-text text-white text-xl">
  //                         Survey Title
  //                       </span>
  //                     </label>
  //                     <input
  //                       className="border border-info rounded-sm px-3 py-1 text-[1rem]"
  //                       placeholder="Enter your survey title"
  //                       {...register("surveyTitle", { required: true })}
  //                       aria-invalid={errors.surveyTitle ? "true" : "false"}
  //                       type="text"
  //                     />
  //                     {errors.surveyTitle?.type === "required" && (
  //                       <p role="alert" className="text-red-600 text-[.9rem]">
  //                         Survey title is required
  //                       </p>
  //                     )}
  //                   </div>
  //                   <div className="form-control w-full">
  //                     <label className="label">
  //                       <span className="label-text text-white text-xl">
  //                         Survey category
  //                       </span>
  //                     </label>
  //                     {errors.surveyCategory?.type === "required" && (
  //                       <p role="alert" className="text-red-600 text-[.9rem]">
  //                         survey categorys is required
  //                       </p>
  //                     )}
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="modal-action">
  //               <label htmlFor="createSurveyModal" className={`w-full lg:w-1/3`}>
  //                 <input
  //                   type="submit"
  //                   className="btn btn-secondary w-full normal-case text-white"
  //                   value="Create Survey"
  //                 />
  //               </label>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }




  const handleCreateSurveyQuestions = async (data) => {

    setShowOption(false)
    const questions = data?.questions;
    const questionType = data?.questionsType;
    const surveyModifiedTime = new Date().toLocaleDateString();
    try {
      const response = await axios.put(
        "https://survey-bee-server.vercel.app/userCreatedSurveyQuestions",
        {
          id: editSurveyLoaderData?._id || userCreatedQuestion[0]?._id,
          questions,
          questionType,
          optinoValue,
          surveyModifiedTime
          
        }
      );

      if (response?.data?.acknowledged) {
        refetch();
        reset();
        setIsAdded(true);
      }
    } catch (error) {
      console.log(error);
      toast.warn(error?.message);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  const handleDeleteSurveyQuestion = async (
    targetId,
    targetQuestion,
    targetQType
  ) => {

    try {
      const response = await axios.patch(
        "https://survey-bee-server.vercel.app/surveyQdelete",
        {
          targetId,
          targetQuestion,
          targetQType,
        }
      );
      if (response?.data?.modifiedCount) {
        toast.success("Deleted");
        setIsAdded(true);
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="min-h-screen bg-[#f5f6fa]">
      <div className="pl-20 mt-8">
        <h2 className="text-2xl text-primary font-extrabold">
          {editSurveyLoaderData?.surveyTitle ||
            userCreatedQuestion[0]?.surveyTitle}
        </h2>
        <Breadcrums editSurveyLoaderData={editSurveyLoaderData} />
      </div>
      <div className="px-20 pt-24">
        {(editSurveyLoaderData || userCreatedQuestion[0]) && (
          <UserCreateSurveyQuestions
            userCreatedQuestion={userCreatedQuestion}
            editSurveyLoaderData={editSurveyLoaderData}
            handleDeleteSurveyQuestion={handleDeleteSurveyQuestion}

          />
        )}
      </div>
      <div className="px-2 pt-10 pb-28">
        <h2 className="text-xl text-primary font-extrabold">
          {editSurveyLoaderData?.surveyTitle ||
            userCreatedQuestion[0]?.surveyTitle}
        </h2>
        <form
          onSubmit={handleSubmit(handleCreateSurveyQuestions)}
        >
          <div className="flex w-full items-center h-full  py-8 gap-x-1 border border-black mt-10">
            <input
              type="text"
              readOnly
              className="text-xl w-8 ml-2 outline-none border-none font-extrabold"
              value={
                `Q${editSurveyLoaderData?.questionsAndTypes?.length + 1 ||
                userCreatedQuestion[0]?.questionsAndTypes?.length + 1 ||
                1
                }`
              }
            />
            <div className="md:flex">
              <input
                {...register("questions", { required: true })}
                type="text"
                placeholder="Enter your question"
                className="w-[60vw] px-4 py-2 my-2 border border-gray-500 outline-primary"
              />
              <select
                {...register("questionsType", { required: true })}
                className="w-[30vw] ml-1 px-4 py-2 my-2 border border-gray-500 outline-primary inline "
                onChange={multiQuestion} value={selectedOption}
              >
                <option >Textbox</option>
                <option >Comment Box  </option>
                <option >Multiple choice </option>
                {/* {questionsType.map((qtype, i) => (
                  <option value={qtype} key={i}>
                    {qtype}
                  </option>
                ))} */}
              </select>
            </div>
          </div>
          <div className=" text-center my-5 ">
            {showOption && (
              <div className="" >
                <p className="text-xl font-semibold mb-2">Add Option</p>
                {[...Array(count)].map((value, index) => (
                  <div key={index}>
                    <input onChange={(event) => collectOptionValue(index, event)} value={value} className="my-1 p-1 border" type="text" placeholder="Answer" />
                  </div>
                ))}
                <div className=" my-2 ">
                  <input type='button' className="p-1 bg-blue-700 mr-5 text-white text-xs" onClick={handleAdd} value='+ Add' />
                  <input type='button' className="p-1 bg-red-700 text-white text-xs" onClick={handleRemove} value='- Remove' />
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center my-10">
            {isLoading ? (
              <span className="btn btn-primary text-base-100 px-20">
                Loading...
              </span>
            ) : (
              <input
                type="submit"
                className="btn btn-primary text-base-100 px-20"
                value="+ New Question"
              />
            )}
          </div>
        </form>
      </div >
    </div >
  );
};

export default SurveyCreateForm;
