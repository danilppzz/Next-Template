import Counter from "../ui/Counter"

const Example = () => {
    return (
        <main className="min-h-screen p-4 gap-2">
            <h1 className="text-4xl font-bold block">Next Template<p className="text-lg font-normal">by danilppzz</p></h1>
            <div className="flex flex-col mt-8 space-y-8">
                <p>This is an example of the <code>code</code> tag that we have by default.</p>

                <Counter />
            </div>
        </main>
    )
}

export default Example