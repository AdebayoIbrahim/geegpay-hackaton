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
        data: [6.0, 18.0, 4.0, 28.0, 9.0, 45.0, 19.0, 22, 32, 4.8, 30, 27],
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
    },

    scales: {
      x: {
        ticks: {
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
          max: 50,
          stepSize: 10,
          callback: function (value) {
            return value === 0
              ? "0"
              : value.toLocaleString("en-US", {
                  minimumFractionDigits: 3,
                });
          },
          maxTicksLimit: 6,
          precision: 2,
          font: {
            color: "#525252",
            family: "Plus Jakarta Sans",
            size: 12,
          },
        },
        grid: {
          borderDash: [5, 5],
        },
      },
    },
  },
});
