<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Organization;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $users = Auth::user();
        $search = $request->get('q');
        if ($users->organization_id) {
            if($users->roles === 'admin'){
                $query = User::with('organization')->where('organization_id', $users->organization_id)->orderBy('id', 'DESC');
            }else{
                $query = User::with('organization')->where('roles', 'user')->where('organization_id', $users->organization_id)->orderBy('id', 'DESC');
            }
        } else {
            $query = User::with('organization')->orderBy('id', 'DESC');
        }

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        $users = $query->paginate(12)->withQueryString();

        return Inertia::render('User/index', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $organizations = Organization::with('company')->get();
        return Inertia::render('User/addUser', ['organizations' => $organizations]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $org = Auth::user()->organization_id;
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'email' => 'Endereço de e-mail inválido',
            "unique" => 'E-mail já cadastrado',
            'confirmed' => 'As senhas não correspondem',
            'min' => 'As senha deve ter no mínimo :min caracteres',
        ];
        $request->validate(
            [
                'organization_id' => 'required',
                'company_id' => $org !== null ? 'required' : '',
                'name' => 'required',
                'email' => 'required|email|unique:users',
                'roles' => 'required',
                'status' => 'required',
                'password' => ['required', 'min:6', 'confirmed', Rules\Password::defaults()],
                'password_confirmation' => ['required', 'min:6'],
            ],
            $messages,
            [
                'organization_id' => 'organização',
                'company_id' => 'filial',
                'name' => 'nome',
                'password' => 'senha',
                'password_confirmation' => 'repetir a senha',
                'email' => 'e-mail',
                'roles' => 'função',
            ]
        );
        $data['password'] = Hash::make($request->password);
        User::create($data);
        Session::flash('success', 'Usuário cadastrado com sucesso!');
        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        $wt = User::with('organization')->find($user->id);
        $organizations = Organization::with('company')->get();
        return Inertia::render('User/editUser', ['user' => $wt, 'organizations' => $organizations]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Redirect::route('users.show', ['user' => $user->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $data = $request->all();
        // dd($data);
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'email' => 'Endereço de e-mail inválido',
            "unique" => 'E-mail já cadastrado',
            'confirmed' => 'As senhas não correspondem',
            'min' => 'As senha deve ter no mínimo :min caracteres',
        ];
        $request->validate(
            [
                // 'organization_id' => 'required',
                'name' => 'required',
                // 'email' => 'required|email|unique:users',
                'email' => ['required', Rule::unique('users')->ignore($user->id), 'email'],
                'roles' => 'required',
                'status' => 'required',
                'password' => ['nullable', 'min:6', 'confirmed', Rules\Password::defaults()],
                'password_confirmation' => ['nullable', 'min:6'],
            ],
            $messages,
            [
                'organization_id' => 'organização',
                'name' => 'nome',
                'password' => 'senha',
                'password_confirmation' => 'repetir a senha',
                'email' => 'e-mail',
                'roles' => 'função',
            ]
        );
        $data['password'] = $request->password ? Hash::make($request->password) : $user->password;
        $user->update($data);
        Session::flash('success', 'Usuário editado com sucesso!');
        return Redirect::route('users.show', ['user' => $user->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        Session::flash('success', 'Usuário deletado com sucesso');
        return Redirect::route('users.index');
    }
}
