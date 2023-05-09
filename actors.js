const academyMembers = [
    {
      memID: 101,
      name: 'Bob Brown',
      films: ['Bob I', 'Bob II', 'Bob III', 'Bob IV']
    },
    {
      memID: 142,
      name: 'Sallie Smith',
      films: ['A Good Day', 'A Better Day']
    },
    {
      memID: 187,
      name: 'Fred Flanders',
      films: ['Who is Fred?', 'Where is Fred?', 'What is Fred?', 'Why Fred?']
    },
    {
      memID: 203,
      name: 'Bobbie Boots',
      films: ['Walking Boots', 'Hiking Boots', 'Cowboy Boots']
    }
  ];

  for(let i=0; i<academyMembers.length; i++) {
    if(academyMembers[i].memID == 187) {
        console.log("Academy Member with an id of 187 is" + " " + academyMembers[i].name);
    }
    let film = academyMembers[i].films;
    for(let j=0; j<film.length; j++) {
        if(film[j].length >= 3){
            console.log(academyMembers[i].name + ", is in at least 3 films");
        }
    }
    let nameStarts = academyMembers[i].name.slice(0, 3);
    if(nameStarts == "Bob") {
        console.log("The name that starts with Bob is" + " " + academyMembers[i].name);
    }
  }