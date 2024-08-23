import React, { useContext, useState } from "react";
import "./ProductInfo.css";
import HeadInnerPages from "../../components/HeadInnerPages/HeadInnerPages";
import Title from "../../components/Title/Title";
import { BsShareFill, BsStarFill, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import Flex from "../../components/Flex/Flex";
import BigButton from "../../components/BigButton/BigButton";
import { BiCopy, BiHeart, BiShuffle } from "react-icons/bi";
import TopBarBox from "../../components/TopBarBox/TopBarBox";
import { PiFacebookLogoFill } from "react-icons/pi";
import { MdAttachEmail } from "react-icons/md";
import { ThemeContext } from "../../Context/ThemeContext";
import { ProductsInfo } from "../../data";
export default function ProductInfo(props) {
  const {pr,setPr} = useContext(ThemeContext)
  const[valueInput, setValueInput] = useState(0)
  const increaseValue =() =>{setValueInput(x => x+1)}
  const decrease =() =>{setValueInput(x => x-1)}
  return (
    <>
    {ProductsInfo.map((pro) =>{
      if(pro.id === pr){
     return(
      <div className="ProductInfo">
   
      <HeadInnerPages display={"none"} namePage={pro.content} />
      <Flex className={"LeftRightSections"}>
        <Flex className={"leftProduct"}>
          <Flex className={"containerImg"}>
            <img
              className="imgProductInfo"
              src={pro.img}
              alt=""
            />
          </Flex>
        </Flex>
        <Flex className={"rightProduct"}>
          <Title fontSize={"30px"} content={pro.content} />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <Title content={"$" + pro.price} />
          <p className="BigText">
           {pro.text}
          </p>
        <Flex marginTop={"50px"}>
        <Flex className={"decIncNumber"}>
                <span onClick={() =>{decrease()}} className="circle">-</span>
                <input type="number" value={valueInput} className="inputNumber" />
                <span  onClick={() =>{increaseValue()}} className="circle">+</span>
              </Flex>
          <Flex className={"Buttons"}>
            <BigButton className={"biggButton"}>Add to card</BigButton>
            <BiHeart className="Heart iconS" />
            <BiShuffle className="shuffle iconS" />
          </Flex>
        </Flex>
          <TopBarBox backgroundColor={"#dddddd"} marginLeft={"90px"} width={"80%"}
            title={"25 people have added this product to their cart"}
          />
          <hr/>
          <Flex className={"Evaluate"}>
            <Flex
              display={"flex"}
              alignItems={"center"}
              position={"relative"}
              width={"400px"}
              gap={"60px"}
            >
              <Title fontSize={"25px"} content={"Brand"} />
              <Title position={"absolute"} right={"0"} fontWeight={"400"} fontSize={"20px"} content={pro.Brand} />
            </Flex>
            <Flex
              display={"flex"}
              alignItems={"center"}
              width={"400px"}
              position={"relative"}
              gap={"60px"}
            >
              <Title fontSize={"25px"} content={"SKU"} />
              <Title position={"absolute"} right={"0"} fontWeight={"400"} fontSize={"20px"} content={pro.SKU} />
            </Flex>
            <Flex
              display={"flex"}
              alignItems={"center"}
              width={"400px"}
              position={"relative"}
              gap={"60px"}
            >
              <Title fontSize={"25px"} content={"Status"} />
              <Title position={"absolute"} right={"0"} fontWeight={"400"} fontSize={"20px"} content={pro.Status} />
            </Flex>
            <Flex
              display={"flex"}
              alignItems={"center"}
              width={"400px"}
              position={"relative"}
              gap={"60px"}
            >
              <Title fontSize={"25px"} content={"Tags"} />
              <Title position={"absolute"} right={"0"} fontWeight={"400"} fontSize={"20px"} content={pro.Tags} />
            </Flex>
            <Flex
              display={"flex"}
              alignItems={"center"}
              width={"500px"}
              position={"relative"}
              gap={"60px"}
            >
              <Title fontSize={"25px"} content={"Categories"} />
              <Title position={"absolute"} right={"0"} fontWeight={"400"} fontSize={"20px"} content={pro.Categories} />
            </Flex>
          </Flex>
          <hr/>
          <h6 className="infoForProduct">
            Free shipping on all orders over $100 14 days easy refund & returns
            Product taxes and customs duties included
          </h6>
          <Flex className={"SocialLinks"}>
            <BsShareFill className="icon iconS" />
            <PiFacebookLogoFill className="icon iconS" />
            <BsTwitterX className="icon iconS"/>
            <BsWhatsapp className="icon iconS"/>
            <MdAttachEmail className="icon iconS"/>
            <BiCopy className="icon iconS"/>
          </Flex>
        </Flex>
      </Flex>
    </div>
     )}
    })}
    </>
  );
}
