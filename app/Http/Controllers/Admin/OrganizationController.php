<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Association;
use App\Models\Organization;
use App\Models\Sale;
use App\Models\Settings;
use App\Models\Total;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $query = Organization::with('company')->orderBy('id', 'DESC');
        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        $organizations = $query->paginate(12)->withQueryString();;
        return Inertia::render('Organization/index', ['organizations' => $organizations]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Organization/addOrganization');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $messages = [
            'required' => 'A :attribute deve ser preenchida!',
            'cnpj' => 'CNPJ inválido',
            'unique' => 'CNPJ já está em uso',
        ];
        $request->validate(
            [
                'name' => 'required',
                'cnpj' => 'required|cnpj|unique:organizations'
            ],
            $messages,
            [
                'name' => 'organização'
            ]
        );

        $organization = Organization::create($data);
        Settings::create(['organization_id' => $organization->id]);
        Session::flash('success', 'Organização cadastrada com sucesso!');
        return redirect()->route('organizations.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Organization $organization)
    {
        return Inertia::render('Organization/editOrganization', ['organization' => $organization]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Organization $organization)
    {
        return redirect()->route('organizations.show', ['organization' => $organization]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Organization $organization)
    {
        $data = $request->all();
        $messages = [
            'required' => 'A :attribute deve ser preenchida!',
            'cnpj' => 'CNPJ inválido',
            'unique' => 'CNPJ já está em uso',
        ];
        $request->validate(
            [
                'name' => 'required',
                'cnpj' => ['required', Rule::unique('organizations')->ignore($organization->id), 'cnpj'],
            ],
            $messages,
            [
                'name' => 'organização'
            ]
        );
        $organization->update($data);
        Session::flash('success', 'Organização alterada com sucesso!');
        return redirect()->route('organizations.show', ['organization' => $organization->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Organization $organization)
    {
        $organization->delete();
        Session::flash('success', 'Organização deletada com sucesso');
        return redirect()->route('organizations.index');
    }

    public function deleteorgdata($id)
    {
        $sale = Sale::where('organization_id', $id);
        $sale->delete();
        $associacao = Association::where('organization_id', $id);
        $associacao->delete();
        $total = Total::where('organization_id', $id);
        $total->delete();
        Session::flash('success', 'Base de dados da organização limpa com sucesso!');
        return redirect()->route('organizations.index');
    }
}
