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
  //props: ["groceryItem"],
  data: function() {
    return {
      name: ""
    };
  },
  methods: {
    onSaveTap() {
      //TODO
    }
  }
};
</script>
