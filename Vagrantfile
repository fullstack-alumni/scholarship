Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.network :forwarded_port, guest: 5432, host: 5433
  config.vm.network :forwarded_port, guest: 3000, host: 3000

  config.vm.synced_folder "./", "/scholarship"

  config.vm.provision :shell, privileged: true, :path => "bootstrap.sh"

end
