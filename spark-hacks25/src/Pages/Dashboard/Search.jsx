import React, { useState } from 'react';
import { X, Search as SearchIcon, Star, Building2, MapPin } from 'lucide-react';
import './Search.css';

const Search = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDistance, setActiveDistance] = useState('10');

  // Sample data - replace with real data
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'packaging', name: 'Packaging' },
    { id: 'office', name: 'Office Supplies' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'raw', name: 'Raw Materials' }
  ];

  const distances = [
    { id: '5', name: '5 miles' },
    { id: '10', name: '10 miles' },
    { id: '25', name: '25 miles' },
    { id: '50', name: '50+ miles' }
  ];

  const sampleResults = [
    {
      id: 1,
      title: 'Cardboard Boxes (Large)',
      quantity: '50 units',
      condition: 'Like New',
      distance: '2.3 miles',
      business: 'EcoPackaging Inc',
      rating: 4.5,
      reviews: 28,
      category: 'packaging'
    },
    {
      id: 2,
      title: 'Office Chairs',
      quantity: '5 units',
      condition: 'Good',
      distance: '4.1 miles',
      business: 'TechStart',
      rating: 4.8,
      reviews: 45,
      category: 'furniture'
    },
    {
      id: 3,
      title: 'Printer Paper',
      quantity: '10 reams',
      condition: 'New',
      distance: '1.8 miles',
      business: 'Green Solutions',
      rating: 4.2,
      reviews: 15,
      category: 'office'
    }
  ];

  // Filter results based on search term and filters
  const filteredResults = sampleResults.filter(result => {
    const matchesSearch = result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         result.business.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || result.category === activeCategory;
    const matchesDistance = parseFloat(result.distance) <= parseFloat(activeDistance);
    return matchesSearch && matchesCategory && matchesDistance;
  });

  return (
    <div className="search-popup">
      <div className="search-header">
        <h3>Search Materials</h3>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          <X size={20} />
        </button>
      </div>

      <div className="search-container">
        <div className="search-input-wrapper">
          <SearchIcon size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for materials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="filter-section">
        <p className="filter-title">Categories</p>
        <div className="filter-chips">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-chip ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <p className="filter-title">Distance</p>
        <div className="filter-chips">
          {distances.map(distance => (
            <button
              key={distance.id}
              className={`filter-chip ${activeDistance === distance.id ? 'active' : ''}`}
              onClick={() => setActiveDistance(distance.id)}
            >
              {distance.name}
            </button>
          ))}
        </div>
      </div>

      <div className="results-container">
        {filteredResults.map(result => (
          <div key={result.id} className="result-card">
            <div className="result-header">
              <span className="result-title">{result.title}</span>
              <span className="result-distance">
                <MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} />
                {result.distance}
              </span>
            </div>
            <div className="result-details">
              {result.quantity} • {result.condition}
            </div>
            <div className="result-business">
              <Building2 size={14} />
              <span>{result.business}</span>
              <div className="business-rating">
                <Star size={14} fill="#fbbf24" color="#fbbf24" />
                {result.rating} ({result.reviews})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;