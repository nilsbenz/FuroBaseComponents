#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');
const exec = require('child_process').exec;

let config;
// config öffnen
if (fs.existsSync('./furo.spec.conf.json')) {
  config = JSON.parse(fs.readFileSync('./furo.spec.conf.json'));
} else {
  console.log("furo.spec.conf.json not found, you can copy an example from " + path.normalize(__dirname + "/../"));
  process.exit(1);
}

function sh(command, arguments) {
  exec(command + " " + arguments.join(" "),
      (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }
      });
}

// create spec folder if not exist
if (!fs.existsSync(config.spec_dir)) {
  fs.mkdirSync(config.spec_dir);
}

// create tmp folder if not exist
if (!fs.existsSync("./__tmp")) {
  fs.mkdirSync("./__tmp");
}
let tmpdir = "./__tmp/";
let templateDir = config.custom_template_dir || __dirname + "/templates/make/";


// loop all packages
config.packages.forEach((pkg) => {
  console.log("checking" +  pkg);
  let dir = config.spec_dir + "/" + pkg;
  let name = pkg;
  let type = pkg[0].toUpperCase() + pkg.substr(1);

// create folder if not exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  let typefilename = dir + "/" + name + ".type.spec";
  let entityfilename = dir + "/" + name + "_entity.type.spec";
  let collectionfilename = dir + "/" + name + "_collection.type.spec";
  let servicefilename = dir + "/" + name + ".service.spec";

  // create minimal type if not exist
  if (!fs.existsSync(typefilename)) {
    // build tmp json as input for minimal type generation
    let tmptypejson = '{"name":"' + name + '","type":"' + type + '","description":"autogenerated","identity_type":"' + config.default_type_for_identities + '"}';
    // save to file
    fs.writeFileSync(tmpdir + "_tmptype.json", tmptypejson);
    // call the simple-generator to build
    sh("simple-generator", ["-d", tmpdir + "_tmptype.json", "-t", templateDir + "MinimalType.tmpl", ">", typefilename])
  }
  //todo: exclude list
  if (config.excludes.indexOf(pkg) == -1) {
    // create non existing entities
    if (!fs.existsSync(entityfilename)) {
      sh("simple-generator", ["-d", typefilename, "-t", templateDir + "EntityFromType.tmpl", ">", entityfilename])
    }
    // erstellen der noch nicht vorhandenen collectionen

    if (!fs.existsSync(collectionfilename)) {
      sh("simple-generator", ["-d", typefilename, "-t", templateDir + "CollectionFromType.tmpl", ">", collectionfilename])
    }

    // erstellen der noch nicht vorhandenen services
    if (!fs.existsSync(servicefilename)) {
      sh("simple-generator", ["-d", typefilename, "-t", templateDir + "ServiceFromType.tmpl", ">", servicefilename])
    }

  } else {
    console.log(pkg + " skipped, because it is in exclude list");
  }

});
