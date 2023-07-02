export default function Notes() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="mb-2">
          <h1 className="font-medium">Create Note</h1>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" className="input input-bordered w-full"></input>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            rows="10"
            placeholder="Note"
          ></textarea>
        </div>

        <div>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}
