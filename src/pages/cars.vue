<template>
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
  mounted() {
    fetch('http://localhost:3000/cars?brand=porsche',
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
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
