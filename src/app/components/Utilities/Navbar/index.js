import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-indigo-500">
            <div className="flex justify-between p-4">
                <Link className="font-bold text-white text-2xl" href="/">ANIME LIST</Link>
                <input placeholder="Cari Anime ..." className="" />
            </div>
        </header>
    )
}

export default Navbar