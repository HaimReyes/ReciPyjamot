<template>
  <v-container fluid grid-list-md>
    <v-card color="indigo" dark>
      <v-card-title primary class="title"
        >{{ preview.title }} <v-spacer></v-spacer
        >{{ preview.gluten_free ? "Gluten Free," : "" }}
        {{ preview.vegan ? "Vegan," : "" }} ID: {{ preview.id }}</v-card-title
      >
    </v-card>
    <v-layout row wrap>
      <v-flex d-flex xs20 sm6 md6>
        <v-card color="secondary" xs10 dark>
          <v-card-title primary class="title">Ingredients</v-card-title>
          <ul>
            <li v-for="ingredient in ingredients" :key="ingredient.name">
              {{ ingredient.value }}
              {{ ingredient.units }}
              {{ ingredient.name }}
            </li>
          </ul>
          <br />
        </v-card>
        <v-flex>
          <v-card color="indigo" dark>
            <v-img :src="preview.image" aspect-ratio="1"></v-img>
          </v-card>
        </v-flex>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card color="secondary" dark>
                  <v-card-title v-if="preview.favorite"
                    >One of your favorites!<br
                  /></v-card-title>
                  <v-card-text>
                    {{ preview.likes }} users like this recipe!<br />
                    Servings: {{ servings ? servings : "" }}<br />
                    Time to make: {{ preview.readyInMinutes }} minutes<br />
                    <b
                      >{{ preview.gluten_free ? "Gluten Free" : "" }}<br />
                      {{ preview.vegan ? "Vegan" : "" }}</b
                    ><br />
                  </v-card-text>
                  <v-card-title v-if="family.who != '0'"
                    >This is a Family Recipe!<br />
                    {{ family.who }} used to make it
                    {{ family.when }}</v-card-title
                  >
                  <v-card-actions>
                    <v-btn icon @click="favorite()">
                      <v-icon v-if="this.preview.favorite" left
                        >favorite</v-icon
                      >
                      <v-icon v-else left>favorite_border</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-card color="secondary" sm6 dark>
      <v-card-title primary class="title">instuctions</v-card-title>
      <ul>
        <li v-for="instruction in instructions" :key="instruction">
          {{ instruction }} <br />
        </li>
      </ul>
      <br />
    </v-card>
  </v-container>
</template>
<script>
// {
//   "preview" : {
//     "readyInMinutes" : 6,
//     "image" : "image",
//     "viewed" : true,
//     "glutenFree" : true,
//     "id" : 0,
//     "vegan" : true,
//     "title" : "title",
//     "favorite" : true,
//     "likes" : 1
//   },
//   "instructions" : [ "mix the eggs with the milk", "mix the eggs with the milk" ],
//   "servings" : 4,
//   "ingredients" : [ {
//     "name" : "pepper",
//     "units" : "grams",
//     "value" : 0.8008281904610115
//   }, {
//     "name" : "pepper",
//     "units" : "grams",
//     "value" : 0.8008281904610115
//   } ]
// }
import axios from "axios";
export default {
  name: "Recipe",
  data: () => ({}),
  props: ["preview", "instructions", "servings", "ingredients", "family"],
  methods: {
    async favorite() {
      try {
        let response = null;
        if (this.preview.favorite) {
          response = await axios.post("api/user/unFavorite", {
            recipeId: this.preview.id,
          });
          if (response.status == 200) {
            this.preview.favorite = false;
          }
        } else {
          response = await axios.post("api/user/favorite", {
            recipeId: this.preview.id,
          });
          if (response.status == 200) {
            this.preview.favorite = true;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
