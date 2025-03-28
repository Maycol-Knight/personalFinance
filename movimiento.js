//------------------movimiento.html------------------//
// Función para mostrar el historial en la tabla
function mostrarHistorial() {
    const tablaHistorial = document.getElementById("tabla-historial");
    tablaHistorial.innerHTML = ""; // Limpiar la tabla antes de agregar datos
  
    // Ordenar los datos por fecha (asumiendo que la fecha está en formato YYYY-MM-DD)
    registrosIniciales.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  
    // Crear la cabecera de la tabla
    const cabecera = tablaHistorial.createTHead();
    const filaCabecera = cabecera.insertRow();
    const columnas = ["Tipo", "Categoría", "Monto", "Moneda", "Fecha", "Nota"];
    columnas.forEach((columna) => {
      const celda = document.createElement("th");
      celda.textContent = columna;
      celda.classList.add("py-2", "px-4", "text-left", "bg-indigo-200", "border");
      filaCabecera.appendChild(celda);
    });
  
    // Crear el cuerpo de la tabla con los datos
    const cuerpoTabla = tablaHistorial.createTBody();
    registrosIniciales.forEach((dato) => {
      const fila = cuerpoTabla.insertRow();
      const valores = [
        dato.tipo,
        dato.categoria,
        dato.monto,
        dato.moneda,
        dato.fecha,
        dato.nota,
      ];
      valores.forEach((valor) => {// Crear una celda por cada valor
        const celda = fila.insertCell();
        celda.textContent = valor;
        celda.classList.add("py-2", "px-4", "border");
      });
    });
  }
  
  // Función para exportar la tabla a Excel
  function exportarExcel() {
    const tabla = document.getElementById("tabla-historial");
    const wb = XLSX.utils.table_to_book(tabla, { sheet: "Historial" });
    XLSX.writeFile(wb, "historial.xlsx");
  }
  
  // Llamar a la función para mostrar el historial al cargar la página
  mostrarHistorial();
  
  // Agregar el evento al botón de exportación
  document.getElementById("btn-exportar").addEventListener("click", exportarExcel);
  
  //---------------------------------------------------------//