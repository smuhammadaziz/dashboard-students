import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import trig from "../../assets/trig.webp";
import misol from "../../assets/misol.jpg";
import misol2 from "../../assets/misol2.png";
import misol4 from "../../assets/misol4.png";
import misol5 from "../../assets/misol5.png";
import misol6 from "../../assets/misol6.png";

function Fizika() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="p-12">
      <h2 className="text-3xl">Fizika darsi</h2>
      <Button variant="outlined" className="mt-6">
        <NavLink to="/dashboard/home">Dashboardga qaytish</NavLink>
      </Button>

      <div className="mt-12">
        <h2 className="text-2xl">Mavzu: Issiqlik harakati </h2>
        <p className="mt-10 text-xl">
          Issiqlik harakati - moddani tashkil etgan zarralar (molekulalar,
          atomlar, elektronlar va b.)ning tartibsiz (xaotik) harakati.
          Termodinamik muvozanatli holatdagi zarralarning barcha
          yoʻnalishlaridagi teng ehtimolli tartibsiz harakati xaotik harakat
          deyiladi.
        </p>
        <p className="mt-10 text-xl">Molekulalar harakati</p>
        <p className="text-l mt-2">
          Real gaz molekulalari bir toʻqnashishdan keyin ikkinchi
          toʻqnashishgacha toʻgʻri chizikli tekis harakatlanadi. Gazdagi
          molekulalarning bu ilgarilanma harakatlari barcha yoʻnalishlarda
          xaotik harakatdir.
        </p>

        <p className="mt-10 text-xl">Suyuq holatdagi modda molekulasi</p>
        <p className="text-l mt-2">
          Suyuq holatdagi modda molekulasi oʻz atrofidagi molekulalar bilan
          aylanma va tebranma harakatda doimo toʻqnashishda boʻladi; molekula
          amorf jis-mlar, jumladan, suyuqliklarda molekulalarning Issiqlik
          harakati — vaqtincha muvozanatli holatlari atrofida tartibsiz
          joylashgan molekulalarning tebranma harakatlaridan va bu harakatlar
          davomida ularning baʼzan bir muvozanatli tebranish holatlaridan
          boshqalariga sakrashlaridan iborat. Kuchli yopishqoq suyuqliklarda,
          ayniqsa, amorf jismlarda, jumladan, shishalarda bunday sakrashlar
          nihoyatda oz boʻladi. Suyuklik molekulalarining Issiqlik harakatidagi
          tartibsiz ilgarilanma harakati shu sakrashlar tufayli sodir boʻladi.
          Temperatura ortishi bilan Issiqlik harakatini ifodalovchi tebranma
          harakatlar va sakrab oʻtishlar kuchayadi.
        </p>

        <h3 className="mt-12 mb-6 text-xl">
          Quyidagi video orqali bilimingizni mustahkamlashingiz mumkin
        </h3>
        <div className="rounded-md">
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/j-OKVREJ3AE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">
            Ushbu darsda o'tilgan formulalar
          </h2>
          <img src={misol4} alt="trigonometrik img" />
          <img src={misol5} alt="trigonometrik img" />
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Uyga vazifa</h2>
          <p className="text-xl">MOLEKULAR KINETIK NAZARIYA ASOSLARI</p>
          <p className="text-l">
            Gazlar molekular kinetik nazariyasining asosiy tenglamasi:
          </p>
          <img src={misol6} alt="trigonometrik img" />
          <p className="text-l">
            Gazlar molekular kinetik nazariyasining asosiy tenglamasiga oid
            masalalar yechish (130-140 - misollar)
          </p>
        </div>
        <Button variant="outlined" className="mt-6">
          <NavLink to="/dashboard/home">Dashboardga qaytish</NavLink>
        </Button>
      </div>
    </div>
  );
}

export default Fizika;
