/**
 * Created by Prohos on 6/10/2017.
 */
// let user = 'uagxoqkrhoefvy';
// let password = '2b73eb05ec84228acc33f190110358f8f913528cf335f66988ff7e02c9065408';
// let hostName = 'ec2-23-21-220-48.compute-1.amazonaws.com';
// let dbName = 'dskhg8rg9ua2l';


export let pgp = require('pg-promise')(/*options*/);
export let db = pgp('postgres://postgres:prohos@localhost:5432/news');
// let db = pgp(`postgres://${user}:${password}@${hostName}:5432/${dbName}`);