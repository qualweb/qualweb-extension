<template>
  <div class="text">
    <h1 class="center">{{rule.name}}</h1>
    <p v-if="rule.mapping">
      <strong>Rule ID:</strong>
      {{rule.mapping}}
    </p>
    <p v-if="rule.url">
      <strong>Url:</strong>
      {{rule.metadata.url}}
    </p>
    <p>
      <strong>Description:</strong>
      {{rule.description}}
    </p>
    <p>
      <strong>Outcome:</strong>
      {{rule.metadata.outcome}}
    </p>
    <p v-if="rule.results.length!==0">
      <strong>Results:</strong>
    </p>
    <ElementNavigation v-if="rule.results.length!==0" :elements="rule.results"></ElementNavigation>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RuleResult from "./RuleResult.vue";
import ElementNavigation from "./ElementNavigation.vue";
export default {
  name: "ListContent",
  components: {
    RuleResult,
    ElementNavigation
  },
  computed: mapGetters({ rule: "getCurrentRule" }),
};
</script>

<style scoped>
.center {
  text-align: center;
}
.text {
  padding: 1em;
}
</style>
