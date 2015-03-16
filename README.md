# Node Bin XT

A collection of Node.js scripts for use in a Linux-based terminal.

## Installation

To start using `node-bin-xt` scripts, just download
the module and install it globally via `npm`:

  `npm install node-bin-xt -g`

## Scripts

### minify.js

Removes all white space in the given file and creates a new file of the
same name with a `.min` extension in the current directory with the removed
white space. The original file is not affected.


#### Usage

```
$ minify -f <path-to-file>
```

#### Example

##### Before

`myFile.txt`
```
This is my text file. It has lots of spaces and new lines.
What a great text file.     It even has a few     tabs.
```

```
$ minify -f myFile.txt
```

##### After

`myFile.min.txt`
```
Thisismytextfile.Ithaslotsofspacesandnewlines.Whatagreattextfile.Itevenhasafewtabs.
```
