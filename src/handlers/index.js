const recipesSearchHandler = require("./recipesSearch");
const getRecipeHandler = require("./recipesGetById");
const getRandomRecipesHandler = require("./recipesGetRandom");
const userLastSearchHandler = require("./userLastSearch");
const userFamilyRecipesHandler = require("./userFamilyRecipes");
const userGetFavoriteRecipesHandler = require("./userGetFavoriteRecipes");
const userAddFavoriteRecipeHandler = require("./userAddFavoriteRecipe");
const userDeleteFavoriteRecipeHandler = require("./userDeleteFavoriteRecipe");
const userLastWatchedRecipesHandler = require("./userLastWatchedRecipes");
const userPersonalRecipesHandler = require("./userPersonalRecipes");
const userViewedRecipeHandler = require("./userViewRecipeHandler");
const userDeleteSearchHandler = require("./userDeleteSearchHandler");
const authRegisterHandler = require("./authRegister");
const authLoginHandler = require("./authLogin");
const getRecipeFromDBHandler = require("./dbGetRecipe");

module.exports = {
  userHandlers: {
    search: userLastSearchHandler,
    family: userFamilyRecipesHandler,
    getFavorite: userGetFavoriteRecipesHandler,
    addFavorite: userAddFavoriteRecipeHandler,
    deleteFavorite: userDeleteFavoriteRecipeHandler,
    lastWatched: userLastWatchedRecipesHandler,
    personal: userPersonalRecipesHandler,
    viewed: userViewedRecipeHandler,
    deleteSearch: userDeleteSearchHandler,
  },
  recipesHandlers: {
    recipesSearch: recipesSearchHandler,
    getRecipe: getRecipeHandler,
    getRandomRecipes: getRandomRecipesHandler,
  },
  authenticationHandlers: {
    register: authRegisterHandler,
    login: authLoginHandler,
  },
  dbHandlers: {
    getRecipe: getRecipeFromDBHandler,
  },
};
