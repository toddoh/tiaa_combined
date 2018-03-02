var express = require('express'),
 	jwt = require('jsonwebtoken'),
    crypto = require('crypto'),
    _ = require('lodash'),
    fetch = require('node-fetch');
    var request = require("request");
var router = express.Router();

router.route('/docx/:title/:path/:type').get(function(req, res, next){
    var d_title = req.params.title,
        d_path = req.params.path,
        d_type = req.params.type;

        console.log(req.params);
    var docx = require('docx');
    const styles = new docx.Styles();
    styles.createParagraphStyle('Heading1', 'Heading 1')
        .basedOn("Normal")
        .next("Normal")
        .quickFormat()
        .size(28)
        .bold()
        .spacing({after: 120});

    styles.createParagraphStyle('Heading2', 'Heading 2')
        .basedOn("Normal")
        .next("Normal")
        .quickFormat()
        .size(26)
        .bold()
        .underline('double', 'FF0000')
        .spacing({before: 240, after: 120});

    styles.createParagraphStyle('bolder', 'Bold')
        .bold()

    var d_content = [];
    var dataset_d = null;
    var dataset_url;
    if (process.env.NODE_ENV == 'dev') {
        dataset_url = 'http://localhost:3000/dataset/' + d_path + '/' + d_type + '.json';
    } else {
        dataset_url = 'https://thisisallabout.com/dataset/' + d_path + '/' + d_type + '.json';
    }
    console.log(dataset_url);
    var jsondata = JSON.parse(require('fs').readFileSync('../dataset/' + d_path + '/' + d_type + '.json', 'utf8'));
    
    dataset_d = jsondata;
    _.filter(dataset_d, function (set) {
        _.filter(set.data, function (d) {
            var item = {};
            item['header'] = d['header'];
            if (d.msg) item['msg'] = d['msg'];
            d_content.push(item);
            console.log(item);
        });
    });

    // Create document
    var doc = new docx.Document();
    
    doc.createParagraph(d_title).heading1();
    _.filter(d_content, function (data) {
        doc.createParagraph(data['header']).style('bolder');
        if (data['msg']) doc.createParagraph(data['msg']);
    });

    var exporter = new docx.ExpressPacker(doc, res);
    
    exporter.pack(d_type);
    return res.send(exporter);

});

router.route('/docx/:title/:path/:type').get(function(req, res, next){
    var d_title = req.params.title,
        d_path = req.params.path,
        d_type = req.params.type;

    var d_content = [];
    var dataset_d = null;
    var dataset_url;
    if (process.env.NODE_ENV == 'dev') {
        dataset_url = 'http://localhost:3000/dataset/' + d_path + '/' + d_type + '.json';
    } else {
        dataset_url = 'https://thisisallabout.com/dataset/' + d_path + '/' + d_type + '.json';
    }
    console.log(dataset_url);
    var jsondata = JSON.parse(require('fs').readFileSync('../dataset/' + d_path + '/' + d_type + '.json', 'utf8'));
    
    dataset_d = jsondata;
    _.filter(dataset_d, function (set) {
        _.filter(set.data, function (d) {
            var item = {};
            item['header'] = d['header'];
            if (d.msg) item['msg'] = d['msg'];
            d_content.push(item);
            console.log(item);
        });
    });

    doc.createParagraph(d_title).heading1();
    _.filter(d_content, function (data) {
        doc.createParagraph(data['header']).style('bolder');
        if (data['msg']) doc.createParagraph(data['msg']);
    });

    var exporter = new docx.ExpressPacker(doc, res);
    
    exporter.pack(d_type);
    return res.send(exporter);

});

module.exports.router = router;