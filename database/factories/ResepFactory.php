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
        return [
            'user_id' => mt_rand(1,3),
            'title' => fake()->sentence(mt_rand(1,3)),
            'tipe' => "Dinner",
            'gambar' => "img/foodExample.webp",
            'daerah' => "Sumatera Selatan",
            'deskripsi' => fake()->sentence(mt_rand(10,25)),
            'langkah' => [fake()->sentence(mt_rand(3, 6)), fake()->sentence(mt_rand(3, 6)), fake()->sentence(mt_rand(3, 6)), fake()->sentence(mt_rand(3, 6))],
            'bahan' => [fake()->sentence(2), fake()->sentence(2), fake()->sentence(2), fake()->sentence(2)],
            'like' => 0,
            'dislike' => 0,
        ];
    }
}
