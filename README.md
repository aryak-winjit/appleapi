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
# edited
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


