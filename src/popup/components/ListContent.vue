<template>
  <div class="text" tabindex="-1">
    <h1 class="center">{{rule.name}}</h1>
    <p v-if="rule.mapping">
      <span class="strong">Rule ID:</span>
      <a target="_blank" :href="rule.metadata.url">{{rule.mapping}}</a>
    </p>
    <p v-if="rule.url">
      <span class="strong">Url:</span>
      {{rule.metadata.url}}
    </p>
    <p>
      <span class="strong">Description:</span>
      {{rule.description}}
    </p>
    <p>
      <span class="strong">Outcome:</span>
      {{rule.metadata.outcome}}
    </p>
     <p v-if="rule.results.length!==0">
      <span class="strong">Filter:</span>
    </p>
     <ColapsibleResultFilter></ColapsibleResultFilter>
    <p v-if="rule.results.length!==0">
      <span class="strong">Results:</span>
    </p>
    <ElementNavigation v-if="rule.results.length!==0"></ElementNavigation>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RuleResult from "./RuleResult.vue";
import ElementNavigation from "./ElementNavigation.vue";
import ColapsibleResultFilter from "./ColapsibleResultFilter.vue";
export default {
  name: "ListContent",
  components: {
    RuleResult,
    ElementNavigation,
    ColapsibleResultFilter
  },
  computed: mapGetters({ rule: "getCurrentRule" }),
};
</script>

<style scoped>
a{
  color: white;
}
.center {
  text-align: center;
}
.text {
  padding: 0rem 1rem;
}
</style>
