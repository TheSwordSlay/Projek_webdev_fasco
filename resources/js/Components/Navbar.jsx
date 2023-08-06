import { Link } from "@inertiajs/react";

const Navbar = ({user}) => {
    return (
<div className="navbar bg-neutral text-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-white normal-case text-xl">KulinerFest</a>
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
</div>

    );
}

export default Navbar