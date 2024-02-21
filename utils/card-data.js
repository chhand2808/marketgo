  export const pieChartOptions = {
    labels: ["One", "Two", "Three", "Four"],
    colors: ["#FF9B05", "#FFC46B", "#EF04FB", "#E20F05"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#FF9B05", "#FFC46B", "#EF04FB, #E20F05"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#FFFFFF",
      },
    },
  };
  
  export const pieChartData = [55, 25, 12, 8];