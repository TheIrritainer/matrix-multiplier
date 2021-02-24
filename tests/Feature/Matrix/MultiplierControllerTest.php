<?php


namespace Tests\Feature\Matrix;


use Tests\TestCase;

class MultiplierControllerTest extends TestCase
{
    /** @test */
    public function when_requesting_with_the_wrong_method_it_fails()
    {
        $response = $this->getJson('/api/multiplier');

        $response->assertStatus(405);
    }

    /** @test */
    public function when_left_or_right_matrix_is_missing_it_fails()
    {
        $response1 = $this->postJson('/api/multiplier', ['left' => [[0]]]);
        $response2 = $this->postJson('/api/multiplier', ['top' => [[0]]]);

        $response1->assertStatus(422);
        $response2->assertStatus(422);

        $response1->assertJson([
            "message" => "The given data was invalid.",
            "errors" => [
                "top" => [
                    "The top field is required."
                ]
            ]
        ]);
    }

    /** @test */
    public function when_any_raw_matrix_is_invalid_it_will_fail()
    {
        $correctMatrix = [[0]];

        $response1 = $this->postJson('/api/multiplier', ['left' => [['aa']], 'top' => $correctMatrix]);
        $response2 = $this->postJson('/api/multiplier', ['left' => $correctMatrix, 'top' => [[0, 2], [2]]]);

        $response1->assertStatus(422);
        $response2->assertStatus(422);

        $response1->assertJson([
            "message" => "The given data was invalid.",
            "errors" => [
                "left" => [
                    "The left must strictly contain numerical values."
                ]
            ]
        ]);

        $response2->assertJson([
            "message" => "The given data was invalid.",
            "errors" => [
                "top" => [
                    "Each row of top must have the same length."
                ]
            ]
        ]);
    }

    /** @test */
    public function when_the_matrixes_arent_multiplicable_throw_error()
    {
        $left = [[0]];

        $top = [[5, 6], [9, 3]];

        $response = $this->postJson('/api/multiplier', ['left' => $left, 'top' => $top]);

        $response->assertStatus(422);

        $response->assertJson(["message" => "left row length must be equal to top column length"]);
    }

    /** @test */
    public function when_all_input_is_correct_calculate_matrix_result_and_return_response()
    {
        $payload = ['left' => [
            [1, 2],
            [4, 3]
        ], 'top' => [
            [1, 2, 3],
            [3, -4, 7]
        ]];

        $response = $this->postJson('/api/multiplier', $payload);
        $response->assertStatus(200);

        $response->assertJson(['result' => [
            [7, -6, 17],
            [13, -4, 33]
        ]
        ]);
    }

}
