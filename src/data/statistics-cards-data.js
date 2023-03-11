import {
  BanknotesIcon,
  CircleStackIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "green",
    icon: CircleStackIcon,
    title: "Oylik O'zlashtirish",
    value: "+12%",
    footer: {
      color: "text-green-500",
      value: "+12%",
      label: "ga ortdi",
    },
  },
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Haftalik o'zlashtirish",
    value: "-2%",
    footer: {
      color: "text-red-500",
      value: "-8%",
      label: "ga tushdi",
    },
  },

  {
    color: "orange",
    icon: PresentationChartBarIcon,
    title: "Reyting",
    value: "7",
    footer: {
      color: "text-green-500",
      value: "+12",
      label: "ta o'ringa ko'tarildi",
    },
  },
];

export default statisticsCardsData;
