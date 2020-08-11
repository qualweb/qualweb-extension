<template >
  <div>
    <div class="md-checkbox">
      <input
        @focus="focus()"
        @blur="blur()"
        class="hidden"
        v-model="value"
        @change="onChange"
        :id="idValue"
        type="checkbox"
      />
      <label v-bind:class="{ 'focused': focusedElem }" :for="idValue">{{label}}</label>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";

export default {
  name: "Checkbox",
  props: ["idValue", "label"],
  data() {
    return {
      value: false,
      focusedElem: false
    };
  },
  methods: {
         ...mapGetters(["getEvaluated"]),
    ...mapActions(["setEvaluated"]),
    async onChange() {
      await this.setEvaluated({
        module: this.idValue,
        value: this.value
      });
      console.log(this.getEvaluated())
    },
    focus() {
      this.focusedElem = true;
    },
    blur() {
      this.focusedElem = false;
    }
  }
};
</script>

<style scoped>
.focused::before {
  outline: 1px dotted #212121;
  outline: 5px auto -webkit-focus-ring-color;
}
.hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
  outline: 0;
  -webkit-appearance: none;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
.md-checkbox {
  position: relative;
  margin: 1em 0;
  text-align: left;
}
.md-checkbox.md-checkbox-inline {
  display: inline-block;
}
.md-checkbox label {
  cursor: pointer;
  display: inline;
  line-height: 1.25rem;
  vertical-align: top;
  clear: both;
  padding-left: 1px;
}
.md-checkbox label:not(:empty) {
  padding-left: 0.75rem;
}
.md-checkbox label:before,
.md-checkbox label:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
}
.md-checkbox label:before {
  width: 1.25rem;
  height: 1.25rem;
  background: #ffff;
  border: 2px solid var(--boxColor);
  border-radius: 0.125rem;
  cursor: pointer;
  transition: background 0.3s;
}
.md-checkbox input[type="checkbox"] {
  outline: 0;
  width: 1.25rem;
  margin: 0;
  display: block;
  float: left;
  font-size: inherit;
}
.md-checkbox input[type="checkbox"]:checked + label:before {
  background: #ffff;
  border: none;
}
.md-checkbox input[type="checkbox"]:checked + label:after {
  transform: translate(0.25em, 0.3365384615em) rotate(-45deg);
  width: 0.75rem;
  height: 0.375rem;
  border: 0.125em solid #000;
  border-top-style: none;
  border-right-style: none;
}
.md-checkbox input[type="checkbox"]:disabled + label:before {
  border-color: rgba(0, 0, 0, 0.26);
}
.md-checkbox input[type="checkbox"]:disabled:checked + label:before {
  background: rgba(0, 0, 0, 0.26);
}
</style>