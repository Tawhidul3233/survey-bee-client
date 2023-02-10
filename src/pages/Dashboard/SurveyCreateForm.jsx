import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
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
  // const [isLoaderLoading, setIsLoaderLoading] = useState(false);
  const [editSurveyLoaderData, setEditSurveyLoaderData] = useState({});
  const activeUser = useSelector(user);
  const { user: existingUser } = activeUser;
  const { email } = existingUser;
  const { register, handleSubmit, reset } = useForm();
  // const editSurveyLoaderData = useLoaderData();
  // console.log(editSurveyLoaderData);

  const location = useLocation();
  // console.log(location.pathname.split("/").slice(-1));
  const id = location.pathname.split("/").slice(-1);
  const [isAdded, setIsAdded] = useState(false);
  // console.log(id)
  const getID = id[0];

  useEffect(() => {
    try {
      if (getID.length === 24) {
        getDataById(getID)
          .then((data) => {
            // console.log(data);
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

  // get edit data
  const getDataById = async (survId) => {
    const response = await axios.get(
      `https://survey-bee-server.vercel.app/editsurvey/${survId}`
    );
    return response?.data;
  };

  // get user created questions
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
        // console.log(response?.data)
        return response?.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const multipleQuestionSetup = () => {
    <MultiQuestionModal></MultiQuestionModal>
  }

  // send backend for save user questions
  const handleCreateSurveyQuestions = async (data) => {
    if (data?.questionsType === "Multiple choice") {
      return multipleQuestionSetup()
    }

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
          surveyModifiedTime,
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
      // console.log(response?.data);
      if (response?.data?.modifiedCount) {
        toast.success("Deleted");
        // setIsLoaderLoading(false);
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
              >
                {questionsType.map((qtype, i) => (
                  <option value={qtype} key={i}>
                    {qtype}
                  </option>
                ))}
              </select>
            </div>
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
      </div>
      <MultiQuestionModal></MultiQuestionModal>
    </div>
  );
};

export default SurveyCreateForm;
