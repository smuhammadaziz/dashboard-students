import React from "react";

const days = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma"];
const times = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const classes = [
  {
    day: "Dushanba",
    time: "9:00 AM",
    title: "Matematika",
    instructor: "Aliyev Ali",
  },
  {
    day: "Dushanba",
    time: "1:00 PM",
    title: "English",
    instructor: "Aliyev Ali",
  },
  {
    day: "Seshanba",
    time: "10:00 AM",
    title: "Fizika",
    instructor: "Aliyev Ali",
  },
  {
    day: "Seshanba",
    time: "1:00 PM",
    title: "IT",
    instructor: "Aliyev Ali",
  },
  {
    day: "Chorshanba",
    time: "2:00 PM",
    title: "Tarix",
    instructor: "Aliyev Ali",
  },
  {
    day: "Chorshanba",
    time: "8:00 AM",
    title: "Adabiyot",
    instructor: "Aliyev Ali",
  },
  {
    day: "Payshanba",
    time: "9:00 AM",
    title: "Geometriya",
    instructor: "Aliyev Ali",
  },
  {
    day: "Payshanba",
    time: "11:00 AM",
    title: "Ona tili",
    instructor: "Aliyev Ali",
  },
  { day: "Juma", time: "8:00 AM", title: "Music", instructor: "Aliyev Ali" },
  {
    day: "Juma",
    time: "3:00 PM",
    title: "Jismoniy tarbiya",
    instructor: "Aliyev Ali",
  },
];

const Schedule = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2"></th>
            {days.map((day) => (
              <th className="px-4 py-2" key={day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {times.map((time) => (
            <tr key={time}>
              <td className="px-4 py-2 ">{time}</td>
              {days.map((day) => {
                const cls = classes.find(
                  (c) => c.day === day && c.time === time
                );
                return (
                  <td className="border-2 px-4 py-2" key={`${day}-${time}`}>
                    {cls ? (
                      <>
                        <div>{cls.title}</div>
                        <div className="text-xs text-gray-500">
                          {cls.instructor}
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
