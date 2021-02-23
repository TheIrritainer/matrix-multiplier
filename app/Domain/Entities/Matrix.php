<?php


namespace App\Domain\Entities;


use Illuminate\Support\Collection;

/**
 * Class Matrix
 *
 * @package App\Domain\Entities
 */
class Matrix implements \JsonSerializable
{
    /**
     * @var Collection
     */
    private Collection $rows;

    /**
     * Matrix constructor.
     * @param array $rows
     */
    public function __construct(array $rows)
    {
        $this->rows = collect($rows)->map((fn(array $row) => collect($row)));
    }

    /**
     * @param int $rowCount
     * @param int $columnCount
     * @return Matrix
     */
    public static function instantiate(int $rowCount, int $columnCount)
    {
        if ($rowCount < 1 || $columnCount < 1)
        {
            throw new \OutOfBoundsException('matrix must contain at least one row and at least one column');
        }

        $data = array_fill(0, $rowCount, array_fill(0, $columnCount, 0));

        return new self($data);
    }

    /**
     * @param int $index
     * @return Collection
     */
    public function getRow(int $index): Collection
    {
        if (! $this->rows->has($index))
        {
            throw new \OutOfBoundsException('row key out of bounds');
        }

        return $this->rows->get($index);
    }

    /**
     * @return int
     */
    public function getRowLength(): int
    {
        return $this->getRow(0)->count();
    }

    /**
     * @return int
     */
    public function getColumnLength(): int
    {
        return $this->getColumn(0)->count();
    }

    /**
     * @param int $row
     * @param int $column
     * @param int|float $value
     * @return $this
     */
    public function setCell(int $rowIndex, int $columnIndex, $value): self
    {
        $row = $this->getRow($rowIndex);
        $row->splice($columnIndex, 1, $value);

        return $this;
    }

    /**
     * @param int $index
     * @return Collection
     */
    public function getColumn(int $index): Collection
    {
        $column = $this->rows->pluck($index)
            ->filter(fn($value) => $value !== null);

        if ($column->count() < $this->rows->count()) {
            throw new \OutOfBoundsException('column key out of bounds');
        }


        return $column;
    }

    /**
     * @return array
     */
    public function jsonSerialize(): array
    {
        return $this->rows->map(fn(Collection $cells) => $cells->toArray())
            ->toArray();
    }


}
