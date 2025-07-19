@echo off
echo Setting up environment...
set PATH=C:\Program Files\Git\bin;C:\Program Files\nodejs;%PATH%

echo Configuring Git...
git config --global user.name "Timidfang123X"
git config --global user.email "timidfang123x@github.com"

echo Initializing git repository...
git init

echo Adding all files...
git add .

echo Creating initial commit...
git commit -m "Initial commit: Penalty Shootout React game"

echo Adding remote repository...
git branch -M main
git remote add origin https://github.com/Timidfang123X/Penalty-Shootout.git

echo Pushing to GitHub...
git push -u origin main

echo Done!
pause 