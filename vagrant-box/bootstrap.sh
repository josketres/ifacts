#!/usr/bin/env bash

set -e # Exit script immediately on first error.
set -x # Print commands and their arguments as they are executed.

sudo apt-get -qy update
sudo apt-get -qy install vim
sudo apt-get -qy install git

which node npm phantomjs >/dev/null && 
{ echo "Tools already installed"; exit 0; }

# install node.js
cd /opt
wget -q http://nodejs.org/dist/v0.10.15/node-v0.10.15-linux-x86.tar.gz
tar xvf node-v0.10.15-linux-x86.tar.gz
rm node-v0.10.15-linux-x86.tar.gz 

sudo sh -c "cat > /etc/profile.d/node-init.sh" <<'EOF'
export NODEHOME=/opt/node-v0.10.15-linux-x86
export PATH=$PATH:$NODEHOME/bin
EOF

# install phantom-js dependencies
sudo apt-get -qy install fontconfig 

# install phantom-js
cd /opt 
wget -q https://phantomjs.googlecode.com/files/phantomjs-1.9.1-linux-i686.tar.bz2
tar xvf phantomjs-1.9.1-linux-i686.tar.bz2
rm phantomjs-1.9.1-linux-i686.tar.bz2

sudo sh -c "cat > /etc/profile.d/phantomjs-init.sh" <<'EOF'
export PHANTOMJSHOME=/opt/phantomjs-1.9.1-linux-i686
export PATH=$PATH:$PHANTOMJSHOME/bin
EOF
