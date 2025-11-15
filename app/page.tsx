'use client';

import { useState, useEffect } from 'react';
import { Bell, BriefcaseIcon, Mail, MapPin, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  postedTime: string;
  salary: string;
  description: string;
  skills: string[];
  isNew: boolean;
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Simulate fetching jobs
    setTimeout(() => {
      setJobs([
        {
          id: '1',
          title: 'Junior Data Analyst',
          company: 'Tech Solutions Inc.',
          location: 'Bangalore, India',
          type: 'Full-time',
          postedTime: '2 hours ago',
          salary: '₹3-5 LPA',
          description: 'We are looking for a passionate fresher Data Analyst to join our analytics team. You will work with SQL, Excel, and Power BI.',
          skills: ['SQL', 'Excel', 'Power BI', 'Python'],
          isNew: true
        },
        {
          id: '2',
          title: 'Data Analyst - Entry Level',
          company: 'DataCorp Analytics',
          location: 'Mumbai, India',
          type: 'Full-time',
          postedTime: '5 hours ago',
          salary: '₹3.5-6 LPA',
          description: 'Fresh graduates welcome! Work on real-world data projects using Python, SQL, and visualization tools.',
          skills: ['Python', 'SQL', 'Tableau', 'Statistics'],
          isNew: true
        },
        {
          id: '3',
          title: 'Fresher Data Analyst',
          company: 'InfoTech Services',
          location: 'Hyderabad, India',
          type: 'Full-time',
          postedTime: '1 day ago',
          salary: '₹2.8-4.5 LPA',
          description: 'Join our data team as a fresher. Training provided on advanced analytics tools and techniques.',
          skills: ['Excel', 'SQL', 'R', 'Data Visualization'],
          isNew: false
        },
        {
          id: '4',
          title: 'Graduate Data Analyst',
          company: 'E-commerce Giants',
          location: 'Delhi NCR, India',
          type: 'Full-time',
          postedTime: '1 day ago',
          salary: '₹4-6.5 LPA',
          description: 'Analyze customer behavior and trends. Ideal for recent graduates with strong analytical skills.',
          skills: ['SQL', 'Python', 'Google Analytics', 'Excel'],
          isNew: false
        },
        {
          id: '5',
          title: 'Associate Data Analyst',
          company: 'Financial Services Ltd.',
          location: 'Pune, India',
          type: 'Full-time',
          postedTime: '2 days ago',
          salary: '₹3.2-5 LPA',
          description: 'Entry-level position for data enthusiasts. Work with financial data and create insightful reports.',
          skills: ['Excel', 'SQL', 'Power BI', 'Statistics'],
          isNew: false
        },
        {
          id: '6',
          title: 'Junior Business Analyst',
          company: 'Startup Hub',
          location: 'Remote',
          type: 'Remote',
          postedTime: '3 days ago',
          salary: '₹3-5 LPA',
          description: 'Remote opportunity for freshers. Analyze business metrics and support data-driven decisions.',
          skills: ['SQL', 'Excel', 'Python', 'Communication'],
          isNew: false
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        alert(`Success! You'll receive daily job alerts at ${email}`);
      }, 500);
    }
  };

  const filteredJobs = filter === 'new' ? jobs.filter(job => job.isNew) : jobs;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BriefcaseIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Data Analyst Job Alerts
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fresher Positions · Updated Every Hour
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800 dark:text-green-200">
                Agent Active
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Alert Subscription Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Get Daily Job Alerts</h2>
              </div>
              <p className="text-blue-100 mb-6 max-w-2xl">
                Our intelligent agent monitors 50+ job boards every hour and sends you personalized alerts for fresher Data Analyst positions matching your profile.
              </p>

              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Subscribe</span>
                  </button>
                </form>
              ) : (
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg max-w-md">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">You're subscribed! Check your email daily.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Active Jobs</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{jobs.length}</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <BriefcaseIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">New Today</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {jobs.filter(j => j.isNew).length}
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg. Salary</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">₹4 LPA</p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Latest Opportunities
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
              }`}
            >
              All Jobs
            </button>
            <button
              onClick={() => setFilter('new')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'new'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
              }`}
            >
              New Today
            </button>
          </div>
        </div>

        {/* Job Listings */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      {job.isNew && (
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-3">
                      {job.company}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BriefcaseIcon className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.postedTime}</span>
                      </div>
                      <div className="font-semibold text-green-600 dark:text-green-400">
                        {job.salary}
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                  <button className="px-4 py-2 rounded-lg font-semibold border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Agent Info */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            How Our Job Alert Agent Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Continuous Monitoring
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Scans 50+ job platforms every hour for new Data Analyst positions
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Smart Filtering
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Filters for fresher-friendly roles with relevant skill requirements
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg flex-shrink-0">
                <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Instant Alerts
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sends email notifications within minutes of new job postings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
