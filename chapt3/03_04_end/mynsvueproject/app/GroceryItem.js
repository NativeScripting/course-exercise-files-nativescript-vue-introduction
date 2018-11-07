import Vue from "nativescript-vue";

export default Vue.component("GroceryItem", {
  props: ["groceryItem"],
  template: `
  <GridLayout columns="100, *">
    <Button col="0" text="Done"></Button>
    <Label col="1" :text="groceryItem.name"></Label>
  </GridLayout>
  `
});
