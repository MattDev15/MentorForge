import { modules } from "../data/modules";

export default function IntroModule() {
    const module = modules[0];

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{module.title}</h1>
            <p className="text-gray-700 mb-6">{module.description}</p>
            <ul className="space-y-4">
                {module.blocks.map((block, idx) => (
                    <li key={idx} className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold text-lg text-gray-800">{block.title}</h3>
                        <p className="text-gray-700">{block.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
