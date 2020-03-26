import React from "react";

const CreateTask = () => (
  <div className="container pt-4">
    <form className="white">
      <h3 className="font-weight-bold text-center text-secondary">
        Create new task
      </h3>
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input required type="text" className="form-control" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="details">Details</label>
        <textarea id="details" className="form-control" rows="6"></textarea>
      </div>
    </form>
  </div>
);

export default CreateTask;
