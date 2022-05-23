import axios from "axios";
import React, { Fragment, useState } from "react";
import Input from "../shared/Input";
import SectionTitle from "../shared/SectionTitle";
import { addStation } from "../utils/utils";
import style from "./createNewStation.module.css";

const CreateNewStation = () => {
  const [formData, setFormData] = useState({});

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addStation('radio/station',formData, ()=> {
        alert('Successfully Added');
        setFormData({});
    })

    e.target.reset();
  };

  return (
    <Fragment>
      <SectionTitle title="Create New Station" />

      <form
        className={style.form__container}
        onSubmit={(e) => submitHandler(e)}
      >
        <Input
          name="name"
          changeHandler={onChangeHandler}
          placeholder="Station Name"
        />
        <br />
        <Input
          name="frequency"
          changeHandler={onChangeHandler}
          placeholder="Frequency"
        />
        <br />
        <button type="submit" className="primary__btn">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default CreateNewStation;
