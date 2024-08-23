import React, { useState } from "react";
import HeadInnerPages from "../../components/HeadInnerPages/HeadInnerPages";
import Flex from "../../components/Flex/Flex";
import TitleShadow from "../../components/TitleShadow/TitleShadow";
import Title from "../../components/Title/Title";
import CardPersons from "../../components/CardPersons/CardPersons";
import { PersonCards } from "../../data";
import "./News.css";
import Input from "../../components/Input/Input";
import BigButton from "../../components/BigButton/BigButton";
import TopBarBox from "../../components/TopBarBox/TopBarBox";
export default function News() {
    //state تخزن قيمة البحث
    const [valueInput, setValueInput] = useState('')
    //state تخزن الائحة المستخدمة قبل وبعد الفلترة
    const [value, setValue] = useState(PersonCards)

    //فلترة قائمة ااشخاص حسب المدخل في قائمة البحث 
    const handleSearch = () =>{
        setValue(PersonCards.filter(p => !p.topText.includes(valueInput)))
        console.log(value);   
    }
  return (
    <div className="News">
      <HeadInnerPages namePage={"News"} display={"none"} />
      <Flex className={"leftRight"}>
        <Flex
          className={"personCards containerSlider"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Flex
            className={"titleSectionFive"}
            display={"flex"}
            alignItems={"center"}
            width={"800px"}
          >
            <Title content={"Latest"} />
            <TitleShadow content={"News & Blog"} />
          </Flex>
          <Flex
            display={"flex"}
            alignItems={"center"}
            className={"slider"}
          >
            {value.map((per) => {
              return (
                <CardPersons
                key={per.id}
                  topText={per.topText}
                  image={per.image}
                  description={per.description}
                  date={per.date}
                />
              );
            })}
          </Flex>
        </Flex>
        <Flex className={"rightSectionNews"}>
          <Flex className={"searchInput"}>
            <Input
            onChange={(e) =>{setValueInput(e.target.value)}}
              height={"100px"}
              width={"400px"}
              type={"search"}
              placeholder={"Search ..."}
            />
            <BigButton onClick={() =>{handleSearch()}} className={"buttonsearch"}>Search</BigButton>
          </Flex>
          <Flex className={"buttonsNews"}>
            <TopBarBox title={"Tags Cloud"} />
            <Flex display={"flex"} alignItems={"center"}>
              <button>technology</button>
              <button>WP</button>
              <button>wordpress</button>
            </Flex>
            <Flex display={"flex"} alignItems={"center"}>
              <button>website</button>
              <button> tuts</button>
              <button>post</button>
            </Flex>
            <Flex display={"flex"} alignItems={"center"}>
              <button>photography</button>
              <button>money</button>
              <button>compute</button>
            </Flex>
            <Flex display={"flex"} alignItems={"center"}>
              <button>article</button>
              <button>slider</button>
              <button>developer</button>
              <button>famous</button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
