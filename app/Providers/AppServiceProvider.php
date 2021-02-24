<?php

namespace App\Providers;

use App\Domain\Calculators\MatrixCalculator;
use App\Domain\Calculators\MatrixMultiplier;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->bindCalculator();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    private function bindCalculator(): void
    {
        $this->app->bind(MatrixCalculator::class, fn() => new MatrixMultiplier());
    }
}
