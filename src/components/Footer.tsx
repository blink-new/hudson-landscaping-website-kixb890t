import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Hudson Landscaping & Snow</h3>
            <p className="text-gray-400">Your trusted partner for year-round property maintenance.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="tel:2163167289" className="hover:text-white">216-316-7289</a>
              </li>
              <li className="mb-2">
                <a href="tel:2163791335" className="hover:text-white">216-379-1335</a>
              </li>
              <li className="mb-2">
                <a href="mailto:dniaura@iCloud.com" className="hover:text-white">dniaura@iCloud.com</a>
              </li>
              <li>
                <a href="mailto:ethanpmoore@iCloud.com" className="hover:text-white">ethanpmoore@iCloud.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media links here if available */}
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Hudson Landscaping & Snow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
