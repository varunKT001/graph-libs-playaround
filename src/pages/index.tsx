import React from 'react';
import { Link } from 'react-router';

const Home: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            unovis
            <ul>
              <li>
                <Link to='/unovis/region-based-clustering'>
                  region-based clustering
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
