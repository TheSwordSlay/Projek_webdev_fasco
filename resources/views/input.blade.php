<!doctype html>
<html data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  @vite('resources/css/app.css')
</head>
<body>
<div class="hero min-h-screen bg-slate-100">
    <div class="flex justify-center my-12">
    <div class="card w-[500px] bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Masukkan Foto</span>
                  </label>
                <input type="file" class="file-input file-input-bordered file-input-info w-full max-w-xs" />
                <label class="label">
                  <span class="label-text">Nama Makanan</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <label class="label">
                </label>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Deskripsi</span>
                    </label>
                    <textarea class="textarea textarea-bordered" placeholder="Type here"></textarea>
                </div>
                <div class="form-control">
                    <label class="label">
                      <span class="label-text">Pilih Tipe Makanan</span>
                    </label>
                    <select class="select select-bordered w-full max-w-xs">
                        <option disabled selected>Tipe Makanan</option>
                        <option>Makanan Ringan</option>
                        <option>Makanan Sedang</option>
                        <option>Makanan Berat</option>
                      </select>
<div class="form-control">
                    <label class="label">
                      <span class="label-text">Pilih Asal Makanan</span>
                    </label>
                    <select class="select select-bordered w-full max-w-xs">
                        <option disabled selected>Provinsi</option>
                        <option>Sumatera Selatan</option>
                        <option>Sumatera Utara</option>
                        <option>Sumatera Barat</option>
                        <option>Jambi</option>
                        <option>Lampung</option>
                        <option>Riau</option>
                        <option>Aceh</option>
                        <option>Riau</option>
                        <option>Bangka Belitung</option>
                        <option>Kalimantan Barat</option>
                        <option>Kalimantan Timur</option>
                        <option>Kalimantan Selatan</option>
                        <option>Kalimantan Tengah</option>
                        <option>Kalimantan Utara</option>
                        <option>Banten</option>
                        <option>Jakarta</option>
                        <option>Jawa Barat</option>
                        <option>Jawa Tengah</option>
                        <option>Jawa Timur</option>
                        <option>Bali</option>
                        <option>Nusa Tenggara Timur</option>
                        <option>Nusa Tenggara Barat</option>
                        <option>Gorontalo</option>
                        <option>Sulawesi Barat</option>
                        <option>Sulawesi Timur</option>
                        <option>Sulawesi Selatan</option>
                        <option>Sulawesi Tengah</option>
                        <option>Sulawesi Utara</option>
                        <option>Maluku</option>
                        <option>Papua</option>
                    
                      </select>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Bahan</span>
                    </label>
                    <textarea class="textarea textarea-bordered" placeholder="Type here"></textarea>
                </div>
                <div class="form-control w-full max-w-xs mb-10">
                    <label class="label">
                      <span class="label-text">Cara Membuat</span>
                    </label>
                    <textarea class="textarea textarea-bordered" placeholder="Type here"></textarea>
                    <button class="btn mt-7 bg-blue-400 hover:bg-sky-700 text-white">Sumit</button>
                </div>

              </div>
        </div>
    </div>


</body>
</html>