<?php


namespace Tests\Unit\Domain\Validators;


use App\Domain\Validators\MatrixValidator;
use Tests\TestCase;

class MatrixValidatorTest extends TestCase
{
    /** @test */
    public function when_the_rule_is_invoked_without_an_array_as_value_it_should_fail()
    {
        $matrixValidator = new MatrixValidator();

        $passes = $matrixValidator->passes('iamnot', 'anarray');

        $this->assertFalse($passes);
        $this->assertEquals('The :attribute must be a 2d array.', $matrixValidator->message());
    }

    /** @test */
    public function when_the_rule_is_invoked_but_not_as_2d_array_it_should_fail()
    {
        $matrixValidator = new MatrixValidator();

        $passes = $matrixValidator->passes('matrix', ['scalar']);

        $this->assertFalse($passes);
        $this->assertEquals('The :attribute must be a 2d array.', $matrixValidator->message());

    }

    /** @test */
    public function when_the_rule_is_invoked_as_2d_array_but_with_non_numerical_items_it_should_fail()
    {
        $matrixValidator = new MatrixValidator();

        $passes = $matrixValidator->passes('matrix', [[0,1], [2, 'foo']]);

        $this->assertFalse($passes);
        $this->assertEquals('The :attribute must strictly contain numerical values.', $matrixValidator->message());
    }

    /** @test */
    public function when_some_rows_contain_different_lengths_it_should_fail()
    {
        $matrixValidator = new MatrixValidator();

        $passes = $matrixValidator->passes('matrix', [[0,1], [2]]);

        $this->assertFalse($passes);
        $this->assertEquals('Each row of :attribute must have the same length.', $matrixValidator->message());
    }

}
