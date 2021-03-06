/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
var browser = require('cordova/platform');
var isConnected = false;

module.exports = {
    init: function(success, error) {
        console.log('RFIDAsciiProtocol Plugin init');
    },
    isConnected: function(success, error) {
        console.log('RFIDAsciiProtocol Plugin isConnected');
        return isConnected;
    },
    connect: function(success, error) {
        console.log('RFIDAsciiProtocol Plugin connect');
        setTimeout(function () {
            success("ER:Connecting");
            success("ER:Connected");
            isConnected = true;
            success("BC:62");
        }, 0);
    },
    disconnect: function(success, error) {
        console.log('RFIDAsciiProtocol Plugin disconnect');
        isConnected = false;
    },
    scan: function (success, error) {
        console.log('RFIDAsciiProtocol Plugin scan');
    }
};

require('cordova/exec').add('RFIDAsciiProtocol', module.exports);
