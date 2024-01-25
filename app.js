const myChart = new Chart("canvas", {
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
          "rgba(255, 99, 132, 0.1)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: ["transparent"],
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "#525252",
            fontFamily: "Plus Jakarta Sans",
            fontSize: 12,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 50,
            stepSize: 10, // Set the desired step size
            callback: function (value) {
              return value === 0
                ? "0"
                : value.toLocaleString("en-US", {
                    minimumFractionDigits: 3,
                  });
            },
            maxTicksLimit: 6,
            precision: 2,
            fontColor: "#525252",
            fontFamily: "Plus Jakarta Sans",
            fontSize: 12,
          },

          gridLines: {
            borderDash: [5, 5], // Set the x-axis grid lines to dashes
          },
        },
      ],
    },
  },
});
