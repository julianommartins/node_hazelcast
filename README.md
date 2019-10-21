# node_hazelcast
Node js using Hazelcast example

1- Download Hazelcast from  https://hazelcast.org/download/

2- Configure Hazelcast - see - https://docs.hazelcast.org/docs/3.6/manual/html-single/index.html#using-the-scripts-in-the-package

3- Perform 
npm -i 

4- Run
node index.js

You will see something like:
[DefaultLogger] INFO at LifecycleService: HazelcastClient is started
Added IT personnel. Logging all known personnel
TESTE1 is in IT department
TESTE2 is in IT department
TESTE3 is in IT department
[DefaultLogger] INFO at LifecycleService: HazelcastClient is shuttingDown
[DefaultLogger] INFO at LifecycleService: HazelcastClient is shutdown



5- Optional - Enable management center
Go to hazelcast.xml file, search for management
Add true to the option. Restart hazelcast.
Now you can open the management center and check your configuration/maps/etc:

http://localhost:8080/hazelcast-mancenter
