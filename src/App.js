import React, { useState } from 'react';
import Notifications from './Notifications';
import './App.css';

function App() {


  const [notification, setNotification] = useState(3)


  return (
       <main className = 'grid'>
          <section className='flex-notification'>
            <div className='flex-notification-qtd'>
              <h2>Notifications</h2>
              <p>{notification}</p>
            </div>
            
            <p><a href='#' className='mark-read' >Mark all as read</a></p>

          </section>

        <Notifications props={{notification, setNotification}} ></Notifications>
          
       </main>
  );
}

export default App;
