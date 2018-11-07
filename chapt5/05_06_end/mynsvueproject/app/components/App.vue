<template>
    <Page>

        <ActionBar title="Groceries">
          <ActionItem text="Add" @tap="onAddTap"></ActionItem>
        </ActionBar>

        <StackLayout>
          <GroceryList :items="items" />
          
        </StackLayout>
      </Page>
</template>

<script>
import groceryData from "../grocery-data.json";
import GroceryList from "./GroceryList";
import AddItem from "./AddItem";

export default {
  components: { GroceryList, AddItem },
  data() {
    return {
      items: groceryData.groceryItems
    };
  },
  methods: {
    onAddTap() {
      const newId = new Date().getTime();
      this.$showModal(AddItem, { props: { id: newId } }).then(newItem => {
        if (newItem) {
          this.items.push(newItem);
        }
      });
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
