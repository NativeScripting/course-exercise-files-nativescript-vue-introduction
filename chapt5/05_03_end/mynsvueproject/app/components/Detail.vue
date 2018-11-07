<template>
    <Page>
        <StackLayout>
           
            <Label :text="groceryItem.name"></Label>
            <Button :text="statusText" @tap="toggle"></Button>
        </StackLayout>
    </Page>
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
      this.groceryItem.done = !this.groceryItem.done;
      //this.status = this.status === 0 ? 1 : 0;
      //this.$emit("toggleDone", this.groceryItem);
    }
  }
};
</script>
