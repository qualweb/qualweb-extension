<template>
  <div class="menu">
    <NavigationBar
      v-on:offHighlight="offHighlightElement"
      v-on:highlight="highlightElement"
      v-on:change="updateResult"
      :size="elements.length"
      ref="navBar"
    ></NavigationBar>
    <RuleResult :result="element"></RuleResult>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import RuleResult from "./RuleResult.vue";
export default {
  name: "ElementNavigation",
  props: ["elements"],
  data() {
    return {
      element: null,
      lastHighlightElement: null
    };
  },
  beforeUpdate() {
    console.log(this.lastHighlightElement);
    if (this.lastHighlightElement !== null) {
     let selector = this.lastHighlightElement.pointer;
      chrome.devtools.inspectedWindow.eval(
        `turnOffhighlightElement("${selector}")`,
        { useContentScriptContext: true }
      );
    }
  },
  methods: {
    updateResult(index) {
      this.element = this.elements[index - 1];
    },
    highlightElement(index) {
      let element = this.elements[index - 1];
      this.lastHighlightElement = element;
      let selector = element.pointer;
      chrome.devtools.inspectedWindow.eval(`highlightElement("${selector}")`, {
        useContentScriptContext: true
      });
    },
    offHighlightElement(index) {
      this.lastHighlightElement = null;
      let element = this.elements[index - 1];
      let selector = element.pointer;
      chrome.devtools.inspectedWindow.eval(
        `turnOffhighlightElement("${selector}")`,
        { useContentScriptContext: true }
      );
    }
  },
  components: {
    NavigationBar,
    RuleResult
  },
  watch: {
    elements: function(newResults, oldQuestion) {
      this.element = newResults[0];
    }
  },
  created() {
    this.element = this.elements[0];
  }
};
</script>

<style>
.menu {
  border: 1px solid white;
}
</style>