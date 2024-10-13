import logo from '../images/content/logo.png'

function SplashScreen() {
    return (
        <section>
            <div className="container mx-auto min-h-screen">
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="w-full md:w-4/12 text-center">
                        <img src={logo} alt="LuxSpace"
                            className="mx-auto mb-8" />

                        <p className="mb-16 px-4">
                            Kami menyediakan furniture yang berkelas untuk membuat ruangan terasa nyaman dan luxury
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SplashScreen