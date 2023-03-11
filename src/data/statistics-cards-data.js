import {
  BanknotesIcon,
  CircleStackIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "green",
    icon: CircleStackIcon,
    title: "Oylik To'lovlar",
    value: "$198k",
    footer: {
      color: "text-green-500",
      value: "+37.8%",
      label: "Oylik",
    },
  },
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Budget",
    value: "$2.4k",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "Oylik",
    },
  },

  {
    color: "orange",
    icon: PresentationChartBarIcon,
    title: "Sof Foyda",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+11%",
      label: "Oylik",
    },
  },
];

export default statisticsCardsData;
