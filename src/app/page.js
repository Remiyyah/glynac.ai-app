// 'use client'; // This is necessary because we're using useEffect and interacting with the DOM

// import { useEffect } from 'react';
// import Chart from 'chart.js/auto';

// const page = () => {
//   useEffect(() => {
//     const ctx = document.getElementById('myChart').getContext('2d');
//     const myChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//           label: '# of Votes',
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });

//     return () => {
//       myChart.destroy(); // Clean up the chart instance on component unmount
//     };
//   }, []);

//   return (
//     <div className="bg-gray-100 flex h-screen">
//       {/* Left Navbar */}
//       <div className="w-64 bg-gray-800 text-white p-4 fixed h-full overflow-y-auto">
//         <h1 className="text-xl font-bold mb-4">CleverControl</h1>
//         <ul>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Summary</a></li>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Users activity</a></li>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Screenshots</a></li>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Web pages visited</a></li>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Keyboard events</a></li>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Geolocation</a></li>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Events log</a></li>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Installed applications</a></li>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Reports</a></li>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Live viewing</a></li>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Webcam live</a></li>
//           <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Media recordings</a></li>
//         </ul>
//       </div>

//       {/* Right Content */}
//       <div className="ml-64 p-4 flex-grow overflow-y-auto">
//         <div className="flex justify-between items-center mb-4">
//           <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
//             + Add new computer
//           </button>
//           <div className="flex space-x-4">
//             <input type="date" className="border border-gray-300 rounded px-2 py-1" />
//             <select className="border border-gray-300 rounded px-2 py-1">
//               <option>All computers</option>
//               <option>Computer 1</option>
//               <option>Computer 2</option>
//             </select>
//             <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//               Clear filter
//             </button>
//           </div>
//         </div>
//         <h1 className="text-2xl font-bold mb-4">Users activity</h1>
//         <p className="mb-4">Average users activity in programs and sites</p>
//         {/* User Activity Cards */}
//         <div className="grid grid-cols-2 gap-4">
//           <div className="bg-white p-4 rounded shadow">
//             <div className="flex items-center mb-4">
//               <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-10 h-10 rounded mr-2" />
//               <div>
//                 <h2 className="font-bold">Jennifer Miller</h2>
//                 <span>HR Manager</span>
//               </div>
//               <div className="ml-auto">Online</div>
//             </div>
//             <p>Start time: 05:50</p>
//             <p>End time: 20:46</p>
//             <p>Active time: 7h. 32m.(7h. 32m.)</p>
//             <h2 className="text-2xl font-bold mt-4">100%</h2>
//             <p>Productivity</p>
//             {/* Add more details as needed */}
//           </div>
//           {/* Repeat for other users */}
//         </div>
//         {/* Chart.js Graphs */}
//         <div className="mt-8">
//           <canvas id="myChart" width="400" height="200"></canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

'use client'; // This is necessary because we're using useEffect and interacting with the DOM

import { useEffect } from 'react';
import Chart from 'chart.js/auto';

const DashboardPage = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      myChart.destroy(); // Clean up the chart instance on component unmount
    };
  }, []);

  return (
    <div className="bg-gray-100 flex h-screen">
      {/* Left Navbar */}
      <div className="w-64 bg-gray-800 text-white p-4 fixed h-full overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">Glynac AI</h1>
        <ul>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Summary</a></li>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Users activity</a></li>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Profile</a></li>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Authentication</a></li>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Notifications</a></li>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Subscription</a></li>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Events log</a></li>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Preferences</a></li>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Reports</a></li>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">History</a></li>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Account</a></li>
          <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Support</a></li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="ml-64 p-4 flex-grow overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            + Add new user
          </button>
          <div className="flex space-x-4">
            <input type="date" className="border border-gray-300 rounded px-2 py-1" />
            <select className="border border-gray-300 rounded px-2 py-1">
              <option>All computers</option>
              <option>Computer 1</option>
              <option>Computer 2</option>
            </select>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Clear filter
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Users activity</h1> {/* Darker text */}
        <p className="mb-4">Average users activity in programs and sites</p>
        {/* User Activity Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center mb-4">
              <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-10 h-10 rounded mr-2" />
              <div>
                <h2 className="font-bold text-gray-900">Placeholder Name</h2> {/* Darker text */}
                <span className="text-gray-700">HR Manager</span> {/* Slightly darker text for role */}
              </div>
              <div className="ml-auto">Online</div>
            </div>
            <p className="font-bold text-gray-600" >Start time: 05:50</p>
            <p className="font-bold text-gray-600">End time: 20:46</p>
            <p className="font-bold text-gray-600">Active time: 7h. 32m.(7h. 32m.)</p>
            <h2 className="text-2xl font-bold mt-4 text-gray-400">100%</h2>
            <p className='text-gray-400'>Productivity</p>
            {/* Add more details as needed */}
          </div>
          {/* Repeat for other users */}
        </div>
        {/* Chart.js Graphs */}
        <div className="mt-8">
          <canvas id="myChart" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;