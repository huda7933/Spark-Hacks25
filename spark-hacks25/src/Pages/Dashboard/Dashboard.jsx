import React, { useState } from 'react';
import './Dashboard.css';
import { 
  Package, Users, Leaf, MessageSquare, Bell, Search as SearchIcon, 
  Building2, CheckCircle, Star, StarHalf, Filter,
  Box, Truck, Clock, ShieldCheck
} from 'lucide-react';
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Chat from './Chat';
import Search from './Search';

const Dashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sample data for charts
  const impactData = [
    { month: 'Jan', wasteReduced: 240, moneySaved: 1200 },
    { month: 'Feb', wasteReduced: 300, moneySaved: 1500 },
    { month: 'Mar', wasteReduced: 280, moneySaved: 1400 },
    { month: 'Apr', wasteReduced: 320, moneySaved: 1600 },
  ];

  // Sample data for recent activities
  const recentActivities = [
    { id: 1, type: 'Material Posted', description: 'Posted 50 cardboard boxes', time: '2 hours ago' },
    { id: 2, type: 'New Connection', description: 'Connected with EcoPackaging Inc', time: '1 day ago' },
    { id: 3, type: 'Material Claimed', description: 'Office supplies claimed by TechStart', time: '2 days ago' },
  ];

  // Sample data for transactions
  const transactions = [
    { 
      id: 1, 
      type: 'Material Shared',
      item: 'Cardboard Boxes',
      quantity: '50',
      with: 'EcoPackaging Inc',
      date: '2024-02-08',
      status: 'completed',
      rating: 5
    },
    { 
      id: 2, 
      type: 'Material Received',
      item: 'Office Supplies',
      quantity: '25',
      with: 'TechStart',
      date: '2024-02-07',
      status: 'verified',
      rating: 4
    },
    { 
      id: 3, 
      type: 'Material Pending',
      item: 'Packaging Materials',
      quantity: '100',
      with: 'Green Solutions',
      date: '2024-02-06',
      status: 'pending',
      rating: null
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />);
      } else if (i === Math.floor(rating) && !Number.isInteger(rating)) {
        stars.push(<StarHalf key={i} size={16} fill="#fbbf24" color="#fbbf24" />);
      } else {
        stars.push(<Star key={i} size={16} color="#e5e7eb" />);
      }
    }
    return stars;
  };

  return (
    <div className="dashboard-container">
      {/* Business Profile Section */}
      <div className="profile-section">
        <div className="profile-header">
          <div className="profile-logo">
            <Building2 size={40} color="#6b7280" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Your Business Name</h2>
              <div className="verification-badge">
                <CheckCircle size={14} />
                Verified
              </div>
            </div>
            <p style={{ color: '#6b7280' }}>Sustainable Packaging Solutions</p>
            <div className="star-rating" style={{ marginTop: '8px' }}>
              {renderStars(4.5)}
              <span style={{ color: '#6b7280', marginLeft: '8px' }}>4.5 (28 reviews)</span>
            </div>
          </div>
        </div>

        {/* Rating Categories */}
        <div className="rating-section">
          <div className="rating-card">
            <p style={{ marginBottom: '8px' }}>Communication</p>
            <div className="star-rating">{renderStars(4.8)}</div>
          </div>
          <div className="rating-card">
            <p style={{ marginBottom: '8px' }}>Reliability</p>
            <div className="star-rating">{renderStars(4.5)}</div>
          </div>
          <div className="rating-card">
            <p style={{ marginBottom: '8px' }}>Material Quality</p>
            <div className="star-rating">{renderStars(4.7)}</div>
          </div>
          <div className="rating-card">
            <p style={{ marginBottom: '8px' }}>Transaction Speed</p>
            <div className="star-rating">{renderStars(4.3)}</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Total Materials Shared</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>142</p>
            </div>
            <Package size={32} color="#3b82f6" />
          </div>
        </div>
        
        <div className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Business Connections</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>28</p>
            </div>
            <Users size={32} color="#10b981" />
          </div>
        </div>

        <div className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Waste Reduced (kg)</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1,140</p>
            </div>
            <Leaf size={32} color="#059669" />
          </div>
        </div>

        <div className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Money Saved ($)</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>5,700</p>
            </div>
            <div style={{ fontSize: '1.5rem', color: '#eab308', fontWeight: 'bold' }}>$</div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-container">
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
            Waste Reduction Trend
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={impactData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="wasteReduced" stroke="#10b981" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
            Cost Savings
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={impactData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="moneySaved" fill="#eab308" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transaction History */}
      <div className="activity-feed" style={{ marginTop: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Transaction History</h3>
          <div className="transaction-filters">
            <button 
              className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-button ${activeFilter === 'shared' ? 'active' : ''}`}
              onClick={() => setActiveFilter('shared')}
            >
              Shared
            </button>
            <button 
              className={`filter-button ${activeFilter === 'received' ? 'active' : ''}`}
              onClick={() => setActiveFilter('received')}
            >
              Received
            </button>
          </div>
        </div>

        {transactions.map((transaction) => (
          <div key={transaction.id} className="activity-item" style={{ padding: '16px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontWeight: '500' }}>{transaction.item}</span>
                  <span className={`transaction-status status-${transaction.status}`}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </span>
                </div>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                  {transaction.quantity} units • {transaction.with}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{transaction.date}</p>
                {transaction.rating && (
                  <div className="star-rating" style={{ justifyContent: 'flex-end' }}>
                    {renderStars(transaction.rating)}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="action-button" onClick={() => setIsChatOpen(!isChatOpen)}>
          <MessageSquare size={24} />
        </button>
        <button className="action-button">
          <Bell size={24} />
        </button>
        <button className="action-button" onClick={() => setIsSearchOpen(!isSearchOpen)}>
        <SearchIcon size={24} />
        </button>
      </div>

      {/* Chat Component */}
      {isChatOpen && <Chat onClose={() => setIsChatOpen(false)} />}
      {/* Search Component */}
      {isSearchOpen && <Search onClose={() => setIsSearchOpen(false)} />}
    </div>
  );
};

export default Dashboard;