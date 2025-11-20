import React, { useState, useEffect } from "react";

const Galary = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    );
    const result = await response.json();
    
    setTimeout(() => {
      setData(result);
      setLoading(false);
    }, 200);
  };

  useEffect(function () {
    getData();
  }, [index]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen w-full p-8">
      <div className="text-center mb-12">
        <p className="text-gray-400 text-lg">Discover Amazing Photography</p>
      </div>
      {loading && (
        <div className="flex flex-col items-center justify-center py-32">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-500/30 rounded-full"></div>
            <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin absolute top-0"></div>
          </div>
          <p className="text-xl text-gray-300 mt-6 animate-pulse">
            Loading...
          </p>
        </div>
      )}

      {!loading && (
        <div className="flex flex-wrap gap-8 justify-center mb-12 animate-fadeIn">
          {data.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/50"
              >
                <a href={elem.url} target="_blank" rel="noopener noreferrer">
                  <div className="h-72 w-80 bg-gray-800 rounded-2xl overflow-hidden">
                    <img
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                      src={elem.download_url}
                      alt="random"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h1 className="font-bold text-2xl text-white drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {elem.author}
                      </h1>
                      <p className="text-blue-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Click to view full size
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
              </div>
            );
          })}
        </div>
      )}

      {!loading && (
        <div className="flex justify-center items-center gap-8 pb-8">
          <button
            className={`relative px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 active:scale-95 overflow-hidden ${
              index > 1
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/50"
                : "bg-gray-700 cursor-not-allowed opacity-50"
            }`}
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
                setData([]);
              }
            }}
          >
            <span className="relative z-10">← Previous</span>
            {index > 1 && (
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            )}
          </button>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm px-8 py-3 rounded-full border-2 border-blue-500/30">
            <h4 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Page {index}
            </h4>
          </div>

          <button
            className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 active:scale-95 overflow-hidden group"
            onClick={() => {
              setIndex(index + 1);
              setData([]);
            }}
          >
            <span className="relative z-10">Next →</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Galary;