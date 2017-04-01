# Vagrant

### What and why?

https://24ways.org/2014/what-is-vagrant-and-why-should-i-care/

Basically:

- Development environment mimics production environment to avoid eventual and ongoing deployment issues that can be caught during development
- Prevent pollution of developer's personal computer/conflicts with other projects. Why would I install redis/postgres/whatever else on the computer I currently use to play games, write code and browse the internets?
- Dependency management for the project. Instead of assuming project members have Postgres 9.3 installed (instead of 9.1 or 9.6), the Vagrant config/environment details what should be installed and houses that installation.
- Other things, generally very important for projects with a high member attrition (onboarding)[TOC]: # 

### Specifically for scholarship ... how?

1. [Install Virtualbox on your person machine](https://www.virtualbox.org/wiki/Downloads)
2. [Install Vagrant on your personal machine](https://www.vagrantup.com/docs/installation/)
3. Run in terminal `vagrant box add ubuntu/trusty64` 
4. Run in terminal `vagrant plugin install vagrant-notify-forwarder` (Details here: https://github.com/mhallin/vagrant-notify-forwarder)
5. Run in project root `vagrant up` (this will take a while and is likely where things might go wrong, if anything. Ask team if you're stuck)
6. `vagrant ssh` to portal into the virtual machine. You should appear in the project root.
7. `npm start` to run the app, should be accessible on at localhost on port 3000.

### Things to note:

- What Vagrant installs on the VM and how can be found in `${projectRoot}/build/bootstrap.sh`
- Vagrant syncs files between your personal machine and the VM, so you can still work in files the way you're used to. The process itself, however, runs in the VM.
- You can still `npm install` on your personal machine. This is recommended.
- If you have an older machine, keep in mind that the VM is taking up CPU and RAM. It will also not be able to operate as quickly as a typical process on your machine. Keep that in mind when developing/running builds/etc. If you want to change how many resources the VM is allowed to use, you can edit the memory lines in `${projectRoot}/Vagrantfile`
- `vagrant up` when you start working, `vagrant halt` when you're done. You shouldn't keep the VM running in the background for no reason.
- It should be safe to recreate (`vagrant destroy -f && vagrant up`) at any time, if you have the need to.
- The database for the application is also running within the VM. A port on your personal machine is being forwarded to access it. Here is how you can connect using GUI software (e.g. Postico):
    - Host: localhost
    - Port: 5433
    - User: vagrant
    - Password: vagrant
    - Database Name: scholarship

<img src="http://i.imgur.com/JgvzcmH.png" />

- More notes will be added here in response to questions/issues.


