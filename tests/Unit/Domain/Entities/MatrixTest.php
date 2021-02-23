<?php


namespace Tests\Unit\Domain\Entities;


use App\Domain\Entities\Matrix;
use Illuminate\Support\Collection;
use Tests\TestCase;

class MatrixTest extends TestCase
{
    private array $rawData = [];

    protected function setUp(): void
    {
        parent::setUp();

        $this->rawData = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    }

    /** @test */
    public function can_instantiate_matrix_and_dump_it()
    {
        $matrix = new Matrix($this->rawData);

        $this->assertEquals($this->rawData, $matrix->jsonSerialize());
    }

    /** @test */
    public function can_get_row_at_index()
    {
        $matrix = new Matrix($this->rawData);

        $row = $matrix->getRow(1);

        $this->assertInstanceOf(Collection::class, $row);
        $this->assertEquals([4, 5, 6], $row->toArray());
    }

    /** @test */
    public function when_an_invalid_index_is_requested_it_should_throw_an_exception()
    {
        $matrix = new Matrix($this->rawData);

        try {
            $matrix->getRow(5);
        } catch(\OutOfBoundsException $exception)
        {
            $this->assertEquals('row key out of bounds', $exception->getMessage());
            return;
        }

        $this->fail('failed to throw exception');;
    }

    /** @test */
    public function can_get_column()
    {
        $matrix = new Matrix($this->rawData);

        $column = $matrix->getColumn(1);

        $this->assertEquals([2, 5, 8], $column->toArray());
    }

    /** @test */
    public function when_the_column_key_is_out_of_bounds_throw_exception()
    {
        $matrix = new Matrix($this->rawData);

        try {
            $matrix->getColumn(5);
        } catch(\OutOfBoundsException $exception)
        {
            $this->assertEquals('column key out of bounds', $exception->getMessage());
            return;
        }

        $this->fail('failed to throw exception');
    }

    /** @test */
    public function can_instantiate_matrix_will_zero_values()
    {
        $matrix = Matrix::instantiate(4, 3);

        $this->assertEquals([ [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],], $matrix->jsonSerialize());
    }

    /** @test */
    public function cannot_instantiate_with_bogus_row_count_or_col_count_()
    {
        try {
            Matrix::instantiate(0, 2);
        } catch(\OutOfBoundsException $exception)
        {
            $this->assertEquals('matrix must contain at least one row and at least one column', $exception->getMessage());
            return;
        }

        $this->fail('failed to throw exception');
    }

    /** @test */
    public function can_manipulate_cell_values()
    {
        $matrix = Matrix::instantiate(2, 2);

        $matrix->setCell(1, 1, 42);
        $matrix->setCell(0, 0, 12);

        $this->assertEquals([[12, 0], [0, 42]], $matrix->jsonSerialize());
    }

}
