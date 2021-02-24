<?php


namespace Tests\Unit\Domain\Calculators;


use App\Domain\Calculators\MatrixMultiplier;
use App\Domain\Entities\Matrix;
use Tests\Helpers\MatrixDataSet;
use Tests\TestCase;

class MatrixMultiplierTest extends TestCase
{


    /** @test */
    public function when_trying_to_run_the_validation_method_it_will_throw_an_exception_if_dependencies_are_not_met()
    {
        $matrixMultiplier = new MatrixMultiplier();

        try {
            $matrixMultiplier->canMultiply();
        } catch (\RuntimeException $exception) {
            $this->assertEquals('Missing dependencies for calculator', $exception->getMessage());
            return;
        }

        $this->fail('failed to throw exception');
    }

    /** @test */
    public function when_the_row_length_of_left_does_not_match_column_length_of_top_it_should_fail_to_validate()
    {
        $left = new Matrix([[0, 1], [1, 2]]);
        $top = new Matrix([[0]]);

        $matrixMultiplier = new MatrixMultiplier();
        $matrixMultiplier->setLeft($left);
        $matrixMultiplier->setTop($top);

        $this->assertFalse($matrixMultiplier->canMultiply());
    }

    /** @test */
    public function when_the_matrix_row_length_matches_column_length_of_top_it_should_validate()
    {
        $left = new Matrix([[0, 1], [1, 2]]);
        $top = new Matrix([[0], [-4]]);

        $matrixMultiplier = new MatrixMultiplier();
        $matrixMultiplier->setLeft($left);
        $matrixMultiplier->setTop($top);

        $this->assertTrue($matrixMultiplier->canMultiply());
    }

    /**
     * @dataProvider provideMatrixDataset
     * @test
     */
    public function can_correctly_multipy_the_matrix($leftData, $topData, $expectedData)
    {
        $left = new Matrix($leftData);
        $top = new Matrix($topData);

        $matrixMultiplier = new MatrixMultiplier();
        $matrixMultiplier->setLeft($left);
        $matrixMultiplier->setTop($top);

        $resultingMatrix = $matrixMultiplier->multiply();

        $this->assertInstanceOf(Matrix::class, $resultingMatrix);

        $this->assertEquals($expectedData, $resultingMatrix->jsonSerialize());

    }


    public function provideMatrixDataset()
    {
        $simpleSet = new MatrixDataSet();
        $simpleSet->setLeft([
            [1, 2],
            [4, 3]
        ]);
        $simpleSet->setTop( [
            [1, 2, 3],
            [3, -4, 7]
        ]);
        $simpleSet->setExpected([
            [7, -6, 17],
            [13, -4, 33]
        ]);

        $twoByTwo = new MatrixDataSet();
        $twoByTwo->setLeft([
            [3,2,1],
            [1,0,2]
        ]);
        $twoByTwo->setTop([[1,2], [0, 1], [4, 0]]) ;
        $twoByTwo->setExpected([
            [7,8],
            [9,2]
        ]);

        return [
            $simpleSet->toArray(), $twoByTwo->toArray()

        ];
    }
}
