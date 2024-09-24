import Counter from "../ui/Counter"

const Example = () => {
    return (
        <main className="flex items-center justify-center min-h-screen p-4 gap-2">
            <div className="p-4 h-min border border-white/10 rounded-lg">
                <h1 className="text-4xl font-bold block">Next Template<p className="text-lg font-normal">by danilppzz</p></h1>
                <div className="flex flex-col mt-8 space-y-8">
                    <p>This is an example of the <code>code</code> tag that we have by default.</p>

                    <Counter />

                    <div>
                        <p className="mb-2">Example color palette:</p>
                        <div className="grid grid-cols-5 gap-4">
                            <div className="flex items-center justify-center text-[14px] bg-c-100 h-20 border border-white/20 rounded-md text-white">#000000</div>
                            <div className="flex items-center justify-center text-[14px] bg-c-200 h-20 border border-white/20 rounded-md text-white">#1A1A1A</div>
                            <div className="flex items-center justify-center text-[14px] bg-c-300 h-20 border border-white/20 rounded-md text-white">#333333</div>
                            <div className="flex items-center justify-center text-[14px] bg-c-400 h-20 border border-white/20 rounded-md text-white">#4D4D4D</div>
                            <div className="flex items-center justify-center text-[14px] bg-c-500 h-20 border border-white/20 rounded-md text-white">#666666</div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Example