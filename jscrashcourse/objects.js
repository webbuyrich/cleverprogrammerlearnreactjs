/* OBJECTS IN JAVASCRIPT */

let team = {
    name: 'Texans', 
    city: 'Houston', 
    conference: 'AFC South',
    founded: 1999,
    teamInfo: function(){
        return this.city + ' ' + this.name + ' - ' + this.founded
    }
}
//console.log(team.name);
//console.log(team.city)

// change value
team.name = 'Oilers';
//console.log(team.name)

// increase founded
team.founded++;
//console.log(team.founded)

// decrease founded
team.founded--;
//console.log(team.founded)

team.name = 'Texans';
console.log(team.teamInfo())