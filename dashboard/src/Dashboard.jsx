import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PageContent from './PageContent/PageContent';
import BottomPageContent from './BottomPageContent/BottomPageContent';
import './index.css';

export default function Dashboard(){
    return <div>
    <Navbar />
    <div className="grid-container">
      <div>
        <Sidebar />
      </div>
      <div className="content-grid">
        <div className="row">
        <PageContent />
        </div>
        <div className="row">
          <BottomPageContent />
        </div>
      </div>
    </div>
    </div>
}