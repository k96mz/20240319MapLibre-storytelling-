var config = {
  style: "map/style.json",
  showMarkers: true,
  markerColor: "#3FB1CE",
  inset: true, // if inset map is set to true, legend will be disabled.
  legend: false, // if legend is set to true, inset will be disabled.
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
  useCustomLayers: false, //set true for enabling custom layers from sources.js
  //   bookmarks: true,
  bookmarks: false,
  chapterReturn: true,
  title: "Introduction(Koji OSUMI)",
  logo: "",
  subtitle: "Using the Storytelling Map feature of Maplibre GL JS",
  byline: "By Koji OSUMI",
  mobileview:
    '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
  footer:
    'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
  chapters: [
    {
      id: "my-story-chapter-1",
      alignment: "left",
      hidden: false,
      title: "Born in Shiga prefecture in Japan",
      image: "./images/Biwalake.png",
      //   caption: "Biwa Lake",
      //   website: '<a href="" target="_blank">Website</a>',
      //   author: "Digital Storyteller",
      legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
      description:
        "I was born in Shiga Prefecture, Japan, which has the largest lake in Japan.",
      location: {
        center: [136.21051, 34.97445],
        zoom: 6.78,
        pitch: 43.0,
        bearing: -23.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      //   rotateAnimation: true,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
        // {
        //      layer: 'countries-fill',
        //      opacity: 1
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "my-story-chapter-2",
      alignment: "left",
      hidden: false,
      title: "Hokkaido University",
      image: "./images/winterMountain.jpeg",
      description:
        "I went to the Hokkaido area to attend university and joined the mountain club. The coldest temperature I experienced was -20℃ (-4℉) during the winter season.",
      location: {
        center: [141.31868, 43.12954],
        zoom: 5.53,
        pitch: 43.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'countries-fill',
        //     opacity: 0
        // }
      ],
      onChapterExit: [],
    },
    {
      id: "my-story-chapter-3",
      alignment: "left",
      hidden: false,
      title: "Geospatial Information Authority of Japan(GSI)",
      image: "./images/Kokudochiriin.jpg",
      description:
        "I started working for Geospatial Information Authority of Japan(GSI) since 2012.",
      location: {
        center: [140.02192, 36.11535],
        zoom: 7.15,
        pitch: 43.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'countries-fill',
        //     opacity: 0
        // }
      ],
      onChapterExit: [],
    },
    {
      id: "my-story-chapter-4",
      alignment: "left",
      hidden: false,
      title: "Lamont-Doherty Earth Observatory",
      image: "./images/Lamont.jpg",
      description:
        "I lived in Fort Lee, New Jersey for a year and attended the Lamont-Doherty Earth Observatory of Columbia University.",
      location: {
        center: [-73.91645, 41.02897],
        zoom: 9.22,
        pitch: 40.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'countries-fill',
        //     opacity: 0
        // }
      ],
      onChapterExit: [],
    },
    {
      id: "my-story-chapter-5",
      alignment: "left",
      hidden: false,
      title: "Geospatial Information Authority of Japan(GSI)",
      image: "./images/hazardmap.jpeg",
      description:
        "I worked on developing a Hazard Map Portal Site to disseminate information about hazards such as floods to citizens.",
      website:
        '<a href="https://disaportal.gsi.go.jp/maps/?ll=35.958133,139.77356&z=8&base=pale&ls=seamless%7Ctameike_raster%2C0.8%7Cnaisui_raster%2C0.8%7Cflood_l2_kaokutoukai_kagan%2C0.8%7Cflood_l2_kaokutoukai_hanran%2C0.8%7Cflood_l2_keizoku%2C0.8%7Cflood_list%2C0.8%7Cflood_l1%2C0.8%7Cflood_list_l2%2C0.75%7Cdisaster1&disp=0110000010&vs=c1j0l0u0t0h0z0" target="_blank">Hazard Map Portal Site</a>',

      location: {
        center: [140.02192, 36.11535],
        zoom: 7.15,
        pitch: 43.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'countries-fill',
        //     opacity: 0
        // }
      ],
      onChapterExit: [],
    },
    {
      id: "my-story-chapter-6",
      alignment: "left",
      hidden: false,
      title: "Moving to the US Again and Working for UNGIS",
      image: "./images/family.jpg",
      description:
        "I live with my wife, Yoko, and our son, Junki, in Westchester. He was born in July 2023 in the US.",
      location: {
        center: [-73.7053, 40.96851],
        zoom: 10.04,
        pitch: 40.0,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'countries-fill',
        //     opacity: 0
        // }
      ],
      onChapterExit: [],
    },
  ],
};
