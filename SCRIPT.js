var d=new Date()
var weekday=new Array(7)
weekday[0]="Duminica"
weekday[1]="Luni"
weekday[2]="Marti"
weekday[3]="Miercuri"
weekday[4]="Joi"
weekday[5]="Vineri"
weekday[6]="Sambata"
document.write("Azi este " + weekday[d.getDay()])
