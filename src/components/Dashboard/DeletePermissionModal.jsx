import React from "react";

const DeletePermissionModal = ({
  handleSurveyDelete,
  surveyTargetDeleteId,
  surveyTargetTitle,
}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="delete_permission_modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="card-actions items-center flex-col gap-4 mr-10">
            <h3 className="text-lg font-bold">
              Are you sure to delete <strong>{surveyTargetTitle}</strong>
            </h3>
            <div className="flex justify-around">
              <label
                htmlFor="delete_permission_modal"
                className="btn btn-sm p-2 m-2 btn-warning"
                onClick={() => handleSurveyDelete(surveyTargetDeleteId)}
              >
                Delete
              </label>
              <label
                htmlFor="delete_permission_modal"
                className="btn btn-sm p-2 m-2"
              >
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePermissionModal;
