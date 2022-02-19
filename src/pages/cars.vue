<template>
  <q-btn color="secondary" label="Toyota" @click="getCars({brand: 'toyota'})" />
  <q-btn color="secondary" label="Porsche" @click="getCars({brand: 'porsche'})" />

  <q-card class="my-card" v-for="car in cars" :key="car._id">
    <q-img :src="car.img" />

    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ car.brand }}
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        {{ car.year }}
      </div>
      <div class="text-caption text-grey">
        {{ car.model }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'cars',
  data() {
    return {
      cars: []
    }
  },
  methods: {
    getCars(filters = {}) {
      const params = Object
        .entries(filters)
        .map(item => {
          return item.join('=');
        })
        .join('&');

      fetch('http://localhost:3000/cars?' + params,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          this.cars = data
        });
    }
  },
  mounted() {
    this.getCars({
      brand: 'porsche',
      yearjyguygu: 2021
    });
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
