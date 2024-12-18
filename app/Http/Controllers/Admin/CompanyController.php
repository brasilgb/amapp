<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $org = $request->get('o');

        $query = Company::with('organization')->orderBy('id', 'DESC');
        if ($search) {
            $query->where('subname', 'like', '%' . $search . '%')
            ->orWhere('cnpj', 'like', '%' . $search . '%');
        }
        if($org) {
            $query->Where('organization_id', $org);
        }

        $companies = $query->paginate(12)->withQueryString();
        return Inertia::render('Admin/Company/index', ['companies' => $companies]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $organizations = Organization::orderBy('name', 'ASC')->get();
        return Inertia::render('Admin/Company/addComp', ['organizations' => $organizations]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'cnpj' => 'CNPJ inválido',
            'unique' => 'CNPJ já está em uso',
        ];
        $request->validate(
            [
                'organization_id' => 'required',
                'corpreason' => 'required',
                'subnumber' => 'required',
                'subname' => 'required',
                'address' => 'required',
                'number' => 'required',
                'cep' => 'required',
                'county' => 'required',
                'state' => 'required',
                'neighborhood' => 'required',
                'cnpj' => 'required|cnpj|unique:companies',
                'statereg' => 'required|inscricao_estadual_rs',
                'telephone' => 'required',
            ],
            $messages,
            [
                'organization_id' => 'organização',
                'corpreason' => 'razão social',
                'subnumber' => 'número filial',
                'subname' => 'nome filial',
                'address' => 'endereço',
                'number' => 'número',
                'county' => 'município',
                'state' => 'estado',
                'neighborhood' => 'bairro',
                'statereg' => 'inscrição estadual',
                'telephone' => 'telefone',
            ]
        );

        Company::create($data);
        Session::flash('success', 'Filial cadastrado com sucesso!');
        return redirect()->route('companies.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        $organizations = Organization::orderBy('name', 'ASC')->get();
        $withorg = Company::with('organization')->find($company->id);
        return Inertia::render('Admin/Company/editComp', ['companies' => $withorg, 'organizations' => $organizations]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {
        return Redirect::route('companies.show', ['company' => $company->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Company $company)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'cnpj' => 'CNPJ inválido',
            'unique' => 'CNPJ já está em uso',
        ];
        $request->validate(
            [
                'subnumber' => 'required',
                'subname' => 'required',
                'address' => 'required',
                'number' => 'required',
                'cep' => 'required',
                'county' => 'required',
                'state' => 'required',
                'neighborhood' => 'required',
                'cnpj' => 'unique:companies,cnpj,' . $company->id,
                'statereg' => 'required|inscricao_estadual_rs',
                'telephone' => 'required',
            ],
            $messages,
            [
                'subnumber' => 'número filial',
                'subname' => 'nome filial',
                'address' => 'endereço',
                'number' => 'número',
                'county' => 'município',
                'state' => 'estado',
                'neighborhood' => 'bairro',
                'statereg' => 'inscrição estadual',
                'telephone' => 'telefone',
            ]
        );
        $company->update($data);
        Session::flash('success', 'Empresa editada com sucesso!');
        return Redirect::route('companies.show', ['company' => $company->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        $company->delete();
        Session::flash('success', 'Filial deletado com sucesso');
        return Redirect::route('companies.index');
    }
}
