import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    const authorName: string | null = localStorage.getItem("loginname");
    return (<div className="border-b flex justify-between px-10 py-4">
        <Link to='/blogs'>
            <div className="flex flex-col justify-center text-2xl font-bold">Medium</div>
        </Link>
        <div>
            <Link to="/publish">
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Create Blog</button>
            </Link>
            <Avatar size={"big"} name={authorName === null ? "Anonymous" : authorName[0].toUpperCase()} />
        </div>
    </div>)
}