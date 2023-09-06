

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
            {/* TO DO Card */}
            <div className="w-96 space-y-5 p-4 rounded-md border-2">
                <h3 className="border-b-2 border-slate-400 font-semibold text-lg">To Do</h3>
                <div className="bg-[#ff0000] h-40 grid place-items-center text-white text-2xl font-bold rounded-md">
                    <h1>TO DO</h1>
                </div>
                <div className="w-full bg-slate-200 p-4 rounded-md shadow-md">
                    <h6>First Task</h6>
                </div>
            </div>
            {/* Doing Card */}
            <div className="w-96 space-y-5 p-4 rounded-md border-2">
                <h3 className="border-b-2 border-slate-400 font-semibold text-lg">Doing</h3>
                <div className="bg-[#cccc00] h-40 grid place-items-center text-white text-2xl font-bold rounded-md">
                    <h1>DOING</h1>
                </div>
                <div className="w-full bg-slate-200 p-4 rounded-md shadow-md">
                    <h6>First Task</h6>
                </div>
            </div>
            {/* Done */}
            <div className="border-2 w-96 space-y-5 p-4 rounded-md">
                <h3 className="border-b-2 border-slate-400 font-semibold text-lg">Done</h3>
                <div className="bg-[#32CD32] h-40 grid place-items-center text-white text-2xl font-bold rounded-md">
                    <h1>DONE</h1>
                </div>
                <div className="w-full bg-slate-200 p-4 rounded-md shadow-md">
                    <h6>First Task</h6>
                </div>
            </div>
        </div>
    );
};

export default Home;