const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar", // Tipo de gráfico
  data: {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Ingresos",
        data: [12000, 19000, 3000, 5000, 2000, 3000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Gastos",
        data: [10000, 15000, 2000, 3000, 1000, 2000],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Resumen anual en % en S/.",
      },
    },
  },
});

const line = document.getElementById("lineChart").getContext("2d");
const lineChart = new Chart(line, {
  type: "line", // Tipo de gráfico
  data: {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Ingresos",
        data: [12000, 19000, 3000, 5000, 2000, 3000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Gastos",
        data: [10000, 15000, 2000, 3000, 1000, 2000],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Resumen anual en S/.",
      },
    },
  },
});

// Código para inicializar el gráfico Doughnut
const ctxDoughnut = document.getElementById("doughnutChart").getContext("2d");
const doughnutChart = new Chart(ctxDoughnut, {
  type: "doughnut", // Tipo de gráfico
  data: {
    labels: ["alimentacion", "Alquiler", "Tansporte", "Educación"],
    datasets: [
      {
        label: "Gasto",
        data: [40000, 2310, 20000, 5000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(15, 235, 169, 0.5)",
        ],

        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Resumen mensual de gastos marzo % en S/.",
      },
    },
  },
});
