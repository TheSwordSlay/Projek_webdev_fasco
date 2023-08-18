<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Resep;
use App\Models\Komentar;
use App\Models\Reply;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => '$2y$10$Mkuawl97bcReDrV7mcNTPex4fGGa.99Eh5Unvu8inYJxVkNYgZpyu',
        ]);
        // \App\Models\User::factory(10)->create();
        User::factory(12)->create();
        Resep::factory(50)->create();

    }
}
