// app.js

function updateBatteryStatus() {
  navigator.getBattery().then(battery => {
    const batteryStatusElement = document.getElementById('batteryStatus');
    const batteryPercent = Math.round(battery.level * 100);
    
    // Actualiza el texto
    batteryStatusElement.textContent = `Nivel de Batería: ${batteryPercent}%`;

    // Actualiza el título de la página
    document.title = `Batería: ${batteryPercent}%`;
  });
}

// Llama a la función al cargar la página y cada vez que cambia el nivel de batería
window.addEventListener('DOMContentLoaded', updateBatteryStatus);
navigator.getBattery().then(battery => {
  battery.addEventListener('levelchange', updateBatteryStatus);
});
