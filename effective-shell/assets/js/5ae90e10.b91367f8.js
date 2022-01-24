"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[833],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||i;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2959:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],r={title:"Becoming a Clipboard Gymnast",id:"04-become-a-clipboard-gymnast",slug:"/part-1-transitioning-to-the-shell/become-a-clipboard-gymnast/"},s=void 0,p={unversionedId:"transitioning-to-the-shell/clipboard-gymnastics/04-become-a-clipboard-gymnast",id:"transitioning-to-the-shell/clipboard-gymnastics/04-become-a-clipboard-gymnast",title:"Becoming a Clipboard Gymnast",description:"For those who are new to the shell, we've covered a lot. In this chapter we'll slow down the pace of new commands a bit and instead focus on a core skill which you will already be familiar with from Graphical User Interfaces - using the clipboard.",source:"@site/docs/01-transitioning-to-the-shell/04-clipboard-gymnastics/index.md",sourceDirName:"01-transitioning-to-the-shell/04-clipboard-gymnastics",slug:"/part-1-transitioning-to-the-shell/become-a-clipboard-gymnast/",permalink:"/effective-shell/part-1-transitioning-to-the-shell/become-a-clipboard-gymnast/",editUrl:"https://github.com/dwmkerr/dwmkerr/main/docs/01-transitioning-to-the-shell/04-clipboard-gymnastics/index.md",tags:[],version:"current",frontMatter:{title:"Becoming a Clipboard Gymnast",id:"04-become-a-clipboard-gymnast",slug:"/part-1-transitioning-to-the-shell/become-a-clipboard-gymnast/"},sidebar:"anotherSidebar",previous:{title:"Managing Your Files",permalink:"/effective-shell/part-1-transitioning-to-the-shell/managing-your-files/"},next:{title:"Getting Help",permalink:"/effective-shell/part-1-transitioning-to-the-shell/getting-help/"}},c=[{value:"The Clipboard Essentials",id:"the-clipboard-essentials",children:[],level:2},{value:"Preparing the Clipboard Commands",id:"preparing-the-clipboard-commands",children:[],level:2},{value:"Copy and Paste Basics",id:"copy-and-paste-basics",children:[],level:2},{value:"Removing Formatting",id:"removing-formatting",children:[],level:2},{value:"Sorting Text",id:"sorting-text",children:[],level:2},{value:"Manipulating Text",id:"manipulating-text",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],m={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For those who are new to the shell, we've covered a lot. In this chapter we'll slow down the pace of new commands a bit and instead focus on a core skill which you will already be familiar with from Graphical User Interfaces - using the clipboard."),(0,i.kt)("p",null,"You have probably already been using the clipboard with the shell, copying and pasting commands and their outputs. However, there's a lot more we can do with the clipboard. Now we'll look at how to take this to the next level."),(0,i.kt)("p",null,"We'll also briefly introduce introduce ",(0,i.kt)("em",{parentName:"p"},"aliases")," and ",(0,i.kt)("em",{parentName:"p"},"pipelines"),", which will be covered in a lot more detail in later chapters."),(0,i.kt)("h2",{id:"the-clipboard-essentials"},"The Clipboard Essentials"),(0,i.kt)("p",null,"I wouldn't be surprised if the keyboard shortcuts to access the clipboard are already firmly locked into muscle memory for almost all readers, but just in case, here's a reminder of the shortcuts across different systems:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Windows Shortcut"),(0,i.kt)("th",{parentName:"tr",align:null},"Linux Shortcut"),(0,i.kt)("th",{parentName:"tr",align:null},"MacOS Shortcut"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cut"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"X")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"X")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u2318")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"X"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Copy"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"C")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"C")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u2318")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"C"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Paste"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"V")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"V")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u2318")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"V"))))),(0,i.kt)("p",null,"In the shell, you may find that these commands don't run as expected. For example, in the screenshot below I have tried to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," a few times to paste into terminal on Ubuntu:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot: Ctrl + V on Ubuntu",src:n(8835).Z})),(0,i.kt)("p",null,"Instead of the contents of the clipboard being dropped into the shell, we see the text ",(0,i.kt)("inlineCode",{parentName:"p"},"^V"),". Why is this?"),(0,i.kt)("p",null,"Well, some of this is historical (the shell has been around for a long time so we'll see this answer a lot!). The reason the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," key is ",(0,i.kt)("em",{parentName:"p"},"called")," the ",(0,i.kt)("em",{parentName:"p"},"Control Key")," is that it is used to send ",(0,i.kt)("em",{parentName:"p"},"control sequences")," to the computer. When we're using the Control Key, the characters we send are not plain text, they're used to perform actions. This is something that is probably pretty familiar. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"P")," is almost universally used as a shortcut for the 'Print' command."),(0,i.kt)("p",null,"We tend to think of these commands as ",(0,i.kt)("em",{parentName:"p"},"shortcuts")," to save us from finding the appropriate command in a menu or on a toolbar.  But of course most shells and command-line interfaces pre-date graphical user interfaces. They needed a way to differentiate between a user entering plain old text, and a user wanting to execute a certain command."),(0,i.kt)("p",null,"Even modern shells tend to follow the conventions around control sequences which were established by earlier ones to ensure a consistent experience for users who are used to working with shells. Shells have a whole bunch of control sequences which actually pre-date the graphical user interface, the clipboard itself, and even screens!"),(0,i.kt)("p",null,"Some of the control sequences used in the shell you might already be familiar with. For example, if you have a program running and want to cancel it, you might be used to using ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),". This actually sends a ",(0,i.kt)("em",{parentName:"p"},"signal")," to the program and typically the program responds by closing. We'll see signals again and again as we go through the book."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," combination terminates the current program. What about ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"V"),'? This is the grand-sounding "',(0,i.kt)("em",{parentName:"p"},"Verbatim Insert"),'" command. It tells the shell to write out the ',(0,i.kt)("em",{parentName:"p"},"next")," keystroke you give it. This allows you to write out 'special' characters like the escape key, left or right keys, or even the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," combination itself."),(0,i.kt)("p",null,"So if you type ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," twice, the shell writes out the text ",(0,i.kt)("inlineCode",{parentName:"p"},"^V"),". The hat symbol ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," represents ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl"),". The first command tells the shell to write out the following command, the second is then written out directly. You can try writing out some different sequences. You'll see various odd looking symbols drawn, which represent things like the ",(0,i.kt)("inlineCode",{parentName:"p"},"Alt")," key and other special keys."),(0,i.kt)("p",null,"So why do we need to care? Well the shell already has a command for ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"V"),", so we're going to need to work around this to use our familiar 'copy' and 'paste' commands."),(0,i.kt)("p",null,"How this works varies across platforms. Follow the instructions below for the platform you are using."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows")),(0,i.kt)("p",null,"If you are using a ",(0,i.kt)("em",{parentName:"p"},"Command Prompt"),", then the usual shortcuts will work fine. However, most of the time we will be using Bash. In this case the shortcuts will ",(0,i.kt)("em",{parentName:"p"},"not")," work. Instead, select the ",(0,i.kt)("em",{parentName:"p"},"Use Ctrl+Shift+C/V as Copy/Paste")," option from the properties menu:"),(0,i.kt)("img",{alt:"Screenshot: Use Ctrl+Shift+C/V as Copy/Paste on Bash on Windows",src:n(2759).Z,width:"380px"}),(0,i.kt)("p",null,"You can now use ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+C")," for copy and ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+V")," for paste. You can also copy text by just dragging the cursor over it with the right mouse button."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux")),(0,i.kt)("p",null,"On most Linux systems you'll be using the Gnome terminal, which means that you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+C")," for copy and ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+V")," for paste. You can also right click on text with the cursor to select it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MacOS")),(0,i.kt)("p",null,"Mac users can just use ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2318 + C")," for copy and ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2318 + V")," for paste. The shell doesn't use the special Mac Command character ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2318"),", which means the default keyboard mappings on MacOS work fine in a shell as they do not clash with anything."),(0,i.kt)("p",null,"Now that we've got the basics out of the way, and learnt far more than we probably wanted to about control keys, we can look at more ways to use the clipboard."),(0,i.kt)("h2",{id:"preparing-the-clipboard-commands"},"Preparing the Clipboard Commands"),(0,i.kt)("p",null,"Copying and pasting text to and from the clipboard is useful, but there's a lot more we can do. With a couple of basic commands we can hugely expand what we can do with the shell and make a whole set of everyday tasks far easier to accomplish."),(0,i.kt)("p",null,"There is one small complexity we'll need to work through before we continue. The complexity is that the clipboard is accessed in different ways on Windows, Linux and MacOS. I'll first show you how to deal with this, just follow the instructions for the platform you are working on."),(0,i.kt)("p",null,"To make things easier for the reader I'm going to assume you have created the ",(0,i.kt)("inlineCode",{parentName:"p"},"pbcopy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pbpaste")," commands by following the instructions below. I am creating these commands so that regardless of the platform you are using the tutorials will work in the same way!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows")),(0,i.kt)("p",null,"Assuming you are using WSL, you will need to run the following two commands. By the time this book is published there ",(0,i.kt)("em",{parentName:"p"},"may")," be a cleaner way, but for now this is a workaround for some limitations on the WSL system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"alias pbcopy='clip.exe'\nalias pbpaste=\"powershell.exe -command 'Get-Clipboard' | tr -d '\\r' | head -n -1\"\n")),(0,i.kt)("p",null,"Don't worry about how these commands work - by the time you've gone through the book it should make perfect sense. For now you just need to know we're adding two new commands to our toolkit - ",(0,i.kt)("inlineCode",{parentName:"p"},"pbcopy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pbpaste"),", which will work in Bash on Windows."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux")),(0,i.kt)("p",null,"Hopefully if you are Linux user the commands below will seem familiar. They install the ",(0,i.kt)("inlineCode",{parentName:"p"},"xclip")," program and create shortcuts to copy and paste. You absolutely don't need to do this if you prefer to call ",(0,i.kt)("inlineCode",{parentName:"p"},"xclip")," directly, these commands are just setup so that across all platforms the tutorial looks the same."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'sudo apt install -y xclip\nalias pbcopy="xclip -selection c"\nalias pbpaste="xclip -selection c -o"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MacOS")),(0,i.kt)("p",null,"Nothing is required on MacOS - ",(0,i.kt)("inlineCode",{parentName:"p"},"pbcopy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pbpaste")," are built in."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Making these changes permanent")),(0,i.kt)("p",null,"We've used the ",(0,i.kt)("inlineCode",{parentName:"p"},"alias")," command to create ",(0,i.kt)("inlineCode",{parentName:"p"},"pbcopy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pbpaste"),". In Bash (and most shells) an ",(0,i.kt)("inlineCode",{parentName:"p"},"alias")," is something you can configure as a shortcut to avoid having to type longer commands. There's a whole chapter on commands in Section 2."),(0,i.kt)("p",null,"These instructions will need to be repeated when you re-open your terminal. In a later chapter we'll see how to make permanent customisations to our shells so that we don't have to repeat this setup."),(0,i.kt)("p",null,"We'll also see later on how to create configuration which works across many different platforms, so that you can use the same configuration regardless of what platform you are working on. This is very useful if you work across multiple machines or operating systems!"),(0,i.kt)("h2",{id:"copy-and-paste-basics"},"Copy and Paste Basics"),(0,i.kt)("p",null,"Now that we've created these commands, we can use them to access the clipboard. For example, if I copy the following text:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Kirk Van Houten\nTimothy Lovejoy\nArtie Ziff\n")),(0,i.kt)("p",null,"Then I can paste it into the shell with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pbpaste\n")),(0,i.kt)("p",null,"And we'll see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot: pbpaste in action",src:n(5919).Z})),(0,i.kt)("p",null,"Copying is just as straightforward. If you have downloaded the Effective Shell 'samples' folder you can see we have a list of characters from \"The Simpsons\" in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"effective-shell/text/simpsons-characters.txt"),". Now we ",(0,i.kt)("em",{parentName:"p"},"could")," use the ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," command to show the contents of the file, and then manually select the text and copy it. Even easier though is to just ",(0,i.kt)("em",{parentName:"p"},"pipe")," the contents of the file to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pbcopy")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cat ~/effective-shell/text/simpsons-characters.txt | pbcopy\n")),(0,i.kt)("p",null,"The output will look similar to the below (I've included the output of ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," for reference as well):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot: pbcopy in action",src:n(2216).Z})),(0,i.kt)("p",null,"The vertical bar ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," is the ",(0,i.kt)("em",{parentName:"p"},"pipe")," operator. It tells the shell to take the output from the command on the left and send it straight to the ",(0,i.kt)("em",{parentName:"p"},"input")," of the program on the right. We're going to see a ",(0,i.kt)("em",{parentName:"p"},"lot")," more of the pipeline operator as we continue. For now it's enough to know you can use it to 'chain' commands together."),(0,i.kt)("p",null,"This might not seem super useful so far - but if the text file was a lot larger then it would be much harder to ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," it out, use the mouse to select all of the text (scrolling up through the window) and then copy it. And if you didn't have a mouse, it would be even more tricky. We're aiming to be as effective as possible when using the shell so being able to use the keyboard quickly for common tasks is critical."),(0,i.kt)("p",null,"Now we can see some real world examples of how these commands can be useful in daily tasks!"),(0,i.kt)("h2",{id:"removing-formatting"},"Removing Formatting"),(0,i.kt)("p",null,"Don't you hate it when you have to copy formatted text and don't have an easy way to paste it as ",(0,i.kt)("em",{parentName:"p"},"unformatted")," text? Here's an example, I want to copy this Wikipedia page on 'bash', and paste it into a Word document:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Copying and pasting with formatting",src:n(1107).Z})),(0,i.kt)("p",null,"Many programs have a shortcut to paste the contents of the clipboard  (such as 'command + shift + v') but if you are like me you might find yourself pasting ",(0,i.kt)("em",{parentName:"p"},"into")," a plain text editor just to copy ",(0,i.kt)("em",{parentName:"p"},"out")," the plain text."),(0,i.kt)("p",null,"If you just run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"pbpaste | pbcopy"),", you can easily strip the formatting:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stripping formatting from the clipboard",src:n(5458).Z})),(0,i.kt)("p",null,"We're just piping out the clipboard (which ends up as plain text, cause we're in a terminal!) and then piping that plain text ",(0,i.kt)("em",{parentName:"p"},"back into the clipboard"),", replacing the formatted text which was there before."),(0,i.kt)("p",null,"This little trick can be very useful. But we can use the same pattern to quickly manipulate the contents of the clipboard in more sophisticated ways."),(0,i.kt)("h2",{id:"sorting-text"},"Sorting Text"),(0,i.kt)("p",null,"Because we can ",(0,i.kt)("em",{parentName:"p"},"pipe")," the contents of the clipboard to other programs, that means we can easily use the huge number of tools available to us to work with text."),(0,i.kt)("p",null,"Let's take another look at the list of characters we have in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/plaground/text/simpsons-characters.txt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat ~/effective-shell/text/simpsons-characters.txt\nArtie Ziff\nKirk Van Houten\nTimothy Lovejoy\nArtie Ziff\nNick Riviera\nSeymore Skinner\nHank Scorpio\nTimothy Lovejoy\nJohn Frink\nCletus Spuckler\nRuth Powers\nArtie Ziff\nAgnes Skinner\nHelen Lovejoy\n")),(0,i.kt)("p",null,"We can easily take this text, sort it and then directly copy the results:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat ~/effective-shell/text/simpsons-characters.txt | sort | pbcopy\n")),(0,i.kt)("p",null,"The contents of the clipboard will now contain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Agnes Skinner\nArtie Ziff\nArtie Ziff\nArtie Ziff\nCletus Spuckler\nHank Scorpio\nHelen Lovejoy\nJohn Frink\nKirk Van Houten\nNick Riviera\nRuth Powers\nSeymore Skinner\nTimothy Lovejoy\nTimothy Lovejoy\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sort")," command has lots of different options but the defaults work fine for this case. We can see we've got quite a few duplicates - now we can move onto how we'd handle that."),(0,i.kt)("h2",{id:"manipulating-text"},"Manipulating Text"),(0,i.kt)("p",null,"Let's say someone has emailed me a list of people I need to invite to an event:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Email List",src:n(5189).Z})),(0,i.kt)("p",null,"The problem is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The list is in Excel and is formatted"),(0,i.kt)("li",{parentName:"ol"},"The list has duplicates"),(0,i.kt)("li",{parentName:"ol"},"I need to turn each name into an email address like '",(0,i.kt)("a",{parentName:"li",href:"mailto:Artie_Ziff@simpsons.com"},"Artie_Ziff@simpsons.com"),"'")),(0,i.kt)("p",null,"I want to email get the email addresses on my clipboard ready to paste into my email client quickly. We can quickly handle this task without leaving the shell."),(0,i.kt)("p",null,"If you want to try out the same commands and follow along you can copy the raw text below (don't worry if the commands are unfamiliar, we'll be seeing them again and again and breaking down each one in later chapters):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Artie Ziff\nKirk Van Houten\nTimothy Lovejoy\nArtie Ziff\nNick Riviera\nSeymore Skinner\nHank Scorpio\nTimothy Lovejoy\nJohn Frink\nCletus Spuckler\nRuth Powers\nArtie Ziff\nAgnes Skinner\nHelen Lovejoy\n")),(0,i.kt)("p",null,"First, we copy the text to the clipboard."),(0,i.kt)("p",null,"Now we can paste and sort:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pbpaste | sort\nAgnes Skinner\nArtie Ziff\nArtie Ziff\nArtie Ziff\nCletus Spuckler\nHank Scorpio\nHelen Lovejoy\nJohn Frink\nKirk Van Houten\nNick Riviera\nRuth Powers\nSeymore Skinner\nTimothy Lovejoy\nTimothy Lovejoy\n")),(0,i.kt)("p",null,"Then remove the duplicates:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pbpaste | sort | uniq\nAgnes Skinner\nArtie Ziff\nCletus Spuckler\nHank Scorpio\nHelen Lovejoy\nJohn Frink\nKirk Van Houten\nNick Riviera\nRuth Powers\nSeymore Skinner\nTimothy Lovejoy\n")),(0,i.kt)("p",null,"Replace the space with an underscore:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ pbpaste | sort | uniq | tr " " "_"\nAgnes_Skinner\nArtie_Ziff\nCletus_Spuckler\nHank_Scorpio\nHelen_Lovejoy\nJohn_Frink\nKirk_Van_Houten\nNick_Riviera\nRuth_Powers\nSeymore_Skinner\nTimothy_Lovejoy\n')),(0,i.kt)("p",null,"Then add the final part of the email address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ pbpaste | sort | uniq | tr " " "_" | sed \'s/$/@simpsons.com/\'\nAgnes_Skinner@simpsons.com\nArtie_Ziff@simpsons.com\nCletus_Spuckler@simpsons.com\nHank_Scorpio@simpsons.com\nHelen_Lovejoy@simpsons.com\nJohn_Frink@simpsons.com\nKirk_Van_Houten@simpsons.com\nNick_Riviera@simpsons.com\nRuth_Powers@simpsons.com\nSeymore_Skinner@simpsons.com\nTimothy_Lovejoy@simpsons.com\n')),(0,i.kt)("p",null,"This looks perfect! We can now put the transformed text back onto the clipboard:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pbpaste | sort | uniq | tr ' ' '_' | sed 's/$/@simpsons.com' | pbcopy\n")),(0,i.kt)("p",null,"All in all we have the following pipeline:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pbpaste")," - output the clipboard"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sort")," - order the output"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"uniq")," - deduplicate the rows"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"tr ' ' '_'")," - replace spaces with underscores"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sed /$/@simpsons.com")," - add the email domain to the end of the row")),(0,i.kt)("p",null,"Now you don't need to remember all of these commands. We'll be going into them in detail as the book continues, and in the next chapter we'll be looking into how you can get help directly in the shell to discover how commands work. The key concept is that you can treat the clipboard just like a file - reading from it, manipulating it, and writing back to it, without ever leaving the shell."),(0,i.kt)("p",null,"In fact - if you are on a Linux system, try running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cat /dev/clipboard\n")),(0,i.kt)("p",null,"You'll see the contents of the clipboard written out. In Linux almost everything can be represented as a file - the clipboard included! Like a lot of the other topics this is something we'll visit again in detail later."),(0,i.kt)("p",null,"We're also going to spend a lot of time later on looking at ",(0,i.kt)("em",{parentName:"p"},"pipelines")," in detail, so don't worry too much if this seems overwhelming at this stage!"),(0,i.kt)("p",null,"As you go through the book you'll be able to apply every technique you learn to the clipboard itself - hopefully you'll find this can save you a lot of time and make you even faster with your day to day work."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this chapter we learnt: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can copy and paste into the shell with keyboard commands which are the same, or at least very similar, to the commands you normally use."),(0,i.kt)("li",{parentName:"ul"},"Different operating systems access the clipboard in different ways, but we can work around this by creating an ",(0,i.kt)("inlineCode",{parentName:"li"},"alias")," command (which we'll see in detail later)"),(0,i.kt)("li",{parentName:"ul"},"We can use ",(0,i.kt)("inlineCode",{parentName:"li"},"pbcopy")," to copy and ",(0,i.kt)("inlineCode",{parentName:"li"},"pbpaste")," to paste."),(0,i.kt)("li",{parentName:"ul"},"We can 'chain' commands together with the ",(0,i.kt)("inlineCode",{parentName:"li"},"|")," (pipe) operator."),(0,i.kt)("li",{parentName:"ul"},"We can turn formatted text on the clipboard into plain text by just running ",(0,i.kt)("inlineCode",{parentName:"li"},"pbpaste | pbcopy"),"."),(0,i.kt)("li",{parentName:"ul"},"We can sort lines of text with the ",(0,i.kt)("inlineCode",{parentName:"li"},"sort")," command."),(0,i.kt)("li",{parentName:"ul"},"There is clearly a lot more we can do with text as we save hints of with the ",(0,i.kt)("inlineCode",{parentName:"li"},"uniq"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tr")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"sed")," commands - which we'll introduce in detail later."),(0,i.kt)("li",{parentName:"ul"},"You can treat the clipboard a bit like a file in the shell."),(0,i.kt)("li",{parentName:"ul"},"On Linux, lots of things can be represented as files - including the clipboard (which is accessed via the ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/clipboard")," file).")))}h.isMDXComponent=!0},2759:function(e,t,n){t.Z=n.p+"assets/images/windows-bash-options-ee40590c7b84ed3883d04b278c6cc605.png"},8835:function(e,t,n){t.Z=n.p+"assets/images/ctrl-v-on-ubuntu-6dd4bf41757a440a10f149f01068e3a6.png"},5189:function(e,t,n){t.Z=n.p+"assets/images/email_list_excel-c952ce039f3d370ecb4bc9c17d8ab815.png"},2216:function(e,t,n){t.Z=n.p+"assets/images/pbcopy-5efdcf7ad96fdbc4276d68c28deac528.png"},5919:function(e,t,n){t.Z=n.p+"assets/images/pbpaste-e53160a5f1cb41cd6b52db2407fc9bee.png"},5458:function(e,t,n){t.Z=n.p+"assets/images/strip-formatting-after-718d90c0c17b8c9c164bb4153944b7ad.png"},1107:function(e,t,n){t.Z=n.p+"assets/images/strip-formatting-before-9ecde3dedc50fcea493f01062986dcc3.png"}}]);