//modal de categorias
function toggleModal() {
  document.getElementById("modal").classList.toggle("hidden");
}

function toggleEditModal() {
  document.getElementById("edit-modal").classList.toggle("hidden");
}

function toggleDeleteModal() {
  document.getElementById("delete-modal").classList.toggle("hidden");
}

// modal general
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const registroForm = document.getElementById("registroForm");

const registrosIniciales = [
  {
    tipo: "ingreso",
    categoria: "Salario",
    monto: 1000,
    moneda: "PEN",
    fecha: "2025-03-26",
    nota: "Pago mensual",
  },
  {
    tipo: "gasto",
    categoria: "Alquiler",
    monto: 500,
    moneda: "PEN",
    fecha: "2025-03-26",
    nota: "Pago de alquiler",
  },
  {
    tipo: "ingreso",
    categoria: "Freelance",
    monto: 300,
    moneda: "PEN",
    fecha: "2025-03-26",
    nota: "Trabajo freelance",
  },
  {
    tipo: "gasto",
    categoria: "Comida",
    monto: 200,
    moneda: "PEN",
    fecha: "2025-01-27",
    nota: "Compra de supermercado",
  },
  {
    tipo: "ahorro",
    categoria: "Ahorro",
    monto: 100,
    moneda: "PEN",
    fecha: "2025-02-27",
    nota: "Ahorro mensual",
  },
];

function toggleModalDashboard() {
  modal.classList.toggle("hidden");
}
openModalBtn.addEventListener("click", toggleModalDashboard);
closeModalBtn.addEventListener("click", toggleModalDashboard);
let tipoBtn = document.querySelectorAll(".js-tipo-boton");

// Captura el tipo de registro mediante el evento click
tipoBtn.forEach((tipo) => {
  tipo.addEventListener("click", (event) => {
    event.preventDefault();
    tipoSeleccionado = event.currentTarget.dataset.tipo; // Captura el tipo
    console.log(tipoSeleccionado);
  });
});

// Captura los datos del formulario y lo guardo en registrosIniciales
registroForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  const { categoria, monto, moneda, fecha, nota } = event.target.elements;
  const newRegistro = {
    tipo: tipoSeleccionado,
    categoria: categoria.value,
    monto: parseFloat(monto.value),
    moneda: moneda.value,
    fecha: fecha.value,
    nota: nota.value,
  };
  console.log(newRegistro);
  registrosIniciales.push(newRegistro); // Agrega el nuevo registro al array
  // registroForm.reset();
  modal.classList.add("hidden"); // Cierra el modal
  console.log(registrosIniciales);
});

// Capturar el evento click en filtro fecha

function capturarFecha() {
  const fechaFilter = document.querySelector("#fechaFilter");
  fechaFilter.addEventListener("change", (event) => {
    const fechaSeleccionada = event.target.value;
    // console.log(fechaSeleccionada);
    const registrosFiltradosPorFecha = registrosIniciales.filter((registro) => {
      return registro.fecha === fechaSeleccionada;
    });
    // console.log(registrosFiltradosPorFecha);
  });
}
capturarFecha();

// Capturar el evento click en filtro mes
function capturarMes() {
  const mesFilter = document.querySelector("#mesFilter");

  mesFilter.addEventListener("change", (event) => {
    const mesSeleccionado = event.target.value; // Formato: "YYYY-MM"
    const [anioSeleccionado, mesSeleccionadoNumero] =
      mesSeleccionado.split("-");

    const registrosFiltradosPorMes = registrosIniciales.filter((registro) => {
      const [anioRegistro, mesRegistro] = registro.fecha.split("-"); // Divide la fecha en "YYYY-MM-DD"
      return (
        anioRegistro === anioSeleccionado &&
        mesRegistro === mesSeleccionadoNumero
      );
    });

    //console.log(registrosFiltradosPorMes); // Muestra los registros filtrados por mes
  });
}
capturarMes();

function loadCategories() {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  categories.forEach((category, index) => {
    const row = document.createElement("tr");
    row.classList.add("bg-white", "border", "border-gray-300");
    row.innerHTML = `
        <td class="border border-gray-300 px-4 py-2">${category.name}</td>
        <td class="border border-gray-300 px-4 py-2">${category.type}</td>
        <td class="border border-gray-300 px-4 py-2">${category.description}</td>
        <td class="border border-gray-300 px-4 py-2">
          <button onclick="editCategory(${index})" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 cursor-pointer">Editar</button>
          <button onclick="toggleDeleteModal(${index})" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer">Eliminar</button>
        </td>
      `;
    tbody.appendChild(row);
  });
}

