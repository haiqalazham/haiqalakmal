---
title: "Solus Build"
author: "Haiqal"
date: "2019-07-26"
path: "/solus-build"
---

## zsh setup:
oh-my-zsh  
theme: aphrodite  
colors: hyper-snazzy  
  
## budgie setup:
theme: mojave-gtk-theme  
icon: la-capitaine  
font: san francisco regular  
applets: budgie-network-applet, budgie-calendar-applet  
```bash
sudo cp /usr/share/xdg/autostart/nm-applet.desktop /usr/share/xdg/autostart/nm-applet.desktop.bak
```
```bash
sudo cp /usr/share/xdg/autostart/budgie-desktop-nm-applet.desktop /usr/share/xdg/autostart/budgie-desktop-nm-applet.bak
```
```bash
sudo rm /usr/share/xdg/autostart/nm-applet.desktop
```
```bash
sudo rm /usr/share/xdg/autostart/budgie-desktop-nm-applet.desktop
```
lightdm-gtk-greeter: use mojave and san francisco  
  
## tlp: 
After installation:  
```bash
sudo tlp-stat -s
```
  
## libinput-gestures: 
```bash
sudo gpasswd -a $USER input
```
4 finger swipe left: xdotool key ctrl+alt+Right  
4 finger swipe right: xdotool key ctrl+alt+Left  
3 finger swipe left: xdotool key super+n  
3 finger swipe right: xdotool key super+n  
  
## vim:
vim-plug: lightline, NERDTree  
  
## keyboard shortcuts:
Super + T - Terminal  
Super + 1, 2, 3, 4 - Workspace 1, 2, 3, 4  
Super + Shift + 1, 2, 3, 4 - Move window to workspace 1, 2, 3, 4  
  
## firefox:
Create a new string pref in about:config named widget.content.gtk-theme-override with value Mojave-light  