<template>
  <div class="result">
    <p v-if="result.verdict"><strong>Verdict: </strong>{{result.verdict}}</p>
    <p v-if="result.htmlCode">
      <strong>Code: </strong>
      <highlight-code inline=true lang="html">{{result.htmlCode}}<highlight-code>
    </p>
    <p v-if="result.pointer">
      <strong>Pointer: </strong>
      <highlight-code inline=true lang="css">{{result.pointer}}</highlight-code>
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