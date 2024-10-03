<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

use function Pest\Laravel\json;

class ProductController extends Controller
{
    public function list()
    {
        try{
            $data= Product::all();
            return response()->json($data);
        } catch(Exception $error){
            return response()->json([
                'message'=>'Error en la obtencion de productos',
                'error'=>$error->getMessage()
            ],500);
        }
    }
    public function findById($id)
    {
        try {
            $data = Product::find($id);
            if(!$data){
                return response()->json([
                    'message'=>'Producto no encontrado'
                ],404);
            }
            return response()->json([
                'producto'=>$data
            ]);
        } catch (\Exception $error) {
            return response()->json([
                'message'=>'Error en la obtencion de un producto por su id.',
                'error'=>$error->getMessage()
            ],500);
        }
    }
    public function create(Request $request)
    {
        $validate = $request->validate([
            'name'=> 'required|string|max:50|unique:products,name',
            'description'=>'required|string|max:255',
            'price'=>'required|numeric|min:0',
            'stock'=>'required|integer|min:0',
        ]);

        try {
            $data = Product::create($validate);
            return response()->json([
                'message' => 'Producto creado correctamente!',
                'product' => $data
            ],201);
        } catch (\Exception $error) {
            return response()->json([
                'message'=>'Error al crear un producto',
                'error'=>$error->getMessage()
            ],500);
        }

    }

    public function edit(Request $request,$id)
    {
        $data = Product::find($id);
        if(!$data){
            return response()->json([
                'message'=>'Producto no encontrado'
            ],404);
        }

        $validate = $request->validate([
            'name'=> 'required|string|max:50',
            'description'=>'required|string|max:255',
            'price'=>'required|numeric|min:0',
            'stock'=>'required|integer|min:0',
        ]);

        try {
            $data->update($validate);
            return response()->json([
                'message'=>'Producto actualizado correctamente.',
                'product'=> $data
            ],200);
            
        } catch (\Exception $error) {
            return response()->json([
                'message' => 'Error al actualizar el producto',
                'error' => $error->getMessage()
            ], 500);  
        }
    }
    public function delete($id)
    {
        try{
            $data = Product::find($id);
            if(!$data){
                return response()->json([
                'message'=>'Producto no encontrado'
                ],404);
            }

            $data->delete();
        
            return response()->json([
                'message'=>"Producto con el id: $id eliminado correctamente.",
            ],200);
            
        } catch (\Exception $error) {
            return response()->json([
                'message' => 'Error al eliminar el producto',
                'error' => $error->getMessage()
            ], 500);  
        }


    }
}
