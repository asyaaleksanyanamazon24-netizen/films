import React, { useEffect, useState } from 'react';
import { useLanguage } from "../../Context/LanguageContext.jsx";

const News = () => {
    const [news, setNews] = useState([]);
    const { t } = useLanguage();

    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(data => setNews(data));
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">{t("news")}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {news.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-300">
                        <div className="md:w-1/3 h-48 md:h-auto">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 md:w-2/3 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                                    <span className="text-sm text-orange-500 font-semibold">{item.date}</span>
                                </div>
                                <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                            <button className="mt-4 self-start text-orange-500 font-bold hover:text-orange-600 transition-colors">
                                {t("see_more")} &rarr;
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;