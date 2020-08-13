<template>
  <div class="filter">
    <button @click="changeState" type="button" class="collapsible">Filters</button>
    <div :class="['content', isOpen ? 'visible' : 'none']">
      <div class="column border">
        <p>Outcome</p>
        <ul class="module">
          <li>
            <Checkbox
              :idValue="passedIdValue"
              :label="passedLabel"
              :bgColor="passedColor"
              :checkColor="checkColor"
              @checkBoxChanged="updateResult"
              :value="passedValue"
            ></Checkbox>
          </li>
          <li>
            <Checkbox
              :idValue="failedIdValue"
              :label="failedLabel"
              :bgColor="failedColor"
              :checkColor="checkColor"
              @checkBoxChanged="updateFilter"
              :value="failedValue"
            ></Checkbox>
          </li>
          <li>
            <Checkbox
              :idValue="warningIdValue"
              :label="warningLabel"
              :bgColor="warningColor"
              :checkColor="checkColor"
              @checkBoxChanged="updateFilter"
              :value="warningValue"
            ></Checkbox>
          </li>
          <li>
            <Checkbox
              :idValue="inapplicableIdValue"
              :label="inapplicableLabel"
              :bgColor="bgColor"
              :checkColor="checkColor"
              @checkBoxChanged="updateFilter"
              :value="inapplicableValue"
            ></Checkbox>
          </li>
        </ul>
      </div>
      <div class="column">
        <p>Module</p>
        <ul class="module">
          <li>
            <Checkbox
              :idValue="actIdValue"
              :label="actLabel"
              :bgColor="bgColor"
              :checkColor="checkColor"
              @checkBoxChanged="updateFilter"
              :value="actValue"
            ></Checkbox>
          </li>
          <li>
            <Checkbox
              :idValue="tecniquesIdValue"
              :label="tecniquesLabel"
              :bgColor="bgColor"
              :checkColor="checkColor"
              @checkBoxChanged="updateFilter"
              :value="tecniquesValue"
            ></Checkbox>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ColapsibleFilter",
  data() {
    return {
      isOpen: false,
      actIdValue: "act",
      actLabel: "ACT Rules",
      actValue: true,
      tecniquesIdValue: "tecniques",
      tecniquesLabel: "WCAG 2.1 Techniques",
      tecniquesValue: false,
      passedIdValue: "passed",
      passedValue: true,
      passedLabel: "Passed",
      failedIdValue: "failed",
      failedLabel: "Failed",
      failedValue: true,
      warningIdValue: "warning",
      warningLabel: "Warning",
      warningValue: true,
      inapplicableIdValue: " inapplicable",
      inapplicableLabel: " Inapplicable",
      inapplicableValue: false,
      passedColor: "#46f73f",
      failedColor: "#ff3535",
      warningColor: "#ffd600",
      bgColor: "white",
      checkColor: "black"
    };
  },
  methods: {
    ...mapGetters("getFilter","getFirstRule"),
    ...mapActions(["setFilter", "setCurrentRule"]),

    changeState() {
      this.isOpen = !this.isOpen;
    },
    async updateFilter(idValue, value) {
      await this.setFilter({
        key: idValue,
        value: value
      });
    }
  },
  mounted() {
    // console.log(this.getFilter());
    //this.setCurrentRule(this.getFirstRule());
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
p {
  font-size: 1.3rem;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin-top: 0rem;
}
.column {
  width: 100%;
  padding: 1rem;
  padding-bottom: 0rem;
}
.border {
  border-right: 0.01em solid white;
}
.filter {
  padding-right: 0.2rem;
  padding-left: 0.2rem;
}
/* Style the button that is used to open and close the collapsible content */
.collapsible {
  background-color: #383838;
  color: white;
  cursor: pointer;
  padding: 0.6rem 1rem;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 1.3rem;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  border: 0.01em solid #888585;
  border-radius: 0.2rem;
  margin-bottom: 0.1rem;
  margin: 0.2rem;
  margin-left: auto;
  margin-right: auto;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  display: none;
  overflow: hidden;
  margin-bottom: 0.2rem;
  background-color: #383838;
  border-radius: 0.2rem;
  border: 0.01em solid #888585;
}
.none {
  display: none;
}
.visible {
  display: flex;
  flex-direction: row;
}
</style>
