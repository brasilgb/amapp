<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Association;
use Illuminate\Http\Request;

class AssociationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getAssociations(Request $request)
    {
        $wquery = Association::where('dtvenda', $request->dt)->where('organization_id', $request->org)->where('filial', $request->fl)->first();
        if($wquery){
            $association = Association::where('dtvenda', $request->dt)->where('organization_id', $request->org)->where('filial', $request->fl)->get();
        }else{
            $lastDate = Association::where('organization_id', $request->org)->where('filial', $request->fl)->orderBy('dtvenda', 'DESC')->first();
            if ($lastDate !== null) 
            $association = Association::where('organization_id', $request->org)->where('dtvenda', $lastDate->dtvenda)->where('filial', $request->fl)->get();
        }

        return response()->json([
            "response" => [
                "success" => true,
                "status" => 201,
                'association' => $association
            ],
        ], 201);
    }
}
