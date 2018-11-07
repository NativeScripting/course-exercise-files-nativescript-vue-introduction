<template>
    <ListView for="item in items" @itemTap="onItemTap">
        <v-template>
            <GroceryItem :groceryItem="item" @toggleDone="onToggleDone"></GroceryItem>
        </v-template>
    </ListView>
</template>

<script>
import GroceryItem from "./GroceryItem";
import Detail from "./Detail";

export default {
  components: { GroceryItem, Detail },
  props: ["items"],
  methods: {
    onItemTap(args) {
      this.$navigateTo(Detail, {
        props: {
          groceryItem: args.item
        }
      });
    },
    onToggleDone(groceryItem) {
      //groceryItem.done = !groceryItem.done;
      const newItem = Object.assign(groceryItem, { done: !groceryItem.done });

      const idx = this.items.findIndex(i => i.id === groceryItem.id);

      this.items = Object.assign([], this.items, { idx: newItem });
    }
  }
};
</script>

