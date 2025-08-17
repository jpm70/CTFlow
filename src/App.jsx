import React, { useState } from "react";
import phases from "./phases.json";

export default function App() {
  const [completed, setCompleted] = useState([]);

  const togglePhase = (index) => {
    if (completed.includes(index)) {
      setCompleted(completed.filter((i) => i !== index));
    } else {
      setCompleted([...completed, index]);
    }
  };

  const progress = Math.round((completed.length / phases.length) * 100);

  return (
    <div className="min-h-screen p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">
        ⚡ CTFlow
      </h1>
      <p className="text-center text-gray-300 mb-8">
        Flujo de fases de pentesting gamificado
      </p>

      <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center mb-6">{progress}% completado</p>

      <ul className="space-y-4">
        {phases.map((phase, i) => (
          <li
            key={i}
            className="p-4 rounded-2xl bg-gray-800 shadow-md border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{phase.title}</h2>
              <input
                type="checkbox"
                checked={completed.includes(i)}
                onChange={() => togglePhase(i)}
                className="w-5 h-5 accent-blue-500"
              />
            </div>
            <p className="mt-2 text-gray-400">{phase.description}</p>
            <ul className="mt-3 space-y-2">
              {phase.resources.map((res, j) => (
                <li key={j}>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    🔗 {res.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
