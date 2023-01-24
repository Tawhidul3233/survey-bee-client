import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import UserCreateSurveyQuestions from "../../components/Dashboard/UserCreateSurveyQuestions";
import Loading from "../../components/Shared/Loading";
import { user } from "../../features/userSlice";

const questionsType = ["Textbox", "Comment Box"];

const SurveyCreateForm = () => {
  const activeUser = useSelector(user);
  const { user: existingUser } = activeUser;
  const { email } = existingUser;
  const { register, handleSubmit, reset } = useForm();

  // get user created questions
  // get user from db
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

  // send backend for save user questions
  const handleCreateSurveyQuestions = async (data) => {
    // console.log(data);
    const questions = data?.questions;
    const questionType = data?.questionsType;
    const surveyModifiedTime = new Date().toLocaleDateString();
    try {
      const response = await axios.put(
        "https://survey-bee-server.vercel.app/userCreatedSurveyQuestions",
        {
          id: userCreatedQuestion?.[0]?._id,
          questions,
          questionType,
          surveyModifiedTime,
        }
      );
      // console.log(response.data);
      if (response?.data?.acknowledged) {
        refetch();
        reset();
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

  // console.log(userCreatedQuestion);
  // const lastSurveyTitle = userCreatedQuestion.pop();
  // console.log(lastSurveyTitle);

  // handel delete user survey question
  const handleDeleteSurveyQuestion = async (
    targetId,
    targetQuestion,
    targetQType
  ) => {
    // console.log("deleted target", targetId, targetQuestion, targetQType);
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
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="px-20 pt-24">
        <UserCreateSurveyQuestions
          userCreatedQuestion={userCreatedQuestion}
          handleDeleteSurveyQuestion={handleDeleteSurveyQuestion}
        />
      </div>
      <div className="px-20 pt-10 pb-28">
        <h2 className="text-2xl text-primary font-extrabold">
          {userCreatedQuestion[0]?.surveyTitle}
        </h2>
        <form
          // className="border border-black w-full h-auto mt-10"
          onSubmit={handleSubmit(handleCreateSurveyQuestions)}
        >
          <div className="flex w-full items-center h-full px-10 py-8 gap-x-1 border border-black mt-10">
            <input
              type="text"
              readOnly
              className="text-3xl w-12 outline-none border-none font-extrabold"
              value={`Q${
                userCreatedQuestion[0]?.questionsAndTypes?.length
                  ? userCreatedQuestion[0]?.questionsAndTypes?.length + 1
                  : 1
              }`}
            />
            <div className="flex">
              <input
                {...register("questions", { required: true })}
                type="text"
                placeholder="Enter your question"
                className="w-[60vw] px-4 py-2 border border-gray-500 outline-primary"
              />
              <select
                {...register("questionsType", { required: true })}
                className="w-60 ml-1 px-4 py-2 border border-gray-500 outline-primary inline"
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
    </div>
  );
};

export default SurveyCreateForm;
