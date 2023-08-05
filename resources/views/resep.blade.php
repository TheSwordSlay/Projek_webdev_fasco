<!doctype html>
<html data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  @vite('resources/css/app.css')
</head>
<body>

    <!-- Navbar -->
    <div class="w-full navbar bg-neutral text-white">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu contenhttps://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpgt here -->
          <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 h-full bg-base-200">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
    </div>
    </div>
    <!-- akhir navbar -->

    <div class="text-center text-3xl font-medium mt-8">
        Resep
    </div>

    <div class="my-12 mx-12 flex justify-center">
        <img src="https://2.bp.blogspot.com/-VckZ2bd4oH4/WcTUzSJiWBI/AAAAAAAAApY/7L7l2ai44yYZlghoAtrRtTRRM85e8uR7ACEwYBhgL/s1600/Kuliner%2BPedas1.jpg" class="max-h-[550px]"></img>
    </div>

    <div class="grid grid-cols-2 gap-4 ml-5">
        <div class="text-3xl font-normal bg-slate-100">Bahan:
        <div class="text-base"> 
            <ul>
                <li>2 teaspoons aniseed</li>
                <li>4 garlic cloves, finely chopped</li>
                <li>¼ cup fresh lime juice, plus wedges for serving</li>
                <li>¼ cup reduced-sodium soy sauce</li>
                <li>2 tablespoons honey</li>
                <li>8 chicken thighs (about 4 lb.)</li>
            </ul>
        </div>
        </div>

        <div class="text-3xl font-normal">Cara:</div>
        <div class="text-base"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nulla elit, eleifend ut finibus ac, mollis id eros. Phasellus felis mauris, auctor imperdiet orci non, finibus vehicula libero. Aliquam id augue at ex consectetur viverra. Duis sed tincidunt tortor. Vivamus finibus eget mauris tempor aliquam. Suspendisse porta vestibulum lorem et tincidunt. Suspendisse potenti. Vestibulum non volutpat magna. Maecenas semper, ex eget commodo posuere, odio lorem auctor urna, sit amet rhoncus erat ex eget est.

            Quisque auctor ipsum felis, nec venenatis quam ullamcorper eu. Donec convallis orci vitae ultricies tincidunt. Sed at nisi placerat, hendrerit est finibus, gravida nisi. Quisque cursus nulla pulvinar purus consequat, et tempus elit euismod. Praesent tempor odio mi, sit amet maximus turpis convallis eu. Nam id purus sapien. Sed eleifend libero mollis volutpat vulputate. Sed rhoncus dapibus odio, et tempus quam molestie nec. Cras eu leo diam. Integer vitae aliquam arcu, at finibus ante. Vestibulum sit amet tortor sapien. Curabitur condimentum quam quis metus lacinia euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer convallis bibendum felis vitae iaculis.
        </div>
      </div>

</body>
</html>