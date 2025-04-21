<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Admin;
use App\Models\Owner;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'user',
            'email' => 'user@user.jp']);

        Admin::factory()->create([
            'name' => 'admin',
            'email' => 'admin@admin.jp']);

        Owner::factory()->create([
            'name' => 'owner',
            'email' => 'owner@owner.jp']);
    }
}
