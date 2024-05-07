"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[2616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||l;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={title:"Managing Your Files",slug:"/part-1-transitioning-to-the-shell/managing-your-files/"},o=void 0,r={unversionedId:"transitioning-to-the-shell/managing-your-files/index",id:"transitioning-to-the-shell/managing-your-files/index",title:"Managing Your Files",description:"Downloading, unzipping, copying, moving, renaming and deleting files in a graphical user interface is normally fairly intuitive. Now we'll learn how to perform the same operations in a shell. Once you can organise your files, you are well on your way to being able to use the shell more effectively for day to day tasks.",source:"@site/docs/01-transitioning-to-the-shell/03-managing-your-files/index.md",sourceDirName:"01-transitioning-to-the-shell/03-managing-your-files",slug:"/part-1-transitioning-to-the-shell/managing-your-files/",permalink:"/part-1-transitioning-to-the-shell/managing-your-files/",draft:!1,editUrl:"https://github.com/dwmkerr/effective-shell/edit/main/docs/01-transitioning-to-the-shell/03-managing-your-files/index.md",tags:[],version:"current",frontMatter:{title:"Managing Your Files",slug:"/part-1-transitioning-to-the-shell/managing-your-files/"},sidebar:"sidebar",previous:{title:"Navigating Your System",permalink:"/part-1-transitioning-to-the-shell/navigating-your-system/"},next:{title:"Becoming a Clipboard Gymnast",permalink:"/part-1-transitioning-to-the-shell/become-a-clipboard-gymnast/"}},s={},p=[{value:"Creating a Playground",id:"creating-a-playground",level:2},{value:"Finding out about files",id:"finding-out-about-files",level:2},{value:"Extracting the Zip",id:"extracting-the-zip",level:2},{value:"Deleting Files",id:"deleting-files",level:2},{value:"Examining the Contents of a Folder",id:"examining-the-contents-of-a-folder",level:2},{value:"Copying a File",id:"copying-a-file",level:2},{value:"Saving Some Keystrokes",id:"saving-some-keystrokes",level:2},{value:"Renaming or Moving Files",id:"renaming-or-moving-files",level:2},{value:"Creating a New Folder",id:"creating-a-new-folder",level:2},{value:"Copying or Moving Multiple Files with Wildcards",id:"copying-or-moving-multiple-files-with-wildcards",level:2},{value:"Deleting a Folder",id:"deleting-a-folder",level:2},{value:"Looking at Text Files",id:"looking-at-text-files",level:2},{value:"Zipping up Files",id:"zipping-up-files",level:2},{value:"Summary",id:"summary",level:2}],d={toc:p};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Downloading, unzipping, copying, moving, renaming and deleting files in a graphical user interface is normally fairly intuitive. Now we'll learn how to perform the same operations in a shell. Once you can organise your files, you are well on your way to being able to use the shell more effectively for day to day tasks."),(0,i.kt)("p",null,"Now that we know how to organise the files in our computer, we'll take a look at how to download files, create new files, preview the contents of files, open files, copy, move and delete files."),(0,i.kt)("p",null,"This chapter will introduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"wget"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unzip"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mv"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rmdir"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"zip")," commands. We'll also briefly look at ",(0,i.kt)("em",{parentName:"p"},"wildcards")," and ",(0,i.kt)("em",{parentName:"p"},"redirection"),"."),(0,i.kt)("h2",{id:"creating-a-playground"},"Creating a Playground"),(0,i.kt)("p",null,"Before we start copying, deleting, moving and renaming files, we should create a 'playground' area we can work in. We don't want to test all of this on our own personal files until we know exactly what we're doing! "),(0,i.kt)("p",null,"To help with this, I've created a zipped up 'samples' which has a lot of files in it which we can use to play with. Now the file itself is available on the ",(0,i.kt)("a",{parentName:"p",href:"https://effective-shell.com"},"effective-shell.com")," website, right here:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://effective-shell.com/downloads/effective-shell-samples.zip"},"effective-shell.com/downloads/effective-shell-samples.zip")),(0,i.kt)("p",null,"We ",(0,i.kt)("em",{parentName:"p"},"could")," open up a web browser, download the file, unzip it and then start from there, but this book is all about how to deal with every day tasks in your shell, so let's skip the browser and do it in the shell instead!"),(0,i.kt)("p",null,"Open your shell - if you've not yet got set up with your shell, that's OK, just check ",(0,i.kt)("a",{parentName:"p",href:"/part-1-transitioning-to-the-shell/getting-started/"},"Chapter 1 - Getting Started"),"."),(0,i.kt)("p",null,"Now that you have your shell open, we can run the ",(0,i.kt)("inlineCode",{parentName:"p"},"wget")," command (",(0,i.kt)("em",{parentName:"p"},"Web Get"),") to download the zip file. Let's download it to our Home folder. If you are not sure what the Home folder is, check ",(0,i.kt)("a",{parentName:"p",href:"/part-1-transitioning-to-the-shell/navigating-your-system/"},"Chapter 2- Navigating Your System"),"."),(0,i.kt)("p",null,"First, we'll move to our home directory, then download the file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd\nwget https://effective-shell.com/downloads/effective-shell-samples.zip\n")),(0,i.kt)("p",null,"You'll see something like this:"),(0,i.kt)("img",{alt:"Screenshot: wget",src:n(2434).Z,width:"800px"}),(0,i.kt)("p",null,"When you call the ",(0,i.kt)("inlineCode",{parentName:"p"},"wget")," command, you can give it any web address and it'll download it to your current folder. It also shows the progress of the download interactively (particularly useful if it's a big file!)."),(0,i.kt)("p",null,"As an aside, if we were not in our home folder when we called the ",(0,i.kt)("inlineCode",{parentName:"p"},"wget")," command, we'd download the file to wherever we are currently working in. If we wanted to be explicit about where we download the file, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-O")," (",(0,i.kt)("em",{parentName:"p"},"Output File"),") flag to say explicitly where we want to download the file."),(0,i.kt)("p",null,"As an example, if were not in the home folder, but wanted to download there, we'd just call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd\nwget -O ~/playground.zip https://effective-shell.com/downloads/effective-shell-samples.zip\n")),(0,i.kt)("p",null,"Now that we've downloaded the file, let's look at our home directory now, with a quick call to ",(0,i.kt)("inlineCode",{parentName:"p"},"ls ~"),":"),(0,i.kt)("img",{alt:"Screenshot: ls home",src:n(9074).Z,width:"800px"}),(0,i.kt)("p",null,"Cool - we have the zip file downloaded! Now we need to work out how to unzip it so we can get to the files in the zip archive."),(0,i.kt)("h2",{id:"finding-out-about-files"},"Finding out about files"),(0,i.kt)("p",null,"One of the interesting things you can do in a shell is ask it to tell you more about a file. This can be useful if we've got a file, and we're not sure what it might be. Let's try it out now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"file ~/effective-shell-samples.zip\n")),(0,i.kt)("img",{alt:"Screenshot: file",src:n(6470).Z,width:"800px"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," command is showing us we have a zip file - now it's time to unzip it!"),(0,i.kt)("h2",{id:"extracting-the-zip"},"Extracting the Zip"),(0,i.kt)("p",null,"Right now we have a zip file. We need to extract it, unpack the files so that we can play with them. Again, in a system with a graphical user interface, this is easy, generally you just double click on it. But we're going to use the shell for this!"),(0,i.kt)("p",null,"Run the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"unzip ~/effective-shell-samples.zip\n")),(0,i.kt)("p",null,"Now let's look at what we've got with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," command:"),(0,i.kt)("img",{alt:"Screenshot: unzip",src:n(868).Z,width:"800px"}),(0,i.kt)("p",null,"Excellent - we've now got a ",(0,i.kt)("em",{parentName:"p"},"folder")," which contains all of the files in the zip archive."),(0,i.kt)("h2",{id:"deleting-files"},"Deleting Files"),(0,i.kt)("p",null,"Now that we've downloaded and unzipped the file, we don't need the zipped version any more. So let's delete this file."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rm")," (",(0,i.kt)("em",{parentName:"p"},"Remove"),") command can be used to delete a file. If we run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rm ~/effective-shell-samples.zip\nls | grep samples\n")),(0,i.kt)("p",null,"Then we'll see the following:"),(0,i.kt)("img",{alt:"Screenshot: rm",src:n(7257).Z,width:"800px"}),(0,i.kt)("p",null,"Notice that the zip file is gone - just the folder is left."),(0,i.kt)("p",null,"By the way - be really careful with the ",(0,i.kt)("inlineCode",{parentName:"p"},"rm")," command. Unlike in a graphical interface, it won't put files you delete into a recycle bin, they are blatted forever! In a later chapter we'll see some ways to change this behaviour for your local machine, but always remember ",(0,i.kt)("inlineCode",{parentName:"p"},"rm")," is a little risky!"),(0,i.kt)("p",null,"However one thing it ",(0,i.kt)("em",{parentName:"p"},"will")," do to try and help you not make mistakes is let you know if you are trying to delete a ",(0,i.kt)("em",{parentName:"p"},"folder"),", not a file."),(0,i.kt)("p",null,"Run the following command to try and delete the unzipped folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rm ~/effective-shell-samples\n")),(0,i.kt)("img",{alt:"Screenshot: rm error directory",src:n(7318).Z,width:"800px"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rm")," command has not succeeded in this case - it's warning us that we're not deleting a file, but a whole directory."),(0,i.kt)("p",null,"Now we can get around this by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"-r")," flag, which means 'recursive' - i.e. not just the folder but everything in it. But use this with caution!"),(0,i.kt)("h2",{id:"examining-the-contents-of-a-folder"},"Examining the Contents of a Folder"),(0,i.kt)("p",null,"Let's take a look at what is in the samples. By the way, the output you see on your computer might have a few more files in it as I might have added some after writing this article!"),(0,i.kt)("p",null,"In a graphical user interface, we'd open the folders and look at the files. In the shell, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," command to show the contents of a folder."),(0,i.kt)("p",null,"Now the ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," command is ",(0,i.kt)("em",{parentName:"p"},"not")," installed by default on all systems. So if you are on a Mac, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install tree\n")),(0,i.kt)("p",null,"If you are on Linux, you will likely already have it. If you don't, use your distributions package manager to get it (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"apt-get install -y tree"),")."),(0,i.kt)("p",null,"Using a non-universal command is generally ",(0,i.kt)("em",{parentName:"p"},"not")," our goal in this book, but in these early stages while we are transitioning from the graphical user interface, the ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," command can be really helpful. Later on we'll see how to use the more universal ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command to give a similar output."),(0,i.kt)("p",null,"Try it out with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tree ~/effective-shell-samples\n")),(0,i.kt)("img",{alt:"Screenshot: tree",src:n(4).Z,width:"800px"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," command shows you all of the folders and files in a location. If we are unsure what one of the files is, we can ask the shell to give us more info. For example, I could find out more about the ",(0,i.kt)("inlineCode",{parentName:"p"},"loas-gch.JPG")," file by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"file ~/effective-shell-samples/pictures/loas-gch.JPG\n")),(0,i.kt)("img",{alt:"Screenshot: file info for JPEG file",src:n(6392).Z,width:"800px"}),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," command is already showing it is a bit more clever. It knows that the file is a ",(0,i.kt)("inlineCode",{parentName:"p"},"JPEG")," file (a picture), but is giving other details as well."),(0,i.kt)("h2",{id:"copying-a-file"},"Copying a File"),(0,i.kt)("p",null,"Let's say we really love that photo, and we want to make a copy of it. We can do that easily by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"cp")," (_Copy) command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp ~/effective-shell-samples/pictures/laos-gch.JPG ~/effective-shell-playground/pictures/laos-gch-copy.JPG\n")),(0,i.kt)("p",null,"This makes a copy of the file - if you are not sure if it has worked, just run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tree ~/effective-shell-samples\n")),(0,i.kt)("img",{alt:"Screenshot: cp command",src:n(3).Z,width:"800px"}),(0,i.kt)("p",null,"We can see we've made a copy."),(0,i.kt)("h2",{id:"saving-some-keystrokes"},"Saving Some Keystrokes"),(0,i.kt)("p",null,"Wow, it's painful putting ",(0,i.kt)("inlineCode",{parentName:"p"},"~/effective-shell-samples")," before everything! From ",(0,i.kt)("a",{parentName:"p",href:"/part-1-transitioning-to-the-shell/navigating-your-system/"},"Chapter 2- Navigating Your System")," we already know how to change directory, so let's do that now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/effective-shell-samples\n")),(0,i.kt)("p",null,"Remember - ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," is ",(0,i.kt)("em",{parentName:"p"},"change directory"),". Excellent - until we tell our shell otherwise, this our new working directory."),(0,i.kt)("h2",{id:"renaming-or-moving-files"},"Renaming or Moving Files"),(0,i.kt)("p",null,"You might have noticed that the photos have different endings - one of them ends in ",(0,i.kt)("inlineCode",{parentName:"p"},".JPG"),". Let's rename it so that it has the ending ",(0,i.kt)("inlineCode",{parentName:"p"},".jpeg")," to be consistent with the others."),(0,i.kt)("p",null,"To do this, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mv")," (",(0,i.kt)("em",{parentName:"p"},"Move"),") command. When it comes down to it, moving a file or renaming a file amount to the same kind of operation, so one command can do both."),(0,i.kt)("p",null,"Rename the copy we made of the photo by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mv pictures/loas-gch-copy.JPG pictures/loas-gch-copy.jpeg\n")),(0,i.kt)("p",null,"Let's run ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," to see what happened. Remember - now that our working folder is the playground, we don't even need to tell ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," where to look, if we give it no arguments it'll assume we're looking at the working directory:"),(0,i.kt)("img",{alt:"Screenshot: mv command",src:n(5714).Z,width:"800px"}),(0,i.kt)("p",null,"Much nicer! Now our copied file has been moved to have a new name. It's in the same folder still, but you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"mv")," to also change what folder a file is in."),(0,i.kt)("h2",{id:"creating-a-new-folder"},"Creating a New Folder"),(0,i.kt)("p",null,"Perhaps we're not happy with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"pictures")," for our folder we've been playing with, maybe we'd prefer to have them all in a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"photos"),"?"),(0,i.kt)("p",null,"Probably the first thing we'd do in a graphical environment is create a new folder - so let's do thee same here!"),(0,i.kt)("p",null,"Run the commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir photos\ntree\n")),(0,i.kt)("p",null,"And we should see:"),(0,i.kt)("img",{alt:"Screenshot: mkdir command",src:n(5704).Z,width:"800px"}),(0,i.kt)("p",null,"We've use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir")," command, which is short for ",(0,i.kt)("em",{parentName:"p"},"Make Directory"),". This is how we create a new folder in the shell."),(0,i.kt)("p",null,"Now let's say we wanted to be ",(0,i.kt)("em",{parentName:"p"},"really")," organised, and create a photos folder by year and topic, perhaps ",(0,i.kt)("inlineCode",{parentName:"p"},"2019/outdoors/pictures"),". In a graphical user interface, we'd have to create each folder one at a time. In the shell, it's easy!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p 2019/outdoors/pictures\ntree\n")),(0,i.kt)("p",null,"Let's see how it looks:"),(0,i.kt)("img",{alt:"Screenshot: mkdirp command",src:n(8960).Z,width:"800px"}),(0,i.kt)("p",null,"All we had to do was add the ",(0,i.kt)("inlineCode",{parentName:"p"},"-p")," flag (which means \"make the parent folder if it doesn't already exist) and we can create a whole set of subfolders. Now we're starting to see why knowing the shell can be powerful - if you know you have this trick up your sleeve you can be doing things like re-organising files ",(0,i.kt)("em",{parentName:"p"},"more effectively")," in a shell than in your graphical user interface!"),(0,i.kt)("h2",{id:"copying-or-moving-multiple-files-with-wildcards"},"Copying or Moving Multiple Files with Wildcards"),(0,i.kt)("p",null,"Let's copy the photos that we have in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pictures")," folder into the ",(0,i.kt)("inlineCode",{parentName:"p"},"photos/2019/outdoor/climbing")," folder."),(0,i.kt)("p",null,"When we run the ",(0,i.kt)("inlineCode",{parentName:"p"},"cp")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"mv")," command, we can use a ",(0,i.kt)("em",{parentName:"p"},"wildcard")," to specify the files we are copying and moving. A wildcard is a simple pattern which can be used to select multiple files. Here's how we can copy the photos over:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cp pictures/* photos/2019/outdoor/climbing\n")),(0,i.kt)("p",null,"Here's how it works for\nNow we need to copy over our files from the ",(0,i.kt)("inlineCode",{parentName:"p"},"pictures")," folder to the ",(0,i.kt)("inlineCode",{parentName:"p"},"2019/outdoor/photos")," folder. We'll use exactly the command we used before to copy a file - ",(0,i.kt)("inlineCode",{parentName:"p"},"cp"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cp pictures/* photos/2019/outdoors/climbing/\n\n$ tree photos\nphotos\n\u251c\u2500\u2500 2019\n\u2502\xa0\xa0 \u2514\u2500\u2500 outdoors\n\u2502\xa0\xa0     \u2514\u2500\u2500 climbing\n\u2502\xa0\xa0         \u251c\u2500\u2500 laos-gch-copy.jpeg\n\u2502\xa0\xa0         \u251c\u2500\u2500 laos-gch.JPG\n\u2502\xa0\xa0         \u2514\u2500\u2500 nepal-mardi-himal.jpeg\n\u2514\u2500\u2500 2020\n    \u2514\u2500\u2500 outdoors\n        \u2514\u2500\u2500 climbing\n\n6 directories, 3 files\n")),(0,i.kt)("p",null,"Here we've used the ",(0,i.kt)("em",{parentName:"p"},"wildcard")," symbol, which is ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),', to say "everything in the folder". Many commands can take wildcards as inputs. We\'ll see much more about them later!'),(0,i.kt)("h2",{id:"deleting-a-folder"},"Deleting a Folder"),(0,i.kt)("p",null,"Now that we have our more organise ",(0,i.kt)("inlineCode",{parentName:"p"},"2019/outdoors/photos")," folder, we don't need the ",(0,i.kt)("inlineCode",{parentName:"p"},"photos")," folder we created. So let's delete it! Remember how ",(0,i.kt)("inlineCode",{parentName:"p"},"rm")," removes a file, and ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir")," creates a folder? Well ",(0,i.kt)("inlineCode",{parentName:"p"},"rmdir")," will remove a folder!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rmdir photos\ntree\n")),(0,i.kt)("img",{alt:"Screenshot: rmdir command",src:n(6729).Z,width:"800px"}),(0,i.kt)("p",null,"As an important sidenote, just how ",(0,i.kt)("inlineCode",{parentName:"p"},"rm")," doesn't move files to your recycle bin, so you cannot undo the operation, ",(0,i.kt)("inlineCode",{parentName:"p"},"rmdir")," works the same way. So if we try to remove a directory which has things in it, such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"pictures")," directory, it will fail:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rmdir pictures\n")),(0,i.kt)("img",{alt:"Screenshot: rmdir fail command",src:n(4195).Z,width:"800px"}),(0,i.kt)("p",null,"In this case, it is actually easier to just call ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -r pictures"),". Why is that? Well it's just like we saw in the earlier example - ",(0,i.kt)("inlineCode",{parentName:"p"},"rm")," can delete files or directories. And if the directory is not empty, we just add the ",(0,i.kt)("inlineCode",{parentName:"p"},"-r")," (",(0,i.kt)("em",{parentName:"p"},"Recursive"),") flag to tell it to delete the directory and everything it contains."),(0,i.kt)("h2",{id:"looking-at-text-files"},"Looking at Text Files"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," and you'll see we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"quotes")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tree\n")),(0,i.kt)("img",{alt:"Screenshot: tree of new quotes folder",src:n(6227).Z,width:"800px"}),(0,i.kt)("p",null,"We're going to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," (",(0,i.kt)("em",{parentName:"p"},"Concatenate"),") command to look at the Ursula Le Guin quote. Run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat quotes/ursula-le-guin.txt\n")),(0,i.kt)("img",{alt:"Screenshot: cat",src:n(1718).Z,width:"800px"}),(0,i.kt)("p",null,"In the screenshot we snuck in a quick ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," call to see what the shell thinks the file is."),(0,i.kt)("p",null,"Why ",(0,i.kt)("em",{parentName:"p"},"Concatenate"),"? We're just showing the text in the terminal, not concatenating (i.e. joining) anything! Well the reason is that the ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," command ",(0,i.kt)("em",{parentName:"p"},"does")," concatenate files (i.e. puts them together), it's just that we only gave it one file, so it had nothing to join it to. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," writes the output to the screen, so this is one of the most common ways you'll see to quickly look at the contents of a file."),(0,i.kt)("p",null,"We'll see a ",(0,i.kt)("em",{parentName:"p"},"lot")," more about how this works later, and how you can then take that output and put it somewhere else. But for now, let's finish with a couple of tricks."),(0,i.kt)("p",null,"First, let's just ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," the whole folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat quotes/*\n")),(0,i.kt)("img",{alt:"Screenshot: cat wildcard",src:n(9391).Z,width:"800px"}),(0,i.kt)("p",null,"There we see the ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," wildcard again. We could be more specific and use something like ",(0,i.kt)("inlineCode",{parentName:"p"},"cat quotes/*.txt")," to only show files ending in ",(0,i.kt)("inlineCode",{parentName:"p"},".txt"),"."),(0,i.kt)("p",null,"Notice how the output from all of the files has been ",(0,i.kt)("em",{parentName:"p"},"concatenated together")," into a single output? That's where the ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," name comes from - it ",(0,i.kt)("em",{parentName:"p"},"concatenates"),", i.e. ",(0,i.kt)("em",{parentName:"p"},"joins")," files."),(0,i.kt)("p",null,"As one last trick, let's use this output but instead of showing it on the screen, put it into a single ",(0,i.kt)("inlineCode",{parentName:"p"},"all-quotes.txt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat quotes/* > quotes/all-quotes.txt\ntree\ncat quotes/all-quotes.txt\n")),(0,i.kt)("img",{alt:"Screenshot: cat redirect",src:n(1415).Z,width:"800px"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},">")," part of this is called a ",(0,i.kt)("em",{parentName:"p"},"redirect operator")," - in short it's telling the shell not to write to the screen, ",(0,i.kt)("em",{parentName:"p"},"but to write to a file"),". We've concatenated all of the individual quotes and made a single file from them."),(0,i.kt)("p",null,"We'll look at wildcards and redirection in a lot more detail as we continue through the book!"),(0,i.kt)("h2",{id:"zipping-up-files"},"Zipping up Files"),(0,i.kt)("p",null,"Let' say that we want to zip up the new ",(0,i.kt)("inlineCode",{parentName:"p"},"2019/outdoors/pictures")," folder. We've already seen the ",(0,i.kt)("inlineCode",{parentName:"p"},"unzip")," command, let's see how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"zip")," command to zip up a folder:"),(0,i.kt)("p",null,"Run the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"zip -r 2019-outdoor-pictures.zip 2019\n")),(0,i.kt)("p",null,"This is how it will look - there's a ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," command before and after so we can see what's happening!"),(0,i.kt)("img",{alt:"Screenshot: zip",src:n(7860).Z,width:"800px"}),(0,i.kt)("p",null,"Great! We've created a zip. Let's dissect the command a bit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zip")," just means call the ",(0,i.kt)("inlineCode",{parentName:"li"},"zip")," executable"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-r")," means ",(0,i.kt)("em",{parentName:"li"},"recursive")," we don't just want to zip the 2019 folder, we want to zip everything inside it as well!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2019-outdoor-pictures.zip")," is the name of the file we want to create, we put this first..."),(0,i.kt)("li",{parentName:"ul"},"...because everything which follows (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"2019"),") is going to be zipped, and we can specify many files and folders if we want")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this chapter we introduced the following: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"wget")," (",(0,i.kt)("em",{parentName:"li"},"web get"),") command can download a file from the web."),(0,i.kt)("li",{parentName:"ul"},"If we use the ",(0,i.kt)("inlineCode",{parentName:"li"},"-O")," (",(0,i.kt)("em",{parentName:"li"},"output location"),") flag, we can specify ",(0,i.kt)("em",{parentName:"li"},"where")," we want to download the file to."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"file")," command can be used to ask the shell what it thinks a file is (this is quite useful because unlike on some systems, not all files in Linux have a file ending)."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"unzip")," command can unzip a file for us."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"rm")," (",(0,i.kt)("em",{parentName:"li"},"remove"),") command can delete a file."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"rm")," command won't delete a folder which has files in it, unless you tell it to by adding the ",(0,i.kt)("inlineCode",{parentName:"li"},"-r")," (",(0,i.kt)("em",{parentName:"li"},"recursive"),") flag."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"tree")," command can show the files and folders in a given directory, or the current directory by default."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"cp")," (",(0,i.kt)("em",{parentName:"li"},"copy"),") command can copy a file."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"cp")," can also be given wildcards like ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," to copy many files."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"mv")," (",(0,i.kt)("em",{parentName:"li"},"move"),") command can move or rename a file."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"mkdir")," command can create a folder - it can even create a whole tree of folders if you pass the ",(0,i.kt)("inlineCode",{parentName:"li"},"-p")," (",(0,i.kt)("em",{parentName:"li"},"create parent directories"),") flag."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"rmdir")," command can delete a folder - but just like ",(0,i.kt)("inlineCode",{parentName:"li"},"rm")," it will fail if the folder is not empty!"),(0,i.kt)("li",{parentName:"ul"},"When we delete files in the shell with ",(0,i.kt)("inlineCode",{parentName:"li"},"rm")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"rmdir")," they are gone forever, no recycle bin!"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"cat")," command (",(0,i.kt)("em",{parentName:"li"},"concatenated"),") can be used to write the contents of a file to the screen."),(0,i.kt)("li",{parentName:"ul"},"We can pass multiple files to commands like ",(0,i.kt)("inlineCode",{parentName:"li"},"cat")," if we use wildcards, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"quotes/*"),"."),(0,i.kt)("li",{parentName:"ul"},"We can write the output to a file instead of the screen, if we use the ",(0,i.kt)("inlineCode",{parentName:"li"},">")," (",(0,i.kt)("em",{parentName:"li"},"redirect to file"),") operator.")))}m.isMDXComponent=!0},1415:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cat-redirect-f1b5c975936a1b619eef1198efcb51bd.png"},9391:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cat-wildcard-14d0eefcb7dd7221857c5f39db5f0dfc.png"},1718:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cat-a81e2704f0cdbb0212bd5de6b3c53cf8.png"},3:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cp-da8c2c5c8cea67d43451d876d4bb86ba.png"},6392:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/file-jpeg-info-8ff5a2ca4bb1ba0916f224ce204a8e3d.png"},6470:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/file-a824267fcbcf509a0f197686e40ad111.png"},9074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ls-home-90c668ffbc2eb7ac22715c623fdb576c.png"},5704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mkdir-57c2af124ac85f07cb18f8b00fcfde1f.png"},8960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mkdirp-4684ca958e3795dedccfed26e56dae22.png"},5714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mv-9f1b888690e88b5ae75a1c2cbc4954a3.png"},7318:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rm-error-directory-eb8abf1bd4997caee5d3879c35c1f2f0.png"},7257:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rm-17de3ec6fc67be43dd6e437f9264f2df.png"},4195:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rmdir-fail-2cdc29322732719ab601280bd1765b39.png"},6729:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rmdir-a7fc9d107815c1f7b53a2907efd78643.png"},6227:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tree-quotes-621beb5563167c8af53e79a6c01e2e2b.png"},4:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tree-cbe0b2feb4e9d491bc323895971f8a8b.png"},868:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unzip-f1a9a5d5eed1b92f90fda4b358e447f7.png"},2434:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wget-68b61c0c8b06c80bf345ce94a7a69b0b.png"},7860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zip-0f8e0ab92362d59195ccb5ceb432063d.png"}}]);