let data = [
    {
        name: 'Deanndra',
        age: '20'
    },
    {
        name: 'Fernando',
        age: '23'
    },
    {
        name: 'Pochito',
        age: '10 month'
    },
    {
        name: 'Seven',
        age: '6 month'
    },
    {
        name: 'Bella',
        age: '6 month'
    },
    {
        name: 'Miso',
        age: '1 year'
    },
    {
        name: 'Ivy',
        age: '3 week'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is a ' + item.age + ' old' + '</div>';
});

info.innerHTML = details.join('\n');