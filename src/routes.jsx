import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import { Home, Groups, Students } from "@/pages/dashboard";
import Schedule from "./pages/dashboard/schedule";
import Homeworks from "./pages/dashboard/homeworks";
import Teachers from "./pages/dashboard/teachers";
import Algebra from "./pages/dashboard/algebra";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Bosh sahifa",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Guruh va darslar",
        path: "/groups",
        element: <Groups />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "O'quvchilar",
        path: "/students",
        element: <Students />,
      },

      {
        icon: <TableCellsIcon {...icon} />,
        name: "dars jadvali",
        path: "/schedule",
        element: <Schedule />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Ustozlar",
        path: "/teachers",
        element: <Teachers />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Uyga vazifalar",
        path: "/homeworks",
        element: <Homeworks />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Uyga vazifalarrr",
        path: "/groups/lessons/0e9b53ad-0aa3-43a6-bb06-b697efd25fd2",
        element: <Algebra />,
      },
    ],
  },
];

export default routes;
