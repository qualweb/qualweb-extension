<template>
  <div class="container">
    <button class="highlight btn" v-on:click="highligthElement">
      <span v-if="highligthElementAvailable" class="flexElement">Highlight Element</span>
      <span v-else class="flexElement">Stop Highlight</span>
      <i class="material-icons-round flexElement">wb_iridescent</i>
    </button>
    <div class="controller">
      <div>
        <button
          @click="first()"
          :disabled="index===1"
          class="smallBtn flexElement"
          aria-label="First page"
        >
          <i class="material-icons">first_page</i>
        </button>
        <button
          @click="before()"
          :disabled="index===1"
          class="smallBtn flexElement"
          aria-label="Previous page"
        >
          <i class="material-icons-round">chevron_left</i>
        </button>
      </div>
      <span class="flexElement index">{{index}}</span>
      <div>
        <button
          @click="after()"
          :disabled="index===size"
          class="smallBtn flexElement"
          aria-label="Next page"
        >
          <i class="material-icons-round">chevron_right</i>
        </button>
        <button
          @click="last()"
          :disabled="index===size"
          class="smallBtn flexElement"
          aria-label="Last page"
        >
          <i class="material-icons-round">last_page</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: ["size"],
  data() {
    return {
      index: 1,
      highligthElementAvailable: true
    };
  },

  watch: {
    size: function(newResults, oldQuestion) {
      this.index = 1;
      this.highligthElementAvailable = true;
    }
  },
  methods: {
    before() {
      if (this.index - 1 > 0) {
        this.disableHighlight();
        this.index--;
        this.$emit("change", this.index);
      }
    },
    after() {
      if (this.index < this.size) {
        this.disableHighlight();
        this.index++;
        this.$emit("change", this.index);
      }
    },
    last() {
      if (this.index !== this.size) {
        this.disableHighlight();
        this.index = this.size;
        this.$emit("change", this.index);
      }
    },
    first() {
      if (this.index !== 1) {
        this.clean();
        this.$emit("change", this.index);
      }
    },
    highligthElement() {
      if (this.highligthElementAvailable) {
        this.$emit("highlight", this.index);
      } else {
        this.$emit("offHighlight", this.index);
      }

      this.highligthElementAvailable = !this.highligthElementAvailable;
    },
    disableHighlight() {
      if (this.highligthElementAvailable === false) {
        this.$emit("offHighlight", this.index);
        this.highligthElementAvailable = true;
      }
    },
    clean() {
      this.disableHighlight();
      this.index = 1;
    }
  }
};
</script>

<style scoped>
button:disabled {
  color: #383838;
  cursor: auto;
}
.index {
  padding: 1px 6px;
}
.smallBtn {
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 100px;
}
.btn {
  background-color: black;
  text-align: left;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 100px;
}
.container {
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 0.2em;
}
.flexElement {
  color: white;
}
.highlight {
  vertical-align: middle;
}
.flexElement {
  font-size: 1.3em;
  display: inline-flex;
  vertical-align: middle;
}
.controller {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 400px) {
  .container {
    display: grid;
    justify-content: center;
  }
}
</style>