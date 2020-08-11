<template>
  <div class="filter">
    <button @click="changeState" type="button" class="collapsible">Filters</button>
    <div :class="['content', isOpen ? 'visible' : 'none']">
      <div class="column border">
        <p>Outcome</p>
        <ul class="module">
          <li>
            <Checkbox :idValue="passedIdValue" :label="passedLabel"></Checkbox>
          </li>
          <li>
            <Checkbox :idValue="failedIdValue" :label="failedLabel"></Checkbox>
          </li>
          <li>
            <Checkbox :idValue="warningIdValue" :label="warningLabel"></Checkbox>
          </li>
          <li>
            <Checkbox :idValue="inapplicableIdValue" :label="inapplicableLabel"></Checkbox>
          </li>
        </ul>
      </div>
      <div class="column">
        <p>Module</p>
        <ul class="module">
          <li>
            <Checkbox :idValue="actIdValue" :label="actLabel"></Checkbox>
          </li>
          <li>
            <Checkbox :idValue="tecniquesIdValue" :label="tecniquesLabel"></Checkbox>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
export default {
  name: "ColapsibleFilter",
  data() {
    return {
      isOpen: false,
      actIdValue: "act",
      actLabel: "ACT Rules",
      tecniquesIdValue: "tecniques",
      tecniquesLabel: "WCAG 2.1 Techniques",
      passedIdValue: "passed",
      passedLabel: "Passed",
      failedIdValue: "failed",
      failedLabel: "Failed",
      warningIdValue: "warning",
      warningLabel: "Warning",
      inapplicableIdValue: " inapplicable",
      inapplicableLabel: " Inapplicable"
    };
  },
  methods: {
    changeState() {
      this.isOpen = !this.isOpen;
    }
  },
  components: {
    Checkbox
  }
};
/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) 
.active,
.collapsible:hover {
  background-color: #858586;
}*/
</script>

<style scoped>
.column {
  width: 100%;
  padding: 1em;
}
.border{
    border-right: 0.01em solid white;
}
.filter {
  padding-right: 0.2em;
  padding-left: 0.2em;
}
/* Style the button that is used to open and close the collapsible content */
.collapsible {
  background-color: #303030;
  color: white;
  cursor: pointer;
  padding: 1em;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 1.3em;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  border: 0.01em solid #888585;
  border-radius: 0.3em;
  margin-bottom: 0.1em;
  margin: 0.2em;
  margin-left: auto;
  margin-right: auto;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  display: none;
  overflow: hidden;
  margin-bottom: 0.2em;
  background-color: #383838;
  border-radius: 0.3em;
}
.none {
  display: none;
}
.visible {
  display: flex;
  flex-direction: row;
}
</style>