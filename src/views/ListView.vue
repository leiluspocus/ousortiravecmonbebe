<script>
export default {
  props: {
    spots: Array,
  },
  setup(props) {
    const spots = props.spots.value;
  }
}
</script>
<template>
  <div class="listview px-4 pb-4">
    <h1>Liste des lieux</h1>
    <ul>
      <li :key="id" v-for="item in spots">
        <h2>{{ item.name }}</h2>
        <p><u>Adresse</u>: {{ item.address }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
.listview {
  width: 600px;
  height: 600px;
}
</style>
