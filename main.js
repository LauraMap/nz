var map = L.map('map').setView([-41.293056, 174.001944], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-41.293056, 174.001944]).addTo(map)
    .bindPopup('Picton')
    .openPopup();