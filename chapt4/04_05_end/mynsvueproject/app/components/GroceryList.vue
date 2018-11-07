<template>
    <ListView for="item in items">
        <v-template>
            <GroceryItem :groceryItem="item" @toggleDone="onToggleDone"></GroceryItem>
        </v-template>
    </ListView>
</template>

<script>
import GroceryItem from "./GroceryItem";

export default {
  components: { GroceryItem },
  props: ["items"],
  methods: {
    onToggleDone(groceryItem) {
      //groceryItem.done = !groceryItem.done;
      const newItem = Object.assign(groceryItem, { done: !groceryItem.done });

      const idx = this.items.findIndex(i => i.id === groceryItem.id);

      this.items = Object.assign([], this.items, { idx: newItem });
    }
  }
};
</script>

