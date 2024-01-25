const myChart = new Chart("canvas", {
  type: "bar",
  data: {
    labels: [
      "jan",
      "feb",
      "mar",
      "Apr",
      "Mei",
      "jun",
      "jul",
      "aug",
      "sep",
      "okt",
      "nov",
      "dec",
    ],
    datasets: [
      {
        label: "Chartter",
        data: [65, 59, 80, 81, 56, 55, 40, 34, 21, 45, 12, 5, 67],
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
        borderWidth: 2,
        borderRadius: 50,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
