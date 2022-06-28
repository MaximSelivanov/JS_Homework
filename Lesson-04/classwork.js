var user = {'person age': '30'};
user.name = 'Ivan';
user['person age'] = '35'; 
for (k in user) {
    console.log(k + ':' + user[k]);
};
delete user.name;
console.log('name' in user);
