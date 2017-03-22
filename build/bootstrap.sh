#!/usr/bin/env bash

# Hit up that update, son.
apt-get update

# ----- Postgres Installation -----

# Postgres Installation
apt-get install -y postgresql

# fix permissions
sed -i "s/#listen_address.*/listen_addresses = '*'/" /etc/postgresql/9.3/main/postgresql.conf
# replace the ipv4 host line with the above line
cat >> /etc/postgresql/9.3/main/pg_hba.conf <<-EOF
# Accept all IPv4 connections - FOR DEVELOPMENT ONLY!!!
host    all         all         all             trust
EOF

# Create Role and login
su postgres -c "psql -c \"CREATE ROLE vagrant SUPERUSER LOGIN PASSWORD 'vagrant'\" "

# Create scholarship database
su postgres -c "createdb -E UTF8 -T template0 --locale=en_US.utf8 -O vagrant scholarship"

apt-get upgrade -y

service postgresql restart

# ----- End Postgres Installation -----

# ----- Node Installation -----

curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -

apt-get install -y build-essential
apt-get install -y nodejs

# ----- End Node Installation -----

# ----- Environment and Ease of Use -----

    # ----- zshhhhhh -----
apt-get install -y zsh
apt-get install -y git-core
su vagrant -c "wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh"
su vagrant -c "echo 'vagrant' | chsh -s `which zsh`"

    # ----- Environment and Conveniences -----
echo "cd /scholarship" >> /home/vagrant/.zshrc