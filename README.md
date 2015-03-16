# Node Bin

A collection of Node.js scripts for use in a Linux-based terminal.

## Installation

To start using `node-bin` scripts, just download
the module and install it globally via `npm`:

  `npm install node-bin -g`

## Scripts

### minify.js

Removes all white space in the given file and creates a new file of the
same name with a `.min` extension in the current directory with the removed
white space. The original file is not affected.


#### Usage

```
$ node minify <path-to-file>
```

#### Example

##### Before

`myFile.min.txt`
```
This is my text file. It has lots of spaces and new lines.
What a great text file.     It even has a few     tabs.
```

```
$ node minify myFile.txt
```

##### After

`myFile.txt`
```
Thisismytextfile.Ithaslotsofspacesandnewlines.Whatagreattextfile.Itevenhasafewtabs.
```
