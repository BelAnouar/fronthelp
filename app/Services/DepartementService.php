<?php

namespace App\Services;



use App\DataTransferObjects\DepartementDto;
use App\Models\Departement;

class DepartementService
{
    /**
     * Create a new class instance.
     */
    public  function  store(DepartementDto $departementDto){
      return  Departement::create(['name'=> $departementDto->name]);
    }
}
