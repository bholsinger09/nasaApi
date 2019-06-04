<template>
  <div class="home container">
    <h1>
      na
      <img alt="Vue logo" src="../assets/logo.png">sa
    </h1>
    <!--Below here is the form for vue model
    vue model will be referanced in the store
    query is referanced in store-->
    <div class="row">
      <div class="col">
        <!-- <form @submit.prevent="SearchNasa"> -->
        <!--the above method is declared in our home object
          the search dispatches to the store-->
        <!-- <input type="text" placeholder="Search nasa" v-model="query">
          <button type="submit">SEARCH</button>
        </form> -->
      </div>
    </div>
    <!--below here is going to the components
    components will have there own vue tag-->
    <ActiveNasaComp />
    <ResultsComp />


  </div>
</template>

<script>


  // here we will import the components of the home vue
  // active component and results component have a card component
  import ActiveNasaComp from "../components/ActiveNasaComp.vue";
  import ResultsComp from "../components/ResultsComp.vue"


  export default {
    name: 'home',
    data() {
      return {
        //here we are going to declare what data from the 
        //store we want
        query: ""
      };
    },
    methods: {
      SeachNasa() {
        debugger
        this.$store.dispatch("searchApi", this.query);
      }

    },
    components: {
      ResultsComp,
      ActiveNasaComp

    }
  };
</script>

<style scoped>
  h1 img {
    height: 1.5rem;
  }

  .home {
    background-color: greenyellow;
  }
</style>