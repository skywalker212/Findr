export default {
  lat: 30.590485,
  lng: 114.324765,
  zoom: 15,
  style:  {  width: '100%', height: '95vh' },
  use: "openstreetmap",
  openstreetmap: [
    {
      name: "Simple",
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png',
      selected: true
    },
    {
      name: "Black and White",
      attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
    },
    {
      name: "Toner",
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png'
    }, 
    {
      name: "Watercolor",
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png'
    }
  ]
}