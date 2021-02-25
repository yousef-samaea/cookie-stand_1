'use strict';
let s = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const ggg = document.getElementById('ss');
const table = document.createElement('table');
ggg.appendChild(table);
const header = function () {
  const r1 = document.createElement('tr');
  table.appendChild(r1);
  const d1 = document.createElement('th');
  r1.appendChild(d1);
  d1.textContent = 'location';
  for(let i =0 ;i < time.length;i++) {
    const time1 = document.createElement('th');
    r1.appendChild(time1);
    time1.textContent = time[i];

  }
  const r3 = document.createElement('th');
  r1.appendChild(r3);
  r3.textContent = 'Daily Location Total';
};
header();
const footer = function () {
  const r4 = document.createElement('tr');
  table.appendChild(r4);
  const d5 = document.createElement('th');
  r4.appendChild(d5);
  d5.textContent = 'Totals';
  for(let i = 0 ;i < s.length;i++) {
    const s1 = document.createElement('th');
    r4.appendChild(s1);
    s1.textContent = s[i];
  }
};



function Rest(name, minc, maxc, avgCookie) { //salesperhour //customerperhour //sum
  this.name = name;
  this.minc = minc;
  this.maxc = maxc;
  this.avgCookie = avgCookie,
  this.sum = 0;
  this.cookiesale = [];
  this.cup = [];

}
Rest.prototype.random =function () {
  return generateRandomNumber(this.minc,this.maxc);
};

Rest.prototype.render = function () {
  const r2 = document.createElement('tr');
  table.appendChild(r2);
  const d3 = document.createElement('td');
  r2.appendChild(d3);
  d3.textContent = this.name;

  for (let i = 0; i < time.length; i++) {
    let b = this.random();
    this.cup.push(Math.ceil(b));
    let a = b * this.avgCookie;
    a = Math.ceil(a);
    this.cookiesale.push(a);
    s[i] += a;
    s[14] += a;
    const d2 = document.createElement('td');
    r2.appendChild(d2);
    d2.textContent = a;
    this.sum += a;
  }
  const d4 = document.createElement('td');
  r2.appendChild(d4);
  d4.textContent =this.sum;


};


function generateRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}
const Seattle = new Rest('Seattle', '23', '65', '6.3');
const Tokyo = new Rest('Tokyo', '3', '24', '1.3');
const Dubai = new Rest('Dubai', '11', '38', '3.7');
const Paris = new Rest('Paris', '20', '38', '2.3');
const Lima = new Rest('Lima', '2', '16', '4.6');
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();


footer();