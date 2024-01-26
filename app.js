const ctx = document.getElementById("canvas").getContext("2d");

Chart.register(ChartDataLabels);

const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, "#34CAA5");
gradient.addColorStop(1, "rgba(52, 202, 165, 0)");

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Chartter",
        data: [6.0, 18.0, 4.0, 28.0, 9.0, 48.0, 19.0, 22, 32, 4.8, 30, 27],
        backgroundColor: [
          "rgba(52,202,165,.1)",
          "rgba(52,202,165,.1)",
          "rgba(52,202,165,.1)",
          "rgba(52,202,165,.1)",
          "rgba(52,202,165,.1)",
          gradient,
          "rgba(52,202,165,.1)",
          "rgba(52,202,165,.1)",
          "rgba(52,202,165,.1)",
          "rgba(52,202,165,.1)",
          "rgba(52,202,165,.1)",
          "rgba(52,202,165,.1)",
        ],
        borderColor: ["transparent"],
        borderRadius: 50,
      },
    ],
  },
  options: {
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        borderRadius: 10,
        color: "transparent",
        font: {
          family: "Plus Jakarta Sans",
          size: 12,
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.formattedValue}`,
          labelPointStyle: function (context) {
            return {
              pointStyle: "none",
              rotation: 90,
            };
          },
        },
        usePointStyle: true,

        font: {
          family: "Plus Jakarta Sans",
          size: 12,
        },
      },
    },

    scales: {
      x: {
        ticks: {
          // display: false,
          font: {
            color: "#525252",
            family: "Plus Jakarta Sans",
            size: 12,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          min: 0,
          max: 60,
          stepSize: 5,
          callback: function (value) {
            if (value === 0) {
              return "0";
            } else if (value === 5) {
              return value.toLocaleString("en-US", {
                minimumFractionDigits: 3,
              });
            } else if (value === 10) {
              return value.toLocaleString("en-US", {
                minimumFractionDigits: 3,
              });
            } else if (value > 10 && value % 10 === 0 && value <= 50) {
              return value.toLocaleString("en-US", {
                minimumFractionDigits: 3,
              });
            } else {
              return "";
            }
          },
          maxTicksLimit: 12,
          precision: 2,
          font: {
            color: "#525252",
            family: "Plus Jakarta Sans",
            size: 12,
          },
        },
        grid: {
          borderDash: [2, 2],
          drawBorder: false,
        },
      },
    },
  },
});
