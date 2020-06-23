<template>
  <div class="result">
    <p v-if="result.verdict"><span class="strong">Verdict: </span>{{result.verdict}}</p>
    <p v-if="result.htmlCode">
      <span class="strong">Code: </span>
      <highlight-code lang="html">{{result.htmlCode}}<highlight-code>
    </p>
    <p v-if="result.pointer">
      <span class="strong">Pointer: </span>
      <highlight-code  lang="css">{{result.pointer}}</highlight-code>
    </p>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";
import "vue-code-highlight/themes/prism-dark.css";
export default {
  name: "RuleResult",
  props: ["result"],
  components: {
    VueCodeHighlight
  },
  methods: {
    
    
  }
 
};
</script>

<style>
.result{
   padding: 0.2em;
}

</style>