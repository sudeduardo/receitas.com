<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\createRecipe;
use App\Http\Requests\UpdateRecipe;
use App\Recipe;
use Carbon\Carbon;
class RecipeController extends Controller
{
    public function getRecipes()
    {
        $recipes = Recipe::all();
        return response()->json(compact('recipes'), 200);

    }

    public function getRecipe($id)
    {
        $recipe = Recipe::find($id);
        if (isset($recipe)) {

            return response()->json([
                'response' => true,
                'data' => $recipe
            ], 200);

        } else return response()->json([
            'response' => false,
            'data' => 'Receita não encontrada'
        ], 404);

    }

    public function createRecipe(CreateRecipe $request)
    {
        try {

            Recipe::insert(
                array_merge(
                    $request->toArray(),
                    [
                        'created_at'=> Carbon::now(),
                        'updated_at'=> Carbon::now()
                    ]
                )
            );
            return response()->json(
                [
                    'response' => true,
                    'data' => "Receita criada com sucesso!"
                ], 201);

        } catch (\Exception $e) {

            return response()
                ->json(
                    [
                        'response' => false,
                        'data' => "error:" . $e->getMessage()
                    ],
                    500);
        }
    }

    public function updateRecipe($id, UpdateRecipe $request)
    {
        try {

            $recipe = Recipe::find($id);
            if (isset($recipe)) {
                $recipe->update(
                    array_merge(
                        $request->toArray(),
                        [
                            'updated_at'=> Carbon::now()
                        ]
                        ));

                return response()
                    ->json(
                        [
                            'response' => true,
                            'data' => "Receita atualizada com sucesso"
                        ], 200);
            } else return response()
                ->json(
                    [
                        'response' => true,
                        'data' => "Receita não encontrada"
                    ], 200);


        } catch (\Exception $e) {
            return response()
                ->json(
                    [
                        'response' => false,
                        'data' => "error:" . $e->getMessage()
                    ], 500);
        }
    }

    public function deleteRecipe($id)
    {
        try {
            $recipe = Recipe::find($id);
            if (isset($recipe)) {
                $recipe->delete();

                return response()
                    ->json(
                        [
                            'response' => true,
                            'data' => "Receita deletada com sucesso"
                        ],
                        200);

            } else return response()
                ->json(
                    [
                        'response' => false,
                        'data' => "Receita não encontrada"
                    ], 400);

        } catch (\Exception $e) {

            return response()
                ->json(
                    [
                        'response' => false,
                        'error' => "error:" . $e->getMessage()
                    ],
                    500);
        }
    }

}
