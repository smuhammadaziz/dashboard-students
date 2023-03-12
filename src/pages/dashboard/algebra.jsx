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

function Algebra() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="p-12">
      <h2 className="text-3xl">Algebra darsi</h2>
      <Button variant="outlined" className="mt-6">
        <NavLink to="/dashboard/home">Dashboardga qaytish</NavLink>
      </Button>

      <div className="mt-12">
        <h2 className="text-2xl">Mavzu: Trigonometrik Tengsizliklar</h2>
        <p className="mt-10 text-xl">
          Trigonometrik tengsizliklar - trigonometrik funktsiya belgisi ostida
          o'zgaruvchini o'z ichiga olgan tengsizliklar.
        </p>
        <p className="mt-10 text-xl">Trigonometrik tengsizliklarni yechish</p>
        <p className="text-l mt-2">
          Trigonometrik tengsizliklarning yechimi ko'pincha quyidagi
          ko'rinishdagi eng oddiy trigonometrik tengsizliklarni yechishga
          to'g'ri keladi.
        </p>

        <p className="mt-10 text-xl">
          Eng oddiy trigonometrik tengsizliklar grafik yoki birlik trigonometrik
          aylana yordamida yechiladi.
        </p>
        <p className="text-l mt-2">
          Ta'rifga ko'ra, burchakning sinusi \(\ \alpha \) birlik doirasining
          \(\ P_(\alpha)(x, y) \) nuqtasining ordinatasidir (1-rasm), kosinus
          esa bu nuqtaning abscissasi. Bu fakt kosinus va sinus bilan eng oddiy
          trigonometrik tengsizliklarni birlik doirasi yordamida yechishda
          ishlatiladi.
        </p>

        <h3 className="mt-12 mb-6 text-xl">
          Quyidagi video orqali bilimingizni mustahkamlashingiz mumkin
        </h3>
        <div className="rounded-md">
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/OxLYv6rNGns"
            title="YouTube video player"
            frameBorder="20"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">
            Ushbu darsdagi o'tilgan trigonometrik formulalar
          </h2>
          <img src={trig} alt="trigonometrik img" />
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">
            Mustahkamlash uchun misollar
          </h2>
          <img src={misol} alt="trigonometrik img" />
        </div>
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Uyga vazifa</h2>
          <img src={misol2} alt="trigonometrik img" />
        </div>
        <Button variant="outlined" className="mt-6">
          <NavLink to="/dashboard/home">Dashboardga qaytish</NavLink>
        </Button>
      </div>
    </div>
  );
}

export default Algebra;
