<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [    'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'tag' => $this->tag,
            'user' => new UserResource($this->whenLoaded('user')),
            'file_attachment' => new FileAttachmentResource($this->whenLoaded('FileAttachament')),];
    }
}
