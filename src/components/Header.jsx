'use client';

const Header = () => {
    return (
        <header className="flex justify-center items-center py-3 px-8 shadow-lg">
            <div className="max-w-screen-xl w-full">
                <h1 className="text-xl font-semibold italic">Text_to_Voice</h1>
            </div>
            <div>
                <button className="text-sm bg-orange-600 text-white font-semibold py-2 px-3 shadow-sm shadow-orange-400 rounded-md hover:scale-105">Login</button>
            </div>
        </header>
    )
}

export default Header
