<?php

namespace App\DataTransferObjects;

use App\Http\Requests\DepartementRequest;

class DepartementDto
{
    public  function  __construct(public readonly string $name){

    }


    public static function formRequest(DepartementRequest $departementRequest){
       return new self(
           name: $departementRequest->validated(["name"])
       );
    }

}
