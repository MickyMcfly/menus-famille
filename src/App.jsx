
import React, { useMemo, useState, useEffect } from "react";

const INITIAL_RECIPES = [
  {
    "id": "r1",
    "name": "Pâtes au pesto",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "pâtes",
      "pesto",
      "parmesan"
    ],
    "steps": [
      "Préparer les ingrédients pour pâtes au pesto",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "rapide",
      "végétarien"
    ],
    "device": "casserole",
    "summary": {
      "protein": "",
      "starch": "Pâtes",
      "vegetables": ""
    }
  },
  {
    "id": "r2",
    "name": "Curry de légumes",
    "mealType": "light",
    "favorite": false,
    "ingredients": [
      "courgettes",
      "carottes",
      "curry",
      "lait de coco"
    ],
    "steps": [
      "Préparer les ingrédients pour curry de légumes",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "healthy",
      "végétarien"
    ],
    "device": "poêle",
    "summary": {
      "protein": "",
      "starch": "",
      "vegetables": "Légumes"
    }
  },
  {
    "id": "r3",
    "name": "Salade œufs avocat",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "salade",
      "œufs",
      "avocat",
      "tomates"
    ],
    "steps": [
      "Préparer les ingrédients pour salade œufs avocat",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "rapide",
      "froid"
    ],
    "device": "aucun",
    "summary": {
      "protein": "Œufs",
      "starch": "",
      "vegetables": "Crudités"
    }
  },
  {
    "id": "r4",
    "name": "Poulet rôti légumes",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "poulet",
      "courgettes",
      "carottes"
    ],
    "steps": [
      "Préparer les ingrédients pour poulet rôti légumes",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "four",
      "familial"
    ],
    "device": "four",
    "summary": {
      "protein": "Poulet",
      "starch": "",
      "vegetables": "Légumes"
    }
  },
  {
    "id": "r5",
    "name": "Quiche maison",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "œufs",
      "pâte brisée",
      "crème"
    ],
    "steps": [
      "Préparer les ingrédients pour quiche maison",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "four",
      "familial"
    ],
    "device": "four",
    "summary": {
      "protein": "Œufs",
      "starch": "Pâte",
      "vegetables": ""
    }
  },
  {
    "id": "r6",
    "name": "Taboulé maison",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "semoule",
      "tomates",
      "concombre"
    ],
    "steps": [
      "Préparer les ingrédients pour taboulé maison",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "froid",
      "batch cooking"
    ],
    "device": "aucun",
    "summary": {
      "protein": "",
      "starch": "Semoule",
      "vegetables": "Crudités"
    }
  },
  {
    "id": "r7",
    "name": "Lasagnes maison",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "pâtes",
      "bœuf",
      "tomate"
    ],
    "steps": [
      "Préparer les ingrédients pour lasagnes maison",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "four",
      "familial"
    ],
    "device": "four",
    "summary": {
      "protein": "Bœuf",
      "starch": "Pâtes",
      "vegetables": "Tomate"
    }
  },
  {
    "id": "r8",
    "name": "Velouté courgettes",
    "mealType": "light",
    "favorite": false,
    "ingredients": [
      "courgettes",
      "oignon",
      "bouillon"
    ],
    "steps": [
      "Préparer les ingrédients pour velouté courgettes",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "léger",
      "healthy"
    ],
    "device": "mixeur",
    "summary": {
      "protein": "",
      "starch": "",
      "vegetables": "Courgettes"
    }
  },
  {
    "id": "r9",
    "name": "Omelette aux herbes",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "œufs",
      "ciboulette",
      "salade"
    ],
    "steps": [
      "Préparer les ingrédients pour omelette aux herbes",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "rapide"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Œufs",
      "starch": "",
      "vegetables": "Salade"
    }
  },
  {
    "id": "r10",
    "name": "Wok de légumes",
    "mealType": "light",
    "favorite": false,
    "ingredients": [
      "brocoli",
      "carottes",
      "poivron"
    ],
    "steps": [
      "Préparer les ingrédients pour wok de légumes",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "rapide",
      "healthy"
    ],
    "device": "wok",
    "summary": {
      "protein": "",
      "starch": "",
      "vegetables": "Légumes"
    }
  },
  {
    "id": "r11",
    "name": "Bowl poulet quinoa",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "poulet",
      "quinoa",
      "concombre"
    ],
    "steps": [
      "Préparer les ingrédients pour bowl poulet quinoa",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "healthy",
      "batch cooking"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Poulet",
      "starch": "Quinoa",
      "vegetables": "Crudités"
    }
  },
  {
    "id": "r12",
    "name": "Chili sin carne",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "haricots rouges",
      "tomate",
      "maïs",
      "riz"
    ],
    "steps": [
      "Préparer les ingrédients pour chili sin carne",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "végétarien",
      "batch cooking"
    ],
    "device": "cocotte",
    "summary": {
      "protein": "Haricots",
      "starch": "Riz",
      "vegetables": "Tomate"
    }
  },
  {
    "id": "r13",
    "name": "Gratin courgettes chèvre",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "courgettes",
      "chèvre",
      "crème"
    ],
    "steps": [
      "Préparer les ingrédients pour gratin courgettes chèvre",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "four",
      "végétarien"
    ],
    "device": "four",
    "summary": {
      "protein": "Chèvre",
      "starch": "Chapelure",
      "vegetables": "Courgettes"
    }
  },
  {
    "id": "r14",
    "name": "Saumon riz brocoli",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "saumon",
      "riz",
      "brocoli"
    ],
    "steps": [
      "Préparer les ingrédients pour saumon riz brocoli",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "healthy",
      "rapide"
    ],
    "device": "four",
    "summary": {
      "protein": "Saumon",
      "starch": "Riz",
      "vegetables": "Brocoli"
    }
  },
  {
    "id": "r15",
    "name": "Wrap thon crudités",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "tortilla",
      "thon",
      "salade"
    ],
    "steps": [
      "Préparer les ingrédients pour wrap thon crudités",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "rapide",
      "froid"
    ],
    "device": "aucun",
    "summary": {
      "protein": "Thon",
      "starch": "Tortilla",
      "vegetables": "Crudités"
    }
  },
  {
    "id": "r16",
    "name": "One pot orzo chorizo",
    "mealType": "single",
    "favorite": true,
    "ingredients": [
      "orzo",
      "chorizo",
      "tomate"
    ],
    "steps": [
      "Préparer les ingrédients pour one pot orzo chorizo",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "four",
      "familial"
    ],
    "device": "four",
    "summary": {
      "protein": "Chorizo",
      "starch": "Orzo",
      "vegetables": "Tomate"
    }
  },
  {
    "id": "r17",
    "name": "Poulet air fryer salade",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "poulet",
      "salade",
      "tomates"
    ],
    "steps": [
      "Préparer les ingrédients pour poulet air fryer salade",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "air fryer",
      "healthy"
    ],
    "device": "air fryer",
    "summary": {
      "protein": "Poulet",
      "starch": "",
      "vegetables": "Salade"
    }
  },
  {
    "id": "r18",
    "name": "Croque monsieur salade",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "pain de mie",
      "jambon",
      "emmental"
    ],
    "steps": [
      "Préparer les ingrédients pour croque monsieur salade",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "rapide",
      "enfant"
    ],
    "device": "four",
    "summary": {
      "protein": "Jambon",
      "starch": "Pain",
      "vegetables": "Salade"
    }
  },
  {
    "id": "r19",
    "name": "Dahl lentilles corail",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "lentilles corail",
      "tomate",
      "riz"
    ],
    "steps": [
      "Préparer les ingrédients pour dahl lentilles corail",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "végétarien",
      "batch cooking"
    ],
    "device": "casserole",
    "summary": {
      "protein": "Lentilles",
      "starch": "Riz",
      "vegetables": "Tomate"
    }
  },
  {
    "id": "r20",
    "name": "Salade sardines avocat",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "sardines",
      "avocat",
      "salade"
    ],
    "steps": [
      "Préparer les ingrédients pour salade sardines avocat",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "froid",
      "healthy"
    ],
    "device": "aucun",
    "summary": {
      "protein": "Sardines",
      "starch": "",
      "vegetables": "Crudités"
    }
  },
  {
    "id": "r21",
    "name": "Pizza maison express",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "pâte pizza",
      "tomate",
      "mozzarella"
    ],
    "steps": [
      "Préparer les ingrédients pour pizza maison express",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "four",
      "enfant"
    ],
    "device": "four",
    "summary": {
      "protein": "Mozzarella",
      "starch": "Pâte",
      "vegetables": "Tomate"
    }
  },
  {
    "id": "r22",
    "name": "Pâtes complètes thon",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "pâtes complètes",
      "thon",
      "tomate"
    ],
    "steps": [
      "Préparer les ingrédients pour pâtes complètes thon",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "rapide"
    ],
    "device": "casserole",
    "summary": {
      "protein": "Thon",
      "starch": "Pâtes",
      "vegetables": "Tomate"
    }
  },
  {
    "id": "r23",
    "name": "Soupe carottes cumin",
    "mealType": "light",
    "favorite": false,
    "ingredients": [
      "carottes",
      "cumin",
      "bouillon"
    ],
    "steps": [
      "Préparer les ingrédients pour soupe carottes cumin",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "léger",
      "healthy"
    ],
    "device": "mixeur",
    "summary": {
      "protein": "",
      "starch": "",
      "vegetables": "Carottes"
    }
  },
  {
    "id": "r24",
    "name": "Boulettes bœuf semoule",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "bœuf",
      "semoule",
      "tomate"
    ],
    "steps": [
      "Préparer les ingrédients pour boulettes bœuf semoule",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "familial"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Bœuf",
      "starch": "Semoule",
      "vegetables": "Tomate"
    }
  },
  {
    "id": "r25",
    "name": "Riz sauté œufs petits pois",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "riz",
      "œufs",
      "petits pois"
    ],
    "steps": [
      "Préparer les ingrédients pour riz sauté œufs petits pois",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "rapide",
      "anti-gaspi"
    ],
    "device": "wok",
    "summary": {
      "protein": "Œufs",
      "starch": "Riz",
      "vegetables": "Petits pois"
    }
  },
  {
    "id": "r26",
    "name": "Tarte tomate moutarde",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "pâte feuilletée",
      "tomates",
      "moutarde"
    ],
    "steps": [
      "Préparer les ingrédients pour tarte tomate moutarde",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "four",
      "végétarien"
    ],
    "device": "four",
    "summary": {
      "protein": "Emmental",
      "starch": "Pâte",
      "vegetables": "Tomates"
    }
  },
  {
    "id": "r27",
    "name": "Gnocchis épinards",
    "mealType": "single",
    "favorite": true,
    "ingredients": [
      "gnocchis",
      "épinards",
      "crème"
    ],
    "steps": [
      "Préparer les ingrédients pour gnocchis épinards",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "rapide",
      "végétarien"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Parmesan",
      "starch": "Gnocchis",
      "vegetables": "Épinards"
    }
  },
  {
    "id": "r28",
    "name": "Dinde haricots verts",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "dinde",
      "haricots verts",
      "pommes de terre"
    ],
    "steps": [
      "Préparer les ingrédients pour dinde haricots verts",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "healthy"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Dinde",
      "starch": "Pommes de terre",
      "vegetables": "Haricots"
    }
  },
  {
    "id": "r29",
    "name": "Salade lentilles feta",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "lentilles",
      "feta",
      "tomates"
    ],
    "steps": [
      "Préparer les ingrédients pour salade lentilles feta",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "froid",
      "batch cooking"
    ],
    "device": "casserole",
    "summary": {
      "protein": "Lentilles / feta",
      "starch": "",
      "vegetables": "Crudités"
    }
  },
  {
    "id": "r30",
    "name": "Poisson blanc purée",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "poisson blanc",
      "pommes de terre",
      "courgettes"
    ],
    "steps": [
      "Préparer les ingrédients pour poisson blanc purée",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "healthy"
    ],
    "device": "four",
    "summary": {
      "protein": "Poisson",
      "starch": "Purée",
      "vegetables": "Courgettes"
    }
  },
  {
    "id": "r31",
    "name": "Tacos poulet crudités",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "tortillas",
      "poulet",
      "salade"
    ],
    "steps": [
      "Préparer les ingrédients pour tacos poulet crudités",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "enfant",
      "rapide"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Poulet",
      "starch": "Tortillas",
      "vegetables": "Crudités"
    }
  },
  {
    "id": "r32",
    "name": "Buddha bowl pois chiches",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "pois chiches",
      "quinoa",
      "carottes"
    ],
    "steps": [
      "Préparer les ingrédients pour buddha bowl pois chiches",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "healthy",
      "végétarien"
    ],
    "device": "four",
    "summary": {
      "protein": "Pois chiches",
      "starch": "Quinoa",
      "vegetables": "Crudités"
    }
  },
  {
    "id": "r33",
    "name": "Ratatouille œuf riz",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "ratatouille",
      "œuf",
      "riz"
    ],
    "steps": [
      "Préparer les ingrédients pour ratatouille œuf riz",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "anti-gaspi",
      "végétarien"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Œuf",
      "starch": "Riz",
      "vegetables": "Ratatouille"
    }
  },
  {
    "id": "r34",
    "name": "Hachis parmentier",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "bœuf",
      "purée",
      "carottes"
    ],
    "steps": [
      "Préparer les ingrédients pour hachis parmentier",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "four",
      "familial"
    ],
    "device": "four",
    "summary": {
      "protein": "Bœuf",
      "starch": "Purée",
      "vegetables": "Carottes"
    }
  },
  {
    "id": "r35",
    "name": "Salade pâtes poulet pesto",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "pâtes",
      "poulet",
      "pesto"
    ],
    "steps": [
      "Préparer les ingrédients pour salade pâtes poulet pesto",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "froid",
      "batch cooking"
    ],
    "device": "casserole",
    "summary": {
      "protein": "Poulet",
      "starch": "Pâtes",
      "vegetables": "Tomates"
    }
  },
  {
    "id": "r36",
    "name": "Tortilla espagnole",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "œufs",
      "pommes de terre",
      "oignon"
    ],
    "steps": [
      "Préparer les ingrédients pour tortilla espagnole",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "végétarien",
      "familial"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Œufs",
      "starch": "Pommes de terre",
      "vegetables": "Oignon"
    }
  },
  {
    "id": "r37",
    "name": "Crevettes curry riz",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "crevettes",
      "riz",
      "curry"
    ],
    "steps": [
      "Préparer les ingrédients pour crevettes curry riz",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "rapide"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Crevettes",
      "starch": "Riz",
      "vegetables": ""
    }
  },
  {
    "id": "r38",
    "name": "Burger maison salade",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "pain burger",
      "steak",
      "salade"
    ],
    "steps": [
      "Préparer les ingrédients pour burger maison salade",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "enfant",
      "familial"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Steak",
      "starch": "Pain",
      "vegetables": "Salade"
    }
  },
  {
    "id": "r39",
    "name": "Courgettes façon carbonara",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "courgettes",
      "lardons",
      "œufs"
    ],
    "steps": [
      "Préparer les ingrédients pour courgettes façon carbonara",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "low carb"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Œufs / lardons",
      "starch": "",
      "vegetables": "Courgettes"
    }
  },
  {
    "id": "r40",
    "name": "Semoule merguez légumes",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "semoule",
      "merguez",
      "courgettes"
    ],
    "steps": [
      "Préparer les ingrédients pour semoule merguez légumes",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "familial"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Merguez",
      "starch": "Semoule",
      "vegetables": "Légumes"
    }
  },
  {
    "id": "r41",
    "name": "Risotto champignons",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "riz arborio",
      "champignons",
      "parmesan"
    ],
    "steps": [
      "Préparer les ingrédients pour risotto champignons",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "végétarien"
    ],
    "device": "casserole",
    "summary": {
      "protein": "Parmesan",
      "starch": "Riz",
      "vegetables": "Champignons"
    }
  },
  {
    "id": "r42",
    "name": "Salade grecque pois chiches",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "pois chiches",
      "feta",
      "concombre"
    ],
    "steps": [
      "Préparer les ingrédients pour salade grecque pois chiches",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "froid",
      "healthy"
    ],
    "device": "aucun",
    "summary": {
      "protein": "Pois chiches / feta",
      "starch": "",
      "vegetables": "Crudités"
    }
  },
  {
    "id": "r43",
    "name": "Poulet basquaise riz",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "poulet",
      "poivrons",
      "riz"
    ],
    "steps": [
      "Préparer les ingrédients pour poulet basquaise riz",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "batch cooking"
    ],
    "device": "cocotte",
    "summary": {
      "protein": "Poulet",
      "starch": "Riz",
      "vegetables": "Poivrons"
    }
  },
  {
    "id": "r44",
    "name": "Mac and cheese brocoli",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "macaroni",
      "fromage",
      "brocoli"
    ],
    "steps": [
      "Préparer les ingrédients pour mac and cheese brocoli",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "enfant"
    ],
    "device": "casserole",
    "summary": {
      "protein": "Fromage",
      "starch": "Pâtes",
      "vegetables": "Brocoli"
    }
  },
  {
    "id": "r45",
    "name": "Galette sarrasin complète",
    "mealType": "single",
    "favorite": true,
    "ingredients": [
      "galette sarrasin",
      "jambon",
      "œuf"
    ],
    "steps": [
      "Préparer les ingrédients pour galette sarrasin complète",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "rapide",
      "breton"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Œuf / jambon",
      "starch": "Galette",
      "vegetables": ""
    }
  },
  {
    "id": "r46",
    "name": "Lentilles saucisses",
    "mealType": "single",
    "favorite": false,
    "ingredients": [
      "lentilles",
      "saucisses",
      "carottes"
    ],
    "steps": [
      "Préparer les ingrédients pour lentilles saucisses",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "batch cooking",
      "familial"
    ],
    "device": "cocotte",
    "summary": {
      "protein": "Saucisses / lentilles",
      "starch": "",
      "vegetables": "Carottes"
    }
  },
  {
    "id": "r47",
    "name": "Wrap saumon fromage frais",
    "mealType": "balanced",
    "favorite": true,
    "ingredients": [
      "tortilla",
      "saumon fumé",
      "fromage frais"
    ],
    "steps": [
      "Préparer les ingrédients pour wrap saumon fromage frais",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "froid",
      "rapide"
    ],
    "device": "aucun",
    "summary": {
      "protein": "Saumon",
      "starch": "Tortilla",
      "vegetables": "Roquette"
    }
  },
  {
    "id": "r48",
    "name": "Aubergines gratinées",
    "mealType": "light",
    "favorite": false,
    "ingredients": [
      "aubergines",
      "tomate",
      "mozzarella"
    ],
    "steps": [
      "Préparer les ingrédients pour aubergines gratinées",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "four",
      "végétarien"
    ],
    "device": "four",
    "summary": {
      "protein": "Mozzarella",
      "starch": "",
      "vegetables": "Aubergines"
    }
  },
  {
    "id": "r49",
    "name": "Bol mexicain bœuf haricots",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "bœuf",
      "haricots rouges",
      "riz"
    ],
    "steps": [
      "Préparer les ingrédients pour bol mexicain bœuf haricots",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "familial"
    ],
    "device": "poêle",
    "summary": {
      "protein": "Bœuf / haricots",
      "starch": "Riz",
      "vegetables": "Maïs"
    }
  },
  {
    "id": "r50",
    "name": "Croquettes thon air fryer",
    "mealType": "balanced",
    "favorite": false,
    "ingredients": [
      "thon",
      "œuf",
      "chapelure"
    ],
    "steps": [
      "Préparer les ingrédients pour croquettes thon air fryer",
      "Cuire ou assembler selon la recette",
      "Servir et ajuster l'assaisonnement"
    ],
    "tags": [
      "air fryer",
      "rapide"
    ],
    "device": "air fryer",
    "summary": {
      "protein": "Thon",
      "starch": "Chapelure",
      "vegetables": "Salade"
    }
  }
];

