import { TbLayoutKanbanFilled } from "react-icons/tb";

const Home = () => {
	return (
		<div className="mt-16 flex flex-col items-center">
			<TbLayoutKanbanFilled size={256} />
			<h1 className="font-light text-2xl my-3 md:text-6xl">Welcome to Minimalist Kanban!</h1>
			<p className="font-thin text-lg my-2 md:text-2xl">This is a simple replicate of kanban function</p>
			<p className="font-thin text-lg my-2 md:text-2xl">Try the feature, is a minimum design</p>
			<p className="font-thin text-green-200 text-lg my-2 md:text-2xl">Username: guest | Password: 1234</p>
		</div>
	);
}

export default Home;