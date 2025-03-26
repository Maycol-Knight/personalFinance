
  document.addEventListener("DOMContentLoaded", () => {
    loadCategories();
  });

  function toggleModal() {
    document.getElementById("modal").classList.toggle("hidden");
  }
  
  function toggleEditModal() {
    document.getElementById("edit-modal").classList.toggle("hidden");
  }
  
function toggleDeleteModal() {
    document.getElementById('delete-modal').classList.toggle('hidden');
}

// modal
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const registroForm = document.getElementById('registroForm');

openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

registroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const registros = {
        cuenta: document.getElementById('cuenta').value,
        monto: document.getElementById('monto').value,
        moneda: document.getElementById('moneda').value,
        etiquetas: document.getElementById('etiquetas').value,
        nota: document.getElementById('nota').value,
        fecha: document.getElementById('fecha').value
    };
    console.log("Registro añadido:", registros);
    modal.classList.add('hidden');  // Cierra el modal
});

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
        <td class="border border-gray-300 px-4 py-2">${category.classification}</td>
        <td class="border border-gray-300 px-4 py-2">${category.description}</td>
        <td class="border border-gray-300 px-4 py-2">
          <button onclick="editCategory(${index})" class="bg-yellow-500 text-white px-3 py-1 rounded">Editar</button>
          <button onclick="toggleDeleteModal(${index})" class="bg-red-500 text-white px-3 py-1 rounded">Eliminar</button>
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
    const name = document.querySelector("#category-name").value;
    const type = document.querySelector("#category-type").value;
    const classification = document.querySelector("#category-classification").value;
    const description = document.querySelector("#category-description").value;

    const categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories.push({ name, type, classification, description });
    localStorage.setItem("categories", JSON.stringify(categories));

    loadCategories();
    toggleModal();
  }

  function editCategory(index) {
    const categories = JSON.parse(localStorage.getItem("categories"));
    const category = categories[index];

    document.querySelector("#edit-category-name").value = category.name;
    document.querySelector("#edit-category-type").value = category.type;
    document.querySelector("#edit-category-classification").value = category.classification;
    document.querySelector("#edit-category-description").value = category.description;
    document.querySelector("#edit-category-index").value = index;

    toggleEditModal();
  }

  function saveEditedCategory() {
    const index = document.querySelector("#edit-category-index").value;
    const categories = JSON.parse(localStorage.getItem("categories"));

    categories[index] = {
      name: document.querySelector("#edit-category-name").value,
      type: document.querySelector("#edit-category-type").value,
      classification: document.querySelector("#edit-category-classification").value,
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
  
  document.addEventListener("DOMContentLoaded", cargarCategorias);

  function guardarCategoria() {
      let input = document.getElementById("nueva-categoria");
      let nuevaCategoria = input.value.trim();
  
      if (nuevaCategoria === "") {
          alert("Por favor, ingresa una categoría válida.");
          return;
      }
  
      let categorias = JSON.parse(localStorage.getItem("categorias")) || [];
  
      if (!categorias.includes(nuevaCategoria)) { // Evitar duplicados
          categorias.push(nuevaCategoria);
          localStorage.setItem("categorias", JSON.stringify(categorias));
          input.value = ""; // Limpiar el campo de entrada
          cargarCategorias(); // Actualizar el select
      } else {
          alert("Esta categoría ya existe.");
      }
  }