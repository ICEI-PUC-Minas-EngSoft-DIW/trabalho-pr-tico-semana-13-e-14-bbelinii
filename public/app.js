
const API_BASE = 'http://localhost:3001';

async function carregarPostagens() {
  const r = await fetch(`${API_BASE}/postagens`);
  return r.json();
}

async function carregarPostagem(id) {
  const r = await fetch(`${API_BASE}/postagens/${id}`);
  return r.json();
}

async function criarPostagem(data) {
  const r = await fetch(`${API_BASE}/postagens`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return r.json();
}

async function atualizarPostagem(id, data) {
  const r = await fetch(`${API_BASE}/postagens/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return r.json();
}

async function excluirPostagem(id) {
  await fetch(`${API_BASE}/postagens/${id}`, { method: 'DELETE' });
  return true;
}

window.carregarPostagens = carregarPostagens;
window.carregarPostagem = carregarPostagem;
window.criarPostagem = criarPostagem;
window.atualizarPostagem = atualizarPostagem;
window.excluirPostagem = excluirPostagem;

document.addEventListener("DOMContentLoaded", () => {
  const apiButton = document.getElementById('botao-api');
  if (apiButton) {
    apiButton.addEventListener('click', () => {
      window.location.href = 'mapa.html';
    });
  }
});