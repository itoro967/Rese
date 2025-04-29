<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RestaurantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'restaurant_name' => 'required|string|max:255',
            'restaurant_image' => 'required|image|mimes:jpeg,png,jpg',
            'description' => 'required|string|max:1000',
            'genre' => 'required',
            'area' => 'required',
        ];
    }
}
