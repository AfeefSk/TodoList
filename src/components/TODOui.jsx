function TODOui({ todos_completed, total_todos }) {
    return (
      <section>
        <div className="flex gap-6">
        <div className="">
          <p className="text-8xl ">Task Done</p>
          <p className="text-5xl ">Keep it up</p>
        </div>
        <div className="text-7xl p-5 rounded-full  bg-green-600 shadow-2xl border-4">
          {todos_completed}/{total_todos}
        </div>
        </div>
      </section>
    );
  }
  export default TODOui;