<?php

namespace App\Http\Controllers\API;

use App\DataTransferObjects\DepartementDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\DepartementRequest;
use App\Http\Resources\DepatementResource;
use App\Models\Departement;
use App\Services\DepartementService;
use Illuminate\Http\Request;

class DepartementController extends Controller
{
    protected  $departementService;
    public function __construct(DepartementService $departementService)
    {
        $this->departementService =$departementService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DepatementResource::collection(Departement::all());
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
    public function store(DepartementRequest $request)
    {
        $departement= $this->departementService->store(DepartementDto::formRequest($request));

           return new DepatementResource($departement);


    }

    /**
     * Display the specified resource.
     */
    public function show(Departement $departement)
    {
       return new DepatementResource(($departement));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Departement $departement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Departement $departement)
    {
         $departement->update(["name"=>$request->name]);
        return new DepatementResource($departement);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Departement $departement)
    {
        $departement->delete();
    }
}
