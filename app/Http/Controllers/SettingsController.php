<?php

namespace App\Http\Controllers;

use App\Models\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function index()
    {
        $settings = Settings::where('organization_id', Auth::user()->organization_id)->first();
        if (!$settings) {
            Settings::create(['organization_id' => Auth::user()->organization_id]);
        }
        $settings = Settings::first();
        return Inertia::render('Admin/Settings/index', ['settings' => $settings]);
    }

    public function update(Request $request, Settings $setting)
    {
        $data = $request->all();
        $storePath = public_path('storage/images');
        if ($request->hasfile('logo')) {
            $fileName = time() . '.' . $request->logo->extension();
            $request->logo->move($storePath, $fileName);
            if (file_exists($storePath . DIRECTORY_SEPARATOR . $setting->logo && $setting->logo)) {
                unlink($storePath . DIRECTORY_SEPARATOR . $setting->logo);
            }
        }
        $data['logo'] = $request->hasfile('logo') ? $fileName : $setting->logo;
        $setting->update($data);
        Session::flash('success', 'Dados da empresa editado com sucesso!');
        return Redirect::route('settings.index');
    }
}
