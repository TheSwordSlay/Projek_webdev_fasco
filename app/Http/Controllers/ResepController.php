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

    // nunjukin untuk homepage
    // public function homepage()
    // {
    //     return Inertia::render('Homepage', [
    //         'resep' => Resep::all()
    //     ]);
    // }

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
        function checkFullEmpty($array){
            $a = false;
            for ($i = 0; $i<sizeof($array); $i++){
                if($array[$i] == "") {
                    $a = true;
                }
            }
            return $a;
        }

        $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'tipe' => 'required',
            'image' => 'required|image|file',
            'daerah' => 'required'
       ]);

       if(checkFullEmpty($request->trueBahan) || checkFullEmpty($request->trueLangkah)){
            return redirect()->back()->with('message', 'Data yang diisi belum lengkap');
       } else {
           $resep = new Resep();
           $resep->title = $request->title;
           $resep->deskripsi = $request->description;
           $resep->tipe = $request->tipe;
           $resep->gambar = $request->file('image')->store('post-images');
           $resep->user_id = auth()->user()->id;
           $resep->langkah = $request->trueLangkah;
           $resep->bahan = $request->trueBahan;
           $resep->daerah = $request->daerah;
           $resep->like = 0;
           $resep->dislike = 0;
           $resep->save();
           return to_route('dashboard')->with('message', 'Resep berhasil di post');
       }
    }

    /**
     * Display the specified resource.
     */
    public function show(Resep $resep)
    {
        return Inertia::render('Resep', [
            "resep" => $resep
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */

    public function showDashboard(Resep $resep) {
        $myResep = $resep::OrderByDesc('id')->where('user_id', auth()->user()->id)->get();
        return Inertia::render('Dashboard', [
            "myResep" => $myResep,
            "accName" => auth()->user()
        ]);
    }

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
    public function destroy(StoreResepRequest $request)
    {
        $data = Resep::find($request->id);
        if ($data->user_id == auth()->user()->id) {
            $data->delete();
            return to_route('dashboard')->with('message', 'delete data berhasil');
        } else {
            return to_route('dashboard')->with('message', 'delete unauthorized');
        }
    }
}
