import ArrivedItem from "./ArrivedItem"

function Arrived({ items }) {

    return (
        <section className="flex flex-col py-16">
            <div className="container mx-auto mb-4">
                <div className="flex justify-center text-center mb-4">
                    <h3 className="text-2xl capitalize font-semibold">
                        Just Arrived <br /> this summer for you
                    </h3>
                </div>
            </div>
            <div className="overflow-x-hidden px-4" id="carousel">
                <div className="container mx-auto"></div>
                <div className="flex -mx-4 flex-row relative">
                    {items && items.map((e) => (
                        <ArrivedItem key={e.id} item={e} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Arrived