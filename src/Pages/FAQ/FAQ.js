import React from "react";
import HeadInnerPages from "../../components/HeadInnerPages/HeadInnerPages";
import Flex from "../../components/Flex/Flex";
import Title from "../../components/Title/Title";
import TitleShadow from "../../components/TitleShadow/TitleShadow";
import Input from "../../components/Input/Input";
import BigButton from "../../components/BigButton/BigButton";
import "./FAQ.css";
import { MdEmail } from "react-icons/md";
import { BsQuestionCircle, BsQuestionOctagon } from "react-icons/bs";
import Swal from "sweetalert2";
export default function FAQ(props) {
  return (
    <div className="FAQ">
      <HeadInnerPages display={"none"} namePage={"FAQ"} />
      <Flex
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Flex
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"80%"}
        >
          <Title content={"Do you have"} />
          <TitleShadow content={"Any Questions?"} />
          <Title content={"Ask us"} />
        </Flex>
        <p style={{ width: "50%", textAlign: "center" }} className="BigText">
          Please read questions bellow and if you can not find your answer,
          please send us your question, we will answer you as soon as possible.
        </p>
      </Flex>
      <Flex position={"relative"} className={"LeftRightSections"}>
        <Flex className={"leftFaq"}>
          <Flex
            paddingLeft={"100px"}
            display={"flex"}
            width={"100%"}
            alignItems={"center"}
            gap={"20px"}
          >
            <BsQuestionCircle className="icon colorQues iconS" />
            <Flex
              width={"400px"}
              display={"flex"}
              alignItems={"start"}
              flexDirection={"column"}
            >
              <Title fontSize={"40px"} content={"F.A.Qs"} />
              <h4>Frequently asked questions</h4>
            </Flex>
          </Flex>
          <Flex
            marginTop={"50px"}
            paddingLeft={"150px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"40px"}
          >
            <Title
              cursor={"pointer"}
              onClick={() => {
                return Swal.fire({
                  width: "800px",
                  color: "#122d40",
                  size: "2em",
                  confirmButtonColor: "#01e281",
                  text: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Energistically embrace progressive web services for out-of-the-box communities. Synergistically expedite timely channels with sustainable innovation. Collaboratively reinvent open-source customer service with extensive testing procedures. Compellingly.",
                  showCancelButton: false,
                  confirmButtonText: "OK",
                });
              }}
              className={"question"}
              fontWeight={"600"}
              content={"Your Question Title?"}
              fontSize={"30px"}
            />
            <Title
              cursor={"pointer"}
              onClick={() => {
                return Swal.fire({
                  width: "800px",
                  color: "#122d40",
                  size: "2em",
                  confirmButtonColor: "#01e281",
                  text: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Energistically embrace progressive web services for out-of-the-box communities. Synergistically expedite timely channels with sustainable innovation. Collaboratively reinvent open-source customer service with extensive testing procedures. Compellingly.",
                  showCancelButton: false,
                  confirmButtonText: "OK",
                });
              }}
              className={"question"}
              fontWeight={"600"}
              content={"Do eiusmod tempor incidit?"}
              fontSize={"30px"}
            />
            <Title
              cursor={"pointer"}
              onClick={() => {
                return Swal.fire({
                  width: "800px",
                  color: "#122d40",
                  size: "2em",
                  confirmButtonColor: "#01e281",
                  text: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Energistically embrace progressive web services for out-of-the-box communities. Synergistically expedite timely channels with sustainable innovation. Collaboratively reinvent open-source customer service with extensive testing procedures. Compellingly.",
                  showCancelButton: false,
                  confirmButtonText: "OK",
                });
              }}
              className={"question"}
              fontWeight={"600"}
              content={"Cupidatat iusmod tempor incid idun?"}
              fontSize={"30px"}
            />
            <Title
              cursor={"pointer"}
              onClick={() => {
                return Swal.fire({
                  width: "800px",
                  color: "#122d40",
                  size: "2em",
                  confirmButtonColor: "#01e281",
                  text: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Energistically embrace progressive web services for out-of-the-box communities. Synergistically expedite timely channels with sustainable innovation. Collaboratively reinvent open-source customer service with extensive testing procedures. Compellingly.",
                  showCancelButton: false,
                  confirmButtonText: "OK",
                });
              }}
              className={"question"}
              fontWeight={"600"}
              content={
                "Excepteur sint occaecat cupidatat iusmod tempor incid idun?"
              }
              fontSize={"30px"}
            />
            <Title
              cursor={"pointer"}
              onClick={() => {
                return Swal.fire({
                  width: "800px",
                  color: "#122d40",
                  size: "2em",
                  confirmButtonColor: "#01e281",
                  text: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Energistically embrace progressive web services for out-of-the-box communities. Synergistically expedite timely channels with sustainable innovation. Collaboratively reinvent open-source customer service with extensive testing procedures. Compellingly.",
                  showCancelButton: false,
                  confirmButtonText: "OK",
                });
              }}
              className={"question"}
              fontWeight={"600"}
              content={
                "Consectetur adipisicing elit, sed do eiusmod tempor incididunt?"
              }
              fontSize={"30px"}
            />
          </Flex>
          <Flex
            paddingLeft={"100px"}
            display={"flex"}
            width={"100%"}
            alignItems={"center"}
            gap={"20px"}
          >
            <BsQuestionOctagon className="icon colorQues iconS" />
            <Flex
              width={"400px"}
              display={"flex"}
              alignItems={"start"}
              flexDirection={"column"}
            >
              <Title fontSize={"40px"} content={"Other Questions"} />
              <h4>General questions</h4>
            </Flex>
          </Flex>
          <Flex
            marginTop={"50px"}
            paddingLeft={"150px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"40px"}
          >
            <Title
              className={"question"}
              fontWeight={"600"}
              content={"Do eiusmod tempor incidit??"}
              fontSize={"30px"}
            />
            <Title
              className={"question"}
              fontWeight={"600"}
              content={"Cupidatat iusmod tempor incid idun?"}
              fontSize={"30px"}
            />
          </Flex>
        </Flex>
        <Flex className={"rightFaq"}>
          <Flex
            paddingLeft={"25px"}
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            width={"100%"}
          >
            <MdEmail className="icon colorIcon iconS" />
            <Title fontSize={"40px"} content={"Ask Us ..."} />
          </Flex>
          <p style={{ padding: "20px" }} className="BigText">
            I am a text block you can edit, Praesent sapien massa, convallis a
            pellentesque nec, egestas non nisi. Proin eget tortor risus. Vivamus
            suscipit tortor felis.
          </p>
          <Flex
            paddingLeft={"70px"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Input
              className={"labelIn"}
              width={"500px"}
              label={"Your Name"}
              star={"*"}
            />
            <Input
              className={"labelIn"}
              width={"500px"}
              label={"Your Email"}
              star={"*"}
            />
            <Input
              className={"labelIn"}
              width={"500px"}
              label={"Subject"}
              star={""}
            />
            <Input
              className={"labelIn"}
              width={"500px"}
              label={"Department"}
              star={""}
            />
            <textarea
              placeholder="Your Questions"
              className="textArea"
            ></textarea>
          </Flex>
          <BigButton className={"Send"}>Send Now</BigButton>
        </Flex>
      </Flex>
    </div>
  );
}
