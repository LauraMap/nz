let stop_lat = -41.293056;
let stop_lng = 174.001944;
let zoom = 6;
let title = 'Picton';

const STOPS = [
    {
        title: "Christchurch",
        user: "manohog",
        lat: -43.531111,
        lng: 172.636667,
        wikipedia: "https://de.wikipedia.org/wiki/Christchurch"
    },
    {
        title: "Lake Tekapo",
        user: "chris0810",
        lat: -43.883333,
        lng: 170.516667,
        wikipedia: "https://de.wikipedia.org/wiki/Lake_Tekapo"
    },
    {
        title: "Moeraki Boulders",
        user: "Mirjamkirschner",
        lat: -45.345275,
        lng: 170.826061,
        wikipedia: "https://en.wikipedia.org/wiki/Moeraki_Boulders"
    },
    {
        title: "Milford Sound",
        user: "julianple",
        lat: -44.616667,
        lng: 167.866667,
        wikipedia: "https://de.wikipedia.org/wiki/Milford_Sound/Piopiotahi"
    },
    {
        title: "Wanaka",
        user: "sebastianv99",
        lat: -44.71,
        lng: 169.16,
        wikipedia: "https://de.wikipedia.org/wiki/Wanaka"
    },
    {
        title: "Der Fox Gletscher",
        user: "grueneli",
        lat: -43.53,
        lng: 170.15,
        wikipedia: "https://de.wikipedia.org/wiki/Fox-Gletscher"
    },
    {
        title: "Der Franz-Joseph Gletscher",
        user: "ttfg22",
        lat: -43.5,
        lng: 170.22,
        wikipedia: "https://de.wikipedia.org/wiki/Franz-Josef-Gletscher"
    },
    {
        title: "Abel Tasman Nationalpark",
        user: "fabianwild",
        lat: -40.833333,
        lng: 172.9,
        wikipedia: "https://de.wikipedia.org/wiki/Abel-Tasman-Nationalpark"
    },
    {
        title: "Picton",
        user: "LauraMap",
        lat: -41.293056,
        lng: 174.001944,
        wikipedia: "https://en.wikipedia.org/wiki/Picton,_New_Zealand"
    },
    {
        title: "Die Hauptstadt von Neuseeland Wellington",
        user: "damerow",
        lat: -41.2875,
        lng: 174.7761,
        Wikipedia: "https://de.wikipedia.org/wiki/Wellington"
    },
    {
        title: "Tongariro-Nationalpark",
        user: "webmapping",
        lat: -39.2,
        lng: 175.583333,
        wikipedia: "https://de.wikipedia.org/wiki/Tongariro-Nationalpark"
    },
    {
        title: "Rotorua",
        user: "juba1508",
        lat: "-38.136944",
        lng: "176.250833",
        wikipedia: "https://de.wikipedia.org/wiki/Rotorua"
    },
    {
        title: "Auckland",
        user: "madeleinehll",
        lat: -36.833333,
        lng: 174.8,
        wikipedia: "https://de.wikipedia.org/wiki/Auckland"
    }];

let map = L.map('map', {
    fullscreenControl: true
}).setView([stop_lat, stop_lng], zoom);

L.control.scale({
    imperial: false
}).addTo(map);

let watercolor = L.tileLayer.provider('Stamen.Watercolor');
let osm = L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);
let topo = L.tileLayer.provider('OpenTopoMap');
let cycle = L.tileLayer.provider('CyclOSM');


L.control.layers({
    "Openstreetmap": osm,
    "Watercolor": watercolor,
    "Topography": topo,
    "Fahrradwege": cycle
}).addTo(map);

for (let stop of STOPS) {
    //Marker für den Stopp
    let marker = L.marker([stop.lat, stop.lng])
        .addTo(map)
        .bindPopup(`<h3>${stop.title}</h3>
    <a href="${stop.wikipedia}">Wikipedia</a>
    `);
    if (stop.user == "LauraMap") {
        marker.openPopup();
    }
}