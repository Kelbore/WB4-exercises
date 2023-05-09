const vehicles = [
    {
      color: 'Silver',
      type: 'Minivan',
      registrationState: 'CA',
      licenseNo: 'ABC-101',
      registrationExpires: new Date('3-10-2022'),
      capacity: 7
    },
    {
      color: 'Red',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'A1D-2NC',
      registrationExpires: new Date('8-31-2023'),
      capacity: 3
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'A22-X00',
      registrationExpires: new Date('9-31-2023'),
      capacity: 6
    },
    {
      color: 'Red',
      type: 'Car',
      registrationState: 'CA',
      licenseNo: 'ABC-222',
      registrationExpires: new Date('12-10-2022'),
      capacity: 5
    },
    {
      color: 'Black',
      type: 'SUV',
      registrationState: 'CA',
      licenseNo: 'EEE-222',
      registrationExpires: new Date('12-10-2021'),
      capacity: 7
    },
    {
      color: 'Red',
      type: 'SUV',
      registrationState: 'TX',
      licenseNo: 'ZZ2-101',
      registrationExpires: new Date('12-30-2022'),
      capacity: 5
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'CAC-7YT',
      registrationExpires: new Date('1-31-2023'),
      capacity: 5
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'CA',
      licenseNo: '123-ABC',
      registrationExpires: new Date('3-31-2023'),
      capacity: 5
    }
  ];

  for(let i=0; i<vehicles.length; i++) {
    if(vehicles[i].color == 'Red') {
        console.log("The color of" + " " + vehicles[i].type + " " + "is red");
    }
    let day = new Date();
    if(vehicles[i].registrationExpires < day) {
        console.log("The car with" + " " + vehicles[i].licenseNo + " " + "is expired");
    }
    if(vehicles[i].capacity >= 6) {
        console.log("Vehicle with license number" + " " + vehicles[i].licenseNo + " " + "holds more than 6 people");
    }
    const v = vehicles[i];
    const substr = v.licenseNo.slice(-3);
    if(substr == '222') {
        console.log("Vehicle with license number" + " " + vehicles[i].licenseNo + " " + "ends with 222");
    }
  }
  

