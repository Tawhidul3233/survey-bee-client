import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { startTransition } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Breadcrums from "../../components/Dashboard/Breadcrums";
// import MultiQuestionModal from "../../components/Dashboard/MultiQuestionModal";
import UserCreateSurveyQuestions from "../../components/Dashboard/UserCreateSurveyQuestions";
import Loading from "../../components/Shared/Loading";
import { user } from "../../features/userSlice";
import { useForm, useFieldArray, Controller } from "react-hook-form";

const questionsType = ["Textbox", "Comment Box", "Multiple choice"];

const SurveyCreateForm = () => {


  const { register, handleSubmit, control, trigger, reset, watch, formState: { errors } } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "answers"
  });


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
  }, [getID, isAdded, editSurveyLoaderData]);

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



  const multiQuestion = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "Multiple choice") {
      return setShowOption(true)
    }
    return setShowOption(false)
  }




  const handleCreateSurveyQuestions = async (data) => {

    setShowOption(false)
    const optionValue = data?.answers;
    // console.log(optionValue)
    const questions = data?.questions;
    const questionType = data?.questionsType;
    const surveyModifiedTime = new Date().toLocaleDateString();
    // https://survey-bee-server.vercel.app/userCreatedSurveyQuestions
    // https://survey-bee-server.vercel.app/userCreatedSurveyQuestions
    try {
      const response = await axios.put("https://survey-bee-server.vercel.app/userCreatedSurveyQuestions",
        {
          id: editSurveyLoaderData?._id || userCreatedQuestion[0]?._id,
          questions,
          questionType,
          optionValue,
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

  {/* <Link
          to={`/surveyshare/${editSurveyLoaderData?._id ? editSurveyLoaderData?._id : surveId
            }`}
          className="text-xl text-secondary font-semibold"
        >
          Share
        </Link> */}

  console.log(editSurveyLoaderData?._id)
  return (
    <div className="min-h-screen bg-[#eef0f4]">
      <div className="mx-5 sm:mx-10 sm:mt-3 sm:mb-3">
        <Breadcrums editSurveyLoaderData={editSurveyLoaderData} />
        <div className=" flex justify-end ">
          <Link
            to={`/surveyshare/${editSurveyLoaderData?._id}`}
            className="text-xl text-secondary font-semibold "
          >
            Share
          </Link>
        </div>
        <h2 className="text-2xl text-primary font-extrabold text-center mt-10 ">
          {editSurveyLoaderData?.surveyTitle ||
            userCreatedQuestion[0]?.surveyTitle}
        </h2>
        <p className="text-center my-5">
          {editSurveyLoaderData?.surveyDescription ||
            userCreatedQuestion[0]?.surveyDescription
          }
        </p>
      </div>
      <div className="px-5 md:px-20 my-5">
        {(editSurveyLoaderData || userCreatedQuestion[0]) && (
          <UserCreateSurveyQuestions
            userCreatedQuestion={userCreatedQuestion}
            editSurveyLoaderData={editSurveyLoaderData}
            handleDeleteSurveyQuestion={handleDeleteSurveyQuestion}

          />
        )}
      </div>
      <div className="px-2 pt-10 pb-28 mx-10">
        <h2 className="text-xl text-center text-primary font-extrabold">
          {editSurveyLoaderData?.surveyTitle ||
            userCreatedQuestion[0]?.surveyTitle}
        </h2>
        <form
          onSubmit={handleSubmit(handleCreateSurveyQuestions)}
        >
          <div className="flex mx-auto w-full md:w-3/4 lg:w-2/4 items-center h-full  py-8 gap-x-1 border border-black mt-10">
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
            <div className="md:flex ">
              <input
                {...register("questions", { required: true })}
                type="text"
                placeholder="Enter your question"
                className=" px-4 py-2 my-2 border border-gray-500 outline-primary"
              />
              {/* w-[60vw] */}
              <select
                {...register("questionsType", { required: true })}
                className=" ml-1 px-4 py-2 my-2 border border-gray-500 outline-primary inline "
                onChange={multiQuestion} value={selectedOption}
              >
                <option >Textbox</option>
                <option >Comment Box  </option>
                <option >Multiple choice </option>
              </select>
            </div>
          </div>
          <div className=" text-center my-5 ">
            {showOption && (

              <div className="" >
                <p className="text-xl font-semibold mb-2">Add Option</p>
                <ul>
                  {fields.map((item, index) => (
                    <li key={item.id}>
                      <input {...register(`answers.${index}.answer`)} className="my-1 p-1 border" />
                      <button type="button" onClick={() => remove(index)} className="p-1 bg-red-700 text-white text-xs ml-2" >Delete</button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => append()}
                  className="p-1 bg-blue-700 mr-5 text-white text-xs"
                >
                  Add+
                </button>
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
