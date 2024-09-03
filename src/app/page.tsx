"use client";
import { useState } from "react";
import { Menu, Plus, Star, User, Send, LogOut, Settings } from "lucide-react";

export default function Component() {
  const [conversations, setConversations] = useState([
    { id: 1, title: "Consulta de inversiones" },
    { id: 2, title: "Planificación de jubilación" },
    { id: 3, title: "Ahorro para emergencias" },
    { id: 4, title: "Estrategias fiscales" },
    { id: 5, title: "Presupuesto mensual" },
    { id: 6, title: "Inversión en bienes raíces" },
    { id: 7, title: "Análisis de riesgo" },
    { id: 8, title: "Diversificación de cartera" },
  ]);
  const [currentConversation, setCurrentConversation] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [input, setInput] = useState("");

  const startNewConversation = () => {
    const newId = Math.max(...conversations.map((c) => c.id)) + 1;
    const newConversation = { id: newId, title: `Nueva consulta ${newId}` };
    setConversations([...conversations, newConversation]);
    setCurrentConversation(newId);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 flex-shrink-0 flex flex-col ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="p-4">
          <button
            onClick={startNewConversation}
            className="w-full bg-blue-600 text-white rounded-md p-2 flex items-center justify-center"
          >
            <Plus className="mr-2" /> Nueva Consulta
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setCurrentConversation(conv.id)}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-800 ${
                currentConversation === conv.id ? "bg-gray-800" : ""
              }`}
            >
              {conv.title}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-md p-2 flex items-center justify-center">
            <Star className="mr-2" /> Suscribirse a Premium
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="mr-4 md:hidden"
            >
              <Menu />
            </button>
            <h1 className="text-xl font-semibold flex items-center">
              Asistente Financiero IA
            </h1>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <User className="w-6 h-6 text-gray-600" />
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <User className="inline-block mr-2 w-4 h-4" /> Perfil
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Settings className="inline-block mr-2 w-4 h-4" />{" "}
                  Configuración
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="inline-block mr-2 w-4 h-4" /> Cerrar sesión
                </a>
              </div>
            )}
          </div>
        </header>
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {/* Aquí irían los mensajes de la conversación */}
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-800">
              Bienvenido a tu asistente financiero personal. ¿En qué puedo
              ayudarte hoy?
            </p>
          </div>
        </div>
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
