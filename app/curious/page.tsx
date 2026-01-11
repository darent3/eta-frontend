'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CuriousPage() {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);
  const [itemsToShow, setItemsToShow] = useState(10);

  const articles = [
    {
      id: 1,
      title: "Election Integrity Study Reveals Discrepancies",
      description: "A comprehensive study conducted by election security experts has uncovered significant discrepancies in voting machine audit trails across multiple states.",
      date: "Dec 24, 2025",
      category: "For the Curious"
    },
    {
      id: 2,
      title: "Understanding Voting Machine Audit Trails",
      description: "A detailed explanation of how voting machine audit trails work and why they matter for election integrity.",
      date: "Dec 23, 2025",
      category: "For the Curious"
    },
    {
      id: 3,
      title: "Questions to Ask Your Local Election Officials",
      description: "A guide for curious citizens about election procedures and verification methods in your community.",
      date: "Dec 21, 2025",
      category: "For the Curious"
    },
    {
      id: 4,
      title: "History of Election Verification Methods",
      description: "An overview of how election verification has evolved over time and current best practices.",
      date: "Dec 19, 2025",
      category: "For the Curious"
    },
    {
      id: 5,
      title: "Common Misconceptions About Electronic Voting",
      description: "Clearing up myths and providing factual information about how electronic voting systems actually work.",
      date: "Dec 17, 2025",
      category: "For the Curious"
    },
    {
      id: 6,
      title: "What is a Risk-Limiting Audit?",
      description: "Understanding the statistical methods behind risk-limiting audits and why they're important for election security.",
      date: "Dec 15, 2025",
      category: "For the Curious"
    },
    {
      id: 7,
      title: "How to Read Election Results Data",
      description: "A beginner's guide to understanding and interpreting election results and precinct-level data.",
      date: "Dec 13, 2025",
      category: "For the Curious"
    },
    {
      id: 8,
      title: "The Role of Paper Ballots in Modern Elections",
      description: "Why paper ballots remain a critical component of election security in the digital age.",
      date: "Dec 11, 2025",
      category: "For the Curious"
    },
    {
      id: 9,
      title: "Election Security Best Practices Around the World",
      description: "Exploring how other democracies approach election security and verification.",
      date: "Dec 9, 2025",
      category: "For the Curious"
    },
    {
      id: 10,
      title: "Understanding Chain of Custody in Elections",
      description: "What chain of custody means and why maintaining it is essential for election integrity.",
      date: "Dec 7, 2025",
      category: "For the Curious"
    },
    {
      id: 11,
      title: "The Importance of Voter Education",
      description: "How informed voters contribute to stronger election integrity and democratic processes.",
      date: "Dec 5, 2025",
      category: "For the Curious"
    },
    {
      id: 12,
      title: "Cybersecurity in Election Systems",
      description: "An exploration of the cybersecurity measures protecting voting systems and election data.",
      date: "Dec 3, 2025",
      category: "For the Curious"
    }
  ];

  const displayedArticles = articles.slice(0, itemsToShow);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-4">
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-900">Election Truth Alliance</h1>
                <p className="text-xs text-gray-600">Where data meets democracy</p>
              </div>
            </div>

            <div className="flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 text-sm font-medium whitespace-nowrap">About</Link>
              <Link href="/curious" className="text-blue-600 text-sm font-medium whitespace-nowrap font-bold">For the Curious</Link>
              <Link href="/analysts" className="text-gray-700 hover:text-blue-600 text-sm font-medium whitespace-nowrap">For Data Analysts</Link>
              <Link href="/advocates" className="text-gray-700 hover:text-blue-600 text-sm font-medium whitespace-nowrap">For Advocates</Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600 text-sm font-medium whitespace-nowrap">Resources</Link>
            </div>

            <div className="flex-shrink-0 max-w-xs">
              <input 
                type="text"
                placeholder="Search For the Curious Documents"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 bg-white"
              />
            </div>

            <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition flex-shrink-0">
              Donate
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">For the Curious: Understanding Election Integrity</h1>
          
          <p className="text-gray-700 mb-6">
            Are you interested in learning how elections work and why election integrity matters? This section is designed for everyone—from high school students to retired professionals—who wants to understand the mechanisms of voting, the importance of election audits, and how citizens can participate in ensuring fair elections.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">What You'll Learn:</h3>
              <p className="text-gray-700">
                Explore the history of voting systems, understand how modern voting machines work, learn about election security best practices, and discover why post-election audits are critical to election integrity. We break down complex topics into clear, accessible explanations.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Why This Matters:</h3>
              <p className="text-gray-700">
                Informed citizens are the foundation of strong democracy. Understanding how elections are conducted, what safeguards exist, and where improvements can be made empowers you to ask the right questions and engage meaningfully in civic processes.
              </p>
            </div>

            <p className="text-gray-700">
              Whether you're preparing for a classroom presentation, curious about election procedures, or simply want to be a more informed voter, our curated articles and educational resources will deepen your understanding of election integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Collapse/Show Controls */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setExpandedArticle(expandedArticle === null ? 1 : null)}
            className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Collapse
          </button>
          <span className="text-gray-700">Show:</span>
          <select 
            value={itemsToShow} 
            onChange={(e) => setItemsToShow(parseInt(e.target.value))}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-600"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={articles.length}>All</option>
          </select>
        </div>
      </section>

      {/* Articles List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="space-y-6">
          {displayedArticles.map((article) => (
            <div key={article.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{article.description}</p>
              <p className="text-xs text-gray-500">{article.date}</p>
            </div>
          ))}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Election Truth Alliance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}