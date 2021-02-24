<?php


namespace App\Domain\Calculators;


use App\Domain\Entities\Matrix;
use Illuminate\Support\Collection;

class MatrixMultiplier
{
    private Matrix $left;

    private Matrix $top;

    /**
     * @param Matrix $left
     * @return MatrixMultiplier
     */
    public function setLeft(Matrix $left): MatrixMultiplier
    {
        $this->left = $left;

        return $this;
    }

    /**
     * @param Matrix $top
     * @return MatrixMultiplier
     */
    public function setTop(Matrix $top): MatrixMultiplier
    {
        $this->top = $top;

        return $this;
    }

    /**
     * @param Matrix $left
     * @param Matrix $top
     * @return bool
     */
    public function canMultiply(): bool
    {
        if (!isset($this->left, $this->top)) {
            throw new \RuntimeException('Missing dependencies for calculator');
        }

        return $this->left->getRowLength() === $this->top->getColumnLength();
    }

    /**
     * @return Matrix
     */
    public function multiply(): Matrix
    {
        $topRowLength = $this->top->getRowLength();
        $leftColumnLength = $this->left->getColumnLength();

        $resultingMatrix = Matrix::instantiate($leftColumnLength, $topRowLength);

        for ($i = 0; $i < $leftColumnLength; ++$i) {
            for ($j = 0; $j < $topRowLength; ++$j) {

                $cellValue = $this->getCellValue($i, $j);
                $resultingMatrix->setCell($i, $j, $cellValue);

            }

        }

        return $resultingMatrix;
    }

    private function getCellValue(int $rowIndex, int $columnIndex)
    {
        $leftRow = $this->left->getRow($rowIndex);

        $topColumn = $this->top->getColumn($columnIndex);

        return $this->multiplyCollections($leftRow, $topColumn);
    }

    private function multiplyCollections(Collection $row, Collection $column)
    {
        $value = 0;
        $rowLength = $row->count();

        for ($i = 0; $i < $rowLength; $i++) {
            $value += $row->get($i) * $column->get($i);
        }

        return $value;
    }


}
