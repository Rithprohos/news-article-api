/**
 * Created by Prohos on 6/10/2017.
 */
let user = 'jdngxmmawuexbc';
let password = '22bd20a6c6374240fe3a757fe29095f321cb089133e9186114375f3753148d73';
let hostName = 'ec2-54-197-232-155.compute-1.amazonaws.com';
let dbName = 'd1brg0ggc39ru4';


export let pgp = require('pg-promise')(/*options*/);
 export let db = pgp('postgres://postgres:prohos@localhost:5432/news');
//export let db = pgp(`postgres://${user}:${password}@${hostName}:5432/${dbName}`);
