import React from "react";
import Title from "../components/title";
import Subtitle from "../components/subtitle";
import Informations from "../components/information";
import Form from "../components/form";
import Img from "../components/img";
import '../styles/main.css'

const Main = () => {

  return (
    <>
      <div className="container">
        <div className="container1">
          <Title/>
          <Subtitle/>
          <Informations/>
          <Form/>
        </div>
        <div className="container2">
          <Img/>
        </div>
      </div>
    </>
  )
}

export default Main