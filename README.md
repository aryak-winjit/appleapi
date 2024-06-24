## install dependencies
### ubuntu
```
sudo apt update
sudo apt upgrade -y

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
sudo apt install npm -y
npm -v
cd appleapi
npm install
node app.js

npm install pm2 -g
pm2 -v
pm2 install pm2-logrotate
cd appleapi
npm install
# node app.js

pm2 start "npm run start" --name appleapi
```





# amaozon Linux 2
```
sudo yum update
sudo yum upgrade -y
sudo yum install -y nodejs
sudo yum install npm -y
node -v
npm -v
sudo npm install pm2 -g
pm2 -v
pm2 install pm2-logrotate
cd appleapi
npm install
# node app.js

pm2 start "npm run start" --name appleapi
pm2 ls
pm2 save
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u ec2-user --hp /home/ec2-user
```
# setup docker, kubernetes and helm
```
# #!/bin/bash
# apt-get update
# apt upgrade
# apt install -y docker.io
# docker ––version
# systemctl enable docker
# systemctl start docker
# sudo curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# apt-get update
# apt-get install -y apt-transport-https ca-certificates curl
# curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg| gpg -o /usr/share/keyrings/kubernetes-archive-keyring.gpg --dearmor
# echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] http://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list
# apt-get update 
# apt-get -y install kubectl
# apt-get -y install make
# sudo systemctl status docker

# curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
# sudo apt-get install apt-transport-https --yes
# echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
# sudo apt-get update
# sudo apt-get install helm

## install rdp
sudo apt install ubuntu-desktop
sudo apt install xrdp
sudo ufw allow 3389/tcp
sudo systemctl status xrdp
sudo adduser xrdp ssl-cert

# EOF
```
