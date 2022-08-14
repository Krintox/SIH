$(document).ready(function() {
    $('#calendar').evoCalendar({

        theme: "Orange Coral",
        calendarEvents: [
      {
        id: 'jan001h', // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2022", // Event date (required)
        description: "",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'jan026h', // Event's ID (required)
        name: "Republic Day", // Event name (required)
        date: "January/26/2022", // Event date (required)
        description: "",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'may023c', // Event's ID (required)
        name: "Summer Term", // Event name (required)
        date: "May/23/2022", // Event date (required)
        description: "Commencement of Summer Term classes from 23/05-11/06 for registered students",
        type: "class", // Event type (required)
        everyYear: true, // Same event every year (optional)
        color:"#51fa03",
      },
      {
        id: 'jun011c', // Event's ID (required)
        name: "Summer Term", // Event name (required)
        date: "June/11/2022", // Event date (required)
        description: "End of Summer Term classes",
        type: "class", // Event type (required)
        everyYear: true, // Same event every year (optional)
        color:"#51fa03",
      }, 
      {
        name: "Summer Vacation",
        badge: "04/24 - 06/19", // Event badge (optional)
        date: ["April/24/2022", "June/19/2022"], // Date range
        description: "Summer Vacation", // Event description (optional)
        type: "event",
        color: "#e70e06" // Event custom color (optional)
      },
      {
        name: "Summer Fest",
        badge: "04/24 - 06/19", // Event badge (optional)
        date: ["April/24/2022", "June/19/2022"], // Date range
        description: "Training and Industrial skills during Summer Internship programme for selected students as a part of their internship programme", // Event description (optional)
        type: "internship",
        color: "#0529f5" // Event custom color (optional)
      },
      
    ]
    })
  })