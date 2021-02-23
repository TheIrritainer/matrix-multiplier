<?php


namespace App\Domain\Validators;

use Illuminate\Contracts\Validation\Rule;

/**
 * Class MatrixValidator
 * @package App\Domain\Validators
 */
class MatrixValidator implements Rule
{
    private const ERROR_NO_ARRAY = 'The :attribute must be a 2d array with numerical values.';
    private const ERROR_ROW_LENGTH_MISMATCH = 'Each row of :attribute must have the same length.';

    private string $error;


    /**
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value): bool
    {
        if (!$this->isValidArray($value) ) {
            $this->error = self::ERROR_NO_ARRAY;

            return false;
        }
        else if (! $this->hasMatchingRowLengths($value))
        {
            $this->error = self::ERROR_ROW_LENGTH_MISMATCH;

            return false;
        }


        return true;
    }

    /**
     * @return string
     */
    public function message(): string
    {
        return $this->error;
    }

    /**
     * @param $value
     * @return bool
     */
    private function isValidArray($value): bool
    {
        return is_array($value) &&
            $this->isMultiDimensional($value) &&
            $this->hasNumericalValues($value);
    }

    /**
     * @param array $rows
     * @return bool
     */
    private function hasNumericalValues(array $rows): bool
    {
        $nonNumericalFilter = fn($row) => !is_numeric($row);

        $firstNonNumerical = collect($rows)->first(function (array $row) use ($nonNumericalFilter) {
            return collect($row)->filter($nonNumericalFilter)->count() > 0;
        });

        if ($firstNonNumerical) {
            return false;
        }

        return true;
    }

    /**
     * @param array $rows
     * @return bool
     */
    private function isMultiDimensional(array $rows): bool
    {
        if (count($rows) === 0) {
            return false;
        }

        $nonArrayFilter = fn($row) => !is_array($row);

        return collect($rows)->filter($nonArrayFilter)->count() === 0;
    }

    /**
     * @param array $rows
     * @return bool
     */
    private function hasMatchingRowLengths(array $rows): bool
    {
        return collect($rows)->map(fn(array $row) => count($row))
                ->unique()->count() === 1;
    }
}
