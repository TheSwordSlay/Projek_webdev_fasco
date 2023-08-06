<?php

namespace App\Http\Controllers;

use App\Models\Resep;
use Inertia\Inertia;
use App\Http\Requests\StoreResepRequest;
use App\Http\Requests\UpdateResepRequest;

class ResepController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Homepage', [
            'resep' => Resep::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreResepRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Resep $resep)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resep $resep)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResepRequest $request, Resep $resep)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resep $resep)
    {
        //
    }
}
