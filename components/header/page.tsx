"use client";
import React, { useEffect } from "react";
import Container from "../container/page";
import Image from "next/image";
import LOGO from "../../images/LOGO.png";
import { Button, Input, Avatar, Badge } from "antd";
import {
  ArrowRightOutlined,
  BarChartOutlined,
  CloseSquareOutlined,
  HeartOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.css";
import useCategoryStore from "@/store/categories/page";
import useSubCategoryStore from "@/store/sub-categories/page";
import Aksiya from "@/images/Aksiya.svg";
import Telefon from "@/images/mobile.svg";
import WashingCard from "@/images/washing_machine.svg";
import Desktop from "@/images/desktop.svg";
import Konditseoner from "@/images/konditseoner.svg";
import PC from "@/images/pc.svg";
import ChangYutgich from "@/images/chang_yutgich.svg";
import Muzlatgich from "@/images/muzlatgich.svg";

import { useState } from "react";
import Link from "next/link";

function Index() {
  const [open, setOpen] = useState(false);
  const { categories, getCategories } = useCategoryStore();
  const { subcategories, getSubCategories } = useSubCategoryStore();
  const [category, setcategory] = useState("");
  const iconCategory = [
    Aksiya,
    Telefon,
    WashingCard,
    Desktop,
    Konditseoner,
    PC,
    ChangYutgich,
    Muzlatgich,
  ];

  async function getSub(e: any) {
    setcategory(e.name);
    await getSubCategories(e.id);
  }

  function goToCategories(id: number) {
    setOpen(false);
    localStorage.setItem("SubCategory", JSON.stringify(id));
  }

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <header>
      <div className="py-[10px] bg-[#F0F0F0]">
        <Container>
          <div className="flex justify-between items-center">
            <ul className="flex items-center gap-[20px]">
              <li className="text-[14px] font-medium cursor-pointer">
                <a href="/about"> Biz Haqimizda</a>
              </li>
              <li className="text-[14px] font-medium cursor-pointer">
                Yetkazib berish
              </li>
              <li className="text-[14px] font-medium cursor-pointer">
                Shartnoma shartlari
              </li>
              <li className="text-[14px] font-medium cursor-pointer">
                Bizning kafolatlar
              </li>
            </ul>
            <ul className="flex items-center gap-[15px]">
              <li className="text-[14px] font-medium ">+998 77 064 06 82</li>
              <li className="px-[10px] py-[4px] bg-[white] rounded-lg cursor-pointer font-medium text-[#240E0066]">
                Rus
              </li>
              <li className="px-[10px] py-[4px] bg-[white] rounded-lg cursor-pointer font-medium text-[#240E0066]">
                O'zb
              </li>
              <li className="px-[10px] py-[4px] bg-[white] rounded-lg cursor-pointer font-medium text-[#240E0066]">
                Eng
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="py-[30px] px-[60px] flex justify-between bg-[white] rounded-md relative">
            <Link href="/">
              {" "}
              <Image
                className="ml-[30px]"
                src={LOGO}
                width={190}
                height={40}
                alt="Picture of the author"
              />
            </Link>
            <div className="flex gap-[16px] items-center">
              <Button
                onClick={() => setOpen(!open)}
                className="category_btn bg-[#1EB91E] w-[180px] text-white text-[14px] font-bold py-[15px] px-[36px] h-[46px]"
              >
                {open ? (
                  <CloseSquareOutlined className=" text-[18px]" />
                ) : (
                  <UnorderedListOutlined className=" text-[18px] rotate-180" />
                )}
                {open ? "Bekor qilish" : "Kategoriya"}
              </Button>
              <Input
                placeholder="Хочу купить..."
                className="search_input"
                prefix={<SearchOutlined />}
              />
            </div>

            <div
              className={`w-[100%] flex gap-[80px] absolute bg-[#fff] left-0 z-20 py-[30px] px-[20px] ${
                open
                  ? " top-[110px] duration-300 opacity-1"
                  : "top-[-1200px] duration-300 opacity-0"
              } drawer`}
            >
              <div>
                {categories.map((e, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => getSub(e)}
                      className={` ${
                        e.name == category
                          ? "bg-[#FF6F14] text-white"
                          : "bg-[#F0F0F0]"
                      } hover:bg-[#FF6F14] hover:text-white font-semibold mt-[10px] flex items-center justify-between w-[440px] h-[50px] py-[35px] px-[59px] rounded-xl cursor-pointer card `}
                    >
                      <Image
                        src={iconCategory[i]}
                        alt={e.name}
                        className="w-[30px] h-[30px] rasm"
                      />
                      <p>{e.name}</p>
                      <ArrowRightOutlined />
                    </div>
                  );
                })}
              </div>
              <div className="mt-[7px] border-l-[1px] pl-[60px]">
                <p className="text-[27px] font-bold mb-[20px]">{category}</p>
                {subcategories?.map((e, i) => {
                  return (
                    <Link
                      key={i}
                      href={"/categories"}
                      onClick={() => goToCategories(e.id)}
                    >
                      <div>
                        <p className="font-semibold text-[16px] mb-4 cursor-pointer">
                          {e.name}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-[15px]">
              <Badge count={2}>
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-[#F0F0F0] cursor-pointer"
                >
                  <HeartOutlined className="text-[20px] text-[black]" />
                </Avatar>
              </Badge>
              <Badge count={6}>
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-[#F0F0F0] cursor-pointer"
                >
                  <BarChartOutlined className="text-[20px] text-[black]" />
                </Avatar>
              </Badge>
              <Badge count={7}>
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-[#F0F0F0] cursor-pointer"
                >
                  <ShoppingCartOutlined className="text-[20px] text-[black]" />
                </Avatar>
              </Badge>
              <Avatar
                size="large"
                icon={<UserOutlined className="text-[20px] text-[black]" />}
                className="bg-[#F0F0F0] cursor-pointer"
              />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Index;
