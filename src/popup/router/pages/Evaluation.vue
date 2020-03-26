<template>
  <div class="bigContainer">
    <Summary></Summary>
    <div class="container-1">
      <div class="column-1">
        <FilterByResult :items="['All outcomes','Passed','Failed','Warning','Inapplicable']" ></FilterByResult>
        <ListOfRules v-on:focusContent="focusListContent()"></ListOfRules>
      </div>
      <div class="column-2">
        <ListContent ref="content" ></ListContent>
      </div>
    </div>
  </div>
</template>

<script>
import Summary from "../../components/Summary.vue";
import ListOfRules from "../../components/ListOfRules.vue";
import ListContent from "../../components/ListContent.vue";
import FilterByResult from "../../components/FilterByResult.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Summary,
    ListOfRules,
    ListContent,
    FilterByResult
  },
  methods:{
    focusListContent(){
      console.log("trying to focus")
      this.$refs.content.$el.focus()
    }

  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
.column-1 {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  margin-left: 0.2em;
}
.bigContainer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #303030;
}
.container-1 {
  display: grid;
  grid-template-columns: 1fr 2fr;
  overflow: auto;
  background-color: #393939;
  height: 82vh;
  /*
      grid-column-gap:1em;
      grid-row-gap:1em;
      */
}
.title {
  text-align: center;
  font-weight: 900;
}
.summary {
  font-size: 1em;
  border-right: 1px solid white;
  border-left: 1px solid white;
  border-top: 1px solid white;
  color: white;
  padding: 1em;
}
.column-2 {
  overflow-y: auto;
  border-top: 1px solid white;
}
@media only screen and (max-width: 700px) {

.container-1  {
  display: flex;
  flex-direction: column;

}
.column-2 {flex: 2;}
.column-1 {flex: 1;}
  

}
</style>
