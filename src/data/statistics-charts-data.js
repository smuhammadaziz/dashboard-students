import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 250,
  series: [
    {
      name: "Oylik",
      data: [15, 20, 10, 25, 35, 20, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#fff",
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 250,
  series: [
    {
      name: "Haftalik",
      data: [450, 600, 350, 250, 100, 290, 370, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#fff"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

export const statisticsChartsData = [
  {
    color: "blue",
    title: "Oylik o'zlashtirish",
    footer: "Ohirgi marta 2 kun oldin",
    chart: websiteViewsChart,
  },
  {
    color: "red",
    title: "Haftalik o'zlashtirish",
    footer: "Ohirgi marta 1 oy oldin",
    chart: dailySalesChart,
  },
];

export default statisticsChartsData;
