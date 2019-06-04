<template>
  <div class="NasaResults">
    <div class="row">
      <div class="col">
        <h1>Results</h1>
        <ol>
          <li>{{nasaData.url}}</li>
          <!--v-for="nasaData in nasaDatas" :key="data.id" @click="setActiveNasa(nasaData)"-->
        </ol>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'ResultsComp',
    data() {
      //returning an object
      return {};
    },
    //watcher is computed
    computed: {

      nasaDatas() {
        return this.$store.state.results;
      }

    },
    //methods dispatch property and data to the store
    methods: {
      // setActiveNasa(nasaData) {
      //   this.$store.dispatch("setActiveNasa", nasaData)

      // }

    },
    //nasacard is going to be a component of both
    //resultpage and activenasapage
    components: {


    },

    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>