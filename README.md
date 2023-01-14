# NodeJs

Basic API using NodeJs, Express and Mongoose.

CRUD endpoints for 'klant' and 'brood'

Create, Update and Delete work pretty much as expected.

Create endpoints: \<host\>/api/klant and \<host\>/api/brood

Update endpoints: \<host\>/api/klant/\<id\> and \<host\>/api/brood/\<id\>

Delete endpoints: \<host\>/api/klant/\<id\> and \<host\>/api/brood/\<id\>
  
Read endpoints for get all: \<host\>/api/klant and \<host\>/api/brood

Read endpoints for get one: \<host\>/api/klant/\<id\> and \<host\>/api/brood/\<id\>
  
Read query options:

limit

offset

model attributes for filtering

Example: \<host\>/api/brood?limit=3&offset=2&kleur=wit&graan=tarwe
