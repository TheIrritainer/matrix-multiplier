<?php


namespace App\Domain\Calculators;


use App\Domain\Entities\Matrix;

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


    public function multiply(): Matrix
    {
        $leftRowLength = $this->left->getRowLength();
        $leftColumnLength = $this->left->getColumnLength();
        for($i = 0; $i < $leftRowLength; ++$i)
        {
            for($j = 0; $j < $leftColumnLength; ++$j)
            {

            }

        }
    }




}
