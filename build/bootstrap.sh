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
chsh -s $(which zsh) vagrant
sed -i '/ZSH_THEME=/c\ZSH_THEME="dstufft"' /home/vagrant/.zshrc
sed -i "/PROMPT=/c\PROMPT='
%{$fg[magenta]%}%n%{$reset_color%} at %{$fg[yellow]%}%m%{$reset_color%} in %{$fg_bold[g$
$(virtualenv_info)$(prompt_char) '" /home/vagrant/.oh-my-zsh/themes/dstufft.zsh-theme

echo "So it seems like things probably broke right above this line (Authentication failure/command not found), but it is actually fine. All done!"

    # ----- Environment and Conveniences -----
echo "export NODE_ENV=development" >> /home/vagrant/.zshrc
echo "export PORT=3000" >> /home/vagrant/.zshrc
echo "export DB_NAME=scholarship" >> /home/vagrant/.zshrc
echo "export DB_USER=vagrant" >> /home/vagrant/.zshrc
echo "export DB_PASS=vagrant" >> /home/vagrant/.zshrc
echo "export DB_PORT=5432" >> /home/vagrant/.zshrc
echo "export DB_HOST=localhost" >> /home/vagrant/.zshrc

echo "cd /home/vagrant/scholarship" >> /home/vagrant/.zshrc
