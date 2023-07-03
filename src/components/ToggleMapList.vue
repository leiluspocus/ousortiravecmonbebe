<script lang="ts">
  export default {
  methods: {
    displayMode(mode: string) {
      this.$emit(`toggleDisplay`, mode)
    },
  },
}
</script>
<template>
  <div class="toggle">
    <button @click="displayMode('map')">Carte</button>
    <button @click="displayMode('list')">Liste</button>
  </div>
</template>

<style scoped>
  .toggle {
    display: flex;
    height: 50px;
  }
  button {
    width: 100%;
    background-color: --color-background;
    border: 0;

    &:last-child {
      border-left: 1px solid black;
    }

    &:hover {
      cursor: pointer;
    }
  }

</style>
