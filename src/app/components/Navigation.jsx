export default function Navigation() {
  return (
    <div className="navbar bg-base-100 pt-5 px-5">
      <div className="flex-1">
        <a href="/" className="text-xl font-semibold">
          Note
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div class="avatar placeholder">
              <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
                <span></span>
              </div>
            </div>
          </label>
          <ul
            tabindex="0"
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
