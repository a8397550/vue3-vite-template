<template>
  <div style="height: 100vh; width: 100vw">
    <div
      id="map"
      ref="map"
      style="height: 100%; width: 100%"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import "@/assets/postcssAuto/test.less";

import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import * as olProj from "ol/proj";

export default defineComponent({

  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          /*
            对于 Web Map 开发人员来说，最熟悉的应该是EPSG:4326 (WGS84) and EPSG:3857(Pseudo-Mercator)，这又是啥呢？
            在国际上，每个坐标系统都会被分配一个 EPSG 代码，EPSG:4326 就是 WGS84 的代码。GPS是基于WGS84的，所以通常我们得到的坐标数据都是WGS84的。一般我们在存储数据时，仍然按WGS84存储。
          */
          projection: "EPSG:4326",
          center: olProj.fromLonLat([120.2, 30.3]),
          zoom: 10,
        }),
      });
    },
  },
  setup() {
    const store = useStore();


    return {
      map: {}
    };
  }
});
</script>
