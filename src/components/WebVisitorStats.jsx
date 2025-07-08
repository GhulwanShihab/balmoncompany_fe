import React, { useState, useEffect } from 'react';
import { FaChartBar } from 'react-icons/fa';

const WebVisitorStats = () => {
  const [stats, setStats] = useState({
    todayViews: 0,
    weekViews: 0,
    monthViews: 0,
    totalViews: 0,
    loading: true
  });

  useEffect(() => {
    const fetchVisitorStats = async () => {
      try {
        const response = await fetch('/api/visitor-stats');
        if (!response.ok) {
          throw new Error('Failed to fetch visitor statistics');
        }
        const data = await response.json();
        setStats({
          todayViews: data.today_views,
          weekViews: data.week_views,
          monthViews: data.month_views,
          totalViews: data.total_views,
          loading: false
        });
      } catch (error) {
        console.error('Error fetching visitor stats:', error);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchVisitorStats();
  }, []);

  return (
    <div className="bg-blue-800 bg-opacity-40 rounded-lg p-3 w-full">
      <h5 className="font-bold text-white text-sm mb-2 flex items-center gap-1">
        <FaChartBar className="text-yellow-300" /> 
        <span>Statistik Pengunjung</span>
      </h5>
      
      {stats.loading ? (
        <div className="text-white text-xs text-center py-1">Memuat data...</div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <div className="text-white text-sm">
            Hari ini: {stats.todayViews}
          </div>
          
          <div className="text-white text-sm">
            7 Hari: {stats.weekViews}
          </div>
          
          <div className="text-white text-sm">
            30 Hari: {stats.monthViews}
          </div>
          
          <div className="text-white text-sm">
            Total: {stats.totalViews}
          </div>
        </div>
      )}
    </div>
  );
};

export default WebVisitorStats;