import React, { useState } from 'react';
import { Calendar } from '..';

export default function Cald() {
   const [currentYear, setCurrentYear] = useState(2020);

   function onClick () {
      setCurrentYear((currentYear) => currentYear + 1);
   }

   return (
      <div>
         <Calendar currentYear={currentYear} />
         <button onClick={onClick}>Next year</button>
      </div>
   )
}