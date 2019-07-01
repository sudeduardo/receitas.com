<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Recipe extends Model
{
    protected $fillable = [
        'title_recipe',
        'ingredients',
        'mode_preparation'
    ];

}
