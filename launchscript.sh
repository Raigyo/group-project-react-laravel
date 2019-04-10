#sudo chmod +x launchscript.sh
#./launchscript.sh
gnome-terminal  --tab -- php artisan serve
gnome-terminal  --tab -- npm run watch
gnome-terminal  --tab -- docker-compose up
gnome-terminal  --tab --
google-chrome 'http://localhost:9000/?pgsql=db' 'http://localhost:8000/'
