<template>
  <div class="formComponent">
    <div class="imageContainer">
      <img src="/icons/logoQW.png" alt="QualWeb Logo" class="center" />
    </div>
    <form @submit="sendFormData">
      <div class="bigContainer">
        <div class="smallContainer">
          <fieldset>
            <legend class="legend">Select the modules to evaluate:</legend>
            <ul class="formContainer">
              <li>
                <Checkbox :idValue="actIdValue" :label="actLabel"></Checkbox>
              </li>
              <li>
                <Checkbox :idValue="htmlIdValue" :label="htmlLabel"></Checkbox>
              </li>
              <li>
                <Checkbox :idValue="bpIdValue" :label="bpLabel"></Checkbox>
              </li>
              <li>
                <Checkbox :idValue="cssIdValue" :label="cssLabel"></Checkbox>
              </li>
            </ul>
          </fieldset>
        </div>
      </div>

      <input type="submit" value="Evaluate" class="submit button" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Checkbox from "./Checkbox.vue";
import { mapGetters } from "vuex";

export default {
  name: "ModuleForm",
  data() {
    return {
      activeColor: "red",
      fontSize: 30,
      actIdValue: "act",
      actLabel: "ACT Rules",
      htmlIdValue: "html",
      htmlLabel: "WCAG 2.1 HTML Techniques",
      bpIdValue: "bp",
      bpLabel: "Best Practices",
      cssIdValue: "css",
      cssLabel: "WCAG 2.1 CSS Techniques"
    };
  },
  methods: {
    ...mapActions(["setReport", "setCurrentRule"]),
    ...mapGetters(["getEvaluated", "getFirstRule"]),
    async sendFormData(e) {
      e.preventDefault();
      await this.setReport(this.getEvaluated());
      this.setCurrentRule(this.getFirstRule());
      this.$router.push("/evaluation");
    }
  },
  components: { Checkbox }
};
</script>

<style scoped>
.smallContainer {
  margin-left: 0.2em;
  display: grid;
  flex-direction: column;
  background-color: #393939;
}
.formContainer {
  margin-top: 1.2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  grid-row-gap: 1em;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 22em;
}

.submit {
  font-size: 18pt;
  margin-top: 2em;
  background-color: #e15500;
  width: 100%;
  cursor: pointer;
}

.button {
  display: block;
  padding: 0.4em 0.8em;
  border: none;
  text-align: center;
  text-decoration: none;
  border-radius: 0.2em;
  color: white;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
}

.legend {
  text-align: center;
  font-size: 1.2em;
}

@media only screen and (max-height: 450px) {
  .bigContainer {
    margin-top: 1.2em;
  }
  .formComponent {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .center {
    width: 20em;
  }
  .imageContainer {
    display: grid;
    align-content: center;
  }
}

@media only screen and (max-height: 320px) {
  .bigContainer {
    margin-top: 1.2em;
  }
  .formContainer {
    display: flex;
    justify-content: space-around;
  }
  .imageContainer {
    display: none;
  }
  .formComponent {
    display: flex;
    flex-direction: column;
    margin-right: 1em;
    margin-left: 1em;
  }
  .smallContainer {
    margin-left: 0em;
  }
}

@media only screen and (max-width: 500px) {
  .formContainer {
    display: flex;
    flex-flow: column;
    margin-left: 1em;
  }
}
</style>