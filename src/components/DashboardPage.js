import React from 'react';
import {Link} from 'react-router-dom';

const DashboardPage = () => (
  <div>
    <p>Placeholder for the final dashboard.  For now just links to other apps</p>
    <Link className="button" to="/dashboard360">360 Application</Link>
    <Link className="button" to="/dashboardskilluser">Skills Application</Link>
  </div>
);

export default DashboardPage;
