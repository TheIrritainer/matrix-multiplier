<?php


namespace App\Domain\Calculators;


use App\Domain\Entities\Matrix;

/**
 * Interface MatrixCalculator
 * @package App\Domain\Calculators
 */
interface MatrixCalculator
{
    public function canCalculate(): bool;

    public function calculate(): Matrix;

    public function setLeft(Matrix $matrix): self;

    public function setTop(Matrix  $matrix): self;
}
