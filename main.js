let stop_lat = -41.293056;
let stop_lng = 174.001944;
let zoom = 13;
let title = 'Picton';

const STOPS = ['Abel-Tasman-Nationalpark', {
    title: "Picton", 
    user: "LauraMap",
    lat: -41.293056,
    lng: 174.001944,
    wikipedia: "https://en.wikipedia.org/wiki/Picton,_New_Zealand"
}, 'Wellington'];
console.log(STOPS);




let map = L.map('map').setView([stop_lat, stop_lng ], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
    .bindPopup(title)
    .openPopup();