<template>
  <div class="bar">
    <div class="buttonBlock">
      <RunAgain class="runAgain"></RunAgain>
      <Export class="export"></Export>
    </div>
  </div>
</template>

<script>
import RunAgain from "./RunAgain.vue";
import Export from "./Export.vue";
import Summary from "./Summary.vue";
export default {
  name: "TopMenu",
  components: {
    RunAgain,
    Summary,
    Export
  }
};
</script>

<style>
.bar{
    display: flex;
}
.filterResult{
    flex: 1;
    order: 1;
}
.filterModule{
    flex: 1;
    order: 2;
}

.buttonBlock{
    flex: 1;
    order: 3;
    display: flex;
    flex-direction: column;
}
.runAgain{
    flex: 1;
    order:1;
}
.export{
    flex: 1;
    order:2;
}
</style>