function toggleDeleteModal(index = null) {
  const modal = document.getElementById("delete-modal");

  if (index !== null) {
    document.getElementById("delete-category-index").value = index;
  }

  modal.classList.toggle("hidden");
}

function addCategory() {
  let name = document.getElementById("category-name").value.trim();
    let type = document.getElementById("category-type").value;
    let description = document.getElementById("category-description").value.trim();

    let errorName = document.getElementById("error-name");
    let errorType = document.getElementById("error-type");

    // Reiniciar errores
    errorName.classList.add("hidden");
    errorType.classList.add("hidden");

    let isValid = true;

    // Validar Nombre
    if (name === "") {
        errorName.classList.remove("hidden");
        isValid = false;
    }

    // Validar Tipo
    if (type === "") {
        errorType.classList.remove("hidden");
        isValid = false;
    }

    if (!isValid) {
        return; // No continuar si hay errores
    }

    // Obtener categorías almacenadas en localStorage
    let categories = JSON.parse(localStorage.getItem("categories")) || [];

    // Agregar nueva categoría
    categories.push({ name, type, description });

    // Guardar en localStorage
    localStorage.setItem("categories", JSON.stringify(categories));

    // Cerrar modal y limpiar formulario
    toggleModal();
    document.getElementById("category-form").reset();

    // Recargar la tabla
    loadCategories();
}


function editCategory(index) {
  //
  const categories = JSON.parse(localStorage.getItem("categories"));
  const category = categories[index];

  document.querySelector("#edit-category-name").value = category.name;
  document.querySelector("#edit-category-type").value = category.type;
  document.querySelector("#edit-category-description").value =
    category.description;
  document.querySelector("#edit-category-index").value = index;

  toggleEditModal();
}

function saveEditedCategory() {
  const index = document.querySelector("#edit-category-index").value;
  const categories = JSON.parse(localStorage.getItem("categories"));

  categories[index] = {
    name: document.querySelector("#edit-category-name").value,
    type: document.querySelector("#edit-category-type").value,
    description: document.querySelector("#edit-category-description").value,
  };

  localStorage.setItem("categories", JSON.stringify(categories));
  loadCategories();
  toggleEditModal();
}

function deleteCategory() {
  const index = document.getElementById("delete-category-index").value;
  let categories = JSON.parse(localStorage.getItem("categories"));

  categories.splice(index, 1);
  localStorage.setItem("categories", JSON.stringify(categories));

  loadCategories();
  toggleDeleteModal(); // Cierra el modal después de eliminar
}

// document.addEventListener("DOMContentLoaded", cargarCategorias);

function guardarCategoria() {
  let input = document.getElementById("nueva-categoria");
  let nuevaCategoria = input.value.trim();

  if (nuevaCategoria === "") {
    alert("Por favor, ingresa una categoría válida.");
    return;
  }

  let categorias = JSON.parse(localStorage.getItem("categorias")) || [];

  if (!categorias.includes(nuevaCategoria)) {
    // Evitar duplicados
    categorias.push(nuevaCategoria);
    localStorage.setItem("categorias", JSON.stringify(categorias));
    input.value = ""; // Limpiar el campo de entrada
    cargarCategorias(); // Actualizar el select
  } else {
    alert("Esta categoría ya existe.");
  }
}


function loadCategoriesByType(tipo) {
  let categories = JSON.parse(localStorage.getItem("categories")) || [];
  let categoriaSelect = document.getElementById("categoria");

  // Limpiar opciones anteriores
  categoriaSelect.innerHTML = '<option value="">Seleccione una categoría</option>';

  // Filtrar categorías según el tipo seleccionado
  let filteredCategories = categories.filter(cat => cat.type === tipo);

  // Agregar opciones al select
  filteredCategories.forEach(cat => {
      let option = document.createElement("option");
      option.value = cat.name;
      option.textContent = cat.name;
      categoriaSelect.appendChild(option);
  });
}
document.querySelectorAll(".js-tipo-boton").forEach(boton => {
  boton.addEventListener("click", function() {
      let tipoSeleccionado = this.getAttribute("data-tipo");
      loadCategoriesByType(tipoSeleccionado);
  });
});
