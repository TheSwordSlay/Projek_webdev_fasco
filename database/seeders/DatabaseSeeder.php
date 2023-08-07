<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Resep;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        User::factory()->create([
            'name' => 'Fiqri',
            'email' => 'fiqrijambi@gmail.com',
            'password' => '$2y$10$l9CZUVqDOgtyOTvdqhRJXeSeizqYMDu.kOMukqYOoq73ZJnkmSQ8O'
        ]);
        User::factory(3)->create();
        Resep::factory(6)->create();

    }
}
