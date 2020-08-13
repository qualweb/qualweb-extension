<template>
  <div class="container">
    <div>
      <div class="loader"></div>
      <p class="state">{{state}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Loading",
  props: ["act", "html", "bp", "css"],
  methods: {
    ...mapActions([
      "setACT",
      "setHTML",
      "setBP",
      "setCSS",
      "setSummary",
      "setCurrentRule",
      "setStartingFilter"
    ]),
    ...mapGetters(["getEvaluated", "getFirstRule"])
  },
  data() {
    return {
      state: "Starting evaluation"
    };
  },
  async mounted() {
    let modules = this.getEvaluated();
    console.log(modules);
    let actResult, bpResult, htmlResult, cssResult, summary;
    await starEvaluation();
    if (modules.act) {
      this.state = "Evaluating ACT module";
      actResult = await evaluateACT();
      console.log(actResult)
      this.setACT(actResult);
    }
    if (modules.html) {
      this.state = "Evaluating HTML module";
      htmlResult = await evaluateHTML();
      this.setHTML(htmlResult);
    }
    if (modules.bp) {
      this.state = "Evaluating BP module";
      bpResult = await evaluateBP();
      this.setBP(bpResult);
    }
    if (modules.css) {
      this.state = "Evaluating CSS module";
      cssResult = await evaluateCSS();
      this.setCSS(cssResult);
    }
    this.state = "Ending evaluation";
    summary = await endingEvaluation();
    this.setSummary(summary);
    this.setStartingFilter(modules);
    this.setCurrentRule(this.getFirstRule());
    this.$router.push("/evaluation");
  }
};
</script>

<style scoped>
.state {
  text-align: center;
}
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
}
.loader {
  border: 16px solid transparent; /* Light grey */
  border-top: 16px solid #e15500; /* Blue */
  border-radius: 50%;
  width: 140px;
  height: 140px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>