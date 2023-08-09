<!DOCTYPE html>
<html data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  @vite('resources/css/app.css')
</head>
<body class="flex justify-center items-center h-screen bg-slate-200">
<div class="columns-2">
  <div class="w-full flex justify-center items-center pt-24">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <h2 class="card-title">Login Now!</h2>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">LOGIN</button>
        </div>
      </div>
    </div>
  </div>
  <div class="relative min-h-screen">
    <img class="w-full aspect-square brightness-50" src="https://i.pinimg.com/originals/c9/bd/85/c9bd85ee50f4edf984cbf363fc8442ae.jpg" />
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 max-w-md text-center">
      <h1 class="mb-5 text-5xl font-bold text-white">Welcome Kulinerfest</h1>
      <p class="mb-5 text-xl font-normal text-white"">Selamat berbagi resep masakan anda di website kulinerfest.</p>
      <button class="btn btn-primary text-white">SIGN UP</button>
    </div>
  </div>
</div>
</body>
</html>
