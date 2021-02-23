<?php


namespace App\Domain\Exceptions;


use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;


class InvalidMatrixException extends \RuntimeException implements Responsable
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function toResponse($request): JsonResponse
    {
        return response()->json([
            'message' => $this->message,
        ], Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
