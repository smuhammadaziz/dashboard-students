import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import { Home, Groups, Students } from "@/pages/dashboard";

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
        path: "/notifactions",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Ustozlar",
        path: "/teachers",
        element: <Students />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Uyga vazifalar",
        path: "/homeworks",
        element: <Students />,
      },
    ],
  },
];

export default routes;
