// app.js

function updateBatteryStatus() {
  navigator.getBattery().then(battery => {
    const batteryStatusElement = document.getElementById('batteryStatus');
    const batteryPercent = Math.round(battery.level * 100);

    // Actualiza el texto
    batteryStatusElement.textContent = `Nivel de Batería: ${batteryPercent}%`;

    // Actualiza el ícono dinámico
    updateDynamicIcon(batteryPercent);
  });
}

function updateDynamicIcon(batteryPercent) {
  // Cambia el ícono dinámico según el nivel de batería
  const iconPath = `/path/to/icon${batteryPercent}.png`;

  // Actualiza el ícono en el manifest.json
  const linkElement = document.querySelector('link[rel="manifest"]');
  linkElement.href = `/manifest.json`;

  // Actualiza el ícono en el tag de la aplicación
  document.querySelector('link[rel="icon"]').href = iconPath;

  // Actualiza el título de la página
  document.title = `Batería: ${batteryPercent}%`;
}

// Llama a la función al cargar la página y cada vez que cambia el nivel de batería
window.addEventListener('DOMContentLoaded', updateBatteryStatus);
navigator.getBattery().then(battery => {
  battery.addEventListener('levelchange', updateBatteryStatus);
});
