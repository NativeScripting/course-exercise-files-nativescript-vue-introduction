<template>
    <ListView for="item in items">
        <v-template>
            <GroceryItem :groceryItem="item"></GroceryItem>
        </v-template>
    </ListView>
</template>

<script>
import GroceryItem from "./GroceryItem";

export default {
  components: { GroceryItem },
  props: ["items"]
};
</script>

