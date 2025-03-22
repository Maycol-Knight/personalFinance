console.log("Happy Code");

function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden');
}

function toggleEditModal() {
    document.getElementById('edit-modal').classList.toggle('hidden');
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
