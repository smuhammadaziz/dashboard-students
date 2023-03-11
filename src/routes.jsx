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
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Guruhlar",
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
        icon: <Cog6ToothIcon {...icon} />,
        name: "sozlamalar",
        path: "/settings",
        element: <Home />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "yordam",
        path: "/help",
        element: <Home />,
      },
    ],
  },
];

export default routes;
