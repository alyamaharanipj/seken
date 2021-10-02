<?php


namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use App\Model\Barang;
use App\Model\Penjual;
use Illuminate\Http\Request;
use App\Model\foto;
class BarangController extends Controller
{
    // Show All Barang data
    public function index() {
        $barang = Barang::all();
        return response()->json($barang);
    }

    public function indexbymin() {
        $barang = Barang::orderBy('harga','asc')->get();
        return response()->json($barang);
    }

    public function indexbymax() {
        $barang = Barang::orderBy('harga','desc')->get();
        return response()->json($barang);
    }

    public function indexbynameasc() {
        $barang = Barang::orderBy('nama_barang','asc')->get();
        return response()->json($barang);
    }
    
    public function indexbynamedesc() {
        $barang = Barang::orderBy('nama_barang','desc')->get();
        return response()->json($barang);
    }

    public function indexbybetween(Request $request) {
        $barang = Barang::whereBetween('harga',[$request->data1,$request->data2])->get();
        return response()->json($barang);
    }
  
    // findPenjual
    public function findSeller($id)
    {
        $penjual= Penjual::find($id);
        return response()->json($penjual);
    }

    public function findDetail($id){
        $detail = DB::table('barang')
        ->join('penjual', 'barang.id_penjual', '=', 'penjual.id')
        ->select('barang.*', 'penjual.nama', 'penjual.kontak')
        ->where('barang.id', '=', $id)
        ->get();
        return response()->json($detail);
    }

    public function findStore($id_penjual){
        $detail = DB::table('barang')
        ->join('penjual', 'barang.id_penjual', '=', 'penjual.id')
        ->select('barang.*', 'penjual.nama', 'penjual.kontak')
        ->where('barang.id_penjual', '=', $id_penjual)
        ->get();
        return response()->json($detail);
    }


    // Post New Barang
    public function create(Request $request) {
        $barang = new Barang;
        $barang->id_penjual = $request->id_penjual; // should delete it later (?)
        $barang->nama_barang = $request->nama_barang;
        $barang->kategori = $request->kategori;
        $barang->deskripsi= $request->deskripsi;
        $barang->harga= $request->harga;
     

        $image = $request->myFile;
        $nama_file = $image->getClientOriginalName();
        $tujuan_upload = 'data_file';
        $image->move($tujuan_upload,$nama_file);  
        $barang->foto = $nama_file ;
        $barang->save();
        return response()->json($barang);
    }

    public function buat(Request $request) {
        $foto = new foto;
        $image = $request->myFile;
        $nama_file = $image->getClientOriginalName();
        $tujuan_upload = 'data_file';
        $image->move($tujuan_upload,$nama_file);  
        $foto->foto = $nama_file ;
        $foto->save();
        return response()->json($foto);
    }
    // find product by id
    
        public function findProductById($id)
        {
            $barang= Barang::find($id);
            return response()->json($barang);
        }

    // Show detail barang
    public function show($id)
    {
        $barang = Barang::where('id_penjual','Like','%'.$id.'%')->get();
        return response()->json($barang);
    }

    public function update($id,Request $request)
    {
        if($request->nama_barang == null)
        {
             $res['nama_barang']=false;
            return response($res,500);
        }
        if($request->kategori == null)
        {
             $res['kategori']=false;
             return response($res,500);
            }
            if($request->myFile == null)
            {
                $res['file']=false;
                return response($res,500);
            }
        if($request->harga == null)
        {
            $res['harga']=false;
            return response($res,500);
        }
        if($request->deskripsi == null)
        {
            $res['deskripsi']=false;
            return response($res,500);
        } 
        $barang= Barang::find($id);
        $barang->id_penjual = $request->id_penjual; // should delete it later (?)
        $barang->nama_barang = $request->input('nama_barang');
        $barang->kategori = $request->input('kategori');
        $barang->deskripsi = $request->input('deskripsi');
        $barang->harga = $request->input('harga');
        $image = $request->myFile;
        $nama_file = $image->getClientOriginalName();
        $tujuan_upload = 'data_file';
        $image->move($tujuan_upload,$nama_file);  
        $barang->foto = $nama_file ;
        $barang->save();
        return response()->json($barang);
    }

    public function destroy($id)
    {
        $barang = Barang::find($id);
        $barang->delete();
        return response()->json('barang removed successfully');
    }
    public function destroyallproduct($id)
    {
        $barang = Barang::where('id_penjual','Like','%'.$id.'%')->get()->each->delete();;
       // $barang->delete();
        return response()->json($barang);

    //     
    //     return response()->json('barang removed successfully');
    // }
    }

    // Show Barang sort by category
    public function showCategory($kategori)
    {
        $barang = Barang::where('kategori','LIKE','%'.$kategori.'%')->get();
        return response()->json($barang);
    }
    public function showProductsFromMerchant($username)
    {
        $id_penjual = Penjual::where('username',$username)->pluck('id_penjual');

        if($id_penjual) {
            $barang = Barang::where('id_penjual',$id_penjual)->get();
            return response()->json($barang);
        } else {
            $res['status'] = false;
            $res['message'] = 'User not found';
            return response($res, 404);
        }

    }
    public function Category($kategori)
    {
        $barang = Barang::where('kategori','Like','%'.$kategori.'%')->get();
        
        return response()->json($barang);

    }
    public function findProduct($product)
    {
        $barang = Barang::where('nama_barang','Like','%'.$product.'%')->get();
        
        return response()->json($barang);
    }
    public function editbarang($id,Request $request)
    {
        
        if($request->nama_barang == null)
        {
             $res['nama_barang']=false;
            return response($res,500);
        }
        if($request->kategori == null)
        {
             $res['kategori']=false;
             return response($res,500);
            }
            
        if($request->harga == null)
        {
            $res['harga']=false;
            return response($res,500);
        }
        if($request->deskripsi == null)
        {
            $res['deskripsi']=false;
            return response($res,500);
        } 
        $barang= Barang::find($id);
        $barang->id_penjual = $request->id_penjual; // should delete it later (?)
        $barang->nama_barang = $request->nama_barang;
        $barang->kategori = $request->kategori;
        $barang->deskripsi= $request->deskripsi;
        $barang->harga= $request->harga;

        $image = $request->myFile;
        $nama_file = $image->getClientOriginalName();
        $tujuan_upload = 'data_file';
        $image->move($tujuan_upload,$nama_file);  
        $barang->foto = $nama_file ;
        $barang->save();
        return response()->json($barang);
    }
    public function editsold($id,Request $request){
        $barang= Barang::find($id);
        $barang->isSold = $request->isSold; 
        $barang->save();
        return response()->json($barang);

    }
}