import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useRef, useState, useEffect } from "react";

function English() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="p-12">
      <h2 className="text-3xl">English lesson</h2>
      <Button variant="outlined" className="mt-6">
        <NavLink to="/dashboard/home">Go to Dashboard</NavLink>
      </Button>

      <div className="mt-12">
        <h2 className="text-2xl font-bold">Topic: Modal Verbs</h2>
        <p className="mt-10 text-xl">
          We use modals to show if we believe something is certain, possible or
          impossible:
        </p>
        <p className="mt-10 text-xl">About Modal Verbs</p>
        <p className="text-l mt-2">
          Simple examples:
          <ul>
            <li>My keys must be in the car.</li>
            <li>It might rain tomorrow.</li>
            <li>That can't be Peter's coat. It's too small.</li>
          </ul>
        </p>

        <p className="mt-10 text-xl font-bold">
          We also use them to do things like talk about ability, ask permission,
          and make requests and offers:
        </p>
        <p className="text-l mt-2">
          Simple examples:
          <ul>
            <li>I can't swim.</li>
            <li>May I ask a question?</li>
            <li>Could I have some tea, please?</li>
          </ul>
        </p>

        <h3 className="mt-12 mb-6 text-xl">
          You can strengthen your knowledge through the video below
        </h3>
        <div className="rounded-md">
          <iframe
            width="600"
            height="350"
            src="https://www.youtube.com/embed/U7IF_Y52rp4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Tasks:</h2>
          <div className="english-quiz-app mt-12">
            <p className="text-2xl font-bold">You ___ listen to the teacher.</p>
            <ul className="list-disc text-xl">
              <li>Can</li>
              <li>Must</li>
            </ul>
          </div>
          <div className="english-quiz-app mt-12">
            <p className="text-2xl font-bold">You ___ park here.</p>
            <ul className="list-disc text-xl">
              <li>Can't</li>
              <li>Won't</li>
            </ul>
          </div>
          <div className="english-quiz-app mt-12">
            <p className="text-2xl font-bold"> I ___ play tennis tomorrow.</p>
            <ul className="list-disc text-xl">
              <li>Won't</li>
              <li>wouldn't</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Homework:</h2>
          <p className="text-xl font-bold">
            Learn new words, Students book pg 41-43, Workbook pg 32-34
          </p>
        </div>
        <Button variant="outlined" className="mt-6">
          <NavLink to="/dashboard/home">Go to Dashboard</NavLink>
        </Button>
      </div>
    </div>
  );
}

export default English;
