var Client = require('hazelcast-client').Client;
var Aggregators = require('hazelcast-client').Aggregators;
var Predicates = require('hazelcast-client').Predicates;

Client.newHazelcastClient().then(function (hazelcastClient) {
    var client = hazelcastClient;
    var map;
    hazelcastClient.getMap('person-age-map').then(function (mp) {
        map = mp;
        return map.putAll([
            ['Philip', 46],
            ['Elizabeth', 44],
            ['Henry', 13],
            ['Paige', 15]
        ])
    }).then(function () {
        return map.aggregate(Aggregators.count());
    }).then(function (count) {
        console.log('There are ' + count + ' people.');
        return map.aggregateWithPredicate(Aggregators.count(), Predicates.lessEqual('this', 18));
    }).then(function (count) {
        console.log('There are ' + count + ' children.');
        return map.aggregate(Aggregators.numberAvg());
    }).then(function (avgAge) {
        console.log('Average age is ' + avgAge);
        return client.shutdown();
    });
});