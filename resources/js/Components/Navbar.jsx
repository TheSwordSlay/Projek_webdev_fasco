import { Link } from "@inertiajs/react";
import { BiSolidDownArrowAlt } from "react-icons/bi";
const Navbar = ({user}) => {
    let admin = false
    let name = 'a'
    let loggedIn = false
    if (user) {
      name = user.email
      loggedIn = true
    }

  if (name == 'admin@admin.com') {
      admin = true
    }

    return (
      <div className="mx-12">
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
            <div className="px-1"><Link href={route('all.resep')}><button className="btn btn-ghost">Search Resep</button></Link></div>
            {!user ? 
              <Link href="/dashboard"><div className="px-1"><button className="btn btn-ghost">Post Your Own Resep</button></div></Link>
              : 
              ""
            }
            {loggedIn && !admin ? 
            <Link href="/dashboard"><div className="px-1"><button className="btn btn-ghost">My Resep</button></div></Link>
            : 
            ""}
            {loggedIn && admin ? 
            <Link href="/dashboard-admin"><div className="px-1"><button className="btn btn-ghost">Dashboard Admin</button></div></Link>
            : 
            ""}

          </div>
          <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="">
                        {!user ? <button className="btn btn-ghost mr-8">Login / Register</button> :                 
                        <button className="btn btn-ghost mr-8">Logged In as {user.name} <BiSolidDownArrowAlt size="1.5em"></BiSolidDownArrowAlt></button>}

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
      </div>
    );
}

export default Navbar