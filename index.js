let Client = require('hazelcast-client').Client;
let Config = require('hazelcast-client').Config;
let config = new Config.ClientConfig(); // We create a config for illustrative purposes.
// We do not adjust this config. Therefore it has default settings.

Client.newHazelcastClient(config).then(function (client) {
    console.log(client.getLocalEndpoint()); // Connects and prints some information about this client
});

Client.newHazelcastClient(config).then(function (client) {
    var personnelMap;
    return client.getMap('personnelMap').then(function (mp) {
        personnelMap = mp;
        return personnelMap.put('Juliano', 'IT');
    }).then(function () {
        return personnelMap.put('Rodolfo', 'IT');
    }).then(function () {
        return personnelMap.put('Eduardo', 'IT');
    }).then(function () {
        console.log("Added IT personnel. Logging all known personnel");
        return personnelMap.entrySet();
    }).then(function (allPersonnel) {
        allPersonnel.forEach(function (person) {
            console.log(person[0] + ' is in ' + person[1] + ' department');
        });
        return client.shutdown();
    });
});