"use strict"

const loading = document.querySelector('.loading');
const point = document.querySelector('.point');

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    interactive: false,
    center: [longitude, latitude],
    antialias: true,
    pitch: 40,
    zoom: 16,
    interactive: false
});

function getLocation(postiton) {
    const { longitude, latitude} = postiton.coords;

    if (longitude && latitude) {
        loading.style.display = 'none';
        mapboxgl.accessToken = 'pk.eyJ1IjoicG9pc29uZWQtaGVtbG9jayIsImEiOiJjbDI1NWs1Z3IwMTE2M2RtazZnMTA0YmFmIn0.MUoG5IQrNu67Xj7QOB_QvQ'

       map.setCenter([longitude, latitude])
    }
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

 

// We listen to the resize event
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function errorHandler(event) {
    loading.style.animationPlayState = 'paused';
    console.log(event.message);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation, errorHandler, {enableHighAccuracy: true});
} else {
    console.log('geolocation is not supported by your browser');
}