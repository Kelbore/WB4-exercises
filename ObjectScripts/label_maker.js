const profile = {
    name: 'Ariel Kelbore',
    address: '3890 E Ponce De Leon Ave',
    city: 'Clarkston',
    state: 'Georgia',
    zip: '30021'

}

printContact(profile);

function printContact(profile) {
    console.log(profile.name);
    console.log(profile.address);
    console.log(profile.city, profile.state, profile.zip);
}