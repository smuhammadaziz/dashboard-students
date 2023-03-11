import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 250,
  series: [
    {
      name: "Yillik",
      data: [10, 20, 10, 22, 50, 10, 40],
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
      name: "Oylik",
      data: [80, 350, 300, 320, 500, 350, 200, 230, 500],
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
    title: "Yillik Statistika",
    footer: "Ohirgi marta 2 kun oldin",
    chart: websiteViewsChart,
  },
  {
    color: "pink",
    title: "Oylik Statistika",
    footer: "Ohirgi marta 1 oy oldin",
    chart: dailySalesChart,
  },
];

export default statisticsChartsData;
