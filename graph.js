//------------------------
const meses = registrosIniciales.map((registro) => {
  return registro.fecha.split("-")[1]; // Captura el mes de la fecha
});
const mesesUnicos = [...new Set(meses)]; // Elimina los duplicados

// Función para obtener el nombre del mes
function obtenerNombreMes(numeroMes) {
  switch (numeroMes) {
    case "01":
      return "Enero";
    case "02":
      return "Febrero";
    case "03":
      return "Marzo";
    case "04":
      return "Abril";
    case "05":
      return "Mayo";
    case "06":
      return "Junio";
    case "07":
      return "Julio";
    case "08":
      return "Agosto";
    case "09":
      return "Septiembre";
    case "10":
      return "Octubre";
    case "11":
      return "Noviembre";
    case "12":
      return "Diciembre";
    default:
      return "";
  }
}

// filtrar el monto total de ingresos, gastos y ahorro de cada mes usando reduce
// y los almacena en un objeto
const registrosPorMes = mesesUnicos.map((mes) => {
  const registrosFiltrados = registrosIniciales.filter((registro) => {
    return registro.fecha.split("-")[1] === mes; // Filtra los registros por mes
  });
  const montoTotalIngresos = registrosFiltrados.reduce((total, registro) => {
    if (registro.tipo === "ingreso") {
      return total + registro.monto; // Suma los ingresos
    } else {
      return total; // Si no es ingreso, devuelve el total
    }
  }, 0);
  const montoTotalGastos = registrosFiltrados.reduce((total, registro) => {
    if (registro.tipo === "gasto") {
      return total + registro.monto; // Suma los gastos
    } else {  
      return total; // Si no es gasto, devuelve el total
    }
  }, 0);
  const montoTotalAhorro = registrosFiltrados.reduce((total, registro) => {
    if (registro.tipo === "ahorro") {
      return total + registro.monto; // Suma los ahorros
    } else {
      return total; // Si no es ahorro, devuelve el total
    }
  }, 0);
  return {
    mes: obtenerNombreMes(mes), // Usa la función para obtener el nombre del mes
    montoTotalIngresos,
    montoTotalGastos,
    montoTotalAhorro,
  };
});

// console.log(registrosPorMes); // Muestra los registros por mes

// solo mes
const soloMes = registrosPorMes.map((registro) => {
  return registro.mes; // Muestra solo los meses
});
// console.log(soloMes);

// solo imprir los ingresos
const soloIngresos = registrosPorMes.map((registro) => {
  return registro.montoTotalIngresos; // Muestra solo los ingresos
});
// console.log(soloIngresos);

// solo imprimir los gastos
const soloGastos = registrosPorMes.map((registro) => {
  return registro.montoTotalGastos; // Muestra solo los gastos
});
// console.log(soloGastos);

// solo imprimir los ahorros
const soloAhorros = registrosPorMes.map((registro) => {
  return registro.montoTotalAhorro; // Muestra solo los ahorros
});
// console.log(soloAhorros);



const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar", // Tipo de gráfico
  data: {
    labels: soloMes, // Usa los meses obtenidos
    datasets: [
      {
        label: "Ingresos",
        data: soloIngresos,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Gastos",
        data: soloGastos,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Ahorros",
        data: soloAhorros,
        backgroundColor: "rgba(104, 99, 255, 0.5)",
        borderColor: "rgb(99, 120, 255)",
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
        text: "Resumen anual en % en S/.",
      },
    },
  },
});

const line = document.getElementById("lineChart").getContext("2d");
const lineChart = new Chart(line, {
  type: "line", // Tipo de gráfico
  data: {
    labels: soloMes,
    datasets: [
      {
        label: "Ingresos",
        data: soloIngresos,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Gastos",
        data: soloGastos,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Ahorros",
        data: soloAhorros,
        backgroundColor: "rgba(104, 99, 255, 0.5)",
        borderColor: "rgb(99, 120, 255)",
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

