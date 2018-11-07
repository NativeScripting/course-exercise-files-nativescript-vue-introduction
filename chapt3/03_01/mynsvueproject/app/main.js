import Vue from "nativescript-vue";

import groceryData from "./grocery-data.json";
import GroceryItem from "./GroceryItem";

new Vue({
  template: `
    <Frame>
      <Page>
        <StackLayout>
          <ListView for="item in items">
            <v-template>
              <GroceryItem></GroceryItem>
            </v-template>
          </ListView>
        </StackLayout>
      </Page>
    </Frame>
  `,
  data: {
    items: groceryData.groceryItems
  }
}).$start();
