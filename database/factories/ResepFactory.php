<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resep>
 */
class ResepFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        function randomType($i){
            if($i == 1) {
                return "Cemilan";
            } else if ($i == 2) {
                return "Makanan berat";
            } else {
                return "Dessert";
            }
        }

        return [
            'user_id' => rand(1, 3),
            'title' => fake()->sentence(2),
            'tipe' => randomType(rand(1, 3)),
            'gambar' => "post-images/example.webp",
            'daerah' => "Sumatera Selatan",
            'deskripsi' => fake()->sentence(50),
            'langkah' => [fake()->sentence(20), fake()->sentence(20), fake()->sentence(20), fake()->sentence(20), fake()->sentence(20), fake()->sentence(20), fake()->sentence(20), fake()->sentence(20)],
            'bahan' => [fake()->sentence(2), fake()->sentence(2), fake()->sentence(2), fake()->sentence(2), fake()->sentence(2)],
            'like' => 0,
            'dislike' => 0,
        ];
    }
}
