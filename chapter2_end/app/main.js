import Vue from "nativescript-vue";

new Vue({
  template: `
    <Frame>
      <Page>
        <StackLayout>
          <TextField v-model="firstName"></TextField>
          <TextField v-model="lastName"></TextField>
          <TextField :text="getFullName()"></TextField>
        </StackLayout>
      </Page>
    </Frame>
  `,
  data: {
    firstName: "",
    lastName: ""
  },
  methods: {
    getFullName: function() {
      return this.firstName + " " + this.lastName;
    }
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      set: function(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
}).$start();
