# EOM Control Surface
## Description
This is a set of files for configuring [Open Stage Control](https://openstagecontrol.ammd.net/), which then provides a browser app to control clips in [Bitwig Studio](https://www.bitwig.com/). For example, this can revive an old tablet to be a live looping control tool.

Image snapshot

The communication between [Open Stage Control](https://openstagecontrol.ammd.net/) and Bitwig is accomplished with the [Open Sound Control](https://en.wikipedia.org/wiki/Open_Sound_Control) (OSC) protocol. Bitwig Studio needs the [DrivenByMoss](http://www.mossgrabers.de/Software/Bitwig/Bitwig.html) extension, which (among other things) provides a OSC implementation to interface with Bitwig Studio. So, communications are bidirectional between:

Browser (HTTP) <-> (HTTP) Open Stage Control (OSC) <-> (OSC) DrivenByMoss <-> Bitwig Studio.

The EOM Control Surface app can potentially be configured to communicate with other OSC interfaces for other DAWs.

The app UI adapts to the display dimensions both vertically and horizontally.

## Features
- Play, Stop buttons
- Beats indicator (recognizes time signature)
- Track selection buttons
- Track stop buttons
- Clip button grid: Launch, Record
   -  If tapped, when:
      -  empty -> starts clip recording
      -  stopped -> start clip playing
      -  recording -> starts clip re-recording ????
      -  playing -> starts clip recording
- Buttons for new clips duration
- Sync clip slots button

## How to install
-  Install Open Stage Control
    -  These instructions assume you install it on the same computer that of the DAW, Let's call it "main PC".
   -  Configure port where Open Stage Control makes the web app available. Let's assume 8080.
   -  Configure port where Open Stage Control receives OSC commands from DrivenByMoss. Let's assume ????.
   -  Configure port where Open Stage Control sends OSC commands to DrivenByMoss. Let's assume ????.
   -  Download session and module files from this repository. ????
   -  Load the session???? file.
   -  Configure the ???? module.
   -  Start it
-  Test browser app
   -  First, try on the main PC using a browser to access: http://127.0.0.1:8080
   -  If it works, try on another computer or tablet on your local network. But there, you'll need to use the name or the IP of the main PC on the network, like http://mycomputer:8080. You'll need to research how to get that name or IP, because it depends on your setup. Should be easier to get the IP of the computer.
-  Install DrivenByMoss in Bitwig Studio.
   -  Configure port where DrivenByMoss receives OSC commands from Open Stage Control: ????
   -  Configure port where DrivenByMoss sends OSC commands to Open Stage Control: ????
- The app should now be communicating with BitWig.
