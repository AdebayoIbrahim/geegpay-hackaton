const ctx = document.getElementById("canvas").getContext("2d");

Chart.register(ChartDataLabels);

const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, "#34CAA5");
gradient.addColorStop(1, "rgba(52, 202, 165, 0)");

let week = false;
//get the input value select drop-down
const sortValue = document.getElementById("sort");
sortValue.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value == "Weekly") {
    week = true;
  } else {
    week = false;
  }
});

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      week ? "Sun" : "Jan",
      week ? "Mon" : "Feb",
      week ? "Tue" : "Mar",
      week ? "Wed" : "Apr",
      week ? "Thu" : "Mei",
      week ? "Fri" : "Jun",
      week ? "Sat" : "Jul",
      week ? "Sun" : "Aug",
      week ? "Mon" : "Sep",
      week ? "Tue" : "Okt",
      week ? "Wed" : "Nov",
      week ? "Fri" : "Des",
    ],
    datasets: [
      {
        label: "Chartter",
        data: [6.0, 18.0, 4.0, 28.0, 9.0, 46.0, 19.0, 22, 32, 4.8, 30, 27],
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
    responsive: true,
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
          maxTicksLimit: 20,
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

const date = document.querySelector(".ddy");

const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDay = monthArr[new Date().getMonth()];
// console.log(getDay);
//set output to date value
const day = new Date().getDate();
const yr = new Date().getFullYear();
date.textContent = `${getDay} ${day}, ${yr}`;

// for-notify-bell-click
const notifyBell = document.querySelectorAll(".bell");
const notifyBar = document.querySelector(".notify");
notifyBell.forEach((n) => {
  n.addEventListener("click", () => {
    handleNotify();
  });
});
notifyBell.forEach((n) => {
  n.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      handleNotify();
    }
  });
});

function handleNotify() {
  notifyBar.classList.toggle("notifyShow");
}

const login_info = document.querySelectorAll("#expand_login");
const login_dropdwn = document.querySelector(".login_dropdwn");
const toggleLoginDropdown = () => {
  login_dropdwn.classList.toggle("login_drpdnn_show");
};

login_info.forEach((f) => {
  f.addEventListener("click", toggleLoginDropdown);
});

login_info.forEach((f) => {
  f.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      toggleLoginDropdown();
    }
  });
});

//nav-theme-toggle
const active = document.querySelectorAll(".nav_toggle");
active.forEach((act) => {
  act.addEventListener("click", setActive);
});

function setActive(e) {
  active.forEach((acct) => {
    acct.classList.remove("active_toggle");
    acct.classList.remove("reset_cl");
  });

  e.currentTarget.classList.add("active_toggle");
  e.currentTarget.classList.remove("reset_cl");
}

// toggles-for-light&dark
const dark = document.getElementById("dark");
dark.onclick = function () {
  darkMode();
};
const light = document.getElementById("light");
light.onclick = function () {
  lightMode();
};

// light/dark-mode configs
const side = document.querySelector(".sidebar");
const nav = document.querySelector(".navbar");
const sidebar_container = document.querySelector(".sidebar_container");
const theme_toggle = document.querySelector(".theme_toggle");
const nav_svg = document.querySelectorAll("#nav_svg");
const nav_cal = document.querySelector("#nav_cal");
const main_cta = document.querySelector(".main-cta");
const canvas_dark = document.querySelector(".canvas");
const row_gut = document.querySelectorAll("#row_gut");
const tr_col = document.querySelectorAll("#tr_col");
const total_area = document.querySelectorAll(".total-area");
const amt = document.querySelectorAll(".amt");
const search = document.querySelector("#search");
// function to trigger dark mode
function darkMode() {
  side.classList.add("side-dark");
  nav.classList.add("nav-dark");
  sidebar_container.classList.add("sidebar_container_dark");
  theme_toggle.classList.add("toggle_dark");
  // notifyBar.classList.add("svg-dark");
  nav_svg.forEach((cal) => {
    cal.classList.add("svg-dark");
  });
  nav_cal.classList.add("svg_dark_stroke");
  login_info.forEach((cal) => {
    cal.classList.add("svg-dark");
  });
  main_cta.classList.add("main_cta_dark");
  canvas_dark.classList.add("cv_dark");
  row_gut.forEach((cal) => {
    cal.classList.add("cv_dark");
  });
  tr_col.forEach((cal) => {
    cal.classList.add("dark-col");
  });
  total_area.forEach((cal) => {
    cal.classList.add("cv_dark");
  });
  amt.forEach((cal) => {
    cal.classList.add("dark-col");
  });
  search.classList.add("inp-bg");
  sortValue.classList.add("inp-bg");
  login_dropdwn.classList.add("dropdwns-dark");
  notifyBar.classList.add("dropdwns-dark");
}

//function to reset back the mode to light
function lightMode() {
  side.classList.remove("side-dark");
  nav.classList.remove("nav-dark");
  sidebar_container.classList.remove("sidebar_container_dark");
  theme_toggle.classList.remove("toggle_dark");
  // notifyBar.classList.remove("svg-dark");
  nav_svg.forEach((cal) => {
    cal.classList.remove("svg-dark");
  });
  nav_cal.classList.remove("svg_dark_stroke");
  login_info.forEach((cal) => {
    cal.classList.remove("svg-dark");
  });
  main_cta.classList.remove("main_cta_dark");
  canvas_dark.classList.remove("cv_dark");
  row_gut.forEach((cal) => {
    cal.classList.remove("cv_dark");
  });
  tr_col.forEach((cal) => {
    cal.classList.remove("dark-col");
  });
  total_area.forEach((cal) => {
    cal.classList.remove("cv_dark");
  });
  amt.forEach((cal) => {
    cal.classList.remove("dark-col");
  });
  search.classList.remove("inp-bg");
  sortValue.classList.remove("inp-bg");
  login_dropdwn.classList.remove("dropdwns-dark");
  notifyBar.classList.remove("dropdwns-dark");
}

// should remove the display blocks
window.addEventListener("click", (e) => {
  if (!e.target.matches("#expand_login")) {
    login_dropdwn.classList.contains("login_drpdnn_show") &&
      login_dropdwn.classList.remove("login_drpdnn_show");
  }
  clickNotify(e);
});
function clickNotify(e) {
  if (!e.target.matches(".bell")) {
    notifyBar.classList.toggle("notifyShow") &&
      notifyBar.classList.remove("notifyShow");
  }
}
