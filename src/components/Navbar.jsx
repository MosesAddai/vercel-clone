import React from "react";
import { DownArrow, TextWordMark } from "../../assets/icons";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center p-4">
			<ul className="flex gap-4">
				<h1 className="text-2xl font-bold hover:cursor-pointer">
					<TextWordMark />
				</h1>

				<li className="flex text-gray-400 hover:bg-gray-900 hover:rounded-4xl hover:text-white duration-200 p-2 px-4 h-10 cursor-pointer ">
					Products <DownArrow />
				</li>
				<li className="flex text-gray-400 hover:bg-gray-900 hover:rounded-4xl hover:text-white duration-200 p-2 px-4 h-10 cursor-pointer ">
					Solutions <DownArrow />
				</li>
				<li className="flex text-gray-400 hover:bg-gray-900 hover:rounded-4xl hover:text-white duration-200 p-2 px-4 h-10 cursor-pointer ">
					Resources <DownArrow />
				</li>
				<li className="text-gray-400 hover:bg-gray-900 hover:rounded-4xl hover:text-white duration-200 p-2 px-4 h-10 cursor-pointer ">
					Enterprise
				</li>
				<li className="text-gray-400 hover:bg-gray-900 hover:rounded-4xl hover:text-white duration-200 p-2 px-4 h-10 cursor-pointer ">
					Docs
				</li>
				<li className="text-gray-400 hover:bg-gray-900 hover:rounded-4xl hover:text-white duration-200 p-2 px-4 h-10 cursor-pointer ">
					Pricing
				</li>
			</ul>
			<div className="flex gap-4">
				<button className="border-1 border-neutral-700 px-4 bg-black text-white rounded-xl h-10  hover:bg-gray-900 duration-200 cursor-pointer">
					Log In
				</button>
				<button className="border-1 border-neutral-700 px-4 bg-black text-white rounded-xl h-10 hover:bg-gray-900 duration-200 cursor-pointer">
					Contact
				</button>
				<button className="border-1 border-neutral-700 px-4 bg-white text-black rounded-xl h-10 hover:bg-gray-300 duration-200 cursor-pointer">
					Sign In
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
