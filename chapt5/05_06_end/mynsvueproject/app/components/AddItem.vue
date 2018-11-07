<template>
    <Page>
        <StackLayout>
            <Label text="Add new item"></Label>
            <TextField v-model="name" hint="Enter grocery name"></TextField>
            <Button text="Save" @tap="onSaveTap"></Button>
        </StackLayout>
    </Page>
</template>

<script>
export default {
  props: ["id"],
  data: function() {
    return {
      name: ""
    };
  },
  methods: {
    onSaveTap() {
      const newItem = {
        id: this.id,
        name: this.name,
        done: false,
        deleted: false
      };
      this.$modal.close(newItem);
    }
  }
};
</script>
