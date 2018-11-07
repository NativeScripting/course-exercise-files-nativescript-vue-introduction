<template>
    <Page>
        <StackLayout>
          <GroceryList :items="items" />
          
        </StackLayout>
      </Page>
</template>

<script>
import groceryData from "../grocery-data.json";
import GroceryList from "./GroceryList";

export default {
  components: { GroceryList },
  data() {
    return {
      items: groceryData.groceryItems
    };
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
