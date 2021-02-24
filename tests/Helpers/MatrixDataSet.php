<?php


namespace Tests\Helpers;

/**
 * Class MatrixDataSet
 * @package Tests\Helpers
 */
class MatrixDataSet
{
    private array $left;

    private array $top;

    private array $expected;

    /**
     * @return array
     */
    public function getLeft(): array
    {
        return $this->left;
    }

    /**
     * @param array $left
     * @return MatrixDataSet
     */
    public function setLeft(array $left): MatrixDataSet
    {
        $this->left = $left;
        return $this;
    }

    /**
     * @return array
     */
    public function getTop(): array
    {
        return $this->top;
    }

    /**
     * @param array $top
     * @return MatrixDataSet
     */
    public function setTop(array $top): MatrixDataSet
    {
        $this->top = $top;
        return $this;
    }

    /**
     * @return array
     */
    public function getExpected(): array
    {
        return $this->expected;
    }

    /**
     * @param array $expected
     * @return MatrixDataSet
     */
    public function setExpected(array $expected): MatrixDataSet
    {
        $this->expected = $expected;
        return $this;
    }

    /**
     * @return array[]
     */
    public function toArray(): array
    {
        return [$this->getLeft(), $this->getTop(), $this->getExpected()];
    }


}
