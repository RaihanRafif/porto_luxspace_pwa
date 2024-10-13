function Offline() {
    return (
        <div class="bg-yellow-50 border-1-4 border-yellow-400 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    <img
                        src="/alert.png"
                        alt="alert"
                    />
                </div>
                <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                        You are offline. Don't you Worry, you still can do things.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Offline