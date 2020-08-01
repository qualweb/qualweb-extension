<template>
  <div class="formComponent">
    <div class="imageContainer">
      <img src="/icons/logoQW.png" alt="QualWeb Logo" class="center" />
    </div>
    <form @submit="sendFormData" class="formClass">
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

      <input :disabled="isDisabled" type="submit" value="Evaluate" class="submit button center" />
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
  computed: {
    ...mapGetters({ evaluated: "getEvaluated" }),
    isDisabled() {
      return !(
        this.evaluated &&
        (this.evaluated.act ||
          this.evaluated.bp ||
          this.evaluated.html ||
          this.evaluated.css)
      );
    }
  },
  methods: {
    async sendFormData(e) {
      e.preventDefault();
      this.$router.push("/loading");
    }
  },
  components: { Checkbox }
};
</script>

<style scoped>
:disabled {
  opacity: 0.7;
}
fieldset {
  border-style: solid;
  border-radius: 0.2em;
  border-color: white;
  border-width: 0.1em;
}
.formComponent {
  height: 100%;
  overflow: auto;
}
.smallContainer {
  display: grid;
  flex-direction: column;
  background-color: #393939;
  padding: 0.8em;
  border-radius: 0.2em;
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
.formClass {
  padding-right: 1em;
  padding-left: 1em;
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