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
  <div class="listview content">
    <ul class="flex flex-row">
      <li :key="id" v-for="item in spots">
        <div class="bg-green-100 mt-2 px-8 pt-4 pb-4 ml-2">
          <h2 class="font-bold">{{ item.name }}</h2>
          <p>{{ item.address }}</p>
          <p>{{ item.postal_code}} {{ item.city }}</p>
          <a href="#">Y aller ?</a>
        </div>
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