const themeLight = {
  bg:"#f3f5f7", panel:"#fff", surface:"#f8fafc", surface2:"#f3f6fa",
  border:"#d8e0ea", text:"#0f172a", muted:"#667085",
  accent:"#34a853", accentSoft:"#edf8f0",
  shadow:"0 8px 20px rgba(15,23,42,.06)", shadowStrong:"0 16px 36px rgba(15,23,42,.12)"
};
const themeDark = {
  bg:"#0b1220", panel:"#132238", surface:"#0f1b2d", surface2:"#11233a",
  border:"#27405b", text:"#eef4ff", muted:"#9aa9c2",
  accent:"#34a853", accentSoft:"#173824",
  shadow:"0 12px 28px rgba(0,0,0,.28)", shadowStrong:"0 20px 42px rgba(0,0,0,.38)"
};

const makeId = () => "r" + Date.now();
const getRecipePhoto = (recipe) => recipe?.photoUrl || recipe?.image || recipe?.photo || "";
const withRecipePhoto = (recipe) => ({ ...recipe, photoUrl: getRecipePhoto(recipe) });

const typeLabel = (t) => t === "light" ? "Léger" : t === "balanced" ? "Équilibré" : t === "single" ? "Plat unique" : "Autre";

const parseIngredientLine = (line) => {
  const raw = String(line || "").trim();
  const match = raw.match(/^(\d+(?:[,.]\d+)?|[½¼¾])\s*(g|kg|ml|cl|l|c\.\s?à\s?soupe|c\.\s?à\s?café|tranche[s]?|boîte[s]?|sachet[s]?|unité[s]?|pièce[s]?)?\s+(.+)$/i);
  if (!match) return { qty: "", unit: "", name: raw, raw };
  return {
    qty: match[1].replace(",", "."),
    unit: (match[2] || "").trim(),
    name: (match[3] || "").trim(),
    raw
  };
};

const normalizeIngredients = (ingredients) =>
  (ingredients || []).map(item => typeof item === "string" ? parseIngredientLine(item) : item);

const ingredientText = (ingredient) => {
  if (typeof ingredient === "string") return ingredient;
  return [ingredient.qty, ingredient.unit, ingredient.name].filter(Boolean).join(" ") || ingredient.raw || "";
};

const ingredientsToText = (ingredients) =>
  normalizeIngredients(ingredients).map(ingredientText).join(", ");

const normalizeKey = (name) =>
  String(name || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, " ")
    .replace(/s$/,"")
    .trim();

const getSmartIngredientName = (name) => {
  const n = normalizeKey(name);
  const aliases = [
    ["tomates", ["tomate", "tomates", "tomate cerise", "tomates cerises"]],
    ["courgettes", ["courgette", "courgettes"]],
    ["carottes", ["carotte", "carottes"]],
    ["œufs", ["oeuf", "oeufs", "œuf", "œufs"]],
    ["pâtes", ["pate", "pates", "pâtes", "macaroni", "spaghetti"]],
    ["pommes de terre", ["pomme de terre", "pommes de terre", "puree", "purée"]],
    ["salade", ["salade", "roquette", "jeunes pousses"]],
    ["poulet", ["poulet", "filet de poulet"]],
    ["thon", ["thon", "thon naturel"]],
    ["riz", ["riz", "riz basmati", "riz arborio"]],
    ["fromage", ["fromage", "emmental", "parmesan", "mozzarella", "feta", "chevre", "chèvre", "boursin"]],
    ["lentilles", ["lentille", "lentilles", "lentilles corail"]],
    ["pois chiches", ["pois chiche", "pois chiches"]],
    ["haricots rouges", ["haricot rouge", "haricots rouges"]]
  ];

  for (const [label, words] of aliases) {
    if (words.some(word => n.includes(normalizeKey(word)))) return label;
  }

  return name;
};

const getShoppingSignature = (week) =>
  week.map(day => `${day.day}:${day.lunch?.recipeId || ""}-${day.dinner?.recipeId || ""}`).join("|");

const getWeekShoppingList = (week, recipeMap) => {
  const merged = {};

  week.forEach(day => {
    ["lunch", "dinner"].forEach(slot => {
      const meal = day[slot];
      if (!meal?.recipeId) return;

      const recipe = recipeMap[meal.recipeId];
      const ingredients = normalizeIngredients(recipe?.ingredients || []);

      ingredients.forEach(ingredient => {
        const originalName = ingredient.name || ingredient.raw || "";
        const name = getSmartIngredientName(originalName);
        if (!name) return;

        const unit = ingredient.unit || "";
        const key = normalizeKey(name) + "|" + unit.toLowerCase();
        const qty = parseFloat(String(ingredient.qty || "").replace(",", "."));

        if (!merged[key]) {
          merged[key] = {
            name,
            unit,
            qty: Number.isFinite(qty) ? qty : 0,
            count: Number.isFinite(qty) ? 0 : 1,
            sources: new Set()
          };
        } else {
          if (Number.isFinite(qty)) merged[key].qty += qty;
          else merged[key].count += 1;
        }

        merged[key].sources.add(`${day.day} ${slot === "lunch" ? "midi" : "soir"}`);
      });
    });
  });

  return Object.values(merged)
    .map(item => ({
      ...item,
      sources: Array.from(item.sources)
    }))
    .sort((a,b) => a.name.localeCompare(b.name, "fr"));
};


const getShoppingCategory = (name) => {
  const n = normalizeKey(name);
  const rules = [
    ["🥦 Fruits & légumes", ["tomate","courgette","carotte","concombre","salade","brocoli","poivron","aubergine","oignon","champignon","epinard","haricot vert","roquette","mais","ratatouille","banane","bananes","fruit","fruits"]],
    ["🥩 Viandes & poissons", ["poulet","boeuf","bœuf","dinde","jambon","thon","saumon","sardine","poisson","crevette","merguez","saucisse","steak","chorizo"]],
    ["🥛 Frais & fromages", ["oeuf","œuf","creme","crème","fromage","feta","mozzarella","chevre","chèvre","emmental","parmesan","boursin","lait","yaourt"]],
    ["🍝 Féculents", ["pate","pâtes","riz","semoule","quinoa","orzo","gnocchi","pain","tortilla","galette","pomme de terre","puree","purée","macaroni"]],
    ["🥫 Épicerie", ["pesto","curry","bouillon","moutarde","chapelure","sauce soja","haricot rouge","lentille","pois chiche","huile","jus","jus d orange","jus d’orange"]],
    ["🧂 Assaisonnement", ["sel","poivre","paprika","cumin","basilic","menthe","herbes","ciboulette","epice","épice"]]
  ];
  for (const [cat, words] of rules) {
    if (words.some(w => n.includes(normalizeKey(w)))) return cat;
  }
  return "🛒 Autres";
};

const shoppingCategoryOrder = ["🥦 Fruits & légumes","🥩 Viandes & poissons","🥛 Frais & fromages","🍝 Féculents","🥫 Épicerie","🧂 Assaisonnement","🛒 Autres"];

const groupShoppingListByCategory = (items) => {
  const grouped = {};
  items.forEach(item => {
    const cat = getShoppingCategory(item.name);
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(item);
  });
  return shoppingCategoryOrder
    .filter(cat => grouped[cat]?.length)
    .map(cat => ({ category: cat, items: grouped[cat].sort((a,b)=>a.name.localeCompare(b.name,"fr")) }));
};

const shoppingItemLabel = (item) => {
  const recipeCount = item.sources?.length || 0;
  if (item.qty > 0 && item.unit) return `${item.name} — ${item.qty} ${item.unit}`;
  if (item.qty > 0) return `${item.name} — ${item.qty}`;
  if (item.count > 1) return `${item.name} ×${item.count}`;
  if (recipeCount > 1) return `${item.name} — ${recipeCount} recettes`;
  return item.name;
};


const buildMeal = (r) => ({ recipeId:r.id, recipeName:r.name, mealType:r.mealType, favorite:!!r.favorite, locked:false, summary:r.summary || {} });
const emptyMeal = () => ({ recipeId:"", recipeName:"Repas vide", mealType:"empty", favorite:false, locked:false, summary:{} });
const clone = (x) => JSON.parse(JSON.stringify(x));
const mealSummary = (m) => [m.summary?.protein, m.summary?.starch, m.summary?.vegetables].filter(Boolean).join(" • ") || "—";

function makeWeek(recipes) {
  return [
    {day:"Lundi", lunch:buildMeal(recipes[0]), dinner:buildMeal(recipes[4])},
    {day:"Mardi", lunch:buildMeal(recipes[1]), dinner:buildMeal(recipes[5])},
    {day:"Mercredi", lunch:buildMeal(recipes[2]), dinner:buildMeal(recipes[6])},
    {day:"Jeudi", lunch:buildMeal(recipes[3]), dinner:buildMeal(recipes[7])},
    {day:"Vendredi", lunch:buildMeal(recipes[5]), dinner:buildMeal(recipes[0])},
    {day:"Samedi", lunch:buildMeal(recipes[6]), dinner:buildMeal(recipes[1])},
    {day:"Dimanche", lunch:buildMeal(recipes[7]), dinner:buildMeal(recipes[2])},
  ];
}


