<?php


namespace App\Http\Controllers\Matrix;


use App\Domain\Entities\Matrix;
use App\Domain\Exceptions\InvalidMatrixException;
use App\Domain\Validators\MatrixValidator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class MultiplierController extends Controller
{
    use ValidatesRequests;

    public function __invoke(Request $request)
    {
        $this->validate($request, [
            'left' => ['array', 'required', new MatrixValidator()],
            'top' => ['array', 'required', new MatrixValidator()],
        ]);

        $leftMatrix = new Matrix($request->input('left'));
        $topMatrix = new Matrix($request->input('top'));
        if (! $this->canMultiply($leftMatrix, $topMatrix)) {
            throw new InvalidMatrixException('left row length must be equal to top column length');
        }



    }

    private function canMultiply(Matrix $left, Matrix $top): bool
    {
        return $left->getRowLength() === $top->getColumnLength();
    }


}
