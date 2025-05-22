import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Деревянный стол',
      description: 'Стол ручной работы из дуба.',
      image: 'https://placehold.co/600x400?text=Wooden+Table ',
    },
    {
      id: 2,
      title: 'Резная табличка',
      description: 'Индивидуальная деревянная вывеска с гравировкой.',
      image: 'https://placehold.co/600x400?text=Carved+Sign ',
    },
    {
      id: 3,
      title: 'Мебель для гостиной',
      description: 'Комплект мебели на заказ.',
      image: 'https://placehold.co/600x400?text=Lounge+Furniture ',
    },
    {
      id: 4,
      title: 'Шкатулка с инкрустацией',
      description: 'Элегантная шкатулка ручной работы.',
      image: 'https://placehold.co/600x400?text=Wooden+Box ',
    },
    {
      id: 5,
      title: 'Декоративная стена',
      description: 'Панель из натурального дерева для интерьера.',
      image: 'https://placehold.co/600x400?text=Decorative+Wall ',
    },
    {
      id: 6,
      title: 'Садовая скамья',
      description: 'Прочный и эстетичный вариант для улицы.',
      image: 'https://placehold.co/600x400?text=Garden+Bench ',
    },
  ];

  const services = [
    { name: 'Изготовление мебели', price: 'от 30 000 ₽' },
    { name: 'Резьба по дереву', price: 'от 5 000 ₽' },
    { name: 'Гравировка', price: 'от 1 500 ₽' },
    { name: 'Реставрация деревянных изделий', price: 'от 10 000 ₽' },
    { name: 'Создание декора для интерьера', price: 'от 8 000 ₽' },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 to-amber-700 text-white p-6 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 mr-3"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h1 className="text-2xl font-bold">Дерево.Работа</h1>
          </div>
          <nav className="flex space-x-6">
            <button onClick={() => setActiveTab('home')} className="hover:underline">
              Главная
            </button>
            <button onClick={() => setActiveTab('portfolio')} className="hover:underline">
              Наши работы
            </button>
            <button onClick={() => setActiveTab('services')} className="hover:underline">
              Услуги
            </button>
            <button onClick={() => setActiveTab('contacts')} className="hover:underline">
              Контакты
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <section className="bg-cover bg-center h-screen flex items-center justify-center text-white relative"
                 style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Natural+Wood ')"}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-6 z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Создаем тепло в каждом изделии</h2>
            <p className="text-lg md:text-xl mb-8">Ручная работа из натурального дерева</p>
            <button
              onClick={() => setActiveTab('contacts')}
              className="bg-amber-700 hover:bg-amber-600 text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Сделать заказ
            </button>
          </div>
        </section>
      )}

      {/* Portfolio */}
      {activeTab === 'portfolio' && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Наши работы</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal for project details */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover mb-4" />
                <p>{selectedProject.description}</p>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-4 bg-amber-700 text-white py-2 px-4 rounded hover:bg-amber-600"
                >
                  Закрыть
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Services */}
      {activeTab === 'services' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="border border-gray-300 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-700">Цена: {service.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg mb-4">Хотите узнать точную цену?</p>
              <button
                onClick={() => setActiveTab('contacts')}
                className="bg-amber-700 text-white py-3 px-8 rounded-full hover:bg-amber-600 transition"
              >
                Запросить стоимость
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Contacts */}
      {activeTab === 'contacts' && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Свяжитесь с нами</h2>
            <div className="max-w-3xl mx-auto">
              <form className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Имя</label>
                    <input type="text" id="name" className="w-full border border-gray-300 rounded px-4 py-2" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" className="w-full border border-gray-300 rounded px-4 py-2" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Сообщение</label>
                  <textarea id="message" rows="5" className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-amber-700 text-white py-3 px-6 rounded hover:bg-amber-600 transition"
                >
                  Отправить
                </button>
              </form>
              <div className="mt-8 text-center">
                <p className="mb-2">Адрес: ул. Лесная, 15, Москва</p>
                <p className="mb-2">WhatsApp: +7 (900) 123-45-67</p>
                <p>Instagram: @derevo_rabota</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Дерево.Работа. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}