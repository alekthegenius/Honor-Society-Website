# Honor Society Website
A Svelte-based website I created for my honor society.
It uses Svelte *(a JS component framework that conveniently combines HTML, CSS, and JS into components)* and SvelteKit *(a JS app framework for managing the server and compiling into a static site)*

# Installing and Changing the Website
A quick guide on mkaing changes to the website

## Installing Node.JS and NPM
The first step is to download Node.js and its package manager NPM (the JavaScript engine required for compiling the Svelte code).

**Windows:**
Go to [Node.js/Download]([https/en/download/current](https://nodejs.org/en/download/current)) and select x64 if your computer has been made in the last 10 years and your processor is 64-bit, x86 if your processor is ancient and 32-bit, or Arm 64 if your fancy and your processor is an Arm chip. From there you'll want to download the Windows installer and install it like any standard app.

**Macos:**
On macOS, I recommend the command-line approach to have an easier time. Run the following commands to install Node.js and NPM (the package manager).


```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"
# Download and install Node.js:
nvm install 24
# Verify the Node.js version:
node -v # Should print "v24.9.0".
# Verify npm version:
npm -v # Should print "11.6.0".
```

## Installing VSCode

Unless you're reading this in your parents' basement on an IBM Thinkpad, you probably don't write your code in VIM and instead want to use a modern code editor. The one I use and recommend is [VSCode](https://code.visualstudio.com/). While it has become more bloated with AI garvage over the years, it still makes for a very versatile and powerful editor.

Installing it is like installing any app, so I won't waste time covering it here; just download it and click through the installer.

## Downloading Svelte Project

Now that we have everything installed, we can now download the actual svelte project (which is stored in this repository a.k.a code folder).

To download the code you can either use the GIT terminal utility, or rather, just click on the big green code button and click on download ZIP. From there you can unzip the folder titled "Honor-Society-Website" and place it wherever you may please, though I recommend in your Documents folder so the rest of the commands work :)


**Windows:**
Once you have unzipped and moved the "Honor-Society-Website" to your documents folder, you can now open up the "Command-Line" program, and type in `cd Documents\Honor-Society-Website` (note: dont include the double-quotes). This will change your current directory in the terminal to the "Honor-Society-Website" folder.
From there, run `cd hnorsite` to enter the folder containing the Svelte project.


**Macos**
Once you have unzipped and moved the "Honor-Society-Website" to your documents folder, you can now open up the "Terminal" app (command+space opens up spotlight so you can search for it quickly), and from there you can type and run `cd Documents/Honor-Society


Now finally run `npm install` to install all of the packages we need to run and compile the website.

