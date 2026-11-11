import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMapPin } from 'react-icons/fi';

const Coverage = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with your actual data
  const areas = [
    { 
      name: 'Nakuru North', 
      estates: [
        { name: 'Upperhill', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Whitehouse', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Bismarck', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Mawanga', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Makao', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'All Nations', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Teachers', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Tumsifu', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Dominion', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Poshomill', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Kagoto', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Heshima', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Sita', status: 'available', speed: '12-100 Mbps', progress: 90 },
      ]
    },
    { 
      name: 'Lanet', 
      estates: [
        { name: 'Posta', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Umoja 1 & 2', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Oasis', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Kamfam', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Kijabe', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Karimenu', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Exodus', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Dubai', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Sudanese', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Kangema', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Muwa', status: 'available', speed: '12-100 Mbps', progress: 100 },
        { name: 'Jambo', status: 'available', speed: '12-100 Mbps', progress: 100 },
      ]
    },
    { 
        name: 'Pipeline', 
        estates: [
          { name: 'Barnabas', status: 'available', speed: '12-100 Mbps', progress: 100 },
          { name: 'Pipeline', status: 'available', speed: '12-100 Mbps', progress: 100 },
          { name: 'Kaka James', status: 'available', speed: '12-100 Mbps', progress: 100 },
          { name: 'JB', status: 'available', speed: '12-100 Mbps', progress: 100 },
          { name: 'Joddy\s', status: 'available', speed: '12-100 Mbps', progress: 100 },
          { name: 'Senta House', status: 'available', speed: '12-100 Mbps', progress: 100 },
          { name: 'Imperial', status: 'available', speed: '12-100 Mbps', progress: 100 },
          { name: 'Mzee wa Nyama', status: 'available', speed: '12-100 Mbps', progress: 100 },
          { name: 'Destiny', status: 'available', speed: '12-100 Mbps', progress: 100 },
          { name: 'Mwariki C', status: 'available', speed: '12-100 Mbps', progress: 100 },
        ]
      },
  ];

  const filteredEstates = areas.flatMap(area => 
    area.estates.filter(estate =>
      estate.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedArea ? area.name === selectedArea : true)
    )
  );

//   use "in-progress as status to show areas that installation is going on"

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 mt-10">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-primary to-blue-500 dark:from-primary-dark dark:to-blue-600 mt-6">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-6 p-10">
              Check Our Coverage Area
            </h1>
            
            {/* Search Input */}
            <div className="max-w-2xl mx-auto relative text-black">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search for your estate or area..."
                className="w-full pl-12 pr-6 py-4 rounded-xl bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filter & Content */}
      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Area Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          <button
            onClick={() => setSelectedArea('')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !selectedArea 
                ? 'bg-primary text-black dark:text-white dark:bg-primary-light'
                : 'bg-gray-200 text-black dark:text-white dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All Areas
          </button>
          {areas.map(area => (
            <button
              key={area.name}
              onClick={() => setSelectedArea(area.name)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedArea === area.name
                  ? 'bg-primary text-black dark:text-white dark:bg-primary-light'
                  : 'bg-gray-200 text-black dark:text-white dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {area.name}
            </button>
          ))}
        </motion.div>

        {/* Estates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEstates.map((estate, index) => (
            <motion.div
              key={estate.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {estate.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <FiMapPin className="text-primary dark:text-primary-light" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {areas.find(a => a.estates.includes(estate))?.name}
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  estate.status === 'available' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : estate.status === 'coming-soon'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}>
                  {estate.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Speed Tier</p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    {estate.speed}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Rollout Progress
                  </p>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary dark:bg-primary-light transition-all duration-500"
                      style={{ width: `${estate.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEstates.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No estates found in this area. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Coverage;
