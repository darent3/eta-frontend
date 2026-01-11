'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [articles, setArticles] = useState([]);
  const [documents, setDocuments] = useState([]);

  // Fetch data from Wagtail API
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch pages (articles)
        const pagesRes = await fetch('http://localhost:8000/api/v2/pages/');
        const pagesData = await pagesRes.json();
        setArticles(pagesData.items);

        // Fetch documents
        const docsRes = await fetch('http://localhost:8000/api/v2/documents/');
        const docsData = await docsRes.json();
        setDocuments(docsData.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData();
  }, []);

  // Featured article
  const featuredArticle = {
    title: "Federal Lawsuit: Testing Failures & Vote Anomalies",
    description: "Late software changes without certification in three counties + 65,000 hand-duplicated ballots with missing chain of custody + Vote pattern anomalies suggesting potential machine tampering",
    status: "Federal Lawsuit - Active litigation",
    date: "Dec 20, 2025"
  };

  // Recent articles for preview (fallback if API is empty)
  const recentArticles = [
    {
      id: 1,
      title: "Election Integrity Study Reveals Discrepancies",
      description: "A comprehensive study conducted by election security experts has uncovered significant discrepancies in voting machine audit trails across multiple states.",
      date: "Dec 24, 2025",
      category: "ETA Updates"
    },
    {
      id: 2,
      title: "Advanced Statistical Analysis of Voting Patterns",
      description: "Deep dive into statistical methods used to detect anomalies in election data across multiple precincts.",
      date: "Dec 24, 2025",
      category: "Other Content"
    },
    {
      id: 3,
      title: "Understanding Voting Machine Audit Trails",
      description: "A detailed explanation of how voting machine audit trails work and why they matter for election integrity.",
      date: "Dec 23, 2025",
      category: "ETA Updates"
    },
    {
      id: 4,
      title: "Precinct-Level Forensic Analysis Methodology",
      description: "Technical explanation of forensic analysis techniques applied to precinct voting data.",
      date: "Dec 22, 2025",
      category: "Other Content"
    },
    {
      id: 5,
      title: "Questions to Ask Your Local Election Officials",
      description: "A guide for curious citizens about election procedures and verification methods in your community.",
      date: "Dec 21, 2025",
      category: "ETA Updates"
    },
    {
      id: 6,
      title: "Chain of Custody Documentation Analysis",
      description: "Examination of chain of custody procedures and their compliance across different jurisdictions.",
      date: "Dec 20, 2025",
      category: "Other Content"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Row - Logo, Nav Links, Search, and Donate */}
          <div className="flex justify-between items-center h-16 gap-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-900">Election Truth Alliance</h1>
                <p className="text-xs text-gray-600">Where data meets democracy</p>
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 text-sm font-medium whitespace-nowrap">About</Link>
              <Link href="/curious" className="text-gray-700 hover:text-blue-600 text-sm font-medium whitespace-nowrap">For Curious</Link>
              <Link href="/analysts" className="text-gray-700 hover:text-blue-600 text-sm font-medium whitespace-nowrap">For Analysts</Link>
              <Link href="/advocates" className="text-gray-700 hover:text-blue-600 text-sm font-medium whitespace-nowrap">For Advocates</Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600 text-sm font-medium whitespace-nowrap">Resources</Link>
            </div>

            {/* Search Box */}
            <div className="flex-shrink-0 max-w-xs">
              <input 
                type="text"
                placeholder="Search All Articles"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 bg-white"
              />
            </div>

            {/* Donate Button */}
            <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition flex-shrink-0">
              Donate
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Three Pathways */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* For the Curious */}
          <Link href="/curious">
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 mb-4">For the Curious</h3>
              <p className="text-gray-600 text-sm mb-4">Learn our methodology, understand the issues, and explore educational resources designed for everyone.</p>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">Start Here →</button>
            </div>
          </Link>

          {/* For Data Analysts */}
          <Link href="/analysts">
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 mb-4">For Data Analysts</h3>
              <p className="text-gray-600 text-sm mb-4">Deep-dive into forensic analysis, download datasets, explore interactive dashboards, and compare precincts.</p>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">Explore Data →</button>
            </div>
          </Link>

          {/* For Advocates */}
          <Link href="/advocates">
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 mb-4">For Advocates</h3>
              <p className="text-gray-600 text-sm mb-4">Access toolkits, talking points, and promotional materials to help spread awareness and support audits.</p>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">Get Involved →</button>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Content - Now shows Wagtail data if available */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Show Wagtail articles if we have them */}
        {articles.length > 0 ? (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
              Articles from Wagtail
            </h2>
            <div className="space-y-6">
              {articles.map(article => (
                <div key={article.id} className="border-b border-gray-200 pb-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{article.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">
                    {article.meta.first_published_at 
                      ? new Date(article.meta.first_published_at).toLocaleDateString()
                      : 'Not published yet'}
                  </p>
                  <Link href={article.meta.html_url} className="text-blue-600 text-sm hover:underline">
                    Read more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Show documents if we have them */}
        {documents.length > 0 ? (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-green-600">
              Documents from Wagtail
            </h2>
            <div className="space-y-6">
              {documents.map(doc => (
                <div key={doc.id} className="border-b border-gray-200 pb-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{doc.title}</h3>
                  <a 
                    href={doc.meta.download_url} 
                    className="text-blue-600 text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Document →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Original hardcoded content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* ETA Updates */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-red-600">
              ETA Updates
            </h2>
            <div className="space-y-6">
              {recentArticles
                .filter(a => a.category === "ETA Updates")
                .map(article => (
                  <div key={article.id} className="border-b border-gray-200 pb-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                    <p className="text-xs text-gray-500">{article.date}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Other Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
              Other Content
            </h2>
            <div className="space-y-6">
              {recentArticles
                .filter(a => a.category === "Other Content")
                .map(article => (
                  <div key={article.id} className="border-b border-gray-200 pb-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                    <p className="text-xs text-gray-500">{article.date}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lawsuit Alert */}
      <section className="bg-red-600 text-white py-8 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-red-100 mb-2">🔴 FEDERAL LAWSUIT - ACTIVE LITIGATION</p>
              <h3 className="text-2xl font-bold mb-2">{featuredArticle.title}</h3>
              <p className="text-red-100 mb-4">{featuredArticle.description}</p>
            </div>
            <button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition whitespace-nowrap ml-4">
              Read Full Analysis
            </button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-blue-600 text-white py-12 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">13,254+</p>
              <p className="text-blue-100 mt-2">Precincts Analyzed</p>
            </div>
            <div>
              <p className="text-4xl font-bold">50</p>
              <p className="text-blue-100 mt-2">States Monitored</p>
            </div>
            <div>
              <p className="text-4xl font-bold">50+</p>
              <p className="text-blue-100 mt-2">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Research */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Resources & Research</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Learn the Methodology */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-bold text-gray-900 mb-4">Learn the Methodology</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Benford's Law Analysis</li>
              <li>• Statistical Anomaly Detection</li>
              <li>• Vote Pattern Recognition</li>
              <li>• Data Integrity Checks</li>
            </ul>
          </div>

          {/* Download Data */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-bold text-gray-900 mb-4">Download Data</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Full Precinct Datasets</li>
              <li>• State Summary Reports</li>
              <li>• Forensic Findings (CSV)</li>
              <li>• Technical Methodology (PDF)</li>
            </ul>
          </div>

          {/* Educational Content */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-bold text-gray-900 mb-4">Educational Content</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Video Tutorials (5-10 min)</li>
              <li>• FAQ & Glossary</li>
              <li>• Research Papers</li>
              <li>• Expert Interviews</li>
            </ul>
          </div>

          {/* Advocacy & Tools */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-bold text-gray-900 mb-4">Advocacy & Tools</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Audit Advocacy Toolkit</li>
              <li>• Sample Letters & Scripts</li>
              <li>• Petitions & Campaigns</li>
              <li>• Volunteer Resources</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Mission to Verify Democracy</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Your contribution funds forensic research, legal challenges, and public education about election integrity. Every dollar helps expose the truth.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Election Truth Alliance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
