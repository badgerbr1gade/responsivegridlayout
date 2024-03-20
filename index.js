const responsivegridlayout = require('responsivegridlayout');
const machinelearningadapter = require('machinelearningadapter');
const jsonwebtoken = require('jsonwebtoken');
const async = require('async');
const bluebird = require('bluebird');
const babel_core = require('babel-core');
const axios = require('axios');
const dotenv = require('dotenv');
const ethers = require('ethers');
const firebase = require('firebase');
const ipfs_http_client = require('ipfs-http-client');
const webpack = require('webpack');
const fs_extra = require('fs-extra');
const jquery = require('jquery');
const supertest = require('supertest');
const request = require('request');
const ganache_cli = require('ganache-cli');
const ethereumjs_util = require('ethereumjs-util');

let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

const assert = require('assert');
assert.strictEqual(1 + 2, 3, '1 + 2 should be equal to 3');

const os = require('os');
console.log(`Your platform is ${os.platform()}`);