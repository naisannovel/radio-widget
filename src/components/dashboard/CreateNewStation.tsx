import React, { FC, Fragment, useState } from "react";
import Input from "../shared/Input";
import SectionTitle from "../shared/SectionTitle";
import { addStation } from "../utils/utils";
import style from "./createNewStation.module.css";

// helmet
// import { Helmet } from 'react-helmet';

export interface StationFormData{
  name: string;
  frequency: number | null;
}

const CreateNewStation:FC = () => {
  const [formData, setFormData] = useState<StationFormData>({name:"",frequency:null});

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addStation('radio/station',formData, ()=> {
        alert('Successfully Added');
        setFormData({name:"",frequency:null});
    })
  };

  return (
    <Fragment>
      {/* <Helmet>
        <title>Radio widget - New Station</title>
      </Helmet> */}

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
