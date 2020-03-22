<template>
  <div class="smallContainer">
    <h2>Modules:</h2>
    <ul class="formContainer">
      <li>
        <input type="checkbox" name="passed" v-model="passed" value="passed" id="passed" />
        <label for="passed">ACT</label>
      </li>
      <li>
        <input type="checkbox" name="failed" v-model="failed" value="failed" id="failed" />
        <label for="failed">BP</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilterByModule"
};
</script>

<style  scoped>
.smallContainer {
  border-left: 0.01em solid white;
  background-color: #393939;
  padding: 2pt;
}
</style>>


</style>