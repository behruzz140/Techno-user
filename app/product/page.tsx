"use client"
import React, { useState } from "react";
import Container from "../../components/container/page";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import { Avatar, Button, Carousel, Tooltip } from "antd";
import Image from "next/image";
import Car from "@/images/car.svg";
import Shop from "@/images/shop.svg";
import Time from "@/images/time.svg";
import { UserOutlined } from "@ant-design/icons";
import Banner3 from '@/images/banner3.png'
import Swiper from '../../components/swiper/page'

function Product() {
  const images = [
    {
      original:
        "https://irshad.az/cdn-cgi/image/width=1400/storage/products/88291/iphone-15-pro-titanium.png",
      thumbnail:
        "https://irshad.az/cdn-cgi/image/width=1400/storage/products/88291/iphone-15-pro-titanium.png",
    },
    {
      original:
        "https://irshad.az/cdn-cgi/image/width=1400/storage/products/88291/iphone-15-pro-titanium.png",
      thumbnail:
        "https://irshad.az/cdn-cgi/image/width=1400/storage/products/88291/iphone-15-pro-titanium.png",
    },
    {
      original:
        "https://irshad.az/cdn-cgi/image/width=1400/storage/products/88291/iphone-15-pro-titanium.png",
      thumbnail:
        "https://irshad.az/cdn-cgi/image/width=1400/storage/products/88291/iphone-15-pro-titanium.png",
    },
    {
      original:
        "https://irshad.az/cdn-cgi/image/width=1400/storage/products/88291/iphone-15-pro-titanium.png",
      thumbnail:
        "https://irshad.az/cdn-cgi/image/width=1400/storage/products/88291/iphone-15-pro-titanium.png",
    },
    {
      original:
        "https://irshad.az/cdn-cgi/image/width=1400/storage/products/88291/iphone-15-pro-titanium.png",
      thumbnail:
        "https://irshad.az/cdn-cgi/image/width=1400/storage/products/88291/iphone-15-pro-titanium.png",
    },
  ];
  const [comments, setcommets] = useState("Telfon xususiyatlari");

  return (
    <>
      <div>
        <Container>
          <p className="flex gap-[10px] mt-[20px]">
            <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
              Bosh sahifa
            </span>
            <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
              Smartfonlar
            </span>
            <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
              Apple iPhone 13 128Gb Moviy
            </span>
          </p>
        </Container>
      </div>
      <div className="mt-[24px]">
        <Container>
          <div className="flex justify-between">
            <div className="w-[700px] bg-white rounded-md h-[560px]">
              <ImageGallery
                items={images}
                infinite={true}
                thumbnailPosition="left"
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                showNav={false}
              />
            </div>
            <div className="w-[600px] bg-white h-[560px] p-[40px] rounded-md">
              <h3 className="text-[24px] font-bold mb-[26px]">
                {" "}
                Apple iPhone 13 128Gb Moviy
              </h3>
              <div className="flex items-center gap-[12px]">
                <p className="text-[16px] text-[#240E00CC] font-medium mr-3">
                  Rang:
                </p>
                <div className="w-[24px] h-[24px] bg-[#9747FF] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#3472ED] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#D55200] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#DADADA] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#FEDACB] rounded-full cursor-pointer"></div>
              </div>
              <p className="text-[16px] text-[#240E00CC] font-medium mr-3 mt-[42px] mb-[36px]">
                Narx:{" "}
                <span className="text-[28px] font-bold text-[#240E00CC]">
                  14 699 999 so‘m
                </span>
              </p>
              <p className="mb-[8px] py-[16px] px-[32px] text-[16px] font-medium text-[#240E00CC] bg-[#F0F0F0] rounded-md">
                Oyiga 1 334 999 so‘mdan 12/oyga muddatli to ‘lov
              </p>
              <div className="flex justify-between mb-[40px]">
                <Button className="single_btn">Savatga qo ‘shish</Button>
                <Button className="single_btn2">Xarid qilish</Button>
              </div>

              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[16px]">
                  <Image src={Car} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    Yetkazib berish O’zbekiston bo’ylab
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Image src={Shop} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    Do’kondi o’zidan olib ketishingiz mumkin
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Image src={Time} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    Tahminiy yetkazib berish 1 kundan 3 kungacha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="flex gap-[30px] mt-[40px]">
            <button
              onClick={() => setcommets("Telfon xususiyatlari")}
              className={`${
                comments == "Telfon xususiyatlari"
                  ? "bg-[#FF6F14] text-white duration-300"
                  : "bg-white text-[black] duration-300"
              } py-[14px] px-[32px] rounded-[10px font-semibold rounded-[10px]`}
            >
              Telfon xususiyatlari
            </button>
            <button
              onClick={() => setcommets("Mijozlarni fikri")}
              className={`${
                comments == "Mijozlarni fikri"
                  ? "bg-[#FF6F14] text-white duration-300"
                  : "bg-white text-[black] duration-300"
              } py-[14px] px-[32px] rounded-[10px font-semibold rounded-[10px]`}
            >
              Mijozlarni fikri
            </button>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="flex justify-between items-center">
            <div className="w-[820px] h-[542px]">
              {comments == "Telfon xususiyatlari" ? (
                <div className="py-[60px] px-[80px]">
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Brend
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      Vivo
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      CIM kartalar soni
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      2
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      O’lchamlari
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      75,09х155,11х8,28
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Modeli
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      Redmi T12
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Akumulyator hajmi
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      4000 amp
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Yadrolar soni
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      8
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Tezkor xotira RAM
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      6 GB
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Ichki xotira ROM
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      128 GB
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Protsessori
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      MediaTek Helio P35 (MT6765)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-[20px] mt-[40px]">
                  <div className="w-[100%] bg-white py-[30px] px-[40px] rounded-xl flex justify-between gap-[50px] items-center">
                    <Tooltip title="A'zamxon Axmedov" placement="top">
                        <Avatar className="w-[130px] h-[80px]" src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    </Tooltip>
                    <div className="w-[70%}">
                      <h4 className="font-bold text-[24px] mb-[10px]">Azamxon Axmedov</h4>
                      <p className="font-medium text-[#240E00CC] text-[16px]">Супер!! Спасибо продавцу, все пришло аккуратно. Телефон крутой не жалею о покупке. Советую тем, кому нужен хороший экран, оптимизация и тд!!!! Цвет темно синий, а на свету хамелеон</p>
                    </div>
                  </div>
                  <div className="w-[100%] bg-white py-[30px] px-[40px] rounded-xl flex justify-between gap-[50px] items-start">
                    <Tooltip title="Наташа" placement="top">
                    <Avatar
                        className="w-[120px] h-[60px]"
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                    <div className="w-[70%}">
                      <h4 className="font-bold text-[24px] mb-[10px]">Наташа</h4>
                      <p className="font-medium text-[#240E00CC] text-[16px]">Спасибо вам огромное за быстрый доставку. Узум маркет номер один. Подарок дочке понравился она рада. Спасибо вам огромное 🫶🫶🫶</p>
                    </div>
                  </div>
                  <div className="w-[100%] bg-white py-[30px] px-[40px] rounded-xl flex justify-between gap-[50px] items-start">
                    <Tooltip title="Kamronbek" placement="top">
                      <Avatar className="w-[120px] h-[60px]" style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                    </Tooltip>
                    <div className="w-[70%}">
                      <h4 className="font-bold text-[24px] mb-[10px]">Kamronbek</h4>
                      <p className="font-medium text-[#240E00CC] text-[16px]">Telefon juda yoqti bir kunda yetkazib berishti oylaganimdan yaxshiroq ekan tafsiya qilaman uzumdan harid qilishilarni 👍👍👍👍👍👍</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-[520px] h-[542px]">
            <Carousel arrows infinite={true} autoplay={true} className='rounded-lg overflow-hidden product-carousel mt-[40px]'>   
                  <div className='carousel'>
                      <Image src={Banner3} alt="Banner"/>
                  </div>
                  <div className='carousel'>
                      <Image src={Banner3} alt="Banner"/>
                  </div>
                  <div className='carousel'>
                      <Image src={Banner3} alt="Banner"/>
                  </div>    
            </Carousel>
            </div>
          </div>
        </Container>
      </div>
      <div className="mt-[120px]">
        <Container>
          <h1 className='font-bold text-[32px] mb-[24px]'>Aksiyadagi mahsulotlar</h1>
          <Swiper/>
        </Container>
      </div>
    </>
  );
}

export default Product;
