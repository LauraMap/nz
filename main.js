let stop_lat = -41.293056;
let stop_lng = 174.001944;
let zoom = 13;
let title = 'Picton';

let map = L.map('map').setView([stop_lat, stop_lng ], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
    .bindPopup(title)
    .openPopup();