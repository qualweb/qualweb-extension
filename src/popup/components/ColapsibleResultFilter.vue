<template>
  <div class="filter">
    <button @click="changeState" type="button" class="collapsible">Filter Outcome</button>
    <div :class="['content', isOpen ? 'visible' : 'none']">
      <div class="column border">
        <p>Outcome</p>
        <ul class="module">
          <li :disabled="resultNumber.passed === 0">
            <Checkbox
              :idValue="passedIdValue"
              :label="passedLabel+resultNumber.passed+' results'"
              :bgColor="passedColor"
              :checkColor="checkColor"
              @checkBoxChanged="updateFilterResults"
              :value="filter.passed"
            ></Checkbox>
          </li>
          <li :disabled="resultNumber.failed === 0">
            <Checkbox
              :idValue="failedIdValue"
              :label="failedLabel+resultNumber.failed+' results'"
              :bgColor="failedColor"
              :checkColor="checkColor"
              @checkBoxChanged="updateFilterResults"
              :value="filter.failed"
            ></Checkbox>
          </li>
          <li :disabled="resultNumber.warning === 0">
            <Checkbox
              :idValue="warningIdValue"
              :label="warningLabel+resultNumber.warning+' results'"
              :bgColor="warningColor"
              :checkColor="checkColor"
              @checkBoxChanged="updateFilterResults"
              :value="filter.warning"
            ></Checkbox>
          </li>
          <li :disabled="resultNumber.inapplicable === 0">
            <Checkbox
              :idValue="inapplicableIdValue"
              :label="inapplicableLabel+resultNumber.inapplicable+' results'"
              :bgColor="bgColor"
              :checkColor="checkColor"
              @checkBoxChanged="updateFilterResults"
              :value="filter.inapplicable"
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
  name: "ColapsibleResultFilter",
  data() {
    return {
      isOpen: false,
      passedIdValue: "PASSED",
      passedLabel: "Passed - ",
      failedIdValue: "FAILED",
      failedLabel: "Failed - ",
      warningIdValue: "WARNING",
      warningLabel: "Warning - ",
      inapplicableIdValue: "INAPPLICABLE",
      inapplicableLabel: " Inapplicable - ",
      passedColor: "#46f73f",
      failedColor: "#ff3535",
      warningColor: "#ffd600",
      checkColor: "black",
      bgColor: "white"
    };
  },
  computed: mapGetters({
    filter: "getResultFilter",
    resultNumber: "getResultNumber"
  }),
  methods: {
    ...mapActions(["setResultFilter"]),
    changeState() {
      this.isOpen = !this.isOpen;
    },
    async updateFilterResults(idValue, value) {
      console.log({ idValue, value });
      await this.setResultFilter({
        key: idValue.toLowerCase(),
        value: value
      });
      console.log(this.filter);
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
.module {
  display: flex;
  flex-direction: column;
}
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
[disabled="disabled"] {
  opacity: 0.3;
}
</style>
