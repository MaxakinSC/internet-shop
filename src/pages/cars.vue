<template>
  <q-card class="my-card" v-for="car in cars" :key="car._id">
    <q-img :src="car.img" />

    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ car.name }}
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        {{ car.year }}
      </div>
      <div class="text-caption text-grey">
        {{ car.descr }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  name: 'cars',
  data() {
    return {
      cars: [
        {
          _id: '1',
          img: 'https://www.autolifttech.net/uploads/posts/2021-07/1625500726_1_d_850.jpg',
          name: 'Land Cruiser 300',
          year: 2021,
          descr: 'New Land Cruiser!'
        },
        {
          _id: '2',
          img: 'https://auto.ironhorse.ru/wp-content/uploads/2012/01/Prado-120.jpg',
          name: 'Land Cruiser Prado 120',
          year: 2001,
          descr: 'Land Cruiser Prado 120!'
        }
      ]
    }
  }
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
