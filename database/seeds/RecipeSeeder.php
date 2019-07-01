<?php

use Illuminate\Database\Seeder;
use App\Recipe;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $recipe = [
            'title_recipe' => 'Bolo Pamonha',
            'ingredients' => '
                5 espigas de milho verde
                1 lata de leite condensado
                1/2 xícara (chá) de leite
                3 unidades de ovo
                1 colher (sopa) de fermento químico em pó
                100 gr de margarina culinária',
            'mode_preparation' => '
                1. Debulhe o milho, corte os grãos rente ao sabugo, coloque-os no liqüidificador acrescente o leite condensado, o leite, a manteiga e os ovos 
                2. Bata bem e acrescente o fermento em pó.
                3. Coloque em fôrma untada só com manteiga, leve ao forno médio pré-aquecido, por 40 minutos, ou até que o palito saia limpo
                4. Retire do fogo, espere amornar, desenforme, e se quiser, pode polvilhar um pouco de canela em pó'
        ];

        for ($i = 0; $i < 5; $i++) {
            Recipe::create($recipe);
        }

    }
}
