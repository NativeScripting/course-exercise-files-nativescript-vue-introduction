<template>
      <GridLayout columns="200, *">
    <Label col="0" :text="statusText"></Label>
    <Label col="1" :class="{ 'line-through' : groceryItem.done }" :text="groceryItem.name"></Label>
  </GridLayout>
</template>

<script>
export default {
  props: ["groceryItem"],
  data: function() {
    return {};
  },
  computed: {
    statusText: function() {
      return this.groceryItem.done ? "Done" : "Not done";
    }
  },
  methods: {
    toggle: function() {
      //this.status = this.status === 0 ? 1 : 0;
      this.$emit("toggleDone", this.groceryItem);
    }
  }
};
</script>

<style lang="scss" scoped>
page {
  label {
    color: red;
  }
  .line-through {
    text-decoration: line-through;
  }
}
</style>

<style>
label {
  background-color: aqua;
}
</style>