function RecipeUrlImportModal({ theme, onClose, onImported }) {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  const [manualText, setManualText] = useState("");
  const [preview, setPreview] = useState(null);

  const buildRecipe = (data) => ({
    id: makeId(),
    name: data.name || "Recette importée",
    mealType: "balanced",
    favorite: false,
    ingredients: (data.ingredients || []).map(x => parseIngredientLine(x)).filter(x => x.name),
    steps: data.steps || [],
    tags: data.tags || ["import"],
    photoUrl: data.photoUrl || "",
    device: "",
    sourceUrl: data.sourceUrl || url.trim(),
    summary: { protein:"", starch:"", vegetables:"" }
  });

  const clean = (value) => String(value || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

  const flattenLd = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value.flatMap(flattenLd);
    if (value["@graph"]) return flattenLd(value["@graph"]);
    return [value];
  };

  const parseHtml = (html, sourceUrl) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    let recipeData = null;

    [...doc.querySelectorAll('script[type="application/ld+json"]')].some(script => {
      try {
        const parsed = JSON.parse(script.textContent || "{}");
        recipeData = flattenLd(parsed).find(item => {
          const type = item["@type"];
          return type === "Recipe" || (Array.isArray(type) && type.includes("Recipe"));
        });
        return !!recipeData;
      } catch {
        return false;
      }
    });

    const image = recipeData?.image;
    const photoUrl = Array.isArray(image) ? clean(image[0]?.url || image[0]) : clean(image?.url || image);

    const instructions = recipeData?.recipeInstructions || [];
    const steps = Array.isArray(instructions)
      ? instructions.flatMap(step => step?.itemListElement ? step.itemListElement.map(x => clean(x.text || x.name || x)) : [clean(step.text || step.name || step)]).filter(Boolean)
      : [clean(instructions)].filter(Boolean);

    return buildRecipe({
      name: clean(recipeData?.name) || clean(doc.querySelector("h1")?.textContent) || clean(doc.querySelector("title")?.textContent),
      ingredients: (recipeData?.recipeIngredient || []).map(clean).filter(Boolean),
      steps,
      photoUrl,
      tags: ["import-url"],
      sourceUrl
    });
  };

  const importFromUrl = async () => {
    const cleanUrl = url.trim();
    if (!cleanUrl) return;
    setStatus("Tentative de récupération…");

    try {
      const response = await fetch(cleanUrl);
      if (!response.ok) throw new Error("Réponse invalide");
      const html = await response.text();
      const recipe = parseHtml(html, cleanUrl);
      setPreview(recipe);

      if (!recipe.ingredients.length && !recipe.steps.length) {
        setStatus("Page récupérée, mais recette non détectée. Colle le texte de la recette ci-dessous.");
      } else {
        setStatus("Recette détectée. Vérifie puis importe.");
      }
    } catch {
      setStatus("Import automatique bloqué par le site. Colle le texte de la recette ci-dessous.");
    }
  };

  const importManualText = () => {
    const lines = manualText.split("\n").map(x => x.trim()).filter(Boolean);
    if (!lines.length) return;

    const title = lines[0];
    const ingredientLines = lines.filter(x => /^[-•]?\s*(\d|[0-9]+|un |une |des |du |de la )/i.test(x)).map(x => x.replace(/^[-•]\s*/, ""));
    const steps = lines.slice(1).filter(x => !ingredientLines.includes(x.replace(/^[-•]\s*/, "")));

    setPreview(buildRecipe({
      name: title,
      ingredients: ingredientLines,
      steps,
      photoUrl: preview?.photoUrl || "",
      tags: ["import-texte"],
      sourceUrl: url.trim()
    }));
    setStatus("Texte analysé. Vérifie puis importe.");
  };

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:120,padding:20}}>
      <div className="modal-pop" style={{width:"min(760px,100%)",maxHeight:"90vh",overflow:"auto",background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:24,boxShadow:theme.shadowStrong,padding:20}}>
        <div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-start",marginBottom:16}}>
          <div><div style={{fontSize:12,color:theme.muted,fontWeight:800}}>Import assisté</div><div style={{fontWeight:900,fontSize:24,marginTop:4}}>Importer depuis une URL</div></div>
          <button className="micro-btn" onClick={onClose} style={{padding:"9px 13px",borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,cursor:"pointer"}}>Fermer</button>
        </div>

        <div style={{display:"grid",gap:12}}>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="Colle le lien de la recette ici" style={{flex:1,minWidth:260,padding:13,borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text}} />
            <button className="micro-btn" onClick={importFromUrl} style={{padding:"13px 16px",borderRadius:14,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:900,cursor:"pointer"}}>Analyser l’URL</button>
          </div>

          {status && <div style={{background:theme.accentSoft,color:theme.accent,borderRadius:14,padding:12,fontWeight:800,fontSize:13}}>{status}</div>}

          <textarea value={manualText} onChange={e=>setManualText(e.target.value)} placeholder="Si le site bloque, colle ici le texte : titre, ingrédients, étapes…" rows={7} style={{padding:13,borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,resize:"vertical"}} />

          <div style={{display:"flex",justifyContent:"space-between",gap:10,flexWrap:"wrap"}}>
            <button className="micro-btn" onClick={importManualText} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:900,cursor:"pointer"}}>Analyser le texte</button>
            <button className="micro-btn" disabled={!preview} onClick={()=>preview && onImported(preview)} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${preview?theme.accent:theme.border}`,background:preview?theme.accent:theme.surface,color:preview?"#fff":theme.muted,fontWeight:900,cursor:preview?"pointer":"not-allowed"}}>Importer</button>
          </div>

          {preview && (
            <div style={{background:theme.surface,border:`1px solid ${theme.border}`,borderRadius:18,padding:14,display:"flex",gap:12,alignItems:"center"}}>
              <div style={{width:92,height:72,borderRadius:14,background:theme.surface2,border:`1px solid ${theme.border}`,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",color:theme.muted,fontSize:12}}>
                {preview.photoUrl?<img src={preview.photoUrl} alt={preview.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/>:"photo"}
              </div>
              <div><div style={{fontWeight:900,fontSize:18}}>{preview.name}</div><div style={{color:theme.muted,fontSize:12,marginTop:4}}>{preview.ingredients.length} ingrédients • {preview.steps.length} étapes</div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



function RecipeFormModal({ mode, recipe, theme, onClose, onSave }) {
  const [form, setForm] = useState(() => ({
    name: recipe?.name || "",
    mealType: recipe?.mealType || "balanced",
    ingredients: ingredientsToText(recipe?.ingredients || []),
    steps: (recipe?.steps || []).join("\n"),
    tags: (recipe?.tags || []).join(", "),
    photoUrl: getRecipePhoto(recipe),
    device: recipe?.device || "",
    protein: recipe?.summary?.protein || "",
    starch: recipe?.summary?.starch || "",
    vegetables: recipe?.summary?.vegetables || "",
    favorite: !!recipe?.favorite
  }));

  const [importMode, setImportMode] = useState("manual");
  const [importUrl, setImportUrl] = useState("");
  const [importText, setImportText] = useState("");
  const [importStatus, setImportStatus] = useState("");

  const applyRecipeToForm = (data) => {
    setForm(prev => ({
      ...prev,
      name: data.name || prev.name,
      ingredients: data.ingredients ? data.ingredients.join(", ") : prev.ingredients,
      steps: data.steps ? data.steps.join("\n") : prev.steps,
      tags: data.tags ? data.tags.join(", ") : prev.tags,
      photoUrl: data.photoUrl || prev.photoUrl,
      device: data.device || prev.device
    }));
  };

  const cleanImportText = (value) =>
    String(value || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

  const flattenLd = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value.flatMap(flattenLd);
    if (value["@graph"]) return flattenLd(value["@graph"]);
    return [value];
  };

  const parseRecipeHtmlToForm = (html, sourceUrl) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    let recipeData = null;

    [...doc.querySelectorAll('script[type="application/ld+json"]')].some(script => {
      try {
        const parsed = JSON.parse(script.textContent || "{}");
        recipeData = flattenLd(parsed).find(item => {
          const type = item["@type"];
          return type === "Recipe" || (Array.isArray(type) && type.includes("Recipe"));
        });
        return !!recipeData;
      } catch {
        return false;
      }
    });

    const image = recipeData?.image;
    const photoUrl = Array.isArray(image)
      ? cleanImportText(image[0]?.url || image[0])
      : cleanImportText(image?.url || image);

    const instructions = recipeData?.recipeInstructions || [];
    const steps = Array.isArray(instructions)
      ? instructions.flatMap(step => step?.itemListElement ? step.itemListElement.map(x => cleanImportText(x.text || x.name || x)) : [cleanImportText(step.text || step.name || step)]).filter(Boolean)
      : [cleanImportText(instructions)].filter(Boolean);

    return {
      name: cleanImportText(recipeData?.name) || cleanImportText(doc.querySelector("h1")?.textContent) || cleanImportText(doc.querySelector("title")?.textContent),
      ingredients: (recipeData?.recipeIngredient || []).map(cleanImportText).filter(Boolean),
      steps,
      photoUrl,
      tags: ["import-url"],
      sourceUrl
    };
  };

  const importFromUrl = async () => {
    const url = importUrl.trim();
    if (!url) return;

    setImportStatus("Tentative de récupération directe…");

    const applyHtml = (html, sourceUrl, modeLabel) => {
      const data = parseRecipeHtmlToForm(html, sourceUrl);
      applyRecipeToForm(data);

      if (!data.ingredients.length && !data.steps.length) {
        setImportStatus(`${modeLabel} : page récupérée, mais recette non détectée. Colle le texte dans l’onglet Texte.`);
      } else {
        setImportStatus(`${modeLabel} : recette importée dans le formulaire. Tu peux corriger puis créer.`);
      }
    };

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Réponse invalide");

      const html = await response.text();
      applyHtml(html, url, "Import direct");
      return;
    } catch {
      setImportStatus("Import direct bloqué. Tentative via le proxy Netlify…");
    }

    try {
      const proxyResponse = await fetch(`/.netlify/functions/fetch-recipe?url=${encodeURIComponent(url)}`);
      const payload = await proxyResponse.json();

      if (!proxyResponse.ok || !payload.html) {
        throw new Error(payload.error || "Proxy indisponible");
      }

      applyHtml(payload.html, payload.url || url, "Proxy Netlify");
    } catch {
      setImportStatus("Import URL impossible pour ce site. Utilise l’onglet Texte : copie/colle la recette.");
    }
  };

  const importFromText = () => {
    const lines = importText.split("\n").map(x => x.trim()).filter(Boolean);
    if (!lines.length) return;

    const title = lines[0];
    const ingredientLines = lines
      .filter(x => /^[-•]?\s*(\d|[0-9]+|un |une |des |du |de la |le |la )/i.test(x))
      .map(x => x.replace(/^[-•]\s*/, ""));

    const stepLines = lines.slice(1).filter(x => !ingredientLines.includes(x.replace(/^[-•]\s*/, "")));

    applyRecipeToForm({
      name: title,
      ingredients: ingredientLines,
      steps: stepLines,
      tags: ["import-texte"]
    });

    setImportStatus("Texte importé dans le formulaire. Tu peux corriger puis créer.");
  };

  const handleLocalPhotoUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Choisis une image valide.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setForm(prev => ({ ...prev, photoUrl: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const submit = () => {
    const saved = {
      ...(recipe || {}),
      id: recipe?.id || makeId(),
      name: form.name.trim() || "Nouvelle recette",
      mealType: form.mealType,
      favorite: form.favorite,
      ingredients: form.ingredients.split(",").map(x=>parseIngredientLine(x)).filter(x=>x.name),
      steps: form.steps.split("\n").map(x=>x.trim()).filter(Boolean),
      tags: form.tags.split(",").map(x=>x.trim()).filter(Boolean),
      photoUrl: form.photoUrl || "",
      device: form.device.trim(),
      summary: { protein:form.protein, starch:form.starch, vegetables:form.vegetables }
    };
    onSave(saved, mode);
  };

  const inputStyle = {
    padding:12,
    borderRadius:12,
    border:`1px solid ${theme.border}`,
    background:theme.surface,
    color:theme.text
  };

  const modeBtn = (key, label) => (
    <button type="button" className="micro-btn" onClick={()=>setImportMode(key)} style={{
      padding:"10px 12px",
      borderRadius:14,
      border:`1px solid ${importMode===key ? theme.accent : theme.border}`,
      background:importMode===key ? theme.accentSoft : theme.surface,
      color:importMode===key ? theme.accent : theme.text,
      fontWeight:900,
      cursor:"pointer"
    }}>
      {label}
    </button>
  );

  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.38)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:80,padding:20}}>
    <div className="modal-pop" style={{width:"min(760px,100%)",maxHeight:"88vh",overflow:"auto",background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:22,boxShadow:theme.shadowStrong,padding:20}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
        <div>
          <div style={{fontSize:12,color:theme.muted}}>{mode === "create" ? "Création" : "Édition"}</div>
          <div style={{fontWeight:900,fontSize:22,marginTop:4}}>{mode === "create" ? "Nouvelle recette" : "Modifier la recette"}</div>
        </div>
        <button className="micro-btn" onClick={onClose} style={{padding:"8px 12px",borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,cursor:"pointer"}}>Fermer</button>
      </div>

      {mode === "create" && (
        <div style={{background:theme.surface,border:`1px solid ${theme.border}`,borderRadius:18,padding:14,display:"grid",gap:12,marginBottom:14}}>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {modeBtn("manual","Créer moi-même")}
            {modeBtn("text","Importer texte")}
            {modeBtn("url","Importer URL")}
          </div>

          {importMode === "url" && (
            <div style={{display:"grid",gap:10}}>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                <input value={importUrl} onChange={e=>setImportUrl(e.target.value)} placeholder="Colle le lien de la recette ici" style={{...inputStyle,flex:1,minWidth:260}} />
                <button type="button" className="micro-btn" onClick={importFromUrl} style={{padding:"12px 14px",borderRadius:14,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:900,cursor:"pointer"}}>Importer l’URL</button>
              </div>
              <div style={{fontSize:12,color:theme.muted}}>Si le site bloque l’accès direct, l’app essaie aussi via un proxy Netlify. Sinon, utilise l’onglet texte.</div>
            </div>
          )}

          {importMode === "text" && (
            <div style={{display:"grid",gap:10}}>
              <textarea value={importText} onChange={e=>setImportText(e.target.value)} placeholder="Colle ici la recette : titre, ingrédients, étapes…" rows={7} style={{...inputStyle,resize:"vertical"}} />
              <button type="button" className="micro-btn" onClick={importFromText} style={{padding:"12px 14px",borderRadius:14,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:900,cursor:"pointer"}}>Analyser le texte</button>
            </div>
          )}

          {importStatus && (
            <div style={{background:theme.accentSoft,color:theme.accent,borderRadius:14,padding:11,fontWeight:800,fontSize:13}}>
              {importStatus}
            </div>
          )}
        </div>
      )}

      <div style={{display:"grid",gap:10}}>
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nom de la recette" style={inputStyle} />
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          <select value={form.mealType} onChange={e=>setForm({...form,mealType:e.target.value})} style={inputStyle}>
            <option value="balanced">Équilibré</option><option value="light">Léger</option><option value="single">Plat unique</option>
          </select>
          <input value={form.device} onChange={e=>setForm({...form,device:e.target.value})} placeholder="Appareil : four, poêle..." style={inputStyle} />
        </div>

        <div style={{display:"grid",gap:6}}>
          <label style={{fontSize:12,fontWeight:900,color:theme.muted}}>Photo de la recette</label>
          <input value={form.photoUrl || ""} onChange={e=>setForm({...form,photoUrl:e.target.value})} placeholder="URL photo de la recette" style={inputStyle} />
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <label className="micro-btn" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,padding:"11px 14px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:900,cursor:"pointer"}}>
              📷 Ajouter une photo locale
              <input type="file" accept="image/*" onChange={handleLocalPhotoUpload} style={{display:"none"}} />
            </label>
            {form.photoUrl && (
              <button type="button" className="micro-btn" onClick={()=>setForm({...form,photoUrl:""})} style={{padding:"11px 14px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:900,cursor:"pointer"}}>
                Supprimer la photo
              </button>
            )}
          </div>
          {form.photoUrl ? (
            <div style={{height:120,borderRadius:16,border:`1px solid ${theme.border}`,background:theme.surface2,overflow:"hidden"}}>
              <img src={form.photoUrl} alt="Aperçu recette" onError={e=>{e.currentTarget.style.display="none"}} style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
          ) : (
            <div style={{fontSize:12,color:theme.muted}}>Colle une URL ou ajoute une photo locale. Elle sera gardée dans ton navigateur.</div>
          )}
        </div>

        <input value={form.ingredients} onChange={e=>setForm({...form,ingredients:e.target.value})} placeholder="Ingrédients : 200 g poulet, 2 œufs, 1 courgette..." style={inputStyle} />
        <textarea value={form.steps} onChange={e=>setForm({...form,steps:e.target.value})} placeholder="Étapes, une par ligne" style={{...inputStyle,minHeight:84}} />
        <input value={form.tags} onChange={e=>setForm({...form,tags:e.target.value})} placeholder="Tags : rapide, healthy..." style={inputStyle} />
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          <input value={form.protein} onChange={e=>setForm({...form,protein:e.target.value})} placeholder="Protéine" style={inputStyle} />
          <input value={form.starch} onChange={e=>setForm({...form,starch:e.target.value})} placeholder="Féculent" style={inputStyle} />
          <input value={form.vegetables} onChange={e=>setForm({...form,vegetables:e.target.value})} placeholder="Légumes" style={inputStyle} />
        </div>
        <label style={{display:"flex",gap:10,alignItems:"center",fontWeight:800}}><input type="checkbox" checked={form.favorite} onChange={e=>setForm({...form,favorite:e.target.checked})}/> Favori</label>
      </div>

      <div style={{display:"flex",justifyContent:"flex-end",gap:10,marginTop:16}}>
        <button className="micro-btn" onClick={onClose} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:800,cursor:"pointer"}}>Annuler</button>
        <button className="micro-btn" onClick={submit} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:800,cursor:"pointer"}}>{mode === "create" ? "Créer" : "Enregistrer"}</button>
      </div>
    </div>
  </div>
}


function parseRecipeText(raw) {
 const lines=raw.replace(/\r/g,"").split("\n").map(l=>l.trim()).filter(Boolean);
 const title=lines.find(l=>!/^[-•*]/.test(l)&&!/^(ingr[eé]dients?|pr[eé]paration|[eé]tapes?|instructions?)\s*:?$/i.test(l))||"Nouvelle recette importée";
 const ingredients=[], steps=[]; let section="unknown";
 for(const line of lines){
  const clean=line.replace(/^[-•*]\s*/,"").trim();
  if(!clean||clean===title) continue;
  if(/^ingr[eé]dients?\s*:?$/i.test(clean)){section="ingredients";continue}
  if(/^(pr[eé]paration|[eé]tapes?|instructions?)\s*:?$/i.test(clean)){section="steps";continue}
  if(section==="ingredients") ingredients.push(clean);
  else if(section==="steps") steps.push(clean.replace(/^\d+[\).\s-]+/,""));
  else if(/^(\d+|[½¼¾]|une?|des|du|de la|quelques|sel|poivre)/i.test(clean)||clean.length<38) ingredients.push(clean);
  else steps.push(clean.replace(/^\d+[\).\s-]+/,""));
 }
 const lower=raw.toLowerCase(); const tags=[];
 if(lower.includes("four")) tags.push("four");
 if(lower.includes("air fryer")) tags.push("air fryer");
 if(lower.includes("thermomix")) tags.push("thermomix");
 if(lower.includes("salade")||lower.includes("froid")) tags.push("froid");
 if(lower.includes("rapide")||steps.length<=3) tags.push("rapide");
 let mealType="balanced";
 if(lower.includes("salade")||lower.includes("velouté")||lower.includes("léger")) mealType="light";
 if(lower.includes("quiche")||lower.includes("lasagne")||lower.includes("gratin")) mealType="single";
 return {id:makeId(),name:title.replace(/:$/,""),mealType,favorite:false,ingredients,steps,tags:[...new Set(tags)],device:lower.includes("four")?"four":lower.includes("poêle")?"poêle":lower.includes("thermomix")?"Thermomix":"",summary:{protein:"",starch:"",vegetables:""}};
}

function ImportRecipeModal({theme,onClose,onCreate,onEditBeforeCreate}){
 const [raw,setRaw]=useState(""); const [preview,setPreview]=useState(null);
 const analyze=()=>setPreview(parseRecipeText(raw));
 return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.38)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:85,padding:20}}>
  <div className="modal-pop" style={{width:"min(880px,100%)",maxHeight:"88vh",overflow:"auto",background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:22,boxShadow:theme.shadowStrong,padding:20}}>
   <div style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"start",marginBottom:16}}><div><div style={{fontSize:12,color:theme.muted}}>Import recette</div><div style={{fontWeight:900,fontSize:22,marginTop:4}}>Créer depuis un texte copié</div><div style={{fontSize:13,color:theme.muted,marginTop:6}}>Colle une recette brute, analyse, puis valide l’aperçu.</div></div><button className="micro-btn" onClick={onClose} style={{padding:"8px 12px",borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,cursor:"pointer"}}>Fermer</button></div>
   <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
    <div><textarea value={raw} onChange={e=>setRaw(e.target.value)} placeholder={"Colle ta recette ici...\n\nEx :\nSpaghetti bolognaise\n\nIngrédients :\n- pâtes\n- viande hachée\n- tomate\n\nPréparation :\n1. Cuire les pâtes\n2. Faire revenir la viande\n3. Ajouter la sauce"} rows={18} style={{width:"100%",boxSizing:"border-box",padding:14,borderRadius:16,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,resize:"vertical"}}/><div style={{display:"flex",justifyContent:"flex-end",marginTop:10}}><button className="micro-btn" onClick={analyze} disabled={!raw.trim()} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.accent}`,background:raw.trim()?theme.accent:theme.surface,color:raw.trim()?"#fff":theme.muted,fontWeight:900,cursor:raw.trim()?"pointer":"not-allowed"}}>Analyser</button></div></div>
    <div style={{background:theme.surface,border:`1px solid ${theme.border}`,borderRadius:18,padding:14}}><div style={{fontWeight:900,marginBottom:10}}>Aperçu</div>{!preview?<div style={{color:theme.muted,fontSize:13}}>L’aperçu apparaîtra ici après analyse.</div>:<div><div style={{fontWeight:900,fontSize:20}}>{preview.name}</div><div style={{color:theme.muted,fontSize:13,marginTop:4}}>{typeLabel(preview.mealType)} {preview.device?"• "+preview.device:""}</div><div style={{marginTop:14}}><div style={{fontWeight:800,marginBottom:6}}>Ingrédients détectés</div>{preview.ingredients.length?preview.ingredients.map((i,idx)=><div key={idx} style={{fontSize:13,padding:"3px 0"}}>• {i}</div>):<div style={{color:theme.muted,fontSize:13}}>Aucun ingrédient détecté.</div>}</div><div style={{marginTop:14}}><div style={{fontWeight:800,marginBottom:6}}>Étapes détectées</div>{preview.steps.length?preview.steps.map((s,idx)=><div key={idx} style={{fontSize:13,padding:"3px 0"}}><b>{idx+1}.</b> {s}</div>):<div style={{color:theme.muted,fontSize:13}}>Aucune étape détectée.</div>}</div><div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:14}}>{preview.tags.map(t=><span key={t} style={{fontSize:11,padding:"4px 8px",borderRadius:999,border:`1px solid ${theme.border}`}}>#{t}</span>)}</div><div style={{display:"flex",justifyContent:"flex-end",gap:10,marginTop:16}}><button className="micro-btn" onClick={()=>onEditBeforeCreate(preview)} style={{padding:"12px 14px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.panel,color:theme.text,fontWeight:800,cursor:"pointer"}}>Modifier avant création</button><button className="micro-btn" onClick={()=>onCreate(preview)} style={{padding:"12px 14px",borderRadius:14,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:900,cursor:"pointer"}}>Créer la recette</button></div></div>}</div>
   </div>
  </div>
 </div>
}



function SuggestMealModal({ theme, recipes, week, onClose, onPick }) {
  const [day, setDay] = useState("Lundi");
  const [slot, setSlot] = useState("dinner");
  const [seed, setSeed] = useState(0);

  const usedIds = new Set(week.flatMap(d => [d.lunch?.recipeId, d.dinner?.recipeId]).filter(Boolean));
  const dayObj = week.find(d => d.day === day);
  const otherType = dayObj?.[slot === "lunch" ? "dinner" : "lunch"]?.mealType;

  const suggestions = recipes
    .map(recipe => {
      let score = 0;
      if (recipe.favorite) score += 3;
      if (!usedIds.has(recipe.id)) score += 4;
      if (recipe.mealType !== otherType) score += 2;
      if ((recipe.tags || []).includes("rapide")) score += 1;
      score += ((recipe.name.length + seed) % 7) / 10;
      return { recipe, score };
    })
    .sort((a,b) => b.score - a.score)
    .slice(0, 3)
    .map(x => x.recipe);

  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.38)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:86,padding:20}}>
    <div className="modal-pop" style={{width:"min(720px,100%)",background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:22,boxShadow:theme.shadowStrong,padding:20}}>
      <div style={{display:"flex",justifyContent:"space-between",gap:14,alignItems:"start",marginBottom:16}}>
        <div><div style={{fontSize:12,color:theme.muted}}>Suggestions intelligentes</div><div style={{fontWeight:900,fontSize:22,marginTop:4}}>💡 Choisir parmi 3 idées</div><div style={{fontSize:13,color:theme.muted,marginTop:6}}>Évite les doublons et favorise les recettes pertinentes.</div></div>
        <button className="micro-btn" onClick={onClose} style={{padding:"8px 12px",borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,cursor:"pointer"}}>Fermer</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr auto",gap:10,alignItems:"end",marginBottom:14}}>
        <div><label style={{fontSize:12,fontWeight:800,color:theme.muted}}>Jour</label><select value={day} onChange={e=>setDay(e.target.value)} style={{marginTop:6,width:"100%",padding:12,borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text}}>{week.map(d => <option key={d.day} value={d.day}>{d.day}</option>)}</select></div>
        <div><label style={{fontSize:12,fontWeight:800,color:theme.muted}}>Moment</label><select value={slot} onChange={e=>setSlot(e.target.value)} style={{marginTop:6,width:"100%",padding:12,borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text}}><option value="lunch">Midi</option><option value="dinner">Soir</option></select></div>
        <button className="micro-btn" onClick={()=>setSeed(s=>s+1)} style={{padding:"12px 14px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:900,cursor:"pointer"}}>🔄 Regénérer</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:12}}>
        {suggestions.map(recipe => <div key={recipe.id} className="premium-hover" style={{background:theme.surface,border:`1px solid ${theme.border}`,borderRadius:18,padding:14,transition:"transform .14s ease"}}>
          <div style={{height:58,borderRadius:14,background:theme.surface2,border:`1px solid ${theme.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:theme.muted,fontSize:11}}>photo</div>
          <div style={{fontWeight:900,fontSize:15,marginTop:10,lineHeight:1.25}}>{recipe.name} {recipe.favorite ? "⭐" : ""}</div>
          <div style={{color:theme.muted,fontSize:12,marginTop:5}}>{typeLabel(recipe.mealType)} • {recipe.device || "—"}</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:10,minHeight:24}}>{(recipe.tags || []).slice(0,2).map(t=><span key={t} style={{fontSize:11,padding:"4px 8px",borderRadius:999,border:`1px solid ${theme.border}`,color:theme.muted}}>#{t}</span>)}</div>
          <button className="micro-btn" onClick={()=>onPick(recipe, day, slot)} style={{marginTop:12,width:"100%",padding:"10px 12px",borderRadius:12,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:900,cursor:"pointer"}}>Choisir</button>
        </div>)}
      </div>
    </div>
  </div>
}

function AddToMenuModal({ recipe, theme, onClose, onAdd }) {
  const [day, setDay] = useState("Lundi");
  const [slot, setSlot] = useState("dinner");
  const [replace, setReplace] = useState(false);

  if (!recipe) return null;

  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.38)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:86,padding:20}}>
    <div className="modal-pop" style={{width:"min(480px,100%)",background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:22,boxShadow:theme.shadowStrong,padding:20}}>
      <div style={{display:"flex",justifyContent:"space-between",gap:14,alignItems:"start",marginBottom:16}}>
        <div>
          <div style={{fontSize:12,color:theme.muted}}>Ajouter au menu</div>
          <div style={{fontWeight:900,fontSize:22,marginTop:4}}>{recipe.name}</div>
          <div style={{fontSize:13,color:theme.muted,marginTop:6}}>Choisis le jour et le moment du repas.</div>
        </div>
        <button className="micro-btn" onClick={onClose} style={{padding:"8px 12px",borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,cursor:"pointer"}}>Fermer</button>
      </div>

      <div style={{display:"grid",gap:12}}>
        <div>
          <label style={{fontSize:12,fontWeight:800,color:theme.muted}}>Jour</label>
          <select value={day} onChange={e=>setDay(e.target.value)} style={{marginTop:6,width:"100%",padding:12,borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text}}>
            {["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"].map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <div>
          <label style={{fontSize:12,fontWeight:800,color:theme.muted}}>Moment</label>
          <select value={slot} onChange={e=>setSlot(e.target.value)} style={{marginTop:6,width:"100%",padding:12,borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text}}>
            <option value="lunch">Midi</option>
            <option value="dinner">Soir</option>
          </select>
        </div>

        <label style={{display:"flex",gap:8,alignItems:"center",background:theme.surface,border:`1px solid ${theme.border}`,borderRadius:12,padding:12}}>
          <input type="checkbox" checked={replace} onChange={e=>setReplace(e.target.checked)} />
          <span>Remplacer si le créneau est déjà occupé</span>
        </label>
      </div>

      <div style={{display:"flex",justifyContent:"flex-end",gap:10,marginTop:16}}>
        <button className="micro-btn" onClick={onClose} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:800,cursor:"pointer"}}>Annuler</button>
        <button className="micro-btn" onClick={()=>onAdd(recipe, day, slot, replace)} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:900,cursor:"pointer"}}>Ajouter</button>
      </div>
    </div>
  </div>
}

function RecipeSheet({ recipe, theme, onClose, onEdit, onToggleFavorite, onAddToMenu }) {
  if (!recipe) return null;
  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.38)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:70,padding:20}}>
    <div className="modal-pop" style={{width:"min(760px,100%)",maxHeight:"88vh",overflow:"auto",background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:22,boxShadow:theme.shadowStrong,padding:20}}>
      <div style={{display:"flex",justifyContent:"space-between",gap:14,alignItems:"start"}}>
        <div><div style={{fontSize:12,color:theme.muted}}>Fiche recette</div><h2 style={{margin:"4px 0 8px 0",fontSize:26}}>{recipe.name} {recipe.favorite ? "⭐" : ""}</h2><div style={{color:theme.muted}}>{typeLabel(recipe.mealType)} • {recipe.device || "—"}</div></div>
        <button className="micro-btn" onClick={onClose} style={{padding:"8px 12px",borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,cursor:"pointer"}}>Fermer</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginTop:18}}>
        <div style={{background:theme.surface,border:`1px solid ${theme.border}`,borderRadius:18,padding:14}}><b>Ingrédients structurés</b>{normalizeIngredients(recipe.ingredients||[]).map((i,idx)=><div key={idx} style={{padding:"4px 0"}}>• {ingredientText(i)}</div>)}</div>
        <div style={{background:theme.surface,border:`1px solid ${theme.border}`,borderRadius:18,padding:14}}><b>Tags</b><div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:8}}>{(recipe.tags||[]).length ? recipe.tags.map(t=><span key={t} style={{fontSize:11,padding:"4px 8px",borderRadius:999,border:`1px solid ${theme.border}`}}>#{t}</span>) : <span style={{color:theme.muted}}>Aucun tag</span>}</div></div>
      </div>
      <div style={{background:theme.surface,border:`1px solid ${theme.border}`,borderRadius:18,padding:14,marginTop:14}}><b>Étapes</b>{(recipe.steps||[]).length ? recipe.steps.map((s,i)=><div key={i} style={{display:"flex",gap:10,padding:"6px 0"}}><b>{i+1}.</b><span>{s}</span></div>) : <div style={{color:theme.muted,marginTop:8}}>Aucune étape.</div>}</div>
      <div style={{display:"flex",justifyContent:"flex-end",gap:10,marginTop:16}}>
        <button className="micro-btn" onClick={onToggleFavorite} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:800,cursor:"pointer"}}>{recipe.favorite ? "Retirer favori" : "Ajouter favori"}</button>
        <button className="micro-btn" onClick={onAddToMenu} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:800,cursor:"pointer"}}>Ajouter au menu</button><button className="micro-btn" onClick={onAddToMenu} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:800,cursor:"pointer"}}>Ajouter au menu</button><button className="micro-btn" onClick={onEdit} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:800,cursor:"pointer"}}>Modifier</button>
      </div>
    </div>
  </div>
}

function MealCard({ label, meal, theme, onQuick, onEdit, onLock, onDragStart, onDragOver, onDrop, isDropTarget, isDraggingSource }) {
 return <div className="card-enter"><div style={{fontWeight:800,marginBottom:6,fontSize:12,paddingLeft:2}}>{label}</div><div className="premium-hover" draggable onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} style={{background:isDropTarget?theme.accentSoft:theme.surface,border:`1px solid ${isDropTarget?theme.accent:(meal.locked?theme.accent:theme.border)}`,borderRadius:18,padding:10,transform:isDraggingSource?"scale(1.02)":(isDropTarget?"scale(1.012)":"scale(1)"),opacity:isDraggingSource?.52:1,transition:"all .14s ease"}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><span style={{fontSize:10,color:theme.muted,fontWeight:700}}>{meal.locked?"Verrouillé":"Repas"}</span><div style={{display:"flex",gap:6}}><button className="micro-btn" onClick={onQuick} style={{width:26,height:26,borderRadius:9,border:`1px solid ${theme.border}`,background:theme.panel,color:theme.text,cursor:"pointer"}}>👁</button><button className="micro-btn" onClick={onEdit} style={{width:26,height:26,borderRadius:9,border:`1px solid ${theme.border}`,background:theme.panel,color:theme.text,cursor:"pointer"}}>✎</button><button className="micro-btn" onClick={onLock} style={{width:26,height:26,borderRadius:9,border:`1px solid ${theme.border}`,background:theme.panel,color:theme.text,cursor:"pointer"}}>{meal.locked?"🔒":"🔓"}</button></div></div>
  <div style={{height:52,borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface2,display:"flex",alignItems:"center",justifyContent:"center",color:theme.muted,fontSize:10,overflow:"hidden"}}>{meal.recipeId?(meal.photoUrl?<img src={meal.photoUrl} alt={meal.recipeName} onError={e=>{e.currentTarget.style.display="none"}} style={{width:"100%",height:"100%",objectFit:"cover"}}/>:"photo"):"Déposer ici"}</div><div style={{display:"grid",gap:6,marginTop:10}}><div style={{minHeight:40,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",fontWeight:900,fontSize:13,lineHeight:1.25}}>{meal.recipeName}</div><div style={{display:"flex",justifyContent:"center",minHeight:18}}>{meal.favorite?<span className="pulse-star">⭐</span>:null}</div><div style={{textAlign:"center",color:theme.muted,fontSize:11,lineHeight:1.3,minHeight:28}}>{mealSummary(meal)}</div></div></div></div>
}

function StatsCard({week,theme}) {
 const meals=week.flatMap(d=>[d.lunch,d.dinner]); const total=meals.filter(m=>m.recipeId).length; const favorites=meals.filter(m=>m.favorite).length; const locked=meals.filter(m=>m.locked).length; const empty=meals.filter(m=>!m.recipeId).length; const light=meals.filter(m=>m.mealType==="light").length; const balanced=meals.filter(m=>m.mealType==="balanced").length; const single=meals.filter(m=>m.mealType==="single").length;
 const row=(a,b)=><div style={{display:"flex",justifyContent:"space-between",fontSize:12,padding:"6px 0"}}><span>{a}</span><b>{b}</b></div>;
 return <div className="card-enter" style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:18,padding:12,boxShadow:theme.shadow}}><div style={{textAlign:"center",fontWeight:900,fontSize:15,marginBottom:10}}>📊 Stats</div><div className="premium-hover" style={{background:theme.surface,border:`1px solid ${theme.border}`,borderRadius:18,padding:12}}><div style={{textAlign:"center",paddingBottom:8,borderBottom:`1px solid ${theme.border}`}}><div style={{fontSize:28,fontWeight:900}}>{total}</div><div style={{fontSize:11,color:theme.muted}}>repas planifiés</div></div>{row("⭐ Favoris",favorites)}{row("🥗 Légers",light)}{row("🍽 Équilibrés",balanced)}{row("🍕 Plats uniques",single)}{row("🔒 Verrouillés",locked)}{row("🕳 Vides",empty)}</div></div>
}





const makeManualShoppingItem = (name) => {
  const smartName = getSmartIngredientName(String(name || "").trim());
  return {
    name: smartName,
    unit: "",
    qty: 0,
    count: 1,
    sources: ["Ajout manuel"],
    manual: true
  };
};

const quickShoppingSuggestions = [
  { name:"Pain", icon:"🥖" },
  { name:"Lait", icon:"🥛" },
  { name:"Œufs", icon:"🥚" },
  { name:"Bananes", icon:"🍌" },
  { name:"Yaourt", icon:"🥣" },
  { name:"Fromage", icon:"🧀" },
  { name:"Papier toilette", icon:"🧻" },
  { name:"Jus d’orange", icon:"🧃" },
  { name:"Spaghetti", icon:"🍝" },
  { name:"Poulet", icon:"🍗" }
];

const quickShoppingTiles = [
  { name:"Pain", icon:"🥖", color:"#ef4444" },
  { name:"Lait", icon:"🥛", color:"#14b8a6" },
  { name:"Œufs", icon:"🥚", color:"#f59e0b" },
  { name:"Bananes", icon:"🍌", color:"#ef4444" },
  { name:"Fromage", icon:"🧀", color:"#ef4444" },
  { name:"Yaourt", icon:"🥣", color:"#14b8a6" },
  { name:"Poulet", icon:"🍗", color:"#ef4444" },
  { name:"Riz", icon:"🍚", color:"#14b8a6" },
  { name:"Pâtes", icon:"🍝", color:"#14b8a6" },
  { name:"Tomates", icon:"🍅", color:"#ef4444" },
  { name:"Salade", icon:"🥗", color:"#14b8a6" },
  { name:"Papier toilette", icon:"🧻", color:"#14b8a6" }
];




function getCategoryIcon(category) {
  const cat = String(category || "");
  if (cat.includes("Fruits")) return "🍎";
  if (cat.includes("Viandes")) return "🍗";
  if (cat.includes("Frais")) return "🥛";
  if (cat.includes("Féculents")) return "🍝";
  if (cat.includes("Épicerie")) return "🥫";
  if (cat.includes("Assaisonnement")) return "🧂";
  return "📦";
}

function getShoppingIcon(name, category = "") {
  const n = normalizeKey(name);

  const icons = [
    ["🥕", ["carotte", "carottes"]],
    ["🥒", ["concombre", "courgette", "courgettes"]],
    ["🍅", ["tomate", "tomates", "tomates cerises", "tomate cerise"]],
    ["🥗", ["salade", "roquette", "jeunes pousses"]],
    ["🥦", ["brocoli", "legume", "légume", "legumes", "légumes"]],
    ["🍆", ["aubergine", "aubergines"]],
    ["🫑", ["poivron", "poivrons"]],
    ["🧅", ["oignon", "oignons", "echalote", "échalote"]],
    ["🍄", ["champignon", "champignons"]],
    ["🌽", ["mais", "maïs"]],
    ["🍏", ["pomme", "pommes"]],
    ["🍌", ["banane", "bananes"]],
    ["🍊", ["orange", "jus d orange", "jus d’orange"]],
    ["🍋", ["citron", "citrons"]],
    ["🥝", ["kiwi", "kiwis"]],
    ["🍓", ["fraise", "fraises"]],
    ["🍇", ["raisin", "raisins"]],
    ["🍗", ["poulet", "dinde", "volaille"]],
    ["🥩", ["boeuf", "bœuf", "steak", "viande", "haché", "hache"]],
    ["🥓", ["lardon", "lardons", "jambon", "bacon", "chorizo"]],
    ["🌭", ["saucisse", "saucisses", "merguez"]],
    ["🐟", ["thon", "saumon", "sardine", "poisson", "truite"]],
    ["🦐", ["crevette", "crevettes"]],
    ["🥚", ["oeuf", "oeufs", "œuf", "œufs"]],
    ["🧀", ["fromage", "feta", "mozzarella", "chevre", "chèvre", "emmental", "parmesan", "boursin", "comte", "comté"]],
    ["🥛", ["lait", "yaourt", "yogourt", "fromage blanc", "skyr", "creme", "crème"]],
    ["🧈", ["beurre"]],
    ["🍝", ["pate", "pates", "pâtes", "spaghetti", "macaroni", "orzo"]],
    ["🍚", ["riz", "quinoa", "semoule", "boulgour", "bulgur"]],
    ["🥖", ["pain", "baguette", "pain de mie"]],
    ["🌮", ["tortilla", "tortillas", "wrap", "galette"]],
    ["🥔", ["pomme de terre", "pommes de terre", "puree", "purée", "gnocchi", "gnocchis"]],
    ["🥣", ["cereales", "céréales", "flocons", "avoine"]],
    ["🥫", ["conserve", "boite", "boîte", "haricot rouge", "haricots rouges", "lentille", "lentilles", "pois chiche", "pois chiches"]],
    ["🍯", ["miel"]],
    ["🍶", ["sauce", "soja", "vinaigre", "huile", "pesto"]],
    ["🌶️", ["curry", "paprika", "piment", "epice", "épice"]],
    ["🧂", ["sel", "poivre", "cumin", "herbes", "basilic", "menthe", "ciboulette"]],
    ["🍫", ["chocolat"]],
    ["🍪", ["gateau", "gâteau", "biscuit", "biscuits", "dessert"]],
    ["🍬", ["bonbon", "bonbons", "sucre"]],
    ["🧻", ["papier toilette", "essuie tout", "sopalin"]],
    ["🧼", ["lessive", "savon", "liquide vaisselle", "tablette lave vaisselle", "tablettes lave vaisselle"]],
    ["🧴", ["shampoing", "gel douche", "dentifrice"]],
    ["🧽", ["eponge", "éponge", "sac poubelle", "sacs poubelle"]],
    ["🥤", ["boisson", "soda", "coca", "jus"]],
    ["☕", ["cafe", "café"]],
    ["🫖", ["the", "thé", "tisane"]],
    ["💧", ["eau"]]
  ];

  const found = icons.find(([icon, words]) =>
    words.some(word => n.includes(normalizeKey(word)))
  );

  if (found) return found[0];

  if (n.includes("sauce")) return "🍶";
  if (n.includes("boisson")) return "🥤";
  if (n.includes("dessert")) return "🍰";
  if (n.includes("nettoy")) return "🧼";

  return getCategoryIcon(category);
}

function getShoppingTileColor(name, category) {
  const cat = String(category || "");
  if (cat.includes("Fruits")) return "#ef4444";
  if (cat.includes("Viandes")) return "#ef4444";
  if (cat.includes("Frais")) return "#14b8a6";
  if (cat.includes("Féculents")) return "#14b8a6";
  if (cat.includes("Épicerie")) return "#14b8a6";
  if (cat.includes("Assaisonnement")) return "#f59e0b";
  return "#64748b";
}

function getShoppingShortLabel(item) {
  const base = shoppingItemLabel(item);
  return base.replace(" — ", "\n").replace(" ×", "\n×");
}




function ProductConfigModal({ item, theme, onClose, onIncrement, onDecrement, onRemove }) {
  if (!item) return null;

  const category = item.category || getShoppingCategory(item.name);
  const icon = getShoppingIcon(item.name, category);
  const count = item.count || item.qty || 1;
  const tileColor = getShoppingTileColor(item.name, category);

  const quickQuantities = [1, 2, 3, 4, 5, 6, 8, 10];

  return (
    <div style={{
      position:"fixed",
      inset:0,
      background:"rgba(0,0,0,.52)",
      display:"flex",
      alignItems:"flex-end",
      justifyContent:"center",
      zIndex:130,
      padding:0
    }}>
      <div className="modal-pop" style={{
        width:"min(560px,100%)",
        maxHeight:"92vh",
        overflow:"auto",
        background:theme.panel,
        border:`1px solid ${theme.border}`,
        borderRadius:"26px 26px 0 0",
        boxShadow:theme.shadowStrong,
        padding:22
      }}>
        <div style={{
          width:54,
          height:5,
          borderRadius:999,
          background:theme.border,
          margin:"0 auto 18px auto"
        }} />

        <div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-start",marginBottom:18}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{
              width:64,
              height:64,
              borderRadius:20,
              background:tileColor,
              color:"#fff",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontSize:34,
              boxShadow:"0 10px 24px rgba(0,0,0,.18)"
            }}>
              {icon}
            </div>

            <div>
              <div style={{fontWeight:950,fontSize:24,lineHeight:1.1}}>{item.name}</div>
              <div style={{color:theme.muted,fontSize:13,marginTop:6}}>{category}</div>
            </div>
          </div>

          <button className="micro-btn" onClick={onClose} style={{
            padding:"9px 13px",
            borderRadius:14,
            border:`1px solid ${theme.border}`,
            background:theme.surface,
            color:theme.text,
            fontWeight:900,
            cursor:"pointer"
          }}>
            Terminé
          </button>
        </div>

        <div style={{
          background:theme.surface,
          border:`1px solid ${theme.border}`,
          borderRadius:20,
          padding:16,
          display:"grid",
          gap:14,
          marginBottom:14
        }}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
            <div>
              <div style={{fontWeight:950,fontSize:16}}>Quantité</div>
              <div style={{fontSize:12,color:theme.muted,marginTop:3}}>Ajuste rapidement l’article</div>
            </div>

            <div style={{
              minWidth:52,
              height:40,
              borderRadius:14,
              background:theme.accentSoft,
              color:theme.accent,
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontWeight:950,
              fontSize:18
            }}>
              x{count}
            </div>
          </div>

          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:14}}>
            <button className="micro-btn" onClick={()=>onDecrement(item)} style={{
              width:52,
              height:52,
              borderRadius:999,
              border:`1px solid ${theme.border}`,
              background:theme.panel,
              color:theme.text,
              fontSize:26,
              fontWeight:950,
              cursor:"pointer"
            }}>
              −
            </button>

            <div style={{minWidth:90,textAlign:"center",fontWeight:950,fontSize:34,lineHeight:1}}>
              {count}
            </div>

            <button className="micro-btn" onClick={()=>onIncrement(item)} style={{
              width:52,
              height:52,
              borderRadius:999,
              border:`1px solid ${theme.border}`,
              background:theme.panel,
              color:theme.text,
              fontSize:26,
              fontWeight:950,
              cursor:"pointer"
            }}>
              +
            </button>
          </div>

          <div style={{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"}}>
            {quickQuantities.map(q => (
              <button key={q} className="micro-btn" onClick={()=>{
                const diff = q - count;
                if (diff > 0) for (let i=0;i<diff;i++) onIncrement(item);
                if (diff < 0) for (let i=0;i<Math.abs(diff);i++) onDecrement(item);
              }} style={{
                padding:"9px 13px",
                borderRadius:999,
                border:`1px solid ${q===count ? theme.accent : theme.border}`,
                background:q===count ? theme.accentSoft : theme.panel,
                color:q===count ? theme.accent : theme.text,
                fontWeight:900,
                cursor:"pointer"
              }}>
                {q}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          background:theme.surface,
          border:`1px solid ${theme.border}`,
          borderRadius:20,
          padding:16,
          display:"grid",
          gap:10,
          marginBottom:14
        }}>
          <div style={{fontWeight:950,fontSize:16}}>Détails</div>
          <div style={{display:"grid",gap:8}}>
            <div style={{display:"flex",justifyContent:"space-between",gap:10,fontSize:14}}>
              <span style={{color:theme.muted}}>Rayon</span>
              <b>{category}</b>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",gap:10,fontSize:14}}>
              <span style={{color:theme.muted}}>Source</span>
              <b>{item.manual ? "Ajout manuel" : "Menu / recettes"}</b>
            </div>
          </div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          <button className="micro-btn" onClick={()=>onRemove(item)} style={{
            padding:"14px 16px",
            borderRadius:16,
            border:`1px solid ${theme.border}`,
            background:theme.surface,
            color:theme.text,
            fontWeight:950,
            cursor:"pointer"
          }}>
            Supprimer
          </button>

          <button className="micro-btn" onClick={onClose} style={{
            padding:"14px 16px",
            borderRadius:16,
            border:`1px solid ${theme.accent}`,
            background:theme.accent,
            color:"#fff",
            fontWeight:950,
            cursor:"pointer"
          }}>
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}

function CoursesTab({ week, recipes, theme }) {
  const [quickMode, setQuickMode] = useState(false);
  const [manualInput, setManualInput] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryOrder, setCategoryOrder] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("menuFamille_category_order") || "null") || shoppingCategoryOrder;
    } catch {
      return shoppingCategoryOrder;
    }
  });
  const [manualItems, setManualItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("menuFamille_manual_courses") || "[]"); }
    catch { return []; }
  });
  const [recentItems, setRecentItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("menuFamille_recent_courses") || "[]"); }
    catch { return []; }
  });
  const [boughtItems, setBoughtItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("menuFamille_bought_courses") || "[]"); }
    catch { return []; }
  });
  const [quantityOverrides, setQuantityOverrides] = useState(() => {
    try { return JSON.parse(localStorage.getItem("menuFamille_quantity_overrides") || "{}"); }
    catch { return {}; }
  });

  const recipeMap = useMemo(() => Object.fromEntries(recipes.map(r => [r.id, r])), [recipes]);
  const autoShoppingList = useMemo(() => getWeekShoppingList(week, recipeMap), [week, recipeMap]);

  useEffect(() => localStorage.setItem("menuFamille_manual_courses", JSON.stringify(manualItems)), [manualItems]);
  useEffect(() => localStorage.setItem("menuFamille_recent_courses", JSON.stringify(recentItems)), [recentItems]);
  useEffect(() => localStorage.setItem("menuFamille_bought_courses", JSON.stringify(boughtItems)), [boughtItems]);
  useEffect(() => localStorage.setItem("menuFamille_quantity_overrides", JSON.stringify(quantityOverrides)), [quantityOverrides]);
  useEffect(() => localStorage.setItem("menuFamille_category_order", JSON.stringify(categoryOrder)), [categoryOrder]);

  const addRecent = (name) => {
    const clean = String(name || "").trim();
    if (!clean) return;
    setRecentItems(prev => [clean, ...prev.filter(x => normalizeKey(x) !== normalizeKey(clean))].slice(0, 10));
  };

  const addManualItem = (name) => {
    const clean = String(name || "").trim();
    if (!clean) return;

    const item = makeManualShoppingItem(clean);
    const itemNameKey = normalizeKey(item.name);
    const activeManualExists = manualItems.some(x => normalizeKey(x.name) === itemNameKey);

    setManualItems(prev => {
      const existing = prev.find(x => normalizeKey(x.name) === itemNameKey);

      if (existing) {
        // Si l’article est déjà actif dans la liste, on incrémente toujours de 1.
        return prev.map(x =>
          normalizeKey(x.name) === itemNameKey
            ? {
                ...x,
                count: (x.count || 1) + 1,
                qty: 0,
                sources: ["Ajout manuel"],
                manual: true
              }
            : x
        );
      }

      // Si l’article était seulement dans “Achetés récemment”, il revient proprement à 1.
      return [{ ...item, count: 1, qty: 0, manual: true }, ...prev];
    });

    // Si l’article n’était plus actif, on efface tout ancien override de quantité.
    // Exemple : carottes x6 acheté puis réajouté => carottes x1.
    if (!activeManualExists) {
      setQuantityOverrides(prev => {
        const copy = { ...prev };
        delete copy[`${itemNameKey}|`];
        return copy;
      });
    }

    // On garde l'ancien article dans "Achetés récemment" pour éviter de refaire apparaître son ancien cumul auto.
    addRecent(item.name);
    setManualInput("");
  };

  const removeManualItem = (item) => {
    setManualItems(prev => prev.filter(x => normalizeKey(x.name) !== normalizeKey(item.name)));
    setBoughtItems(prev => prev.filter(x => normalizeKey(x.name) !== normalizeKey(item.name)));
  };

  const getItemKey = (item, category = "") => `${category}-${item.name}-${item.unit || ""}`;
  const getQuantityKey = (item) => `${normalizeKey(item.name)}|${item.unit || ""}`;

  const getDisplayItem = (item) => {
    const quantityKey = getQuantityKey(item);
    const override = quantityOverrides[quantityKey];
    if (override == null) return item;
    return { ...item, qty: 0, count: override, sources: item.sources || ["Ajout manuel"] };
  };

  const incrementShoppingItem = (item) => {
    const quantityKey = getQuantityKey(item);
    const current = quantityOverrides[quantityKey] ?? (item.count || 1);
    setQuantityOverrides(prev => ({ ...prev, [quantityKey]: current + 1 }));
  };

  const decrementShoppingItem = (item) => {
    const quantityKey = getQuantityKey(item);
    const current = quantityOverrides[quantityKey] ?? (item.count || 1);
    const next = current - 1;

    if (next <= 0) {
      const category = getShoppingCategory(item.name);
      const key = getItemKey(item, category);
      const itemNameKey = normalizeKey(item.name);

      setManualItems(prev => prev.filter(x => normalizeKey(x.name) !== itemNameKey));
      setBoughtItems(prev => [
        { ...item, key, category, boughtAt: Date.now(), count: 1 },
        ...prev.filter(x => x.key !== key)
      ].slice(0, 40));

      setQuantityOverrides(prev => {
        const copy = { ...prev };
        delete copy[quantityKey];
        return copy;
      });
      return;
    }

    setQuantityOverrides(prev => ({ ...prev, [quantityKey]: next }));
  };

  const removeShoppingItem = (item) => {
    const quantityKey = getQuantityKey(item);
    const itemNameKey = normalizeKey(item.name);
    const category = getShoppingCategory(item.name);
    const key = getItemKey(item, category);

    // Suppression volontaire = reset complet.
    // Si l’article est réajouté ensuite, il doit repartir à x1.
    setManualItems(prev => prev.filter(x => normalizeKey(x.name) !== itemNameKey));
    setBoughtItems(prev => prev.filter(x => x.key !== key && normalizeKey(x.name) !== itemNameKey));
    setQuantityOverrides(prev => {
      const copy = { ...prev };
      delete copy[quantityKey];
      delete copy[`${itemNameKey}|`];
      return copy;
    });
    setSelectedProduct(null);
  };
  const boughtKeys = useMemo(() => new Set(boughtItems.map(item => item.key)), [boughtItems]);

  const shoppingList = useMemo(() => {
    const merged = {};

    const addToMerged = (item) => {
      const key = normalizeKey(item.name) + "|" + (item.unit || "").toLowerCase();
      if (!merged[key]) merged[key] = { ...item, sources: [...(item.sources || [])] };
      else {
        merged[key].qty += item.qty || 0;
        merged[key].count += item.count || 0;
        merged[key].sources = [...new Set([...(merged[key].sources || []), ...(item.sources || [])])];
        merged[key].manual = merged[key].manual || item.manual;
      }
    };

    autoShoppingList.forEach(item => {
      const category = getShoppingCategory(item.name);
      if (!boughtKeys.has(getItemKey(item, category))) addToMerged(item);
    });

    manualItems.forEach(item => addToMerged(item));

    return Object.values(merged)
      .map(item => getDisplayItem(item))
      .sort((a,b)=>a.name.localeCompare(b.name,"fr"));
  }, [autoShoppingList, manualItems, boughtKeys, quantityOverrides]);

  const activeShoppingList = shoppingList;

  const grouped = useMemo(() => {
    const baseGroups = groupShoppingListByCategory(activeShoppingList);
    return [...baseGroups].sort((a, b) => {
      const ai = categoryOrder.indexOf(a.category);
      const bi = categoryOrder.indexOf(b.category);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });
  }, [activeShoppingList, categoryOrder]);

  const markBought = (item, category) => {
    const key = getItemKey(item, category);
    const boughtItem = {
      ...item,
      key,
      category,
      boughtAt: Date.now(),
      count: item.manual ? 1 : item.count
    };

    setBoughtItems(prev => [boughtItem, ...prev.filter(x => x.key !== key)].slice(0, 40));

    if (item.manual) {
      setManualItems(prev => prev.filter(x => normalizeKey(x.name) !== normalizeKey(item.name)));
    }

    addRecent(item.name);
  };

  const restoreBought = (item) => setBoughtItems(prev => prev.filter(x => x.key !== item.key));
  const clearBought = () => setBoughtItems([]);

  const pillStyle = {
    border:`1px solid ${theme.border}`,
    background:theme.surface,
    color:theme.text,
    borderRadius:999,
    padding:"8px 12px",
    cursor:"pointer",
    fontWeight:800,
    display:"inline-flex",
    alignItems:"center",
    gap:6
  };


  const moveCategory = (category, direction) => {
    setCategoryOrder(prev => {
      const current = prev.includes(category) ? prev : [...prev, category];
      const index = current.indexOf(category);
      const nextIndex = index + direction;

      if (nextIndex < 0 || nextIndex >= current.length) return current;

      const copy = [...current];
      const temp = copy[index];
      copy[index] = copy[nextIndex];
      copy[nextIndex] = temp;
      return copy;
    });
  };

  const resetCategoryOrder = () => setCategoryOrder(shoppingCategoryOrder);


  const tileBase = (active=True) => ({
    minHeight: quickMode ? 82 : 118,
    border: active ? "none" : `1px solid ${theme.border}`,
    borderRadius:16,
    color: active ? "#fff" : theme.muted,
    fontWeight:900,
    cursor:"pointer",
    display:"grid",
    placeItems:"center",
    padding:10,
    position:"relative",
    overflow:"hidden",
    transition:"transform .14s ease, opacity .14s ease, box-shadow .14s ease"
  });

  const renderActiveTile = (item, category) => {
    const key = getItemKey(item, category);
    const icon = getShoppingIcon(item.name, category);
    const tileColor = getShoppingTileColor(item.name, category);

    return (
      <button key={key} className="micro-btn" onClick={() => markBought(item, category)} style={{
        ...tileBase(true),
        background:tileColor,
        boxShadow:"0 10px 20px rgba(0,0,0,.14)"
      }}>
        <div style={{fontSize:quickMode ? 26 : 34,lineHeight:1}}>{icon}</div>
        <div style={{fontSize:13,lineHeight:1.18,whiteSpace:"pre-line",textAlign:"center",maxWidth:"100%"}}>
          {item.name}
        </div>

        {(item.count || item.qty || 1) > 1 && (
          <span style={{position:"absolute",top:8,left:8,minWidth:26,height:24,padding:"0 7px",borderRadius:999,background:"rgba(255,255,255,.92)",color:tileColor,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:900,boxShadow:"0 4px 10px rgba(0,0,0,.12)"}}>
            x{item.count || item.qty || 1}
          </span>
        )}

        <span onClick={(e)=>{e.stopPropagation(); setSelectedProduct({...item, category});}} style={{position:"absolute",top:8,right:8,width:26,height:26,borderRadius:999,background:"rgba(0,0,0,.18)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:900,cursor:"pointer"}}>
          …
        </span>
      </button>
    );
  };

  const renderBoughtTile = (item) => {
    const icon = getShoppingIcon(item.name, item.category);
    return (
      <button key={item.key} className="micro-btn" onClick={() => restoreBought(item)} style={{
        ...tileBase(false),
        background:theme.surface2,
        minHeight:86,
        boxShadow:"none",
        opacity:.86
      }}>
        <span style={{position:"absolute",top:8,left:8,width:22,height:22,borderRadius:999,background:theme.accent,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:900}}>✓</span>
        <div style={{fontSize:26,lineHeight:1,filter:"grayscale(1)"}}>{icon}</div>
        <div style={{fontSize:12,lineHeight:1.18,whiteSpace:"pre-line",textAlign:"center",maxWidth:"100%"}}>
          {getShoppingShortLabel(item)}
        </div>
      </button>
    );
  };

  return (
    <div className="card-enter">
      {selectedProduct && (
        <ProductConfigModal
          item={selectedProduct}
          theme={theme}
          onClose={()=>setSelectedProduct(null)}
          onIncrement={(item)=>{ incrementShoppingItem(item); setSelectedProduct(prev => prev ? {...prev, count:(prev.count || prev.qty || 1)+1, qty:0} : prev); }}
          onDecrement={(item)=>{ decrementShoppingItem(item); setSelectedProduct(prev => {
            if (!prev) return prev;
            const next = (prev.count || prev.qty || 1) - 1;
            return next <= 0 ? null : {...prev, count:next, qty:0};
          }); }}
          onRemove={removeShoppingItem}
        />
      )}
      <div style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"flex-start",flexWrap:"wrap",marginBottom:14}}>
        <div>
          <h1 style={{margin:"0 0 6px 0",fontSize:24}}>Liste de courses · Mode magasin bientôt actif</h1>
          <div style={{color:theme.muted,fontSize:13}}>v12.4.3 : build fix final.</div>
        </div>
        <div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
          <div style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:16,padding:"12px 16px",boxShadow:theme.shadow}}>
            <b>{activeShoppingList.length}</b> à acheter • <b>{boughtItems.length}</b> achetés
          </div>
          <button className="micro-btn" onClick={() => setQuickMode(v => !v)} style={{
            padding:"12px 16px",borderRadius:14,border:`1px solid ${quickMode ? theme.accent : theme.border}`,
            background:quickMode ? theme.accentSoft : theme.surface,color:quickMode ? theme.accent : theme.text,fontWeight:900,cursor:"pointer"
          }}>{quickMode ? "Vue détaillée" : "Mode rapide"}</button>
          <button className="micro-btn" onClick={clearBought} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:900,cursor:"pointer"}}>
            Vider achetés
          </button>
        </div>
      </div>

      <div style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:22,padding:16,boxShadow:theme.shadow,marginBottom:16}}>
        <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:12}}>
          <input value={manualInput} onChange={e=>setManualInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")addManualItem(manualInput)}} placeholder="Que veux-tu acheter ?" style={{flex:1,padding:"13px 14px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:700}} />
          <button type="button" className="micro-btn" onClick={()=>addManualItem(manualInput)} style={{padding:"13px 16px",borderRadius:14,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:900,cursor:"pointer"}}>Ajouter</button>
        </div>

        <div style={{fontWeight:900,fontSize:14,marginBottom:8}}>Vous avez sûrement besoin ✨</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:14}}>
          {quickShoppingSuggestions.map(item => <button type="button" key={item.name} className="micro-btn" onClick={(e)=>{e.preventDefault(); e.stopPropagation(); addManualItem(item.name);}} style={pillStyle}><span>{item.icon}</span>{item.name}</button>)}
        </div>

        {recentItems.length > 0 && (
          <>
            <div style={{fontWeight:900,fontSize:14,marginBottom:8}}>Utilisés récemment</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {recentItems.map(name => <button type="button" key={name} className="micro-btn" onClick={(e)=>{e.preventDefault(); e.stopPropagation(); addManualItem(name);}} style={{...pillStyle,background:theme.accentSoft,color:theme.accent}}>{name}</button>)}
            </div>
          </>
        )}
      </div>

      <div style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:22,padding:16,boxShadow:theme.shadow,marginBottom:16}}>
        <div style={{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:10,flexWrap:"wrap"}}>
          <div>
            <div style={{fontWeight:900,fontSize:16}}>Import URL proxy</div>
            <div style={{fontSize:12,color:theme.muted,marginTop:3}}>Adapte l’ordre à ton magasin.</div>
          </div>
          <button type="button" className="micro-btn" onClick={resetCategoryOrder} style={{padding:"9px 12px",borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:900,cursor:"pointer"}}>
            Réinitialiser
          </button>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:8}}>
          {categoryOrder.map(category => (
            <div key={category} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,border:`1px solid ${theme.border}`,background:theme.surface,borderRadius:14,padding:"8px 10px"}}>
              <span style={{fontWeight:900,fontSize:13,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{category}</span>
              <span style={{display:"flex",gap:6}}>
                <button type="button" className="micro-btn" onClick={()=>moveCategory(category,-1)} style={{width:32,height:32,borderRadius:10,border:`1px solid ${theme.border}`,background:theme.panel,color:theme.text,cursor:"pointer"}}>↑</button>
                <button type="button" className="micro-btn" onClick={()=>moveCategory(category,1)} style={{width:32,height:32,borderRadius:10,border:`1px solid ${theme.border}`,background:theme.panel,color:theme.text,cursor:"pointer"}}>↓</button>
              </span>
            </div>
          ))}
        </div>
      </div>

      {activeShoppingList.length === 0 ? (
        <div style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:18,padding:18,color:theme.muted,marginBottom:16}}>
          Liste vide. Ajoute des recettes au planning ou ajoute un article manuellement.
        </div>
      ) : quickMode ? (
        <div style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:20,padding:14,boxShadow:theme.shadow,marginBottom:16}}>
          <div style={{fontWeight:900,fontSize:18,marginBottom:12}}>🛒 À acheter — mode rapide par rayons</div>

          <div style={{display:"grid",gap:14}}>
            {grouped.map(group => (
              <div key={group.category}>
                <div style={{fontWeight:900,fontSize:14,marginBottom:8,color:theme.muted}}>
                  {group.category}
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(108px,1fr))",gap:8}}>
                  {group.items.map(item => renderActiveTile(item, group.category))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{display:"grid",gap:16,marginBottom:16}}>
          {grouped.map(group => (
            <div key={group.category} style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:20,padding:14,boxShadow:theme.shadow}}>
              <div style={{fontWeight:900,fontSize:18,marginBottom:10}}>{group.category}</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(124px,1fr))",gap:10}}>
                {group.items.map(item => renderActiveTile(item, group.category))}
              </div>
            </div>
          ))}
        </div>
      )}

      {boughtItems.length > 0 && (
        <div style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:20,padding:14,boxShadow:theme.shadow}}>
          <div style={{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:10}}>
            <div style={{fontWeight:900,fontSize:18}}>✅ Achetés récemment</div>
            <div style={{fontSize:12,color:theme.muted}}>Clique pour remettre dans la liste</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(120px,1fr))",gap:10}}>
            {boughtItems.map(renderBoughtTile)}
          </div>
        </div>
      )}
    </div>
  );
}

function RecipesTab({recipes,theme,onSelectRecipe,onEditRecipe,onCreateRecipe,onImportRecipe,onToggleFavorite}) {
 const [search,setSearch]=useState(""); const [typeFilter,setTypeFilter]=useState("all"); const [favOnly,setFavOnly]=useState(false);
 const filtered=recipes.filter(r=>{const recipeSearchText = normalizeIngredients(r.ingredients||[]).map(ingredientText).join(" "); const txt=`${r.name} ${recipeSearchText} ${(r.tags||[]).join(" ")}`.toLowerCase(); return (!search.trim()||txt.includes(search.toLowerCase()))&&(typeFilter==="all"||r.mealType===typeFilter)&&(!favOnly||r.favorite)});
 return <div className="card-enter"><div style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"flex-start",flexWrap:"wrap",marginBottom:14}}><div><h1 style={{margin:"0 0 6px 0",fontSize:24}}>Carnet de recettes</h1><div style={{color:theme.muted,fontSize:13}}>v12.4.3 : build fix final.</div></div><div style={{display:"flex",gap:10,flexWrap:"wrap"}}><button className="micro-btn" onClick={onCreateRecipe} style={{padding:"12px 14px",borderRadius:14,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:900,cursor:"pointer"}}>+ Nouvelle recette / importer</button><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Rechercher..." style={{padding:"12px 14px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,minWidth:240}} /><select value={typeFilter} onChange={e=>setTypeFilter(e.target.value)} style={{padding:"12px 14px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:800}}><option value="all">Tous types</option><option value="light">Léger</option><option value="balanced">Équilibré</option><option value="single">Plat unique</option></select><button className="micro-btn" onClick={()=>setFavOnly(v=>!v)} style={{padding:"12px 14px",borderRadius:14,border:`1px solid ${favOnly?theme.accent:theme.border}`,background:favOnly?theme.accentSoft:theme.surface,color:favOnly?theme.accent:theme.text,fontWeight:800,cursor:"pointer"}}>⭐ Favoris</button></div></div>
 <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:12}}>{filtered.map(r=><div key={r.id} className="card-enter premium-hover" style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:18,padding:14,boxShadow:theme.shadow,transition:"transform .14s ease"}}><div style={{height:78,borderRadius:16,background:theme.surface2,border:`1px solid ${theme.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:theme.muted,fontSize:12,overflow:"hidden"}}>{getRecipePhoto(r)?<img src={getRecipePhoto(r)} alt={r.name} onError={e=>{e.currentTarget.style.display="none"}} style={{width:"100%",height:"100%",objectFit:"cover"}}/>:"photo recette"}</div><div style={{display:"flex",justifyContent:"space-between",gap:10,alignItems:"start",marginTop:12}}><div><div style={{fontWeight:900,fontSize:16}}>{r.name}</div><div style={{color:theme.muted,fontSize:12,marginTop:5}}>{typeLabel(r.mealType)} • {r.device||"—"}</div></div><button className="micro-btn" onClick={()=>onToggleFavorite(r.id)} style={{border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,borderRadius:12,width:34,height:34,cursor:"pointer"}}>{r.favorite?"⭐":"☆"}</button></div><div style={{color:theme.muted,fontSize:12,marginTop:10,minHeight:32}}>{normalizeIngredients(r.ingredients||[]).slice(0,4).map(ingredientText).join(", ")}</div><div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:10}}>{(r.tags||[]).slice(0,3).map(t=><span key={t} style={{fontSize:11,padding:"4px 8px",borderRadius:999,border:`1px solid ${theme.border}`,color:theme.muted}}>#{t}</span>)}</div><div style={{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12}}><button className="micro-btn" onClick={()=>onSelectRecipe(r.id)} style={{padding:"9px 12px",borderRadius:12,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:800,cursor:"pointer"}}>Voir</button><button className="micro-btn" onClick={()=>onEditRecipe(r.id)} style={{padding:"9px 12px",borderRadius:12,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:800,cursor:"pointer"}}>Modifier</button></div></div>)}</div>{filtered.length===0&&<div style={{marginTop:16,background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:18,padding:18,color:theme.muted}}>Aucune recette.</div>}</div>
}


function WhatsNewModal({ theme, onClose }) {
  const items = [
    "Ajout rapide manuel depuis les courses.",
    "Suggestions en boutons arrondis.",
    "Import URL proxy personnalisable dans les courses.",
    "Historique des articles utilisés récemment.",
    "Import URL proxy avec + / − / supprimer."
  ];

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.48)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:120,padding:20}}>
      <div className="modal-pop" style={{width:"min(560px,100%)",background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:24,boxShadow:theme.shadowStrong,padding:26,textAlign:"center"}}>
        <div style={{width:72,height:72,borderRadius:999,border:`3px solid ${theme.accent}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",fontSize:34,color:theme.accent}}>✓</div>
        <div style={{fontWeight:900,fontSize:28,marginBottom:6}}>Version 12.4.3</div>
        <div style={{color:theme.accent,fontWeight:900,fontSize:16,marginBottom:22}}>Import URL proxy</div>
        <div style={{height:1,background:theme.border,margin:"0 0 20px"}} />
        <div style={{textAlign:"left"}}>
          <div style={{fontWeight:900,fontSize:17,marginBottom:12}}>Nouveautés</div>
          {items.map((item, index) => (
            <div key={index} style={{display:"flex",gap:10,alignItems:"flex-start",margin:"10px 0"}}>
              <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:999,background:theme.accent,color:"#fff",fontSize:12,flex:"0 0 auto"}}>✓</span>
              <span style={{lineHeight:1.45}}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{height:1,background:theme.border,margin:"22px 0 18px"}} />
        <div style={{color:theme.muted,fontSize:13,marginBottom:16}}>L’application est prête à être testée.</div>
        <button className="micro-btn" onClick={onClose} style={{padding:"13px 22px",borderRadius:14,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:900,cursor:"pointer",minWidth:220}}>
          Démarrer l’application
        </button>
      </div>
    </div>
  );
}


export default function App() {
 const [themeName,setThemeName]=useState("light"); const [showWhatsNew,setShowWhatsNew]=useState(()=>localStorage.getItem("menuFamille_v12_4_3_seen")!=="yes"); const theme=themeName==="light"?themeLight:themeDark; const [tab,setTab]=useState("menus"); const [recipes,setRecipes]=useState(INITIAL_RECIPES);
 useEffect(() => {
   setWeek(prev => prev.map(day => ({
     ...day,
     lunch: day.lunch?.recipeId ? { ...day.lunch, photoUrl: getRecipePhoto(recipes.find(r => r.id === day.lunch.recipeId)) } : day.lunch,
     dinner: day.dinner?.recipeId ? { ...day.dinner, photoUrl: getRecipePhoto(recipes.find(r => r.id === day.dinner.recipeId)) } : day.dinner
   })));
 }, [recipes]);
 const [week,setWeek]=useState(makeWeek(INITIAL_RECIPES)); const [visualFilter,setVisualFilter]=useState("all"); const [history,setHistory]=useState([]); const [showHistory,setShowHistory]=useState(false); const [recipeEditId,setRecipeEditId]=useState(null); const [recipeSheetId,setRecipeSheetId]=useState(null); const [placementRecipeId,setPlacementRecipeId]=useState(null); const [creatingRecipe,setCreatingRecipe]=useState(false); const [showSuggest,setShowSuggest]=useState(false); const [importingRecipe,setImportingRecipe]=useState(false); const [draftRecipe,setDraftRecipe]=useState(null); const [dragState,setDragState]=useState(null); const [dropTarget,setDropTarget]=useState(null); const [dragPointer,setDragPointer]=useState({x:0,y:0}); const [toast,setToast]=useState("");
 const recipeBeingEdited=recipeEditId?recipes.find(r=>r.id===recipeEditId):null; const recipeSheet=recipeSheetId?recipes.find(r=>r.id===recipeSheetId):null; const placementRecipe=placementRecipeId?recipes.find(r=>r.id===placementRecipeId):null;
 React.useEffect(()=>{if(!toast)return; const t=setTimeout(()=>setToast(""),1400); return()=>clearTimeout(t)},[toast]);
 const pushHistory=label=>setHistory(prev=>[{label,at:new Date().toLocaleString("fr-FR",{hour12:false})},...prev].slice(0,8));
 const mealMatchesFilter=m=>visualFilter==="all"||visualFilter==="favorites"&&m.favorite||visualFilter==="locked"&&m.locked||visualFilter==="empty"&&!m.recipeId||visualFilter==="light"&&m.mealType==="light"||visualFilter==="balanced"&&m.mealType==="balanced"||visualFilter==="single"&&m.mealType==="single";
 const filteredWeek=week.map(d=>({...d,showLunch:visualFilter==="all"?true:mealMatchesFilter(d.lunch),showDinner:visualFilter==="all"?true:mealMatchesFilter(d.dinner)})).filter(d=>d.showLunch||d.showDinner); const draggedMeal=dragState?week[dragState.dayIndex][dragState.slot]:null;
 const saveRecipe=(updated,mode="edit")=>{setRecipes(prev=>mode==="create"?[updated,...prev]:prev.map(r=>r.id===updated.id?updated:r)); if(mode==="edit") setWeek(prev=>prev.map(d=>({...d,lunch:d.lunch.recipeId===updated.id?{...d.lunch,recipeName:updated.name,mealType:updated.mealType,favorite:updated.favorite,summary:updated.summary,photoUrl:getRecipePhoto(updated),photoUrl:getRecipePhoto(updated)}:d.lunch,dinner:d.dinner.recipeId===updated.id?{...d.dinner,recipeName:updated.name,mealType:updated.mealType,favorite:updated.favorite,summary:updated.summary,photoUrl:getRecipePhoto(updated),photoUrl:getRecipePhoto(updated)}:d.dinner}))); setRecipeEditId(null); setCreatingRecipe(false); setToast(mode==="create"?"Recette créée":"Recette mise à jour"); pushHistory(mode==="create"?`Recette créée : ${updated.name}`:`Recette modifiée : ${updated.name}`)};
 const saveImportedUrlRecipe=(recipe)=>{saveRecipe(withRecipePhoto(recipe),"create");setUrlImportOpen(false);};
 const toggleRecipeFavorite=id=>{setRecipes(prev=>prev.map(r=>r.id===id?{...r,favorite:!r.favorite}:r)); setWeek(prev=>prev.map(d=>({...d,lunch:d.lunch.recipeId===id?{...d.lunch,favorite:!d.lunch.favorite}:d.lunch,dinner:d.dinner.recipeId===id?{...d.dinner,favorite:!d.dinner.favorite}:d.dinner}))); setToast("Favori mis à jour")};
 const generateSmartWeek=()=>{const used=new Set(); const randomFactor=()=>Math.random()*2.5; const pick=(current,other)=>{if(current.locked)return current; const ranked=recipes.map((r,idx)=>{let score=0; if(r.favorite)score+=2; if(!used.has(r.id))score+=5; if(r.mealType!==other?.mealType)score+=2; if((r.tags||[]).includes("rapide"))score+=0.5; score+=randomFactor(); return {r,score};}).sort((a,b)=>b.score-a.score); const chosen=ranked[0]?.r||recipes[Math.floor(Math.random()*recipes.length)]||recipes[0]; used.add(chosen.id); return {...buildMeal(chosen),locked:current.locked};}; setWeek(prev=>prev.map(day=>{const lunch=pick(day.lunch,day.dinner); const dinner=pick(day.dinner,lunch); return {...day,lunch,dinner};})); setToast("Nouvelle semaine générée"); pushHistory("Nouvelle semaine générée intelligemment")}; const pickSuggestedRecipe=(recipe,dayName,slot)=>{const index=week.findIndex(d=>d.day===dayName); if(index<0)return; setWeek(prev=>prev.map((d,i)=>i!==index?d:{...d,[slot]:{...buildMeal(recipe),locked:d[slot].locked}})); setShowSuggest(false); setToast(`Suggestion ajoutée à ${dayName} ${slot==="lunch"?"midi":"soir"}`); pushHistory(`Suggestion : ${recipe.name} → ${dayName} ${slot==="lunch"?"midi":"soir"}`)}; const addRecipeToMenu=(recipe,dayName,slot,replace)=>{const index=week.findIndex(d=>d.day===dayName); if(index<0)return; const target=week[index][slot]; if(target.recipeId&&!replace){setToast("Créneau déjà occupé"); return;} setWeek(prev=>prev.map((d,i)=>i!==index?d:{...d,[slot]:{...buildMeal(recipe),locked:d[slot].locked}})); setPlacementRecipeId(null); setRecipeSheetId(null); setToast(`Ajouté à ${dayName} ${slot==="lunch"?"midi":"soir"}`); pushHistory(`Ajout menu : ${recipe.name} → ${dayName} ${slot==="lunch"?"midi":"soir"}`)}; const toggleLock=(i,slot)=>{setWeek(prev=>prev.map((d,idx)=>idx!==i?d:{...d,[slot]:{...d[slot],locked:!d[slot].locked}})); setToast("Verrou mis à jour")};
 const handleDragStart=(i,slot)=>e=>{setDragState({dayIndex:i,slot}); setDragPointer({x:e.clientX,y:e.clientY}); e.dataTransfer.effectAllowed="move"; const c=document.createElement("canvas"); c.width=1;c.height=1;e.dataTransfer.setDragImage(c,0,0); setToast("Glisser-déposer actif")};
 const handleDragOver=(i,slot)=>e=>{e.preventDefault(); setDropTarget({dayIndex:i,slot}); setDragPointer({x:e.clientX,y:e.clientY})};
 const handleDrop=(i,slot)=>e=>{e.preventDefault(); if(!dragState)return; const from=dragState,to={dayIndex:i,slot}; setWeek(prev=>{const next=clone(prev), source=clone(next[from.dayIndex][from.slot]), target=clone(next[to.dayIndex][to.slot]); if(!target.recipeId){next[to.dayIndex][to.slot]={...source,locked:next[to.dayIndex][to.slot].locked}; next[from.dayIndex][from.slot]=emptyMeal()} else {next[to.dayIndex][to.slot]={...source,locked:next[to.dayIndex][to.slot].locked}; next[from.dayIndex][from.slot]={...target,locked:next[from.dayIndex][from.slot].locked}} return next}); setToast("Repas déplacé"); pushHistory("Repas déplacé par glisser-déposer"); setDragState(null); setDropTarget(null)};
 const navItems=[["menus","Menus"],["courses","Courses"],["recipes","Recettes"],["family","Famille"],["settings","Paramètres"]]; const displayItems=[...filteredWeek,{type:"stats"}];
 return <div style={{minHeight:"100vh",background:theme.bg,color:theme.text,fontFamily:"Arial, sans-serif"}} onDragEnd={()=>{setDragState(null);setDropTarget(null)}}>
 <div style={{position:"fixed",right:12,bottom:12,zIndex:9999,background:"#16a34a",color:"#fff",padding:"10px 14px",borderRadius:999,fontWeight:900,boxShadow:"0 8px 24px rgba(0,0,0,.25)"}}>
   MARQUEUR BUILD v12.4.3
 </div>
 {showWhatsNew && <WhatsNewModal theme={theme} onClose={() => { localStorage.setItem("menuFamille_v12_4_3_seen","yes"); setShowWhatsNew(false); }} />}
 <style>{`@keyframes modalPop{from{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}} @keyframes cardEnter{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}} @keyframes pulseStar{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}} .modal-pop{animation:modalPop .18s ease} .card-enter{animation:cardEnter .22s ease} .premium-hover:hover{transform:translateY(-2px)} .micro-btn{transition:transform .12s ease,opacity .12s ease} .micro-btn:hover{transform:translateY(-1px) scale(1.02);opacity:.96} .micro-btn:active{transform:scale(.96)} .pulse-star{animation:pulseStar 1.8s ease-in-out infinite}`}</style>
 <div style={{background:theme.panel,borderBottom:`1px solid ${theme.border}`}}><div style={{maxWidth:1480,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",alignItems:"center",gap:18}}><div style={{padding:"14px 10px 14px 24px",fontWeight:900,fontSize:20,display:"flex",alignItems:"center",gap:10}}><span style={{color:theme.accent}}>🍴</span><span>Menu Famille</span></div><div style={{display:"flex",alignItems:"center"}}>{navItems.map(([key,label])=><button className="micro-btn" key={key} onClick={()=>setTab(key)} style={{background:"transparent",border:"none",color:tab===key?theme.accent:theme.text,fontWeight:800,padding:"18px 14px",borderBottom:tab===key?`3px solid ${theme.accent}`:"3px solid transparent",cursor:"pointer"}}>{label}</button>)}</div></div><div style={{paddingRight:24}}><button className="micro-btn" onClick={()=>setThemeName(themeName==="light"?"dark":"light")} style={{border:`1px solid ${theme.accent}`,borderRadius:16,padding:"10px 16px",background:theme.surface,color:theme.accent,fontWeight:800,cursor:"pointer"}}>{themeName==="light"?"☾ Mode sombre":"☀ Mode clair"}</button></div></div></div>
 {showSuggest&&<SuggestMealModal theme={theme} recipes={recipes} week={week} onClose={()=>setShowSuggest(false)} onPick={pickSuggestedRecipe} />}
 {toast&&<div style={{position:"fixed",top:88,right:20,zIndex:90,background:theme.panel,border:`1px solid ${theme.border}`,color:theme.text,borderRadius:14,padding:"10px 14px",boxShadow:theme.shadowStrong,animation:"cardEnter .14s ease"}}>{toast}</div>}
 {draggedMeal&&<div style={{position:"fixed",left:dragPointer.x+12,top:dragPointer.y+12,width:220,pointerEvents:"none",zIndex:80,background:theme.panel,border:`1px solid ${theme.accent}`,borderRadius:16,padding:10,boxShadow:theme.shadowStrong,opacity:.96,transform:"rotate(-1deg) scale(1.02)"}}><div style={{fontSize:10,color:theme.muted,marginBottom:6}}>Déplacement</div><div style={{fontWeight:900,fontSize:14}}>{draggedMeal.recipeName}</div><div style={{fontSize:11,color:theme.muted,marginTop:4}}>{mealSummary(draggedMeal)}</div></div>}
 <RecipeSheet recipe={recipeSheet} theme={theme} onClose={()=>setRecipeSheetId(null)} onEdit={()=>{if(recipeSheetId){setRecipeEditId(recipeSheetId);setRecipeSheetId(null)}}} onToggleFavorite={()=>recipeSheetId&&toggleRecipeFavorite(recipeSheetId)} onAddToMenu={()=>{if(recipeSheetId)setPlacementRecipeId(recipeSheetId)}} /><AddToMenuModal recipe={placementRecipe} theme={theme} onClose={()=>setPlacementRecipeId(null)} onAdd={addRecipeToMenu} />
 {recipeEditId&&<RecipeFormModal mode="edit" recipe={recipeBeingEdited} theme={theme} onClose={()=>setRecipeEditId(null)} onSave={saveRecipe} />}
 {creatingRecipe&&<RecipeFormModal mode="create" recipe={null} theme={theme} onClose={()=>setCreatingRecipe(false)} onSave={saveRecipe} />}{draftRecipe&&<RecipeFormModal mode="create" recipe={draftRecipe} theme={theme} onClose={()=>setDraftRecipe(null)} onSave={saveRecipe} />}{importingRecipe&&<ImportRecipeModal theme={theme} onClose={()=>setImportingRecipe(false)} onCreate={(recipe)=>{saveRecipe(recipe,"create"); setImportingRecipe(false)}} onEditBeforeCreate={(recipe)=>{setDraftRecipe(recipe); setImportingRecipe(false)}} />}
 <div style={{maxWidth:1480,margin:"0 auto",padding:"24px 20px 30px"}}>
 {tab==="menus"?<><div className="card-enter" style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"flex-start",flexWrap:"wrap",marginBottom:14}}><div><h1 style={{margin:"0 0 6px 0",fontSize:24}}>Menus de la semaine</h1><div style={{color:theme.muted,fontSize:13}}>v12.4.3 : build fix final.</div></div><div style={{display:"flex",gap:12,flexWrap:"wrap"}}><button className="micro-btn" onClick={()=>setTab("courses")} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:900,cursor:"pointer"}}>🛒 Voir les courses</button><button className="micro-btn" onClick={()=>setShowSuggest(true)} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.accent}`,background:theme.accent,color:"#fff",fontWeight:900,cursor:"pointer"}}>💡 Suggérer un repas</button><button className="micro-btn" onClick={generateSmartWeek} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:900,cursor:"pointer"}}>⚡ Générer semaine</button><select value={visualFilter} onChange={e=>setVisualFilter(e.target.value)} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:800}}><option value="all">Filtre : tous</option><option value="favorites">Favoris</option><option value="locked">Verrouillés</option><option value="empty">Repas vides</option><option value="light">Légers</option><option value="balanced">Équilibrés</option><option value="single">Plats uniques</option></select><button className="micro-btn" onClick={()=>setShowHistory(v=>!v)} style={{padding:"12px 16px",borderRadius:14,border:`1px solid ${theme.border}`,background:theme.surface,color:theme.text,fontWeight:800,cursor:"pointer"}}>{showHistory?"Masquer l’historique":"Voir l’historique"}</button></div></div>
 {showHistory&&<div className="card-enter" style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:18,padding:16,boxShadow:theme.shadow,marginBottom:14}}><div style={{fontWeight:900,marginBottom:10}}>Historique rapide</div>{history.length===0?<div style={{color:theme.muted,fontSize:13}}>Aucune action enregistrée.</div>:history.map((h,i)=><div key={i} style={{padding:"10px 12px",borderRadius:12,background:theme.surface,border:`1px solid ${theme.border}`,marginBottom:8}}><div style={{fontWeight:700,fontSize:13}}>{h.label}</div><div style={{fontSize:11,color:theme.muted,marginTop:2}}>{h.at}</div></div>)}</div>}
 <div style={{display:"grid",gap:12,gridTemplateColumns:"repeat(4,minmax(180px,1fr))",alignItems:"start"}}>{displayItems.map(item=>{if(item.type==="stats")return <StatsCard key="stats" week={week} theme={theme}/>; const i=week.findIndex(w=>w.day===item.day); return <div key={item.day} className="card-enter" style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:18,padding:12,boxShadow:theme.shadow}}><div style={{textAlign:"center",fontWeight:900,fontSize:15,marginBottom:10}}>{item.day}</div><div style={{display:"grid",gap:10}}>{item.showLunch&&<MealCard label="Midi" meal={item.lunch} theme={theme} onQuick={()=>setRecipeSheetId(item.lunch.recipeId)} onEdit={()=>item.lunch.recipeId&&setRecipeEditId(item.lunch.recipeId)} onLock={()=>toggleLock(i,"lunch")} onDragStart={handleDragStart(i,"lunch")} onDragOver={handleDragOver(i,"lunch")} onDrop={handleDrop(i,"lunch")} isDropTarget={dropTarget?.dayIndex===i&&dropTarget?.slot==="lunch"} isDraggingSource={dragState?.dayIndex===i&&dragState?.slot==="lunch"}/>}{item.showDinner&&<MealCard label="Soir" meal={item.dinner} theme={theme} onQuick={()=>setRecipeSheetId(item.dinner.recipeId)} onEdit={()=>item.dinner.recipeId&&setRecipeEditId(item.dinner.recipeId)} onLock={()=>toggleLock(i,"dinner")} onDragStart={handleDragStart(i,"dinner")} onDragOver={handleDragOver(i,"dinner")} onDrop={handleDrop(i,"dinner")} isDropTarget={dropTarget?.dayIndex===i&&dropTarget?.slot==="dinner"} isDraggingSource={dragState?.dayIndex===i&&dragState?.slot==="dinner"}/>}</div></div>})}</div></>:tab==="recipes"?<RecipesTab recipes={recipes} theme={theme} onSelectRecipe={setRecipeSheetId} onEditRecipe={setRecipeEditId} onCreateRecipe={()=>setCreatingRecipe(true)} onImportRecipe={()=>setImportingRecipe(true)} onToggleFavorite={toggleRecipeFavorite}/>:tab==="courses"?<CoursesTab week={week} recipes={recipes} theme={theme}/>:<div className="card-enter" style={{background:theme.panel,border:`1px solid ${theme.border}`,borderRadius:22,padding:24,boxShadow:theme.shadow}}><div style={{fontWeight:900,fontSize:24,marginBottom:8}}>{navItems.find(([k])=>k===tab)?.[1]}</div><div style={{color:theme.muted}}>Onglet disponible. Base stable conservée.</div></div>}
 </div></div>
}
