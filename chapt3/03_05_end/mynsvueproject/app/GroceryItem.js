import Vue from "nativescript-vue";

export default Vue.component("GroceryItem", {
  props: ["groceryItem"],
  template: `
  <GridLayout columns="200, *">
    <Button col="0" @tap="toggle" :text="statusText"></Button>
    <Label col="1" :text="groceryItem.name"></Label>
  </GridLayout>
  `,
  data: function() {
    return {
      status: 0
    };
  },
  computed: {
    statusText: function() {
      return this.status === 0 ? "Not done" : "Done";
    }
  },
  methods: {
    toggle: function() {
      this.status = this.status === 0 ? 1 : 0;
    }
  }
});
