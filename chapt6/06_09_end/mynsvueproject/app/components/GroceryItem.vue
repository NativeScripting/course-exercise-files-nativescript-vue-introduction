<template>
      <GridLayout columns="200, *">
    <Label col="0" :text="statusText"></Label>
    <Label col="1" class="item-name" :text="groceryItem.name"></Label>
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

.item-name {
  animation-name: bounceInRight;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<style>
label {
  background-color: aqua;
}
</style>
