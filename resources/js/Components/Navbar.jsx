import { Link } from "@inertiajs/react";

const Navbar = ({user}) => {
    return (
      <div className="mx-12">
      {/* <div className="my-3"></div> */}
      {/* <hr class="drop-shadow-2xl" /> */}
        {/* <div className="navbar bg-neutral text-white">
          <div className="flex">
            <Link href="/" method="GET" as="button"><span className="btn btn-ghost normal-case text-xl">KulinerFest</span></Link>
          </div>
          <div className="flex-1">
            <p className="text-center">a saa</p>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-[50] relative text-black">
                {!user ? 
                  <>
                    <li ><Link href={route('login')} as="button">Login</Link></li>
                    <li><Link href={route('register')} as="button">Register</Link></li>       
                  </>
                  : 
                  <>
                  <li>
                  <Link className="justify-between" href={route('dashboard')} as="button">
                    Dashboard
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li><Link>Settings</Link></li>
                <li><Link href={route('logout')} method="post" as="button">Logout</Link></li>
                  </>
                }
              </ul>
            </div>
          </div>
        </div> */}
<div className="flex justify-center mb-5">
  <object data="/img/kuliner-fest.svg" type="" height="100"></object>
</div>      
<hr className="h-1 bg-neutral" />
<div className="navbar bg-neutral-content text-neutral">
  <div className="navbar-start">
    <Link href="/" method="GET" as="button"><a className="btn btn-ghost normal-case text-xl">KulinerFest</a></Link>
  </div>
  <div className="navbar-center flex">
    <div className="px-1"><Link href={route('homepage')}><button className="btn btn-ghost">Home</button></Link></div>
    <div className="px-1"><button className="btn btn-ghost">Resep</button></div>
    <Link href="/dashboard"><div className="px-1"><button className="btn btn-ghost">My Resep</button></div></Link>
    {/* <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>

      <li><a>Item 3</a></li>
    </ul> */}
  </div>
  <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="">
                {!user ? <button className="btn btn-ghost mr-8">Login</button> :                 
                <button className="btn btn-ghost mr-8">Logged In</button>}

              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-[50] relative text-black">
                {!user ? 
                  <>
                    <li ><Link href={route('login')} as="button">Login</Link></li>
                    <li><Link href={route('register')} as="button">Register</Link></li>       
                  </>
                  : 
                  <>
                  <li>
                  <Link className="justify-between" href={route('dashboard')} as="button">
                    My Resep
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li><Link href={route('profile.edit')}>Edit Profile</Link></li>
                <li><Link href={route('logout')} method="post" as="button">Logout</Link></li>
                  </>
                }
              </ul>
            </div>
  </div>
</div>
<hr className="h-1 bg-neutral" />

        {/* <hr class="drop-shadow-2xl my-3" /> */}
      </div>
    );
}

export default Navbar