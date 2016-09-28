#!/usr/bin/env node

var opener = require('opener');

var packageName = process.argv[2];
if(packageName !== undefined && packageName.length > 0) {
  console.log('opening http://nodepackageviewer.com/#/?package=' + packageName);
  var inst = opener('http://nodepackageviewer.com/#/?package=' + packageName);

  inst.unref();
  inst.stdin.unref();
  inst.stdout.unref();
  inst.stderr.unref();
}

