let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const btn = document.getElementById("installBtn");
  btn.hidden = false;

  btn.onclick = () => {
    deferredPrompt.prompt();
    deferredPrompt = null;
  };
});

// Funções simples
function novaAvaliacao() {
  alert("Abrir sistema AESIC aqui");
}

function verHistorico() {
  alert("Histórico aqui");
}

// Registrar Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}