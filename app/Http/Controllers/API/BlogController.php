<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class BlogController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $blogs = Blog::with('user', 'FileAttachament')->get();
        return BlogResource::collection($blogs);
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
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tag' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
        ]);


        $blog = Blog::create(array_merge($validatedData, ['user_id' => Auth::user()->id]));


        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->store('/public/blog_images');
            $filePathWithoutPublic = str_replace('public/', '', $imagePath);

            $filename = $image->getClientOriginalName();

            $blog->FileAttachament()->create([
                'filename' => $filename,
                'filePath' => $filePathWithoutPublic,
                'type' => 'image',
                "uuid" => Str::uuid()
            ]);
        }


        return new BlogResource($blog);
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        return new BlogResource($blog);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        $blog->update([...$request->all()]);
        return new BlogResource($blog);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
      $blog->delete();
    }
}
