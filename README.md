# Honor Society Website
A Svelte-based website I created for my honor society.
It uses Svelte *(a JS component framework that conveniently combines HTML, CSS, and JS into components)* and SvelteKit *(a JS app framework for managing the server and compiling into a static site)*

# What Is Svelte and Why Did I Choose It?
Quick Help: [Svelte Docs](https://svelte.dev/docs/svelte/overview)

While you may think Svelte is a programming language, because you save Svelte files in .svelte, Svelte itself is not so much a programming language as a framework for writing HTML, CSS, and JavaScript code simply and quickly.

Svelte uses a component system, where you can import child Svelte files into a parent Svelte file, so as not to make one obscenely long HTML file.

It also uses special $ dollar sign functions called runes that can do specific tasks. For example, putting your JavaScript variable inside the parentheses of the `$state()` rune makes it so the viewer's webpage is automatically updated when the variable changes.

Because it is a popular JavaScript framework, there are a lot of plugins for it as well. Need a Calendar widget? Boom, there's already one for that. Need an icon pack or animations to spruce up your website? Sveltes has you covered.

Lastly, Svelte employs conditional statements, such as if/else/each, that can be used within your HTML code to hide or show elements. For example, I have different buttons displayed when the webpage is accessed on a phone rather than a computer.

Now, of course, you can't just give a web browser a .svelte file and expect it to read it. You have to first use SvelteKit, an app framework, to convert it into HTML and JavaScript.


# Installing and Changing the Website
In the following section, I will show you a quick guide on how you can download the Svelte project, make your own changes, and upload the code to your web browser.

## Installing Node.js and NPM
The first step is to download Node.js and its package manager NPM (the JavaScript engine required for compiling the Svelte code).

**Windows:**
Go to [Node.js/Download](https://nodejs.org/en/download/current) and select x64 if your computer was made in the last 10 years and your processor is 64-bit, x86 if your processor is ancient and 32-bit, or Arm 64 if your fancy and your processor is an Arm chip. From there you'll want to download the Windows installer and install it like any standard app. Before moving on, do yourself a quick favor and open up the `Command-Line` app and run the commands `node -v` and `npm -v` to verify that you installed everything correctly.

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

# Using VSCode
The easiest and quickest method.

### Installing VSCode

Unless you're reading this in your parents' basement on an IBM Thinkpad, you probably don't write your code in a terminal editor like VIM and instead want to use a modern code editor. The one I use and recommend is [VSCode](https://code.visualstudio.com/), which, while it has become more bloated with AI garbage over the years, still makes for a very versatile and powerful editor.

Installing it is similar to installing any other app, so I won't waste time covering the process here; simply download it and follow the installer's prompts.

### Install Svelte Plugin

To help you in your coding journey, I first recommend installing the [Official Svelte plugin](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) from the plugin tab in VSCode, as it will definitely save you time when you can't figure out why your code isn't working.

# Downloading Svelte Project

Now that we have everything installed, we can now download the actual Svelte project (which is stored in this Github repository a.k.a code folder).

To download the code you can either use the GIT terminal utility, or rather, just click on the big green code button and select `download ZIP`. From there you can unzip the folder titled `Honor-Society-Website-main` and place it wherever you may please, though I recommend in your Documents folder so the rest of the commands work :)

## Opening Project in VSCode
Once you have everything installed, downloaded, and saved in the Documents folder, let's open the project in VSCode. The easiest way to do that is to open up VSCode, then click the `Open Folder...` (For macos its `Open...`) and select the `honorsite` subfolder inside of the `Honor-Society-Website-main` you saved as that is the one that contains all of your code.


## Alternative: Opening Project in Terminal
If you want to make things harder on yourself and not use VSCode...

**Windows:**
Once you have unzipped and moved the "Honor-Society-Website" to your documents folder, you can now open up the "Command-Line" program, and type in `cd Documents\Honor-Society-Website-main` (note: don't include the double-quotes). This will change your current directory in the terminal to the "Honor-Society-Website" folder.

From there, run `cd honorsite` to enter the folder containing the Svelte project.


**Macos**
Once you have unzipped and moved the "Honor-Society-Website" to your documents folder, you can now open up the "Terminal" app (command+space opens up Spotlight so you can search for it quickly), and from there you can type and run `cd Documents/Honor-Society-Website-main`. This will change your current directory in the terminal to the "Honor-Society-Website" folder.

From there, run `cd honorsite` to enter the folder containing the Svelte project.


# Setting Project Up
Now, regardless of whether you choose to open the project in the terminal or VSCode, the terminal is required to finish installing the packages needed to run and compile our Svelte project.

The very first time you open the project, you have to install the project's dependencies. To do that, you can  either use the terminal app or, if you're using VS Code like me, click `View > Terminal` to open a terminal shell directly in the current folder, allowing you to run commands straight from there. *You can also do `WIndows: CTRL + SHIFT + BACKTICK ` or `MACOS: COMMAND + SHIFT + BACKTICK` to open up the terminal super quick.*

The first time you open the project up you have to run `npm install` in the temrinal to install all of the packages the project needs.

# Running the Website
Now that you have your project all set up, you are now ready to either run a development *(testing)* server to see what the website looks like or compile the website to upload to your HostGator server.

If you want to test out the website, simply go back to the terminal and run `npm run dev` and click on the link that is then displayed in the terminal

For example, if your terminal looks like this:
```
VITE v7.1.5  ready in 371 ms 
➜  Local:   http://localhost:5173/honors
```
Open the link: http://localhost:5173/honors in your web browser, and you will see a preview of what your website will look like.

If you want to be able to access that from a different device on your internet or, say, your phone, you can run `npm run dev -- --host` and type whatever the network link is that it gives you.

**Note: at any point, if you want to end the server, just press `CTRL+C` and it will stop the server.**

# Compiling the website
Long Explanation of compiling:
Now, once you have all of the changes you want saved and are ready to upload the website to HostGator, it's time to compile (convert) all of the Svelte code into a static site *computer-readable* HTML and JS, don't ask me how or why it works; it just does! Now, when starting from scratch, you have to specify how you want to build your code, either to be run by a JS web server, or, like us, hosted on a static website hoster like HostGator. Thankfully Svelte makes it real easy to change the way it compiles, and i've already changed the project settings to build static files for each page, under the /honor path on the website. I also turned on trailing slash, which means that the HTML file for each page is put into a subfolder and the HTML file is called index.html, which has the benefit of you not having to specify the .html in your URL. You simply have to run `npm run build` in your project folder (honorsite) and that will output the files in a `build` folder inside of the honorsite folder.

In case that was too long and you didn't read, *TLDR:* to convert the code into HTML and JavaScript, you simply have to run `npm run build` and that will output the files in a `build` folder inside of the honorsite folder.

I have configured the project to expect to have a `base path` at `/honors`, so the main page would be at https://www.faith-homeschool.com/honors, the photos will be at https://www.faith-homeschool.com/honors/photos, etc...
In order to upload it to HostGator, you have to copy the files in the newly created `build` folder to a folder named `honors` in the root folder on your web server. If you would like to learn how to change the `base path`, refer to the section on `svelte.config.js` below.

# Wrapping up
To quickly recap, in these sections, you learned how to:
1. Install Node.js and VSCode
2. Download the code and open it in VSCode
3. Install all of the required libraries by running `npm install`
4. Previewing the website with `npm run dev`
5. And finally, uploading the website to your web server by running `npm run build` and saving the contents of the build folder under a folder titled `honors` on your web server.


