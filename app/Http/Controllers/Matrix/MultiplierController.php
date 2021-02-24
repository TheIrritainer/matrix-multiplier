<?php


namespace App\Http\Controllers\Matrix;


use App\Domain\Calculators\MatrixCalculator;
use App\Domain\Calculators\MatrixMultiplier;
use App\Domain\Entities\Matrix;
use App\Domain\Exceptions\InvalidMatrixException;
use App\Domain\Validators\MatrixValidator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MultiplierController extends Controller
{
    use ValidatesRequests;

    public function __invoke(Request $request): JsonResponse
    {
        $this->validate($request, [
            'left' => ['array', 'required', new MatrixValidator()],
            'top' => ['array', 'required', new MatrixValidator()],
        ]);

        $calculator = $this->makeCalculator($request);
        $resultMatrix = $calculator->calculate();

        return response()->json(['result' => $resultMatrix], Response::HTTP_OK);
    }

    /**
     * @param Request $request
     * @return MatrixMultiplier
     */
    private function makeCalculator(Request $request): MatrixCalculator
    {
        $leftMatrix = new Matrix($request->input('left'));
        $topMatrix = new Matrix($request->input('top'));

        /** @var MatrixCalculator $matrixCalculator */
        $matrixCalculator = app()->make(MatrixCalculator::class);

        $matrixCalculator
            ->setLeft($leftMatrix)
            ->setTop($topMatrix);

        if (!$matrixCalculator->canCalculate()) {
            throw new InvalidMatrixException('left row length must be equal to top column length');
        }

        return $matrixCalculator;
    }




}
